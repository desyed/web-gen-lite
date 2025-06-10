import { html } from "hono/html";

const RootLayout = (props: { title: string; children: any }) =>
  html`<!doctype html>
    <html>
      <head>
      <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${props.title}</title>
       
      </head>
      <body>
        ${props.children}
      </body>
    </html>`

export default RootLayout;