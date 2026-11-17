---
title: Vizualizarea unui desen DWG sau DXF în 3D
summary: Treceți spațiul model al unui desen în 3D pentru a vedea elevațiile, grosimile, fețele 3D, plasele și blocurile, orbitați în jurul lui, faceți clic pe un obiect pentru a-i vedea proprietățile și aflați ce nu este încă desenat.
keywords: 3d, dwg, dxf, desen, spațiu model, orbitare, secțiune, tăiere, decupare, selectare, proprietăți, atribute, identificator, elevație, grosime, extrudare, 3dface, polyface, plasă, polilinie 3d, blocuri, vizualizări, perspectivă, paralel, extinderi, acis, corpuri solide
from: a0c6cd17
---

## Scop

Priviți spațiul model al unui desen în 3D. Liniile și polyliniile stau la înălțimile lor reale, obiectele cu grosime se ridică precum pereții, iar fețele 3D, plasele și blocurile 3D apar ca suprafețe în jurul cărora puteți orbita. Planșele rămân 2D.

## Pași

1. Deschideți un DWG sau un DXF. Vezi [Vizualizarea unui desen DWG sau DXF](topic:view-dwg). Se deschide în 3D, dacă {{ui:Settings}} › {{ui:BimCraft}} › **Desenele se deschid în** nu spune {{ui:Model (2D)}}.
2. Din 2D, faceți clic pe {{ui:3D}} în bara de deasupra desenului sau apăsați {{key:3}}.
3. Așteptați puțin prima dată: bara de stare afișează „Se construiește desenul în 3D…”, apoi câte linii și fețe arată.
4. Orbitați, panoramați și măriți (vezi tabelul de mai jos).
5. Faceți clic pe o vizualizare din a doua bară: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} sau {{ui:Right}}.
6. Faceți clic pe {{ui:Perspective}} pentru a comuta între o vizualizare în perspectivă și una paralelă.
7. Faceți clic pe {{ui:Extents}} sau apăsați {{key:F}} pentru a vedea din nou întregul desen.
8. Faceți din nou clic pe {{ui:3D}}, apăsați {{key:3}} sau faceți clic pe {{ui:Model}} ori pe o filă de planșă pentru a reveni la 2D.

## Rezultat

- Spațiul model în 3D, Z în sus, în culorile proprii desenului. Fețele sunt cu o nuanță mai deschise decât muchiile lor.
- Straturile pe care le dezactivați în {{ui:Layers}} dispar și din vizualizarea 3D.
- În dreapta: numărul de linii și fețe, dimensiunea desenului pe X, Y și Z, **Doar în vizualizarea 2D** și **Încă nedesenat**.

## Tăierea cu un plan de secțiune

Faceți clic pe {{ui:Section}} în bara 3D sau apăsați {{key:X}}. Bara de sub ea funcționează ca pentru modelele IFC (vezi [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)): tăiați din {{ui:Top}}, {{ui:Front}} sau {{ui:Side}}, trageți sau introduceți decalajul — aici în unitățile proprii desenului — și {{ui:Flip}} pentru a păstra cealaltă parte. Ce taie planul nu poate fi selectat. Revenirea la 2D elimină tăierea.

## Vedeți proprietățile unui obiect

Faceți clic pe un obiect din vizualizarea 3D. El își schimbă culoarea de selecție, iar {{ui:Properties}} arată ce spune fișierul despre el: tipul, stratul, culoarea, tipul de linie și identificatorul, apoi datele proprii, cum ar fi începutul, sfârșitul și lungimea unei linii, centrul și raza unui cerc, colțurile unei fețe 3D sau blocul, punctul de inserție, scara, rotația și valorile atributelor unei referințe de bloc.

- O referință de bloc se selectează ca întreg, și blocurile imbricate în ea.
- Un clic la câțiva pixeli de o linie selectează linia.
- Țineți {{key:Mod}} și faceți clic pentru a selecta mai multe obiecte sau pentru a scoate unul; {{ui:Properties}} le numără apoi pe tipuri.
- {{key:Esc}}, sau un clic pe spațiul gol, anulează selecția.
- Obiectele de pe straturile dezactivate nu pot fi selectate.

## Deplasarea

:::mouse
| Pentru a | Acțiune |
|---|---|
| Orbita | Trageți cu butonul din mijloc sau cu cel din stânga |
| Panorama | Trageți cu butonul din dreapta sau țineți {{key:Shift}} și trageți |
| Mări | Derulați roata; mărește spre ce se află sub cursor |
| Vedea tot | {{ui:Extents}} sau {{key:F}} |
| Privi dintr-o parte | Faceți clic pe o față, muchie sau colț al cubului de vizualizare din colțul din dreapta jos |
:::

Cubul de vizualizare poate fi înlocuit cu o pictogramă de axe sau ascuns în {{ui:Settings}}. Vezi [Setările BimCraft](topic:settings).

:::mac mouse
Pe un touchpad, glisați cu două degete pentru a orbita, țineți {{key:Shift}} și glisați pentru a panorama, iar ciupiți pentru zoom.
:::

:::touch
Trageți cu un deget pentru a orbita. Ciupiți cu două degete pentru zoom și mutați-le împreună pentru a panorama.
:::

## Ce se desenează în 3D

| În desen | În 3D |
|---|---|
| Linii, polilinii 3D | La înălțimile lor reale |
| Polilinii, cercuri, arce, elipse | În planul lor propriu, la cota lor, înclinate când desenul le înclină |
| Grosime pe linii, polilinii, cercuri și arce | Pereți de acea înălțime; cercurile sunt închise sus și jos |
| Fețe 3D, plase poliface, plase poligonale | Suprafețe umbrite cu muchiile lor vizibile |
| Blocuri | Plasate, rotite și scalate în 3D, inclusiv blocurile imbricate |
| Hașuri | Conturul lor |
| Linii 2D simple | Plate, acolo unde au fost desenate |

## Doar în vizualizarea 2D

Textul, textul pe mai multe rânduri și atributele vizibile ale blocurilor se desenează în 3D, în planul lor propriu, la înălțimea lor, iar un clic pe ele le selectează. Polilinii late își arată lățimea ca o bandă plată. Liniile de indicație multiple, imaginile și modelele de hașură sunt numărate la **Doar în vizualizarea 2D**: vedeți-le pe fila {{ui:Model}} sau pe planșe.

## Încă nedesenat

Solidele și suprafețele stocate ca corpuri ACIS (corpuri solide 3D, corpuri, regiuni și suprafețe) și plasele de subdiviziune sunt listate la **Încă nedesenat**, cu numărul lor. Sunt omise, nu ghicite.

## Greșeli frecvente

- **Totul pare plat.** Desenul este 2D: liniile lui nu au înălțime. Faceți clic pe {{ui:Front}} pentru a verifica; un desen plat apare ca o linie.
- **Un model solid nu arată nimic.** Solidele făcute cu un modelator solid sunt corpuri ACIS, listate la **Încă nedesenat**. Exportați modelul ca IFC sau ca fețe 3D din programul care l-a făcut.
- **Desenul este un mic grup în mijloc.** Ceva departe în spațiul model, precum o copie veche a unui plan, face extinderile mari. Măriți cu roata acolo unde doriți să priviți.

## Continuare

- [Lucrul cu straturi și planșe](topic:dwg-layers-sheets)
- [Tăierea unui model IFC cu un plan de secțiune](topic:section-plane)
