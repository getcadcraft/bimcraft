---
title: Žiniaraščio išdėstymas, įrašymas ir eksportas
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: žiniaraščio išdėstymas, grupuoti pagal, tarpinė suma, suma, antraštės, biuro standartas, numatytosios taisyklės, sąranka, durų žiniaraštis pagal aukštus, ugniai atsparumas, apkaustai, xlsx, darbaknygė, internetinė lentelė, įklijuoti, csv, eksportas, elementai, pasirinkti iš žiniaraščio, skaičius
from: 95dfd801
---

## Ką darysite

Paverskite paprastą žiniaraštį tuo, kurį jūsų biuras išleidžia: sugrupuotu pagal aukštą, tipą ar patalpą, su tarpinėmis sumomis ir bendra suma, su reikiamais stulpeliais, savo pavadinimu. Tada išsiųskite jį į skaičiuoklę. Kiekviena eilutė ir kiekvienas skaičius vis dar žino elementus, iš kurių jie gauti.

## Žingsniai

1. Įjunkite {{ui:Braižymas}} ir kairiajame skydelyje atidarykite **Žiniaraščiai**. Pasirinkite žiniaraštį, pavyzdžiui, **Durys**.
2. Virš lentelės pasirinkite **Grupuoti pagal** (žiniaraščio stulpelį, pavyzdžiui, Aukštas arba Tipas, arba **Be grupavimo**) ir **Sumos** (**Be sumų**, **Viena suma** arba **Tarpinės sumos ir bendra suma**). **Kaip nustatyta** palieka pasirinkimą išsaugotai sąrangai arba biuro standartui.
3. Norėdami pridėti stulpelį, nuskaitomą iš elementų, po lentele įveskite savybės ar žymos pavadinimą (pavyzdžiui, `FireRating`, `Pset_DoorCommon.FireRating` arba žymos pavadinimą, pavyzdžiui, `Ironmongery`) ir spustelėkite **Pridėti stulpelį**. BimCraft pirmiausia skaito paties elemento savybių rinkinius, tada jo tipo. Kai elementas dar neturi reikšmės, tai nurodoma; stulpelis užsipildo pats, kai reikšmė nustatoma.
4. Įveskite pavadinimą (pavyzdžiui, „Durų žiniaraštis pagal aukštus“) ir spustelėkite **Įrašyti kaip sąranką**. Sąranka saugoma pastato byloje ir prisijungia prie žiniaraščių sąrašo pagal savo pavadinimą. Ji seka kiekvieną modelio pakeitimą. **Pašalinti šią sąranką** ją pašalina. Abu yra vienas žingsnis Anuliuoti.

## Spustelėkite skaičių, kad pasirinktumėte, iš ko jis gautas

Spustelėkite bet kurią eilutę ar bet kurį atskirą skaičių, kad pasirinktumėte elementus, slypinčius už jo, plane ir 3D:

- eilutė pasirenka tos eilutės elementus;
- tarpinė suma ar bendra suma pasirenka viską, ką ji sudeda; grupės antraštė – jos grupę;
- skaičius, turintis savo elementų, pasirenka juos: sienos tipo **Atskaitymai** pasirenka jos duris ir langus, patalpos sienos plotas – jos sienas.

Tas pats veikia dokumente, sukurtame iš modelio: peržiūroje spustelėkite žiniaraščio skaičių.

## Eksportas

- **Atsisiųsti Excel** išsaugo .xlsx darbaknygę. Ilgiai, plotai, tūriai ir kiekiai yra tikri skaičiai vienetais, kuriuos rodo stulpelis (pėdos ir coliai lieka tekstu). Antrame lape **Elementai** kiekvienai eilutei išvardijami GlobalId elementų, iš kurių ji gauta.
- **Kopijuoti Google Sheets** įdeda žiniaraštį į iškarpinę kaip tabuliacijomis atskirtą tekstą. Google Sheet lentelėje spustelėkite langelį A1 ir įklijuokite. **Atidaryti naują Google Sheet** atveria `sheets.new` – Google adresą tuščiai lentelei – jūsų paskyroje Google. BimCraft neprisijungia prie Google ir nieko ten nesiunčia: įklijavimas yra jūsų.
- **Atsisiųsti CSV** išsaugo lentelę tokią, kokia ji išdėstyta ekrane.

## Biuro standartas

Biuras gali vieną kartą nurodyti, kaip išdėstomi jo žiniaraščiai. Įjunkite priedą **Numatytosios taisyklės** ([Numatytosios taisyklės](topic:default-policies)) ir nustatykite **Parametrai › Bendra › Numatytosios taisyklės › Žiniaraščio išdėstymas (biuro standartas)**:

| Taisyklė | Ką daro |
|---|---|
| Grupuoti žiniaraščius pagal | Aukštas, Tipas, Patalpa arba be grupavimo – visiems žiniaraščiams, turintiems tokį stulpelį |
| Sumos žiniaraščiuose | Be sumų, viena suma pabaigoje arba tarpinė suma po kiekviena grupe ir bendra suma |
| Žiniaraščio pavadinimas | Šablonas, pavyzdžiui, `{project}: {schedule}` |
| Stulpelių antraštės | Kaip parašyta, DIDŽIOSIOMIS RAIDĖMIS arba Kiekvieną Žodį Didžiąja Raide |

Standartas taikomas kiekvienam žiniaraščiui, nepriklausomai nuo to, kas jį nustatė: paprastiems žiniaraščiams skydelyje, išsaugotai sąrangai, žiniaraščiui, kurį nustato asistentas, eksportams ir žiniaraščiams dokumentuose. Sąranka, kuri nurodo savo grupavimą, sumas ar pavadinimą, juos palaiko; standartas užpildo likusią dalį. Skydelyje nurodoma, kurias dalis nustatė biuro standartas. Taisyklės keliauja kartu su kitomis Numatytųjų taisyklių byloje esančiomis taisyklėmis.

## Naudinga žinoti

- Sąranka nurodo savo šaltinio žiniaraštį ir jo stulpelius; joje nėra skaičių. Skaičiai kiekvieną kartą nuskaitomi iš modelio.
- Sąrašai, kurie nėra elementų eilutės (sienų sudėtys ir medžiagų legenda), čia neturi išdėstymo ir eksporto.
- Asistentas gali visa tai padaryti jums: žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
