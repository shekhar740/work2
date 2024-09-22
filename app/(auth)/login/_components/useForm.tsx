"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/actions/auth";
import axios from "axios";

export const UseForm = () => {
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
    checkBox: false, // Changed to boolean
    category: "user",
    merchant : ""
  });

  // Use useMutation for handling the login request
  const mutation = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error("Login error:", error.message);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
      // Redirect or perform additional actions on success
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked, } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, category: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData); // Trigger the mutation
  };

  const handleSave = async(e)=>{
    e.preventDefault()
    try {
      const response = await axios.get("/api/users");
      console.log("cooies",response);
    } catch (error) {
      console.log("errrp",error);
    }
  }

  return (
    <section id="login" className="bg-white rounded-lg md:p-5 p-2 md:px-10">
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="font-bold text-3xl text-center">Store Login</h1>
        <p className="opacity-60 font-medium -tracking-tighter leading-5 max-w-[60%] m-auto text-center">
          Hey, Enter your details to sign in to your store account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-2 gap-2 items-center"
      >
        <select
          name="category"
          onChange={handleCategoryChange}
          className="p-3 outline-none rounded-md"
          value={formData.category} // Ensure controlled component
        >
          <option value="user">user</option>
          <option value="merchant">merchant</option>
        </select>
        {formData.category === "merchant" ? (
          <p>---</p>
        ) : (
          <input
            type="text"
            value={formData.merchant}
            name="merchant"
            placeholder="admin credential...."
            onChange={handleInputChange}
            required
            className="outline-none border-[1px] rounded-md border-opacity-0 p-2 w-full"
          />
        )}

        <input
          type="text"
          name="credential" // Retain single input for credential
          placeholder="Enter email or phone number or credential"
          onChange={handleInputChange}
          required
          className="col-span-2 outline-none border-[1px] rounded-md border-opacity-0 p-2 w-full"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
          className="col-span-2 outline-none border-[1px] rounded-md border-opacity-0 p-2 w-full mt-3"
        />

        {formData.category === "merchant" ? (
          <p>----</p>
        ) : (
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              name="checkBox" // Set name for checkbox
              checked={formData.checkBox}
              onChange={handleInputChange}
              className="cursor-pointer"
            />
            <p className="text-[11px] font-semibold">Remember for 30 days</p>
          </div>
        )}
<Button onClick={handleSave}>
  hwlo
</Button>
        <Link
          href="/forgot"
          className="text-sm text-blue-600 mt-2 hover:text-blue-900 font-semibold underline text-end"
        >
          Forgot Password
        </Link>

        <p className="mt-8 text-sm opacity-40 hover:opacity-90 duration-700 ease-linear cursor-pointer underline col-span-2">
          Having trouble signing in?
        </p>

        <Button
          type="submit"
          className="col-span-2 bg-[#F5C16B] hover:bg-[#F5C16B] hover:opacity-80 text-black w-full mt-10"
          disabled={mutation.isPending} // Disable button while loading
        >
          {mutation.isPending ? "Logging in..." : "Sign in"}
        </Button>
      </form>

      <p className="text-sm mt-8 text-center opacity-60">
        ---- Or Sign in with ----
      </p>

      <div className="mt-14 grid grid-cols-3 gap-2">
        <Button variant="ghost" className="border-2 flex gap-3">
          <FcGoogle /> <p>Google</p>
        </Button>
        <Button variant="ghost" className="border-2 flex gap-3">
          <FaGithub /> <p>Github</p>
        </Button>
        <Button variant="ghost" className="border-2 flex gap-3">
          <FaApple /> <p>Apple</p>
        </Button>
      </div>
      <h4 className="text-sm mt-14 text-center">
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="font-bold underline hover:opacity-60"
        >
          Register Here
        </Link>
      </h4>
    </section>
  );
};
