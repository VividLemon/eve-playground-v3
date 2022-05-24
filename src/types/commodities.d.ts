// TODO tier one finished
interface PreviousCommodity {
    name: 'Aqueous Liquids' | 'Autotrophs' | 'Base Metals' | 'Carbon Compounds' | 'Complex Organisms' | 'Felsic Magma' | 'Heavy Metals' | 'Ionic Solutions' | 'Micro Organisms' | 'Noble Gas' | 'Noble Metals' | 'Non-CS Crystals' | 'Planktic Colonies' | 'Reactive Gas' | 'Suspended Plasma',
    amount: number
}

export interface Commodity {
    id: number,
    name: 'Aqueous Liquids' | 'Autotrophs' | 'Base Metals' | 'Carbon Compounds' | 'Complex Organisms' | 'Felsic Magma' | 'Heavy Metals' | 'Ionic Solutions' | 'Micro Organisms' | 'Noble Gas' | 'Noble Metals' | 'Non-CS Crystals' | 'Planktic Colonies' | 'Reactive Gas' | 'Suspended Plasma' | 'Bacteria' | 'Biofuels' | 'Biomass' | 'Chiral Structures' | 'Electrolytes' | 'Industrial Fibers' | 'Oxidizing Compound' | 'Oxygen' | 'Plasmoids' | 'Precious Metals' | 'Proteins' | 'Reactive Metals' | 'Silicon' | 'Toxic Metals' | 'Water' | 'Biocells' | 'Construction Blocks' | 'Consumer Electronics' | 'Coolant' | 'Enriched Uranium' | 'Fertilizer' | 'Genetically Enhanced Livestock' | 'Livestock' | 'Mechanical Parts' | 'Microfiber Shielding' | 'Miniature Electronics' | 'Nanites' | 'Oxides' | 'Polyaramids' | 'Polytextiles' | 'Rocket Fuel' | 'Silicate Glass' | 'Superconductors' | 'Supertensile Plastics' | 'Synthetic oil' | 'Test Cultures' | 'Transmitter' | 'Viral Agent' | 'Water-Cooled CPU' | 'Biotech Research Reports' | 'Camera Drones' | 'Condensates' | 'Cryoprotectant Solution' | 'Data Chips' | 'Gel-Matrix Biopaste' | 'Guidance Systems' | 'Hazmat Detection Systems' | 'Hermetic Membranes' | 'High-Tech Transmitters' | 'Industrial Explosives' | 'Neocoms' | 'Nuclear Reactors' | 'Planetary Vehicles' | 'Robotics' | 'Smartfab Units' | 'Supercomputers' | 'Synthetic Synapses' | 'Transranial Microcontrollers' | 'Ukomi Super Conductors' | 'Vaccines' | 'Broadcast Node' | 'Integrity Response Drones' | 'Nano-Factory' | 'Organic Mortar Applicators' | 'Recursive Computing Module' | 'Self Harmonizing Power Core' | 'Sterile Conduits' | 'Wetware Mainframe',
    planets: Array<'Barren' | 'Gas' | 'Ice' | 'Lava' | 'Oceanic' | 'Plasma' | 'Storm' | 'Temperate'>,
    prev: Array<null> | Array<PreviousCommodity>
}
