import { NextResponse } from "next/server";
import { getSkillCategories } from "@/lib/queries";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await getSkillCategories();
  return NextResponse.json(data);
}
