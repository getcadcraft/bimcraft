---
title: "Klimaattoekomste: 2050 en 2080 vloed, hitte en veldbrand"
summary: Laat die vloed, die energiejaar en 'n veldbrandsifting weer loop met toekomstige klimaat (scenario's SSP2-4.5 en SSP5-8.5, jare 2050 en 2080) uit 'n klimaatdata-pak, aangebied langs hede en toekoms.
keywords: klimaat, klimaatverandering, toekoms, 2050, 2080, ssp, cmip6, scenario, seevlak, vloed, hitte, weerlêer, epw, morph, energyplus, veldbrand, bosbrand, vuurweer
from: 224ecd08
---

Die klimaatsyfers kom uit 'n **datapak**, nie uit die program nie. Skakel die {{ui:Klimaattoekomste}}-byvoeging aan in Instellings › Byvoegings, of laai 'n pakketlêer van jou eie in die {{ui:Klimaattoekoms}}-blok.

:::warning
Die pakket wat by die byvoeging kom, is 'n **monster**: drie plekke (Denver, Miami, Johannesburg), een klimaatmodel, vyf jaar in elke 20-jaar-tydperk. Dit is daar om die hulpmiddels te probeer, **nie vir ontwerp nie**. Die paneel sê dit in vetdruk terwyl dit in gebruik is. 'n Volledige pakket (baie modelle, alle jare, meer plekke) word met `tools/climate/build-pack.mjs` gebou uit NASA se NEX-GDDP-CMIP6-data.
:::

## Kies 'n toekoms

In die linkerpaneel se {{ui:Gevaarspeel}}, kies 'n **Scenario** (SSP2-4.5, die middelpad, of SSP5-8.5, hoë uitstoot) en 'n **Jaar** (2050 beteken 2041-2060, 2080 beteken 2071-2090; albei teen 1995-2014). Die **Plek** is die pakket se plek naaste aan die model se terrein (IfcSite-breedte- en lengtegraad), of die een wat jy kies. Ver van enige plek af word die pakket se globale gemiddelde veranderinge gebruik, en die paneel sê dit.

## Vloed, hede langs toekoms

Met 'n scenario gekies, stel die **Vloedtipe** in: kus (voeg die seevlakstyging by), rivier of swaar reën (dieper deur die verandering in die natste dag se reën), of albei. Druk Begin: die vloed speel soos voorheen, en 'n tabel wys die hede- en toekomsvloed langs mekaar (waterpeil, vertrekke wat nat word, die diepste water). Die aannames word daaronder gelys:

- 'n Kusvlak styg met die hele seevlakstyging; storm en golwe word nie verander nie;
- riviervloei styg een-tot-een met die natste-dag-reënval, en diepte volg vloei tot die mag 0.6 (Manning se vergelyking vir 'n breë kanaal);
- die twee dele word eenvoudig bymekaar getel.

## Hitte: 'n toekomstige weerlêer

Kies die soort {{ui:Hitte: toekomstige weerlêer}}, kies 'n hede-`.epw`-weerlêer en druk {{ui:Maak die toekomstige weerlêer}}. Die lêer word maand vir maand **gemorf** met die gepubliseerde verskuiwings- en rekmetode (Belcher, Hacker en Powell 2005): die maand se gemiddelde warm met die pakket se verandering, die warm middae met die verandering in die daaglikse maksimum en die koue nagte met die verandering in die daaglikse minimum. Relatiewe humiditeit beweeg met die pakket se verandering en die dougpunt word weer uitgewerk. Druk en wind bly soos hulle was. Die tabel vergelyk die gemiddelde en warmste temperature, die 0.4 %-koeling- en 99.6 %-verhittings-ontwerptemperature, die ure by 30 °C en 35 °C en die graadoure.

{{ui:Stoor die toekomstige weerlêer}} stoor dit; {{ui:Gebruik dit in die energiekontrole}} gee dit aan die EnergyPlus-kontrole (Energie-oortjie). Die toekomstige lêer is dieselfde tipiese jaar, warmer: dit voeg nie nuwe hittegolwe by nie.

## Energiejaar, hede langs toekoms

In die EnergyPlus-kontrole op die Energie-oortjie ('n byvoeging op sy eie, met jou eie enjin), kies 'n hede-weerlêer, dan 'n scenario en 'n jaar in sy {{ui:Klimaattoekoms}}-blok, en druk {{ui:Simuleer 'n jaar: hede en toekoms}}. Die jaar loop op die hede-lêer en op sy gemorfde toekoms, en die verhitting en verkoeling van elke vertrek word langs mekaar gelys.

## Veldbrandblootstelling (slegs sifting)

Kies die soort {{ui:Veldbrandblootstelling (slegs sifting)}}: die naaste plantegroei, die helling op van daar na die gebou, en die afstand daarna. Die resultaat is 'n band van baie laag tot uiters, hede en toekoms.

:::warning
**Slegs sifting.** Dit is ons eie relatiewe skaal om te sien of 'n terrein 'n behoorlike veldbrandassessering nodig het, nie 'n kodeberaming of 'n bosbrand-aanvalsvlak nie. Dit vermenigvuldig 'n gewig vir die plantegroei, 'n hellingfaktor ('n vuur verdubbel sy spoed ongeveer vir elke 10 grade opwaartse helling, tel tot 20 grade), 'n afstandfaktor (10 m gedeel deur die afstand, hoogstens 1) en die pakket se verandering in die vuurweerindeks.
:::

## Waar die syfers vandaan kom

- **Temperatuur, humiditeit, sonskyn, reënval, vuurweer:** NASA NEX-GDDP-CMIP6, daaglikse afgeskaalde CMIP6-modeluitset. Elke model se uitset is onder CC BY 4.0. Die vuurweerverandering is die Kanadese Vuurweerindeks, dag vir dag uitgewerk uit die model se weer (met daaglikse humiditeit in plaas van middaghumiditeit).
- **Seevlakstyging:** die IPCC AR6-wêreldgemiddelde (nie plaaslik nie; land wat styg of sak, is nie daarin nie), tensy 'n pakket plaaslike syfers dra.
- Die pakket noem sy bron, lisensie en datum; die paneel wys hulle.
