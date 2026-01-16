import { useState } from "react";
import { AxiosError } from "axios";
import { useSignInForm } from "./useSignInForm";
import { signIn } from "../service-sign-in/api-sign-in";

export function useSignIn() {
  const [load, setLoad] = useState(false);
  const [response, setResponse] = useState("");

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
      if (error instanceof AxiosError) setResponse(error.response?.data);
    } finally {
      setLoad(false);
    }
  });

  return {
    event: { onSubmit },
    state: { load, response },
    form: { register, errors },
  };
}
