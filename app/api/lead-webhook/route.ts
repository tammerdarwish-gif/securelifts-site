import { syncLead } from "@/lib/leadSync";

export async function POST(req: Request) {
  const configuredSecret = process.env.LEAD_WEBHOOK_SECRET;

  if (configuredSecret) {
    const incomingSecret = req.headers.get("x-securelifts-webhook-secret");

    if (incomingSecret !== configuredSecret) {
      return Response.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }
  }

  try {
    const body = await req.json();
    const result = await syncLead(body);

    if (result.fieldPulse.enabled && !result.fieldPulse.success) {
      return Response.json(
        {
          success: false,
          error: "FieldPulse sync failed",
          result,
        },
        { status: 502 }
      );
    }

    return Response.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error("LEAD WEBHOOK ERROR:", error);

    return Response.json(
      {
        success: false,
        error: "Lead webhook failed",
      },
      { status: 500 }
    );
  }
}
