---
title: Body pro vytyčení a kontrola skutečného provedení
summary: Očíslujte místa, podle nichž partie vytyčují z modelu – středy sloupů, konce stěn, kotevní šrouby, prostupy, libovolný vybraný prvek –, zapište je pro totální stanici, pak načtěte změřené body partie zpět a zjistěte, co je mimo toleranci.
keywords: body pro vytyčení, vytyčení, vytyčit, totální stanice, zaměření, bodový soubor, csv, txt, pnezd, penzd, xyz, Y, X, výška, skutečné provedení, kontrola, tolerance, odchylka, kotevní šrouby, středy sloupů, konce stěn, prostupy, souřadnice zaměření, převod mapy
from: acea9606
---

Záložka {{ui:Points}} vpravo vytváří body, podle nichž partie na stavbě vytyčují z otevřeného modelu, a kontroluje body, které pak změří.

## Vytvoření bodů

1. Otevřete model IFC a záložku {{ui:Points}}.
2. Zaškrtněte, co vytyčit: **středy sloupů** (pata osy každého sloupu), **konce stěn** (oba konce osy každé stěny u její základny), **kotevní šrouby**, **prostupy** (prvky, jejichž název nebo typ obsahuje slovo „sleeve“) a **vybrané prvky** (každý v bodě svého umístění – nejprve je vyberte v pohledu).
3. Zvolte první číslo a předponu, souřadnice, jednotky, sloupce a soubor:
   - **Model**: vlastní souřadnice souboru. **Zaměřovací síť**: mapová síť georeference modelu (zobrazí se jen tehdy, když IFC obsahuje převod na mapu), v metrech nebo v jednotce, kterou zvolíte.
   - Sloupce **PNEZD** (bod, Y, X, výška, popis), **PENZD** nebo **XYZ**; **CSV** (čárky), nebo **TXT** (tabulátory).
4. Stiskněte {{ui:Make points}}: seznam je ukáže a pohled je označí modře. {{ui:Download the points}} zapíše soubor.

Body se řadí pevně – podle druhu, pak v řádcích přes půdorys – takže vytvoření znovu ze stejného modelu dá stejná čísla. Soubor je ten, který otevírá CivilCraft a který zapisuje CadCraft příkazem EXPORTPOINTS: jeden bod na řádek, tři desetinná místa, popis v uvozovkách, když obsahuje čárku.

## Kontrola skutečných bodů

Když partie pošle zpět, co změřila, zvolte **toleranci** v milimetrech a způsob párování bodů – podle **čísla bodu** (zachovali vaše čísla), nebo podle **nejbližšího měření** – a stiskněte {{ui:Read as-built points…}}. Soubor čtěte ve stejných jednotkách a souřadnicích, v jakých jste ho zapsali.

Každý projektový bod je pak **v toleranci**, **mimo toleranci** nebo **neměřen**, a každé měření, které nikdo nevyžadoval, je **navíc**. Tabulka uvádí rozdíly v jednotce, kterou zvolíte v panelu nástrojů; stopy (ft) se zobrazují jako desetinné palce (in). Rozdíly jsou skutečné minus projektové: východ, sever, výška a vzdálenost v půdorysu. Pohled označí každý bod zeleně nebo červeně s čárou k měření a šedě, pokud nebyl změřen. {{ui:Report (CSV)}} zapíše celé porovnání.

Nic zde nemění model. Zatím není hotovo: vytyčování od hran desek, průsečíků os nebo otvorů vytvořených za vás a odesílání bodů přímo na přístroj – použijte soubor.
