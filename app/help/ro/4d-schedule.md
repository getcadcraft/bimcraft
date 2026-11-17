---
title: Redarea unui grafic de execuție pe model
summary: Deschideți o listă de sarcini ca CSV, legați fiecare sarcină de elemente printr-o proprietate și parcurgeți datele pentru a vedea ce este construit, ce este în lucru și ce nu a început încă.
keywords: 4d, grafic, secvență de execuție, cronologie, etapizare, program, gantt, sarcini, date, simulare, progres, construit, csv, etapă, fază, pachet de lucru, wbs, grup
from: 1b985a64
---

## Ce veți face

Urmăriți cum se ridică clădirea: fiecare sarcină din grafic legată de elementele pe care le construiește, afișată zi cu zi.

## Pași

1. Deschideți un model IFC și deschideți {{ui:Planificare 4D}} în panoul din stânga.
2. Faceți clic pe {{ui:Descărcare șablon}} pentru o listă de sarcini cu o săptămână pe etaj și modificați-o într-o foaie de calcul. Sau scrieți una proprie.
3. Faceți clic pe {{ui:Deschidere listă de sarcini…}} și alegeți CSV-ul.
4. Trageți cursorul de date sau faceți clic pe {{ui:Redare}}.

## Lista de sarcini

Un CSV cu un rând de antet și coloanele **Task**, **Start**, **Finish**, **Field** și **Value**. Virgulele sau punct și virgula funcționează.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Nivel 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Acoperiș | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Acoperiș | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Scrieți datele în formatul `YYYY-MM-DD`.
- Un rând leagă sarcina de fiecare element al cărui **Field** are exact acea **Value**. Câmpul este o proprietate precum Storey, Class, Name, Type, Material, Tag sau GlobalId, sau orice proprietate scrisă cu setul și numele ei: `Pset_WallCommon.FireRating`.
- Repetați o sarcină pe mai multe rânduri, cu aceleași date, pentru a lega mai multe elemente de ea.

## Etape și pachete de lucru

Adăugați o coloană **Stage**, o coloană **Package** sau pe amândouă, pentru a grupa sarcinile în etape și pachete de lucru. Phase și WBS funcționează și ele ca nume de coloane.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Placa nivelului 1 | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structură | Cadru |
| Pereții nivelului 1 | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structură | Cadru |
| Uși | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Finisaje | Tâmplărie |

- O sarcină aparține unei etape și unui pachet. Dacă un rând ulterior al aceleiași sarcini numește alt pachet, rândul respectiv este listat cu numărul liniei și este omis.
- Același nume de pachet în două etape înseamnă două pachete.

Când lista are grupuri, deasupra datei apare o listă {{ui:Afișare}}. Alegeți o etapă sau un pachet și se redă ca un tot:

- cursorul și {{ui:Redare}} rulează de la prima dată de început a grupului până la ultima dată de finalizare,
- sunt listate și colorate doar sarcinile grupului, iar tot ce este în afara grupului apare transparent,
- linia de sub listă arată câte dintre sarcinile grupului sunt finalizate, în lucru și de executat la data respectivă,
- {{ui:Selectare elementele sale}} selectează fiecare element al grupului, pentru {{ui:Afișare}}, {{ui:Secțiune}} sau un tabel.

Alegeți **Toate sarcinile** pentru a vedea din nou întregul grafic.

## Ce ar trebui să vedeți

- **Construit**: elementele ale căror sarcini sunt toate finalizate, în propriile culori.
- **În lucru**: elementele cu o sarcină în desfășurare în ziua respectivă, în ocru. O sarcină este în desfășurare din data de început până la data de finalizare inclusiv.
- **Neînceput**: transparent.
- Elementele care nu sunt în nicio sarcină rămân așa cum sunt. Lista arată câte elemente a găsit fiecare sarcină. Rândurile care nu au putut fi citite sau nu au găsit nimic sunt listate cu numerele lor de linie.

## Legături, graficul Gantt și MS Project

- Deschideți un fișier XML Microsoft Project (`.xml`) sau un CSV care are o coloană `Predecessors`. Legăturile pot fi de la sfârșit la început, de la început la început, de la sfârșit la sfârșit sau de la început la sfârșit, fiecare cu un avans sau o întârziere în zile.
- Sub lista de sarcini, graficul Gantt desenează fiecare sarcină ca o bară, cu săgeți pentru legături. Sarcinile de pe drumul critic sunt roșii. O buclă de legături sau un predecesor inexistent este listat în panou.
- {{ui:Salvare ca XML MS Project}} și {{ui:Salvare CSV cu legături}} scriu graficul înapoi, cu legăturile sale.

## Următorul

- [Găsirea elementelor după clasă, nume sau proprietate](topic:find)
- [Colorarea elementelor după o proprietate](topic:color-by-property)
