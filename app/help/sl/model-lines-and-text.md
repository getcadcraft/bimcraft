---
title: Črte modela in besedilo modela: narisano v modelu, na delovni ravnini
summary: Črta modela je črta, polilinija ali lok, ki živi v modelu in se prikaže v vsakem pogledu, ki ga vidi. Besedilo modela je 3D napis z dejansko globino. Oba se rišeta na delovni ravnini.
keywords: črta modela, besedilo modela, 3D besedilo, napis, oznaka, signalizacija, črta v 3D, lok, polilinija, delovna ravnina, izvlečeno besedilo, pisava, globina, podrobna črta, risalna črta, opomba, IfcAnnotation
from: fc9cccb5
---

## Kaj boste naredili

Narišite črte in napise, ki so del modela, ne enega pogleda.

## Koraki

1. Najprej nastavite delovno ravnino (glejte **Delovna ravnina**). Ravnina nivoja se riše v tlorisu, navpična ravnina pa v pregledovalniku delovne ravnine.
2. Za črto izberite **Črta modela** v meniju {{ui:Zgradba}} in izberite **Črta**, **Polilinija** ali **Lok (tri točke)**:
   - črta je dva klika;
   - polilinija je klik za vsako točko, nato Enter ali dvojni klik. Klik na prvo točko jo zapre;
   - lok so trije kliki: začetek, točka, skozi katero gre, in konec.
3. Za besedilo izberite **Besedilo modela**. Vtipkajte besede, nastavite višino velikih črk in globino, nato kliknite, kjer se besedilo začne (levi konec osnovne črte).
4. Izberite črto ali besedilo, da ga vidite v {{ui:Lastnosti}}. Besedilo, njegovo višino in globino lahko spremenite tam. S tipko {{key:Delete}} ga izbrišete.

## Kje se prikažejo

- Črta modela se prikaže v tlorisu svojega nivoja, v 3D pogledu, v panelu pogledov in prerezov ter v pregledovalniku delovne ravnine, ko leži na delovni ravnini. Risalna črta (Opomba, Črta) pripada samo enemu pogledu.
- Besedilo modela je trdna geometrija: prikaže se povsod, kjer se prikaže model: v tlorisu, 3D, pogledih in prerezih ter na listih.
- Črte modela še niso narisane na natisnjenih listih. Besedilo modela pa je.

## Pisava

Besedilo modela uporablja isto pisavo kot listi in PDF-ji: Liberation Sans, pod licenco SIL Open Font License. Črka, ki je pisava nima, se nariše kot vprašaj in obveščeni ste, katera je. Obstaja ena pisava in ena debelina. Črke so razmaknjene po lastnih širinah pisave, brez kerninga.

## V datoteki IFC

- Črta modela je IfcAnnotation z vrsto objekta ModelLine. Njen oblik je 3D krivulja: polilinija ali obrezan krog za lok.
- Besedilo modela je IfcBuildingElementProxy z vrsto objekta ModelText. Njegov oblik je en izvlečeni trden kos za vsak del črke, z luknjami črk, kot sta O in B. Njegovi količini sta površina ploskve in prostornina (površina ploskve krat globina).

## Dobro je vedeti

- Vsaka velikost se naredi, kot zahtevate. Zavrnjena je le črta brez dolžine, lok, katerega tri točke so na isti črti, ali besedilo brez črk, ker ni kaj narediti.
- Vsaka črta ter vsako besedilo ali sprememba je en korak Razveljavi.
