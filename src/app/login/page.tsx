import { AuthPanel } from "@/components/auth-panel";
import { LoginForm } from "@/components/login-form";

export default async function Login() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl overflow-hidden">
        <div className="flex min-h-96 items-center justify-center">
          <div className="w-full max-w-md space-y-4 p-6">
            <h2 className="text-2xl font-bold">Login</h2>
            <p className="text-muted-foreground">
              Please login to access your account.
            </p>
            <LoginForm />
          </div>
        </div>
        <AuthPanel />
      </div>
    </div>
  );
}
