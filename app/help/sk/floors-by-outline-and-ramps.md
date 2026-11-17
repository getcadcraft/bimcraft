---
title: Podlahy ľubovoľného tvaru, otvory a rampy
summary: Nakreslite podlahu alebo dosku podľa jej obrysu (balkón, konzolu, podestu), vyrežte v nej otvory a nakreslite rampy s ich podestami.
keywords: podlaha, doska, obrys, balkón, konzola, podesta, terasa, otvor v podlahe, diera, šachta, prázdny priestor, rampa, sklon, bezbariérová rampa, rampa pre invalidný vozík, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Čo urobíte

Vytvárate podlahy, ktoré sa neriadia miestnosťami, napríklad balkón za stenami, a kreslíte rampy medzi podlažiami.

## Nakreslenie podlahy podľa obrysu

1. Zapnite {{ui:Kresliť}}, vyberte podlažie a potom {{ui:Zostava}} › {{ui:Podlaha podľa obrysu}}.
2. V riadku pod nástrojmi vyberte druh (betónová doska alebo drevená podlaha), jej použitie (podlaha alebo podesta), hrúbku a to, o koľko je jej horná hrana nad úrovňou (0 = v úrovni podlahy podlažia; záporná hodnota ju nastaví nižšie).
3. Kliknite na rohy. Nástroj sa prichytáva k stenám, osiam mriežky a ich priesečníkom; podržte {{key:Shift}}, aby hrana zostala kolmá. Dĺžka každej hrany a plocha sa zobrazujú počas kreslenia. {{key:Backspace}} zruší posledný roh.
4. Kliknite znova na prvý roh, dvakrát kliknite alebo stlačte {{key:Enter}}, čím dokončíte.

## Vyrezanie otvoru

Kliknite na podlahu (v 3D zobrazení alebo na jej obrys na pôdoryse), potom vo {{ui:Vlastnostiach}} kliknite na {{ui:Pridať otvor}} a kliknite na rohy otvoru vnútri podlahy; dokončite ako vyššie. Vo {{ui:Vlastnostiach}} podlahy sú uvedené jej otvory, každý s {{ui:Zmazať}}, a jej plocha bez nich.

## Nakreslenie rampy

1. Vyberte {{ui:Zostava}} › {{ui:Rampa}}. Nastavte jej šírku a to, či ide **na podlažie vyššie** alebo **hore o stúpanie**, ktoré zadáte.
2. Vyberte spôsob nastavenia: **podľa sklonu** (1:12 na začiatku; rampa je taká dlhá, aká je potrebná pre výšku) alebo **podľa dĺžky** (vaše druhé kliknutie nastaví dĺžku a sklon sa prispôsobí).
3. Kliknite na pätu rampy (stred jej spodnej hrany), potom kliknite smerom nahor. Náhľad zobrazí jej dĺžku, ramená a sklon.

Výška viac než 30 in (760 mm) sa rozdelí na ramená s podestou 5 ft (1525 mm) medzi nimi. Ide o bežné plánovacie hodnoty, nie o vaše predpisy: skontrolujte pravidlá v mieste stavby. Rampa strmšia než 1:12 je v jej {{ui:Vlastnostiach}} označená.

## Čo by ste mali vidieť

- Každá podlaha, otvor a rampa je jeden krok: {{key:Mod+Z}} ju vráti späť.
- Na pôdoryse obrys nakreslenej podlahy (otvor sa kreslí prečiarknutý) a obrys rampy, ramená, podesty a šípka nahor s jej sklonom.
- Vlastnosti nakreslenej podlahy (druh, použitie, hrúbka, horná hrana, plocha, otvory) a rampy (šírka, horná hrana, výška, sklon alebo dĺžka); {{key:Delete}} odstráni ktorúkoľvek z nich.
- Rampa na podlažie vyššie sa prispôsobí tomuto podlažiu, keď sa zmení jeho výška.
- V súbore IFC: nakreslená podlaha je doska (IfcSlab, podlaha alebo podesta) s vyrezanými otvormi (IfcOpeningElement); rampa je IfcRamp zložená zo sklonených ramien (IfcRampFlight) a podest, so svojím sklonom a šírkou.

:::note
Podlahy nakreslené týmto spôsobom zostávajú tam, kde ste ich nakreslili. Podlahy vytvorené pomocou {{ui:Podlaha}} sa pri posune stien prispôsobujú miestnostiam: pozri [Miestnosti, podlahy, stropy a strechy](topic:floors-and-roofs).
:::
