---
title: Model zo skenu
summary: Krátky postup od laserového skenu po steny: otvorte mračno bodov vedľa novej budovy, zarovnajte ho s úrovňou a obkreslite jeho steny na pôdoryse.
keywords: sken, laserový sken, mračno bodov, skutočný stav, existujúca budova, zameranie, trasovať, sken do BIM, model zo skenu, rez, zarovnať, kolmo, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Čo urobíte

Nakreslite existujúcu budovu podľa jej laserového skenu: steny tam, kde ich ukazuje sken, na správnej úrovni, kolmo na seba.

## Postup

1. **Budova, v ktorej sa kreslí.** {{ui:Súbor}} › {{ui:Nová budova}}, s toľkými úrovňami, koľko má budova (úrovne môžete pridať neskôr, pozri [Pozemok, budova na ňom a jej úrovne](topic:site-building-and-levels)). {{ui:Kresliť}} sa zapne.
2. **Sken.** {{ui:Zobraziť}} › {{ui:Mračno bodov}} a vyberte súbor (LAS, LAZ, E57, PLY, PCD, PTX alebo XYZ: pozri [Zobrazenie mračna bodov vedľa modelu](topic:point-clouds)). Mračno sa zobrazí v 3D pohľade a pôdorys ukazuje jeho **rez**: nasnímané body 1200 mm (4 ft) nad úrovňou, ako bodky. Pri tejto výške sa steny, dvere a okná najlepšie čítajú.
3. **Zarovnajte ho s úrovňou.** Otvorte ponuku {{ui:Sken}} na paneli modelu a kliknite na {{ui:Zarovnať jeho podlahu k tejto úrovni}}: mračno sa posunie nahor alebo nadol, kým podlaha, ktorú naskenovalo, neleží na zobrazenej úrovni. Skontrolujte, či teraz rez pretína steny.
4. **Kolmo na budovu.** {{ui:Sken}} › {{ui:Otočiť ho kolmo na budovu}} otočí mračno tak, aby steny v jeho reze ležali pozdĺž osí pôdorysu, takže steny, ktoré nakreslíte s podržaným {{key:Shift}}, sa zarovnajú so skenom. Otáča sa okolo stredu nájdených stien, takže stromy alebo stena suseda zachytené v reze neodchýlia sken. Najprv zarovnajte podlahu: rez potom pretína steny.
5. **Trasujte steny.** Vyberte {{ui:Stena}} a klikajte pozdĺž bodiek: nástroj prichytáva k nasnímaným bodom (značka uchopenia je malý kosoštvorec) aj k stenám, ktoré ste nakreslili. Stena sa kreslí na svojej osi, takže klikajte do stredu dvoch radov bodiek, ktoré stena zanecháva; hrúbku zadajte tak, že najprv vyberiete typ steny. Potom doplňte dvere a okná tam, kde rez ukazuje medzery.
6. **Ďalšia úroveň.** V zozname úrovní pôdorysu vyberte úroveň nad ňou: rez sleduje výšku rezu úrovne. Podlahu znova zarovnajte s touto úrovňou, iba ak podlažia skenu nie sú tam, kde sú vaše úrovne.

## Čo by ste mali vidieť

- Rez sa mení pri zmene úrovne a hrubší rez ({{ui:Sken}} › {{ui:Hrúbka rezu}}) zobrazí viac bodov tam, kde je sken riedky.
- {{ui:Sken}} › {{ui:Vrátiť zarovnanie}} vráti mračno na miesto, kde bolo pri otvorení. Zarovnanie posúva mračno iba v pohľade: nie je uložené v súbore IFC a steny, ktoré ste nakreslili, zostávajú na mieste. Zarovnanie sa prenesie s mračnom, keď zmeníte {{ui:Umiestniť}} alebo {{ui:Jednotky}}, alebo keď otvoríte iný model.
- {{ui:Sken}} › {{ui:Zobraziť rez v pôdoryse}} skryje alebo zobrazí bodky.

:::tip
Veľké skeny: pôdorys kreslí až 60,000 bodov rezu a 3D pohľad niekoľko miliónov bodov z celého mračna, obe vybrané rovnomerne cez sken, takže veľký súbor zostáva rýchly. Ak chcete trasovať v kresliacej aplikácii, použite na paneli mračna {{ui:Trasovať v CadCraft}}.
:::
