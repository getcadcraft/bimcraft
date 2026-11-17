---
title: Sousední budovy a parcela z CivilCraft
summary: Převezměte budovy a parcelu, které funkce Adresa na pozemek v CivilCraft našla kolem adresy, jako návrhy, a přidejte ty, které zaškrtnete.
keywords: pozemek, adresa, parcela, sousedé, kontext, civilcraft, ccsite, budovy, obrys pozemku, navrhnout
from: 3be9407b
---

## Co dělá

V CivilCraft, Povrch › Více › Adresa na pozemek vyhledá budovy, parcelu, územní plán, záplavovou zónu a půdu kolem adresy z otevřených dat. Jeho tlačítko „Odeslat do BimCraft jako návrhy“ (nebo „Uložit pozemek jako soubor“ a pak otevřete `.ccsite.json` zde) je přinese do BimCraft. Nic se nepřidá, dokud to neschválíte.

## Jak použít

1. Spusťte nebo otevřete model. Bod adresy leží v počátku podlaží, na kterém jste.
2. Okno vypíše každou sousední budovu a parcelu se zaškrtávacím políčkem. Odškrtněte, co nechcete.
3. Budovy, jejichž výšku zdroj neuvedl, použijí výšku zadanou nahoře v okně. Budova, která uvedla jen počet podlaží, se počítá 3 m na podlaží, a okno to říká.
4. Stiskněte „Přidat zaškrtnuté“. Budovy se stanou stěnami kolem svých půdorysů, tak vysokými, jak jsou uvedeny, v jednom kroku zpět. Parcela se stane obrysem pozemku, jako druhý krok zpět.

Územní plán, záplavová zóna a půda jsou uvedeny jen pro informaci; nekreslí se.

## Co je třeba vědět

- Obrysy jsou tak dobré, jak dobrá jsou otevřená data: OpenStreetMap a katastrální vrstvy se místo od místa výrazně liší. Co je důležité, ověřte proti zaměření.
- Pozice jsou metry na východ a na sever od bodu adresy v plošné aproximaci, přesné na několik metrů v okruhu několika kilometrů.
- Data nesou licence svých zdrojů (OpenStreetMap je ODbL); okno zobrazuje řádek s uvedením autora.
