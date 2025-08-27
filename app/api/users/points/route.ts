export async function GET() {
  // TODO: Return user points
  return new Response(JSON.stringify({ points: 0 }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
