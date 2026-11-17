---
title: Split, VRF i fan coil jedinice
summary: Postavite zidne, kasetne i kanalske unutrašnje jedinice, split i VRF spoljašnje jedinice, refnet spojeve i fan coil jedinice sa 2 ili 4 cevi, svaku sa njenim priključcima za rashladno sredstvo, vodu, kondenz i kanale, i nacrtajte setove vodova između njih, dimenzionisane prema tabeli koju možete menjati.
keywords: split, mini split, minisplit, multi split, vrf, vrv, promenljiv protok rashladnog sredstva, toplotna pumpa, unutrašnja jedinica, spoljašnja jedinica, kondenzaciona jedinica, zidna montaža, visok zid, kaseta, kanalska, skrivena, fan coil, fcu, 2 cevi, 4 cevi, refnet, račva, Y spoj, set vodova, lineset, rashladno sredstvo, vod tečnosti, vod gasa, vod usisa, acr, bakar, kondenz, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Šta ćete uraditi

Postavite jedinice split, multi-split ili VRF sistema i njegove fan coil jedinice u model, pa ih povežite setovima vodova: vodom za tečnost i vodom za gas u ACR bakru, pričvršćenim za priključke jedinica. Jedinice rade kao i svaki drugi element u [MEP oprema sa priključcima](topic:mep-equipment): ista traka, {{ui:Svojstva}}, priključci i [veze](topic:mep-connections).

:::note
Ovo je pomoć za crtanje i koordinaciju. Jedinice su generički oblici dimenzionisani vrednostima koje unesete, a ne proizvodi nekog proizvođača. Dimenzije cevi dolaze iz tabele **tipičnih primernih vrednosti** za opremu sa R410A i R32, a ne od nekog proizvođača: uputstvo za ugradnju proizvođača jedinice određuje stvarne dimenzije, a dugi vodovi ili velike visinske razlike ih menjaju. Promenite tabelu ili unesite dimenzije da odgovaraju jedinicama koje koristite.
:::

## Postavite jedinicu

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Verzija}} i izaberite {{ui:Oprema}}.
2. Izaberite vrstu i postavite njene vrednosti:

| Vrsta | Podešavate | Njeni priključci |
|---|---|---|
| Split unutrašnja jedinica, zidna | kapacitet, vod tečnosti i gasa, dužina, dubina, visina, veličina kondenza | rashladno sredstvo tečnost i gas, odvod kondenza (na desnom kraju, blizu zida) |
| Split unutrašnja jedinica, kaseta | kapacitet, vod tečnosti i gasa, panel, telo, visina, veličina kondenza | rashladno sredstvo tečnost i gas, odvod kondenza (na jednoj strani, blizu vrha) |
| Split unutrašnja jedinica, kanalska | kapacitet, vod tečnosti i gasa, dužina, širina, visina, otvori za dovod i povrat, veličina kondenza | izlaz dovoda u kanal, ulaz povrata iz kanala, rashladno sredstvo tečnost i gas, odvod kondenza |
| Split spoljašnja jedinica | kapacitet, vod tečnosti i gasa, širina, dubina, visina | rashladno sredstvo tečnost i gas (na desnoj strani) |
| VRF spoljašnja jedinica | kapacitet, vod tečnosti i gasa, širina, dubina, visina | rashladno sredstvo tečnost i gas (sprijeda, nisko) |
| Refnet spoj | vod tečnosti ili gasa, opterećenje svake grane, cev na svakom kraju | ulaz, grana A, grana B |
| Fan coil jedinica | 2 ili 4 cevi, dužina, širina, visina, otvori za dovod i povrat, cev i sistem kalema, cev grejanja, veličina kondenza | izlaz dovoda u kanal, ulaz povrata iz kanala, kalem ulaz i izlaz, grejanje ulaz i izlaz (4 cevi), odvod kondenza |

3. Postavite **Na visini**: visinu baze jedinice iznad nivoa. Baza zidne jedinice je njena donja strana (često 2100 mm); baza kasete je njeno lice u plafonu; a kod refneta je to visina središnje linije njegove cevi.
4. Kliknite gde ide ({{key:R}} je okreće za 90°).

