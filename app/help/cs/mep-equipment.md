---
title: Zařízení MEP s přípojkami
summary: Umisťujte obecné vzduchotechnické jednotky, ventilátory, čerpadla, kotle, ohřívače vody, koncové jednotky, difuzory, mřížky a nádrže dimenzované podle hodnot, které zadáte, každé s připojeními potrubí a vzduchovodů, ke kterým se připojují ostatní trasy.
keywords: mep, zařízení, vzduchotechnická jednotka, ahu, ventilátor, potrubní ventilátor, čerpadlo, kotel, ohřívač vody, koncová jednotka, vav, difuzor, mřížka, výustka, nádrž, přípojka, přípojky, připojení, hrdlo, velikost hrdla, hvac, vodoinstalace, strojní, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Co provedete

Umístěte zařízení na konce potrubí a vzduchovodů. Každý kus je obecný tvar dimenzovaný podle hodnot, které zadáte, s připojeními jako **přípojkami**: kde se potrubí nebo vzduchovod připojí, jaký systém, kterým směrem teče médium a jaká velikost. Potrubí a vzduchovody nakreslené z přípojky převezmou její velikost a systém a zůstanou k ní pevně připojeny: viz [Připojení potrubí a vzduchovodů k zařízení](topic:mep-connections).

:::note
Jde o pomůcku pro kreslení a koordinaci, jejíž velikosti určí inženýr. Zařízení není výrobek konkrétního výrobce: žádné výkony, hmotnosti ani velikosti připojení výrobců. Když ho potřebujete, přineste model výrobce ze svého programu pro MEP jako IFC.
:::

## Umístění kusu

1. Zapněte {{ui:Kreslení}}, otevřete {{ui:Sestavení}} a zvolte {{ui:Zařízení}}.
2. V liště vyberte druh a zadejte jeho rozměry. Každý druh žádá své:

| Druh | Zadáte | Jeho přípojky |
|---|---|---|
| Vzduchotechnická jednotka | délku, šířku, výšku; přívodní a vratný otvor; velikost potrubí cívky a systém; velikost kondenzátu | přívodní vzduchovod ven, vratný vzduchovod dovnitř, cívka dovnitř a ven, odvod kondenzátu |
| Potrubní ventilátor | průměr, délku, systém | vzduchovod dovnitř a ven |
| Čerpadlo | velikost potrubí, systém | vstup a výstup |
| Kotel | délku, šířku, výšku, velikost potrubí, velikost plynu, průměr kouřovodu | přívod topení ven a vratka dovnitř, plyn dovnitř, kouřovod ven |
| Ohřívač vody | průměr, výšku, velikost potrubí, plyn nebo elektřina | studená voda dovnitř, teplá voda ven (a plyn dovnitř a kouřovod, když hoří plynem) |
| Koncová jednotka | délku, šířku, výšku, kulatý vstup, šířku a výšku výstupu | přívod vzduchu dovnitř a ven |
| Difuzor | čelo, hrdlo, systém | jeho hrdlo (vzduch dovnitř) |
| Mřížka | šířku a výšku čela, šířku a výšku hrdla, systém | jeho hrdlo (vzduch ven do vratného nebo odvodního vzduchovodu) |
| Nádrž | průměr, výšku, velikost potrubí, systém | vstup nahoře, výstup blízko dna |
| Radiátor | délku, výšku, hloubku, velikost potrubí, systém | průtok dovnitř nahoře na jednom konci, vratka ven dole na druhém konci |
| Konvektor / panelový ohřívač | délku, výšku, hloubku, velikost potrubí, systém | průtok dovnitř na jednom konci, vratka ven na druhém |
| Rodina výrobce | rodinu (viz [Specifikace potrubí, ventily, klapky a rodiny výrobců](topic:pipe-specs)) | přípojky, které dostala její rodina |

3. Nastavte **Od**, výšku své základny nad úrovní. Výška difuzoru nebo mřížky je jejich čelo: zadejte výšku stropu.
4. Zadejte **Značku**, chcete-li ji (`AHU-1`); další kus stejného druhu dostane další číslo.
5. Přesuňte ukazatel nad půdorys: půdorys a jeho přípojky ho následují. Stiskněte {{key:R}} pro otočení o 90°. Klikněte, kam má jít.

Velikosti potrubí jsou velikosti ocelových trubek (ASME B36.10M). Potrubí nakreslené z čerpadla v jiném materiálu převezme stejnou jmenovitou velikost ve svém vlastním materiálu.

## Změna nebo odebrání

Vyberte jej v půdorysu nebo ve 3D pohledu. Vlastnosti ukážou každou velikost, kterou jste zadali, jeho značku, X, Y, výšku a natočení, a každou přípojku: její velikost, systém, kterým směrem teče médium, a zda je něco připojeno. Každá změna je jeden krok {{ui:Zpět}}; trasy připojené k jeho přípojkám se pohybují s ním. {{key:Delete}} jej odstraní; trasy, které k němu byly připojeny, zůstanou a kontrola připojení je vypíše.

## V souboru IFC

Každý druh se uloží jako svá třída IFC: IfcUnitaryEquipment (vzduchotechnická jednotka), IfcFan, IfcPump, IfcBoiler (kotel; ohřívač vody je IfcBoiler typu voda s typem objektu "Water heater"), IfcAirTerminalBox (koncová jednotka), IfcAirTerminal (difuzor, mřížka) a IfcTank, se sdíleným typem pro všechny kusy téhož druhu a s rozměry. Soubory IFC2X3 dostanou IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal a IfcFlowStorageDevice s odpovídajícími typy. Každá přípojka je IfcDistributionPort umístěný tam, kde je připojení, směřující ven, se svým směrem toku a systémem; ostatní programy čtou, která trasa se ke které přípojce připojuje. Kus se připojí k systému každé ze svých přípojek a nese sady položek knihovny, které má každá umístěná položka knihovny.
