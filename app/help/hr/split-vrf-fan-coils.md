---
title: Split, VRF i fan coil jedinice
summary: Postavite zidne, kasetne i kanalske unutarnje jedinice, vanjske jedinice split i VRF sustava, refnet spojnice i fan coil jedinice s dvije ili četiri cijevi, svaku s priključcima za rashladno sredstvo, vodu, kondenzat i kanale, te nacrtajte vodove između njih, dimenzionirane prema tablici koju možete mijenjati.
keywords: split, mini split, minisplit, multi split, vrf, vrv, promjenjivi protok rashladnog sredstva, toplinska pumpa, unutarnja jedinica, vanjska jedinica, kondenzacijska jedinica, zidna montaža, visoki zid, kaseta, kanalska, skrivena, fan coil, fcu, 2-cijevni, 4-cijevni, refnet, spojnica grane, y spojnica, set vodova, lineset, rashladno sredstvo, vod tekućine, plinski vod, usisni vod, acr, bakar, kondenzat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Što ćete napraviti

Postavite jedinice split, multi-split ili VRF sustava i njegove fan coil jedinice u model, zatim ih spojite setovima vodova: vodom tekućine i plinskim vodom od ACR bakra, pričvršćenima na priključke jedinica. Jedinice rade kao i svaki drugi dio u [MEP oprema s priključcima](topic:mep-equipment): ista traka, {{ui:Svojstva}}, priključci i [veze](topic:mep-connections).

:::note
Ovo je pomoćno sredstvo za crtanje i koordinaciju. Jedinice su generički oblici čije dimenzije određuju vrijednosti koje upišete, a ne proizvodi nekog proizvođača. Dimenzije njihovih cijevi dolaze iz tablice **tipičnih primjernih vrijednosti** za opremu s R410A i R32, a ne od nekog proizvođača: stvarne dimenzije određuje priručnik za ugradnju proizvođača jedinice, a duge trase ili velike visinske razlike ih mijenjaju. Promijenite tablicu ili upišite dimenzije da odgovaraju jedinicama koje koristite.
:::

## Postavljanje jedinice

1. Uključite {{ui:Crtanje}}, otvorite {{ui:Izgradnja}} i odaberite {{ui:Oprema}}.
2. Odaberite vrstu i postavite njezine vrijednosti:

| Vrsta | Postavljate | Priključci |
|---|---|---|
| Split unutarnja jedinica, zidna | kapacitet, vod tekućine i plina, duljina, dubina, visina, dimenzija kondenzata | rashladno sredstvo tekućina i plin, odvod kondenzata (na desnom kraju, uz zid) |
| Split unutarnja jedinica, kaseta | kapacitet, vod tekućine i plina, panel, kućište, visina, dimenzija kondenzata | rashladno sredstvo tekućina i plin, odvod kondenzata (na jednoj strani, pri vrhu) |
| Split unutarnja jedinica, kanalska | kapacitet, vod tekućine i plina, duljina, širina, visina, otvori za dovod i povrat, dimenzija kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, rashladno sredstvo tekućina i plin, odvod kondenzata |
| Split vanjska jedinica | kapacitet, vod tekućine i plina, širina, dubina, visina | rashladno sredstvo tekućina i plin (na desnoj strani) |
| VRF vanjska jedinica | kapacitet, vod tekućine i plina, širina, dubina, visina | rashladno sredstvo tekućina i plin (na prednjoj strani, nisko) |
| Refnet spojnica | vod tekućine ili plina, opterećenje svake grane, cijev na svakom kraju | ulaz, grana A, grana B |
| Fan coil jedinica | 2-cijevna ili 4-cijevna, duljina, širina, visina, otvori za dovod i povrat, cijev i sustav zavojnice, cijev grijanja, dimenzija kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, ulaz i izlaz zavojnice, ulaz i izlaz grijanja (4-cijevna), odvod kondenzata |

3. Postavite **Visina**: visinu baze jedinice iznad razine. Baza zidne jedinice je njezina donja strana (često 2100 mm); baza kasete je njezina ploha u stropu; a kod refneta je to visina središnje osi njegove cijevi.
4. Kliknite mjesto gdje ide ({{key:R}} je zakreće za 90°).

