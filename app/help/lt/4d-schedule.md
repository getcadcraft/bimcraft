---
title: Paleiskite statybos tvarkaraštį modelyje
summary: Atidarykite užduočių sąrašą kaip CSV, susiekite kiekvieną užduotį su elementais pagal savybę ir slinkite per datas, kad matytumėte, kas pastatyta, kas vykdoma ir kas dar nepradėta.
keywords: 4d, tvarkaraštis, statybos seka, laiko juosta, fazavimas, programa, gantt, užduotys, datos, modeliavimas, pažanga, pastatyta, csv, etapas, fazė, darbų paketas, wbs, grupė
from: 1b985a64
---

## Ką darysite

Stebėkite, kaip kyla pastatas: kiekviena tvarkaraščio užduotis susieta su elementais, kuriuos ji statys, ir rodoma diena po dienos.

## Žingsniai

1. Atidarykite IFC modelį ir kairiojoje juostoje atidarykite {{ui:4D tvarkaraštis}}.
2. Spustelėkite {{ui:Atsisiųsti šabloną}}, kad gautumėte užduočių sąrašą su savaite kiekvienam aukštui, ir pakeiskite jį skaičiuoklėje. Arba parašykite savo.
3. Spustelėkite {{ui:Atidaryti užduočių sąrašą…}} ir pasirinkite CSV.
4. Vilkite datos slankiklį arba spustelėkite {{ui:Paleisti}}.

## Užduočių sąrašas

CSV failas su antraštės eilute ir stulpeliais **Task**, **Start**, **Finish**, **Field** ir **Value**. Veikia ir kableliai, ir kabliataškiai.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Datas rašykite kaip YYYY-MM-DD.
- Eilutė susieja užduotį su kiekvienu elementu, kurio **Field** reikšmė tiksliai sutampa su **Value**. Laukas yra savybė, pavyzdžiui Storey, Class, Name, Type, Material, Tag arba GlobalId, arba bet kuri savybė, parašyta kaip jos rinkinys ir pavadinimas: `Pset_WallCommon.FireRating`.
- Tą pačią užduotį kelkite į kelias eilutes su tomis pačiomis datomis, kad susietumėte daugiau elementų.

## Etapai ir darbų paketai

Pridėkite stulpelį **Stage**, stulpelį **Package** arba abu, kad surinktumėte užduotis į etapus ir darbų paketus. Stulpelių pavadinimais taip pat veikia **Phase** ir **WBS**.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Užduotis priklauso vienam etapui ir vienam paketui. Jei vėlesnėje tos pačios užduoties eilutėje nurodomas kitas, ta eilutė išvardijama su savo eilutės numeriu ir praleidžiama.
- Tas pats paketo pavadinimas dviejuose etapuose yra du skirtingi paketai.

Kai sąraše yra grupių, virš datos atsiranda {{ui:Rodyti}} sąrašas. Pasirinkite etapą arba paketą, ir jis paleidžiamas kaip vienas:

- slankiklis ir {{ui:Paleisti}} veikia nuo pirmos grupės pradžios iki paskutinės pabaigos,
- sąraše rodomos ir nuspalvinamos tik grupės užduotys, o viskas už grupės ribų tampa permatoma,
- eilutė po sąrašu parodo, kiek grupės užduočių tą dieną atlikta, vykdoma ir dar laukia,
- {{ui:Pasirinkti jo elementus}} pasirenka visus grupės elementus, skirtus {{ui:Rodyti}}, {{ui:Pjūvis}} arba žiniaraščiui.

Pasirinkite **Visos užduotys**, kad vėl pamatytumėte visą tvarkaraštį.

## Ką turėtumėte matyti

- **Pastatyta**: elementai, kurių visos užduotys baigtos, savo spalvomis.
- **Vykdoma**: elementai, kurių užduotis tą dieną vykdoma, ochros spalva. Užduotis vykdoma nuo savo pradžios datos iki pabaigos datos.
- **Dar nepradėta**: permatomi.
- Elementai, nepriklausantys jokiai užduočiai, lieka kaip buvo. Sąraše rodoma, kiek elementų rado kiekviena užduotis. Eilutės, kurių nepavyko perskaityti arba kurioms nieko nerasta, išvardijamos su savo eilučių numeriais.

## Ryšiai, Gantt diagrama ir MS Project

- Atidarykite Microsoft Project XML failą (`.xml`) arba CSV su stulpeliu `Predecessors`. Ryšiai gali būti pabaiga–pradžia, pradžia–pradžia, pabaiga–pabaiga arba pradžia–pabaiga, kiekvienas su pirmavimu arba vėlavimu dienomis.
- Po užduočių sąrašu Gantt diagrama kiekvieną užduotį piešia kaip juostą, o ryšius žymi rodyklėmis. Kritinio kelio užduotys pažymėtos raudonai. Ryšio ciklas arba nesantis pirmtakas išvardijamas skydelyje.
- {{ui:Įrašyti kaip MS Project XML}} ir {{ui:Įrašyti CSV su ryšiais}} įrašo tvarkaraštį atgal su jo ryšiais.

## Toliau

- [Raskite elementus pagal klasę, pavadinimą ar savybę](topic:find)
- [Nuspalvinkite elementus pagal savybę](topic:color-by-property)
