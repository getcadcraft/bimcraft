---
title: Kontrola kolízií
summary: Nájdite miesta, kde prvky jednej sady zasahujú do prvkov inej — potrubia cez nosníky, steny do stropov — v jednom modeli alebo naprieč viacerými, s toleranciou, a premeňte kolíziu na problém.
keywords: kolízia, detekcia kolízií, kontrola kolízií, tvrdá kolízia, prienik, zrážka, koordinácia, prekrytie, tolerancia, mep, konštrukcia
from: 9cb12346
---

## Čo budete robiť

Nájdite miesta, kde sa dve sady prvkov navzájom zasahujú, napríklad všetko v modeli rozvodov oproti konštrukcii. Potom sa pozrite na každé miesto a ponechajte tie, na ktorých záleží, ako problémy.

## Postup

1. Otvorte model IFC a ďalšie pridajte pomocou {{ui:Add a model…}}, ak kontrolujete naprieč modelmi. Pozri [Zobrazenie viacerých modelov IFC naraz](topic:several-models).
2. Otvorte {{ui:Clash check}} v ľavom paneli.
3. V {{ui:Check}} a {{ui:Against}} vyberte dve sady: prvky, ktoré ste vybrali, triedu (naprieč všetkými otvorenými modelmi), uloženú množinu vyhľadávania (pozri [Nájdenie prvkov podľa triedy, názvu alebo vlastnosti](topic:find)) alebo všetko.
4. Nastavte, koľko prekrytia ignorovať, v metroch. 0.01 ignoruje prvky, ktoré sa len práve dotýkajú.
5. Kliknite na {{ui:Run}}. Kontrola beží na pozadí; {{ui:Cancel}} ju zastaví.
6. Kliknutím na výsledok ho zobrazíte: oba prvky sa vyberú a zobrazia, všetko ostatné sa zobrazí priehľadne a pohľad sa k nim priblíži.
7. Kliknite na {{ui:Make an issue of it}} pod výsledkom, aby ste ho zapísali na karte {{ui:Issues}}. Pozri [Problémy a súbory BCF](topic:issues-bcf).

## Čo by ste mali vidieť

- Kolízie vypísané s názvami oboch prvkov (a ich súbormi, keď je otvorených viacero modelov) a s tým, ako hlboko sa prekrývajú, najhlbšie ako prvé.
- Plochy, ktoré sa len dotýkajú, napríklad stena stojaca na strope alebo dvere v otvore, nie sú kolízie.

## Dobré vedieť

- Toto je základná kontrola tvrdých kolízií: prvky, ktorých povrchy sa križujú. Prvok úplne ukrytý vnútri iného (potrubie zabudované v stene) sa zatiaľ nenájde.
- Hĺbka je, ako ďaleko sa hranice oboch prvkov prekrývajú najmenej: ide o orientačnú hodnotu, nie presné meranie.

## Ďalej

- [Meranie vzdialeností, plôch a polôh v 3D](topic:measure)
- [Skrytie, izolácia a priehľadnosť prvkov](topic:hide-and-isolate)
