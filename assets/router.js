import { Router } from "@vaadin/router";

export function iniRouter() {
    const router = new Router(document.querySelector('#app'))

    router.setRoutes([
        {
            path: "/",
            component: "home-page",
            action: () => import("./pages/home-page")
        },
        {
            path: "/servicos",
            component: "servicos-page",
            action: () => import("./pages/servicos-page")
        },
    ])
        
    return router
}