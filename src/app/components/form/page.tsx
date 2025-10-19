"use client";

import { useState } from "react";
import SimpleForm from "./SimpleForm";
import ReactForm from "./ReactForm";
import ZodForm from "./ZodForm";

export default function FormPage() {
  const [formType, setFormType] = useState<"simple" | "react-form" | "zod">(
    "simple"
  );

  return (
    <div className="flex flex-col gap-y-4">
      <label className="flex items-center gap-x-2">
        <input
          type="radio"
          name="simple"
          value="simple"
          onChange={() => setFormType("simple")}
          checked={formType === "simple"}
        />
        Simple
      </label>
      <label className="flex items-center gap-x-2">
        <input
          type="radio"
          name="react-form"
          value="react-form"
          onChange={() => setFormType("react-form")}
          checked={formType === "react-form"}
        />
        React Hook Form (with react-hook-form validation)
      </label>
      <label className="flex items-center gap-x-2">
        <input
          type="radio"
          name="zod"
          value="zod"
          onChange={() => setFormType("zod")}
          checked={formType === "zod"}
        />
        React Hook Form (with Zod validation)
      </label>
      {formType === "simple" && <SimpleForm />}
      {formType === "react-form" && <ReactForm />}
      {formType === "zod" && <ZodForm />}
    </div>
  );
}
