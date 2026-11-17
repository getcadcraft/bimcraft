---
title: Split, VRF in ventilatorski konvektorji
summary: Postavite notranje enote stenske, kasetne in z kanali, zunanje enote enojnega splita in VRF, refnet spoje ter 2-cevne ali 4-cevne ventilatorske konvektorje, vsako z njihovimi priključki za hladilno sredstvo, vodo, kondenzat in kanale, ter narišite komplete vodov med njimi, dimenzionirane iz tabele, ki jo lahko spremenite.
keywords: split, mini split, minisplit, multi split, vrf, vrv, spremenljiv pretok hladilnega sredstva, toplotna črpalka, notranja enota, zunanja enota, kondenzacijska enota, stenska, visoka stena, kaseta, z kanali, skrito, ventilatorski konvektor, fcu, 2-cevni, 4-cevni, refnet, veja, Y spoj, komplet vodov, lineset, hladilno sredstvo, tekoči vod, plinski vod, sesalni vod, acr, baker, kondenzat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Kaj boste naredili

Postavite enote sistema split, multi-split ali VRF in njegove ventilatorske konvektorje v model, nato jih povežite s kompleti vodov: tekočim in plinskim vodom iz bakra ACR, pritrjenim na priključke enot. Enote delujejo kot vsak drug kos v [Oprema MEP s priključki](topic:mep-equipment): enaka vrstica, Lastnosti, priključki in [povezave](topic:mep-connections).

:::note
To je pripomoček za risanje in usklajevanje. Enote so splošne oblike, ki jih določajo vrednosti, ki jih vnesete, ne izdelki proizvajalca. Njihove velikosti cevi izhajajo iz tabele **tipičnih vzorčnih vrednosti** za opremo R410A in R32, ne od kakšnega proizvajalca: dejanske velikosti določi navodilo za montažo proizvajalca enote, dolge proge ali velike višinske razlike pa jih spremenijo. Spremenite tabelo ali vnesite velikosti, da se ujemajo z enotami, ki jih uporabljate.
:::

## Postavitev enote

1. Vklopite {{ui:Draw}}, odprite meni {{ui:Build}} in izberite {{ui:Equipment}}.
2. Izberite vrsto in nastavite njene vrednosti:

| Vrsta | Nastavite | Njeni priključki |
|---|---|---|
| Notranja enota split, stenska | zmogljivost, tekoči in plinski vod, dolžina, globina, višina, velikost odtoka kondenzata | hladilno sredstvo tekoče in plinasto, odtok kondenzata (na desnem koncu, blizu stene) |
| Notranja enota split, kasetna | zmogljivost, tekoči in plinski vod, plošča, ohišje, višina, velikost odtoka kondenzata | hladilno sredstvo tekoče in plinasto, odtok kondenzata (na eni strani, blizu vrha) |
| Notranja enota split, z kanali | zmogljivost, tekoči in plinski vod, dolžina, širina, višina, dovodna in odvodna odprtina, velikost odtoka kondenzata | dovodni kanal ven, odvodni kanal noter, hladilno sredstvo tekoče in plinasto, odtok kondenzata |
| Zunanja enota split | zmogljivost, tekoči in plinski vod, širina, globina, višina | hladilno sredstvo tekoče in plinasto (na desni strani) |
| Zunanja enota VRF | zmogljivost, tekoči in plinski vod, širina, globina, višina | hladilno sredstvo tekoče in plinasto (spredaj, nizko) |
| Refnet spoj | tekoči ali plinski vod, obremenitev vsake veje, cev na vsakem koncu | vhod, veja A, veja B |
| Ventilatorski konvektor | 2-cevni ali 4-cevni, dolžina, širina, višina, dovodna in odvodna odprtina, cev in sistem tuljave, grelna cev, velikost odtoka kondenzata | dovodni kanal ven, odvodni kanal noter, tuljava vstop in izstop, ogrevanje vstop in izstop (4-cevno), odtok kondenzata |

