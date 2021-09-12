import http from "http";
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";

// require("dotenv").config();

const { PORT } = "4000";
const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    context: async (ctx) => {
        if (ctx.req) {
            return {
                loggedInUser: await getUser(ctx.req.headers.token),
            };
        }
        const {
            connection: { context },
        } = ctx;
        return {
            loggedInUser: context.loggedInUser,
        };
    },
    subscriptions: {
        onConnect: async ({ token }) => {
            if (!token) {
                throw new Error("You can't listen.");
            }
            const loggedInUser = await getUser(token);
            return {
                loggedInUser,
            };
        },
    },
});

const app = express();
app.use(logger("dev"));
apollo.applyMiddleware({ app });
app.use("/static", express.static("uploads"));

const httpServer = http.createServer(app);
apollo.installSubscriptionHandlers(httpServer);

httpServer.listen("4000", () => {
    console.log("🚀Server is running on http://localhost:4000 ✅");
});
