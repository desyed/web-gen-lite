import { PropsWithChildren } from "hono/jsx";
import RootLayout from "./root.layout";
import Header from "@/views/components/landing/header";
import Footer from "@/views/components/landing/footer";

export function LandingLayout({
  title,
  children,
}: PropsWithChildren<{
  title: string;
}>) {
  return (
    <RootLayout title={title}>
      <div class="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-white dark:bg-gray-900">{children}</main>
        <Footer />
      </div>
    </RootLayout>
  );
}
