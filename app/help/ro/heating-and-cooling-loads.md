---
title: Estimarea sarcinilor de încălzire și răcire
summary: Pierderea de căldură a fiecărei încăperi, încălzirea pe un an în grade-zile și vârful de răcire, din ceea ce o mărginește în model și din valoarea U a fiecărui element, cu fiecare intrare afișată. Un instrument de proiectare, nu un calcul de conformitate.
keywords: energie, încălzire, răcire, pierdere de căldură, sarcină de căldură, sarcină de răcire, valoare U, coeficient de transfer termic, grade-zile, hdd, ventilație, schimburi de aer, câștiguri interne, câștig solar, lambda, conductivitate, izolație, proiectare timpurie, analiză, încăperi, spații
from: ec312d20
---

În fila {{ui:Lumină naturală}}, după {{ui:Calculare}}, deschideți {{ui:Sarcini de încălzire și răcire}} și faceți clic pe {{ui:Calculare sarcini}}. Fiecare încăpere primește **pierderea de căldură** într-o zi rece de proiectare, **încălzirea pe un an** și **vârful de răcire** într-o zi caldă. Nimic nu este încărcat în altă parte; nimic nu se modifică în model decât dacă tastați o valoare U.

:::warning
Acesta este **un instrument de proiectare, nu un calcul de conformitate**: o estimare în regim staționar, cu fiecare intrare pe ecran. **Nu** este metoda ISO 52016-1, nu este o simulare și nu este un certificat energetic; nu dimensionează centrale termice, pompe de căldură sau agregate frigorifice. Verificați rezultatele și dimensionați echipamentele împreună cu un inginer.
:::

## Ce mărginește fiecare încăpere

BimCraft o găsește în chiar modelul, astfel încât orice IFC de la orice program funcționează (nu are nevoie de limitele spațiilor pe care le exportă unele programe). Din fiecare porțiune a suprafeței fiecărei încăperi privește drept înainte:

- primul perete, fereastră, ușă, planșeu, acoperiș, placaj, fațadă-cortină sau grindă pe care îl întâlnește **mărginește** porțiunea respectivă;
- chiar după acel element, fie **o altă încăpere** (considerată alăturată, la aceeași temperatură: fără pierdere), fie **nimic** (exteriorul), sau, sub un planșeu de la cel mai jos nivel, **terenul**;
- o deschidere liberă de ușă spre altă încăpere este considerată alăturată; o porțiune care nu întâlnește nimic (în limita a 1.5 m lateral sau în jos, 8 m în sus) este listată sub încăpere și lăsată deoparte.

Ferestrele și ușile își preiau dimensiunea din IFC (lățime totală × înălțime) din peretele în care stau. Faceți clic pe o încăpere din tabel pentru a vedea fiecare element care o mărginește, cu suprafața, valoarea U și de unde provine valoarea U.

## Valori U

Pentru fiecare element, BimCraft folosește, în această ordine:

1. **Valoarea U proprie a IFC-ului**: `ThermalTransmittance` din setul comun de proprietăți al elementului (de exemplu `Pset_WallCommon`) sau din tipul său. Majoritatea programelor de proiectare o pot scrie.
2. **Straturile sale de material**: 1 ÷ (rezistența superficială interioară + grosimea fiecărui strat ÷ conductivitatea sa λ + rezistența superficială exterioară), cu rezistențele superficiale obișnuite (0.13 și 0.04 m²K/W pentru pereți; 0.10 în sus, 0.17 în jos, la interior). Conductivități tipice de pornire (vată minerală 0.035, cărămidă 0.77, beton 1.4…); sub {{ui:Conductivitatea materialelor}} tastați pe cea a producătorului, iar fiecare valoare U din acele straturi urmează.
3. **O valoare tipică** (pereți 0.3, acoperișuri 0.2, planșee 0.25, ferestre 1.4, uși 1.6 W/m²K), marcată ca atare: tastați-o pe a dvs.

O valoare U tastată în detaliul unei încăperi este scrisă în setul comun de proprietăți al elementului ca `ThermalTransmittance` (un singur pas; {{key:Mod+Z}} o anulează). Dacă mai multe elemente au același set (un tip de perete, de exemplu), toate se schimbă împreună, iar linia de stare spune câte.

## Încălzire

- **Pierderea de căldură** = Σ U × A × (interior − exterior) pentru tot ce dă spre exterior + Σ U × A × (interior − sol) pentru planșeele pe sol + 0.335 × schimburi de aer pe oră × volumul încăperii × (interior − exterior). 0.335 Wh pe m³ și pe kelvin este densitatea aerului (1.2 kg/m³) înmulțită cu capacitatea sa termică (1005 J/kgK).
- **Încălzirea pe un an** = (pierderea încăperii pe grad spre exterior, prin anvelopă și aer, plus pierderea sa prin sol, scalată la aceeași diferență) × **grade-zile** × 24 ÷ 1000, în kWh. Tastați grade-zilele pentru locație sau folosiți {{ui:Citire grade-zile dintr-un CSV…}} (un rând pe zi sau pe lună; ultimul număr din fiecare rând se adună). Folosiți grade-zile la temperatura de bază a sursei dvs.: acea bază include deja căldura gratuită a oamenilor, a corpurilor de iluminat și a soarelui.

## Răcire

**Vârful de răcire** = căldura prin anvelopă și aer la temperatura de proiectare de vară + oamenii (suprafața pe persoană × căldura pe persoană) + iluminatul și echipamentele pe m² de suprafață + **soarele**: vârful lui {{ui:Soarele prin ferestre la o dată}} pentru acea încăpere. Calculați mai întâi soarele, într-o zi caldă; până atunci soarele se consideră 0, iar secțiunea o spune. Vârfurile fiecărei părți se adună chiar dacă apar la ore diferite, ceea ce supraestimează puțin.

## Ce lasă de-o parte

- Metodele lunare și orare ISO 52016-1 (un standard cu plată), căldura stocată în masa clădirii, punțile termice, performanța sistemelor de încălzire și răcire și fișierele climatice.
- Încăperile vecine sunt luate la aceeași temperatură; spațiile neîncălzite nu sunt modelate.

Vedeți și [Estimarea luminii naturale în fiecare încăpere](topic:daylight-factor).
