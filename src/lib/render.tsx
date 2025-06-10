import { renderToReadableStream } from "hono/jsx/streaming"     
import { Context } from "hono";

export default function responseStreamJsx(c: Context, Component: any) {
    const stream = renderToReadableStream(Component)
    return c.body(stream, {
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            'Transfer-Encoding': 'chunked',
        },
    })
}
