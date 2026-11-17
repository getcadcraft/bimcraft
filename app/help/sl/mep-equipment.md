---
title: MEP oprema s priključki
summary: Postavite splošne prezračevalne naprave, ventilatorje, črpalke, kotle, grelnike vode, terminalne enote, difuzorje, rešetke in rezervoarje, dimenzionirane z vrednostmi, ki jih vnesete, vsakega z priključki za cevi in zračne kanale, na katere se priključijo drugi odseki.
keywords: mep, oprema, prezračevalna naprava, ahu, ventilator, vgradni ventilator, črpalka, kotel, grelnik vode, terminalna enota, vav, difuzor, rešetka, registrator, rezervoar, priključek, priključki, povezava, ustnik, velikost ustnika, hvac, vodovod, strojništvo, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Kaj boste naredili

Opremo postavite na konce svojih cevi in zračnih kanalov. Vsak kos je splošna oblika, dimenzionirana z vrednostmi, ki jih vnesete, njegove povezave pa so **priključki**: kje se cev ali zračni kanal priključi, kateri sistem, v katero smer teče pretok in kakšna je velikost. Odseki, narisani iz priključka, prevzamejo njegovo velikost in sistem ter ostanejo nanj pritrjeni: glejte [Povežite cevi in zračne kanale z opremo](topic:mep-connections).

:::note
To je pripomoček za risanje in usklajevanje, dimenzionira ga inženir. Oprema ni proizvajalčev izdelek: brez zmogljivosti, teže in proizvajalčevih velikosti priključkov. Ko potrebujete proizvajalčev model, ga iz svojega programa za MEP prenesite kot IFC.
:::

## Postavitev kosa

1. Vklopite {{ui:Risanje}}, odprite {{ui:Zgradba}} in izberite {{ui:Oprema}}.
2. V vrstici izberite vrsto in vnesite njene velikosti. Vsaka vrsta zahteva svoje:

| Vrsta | Vnesete | Njeni priključki |
|---|---|---|
| Prezračevalna naprava | dolžino, širino, višino; dovodna in odvodna odprtina; velikost cevi grelnika in sistem; velikost odtoka kondenzata | dovodni zračni kanal ven, odvodni zračni kanal noter, grelnik noter in ven, odtok kondenzata |
| Vgradni ventilator | premer, dolžino, sistem | zračni kanal noter in ven |
| Črpalka | velikost cevi, sistem | vtok in iztok |
| Kotel | dolžino, širino, višino, velikost cevi, velikost plina, premer dimnika | dovod ogrevanja ven in povratek noter, plin noter, dimnik ven |
| Grelnik vode | premer, višino, velikost cevi, plin ali elektrika | hladna voda noter, topla voda ven (in plin noter ter dimnik, kadar gori na plin) |
| Terminalna enota | dolžino, širino, višino, okrogel vtok, širino in višino iztoka | dovodni zrak noter in ven |
| Difuzor | lice, ustnik, sistem | njegov ustnik (zrak noter) |
| Rešetka | širino in višino lica, širino in višino ustnika, sistem | njen ustnik (zrak ven v odvodni ali izpušni zračni kanal) |
| Rezervoar | premer, višino, velikost cevi, sistem | vtok na vrhu, iztok blizu dna |
| Radiator | dolžino, višino, globino, velikost cevi, sistem | pretok noter na vrhu enega konca, povratek ven na dnu drugega |
| Konvektor / panelni grelnik | dolžino, višino, globino, velikost cevi, sistem | pretok noter na enem koncu, povratek ven na drugem |
| Družina proizvajalca | družina (glejte [Specifikacije cevi, ventili, lopute in družine proizvajalcev](topic:pipe-specs)) | priključki, ki so bili dodeljeni njegovi družini |

3. Nastavite **Na**, višino spodnjega roba nad etažo. Višina difuzorja ali rešetke je višina njenega lica: vnesite višino stropa.
4. Vnesite **Oznako**, če jo želite (`AHU-1`); naslednji kos iste vrste dobi naslednjo številko.
5. Premaknite kazalec nad tloris: odtis in njegovi priključki mu sledijo. Pritisnite {{key:R}}, da ga zavrtite za 90°. Kliknite, kjer naj stoji.

Velikosti cevi so velikosti jeklenih cevi (ASME B36.10M). Cev, narisana iz črpalke v drugem materialu, prevzame isto nazivno velikost v svojem materialu.

## Spremenite ali odstranite

Izberite jo v tlorisu ali 3D pogledu. Lastnosti prikažejo vse velikosti, ki ste jih vnesli, njeno oznako, X, Y, višino in zasuk ter vsak priključek: njegovo velikost, sistem, smer pretoka in to, ali je kaj povezano. Vsaka sprememba je en korak {{ui:Razveljavi}}; odseki, pritrjeni na njene priključke, gredo z njo. {{key:Delete}} jo odstrani; odseki, ki so bili nanjo pritrjeni, ostanejo, preverjanje povezav pa jih navede.

## V datoteki IFC

Vsaka vrsta je shranjena kot svoj razred IFC: IfcUnitaryEquipment (prezračevalna naprava), IfcFan, IfcPump, IfcBoiler (kotel; grelnik vode je IfcBoiler tipa water z objektnim tipom "Water heater"), IfcAirTerminalBox (terminalna enota), IfcAirTerminal (difuzor, rešetka) in IfcTank, s tipom, ki ga delijo vsi kosi iste vrste, in velikostmi. Datoteke IFC2X3 dobijo IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal in IfcFlowStorageDevice z ustreznimi tipi. Vsak priključek je IfcDistributionPort, postavljen tam, kjer je povezava, obrnjen navzven, z njegovo smerjo pretoka in sistemom; drugi programi iz tega preberejo, kateri odsek se priključi na kateri priključek. Kos se pridruži sistemu vsakega od svojih priključkov in nosi nabore lastnosti knjižničnih elementov, ki jih ima vsak postavljeni knjižnični element.
