---
title: Řezy, pohledy a listy
summary: Nakreslete čáry řezu na půdorysu, pak otevřete Listy pro sadu připravenou k tisku vytvořenou z modelu: půdorysy každého podlaží, čtyři pohledy, výkresy řezů budovou, rozpisy a zakládání stěn, s razítky a měřítky, jako jedno PDF.
keywords: listy, sada výkresů, realizační dokumentace, tisk, vykreslení, pdf, pohled, pohledy, severní pohled, řez, řez budovou, čára řezu, vyříznutí, skryté čáry, razítko, číslo listu, měřítko, 1/4" = 1'-0", 1:50, 1:100, papír, 11x17, 24x36, A3, A1, sada pro stavební povolení
from: 91ed0cde
---

## Co uděláte

Vytvořte sadu výkresů z modelu: půdorys každého podlaží, pohledy ze severu, východu, jihu a západu, výkres řezu budovou pro každou čáru řezu, rozpisy dveří, oken, místností a řeziva a pohled na každou stěnu s konstrukcí. Sada se z modelu při každém otevření překreslí, takže vždy odpovídá tomu, co jste postavili.

## Nakreslete čáru řezu

1. Na podlaží otevřete {{ui:Sestavení}} a zvolte {{ui:Čára řezu}}.
2. Klikněte, kde čára začíná a kde končí. Krátká čára uprostřed ukazuje stranu, na kterou řez hledí: levou stranu čáry při pohybu od prvního kliknutí k druhému.
3. Čára se zobrazí na půdorysu se svými hroty a svým písmenem (A, pak B, a tak dále).

Vyberte čáru a změňte ji v **Vlastnostech**: její písmeno, **Otočit pohled**, aby se díval opačným směrem, a **Dívat se až na**, aby se pohled zastavil o nastavenou vzdálenost za řezem (0 zobrazí vše za ním). Stiskněte {{key:Delete}}, čímž ji odstraníte.

## Otevřete listy

1. Klikněte na {{ui:Listy}} na liště modelu (vedle {{ui:Tisk}}).
2. Listy jsou vypsány vlevo: **A-101** a další pro půdorysy, **A-201** pro pohledy, **A-301** pro řezy, **A-401** pro rozpisy a **S-101** pro konstrukci stěn. Kliknutím na jeden jej zobrazíte.
3. Zvolte **Papír**: Letter, Tabloid (11 × 17), Arch D (24 × 36), A3 nebo A1. Papír si zachová svůj standardní název a jeho velikost se zapíše v {{ui:Jednotky}}, které jste zvolili, například *Letter · 8.5 × 11 in* nebo *A3 · 297 × 420 mm*.
4. Klikněte na {{ui:Stáhnout sadu jako PDF}}: jedna stránka na list.

## Standardní poznámky z předpisového balíku

V listu lze pomocí {{ui:Standardní poznámky}} umístit poznámky z předpisového balíku (podle profese) do pravého sloupce listu. Každá poznámka si zachová balík a článek, ze kterého pochází, a vytištěný list uvede, kdy je balík neověřený. Poznámky jsou jen výchozí bod: o tom, co říkají, rozhoduje osoba odpovědná za výkres. Vyžadují doplněk Stavební předpisy.

## Co je na listech

- **Půdorysy** ukazují stěny, dveře, okna, místnosti s jejich plochami, kóty a čáry řezu, v největším standardním měřítku, které se vejde: 1/4" = 1'-0" nebo menším (1:50 nebo menším v milimetrech).
- **Pohledy** se kreslí z 3D modelu se odstraněnými skrytými čárami, dva na list, všechny ve stejném měřítku, s čárou terénu pod nimi. Střecha, základy a terén se zobrazují tak, jak jsou modelovány.
- **Řezy** vyplní to, čím řez prochází (stěny, podlahy, střecha), a zakreslí to, co je vidět za ním.
- **Pohledy a řezy nesou své poznámky:** značka pro každé podlaží s jeho názvem a výškou vpravo, výška mezi podlažími vlevo, a u pohledu šířka budovy pod ním a označení (D1, W1) u každých dveří a oken ve stěně, která se na vás dívá. Pro vlastní stěny místnosti viz [Vnitřní pohledy](topic:interior-elevations).
- **Rozpisy** jsou tytéž tabulky jako {{ui:Rozpisy}} na liště modelu.
- **Konstrukce** ukazuje sloupky, pásnice, překlady a parapety každé zakládané stěny z jejího vnějšku, aby podle toho mohla stavební parta rozvrhnout práci. Viz [Zakládání stěn, podlah a střech](topic:framing).

Každý list má razítko s jeho číslem, názvem, názvem souboru a datem.

:::tip
Listy vycházejí z modelu: chcete-li výkres změnit, změňte model a znovu otevřete {{ui:Listy}}.
:::

:::note
Pohledy a řezy zobrazují jen čáry a výplně: kóty, značky podlaží a poznámky na nich ještě nejsou hotové.
:::
