import { html } from "hono/html";

const RootLayout = (props: { title: string; children: any }) =>
  html`<!doctype html>
<html data-theme="dark">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${props.title}</title>
    <link rel="stylesheet" href="/static/styles.css">
    <script src="//unpkg.com/alpinejs" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
  </head>
  <body>
    ${props.children}
  </body>
</html>`

export default RootLayout;