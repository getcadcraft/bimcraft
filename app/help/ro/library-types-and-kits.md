---
title: Simboluri, tipuri și active, șabloane de proiect și Quick Kits
summary: Biblioteca are trei tipuri de elemente (Simboluri, Tipuri, Active). Adăugați un tip la proiect, porniți de la un șablon de proiect partajat, adăugați un Quick Kit și partajați propriile șabloane, tipuri și kituri prin pagina de încărcare a bibliotecii.
keywords: bibliotecă, simboluri, tipuri, active, tip, tip de perete, tip de pardoseală, tip de acoperiș, tip de tavan, șablon de proiect, șablon, Quick Kit, kit, partajare, încărcare, versiune, jurnal de modificări, LOD, clasificare, licență, note din practică
from: e13b0e67
---

## Ce veți face

Găsiți în Bibliotecă ce vă trebuie după ce este, adăugați un tip la proiectul pe care îl desenați, porniți un proiect nou dintr-un șablon partajat de cineva și partajați propriile șabloane, tipuri și kituri.

## Cele trei tipuri de element de bibliotecă

- **Simbolurile** sunt convenții de desen: doar 2D, desenate la dimensiunea de adnotare, grupate pe discipline.
- **Tipurile** spun din ce este făcut un element: straturile sale cu grosimea reală, nivelul său de dezvoltare (LOD) și codul de clasificare. Un tip este adăugat la proiect, nu desenat.
- **Activele** sunt obiecte fizice, cum sunt uși, ferestre, mobilier, obiecte fixe și echipamente, cu o vedere în plan și un corp 3D la dimensiune reală.

În fila {{ui:Bibliotecă}}, alegeți {{ui:Bibliotecă}} și folosiți **Tip de element** pentru a arăta Tot, Simboluri, Tipuri sau Active.

## Adăugarea unui tip la proiect

1. Alegeți **Tipuri** sub Tip de element și deschideți unul.
2. Verificați structura, LOD și clasificarea de sub imagine, apoi faceți clic pe {{ui:Adăugare la acest proiect}}.
3. Este adăugat ca tip de perete, pardoseală, acoperiș sau tavan cu care puteți desena. Dacă există deja un tip cu acel nume, cel nou este adăugat ca o copie, iar cel existent rămâne neschimbat. O singură {{ui:Anulare}} îl scoate.

## Șabloane de proiect și Quick Kits

Alegeți {{ui:Kituri}} ca să vedeți ce au partajat oamenii.

- **Un șablon de proiect** este un fișier IFC cu niveluri, grile, tipuri și setări. {{ui:Salvare în șabloanele mele}} îl pune în Clădire nouă, sub Pornire din.
- **Un Quick Kit** este o listă de elemente de bibliotecă. {{ui:Afișare elemente ale kitului}} le listează ca cartonașe pe care le puteți plasa.
- Fiecare kit are o versiune și un jurnal de modificări, cel mai nou primul. O versiune care începe cu 0 este pentru discuție; 1.0.0 este doar pentru ce a adoptat proprietarul liniei.

## Partajarea propriilor elemente

- **Un șablon de proiect:** {{ui:Salvare ca șablon}}, bifați {{ui:Creați și un fișier de partajat în Bibliotecă}}, adăugați ce conține și o versiune. Obțineți un fișier `.json`.
- **Un Quick Kit:** în {{ui:Kituri}}, alegeți {{ui:Creare Quick Kit din acest proiect}}. Sunt listate elementele de bibliotecă pe care le folosește proiectul.
- **Un tip:** în {{ui:Pachete de tipuri}}, bifați un tip și alegeți {{ui:Salvare ca element de bibliotecă…}}.

Încărcați fișierul pe pagina de încărcare a bibliotecii. Trece prin aceeași verificare ca orice element, iar licența se alege acolo: fiecare element declară licența sa. Elementele trebuie să aibă LOD, o clasă IFC și un cod de clasificare (un cod, nu doar un nume).

## Note din practică

Pe pagina oricărui element de bibliotecă, membrii conectați pot adăuga o notă: folosit într-un proiect real, încercat pe un proiect exemplu sau o problemă găsită. Spuneți în câteva cuvinte ce fel de proiect și lăsați numele clienților afară. O notă este publică și nu este o recenzie: nu schimbă elementul.

## De reținut

- Nimic nu este trimis din aplicație. Fișierele sunt făcute pe calculator, iar încărcarea lor se face manual.
- Un kit făcut dintr-un șablon păstrează textul IFC exact cum a fost salvat. Verificați-l pentru orice este privat înainte de încărcare.
- CadCraft arată Simboluri și Active în fila Bibliotecă; Tipurile și șabloanele sunt pentru proiecte BimCraft.
