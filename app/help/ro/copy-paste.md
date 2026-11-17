---
title: Copiere, lipire și duplicare elemente de bibliotecă
summary: Copiați un element de bibliotecă plasat și lipiți-l acolo unde faceți clic, în aceeași poziție lângă original sau într-un alt model; copiați proprietățile oricărui alt element ca text; anulați și refaceți.
keywords: copiere, lipire, duplicare, clipboard, lipire în aceeași poziție, decupare, ștergere, selectare totală, anulare, refacere, meniu editare, mai multe, element de bibliotecă, plasare, repetare, matrice
from: 6ac15931
---

## Ce veți face

Adăugați mai multe copii ale unui element pe care l-ați plasat deja: o a doua masă de lucru, un rând de chiuvete. Acest subiect se referă la **elementele de bibliotecă plasate**, adică elementele pe care BimCraft le-a scris în model; unul dintre ele poate fi lipit în orice model, chiar și într-o altă filă. Pereții, ușile și toate celelalte elemente se copiază, se decupează, se lipesc și se șterg la fel, în propriul lor model: vedeți [Ștergere, decupare, copiere și lipire elemente de construcție](topic:edit-elements).

Comenzile se află în bara de instrumente de deasupra modelului: {{ui:Anulare}}, {{ui:Refacere}}, {{ui:Copiere}}, {{ui:Lipire}} și {{ui:Mai multe}}, un meniu cu {{ui:Decupare}}, {{ui:Copiere}}, {{ui:Lipire}}, {{ui:Lipire în aceeași poziție}}, {{ui:Duplicare}}, {{ui:Ștergere}}, {{ui:Selectare totală}} și {{ui:Anularea selecției}}. O comandă care nu poate acționa în acel moment este estompată; treceți cu indicatorul peste ea ca să citiți motivul sau faceți clic pe ea, iar linia de stare spune de ce.

## Pași

1. Deschideți un model IFC cu un element de bibliotecă în el sau plasați mai întâi unul. Vedeți [Plasarea echipamentelor și a mobilierului din bibliotecă](topic:place-from-library).
2. Faceți clic pe element în vizualizarea 3D. Proprietățile lui afișează o casetă **Element de bibliotecă**.
3. Faceți clic pe {{ui:Copiere}} sau apăsați {{key:Mod+C}}.
4. Faceți clic pe {{ui:Lipire}} sau apăsați {{key:Mod+V}}. Se deschide bara de plasare, iar o casetă transparentă urmează indicatorul, rotită ca originalul.
5. Apăsați {{key:R}} ca s-o rotiți cu 90°, {{key:Tab}} ca s-o fixați cu spatele de un perete, sau tastați X și Y în bara de plasare.
6. Faceți clic acolo unde trebuie să ajungă copia. Fiecare clic plasează încă o copie; apăsați {{key:Esc}} ca să opriți.
7. Faceți clic pe {{ui:Salvare ca IFC}} ca să descărcați copia modificată a modelului.

## Lipire în aceeași poziție

{{ui:Mai multe}}, {{ui:Lipire în aceeași poziție}} sau {{key:Mod+Shift+V}} lipește fără niciun clic, la aceleași X și Y și rotit în același fel:

- **În același model, la același etaj**: două elemente exact în același loc n-ar fi de folos, deci copia se așază chiar lângă original, la o lățime de element plus 100 mm de-a lungul lățimii proprii a elementului. Lipiți din nou în aceeași poziție din copia nouă ca să faceți un rând.
- **Pe alt etaj sau într-un alt model**: exact aceleași X, Y și rotire. BimCraft folosește etajul cu același nume; dacă nu există, îl folosește pe cel la înălțimea cea mai apropiată. Linia de stare spune care.

## Duplicare

{{ui:Mai multe}}, {{ui:Duplicare}} sau {{key:Mod+D}} copiază elementul ales și începe imediat lipirea lui: un singur pas în loc de doi.

## Într-un alt model sau într-o altă filă

Ce copiați se păstrează în acest browser, deci puteți deschide un alt model IFC sau BimCraft într-o altă filă și lipiți acolo. Celălalt model are nevoie de elementul de bibliotecă în sine: BimCraft îl are când elementul a fost plasat, înlocuit sau actualizat în această filă. Un element plasat într-o sesiune anterioară poate fi lipit din nou doar în propriul model; într-un alt model, plasați-l din fila {{ui:Bibliotecă}}.

## Ce ar trebui să vedeți

- Copia din model, selectată, cu același element de bibliotecă, licență, date de echipament, cantitate și notă ca originalul, și **următorul număr liber de element**. Schimbați numărul în Proprietăți, sub `CadCraft_Placement`.
- „Plasat: *element* (element *n*)” în lista modificărilor. {{key:Mod+Z}} îl anulează; {{key:Mod+Y}} îl readuce.

## De reținut

- Copiile au același tip ca originalul, deci toate folosesc un singur set de geometrie, ca la plasarea de două ori a aceluiași element.
- {{ui:Anulare}} și {{ui:Refacere}} acoperă fiecare modificare: valori editate, plasări, lipiri, înlocuiri și actualizări. Refacerea readuce o plasare în același loc; o modificare nouă șterge ce putea fi refăcut.
- În vizualizarea 2D a unui desen nu există nimic de selectat, deci nimic de copiat. Folosiți {{ui:Editare în CadCraft}} ca să modificați desenul, când apare.

## Greșeli frecvente

- **{{ui:Lipire}} spune că elementele provin dintr-un alt model.** Ultimul lucru copiat a fost un element de construcție sau mai multe elemente: acestea se lipesc doar în modelul lor. Alegeți un singur element de bibliotecă plasat și copiați-l.
- **{{ui:Lipire}} spune că copia provine dintr-un alt model fără elementul ei de bibliotecă.** Plasați elementul din fila {{ui:Bibliotecă}} o dată în această filă, apoi copiați și lipiți-l.
- **{{key:Mod+C}} copiază în schimb textul paginii.** Textul era selectat pe pagină. Faceți clic mai întâi pe model.

## Vedeți și

- [Taste și mouse](topic:keyboard#edit)
- [Setările BimCraft](topic:settings)
