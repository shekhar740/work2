import { cookies } from "next/headers";
import { UseForm } from "./_components/useForm";

const LoginPage = () => {
  const token = cookies().get("authToken")?.value;
  return (
    <div className="w-full grid place-content-center h-screen">
      <div className="max-w-[600px]">
        <UseForm token={JSON.stringify(token)} />
      </div>
    </div>
  );
};

export default LoginPage;
