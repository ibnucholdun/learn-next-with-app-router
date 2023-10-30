import { register } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const POST = async (request: NextRequest) => {
  const req = await request.json();
  const res = await register(req);
  return NextResponse.json(
    { status: res.status, message: res.message },
    { status: res.statusCode }
  );
};

export { POST };
