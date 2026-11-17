---
title: Razpredelnice, kote in PDF tlorisa
summary: Razpredelnice vrat, oken, sten in prostorov, ki se spreminjajo med risanjem, kote na tlorisu ter shranjevanje tlorisa etaže kot PDF pri standardnem merilu.
keywords: razpredelnica, razpredelnica vrat, razpredelnica oken, razpredelnica sten, razpredelnica prostorov, količine, predizmere, površina, csv, preglednica, kote, kota, natisni, pdf, izris, merilo, 1/4", 1:50, list
from: d97cd16e
---

## Kaj boste naredili

Vidite, kaj se sešteje iz stavbe, ki jo rišete, medtem ko jo rišete: koliko vrat in oken vsake velikosti, koliko stene vsake vrste, kako velik je vsak prostor. Na tloris postavite kote in ga shranite kot PDF za tisk ali pošiljanje.

## Razpredelnice

Ko je {{ui:Risanje}} vklopljeno, **Razpredelnice** v levi plošči prikazujejo po eno tabelo naenkrat:

- **Vrata** in **Okna**: vsako po svoji oznaki (D1, D2 … in W1 …, podano ob postavitvi), vrsti, širini, višini (in parapetu), etaži in steni, v kateri je.
- **Stene po vrsti**: za vsako vrsto stene število sten, njihova debelina, skupna dolžina in površina strani kot **Bruto površina**, **Odbitki** in **Neto površina**, z vsoto.
- **Prostori**: številka, ime, etaža, površina in obseg, z vsoto površine.
- **Tla**: vsaka tla z etažo, vrsto in debelino ter njihovo bruto površino, odbitki in neto površino.
- **Obdelave**: vsak sloj obdelave vrst sten (po materialu in strani stene) ter stropi, s številom ploskev in bruto, odbitki in neto.
- **Vrste sten: podatki za predizmere**: kar je bilo enkrat vneseno pri vsaki vrsti stene (enota, malta, stopnja), s številom sten, njihovo dolžino in neto površino ter stopnjo, pomnoženo z izmerjeno količino. Glejte [Zidne sestave](topic:wall-assemblies).

- **Obdelave po prostoru**, **Obdelave po steni**, **Obdelave po coni** in **Količine obdelav**: kaj pokriva vsak prostor, z površinami, številom ploščic vključno z rezi in prostorninami podlage. Glejte [Obdelave prostorov in razpredelnice obdelav](topic:room-finishes).
- Vaše lastne **nastavitve**: razpredelnica, ki ste jo združili, seštevali in shranili pod imenom. Glejte [Razporedite, shranite in izvozite razpredelnico](topic:schedule-layouts).

Tabele se spremenijo ob vsakem urejanju. Kliknite vrstico ali posamezno številko, da izberete elemente, iz katerih izhaja. {{ui:Prenesi CSV}} shrani tabelo, da jo odprete v preglednici; **Prenesi Excel** in **Kopiraj za Google Sheets** sta pod njo. **Obdelave prostorov** in **Specifikacija** ([Napišite specifikacijo iz modela](topic:specification)) se odpreta z istega mesta.

## Površina in prostornina vsakega sloja

Izberite **Sloji: površina in prostornina** v seznamu Razpredelnice. Ima eno vrstico za vsak sloj vsake vrste sten, tal, strehe in stropa v uporabi: element, vrsto in njen LOD, sloj (štet od zunanje strani stene, od vrha tal, strehe ali stropa), njegov material in funkcijo, debelino, koliko elementov, **neto površino** in **prostornino**.

- Površina je neto površina elementov te vrste, izmerjena natanko kot v Stene po vrsti, Tla in Obdelave, po metodi merjenja projekta. Streha se meri po nagibu; nobena metoda merjenja nima pravila za strehe.
- Prostornina je ta površina, pomnožena z lastno debelino sloja.
- Tla, streha ali strop brez vrste so ena vrstica: en sloj lastne debeline.
- Zračna votlina je navedena s svojo površino in izpuščena iz skupne prostornine. Membrana ima površino in nima prostornine.

Kliknite vrstico, da izberete njene elemente. {{ui:Prenesi CSV}} shrani tabelo.

## Kako se merijo površine

Vsaka površina so tri števila, ki se seštejejo: bruto minus odbitki je neto. Pravilo je zapisano nad vsako od teh tabel, in je eno samo pravilo: razpredelnice, količine, shranjene v datoteki IFC, in predizmere, poslane v TakeoffCraft, vse uporabljajo isto.

