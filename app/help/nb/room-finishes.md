---
title: Romoverflater og overflatelister
summary: Si hva som dekker gulv, vegger og tak i hvert rom, legg til soner som en flislagt veggbeskyttelse, og få overflatelister etter rom, vegg og sone med arealer, antall fliser inkludert kapp og volumer av underlag.
keywords: overflate, overflater, overflateliste, romoverflater, gulvoverflate, veggoverflate, takoverflate, fotlist, flis, fliser, kappede fliser, antall fliser, spill, underlag, avretting, underlagsplate, puss, sone, veggbeskyttelse, veggbånd, våtrom, interiør, mengder
from: 8c30498c
---

## Formål

Fortell BimCraft én gang hva hvert rom er overflatebehandlet med. Overflatelistene gir da arealene, fliser som skal bestilles og volumene av underlaget, og de endres med modellen.

## Trinn

1. Slå på {{ui:Tegn}}, åpne **Tabeller** i venstre panel og klikk **Romoverflater**.
2. Under **Overflatetyper** klikk **Legg til en overflatetype**. Gi den et navn, en type (Flis, Ark, Belegg eller Plate) og en tykkelse. For en flis, oppgi flisens lengde og bredde, fugen og et spillpåslag i prosent. Hvis noe ligger under overflaten (et avrettingslag, en underlagsplate, et pusslag), oppgi det under **Underlag** og gi tykkelsen.
3. Under **Rom** velg gulv-, vegg- og takoverflaten for hvert rom. Skriv inn et navn og en høyde på fotlisten hvis rommet har en.
4. Under **Soner** klikk **Legg til en sone** for en del av et rom som får en annen overflate:
   - en **veggsone** er et belte mellom to høyder over gulvet (en flislagt veggbeskyttelse fra 0 til 1200, et veggbånd). Den gjelder alle vegger i rommet, eller velg vegger i rommet i modellen og klikk knappen **På** for å begrense den til dem;
   - en **gulv**- eller **himlingssone** er et areal du skriver inn. Det trekkes fra rommets egen overflate.
5. Klikk **Lagre**. Det er ett steg i angre. Lengder skrives inn i prosjektets enheter.

## Tabellene

Fire oppføringer kommer til tabellistan:

- **Overflater etter rom**: hvert rom med gulv-, vegg- og takoverflate, deres arealer, og fotlisten med lengde.
- **Overflater etter vegg**: hver strekning av vegg på et roms side og beltet av den som en overflate dekker, med lengde, bruttoareal, fradrag, nettoareal og for fliser: hele fliser, kappede fliser og fliser som skal bestilles.
- **Overflater etter sone**: hver sone med sin overflate, nettoareal, fliser og volum av underlaget.
- **Overflatemengder**: én rad per overflate: nettoareal, hele og kappede fliser, fliser som skal bestilles, underlaget og volumet, og overflatens eget volum.

Gruppér, summer, lagre og eksporter dem som enhver annen tabell: se [Oppsett, lagring og eksport av en tabell](topic:schedule-layouts). Klikk et tall for å velge det det kommer fra: fradragene for en vegg velger dens dører og vinduer.

## Slik måles overflatene

- **Vegger**: hver strekning av vegg på rommets side, lengden langs rommet ganget med høyden overflaten dekker, minus den delen av hver dør og hvert vindu som ligger innenfor den høyden. En vegg som er lavere enn rommet, overflatebehandles til sin egen topp. Prosjektets måleregler avgjør hvilke åpninger som er for små til å trekkes fra ([Tabeller](topic:plan-schedules-and-pdf)).
- **Gulv og tak**: rommet innenfor veggflatene, minus øyene i det.
- **Fotlist**: rommets veglengde minus bredden på dørene.
- **Fliser**: lagt som et rutenett fra ett hjørne av flaten, med én fuge mellom flisene. En flis helt på flaten er en hel flis; en flis delvis på den (ved en kant, rundt en åpning) er en kappet flis. Fliser som skal bestilles er hele pluss kappede, pluss spillpåslaget, rundet opp. Hver kappet flis telles som en ny flis: avskjær brukes ikke på nytt.
- **Volum av underlaget**: nettoarealet ganget med underlagets tykkelse.
- En telling merket **≈** er regnet ut fra arealet i stedet for lagt flis for flis: en flate der det er tatt ut en sone med angitt areal, eller en svært stor flate.

## Greit å vite

- Overflatene lagres i bygningsfilen (egenskapssettet `CadCraft_Finishes` på prosjektet). Hvert rom som har en overflate, får også det vanlige IFC-egenskapssettet `Pset_SpaceCoveringRequirements`, slik at andre programmer leser navnene.
- Fliseleggingen starter i et hjørne. En legging sentrert i rommet, et mønster (fiskebein, murverksforbandt) og gjenbruk av avskjær beregnes ikke.
- En buet vegg, og en romgrense som ikke er en vegg (en romskiller), listes som **Annen grense** med lengde og uten åpninger.
- **Overflater** som fantes før, lister overflatelagene for veggtypene; **Lag: areal og volum** lister hvert lag i hver lagdelt type. Romoverflatene her er det som legges på rommet oppå disse.
- En assistent kan sette overflater for deg med `finishes_set`: se [La en KI-assistent arbeide med modellen](topic:assistants).
