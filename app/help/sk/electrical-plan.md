---
title: Elektrický plán
summary: Umiestnite na pôdorys zásuvky, vypínače, svetlá, senzory, rozvodné krabice a rozvádzače so symbolmi rovnakými ako v doplnku CadCraft Elektro, prepojte vypínače so svetlami, ktoré zapínajú, a vypíšte zariadenia a okruhy do tabuliek.
keywords: elektrika, elektrický plán, zásuvka, zásuvka receptacle, duplex, vypínač, trojcestný vypínač, stmievač, svetlo, stropné svetlo, zapustené svetlo, podhľadové svetlo, pohybový senzor, rozvodná krabica, rozvádzač, rozvodnica, okruh, záťaž, watts, amps, vedenie vypínača, tabuľka zariadení, tabuľka rozvádzača
from: f7de1947
---

## Čo urobíte

Nakreslite elektrický plán domu v modeli: zásuvky, vypínače a rozvádzače na stenách, svetlá a senzory na strope. Každé zariadenie je skutočný elektrický prvok v súbore IFC s označením, okruhom a záťažou a vypínače si pamätajú svetlá, ktoré zapínajú.

## Umiestnenie zariadení

1. Na úrovni otvorte {{ui:Build}} a vyberte {{ui:Electrical}}.
2. Vyberte zariadenie: zásuvky (silové, dátové, telefónne, audio-video), vypínače a senzory (aj termostat a časovač), svetlá, detektory a alarmy, rozvodnú krabicu, rozvádzač alebo podrozvádzač.
3. Ak okruh poznáte, zadajte **Okruh** (ľubovoľný názov: 1, 2, A-3). Pole **Výška montáže** nechajte prázdne, ak chcete obvyklú výšku tohto zariadenia.
4. Kliknite na pôdorys. Zásuvky, vypínače a rozvádzače sa umiestnia na líc najbližšej steny, otočené do miestnosti; svetlá, senzory a rozvodné krabice sa umiestnia na strop na mieste kliknutia.

Zariadenia sa označujú už pri umiestnení: **R** pre zásuvky, **S** pre vypínače, **L** pre svetlá, **M** pre pohybové senzory, **J** pre rozvodné krabice, **P** pre rozvádzače. Zariadenia na stene sa pri presune steny pohnú spolu s ňou.

Radšej vyhľadávate podľa obrázka? Otvorte **Paleta symbolov** z {{ui:Build}}, nájdite zariadenie podľa názvu, označte hviezdičkou tie, ktoré používate, a umiestnite ho jedným kliknutím: pozri [Paleta symbolov](topic:symbol-palette).

## Prepojenie vypínačov so svetlami

1. Vyberte vypínač (alebo pohybový senzor) a kliknite na **Prepojiť svetlá** v **Vlastnostiach**.
2. Kliknite na každé svetlo, ktoré zapína. Opätovným kliknutím na prepojené svetlo ho odpojíte.
3. Stlačte {{key:Enter}} alebo kliknite na **Hotovo**.

Pôdorys nakreslí prerušovanú krivku od vypínača ku každému jeho svetlu. V **Vlastnostiach** svetla je vidno, ktoré vypínače ho zapínajú.

## Miestnosť, v ktorej zariadenie je

Každé zariadenie pozná miestnosť, v ktorej sa nachádza. Zariadenie na stene patrí do miestnosti, ku ktorej je otočené; zariadenie na strope do miestnosti, nad ktorou je. Vlastnosti zobrazujú **Miestnosť** a tabuľka **Elektrické zariadenia** má stĺpec **Miestnosť** (číslo a názov, napríklad 101 Kuchyňa).

Údaje sa udržiavajú aktuálne: ak premenujete alebo prečíslujete miestnosť, presuniete zariadenie alebo posuniete stenu, miestnosť sa zmení v tom istom kroku. Zariadenie na vonkajšej strane budovy alebo v priestore, ktorý nie je miestnosťou, hlási, že nie je v miestnosti.

Miestnosť sa zapisuje aj do súboru, do sady vlastností zariadenia `CadCraft_Location` (Room, RoomNumber, RoomName), aby ju mohli použiť Hľadať, Farba podľa vlastnosti a tabuľka značiek, a aj iný program. Symboly v pôdoryse a prvky prepojené so symbolom dostanú rovnakú sadu; pozri [Paleta symbolov](topic:symbol-palette).

## Nechajte umiestniť zariadenia asistentom

Ak je pripojený asistent (Nastavenia › Asistenti, s povolenými úpravami), môžete zariadenia žiadať slovami: "umiestni dvojitú zásuvku každé 2 m pozdĺž stien obývačky, 300 mm nad podlahou, na okruhu 3" alebo "pridaj stropné svetlo s jeho vypínačom pri dverách".

Asistent používa päť nástrojov: `devices_add`, `device_change`, `lights_set`, `devices_delete` a `devices_list`. Vytvárajú tie isté zariadenia, aké vytvára nástroj Elektro, na tých istých stenách a s rovnakými označeniami, okruhmi, záťažami a výškami; každé volanie je jeden krok späť.

Zariadenie nikdy nedostane druh, ktorý nástroj Elektro nemá: neznámy druh sa odmietne a asistent dostane zoznam. Zásuvka alebo vypínač musí byť do 600 mm od líca steny, ako pri kliknutí, inak sa volanie odmietne a nič sa neumiestni. Predvolené výšky sú v milimetroch: 300 pre zásuvky, 1100 pre vypínače; zariadenie na strope visí zo stropu.

## Úprava a výpis

Vyberte zariadenie a zmeňte jeho označenie, okruh, záťaž (watty) a výšku montáže. Vyberte viacero, aby ste ich všetky naraz dali na jeden okruh. Stlačením {{key:Delete}} odstránite jedno; zmazané svetlo sa odpojí od svojich vypínačov.

V {{ui:Schedules}} vyberte **Elektrické zariadenia** pre každé zariadenie s jeho podlažím, okruhom, záťažou, výškou a svetlami, ktoré každý vypínač zapína, alebo **Okruhy** pre zariadenia každého okruhu, celkovú záťaž a prúd. Obe sú aj na liste tabuliek sady výkresov: pozri [Pohľady, rezy a listy](topic:sheets).

:::note
Výšky montáže a záťaže sú plánovacie predvolené hodnoty (zásuvka 16" nad podlahou a 200 W, vypínač vo výške 48", stropné svetlo 60 W), nie projekt: elektrikár alebo inžinier navrhne okruhy a skontroluje predpisy.
:::

:::tip
Symboly sú rovnaké, aké kreslí doplnok CadCraft Elektro na inštalačných plánoch, takže plán z ktorejkoľvek aplikácie sa číta rovnako.
:::
