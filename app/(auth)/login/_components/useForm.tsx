"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/actions/auth";
import axios from "axios";
import jwt from "jsonwebtoken";

export const UseForm = ({ token }: { token: any }) => {
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
    checkBox: false,
    category: "user",
    merchant: "",
  });
  useEffect(() => {
    async function settingToken() {
      try {
        console.log("tokensdf",token)
        if (token) {
          
          const response = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY!, { algorithms: ['HS256'] });
          console.log("Verified token response:", response);
        }
      } catch (error) {
        console.error("Token verification failed:", error,process.env.NEXT_PUBLIC_SECRET_KEY);
      }
    }

    settingToken();
  }, [token]);

  // UseMutation to handle login
  const mutation = useMutation({
    mutationFn: loginUser,
    onError: (error) => {
      console.error("Login error:", error);
    },
    onSuccess: (data) => {
      console.log("Login successful:", data);
    },
  });

  // Handle form inputs
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  // Handle category change
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, category: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(formData); // Trigger the mutation
  };

  // Example of making an API call to check user data
  const handleSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/users");
      console.log("User data:", response);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <section id="login" className="bg-white rounded-lg md:p-5 p-2 md:px-10">
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="font-bold text-3xl text-center">Store Login</h1>
        <p className="opacity-60 font-medium -tracking-tighter leading-5 max-w-[60%] m-auto text-center">
          Hey, Enter your details to sign in to your store account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 grid grid-cols-2 gap-2 items-center">
        <select
          name="category"
          onChange={handleCategoryChange}
          className="p-3 outline-none rounded-md"
          value={formData.category}
        >
          <option value="user">User</option>
          <option value="merchant">Merchant</option>
        </select>

        {formData.category === "merchant" ? (
          <p className="col-span-2">Merchant-specific logic here</p>
        ) : (
          <input
            type="text"
            value={formData.merchant}
            name="merchant"
            placeholder="Admin credential..."
            onChange={handleInputChange}
            required
            className="outline-none border-[1px] rounded-md border-opacity-0 p-2 w-full"
          />
        )}

        <input
          type="text"
          name="credential"
          placeholder="Enter email or phone number"
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
          <p className="col-span-2">Merchant-specific logic here</p>
        ) : (
          <div className="flex items-center gap-2 mt-2 col-span-2">
            <input
              type="checkbox"
              name="checkBox"
              checked={formData.checkBox}
              onChange={handleInputChange}
              className="cursor-pointer"
            />
            <p className="text-[11px] font-semibold">Remember for 30 days</p>
          </div>
        )}

        <Button onClick={handleSave} className="col-span-2">
          Fetch Data
        </Button>

        <Link
          href="/forgot"
          className="text-sm text-blue-600 mt-2 hover:text-blue-900 font-semibold underline col-span-2 text-end"
        >
          Forgot Password
        </Link>

        <p className="mt-8 text-sm opacity-40 hover:opacity-90 duration-700 ease-linear cursor-pointer underline col-span-2">
          Having trouble signing in?
        </p>

        <Button
          type="submit"
          className="col-span-2 bg-[#F5C16B] hover:bg-[#F5C16B] hover:opacity-80 text-black w-full mt-10"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Logging in..." : "Sign in"}
        </Button>
      </form>

      <p className="text-sm mt-8 text-center opacity-60">---- Or Sign in with ----</p>

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
        <Link href="/auth/register" className="font-bold underline hover:opacity-60">
          Register Here
        </Link>
      </h4>
    </section>
  );
};
