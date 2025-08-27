export async function GET(_: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ id: params.id }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ id: params.id, updated: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  return new Response(JSON.stringify({ id: params.id, deleted: true }), {
    status: 200,
    headers: { "content-type": "application/json" },
  });
}
