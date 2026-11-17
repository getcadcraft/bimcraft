---
title: Čiary modelu a text modelu: kreslené v modeli, na pracovnej rovine
summary: Čiara modelu je úsečka, lomená čiara alebo oblúk, ktorý žije v modeli a zobrazuje sa v každom pohľade, ktorý ju vidí. Text modelu je 3D písmo so skutočnou hĺbkou. Obe sa kreslia na pracovnej rovine.
keywords: čiara modelu, text modelu, 3D text, písmo, značka, tabuľa, označenie, čiara v 3D, oblúk, lomená čiara, pracovná rovina, vytiahnutý text, font, hĺbka, detailná čiara, kresliarska čiara, anotácia, IfcAnnotation
from: fc9cccb5
---

## Čo urobíte

Nakreslite čiary a písmo, ktoré sú súčasťou modelu, nie jedného pohľadu.

## Postup

1. Najprv nastavte pracovnú rovinu (pozri **Pracovná rovina**). Vodorovná rovina sa kreslí v pôdoryse; zvislá rovina v prehliadači pracovnej roviny.
2. Pre čiaru vyberte **Čiara modelu** v ponuke **Zostava** a zvoľte **Úsečku**, **Lomenú čiaru** alebo **Oblúk (tri body)**:
   - úsečka sú dve kliknutia;
   - lomená čiara je kliknutie pri každom bode, potom Enter alebo dvojklik. Kliknutie na prvý bod ju uzavrie;
   - oblúk sú tri kliknutia: začiatok, bod, ktorým prechádza, a koniec.
3. Pre text vyberte **Text modelu**. Napíšte slová, nastavte výšku veľkých písmen a hĺbku a potom kliknite, kde text začína (ľavý koniec jeho základnej čiary).
4. Vyberte čiaru alebo text, aby ste ho videli v **Vlastnostiach**. Slová, výšku a hĺbku textu tam môžete zmeniť. Delete ho odstráni.

## Kde sa zobrazujú

- Čiara modelu sa zobrazí v pôdoryse jej úrovne, v 3D pohľade, v paneli nárysov a rezov a v prehliadači pracovnej roviny, keď leží na pracovnej rovine. Kresliarska čiara (Anotovať, Čiara) patrí iba jednému pohľadu.
- Text modelu je plná geometria: zobrazí sa všade, kde sa zobrazuje model: v pôdoryse, v 3D, v pohľadoch a rezoch a na listoch.
- Čiary modelu sa zatiaľ nekreslia na vytlačené listy. Text modelu áno.

## Písmo

Text modelu používa rovnaké písmo ako listy a PDF: Liberation Sans, pod licenciou SIL Open Font License. Písmeno, ktoré písmo nemá, sa nakreslí ako otáznik a dostanete oznam, o ktoré to je. Je jedno písmo a jedna hrúbka. Písmená sú rozmiestnené podľa šírok písma bez kerningu.

## V súbore IFC

- Čiara modelu je IfcAnnotation s typom objektu ModelLine. Jej tvar je 3D krivka: lomená čiara alebo orezaná kružnica pre oblúk.
- Text modelu je IfcBuildingElementProxy s typom objektu ModelText. Jeho tvar je jedno vytiahnuté teleso pre každý kus písmena, s dierami písmen ako O a B. Jeho množstvá sú plocha čela a objem (plocha čela krát hĺbka).

## Dobré vedieť

- Každá veľkosť sa vytvorí tak, ako ju zadáte. Odmietne sa iba čiara bez dĺžky, oblúk, ktorého tri body ležia na jednej priamke, alebo text bez písmen, lebo nie je čo vytvoriť.
- Každá čiara a každý text alebo zmena textu je jeden krok späť.
