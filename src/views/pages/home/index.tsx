import { FC } from "hono/jsx";
import { LandingLayout } from "@/views/components/layouts/landing.layout";

export const HomePage: FC = () => {
    return <LandingLayout>
        <div>HomePage</div> 
    </LandingLayout>
}