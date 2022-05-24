export interface Ore {
    id: number,
    name: 'Scordite' | 'Veldspar' | 'Pyroxeres' | 'Plagioclase' | 'Omber' | 'Kernite' | 'Jaspet' | 'Hemorphite' | 'Hedbergite' | 'Dark Ochre' | 'Gneiss' | 'Crokite' | 'Bistot' | 'Arkonor' | 'Mercoxit' | 'Spodumain',
    img: string,
    type: 'simple' | 'coherent' | 'variegated' | 'complex' | 'mercoxit'
    variations: Array<
        {
            name: 'Condensed' | 'Massive' | 'Concentrated' | 'Dense' | 'Solid' | 'Viscous' | 'Azure' | 'Rich' | 'Silvery' | 'Golden' | 'Luminous' | 'Fiery' | 'Pure' | 'Pristine' | 'Vivid' | 'Radiant' | 'Vitric' | 'Glazed' | 'Onyx' | 'Obsidian' | 'Iridescent' | 'Prismatic' | 'Sharp' | 'Crystaline' | 'Monoclinic' | 'Triclinic' | 'Crimson' | 'Prime' | 'Magma' | 'Vitreous' | 'Bright' | 'Gleaming'
            modifier: 1.05 | 1.1
        }
    >,
    neededPerBatch: number,
    outputPerM3: {
        Tritanium?: number,
        Pyerite?: number,
        Mexallon?: number,
        Megacyte?: number,
        Isogen?: number,
        Nocxium?: number,
        Zydrine?: number,
        Morphite?: number
    }
}
