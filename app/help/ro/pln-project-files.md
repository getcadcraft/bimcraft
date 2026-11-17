---
title: Deschidere fișiere de proiect .pln și .pla
summary: Ce face BimCraft cu fișierele .pln, .pla, .tpl și .bpn în prezent și cum se exportă IFC și DWG din ele, ca modelul și desenele să se deschidă aici.
keywords: pln, pla, tpl, bpn, fișier de proiect, arhivă, șablon, copie de rezervă, export IFC, export DWG, translator, zone, aranjări în pagină
from: 41fb921d
---

## Ce urmează să faceți

Aduceți în BimCraft un proiect salvat ca `.pln` (proiect), `.pla` (arhivă cu biblioteca sa), `.tpl` (șablon) sau `.bpn` (copie de rezervă). Acestea sunt fișierele proprii Archicad.

## Ce se deschide acum

- **Fișierele de proiect în sine nu se deschid încă.** Formatul lor nu este publicat, iar BimCraft nu îl citește încă. Când deschideți unul, BimCraft spune asta și vă trimite aici.
- **BimCraft verifică primii octeți ai fișierului.** Proiectele Archicad de la versiunea 17 încoace încep cu aceeași semnătură scurtă, deci BimCraft poate spune sigur că un fișier este un proiect Archicad. Un fișier cu nume Archicad care nu începe așa a fost probabil redenumit, este deteriorat sau provine dintr-o versiune mai veche. Semnătura nu deosebește un proiect, o arhivă și un șablon.
- **Un export IFC se deschide complet**: modelul în 3D, nivelurile, zonele ca spații, datele elementelor, seturile de proprietăți și clasificările, cu toate uneltele BimCraft.
- **Un export DWG se deschide** în vizualizarea 2D, cu straturile și aranjările în pagină, și în {{ui:3D}}. Pentru a-l edita, folosiți {{ui:Editare în CadCraft}}.

Sau aduceți întregul proiect ca un singur zip, cu vederile, aranjările și grupurile de proprietăți: vezi [Deschiderea unui pachet de proiect](topic:open-project-bundle).

## Exportul IFC (modelul)

1. Deschideți proiectul în Archicad.
2. Alegeți **File > Save As** și selectați **IFC** ca tip de fișier.
3. Alegeți un translator IFC (numele Archicad pentru un set de setări de export IFC). Unul pentru **IFC4 Reference View** sau **IFC2X3 Coordination View 2.0** se potrivește cu BimCraft. IFC4X3 se deschide și el.
4. Alegeți ce se exportă: întregul proiect sau doar elementele vizibile pe nivelurile pe care le vedeți.
5. Salvați, apoi faceți clic pe {{ui:Alegere fișier}} în BimCraft și alegeți fișierul `.ifc`.

Verificați acestea în setările translatorului înainte de export:

- **Zone**: exportați-le, ca încăperile să ajungă ca spații. Faceți clic pe {{ui:Spații}} în BimCraft ca să le vedeți.
- **Proprietăți și clasificări**: exportați-le, ca să apară în {{ui:Proprietăți}} și să poată fi folosite în {{ui:Căutare}}, {{ui:Culoare}} și {{ui:Totaluri de cantități}}.
- **`.ifc` simplu**, nu `.ifczip` sau `.ifcxml`. BimCraft deschide doar `.ifc` simplu.

## Exportul DWG (desenele)

1. Deschideți planul, secțiunea sau aranjarea în pagină dorită.
2. Alegeți **File > Save As** și selectați **DWG** ca tip de fișier.
3. Alegeți un translator DXF-DWG și salvați.
4. Pentru un set întreg de foi, salvați aranjările din Layout Book sau publicați-le ca DWG.
5. Deschideți `.dwg` în BimCraft. Desenele legate de export se deschid împreună cu el, când sunt în același dosar; vezi [Desene și imagini legate](topic:dwg-linked-files).

## Depanare

- **„… este un proiect Archicad: primii săi octeți o spun.”** Exportați IFC sau DWG ca mai sus și deschideți acel fișier.
- **„… are un nume ca al unui fișier Archicad, dar nu începe la fel.”** Verificați de unde provine fișierul: poate fi un alt tip de fișier cu nume nou (încercați să-l deschideți sub extensia sa reală), o copie care nu s-a terminat sau un proiect dintr-o versiune dinaintea versiunii 17. Deschideți-l în Archicad dacă puteți, apoi exportați IFC sau DWG.
- **Modelul se deschide fără încăperi.** Zonele nu au fost exportate. Activați-le în translatorul IFC și exportați din nou.
- **Golurile nu sunt decupate.** BimCraft spune asta sub **Nedesenat încă** în panoul {{ui:Fișier}}. Exportați din nou; dacă rămâne, deschideți modelul în programul care l-a creat și verificați golurile acolo.
- **Textul din DWG arată altfel.** Exportul poate păstra fonturi pe care BimCraft nu le are; BimCraft desenează textul cu un font sans-serif simplu.

Vezi și [Obținerea unui fișier de proiect în 3D prin IFC](topic:rvt-to-ifc) și [Ce citește BimCraft din fiecare format](topic:file-formats).
