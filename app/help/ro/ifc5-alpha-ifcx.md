---
title: Deschiderea și exportul fișierelor IFC5 alpha (IFCX)
summary: O opțiune de laborator pentru formatul de fișier IFC5 alpha (.ifcx): deschideți un fișier cu straturile sale, vedeți ce nu a putut verifica citirea și exportați modelele deschise. Formatul încă se schimbă, deci citiți mai întâi.
keywords: ifc5, ifcx, alpha, buildingsmart, json, straturi, schemă, laborator, cantități, qto, export, import
from: cffe1669
---

IFC5 alpha (fișier cu extensia {{ui:.ifcx}}) este formatul de fișier pe care buildingSMART îl proiectează încă. Nu este final: fișierele, și înțelegerea noastră a lor, se pot schimba. De aceea aceasta este o opțiune de laborator și de aceea citirea vine prima.

## Activare

1. Alegeți {{ui:Setări}}, apoi secțiunea {{ui:IFC5 alpha (IFCX)}} din fila BimCraft.
2. Bifați {{ui:IFC5 alpha (IFCX) - formatul încă se schimbă; citiți mai întâi}}.

Este dezactivată implicit. Cât timp este dezactivată, un fișier .ifcx este refuzat, cu o propoziție care trimite aici. {{ui:Deschidere IFC5 alpha (.ifcx)…}} și butonul de export {{ui:IFC5 alpha}} apar când este activată.

## Deschidere

- Alegeți un fișier .ifcx cu {{ui:Deschidere fișier sau dosar}} (înlocuiește modelul deschis, după întrebarea obișnuită despre modificări), sau
- alegeți {{ui:Deschidere IFC5 alpha (.ifcx)…}} și selectați mai multe fișiere deodată: fișierul, straturile sale și fișierele de schemă pe care le importă. Cu un model deja deschis, fișierul este **adăugat alături** de acesta; x din lista de modele îl elimină din nou, ceea ce reprezintă anularea.

Un fișier IFCX listează noduri (o cale, copiii săi, ce moștenesc și atributele lor). Mai multe fișiere pot descrie același nod: un fișier ulterior (un strat) suprascrie atributele unui fișier anterior, iar un copil null elimină un copil. BimCraft le compune, apoi desenează rezultatul ca un model IFC4 simplu: proiect, sit, clădire, niveluri și elemente, cu nume, clase, proprietăți, cantități, culori și plase.

Nimic nu este preluat din rețea. Fișierele de schemă pe care un fișier le importă (de exemplu `ifc@v5a.ifcx`) sunt folosite doar dacă le-ați ales împreună cu fișierul; altfel raportul o spune, iar atributele sunt citite fără verificarea tipului.

### Raportul

După deschidere, un raport listează ce a găsit citirea: date care nu corespund schemei lor, fișiere de schemă nedate, atribute care nu au un înțeles IFC aici. Atributele fără corespondență sunt **păstrate** în model, nu eliminate, și sunt scrise înapoi la export.

## Ce devine ce

| În fișierul IFCX | În BimCraft |
|---|---|
| Un nod cu o clasă IFC (proiect, sit, clădire, nivel, perete …) | Elementul IFC4 corespunzător; o clasă pe care această citire nu o cunoaște devine un proxy de element de construcție |
| Numele pe care îl are nodul sub părintele său | Numele elementului |
| Atribute cu un tip de cantitate (Length, Area, Volume, Mass …) | Un set de cantități IFC4 numit `Qto_IFCX` (seturile IFC4 `Qto_*` rămân seturi IFC4 `Qto_*`) |
| Alte atribute de proprietate | Un set de proprietăți numit `Pset_IFCX` |
| Atribute de plasă și de transformare | Triunghiurile și plasarea elementului; plasele invizibile nu sunt desenate |
| Culoare, opacitate, material, clasificare | Stilul de suprafață, materialul și clasificarea elementului |

Unitățile se consideră metri, cu Z în sus: alfa spune că unitățile vor fi documentate mai târziu.

## Export

Alegeți {{ui:IFC5 alpha}} din bara de instrumente, citiți nota, apoi {{ui:Exportare .ifcx}}. Fișierul are antetul nostru (autor CadCraft, versiunea ifcx_alpha) și spune în sine că este formatul alpha. Fiecare model este scris în propriile coordonate ale fișierului, în metri, cu nume, clase, seturi de proprietăți, cantități (ca atribute cu tipul lor), culori și triunghiuri. Straturile și moștenirea sunt scrise aplatizate. Verificați fișierul în programul la care îl trimiteți.

## Limite

- Geometria curbă (curbe, suprafețe) nu este citită: doar plase de triunghiuri.
- Ușile și ferestrele așezate într-un perete sunt plasate pe nivel; peretele din care provin nu este legat.
- Numele seturilor IFC4 `Qto_*` sunt păstrate ca grupuri de atribute proprii (`cadcraft::qto::…`); schema alpha standard are doar câteva nume de cantități.
- Formatul se poate schimba sub noi; un fișier făcut azi s-ar putea să nu se citească mâine.
