<template>
  <v-list>
    <!-- HomeView -->
    <!-- TODO -->
    <v-list-item to="/">
      <v-list-item-action>
        <v-icon>mdi-apps</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.home') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- ReprocessingView -->
    <v-list-item to="reprocessing">
      <v-list-item-action>
        <v-icon>mdi-recycle</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.reprocessing') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- PlanetIndustryView -->
    <v-list-item to="planetary-industry">
      <v-list-item-action>
        <v-icon>mdi-earth</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.planetary') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- IndustryView -->
    <v-list-item to="industry">
      <v-list-item-action>
        <v-icon>mdi-factory</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>
          {{ t('nav.industry') }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <!-- TODO Github -->
    <v-list-item
      rel="noopener"
      link
      href="#"
      target="_blank"
    >
      <v-list-item-content>
        {{ t('suggestAddition') }}
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

</script>
