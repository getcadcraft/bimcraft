---
title: Skenavimo palyginimas su modeliu ir 4D grafiku
summary: Įvertinkite kiekvieną modelio elementą pagal atidarytą taškų debesį (pastatyta, iš dalies, trūksta, nepasiekta), matykite pastatytą procentą, nudažykite modelį pagal tai, o įkėlus 4D grafiką išvardykite, kas atsilieka ar lenkia 4D dieną.
keywords: skenavimas, taškų debesis, eiga, procentas baigta, pastatyta, trūksta, atsilieka nuo grafiko, lenkia grafiką, 4D, statybvietės eiga, nuokrypis, kaip pastatyta, lazerinis skenavimas, dronas, palyginti
from: 6fdc9003
---

Atidarykite IFC, šalia atidarykite taškų debesį (žr. [Taškų debesys](topic:point-clouds)) ir įdėkite jį į modelį. Skiltis {{ui:Palyginti skenavimą su modeliu}} atsiranda dešiniajame skydelyje, kol atidarytas debesis.

## Ką tai daro

Spustelėkite {{ui:Palyginti}}. Kiekvienas modelio elementas vertinamas pagal savo paviršių, nes būtent tai mato skeneris. Šeši jo dėžutės paviršiai suskaidomi į maždaug 20 cm langelius; langelis įskaitomas, kai skenavimo taškas patenka į jūsų {{ui:Nuokrypis}} ribas (pradžioje 50 mm) nuo paviršiaus. Skaičiuojamas geriausias didelis paviršius, todėl siena, nuskenuota iš vienos pusės, nėra baudžiama dėl kitos pusės.

- **Pastatyta**: matoma bent 40 % paviršiaus.
- **Iš dalies**: nuo 10 % iki 40 %.
- **Trūksta**: mažiau nei tai, bet skenavimas pasiekia elementą (taškai per 1.5 m nuo jo).
- **Nepasiekta**: skenavimas ten niekada nebuvo, todėl apie jį nieko nesakoma.

Pastatytiems ir iš dalies pastatytiems elementams taip pat pateikiamas vidutinis skenavimo taškų nuokrypis nuo modelio paviršiaus ir nurodoma, ar elementas savo vietoje (per nuokrypį), arti (per tris kartus) ar nukrypęs (toliau). Matomi tik nuokrypiai iki penkis kartus didesnio už nuokrypį: elementas, pastatytas toliau nei tai, rodomas kaip trūkstamas.

Santraukoje pateikiamas pastatytas procentas tarp elementų, kuriuos pasiekia skenavimas, pagal kiekį ir pagal tūrį. Iš dalies pastatyti elementai skaičiuojami atskirai ir nepridedami prie pastatytųjų.

## Palyginimas su 4D grafiku

Įkėlus 4D grafiką (žr. [4D grafikas](topic:4d-schedule)), rezultatas taip pat naudoja dieną, nustatytą 4D slankiklyje: elementai, kurie iki tos dienos turėjo būti baigti, o skenavimas jų nerodo kaip pastatytų, yra **atsilikę nuo grafiko**; elementai, kurių terminas dar nėjo, o jie pastatyti, yra **lenkiantys**. Atsilikę elementai išvardyti {{ui:Problemos}} ir lentelę galima filtruoti pagal juos. Be grafiko nieko nesakoma apie atsilikimą ar lenkimą.

## Lentelė ir modelis

Spustelėkite eilutę, kad pasirinktumėte elementą. {{ui:Nudažyti modelį}} nudažo elementus žaliai (pastatyta), gintarine (iš dalies), raudonai (trūksta) arba pilkai (nepasiekta); {{ui:Savos spalvos}} grąžina juos atgal. {{ui:Įrašyti CSV}} įrašo lentelę. {{ui:Pažymėti atitinkamus elementus kaip patikrintus lauke}} pažymi kiekvieną elementą, matytą kaip pastatytą ir per nuokrypį, kaip patikrintą lauke (LOD 500, metodas skenavimas), vienu veiksmu, kurį galite anuliuoti. Žr. [Pažymėti elementus kaip patikrintus arba patikrintus lauke](topic:verification).

:::warning
Tai palygina kiekvieno elemento dėžutę su skenavimo taškais per nuokrypį. Tai **ne matavimas, ne kiekių skaičiavimas ir ne mokėjimo pagrindas**. Elementas, paslėptas prie nuskenuoto (siena už apdailos, perdanga po grindų danga), bendrina savo paviršių ir gali būti rodomas kaip pastatytas; lenktas ar nuožulnus elementas turi dėžutę, didesnę už savo kūną, ir gali būti rodomas kaip iš dalies pastatytas arba trūkstamas. Prieš veikdami pažiūrėkite sąrašą. Leidimų komentarai ir eigos pastabos čia neįeina: jie lieka stulpeliuose, kuriuose jūs juos laikote.
:::

Asistentas gali atlikti tą patį palyginimą įrankiu {{ui:Palyginti skenavimą su modeliu}}; jis nieko nekeičia modelyje.
