import { Input } from "../../../../common/input";
import { Button } from "../../../../common/button";
import { useSignIn } from "../../hooks-sign-in/useSignIn";
import { InputPassword } from "../../../../common/input-password";
import InputGroup from "../../../../common/input-group/InputGroup";
import { useStoreSignIn } from "../../store-sign-in/useStoreSignIn";
import AuthHelpInfo from "../../../../common/auth-help-info/AuthHelpInfo";

export default function FormSignInCreds() {
  const { event, form, state } = useSignIn();
  const { response } = useStoreSignIn();

  return !response.user_id ? (
    <form
      onSubmit={event.onSubmit}
      className="flex flex-col justify-center gap-8 h-143.5"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-normal text-5xl">Welcome, User</h1>
        <p className="text-sm text-[#9E9E9E]">
          Platform cepat untuk beli dan sewa mobil tanpa ribet.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <InputGroup>
          <label className="text-sm">Email</label>
          <Input
            {...form.register("email")}
            placeholder="Input your email"
            className="h-8 placeholder:text-sm"
          />
          {form.errors.email && (
            <p className="text-sm text-red-500">{form.errors.email.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Password</label>
          <InputPassword
            {...form.register("password")}
            placeholder="Input your password"
            inputClassName="placeholder:text-sm h-8"
          />
          {form.errors.password && (
            <p className="text-sm text-red-500">
              {form.errors.password.message}
            </p>
          )}
        </InputGroup>
      </div>
      <Button disabled={state.load} className="w-100 h-10" variant="fill">
        {state.load ? "Signin In . . ." : "Sign In"}
      </Button>
      <AuthHelpInfo
        href="/register"
        actionLabel="Sign Up"
        info="Don't have an account?"
      />
    </form>
  ) : (
    <form
      onSubmit={event.onSubmitOtp}
      className="flex flex-col justify-center gap-8 h-143.5"
    >
      <div className="flex flex-col gap-4">
        <h1 className="font-normal text-5xl">Welcome, User</h1>
        <p className="text-sm text-[#9E9E9E]">
          masukkan otp yang telah dikirimkan.
        </p>
      </div>
      <InputGroup>
        <label className="text-sm">OTP</label>
        <Input
          {...form.registerOtp("otp")}
          placeholder="Input OTP"
          className="h-8 placeholder:text-sm"
        />
      </InputGroup>
      <Button disabled={state.load} className="w-100 h-10" variant="fill">
        {state.load ? "Submitting OTP . . ." : "Submit OTP"}
      </Button>
    </form>
  );
}
