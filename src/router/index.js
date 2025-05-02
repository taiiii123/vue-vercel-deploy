import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login.vue'
import Welcome from '../components/Welcome.vue'

// ログイン状態をチェックするガード
const authGuard = (to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated')

    if (to.name !== 'Login' && !isAuthenticated) {
        // 認証されていない場合、ログインページにリダイレクト
        next({ name: 'Login' })
    } else if (to.name === 'Login' && isAuthenticated) {
        // すでに認証されている場合、ウェルカムページにリダイレクト
        next({ name: 'Welcome' })
    } else {
        // それ以外の場合は通常の遷移
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/welcome',
        name: 'Welcome',
        component: Welcome,
        beforeEnter: authGuard
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

// グローバルナビゲーションガードを追加
router.beforeEach(authGuard)

export default router
