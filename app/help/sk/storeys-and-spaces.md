---
title: Zobrazenie a skrytie podlaží, priestorov a hrán
summary: Vypnite podlažia, aby ste videli dovnútra budovy, zobrazte miestnosti a priestory a zapínajte a vypínajte čiary hrán.
keywords: podlažia, úrovne, podlahy, skryť, izolovať, miestnosti, priestory, ifcspace, hrany, viditeľnosť, rez
from: b838dcc0
---

## Čo urobíte

Pozrite sa dovnútra modelu IFC tak, že vypnete podlažia nad tým, ktoré vás zaujíma, potom zobrazíte miestnosti a priestory a vypnete čiary hrán pre čistejší vzhľad.

## Postup: pozrieť si jedno podlažie

1. Otvorte model IFC. Pozri [Otvorenie modelu IFC a prezeranie v 3D](topic:open-ifc-model).
2. Nájdite zoznam {{ui:Podlažia}} vľavo. Najvyššie podlažie je prvé, ako keď čítate rez od strechy nadol.
3. Odškrtnite strechu a každé podlažie nad podlažím, ktoré chcete vidieť.
4. Kliknite na {{ui:Zhora}}, aby ste sa pozreli dolu na to podlažie.
5. Znova zaškrtnite podlažia, aby sa vrátili.

## Čo by ste mali vidieť

Každé podlažie, ktoré odškrtnete, okamžite zmizne aj so všetkým, čo je na ňom. Zoznam zobrazuje len podlažia, ktoré obsahujú niečo viditeľné. Prvky, ktoré nie sú priradené k žiadnemu podlažiu, sú zoskupené dole ako **Nie je na podlaží**; prvky lokality a niektorý nábytok sa tam často dostanú.

## Postup: zobrazenie miestností a priestorov

1. Kliknite na {{ui:Priestory}} na paneli nad modelom. Tlačidlo zostane stlačené.
2. Pozrite sa na model: miestnosti a priestory sa zobrazia ako bledé, priesvitné objemy.
3. Kliknite na priestor, aby ste si vpravo prečítali jeho vlastnosti, napríklad názov, číslo a plochu.
4. Kliknite znova na {{ui:Priestory}}, aby ste ich skryli.

Priestory sa pri otvorení modelu skryjú, pretože by inak zakrývali steny a podlahy.

## Postup: hrany

1. Kliknite na {{ui:Hrany}}, aby sa tenké čiary hrán vypli.
2. Kliknite znova, aby sa zapli.

Pri veľmi veľkých modeloch (nad 1.5 milióna trojuholníkov) je tlačidlo sivé s tipom "Hrany sú pre veľmi veľké modely vypnuté". Šetrí to pamäť.

## Časté chyby

- **Odškrtnutie podlažia a stále vidieť jeho časti.** Prvok patrí k podlaziu, ktoré mu priradil exportujúci program. Vysoká stena alebo schodisko často patrí len svojmu základnému podlaziu, takže zostane, keď sa podlažie nad ním skryje, alebo zmizne spolu s podlažím pod ním.
- **Skrývanie podlaží, aby ste videli dovnútra.** Rezný box je často rýchlejší: pozri [Rez modelu IFC rezovou rovinou](topic:section-plane#a-section-box). Môžete tiež odškrtnúť riadky v {{ui:Strom modelu}} (pozri [Orientácia v strome modelu](topic:model-tree)).
- **Kliknutie na priestor cez stenu.** Kliknutie vyberie najbližší viditeľný povrch. Skryte podlažie nad ním alebo prepnite na {{ui:Zhora}} a potom kliknite.
- **Názvy podlaží vyzerajú divne.** BimCraft zobrazuje názvy podlaží uložené v súbore. Ak hovoria "Level 1" alebo číslo, to je to, čo zapísal exportér.
