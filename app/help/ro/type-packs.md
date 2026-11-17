---
title: Pachete de tipuri: partajarea tipurilor de pereți ca fișiere deschise
summary: Salvați tipurile de pereți cu straturile, materialele, etichetele și codurile de clasificare, și familiile, ca un singur fișier deschis (JSON simplu sau IFC), și adăugați-le în alt proiect. Tipurile de pereți dintr-un fișier IFC de la alt program pot fi citite și ele.
keywords: pachet de tipuri, tipuri, tip de perete, partajare, export, import, bibliotecă, format deschis, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiale, straturi, șablon, standard de birou, familii
from: e4c91331
---

## Ce veți face

Duceți tipurile de pereți de la un proiect la altul sau dați-le cuiva care lucrează în alt program. Un pachet de tipuri conține fiecare tip de perete cu straturile, grosimile, materialele, miezul, golurile, prioritatea straturilor, nivelul de dezvoltare, datele de cantități și codurile de clasificare, plus orice familii adăugate. Este un fișier deschis: text JSON simplu, pe care îl poate citi oricine, sau un fișier IFC. Nimic din el nu este legat de o firmă, de o țară sau de un cont.

## Salvați tipurile dintr-un proiect

1. Deschideți **Date** din bara modelului și alegeți {{ui:Pachete de tipuri}}.
2. Sub {{ui:Salvare tipuri din acest proiect}}, bifați tipurile de perete de inclus. Tipurile proprii proiectului sunt bifate; un tip de pornire poate fi adăugat și intră ca o copie. Bifați familiile dacă le vreți incluse.
3. Scrieți un {{ui:Numele pachetului}}.
4. {{ui:Salvare ca pachet (.json)}} descarcă un fișier `.cctypes.json`. {{ui:Salvare ca IFC (.ifc)}} descarcă un fișier IFC care conține doar tipuri: fiecare tip de perete ca IfcWallType, cu setul său de straturi de material, materialele și clasificarea, pentru orice program BIM.

## Adăugați tipuri într-un proiect

1. În aceeași casetă de dialog, alegeți {{ui:Deschidere pachet sau fișier IFC…}} și selectați un pachet `.json` sau un fișier `.ifc`.
2. Caseta de dialog listează ce conține fișierul: fiecare tip de perete cu grosimea, numărul de straturi și codurile, materialele și familiile.
3. Alegeți ce se întâmplă cu {{ui:Un tip pe care proiectul îl are deja}}: **Păstrare a proiectului**, **Adăugare a pachetului ca copie** (primește un nume nou care se termină cu „(2)”) sau **Înlocuire (doar dacă niciun perete nu-l folosește)**.
4. {{ui:Adăugare în proiect}}. Caseta de dialog listează ce a fost adăugat, copiat, înlocuit sau păstrat. Este un singur pas de anulare.

Tipurile noi apar imediat în lista de tipuri a uneltei Perete.

## Tipuri de planșeu, acoperiș și tavan

Lista de tipuri de salvat conține și tipurile de planșeu, acoperiș și tavan ale proiectului, precum și punctele lor de pornire (marcate Planșeu, Acoperiș, Tavan). Un pachet le poate transporta pe toate patru; fiecare tip își numește clasa IFC (IfcWallType, IfcSlabType, IfcCoveringType). Un tip de planșeu, acoperiș sau tavan folosit de elemente nu este înlocuit dintr-un pachet: schimbați-l în editorul de tipuri.

## Un tip ca element de bibliotecă

Bifați exact un tip și alegeți **Salvare ca element de bibliotecă…**. Se salvează un fișier `.cctype.json`: un element de bibliotecă de tipul Tipuri, care conține acel singur tip (straturile, materialele, LOD-ul și codurile de clasificare). Încărcați-l în Bibliotecă ca să-l partajați. **Deschidere pachet sau fișier IFC** citește și un astfel de element și adaugă tipul lui în proiect, ca pe un pachet.

## De reținut

- Un fișier IFC de la alt program poate fi deschis și aici. Fiecare dintre tipurile lui de perete care are straturi de material este citit: numele, materialele și grosimile straturilor și orice gol sunt ale fișierului. Care straturi sunt miezul și ce face fiecare strat (finisaj, structură, izolație) sunt deduse, tipul este marcat **(dedus)**, iar trebuie verificat în editorul tipului de perete. Un tip de perete fără straturi este lăsat deoparte și numit.
- Un material pe care proiectul îl are deja este păstrat așa cum este. Un material nou al cărui nume este ocupat primește „(pachet)” după nume.
- Un tip folosit de pereți nu este înlocuit niciodată dintr-un pachet. Schimbați-l în editorul tipului de perete, care își mută corect pereții.
- Un cod setat pe un perete nu călătorește: aparține acelui perete. Un cod setat pe tip, da.
- Un fișier cu un câmp pe care formatul nu îl are, un strat al cărui material lipsește sau orice care nu este text simplu este refuzat, iar mesajul spune unde și de ce.
- Încă nerealizat: tipuri de planșeu, acoperiș și tavan (nu au tipuri în această versiune: fiecare are propria grosime), tipuri de uși și ferestre altele decât familiile, precum și hașuri sau culori din fișierul altui program.
