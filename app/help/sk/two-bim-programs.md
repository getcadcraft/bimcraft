---
title: Práca medzi dvoma programami BIM
summary: Pošlite model z jedného programu BIM do druhého cez IFC s BimCraftom uprostred, zachovajte jeho GlobalId, sady vlastností a klasifikácie, nastavte oba programy na rovnaké vlastnosti a pozrite si, čo sa vrátilo.
keywords: ifc, obojsmerný prenos, interoperabilita, globalid, guid, sady vlastností, psety, klasifikácie, zdieľané parametre, mapovanie vlastností, prekladač, bcf, koordinácia, výmena
from: 9f224176
---

## Čo urobíte

Presuňte model medzi dvoma programami BIM, napríklad z Revitu do Archicadu a späť, cez IFC, s BimCraftom uprostred na kontrolu, doplnenie a prehľad o tom, čo sa zachovalo. Vlastný formát súboru ani jedného programu sa nečíta: všetko putuje ako IFC.

## Čo BimCraft zachováva

Keď zmeníte model v BimCraftu a kliknete na {{ui:Uložiť ako IFC}}, každý riadok, ktorý ste nezmenili, sa zapíše presne tak, ako bol. Takže:

- **GlobalId** zostávajú rovnaké a druhý program dokáže priradiť každý prvok k tomu, ktorý poslal.
- **Sady vlastností** a ich hodnoty zostávajú, okrem hodnôt, ktoré ste zmenili.
- **Klasifikácie** zostávajú pripojené k svojim prvkom.

## Nastavte oba programy na rovnaké vlastnosti

1. Otvorte model v BimCraftu (a balík projektu, ak ho máte: pridajú sa jeho skupiny vlastností).
2. V ľavom paneli otvorte {{ui:Medzi dvoma programami BIM}}.
3. V časti **Mapovanie vlastností** stiahnite to, čo každý program potrebuje:
   - {{ui:Zdieľané parametre}}: súbor zdieľaných parametrov. V Revite ho načítajte cez Manage › Shared Parameters a pridajte parametre do kategórií, ktoré ich potrebujú.
   - {{ui:Sady vlastností exportu IFC}}: súbor sady vlastností definovanej používateľom. V nastaveniach exportu IFC v Revite ho vyberte pod sadami vlastností definovanými používateľom, aby exportované IFC nieslo rovnakú sadu a rovnaké názvy vlastností.
   - {{ui:Tabuľka mapovania (CSV)}}: každá vlastnosť s jej sadou IFC a názvom, typom a zodpovedajúcimi názvami v každom programe. Mapovacie súbory Archicadu nie sú zverejneným formátom, takže jeho prekladač IFC a správcu vlastností nastavte podľa tejto tabuľky ručne.
   - {{ui:Súbor mapovania}}: celé mapovanie ako jeden súbor, ktorý uchovajte spolu s projektom.

Štandardné sady (Pset_ a Qto_) sú vynechané zo súboru zdieľaných parametrov: oba programy ich zapisujú zo svojich vlastných údajov.

## Odošlite model a vráťte ho späť

1. Exportujte IFC z prvého programu so zachovanými GlobalId (Revit: zapnutá možnosť "Store the IFC GUID in an element parameter after export").
2. Otvorte ho v BimCraftu, skontrolujte ({{ui:Kontroly modelu}}, {{ui:Kontrola kolízií}}), pridajte problémy ({{ui:Problémy}}, BCF), v prípade potreby zmeňte hodnoty a kliknite na {{ui:Uložiť ako IFC}}.
3. Otvorte uložené IFC v druhom programe, pracujte na ňom a exportujte IFC odtiaľ so zachovanými GlobalId (prekladač Archicadu: "Global Unique Identifiers: Keep existing").
4. Späť v BimCraftu otvorte model, ktorý odišiel, a potom pridajte ten, ktorý sa vrátil ({{ui:Pridať model}} v časti Modely).
5. V {{ui:Medzi dvoma programami BIM}} vyberte **Odoslané** a **Vrátené** a kliknite na {{ui:Vytvoriť správu}}.

## Prečítajte si správu

- **Prvky**: koľko sa vrátilo s rovnakým GlobalId, koľko chýba a koľko je nových. Prvky s novým GlobalId sa zobrazia ako jeden chýbajúci a jeden nový: druhý program ho nezachoval.
- **Zmenená trieda IFC**: prvky, ktoré sa vrátili ako iný druh prvku.
- **Zachované hodnoty vlastností**: podiel hodnôt, ktoré sa vrátili nezmenené. Zoznam nižšie ukazuje vlastnosti s najviac zmenenými alebo chýbajúcimi hodnotami.
- **Klasifikácie**: zachované, zmenené (rovnaký systém, iný kód) alebo chýbajúce.

{{ui:Stiahnuť správu (CSV)}} dá každú vlastnosť s jej počtami. Ak chcete vidieť, ktoré prvky sa presunuli alebo zmenili tvar, použite {{ui:Porovnať verzie}} na tých istých dvoch modeloch.

:::note
BimCraft nespúšťa ani jeden z programov. Ktoré nastavenia prenesú hodnotu, závisí od nastavení IFC každého programu: správa ukazuje, čo sa skutočne vrátilo, takže vyskúšajte nastavenie, exportujte znova a porovnajte.
:::

## Problémy sa prenášajú ako BCF

Problémy, ktoré nahlásite v BimCraftu, sa exportujú ako BCF ({{ui:Problémy}}), ktorý môžu obidva programy čítať svojimi nástrojmi BCF, takže otázka o prvku sa dostane k osobe pracujúcej v druhom programe spolu so svojím záberom.

Pozri aj [Otvorenie balíka projektu](topic:open-project-bundle), [Z projektového súboru do BimCraftu cez IFC](topic:rvt-to-ifc) a [Porovnanie dvoch verzií modelu](topic:compare-versions).
