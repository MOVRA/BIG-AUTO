import { useRegisterForm } from "./useRegisterForm";

export function useRegister() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm();

  const onSubmit = handleSubmit(async () => {});

  return { form: { control, register, errors }, event: { onSubmit } };
}
