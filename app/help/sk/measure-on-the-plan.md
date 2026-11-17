---
title: Meranie na pôdoryse
summary: Kliknutím na dva body na pôdoryse podlažia odčítate vzdialenosť a rozdiely X a Y, ďalšie kliknutia reťazte pre priebežný súčet a nič neuchovávajte v modeli.
keywords: meranie, pôdorys, vzdialenosť, kóta, páska, priebežný súčet, reťaz, dx, dy, rovno, prichytávanie, konce stien, osi mriežky, stĺpy, kontrola dĺžky
from: 7235633f
---

## Čo urobíte

Skontrolujte dĺžku na pôdoryse podlažia, napríklad šírku miestnosti alebo vzdialenosť medzi dvoma osami mriežky, bez pridávania čohokoľvek do modelu. Ak chcete merať v 3D pohľade, pozrite [Merajte vzdialenosti, plochy stien a polohy v 3D](topic:measure).

## Kroky

1. Zobrazte pôdorys podlažia, ktoré chcete: {{ui:Pôdorys}} pre samotný pôdorys, alebo {{ui:Rozdeliť}}.
2. V skupine {{ui:Kresliť}} kliknite na {{ui:Merať}}. Keď je zobrazený len pôdorys, môžete stlačiť {{key:M}}.
3. Kliknite na prvý bod. Body sa prichytávajú k stenám, osiam mriežky a stĺpom.
4. Kliknite na druhý bod. Kótovacia čiara ukáže vzdialenosť a stavový riadok uvedie vzdialenosť s rozdielmi X a Y.
5. Ak chcete pokračovať, kliknite na tretí bod. Každý úsek sa zmeria a celkový súčet sa pripočíta.
6. Podržte {{key:Shift}} pri klikaní, aby úsek zostal rovný od predchádzajúceho.
7. Stlačte {{key:Esc}}, aby ste meranie vymazali, alebo vyberte iný nástroj.

## Poznámky

- Do modelu sa nič nezapisuje a kóta zmizne, keď ju vymažete. Pre trvalé kóty pozri [Konštrukcie stien a referenčné kóty](topic:wall-assemblies).
- Keď je 3D pohľad na obrazovke, {{key:M}} zostáva 3D meraním. {{key:Shift+M}} je Presunúť.
- Vzdialenosť používa zobrazovanú jednotku, ktorú ste zvolili v {{ui:Nastavenia}}.
