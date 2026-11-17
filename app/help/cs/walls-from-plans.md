---
title: Stěny z sady výkresů (PDF nebo sken)
summary: Převeďte stránky PDF nebo naskenovaného výkresu na stěny, dveře a okna, jedno podlaží pro každou stránku, s ponechanou stránkou pod každým půdorysem.
keywords: pdf, výkresy, sada výkresů, sken, naskenovaný výkres, tiff, obkreslení, stěny z pdf, stěny ze skenu, podlaží, stránky, měřítko, dveře, okna, otvírání, parapet, podklad
from: b70d9db7
---

## Co uděláte

Založte model z výkresů, které máte na papíře: PDF (nakreslené jako čáry, nebo sken uvnitř PDF), nebo sken (PNG, JPEG, TIFF s jednou nebo více stranami). Každá stránka se stane stěnami, dveřmi a okny jednoho podlaží.

## Postup

1. Zapněte {{ui:Kreslení}}. Zvolte {{ui:Sestavení}} › {{ui:Z výkresu…}}, pak {{ui:Vyberte výkres…}} a vyberte PDF, nebo sken.
2. **Stránky a podlaží.** Každá stránka je v seznamu s tím, čím je (**čárová kresba**, nebo **obrázek (obkreslený)**), a s podlažím, kam půjde: jedno z vašich podlaží, **nové podlaží nad ostatními**, nebo **tuto stránku vynechat**. Stránky se přiřazují vašim podlažím popořadě; kteroukoli změňte.
3. **Měřítko.** U PDF řekněte, jak bylo nakresleno (**1 : 100**, **1 : 50**…). U všeho ostatního, nebo když to nevíte, zvolte **ze známé vzdálenosti**: klikněte na oba konce kóty nebo měřítka na náhledu a pak zadejte skutečnou vzdálenost. Všechny stránky používají jedno měřítko.
4. Zvolte **typ stěny** a **výšku nového podlaží**. Nechte zaškrtnuté **Ponechat každou stránku pod půdorysem jejího podlaží**, chcete-li vidět každou stránku jako tenké čáry pod jejím půdorysem.
5. Řádek pod volbami říká, kolik stěn, dveří a oken vznikne a na kolika podlažích. Klikněte na {{ui:Vytvořit je}}.

## Jak se čte stránka

- **Stěny** vznikají z dvojic rovnoběžných čar do 600 mm od sebe (oba líce stěny). Stěna je tak tlustá, jak je mezera. Šrafování a písmo se vynechávají.
- **Dveře a okna.** Mezera ve stěně (500 až 2600 mm) s nakresleným otvíracím obloukem vedle ní je dveře, zavěšené na jednom konci mezery a otevírající se na stranu oblouku. Mezera nebo stěna s parapetními čarami v ní je okno. Mezera bez obojího je dveře do 1300 mm a okno nad touto hodnotou.
- **Sken** se nejprve narovná, pokud byl naskenován nakřivo (dialog to říká), převede se na černobílý, zbaví se skvrn a obkreslí se. Obkreslení najde střed každého tahu, proloží jej přímkami a oblouky a nepoužívá síť ani natrénovaný model. **Stránka PDF, která je obrázkem**, se nejprve překreslí a pak se zpracuje stejně.
- **Místnosti** vzniknou samy z uzavřených smyček, které stěny tvoří. Má-li PDF text, místnost dostane název z písma uvnitř ní (největší; kóta, měřítko nebo číslo listu není název). Sken nemá text, takže jeho místnosti si ponechají názvy, které jim program dá.
- **Vše načtené ze stránky je označeno jako neověřené**: každá stěna, dveře, okno a místnost má v půdorysu čárkovaný rámeček a „?“, dokud je nezkontrolujete. Vyberte, co jste zkontrolovali, a použijte {{ui:Nástroje}} › {{ui:Označit jako zkontrolované}}. Viz [Označování prvků jako zkontrolovaných nebo ověřených na místě](topic:verification).

## Co uvidíte

- Stěny, dveře, okna a místnosti na každém podlaží a všechna nová podlaží, vše jako jeden krok: {{key:Mod+Z}} vrátí vše zpět.
- Každou stránku jako tenké čáry pod půdorysem jejího podlaží, vypsanou v {{ui:Sestavení}} › {{ui:Z výkresu…}} s {{ui:Odebrat}}.

:::note
Toto je to, co čáry daly, s přesností stránky. Sken může ztratit slabou stěnu, spojit dvě stěny, které leží velmi blízko u sebe, nebo najít stěnu ve skvrně. Otvírací oblouk, který výkres neukazuje, udělá z mezery prosté dveře. Než se na podlaží spolehnete, zkontrolujte je podle stránky a opravte chyby nástroji {{ui:Stěna}}, {{ui:Dveře}} a {{ui:Okno}}.
:::
