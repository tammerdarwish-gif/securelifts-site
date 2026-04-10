import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return Response.json(
        {
          success: false,
          error: "Missing API key",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const {
      name,
      phone,
      email,
      address,
      city,
      zip,
      service,
      date,
      time,
      message,
    } = body ?? {};

    const result = await resend.emails.send({
      from: "SecureLifts <bookings@send.securelifts.com>",
      to: "info@securelifts.com",
      subject: "New Service Request - SecureLifts",
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin-bottom: 16px;">New Service Request</h2>
          <p><strong>Name:</strong> ${name || ""}</p>
          <p><strong>Phone:</strong> ${phone || ""}</p>
          <p><strong>Email:</strong> ${email || ""}</p>
          <p><strong>Service Address:</strong> ${address || ""}</p>
          <p><strong>City:</strong> ${city || ""}</p>
          <p><strong>ZIP Code:</strong> ${zip || ""}</p>
          <p><strong>Service:</strong> ${service || ""}</p>
          <p><strong>Preferred Date:</strong> ${date || ""}</p>
          <p><strong>Preferred Time:</strong> ${time || ""}</p>
          <p><strong>Message:</strong> ${message || ""}</p>
        </div>
      `,
    });

    if (result.error) {
      console.error("RESEND API ERROR:", result.error);

      return Response.json(
        {
          success: false,
          error: result.error.message || "Resend failed to send email",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      result,
    });
  } catch (error: unknown) {
    console.error("FULL SEND ERROR:", error);

    let errorMessage = "Unknown email error";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return Response.json(
      {
        success: false,
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}