---
title: Odhad tepelných strát a chladiacich záťaží
summary: Tepelná strata každej miestnosti, jej vykurovanie za rok podľa denostupňov a jej špičková chladiaca záťaž, z toho, čo miestnosť ohraničuje v modeli, a z hodnoty U každého prvku, pričom každý vstup je zobrazený. Pomôcka pri návrhu, nie výpočet dodržania predpisov.
keywords: energia, vykurovanie, chladenie, tepelná strata, tepelná záťaž, chladiaca záťaž, hodnota U, súčiniteľ prechodu tepla, denostupne, hdd, vetranie, výmeny vzduchu, vnútorné zisky, solárny zisk, lambda, vodivosť, izolácia, včasný návrh, analýza, miestnosti, priestory
from: ec312d20
---

Na karte {{ui:Denné svetlo}} otvorte po {{ui:Vypočítať}} sekciu {{ui:Tepelné straty a chladiace záťaže}} a kliknite na {{ui:Vypočítať záťaže}}. Každá miestnosť dostane svoju **tepelnú stratu** pri navrhovanom chladnom dni, svoje **vykurovanie za rok** a svoju **špičku chladenia** pri horúcom dni. Nič sa nenahráva; v modeli sa nič nemení, pokiaľ nezadáte hodnotu U.

:::warning
Ide o **pomôcku pri návrhu, nie o výpočet dodržania predpisov**: ustálený odhad so všetkými vstupmi na obrazovke. **Nie je** metódou ISO 52016-1, nie je simuláciou ani energetickým certifikátom; neurčuje veľkosť kotlov, tepelných čerpadiel ani chladičov. Výsledky overte a veľkosť zariadení určte s inžinierom.
:::

## Čo ohraničuje každú miestnosť

BimCraft to zistí priamo v modeli, takže funguje IFC akéhokoľvek programu (nepotrebuje priestorové hranice, ktoré niektoré programy exportujú). Z každej časti vlastného povrchu každej miestnosti sa pozrie priamo von:

- prvý múr, okno, dvere, podlaha, strecha, obklad, transparentná fasáda alebo nosník, na ktorý narazí, **ohraničuje** túto časť;
- tesne za týmto prvkom je buď **iná miestnosť** (počíta sa ako susedná, s rovnakou teplotou: žiadna strata), **nič** (vonku), alebo pod podlahou na najnižšom podlaží **zem**;
- otvorený prechod do inej miestnosti sa počíta ako susedný; časť, ktorá nenarazí na nič (do 1.5 m do strany alebo dole, 8 m hore), sa uvedie pod miestnosťou a vynechá sa.

Okná a dvere preberajú svoju veľkosť z IFC (celková šírka × výška) z múru, v ktorom sú. Kliknutím na miestnosť v tabuľke zobrazíte každý prvok, ktorý ju ohraničuje, s jeho plochou, hodnotou U a odkiaľ hodnota U pochádza.

## Hodnoty U

Pre každý prvok BimCraft použije v tomto poradí:

1. **Vlastná hodnota U z IFC** — `ThermalTransmittance` v spoločnej sade vlastností prvku (napríklad `Pset_WallCommon`) alebo v jeho type. Väčšina projekčných programov ju dokáže zapísať.
2. **Jeho vrstvy materiálu** — 1 ÷ (vnútorný povrchový odpor + hrúbka každej vrstvy ÷ jej vodivosť λ + vonkajší povrchový odpor), s obvyklými povrchovými odpormi (0.13 a 0.04 m²K/W pre steny; vnútri 0.10 smerom nahor, 0.17 smerom nadol). Typické vodivosti na začiatok (minerálna vlna 0.035, tehla 0.77, betón 1.4…); v {{ui:Tepelná vodivosť materiálov}} zadajte hodnotu výrobcu a každá hodnota U z týchto vrstiev sa podľa toho prispôsobí.
3. **Typická hodnota** (steny 0.3, strechy 0.2, podlahy 0.25, okná 1.4, dvere 1.6 W/m²K), označená ako taká — zadajte vlastnú.

Hodnota U zadaná v detaile miestnosti sa zapíše do spoločnej sady vlastností prvku ako `ThermalTransmittance` (jeden krok; {{key:Mod+Z}} ju vráti späť). Ak sadu zdieľa viac prvkov (napríklad jeden typ múru), všetky sa zmenia spoločne a stavový riadok uvedie, koľko ich bolo.

## Vykurovanie

- **Tepelná strata** = Σ U × A × (vnútorná − vonkajšia teplota) pre všetko smerom von + Σ U × A × (vnútorná − teplota zeme) pre podlahy na zemi + 0.335 × výmeny vzduchu za hodinu × objem miestnosti × (vnútorná − vonkajšia teplota). 0.335 Wh na m³ a kelvin je hustota vzduchu (1.2 kg/m³) násobená jeho tepelnou kapacitou (1005 J/kgK).
- **Vykurovanie za rok** = (strata miestnosti na stupeň smerom von, cez konštrukciu a vzduch, plus jej strata do zeme prepočítaná na ten istý rozdiel) × **denostupne** × 24 ÷ 1000, v kWh. Zadajte denostupne pre dané miesto, alebo {{ui:Načítať denostupne z CSV…}} (jeden riadok na deň alebo mesiac; posledné číslo v každom riadku sa sčíta). Používajte denostupne k základnej teplote vášho zdroja: tá už zohľadňuje voľné teplo ľudí, svetiel a slnka.

## Chladenie

**Špička chladenia** = teplo cez konštrukciu a vzduch pri letnej navrhovanej teplote + ľudia (podlaha na osobu × teplo na osobu) + osvetlenie a zariadenia na m² podlahy + **slnko**: špička {{ui:Slnko cez okná v určitý dátum}} pre túto miestnosť. Najprv vypočítajte slnko, napríklad pri horúcom dni; dovtedy sa slnko počíta ako 0 a sekcia to uvádza. Špičky každej časti sa sčítajú, aj keď nastanú v rôznych hodinách, čo mierne nadhodnocuje výsledok.

## Čo sa vynecháva

- Mesačné a hodinové metódy ISO 52016-1 (platená norma), teplo uložené v hmote budovy, tepelné mosty, výkon vykurovacích a chladiacich systémov a klimatické súbory.
- Miestnosti vedľa seba sa berú na rovnakej teplote; nevykurované priestory sa nemodelujú.

Pozri aj [Odhad denného svetla v každej miestnosti](topic:daylight-factor).
