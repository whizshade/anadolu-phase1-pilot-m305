# M3-05 Data Layer Validation Report

Target Foundry: v12 primary; v13 differences flagged.

Visual Layer Acceptance Gate:
- Scene spec: PASS
- Required objects: PASS
- Forbidden objects: PASS in cropped final map
- Door/window/secret door count: PASS, one south secret door, zero windows
- Gridless VTT use: PASS
- Target grid scale/crop: PASS, 10x12 → 1000x1200 px
- Foundry wall feasibility: PASS
- Foundry light controllability: PARTIAL PASS; light fixtures have visible glow but not excessive enough to reject pilot
- Object density: PASS
- Style bible: PASS

Data Layer Acceptance Gate:
- JSON syntax validation: PASS
- Foundry v12 target fields: PASS best-effort; runtime not tested
- Wall overlay alignment: PASS by generated overlay image
- Door/secret door overlay alignment: PASS by generated overlay image
- Light overlay alignment: PASS by generated overlay image
- Journal pin overlay alignment: PASS by generated overlay image
- Macro syntax static check: PASS best-effort
- Asset path consistency: PASS
- Version consistency: PASS, v12 primary noted

Critical limitation:
Foundry cannot be run in this environment. Final runtime validation must be done by importing the module in Foundry and running `macros/import_m3-05_sahaflar_arka_oda.js` as GM.
