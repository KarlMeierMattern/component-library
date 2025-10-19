// https://www.youtube.com/watch?v=u6PQ5xZAv7Q&list=PL9nQf7VD0sNGkwtTZ1by4AZzXRedGjCUS&index=28

import { NextRequest, NextResponse } from "next/server";
import { signUpSchema } from "@/app/components/form/types";

export async function POST(request: NextRequest) {
  const body: unknown = await request.json();
  const result = signUpSchema.safeParse(body); // server side zod validation

  let zodErrors = {};

  if (!result.success) {
    result.error.issues.forEach((issue) => {
      zodErrors = { ...zodErrors, [issue.path[0]]: issue.message };
    });
  }

  return NextResponse.json(
    Object.keys(zodErrors).length > 0
      ? { errors: zodErrors }
      : { success: true }
  );
}
