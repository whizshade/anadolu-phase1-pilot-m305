# M3-05 v3 Validation Report

## Reviewer correction addressed

### Terrain wall movement/sight semantics
Fixed. v2 followed the earlier reviewer note literally (`move=0`, `sight=1`) for all terrain walls. That was physically backwards for Foundry gameplay: tokens could move through furniture while sight was blocked.

Corrected v3 values:
- Printing press / matbaa: `move=1`, `sight=1`, `sound=0`, `light=1`
- Locked iron cabinet: `move=1`, `sight=1`, `sound=0`, `light=1`
- Central work desk: `move=1`, `sight=0`, `sound=0`, `light=0`
- North-east work table: `move=1`, `sight=0`, `sound=0`, `light=0`

Interpretation:
- Tall objects block movement and sight.
- Low furniture blocks movement but does not block sight.
- AC/cover bonuses remain GM-managed or Token Cover-module-managed; native wall geometry only handles movement and vision.

Total wall segments remain 22.
- Outer/secret boundary: 6
- Terrain cover / furniture: 16

## Prior v2 fixes retained

- `packs` declaration remains removed from module.json.
- Compatibility remains Foundry v12 only: `maximum: "12"`.
- Macro re-run protection remains in place.
- Source scene JSON uses `grid.type: 1`.
- PIN-D and L2 remain separated.
- Revised light radii retained.
- Unused esmodule declaration remains removed.

## Static checks

- module.json parse: PASS
- scene JSON parse: PASS
- walls JSON parse: PASS
- lights JSON parse: PASS
- journal pins JSON parse: PASS
- macro syntax: PASS via `node --check`
- overlay validation image: generated as `validation/m305_v3_overlay_validation.png`

## Runtime caveat

Foundry itself was not run in this environment. Disposable-world test remains required before expanding the pilot batch.
