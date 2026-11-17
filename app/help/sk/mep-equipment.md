---
title: Zariadenia MEP s prípojkami
summary: Umiestňujte všeobecné vzduchotechnické jednotky, ventilátory, čerpadlá, kotle, ohrievače vody, koncové jednotky, difúzory, mriežky a nádrže s rozmermi podľa hodnôt, ktoré zadáte, každé s pripojeniami pre potrubie a VZT potrubie, ku ktorým sa pripájajú ďalšie úseky.
keywords: mep, zariadenie, vzduchotechnická jednotka, ahu, ventilátor, potrubný ventilátor, čerpadlo, kotol, ohrievač vody, koncová jednotka, vav, difúzor, mriežka, registrík, nádrž, prípojka, prípojky, pripojenie, hrdlo, dimenzia hrdla, vzt, vodoinštalácia, strojné, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Čo budete robiť

Umiestnite zariadenia na konce svojich potrubí a VZT potrubí. Každý kus je všeobecný tvar s rozmermi, ktoré zadáte, a s pripojeniami ako **prípojkami**: kde sa k nemu pripája potrubie alebo VZT potrubie, aký systém, akým smerom prúdi médium a aká dimenzia. Potrubia a VZT potrubia nakreslené z prípojky prevezmú jej dimenziu a systém a zostanú k nej pevne pripojené: pozri [Pripojte potrubia a VZT potrubia k zariadeniam](topic:mep-connections).

:::note
Ide o pomôcku pri kreslení a koordinácii, dimenzovanú inžinierom. Zariadenie nie je výrobok konkrétneho výrobcu: žiadne výkony, hmotnosti ani pripojovacie rozmery výrobcov. Keď ho potrebujete, prineste model výrobcu z vášho MEP programu ako IFC.
:::

## Umiestnenie kusu

1. Zapnite {{ui:Kresliť}}, otvorte {{ui:Zostava}} a vyberte {{ui:Vybavenie}}.
2. V lište vyberte druh a zadajte jeho rozmery. Každý druh si žiada svoje:

| Druh | Zadáte | Jeho prípojky |
|---|---|---|
| Vzduchotechnická jednotka | dĺžku, šírku, výšku; otvory prívodu a odvodu; dimenziu a systém potrubia cievky; dimenziu kondenzátu | výstup prívodného VZT potrubia, vstup odvodného VZT potrubia, vstup a výstup cievky, odtok kondenzátu |
| Potrubný ventilátor | priemer, dĺžku, systém | vstup a výstup VZT potrubia |
| Čerpadlo | dimenziu potrubia, systém | vstup a výstup |
| Kotol | dĺžku, šírku, výšku, dimenziu potrubia, dimenziu plynu, priemer odvodu spalín | výstup vykurovacieho prívodu a vstup spiatočky, vstup plynu, výstup spalín |
| Ohrievač vody | priemer, výšku, dimenziu potrubia, plyn alebo elektrina | vstup studenej vody, výstup teplej vody (a vstup plynu a odvod spalín, keď horí plynom) |
| Koncová jednotka | dĺžku, šírku, výšku, okrúhly vstup, šírku a výšku výstupu | vstup a výstup privádzaného vzduchu |
| Difúzor | čelo, hrdlo, systém | jeho hrdlo (vstup vzduchu) |
| Mriežka | šírku a výšku čela, šírku a výšku hrdla, systém | jej hrdlo (výstup vzduchu do odvodného alebo výfukového VZT potrubia) |
| Nádrž | priemer, výšku, dimenziu potrubia, systém | vstup hore, výstup blízko dna |
| Radiátor | dĺžku, výšku, hĺbku, dimenziu potrubia, systém | prívod hore na jednom konci, spiatočka dole na druhom konci |
| Konvektor / panelový ohrievač | dĺžku, výšku, hĺbku, dimenziu potrubia, systém | prívod na jednom konci, spiatočka na druhom |
| Rodina výrobcu | rodinu (pozri [Špecifikácie potrubí, ventily, klapky a rodiny výrobcov](topic:pipe-specs)) | prípojky, ktoré mu rodina priradila |

3. Nastavte **Výška**, teda výšku jeho základne nad úrovňou. Výška difúzora alebo mriežky je výška ich čela: zadajte výšku stropu.
4. Zadajte **Označenie**, ak ho chcete (`AHU-1`); ďalší kus toho istého druhu dostane ďalšie číslo.
5. Pohybujte kurzorom nad pôdorysom: pôdorys a jeho prípojky sa pohybujú s ním. Stlačte {{key:R}} na otočenie o 90°. Kliknite, kde má byť.

Dimenzie potrubí sú dimenzie oceľových rúr (ASME B36.10M). Potrubie nakreslené z čerpadla z iného materiálu prevezme rovnakú menovitú dimenziu vo svojom materiáli.

## Zmena alebo odstránenie

Vyberte ho v pôdoryse alebo v 3D pohľade. Vlastnosti ukážu všetky dimenzie, ktoré ste zadali, jeho označenie, X, Y, výšku a otočenie a každú prípojku: jej dimenziu, systém, akým smerom prúdi médium a či je k nej niečo pripojené. Každá zmena je jeden krok {{ui:Späť}}; úseky pevne pripojené k jeho prípojkám sa presunú s ním. {{key:Delete}} ho odstráni; úseky, ktoré boli k nemu pripojené, zostanú a kontrola pripojení ich vypíše.

## V súbore IFC

Každý druh sa uloží ako svoja trieda IFC: IfcUnitaryEquipment (vzduchotechnická jednotka), IfcFan, IfcPump, IfcBoiler (kotol; ohrievač vody je IfcBoiler typu voda s typom objektu "Water heater"), IfcAirTerminalBox (koncová jednotka), IfcAirTerminal (difúzor, mriežka) a IfcTank, s typom spoločným pre každý kus rovnakého druhu a rozmerov. Súbory IFC2X3 dostanú IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal a IfcFlowStorageDevice s príslušnými typmi. Každá prípojka je IfcDistributionPort umiestnený tam, kde je pripojenie, smerom von, so svojím smerom prúdenia a systémom; iné programy čítajú, ktoré úseky sa pripájajú ku ktorej prípojke. Kus sa pripája do systému každej svojej prípojky a nesie sady knižničných položiek, ktoré má každá umiestnená knižničná položka.
