---
title: Split, VRF a fancoily
summary: Umiestnite nástenné, kazetové a kanálové vnútorné jednotky, vonkajšie jednotky split a VRF, refnet spojky a 2-rúrkové alebo 4-rúrkové fancoily, každú s pripojeniami chladiva, vody, kondenzátu a potrubí, a nakreslite medzi nimi vedenia chladiva, ktorých veľkosť sa určí z tabuľky, ktorú môžete zmeniť.
keywords: split, mini split, minisplit, multi split, vrf, vrv, variabilný prietok chladiva, tepelné čerpadlo, vnútorná jednotka, vonkajšia jednotka, kondenzačná jednotka, nástenná, vysoko nástenná, kazetová, kanálová, skrytá, fancoil, fcu, 2-rúrkový, 4-rúrkový, refnet, rozvodová spojka, Y spojka, vedenie chladiva, lineset, chladivo, kvapalinové vedenie, plynové vedenie, sacie vedenie, acr, meď, kondenzát, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Čo urobíte

Umiestnite do modelu jednotky systému split, multisplit alebo VRF a ich fancoily a spojte ich vedeniami chladiva: kvapalinovým a plynovým vedením z medi ACR, pripevneným k prípojkám jednotiek. Jednotky fungujú ako každý iný prvok na [zariadeniach TZB s prípojkami](topic:mep-equipment): rovnaký panel, Vlastnosti, prípojky a [pripojenia](topic:mep-connections).

:::note
Toto je pomôcka na kreslenie a koordináciu. Jednotky sú všeobecné tvary s veľkosťami podľa hodnôt, ktoré zadáte, nie výrobky konkrétneho výrobcu. Ich veľkosti rúrok pochádzajú z tabuľky **typických príkladových hodnôt** pre zariadenia R410A a R32, nie od konkrétneho výrobcu: skutočné veľkosti určuje inštalačná príručka výrobcu jednotky a dlhé trasy alebo veľké výškové rozdiely ich zmenia. Zmeňte tabuľku alebo zadajte veľkosti tak, aby zodpovedali jednotkám, ktoré používate.
:::

## Umiestnenie jednotky

1. Zapnite {{ui:Kresliť}}, otvorte {{ui:Zostava}} a vyberte {{ui:Vybavenie}}.
2. Vyberte druh a nastavte jeho hodnoty:

| Druh | Nastavíte | Jeho prípojky |
|---|---|---|
| Split vnútorná jednotka, nástenná | výkon, vedenie kvapaliny a plynu, dĺžka, hĺbka, výška, veľkosť kondenzátu | chladivo, kvapalina a plyn, odtok kondenzátu (na pravom konci, pri stene) |
| Split vnútorná jednotka, kazetová | výkon, vedenie kvapaliny a plynu, panel, teleso, výška, veľkosť kondenzátu | chladivo, kvapalina a plyn, odtok kondenzátu (na jednej strane, pri hornej hrane) |
| Split vnútorná jednotka, kanálová | výkon, vedenie kvapaliny a plynu, dĺžka, šírka, výška, prívodný a vratný otvor, veľkosť kondenzátu | prívodné potrubie von, vratné potrubie dnu, chladivo, kvapalina a plyn, odtok kondenzátu |
| Split vonkajšia jednotka | výkon, vedenie kvapaliny a plynu, šírka, hĺbka, výška | chladivo, kvapalina a plyn (na pravej strane) |
| VRF vonkajšia jednotka | výkon, vedenie kvapaliny a plynu, šírka, hĺbka, výška | chladivo, kvapalina a plyn (vpredu, nízko) |
| Refnet spojka | kvapalinové alebo plynové vedenie, záťaž každej vetvy, rúrka na každom konci | vstup, vetva A, vetva B |
| Fancoil | 2-rúrkový alebo 4-rúrkový, dĺžka, šírka, výška, prívodný a vratný otvor, rúrka a systém cievky, vykurovacia rúrka, veľkosť kondenzátu | prívodné potrubie von, vratné potrubie dnu, cievka dnu a von, vykurovanie dnu a von (4-rúrkový), odtok kondenzátu |

3. Nastavte **Vo výške**: výšku spodnej časti jednotky nad úrovňou. Spodná časť nástennej jednotky je jej spodná hrana (často 2100 mm); výška kazetovej jednotky je jej čelo v strope; výška refnetu je výška stredovej osi jeho rúrky.
4. Kliknite, kam má patriť ({{key:R}} ju otočí o 90°).

**Výkon** je menovitý chladiaci výkon jednotky v kW, vedľa neho v Btu/h. Keď necháte **Kvapalinové vedenie** a **Plynové vedenie** na **Z tabuľky**, prípojky jednotky prevezmú veľkosti z tabuľky pre tento výkon; ak chcete použiť vlastnú jednotku, vyberte veľkosť rúrky. Vstup refnetu je dimenzovaný pre obe vetvy spolu, každá vetva pre vlastnú záťaž.

