# Anadolu Phase 1 Pilot M3-05 - v3

This is the corrected v3 pilot module package for M3-05. It creates a world scene via macro. Compendium export should be done manually after Foundry runtime validation.

## Main v3 correction

Terrain walls now use corrected movement/sight semantics:
- Printing press and iron cabinet: block movement and sight.
- Work desks: block movement but not sight.

## Install

1. Copy the module folder to `FoundryVTT/Data/modules/anadolu-phase1-pilot-m305`. The folder name must match the module id used by the macro asset path.
2. Restart Foundry.
3. Enable the module.
4. Create a Script Macro and paste `macros/import_m3-05_sahaflar_arka_oda_v3.js`.
5. Run as GM in a disposable Foundry v12 world.
6. Compare against `validation/m305_v3_overlay_validation.png`.

Runtime testing was not performed in this environment.
