---
title: Mbojoaporã peteĩ modelo ñemoĩ mokõi kuimba'e ndive
summary: Emoĩ git, Fossil térã Mercurial omboyke mokõi kopia IFC modelo peteĩ peteĩ objeto-pe, upévare mokõi kuimba'e ikatu oñemoĩ peteĩ edificio-pe ha omboyke ñemoĩ.
keywords: merge, git, fossil, mercurial, control de versiones, conflicto, tres vías, cadcraft merge, gitattributes, ifc, globalid, equipo, dos copias, ramas
from: 50733df8
---

Mokõi kuimba'e ojagarra peteĩ edificio kopia: peteĩ oñemoĩ ala este, ambue oste; upe rire kopia kuéra oikotevẽ oiko peteĩ. Oñemoĩ objeto-kuéra ndive, programa ikatu ojapo ko mba'e kuimba'e ndive.

## Mba'épa ojapóta

Peteĩteĩ muro, puerta, nivel, habitación ha propiedad conjunto IFC archivo-pe oguereko GlobalId ndojehavy'ỹva. Mbojoaporã ohecha objeto GlobalId rupi, número `#123` rupi ndaha'éi, ha'e número oñemoambue archivo ñongatu jave. Objeto-gui oike parte, id ndaiporiva (ubicación, forma, unidad), oñemoĩ mba'e ohupýva rupi.

Mokõi kopia oikotevẽ IFC peteĩ versión (2x3, 4 térã 4.3). Mbojoaporã nde archivo oguereko iñe'ẽ ha número, oñemoĩ ojapóva, upévare git diff ohechauka mba'épa mbojoaporã oñemoambue.

## Ejapo

Git-pe mokõi línea repositorio-pe peteĩ jey:

```
# .gitattributes
*.ifc merge=cadcraft

# peteĩ jey, peteĩteĩ computadora-pe
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git ndaipóri rire, ejapo `cadcraft merge <base> <ours> <theirs>`. Fossil ha Mercurial oñeʼẽ mbohapy archivo ndive iñe'ẽ mbojoaporã ajuste-pe. Ndojehasái; opa oiko ne computadora-pe.

## Tembiapo

- Atributo peteĩ pe-pe jejapóva oñeñongatu. Mokõi pe-pe jejapóva peteĩ jey.
- Atributo mokõi jeyhápe ojejapóva (nivel peteĩ jey ohaíva mokõi jeyhápe) ha'e **conflicto**: nde pe oñemoĩ ha informe ohechauka mokõi. Ehechakuaa resultado ha emoambue mborypy.
- Peteĩ lista mba'e (nivel muro-kuéra, conjunto propiedad-kuéra) oñemoĩ conjunto: mba'e ojoapy peteĩ ha ambue ojoaporãva oñeñongatu, mba'e omboguejy ojoguejy. Mokõi kuimba'e muro nivel-pe ojoapýva ndoikói conflicto.
- Objeto mba'e peteĩ pe-pe ojoapy ha oñeñongatu forma ha propiedad ndive. Peteĩ pe-pe omboguejy ha ambue ojejapóiva: omboguejy. Peteĩ pe-pe omboguejy ha ambue ojejapóiva: omboguejy ha informe.

Forma opa peteĩ ha'e: peteĩ muro forma peteĩ pe-gui, ndaha'éi punto punto oñemoĩ. Zip IFC ha IFCX archivo-kuéra ndojoaporãi. Mbojoaporã rire, ehechá resultado BimCraft-pe ha Problemas panel ndojesalvái mboyve.