Prípojky chladiva fungujú v oboch smeroch (tepelné čerpadlo beží ľubovoľným smerom). Odtok kondenzátu je veľkosť potrubia ako každý iný odtok.

## Nakreslenie vedenia chladiva

1. Vyberte dva prvky ({{key:Shift}}+kliknutie na druhý): vonkajšiu jednotku a vnútornú jednotku (jednoduchý split), alebo vonkajšiu jednotku a refnet, refnet a vnútornú jednotku, alebo dva refnety (VRF).
2. Otvorte {{ui:Zostava}} a vyberte {{ui:Vedenie chladiva}}.

BimCraft nakreslí kvapalinové a plynové trasy medzi ich voľnými prípojkami: z každej prípojky a nahor do spoločnej výšky, z medi ACR (žíhaná cievka do 1-5/8 in, ťahaná rúrka nad tým), ako jeden krok {{ui:Späť}}. Refnet berie len vlastné vedenie: do svojho vstupu z vonkajšej strany a z vetvy smerom k vnútorným jednotkám. Každá trasa má veľkosť svojho konca smerom nadol (vnútornej jednotky alebo vstupu refnetu); ak má prípojka na druhom konci inú veľkosť, {{ui:Skontrolovať pripojenia}} ju uvedie: práve tam patrí redukcia. Dve vnútorné jednotky potrebujú medzi sebou refnet.

Trasy možno neskôr posunúť ako každé potrubie; ich konce zostanú na prípojkách. Trasy medzi úrovňami sa kreslia pomocou {{ui:Potrubie}}: potrubie začaté na prípojke chladiva prevezme jej systém, meď ACR a veľkosť.

## Zmena tabuľky vedení chladiva

Otvorte {{ui:Zostava}} a vyberte {{ui:Veľkosti vedení}}. Každý riadok hovorí: až do tohto výkonu (kW), táto kvapalinová rúrka a táto plynová rúrka.

| Do | Kvapalina | Plyn |
|---|---|---|
| 2.8 kW | Ø6.35 (1/4") | Ø9.52 (3/8") |
| 5.6 kW | Ø6.35 (1/4") | Ø12.7 (1/2") |
| 16 kW | Ø9.52 (3/8") | Ø15.88 (5/8") |
| 22.4 kW | Ø9.52 (3/8") | Ø19.05 (3/4") |
| 33 kW | Ø9.52 (3/8") | Ø22.22 (7/8") |
| 47 kW | Ø12.7 (1/2") | Ø28.58 (1-1/8") |
| 71 kW | Ø15.88 (5/8") | Ø28.58 (1-1/8") |
| 104 kW | Ø19.05 (3/4") | Ø34.92 (1-3/8") |
| 180 kW | Ø19.05 (3/4") | Ø41.28 (1-5/8") |

Toto sú východiskové, typické hodnoty. Zmeňte riadok, pridajte alebo odstráňte riadky a zvoľte {{ui:Uložiť}}: tabuľka sa uchová v modeli, takže ju používa každý, kto pracuje na súbore, a {{ui:Späť}} ju vráti späť. {{ui:Použiť typické hodnoty}} obnoví východiskovú tabuľku. Už umiestnené prvky si ponechajú svoje prípojky, kým ich nezmeníte.

## V súbore IFC

Vnútorné a vonkajšie jednotky systémov split a VRF sú IfcUnitaryEquipment typu SPLITSYSTEM, pričom typ objektu určuje, o ktorú ide ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fancoil je IfcUnitaryEquipment typu AIRHANDLER s typom objektu "Fan coil unit": IFC4 nemá typ fancoilu a ventilátor, cievka a filter pre jednu miestnosť je to, čo opisuje AIRHANDLER. Refnet spojka je IfcPipeFitting typu JUNCTION ("Refnet joint"). Súbory IFC2X3 dostanú IfcEnergyConversionDevice a IfcFlowFitting so zodpovedajúcimi typmi.

Prípojky a trasy chladiva patria do systémov REFRIGERATION (jeden pre kvapalinové vedenia, jeden pre plynové vedenia), kondenzát do systému DRAINAGE. Trasy ACR sa pomenúvajú podľa vonkajšieho priemeru. Tabuľka vedení chladiva je sada vlastností CadCraft_HvacLineSets na projekte.

Pozri tiež [Zariadenia TZB s prípojkami](topic:mep-equipment), [Pripojenie potrubí a vzduchotechnických potrubí k zariadeniam](topic:mep-connections) a [Potrubia a vzduchotechnické potrubia](topic:pipes-and-ducts).
