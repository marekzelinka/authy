export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <p className="text-muted-foreground">
        This is a protected route, only visible to authenticated users.
      </p>
    </div>
  );
}
