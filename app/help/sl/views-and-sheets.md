---
title: Pogledi, obsegi pogledov in lastni listi
summary: Poiščite vsak tloris, fasado, prerez, 3D pogled, razpredelnico in list v brskalniku projekta, nastavite, kako je vsak tloris prerezan in kaj prikazuje, naredite oblačke, narišite črte in šrafure v enem pogledu, ohranite nastavitve v predlogah pogledov in uredite lastne liste.
keywords: oblaček, pogled oblačka, podroben pogled, povečan tloris, risanje, podrobne črte, risalne črte, šrafura, območje šrafure, zapolnjeno območje, vzorec polnila, odsevni tloris stropa, rcp, tloris stropa, mreža stropa, svetila, brskalnik projekta, pogledi, obseg pogleda, obrezovanje, območje obrezovanja, obrezan pogled, merilo pogleda, podlaga, prikaz druge etaže, polotonsko, ravnina prereza, višina prereza, zgoraj, spodaj, globina pogleda, vidnost, kategorije, skrij v pogledu, predloga pogleda, predloge, list, listi, naslovna glava, pogledno okno, merilo, pdf, nastavitve tlorisa, brskalnik
from: ee1d5afe
---

## Kaj boste naredili

Delajte, kot se organizirajo projekti BIM: vsi pogledi v enem seznamu, vsak tloris prerezan, kjer želite, iste nastavitve za več tlorisov prek predloge in listi, ki jih razporedite sami.

## Brskalnik projekta

1. Vklopite {{ui:Risanje}}. Na levi plošči je pod modeli {{ui:Brskalnik projekta}}.
2. Našteva:
   - **Tlorisi**: vsako etažo. Kliknite eno, da vidite njegov tloris. Gumb drsnika ob njem nastavi njegov obseg pogleda (spodaj). Tloris, ki sledi predlogi, kaže ime predloge.
   - **Tlorisi stropov**: odsevni tloris stropa vsake etaže (spodaj).
   - **Oblački**: vsak oblaček s pogledom, na katerem je narisan, in {{ui:Nov oblaček}}. **Manjka** našteje oblačke, katerih pogled ni več.
   - **Fasade** in **Prerezi**: štiri strani in vsaka prerezna črta. Kliknite eno, da odprete komplet risb, v katerem so narisani.
   - **3D pogledi**: pogledi, ki ste jih shranili z {{ui:Pogledi}}.
   - **Razpredelnice**: kliknite eno, da jo prikažete pod tlorisom.
   - **Listi**: listi, ki ste jih naredili, {{ui:Nov list}} in {{ui:Komplet risb …}} za ves komplet, narejen iz modela.
   - **Predloge pogledov**, z {{ui:Nova predloga}}, in **Povezave** (povezani modeli).

## Nastavite obseg pogleda tlorisa

1. Kliknite gumb drsnika ob etaži pod **Tlorisi**.
2. Nastavite višine nad to etažo:
   - **Prerez pri**: kjer tloris seka stene, vrata in okna (1200 mm, približno 4 ft, če tega ne spremenite).
   - **Zgoraj**: stvari nad prerezom in pod vrhom so narisane črtkano (visoka omarica, nosilec). Pustite prazno za višino etaže.
   - **Spodaj** in **Globina pod dnom**: stvari, nižje od prereza, so narisane s tankimi črtami do dna in toliko pod njim.
3. Pod **Prikazano v tem tlorisu** odkljukajte, kar ta tloris izpusti: pohištvo, prostore, stebre in podobno.
4. Če želite izpustiti posamezne elemente: izberite jih v tlorisu ali 3D pogledu, odprite pogovorno okno in kliknite {{ui:Skrij izbrano tukaj}}. {{ui:Pokaži vse}} jih vrne.
5. Kliknite {{ui:Uporabi te nastavitve}}.

Tloris se takoj znova prereže, komplet risb in vaši listi mu sledijo. Rez oblaka točk prav tako sledi višini prereza.

## Obrežite tloris, mu dajte merilo, pokažite drugo etažo pod njim

Vse tri so v istem pogovornem oknu (gumb drsnika ob etaži):

- **Merilo**: merilo, v katerem se tloris natisne ({{ui:Natisni}} na vrstici tlorisa) in se postavi na list. **Prilagodi** izbere največje standardno merilo, ki se prilega.
- **Območje obrezovanja**: kliknite {{ui:Nariši na tlorisu …}}, nato kliknite en vogal in nasprotni vogal na tlorisu ({{key:Esc}} ustavi). Tloris zunaj območja je na zaslonu zakrit, še vedno pa lahko delate tam; natisnjen, na listih in v kompletu risb tloris prikaže samo to, kar je znotraj. {{ui:Počisti}} odstrani obrez. {{ui:Prilagodi}} prilagodi obrez.
- **Podlaga**: izberite drugo etažo. Njene stene, prerezani elementi, vrata in okna so narisani svetlo pod tem tlorisom, da poravnate stvari z etažo pod ali nad njim. Tu jih ne morete izbrati in se natisnejo svetlo sive.