- **Stena**: bruto je ena stran stene, njena dolžina vzdolž osrednje črte, pomnožena z njeno višino (dejanska ploskev pri steni z oblikovanim vrhom ali podnožjem). Vsaka vrata, okno in druga odprtina se odštejejo, širina krat višina, vsaka enkrat.
- **Tla ali strop**: bruto je površina znotraj njegovega obrisa. Vsaka odprtina in izrez znotraj njega se odšteje enkrat.
- **Obdelava stene**: vsak sloj obdelave vrste stene pokriva eno stran stene, izmerjeno kot stena, z istimi odštetimi odprtinami. Obdelava je sloj stene: navedena je pod Obdelave in ni dodana površini stene, zato se stena z vrati nikoli ne šteje dvakrat.

To je **privzeta vrednost CadCraft**: vsaka odprtina se odšteje, ne glede na velikost; dolžine sten so vzdolž osrednje črte; odboji se ne merijo. To uporablja vsak projekt, dokler ne izberete druge metode.

## Izberite metodo merjenja

Nad razpredelnico **Metoda merjenja** navaja metode, ki so priložene BimCraft, **Naloži datoteko metode** pa vzame metodo vaše pisarne. Izbira se shrani v datoteki IFC kot en korak razveljavitve, trije elementi pa ji sledijo hkrati: razpredelnice, neto količine, shranjene v datoteki, in predizmere, poslane v TakeoffCraft. Pravilo nad vsako tabelo se nato začne z metodo, njenim virom, datumom, ko je bil vir prebran, in besedami **Nepreverjeno s strani količinskega inženirja**.

Metoda je majhna datoteka dejstev, ne programska koda. Za vsako količino pove:

- **najmanjšo odprtino, ki se odšteje**: na primer odprtina 0.5 m² ali manj ostane v površini stene;
- **kako se merijo stiki sten**: vzdolž osrednje črte; ali pri steni, ki se konča ob drugi, merjeno do lica te stene; ali pri vsakem koncu stene, ki se stika z drugo steno, merjeno do bližnjega lica;
- **ali se merijo odboji** za obdelavo (vrnitve obdelave v odprtine), kot površina ali, kadar so plitvi, kot dolžina. Globina odboja se vzame kot polovica debeline stene;
- **kaj pove o zidovju**: kako se meri in kakršen koli dodatek za odpadek ali malto, ki ga navaja.

Metode, ki so priložene BimCraft:

| Metoda | Stene: najmanjša odprtina, ki se odšteje | Obdelave sten | Stropi | Zidovje |
|---|---|---|---|---|
| Privzeta metoda CadCraft | vsaka odprtina | vsaka odprtina | vsak izrez | brez dodatkov |
| RICS NRM 2 (Združeno kraljestvo), 2. izdaja 2021 | 0.5 m² ali manj ostane v | 1 m² ali manj ostane v | 1 m² ali manj ostane v | po površini; ni navedenih odstotkov |
| AAQS Standard Method for Africa 2015 | 0.5 m² ali manj ostane v | 0.5 m² ali manj ostane v | 0.5 m² ali manj ostane v | po površini; izmerjeno neto, 0 % odpadka |
| IS 1200 (Indija), 1976, zidarstvo | 0.1 m² ali manj ostane v | privzeto (glejte spodaj) | privzeto | po prostornini |
| BIA Technical Note 10 (Združene države), 2009 | vsaka odprtina | privzeto | privzeto | 5 % odpadka na enote, 15 % na malto |

Pred uporabo metode preberite te omejitve:

- **Noben količinski inženir ni preveril nobene od njih.** Vsako je naredil tako, da je prebral navedeni vir in zapisal njegove številke s klavzulo, iz katere izhajajo. Če ste količinski inženir in jo lahko preverite, bi se avtorji aplikacije veselili vašega odziva.
- Kjer pravila ni bilo mogoče prebrati iz vira, metoda za to navede **ni potrjeno** in uporabi se privzeta vrednost CadCraft. Nobena metoda, priložena BimCraft, nima potrjenega pravila za stike sten, odboje ali tla, zato se te pod vsemi merijo na privzeti način.
- IS 1200 odšteje odprtine v ometu v treh pasovih. Datoteka metode zaenkrat ne more držati pasov, zato obdelave sten pod to metodo uporabljajo privzeto vrednost, pravilo pa to pove.
- Južnoafriški standardni sistem merjenja gradbenih del **ni** med njimi: njegovo besedilo ni bilo mogoče prebrati. Metoda AAQS za Afriko pravi, da temelji na izdaji tega sistema iz leta 1991, vendar je to drug dokument.
- BIA Technical Note 10 je industrijska ocenjevalna opomba, ne standardna metoda merjenja.
- Odprtina, ki je natanko najmanjše velikosti, sledi besedilu metode („ne presega“, „manj kot“). Velikosti znotraj 2 dela na 10 000 od nje štejejo kot natanko ona.
- Pod metodo se neto površina stene ter neto površina tal ali stropa v datoteki ravnata po metodi, nabor količin pa jo navede. Bruto površine in prostornine v datoteki ostanejo, kakor so narisane.

