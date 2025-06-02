import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/db";
import { openAPI } from "better-auth/plugins";
 
export const auth = betterAuth({
    emailAndPassword: {    
        enabled: true,
        autoSignIn: true,
    },
    // socialProviders: {
    //     google: {
    //         enabled: true,
    //     },
    // },
  database: prismaAdapter(prisma, {
    provider: "sqlite",
  }),
  plugins: [ 
        openAPI(), 
    ] 
});