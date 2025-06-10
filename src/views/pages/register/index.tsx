import { LandingLayout } from "@/views/layouts/landing.layout";
import RegisterForm from "./components/register-form";

export default function HomePage() {
  return (
    <LandingLayout title="Register">
      <RegisterForm/>
    </LandingLayout>
  );
};
