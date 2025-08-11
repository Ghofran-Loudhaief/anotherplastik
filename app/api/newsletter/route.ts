export async function POST(req: Request) {
  try {
    // In a real app, forward to your ESP. Here we just acknowledge.
    const body = await req.json().catch(() => ({}))
    console.log("Newsletter subscription:", body)
    return Response.json({ ok: true })
  } catch {
    return Response.json({ ok: false }, { status: 500 })
  }
}
