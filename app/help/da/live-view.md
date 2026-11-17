---
title: Live-visningen
summary: Et panel ved siden af modellen, der viser den i realtidsudseendet, med sol, skygger og indirekte lys, og følger alle ændringer, du foretager; gå rundt i den og sæt tidspunkt på dagen og måneden.
keywords: live-visning, realtid, realtidsrender, gennemgang, gå, gå igennem, førsteperson, præsentation, kunde, andet skærm, andet vindue, skærm, tid på dagen, sol, årstid, måned, skygger, ambient occlusion, refleksioner, indirekte lys, global belysning, webgpu, webgl
from: ea5c02bf
---

Live-visningen viser modellen i realtidsudseendet: himlen og solen fra din grunds placering og dato, solens skygger, de malinger og materialer, du har givet elementerne, lamper, og lys, der reflekteres fra vægge og gulve. Den følger det, du gør: drej 3D-visningen, og den drejer også; ændr modellen, og den viser ændringen et øjeblik senere. Intet uploades.

Den tegner den samme scene, malinger, lamper og sol som [Render et billede](topic:render). Til et færdigt billede brug det.

## Åbn den

1. Åbn en model og vælg {{ui:Live-visning}} i værktøjslinjen. Panelet åbnes over appen, nederst til højre.
2. Træk i dens titellinje for at flytte den, træk i hjørnet for at gøre den større.
3. {{ui:Live-visning i et nyt vindue}} (knappen ved siden af) eller {{ui:Nyt vindue}} i panelet flytter den til et vindue for sig selv, til en anden skærm. Hvis din browser blokerer pop op-vinduer, åbnes den som panelet.
4. {{ui:Luk}} lukker den.

## Kontrollerne

| Kontrol | Hvad den gør |
|---|---|
| {{ui:Følg visningen}} | Til: live-visningen kigger dér, 3D-visningen kigger. Gang slår det fra |
| {{ui:Gå}} | Gå gennem modellen (nedenfor) |
| {{ui:Tyngdekraft}} | Mens du går: stå på gulve og gå op ad trapper. Fra: flyv |
| {{ui:Tid}} | Klokkeslættet på dagen. Solen flytter sig, når du trækker |
| {{ui:Måned}} | Måneden, så du kan se solen om vinteren og sommeren |
| {{ui:Kvalitet}} | {{ui:Til denne computer}}, eller {{ui:Lav}}, {{ui:Mellem}} eller {{ui:Høj}} |

Linjen nederst siger, hvad der tegner visningen (WebGPU eller WebGL 2), kvaliteten og det indirekte lys.

## Gå gennem modellen

1. Drej 3D-visningen hen, hvor du vil stå, og vælg {{ui:Gå}}. Du står på gulvet under visningens øjepunkt, 1.6 m høj.
2. Klik i live-visningen, og brug {{key:W}} {{key:A}} {{key:S}} {{key:D}} eller piletasterne. Hold {{key:Shift}} nede for at løbe. Træk for at kigge rundt.
3. Trin op til 40 cm bliver taget (trapper); alt højere er en væg. Vægge stopper dig, og du glider langs dem.
4. Med {{ui:Tyngdekraft}} fra flyver du: {{key:E}} går op, {{key:Q}} ned.
5. {{key:Esc}} stopper gåturen.

## Indirekte lys

Lys, der reflekteres fra en solbeskinnet væg ned på gulvet, og det mørkere indre af et rum, beregnes i baggrunden på alle processorkerner. Mens det arbejder, siger den nederste linje {{ui:Indirekte lys: 40 %}}; når det er klart, tager visningen det med. Efter en ændring starter det forfra.

:::note
Dette er en tilnærmelse til en live-visning, ikke et renderet billede: små detaljer mellem punkterne får det indirekte lys fra de punkter, der ligger tæt på.
:::

:::note
Browsere er forskellige. Hvor browseren har WebGPU, bruger live-visningen det; ellers bruger den WebGL 2 og ser ens ud. Uden nogen af dem siger panelet det.
:::
