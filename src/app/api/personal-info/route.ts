import { NextResponse } from "next/server";
import { getPersonalInfo } from "@/lib/queries";

export async function GET() {
  const data = await getPersonalInfo();
  return NextResponse.json(data);
}
