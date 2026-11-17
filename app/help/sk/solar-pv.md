---
title: Polia solárnych PV, tieňovanie a výnos
summary: Umiestnite solárne polia na strechy alebo na zem, tieňujte ich podľa modelu, odhadnite ročnú energiu, dimenzujte reťazce a vytvorte dáta jednočiarovej schémy. Všetky vstupy sú zobrazené a štartovací modul a straty sú generické.
keywords: solárne, pv, fotovoltaika, pole, modul, strecha, tieňovanie, výnos, kwh, kwp, dimenzovanie reťazcov, invertor, jednočiarová, jednočiarová schéma, sklon, azimut, rozstup radov
from: adf4aaf3
---

## Čo urobíte

Otvorte panel **Solárne PV**. Vyberte plochu strechy (jej sklon a orientácia sa načítajú z modelu) alebo položte pozemné pole so sklonom a orientáciou; moduly sa vložia dovnútra s odsadeniami a spočítajú sa, čím sa dostane jednosmerný výkon (DC) v kWp. Umiestnenie poľa ho zapíše do modelu ako solárne zariadenia, v jednom kroku späť.

## Tieňovanie, výnos a reťazce

- **Tieňovanie** vysiela lúč z každého modulu k slnku pre typické dni každého mesiaca voči vlastnej geometrii modelu, takže susedné budovy, atiky a rady pred ním sa počítajú. Znižuje sa len priame slnečné žiarenie a čiastočne tienené pole stráca výkon úmerne.
- **Výnos** dáva kWh po mesiacoch a rokoch, kWh na kWp a pomer výkonu. Slnko pochádza z vašich vlastných mesačných súčtov na vodorovnej ploche, ak ich zadáte. Bez nich panel používa hornú hranicu pri bezoblačnom nebi a to uvádza. **Načítať klímu z NASA POWER** tlačidlom na karte Výnos: odošle len zemepisnú šírku a dĺžku miesta, raz, a odpoveď si ponechá na tomto počítači (overené z prehliadača 2026-10-30). PVGIS neumožňuje webovej stránke čítať svoju odpoveď, takže karta ponúka odkaz, ktorý v novej karte otvorí mesačné údaje PVGIS pre miesto; vložte, čo zobrazí, do poľa a dvanásť mesiacov sa vyplní.
- **Reťazce** overia moduly na reťazec voči napäťovému oknu invertora v najchladnejší a najteplejší deň a paralelné reťazce voči jeho prúdu.
- **Jednočiarová** vytvorí dáta schémy (pole, kombinátor, odpojovač, invertor, panel, sieť) s veľkosťami vodičov a poistiek z faktorov, ktoré zadáte. Sú to dáta a SVG; doplnok Electrical v CadCraft ich dokáže umiestniť ako symboly.

Modul, invertor, straty a faktory vodičov, ktoré prichádzajú s BimCraft, sú generické príklady a vo všetkých výsledkoch sú označené. Zadajte údaje výrobcu a hodnoty noriem, podľa ktorých navrhujete, a nechajte návrh preskúmať osobou, ktorá za ňho zodpovedá.
