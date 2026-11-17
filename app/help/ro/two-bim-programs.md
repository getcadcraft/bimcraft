---
title: Lucrul între două programe BIM
summary: Trimiteți un model dintr-un program BIM în altul prin IFC, cu BimCraft la mijloc, păstrați GlobalId-urile, seturile de proprietăți și clasificările, configurați ambele programe pentru aceleași proprietăți și vedeți ce s-a întors.
keywords: ifc, dus-întors, interoperabilitate, globalid, guid, seturi de proprietăți, psets, clasificări, parametri partajați, mapare de proprietăți, traducător, bcf, coordonare, schimb
from: 9f224176
---

## Ce veți face

Mutați un model între două programe BIM, de exemplu din Revit în Archicad și înapoi, prin IFC, cu BimCraft la mijloc ca să-l verificați, să-l completați și să raportați ce a supraviețuit. Nici formatul propriu al niciunui program nu este citit: totul circulă ca IFC.

## Ce păstrează BimCraft

Când modificați un model în BimCraft și faceți clic pe {{ui:Salvare ca IFC}}, fiecare linie IFC pe care nu ați modificat-o este scrisă înapoi exact cum era. Deci:

- **GlobalId-urile** rămân aceleași, iar celălalt program poate asocia fiecare element cu cel pe care l-a trimis.
- **Seturile de proprietăți** și valorile lor rămân, în afară de valorile pe care le-ați schimbat.
- **Clasificările** rămân atașate elementelor lor.

## Configurați ambele programe pentru aceleași proprietăți

1. Deschideți modelul în BimCraft (și pachetul de proiect, dacă aveți unul: grupurile lui de proprietăți sunt adăugate).
2. În panoul din stânga, deschideți {{ui:Între două programe BIM}}.
3. Sub **Mapare de proprietăți**, descărcați ce are nevoie fiecare program:
   - {{ui:Parametri partajați}}: un fișier de parametri partajați. În Revit, încărcați-l cu Manage › Shared Parameters și adăugați parametrii la categoriile care îi cer.
   - {{ui:Seturi de proprietăți la export IFC}}: un fișier de seturi de proprietăți definite de utilizator. În setările de export IFC din Revit, alegeți-l la seturile de proprietăți definite de utilizator, ca IFC-ul exportat să poarte același set și aceleași nume de proprietăți.
   - {{ui:Tabel de mapare (CSV)}}: fiecare proprietate cu setul și numele ei IFC, tipul ei și numele corespunzătoare din fiecare program. Fișierele de mapare ale Archicad nu sunt un format publicat, deci configurați traducătorul IFC și managerul de proprietăți ale acestuia din acest tabel, manual.
   - {{ui:Fișier de mapare}}: întreaga mapare ca un singur fișier, de păstrat împreună cu proiectul.

Seturile standard (Pset_ și Qto_) sunt lăsate din fișierul de parametri partajați: ambele programe le scriu din propriile date.

## Trimiteți modelul și aduceți-l înapoi

1. Exportați IFC din primul program cu GlobalId-urile păstrate (Revit: „Store the IFC GUID in an element parameter after export” activat).
2. Deschideți-l în BimCraft, verificați-l ({{ui:Verificări ale modelului}}, {{ui:Verificare conflicte}}), adăugați probleme ({{ui:Probleme}}, BCF), schimbați valori dacă este nevoie și salvați cu {{ui:Salvare ca IFC}}.
3. Deschideți IFC-ul salvat în al doilea program, lucrați la el și exportați IFC din acesta cu GlobalId-urile păstrate (traducătorul Archicad: „Global Unique Identifiers: Keep existing”).
4. Înapoi în BimCraft, deschideți modelul care a plecat, apoi adăugați pe cel care s-a întors ({{ui:Adăugare model}} sub Modele).
5. În {{ui:Între două programe BIM}}, alegeți **Trimis** și **Întors**, apoi faceți clic pe {{ui:Creare raport}}.

## Citiți raportul

- **Elemente**: câte au revenit cu același GlobalId, câte lipsesc și câte sunt noi. Elementele cu un GlobalId nou apar ca unul lipsă și unul nou: celălalt program nu l-a păstrat.
- **Clasă IFC schimbată**: elemente care au revenit ca alt tip de element.
- **Valori de proprietăți păstrate**: partea valorilor care au revenit nemodificate. Lista de mai jos arată proprietățile cu cele mai multe valori schimbate sau lipsă.
- **Clasificări**: păstrate, schimbate (același sistem, alt cod) sau lipsă.

{{ui:Descărcare raport (CSV)}} dă fiecare proprietate cu numărătorile ei. Pentru a vedea ce elemente s-au mutat sau și-au schimbat forma, folosiți {{ui:Comparare versiuni}} pe aceleași două modele.

:::note
BimCraft nu rulează niciunul dintre programe. Care setări transmit o valoare depinde de setările IFC ale fiecărui program: raportul arată ce a revenit efectiv, deci încercați o setare, exportați din nou și comparați.
:::

## Problemele circulă ca BCF

Problemele ridicate în BimCraft se exportă ca BCF ({{ui:Probleme}}), pe care ambele programe le pot citi cu uneltele lor BCF, astfel încât o întrebare despre un element ajunge la persoana care lucrează în celălalt program, cu punctul ei de vedere.

Vezi și [Deschiderea unui pachet de proiect](topic:open-project-bundle), [De la un fișier de proiect la BimCraft prin IFC](topic:rvt-to-ifc) și [Compararea a două versiuni ale unui model](topic:compare-versions).
