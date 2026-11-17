---
title: Lucrul cu straturi și planșe
summary: Activați și dezactivați straturile desenului, comutați între spațiul model și planșe și înțelegeți cum arată planșele modelul prin ferestrele lor de vizualizare.
keywords: straturi, strat activ inactiv, înghețare, dezghețare, planșe, layout-uri, spațiu hârtie, file, manager straturi, fereastră de vizualizare, viewport, strat
from: a9a16b53
---

## Scop

Curățați vizualizarea unui desen încărcat dezactivând straturi, apoi priviți planșele desenului una câte una.

## Pași: straturi

1. Deschideți un desen DWG sau DXF.
2. Găsiți lista {{ui:Layers}} din stânga. Fiecare strat are o casetă de bifare, o mostră de culoare și numele său.
3. Debifați un strat pentru a ascunde tot ce se află pe el.
4. Faceți clic pe {{ui:All off}} pentru a ascunde toate straturile.
5. Bifați doar straturile pe care vreți să le vedeți.
6. Faceți clic pe {{ui:All on}} pentru a arăta din nou totul.

## Rezultat

Straturile dispar și reapar dintr-odată, pe {{ui:Model}} și pe fiecare planșă. Straturile dezactivate sau înghețate în desenul propriu încep debifate.

## Pași: planșe

1. Priviți rândul de file de deasupra desenului: {{ui:Model}}, apoi fiecare planșă după nume.
2. Faceți clic pe o filă de planșă.
3. Priviți planșa: hârtia stă pe un fundal mai închis, iar fiecare fereastră de vizualizare (viewport) arată partea ei din model, la propria scară și unghi.
4. Măriți într-o fereastră de vizualizare pentru a citi detaliul. Măriți planșa, nu fereastra, deci toată planșa se mișcă împreună.
5. Faceți clic pe {{ui:Fit}} sau dublu clic pentru a vedea din nou întreaga planșă.

## Cum funcționează planșele aici

O planșă (un layout, adică spațiu hârtie) conține un cartuș și ferestre de vizualizare care privesc în spațiul model. BimCraft desenează fiecare fereastră de vizualizare decupată la margine, la propria scară și rotație, și ascunde straturile înghețate în acea fereastră. Prima fereastră de vizualizare a fiecărei planșe este chiar planșa și nu se desenează de două ori.

## Greșeli frecvente

- **Așteptarea ca modificările de straturi să fie salvate.** Setările de straturi afectează doar vizualizarea, până deschideți alt fișier.
- **Așteptarea controlului straturilor pe fereastră de vizualizare.** Lista {{ui:Layers}} comută un strat peste tot. Straturile înghețate într-o fereastră de desenul propriu rămân înghețate acolo.
- **Căutarea unei căutări de straturi sau a stărilor de straturi.** Încă nerealizat. Lista este în ordinea desenului.
- **Așteptarea de a lucra în interiorul unei ferestre de vizualizare.** Nu există nimic de activat: BimCraft doar afișează planșa. Folosiți {{ui:Model}} pentru a privi direct spațiul model.
