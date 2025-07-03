"use client";

import { signupSchema, type TSignupSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignupSchema>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: TSignupSchema) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/4 p-8 flex flex-col space-y-4"
      >
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium">Create your account</h2>
            <p className="text-xs text-[#696969]">
              Create an account and continue to login.
            </p>
          </div>
          <Link
            href={"./login"}
            className="hover:underline underline-offset-2 active:text-[#626262]"
          >
            login
          </Link>
        </div>
        <input
          {...register("firstName")}
          type="text"
          placeholder="First name"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.firstName && (
          <p className="text-red-500 text-xs leading-1">{`${errors.firstName.message}`}</p>
        )}
        <input
          {...register("lastName")}
          type="text"
          placeholder="Last name"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.lastName && (
          <p className="text-red-500 text-xs leading-1">{`${errors.lastName.message}`}</p>
        )}
        <input
          {...register("username")}
          type="text"
          placeholder="Username"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.username && (
          <p className="text-red-500 text-xs leading-1">{`${errors.username.message}`}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-xs leading-1">{`${errors.password.message}`}</p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Password"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-xs leading-1">{`${errors.confirmPassword.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-[#252525] px-2 py-3 rounded-lg text-[#FBFBFB] hover:bg-[#363636] active:bg-[#474747] disabled:bg-[#696969]"
        >
          Create account
        </button>
      </form>
    </div>
  );
}
