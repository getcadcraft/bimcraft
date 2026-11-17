---
title: Modelio peržiūra VR ausinėse
summary: Vaikščiokite IFC modeliu natūraliu dydžiu VR ausinėse: šokinėkite, sukitės, matuokite, pjaukite, dėkite BCF problemas su paveikslėliu, žiūrėkite kaip stalviršio modelį ir susitikite su kitais gyvos sesijos dalyviais.
keywords: vr, virtuali realybė, ausinės, webxr, xr, įtraukiantis, quest, oculus, vive, index, pico, vaikščioti, pasivaikščiojimas, teleportacija, projekto peržiūra, koordinavimas, peržiūra, matuoti, pjūvis, pjauti, problema, problemos, bcf, stalviršis, mastelio modelis, buvimas, avatarai, gyvai, kartu
from: 8994b36d
---

{{ui:VR}} įrankių juostoje įdeda jus į modelį VR ausinėse, natūraliu dydžiu. Stovite ten, kur yra 3D vaizdo kamera, ant grindų žemiau jos, žiūrėdami ta pačia kryptimi. Ausinės rodo tai, ką rodo 3D vaizdas: paslėpti aukštai, elementai ir modeliai lieka paslėpti, o nudažytos medžiagos atsineša. Nieko neįkeliama: naršyklė piešia šiame kompiuteryje (arba ausinių naršyklėje).

## Ko reikia

- Ausinių, kurias naršyklė gali valdyti (WebXR): autonominių ausinių naršyklė arba Chrome ar Edge kompiuteryje, prie kurio prijungtos ausinės.
- Atvirą IFC modelį saugiame puslapyje (https), kaip yra šioje svetainėje.

Kai ausinių nėra, {{ui:VR}} yra pilkas ir paaiškina kodėl.

## Pradžia

1. Nustatykite 3D vaizdą ten, kur norite pradėti: kambaryje arba lauke, žiūrint į pastatą.
2. Spustelėkite {{ui:VR}} įrankių juostoje.
3. Užsidėkite ausines.

Meniu yra ant kairės rankos nugaros. Nukreipkite į jį dešiniuoju valdikliu ir spauskite gaiduką, kad pasirinktumėte mygtuką. (Naudojant tik vieną ranką, meniu plaukioja prieš tą vietą, kur pradėjote.)

## Judėjimas

- **Šokinėjimas:** {{ui:Perkelti}} nukreipkite į grindis ir spauskite gaiduką; nusileisite ten. Arba stumkite lazdelę pirmyn, kad nutaikytumėte, ir paleiskite, kad šoktumėte. Nusileisti galite tik ant grindų, perdangų ir žemės (paviršių, nukreiptų aukštyn), niekada ant sienos.
- **Sukimasis:** stumkite lazdelę kairėn ar dešinėn: kiekvieną kartą pasisukate 30°.
- **Vaikščiojimas:** savo žaidimo zonoje tiesiog vaikščiokite.

## Matavimas

Pasirinkite {{ui:Matuoti}}, tada spauskite gaiduką ant dviejų taškų. Atstumas rodomas tarp jų metrais. Taškas arti kampo prisitraukia prie kampo.

## Pjovimas

Pasirinkite {{ui:Pjūvis}} ir spauskite gaiduką ant paviršiaus:

- ant sienos (ar bet ko, kas nėra grindys): viskas tarp jūsų ir to paviršiaus nupjaunama, kad matytumėte vidun. Tai geriausiai veikia iš lauko arba per kambarį;
- ant grindų, iš viršaus: plano pjūvis 1,2 m virš tų grindų, todėl sienos rodo savo apatinę dalį.

{{ui:Išvalyti}} pašalina pjūvį ir matavimus. Jei [pjūvio plokštuma](topic:section-plane) pjauna modelį, kai pradedate, ausinės prasideda su ja.

## Pridėti problemą

Pasirinkite {{ui:Problema}} ir spauskite gaiduką ten, kur yra problema. Sunumeruotas smeigtukas ją pažymi, o problema patenka į skirtuką {{ui:Problemos}} kaip BCF tema su paveikslėliu to, ką matėte, ir kamera, kur stovėjote, modelio koordinatėmis. Įrašykite jas kartu su kitomis [problemomis](topic:issues-bcf) kaip BCF failą; kiti koordinavimo įrankiai atidaro jas tuo pačiu vaizdu.

Komentarą problemai pridėkite išėję iš VR, skirtuke Problemos: rašymas ausinėse dar neįgyvendintas.

## Žiūrėti kaip stalviršio modelį

{{ui:Stalviršis}} sumažina modelį, kad tilptų ant stalo priešais jus; vaikščiokite aplink jį arba sukite lazdele. {{ui:Pilnas dydis}} grąžina jus ten, kur buvote.

## Su kitais, gyvai

[Gyvoje sesijoje](topic:work-live) visi VR dalyviai mato kitus kaip galvą ir dvi rankas jų spalva, su vardu, ir tašką, į kurį kiekvienas nukreipia. Bet kieno pakeitimai pasiekia jūsų ausines per akimirką. Prie stalo sėdintys žmonės ausinėse dar nerodomi.

## Išėjimas

Pasirinkite {{ui:Išeiti iš VR}} (arba nusiimkite ausines ir baikite ten). 3D vaizdas ekrane persikelia ten, kur buvo jūsų galva.

:::note
Išbandyta su ausinių emuliatoriumi, dar ne su visomis ausinėmis. Didelis modelis gali ausinėse sukelti trūkčiojimą: pirmiausia paslėpkite nereikalingus aukštus ar modelius ([paslėpti ir izoliuoti](topic:hide-and-isolate)).
:::
