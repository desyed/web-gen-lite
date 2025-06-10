import { renderToReadableStream } from "hono/jsx/streaming"     
import { Context } from "hono";
import { FC } from "hono/jsx";

export default function responseStreamJsx(c: Context, Component: FC) {
    const stream = renderToReadableStream(<Component />)

    return c.body(stream, {
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            'Transfer-Encoding': 'chunked',
        },
    })
}
