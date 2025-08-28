export async function GET() {
  // TODO: Return current user profile
  return new Response(JSON.stringify({ profile: null }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function PUT(req: Request) {
  // TODO: Update user profile
  return new Response(JSON.stringify({ updated: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
