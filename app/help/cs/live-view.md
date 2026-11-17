---
title: Živý pohled
summary: Panel vedle modelu, který ho zobrazuje v reálném vzhledu se sluncem, stíny a odraženým světlem a sleduje každou vaši změnu; procházejte jím a nastavte denní dobu a měsíc.
keywords: živý pohled, reálný čas, realtime, vykreslení v reálném čase, procházka, procházet, pohled z první osoby, prezentace, klient, druhá obrazovka, druhé okno, monitor, denní doba, slunce, roční období, měsíc, stíny, ambientní okluze, odrazy, odražené světlo, globální osvětlení, webgpu, webgl
from: ea5c02bf
---

Živý pohled zobrazuje model v reálném vzhledu: oblohu a slunce podle polohy a data stavby, sluneční stíny, barvy a materiály, které jste prvkům přiřadili, svítidla a světlo odražené od stěn a podlah. Sleduje, co děláte: když otočíte 3D pohled, otočí se i on, a když změníte model, ukáže změnu o chvíli později. Nic se nenahrává.

Kreslí tutéž scénu, barvy, svítidla a slunce jako [Vykreslení obrázku](topic:render); pro hotový obrázek použijte je.

## Otevření

1. Otevřete model a v panelu nástrojů zvolte {{ui:Živý pohled}}. Panel se otevře nad aplikací vpravo dole.
2. Přetáhněte jeho záhlaví, abyste ho přesunuli; potáhněte za roh, abyste ho zvětšili.
3. {{ui:Živý pohled v novém okně}} (tlačítko vedle něj) nebo {{ui:Nové okno}} v panelu ho přesune do vlastního okna, například na druhou obrazovku. Pokud prohlížeč blokuje vyskakovací okna, otevře se jako panel.
4. {{ui:Zavřít}} ho zavře.

## Ovládání

| Ovládání | Co dělá |
|---|---|
| {{ui:Sledovat pohled}} | Zapnuto: živý pohled se dívá tam, kam se dívá 3D pohled. Procházení ho vypne |
| {{ui:Procházet}} | Procházení modelem (níže) |
| {{ui:Gravitace}} | Při procházení: stání na podlahách a výstup po schodech. Vypnuto: létání |
| {{ui:Čas}} | Hodina dne. Slunce se pohybuje, když táhnete |
| {{ui:Měsíc}} | Měsíc, abyste viděli slunce v zimě a v létě |
| {{ui:Kvalita}} | {{ui:Podle tohoto počítače}}, nebo {{ui:Nízká}}, {{ui:Střední}} nebo {{ui:Vysoká}} |

Řádek dole říká, co pohled kreslí (WebGPU nebo WebGL 2), kvalitu a odražené světlo.

## Procházení modelem

1. Otočte 3D pohled tam, kde chcete stát, a zvolte {{ui:Procházet}}. Stojíte na podlaze pod očním bodem pohledu, vysocí 1,6 m.
2. Klikněte do živého pohledu a pak používejte {{key:W}} {{key:A}} {{key:S}} {{key:D}} nebo šipky. Podržením {{key:Shift}} běžíte. Tažením se rozhlížíte.
3. Schůdky do výšky 40 cm se překonají (schody); cokoli výš je zeď. Zdi vás zastaví a po nich klouzáte.
4. Při vypnuté {{ui:Gravitace}} létáte: {{key:E}} nahoru, {{key:Q}} dolů.
5. {{key:Esc}} ukončí procházení.

## Odražené světlo

Světlo odražené od osluněné stěny na podlahu a tmavší vnitřek místnosti se počítá na pozadí na každém jádru procesoru. Během výpočtu dolní řádek říká {{ui:Odražené světlo: 40 %}}; až bude hotovo, pohled ho převezme. Po každé změně výpočet začne znovu.

:::note
Toto je přiblížení pro živý pohled, nikoli vykreslený obrázek: drobné detaily mezi body dostanou odražené světlo bodů v jejich blízkosti.
:::

:::note
Prohlížeče se liší. Tam, kde prohlížeč má WebGPU, živý pohled ho používá; jinde používá WebGL 2 a vypadá stejně. Pokud nemá ani jedno, panel to oznámí.
:::
