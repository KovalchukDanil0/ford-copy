import data from "@/data.json";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<typeof data>> {
  return NextResponse.json(data);
}
