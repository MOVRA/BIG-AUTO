import { useState } from "react";
import { useRegisterForm } from "./useRegisterForm";
import { registerUser } from "../service-register/api-register";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

export function useRegister() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const [load, setLoad] = useState(false);

  const onSubmit = handleSubmit(
    async (data) => {
      try {
        const res = await registerUser(data);

        toast.success(res.message);

        setLoad(true);
      } catch (error) {
        if (error instanceof AxiosError) toast.error(error.message);
      } finally {
        setLoad(false);
      }
    },
    (e) => console.log(e),
  );

  return {
    form: { control, register, errors },
    event: { onSubmit },
    state: { load },
  };
}
