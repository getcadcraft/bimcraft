---
title: Umiestnenie a výmena položky knižnice, ktorá má varianty
summary: Niektoré položky knižnice sa dodávajú vo viacerých veľkostiach alebo možnostiach. Pred umiestnením vyberte variant, zistite, ktorý variant je umiestnená položka, jedným kliknutím ju vymeňte za iný variant a zachovajte ho pri aktualizácii položky.
keywords: variant, varianty, veľkosti, možnosti, konfigurácia, knižnica, librarycraft, umiestniť, vymeniť, konfigurátor, rodina, typ, aktualizácia, porty
from: c05f0af3
---

## Čo urobíte

Umiestnite položku knižnice vo veľkosti alebo možnosti, ktorú potrebujete, a neskôr si to rozmyslite bez nového umiestnenia. Položka s variantmi je jedna položka v knižnici (jeden názov, jedna licencia, jedna verzia) s tabuľkou variantov, v ktorých sa dodáva: napríklad montážna doska vo veľkostiach Malá, Stredná a Veľká, alebo tá istá doska bez otvorov.

## Výber variantu a umiestnenie

1. Otvorte kartu {{ui:Knižnica}} a kliknite na kartu položky.
2. Pod názvom výber {{ui:Variant}} uvádza každý variant s jeho veľkosťou. Predvolený variant položky sa vyberie ako prvý.
3. Vyberte jeden. Pôdorys, veľkosť a riadok 3D telesa sa riadia podľa vášho výberu.
4. Kliknite na {{ui:Umiestniť do pôdorysu}} (alebo {{ui:Umiestniť do modelu}} v 3D pohľade) a umiestnite ju ako každú položku: pozri [Umiestnenie zariadení a nábytku z knižnice](topic:place-from-library).

Umiestnený prvok sa pomenuje podľa položky a variantu, napríklad *Montážna doska — Veľká*, aby sa tabuľka {{ui:Vybavenie}} a strom od seba odlíšili. Každý variant je vlastný typ IFC: umiestnenie rovnakého variantu dvakrát zdieľa jeden typ, iný variant dostane vlastný.

## Zistenie, ktorý variant je umiestnená položka

Vyberte prvok. Vo {{ui:Vlastnostiach}} má políčko **Položka knižnice** riadok **Variant**. IFC ho uchováva v `CadCraft_LibraryItem`: `Variant` (id variantu), `VariantName` a `VariantValues` (hodnoty možností ako text), aby ho mohli čítať iné programy.

## Výmena za iný variant

1. Vyberte umiestnenú položku a kliknite na {{ui:Vymeniť položku…}} v políčku **Položka knižnice**. Otvorí sa karta {{ui:Knižnica}}.
2. Navrchu **Iné varianty položky** *názov položky* uvádza každý variant s jeho veľkosťou. Ten, ktorý je umiestnený, je označený a nedá sa vybrať.
3. Kliknite na {{ui:Vymeniť na …}} pri variante, ktorý chcete.

Prvok si zachová svoje miesto, otočenie, úroveň, číslo položky, množstvo a poznámky; jeho typ, tvar a údaje sa zmenia na druhý variant. {{key:Mod+Z}} vráti prvý späť. Namiesto toho môžete vybrať ľubovoľnú inú položku zo zoznamu nižšie, ako doteraz: pozri [Výmena umiestnenej položky a aktualizácia položiek z knižnice](topic:swap-and-update-library-items).

## Kopírovanie, prilepenie a aktualizácie

- Kópia umiestneného variantu je ten istý variant: v tomto modeli a v inom modeli otvorenom na tej istej karte prehliadača, cez {{ui:Kopírovať}} a {{ui:Prilepiť}}.
- **Aktualizácie** zachovajú variant: ak novšia verzia položky ho stále má, umiestnenie sa stane týmto variantom novej verzie. Ak ho nová verzia už nemá, umiestnenie dostane predvolený variant položky.

## Dobré vedieť

- Iba niektoré položky knižnice majú varianty. Karty to nehovoria; výber {{ui:Variant}} uvidíte, keď jednu otvoríte.
- Položka môže pre každý variant uviesť **porty** (body pripojenia pre potrubia a vzduchotechnické potrubia). Karta Knižnica zobrazuje, koľko ich variant má. Zatiaľ sa **nezapisujú** do IFC, keď položku umiestnite z karty Knižnica.
- Variant bez 3D telesa sa umiestni s náhradnou škatuľou, ako každý 2D symbol.
- Veľkosti vo výbere sú v milimetroch, ako ich zapisuje knižnica.
