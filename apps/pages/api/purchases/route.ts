export async function GET() {
  return new Response(JSON.stringify({ items: [] }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request) {
  return new Response(JSON.stringify({ created: true }), {
    status: 201,
    headers: { "content-type": "application/json" },
  });
}
