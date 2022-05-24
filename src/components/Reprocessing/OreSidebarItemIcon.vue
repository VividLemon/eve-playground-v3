<template>
  <!-- TODO these color classes work on dark... not light -->
  <v-card
    class="d-inline-block"
    width="72"
    :color="(props.item.active) ? 'darkAccent' : ''"
    @click="emit('toggle-active')"
  >
    <!-- TODO active doesn't exist. See how it looks and is supposed to function -->
    <!-- To make the entire system work better -->
    <v-img
      class="rounded-t-sm rounded-b"
      :src="require(`~/static/${props.item.img}.png`)"
      :lazy-src="require(`~/static/${props.item.img}_min.png`)"
      :alt="props.item.name"
      width="72"
      height="72"
    />
    <v-card-text class="text-caption text-truncate pa-1">
      {{ props.item.name }}
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits<{(e: 'toggle-active'): void}>()

const props = defineProps<{item: {img: string, name: string}}>()

</script>
