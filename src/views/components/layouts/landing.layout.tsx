import { FC } from "hono/jsx";
import RootLayout from "./root.layout";

export const LandingLayout: FC = ({ children }) => {
    return <RootLayout title="Landing">
        {children}</RootLayout>
}