---
title: Arii și limite de arie
summary: Măsurați aria brută a clădirii sau aria închiriabilă în interiorul liniilor de limită pe care le desenați sau le luați din pereți și enumerați ariile într-un tabel.
keywords: arie, arii, limită de arie, schemă de arii, arie brută a clădirii, suprafață brută de planșeu, GFA, închiriabilă, plan de arii, tabel de arii, selectare pereți, neînchisă
from: c79f96d2
---

## Ce veți face

Desenați limitele unei scheme de arii, plasați ariile în interiorul lor și citiți totalurile.

## Unde sunt instrumentele

- Aranjamente cu panglică: {{ui:Arhitectură}} › **Room & Area** › {{ui:Arie}} și {{ui:Limită de suprafață}}.
- Aranjament clasic: bara de desenare › meniul {{ui:Încăperi}}.

## Pași

1. Alegeți {{ui:Limită de suprafață}}. În rând alegeți {{ui:Schemă}}: Arie brută a clădirii sau Închiriabilă. Fiecare schemă are propriile limite.
2. Alegeți cum se fac liniile în {{ui:Creare prin}}:
   - **Desenare**: faceți clic punct cu punct.
   - **Selectare pereți: axa centrală**: faceți clic pe un perete, iar axa lui devine o limită.
   - **Selectare pereți: fața pe care dați clic**: faceți clic pe un perete pe partea dorită; acea față devine limita. Pentru aria brută a clădirii, faceți clic pe exteriorul pereților exteriori.
3. Alegeți {{ui:Arie}}. Alegeți aceeași schemă, scrieți un nume, un număr sau un tip dacă doriți și faceți clic în interiorul limitelor.
4. Aria se măsoară imediat. Selectați-o pentru a-i schimba numele, numărul sau tipul în Proprietăți.

## Ce urmează după ce

- O limită făcută prin selectarea unui perete urmează acel perete: mutați peretele și aria se măsoară din nou în același pas.
- O limită desenată rămâne unde ați desenat-o.
- Fețele pereților care se întâlnesc într-un colț se întâlnesc și ele acolo, deci patru pereți selectați închid o arie fără goluri.
- Limitele de arie apar pe plan cât timp un instrument de încăpere sau de arie este activ, astfel încât nu aglomerează planul în rest.

## Dacă limitele nu se închid

Aria este totuși plasată. Apare **Neînchisă** și nu măsoară nimic până când limitele se închid în jurul ei. Este un sfat: nimic nu este refuzat.

## Tabelul

Panou stânga › {{ui:Tabele centralizatoare}} › **Arii**: schemă, număr, nume, tip, nivel, arie și perimetru, cu un total. Un clic pe un rând selectează aria. {{ui:Descărcare CSV}} dă același tabel.

## În IFC

O arie este un IfcSpace fără corp: PredefinedType GFA pentru schema de arie brută a clădirii, USERDEFINED cu ObjectType Rentable pentru cea închiriabilă. Are GrossFloorArea și GrossPerimeter și nicio arie netă, astfel încât să nu fie confundată cu o cameră. O limită este un IfcVirtualElement.

## Încă nerealizat

- Scheme proprii (doar Arie brută a clădirii și Închiriabilă).
- Umpleri cu culori după tipul de arie.
- Reguli care plasează limita automat, de exemplu „până la linia geamului”.

Vezi și [Încăperi și separatoare de încăperi](topic:rooms-and-separators), [Etichete de cameră și de arie](topic:room-and-area-tags).
