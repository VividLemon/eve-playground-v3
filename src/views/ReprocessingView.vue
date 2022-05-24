<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <reprocessing-ore-sidebar />
      </v-col>
      <v-col>
        <v-container>
          <v-row>
            <v-col>
              <h1>Skills n shit</h1>
              <!-- Contains skills level icons -->
              <!-- contains slider for station efficiency -->
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-fade-transition group>
                <reprocessing-ore-field
                  v-for="ore in activeOres"
                  :key="ore.id"
                  :ore="ore"
                />
              </v-fade-transition>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useOreStore } from '@/store'
import ReprocessingOreField from '@/components/Reprocessing/ReprocessingOreField.vue'
import ReprocessingOreSidebar from '@/components/Reprocessing/ReprocessingOreSidebar.vue'

const { getActiveOres: activeOres } = useOreStore()

</script>
