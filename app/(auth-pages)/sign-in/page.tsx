import { FormMessage, Message } from "@/components/form-message";
import SignInForm from "./SignInForm";

export default async function Signin(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div>
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
      <SignInForm searchParams={searchParams}/>
  );
}
