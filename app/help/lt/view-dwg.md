---
title: DWG ar DXF brėžinio peržiūra
summary: Atidarykite DWG ar DXF, judėkite po modelio erdvę ir lapus, skaitykite koordinates ir matykite, kas dar nenubraižyta.
keywords: dinaminiai blokai, matomumo būsenos, dwg, dxf, cad, brėžinys, 2D, peržiūra, peržiūrėtojas, slinkti, keisti mastelį, modelio erdvė, popieriaus erdvė, maketas, koordinatės, atidaryti dwg
from: 4db3122a
---

## Ką darysite

Atidarykite CAD brėžinį, matykite jį 3D arba 2D, judėkite po jį, pereikite tarp modelio erdvės ir jo lapų, skaitykite koordinates. BimCraft rodo DWG ir DXF brėžinius; jų nei redaguoja, nei įrašo. Norėdami pakeisti, spustelėkite {{ui:Redaguoti CadCraft}}, ir brėžinys atsidaro CadCraft brėžimo programoje naujame skirtuke.

## Veiksmai

1. Spustelėkite {{ui:Pasirinkti failą}} arba nuvilkite brėžinį į puslapį.
2. Pasirinkite `.dwg` arba `.dxf` failą.
3. Palaukite, kol būsenos eilutėje rodoma „Skaitomas brėžinys…“. Dideli brėžiniai užtrunka kelias sekundes. Tada rodoma, kiek laiko skaitymas truko, „atvaizduojama…“, kol nubraižomas pirmas vaizdas, ir kiek tai truko.
4. Brėžinys atsidaro 3D – tai greičiausias būdas parodyti didelį brėžinį (žr. [Peržiūrėti DWG ar DXF brėžinį 3D](topic:dwg-in-3d)). Spustelėkite {{ui:Modelis}}, kad matytumėte plokščią 2D vaizdą. Norėdami visada atidaryti brėžinius 2D, nustatykite {{ui:Parametrai}} › {{ui:BimCraft}} › **Brėžiniai atsidaro** į {{ui:Modelis (2D)}}. Brėžinys be nieko modelio erdvėje arba naršyklė, kuri negali rodyti 3D, atsidaro 2D.
5. Žiūrėkite skirtukus virš brėžinio: pirmiausia {{ui:Modelis}}, paskui po vieną skirtuką kiekvienam lapui, brėžinio pačia tvarka.
6. Spustelėkite lapo skirtuką, kad pamatytumėte tą lapą: popierių su modeliu, rodomu per jo vaizdo sritis.
7. Spustelėkite {{ui:Modelis}}, kad grįžtumėte į modelio erdvę.
8. Užveskite pelės rodyklę ant brėžinio ir perskaitykite X ir Y koordinates kampe.

## Ką turėtumėte matyti

- Brėžinys, pritaikytas prie lango. Spalvos seka brėžinį; baltos linijos (spalva 7) piešiamos temos tušo spalva, o blyškios spalvos šviesioje temoje tamsinamos, kad liktų įskaitomos.
- Kairėje {{ui:Brėžinys}} skydelis: failas, dydis, formatas (pvz., „AutoCAD 2018 (AC1032)“), vienetai, objektų ir sluoksnių skaičius, lapų skaičius, o jei yra, susieti brėžiniai ir įranga.
- Kairėje {{ui:Sluoksniai}} sąrašas.
- Dešinėje: kaip judėti, susieti brėžiniai ir paveikslėliai bei **Dar nenubraižyta**.

## Judėjimas

:::mouse
| Norint | Atlikite |
|---|---|
| Slinkti | Vilkite bet kuriuo pelės mygtuku |
| Keisti mastelį | Slinkite ratuką; taškas po rodykle lieka vietoje |
| Tilpti | Dukart spustelėkite, paspauskite {{key:F}} arba spustelėkite {{ui:Tilpti}} |
:::

:::mac mouse
Naudojant jutiklinę dalį, slinkimas dviem pirštais **keičia mastelį**, o ne slenka. Suspaudimas irgi keičia mastelį. Norėdami slinkti, spustelėkite ir vilkite.
:::

