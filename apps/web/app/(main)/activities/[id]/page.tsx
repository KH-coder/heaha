type Params = { id: string };

export default function ActivityDetailPage({ params }: { params: Params }) {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Activity {params.id}</h1>
    </main>
  );
}
