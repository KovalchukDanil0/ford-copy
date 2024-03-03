"use client";

import data from "@/data.json";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useParams } from "next/navigation";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse<typeof data.data>> {
  const params: Params = useParams();
  const user = data.data.filter((x) => x.id.toString() === params.userId);

  return NextResponse.json(user);
}
