import { AuthPanel } from "@/components/auth-panel";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <div className="relative min-h-96 p-6">
          <div className="space-y-4">
            <h1 className="text-xl font-bold">Welcome to Authy!</h1>
            <p className="text-muted-foreground">
              This is a public page accessible to everyone.
            </p>
          </div>
        </div>
        <AuthPanel session={session} />
      </div>
    </div>
  );
}
