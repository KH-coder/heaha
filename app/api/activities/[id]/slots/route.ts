export async function GET(_: Request, { params }: { params: { id: string } }) {
  // TODO: Return available slots for activity id
  return new Response(JSON.stringify({ id: params.id, slots: [] }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function POST(req: Request, { params }: { params: { id: string } }) {
  // TODO: Create slot
  return new Response(JSON.stringify({ id: params.id, created: true }), {
    status: 201,
    headers: { "content-type": "application/json" },
  });
}
