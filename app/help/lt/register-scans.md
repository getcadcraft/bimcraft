---
title: Sulygiuoti kelis nuskaitymus į vieną
summary: Padėkite nuskaitymus, padarytus iš skirtingų vietų, į vieną rėmą pagal pasirinktas taškų poras arba įvestus taikinius, patikslinkite juos su ICP, įrašykite sulygiavimą kaip projektą ir eksportuokite sulygiuotą debesį kaip LAS arba E57.
keywords: sulygiavimas, sulygiuoti, nuskaitymai, taškų debesis, icp, iteratyvus artimiausio taško metodas, taikiniai, taškų poros, standus pertvarkymas, lygiuoti, sujungti, e57, las, nuskaitymas į BIM
from: e8e270db
---

## Ką atliksite

Keli to paties vietos nuskaitymai (kiekvienas iš savo skenerio pozicijos) prasideda savo koordinatėmis. Sulygiuokite juos: duokite kiekvienam nuskaitymui vieną padėtį, kad visi būtų viename rėme, tada įrašykite tai kaip projektą ir parašykite sulygiuotą debesį kaip vieną LAS arba E57 failą.

## Nuskaitymų išdėstymas

1. Atidarykite dialogą ({{ui:Sulygiuoti nuskaitymus…}} pradžios skydelyje arba {{ui:Rodyti}} › {{ui:Sulygiuoti nuskaitymus…}}, kai modelis atidarytas). {{ui:Pridėti nuskaitymus…}} priima LAS, LAZ, E57, PLY, PCD, PTX, PTS arba XYZ failus, arba juos numeskite ant dialogo. Nuskaitymai su skirtingais vienetais atmetami su pastaba: pirmiausia vieną iš jų konvertuokite.
2. Pasirinkite {{ui:Nuskaitymas perkelti}} ir {{ui:Sudėti pagal}}. Paveikslėlyje kiekvienas nuskaitymas rodomas rėme, kokioje jis yra dabar, kiekvienas savo spalva: {{ui:Planas}}, {{ui:Priekis}} arba {{ui:Iš šono}}; vilkite, kad slinktumėte, ratuku priartinkite.
3. **Pagal taškų poras.** Spustelėkite {{ui:Pasirinkti porą}}, tada tašką nuskaitymo, kurį perkeliate, ir tą pačią vietą kitame nuskaityme (kampas, taikinys, kolonos pėda). Atlikite tai bent tris kartus, su taškais, kurie nėra vienoje tiesėje ir yra išsklaidyti. Spustelėkite {{ui:Dėti pagal poras}}: nuskaitymas padedamas mažiausių kvadratų metodu, o **Liko** rodo, kiek kiekviena pora vis dar nepataiko. Porą su dideliu skaičiumi pasirinkote blogai: pašalinkite ją kryžiuku ir padėkite iš naujo.
4. **Pagal taikinius.** Jei žinomos taško tikrosios koordinatės (išmatuoti taikiniai), spustelėkite {{ui:Pasirinkti, tada įvesti taikinį}}, spustelėkite tašką jo nuskaitymo ir eilutėje įveskite taikinio X, Y ir Z. Poros ir įvesti taikiniai maišomi laisvai.

## Patikslinti su ICP

Poros duoda šiurkštų išdėstymą. {{ui:Patikslinti}} perkelia nuskaitymą, kol jo paviršiai atsidurs ant kito nuskaitymo paviršių: pirmiausia **taškas į tašką**, tada **taškas į plokštumą**. Lentelė išvardija kiekvieną žingsnį su jo paklaida ir kiek taškų sutapo; virš jos esanti eilutė rodo, kaip paklaida mažėja. {{ui:Stabdyti}} baigia vykdymą po dabartinio žingsnio ir palieka pasiektą rezultatą. {{ui:Anuliuoti}} atšaukia visą vykdymą (arba paskutinį išdėstymą); {{ui:Atstatyti}} grąžina nuskaitymą į jo failo koordinates.

Kad nešiojamajame kompiuteryje būtų greita, ICP dirba su sumažinta taškų dalimi ({{ui:Naudojami taškai}}, 5 000–60 000) ir ignoruoja sutapimus, esančius toliau nei {{ui:Didžiausias atitikimo atstumas}} (pagal numatymą – 5 % nuskaitymo dydžio, mažėjančio, kai stabilizuojasi). Jam pirmiausia reikia šiurkštaus išdėstymo: nuskaitymai, kurie vos persidengia, praneša, kad jų negalima sutapatinti. Paviršiai, kurie yra tik plokšti arba tik tiesūs, negali nustatyti padėties išilgai savęs; tokiu atveju pridėkite poras.

## Įrašyti ir eksportuoti

- {{ui:Įrašyti projektą}} įrašo mažą `.ccscans.json` failą: kiekvieno nuskaitymo pavadinimą, dydį ir pirmųjų 64 KB atspaudą kartu su jo transformacija. Taškų jame nėra. {{ui:Atidaryti projektą…}} suranda nuskaitymų failus pagal tas nuorodas (failai pirma turi būti pridėti) ir atkuria kiekvieną transformaciją.
- {{ui:Eksportuoti LAS}} ir {{ui:Eksportuoti E57}} įrašo vieną failą su visais nuskaitymais jų sulygiuotoje vietoje. Originalūs taškai niekada nepakeičiami; transformacija taikoma išeinant. Kai įjungta {{ui:Skaityti visus taškus iš failų}}, kiekvienas failas perskaitomas iš naujo kiekvienam taškui (iki 20 milijonų kiekvienam nuskaitymui); kai išjungta, įrašomi tik peržiūros lange rodomi taškai.
- {{ui:Rodyti sulygiuotą debesį}} (BimCraft) įrašo LAS ir atidaro jį 3D vaizde šalia modelio, kaip bet kurį debesį.

:::note
Nieko neįkeliama. Sulygiavimas dirba su failų pačių vienetais ir išlaiko milimetrus: LAS įrašomas su tinkamu mastelio koeficientu (iki 0,1 mm), E57 – su dvigubo tikslumo skaičiais. Koordinačių sistema perkeliama į LAS tik tada, kai visi nuskaitymai nurodo tą patį EPSG kodą. E57 rašytojas yra mūsų pačių; jį tikrina skaitydami failus atgal šiuo skaitytuvu ir libE57Format.
:::
