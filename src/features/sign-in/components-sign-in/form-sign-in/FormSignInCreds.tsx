import { Input } from "../../../../common/input";
import { Button } from "../../../../common/button";
import { useSignIn } from "../../hooks-sign-in/useSignIn";
import { InputPassword } from "../../../../common/input-password";
import InputGroup from "../../../../common/input-group/InputGroup";
import AuthHelpInfo from "../../../../common/auth-help-info/AuthHelpInfo";

export default function FormSignInCreds() {
  const { event, form, state } = useSignIn();

  return (
    <form onSubmit={event.onSubmit} className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <InputGroup>
          <label>Email</label>
          <Input
            className="h-8"
            {...form.register("email")}
            placeholder="Input your email"
          />
          {form.errors.email && (
            <p className="text-sm text-red-500">{form.errors.email.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label>Password</label>
          <InputPassword
            inputClassName="h-8"
            {...form.register("password")}
            placeholder="Input your password"
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
  );
}
