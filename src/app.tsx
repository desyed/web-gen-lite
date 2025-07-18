import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { auth } from "@/lib/auth";
import responseStreamJsx from "./lib/render";
import HomePage from "./views/pages/home";
import LoginPage from "./views/pages/login";
import RegisterPage from "./views/pages/register";
import { z } from "zod";

const app = new Hono<{
  Variables: {
    user: typeof auth.$Infer.Session.user | null;
    session: typeof auth.$Infer.Session.session | null;
  };
}>();

// Response any routes if file exist in public directory
app.use("*", serveStatic({ root: "./public" }));

// Response any routes start with static if file exist in static directory
app.use("/static/*", serveStatic({ root: "./" }));

app.use("*", async (c, next) => {
  const session = await auth.api.getSession({ headers: c.req.raw.headers });

  if (!session) {
    c.set("user", null);
    c.set("session", null);
    return next();
  }

  c.set("user", session.user);
  c.set("session", session.session);
  return next();
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

// Home Page
app.get("/", (c) => {
  return responseStreamJsx(c, <HomePage />);
});

// Login Page
app.get("/login", (c) => {
  return responseStreamJsx(c, <LoginPage />);
});

// Handle Login
app.post("/login", async (c) => {
  const formData = await c.req.parseBody();
  return c.redirect("/login");
});

// Register Page
app.get("/register", (c) => {
  console.log(c.req.param);
  return responseStreamJsx(c, <RegisterPage />);
});


// Handle Registration
app.post("/register", async (c) => {
  const formData = await c.req.parseBody();
  console.log(formData.email);

  const error = null;

  // if()

  return c.redirect(`/register`);
});

export default app;
