<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <nav-bar />
    </v-navigation-drawer>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon
        :aria-label="t('aria.menu')"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title>
        {{ t('home.title') }}
      </v-toolbar-title>
      <v-spacer />
      <app-dark-button />
      <app-translate-menu />
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        style="min-height: 75vh;"
        class="mb-16"
      >
        <router-view />
      </v-container>
      <app-custom-footer class="mt-16" />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
/*
imports
composables
emits
props
refs
reactives
computed
methods
hooks
*/
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import AppDarkButton from './components/Menu/AppDarkButton.vue'
import AppTranslateMenu from './components/Menu/AppTranslateMenu.vue'
import AppCustomFooter from './components/Menu/AppCustomFooter.vue'

const { t } = useI18n()

const drawer = ref(false)

</script>
