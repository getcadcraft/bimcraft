---
title: Práce s vrstvami a listy
summary: Zapínejte a vypínejte vrstvy výkresu, přepínejte mezi prostorem modelu a listy a pochopte, jak listy ukazují model přes své výřezy.
keywords: vrstvy, zapnutí vrstvy, vypnutí vrstvy, zamrazit, odmrazit, listy, rozvržení, prostor papíru, záložky, výřezy, správce vrstev, la
from: a9a16b53
---

## Co uděláte

Vyčistěte pohled na rušný výkres vypnutím vrstev a pak si prohlédněte listy výkresu jeden po druhém.

## Postup: vrstvy

1. Otevřete výkres DWG nebo DXF.
2. Najděte seznam {{ui:Vrstvy}} vlevo. Každá vrstva má zaškrtávací políčko, barevný vzorek a svůj název.
3. Odškrtněte vrstvu, aby se skryl všechno, co na ní je.
4. Klikněte na {{ui:Vše vypnout}}, aby se skryly všechny vrstvy.
5. Zaškrtněte jen vrstvy, které chcete vidět.
6. Klikněte na {{ui:Vše zapnout}}, aby se zase ukázalo všechno.

## Co byste měli vidět

Vrstvy zmizí a znovu se objeví najednou, na {{ui:Model}} i na každém listu. Vrstvy, které jsou ve výkresu samotném vypnuté nebo zamrazené, začínají odškrtnuté.

## Postup: listy

1. Podívejte se na řadu záložek nad výkresem: {{ui:Model}}, pak každý list podle názvu.
2. Klikněte na záložku listu.
3. Podívejte se na list: papír leží na tmavším stole a každý výřez ukazuje svou část modelu ve svém měřítku a úhlu.
4. Přiblížte výřez, abyste četli detail. Přibližujete list, ne výřez, takže se celý list hýbe najednou.
5. Klikněte na {{ui:Přizpůsobit}} nebo dvakrát klikněte, abyste znovu viděli celý list.

## Jak tu listy fungují

List (rozvržení, neboli prostor papíru) obsahuje razítko a výřezy, které nahlížejí do prostoru modelu. BimCraft kreslí každý výřez oříznutý na jeho okraj, ve svém měřítku a natočení, a skryje vrstvy zamražené v tomto výřezu. První výřez každého listu je list samotný a nekreslí se dvakrát.

## Časté chyby

- **Očekávání, že se změny vrstev uloží.** Nastavení vrstev ovlivňuje jen pohled, dokud neotevřete jiný soubor.
- **Očekávání ovládání vrstev pro každý výřez.** Seznam {{ui:Vrstvy}} přepne vrstvu všude. Vrstvy zamražené ve výkresu v jednom výřezu v něm zůstanou zamražené.
- **Hledání filtru vrstev nebo uložených stavů vrstev.** Ještě není hotovo. Seznam je v pořadí výkresu.
- **Očekávání, že budete pracovat uvnitř výřezu.** Není co aktivovat: BimCraft jen zobrazuje list. Pro prohlížení prostoru modelu přímo použijte {{ui:Model}}.
