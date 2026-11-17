---
title: Pustite raspored izgradnje na modelu
summary: Otvorite listu zadataka kao CSV, povežite svaki zadatak s elementima preko svojstva i krećite se kroz datume da vidite šta je izgrađeno, šta je u toku i šta još nije počelo.
keywords: 4d, raspored, slijed izgradnje, vremenska linija, faziranje, program, gantt, zadaci, datumi, simulacija, napredak, izgrađeno, csv, faza, etapa, radni paket, wbs, grupa
from: 1b985a64
---

## Šta ćete raditi

Pratite kako zgrada raste: svaki zadatak u vašem rasporedu povezan je s elementima koje gradi i prikazan dan po dan.

## Koraci

1. Otvorite IFC model i otvorite {{ui:4D raspored}} u lijevom panelu.
2. Kliknite {{ui:Preuzmi šablon}} za listu zadataka sa jednom sedmicom po spratu i promijenite je u tabelarnom programu. Ili napišite svoju.
3. Kliknite {{ui:Otvori listu zadataka…}} i izaberite CSV.
4. Prevucite klizač datuma ili kliknite {{ui:Pokreni}}.

## Lista zadataka

CSV sa redom zaglavlja i kolonama **Task**, **Start**, **Finish**, **Field** i **Value**. Zarezi ili tačka-zarezi rade podjednako.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Datume pišite kao YYYY-MM-DD.
- Red povezuje zadatak sa svakim elementom čije polje **Field** ima tačno tu vrijednost **Value**. Polje je svojstvo kao što su Storey, Class, Name, Type, Material, Tag ili GlobalId, ili bilo koje svojstvo zapisano kao njegov skup i naziv: `Pset_WallCommon.FireRating`.
- Ponovite zadatak u više redova, s istim datumima, da s njim povežete više elemenata.

## Faze i radni paketi

Dodajte kolonu **Stage**, kolonu **Package** ili obje da zadatke grupišete u faze i radne pakete. Phase i WBS rade i kao nazivi kolona.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Zadatak pripada jednoj fazi i jednom paketu. Ako kasniji red istog zadatka navede drugi, taj red se navodi uz broj reda i izostavlja.
- Isti naziv paketa u dvije faze su dva paketa.

Kada lista ima grupe, iznad datuma se pojavljuje lista {{ui:Prikaži}}. Izaberite fazu ili paket i pušta se kao cjelina:

- klizač i {{ui:Pokreni}} idu od prvog početka grupe do posljednjeg završetka,
- prikazuju se i boje samo zadaci grupe, a sve izvan grupe je prozirno,
- red ispod liste kaže koliko je njenih zadataka završeno, koliko je u toku, a koliko tek slijedi na tom datumu,
- {{ui:Odaberi njegove elemente}} odabire svaki element grupe, za {{ui:Prikaži}}, {{ui:Presjek}} ili specifikaciju.

Izaberite **Svaki zadatak** da ponovo vidite cijeli raspored.

## Šta treba da vidite

- **Izgrađeno**: elementi čiji su svi zadaci završeni, u svojim bojama.
- **U toku**: elementi sa zadatkom koji je tog dana u toku, u boji ocker. Zadatak je u toku od datuma početka do datuma završetka.
- **Nije počelo**: prozirno.
- Elementi bez zadatka ostaju kakvi jesu. Lista pokazuje koliko je elemenata pronašao svaki zadatak. Redovi koji se nisu mogli očitati ili nisu ništa pronašli navedeni su uz brojeve redova.

## Veze, Gantov dijagram i MS Project

- Otvorite datoteku Microsoft Project XML (`.xml`) ili CSV koji ima kolonu `Predecessors`. Veze mogu biti završetak-početak, početak-početak, završetak-završetak ili početak-završetak, svaka s prednošću ili kašnjenjem u danima.
- Ispod liste zadataka, Gantov dijagram crta svaki zadatak kao traku sa strelicama za veze. Zadaci na kritičnom putu su crveni. Petlja veze ili prethodnik koji ne postoji navedeni su u panelu.
- {{ui:Spasi kao MS Project XML}} i {{ui:Spasi CSV s vezama}} zapisuju raspored nazad sa njegovim vezama.

## Dalje

- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente prema svojstvu](topic:color-by-property)
