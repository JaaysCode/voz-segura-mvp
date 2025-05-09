import { FormMessage, Message } from "@/components/form-message";
import SignUpForm from "./SignUpForm";

export default async function Signup(props: {
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
      <SignUpForm searchParams={searchParams}/>
  );
}
