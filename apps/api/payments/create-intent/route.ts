export async function POST(req: Request) {
  return new Response(JSON.stringify({ clientSecret: "test_secret" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
