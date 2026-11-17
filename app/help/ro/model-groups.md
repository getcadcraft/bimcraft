---
title: Grupuri de modele
summary: Grupați elementele alese într-un grup cu nume, plasați grupul din nou în altă parte și modificați o copie pentru a le schimba pe toate.
keywords: grup, grup de model, grupare, dezgrupare, instanță, copiere, repetare, unitate tipică, travee, apartament, editare grup, IfcGroup
from: 121c5027
---

## Ce veți face

Grupați o travee tipică, plasați-o de mai multe ori și modificați toate copiile schimbând una.

## Unde se află instrumentul

- Aranjări cu panglică: {{ui:Arhitectură}} › **Model** › {{ui:Grup de model}}.
- Aranjare clasică: bara de instrumente Desenare › meniul {{ui:Încăperi}} › Grup de model.

## Pași

1. Cu {{ui:Selectare}}, alegeți elementele: faceți clic pe unul, apoi Ctrl+clic sau Shift+clic pe celelalte.
2. Alegeți {{ui:Grup de model}}. Ele devin un grup imediat. Scrieți un {{ui:Nume grup}} în rând înainte, ca să îl numiți, sau scrieți unul după aceea, ca să îl redenumiți.
3. Apăsați {{ui:Plasare alta}} și faceți clic unde trebuie să stea copia: colțul ei din stânga jos merge la clic.
4. Modificați orice copie: mutați un capăt de perete, redimensionați o ușă, ștergeți un stâlp. Fiecare altă copie a grupului se schimbă în același pas, iar o singură anulare le readuce pe toate.
5. Cât timp {{ui:Grup de model}} este activ, un clic pe un element alege întregul lui grup.

## Alte lucruri pe care le puteți face

- {{ui:Adăugare la cele alese}}: adăugați mai multe elemente la grupul pe care l-ați ales ultimul.
- {{ui:Dezgrupare}}: această copie devine din nou elemente obișnuite. Celelalte copii rămân un grup.
- Mutați o copie întreagă cu Mutare: este același grup într-un loc nou; celelalte nu se mută.
- Ștergeți elementele unei copii și acea copie dispare.

## Ce poate fi într-un grup

Pereții cu ușile și ferestrele lor, stâlpii și planșeele desenate pot fi plasați din nou și păstrați identici. Un grup poate conține și alte elemente, dar atunci nu mai poate fi plasat din nou deocamdată; rândul spune de ce.

Copiile sunt mutate, nu rotite sau oglindite.

## În IFC

Un grup este un IfcGroup cu un IfcRelAssignsToGroup către membrii săi, care rămân pereți, stâlpi și planșee obișnuite. Fiecare copie a unui grup poartă același id de definiție.

## Încă nerealizat

- Rotirea sau oglindirea unei copii.
- Scări, acoperișuri, planșee de încăperi și elemente de bibliotecă într-un grup care este plasat din nou.
- Profilul, înclinarea și golurile de perete ale unui perete nu se transmit copiilor.
- Grupuri în interiorul grupurilor.

Vezi și [Mutare, aliniere și distribuire](topic:move-align-distribute).
