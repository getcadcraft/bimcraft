---
title: Sūtīt ainu spēļu dzinējam
summary: Studio var ierakstīt ainu Unreal Engine projektā un uzturēt to sinhronā katrā sūtīšanā; jūsu pašu labojumi dzīvo slānī, ko CadCraft nekad neraksta. Spraudnis, kas to atver, vēl nav izlaists.
keywords: unreal, unreal engine, spēļu dzinējs, saite, sūtīt, usd skatuve, projekts, tiešraide, cine kamera, filmu renderēšanas rinda
from: 154d55ef
---

CadCraft Studio dzinēju sarakstā var būt **saite** uz Unreal Engine projektu. Tikai vienā virzienā: no CadCraft uz Unreal.

## Ainas sūtīšana

1. Izvēlieties Unreal ierakstu dzinēju sarakstā. Pirmo reizi Studio lūdz izvēlēties jūsu projekta mapi (to, kurā ir `.uproject` fails); tā to atceras.
2. Noklikšķiniet {{ui:Sūtīt}}. Studio raksta `CadCraft/<faila nosaukums>/` projektā: ainu kā USD failu, iestatījumu failu, gaismas profilus un divus mazus slāņu failus.
3. Mainiet modeli, saglabājiet un sūtiet vēlreiz. Tiek aizstāts tikai aina un iestatījumu fails.

## Jūsu pašu labojumi ir droši

Skatuve, ko Unreal atver, ir neliels saknes slānis, kas reiz izveidots, un zem tā divi slāņi: **jūsu** augšā (`<name>.user.usda`, sākumā tukšs, CadCraft to nekad nepārraksta) un CadCraft ainas zemāk. Labojumi, ko saglabājat savā slānī, paliek, kad aina tiek nosūtīta vēlreiz. Gaismas un citi aktori, ko novietojat Unreal līmenī, ir ārpus skatuves un arī netiek skarti.

## Bez Studio

Pārlūkā vai datorā, kur Studio neatrod Unreal, izvēlieties **Unreal projekta mape (.zip)** dzinēju sarakstā un noklikšķiniet {{ui:Renderēt}}. Tā saglabā to pašu mapi kā zip: izvelciet to projekta mapē `CadCraft`. Pirmajā reizē atstājiet ieslēgtu **Iekļaut skatuves failus**; vēlākām saglabāšanām izslēdziet to, lai zip satur tikai ainu un iestatījumu failu, un jūsu slānis nekad netiek aizstāts.

:::note
Unreal spraudnis, kas atver skatuvi, pielieto sauli, lampas, kameras un ekspozīciju, seko katrai sūtīšanai un renderē kameru, **vēl nav izlaists** un nav palaists Unreal. Līdz tam Sūtīt ievieto failus projektā, un Unreal pašas USD rīki tos var atvērt. Pirmā sistēma ir Windows, macOS seko.
:::
