import { LandingLayout } from "@/views/layouts/landing.layout";
import LoginForm from "./components/login-form";

export default function HomePage() {
  const attributes = {
    "x-data": "{ open: false }",
    "@click": "open = true",
    "x-show": "open",
  }
  return (
    <LandingLayout title="Login">
      <LoginForm/>
      <div {...attributes}>
    <button {...attributes}>Expand</button>
 
    <span {...attributes}>
        Content...
    </span>
</div>
    </LandingLayout>
  );
};
