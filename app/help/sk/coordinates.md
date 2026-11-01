---
title: Súradnice v BimCraft
summary: Kde pracujete: poloha ukazovateľa v pôdoryse a 3D zobrazení, úroveň, na ktorej ste, počiatok projektu a bod zamerania lokality.
keywords: súradnice, kde som, poloha, ukazovateľ, odčítanie, x y z, úroveň, podlažie, počiatok projektu, počiatok, základný bod, bod zamerania, lokalita, mapové súradnice, X, Y, georeferencia, jednotky, poloha
from: 84df5245
---

## Čo budete robiť

Na prvý pohľad zistíte, v ktorej úrovni modelu kreslíte, aký ďaleko je ukazovateľ od počiatku projektu a kde leží bod zamerania lokality.

## Kde sa čísla zobrazujú

- **Nad 3D zobrazením** (vpravo dole, vedľa kocky zobrazenia): presuňte ukazovateľ nad model. Okienko ukazuje úroveň, na ktorej bod leží, a jeho výšku nad podlahou tejto úrovne, potom **X, Y a Z**. Nad prázdnym priestorom ukazuje bod na podlahe najnižšej úrovne.
- **Na pôdoryse** (vpravo dole, kým je zapnuté {{ui:Draw}}): úroveň, ktorú pôdorys zobrazuje, a výšku jej podlahy, a **X a Y** ukazovateľa, kým je nad pôdorysom.
- Ak súbor obsahuje prevod do mapy (bol exportovaný s mapovými súradnicami), obe okienka pridajú **X a Y** v mapovej sieti v jednotkách {{ui:Units}}, ktoré ste zvolili (vždy s jednotkou napísanou vedľa nich; stopy a palce sa zobrazujú ako desatinné stopy). Výkres (DWG alebo DXF) si zachováva vlastné jednotky: jeho odčítanie ich uvádza a nikdy sa neprevádza.

Každé X, Y a Z sa meria od **počiatku projektu** v jednotkách {{ui:Units}} zvolených na paneli nástrojov (stopy a palce, palce, desatinné stopy, milimetre, centimetre alebo metre). Kladná os Y smeruje na sever modelu, ktorý nie je vždy skutočný sever. Mapové X a Y sa riadia rovnakou voľbou (stopy a palce sa zobrazujú ako desatinné stopy). Ak je jednotka systému mapy iná než tá, ktorú ste zvolili, uvedie sa v zátvorkách za číslami, napríklad *(US survey feet)*, aby geodet vedel, v akej jednotke je samotný systém zapísaný.

## Dve značky

- **Počiatok projektu** (červený kruh s krížom): bod 0, 0, 0, od ktorého sa merajú všetky súradnice v modeli.
- **Bod zamerania** (modrý kruh s trojuholníkom): referenčný bod lokality, pre ktorý sú uvedené jej zemepisná šírka, dĺžka a nadmorská výška alebo mapové súradnice. V 3D zobrazení naň ukážte, aby ste zistili, kde leží.

Ak lokalita leží na počiatku projektu, ako v novej budove nakreslenej tu, jedna značka zobrazuje oboje. Kliknutím na tlačidlo so zameriavacím krížom v ktoromkoľvek okienku skryjete alebo zobrazíte značky. BimCraft si vašu voľbu zapamätá v tomto prehliadači.

## Čo by ste mali vidieť

- Čísla sa menia s pohybom ukazovateľa a okienko na pôdoryse uvádza úroveň, ktorú ste vybrali v zozname úrovní.
- Značky ostávajú na mieste pri otáčaní, posúvaní a zväčšovaní.

:::tip
Ak chcete zistiť zemepisnú šírku a dĺžku bodu, použite {{ui:Measure}} › {{ui:Location}}: pozrite si [Merať vzdialenosti, plochy a polohy v 3D](topic:measure).
:::

:::touch
Na dotykovej obrazovke okienko v 3D nič nezobrazuje, kým nepoužijete myš alebo pero: prst namiesto toho pohybuje pohľadom.
:::
