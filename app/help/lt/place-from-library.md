---
title: Įrangos ir baldų įdėjimas iš bibliotekos
summary: Raskite elementą bibliotekoje, faile ar atidarytame brėžinyje, įdėkite jį į IFC modelio aukštą su šešėlio peržiūra, pasukite, prilipdykite prie sienos ir įrašykite.
keywords: perkelti, pasukti, vilkti, biblioteka, librarycraft, įdėti, įterpti, įranga, baldai, blokas, šeima, elementas, katalogas, turinys, kcl, csv, gltf, obj, rfa, dwg, ifc tipas
from: 3dad5d4b
---

## Ką darysite

Įdėkite bibliotekos elementą į IFC modelį: kriauklę, darbo stalą, kėdę. BimCraft jį įrašo kaip tinkamą IFC elementą su tipu, todėl visos to paties elemento kopijos naudoja vieną geometrijos rinkinį, o jo duomenys, elemento numeris ir licencija keliauja kartu.

## Žingsniai

1. Atidarykite IFC modelį.
2. Spustelėkite {{ui:Biblioteka}} skirtuką šalia {{ui:Savybės}} dešinėje arba {{ui:Biblioteka}} įrankių juostoje virš modelio.
3. Pasirinkite šaltinį:
   - **Įmontuoti simboliai**: bendrieji santechnikos plano simboliai, įtraukti į BimCraft pagal Apache-2.0 licenciją, pasiekiami neprisijungus. Prieš statybą patikrinkite jų matmenis. Elektrinių plano simbolių ir IFC elektros įrenginių ieškokite **Versija › Elektra**.
   - **Biblioteka**: CadCraft biblioteka šioje svetainėje. Viešiems elementams prisijungti nereikia.
   - **Šis failas**: atidaryto DWG ar DXF brėžinio blokai. Dinaminis blokas su matomumo būsenomis pateikiamas kartą kiekvienai būsenai, pavadintas „Kriauklė: dvigubas dubuo“ ir kiekvienas nubraižytas tik su tos būsenos objektais.
   - **Failai…**: DWG, DXF, IFC, glTF/GLB, OBJ, RFA ar CSV failas jūsų kompiuteryje. Jis nuskaitomas šiame skirtuke; nieko neįkeliama.
   - **Kiti šaltiniai**: kita biblioteka, kuri kalba tuo pačiu formatu. Įrašykite jos adresą vieną kartą; jis išsaugomas šioje naršyklėje.
4. Ieškokite arba pasirinkite kategoriją, tada spustelėkite kortelę. Kortelėje rodoma plano peržiūra, pavadinimas, gamintojas ir modelis, licencija bei versija.
5. Spustelėkite {{ui:Įterpti į planą}} (Planas rodinyje) arba {{ui:Įterpti į modelį}} (3D rodinyje). {{ui:Skaidyti}} rodinyje, kur rodomi ir planas, ir 3D vaizdas, mygtukas yra skaidomasis: pagrindinis jo veiksmas yra {{ui:Įterpti į planą}}, o rodyklė dešiniajame gale atveria meniu su {{ui:Įterpti į modelį}}. Arba vilkite kortelę ar elemento detalių paveikslėlį ant plano ar 3D vaizdo: elementas įdedamas ten, kur paleidžiate. Su rašikliu ar pirštu trumpam laikykite kortelę, tada vilkite.
6. Pasirinkite aukštą įdėjimo juostoje. 3D rodinyje aukštai virš jo įdėjimo metu paslepiami, o vaizdas pasisuka į viršų; plane jau rodomas tas aukštas. Pasirinkus {{ui:Įterpti į modelį}} tik iš plano, šalia atsiranda 3D vaizdas.
7. Perkelkite žymiklį virš modelio: permatomas laukelis parodys, kur eis elementas.
8. Paspauskite {{key:R}}, kad pasuktumėte 90°. Paspauskite {{key:Tab}} (arba {{ui:Prilipimas prie sienos}}), kad jo nugara atsiremtų į artimiausią sieną, nukreiptą į kambarį.
9. Spustelėkite, kad įdėtumėte. Arba įveskite padėtį **X, Y (mm)**, pavyzdžiui `1200, 3400`, ir paspauskite {{key:Enter}}.

Šviestuvas ar bet kas, kas kabinama iš viršaus: nustatykite **Tvirtinimas** į **Ant lubų**. Tada jo viršus atsiduria po lubomis toje vietoje (arba lygio aukštyje, kur lubų nėra). Kai plano rodinyje rodomas lubų planas, **Tvirtinimas** pradeda nuo **Ant lubų**.
10. Atsakykite į vieną klausimą: **elemento numeris** (įrašomas kitas laisvas numeris), kiekis ir pastaba. Paspauskite {{key:Enter}}.
11. Įdėkite daugiau arba paspauskite {{key:Esc}}, kad baigtumėte.
12. Spustelėkite {{ui:Įrašyti kaip IFC}}, kad atsisiųstumėte redaguotą kopiją.

## Planas ar modelis

Bibliotekos įdėjimo mygtukas seka rodinį, kuriame esate, ir pasikeičia iš karto, kai keičiate rodinį ({{ui:Planas}}, {{ui:Skaidyti}} ir {{ui:3D}} mygtukai, klaviatūra, failo atidarymas). Planas rodo vieną mygtuką {{ui:Įterpti į planą}}; 3D rodo vieną mygtuką {{ui:Įterpti į modelį}}; Skaidyti rodo skaidomąjį mygtuką, kurio pagrindinis veiksmas yra {{ui:Įterpti į planą}}, o meniu – {{ui:Įterpti į modelį}}. Abu būdai naudoja tą pačią įdėjimo juostą ir įrašo tą patį IFC elementą: žymiklis plano rodinyje veikia vienu atveju, o 3D rodinyje – kitu. Bet kada paspauskite {{key:Esc}}, kad sustabdytumėte.

