---
title: Terenul amplasamentului, platforma de construcție și pavajul
summary: Aduceți terenul în model din puncte topografice, curbe de nivel, o scanare LAS / LAZ, un GeoTIFF, o suprafață LandXML (a CivilCraft) sau câteva cote de nivel; decupați platforma de construcție a casei în teren, cu pantele și debleul / rambleul ei; așezați aleile, trotuarele și terasele pe el; predați-l către CivilCraft ca LandXML.
keywords: teren, sol, amplasament, topografie, puncte topografice, PNEZD, curbe de nivel, LAS, LAZ, LiDAR, GeoTIFF, DEM, cotă de nivel, cotă, pantă, sistematizare verticală, platformă de construcție, debleu, rambleu, terasamente, punct de intersecție cu terenul, taluz, alee carosabilă, alee pietonală, terasă, pavaj, LandXML, CivilCraft
from: 208298d6
---

## Ce veți face

Așezați casa pe amplasamentul ei. Terenul devine parte din model: este afișat în 3D, tăiat în secțiuni și fațade, cu curbe de nivel pe plan. Sub casă se decupează o platformă de construcție, aleile urmează terenul, iar tălpile de fundare coboară odată cu el.

## Aduceți terenul

1. Deschideți {{ui:Build}} și alegeți {{ui:Teren}}.
2. Fie:
   - **Deschidere fișier topografic…**: puncte topografice (PNEZD, PENZD sau simplu est, nord, cotă; separate prin virgulă, tab sau spațiu), curbe de nivel într-un DXF sau DWG (polilinii la cota lor, polilinii 3D), o scanare LAS sau LAZ (punctele de sol păstrate, rărite la circa unul pe metru pătrat), un GeoTIFF sau o grilă ASCII de cote, ori o suprafață **LandXML**, cum exportă CivilCraft (punctele și triunghiurile ei proprii sunt păstrate; dacă fișierul conține mai multe suprafețe, BimCraft întreabă care este terenul; unitățile vin din fișier). Alegeți mai întâi unitățile fișierului (LandXML le precizează singur).
   - Sau introduceți o **Cotă de nivel** (de la pardoseala acestui nivel, deci `-1'` înseamnă un picior sub ea), faceți clic pe puncte în plan, schimbați cota și faceți clic pe alte puncte, apoi **Creare teren**. Trei puncte sunt suficiente pentru început.

Coordonatele topografice aflate departe de model (sistem de proiecție de stat, UTM) sunt mutate peste casă, iar cotele sunt stabilite astfel încât terenul din dreptul casei să fie circa 8" sub primul etaj. **Ridicare teren** din **Proprietăți** corectează aceasta cu orice valoare.

## Platforma de construcție

1. Alegeți {{ui:Platformă de construcție}}.
2. Setați **Margine** în jurul casei, cât de jos se află **platforma sub pardoseală** (8" sub un planșeu, mai mult sub un spațiu tehnic) și **Pante** până la terenul existent (`2:1` = doi picioare în afară pentru fiecare picior în sus sau în jos).
3. Faceți clic în interiorul casei.

Terenul este netezit sub casă și până la margine, apoi urcă spre versant (debleu) și coboară spre partea joasă (rambleu) până întâlnește terenul existent. **Proprietăți**-le terenului și ale platformei dau volumele de debleu și rambleu. Mutați pereții, iar platforma îi urmează.

## Alei, trotuare și terase

Alegeți {{ui:Pavaj}}, apoi **Alee pietonală**, **Alee carosabilă** sau **Terasă** și faceți clic pe colțuri. Faceți clic din nou pe primul colț, faceți dublu clic sau apăsați {{key:Enter}} pentru a încheia. Pavajul urmează cota finală; îi schimbați tipul sau grosimea în **Proprietăți**.

## Tălpile urmează cota

Cu terenul în model, zidurile de soclu și tălpile spațiilor tehnice îl urmează: de-a lungul fiecărui perete, talpa rămâne la adâncimea ei sub terenul din exterior și coboară în trepte întregi de 8" acolo unde terenul scade (vezi [Fundații sub pereți](topic:foundations)).

## Predați către CivilCraft

**LandXML pentru CivilCraft** (pe rândul Teren sau în **Proprietăți** ale terenului) descarcă terenul existent și cota finală ca fișier LandXML. Deschideți-l în CivilCraft pentru sistematizare verticală, drenaj și terasamente reale.

## De reținut

- Terenul are nevoie de un model IFC4, ca orice clădire nouă.
- Curbele de nivel apar pe planul nivelului terenului, la intervalul setat în **Proprietăți** ale terenului; fiecare a cincea este mai groasă.
- Terenul este salvat ca element IFC de teren (o suprafață triangulată închisă, pentru ca secțiunile să o taie); platforma și pavajul sunt salvate împreună cu el. Ștergeți terenul ca să luați totul de la capăt: platforma și pavajul dispar odată cu el.
