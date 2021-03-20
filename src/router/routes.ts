import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/characters/my', component: () => import('pages/MyCharacters.vue') },
      { path: '/characters/builder', component: () => import('pages/CharacterBuilder.vue') },
      { path: '/characters/builder/new', component: () => import('pages/NewCharacter.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
