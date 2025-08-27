export async function POST(req: Request) {
  // TODO: Implement user registration
  return new Response(JSON.stringify({ message: "register ok" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
