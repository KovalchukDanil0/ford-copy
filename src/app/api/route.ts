import data from "@/data.json";
import { NextResponse } from "next/server";

interface GETInterface {
  data: { hello: string };
}

export async function GET(): Promise<NextResponse<GETInterface>> {
  return NextResponse.json({ data: { hello: "hello" } });
}

export async function POST(
  request: Request,
): Promise<NextResponse<typeof data>> {
  const newData: typeof data = await request.json();
  return NextResponse.json(newData);
}
