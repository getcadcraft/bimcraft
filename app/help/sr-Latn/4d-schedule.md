---
title: Pusti raspored gradnje na modelu
summary: Otvorite spisak zadataka kao CSV, povežite svaki zadatak sa elementima preko svojstva i pomerajte se kroz datume da vidite šta je izgrađeno, šta je u toku i šta još nije počelo.
keywords: 4d, raspored, redosled gradnje, vremenska linija, faziranje, program, gantogram, zadaci, datumi, simulacija, napredak, izgrađeno, csv, etapa, faza, paket radova, wbs, grupa
from: 1b985a64
---

## Šta ćete uraditi

Pratite kako zgrada raste: svaki zadatak u rasporedu povezan je sa elementima koje gradi, prikazan dan po dan.

## Koraci

1. Otvorite IFC model i otvorite {{ui:Raspored 4D}} u levom panelu.
2. Kliknite {{ui:Preuzmi šablon}} za spisak zadataka sa jednom nedeljom po spratu i izmenite ga u tabelarnom programu. Ili napišite sopstveni.
3. Kliknite {{ui:Otvori spisak zadataka…}} i izaberite CSV.
4. Prevucite klizač datuma ili kliknite {{ui:Pusti}}.

## Spisak zadataka

CSV sa redom zaglavlja i kolonama **Task**, **Start**, **Finish**, **Field** i **Value**. Zarezi ili tačka-zarezi rade podjednako.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Datume pišite u formatu GGGG-MM-DD.
- Red povezuje zadatak sa svakim elementom čije **Field** ima tačno tu **Value**. Polje je svojstvo, kao Storey, Class, Name, Type, Material, Tag ili GlobalId, ili bilo koje svojstvo zapisano kao njegov skup i naziv: `Pset_WallCommon.FireRating`.
- Ponovite zadatak u više redova, sa istim datumima, da biste povezali više elemenata.

## Etape i paketi radova

Dodajte kolonu **Stage**, kolonu **Package** ili obe da biste zadatke grupisali u etape i pakete radova. Phase i WBS rade i kao nazivi kolona.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Zadatak pripada jednoj etapi i jednom paketu. Ako kasniji red istog zadatka navede drugi, taj red se navodi sa svojim brojem reda i izostavlja.
- Isto ime paketa u dve etape su dva paketa.

Kada spisak ima grupe, iznad datuma pojavljuje se lista {{ui:Prikaži}}. Izaberite etapu ili paket i pušta se kao jedna celina:

- klizač i {{ui:Pusti}} idu od prvog početka grupe do poslednjeg završetka,
- navode se i boje samo zadaci grupe, a sve izvan grupe je providno,
- red ispod liste kaže koliko je njenih zadataka završeno, u toku i tek predstoji na tom datumu,
- {{ui:Izaberi njegove elemente}} bira svaki element grupe, za {{ui:Prikaži}}, {{ui:Presek}} ili specifikaciju.

Izaberite **Svaki zadatak** da ponovo vidite ceo raspored.

## Šta treba da vidite

- **Izgrađeno**: elementi čiji su svi zadaci završeni, u sopstvenim bojama.
- **U toku**: elementi sa zadatkom koji je tog dana u toku, u boji okera. Zadatak je u toku od datuma početka do datuma završetka.
- **Nije počelo**: providno.
- Elementi bez zadatka ostaju kakvi jesu. Spisak pokazuje koliko je elemenata našao svaki zadatak. Redovi koji nisu mogli da se pročitaju ili nisu ništa našli navode se sa brojevima redova.

## Veze, gantogram i MS Project

- Otvorite datoteku Microsoft Project XML (`.xml`) ili CSV koji ima kolonu `Predecessors`. Veze mogu biti kraj–početak, početak–početak, kraj–kraj ili početak–kraj, svaka sa pomakom unapred ili kašnjenjem u danima.
- Ispod spiska zadataka, gantogram crta svaki zadatak kao traku sa strelicama za veze. Zadaci na kritičnoj putanji su crveni. Petlja veza ili prethodnik koji ne postoji navode se u panelu.
- {{ui:Sačuvaj kao MS Project XML}} i {{ui:Sačuvaj CSV sa vezama}} upisuju raspored nazad sa vezama.

## Dalje

- [Pronađi elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente po svojstvu](topic:color-by-property)