Kortelės vilkimui atskiro klavišo nėra: skaidomasis ar paprastas mygtukas daro tą patį, kaip klaviatūra.

## Perkelkite ar pasukite įdėtą elementą

Įjungę {{ui:Braižymas}}, pasirinkite elementą plane. Jo įdėjimo taške rodoma kvadratinė rankenėlė, o šalia jos – apvali.

- Vilkite elementą arba jo kvadratinę rankenėlę, kad perkeltumėte. Jis prisitraukia kaip Sienos įrankis (sienų galai ir paviršiai); {{key:Shift}} laiko jį statmeną pagal tai, kur jis buvo.
- Vilkite apvalią rankenėlę, kad pasuktumėte 15° žingsniais. Laikykite {{key:Shift}} 1° žingsniams.
- Paspauskite {{key:R}}, kad pasuktumėte 90°.
- **Savybėse** (taip pat 3D rodinyje) įveskite **X**, **Y** ir **Pasukimas (°)**, arba spustelėkite **Pasukti 90°**.

Kiekvienas perkėlimas yra vienas anuliavimo žingsnis ir keliauja per Live TeamWork. Elementas išlaiko savo elemento numerį, bibliotekos duomenis ir aukštį virš lygio. Dar neįgyvendinta: vilkimas 3D rodinyje.

## Ką turėtumėte matyti

- Elementas modelyje, pasirinktas, su savybėmis dešinėje: langelis **Bibliotekos elementas** su licencija ir priskyrimu bei rinkiniai `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` ir, elementams iš pažymėtų brėžinių, `CadCraft_SourceAttributes`.
- „Įdėta: *elementas* (elementas *n*)“ pakeitimų sąraše. {{key:Mod+Z}} jį anuliuoja.
- Būsenos eilutė: „Įdėta *elementas* kaip elementas *n*.“

## Verta žinoti

- Kai kurie elementai būna keliais dydžiais ar variantais: tada kortelėje yra **Variantas** pasirinkimas, ir įdedamas tas, kurį pasirinkote. Žr. [Įdėkite ir pakeiskite bibliotekos elementą, turintį variantų](topic:library-variants).
- Elementas be 3D korpuso (2D simbolis) įdedamas su pakaitiniu kubu; jo aukštį nurodote, kai paklausiama.
- Tokių pačių daugiau: pasirinkite įdėtą elementą ir naudokite {{ui:Kopijuoti}} ir {{ui:Įklijuoti}}, arba {{key:Mod+D}}. Žr. [Kopijuokite, įklijuokite ir dubliuokite bibliotekos elementus](topic:copy-paste).
- Kad kiekvienas įdėjimas prasidėtų su įjungtu sienos prilipimu, įjunkite **Pradėti su įjungtu sienos prilipimu** [BimCraft nustatymuose](topic:settings).
- Ilgiai konvertuojami į paties modelio vienetus, kokie jie bebūtų.
- **Entourage** (medžiai, krūmai, žmonės, automobiliai) taip pat yra bibliotekoje: ieškokite „tree“, „person“ ar „car“. Šiuos elementus piešia CadCraft (CC0), ir įdėti jie išlaiko savo spalvas (kamienas rudas, lapai žali, automobilio langai permatomi) BimCraft ir kitose BIM programose. Jie rodomi [atvaizduotuose paveikslėliuose](topic:render).
- IFC2X3 faile kūnas įrašomas kaip *faceted solid*; IFC4 – kaip *triangulated face set*. Abu atsidaro kituose IFC įrankiuose.
- Brėžinio (DWG ar DXF) čia išsaugoti negalima, todėl elementai įdedami tik į IFC modelius. Naudokite **Šis failas** brėžinyje, kad pamatytumėte, kuo taptų jo blokai.

## Elementai jūsų kalba

Elementas gali turėti savo pavadinimą, aprašymą ir tipą kitomis kalbomis. Kai jis turi juos kalba, kuria nustatyta BimCraft (Parametrai › Bendra › Kalba), elemento puslapyje rodoma tai, o gamintojo suteiktas pavadinimas – apačioje. **Įdėti** įrašo pavadinimą jūsų kalba į modelį, todėl {{ui:Įranga}} žiniaraštis jį taip ir išvardija. Elementas lieka tas pats elementas: atnaujinimų tikrinimas ir keitimas remiasi pačiu elementu, o ne pavadinimu. Elementai be vertimo išlaiko savo žodžius.

## Dažnos klaidos

- **Įdėjimo mygtuko nėra.** Neatidarytas IFC modelis. Pirmiausia atidarykite jį.
- **Šešėlis neseka žymiklio.** Žymiklis yra už modelio ploto arba aukšto plokštuma nematoma. Spustelėkite {{ui:Viršus}}.
- **{{ui:Prilipimas prie sienos}} sako, kad sienų nėra.** Aukšte IFC faile nėra sienų (kai kurie eksportai sienas deda į kitą aukštą). Pasirinkite tą aukštą arba įveskite X ir Y.
- **Failo elementai neteisingo dydžio.** Faile nėra vienetų arba nurodyti neteisingi. {{ui:Failai…}} pasirinkite vienetus ir perskaitykite iš naujo.

:::tip
Tą patį elementą įdėjus du kartus, jie dalijasi vienu IFC tipu, todėl modelis su keturiasdešimčia kėdžių kėdės tipą įrašo tik vieną kartą.
:::
