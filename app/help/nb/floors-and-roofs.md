---
title: Rom, dekker, himlinger og tak
summary: Rom oppstår når veggene lukker dem; gi et rom eller hele bygningen et dekke og en himling, og legg et valmet tak eller saltak på veggene. Alt følger med når veggene flyttes.
keywords: rom, rom, areal, omkrets, dekke, dekke, gulvunderlag, himling, tak, valmet tak, saltak, takvinkel, overheng, takfot, møne, renne, 6/12
from: 1fb1813c
---

## Hva du skal gjøre

Ferdigstill skallet til bygningen. Rom kommer av seg selv fra veggene; dekker, himlinger og taket tar ett klikk hver. Fordi de er funnet fra veggene, følger de med når veggene flyttes.

## Rom

Hvert område som er lukket av tegnede vegger, er et rom. Det vises så snart den siste veggen lukker det, med et nummer (101, 102 … i første etasje, 201 … i neste) og et navn (**Rom 1**, **Rom 2** …), og arealet vises i midten av det på planen.

- Med {{ui:Velg}} på klikker du inne i et rom for å velge det. I **Egenskaper** endrer du **Navn** (for eksempel `Kjøkken`) og **Nummer**; areal og omkrets vises.
- Slett en vegg mellom to rom, så blir de ett; tegn en vegg tvers over et rom, så blir det to. Et rom beholder navn og nummer når veggene rundt det flyttes.
- Et rom kan ikke slettes alene: det er rommet veggene danner.

Arealer måles innenfor veggflatene. Rom lagres som IFC-rom med gulvareal, omkrets, høyde og volum, så tabellene kan lese dem (se [Summer mengder, list opp elementer og lag rombeskrivelser](topic:quantity-totals)).

## Dekker

1. Klikk {{ui:Dekke}}.
2. Velg **Dette rommet** eller **Hele bygningen**, **Utførelse** (tregulv eller betongdekke) og tykkelse.
3. Pek inne i et rom (eller hvor som helst inne i bygningen). Det dekket ville dekke, merkes med arealet.
4. Klikk. Dekkets overkant er nivåets gulv; dekket går ned med sin tykkelse. Et dekke for hele bygningen går ut til ytterflatene av veggene.

## Himlinger

1. Klikk {{ui:Himling}}.
2. Velg **Dette rommet** eller **Hele bygningen**, og **Høyde** over gulvet.
3. Pek inne og klikk.
4. For å se den nedenfra, med rutenettet og lysene på den, bytt planen til himlingsplanen: se [Visninger, visningsintervall og egne ark](topic:views-and-sheets).

## Et tak

1. På nivået der veggene bærer taket, klikk {{ui:Tak}}.
2. Skriv **Takvinkel** som stigning over 12 (`6/12`) eller i grader (`30`), og **Overheng**.
3. Velg **Ender**: **Valmet tak** (alle sider skråner), **Gavler på de korte sidene** eller **Gavler på de lange sidene** (en bygning med fire sider), eller **Pulttak**.
4. Pek inne i bygningen: takfoten og mønet vises på planen. Klikk.

Taket sitter oppå veggene, på nivået over dem, og underkanten møter ytterflaten av veggene. Gavlendene fylles med en gavlvegg like tykk som veggen under. En L-, T- eller U-formet bygning får et valmet tak der vingene møtes i rennene.

## Endre dem

Velg et dekke, en himling eller et tak (i 3D-visningen, i modelltreet, eller et tak ved å klikke inne i omrisset på nivået over) og endre det i **Egenskaper**: et dekkes utførelse, tykkelse og hvor langt over nivået overkanten ligger; en himlings høyde, tykkelse og **Mønster** (rutenettet en himlingsplan tegner på den: ingen, 600 × 600, 600 × 1200, 2' × 2' eller 2' × 4'); et takets takvinkel, overheng, ender og tykkelse. Hver endring er ett trinn å angre.

## Gi et dekke, en himling eller et tak en type med lag

Et dekke, en himling og et tak kan få en **type**, slik en vegg får: en navngitt oppbygging av lag, hvert med sitt materiale og sin faktiske tykkelse.

- **Når du plasserer det.** Verktøyene Dekke, Himling, Tak og Tegn dekke har en liste **Type** på sin rad. **Ingen type** plasserer det som før, med egen tykkelse. En type plasserer det like tykt som typens lag til sammen.
- **Senere.** Velg dekket, himlingen eller taket og velg **Type** i Egenskaper. Elementet blir det samme elementet: plassering, rom og data beholdes, og ingenting tegnes på nytt. Bare typen, tykkelsen og materialet endres. Slik blir et element fra skissestadiet et utviklet element: bytt den generiske typen mot en ekte.
- **Rediger typen…** åpner typeredigeringen for den typen: lag fra **toppen** og nedover, kjernen, hvert lags funksjon og typens LOD-merke. Lagring endrer hvert element av typen i ett trinn, og ett Angre tar det tilbake. Å endre en startertype lagrer en kopi som din egen type.
- Mens et element har en type, er **Tykkelse** typens og kan ikke skrives inn. Velg en annen type, eller **Ingen type**, for å endre den.

Startertypene er én **generisk** type for hver (ett lag av det generiske materialet, merket LOD 200) og to lagdelte (merket LOD 300): et tregulv på bjelkelag og et betongdekke med avretting; et trebjelketak og et flatt betongtak; en gipsplatehimling og en nedhengt flisehimling. Dette er startverdier, ikke testede konstruksjoner: kontroller lagene før du stoler på dem.

Tabellen **Layer: areal og volum** lister hvert lag i hver type som er i bruk; se [Tabeller, dimensjoner og PDF](topic:plan-schedules-and-pdf). Dekke-, tak- og himlingstyper reiser mellom prosjekter i en typepakke eller som et Bibliotekselement; se [Typepakker](topic:type-packs).

## Greit å vite

- Å flytte, legge til eller slette vegger gjør rommene, dekkene, himlingene og taket over dem på nytt.
- Et tak passer enhver omriss. For å gi hver vegg sin egen takvinkel, gavl- eller pulttakende, en hevet svill, vindskier og takbunn, eller for å tegne ett takplan, se [Tak: en takvinkel for hver vegg, gavler, pulttak og takplan](topic:roofs).
- {{key:Delete}} sletter et valgt dekke, en himling eller et tak.
