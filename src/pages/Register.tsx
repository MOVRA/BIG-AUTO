import FormRegister from "../features/register/components-register/form-register/FormRegister";

export default function Register() {
  return (
    <div className="px-12 w-full flex flex-col justify-between py-9 bg-white">
      <img src="/big-auto-logo.svg" className="w-38 h-9 mb-24" />
      <div className="flex items-center justify-center w-full h-full">
        <FormRegister />
      </div>
    </div>
  );
}