**Opombe k tej metodi** pod izbirnikom povedo, kaj vsak vir pusti odprto. **Odpri vir** pelje do dokumenta.

### Metoda vaše pisarne

Datoteka metode je JSON v obliki `cadcraft-measurement-method`. Vsaka vrednost v njej navaja klavzulo, iz katere izhaja; vrednost brez klavzule je zavrnjena. Datoteka se preveri ob nalaganju, napačno polje se imenuje in ničesar se ne uporabi iz datoteke, ki ne opravi preverjanja. Ko je izbrana, se datoteka shrani v projekt, zato se projekt na drugem računalniku odpre enako. Njen id je navadno ime, ki ga izberete sami (ne sme biti id metode, ki je priložena aplikaciji).

## Opeka, bloki in malta

**Vrste sten: podatki za predizmere** šteje enote in malto vsake vrste stene, katere enota ima dolžino in višino (glejte [Dajte vrsti podatke za predizmere](topic:wall-assemblies#give-a-type-its-takeoff-data)). To so formule, točno kot so izračunane:

- **Enote na površino enega lista** = 1 / ((dolžina enote + spoj) × (višina enote + spoj)). Opeka 215 × 65 mm z 10 mm spojem: 1 / (225 × 75 mm) = 59.26 na m².
- **Širine enot čez list** = (debelina lista + spoj) / (širina enote + spoj), zaokroženo na celo število, najmanj 1. List 102.5 mm iz opek 102.5 mm je 1; 215 mm stena iz istih opek je 2.
- **Enote** = enote na površino × širine enot čez × neto površina lica stene, seštete po zidarskih listih vrste.
- **Enote za naročilo** = enote × (1 + odpadek % / 100), zaokroženo navzgor na celo enoto. Odpadek je tisti, vpisan na vrsti; če ni vpisan, tisti iz metode, če ga navaja; sicer 0 %.
- **Malta** = neto površina × debelina lista, minus prostornina enot (enote × dolžina × višina × širina), nato plus dodatni odstotek, vpisan na vrsti za žepe (frogs) ali perforacije, nato plus dodatek metode, če ga navaja. Potrebuje širino enote.

Predpostavlja se: vsak zidarski list vrste je zgrajen iz ene enote vrste; list, debelejši od ene širine enote, se šteje kot toliko širin enot, vsaka kot list, položen po dolgem, zato rezane enote, zaključne enote in posebne oblike niso štete posebej; kjer nobena plast ni označena kot zgrajena iz enote, se za liste vzamejo jedrne plasti, in opomba nad tabelo to pove. **Znesek** je stopnja, pomnožena s tem, na kar se stopnja nanaša, kar je lahko zdaj tudi enota za naročilo, 1000 enot za naročilo ali m³ malte.

Oznake so oznake IFC elementov: spremenite jo v **Lastnostih** (Oznaka) in razpredelnica sledi. Za vsak model IFC, narisan ali ne, [Seštejte količine, našteite elemente in razpredelite prostore](topic:quantity-totals) sešteje katerokoli lastnost.

## Kote

Tloris prikazuje dolžino vsake narisane stene vzdolž njenega zunanjega lica (notranja stena: vzdolž enega lica) in, za steno z vrati ali okni, verigo od vogalov do vsake odprtine. {{ui:Kote}} v vrstici modela jih skrije in spet prikaže.

## Shranite tloris kot PDF

1. Prikažite želeno etažo in nastavite enote na plošči **Etaže**.
2. Kliknite {{ui:Natisni}} v vrstici modela.
3. BimCraft shrani „<datoteka> — <etaža>.pdf“: tloris v črno-belem pri največjem standardnem merilu, ki se prilega strani (1/4" = 1'-0", 1/8" = 1'-0" … na Letter v čevljih in palcih; 1:50, 1:100 … na A4 v milimetrih), z zapolnjenimi stenami, vrati, okni, imeni prostorov in površinami, kotami ter naslovno vrstico z etažo, datoteko, višino reza, datumom in merilom.

PDF je narisan kot črte in besedilo, zato ostane ostro pri katerikoli povečavi, njegovo besedilo pa je mogoče iskati.

## Dobro je vedeti

- Razpredelnice naštevajo, kar so naredila orodja za risanje. Vrata in okna iz drugega programa se namesto tega prikažejo v {{ui:Skupne količine}}.
- Da ponudite delo, količine predajte TakeoffCraft: glejte [Količine v TakeoffCraft](topic:takeoff). Prenos CSV ostane za preglednico.
