---
title: Plieninių vamzdžių ruošos ir ruošų brėžiniai
summary: Supjaukite plieninio sandūrinio suvirinimo vamzdžio trasą į ruošas pagal ilgiausią leidžiamą ilgį ir pagal jūsų nustatytas montažinio suvirinimo vietas, sunumeruokite jas ir atsisiųskite ruošos brėžinį kiekvienai ruošai (3D vaizdas, pjovimo ilgiai, jungiamosios detalės, suvirinimai, medžiagų sąrašas) PDF ir CSV formatais; orkliams gaunamas tiesių gabalų pjovimo sąrašas.
keywords: ruoša, ruošos, ruošos brėžinys, izometrija, gamyba, paruošimas, montažinis suvirinimas, gamyklinis suvirinimas, sandūrinis suvirinimas, pjovimo ilgis, pjovimo sąrašas, medžiagų sąrašas, bom, plieninis vamzdis, schedule 40, linijos numeris, orklių pjovimo sąrašas, orklių gabalai
from: 539f51de
---

## Ką darysite

Vamzdžių trasą paverskite gabalais, kuriuos dirbtuvėse suvirina, o montuotojas sumontuoja: ruošomis, kurios nėra ilgesnės už jūsų pasirinktą ilgį, padalytomis ten, kur dedate montažinius suvirinimus, kiekviena su savo brėžiniu.

Į ruošas pjaunamas tik **plieninis sandūrinio suvirinimo vamzdis** (vamzdžių dydžiai pagal ASME B36.10M, alkūnės pagal ASME B16.9 ilgąjį spindulį). Variniai, PVC ir PEX vamzdžių jungtys nėra sandūriniai suvirinimai, todėl jų trasos ruošų neturi.

## Trasos supjaustymas į ruošas

1. Pasirinkite plieninio vamzdžio trasą. Savybėse pažymėkite **Pjaustyti į ruošas**.
2. **Ilgiausia ruoša**: didžiausias ašinės linijos ilgis, kurį gali turėti viena ruoša (pradžioje 6 m, apie 20 ft).
3. **Linijos numeris**: kiekvienos ruošos numerio dalis. Nauja ruošta trasa gauna kitą laisvą jos sistemos numerį.

Ruošos numeruojamos išilgai trasos nuo jos pirmo taško: `CHW-12-S01`, `CHW-12-S02` … (sistema, linijos numeris, ruoša). Ruoša auga detalė po detalės; detalė, kuri padarytų ją per ilgą, pradeda kitą ruošą, o tiesi atkarpa, ilgesnė už ruošą, pjaunama ten, kur ruoša jau pilna.

## Montažinių suvirinimų vietos

1. Atidarykite {{ui:Versija}} ir pasirinkite {{ui:Montažinis suvirinimas}}.
2. Spustelėkite ruošos vamzdį ten, kur turi būti montažinis suvirinimas. Tiesioje atkarpoje vamzdis ten perpjaunamas; jungiamojoje detalėje ar vožtuve suvirinimas perkeliamas į artimesnę jungtį.

Trasos savybėse išvardyti jos montažiniai suvirinimai, kiekvienas su {{ui:Pašalinti}}. Kiekvienas pakeitimas yra vienas {{ui:Anuliuoti}} žingsnis.

## Ruošų brėžiniai

Ruošinės trasos savybėse:

- {{ui:Ruošų brėžiniai (PDF)}}: po vieną puslapį kiekvienai ruošai. Kairėje – ruoša 30° izometriniame vaizde: jos tiesios atkarpos sunumeruotos, dirbtuvių suvirinimai pažymėti taškais, montažiniai suvirinimai pažymėti FW, ir plano šiaurė. Dešinėje – ruošos numeris, dydis, tvarkaraštis ir ilgis, tada jos **pjovimo ilgiai**, **jungiamosios detalės**, **suvirinimai** (dirbtuvių sandūrinis suvirinimas kiekvienoje jungtyje ruošos viduje, montažinis suvirinimas ten, kur ji susiglaudžia su kita ruoša) ir jos **medžiagų sąrašas** su vamzdžio svoriu (ASME B36.10M paprastojo galo svoris).
- {{ui:Ruošų sąrašas (CSV)}}: tas pats, blokas kiekvienai ruošai.

:::note
Pjovimo ilgiai matuojami galas į galą, kaip nubraižyta: šaknies tarpas ar suvirinimo priedas nėra atimami. Alkūnės yra ilgojo B16.9 spindulio; trišakiai, reduktoriai ir vožtuvai yra bendriniai, dydžiuojami pagal vamzdį, o ne pagal B16.9 ar gamintoją, ir brėžinyje tai nurodoma. Jungiamųjų detalių svoriai nepateikiami. Braižymo ir koordinavimo priemonė, dydžius nustato inžinierius.
:::

## IFC faile

Kiekviena ruoštos trasos dalis turi **CadCraft_Spool** su jos SpoolId, trasa, ruošos numeriu trasoje ir vieta, kur ji prasideda bei baigiasi išilgai trasos. Trasa išsaugo savo taisykles (ilgiausia ruoša, montažiniai suvirinimai, linijos numeris) savo rinkinyje, todėl ruošos atsistatys tokios pat, kai failas vėl atidaromas.

## Orkliai: pjovimo sąrašas

Atidarykite {{ui:Versija}} ir spustelėkite {{ui:Ortakių pjovimo sąrašas}}: CSV tiesių orklio gabalų pagal sistemą, formą ir dydį, kiekviena tiesi atkarpa supjaustyta į gabalus pagal **Gabalo ilgis** ortakio juostoje (pradžioje 1500 mm, apie 5 ft) ir likutį. Tik ilgiai: be siūlių, storių ar jungčių.
