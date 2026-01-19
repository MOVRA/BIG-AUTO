import Cookies from "js-cookie";
import { useState } from "react";
import { AxiosError } from "axios";
import toast from "react-hot-toast";
import { useStoreSignIn } from "../store-sign-in/useStoreSignIn";
import { useSignInForm, useSignInOtpForm } from "./useSignInForm";
import { signIn, verifyOTP } from "../service-sign-in/api-sign-in";

export function useSignIn() {
  const [load, setLoad] = useState(false);
  const { setResponse, response } = useStoreSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm();

  const { register: registerOtp, handleSubmit: handleSubmitOtp } =
    useSignInOtpForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoad(true);

      const call = await signIn(data);

      setResponse({ user_id: call.data.user_id, message: call.data.message });

      toast.success(call.data.message);
    } catch (error) {
      if (error instanceof AxiosError)
        setResponse({ message: error.response?.data, user_id: null });
    } finally {
      setLoad(false);
    }
  });

  const onSubmitOtp = handleSubmitOtp(async (data) => {
    try {
      setLoad(true);

      if (response.user_id) {
        const call = await verifyOTP({
          otp_code: data.otp,
          user_id: response.user_id,
        });

        Cookies.set("ident_1", call?.refresh_token ?? "");
        Cookies.set("ident_2", call?.access_token ?? "");

        window.location.href = "/";
      }
    } catch (error) {
    } finally {
      setLoad(false);
    }
  });

  return {
    state: { load },
    event: { onSubmit, onSubmitOtp },
    form: { register, errors, registerOtp },
  };
}
