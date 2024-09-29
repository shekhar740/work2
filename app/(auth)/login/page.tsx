import axios from "axios";
import { UseForm } from "./_components/useForm";

const LoginPage = async () => {
  return (
    <div className="w-full grid place-content-center h-screen login-bg">
      <div className="max-w-[600px] shadow-sm rounded-md shadow-yellow-50">
        <UseForm  />
      </div>
    </div>
  );
};

export default LoginPage;
