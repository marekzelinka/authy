import { AuthPanel } from "@/components/auth-panel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <div className="relative min-h-96 p-6">
          <div className="space-y-4">
            <h1 className="text-brand-secondary text-xl font-bold">
              Welcome to Authy!
            </h1>
            <p className="text-brand-secondary/70">
              This is a public page accessible to everyone.
            </p>
          </div>
        </div>
        <AuthPanel />
      </div>
    </div>
  );
}
