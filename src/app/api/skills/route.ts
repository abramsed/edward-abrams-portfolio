import { NextResponse } from "next/server";
import { getSkillCategories } from "@/lib/queries";

export async function GET() {
  const data = await getSkillCategories();
  return NextResponse.json(data);
}
