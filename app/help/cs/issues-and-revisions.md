---
title: Vydání, revize a přehled změn výkresů
summary: Zaznamenejte každou sadu listů, kterou předáte, zjistěte, co se od té doby změnilo na každém listu a prvku, a držte pokyny na stavbu, dílenské výkresy a propojené modely u vydání, ke kterému patří.
keywords: vydání, vydaná sada, předložená sada, předložení, revize, revize, co se změnilo, od vydání, přehled změn, přehled změn výkresů, rejstřík výkresů, průvodní list, pokyn na stavbu, dílenský výkres, propojený model, výběrové řízení, stavba, snímek, porovnat
from: 4c732832
---

## Co budete dělat

Zaznamenejte vydání: které listy odešly, kdy, s jakým účelem, každý ve své revizi. Později se zeptejte, co se změnilo od tohoto vydání. Pokyny na stavbu a vrácené dílenské výkresy si držte u vydání.

## Postup

1. V levém panelu otevřete **Vydání a revize**.
2. Zvolte **Zaznamenat vydání**. Revize se navrhne (A, pak B; číslovaná, například P1, se počítá nahoru). Vyberte, k čemu se vydává, komu, datum a listy. Je-li nastavena fáze projektu, účel se podle ní řídí. Má-li balíček povolení seznam podpůrných dokumentů, listy na něj navázané se zaškrtnou automaticky.
3. Nechte zaškrtnuté **Také uložit kopii modelu jako vydaného**, aby model zůstal přesně takový, jaký odešel. Kopie se stáhne; její název, velikost a SHA-256 se uchovají u vydání.
4. Zvolte **Zaznamenat toto vydání**. List, který se od posledního vydání změnil, dostane novou revizi. List, který se nezměnil, si ponechá svou revizi. Razítko každého listu ukazuje jeho revizi.
5. Chcete-li vidět, co se změnilo, zvolte **Změny od** vedle vydání. Každý list ukazuje Beze změny nebo Změněno, s prvky přidanými, změněnými a odstraněnými na něm. Kliknutím na počet vyberete tyto prvky.
6. Zvolte **Přidat záznam** pro pokyn na stavbu, dílenský výkres, sadu poznámek, propojený model nebo poznámku. Vyberte vydání, ke kterému patří. Soubor, který zvolíte, se zaznamená podle názvu, velikosti a SHA-256; soubor zůstane tam, kde je.
7. **Přehled změn výkresů** ukazuje jeden řádek pro každý list a jeden sloupec pro každé vydání. **Stáhnout přehled změn (CSV)** jej uloží i s vydáními a záznamy.
8. **Uložit historii vydání** zapíše soubor `.issues.json`. MarkupCraft, TakeoffCraft a DetailCraft jej čtou pomocí **Načíst historii vydání**.

## Dobré vědět

- Historie se uchovává uvnitř souboru IFC (sada vlastností `CadCraft_Issues` na projektu). Ostatní programy ji ignorují.
- List se počítá jako změněný, když se změnilo jeho vlastní nastavení, nebo když se změnil prvek, který zobrazuje: půdorys ukazuje své podlaží, pohled nebo řez celý model, rozpis dveří nebo oken své dveře nebo okna.
- Prvek se počítá jako změněný, když se změnila vlastnost, jeho poloha, velikost nebo tvar.
- Chcete-li vidět přesně, která vlastnost se změnila, otevřete uloženou kopii vydaného modelu pomocí **Porovnat verze**.
- Odebráním vydání se jeho záznamy zachovají, ale bez vydání. Každý krok lze vrátit jedním krokem zpět.
- Model s více než 60 000 prvky neuchovává záznam každého prvku u vydání. Listy se přesto porovnávají.

## Co ještě není hotovo

- Listy se u vydání neukládají jako PDF.
- Revizní oblak se nekreslí na vlastních listech BimCraftu. Oblaky zaznamenejte v MarkupCraftu u vydání.
