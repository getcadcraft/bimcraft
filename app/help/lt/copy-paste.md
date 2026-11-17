---
title: Bibliotekos elementų kopijavimas, įklijavimas ir dubliavimas
summary: Nukopijuokite įdėtą bibliotekos elementą ir įklijuokite jį ten, kur spustelėsite, vietoje šalia originalo arba į kitą modelį; nukopijuokite bet kurio kito elemento savybes kaip tekstą; anuliuokite ir perdarykite.
keywords: kopijuoti, įklijuoti, dubliuoti, iškarpinė, įklijuoti vietoje, iškirpti, naikinti, pasirinkti viską, anuliuoti, perdaryti, redagavimo meniu, daugiau, bibliotekos elementas, įdėjimas, kartoti, masyvas
from: 6ac15931
---

## Ką darysite

Įdėkite daugiau kopijų elemento, kurį jau įdėjote: antrą darbo stalą, eilę kriauklių. Ši tema apie **įdėtus bibliotekos elementus**, t. y. elementus, kuriuos BimCraft įrašė į modelį: vieną jų galima įklijuoti į bet kurį modelį, net kitoje kortelėje. Sienos, durys ir visi kiti elementai kopijuojami, iškerpami, įklijuojami ir naikinami tuo pačiu būdu savo modelyje: žr. [Naikinti, iškirpti, kopijuoti ir įklijuoti statinio elementus](topic:edit-elements).

Komandos yra įrankių juostoje virš modelio: {{ui:Anuliuoti}}, {{ui:Perdaryti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}} ir {{ui:Daugiau}}, meniu su {{ui:Iškirpti}}, {{ui:Kopijuoti}}, {{ui:Įklijuoti}}, {{ui:Įklijuoti vietoje}}, {{ui:Dubliuoti}}, {{ui:Naikinti}}, {{ui:Pasirinkti viską}} ir {{ui:Nieko nepasirinkti}}. Komanda, kuri šiuo metu negali veikti, yra pilkai nuspalvinta; užveskite žymeklį, kad perskaitytumėte priežastį, arba spustelėkite ją – būsenos eilutė pasakys, kodėl.

## Žingsniai

1. Atidarykite IFC modelį, kuriame yra bibliotekos elementas, arba pirmiausia įdėkite vieną. Žr. [Įdėti įrangą ir baldus iš bibliotekos](topic:place-from-library).
2. Spustelėkite elementą 3D vaizde. Jo savybėse rodomas langelis **Bibliotekos elementas**.
3. Spustelėkite {{ui:Kopijuoti}} arba paspauskite {{key:Mod+C}}.
4. Spustelėkite {{ui:Įklijuoti}} arba paspauskite {{key:Mod+V}}. Atsidaro įdėjimo juosta, o žymeklį seka permatomas langelis, pasuktas kaip originalas.
5. Paspauskite {{key:R}}, kad pasuktumėte 90°, {{key:Tab}}, kad jo galą prilygintumėte prie sienos, arba įrašykite X ir Y įdėjimo juostoje.
6. Spustelėkite vietą, kur turi būti kopija. Kiekvienas spustelėjimas įdeda dar vieną kopiją; paspauskite {{key:Esc}}, kad baigtumėte.
7. Spustelėkite {{ui:Įrašyti kaip IFC}}, kad atsisiųstumėte redaguotą modelio kopiją.

## Įklijuoti vietoje

{{ui:Daugiau}}, {{ui:Įklijuoti vietoje}} arba {{key:Mod+Shift+V}} įklijuoja be spustelėjimų, tomis pačiomis X ir Y koordinatėmis ir tokiu pat pasukimu:

- **Į tą patį modelį, tame pačiame aukšte**: du elementai vienoje vietoje būtų bevertis, todėl kopija atsiduria tiesiai šalia originalo – vieno elemento plotis pliusas 100 mm išilgai elemento paties pločio. Kad sukurtumėte eilę, įklijuokite vietoje dar kartą iš naujos kopijos.
- **Į kitą aukštą arba į kitą modelį**: tiksliai tos pačios X, Y ir pasukimo koordinatės. BimCraft naudoja aukštą tuo pačiu pavadinimu; jei tokio nėra, – artimiausio aukščio. Būsenos eilutėje nurodoma, kuris.

## Dubliuoti

{{ui:Daugiau}}, {{ui:Dubliuoti}} arba {{key:Mod+D}} nukopijuoja pasirinktą elementą ir iškart pradeda jį įklijuoti: vienas žingsnis vietoj dviejų.

## Į kitą modelį arba kitą kortelę

Tai, ką nukopijuojate, išsaugoma šioje naršyklėje, todėl galite atidaryti kitą IFC modelį arba BimCraft kitoje kortelėje ir įklijuoti ten. Kitam modeliui reikia paties bibliotekos elemento: BimCraft jį turi, kai elementas buvo įdėtas, pakeistas arba atnaujintas šioje kortelėje. Elementą, įdėtą ankstesnėje sesijoje, galima įklijuoti iš naujo tik į jo paties modelį; kitame modelyje įdėkite jį iš skirtuko {{ui:Biblioteka}}.

## Ką turėtumėte matyti

- Kopiją modelyje, pažymėtą, su tuo pačiu bibliotekos elementu, licencija, įrangos duomenimis, kiekiu ir pastaba kaip originalas, ir **kitu laisvu elemento numeriu**. Numerį keiskite savybėse, skyriuje `CadCraft_Placement`.
- Pakeitimų sąraše – „Įdėta: *elementas* (elementas *n*)“. {{key:Mod+Z}} tai atšaukia; {{key:Mod+Y}} vėl įdeda.

## Verta žinoti

- Kopijos turi originalo tipą, todėl visos naudoja vieną geometrijos rinkinį, kaip ir tada, kai tą patį elementą įdedate du kartus.
- {{ui:Anuliuoti}} ir {{ui:Perdaryti}} apima visus pakeitimus: redaguotas reikšmes, įdėjimus, įklijavimus, keitimus ir atnaujinimus. Perdarymas įdeda įdėjimą atgal į tą pačią vietą; naujas pakeitimas išvalo tai, ką dar galima perdaryti.
- Brėžinio 2D vaizde nėra ko pasirinkti, todėl nėra ko kopijuoti. Brėžiniui keisti naudokite {{ui:Redaguoti CadCraft}}, kai ji rodoma.

## Dažnos klaidos

- **{{ui:Įklijuoti}} sako, kad elementai atkeliavo iš kito modelio.** Paskutinis nukopijuotas dalykas buvo statinio elementas arba keli elementai: jie įklijuojami tik į savo modelį. Pasirinkite vieną įdėtą bibliotekos elementą ir nukopijuokite jį.
- **{{ui:Įklijuoti}} sako, kad kopija atkeliavo iš kito modelio be savo bibliotekos elemento.** Vieną kartą įdėkite elementą iš skirtuko {{ui:Biblioteka}} šioje kortelėje, tada nukopijuokite ir įklijuokite.
- **{{key:Mod+C}} kopijuoja puslapio tekstą.** Puslapyje buvo pažymėtas tekstas. Pirmiausia spustelėkite modelį.

## Susiję

- [Klavišai ir pelė](topic:keyboard#edit)
- [BimCraft parametrai](topic:settings)
