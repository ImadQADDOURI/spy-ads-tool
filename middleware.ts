import { withAuth } from "next-auth/middleware";

export default withAuth;

export const config = { 
    matcher: ["/chilink","/chilink"] // you can't acces untel you Login
 };