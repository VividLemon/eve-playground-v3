<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field
          v-model="searchQuery"
          prepend-inner-icon="mdi-magnify"
          :label="t('shared.search')"
        />
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <v-checkbox
          v-model="checkQuery"
          value="simple"
          class="ma-2"
          :label="t('ores.simple')"
        />
      </v-col>
      <v-col>
        <v-checkbox
          v-model="checkQuery"
          value="coherent"
          class="ma-2"
          :label="t('ores.coherent')"
        />
      </v-col>
      <v-col>
        <v-checkbox
          v-model="checkQuery"
          value="variegated"
          class="ma-2"
          :label="t('ores.variegated')"
        />
      </v-col>
      <v-col>
        <v-checkbox
          v-model="checkQuery"
          value="mercoxit"
          class="ma-2"
          label="Mercoxit"
        />
      </v-col>
      <v-col>
        <v-checkbox
          v-model="checkQuery"
          value="complex"
          class="ma-2"
          :label="t('ores.complex')"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-container>
          <v-row no-gutters>
            <v-fade-transition
              v-if="checkResult.length"
              group
              tag="v-col"
            >
              <item-icon
                v-for="ore in checkResult"
                :key="ore.id"
                :item="ore"
                class="ma-1"
                @toggle-active="addActiveOre(ore.id)"
              />
              <!-- TODO this doesn't actually toggle. It only adds -->
            </v-fade-transition>
            <h1 v-else>
              {{ t('shared.noResults') }}
            </h1>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { Ore } from '@/types'
import { ref, computed } from 'vue'
import ItemIcon from './ItemIcon.vue'
import { useOreStore } from '@/store'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { getOres: ores, addActiveOre } = useOreStore()

const searchQuery = ref('')
const checkQuery = ref<Array<string>>([])

const searchResult = computed<Array<Ore>>(() => (searchQuery.value.trim() === '')
  ? ores
  : ores.filter((el) => searchQuery.value.toLowerCase().split(' ').every(v => el.name.toLowerCase().includes(v))))
const checkResult = computed<Array<Ore>>(() => (checkQuery.value.length > 0)
  ? searchResult.value.filter(el => checkQuery.value.includes(el.type))
  : searchResult.value)

</script>
