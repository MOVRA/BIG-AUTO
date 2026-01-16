import { useState } from "react";
import { AxiosError } from "axios";
import { useSignInForm } from "./useSignInForm";
import { signIn } from "../service-sign-in/api-sign-in";
import { useStoreSignIn } from "../store-sign-in/useStoreSignIn";

export function useSignIn() {
  const [load, setLoad] = useState(false);
  const { setResponse } = useStoreSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useSignInForm();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoad(true);

      const call = await signIn(data);

      console.log(call);
    } catch (error) {
      if (error instanceof AxiosError)
        setResponse({ message: error.response?.data, user_id: null });
    } finally {
      setLoad(false);
    }
  });

  return {
    state: { load },
    event: { onSubmit },
    form: { register, errors },
  };
}
