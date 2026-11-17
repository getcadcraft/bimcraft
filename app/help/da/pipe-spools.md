---
title: Stålrørsspools og spoolark
summary: Skær et stålrør med stumpsvejsning i spools med en længste længde og ved de feltsvejsninger, du placerer, nummerér dem, og hent et spoolark pr. spool (3D-visning, skærelængder, fittings, svejsninger, stykliste) som PDF og CSV; kanaler får en skæreliste med lige stykker.
keywords: spool, spools, spoolark, isometrisk, fremstilling, præfabrikation, feltsvejsning, værkstedssvejsning, stumpsvejsning, skærelængde, skæreliste, stykliste, bom, stålrør, schedule 40, linjenummer, kanalskæreliste, kanaldele
from: 539f51de
---

## Hvad du skal gøre

Omdan et stålrørsforløb til de dele, et værksted svejser og en montør monterer: spools, der ikke er længere end en længde, du vælger, delt ved de feltsvejsninger, du placerer, hver med sit eget ark.

Kun **stålrør med stumpsvejsning** skæres i spools (rørdimensioner ASME B36.10M, bøjninger med ASME B16.9 langradius). Kobber-, PVC- og PEX-samlinger er ikke stumpsvejsede, så deres forløb har ingen spools.

## Skær et forløb i spools

1. Vælg et stålrørsforløb. Under {{ui:Egenskaber}} sætter du kryds ved **Skær i spools**.
2. **Længste spool**: den største centerlinjelængde en spool må have (6 m, ca. 20 ft, som udgangspunkt).
3. **Linjenummer**: en del af hver spools nummer. Et nyt forløb i spools får det næste ledige nummer i sit system.

Spools nummereres langs forløbet fra dets første punkt: `CHW-12-S01`, `CHW-12-S02` … (systemet, linjenummeret, spoolen). En spool vokser stykke for stykke; det stykke, der ville gøre den for lang, starter den næste, og en lige længde, der er længere end en spool, skæres, hvor spoolen er fuld.

## Placér feltsvejsninger

1. Åbn {{ui:Build}} og vælg {{ui:Svejsning på stedet}}.
2. Klik på et rør i spools, hvor feltsvejsningen skal være. Inde i en lige længde skæres røret der; inde i en fitting eller en ventil flyttes svejsningen til nærmeste samling.

Egenskaber lister forløbets feltsvejsninger, hver med {{ui:Fjern}}. Hver ændring er ét trin i {{ui:Fortryd}}.

## Spoolark

Under Egenskaber for et forløb i spools:

- {{ui:Spoolark (PDF)}}: én side pr. spool. Til venstre spoolen i en 30° isometrisk visning: dens lige længder nummereret, værkstedssvejsninger som prikker, feltsvejsninger markeret FW og planens nord. Til højre spoolens nummer, dimension, schedule og længde, derefter dens **skærelængder**, **fittings**, **svejsninger** (en værkstedssvejsning ved hver samling inde i spoolen, en feltsvejsning hvor den møder den næste spool) og dens **stykliste** med rørets vægt (ASME B36.10M-vægt for glatte ender).
- {{ui:Spoolliste (CSV)}}: det samme, et blok pr. spool.

:::note
Skærelængder er ende til ende som tegnet: intet rodgab eller svejsetillæg trækkes fra. Bøjninger har ASME B16.9 langradius; T-stykker, reduktioner og ventiler er generiske, dimensioneret ud fra røret og ikke efter B16.9 eller en producent, og arket siger det. Vægten af fittings er ikke angivet. En tegne- og koordineringshjælp, dimensioneret af en ingeniør.
:::

## I IFC-filen

Hver del af et forløb i spools har **CadCraft_Spool** med sit SpoolId, forløbet, spoolens nummer i forløbet, og hvor den starter og slutter langs forløbet. Forløbet beholder sine regler (længste spool, feltsvejsninger, linjenummer) i sit eget sæt, så spools kommer tilbage det samme, når filen åbnes igen.

## Kanaler: en skæreliste

Åbn {{ui:Build}} og klik på {{ui:Kanalskæreliste}}: en CSV over de lige kanalstykker pr. system, form og dimension, hver lige længde skåret i stykker af **Stykkelængde** i Kanal-værktøjslinjen (1500 mm, ca. 5 ft, som udgangspunkt) og det, der er tilbage. Kun længder: ingen samlinger, pladetykkelser eller tilslutninger.
