---
title: Split, VRF i fan coil jedinice
summary: Postavi unutrašnje jedinice zidnog, kasetnog i kanalskog tipa, vanjske jedinice single-split i VRF sistema, refnet spojeve i fan coil jedinice sa 2-cijevnim ili 4-cijevnim priključkom, svaku sa njenim priključcima za rashladno sredstvo, vodu, kondenzat i kanale, i nacrtaj setove vodova između njih, dimenzionisane prema tabeli koju možeš mijenjati.
keywords: split, mini split, minisplit, multi split, vrf, vrv, promjenljivi protok rashladnog sredstva, toplotna pumpa, unutrašnja jedinica, vanjska jedinica, kondenzacijska jedinica, zidna, visoka zidna, kaseta, kanalska, skrivena, fan coil, fcu, 2-cijevna, 4-cijevna, refnet, spojnica grane, Y spojnica, set vodova, lineset, rashladno sredstvo, tečni vod, plinski vod, usisni vod, acr, bakar, kondenzat, hvac, ifcunitaryequipment, splitsystem, ifcpipefitting
from: d102cee8
---

## Šta ćeš uraditi

Postavi jedinice split, multi-split ili VRF sistema i njegove fan coil jedinice u model, zatim ih spoji setovima vodova: tečnim i plinskim vodom u ACR bakru, pričvršćenim za priključke jedinica. Jedinice rade kao i svaki drugi element u [MEP oprema sa priključcima](topic:mep-equipment): ista traka, Svojstva, priključci i [spojevi](topic:mep-connections).

:::note
Ovo je pomoćno sredstvo za crtanje i koordinaciju. Jedinice su generičke forme dimenzionisane vrijednostima koje upisuješ, a ne proizvodi nekog proizvođača. Njihove dimenzije cijevi dolaze iz tabele **tipičnih primjernih vrijednosti** za opremu sa R410A i R32, a ne od nekog proizvođača: uputstvo za ugradnju proizvođača jedinice određuje stvarne dimenzije, a duge dionice ili velike visinske razlike ih mijenjaju. Promijeni tabelu ili upiši dimenzije da odgovaraju jedinicama koje koristiš.
:::

## Postavi jedinicu

1. Uključi {{ui:Crtanje}}, otvori {{ui:Verzija}} i odaberi {{ui:Oprema}}.
2. Odaberi vrstu i postavi njene vrijednosti:

| Vrsta | Postavljaš | Njeni priključci |
|---|---|---|
| Split unutrašnja jedinica, zidna | kapacitet, tečni i plinski vod, dužina, dubina, visina, dimenzija kondenzata | rashladno sredstvo tečno i plinsko, odvod kondenzata (na desnom kraju, uz zid) |
| Split unutrašnja jedinica, kaseta | kapacitet, tečni i plinski vod, panel, kućište, visina, dimenzija kondenzata | rashladno sredstvo tečno i plinsko, odvod kondenzata (na jednoj strani, pri vrhu) |
| Split unutrašnja jedinica, kanalska | kapacitet, tečni i plinski vod, dužina, širina, visina, otvori za dovod i povrat, dimenzija kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, rashladno sredstvo tečno i plinsko, odvod kondenzata |
| Split vanjska jedinica | kapacitet, tečni i plinski vod, širina, dubina, visina | rashladno sredstvo tečno i plinsko (na desnoj strani) |
| VRF vanjska jedinica | kapacitet, tečni i plinski vod, širina, dubina, visina | rashladno sredstvo tečno i plinsko (sprijeda, nisko) |
| Refnet spoj | tečni ili plinski vod, opterećenje svake grane, cijev na svakom kraju | ulaz, grana A, grana B |
| Fan coil jedinica | 2-cijevna ili 4-cijevna, dužina, širina, visina, otvori za dovod i povrat, cijev i sistem zavojnice, cijev za grijanje, dimenzija kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, ulaz i izlaz zavojnice, ulaz i izlaz grijanja (4-cijevna), odvod kondenzata |

3. Postavi **Na visini**: visinu baze jedinice iznad nivoa. Baza zidne jedinice je njena donja strana (često 2100 mm); baza kasete je njeno lice u plafonu; baza refneta je visina središnje linije njegove cijevi.
4. Klikni gdje ide ({{key:R}} je okreće za 90°).