**Kapacitet** je nazivni rashladni kapacitet jedinice u kW, uz koji stoji Btu/h. Ako su **Vod tekućine** i **Vod plina** ostavljeni na **Iz tablice**, priključci jedinice preuzimaju dimenzije iz tablice za taj kapacitet; odaberite promjer cijevi da biste koristili vlastiti promjer jedinice. Ulaz refneta dimenzioniran je za obje grane zajedno, a svaka grana za svoje opterećenje.

Priključci za rashladno sredstvo rade u oba smjera (toplinska pumpa radi u oba smjera). Odvod kondenzata je dimenzija cijevi kao i svaki drugi odvod.

## Crtanje seta vodova

1. Odaberite dva dijela ({{key:Shift}}+klik na drugi): vanjsku jedinicu i unutarnju jedinicu (jedan split), ili vanjsku jedinicu i refnet, refnet i unutarnju jedinicu, ili dva refneta (VRF).
2. Otvorite {{ui:Izgradnja}} i odaberite {{ui:Set vodova}}.

BimCraft nacrta vodove tekućine i plina između njihovih slobodnih priključaka, izlazeći iz svakog priključka i podižući se do zajedničke visine, od ACR bakra (žareni svitak do 1-5/8 in, vučena cijev iznad toga), kao jedan korak {{ui:Poništi}}. Refnet prima samo svoj vlastiti vod: u svoj ulaz s vanjske strane, a iz grane prema unutarnjim jedinicama. Svaki vod uzima dimenziju svog nizvodnog kraja (unutarnje jedinice ili ulaza refneta); ako priključak drugog kraja ima drugu dimenziju, {{ui:Provjeri veze}} to navodi: tu ide reducir. Dvije unutarnje jedinice zahtijevaju refnet između njih.

Vodove naknadno pomičite kao i svaku cijevnu dionicu; njihovi krajevi ostaju na priključcima. Dionice između etaža crtaju se alatom {{ui:Cijev}}: cijev započeta na priključku rashladnog sredstva preuzima njegov sustav, ACR bakar i dimenziju.

## Promjena tablice setova vodova

Otvorite {{ui:Izgradnja}} i odaberite {{ui:Veličine seta vodova}}. Svaki redak kaže: do ovog kapaciteta (kW), ova tekuća cijev i ova plinska cijev.

| Do | Tekućina | Plin |
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

To su početne, tipične vrijednosti. Promijenite redak, dodajte ili uklonite retke i odaberite {{ui:Spremi}}: tablica se čuva u modelu, pa je svi koji rade na datoteci koriste, a {{ui:Poništi}} je vraća. {{ui:Koristi tipične vrijednosti}} vraća početnu tablicu. Već postavljeni dijelovi zadržavaju svoje priključke dok ih ne promijenite.

## U IFC datoteci

Unutarnje i vanjske jedinice split i VRF sustava su IfcUnitaryEquipment tipa SPLITSYSTEM, a vrstu objekta određuje tekst: "Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit". Fan coil je IfcUnitaryEquipment tipa AIRHANDLER s vrstom objekta "Fan coil unit": IFC4 nema tip za fan coil, a ventilator, zavojnica i filtar za jednu prostoriju upravo opisuje AIRHANDLER. Spojnica refneta je IfcPipeFitting tipa JUNCTION ("Refnet joint"). IFC2X3 datoteke dobivaju IfcEnergyConversionDevice i IfcFlowFitting s odgovarajućim tipovima.

Priključci i vodovi za rashladno sredstvo su u sustavima REFRIGERATION (jedan za vodove tekućine, jedan za plinske vodove), a kondenzat u sustavu DRAINAGE. ACR vodovi imenovani su po vanjskom promjeru. Tablica setova vodova je skup svojstava CadCraft_HvacLineSets na projektu.

Vidi također [MEP oprema s priključcima](topic:mep-equipment), [Spajanje cijevi i kanala na opremu](topic:mep-connections) i [Cijevi i kanali](topic:pipes-and-ducts).
