export async function submitToZapier(payload) {
  const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error(
      "Zapier webhook URL is not configured. Set NEXT_PUBLIC_ZAPIER_WEBHOOK_URL in .env.local and rebuild.",
    );
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Zapier webhook responded with status ${res.status}`);
  }

  return res;
}
