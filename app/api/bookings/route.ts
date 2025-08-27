export async function GET() {
  // TODO: List bookings for current user
  return new Response(JSON.stringify({ items: [] }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request) {
  // TODO: Create new booking
  return new Response(JSON.stringify({ created: true }), {
    status: 201,
    headers: { "content-type": "application/json" },
  });
}
