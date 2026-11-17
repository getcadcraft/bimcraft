---
title: Įvertinti šildymo ir vėsinimo apkrovas
summary: Kiekvienos patalpos šilumos nuostoliai, jos šildymas per metus pagal laipsnių dienas ir vėsinimo smailė pagal tai, kas ją riboja modelyje, ir kiekvieno elemento U vertę, su visais įvedamais duomenimis. Projektavimo pagalba, o ne atitikties skaičiavimas.
keywords: energija, šildymas, vėsinimas, šilumos nuostoliai, šilumos apkrova, vėsinimo apkrova, U vertė, šilumos perdavimo koeficientas, laipsnių dienos, HDD, vėdinimas, oro kaita, vidaus šilumos šaltiniai, saulės šiluma, lambda, šilumos laidumas, izoliacija, ankstyvas projektavimas, analizė, patalpos, erdvės
from: ec312d20
---

Skirtuke {{ui:Dienos šviesa}}, po {{ui:Skaičiuoti}}, atidarykite {{ui:Šildymo ir vėsinimo apkrovos}} ir spustelėkite {{ui:Apskaičiuoti apkrovas}}. Kiekviena patalpa gauna savo **šilumos nuostolius** šaltą projektinę dieną, savo **šildymą per metus** ir savo **vėsinimo smailę** karštą dieną. Nieko neįkeliama; modelyje nieko nekeičiama, nebent įvedate U vertę.

:::warning
Tai **projektavimo pagalba, o ne atitikties skaičiavimas**: įvertinimas nusistovėjusiai būsenai su visais įvedamais duomenimis ekrane. Tai **nėra** ISO 52016-1 metodas, ne modeliavimas ir ne energijos sertifikatas; jis nenustato katilų, šilumos siurblių ar šaldiklių dydžio. Rezultatus ir įrangos dydį tikrinkite su inžinieriumi.
:::

## Kas riboja kiekvieną patalpą

BimCraft tai randa pačiame modelyje, todėl veikia bet kurios programos IFC (jam nereikia erdvių ribų, kurias kai kurios programos eksportuoja). Nuo kiekvienos patalpos paviršiaus dalies BimCraft žiūri tiesiai į išorę:

- pirmoji siena, langas, durys, grindys, stogas, danga, uždanga ar sija, į kurią ji susiduria, **riboja** tą dalį;
- už to elemento – arba **kita patalpa** (laikoma gretima, toje pačioje temperatūroje: nuostolių nėra), arba **nieko** (lauke), arba, po grindimis žemiausiame aukšte, **žemė**;
- atvira durų anga į kitą patalpą laikoma gretima patalpa; dalis, kuri nesiekia nieko (per 1,5 m į šonus ar žemyn, 8 m aukštyn), išvardijama po patalpa ir neįskaičiuojama.

Langai ir durys dydį gauna iš IFC (bendras plotis × aukštis) iš sienos, kurioje jie stovi. Spustelėkite patalpą lentelėje, kad pamatytumėte kiekvieną ją ribojantį elementą su jo plotu, U verte ir tuo, iš kur gauta U vertė.

## U vertės

Kiekvienam elementui, kurį naudoja BimCraft, tokia tvarka:

1. **Paties IFC U vertė** — `ThermalTransmittance` elemento bendrame savybių rinkinyje (pavyzdžiui, `Pset_WallCommon`) arba jo tipo rinkinyje. Dauguma projektavimo programų ją gali įrašyti.
2. **Jo medžiagų sluoksniai** — 1 ÷ (vidinis paviršiaus atsparumas + kiekvieno sluoksnio storis ÷ jo šilumos laidumas λ + išorinis paviršiaus atsparumas), su įprastais paviršiaus atsparumais (0,13 ir 0,04 m²K/W sienoms; vidiniam paviršiui 0,10 aukštyn, 0,17 žemyn). Pradiniai tipiniai laidumai (akmens vata 0,035, plytos 0,77, betonas 1,4…); pagal {{ui:Medžiagų šilumos laidumas}} įveskite gamintojo, ir visos iš tų sluoksnių gautos U vertės seka jį.
3. **Tipinė vertė** (sienos 0,3, stogai 0,2, grindys 0,25, langai 1,4, durys 1,6 W/m²K), pažymėta kaip tokia – įveskite savo.

Patalpos išsamiai įvesta U vertė įrašoma į elemento bendrą savybių rinkinį kaip `ThermalTransmittance` (vienas žingsnis; {{key:Mod+Z}} ją atšaukia). Jei kelis elementus naudoja tas pats rinkinys (pavyzdžiui, vienas sienos tipas), jie visi pasikeičia kartu, o būsenos eilutėje nurodoma, kiek jų.

## Šildymas

- **Šilumos nuostoliai** = Σ U × A × (vidus − lauke) visam, kas eina į lauką, + Σ U × A × (vidus − žemė) grindims ant žemės + 0,335 × oro kaita per valandą × patalpos tūris × (vidus − lauke). 0,335 Wh vienam kubiniam metrui ir kelvinui yra oro tankis (1,2 kg/m³), padaugintas iš jo šilumos talpos (1005 J/kgK).
- **Šildymas per metus** = (patalpos nuostolis lauke vienam laipsniui, per konstrukciją ir orą, plius jos nuostolis į žemę, proporcingai pritaikytas tam pačiam skirtumui) × **laipsnių dienos** × 24 ÷ 1000, kWh. Įveskite vietovės laipsnių dienas arba {{ui:Nuskaityti laipsnių dienas iš CSV…}} (viena eilutė vienai dienai ar mėnesiui; paskutinis skaičius kiekvienoje eilutėje sumuojamas). Naudokite laipsnių dienas pagal savo šaltinio bazinę temperatūrą: ta bazinė temperatūra jau atsižvelgia į nemokamą žmonių, šviestuvų ir saulės šilumą.

## Vėsinimas

**Vėsinimo smailė** = šiluma per konstrukciją ir orą esant vasaros projektinei temperatūrai + žmonės (grindų plotas vienam asmeniui × šiluma vienam asmeniui) + apšvietimas ir įranga vienam kvadratiniam metrui grindų + **saulė**: tos patalpos {{ui:Saulė pro langus tam tikrą dieną}} smailė. Pirmiausia apskaičiuokite saulę karštą dieną; kol to nepadarysite, saulė skaičiuojama kaip 0, ir skiltyje tai nurodoma. Kiekvienos dalies smailės sudedamos, net jei jos įvyksta skirtingomis valandomis, todėl šiek tiek pervertinama.

## Ko neįtraukiama

- ISO 52016-1 mėnesiniai ir valandiniai metodai (mokamas standartas), pastato masėje sukaupta šiluma, šiluminiai tiltai, šildymo ir vėsinimo sistemų veikimas bei klimato failai.
- Gretimos patalpos priimamos toje pačioje temperatūroje; nešildomos erdvės nemodeliuojamos.

Taip pat žr. [Įvertinti dienos šviesą kiekvienoje patalpoje](topic:daylight-factor).
