import { Commodity } from '@/types'
import { defineStore } from 'pinia'
interface State {commodities: Array<Commodity>}
export const useCommodityStore = defineStore('commodities', {
  state: (): State => {
    return {
      commodities: [{ id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 2, name: 'Autotrophs', planets: ['Temperate'], prev: [] }, { id: 3, name: 'Base Metals', planets: ['Barren', 'Gas', 'Lava', 'Plasma', 'Storm'], prev: [] }, { id: 4, name: 'Carbon Compounds', planets: ['Barren', 'Oceanic', 'Temperate'], prev: [] }, { id: 5, name: 'Complex Organisms', planets: ['Oceanic', 'Temperate'], prev: [] }, { id: 6, name: 'Felsic Magma', planets: ['Lava'], prev: [] }, { id: 7, name: 'Heavy Metals', planets: ['Ice', 'Lava', 'Plasma'], prev: [] }, { id: 8, name: 'Ionic Solutions', planets: ['Gas', 'Storm'], prev: [] }, { id: 9, name: 'Micro Organisms', planets: ['Barren', 'Ice', 'Oceanic', 'Temperate'], prev: [] }, { id: 10, name: 'Noble Gas', planets: ['Gas', 'Ice', 'Storm'], prev: [] }, { id: 11, name: 'Noble Metals', planets: ['Barren', 'Plasma'], prev: [] }, { id: 12, name: 'Non-CS Crystals', planets: ['Lava', 'Plasma'], prev: [] }, { id: 13, name: 'Planktic Colonies', planets: ['Ice', 'Oceanic'], prev: [] }, { id: 14, name: 'Reactive Gas', planets: ['Gas'], prev: [] }, { id: 15, name: 'Suspended Plasma', planets: ['Lava', 'Plasma', 'Storm'], prev: [] }, { id: 1, name: 'Autotrophs', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }, { id: 1, name: 'Aqueous Liquids', planets: ['Barren', 'Gas', 'Ice', 'Oceanic', 'Storm', 'Temperate'], prev: [] }
        // TODO commodities array list is not completed
      ]
    }
  },
  getters: {
    getCommodities: (state): Array<Commodity> => state.commodities
  }
})