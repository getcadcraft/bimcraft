---
title: Planșee de orice formă, goluri și rampe
summary: Desenați un planșeu sau o placă după contur (un balcon, o consolă, un podest), tăiați goluri în el și desenați rampe cu podestele lor.
keywords: planșeu, placă, contur, balcon, consolă, podest, platformă, gol în planșeu, gol vertical, gol, rampă, pantă, rampă accesibilă, rampă pentru scaun cu rotile, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Ce veți face

Realizați planșee care nu urmează camerele, de exemplu un balcon în afara pereților, și desenați rampe între niveluri.

## Desenați un planșeu după contur

1. Activați {{ui:Draw}}, alegeți nivelul, apoi {{ui:Build}} › {{ui:Floor by outline}}.
2. În rândul de sub unelte, alegeți tipul (placă de beton sau planșeu de lemn), utilizarea (planșeu sau podest), grosimea și cât de sus este partea lui de sus față de nivel (0 = la nivelul podelei etajului; o valoare negativă îl coboară mai jos).
3. Faceți clic pe colțuri. Unealta se fixează pe pereți, pe liniile grilei și pe intersecțiile lor; țineți apăsat {{key:Shift}} ca să păstrați o muchie în unghi drept. Lungimea fiecărei muchii și suprafața apar pe parcurs. {{key:Backspace}} anulează ultimul colț.
4. Faceți din nou clic pe primul colț, faceți dublu clic sau apăsați {{key:Enter}} ca să încheiați.

## Tăiați un gol

Faceți clic pe planșeu (în vizualizarea 3D sau pe conturul lui din plan), apoi, în {{ui:Properties}}, faceți clic pe {{ui:Add an opening}} și faceți clic pe colțurile golului din interiorul planșeului, încheind ca mai sus. Lista {{ui:Properties}} a planșeului enumeră golurile, fiecare cu {{ui:Delete}}, și suprafața lui fără ele.

## Desenați o rampă

1. Alegeți {{ui:Build}} › {{ui:Ramp}}. Setați lățimea ei și dacă merge **până la nivelul de deasupra** sau **în sus, pe o înălțime** pe care o scrieți.
2. Alegeți cum se stabilește: **după pantă** (1:12 la început; rampa are lungimea cerută de înălțime) sau **după lungime** (al doilea clic stabilește lungimea, iar panta urmează).
3. Faceți clic la piciorul rampei (mijlocul muchiei de jos), apoi faceți clic pe sensul de urcare. Previzualizarea arată lungimea ei, tronsoanele și panta.

O înălțime de peste 30 de inci (760 mm) se împarte în tronsoane, cu un podest de 5 picioare (1525 mm) între ele. Acestea sunt valori obișnuite de planificare, nu normele dvs.: verificați regulile din locul unde construiți. O rampă mai abruptă decât 1:12 este semnalată în {{ui:Properties}} ei.

## Ce ar trebui să vedeți

- Fiecare planșeu, gol și rampă este un singur pas: {{key:Mod+Z}} îl anulează.
- Pe plan, conturul unui planșeu desenat (un gol este desenat încrucișat) și conturul unei rampe, cu tronsoanele, podestele și o săgeată în sus cu panta ei.
- Proprietățile unui planșeu desenat (tip, utilizare, grosime, partea de sus, suprafață, goluri) și ale unei rampe (lățime, partea de sus, înălțime, pantă sau lungime); {{key:Delete}} înlătură oricare dintre ele.
- O rampă până la nivelul de deasupra urmează acel nivel când i se schimbă înălțimea.
- În fișierul IFC: un planșeu desenat este o placă (IfcSlab, planșeu sau podest), cu golurile decupate (IfcOpeningElement); o rampă este IfcRamp, făcută din tronsoane înclinate (IfcRampFlight) și plăci de podest, cu panta și lățimea ei.

:::note
Planșeele desenate astfel rămân unde le-ați desenat. Planșeele făcute cu {{ui:Floor}} urmează camerele când pereții se mută: vezi [Camere, planșee, tavane și acoperișuri](topic:floors-and-roofs).
:::
