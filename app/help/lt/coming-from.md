---
title: Perėjimas iš kitų BIM ir brėžinių programų
summary: Kaip įpročiai iš stalinių BIM kūrimo ir DWG peržiūros programų atitinka BimCraft ir kokie skirtumai dažnai painioja.
keywords: perjungimas, perkėlimas, pažįstama, stalinis bim, šeima, parametrai, projekto naršyklė, savybių paletė, vaizdo kubas, xref, sluoksnių tvarkyklė, skirtumai, palyginti
from: 2de629af
---

Jei mokate Revit, didžioji dalis BimCraft atrodys pažįstama pavadinimais, bet kitokia pagal apimtį. Svarbiausias skirtumas: **ši versija skaito ir tikrina modelius bei redaguoja IFC duomenis. Ji dar nekuria modelių kaip Revit.** Negalite braižyti sienų, dėti šeimų, kurti vaizdų ar lapų arba įrašyti projekto failo. Galite atverti beveik bet kurį pastato failą bet kuriame kompiuteryje naršyklėje, pamatyti, kas jame yra, patikrinti visą projekto aplanką ir ištaisyti IFC modelio duomenis.

## Įpročių atitikmenys

| Jei įpratę prie | BimCraft |
|---|---|
| `.rvt` atidarymo Revit, kad pamatytumėte modelį | BimCraft atveria `.rvt` kaip failo kortelę: versija, projekto informacija, nuorodos, peržiūra. 3D modeliui eksportuokite IFC ir atidarykite jį. [Skaityti projekto ar šeimos failą](topic:read-rvt-file) |
| Patikrinimo, kurioje versijoje failas buvo įrašytas, prieš jį atidarant | Kortelės viršuje rašoma „įrašyta Revit …“, be failo atnaujinimo ar keitimo |
| Projekto naršyklė | Vaizdų ir lapų naršyklės nėra. IFC modelis turi {{ui:Aukštai}} ir {{ui:Elementai}} sąrašus; brėžinys turi lapų skirtukus |
| Savybių paletė | Dešinėje esantis {{ui:Savybės}} skydelis, skirtas spustelėtam elementui. IFC savybių rinkiniai vietoj parametrų grupių |
| Egzemplioriaus ir tipo parametrai | Egzemplioriaus savybių rinkiniai ir rinkiniai, pažymėti „(type)“. Tipo pakeitimas galioja kiekvienam to tipo elementui, kaip Revit. [Pakeisti tipo savybę visiems to tipo elementams](topic:type-vs-instance) |
| Redaguoti tipą | Dialogo nėra: spustelėkite reikšmę „(type)“ rinkinyje ir įveskite |
| Kelių elementų pasirinkimas, filtrai, Pasirinkti visus egzempliorius | Po vieną elementą. Dar neįdiegta |
| Vaizdo kubas ir navigacijos ratas | Vaizdo kubas apatiniame dešiniajame kampe, keturi mygtukai ({{ui:Tilpti}}, {{ui:Viršus}}, {{ui:Priekis}}, {{ui:Iš šono}}) ir laisvas sukimas. Navigacijos rato nėra |
| Shift ir vidurinio mygtuko tempimas sukti, vidurinio mygtuko tempimas slinkti | Tempimas kairiuoju mygtuku sukasi, tempimas dešiniuoju (arba {{key:Shift}} ir tempimas) slenka, ratukas keičia mastelį. {{ui:BIM juosta}} meniu stilius perjungia į slinkimą vidurinio mygtuko tempimu, o sukimą – {{key:Shift}} su vidurinio mygtuko tempimu. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse) |
| Aukštų planai, pjūviai, pjūvio dėžės | Vienu metu viena {{ui:Pjūvis}} plokštuma ({{key:X}}); pjūvio dėžių ar 2D planų nėra. [Pjauti IFC modelį pjūvio plokštuma](topic:section-plane) |
| Slėpti vaizde, izoliuoti, matomumas ir grafika | {{ui:Aukštai}} įjungti ir išjungti, {{ui:Erdvės}} ir {{ui:Kraštinės}}. Slėpimo pagal elementą dar nėra |
| Patalpos | IFC erdvės, iš pradžių paslėptos. Spustelėkite {{ui:Erdvės}} |
| Įrašyti, Įrašyti kaip, sinchronizuoti su centrine | {{ui:Įrašyti kaip IFC}} atsisiunčia naują IFC failą. Originalas niekada nekinta. Centrinio failo ir bendro darbo nėra |
| Anuliuoti su {{key:Mod+Z}} | Veikia su IFC pakeitimais, kol neįrašėte. [Keisti IFC savybes ir įrašyti pakeistą kopiją](topic:edit-ifc-properties) |
| Tvarkyti nuorodas | Atverkite projekto aplanką: kiekviena nuoroda patikrinama ir pažymima **Šiame aplanke**, **Rastas tas pats pavadinimas**, **Bibliotekos failas** arba **Ne šiame aplanke**. [Atverti visą projekto aplanką](topic:open-project-folder) |
| Auditas arba failo atidarymas, kad pamatytumėte, ar jis nesugadintas | Aplanko ataskaita per kelias sekundes patikrina, ar kiekviena kopija ir atsarginė kopija nėra nukirpta. [Tikrinti aplanką dėl pažeistų kopijų](topic:check-folder-health) |
| Tinkamo failo pasirinkimas iš netvarkingo aplanko | Langelis {{ui:Pradėkite čia}} pasiūlo vieną, nurodydamas priežastis |