:::touch
Vilkite vienu pirštu, kad slinktumėte. Suspaudimo keitimas brėžiniams dar neįgyvendintas: palieskite {{ui:Tilpti}}, kad pamatytumėte visą lapą, o norėdami priartinti, naudokite pelę arba jutiklinę dalį.
:::

## Dinaminiai blokai

Dinaminis blokas rodomas taip, kaip jį rodo brėžinys: kiekvienas įdėtas blokas – matomumo būsenoje, kuria brėžinys buvo įrašytas („Planas“ arba „Iš priekio“, „Viena kriauklė“ arba „Dvi kriauklės“). Dešinėje **Dinaminiai blokai** išvardija kiekvieną įdėtą modelio erdvėje: kiek įdėta, kokias būsenas rodo ir kokias būsenas turi blokas. {{ui:3D}} režime spustelėkite įdėtą bloką, kad savybėse pamatytumėte **Dinaminis blokas**, **Rodoma būsena** ir **Kitos būsenos**. BimCraft būsenų nekeičia.

## Dar nenubraižyta

Kai kurių tipų objektai šioje versijoje nenubraižomi. Jie skaičiuojami dešinėje skiltyje **Dar nenubraižyta** („Šios brėžinio dalys kol kas praleidžiamos, nespėliojama.“), kad žinotumėte, jog kažko trūksta. Linijos, polilinijos, lankai, apskritimai, elipsės, splainai, brūkšniavimai ir kietos užpildos, tekstas ir daugiaeilutis tekstas, blokai su atributais, matmenys, nukreipiamosios linijos ir daugiasnukrės linijos, lentelės, paveikslėliai ir vaizdo langai nubraižomi. 3D veidai, daugiaveidžiai tinkleliai ir daugiakampiai tinkleliai nubraižomi kaip jų briaunos, matomos iš viršaus; perjunkite į {{ui:3D}}, kad pamatytumėte juos kaip paviršius.

Dvejetainis DXF neatsidaro: BimCraft apie tai praneša. Įrašykite jį iš programos, kuri jį sukūrė, iš naujo kaip ASCII DXF arba kaip DWG.

## Dažnos klaidos

- **Brėžinys atrodo tuščias.** Kai kurie sluoksniai brėžinyje gali būti išjungti arba užšaldyti; jie pradžioje nepažymėti {{ui:Sluoksniai}} sąraše. Spustelėkite {{ui:Visi įjungti}}. Jei būsenoje rašoma „*name* yra tuščias brėžinys: jame nėra linijų, teksto ar blokų.“, jame nieko nėra.
- **Lapas rodo tuščią rėmą.** Lapas gali priklausyti nuo susietų brėžinių. Žr. [Raskite susietus brėžinius ir paveikslėlius](topic:dwg-linked-files).
- **Tekstas atrodo šiek tiek kitaip.** BimCraft piešia tekstą siauru be serifų šriftu, o ne brėžinio šriftais, todėl tekstas gali būti šiek tiek platesnis ar siauresnis nei programoje, kuri jį sukūrė.
- **„*name* negalėjo būti perskaitytas. Jis gali būti pažeistas arba įrašytas formatu, kurio skaitytuvas dar nepalaiko.“** Laužtiniuose skliaustuose nurodomas failo formato kodas. Įrašykite jį iš programos, kuri jį sukūrė, kaip senesnį DWG arba kaip DXF, ir bandykite dar kartą.
- **Tikitės matuoti, braižyti ar redaguoti.** BimCraft tik peržiūri brėžinius. Spustelėkite {{ui:Redaguoti CadCraft}}, kad tą patį failą atidarytumėte CadCraft brėžimo programoje, kuri jį redaguoja ir įrašo kopiją kaip DWG ar DXF. Jūsų originalus failas nepakeičiamas, o susieti brėžiniai lieka BimCraft. Mygtukas rodomas tik ten, kur jums atvira CadCraft.

## Kitas žingsnis

- [Peržiūrėti DWG ar DXF brėžinį 3D](topic:dwg-in-3d)
- [Dirbti su sluoksniais ir lapais](topic:dwg-layers-sheets)
- [Patikrinti brėžinį spausdinimo rodinyje](topic:print-view)
