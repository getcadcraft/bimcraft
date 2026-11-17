---
title: Siųsti sceną žaidimų varikliui
summary: Studio gali įrašyti sceną į Unreal Engine projektą ir kiekvieno siuntimo metu palaikyti ją suderintą; jūsų pačių pakeitimai gyvena sluoksnyje, kurio CadCraft niekada nerašo. Papildinys, kuris ją atidaro, dar neišleistas.
keywords: unreal, unreal engine, žaidimų variklis, ryšys, siųsti, usd stage, projektas, gyvai, cine kamera, filmo atvaizdavimo eilė
from: 154d55ef
---

CadCraft Studio variklių sąraše gali būti **ryšys** su Unreal Engine projektu. Tik viena kryptis: iš CadCraft į Unreal.

## Siųsti sceną

1. Pasirinkite Unreal įrašą variklių sąraše. Pirmą kartą Studio paprašo nurodyti jūsų projekto aplanką (tą, kuriame yra `.uproject` failas); jis jį prisimena.
2. Spustelėkite {{ui:Siųsti}}. Studio įrašo `CadCraft/<failo pavadinimas>/` projekto viduje: sceną kaip USD failą, parametrų failą, šviesos profilius ir du mažus sluoksnių failus.
3. Pakeiskite modelį, įrašykite ir siųskite dar kartą. Pakeičiami tik scena ir parametrų failas.

## Jūsų pakeitimai saugūs

Stage, kurį atidaro Unreal, yra mažas šakninis sluoksnis, sukurtas vieną kartą, su dviem sluoksniais po juo: **jūsų** viršuje (`<name>.user.usda`, iš pradžių tuščias, CadCraft jo niekada neperrašo) ir CadCraft scena apačioje. Pakeitimai, kuriuos įrašote į savo sluoksnį, išlieka, kai scena siunčiama dar kartą. Šviestuvai ir kiti aktoriai, kuriuos dedate į Unreal lygį, yra už stage ribų ir taip pat nepaliečiami.

## Be Studio

Naršyklėje arba kompiuteryje, kuriame Studio neranda Unreal, variklių sąraše pasirinkite **Unreal projekto aplankas (.zip)** ir spustelėkite {{ui:Atvaizduoti}}. Jis įrašo tą patį aplanką kaip zip: išskleiskite jį į projekto aplanką `CadCraft`. Pirmą kartą palikite įjungtą **Įtraukti scenos failus**; kitiems įrašymams išjunkite, kad zip turėtų tik sceną ir parametrų failą, o jūsų sluoksnis niekada nebūtų pakeistas.

:::note
Unreal papildinys, kuris atidaro stage, taiko saulę, šviestuvus, kameras ir ekspoziciją, seka kiekvieną siuntimą ir atvaizduoja kamerą, **dar neišleistas** ir nebuvo paleistas Unreal. Kol jis nebus išleistas, Siųsti deda failus į projektą, o Unreal savieji USD įrankiai gali juos atidaryti. Pirmoji sistema – Windows; macOS seks.
:::