Jei modelius atidarote daugiausia tikrinimui, kaip modelių tikrinimo ar IFC peržiūros programoje, pasirinkite {{ui:Peržiūra}} meniu stilių: peržiūros ir tikrinimo įrankiai yra pirmi, o statybos įrankiai laukia viename meniu. Žr. [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).

## Iš DWG failų peržiūros

Jei DWG failus atidarote AutoCAD ar DWG peržiūros programoje:

| Jei įpratę prie | BimCraft |
|---|---|
| Modelio ir išdėstymo skirtukų apačioje | Skirtukai virš brėžinio: {{ui:Modelis}} ir po vieną kiekvienam lapui |
| ZOOM Extents, dvigubas ratuko spustelėjimas | Dvigubas spustelėjimas, {{key:F}} arba {{ui:Tilpti}} |
| Slinkimas vidurinio mygtuko pagalba | Tempkite bet kuriuo mygtuku |
| Sluoksnių tvarkyklė | {{ui:Sluoksniai}} sąrašas: pažymėkite, kad rodytumėte, nuimkite žymę, kad slėptumėte, {{ui:Visi įjungti}} ir {{ui:Visi išjungti}} |
| xref tvarkyklė | **Susieti brėžiniai** dešinėje, su **Rodoma** arba **Nerasta**, ir {{ui:Pridėti susietus brėžinius…}} |
| Spausdinimo peržiūra | {{ui:Spausdinimo vaizdas}} arba {{key:P}}: juoda ant baltos, su linijų storiais. Nespausdina |
| Bloko atributų duomenų išrinkimas | {{ui:Įranga}} skirtukas žymėtiems maitinimo įstaigų brėžiniams, su {{ui:Atsisiųsti CSV}} |
| Matuoti, braižyti, redaguoti, įrašyti kaip | Nėra BimCraft. Braižo ir redaguoja CadCraft braižymo programa |

## Skirtumai, kurie painioja

- **Veikia naršyklėje, o naršyklė atsargiai elgiasi su jūsų failais.** BimCraft gali skaityti tik jums perduotus failus ir aplankus – pasirinkus juos arba įvilkus. Ji negali pati atverti failo ir negali jo perrašyti. Kiekvienas įrašymas yra atsisiuntimas.
- **Nieko neįkeliama.** Žodis „upload“ kai kurių naršyklių aplankų dialoguose yra naršyklės pačios formuluotė. Failai lieka jūsų kompiuteryje.
- **IFC yra modelių formatas.** Projekto failas atsidaro kaip kortelė, nes jo 3D turinys nedokumentuotas. Laikykite IFC keliu, kuriuo modeliai patenka į BimCraft.
- **Pakeitimai įrašomi kopijuojant.** Vieno elemento reikšmės keitimas niekada nekeičia kaimyninių, net kai eksportuotojas tą reikšmę buvo bendrinęs tarp jų. Tipo savybės – tyčinė išimtis.
- **Nėra projekto, nėra vaizdų.** BimCraft rodo po vieną failą ir jo neprisimena, kai uždarote skirtuką, išskyrus neseniai naudotų aplankų pavadinimus Chrome ir Edge naršyklėse.
- **Mac klavišai.** Kur Revit Windows spartieji klavišai naudoja Ctrl, BimCraft sparčiesiems klavišams naudojamas {{key:Mod}}: Mac kompiuteryje – Command.
- **Jūsų pelės įpročiai.** Sukti – kairysis mygtukas, o ne Shift ir vidurinis mygtukas, nebent pasirinksite {{ui:BIM juosta}} meniu stilių arba patys nustatysite mygtukus [Meniu, klavišai ir pelė](topic:menus-keys-and-mouse).

Žr. [Kas dar neįdiegta](topic:not-built-yet), ką šiandien naudoti vietoj.
