// https://www.youtube.com/watch?v=u6PQ5xZAv7Q&list=PL9nQf7VD0sNGkwtTZ1by4AZzXRedGjCUS&index=28

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signUpSchema, type SignUpSchema } from "./types";

export default function ZodForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<SignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: SignUpSchema) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
    });
    const responseData = await response.json();
    if (!response.ok) {
      alert("Submitting form failed");
      return;
    }

    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", { message: errors.email });
      }
      if (errors.password) {
        setError("password", { message: errors.password });
      }
      if (errors.confirmPassword) {
        setError("confirmPassword", { message: errors.confirmPassword });
      }
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-6 bg-white bg-opacity-60 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="text-gray-700 px-6 py-4 rounded-lg bg-white bg-opacity-80 text-lg placeholder-gray-400 focus:outline-none border-1 border-gray-300"
        />
        {errors.email && (
          <p className="text-red-500 bg-red-200 rounded-md px-4 py-2">
            {errors.email.message as string}
          </p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="text-gray-700 px-6 py-4 rounded-lg bg-white bg-opacity-80 text-lg placeholder-gray-400 focus:outline-none border-1 border-gray-300"
        />
        {errors.password && (
          <p className="text-red-500 bg-red-200 rounded-md px-4 py-2">
            {errors.password.message as string}
          </p>
        )}
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
          className="text-gray-700 px-6 py-4 rounded-lg bg-white bg-opacity-80 text-lg placeholder-gray-400 focus:outline-none border-1 border-gray-300"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 bg-red-200 rounded-md px-4 py-2">
            {errors.confirmPassword.message as string}
          </p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white text-lg font-semibold py-3 rounded-lg transition-colors cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
