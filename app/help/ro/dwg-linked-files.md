---
title: Găsirea desenelor legate și a imaginilor
summary: Afișați desenele legate ale unui desen (referințe externe sau Xref) și imaginile din cartuș, deschizând dosarul acestuia sau adăugând fișierele manual.
keywords: xref, referință externă, desen legat, atașare, suprapunere, imagine, poză, siglă, cartuș, Xref lipsă, etransmit, manager de referințe
from: 5593d4b1
---

## Scop

Completați un desen: afișați desenele către care trimite (referințe externe sau Xref) și imaginile pe care le folosește, cum ar fi o siglă din cartuș.

## Varianta ușoară: deschideți dosarul

1. Faceți clic pe {{ui:Open a folder}} și alegeți dosarul care conține desenul și legăturile lui, de exemplu întregul dosar `Cad` al unui proiect.
2. În raportul dosarului, derulați până la **Desene CAD**.
3. Faceți clic pe desen.
4. Priviți panoul {{ui:Properties}} din dreapta, sub **Desene legate** și **Imagini**.

BimCraft caută fiecare desen legat după numele său („*nume*.dwg”), întâi în același dosar cu desenul, apoi oriunde în dosarul pe care l-ați deschis. Imaginile se găsesc în același mod și și după un nume asemănător: un export eTransmit sau Revit adaugă adesea numele proiectului în față, deci `logo.png` se găsește ca `Tower-logo-5425051.png`.

## Varianta manuală: adăugați fișierele

1. Deschideți desenul singur.
2. În dreapta, sub **Desene legate**, faceți clic pe {{ui:Add linked drawings…}}. Sub **Imagini**, butonul este {{ui:Add pictures…}}; ambele deschid același selector.
3. Alegeți fișierele `.dwg` legate și fișierele de imagine. Puteți alege mai multe deodată.
4. Așteptați până când BimCraft redeschide desenul cu ele.

## Rezultat

Fiecare desen legat și fiecare imagine este listat cu o etichetă:

| Etichetă | Înseamnă |
|---|---|
| **Afișat** | Găsit și desenat. Calea de sub ea arată de unde vine sau „adăugat de dumneavoastră”. |
| **Afișat, nume similar** | O imagine găsită după un nume asemănător. Verificați dacă este cea corectă. |
| **Negăsit** | Nu este în dosar sau în fișierele adăugate. O imagine lipsă apare ca cadrul ei gol. |
| **TIFF nu poate fi afișat într-un browser** | Imaginea este un fișier TIFF, pe care browserele nu îl desenează. Salvați-o ca PNG cu același nume și adăugați-o. |
| **Nu a putut fi citit** | Fișierul a fost găsit, dar nu a putut fi deschis ca imagine. |

Panoul {{ui:Drawing}} din stânga arată „*n* din *m* încărcate” pentru desenele legate. Straturile desenelor legate apar în {{ui:Layers}} ca „*nume legătură*|*strat*”.

## Greșeli frecvente

- **Deschiderea doar a desenului.** „Acest desen arată doar conținutul propriu până când desenele legate sunt adăugate. Deschiderea întregului dosar al proiectului le găsește automat.”
- **Deschiderea unui dosar prea mic.** Dacă legăturile se află într-un dosar vecin, deschideți dosarul părinte.
- **Legături redenumite.** BimCraft potrivește desenele legate după nume. O legătură redenumită pe disc nu este găsită; adăugați-o manual.
- **Legături ale legăturilor.** BimCraft încarcă desenele către care trimite desenul deschis. Desenele legate în interiorul acestora nu sunt căutate, așa că de obicei nu apar în această versiune.
