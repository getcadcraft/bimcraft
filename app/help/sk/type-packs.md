---
title: Balíčky typov: zdieľanie typov múrov ako otvorené súbory
summary: Uložte typy múrov s ich vrstvami, materiálmi, značkami a klasifikačnými kódmi a rodinami ako jeden otvorený súbor (obyčajný JSON alebo IFC) a pridajte ich do iného projektu. Typy múrov zo súboru IFC z iného programu sa dajú načítať tiež.
keywords: balíček typov, typy, typ múru, zdieľanie, export, import, knižnica, otvorený formát, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, materiály, vrstvy, šablóna, kancelárske štandardy, rodiny
from: e4c91331
---

## Čo urobíte

Prenesiete typy múrov z jedného projektu do druhého alebo ich odovzdáte niekomu, kto pracuje v inom programe. Balíček typov obsahuje každý typ múru s jeho vrstvami, hrúbkami, materiálmi, jadrom, dutinami, prioritou vrstiev, úrovňou rozpracovania (LOD), údajmi pre výkaz výmer a klasifikačnými kódmi a všetky rodiny, ktoré pridáte. Je to otvorený súbor: obyčajný text JSON, ktorý môže prečítať ktokoľvek, alebo súbor IFC. Nič v ňom nie je viazané na firmu, krajinu ani účet.

## Uloženie typov z projektu

1. Na paneli modelu otvorte **Údaje** a vyberte {{ui:Balíčky typov}}.
2. V časti {{ui:Uložiť typy z tohto projektu}} zaškrtnite typy múrov, ktoré tam majú patriť. Vlastné typy projektu sú zaškrtnuté; počiatočný typ sa dá pridať a vloží sa ako kópia. Zaškrtnite rodiny, ak ich chcete zahrnúť.
3. Napíšte {{ui:Názov balíka}}.
4. {{ui:Uložiť ako balík (.json)}} stiahne súbor `.cctypes.json`. {{ui:Uložiť ako IFC (.ifc)}} stiahne súbor IFC, ktorý obsahuje iba typy: každý typ múru ako IfcWallType s vrstvovou množinou materiálov, materiálmi a klasifikáciou, pre ľubovoľný program BIM.

## Pridanie typov do projektu

1. V tom istom dialógu vyberte {{ui:Otvoriť balík alebo súbor IFC…}} a zvoľte súbor `.json` alebo `.ifc`.
2. Dialóg zobrazí, čo súbor obsahuje: každý typ múru s hrúbkou, počtom vrstiev a kódmi, materiály a rodiny.
3. Vyberte, čo sa stane s {{ui:Typ, ktorý už tento projekt má}}: **Ponechať typ projektu**, **Pridať typ z balíka ako kópiu** (dostane nový názov končiaci na "(2)") alebo **Nahradiť ho (iba ak ho žiadny múr nepoužíva)**.
4. Kliknite na {{ui:Pridať do projektu}}. Dialóg zobrazí, čo bolo pridané, skopírované, nahradené alebo ponechané. Je to jeden krok späť.

Nové typy sú hneď v zozname typov nástroja Múr.

## Typy podlahy, strechy a stropu

Zoznam typov na uloženie tiež obsahuje typy podláh, striech a stropov projektu a ich počiatočné typy (označené Podlaha, Strecha, Strop). Balíček môže niesť všetky štyri druhy; každý typ uvádza svoju triedu IFC (IfcWallType, IfcSlabType, IfcCoveringType). Typ podlahy, strechy alebo stropu, ktorý prvky používajú, sa z balíčka nenahradí: zmeňte ho v editore typov.

## Jeden typ ako položka knižnice

Vyberte presne jeden typ a zvoľte **Uložiť ako položku knižnice…**. Uloží sa súbor `.cctype.json`: položka knižnice druhu Typy, ktorá obsahuje práve tento typ (jeho vrstvy, materiály, LOD a klasifikačné kódy). Nahrajte ju do knižnice, aby ste ju zdieľali. **Otvoriť balík alebo súbor IFC** načíta aj takúto položku a pridá jej typ do projektu ako balíček.

## Dobré vedieť

- Súbor IFC z iného programu sa dá otvoriť aj tu. Každý jeho typ múru, ktorý má vrstvy materiálu, sa načíta: názov, materiály a hrúbky vrstiev a každá dutina sú vlastné údaje súboru. Ktoré vrstvy sú jadro a čo každá vrstva robí (povrchová úprava, konštrukcia, izolácia) sa odhaduje, typ je označený **(odhadnuté)** a mali by ste ho skontrolovať v editore typu múru. Typ múru bez vrstiev sa vynechá a pomenuje sa.
- Materiál, ktorý projekt už má, sa zachová tak, ako je. Nový materiál, ktorého názov je obsadený, dostane za názov "(balíček)".
- Typ, ktorý múry používajú, sa z balíčka nikdy nenahradí. Zmeňte ho v editore typu múru, ktorý správne presunie jeho múry.
- Kód nastavený na jednom múre sa neprenáša: patrí tomuto múru. Kód nastavený na type sa prenáša.
- Súbor s poľom, ktoré formát nemá, vrstvou, ktorej materiál chýba, alebo čímkoľvek, čo nie je obyčajný text, sa odmietne a hlásenie uvedie, kde a prečo.
- Ešte nie je hotové: typy podláh, striech a stropov (v tejto verzii nemajú typy: každý má vlastnú hrúbku), typy dverí a okien iné než rodiny a šrafovania alebo farby zo súboru iného programu.
