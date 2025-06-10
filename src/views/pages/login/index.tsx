import { LandingLayout } from "@/views/layouts/landing.layout";
import LoginForm from "./components/login-form";

export default function HomePage() {
  return (
    <LandingLayout title="Login">
      <LoginForm />
    </LandingLayout>
  );
}
