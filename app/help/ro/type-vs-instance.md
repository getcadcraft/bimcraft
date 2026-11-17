---
title: Schimbarea unei proprietăți de tip pentru fiecare element de un tip
summary: Deosebiți proprietățile de tip de cele de instanță, schimbați o valoare pe tip ca toate elementele să urmeze, și verificați că modificarea unui element rămâne a lui.
keywords: tip, instanță, proprietăți de tip, tip de familie, partajat, copiere la scriere, toate elementele, editare în masă, producător, model
from: bffd8789
---

## Ce veți face

Setați producătorul pentru un tip de ușă, astfel încât fiecare ușă de acel tip să-l arate, apoi dați unei uși propria rezistență la foc, fără să atingeți celelalte. Aceasta arată diferența dintre proprietățile de tip și cele de instanță în BimCraft.

## Tip sau instanță?

- O proprietate de **instanță** aparține unui singur element: eticheta lui, marca lui, camera lui, propria rezistență la foc.
- O proprietate de **tip** aparține tipului pe care îl au în comun multe elemente: producător, model, lățimea unui tip de ușă.

În panoul {{ui:Proprietăți}}, seturile care vin din tip au „ (tip)” după nume și linia „Proprietate de tip: o modificare aici se aplică fiecărui element din acest tip.” Fiecare alt set aparține elementului însuși. **Tip** din primul bloc arată numele tipului.

## Pași: schimbați tipul

1. Deschideți un model IFC și faceți clic pe o ușă.
2. Notați-i **Tip** din primul bloc al panoului {{ui:Proprietăți}}, de exemplu „Single-Flush 900 x 2100”.
3. Derulați până la un set al cărui nume se termină cu „(tip)”.
4. Faceți clic pe valoarea pe care vreți s-o schimbați, de exemplu **Producător**.
5. Scrieți noua valoare și apăsați {{key:Enter}}.
6. Uitați-vă în lista {{ui:Modificări}}: intrarea se termină cu „(tip)”.
7. Faceți clic pe altă ușă de același tip.
8. Verificați aceeași valoare: arată și ea noua valoare.

## Pași: schimbați doar un element

1. Faceți clic pe o ușă.
2. Deschideți un set fără „(tip)” în nume, de exemplu `Pset_DoorCommon`.
3. Faceți clic pe o valoare, cum ar fi **FireRating**, scrieți o valoare nouă și apăsați {{key:Enter}}.
4. Faceți clic pe ușa de lângă ea, de același tip.
5. Verificați aceeași valoare: arată încă valoarea veche.

Chiar dacă exportatorul a partajat acel set de proprietăți între ambele uși, BimCraft i-a dat primei uși propria copie înainte de a o schimba. Vezi [De ce modificarea schimbă doar un element](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Salvați

1. Faceți clic pe {{ui:Salvare ca IFC}} sau apăsați {{key:Mod+S}}.
2. Deschideți copia salvată în BimCraft sau în orice vizualizator IFC, ca să verificați ambele modificări.

## Greșeli frecvente

- **Nu fiecare model are tipuri.** Unii exportatori nu scriu obiecte de tip sau pun totul pe instanță. Atunci nu există seturi „(tip)”, iar fiecare element trebuie schimbat separat.
- **Aceeași valoare apare într-un set de tip și într-un set de instanță.** Unii exportatori scriu un parametru în ambele locuri. Alte programe pot citi oricare; schimbați-le pe amândouă dacă vreți să fie de acord.
- **Așteptarea să alegeți „toate ușile acestui tip” și să le editați împreună.** Nu există selecție multiplă în această versiune. O proprietate de tip este modul de a schimba multe elemente deodată.
