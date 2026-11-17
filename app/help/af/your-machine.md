---
title: Waarmee jou masjien weergee
summary: Instellings › Weergee wys die grafika, verwerkerkerne en geheue wat hierdie blaaier die program laat gebruik, en die vlak wat bepaal waar weergee begin.
keywords: jou masjien, grafiekaart, gpu, webgpu, webgl, verwerker, cpu, kerne, drade, geheue, ram, gedeelde geheue, isolasie, rang, vlak, spoed, stadig, weergeespoed, skootrekenaar
from: 360f2375
---

Maak {{ui:Instellings}} oop ({{key:Mod+,}}), bly op hierdie program se eie oortjie en rol na {{ui:Weergee}}. {{ui:Jou masjien}} lys wat hierdie blaaier die program vir weergee laat gebruik. Niks daarin verlaat jou rekenaar nie.

| Ry | Wat dit beteken |
|---|---|
| {{ui:Grafika}} | Die grafiekaart wat die blaaier rapporteer. "WebGPU" beteken dit kan die weergeewerk doen; "WebGL 2 only" beteken daar is geen WebGPU nie: die lewendige aansig en hoëgehalte-beelde gebruik die grafiekaart deur WebGL 2 (beelde met die ouer WebGL-padvolger, sonder die ekstras wat WebGPU nodig het); 'n sagteware-plaasvervanger beteken alles loop op die verwerker |
| {{ui:Verwerker}} | Hoeveel verwerkerkerne die blaaier rapporteer |
| {{ui:Geheue}} | Omtrent hoeveel geheue die rekenaar het, wanneer die blaaier dit sê. Sommige blaaiers doen nie |
| {{ui:Gedeelde geheue}} | Of die bladsy geheue tussen sy werkers mag deel. Aan, elke kern kan aan een kopie van 'n toneel werk; af, elkeen het sy eie kopie nodig, sodat 'n groot toneel op minder kerne tegelyk pas |
| {{ui:Vinnige verwerkerkode}} | Of die blaaier die vinniger WebAssembly-kode laat loop. Sonder dit word 'n stadiger terugvalopsie gebruik |
| {{ui:Vlak}} | {{ui:Grafiekaart, hoog}}, {{ui:Grafiekaart, basies}} of {{ui:Net verwerker}}, met die rede daaronder |

## Die vlak

Die vlak is waar weergee begin, sodat 'n skootrekenaar met 'n ingeboude grafiekskyfie of geen grafiekaart nie responsief bly. 'n Ingeboude of foon-grafiekskyfie, of 4 GB geheue of minder, kry nooit {{ui:Grafiekaart, hoog}} nie.

:::note
Blaaiers verskil. Dieselfde rekenaar kan WebGPU in een blaaier en "WebGL 2 only" in 'n ander wys. Op Linux het die meeste blaaiers nog geen WebGPU nie.
:::
