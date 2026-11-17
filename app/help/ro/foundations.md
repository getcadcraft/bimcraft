---
title: Fundații sub pereți
summary: Puneți o placă pe sol, ziduri de fundare cu placă, un spațiu tehnic sau un subsol sub o clădire dintr-un clic; tălpile de fundare se dimensionează din pereți și din numărul de niveluri, iar fundația urmează pereții când aceștia se mută.
keywords: fundație, talpă de fundare, placă pe sol, margine îngroșată, placă monolită, zid de fundare, spațiu tehnic, spațiu tehnic sub podea, subsol, perete de subsol, îngheț, beton, lățimea tălpii
from: c0e20172
---

## Ce veți face

Dați clădirii o fundație care se potrivește pereților ei. BimCraft urmărește exteriorul pereților, dimensionează tălpile după tipul peretelui și după câte niveluri stau pe ele și refac fundația ori de câte ori se schimbă pereții.

## Puneți o fundație

1. Pe nivelul ale cărui ziduri stau pe ea (de obicei primul), deschideți {{ui:Build}} și alegeți {{ui:Foundation}}.
2. Alegeți tipul:
   - **Placă pe sol**: o placă de beton de 4" a cărei parte de sus este podeaua, cu o margine îngroșată sub pereți.
   - **Ziduri de fundare și placă**: ziduri de fundare până la podea, pe tălpi, cu o placă înăuntrul lor.
   - **Spațiu tehnic**: ziduri de fundare care se opresc sub structura podelei, pe tălpi, fără placă.
   - **Subsol**: ziduri de fundare pe toată înălțimea, pe tălpi, cu o placă de subsol sub structura podelei.
3. Plasați cursorul în interiorul clădirii: tălpile apar punctate, cu dimensiunea lor. Faceți clic.

Dacă faceți clic pe o clădire care are deja o fundație, aceasta se selectează, ca s-o modificați în loc să adăugați una a doua.

## Schimbați-o

Selectați fundația (faceți clic în interiorul clădirii cu {{ui:Foundation}} sau faceți clic pe oricare dintre piesele ei în vizualizarea 3D sau în arborele modelului) și modificați-o în **Proprietăți**: tipul, lățimea și adâncimea tălpii, cât de jos se află baza tălpii, grosimea peretelui, cât de jos sub podea se opresc pereții, înălțimea subsolului și grosimea plăcii. Fiecare modificare este un singur pas pentru {{ui:Undo}}.

Dimensiunile marcate **automat** vin din pereți: tălpi de 12", 15" sau 23" lățime pentru unu, două sau trei niveluri, pe placă sau pe ziduri de fundare; 18", 22" sau 27" peste un spațiu tehnic sau un subsol; și cu 4" mai late sub pereții de zidărie sau de beton. Scrieți o dimensiune ca s-o stabiliți pe a dvs.; scrieți `0` ca să reveniți la automat.

:::warning
Dimensiunile automate sunt valori implicite etichetate, pentru case tipice cu structură ușoară, nu calcul de inginerie. Un proiectant sau un inginer verifică tălpile, adâncimile și pereții pentru terenul de sub clădire, adâncimea de îngheț și sarcinile.
:::

## Ce se salvează

O fundație se salvează ca un ansamblu de elemente IFC („Foundation”) format dintr-o talpă (sau marginea îngroșată a unei plăci), un perete de fundație și o placă, după cum cere tipul, toate din beton, fiecare cu cantitățile lui: lungimi, lățimi, înălțimi, suprafețe și volume, gata pentru extragerea de cantități.

## Detalii utile

- Mutați, adăugați sau ștergeți pereți și fundația de sub ei se face din nou; desenați pereți la nivelul de deasupra și tălpile de dedesubt se lățesc pentru nivelul în plus.
- {{key:Delete}} șterge o fundație selectată cu toate piesele ei.
- Cu terenul amplasamentului în model (vezi [Terenul amplasamentului, platforma clădirii și pavajele](topic:terrain)), zidurile de fundare și tălpile spațiului tehnic coboară odată cu el, în trepte de 8".
- Tălpile de sub pereții interiori sunt încă nerealizate.
