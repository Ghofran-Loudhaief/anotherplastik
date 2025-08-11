export async function POST(request: Request) {
  // In a real app: send email or store in DB
  // Here we just acknowledge receipt
  const formData = await request.formData()
  const payload = Object.fromEntries(formData.entries())
  console.log("Contact submission:", payload)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
