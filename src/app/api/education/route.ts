import { NextResponse } from "next/server";
import { getEducation } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getEducation();
  return NextResponse.json(data);
}
