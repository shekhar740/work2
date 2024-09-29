"use client";
import React, { useEffect, useMemo, useState } from "react";
import { FaApple, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { inputFields } from "@/data/form";
import { toast } from "@/hooks/use-toast";
import Image from "next/image";
import { useSendOtp } from "@/hook/send-api";
import { comparePassword } from "@/utils/share-code";
import { ManualFormData } from "@/types/type";
import { useMutation } from "@tanstack/react-query";
import { Registeruser } from "@/actions/auth";
import { handleError } from "@/hook/erro";
import { useRouter } from "next/navigation";
import { fetchUserInfo } from "@/hook/api-call";

export const RegisterPage = () => {
  const [logo, setLogo] = useState<File>();
  const [formData, setFormData] = useState<ManualFormData>({
    shopName: "",
    businessType: "retail",
    shopAddress: "",
    username: "",
    merchantId: "",
    email: "",
    mobile: "",
  });
  const [storePhotos, setStorePhotos] = useState<File[]>([]);
  const [otp, setOtp] = useState<string | undefined>("");
  const [otpValue, setOtpValue] = useState<string>("Send Otp");
  const [verify, setVerify] = useState(false);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const { otpSend, isLoading, response } = useSendOtp({
    email: formData.email,
  });
  const navigation = useRouter();1

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setVerify(false);
  }, [formData.email]);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLogo(file);
  };

  const handleStorePhotosChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStorePhotos(Array.from(e.target.files || []));
  };

  const mutation = useMutation({
    mutationFn: Registeruser,
    onSuccess: (data) => {
      navigation.push("/login");
     console.log("successflly login")
    },
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (minutes > 0 || seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else {
            return 0;
          }
        });
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [seconds, minutes]);

  const verifyBackendOtp = async () => {
    const verification = await comparePassword(otp as string, response.hashOtp);
    setVerify(verification);
  };

  const sendOtpUser = async () => {
    if (!formData.email) {
      return toast({
        title: "form submission",
        description: "please fill form details",
      });
    }
    if (otpSend) {
      await otpSend();
    }
  };

  useEffect(() => {
    if (response) {
      setMinutes(0);
      setSeconds(50);
      if (!isLoading) {
        setOtpValue("Resend OTP");
      }
    }
  }, [response, isLoading]);
  const handleSubmitCode = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a new FormData object
    const data = new FormData();

    // Append files
    if (logo) {
      data.append("logo", logo);
    }

    storePhotos.forEach((photo) => {
      data.append("storePhotos", photo);
    });

    // Append other form fields
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key as keyof ManualFormData]);
    });

    const error = handleError(verify, formData);
    if (error) {
      toast({ title: error.title, description: error.body });
      return; // Stop execution if there's an error
    }
    if(!logo || storePhotos.length <3){
      toast({title:"Form Valdiation",description:"storePhotos length should be three or log is Required"})
      return;
    }
    // Call mutation with FormData
    mutation.mutate(data);
  };
  return (
    <section id="login" className="bg-white w-[600px] rounded-lg px-5 p-2">
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="main-header text-center">Join New Business</h1>
        <p className="opacity-60 font-medium -tracking-tighter leading-5 max-w-[60%] m-auto text-center">
          Hey, Register to manage your wholesale accounts and streamline your
          business operations!
        </p>
      </div>
      <form
        className="mt-5 relative grid grid-cols-2 gap-3"
        onSubmit={handleSubmitCode}
      >
        <div className="flex absolute right-0 -top-32 w-20 rounded-full h-full">
          <label htmlFor="dropzone-file">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              {logo ? (
                <Image
                  src={URL.createObjectURL(logo)}
                  alt="logo"
                  width={50}
                  height={50}
                  className="object-cover rounded-xl w-52 h-20"
                />
              ) : (
                <div className="flex flex-col items-center justify-center w-20 h-20 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-[10px] font-semibold">Logo/card</p>
                </div>
              )}
            </div>
            <input
              onChange={handleLogoChange}
              id="dropzone-file"
              type="file"
              name="logo"
              className="hidden"
            />
          </label>
        </div>

        {inputFields.map((field) => (
          <input
            key={field.name}
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={formData[field.name]}
            onChange={handleInputChange}
            className="outline-none border-[1px] rounded-md border-opacity-0 p-2"
          />
        ))}

        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleInputChange}
          className="rounded-md px-2"
        >
          <option value="retail" selected>
            Retail
          </option>
          <option value="wholesale">Wholesale</option>
          <option value="services">Services</option>
          <option value="manufacturing">Manufacturing</option>
        </select>

        <textarea
          name="shopAddress"
          placeholder="Shop address..."
          value={formData.shopAddress}
          onChange={handleInputChange}
          className="outline-none border-[1px] rounded-md border-opacity-0 p-2 col-span-2"
        ></textarea>

        <input
          onChange={handleStorePhotosChange}
          id="shop-photo"
          type="file"
          name="storePhotos"
          accept="image/png, image/jpeg, image/jpg"
          multiple
          className="border-[1px] rounded-md p-2"
        />
        <div>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            name="otp"
            maxLength={6}
            readOnly={verify}
            placeholder="Enter OTP..."
            className="border-b-2 border-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 w-full px-2 py-1 text-center text-lg"
          />
        </div>

        <Button variant="outline" onClick={() => console.log(storePhotos)}>
          View Images
        </Button>

        <div>
          {!verify ? (
            otpValue === "Resend OTP" ? (
              <div className="grid grid-cols-2 gap-4 justify-between">
                <Button
                  variant="link"
                  disabled={minutes !== 0 || seconds !== 0} // Disable when countdown is active
                  onClick={sendOtpUser}
                >
                  {minutes !== 0 || seconds !== 0
                    ? `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
                    : otpValue}
                </Button>
                <div>
                  {otp?.length !== 6 ? (
                    <p>Please enter OTP</p>
                  ) : (
                    <Button variant="destructive" onClick={verifyBackendOtp}>
                      Verify
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <Button
                type="button"
                variant="link"
                onClick={sendOtpUser}
                disabled={isLoading}
              >
                {isLoading ? "sending..." : "send Otp"}
              </Button>
            )
          ) : (
            <div>Verify successful</div>
          )}
        </div>

        <p className="mt-8 col-span-2 text-sm opacity-40 hover:opacity-90 duration-700 ease-linear cursor-pointer underline">
          Having trouble signing in?
        </p>

        <Button
          type="submit"
          className="bg-[#F5C16B] col-span-2 hover:bg-[#F5C16B] hover:opacity-80 text-black w-full mt-10"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Registering.." : "Create new Account"}
        </Button>
      </form>

      <p className="mt-5 text-center text-xs font-medium">
        Already have an account? <Link href="/signin">Sign In</Link>
      </p>

      <p className="text-center opacity-30 mt-2">or</p>

      <div className="social mt-5 flex flex-col gap-2 mb-3">
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FcGoogle className="text-lg" />
          Sign in with Google
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FaGithub className="text-lg" />
          Sign in with Github
        </Button>
        <Button
          variant="outline"
          className="w-full flex items-center justify-center gap-2"
        >
          <FaApple className="text-lg" />
          Sign in with Apple
        </Button>
      </div>
    </section>
  );
};
