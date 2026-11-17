---
title: Găsirea elementelor după clasă, nume sau proprietate
summary: Găsiți fiecare element care se potrivește cu una sau mai multe reguli — clasa, numele, tipul, nivelul, materialul sau orice valoare a unei proprietăți — selectați-le pe toate și păstrați regulile ca un set de căutare cu nume.
keywords: căutare, găsire, filtrare, interogare, regulă, set de căutare, set de selecție, căutare salvată, proprietate, valoare, clasă, material, selectare totală
from: 3d293bc2
---

## Ce veți face

Selectați dintr-un singur pas toate elementele de un fel sau cu o anumită valoare: fiecare ușă, fiecare perete de la Nivelul 2, fiecare element a cărui rezistență la foc este EI60, fiecare perete care costă mai mult decât o sumă stabilită.

## Pași

1. Deschideți un model IFC.
2. Deschideți {{ui:Find}} în panoul din stânga.
3. În prima regulă, alegeți o proprietate (mai întâi cele ale elementului, precum {{ui:Class}} și {{ui:Storey}}, apoi seturile de proprietăți ale modelului), modul de comparare și o valoare. Caseta de valori propune valorile pe care le are modelul.
4. Pentru a restrânge căutarea, faceți clic pe {{ui:Add a rule}}. Alegeți {{ui:Every rule}} ca să fie necesare toate regulile, sau {{ui:Any rule}} ca să fie necesară doar una dintre ele.
5. Faceți clic pe {{ui:Find}} sau apăsați {{key:Enter}} într-o casetă de valori. Elementele care se potrivesc sunt selectate.
6. Pentru a păstra regulile, faceți clic pe {{ui:Save as a set}}, tastați un nume și faceți clic din nou pe el. Mai târziu, faceți clic pe numele unui set ca să căutați cu el.

## Ce ar trebui să vedeți

- Elementele care se potrivesc sunt selectate în vizualizarea 3D și în arborele modelului, iar {{ui:Properties}} indică numărul lor pe clase. Apăsați {{key:I}} ca să afișați doar acele elemente, {{key:H}} ca să le ascundeți.
- Cuvintele se potrivesc fără a ține cont de majuscule. Numerele se compară ca numere: „este mai mare decât 1000” înseamnă valoarea, nu textul.
- {{ui:has a value}} și {{ui:has no value}} nu cer nicio valoare; ele găsesc ce este completat sau ce lipsește.
- Seturile salvate rămân în acest browser pentru fiecare model deschis.

## Greșeli frecvente

- **Nu se găsește nimic.** O regulă are nevoie de o valoare pe care să o potrivească: uitați-vă la sugestiile din caseta de valori.
- **O proprietate lipsește din listă.** Niciun element cu geometrie în acest model nu o are.

## Următorul pas

- [Colorarea elementelor după o proprietate](topic:color-by-property)
- [Ascunderea, izolarea și transparența elementelor](topic:hide-and-isolate)