**Kapacitet** je nominalni kapacitet hlađenja jedinice u kW, a pored njega je Btu/h. Ako su **Vod tečnosti** i **Vod gasa** ostavljeni na **Iz tabele**, veze jedinice preuzimaju dimenzije iz tabele za taj kapacitet; izaberite veličinu cevi da koristite sopstvenu vrednost jedinice. Ulaz refneta se dimenzioniše za obe grane zajedno, a svaka grana za svoje opterećenje.

Priključci za rashladno sredstvo rade u oba smera (toplotna pumpa radi u oba pravca). Odvod kondenza je veličina cevi kao i svaki odvod.

## Nacrtajte set vodova

1. Izaberite dva komada ({{key:Shift}}+klik na drugi): spoljašnju jedinicu i unutrašnju jedinicu (jedan split), ili spoljašnju jedinicu i refnet, refnet i unutrašnju jedinicu, ili dva refneta (VRF).
2. Otvorite {{ui:Verzija}} i izaberite {{ui:Set vodova}}.

BimCraft nacrta vodove za tečnost i gas između njihovih slobodnih priključaka, izlazeći iz svakog priključka i podižući se do zajedničke visine, u ACR bakru (žareni svitak do 1-5/8 in, izvučena cev iznad toga), kao jedan korak za {{ui:Opozovi}}. Refnet prima samo svoj vod, u svoj ulaz sa spoljašnje strane i iz grane prema unutrašnjim jedinicama. Svaki vod dobija veličinu svog nizvodnog kraja (unutrašnje jedinice ili ulaza refneta); ako je priključak drugog kraja druge veličine, {{ui:Proveri veze}} to navodi: tu ide redukcija. Dve unutrašnje jedinice zahtevaju refnet između njih.

Vodove premeštajte naknadno kao i svaku cevnu deonicu; njihovi krajevi ostaju na priključcima. Vodovi između nivoa crtaju se sa {{ui:Cev}}: cev započeta na priključku za rashladno sredstvo preuzima svoj sistem, ACR bakar i svoju veličinu.

## Promenite tabelu setova vodova

Otvorite {{ui:Verzija}} i izaberite {{ui:Veličine seta vodova}}. Svaki red kaže: do ovog kapaciteta (kW), ova tečna cev i ova gasna cev.

| Do | Tečnost | Gas |
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

Ovo su početne, tipične vrednosti. Promenite red, dodajte ili uklonite redove i izaberite {{ui:Sačuvaj}}: tabela se čuva u modelu, pa je svi koji rade na datoteci koriste, a {{ui:Opozovi}} je vraća. {{ui:Koristi tipične vrednosti}} vraća početnu tabelu. Već postavljeni elementi zadržavaju svoje priključke dok ih ne promenite.

## U IFC datoteci

Unutrašnje i spoljašnje jedinice split i VRF sistema su IfcUnitaryEquipment tipa SPLITSYSTEM, a tip objekta kaže koja je ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fan coil je IfcUnitaryEquipment tipa AIRHANDLER sa tipom objekta "Fan coil unit": IFC4 nema tip za fan coil, a ventilator, kalem i filter za jednu prostoriju je ono što AIRHANDLER opisuje. Refnet spoj je IfcPipeFitting tipa JUNCTION ("Refnet joint"). IFC2X3 datoteke dobijaju IfcEnergyConversionDevice i IfcFlowFitting sa odgovarajućim tipovima.

Priključci i vodovi za rashladno sredstvo nalaze se u sistemima REFRIGERATION (jedan za vodove tečnosti, jedan za vodove gasa), a kondenz u sistemu DRAINAGE. ACR vodovi se imenuju po spoljašnjem prečniku. Tabela setova vodova je skup svojstava CadCraft_HvacLineSets na projektu.

Pogledajte i [MEP oprema sa priključcima](topic:mep-equipment), [Povežite cevi i kanale sa opremom](topic:mep-connections) i [Cevi i kanali](topic:pipes-and-ducts).
