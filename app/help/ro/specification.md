---
title: Scrierea specificației din model
summary: O secțiune de specificație pentru fiecare tip de perete, ușă, fereastră, planșeu și finisaj folosit, cu datele sale citite din model și cu textul propriu, realizată ca PDF sau document Word.
keywords: specificație, specificații, desene de execuție, etapa 5, documente de construcție, secțiune, tip de perete, tip de ușă, tip de fereastră, finisaj, clasificare, uniclass, omniclass, masterformat, document, pdf, word, docx, tabele centralizatoare
from: a6acc6d4
---

## Ce veți face

Obțineți o specificație care urmează modelul: o secțiune pentru fiecare tip care este cu adevărat în clădire, fiecare cu alcătuirea și cantitățile citite din model și cu textul pe care îl scrieți pentru ea.

## Pași

1. Activați {{ui:Desenare}}, deschideți **Tabele centralizatoare** în panoul din stânga și faceți clic pe **Specificație**.
2. Dialogul listează câte o secțiune pentru fiecare tip de perete, tip de ușă, tip de fereastră, planșeu și finisaj de încăpere folosit. Sub fiecare titlu sunt **datele** ei, citite din model: grosimea, straturile unul câte unul, nivelul de dezvoltare, dimensiunile, câte și cât. O secțiune ale cărei elemente au un cod de clasificare arată codul în titlu.
3. Scrieți textul specificației în caseta de sub o secțiune. **Selectare elemente** arată la ce se referă secțiunea.
4. Faceți clic pe **Salvare**. Este un pas în Anulare, iar textul este păstrat în fișierul clădirii.
5. Deschideți **Documente din model**, alegeți șablonul **Specificație** și faceți clic pe **Previzualizare**, apoi salvați-l ca PDF, Word sau Markdown. Vezi [Documente din model](topic:documents-from-the-model).

## Tabelele de execuție ca document

Șablonul **Tabele centralizatoare pentru desene de execuție** tipărește direct din model tabelele de uși, ferestre și finisaje, în aspectul propriu al biroului. În propriul șablon scrieți `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` sau numele unei configurații salvate, de exemplu `{{schedule Door schedule by floor}}`. `{{specification}}` tipărește specificația.

## De reținut

- Datele sunt ale modelului. Se schimbă când se schimbă modelul; textul dvs. nu.
- BimCraft nu scrie nicio clauză din vreun standard și nici text al vreunui producător. O secțiune fără text se tipărește cu „Încă nu a fost scris text de specificație.”
- Textul scris pentru un tip care nu mai este în model este păstrat și listat sub „Text pentru tipuri care nu mai sunt în model”.
- Ca să schimbați un tip generic pentru o alcătuire specifică, vezi [Unelte pentru pereți](topic:wall-tools) (Schimbare tip).
