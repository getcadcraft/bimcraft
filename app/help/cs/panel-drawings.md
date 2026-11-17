---
title: Výkresy panelů ze dřeva nebo lehké ocelové konstrukce
summary: Vytvořte z stěn, podlah a střech modelu panely ze dřeva nebo lehké ocelové konstrukce, zobrazte každý sloupek, vodorovnou lištu, překlad, trám a krokev v měřítku a uložte seznam řezů jako CSV a výrobní výkresy jako PDF.
keywords: panel, konstrukce, výrobní výkres, seznam řezů, lehká ocel, ocelový sloupek, LGS, dřevo, trám, krokev, překlad, zásoba, PDF
from: c09f916e
---

## Otevření panelů

Zvolte {{ui:Výkresy panelů}} v nabídce {{ui:Sestavení}} (nebo napište {{cmd:PANELS}}). Seznam obsahuje každou nakreslenou stěnu, každou podlahu a každou střechu modelu, každou se zaškrtávacím políčkem. Stěny přicházejí i se svými dveřmi a okny jako otvory. Podlaha je sestavena jako obdélník kolem svého obrysu, s trámy vedenými kratší stranou. Střecha je sestavena jako štít nad obrysem jejích stěn se sklonem střechy; seznam to říká, protože valbová nebo složitá střecha není štít.

## Materiál, velikost a rozteč

Zvolte {{ui:Material}}: **Dřevo** nebo **Lehká ocelová konstrukce**. Ocelové kusy jsou C-profily pojmenované podle hloubky a tloušťky (například C92-1.2), s vodicím profilem pro vodorovné lišty. {{ui:Rozměr prvku}} zvolí jednu velikost pro každý zaškrtnutý panel, nebo ponechte Výchozí, aby se použily výchozí hodnoty pro každý druh panelu. {{ui:Rozteč}} je vzdálenost mezi sloupky, trámy nebo krokvemi. Jsou to výchozí hodnoty, které nastavíte vy. Nejde o kontrolu podle předpisů: zda sloupek v dané rozteči unese danou stěnu a překlad daného rozpětí, posuzují tabulky předpisů (doplněk Stavební předpisy obsahuje tabulky IRC) a váš statik.

## Co dostanete

První zaškrtnutý panel se nakreslí v dialogu v měřítku s kótami. {{ui:Seznam řezů (CSV)}} uloží všechny kusy každého panelu podle značky, velikosti a délky a také délky materiálu, které pro ně koupit. {{ui:Výrobní výkresy (PDF)}} uloží jednu stranu A3 pro každý panel, se všemi kusy označenými a jejich seznamem řezů. {{ui:Výkres (SVG)}} uloží první panel jako výkres. Cokoli, co konstrukční kód nedokáže sestavit (otvor příliš blízko konce stěny, překlad, který se nevejde pod vodorovné lišty, kus delší než nejdelší materiál), je uvedeno v **Problémy** i v dialogu.

## Co to nedělá

Panely jsou výkresy vytvořené z modelu, kdykoli si je vyžádáte: do modelu se nic nezapisuje, takže vždy odpovídají modelu. Chcete-li konstrukci vložit do modelu jako prvky, použijte u dřevěných stěn, podlah a střech {{ui:Konstrukce}}.
