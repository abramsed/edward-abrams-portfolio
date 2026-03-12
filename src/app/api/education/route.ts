import { NextResponse } from "next/server";
import { getEducation } from "@/lib/queries";

export async function GET() {
  const data = await getEducation();
  return NextResponse.json(data);
}
