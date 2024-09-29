"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaApple } from "react-icons/fa";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { loginUser } from "@/actions/auth";
import axios from "axios";

export const UseForm = () => {
  const [formData, setFormData] = useState({
    credential: "",
    password: "",
    checkBox: false,
    category: "user",
    merchantId: "",
  });

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
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

  // Fetch user data (assuming this is your auth endpoint)
  const {
    data: values,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["auth"],
    queryFn: () => axios.get("/api/auth").then((res) => res.data),
  });
  useEffect(() => {
    if (values) {
      setFormData((prev) => ({
        ...prev,
        credential: values?.decoded?.email || "",
        password: values?.decoded?.password || "",
        category: values?.decoded?.hasOwnProperty("admin")
          ? "user"
          : "merchant" || "",
          merchantId : values.decoded?.admin
      }));
    }
  }, [values]);


  return (
    <section id="login" className="bg-white rounded-lg md:p-5 p-2 md:px-10">
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="font-bold text-3xl text-center">Store Login</h1>
        <p className="opacity-60 font-medium leading-5 max-w-[60%] m-auto text-center">
          Hey, Enter your details to sign in to your store account
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-5 grid grid-cols-2 gap-2 items-center"
      >
        {values?.category !== "merchant" && (
          <>
            <select
              name="category"
              onChange={handleCategoryChange}
              className="p-3 outline-none rounded-md"
              value={formData.category}
            >
              <option value="merchant">Merchant</option>
              <option value="user">User</option>
            </select>
            {
              formData.category === "user" && (
                <input
                type="text"
                value={formData.merchantId}
                name="merchantId"
                placeholder="Merchant credential..."
                onChange={handleInputChange}
                required
                className="outline-none border-[1px] rounded-md p-2 w-full"
              />
              )
            }
          </>
        )}

        <input
          type="text"
          name="credential"
          placeholder="Enter email or phone number"
          value={formData.credential}
          onChange={handleInputChange}
          required
          className="col-span-2 outline-none border-[1px] rounded-md p-2 w-full"
        />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
          className="col-span-2 outline-none border-[1px] rounded-md p-2 w-full mt-3"
        />

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

        <Link
          href="/forgot"
          className="text-sm text-blue-600 mt-2 hover:text-blue-900 font-semibold underline col-span-2 text-end"
        >
          Forgot Password
        </Link>

        <Button
          type="submit"
          className="col-span-2 bg-[#F5C16B] hover:bg-[#F5C16B] hover:opacity-80 text-black w-full mt-10"
          disabled={mutation.isPending}
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
