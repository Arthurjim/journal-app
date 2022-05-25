import { createRouter, createWebHashHistory } from "vue-router";
import daybookRouter from "../modules/daybook/router";
import authRouter from "../modules/auth/router";
import isAuthenticatedGuard from "../modules/auth/router/auth-guard";
import isLogoutGuard from "../modules/auth/router/logout-guard";
const routes = [
    {
        path: "/daybook",
        beforeEnter:[isAuthenticatedGuard],
        ...daybookRouter,
    },
    {
        path: "/auth",
        beforeEnter:[isLogoutGuard],

        ...authRouter
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
