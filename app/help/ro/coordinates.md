---
title: Coordonate în BimCraft
summary: Unde lucrați: poziția cursorului în plan și în vizualizarea 3D, nivelul pe care vă aflați, originea proiectului și punctul topografic al amplasamentului.
keywords: coordonate, unde sunt, poziție, cursor, citire, x y z, nivel, etaj, origine proiect, origine, punct de bază, punct topografic, amplasament, coordonate pe hartă, est, nord, georeferențiere, unități, locație
from: 84df5245
---

## Ce veți face

Aflați dintr-o privire unde vă aflați într-un model: pe ce nivel desenați, cât de departe este cursorul de originea proiectului și unde se află punctul topografic al amplasamentului.

## Unde apar valorile

- **Deasupra vizualizării 3D** (jos în dreapta, lângă cubul de vizualizare): mutați cursorul peste model. Caseta arată nivelul pe care se află punctul și cât de sus este față de pardoseala acelui nivel, apoi **X, Y și Z**. Peste spațiul gol citește punctul de pe pardoseala celui mai de jos nivel.
- **Pe plan** (jos în dreapta, cât timp {{ui:Desenare}} este activ): nivelul afișat de plan și înălțimea pardoselii lui, plus **X și Y** ale cursorului cât timp este peste plan.
- Când fișierul are o conversie cartografică (a fost exportat cu coordonate de hartă), ambele casete adaugă **estul și nordul** pe grila hărții, în {{ui:Unități}} alese de dumneavoastră (unitatea este scrisă mereu lângă valori; picioarele și inciile apar ca picioare zecimale). Un desen (DWG sau DXF) își păstrează unitățile proprii: citirea cursorului le indică și nu sunt convertite niciodată.

Fiecare X, Y și Z se măsoară față de **originea proiectului**, în {{ui:Unități}} alese pe bara de instrumente (picioare și inci, inci, picioare zecimale, milimetri, centimetri sau metri). Y pozitiv indică nordul modelului, care nu este întotdeauna nordul adevărat. Estul și nordul de pe hartă urmează aceeași alegere (picioarele și inciile apar ca picioare zecimale). Când unitatea proprie a sistemului de hartă este alta decât cea aleasă, ea este scrisă între paranteze după numere, de exemplu *(US survey feet)*, ca un topograf să vadă în ce unitate este scris chiar sistemul.

## Cei doi markeri

- **Originea proiectului** (un cerc roșu cu o cruce): punctul 0, 0, 0 față de care se măsoară fiecare coordonată din model.
- **Punctul topografic** (un cerc albastru cu un triunghi): punctul de referință al amplasamentului, pentru care sunt date latitudinea, longitudinea și altitudinea sau coordonatele de hartă. În vizualizarea 3D, îndreptați cursorul spre el ca să citiți unde se află.

Când amplasamentul coincide cu originea proiectului, ca într-o clădire nouă desenată aici, un singur marker arată ambele. Faceți clic pe butonul cu cruce din oricare casetă ca să ascundeți sau să afișați markerii; BimCraft reține alegerea dumneavoastră în acest browser.

## Ce ar trebui să vedeți

- Valorile se schimbă pe măsură ce mutați cursorul, iar caseta din plan denumește nivelul pe care l-ați ales în lista de niveluri.
- Markerii rămân pe loc când orbitați, panoramați și măriți.

:::tip
Pentru a citi latitudinea și longitudinea unui punct, folosiți {{ui:Măsurare}} › {{ui:Locație}}: vezi [Măsurarea distanțelor, a suprafețelor și a locațiilor în 3D](topic:measure).
:::

:::touch
Pe un ecran tactil, caseta 3D nu arată nimic până nu folosiți un mouse sau un creion: degetul mișcă vizualizarea.
:::
