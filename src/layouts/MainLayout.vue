<template>
  <q-layout view="lHr lpR fFf">

    <q-header reveal bordered class="bg-grey-10 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/favicon-96x96.png">
          </q-avatar>
          <strong>
            Tormenta 20 - Companion
          </strong>
        </q-toolbar-title>
      </q-toolbar>
      <q-toolbar class="bg-grey-9" inset>
        <q-btn-dropdown
          unelevated
          label="Minha Coleção"
        >
          <div class="row no-wrap q-pa-md bg-grey-10">
            <q-btn unelevated style="width: 280px;" @click="$router.push({ path: '/my-characters' })">
              <q-card flat style="width: 280px; height: 120px; overflow: hidden;">
                <q-card-section style="height: 120px;" class="meus-personagens-bg">
                </q-card-section>
                <q-item style="position: absolute; bottom: 0; width: 100%; height: 40px; background-color: rgba(0, 0, 0, 0.5);">
                  <q-item-section>
                    <q-item-label class="text-grey-4 text-center" style="font-size: 16px;">
                      Meus Personagens
                    </q-item-label>
                  </q-item-section>
                </q-item>
              </q-card>
            </q-btn>
          </div>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container class="t20-bg-grey-1">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped>
  .meus-personagens-bg {
    background-image: url("../assets/menu-images/meus_personagens.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
