import axios from "axios";
import { UseForm } from "./_components/useForm";
import { Login } from "./_components/LoginPage";

const LoginPage = async () => {
  return (
    <div className="w-full bg-[#d9d9d9] h-screen">
      <div className="">
        {/* <UseForm  /> */}
        
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
