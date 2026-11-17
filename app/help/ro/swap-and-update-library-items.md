---
title: Înlocuirea unui element plasat și actualizarea elementelor din bibliotecă
summary: Înlocuiți un element de bibliotecă plasat cu altul, păstrându-i locul și numărul de element, și verificați în Bibliotecă versiuni mai noi pentru tot ce există în model.
keywords: înlocuire, substituire, actualizare, versiune mai nouă, verificare actualizări, bibliotecă, retras, schimbare de licență, număr de element
from: 8bdfe01d
---

## Ce veți face

Schimbați părerea despre un element fără a-l muta din nou și mențineți actualizate elementele de bibliotecă dintr-un model.

## Înlocuiți un element

1. Faceți clic pe un element de bibliotecă plasat în model.
2. În {{ui:Proprietăți}}, faceți clic pe {{ui:Înlocuire element…}} în caseta **Element de bibliotecă**. Se deschide fila {{ui:Bibliotecă}}.
3. Găsiți noul element și faceți clic pe cardul său.
4. Faceți clic pe {{ui:Înlocuire … cu acesta}}.

Elementul își păstrează locul, rotirea, nivelul, numărul de element, cantitatea și notele. Tipul, forma și datele sale devin cele ale noului element. Elementele plasate în același fel împart un singur tip, ca atunci când le plasați.

Un element care are variante (vezi [Plasarea și înlocuirea unui element de bibliotecă cu variante](topic:library-variants)) își listează celelalte variante în partea de sus a filei {{ui:Bibliotecă}} când îl înlocuiți: câte un clic pentru fiecare.

Când noul element este un alt fel de lucru, de exemplu o chiuvetă în locul unei mese, clasa IFC a elementului se schimbă ca să corespundă (aici, de la element de mobilier la terminal sanitar), astfel încât alte programe să-l includă corect în tabele. Rămâne același element, cu același GlobalId, deci legăturile către el funcționează în continuare. {{key:Mod+Z}} readuce vechea clasă împreună cu vechiul element.

## Verificați actualizările

1. Faceți clic pe {{ui:Actualizări}} din bara de instrumente (sau pe {{ui:Verificare actualizări}} din caseta unui element de bibliotecă).
2. Citiți lista: fiecare element de bibliotecă din model, cu versiunea sa din model, ultima versiune și o stare: **La zi**, **Versiune mai nouă**, **Retras** sau **Negăsit**. Se arată și ce s-a schimbat (geometrie, date, licență sau o corecție).
3. Faceți clic pe {{ui:Actualizare}} pe un rând, sau pe {{ui:Actualizare totală}}.

## Ce ar trebui să vedeți

- „Actualizate *n* plasări. Plasările, numerele de element, cantitățile și notele sunt păstrate.”
- Linii „Actualizat: *element*” în lista de modificări. {{key:Mod+Z}} anulează fiecare.

## De reținut

- Pot fi verificate doar elementele din Bibliotecă. Elementele venite din fișiere nu au un identificator de bibliotecă.
- Când s-a schimbat o licență, copia deja plasată păstrează licența cu care a venit până o actualizați.
- Un element **Retras** nu mai este oferit pentru plasări noi. Unul retras din motive de drepturi de autor nu poate fi descărcat deloc; înlocuiți-l cu {{ui:Înlocuire element…}}.
- O variantă plasată rămâne aceeași variantă dacă versiunea mai nouă a elementului o mai conține; altfel ia varianta implicită a elementului.
- Verificarea trimite doar identificatorii și versiunile elementelor, niciodată modelul dumneavoastră.
