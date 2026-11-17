---
title: Amplasamentul, clădirea de pe el și nivelurile ei
summary: Desenați conturul amplasamentului, plasați și rotiți clădirea pe amplasament, adăugați niveluri la înălțimi date sau împărțiți înălțimea clădirii, și desenați pe nivelul ales.
keywords: amplasament, plan de amplasament, linie de retragere, retragere, servitute, drept de trecere, limită de proprietate, lot, parcelă, limită, amplasare clădire, rotire clădire, plasare clădire, niveluri, etaje, adăugare niveluri, împărțire înălțime, cotă de la etaj la etaj, IfcSite, IfcBuilding, IfcBuildingStorey, structură spațială
from: 48d10c1e
---

## Ce veți face

Pregătiți părțile unui model IFC care țin tot restul: amplasamentul, clădirea de pe el și nivelurile clădirii.

Un model este organizat ca un **amplasament** care ține o **clădire**, care îi ține **nivelurile** (etajele); pereții, planșeele și tot restul aparțin unui nivel. {{ui:Fișier}} › {{ui:Clădire nouă}} configurează toate trei. Un model dintr-un alt program care are o clădire, dar nu și un amplasament, primește un amplasament prima dată când desenați unul: clădirea este plasată pe el acolo unde era deja.

## Desenați amplasamentul

1. Activați {{ui:Desenare}}, apoi alegeți {{ui:Build}} › {{ui:Amplasament}}.
2. Faceți clic pe colțurile amplasamentului (unealta se agață ca unealta Perete). Faceți din nou clic pe primul colț, faceți dublu clic sau apăsați {{key:Enter}} pentru a încheia. {{key:Backspace}} șterge ultimul colț.
3. Rândul arată suprafața amplasamentului. Desenați-l din nou ca să-l modificați.

Planul fiecărui nivel arată conturul amplasamentului ca linie de proprietate.

## Plasați clădirea pe amplasament

Cu {{ui:Amplasament}} activ, tastați **X** și **Y** ale clădirii pe amplasament și **Rotire** în grade, sau faceți clic pe {{ui:Plasare clădire printr-un clic}} și faceți clic unde trebuie să fie originea clădirii. Tot ce ține de clădire (niveluri, pereți, grile, tot ce ați desenat) se mută odată cu ea; amplasamentul și conturul lui rămân pe loc. Planurile continuă să arate fiecare nivel pătrat față de clădire.

## Linii de retragere și servituți

Liniile de retragere și servituțile (drepturi de trecere etc.) sunt desenate pe amplasament ca restricții. Ele **avertizează, nu blochează niciodată**: un perete peste una dintre ele este desenat așa cum ați cerut, iar un avertisment care numește peretele și linia sau servitutea apare în {{ui:Probleme}}. Mutați peretele înapoi și avertismentul dispare. Un avertisment poate fi acceptat cu un motiv (o derogare acordată de autoritate, de exemplu).

- **Linie de retragere din distanțe.** {{ui:Build}} › {{ui:Linie de retragere}}, apoi {{ui:Retrageri}}: tastați cât de mult intră linia față de fiecare limită a amplasamentului. Limitele sunt numerotate pe plan cât timp unealta este activă. Linia se calculează din aceste distanțe și urmează conturul amplasamentului dacă îl desenați din nou cu tot atâtea limite. Distanțele sunt cele din actul de proprietate sau din planul urbanistic zonal; BimCraft nu completează niciuna.
- **O linie de retragere desenată.** Cu {{ui:Linie de retragere}} activă, faceți clic pe punctele ei și încheiați cu dublu clic sau cu {{key:Enter}}. Încheiați pe primul punct pentru o linie închisă: suprafața din interior este unde se poate construi, iar un perete cu vreo parte în afara ei primește avertisment. O linie deschisă avertizează doar despre un perete care o traversează.
- **Un servitut.** {{ui:Build}} › {{ui:Servitute}}: alegeți tipul, tastați numele, referința înregistrată și lățimea, apoi faceți clic pe linia lui de centru și încheiați (o fâșie), sau închideți-l pe primul punct (o suprafață). Un perete cu vreo parte pe el primește avertisment, pe fiecare nivel.
- O față exact pe o linie este atingere, nu traversare (toleranța este de 1 mm).
- Opțiunea de volumetrie curentă a fiecărui set de opțiuni este verificată la fel ca pereții: o masă în afara limitei, peste o linie de retragere sau pe un servitut primește avertisment. Vezi [Opțiuni de volumetrie păstrate alăturat](topic:massing-options).
- Selectați una cu {{ui:Selectare}} ca să-i modificați numele, referința, tipul sau lățimea, s-o mutați sau s-o ștergeți.

Sunt desenate pe planul fiecărui nivel, pe planșe și în PDF-ul planului: liniile de retragere întrerupte, servituțile punctate, fiecare cu eticheta ei. În fișierul IFC fiecare este o adnotare (IfcAnnotation, de tip BuildingLine sau Servitude) pe amplasament, cu linia ei ca o curbă simplă pe care o pot citi alte programe. Verificarea folosește conturul real al fiecărui perete pe plan, cu îmbinările așa cum sunt desenate; un perete curb este verificat după propria grosime față de linia lui de centru.

## Adăugați niveluri

În panoul {{ui:Niveluri}}, {{ui:Adăugare nivel deasupra}} adaugă unul, iar {{ui:Adăugare nivel dedesubt}} adaugă unul sub cel mai de jos (o subsolă, la o cotă negativă). {{ui:Adăugare niveluri…}} adaugă mai multe deodată:

- **La aceste înălțimi**: tastați înălțimi peste cel mai de jos nivel, separate prin virgule (de exemplu `12', 24', 36'`). Înălțimile la care există deja un nivel sunt sărite.
- **Împărțirea înălțimii clădirii**: tastați înălțimea clădirii și numărul de niveluri. Nivelurile pe care le aveți se mută la noile înălțimi, de jos în sus, cele lipsă sunt adăugate, iar cele de deasupra rămân unde sunt.

Pereții care ajung până la nivelul de deasupra îl urmează, la fel ca stâlpii și rampele.

{{ui:Copiere acest nivel…}} (din același panou) copiază ce este desenat pe nivelul pe care îl vedeți pe alt nivel sau pe un nivel nou deasupra, astfel că un plan de etaj poate urca prin clădire dintr-un pas. Vezi [Desenarea pereților](topic:draw-walls).

## Desenați pe un nivel

Fiecare unealtă {{ui:Desenare}} lucrează pe nivelul ales din lista de niveluri a planului (sau ales din panoul {{ui:Niveluri}}): ce desenați aparține acelui nivel.

## Ce ar trebui să vedeți

- Fiecare dintre aceste modificări este un singur pas: {{key:Mod+Z}} o anulează.
- În fișierul IFC: amplasamentul (IfcSite) cu conturul și aria lui, clădirea (IfcBuilding) plasată pe el și nivelurile (IfcBuildingStorey) din clădire.

Vezi și [Coordonatele în BimCraft](topic:coordinates) pentru originea proiectului și punctul de măsurătoare.
