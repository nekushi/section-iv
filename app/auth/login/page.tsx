"use client";

import { loginSchema, type TLoginSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, type FieldValues } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FieldValues) => {
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
            <h2 className="text-xl font-medium">Login your account</h2>
            <p className="text-xs text-[#696969]">
              Login to the BSCS-4A's website
            </p>
          </div>
          <Link
            href={"./signup"}
            className="hover:underline underline-offset-2 active:text-[#626262]"
          >
            signup
          </Link>
        </div>
        <input
          {...register("username")}
          type="text"
          placeholder="username"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.username && (
          <p className="text-xs text-red-500 leading-0">{`${errors.username.message}`}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          className="border border-slate-300 p-2 rounded-lg focus:border-blue-500 focus:ring-orange-300 focus:ring-1 outline-none"
        />
        {errors.password && (
          <p className="text-xs text-red-500 leading-0">{`${errors.password.message}`}</p>
        )}
        <button
          disabled={isSubmitting}
          type="submit"
          className="bg-[#252525] px-2 py-3 rounded-lg text-[#FBFBFB] hover:bg-[#363636] active:bg-[#474747] disabled:bg-[#696969]"
        >
          Login
        </button>
      </form>
    </div>
  );
}
