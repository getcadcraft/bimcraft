---
title: Puncte pentru trasare și verificări as-built
summary: Numerotați locurile pe care echipa le trasează din model — centre de stâlpi, capete de pereți, buloane de ancorare, manșoane, orice element alegeți —, scrieți-le pentru o stație totală, apoi citiți înapoi punctele as-built ale echipei și vedeți ce este în afara toleranței.
keywords: puncte de trasare, trasare, trasare pe teren, stație totală, topografie, fișier de puncte, csv, txt, pnezd, penzd, xyz, nord, est, cotă, as-built, verificare, toleranță, abatere, buloane de ancorare, centre de stâlpi, capete de pereți, manșoane, coordonate topografice, conversie de hartă
from: acea9606
---

Fila {{ui:Points}} din dreapta face punctele pe care o echipă le trasează pe teren din modelul deschis și verifică punctele pe care le măsoară după aceea.

## Crearea punctelor

1. Deschideți un model IFC și fila {{ui:Points}}.
2. Bifați ce se trasează: **centre de stâlpi** (piciorul liniei centrale a fiecărui stâlp), **capete de pereți** (ambele capete ale axului fiecărui perete, la bază), **buloane de ancorare**, **manșoane** (elemente al căror nume sau tip spune manșon) și **elementele alese** (fiecare în punctul său de plasare; alegeți-le mai întâi în vedere).
3. Alegeți primul număr și un prefix, coordonatele, unitățile, coloanele și fișierul:
   - **Model**: coordonatele proprii ale fișierului. **Grilă topografică**: grila de hartă a georeferențierii modelului (afișată doar când IFC are o conversie de hartă), în metri sau în unitatea aleasă.
   - Coloane **PNEZD** (punct, nord, est, cotă, descriere), **PENZD** sau **XYZ**; **CSV** (virgule) sau **TXT** (taburi).
4. Apăsați {{ui:Make points}}: lista le arată, iar vederea le marchează cu albastru. {{ui:Download the points}} scrie fișierul.

Punctele vin într-o ordine fixă — pe tip, apoi pe rânduri în plan — astfel încât refacerea lor din același model dă aceleași numere. Fișierul este cel pe care îl deschide CivilCraft și pe care îl scrie EXPORTPOINTS din CadCraft: un punct pe linie, trei zecimale, o descriere între ghilimele când conține o virgulă.

## Verificarea punctelor as-built

Când echipa trimite înapoi ce a măsurat, alegeți o **toleranță** în milimetri și modul de asociere a punctelor — după **numărul punctului** (au păstrat numerele dumneavoastră) sau după **cea mai apropiată măsurătoare** — și apăsați {{ui:Read as-built points…}}. Citiți fișierul în aceleași unități și coordonate în care l-ați scris.

Fiecare punct de proiect este apoi **în** toleranță, **în afara** ei sau **nemăsurat**, iar orice măsurătoare pe care nimeni n-a cerut-o este **în plus**. Tabelul dă diferențele în unitatea aleasă în bara de instrumente, picioarele fiind afișate ca țoli zecimali (as-built minus proiect: est, nord, înălțime și distanța în plan); vederea marchează fiecare punct cu verde sau roșu, cu o linie până la măsurătoare, iar cu gri când nu a fost măsurat. {{ui:Report (CSV)}} scrie comparația completă.

Nimic de aici nu schimbă modelul. Încă nerealizate: trasarea de la muchiile planșeelor, intersecțiile de grilă sau golurile făcute pentru dumneavoastră și trimiterea punctelor direct la un instrument — folosiți fișierul.
