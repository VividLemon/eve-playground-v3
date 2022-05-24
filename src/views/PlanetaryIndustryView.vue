<template>
  <h1>{{ commodities }}</h1>
</template>

<script setup lang="ts">
import { useCommodityStore } from '@/store'

const { getCommodities: commodities } = useCommodityStore()

</script>
