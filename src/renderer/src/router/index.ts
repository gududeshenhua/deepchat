import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/chat'
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import('@/views/ChatTabView.vue'),
      meta: {
        titleKey: 'routes.chat',
        icon: 'lucide:message-square'
      }
    },
    {
      path: '/script',
      name: 'script',
      component: () => import('@/views/Script.vue'),
      meta: {
        titleKey: 'routes.script',
        icon: 'lucide:message-square'
      }
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('@/views/SetUp.vue'),
      meta: {
        titleKey: 'routes.welcome',
        icon: 'lucide:message-square'
      }
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: () => import('@/views/WelcomeView.vue'),
      meta: {
        titleKey: 'routes.welcome',
        icon: 'lucide:message-square'
      }
    },
    ...(import.meta.env.VITE_ENABLE_PLAYGROUND === 'true'
      ? [
          {
            path: '/playground',
            name: 'playground',
            component: () => import('@/views/PlaygroundTabView.vue'),
            meta: {
              titleKey: 'routes.playground',
              icon: 'lucide:flask-conical'
            }
          }
        ]
      : []),
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
  ]
})

export default router
