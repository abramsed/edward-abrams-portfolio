import { NextResponse } from "next/server";
import { getExperiences } from "@/lib/queries";

export async function GET() {
  const data = await getExperiences();
  return NextResponse.json(data);
}