**Kapacitet** je nazivni rashladni kapacitet jedinice u kW, uz koji stoji Btu/h. Kada su **Tečni vod** i **Plinski vod** ostavljeni na **Iz tabele**, priključci jedinice preuzimaju dimenzije iz tabele za taj kapacitet; odaberi dimenziju cijevi da koristiš vlastitu jedinicu. Ulaz refneta je dimenzionisan za obje grane zajedno, a svaka grana za svoje opterećenje.

Priključci za rashladno sredstvo rade u oba smjera (toplotna pumpa radi u oba smjera). Odvod kondenzata je veličina cijevi kao i svaki drugi odvod.

## Nacrtaj set vodova

1. Odaberi dva elementa ({{key:Shift}}+klik na drugi): vanjsku i unutrašnju jedinicu (single split), ili vanjsku jedinicu i refnet, refnet i unutrašnju jedinicu, ili dva refneta (VRF).
2. Otvori {{ui:Verzija}} i odaberi {{ui:Set vodova}}.

BimCraft crta tečne i plinske dionice između njihovih slobodnih priključaka, od svakog priključka do zajedničke visine, u ACR bakru (žareni svitak do 1-5/8 in, izvučena cijev iznad toga), kao jedan korak {{ui:Poništi}}. Refnet prima samo svoj vod, u svoj ulaz sa vanjske strane i iz grane prema unutrašnjim jedinicama. Svaka dionica uzima dimenziju svog nizvodnog kraja (unutrašnje jedinice ili ulaza refneta); tamo gdje priključak drugog kraja ima drugu dimenziju, {{ui:Provjeri veze}} to navodi: tu ide redukcija. Dvije unutrašnje jedinice trebaju refnet između njih.

Dionice poslije pomjeraj kao i svaku dionicu cijevi; njihovi krajevi ostaju na priključcima. Dionice između nivoa crtaju se sa {{ui:Cijev}}: cijev započeta na priključku za rashladno sredstvo preuzima svoj sistem, ACR bakar i svoju dimenziju.

## Promijeni tabelu setova vodova

Otvori {{ui:Verzija}} i odaberi {{ui:Dimenzije setova vodova}}. Svaki red kaže: do ovog kapaciteta (kW), ovaj tečni vod i ovaj plinski vod.

| Do | Tečni | Plinski |
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

Ovo su početne, tipične vrijednosti. Promijeni red, dodaj ili ukloni redove i odaberi {{ui:Spasi}}: tabela se čuva u modelu, pa je svako ko radi na datoteci koristi, a {{ui:Poništi}} je vraća. {{ui:Koristi tipične vrijednosti}} vraća početnu tabelu. Elementi koji su već postavljeni zadržavaju svoje priključke dok ih ne promijeniš.

## U IFC datoteci

Unutrašnje i vanjske jedinice split i VRF sistema su IfcUnitaryEquipment tipa SPLITSYSTEM, pri čemu tip objekta govori koja je ("Split indoor unit, wall-mounted", "Split indoor unit, ceiling cassette", "Split indoor unit, ducted", "Split outdoor unit", "VRF outdoor unit"). Fan coil je IfcUnitaryEquipment tipa AIRHANDLER sa tipom objekta "Fan coil unit": IFC4 nema tip za fan coil, a ventilator, zavojnica i filter za jednu prostoriju upravo je ono što opisuje AIRHANDLER. Refnet spoj je IfcPipeFitting tipa JUNCTION ("Refnet joint"). IFC2X3 datoteke dobijaju IfcEnergyConversionDevice i IfcFlowFitting sa odgovarajućim tipovima.

Rashladni priključci i dionice su u sistemima REFRIGERATION (jedan za tečne vodove, jedan za plinske vodove), a kondenzat u sistemu DRAINAGE. ACR dionice se imenuju po vanjskom prečniku. Tabela setova vodova je skup svojstava CadCraft_HvacLineSets na projektu.

Pogledaj i [MEP oprema sa priključcima](topic:mep-equipment), [Poveži cijevi i kanale sa opremom](topic:mep-connections) i [Cijevi i kanali](topic:pipes-and-ducts).
