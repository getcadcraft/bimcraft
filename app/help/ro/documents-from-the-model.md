---
title: Documente din model
summary: Scrieți o specificație sau o descriere o dată, ca șablon, cu câmpuri pentru cantități, proprietăți și etichete, și completați-l din IFC-ul deschis ca document PDF sau Word.
keywords: document, documente, specificație, descriere, șablon, markdown, raport, word, docx, pdf, cantități, tabel centralizator, meserie, tabel uși, finisaje, documentcad
from: 2b0c9156
---

## Ce veți face

Un șablon este un text în Markdown cu câmpuri între acolade duble. BimCraft completează câmpurile din modelul deschis (numărători, cantități pe tip, proprietăți, [etichetele](topic:tags-and-schedules) din model) și salvează rezultatul ca PDF, document Word (.docx) sau Markdown.

## Pași

1. Deschideți un model IFC.
2. În panoul din stânga, sub {{ui:Cantități}}, deschideți {{ui:Documente din model}}.
3. Alegeți un șablon: {{ui:Uși și feronerie}} sau {{ui:Pereți, placaje și finisaje}}, ori {{ui:Încărcare șablon (.md)…}} pentru unul propriu.
4. Dacă șablonul citește etichete pe care modelul nu le definește încă, faceți clic pe {{ui:Adăugare etichete ale acestui șablon}}, apoi etichetați elementele sub {{ui:Etichete}}.
5. Schimbați textul cum doriți și faceți clic pe {{ui:Afișare document}}.
6. Faceți clic pe {{ui:PDF}} (alegeți întâi A4 sau Letter) sau pe {{ui:Word (.docx)}}.

## Ce ar trebui să vedeți

- Documentul completat sub butoane, cu tabelele lui.
- O listă de avertismente când un câmp nu poate fi citit (o etichetă nedefinită, o proprietate pe care modelul nu o are, un bloc care nu se închide niciodată); un astfel de câmp se tipărește ca `[?…]`.
- Pagini PDF cu titlul documentului și „Pagina 1 din 3” la baza fiecărei pagini; tabelele lungi trec pe pagina următoare, cu rândul de antet.

## Câmpuri

| Câmp | Dă |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | numele și descrierea proiectului, numele fișierului, data de azi |
| `{{count IfcDoor}}` | câte uși sunt |
| `{{sum IfcWall NetSideArea}}` | un total, cu unitatea lui |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | operații aritmetice (`+ - * /` și paranteze) peste termeni între paranteze pătrate: `[sum …]`, `[count …]` și, într-un each, `[qty Width]`. `round n` stabilește zecimalele, `unit` adaugă o unitate. Ceva ce nu poate citi, sau o împărțire la zero, se tipărește `[?…]` și avertizează |
| `{{qty IfcWall NetSideArea by Type}}` | un tabel: un rând pe tip, cu numărul și totalul lui, și un rând de total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | un tabel, un rând pe element |
| `{{tag Finish}}` | într-o buclă, valoarea elementului; în altă parte, toate valorile folosite (Oak, Paint) |
| `{{tags}}` | definițiile etichetelor, ca tabel |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | textul o dată pentru fiecare element; partea de după `{{else}}` când nu există niciunul |
| `{{#group IfcWall by Type}} … {{/group}}` | textul o dată pentru fiecare tip, cu `{{value}}`, `{{count}}`, `{{sum Length}}` și un `{{#each}}` simplu înăuntru |

În `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (al elementului, cu unitatea lui).

Clasa poate fi indicată prin mai multe valori (`IfcDoor|IfcWindow`) sau prin toate elementele (`*`). Restrângeți oricare cu `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testele sunt `=`, `!=`, `~` (conține), `>`, `<`, `>=`, `<=`, `has` și `hasnot`; uniți mai multe cu `and`; puneți o valoare cu spații între „ghilimele”. `sort Name` ordonează o buclă.

## Tabele centralizatoare și specificația în document

`{{schedule doors}}` tipărește un tabel centralizator al modelului, ca tabel, în aspectul stabilit în birou: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers` sau numele unei configurații salvate în Tabele centralizatoare. `{{specification}}` tipărește specificația proiectului. Șabloanele **Tabele pentru desene de execuție** și **Specificație** le folosesc. În previzualizare, faceți clic pe o cifră a unui astfel de tabel ca să selectați elementele de unde provine. Vedeți [Organizarea, salvarea și exportul unui tabel](topic:schedule-layouts) și [Scrierea specificației din model](topic:specification).

## De reținut

- Un câmp numește un element încorporat (Name, Type, Storey, Class, Material, Mark), o etichetă (`tag:Fire rating`, sau numele ei), o proprietate (`Pset_WallCommon.FireRating`) sau doar numele unei proprietăți (`NetSideArea`, `Width`): un nume simplu citește setul fiecărui element, mai întâi seturile de cantități, deci `Width` la o ușă este lățimea ușii, nu grosimea unui perete. În `where`, un nume simplu citește setul pe care îl au majoritatea elementelor alese.
- Cantitățile sunt cele din seturile de cantități ale fișierului (BimCraft le scrie pentru ce desenează); unitățile vin din setările de unități ale fișierului.
- Cuvintele câmpurilor (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) rămân în engleză în orice limbă. Șabloanele de exemplu sunt în engleză.
- Textul din model nu devine niciodată formatare: un nume cu `*` sau `|` se tipărește așa cum este.
- Păstrați un șablon modificat cu {{ui:Păstrare în acest browser}} (doar acest browser îl are) sau cu {{ui:Descărcare șablon}}.
- Textul PDF folosește fonturile PDF standard: un caracter din afara textului vest-european se tipărește ca „?”, iar linia de stare spune câte sunt.
- Șabloanele pe meserie trăiesc în Bibliotecă (tipul Șablon de document). În {{ui:Documente din model}}, alegeți Din Bibliotecă…, selectați unul, iar textul lui și etichetele pe care le citește intră; îl editați cum doriți. Publicarea propriului șablon în Bibliotecă este aceeași încărcare ca oricare alt element. Încă nerealizat: calcule dincolo de numărători și totaluri.
