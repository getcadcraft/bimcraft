---
title: Prikaz rasporeda gradnje na modelu
summary: Otvorite popis zadataka kao CSV, povežite svaki zadatak s elementima prema svojstvu i pomičite se kroz datume da vidite što je izgrađeno, što je u tijeku i što još nije počelo.
keywords: 4d, raspored, slijed gradnje, vremenska crta, faziranje, program, gantt, zadaci, datumi, simulacija, napredak, izgrađeno, csv, etapa, faza, paket radova, wbs, grupa
from: 1b985a64
---

## Što ćete učiniti

Pratite kako se zgrada gradi: svaki zadatak u rasporedu povezan je s elementima koje gradi, prikazan dan po dan.

## Koraci

1. Otvorite IFC model i otvorite {{ui:4D schedule}} u lijevoj ploči.
2. Kliknite {{ui:Download a template}} za popis zadataka s tjednom po etaži i promijenite ga u proračunskoj tablici. Ili napišite svoj.
3. Kliknite {{ui:Open a task list…}} i odaberite CSV.
4. Povucite klizač datuma ili kliknite {{ui:Play}}.

## Popis zadataka

CSV s recima zaglavlja i stupcima **Task**, **Start**, **Finish**, **Field** i **Value**. Rade i zarezi i točka-zarezi.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Razina 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Krov | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Krov | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Pišite datume kao YYYY-MM-DD.
- Redak povezuje zadatak sa svakim elementom čije **Field** ima točno tu **Value** vrijednost. Polje je svojstvo, kao što su Storey, Class, Name, Type, Material, Tag ili GlobalId, ili bilo koje svojstvo zapisano kao njegov skup i naziv: `Pset_WallCommon.FireRating`.
- Ponovite zadatak u više redaka, s istim datumima, da biste povezali više elemenata.

## Faze i paketi radova

Dodajte stupac **Stage**, stupac **Package** ili oba da zadatke grupirate u faze i pakete radova. Phase i WBS također rade kao nazivi stupaca.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Ploča razine 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Konstrukcija | Okvir |
| Zidovi razine 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Konstrukcija | Okvir |
| Vrata | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Završni radovi | Stolarija |

- Zadatak pripada jednoj fazi i jednom paketu. Ako kasniji redak istog zadatka navede drugi, taj se redak navodi s brojem retka i izostavlja.
- Isti naziv paketa u dvjema fazama čine dva paketa.

Kad popis ima grupe, iznad datuma pojavljuje se popis {{ui:Show}}. Odaberite fazu ili paket i reproducira se kao jedna cjelina:

- klizač i {{ui:Play}} idu od prvog početka grupe do posljednjeg završetka,
- navode se i prikazuju samo zadaci grupe, a sve izvan grupe je prozirno,
- redak ispod popisa kaže koliko je njezinih zadataka završeno, koliko je u tijeku, a koliko tek slijedi na taj datum,
- {{ui:Select its elements}} odabire sve elemente grupe, za {{ui:Show}}, {{ui:Section}} ili specifikaciju.

Odaberite **Svi zadaci** da ponovno vidite cijeli raspored.

## Što ćete vidjeti

- **Izgrađeno**: elementi čiji su svi zadaci završeni, u vlastitim bojama.
- **U tijeku**: elementi sa zadatkom koji je tog dana u tijeku, u boji oker. Zadatak je u tijeku od datuma početka do datuma završetka.
- **Nije započeto**: prozirno.
- Elementi bez zadatka ostaju kakvi jesu. Popis pokazuje koliko je elemenata pronašao svaki zadatak. Retci koje nije bilo moguće pročitati ili za koje nije bilo ničega pronađeno navode se s brojevima redaka.

## Veze, Gantt dijagram i MS Project

- Otvorite datoteku Microsoft Project XML (`.xml`) ili CSV koji ima stupac `Predecessors`. Veze mogu biti završetak na početak, početak na početak, završetak na završetak ili početak na završetak, svaka s prednošću ili kašnjenjem u danima.
- Ispod popisa zadataka Gantt dijagram crta svaki zadatak kao traku sa strelicama za veze. Zadaci na kritičnom putu su crveni. Petlja veze ili prethodnik koji ne postoji navode se na ploči.
- {{ui:Save as MS Project XML}} i {{ui:Save CSV with links}} zapisuju raspored natrag s vezama.

## Dalje

- [Pronađite elemente po klasi, nazivu ili svojstvu](topic:find)
- [Obojite elemente prema svojstvu](topic:color-by-property)
