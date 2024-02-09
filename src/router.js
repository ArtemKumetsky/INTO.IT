import { createRouter, createWebHashHistory } from "vue-router";

import mainPage from "@/components/mainpage.vue";
import courseLanding from "@/components/course-landing.vue";

export default createRouter({
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    },
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: mainPage},
        {path: '/course/:name', component: courseLanding}
    ]
})