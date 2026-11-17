---
title: Jednotky pri importe: súbor uvádza svoje jednotky, alebo sa najprv opýtate
summary: Keď súbor, ktorý importujete, uvádza svoje jednotky, BimCraft ich použije a oznámi to. Keď ich neuvádza, BimCraft sa opýta skôr, než čokoľvek umiestni, a pre tento súbor si zapamätá vašu odpoveď.
keywords: jednotky, import, otvoriť, OBJ, STL, DWG, DXF, IFC, mračno bodov, položka knižnice, milimetre, metre, palce, stopy, mierka, zlá veľkosť, príliš veľký, príliš malý, 1000-krát, opýtať sa, zapamätané
from: f044e9bc
---

## Čo urobíte

Importujete súbor a uistíte sa, že sa dostane v správnej veľkosti.

## Kroky

1. Otvorte alebo pridajte súbor obvyklým spôsobom: {{ui:Otvorené}}, {{ui:Súbory}} v Knižnici, {{ui:Mračná bodov}} alebo Zostaviť › Z výkresu.
2. Ak súbor uvádza svoje jednotky, nič sa nepýta. Stavový riadok hovorí, aké jednotky súbor uvádza.
3. Ak ich neuvádza, zobrazí sa dialógové okno **Jednotky súboru**. Vyberte, čo je jedna jednotka v súbore, a kliknite na {{ui:Použiť tieto jednotky}}. Nič sa neumiestni, kým neodpoviete.
4. {{ui:Zrušiť}} (alebo {{key:Esc}}) nič neimportuje.

## Ktoré súbory uvádzajú svoje jednotky

- **IFC**: uvádza svoju jednotku dĺžky a hlásenie "Otvorené" hovorí, ktorú. IFC, ktoré žiadnu neuvádza, sa pred otvorením opýta; vaša odpoveď sa zapíše do modelu, takže súbor ju uvádza po uložení.
- **DWG a DXF**: jednotky vloženia výkresu. Výkres bez nich sa pýta (súbory Knižnice, Zostaviť › Z výkresu, terén z vrstevníc).
- **Zoznamy bodov** pre terén: jednotky neuvádzajú. Opýta sa vás.
- **Mračná bodov**: LAS a LAZ so súradnicovým systémom, E57, PTX a PLY uvádzajú svoje jednotky. Pri ostatných sa pýta.
- **OBJ a STL**: jednotky nikdy neuvádzajú. Opýta sa vás.
- **glTF a GLB**: metre, podľa pravidla samotného formátu.
- **Obrázky**: nemajú vlastnú veľkosť. Obrázok sa prispôsobí pohľadu a jeho veľkosť nastavíte pomocou mierky podľa dvoch bodov. Veľkosť, ktorú zadáte, sa pre tento súbor zapamätá: pri ďalšom umiestnení sa importuje v tejto veľkosti a stavový riadok to oznámi.
- **Doplnok Mračná bodov**: pýta sa, keď zostavujete mračno, ktorého súbor neuvádza jednotku, a označuje čísla mračna jednotkou, ktorú nesie.

## Dobré vedieť

- Odpoveď sa zapamätá pre tento súbor (jeho názov, veľkosť a dátum) na tomto počítači, vo všetkých aplikáciách CadCraft. Pri ďalšom importe rovnakého súboru sa nepýtate a stavový riadok oznámi, že sa použili zapamätané jednotky.
- Ak chcete byť opäť opýtaní: paleta príkazov ({{key:Mod+K}}) › **Znova sa opýtať na jednotky importovaných súborov**.
- Zoznam jednotiek, ktorý už import má (Jednotky v Knižnici, Jednotky v lište mračna, Jednotky výkresu v Zostaviť › Z výkresu), mení jednotky aj dodatočne. Zoznam Jednotky nástroja terénu je teraz len tým, s čím otázka začína.
