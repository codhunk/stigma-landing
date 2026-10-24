import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In production: forward to database (PostgreSQL/Supabase) or email provider (Resend/Loops)
    console.log("[Waitlist Signup]:", email);

    return NextResponse.json({
      success: true,
      message: "Successfully added to waitlist.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
