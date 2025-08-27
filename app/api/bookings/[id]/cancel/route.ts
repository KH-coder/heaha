export async function POST(_: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ id: params.id, cancelled: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
