import { Input } from "../../../../common/input";
import { Button } from "../../../../common/button";
import { useRegister } from "../../hooks-register/useRegister";
import { InputPassword } from "../../../../common/input-password";
import InputGroup from "../../../../common/input-group/InputGroup";
import AuthHelpInfo from "../../../../common/auth-help-info/AuthHelpInfo";

export default function FormRegister() {
  const { event, form, state } = useRegister();

  return (
    <form onSubmit={event.onSubmit} className="flex flex-col gap-8 bg-white">
      <div className="flex flex-col gap-4">
        <h1 className="font-normal text-5xl">Welcome, User</h1>
        <p className="text-sm text-[#9E9E9E]">
          Platform cepat untuk beli dan sewa mobil tanpa ribet.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <InputGroup>
          <label className="text-sm">Fullname</label>
          <Input
            {...form.register("name")}
            placeholder="Input fullname"
            className="h-8 placeholder:text-sm"
          />
          {form.errors.name && (
            <p className="text-sm text-red-500">{form.errors.name.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Email</label>
          <Input
            placeholder="Input Email"
            {...form.register("email")}
            className="h-8 placeholder:text-sm"
          />
          {form.errors.email && (
            <p className="text-sm text-red-500">{form.errors.email.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">City</label>
          <Input {...form.register("city")} />
          {form.errors.city && (
            <p className="text-sm text-red-500">{form.errors.city.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Address</label>
          <Input
            {...form.register("address")}
            placeholder="Input your address"
            className="h-8 placeholder:text-sm"
          />
          {form.errors.address && (
            <p className="text-sm text-red-500">
              {form.errors.address.message}
            </p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Phone Number</label>
          <Input
            {...form.register("phone")}
            className="h-8 placeholder:text-sm"
            placeholder="Input your phone number"
          />
          {form.errors.phone && (
            <p className="text-sm text-red-500">{form.errors.phone.message}</p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Password</label>
          <InputPassword
            {...form.register("password")}
            placeholder="Create your new password"
            inputClassName="h-8 placeholder:text-sm"
          />
          {form.errors.password && (
            <p className="text-sm text-red-500 text-wrap w-100">
              {form.errors.password.message}
            </p>
          )}
        </InputGroup>
        <InputGroup>
          <label className="text-sm">Confirm Password</label>
          <InputPassword
            placeholder="Input your password"
            {...form.register("confirmPassword")}
            inputClassName="h-8 placeholder:text-sm"
          />
          {form.errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {form.errors.confirmPassword.message}
            </p>
          )}
        </InputGroup>
      </div>
      <Button type="submit" className="w-100 h-10" variant="fill">
        {state.load ? "Signin Up . . ." : "Sign Up"}
      </Button>
      <AuthHelpInfo
        href="/sign-in"
        actionLabel="Sign In"
        info="Already have an account?"
      />
    </form>
  );
}
