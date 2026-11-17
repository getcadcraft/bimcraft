---
title: Susedné budovy a parcela z CivilCraft
summary: Vezmite budovy a parcelu, ktoré nástroj CivilCraft Adresa na pozemok našiel okolo adresy, ako návrhy, a pridajte tie, ktoré označíte.
keywords: pozemok, adresa, parcela, susedia, kontext, civilcraft, ccsite, budovy, obrys pozemku, navrhnúť
from: 3be9407b
---

## Čo to robí

V CivilCraft, Povrch › Viac › Adresa na pozemok nájde budovy, parcelu, zónovanie, záplavovú zónu a pôdu okolo adresy z otvorených dát. Jeho tlačidlo "Odoslať do BimCraft ako návrhy" (alebo "Uložiť pozemok ako súbor" a potom otvorte `.ccsite.json` tu) ich prenesie do BimCraft. Nič sa nepridá, kým to nepotvrdíte.

## Ako to použiť

1. Spustite alebo otvorte model. Bod adresy je v počiatku úrovne, na ktorej ste.
2. Okno zobrazí každú susednú budovu a parcelu s začiarkavacím políčkom. Zrušte začiarknutie tých, ktoré nechcete.
3. Budovy, ktorých výšku zdroj neuviedol, používajú výšku zadanú v hornej časti okna. Budova, ktorá uviedla len počet podlaží, sa počíta 3 m na podlažie, a okno to uvádza.
4. Kliknite na "Pridať označené". Budovy sa stanú múrmi okolo ich pôdorysov, s výškou, aká je uvedená, ako jeden krok späť. Parcela sa stane obrysom pozemku ako druhý krok späť.

Zónovanie, záplavová zóna a pôda sú uvedené len pre informáciu; nie sú nakreslené.

## Čo treba vedieť

- Obrysy sú také dobré, ako sú otvorené dáta: OpenStreetMap a katastrálne vrstvy parciel sa z miesta na miesto veľmi líšia. Overte, čo je dôležité, voči geodetickému zameraniu.
- Polohy sú v metroch na východ a na sever od bodu adresy na plochej aproximácii, presné na niekoľko metrov v okruhu niekoľkých kilometrov.
- Údaje nesú licencie svojich zdrojov (OpenStreetMap je ODbL); okno zobrazuje riadok s uvedením zdroja.
