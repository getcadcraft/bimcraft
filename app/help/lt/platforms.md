---
title: Naršyklės, įrenginiai ir atmintis
summary: Kuo BimCraft skiriasi Chrome, Edge, Firefox ir Safari naršyklėse, Mac, Windows ir Linux sistemose, su pele, jutikline plokšte ar lietimu, ir kokio dydžio failus jis gali priimti.
keywords: naršyklė, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, planšetė, telefonas, lietimas, jutiklinė plokštė, atmintis, dideli failai, webgl, našumas
from: fd8acba1
---

BimCraft veikia dabartinėse Chrome, Edge, Firefox ir Safari versijose, Mac, Windows ir Linux sistemose. 3D rodiniui reikia WebGL, kurį turi kiekviena dabartinė naršyklė. Žr. [Naršyklės ir kompiuteriai](common:browsers), ko programoms apskritai reikia.

## Aplanko atidarymas

| Naršyklė | {{ui:Atidaryti aplanką}} daro tai | Aplanko įvilkimas | {{ui:Naujausi aplankai}} |
|---|---|---|---|
| Chrome, Edge | Naršyklės aplankų pasirinkiklis, tada „Leisti svetainei peržiūrėti failus?“: spustelėkite **Peržiūrėti failus** | Atidaromas be klausimo | Taip, aplankams, pasirinktiems ar įvilktiems |
| Firefox | Sistemos aplankų parinkiklis | Atidaromas be klausimo | Ne |
| Safari | Sistemos aplankų parinkiklis su mygtuku **Įkelti** (nieko neįkeliama) | Atidaromas be klausimo | Ne |

Viduje Chrome ir Edge naudoja File System Access pasirinkiklį ir gali atsiminti aplanką. Firefox ir Safari naudoja senesnį aplankų parinkiklį, kuris atiduoda visus aplanko failus iš karto ir negali būti prisimintas. Įvilktas aplankas nuskaitomas įrašas po įrašo visose naršyklėse.

:::chromium
Brave ir kai kurios kitos Chromium naršyklės išjungia aplankų pasirinkiklį. Tada BimCraft naudoja sistemos aplankų parinkiklį, o naršyklė gali klausti „Įkelti *n* failų į šią svetainę?“. Niekas neįkeliama; failai tik patenka į skirtuką. Aplanko įvilkimas išvengia šio klausimo.
:::

## Mac, Windows ir Linux

- Spartieji klavišai, parašyti {{key:Mod+S}} ir {{key:Mod+Z}}, yra Command Mac sistemoje ir Ctrl Windows bei Linux sistemose.
- {{key:Ctrl+Shift+F}} (ekrano režimai) yra Control visose platformose, įskaitant Mac.
- Failų dialogai ir atsisiuntimų aplankas yra jūsų sistemos.

## Pelė, jutiklinė plokštė ir lietimas

| Įvestis | 3D rodinys | 2D brėžinys |
|---|---|---|
| Pelė | Kairysis vilkimas sukasi, dešinysis vilkimas slenka, ratukas didina, spustelėjimas pasirenka | Bet koks vilkimas slenka, ratukas didina, dukart spustelėjimas tilpina |
| Jutiklinė plokštė | Spustelėjimas ir vilkimas sukasi; {{key:Shift}} arba {{key:Mod}} ir vilkimas slenka; dviejų pirštų slinkimas arba suspaudimas didina | Spustelėjimas ir vilkimas slenka; dviejų pirštų slinkimas arba suspaudimas didina |
| Lietimas | Vienas pirštas sukasi, du pirštai spaudžia ir slenka, palietimas pasirenka | Vienas pirštas slenka; suspaudimo didinimo dar nėra; palieskite {{ui:Tilpti}} |

Mac jutiklinėje plokštėje dešinysis spustelėjimas yra dviejų pirštų spustelėjimas (arba Control ir spustelėjimas). Žr. [Klavišai, pelės ir jutiklinės plokštės](common:keys).

Planšetės ir telefonai gali atidaryti atskirus failus ir juos peržiūrėti, tačiau ekranas mažas, daug mobiliųjų naršyklių negali pasirinkti aplankų, o dideli modeliai gali netilpti jų atmintyje. Kompiuteris veikia geriausiai.

## Dideli failai ir atmintis

Viskas, ką BimCraft nuskaito, gyvena naršyklės skirtuko atmintyje. Kiek skirtukas gali naudoti, priklauso nuo naršyklės ir kompiuterio labiau nei nuo BimCraft.

| Failas | Kiek nuskaitoma | Ko tikėtis |
|---|---|---|
| IFC | Visas failas ir iš jo sukurta 3D geometrija | Priklauso nuo kompiuterio ir naršyklės; kelių šimtų megabaitų modelis gali būti per didelis nešiojamam kompiuteriui. Viršijus 1.5 milijono trikampių, briaunos išjungiamos |
| Projekto ir šeimų failai | Apie 40 KB iki 100 KB, koks bebūtų dydis | Net labai dideli centriniai modeliai atsidaro akimirksniu, taip pat iš tinklo disko |
| DWG ir DXF | Visas failas | Labai dideli brėžiniai rodo „Šis brėžinys labai didelis; rodoma tik dalis.“ |
| Aplankai | Failų sąrašas ir keli kilobaitai kiekvienam modeliui | Iki 20 000 failų |

Jei skirtukui pritrūksta atminties, naršyklė rodo savo klaidos puslapį (pavyzdžiui, Chrome – „Aw, Snap!“). Uždarykite kitus skirtukus, įkelkite BimCraft iš naujo ir bandykite dar kartą arba naudokite kompiuterį su daugiau atminties.

## Susiję

- [Prisijungimas ir neprisijungimas](topic:online-offline)
- [Trikčių šalinimas](topic:troubleshooting)
