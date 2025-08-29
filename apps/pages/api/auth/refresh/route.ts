export async function POST() {
  // TODO: Implement token refresh
  return new Response(JSON.stringify({ message: "refresh ok" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
