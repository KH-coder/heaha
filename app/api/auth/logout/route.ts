export async function POST() {
  // TODO: Implement logout
  return new Response(JSON.stringify({ message: "logout ok" }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
