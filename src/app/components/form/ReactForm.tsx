"use client";

import { useForm } from "react-hook-form";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = useForm();

  const onSubmit = async () => {
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
          {...register("email", {
            required: "Email is required",
          })}
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
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be 8 characters" },
          })}
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
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (value) =>
              value === getValues("password") || "Passwords must match",
          })}
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
