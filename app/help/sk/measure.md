---
title: Merajte vzdialenosti, plochy stien a polohy v 3D
summary: Merajte medzi dvoma bodmi modelu IFC s prichytávaním k rohom a hranám, odčítajte rozdiel pozdĺž X, Y a Z a merajte plochu rovnej plochy.
keywords: meranie, merať, vzdialenosť, dĺžka, kóta, plocha, plocha steny, prichytenie, roh, hrana, páska, pravítko, voľný priestor, poloha, zemepisná šírka, zemepisná dĺžka, súradnice, georeferencia, prevod na mapu, EPSG, zameranie, súradnice X a Y, WGS 84, dátum
from: 5f430bba
---

## Čo urobíte

Skontrolujte voľný priestor, dĺžku steny alebo veľkosť plochy priamo z modelu, bez otvárania autorského programu.

## Kroky

1. Otvorte model IFC.
2. Kliknite na {{ui:Merať}} na paneli nástrojov alebo stlačte {{key:M}}. Lišta sa otvorí pri spodnom okraji pohľadu.
3. **Vzdialenosť:** s vybranou {{ui:Vzdialenosť}} kliknite na prvý bod, potom na druhý. Pri rohu sa ukazovateľ prichytí k nemu, pri hrane na hranu. Malý popisok pri ukazovateľi povie, ktorý z nich. Každá dvojica kliknutí vytvorí jedno meranie.
4. **Plocha steny:** vyberte {{ui:Plocha steny}} a kliknite na plochu. Celá rovná plocha sa rozsvieti a zobrazí sa jej plocha.
5. **Rovné čiary:** podržte {{key:Shift}} pri výbere druhého bodu alebo stlačte {{ui:Rovná}} na lište, aby zostala. Čiara potom beží pozdĺž jednej osi, ku ktorej je ukazovateľ najbližšie (v pôdoryse zhora pozdĺž X alebo Y plánu; v iných pohľadoch pozdĺž X, Y alebo Z), a popisok ukazovateľa hovorí "rovno pozdĺž osi". {{key:M}} stále spúšťa a zastavuje Merať.
6. Kliknite na {{ui:Vymazať}}, aby ste odstránili merania, alebo na {{ui:Hotovo}} (alebo {{key:Esc}}), aby ste prestali merať.

## Čo by ste mali vidieť

- Čiaru medzi dvoma bodmi s jej dĺžkou na nej a na lište dĺžku s tým, ako ďaleko ide pozdĺž X, Y a Z (v osiach modelu, Z smerom nahor), všetko v {{ui:Jednotky}} zvolených na paneli nástrojov.
- Plochu steny v štvorcových metroch, na ploche aj na lište.
- Popisky zostávajú pri svojich meraniach, keď otáčate, posúvate a priblížite.
- Počas merania kliknutia nevyberajú prvky. Rezná rovina alebo rezný box stále reže model a môžete merať to, čo zobrazuje, vrátane rezných plôch.

## Kde je bod na zemi

Kliknite na {{ui:Poloha}} na lište merania, potom kliknite na bod na modeli. Prichytáva sa k rohom a hranám ako pri vzdialenostiach. Lišta zobrazí:

- **zemepisnú šírku a dĺžku** v desatinných stupňoch a v stupňoch, minútach a sekundách, vo WGS 84 na začiatku;
- **mapové súradnice** (súradnice X a Y, zapísané v {{ui:Jednotky}} zvolených na paneli nástrojov) v mapovom systéme modelu, napríklad `EPSG:28356`;
- **výšku** a vertikálny dátum, ktorý uvádza súbor, a **vlastný dátum** súboru (napríklad GDA94).

{{ui:Kopírovať}} skopíruje všetko do schránky na jeden riadok. Systém, v ktorom sú zemepisná šírka a dĺžka, zmeníte v {{ui:Nastavenia}} › BimCraft › {{ui:Poloha}}: WGS 84 (ako GPS a webové mapy), vlastný dátum súboru alebo iný bežný, napríklad ETRS89 alebo NAD83.

Na toto je potrebný georeferencovaný model: taký, ktorý bol exportovaný s mapovými súradnicami (prevod na mapu do projektovaného systému s kódom EPSG). Model, ktorý má len zemepisnú šírku a dĺžku lokality, dostane približnú polohu vypočítanú z bodu lokality a jej pravého severu, a lišta to oznámi. Keď je otvorených viacero modelov, každý bod používa georeferenciu svojho modelu.

:::note
Prechod medzi dátumami (napríklad z GDA94 do WGS 84) sa robí bez mrežových súborov, takže je presný na niekoľko metrov; stavový riadok uvedie, ako presne. Mapové súradnice samotné sú presné.
:::

## Časté chyby

- **"…nemá georeferenciu".** Súbor nemá prevod na mapu ani zemepisnú šírku a dĺžku lokality. Exportujte ho znova s nastaveným súradnicovým systémom (spoločné súradnice alebo bod zamerania v autorskom nástroji).
- **Mapové súradnice, ale bez zemepisnej šírky a dĺžky.** Súbor pomenúva svoj mapový systém bez kódu EPSG alebo s kódom, ktorý nie je v zozname; stavový riadok uvedie, ktorý.
- **Bod pristane na ploche, nie na rohu.** Prichytávanie sa pozerá na prvok pod ukazovateľom. Priblížte sa bližšie k rohu alebo priblížte pohľad.
- **Plocha je menšia, než sa čakalo.** Otvory sa vynechajú a plocha, ktorá sa ohýba, je niekoľko plôch: kliknite na každú.
- **{{key:Esc}} zastavil meranie.** Prvý {{key:Esc}} zruší polovične hotovú vzdialenosť; druhý zastaví.

## Ďalej

- [Rezanie modelu IFC rezovou rovinou](topic:section-plane)
- [Skrytie, izolácia a priehľadnosť prvkov](topic:hide-and-isolate)
