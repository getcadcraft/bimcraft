---
title: Pereți dintr-un desen calchiat
summary: Transformați un plan DWG sau DXF în pereți, uși și ferestre pe un nivel și păstrați desenul sub plan ca referință.
keywords: dwg, dxf, calchiere, calchiat, import plan, conversie, CAD în BIM, 2D în 3D, pereți din linii, straturi, blocuri, uși din blocuri, substrat, desen de referință, fundal, xref, aplicație de desen
from: 3bf213f1
---

## Ce veți face

Folosiți un plan pe care l-ați desenat (sau cineva l-a desenat) în aplicația de desen ca început al modelului: liniile lui de perete devin pereți, iar blocurile lui de uși și ferestre devin uși și ferestre.

## Pași

1. Activați {{ui:Desenare}} și alegeți nivelul pe care îl arată desenul din lista de niveluri a planului.
2. Alegeți {{ui:Build}} › {{ui:Dintr-un desen…}}, apoi {{ui:Alegere desen…}} și alegeți fișierul DWG sau DXF.
3. În casetă:
   - **Unitățile desenului** vin din desen; alegeți altele dacă sunt greșite (un plan desenat în picioare citit ca inch este de douăsprezece ori prea mic).
   - **Straturile cu pereții**: bifați straturile pe care se află liniile de perete. Straturile al căror nume spune „perete” sunt bifate pentru dvs.
   - **Liniile sunt**: **ambele fețe ale fiecărui perete** (modul obișnuit de desenare a planurilor: fiecare pereche de linii paralele la cel mult 600 mm distanță devine un perete de grosimea intervalului), **liniile centrale ale pereților** sau **o față**, cu peretele în stânga sau în dreapta ei. Cu linii centrale sau cu o față, tipul peretelui stabilește grosimea.
   - **Tipul peretelui** și **Înălțimea peretelui**, ca la instrumentul {{ui:Perete}}.
   - **Blocuri**: alegeți un tip de ușă sau de fereastră pentru fiecare bloc care este o ușă sau o fereastră, sau lăsați-l afară. Blocurile al căror nume conține „door” sau „window” sunt alese pentru dvs. Fiecare este pus în peretele pe care stă, la fel de lat ca blocul de-a lungul peretelui; o ușă se deschide spre latura pe care este desenat arcul ei.
   - **Unde merge**: la coordonatele proprii ale desenului, sau cu colțul lui din stânga-jos pe originea planului.
   - **Păstrarea desenului sub planul acestui nivel**: lăsați-l bifat ca să vedeți desenul ca linii subțiri sub ce faceți.
4. Linia de sub alegeri spune câți pereți, uși și ferestre va face. Faceți clic pe {{ui:Creare}}.

## Ce ar trebui să vedeți

- Pereții, ușile și ferestrele de pe nivel, uniți acolo unde se întâlnesc, cu încăperile pe care le închid; totul este un singur pas, deci {{key:Mod+Z}} le ia înapoi.
- Desenul ca linii subțiri sub plan. {{ui:Build}} › {{ui:Dintr-un desen…}} listează desenele păstrate pe nivel, fiecare cu {{ui:Eliminare}}; eliminarea unuia lasă pereții.
- În fișierul IFC, desenul păstrat este o adnotare pe nivel (liniile lui), deci și alte programe BIM îl arată.

:::note
Un PDF sau o scanare merge și ele: vezi [Pereți dintr-un set de planuri](topic:walls-from-plans). Arcele sunt lăsate afară (BimCraft desenează pereți drepți), la fel și liniile din blocuri. Liniile fără pereche la „ambele fețe” sunt numărate în casetă și lăsate afară: desenați acei pereți cu instrumentul {{ui:Perete}} sau curățați-i cu {{ui:Modificare}} › {{ui:Tăiere / prelungire}} (vezi [Tăierea, prelungirea și îmbinarea pereților](topic:trim-extend-walls)).
:::

:::tip
Calchiat peste o scanare în aplicația de desen? Deschideți și scanarea aici și verificați pereții față de ea: vezi [Model dintr-o scanare](topic:model-from-a-scan).
:::
