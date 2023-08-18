import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  // revalidatePath("/");

  const tag = request.nextUrl.searchParams.get("tag");
  if (!tag) return NextResponse.json({ revalidated: false, now: Date.now() });

  revalidateTag(tag);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