Predloga pogleda nosi merilo skupaj z višinami in kategorijami. Območje obrezovanja in podlaga vedno pripadata samo enemu tlorisu.

## Tloris stropa etaže

Vsaka etaža ima odsevni tloris stropa poleg svojega tlorisa: tloris, gledan od spodaj, za razporejanje stropov in tega, kar visi iz njih.

1. Kliknite etažo pod **Tlorisi stropov** v brskalniku ali izberite {{ui:Tloris stropa}} ob etaži na vrstici tlorisa.
2. Stene so prerezane na 2300 mm (približno 7'-6"). Narisano je, kar leži nad tem prerezom in pod višino etaže: stropi z mrežo in oznako višine (`CLG 2438`), svetila, nosilci. Vrata, okna in tisto, kar leži pod prerezom, so izpuščeni.
3. Za izdelavo stropa uporabite {{ui:Strop}} kot na tlorisu, ga izberite in v Lastnostih izberite njegov **Vzorec**. Glejte [Prostori, tla, stropi in strehe](topic:floors-and-roofs).
4. Za obešanje svetila iz njega postavite element iz knjižnice, medtem ko je prikazan tloris stropa: gre v **Na stropu**. Glejte [Postavitev opreme in pohištva iz knjižnice](topic:place-from-library).
5. Gumb drsnika ob tlorisu stropa nastavi njegov prerez in vrh, merilo, kategorije, območje obrezovanja in podlago, kot pri tlorisu. Tlorisi stropov ne sprejemajo predloge pogleda.

Nariše se enako kot tloris (odsevni tloris, ne zrcalna slika). Strop, nižji od prereza, ni narisan: za tlorisni strop te etaže znižajte prerez. Tlorisi stropov gredo na vaše lastne liste kot tlorisi; komplet risb jih sam ne doda.

## Naredite oblaček

Oblaček prikaže del tlorisa večji, v svojem merilu, kot svoj pogled: kuhinjo, stopnišče, kot stene.

1. Prikažite tloris, tloris stropa ali oblaček, kateremu pripada.
2. Izberite {{ui:Opombe}} › {{ui:Oblaček}} na vrstici tlorisa (ali {{ui:Nov oblaček}} v brskalniku), nato kliknite en vogal območja in nasprotni vogal. {{key:Esc}} ustavi.
3. Oblaček je narejen v merilu 1:20 (1/2" = 1'-0" pri čevljih in palcih). Njegov pravokotnik in okrogla oznaka sta narisana na tlorisu.
4. Kliknite oznako z {{ui:Izberi}} ali oblaček v brskalniku, da ga odprete: tloris prikazuje samo to območje, v merilu oblačka. Vrstica pravi {{ui:Oblaček:}} in njegovo ime; {{ui:Navzgor}} vrne na pogled, na katerem je narisan.
5. Gumb drsnika ob njem (v brskalniku ali na vrstici) ga preimenuje, spremeni njegovo merilo, znova nariše njegov pravokotnik ali ga izbriše.

Oblaček prikazuje, kar prikazuje njegov pogled: isti prerez, iste kategorije, stropi tlorisa stropa. Oblaček oblačka deluje enako. Postavite oblaček na list kot tloris; njegova oznaka nato pove, kje je (`1 / A-501`: prvi pogled na listu A-501). {{ui:Natisni}} v oblačku natisne samo to območje v njegovem merilu.

Izbris oblačka izbriše tudi oblačke, narisane v njem, ter črte in šrafure, narisane v njih (najprej vas vprašamo). Če etaža, na kateri je oblaček narisan, izbrisana, oblaček ostane pod **Manjka**, dokler ga ne izbrišete, listi, na katerih je, pa ga prijavijo kot manjkajočega.

## Narišite črte in šrafure v enem pogledu

Risanje je 2D delo, ki pripada samo enemu pogledu: opombe v črtah, šrafirano območje betona ali zemlje, zapolnjeno območje. Nikoli ni v 3D pogledu in nikoli v drugem tlorisu.

1. Prikažite tloris, tloris stropa ali oblaček, v katerega risate.
2. Izberite iz {{ui:Opombe}} na vrstici tlorisa:
   - {{ui:Vrstica}}: kliknite, kjer se začne, in kjer konča. Naslednja črta se začne, kjer je končala zadnja; {{key:Enter}} začne znova.
   - {{ui:Polilinija}}: kliknite njene točke; {{key:Enter}} ali dvoklik konča, klik na prvo točko pa zapre.
   - {{ui:Pravokotnik}}: dva nasprotna vogala.
   - {{ui:Območje šrafure}}: izberite **Vzorec** (Polno, Diagonalno, Križna šrafura, Beton, Izolacija, Zemlja) in njegovo merilo na vrstici, nato kliknite vogale; {{key:Enter}}, dvoklik ali klik na prvi vogal zapre. Z vklopljenim {{ui:Zapolni prostor}} en klik v sobi našrafira njen obris.
3. Točke se lovijo kot pri stenah; {{key:Shift}} drži črto pravokotno, dolžino pa lahko vnesete kot pri stenah. {{key:Backspace}} vzame nazaj zadnjo točko.

Črto ali šrafuro izberite z {{ui:Izberi}} na tlorisu. Lastnosti spremenijo vzorec in merilo šrafure in imajo {{ui:Premakni …}} (kliknite točko, od koder premaknete, nato kam gre). {{key:Delete}} jo izbriše. Vsaka črta, šrafura in sprememba je en korak.

Črte in šrafure se natisnejo s tlorisom, gredo na vaše liste z njim in so v kompletu risb. Odznačite **Opombe** v obsegu pogleda, da jih iz tega pogleda izpustite.

## Ohranite nastavitve v predlogi pogleda

1. Kliknite {{ui:Nova predloga}} v brskalniku ali {{ui:Shrani kot predlogo …}} v obsegu pogleda tlorisa (ta tloris nato uporablja predlogo).
2. Dajte ji ime, nastavite višine in kategorije ter kliknite {{ui:Shrani predlogo}}.
3. V obsegu pogleda poljubnega tlorisa izberite predlogo. Tloris prevzame njene višine in kategorije; spremenite predlogo, da spremenite vsak tloris, ki jo uporablja. Elementi, ki ste jih skrili posamično, ostanejo skriti v svojem tlorisu.
4. Kliknite predlogo v brskalniku, da jo spremenite, preimenujete ali izbrišete. Ko jo izbrišete, njeni tlorisi ohranijo njene nastavitve kot svoje.

## Uredite list po svoje

1. Kliknite {{ui:Nov list}}. Vpišite številko in naslov ter izberite papir.
2. Kliknite {{ui:Dodaj}} ob tlorisu, tlorisu stropa, oblačku, fasadi, prerezu ali razpredelnici. Pade na sredino lista.
3. Povlecite, kamor gre. Ko je izbran, izberite **Merilo** ali pustite merilo tlorisa (če ga ima), sicer merilo, ki se prilega tretjini lista. {{ui:Odstrani z lista}} ga odstrani.
4. Kliknite {{ui:Shrani list}}. Ta je naveden pod **Listi**; kliknite ga, da ga kasneje spremenite.
5. {{ui:Prenesi kot PDF}} shrani ta list kot eno stran.

## Kaj morate videti

- Tlorisi, prerezani pri vaših višinah, z nad prerezom črtkanim in tem, kar ste izpustili, izpuščenim.
- Obrezan tloris, na zaslonu zakrit zunaj območja in na papirju prirezan nanj, pri merilu, ki ste ga dali.
- Tloris stropa z mrežami stropov, oznakami višin in svetili na stropu.
- Oblački s svojim pravokotnikom in oznako na tlorisu, vsak se odpre v svojem merilu.
- Črte in šrafure samo v pogledu, v katerem ste jih narisali.
- Vaši listi so narisani znova iz modela vsakič, ko jih odprete, zato se vedno ujemajo z njim. Pogled, katerega etaža ali prerezna črta je izbrisana, je prijavljen, ne narisan.
- Vsaka sprememba tukaj je en korak: {{key:Mod+Z}} ga razveljavi.

:::note
Vse to je shranjeno v datoteki IFC kot nabori lastnosti, ki jih drugi programi pustijo pri miru: obseg pogleda in tloris stropa vsake etaže na etaži, predloge, oblački in vaši listi na projektu. Črte in šrafure so anotacije IFC na svoji etaži, zato jih drugi programi vidijo kot 2D krivulje in šrafirana območja (njihova lastna risba vsakega vzorca), vendar ne vedo, kateremu pogledu pripadajo.
:::

:::tip
Drugi BIM programi prerez imenujejo obseg pogleda ali ravnina prereza, predloge pogleda predloge pogledov ali nastavitve pogleda, risalne črte podrobne črte, območja šrafur pa zapolnjena območja. Ideje so iste; nastavitve pogleda do njih ne potujejo.
:::