3. Nastavite **Na višini**: višino podnožja enote nad nivojem. Podnožje stenske enote je njen spodnji rob (pogosto 2100 mm); podnožje kasetne enote je njena ploskev v stropu; pri refnet spoju je to višina središčne črte njegove cevi.
4. Kliknite, kjer naj bo ({{key:R}} jo zavrti za 90°).

**Zmogljivost** je nazivna hladilna zmogljivost enote v kW, poleg nje Btu/h. Če pustite **Tekoči vod** in **Plinski vod** na **Iz tabele**, povezave enote prevzamejo velikosti iz tabele za to zmogljivost; izberite velikost cevi, če želite uporabiti lastno. Vhod refnet spoja je dimenzioniran za obe veji skupaj, vsaka veja pa za svojo obremenitev.

Hladilni priključki delujejo v obe smeri (toplotna črpalka lahko teče v obeh). Odtok kondenzata je velikost cevi kot vsak odtok.

## Risanje kompleta vodov

1. Izberite dva kosa ({{key:Shift}}+klik na drugega): zunanjo enoto in notranjo enoto (enojni split) ali zunanjo enoto in refnet, refnet in notranjo enoto ali dva refneta (VRF).
2. Odprite meni {{ui:Build}} in izberite {{ui:Line set}}.

BimCraft nariše tekoči in plinski vod med njunimi prostimi priključki, iz vsakega priključka navzgor do skupne višine, iz bakra ACR (žarjena tuljava do 1-5/8 in, vlečena cev nad tem), kot en korak {{ui:Undo}}. Refnet sprejme samo svoj vod: v vhod z zunanje strani in iz veje proti notranjim enotam. Vsak vod prevzame velikost svojega konca v smeri toka (notranje enote ali vhoda refneta); kjer ima drugi konec priključek druge velikosti, {{ui:Check connections}} to navede: tam mora biti reducirni kos. Dve notranji enoti potrebujeta refnet med njima.

Vode lahko kasneje premaknete kot vsako cevno progo; njihovi konci ostanejo na priključkih. Vode med etažami narišite z {{ui:Pipe}}: cev, začeta na hladilnem priključku, prevzame njegov sistem, baker ACR in velikost.

## Sprememba tabele kompletov vodov

Odprite meni {{ui:Build}} in izberite {{ui:Line set sizes}}. Vsaka vrstica pove: do te zmogljivosti (kW), ta tekoča cev in ta plinska cev.

| Do | Tekoči | Plinski |
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

To so začetne, tipične vrednosti. Spremenite vrstico, dodajte ali odstranite vrstice in izberite {{ui:Save}}: tabela se shrani v model, zato jo uporablja vsak, ki dela na datoteki, in {{ui:Undo}} jo povrne. {{ui:Use the typical values}} vrne začetno tabelo. Že postavljeni kosi ohranijo svoje priključke, dokler jih ne spremenite.

## V datoteki IFC

Notranje in zunanje enote sistemov split in VRF so IfcUnitaryEquipment tipa SPLITSYSTEM, vrsta objekta pa pove, katera je ("Notranja enota split, stenska", "Notranja enota split, kasetna", "Notranja enota split, z kanali", "Zunanja enota split", "Zunanja enota VRF"). Ventilatorski konvektor je IfcUnitaryEquipment tipa AIRHANDLER z vrsto objekta "Ventilatorski konvektor": IFC4 nima tipa za ventilatorski konvektor, ventilator, tuljava in filter za en prostor pa opisuje AIRHANDLER. Refnet spoj je IfcPipeFitting tipa JUNCTION ("Refnet spoj"). Datoteke IFC2X3 dobijo IfcEnergyConversionDevice in IfcFlowFitting z ustreznimi tipi.

Priključki za hladilno sredstvo in vodi so v sistemih REFRIGERATION (eden za tekoče vode, eden za plinske), kondenzat pa v sistemu DRAINAGE. Vodi ACR so poimenovani po zunanjem premeru. Tabela kompletov vodov je nabor lastnosti CadCraft_HvacLineSets na projektu.

Glejte tudi [Oprema MEP s priključki](topic:mep-equipment), [Povežite cevi in kanale z opremo](topic:mep-connections) in [Cevi in kanali](topic:pipes-and-ducts).
