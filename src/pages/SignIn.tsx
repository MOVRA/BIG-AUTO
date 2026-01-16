import FormSignInCreds from "../features/sign-in/components-sign-in/form-sign-in/FormSignInCreds";

export default function SignIn() {
  return (
    <div className="px-12 w-full flex flex-col justify-between py-9 bg-white h-screen">
      <img src="/big-auto-logo.svg" className="w-38 h-9 mb-24" />
      <div className="flex items-center justify-center w-full h-full">
        <FormSignInCreds />
      </div>
    </div>
  );
}
