import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    redirect: 'home',
    component: () =>
        import ('../views/Main.vue'),
    children: [{
            path: 'home',
            name: 'home',
            component: () =>
                import ('../views/home/Home.vue'),
        },
        {
            path: 'user',
            name: 'user',
            component: () =>
                import ('../views/user/User.vue'),
        },
        {
            path: 'mall',
            name: 'mall',
            component: () =>
                import ('../views/mall/Mall.vue'),
        },

        {
            path: '/page1',
            name: 'page1',
            component: () =>
                import ('../views/others/Page1.vue'),
        },
        {
            path: '/page2',
            name: 'page2',
            component: () =>
                import ('../views/others/Page2.vue'),
        },
    ]
}]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router