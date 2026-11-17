---
title: MEP oprema s priključcima
summary: Postavi generičke ventilacione jedinice, ventilatore, pumpe, kotlove, grijače vode, terminalne jedinice, difuzore, rešetke i rezervoare dimenzionirane vrijednostima koje upišeš, svaki sa cijevnim i kanalnim priključcima na koje se spajaju druge trase.
keywords: mep, oprema, ventilaciona jedinica, ahu, ventilator, inline ventilator, pumpa, kotao, grijač vode, terminalna jedinica, vav, difuzor, rešetka, registar, rezervoar, priključak, priključci, veza, nastavak, veličina grla, hvac, vodovod, mašinski, ifc, ifcpump, ifcairterminal, ifcunitaryequipment
from: df1bf8c5
---

## Šta ćeš uraditi

Postavi opremu na krajeve svojih cijevi i kanala. Svaki komad je generički oblik dimenzioniran vrijednostima koje upišeš, s vezama kao **priključcima**: gdje se cijev ili kanal spaja na njega, koji sistem, kojim smjerom ide protok i koja veličina. Cijevi i kanali nacrtani iz priključka preuzimaju njegovu veličinu i sistem i ostaju za njega fiksirani: vidi [Poveži cijevi i zračne kanale s opremom](topic:mep-connections).

:::note
Ovo je pomoćno sredstvo za crtanje i koordinaciju, a dimenzioniše ga inženjer. Oprema nije proizvod nekog proizvođača: nema kapaciteta, težina ni proizvođačevih veličina priključaka. Kad ti treba model proizvođača, uvezi ga iz svog MEP programa kao IFC.
:::

## Postavljanje komada

1. Uključi {{ui:Draw}}, otvori {{ui:Build}} i izaberi {{ui:Equipment}}.
2. U traci izaberi vrstu i upiši njene dimenzije. Svaka vrsta traži svoje:

| Vrsta | Upisuješ | Njeni priključci |
|---|---|---|
| Ventilaciona jedinica | dužina, širina, visina; otvori za dovod i povrat; veličina cijevi grijača i sistem; veličina kondenzata | izlaz dovodnog kanala, ulaz povratnog kanala, ulaz i izlaz grijača, odvod kondenzata |
| Inline ventilator | prečnik, dužina, sistem | ulaz i izlaz kanala |
| Pumpa | veličina cijevi, sistem | ulaz i izlaz |
| Kotao | dužina, širina, visina, veličina cijevi, veličina gasa, prečnik dimnjaka | izlaz grijanja za dovod i ulaz za povrat, ulaz gasa, izlaz dimnjaka |
| Grijač vode | prečnik, visina, veličina cijevi, gas ili električni | ulaz hladne vode, izlaz tople vode (i ulaz gasa i dimnjak kad gori na gas) |
| Terminalna jedinica | dužina, širina, visina, okrugli ulaz, širina i visina izlaza | ulaz i izlaz dovodnog zraka |
| Difuzor | lice, grlo, sistem | njegovo grlo (ulaz zraka) |
| Rešetka | širina i visina lica, širina i visina grla, sistem | njeno grlo (izlaz zraka prema povratnom ili odsisnom kanalu) |
| Rezervoar | prečnik, visina, veličina cijevi, sistem | ulaz na vrhu, izlaz pri dnu |
| Radijator | dužina, visina, dubina, veličina cijevi, sistem | polazni vod ulazi na vrhu jednog kraja, povrat izlazi pri dnu drugog |
| Konvektor / panelni grijač | dužina, visina, dubina, veličina cijevi, sistem | polazni vod ulazi na jednom kraju, povrat izlazi na drugom |
| Porodica proizvođača | porodica (vidi [Specifikacije cijevi, ventili, zaklopke i porodice proizvođača](topic:pipe-specs)) | priključci koje je njena porodica dobila |

3. Postavi **Na visini**, visinu njene baze iznad nivoa. Visina difuzora ili rešetke je visina njihovog lica: upiši visinu plafona.
4. Upiši **Oznaku** ako želiš (`AHU-1`); sljedeći komad iste vrste dobija sljedeći broj.
5. Pomjeri pokazivač nad osnovu: otisak i njegovi priključci prate ga. Pritisni {{key:R}} da ga okreneš za 90°. Klikni gdje ide.

Veličine cijevi su veličine čeličnih cijevi (ASME B36.10M). Cijev nacrtana iz pumpe u drugom materijalu preuzima istu nazivnu veličinu u svom materijalu.

## Promjena ili uklanjanje

Izaberi ga u osnovi ili 3D pogledu. Svojstva prikazuju svaku dimenziju koju si upisao, njegovu oznaku, X, Y, visinu i okret, i svaki priključak: njegovu veličinu, sistem, kojim smjerom ide protok i je li nešto povezano. Svaka promjena je jedan korak {{ui:Undo}}; trase fiksirane za njegove priključke se pomjeraju s njim. {{key:Delete}} ga uklanja; trase koje su bile fiksirane za njega ostaju, a provjera veza ih navodi.

## U IFC fajlu

Svaka vrsta se čuva kao svoja IFC klasa: IfcUnitaryEquipment (ventilaciona jedinica), IfcFan (ventilator), IfcPump (pumpa), IfcBoiler (kotao; grijač vode je IfcBoiler tipa water s tipom objekta "Water heater"), IfcAirTerminalBox (terminalna jedinica), IfcAirTerminal (difuzor, rešetka) i IfcTank (rezervoar), s tipom zajedničkim za svaki komad iste vrste i dimenzija. IFC2X3 fajlovi dobijaju IfcEnergyConversionDevice, IfcFlowMovingDevice, IfcFlowController, IfcFlowTerminal i IfcFlowStorageDevice s odgovarajućim tipovima. Svaki priključak je IfcDistributionPort postavljen na mjestu veze, okrenut prema van, sa svojim smjerom protoka i sistemom; drugi programi čitaju koja trasa je povezana na koji priključak. Komad se pridružuje sistemu svakog od svojih priključaka i nosi skupove stavki biblioteke koje ima svaka postavljena stavka biblioteke.
