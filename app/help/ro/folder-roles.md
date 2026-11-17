---
title: Raport dosar: roluri, stări și legături
summary: Fiecare etichetă din raportul dosarului, ce înseamnă și cum se alege sugestia „Începeți aici”.
keywords: raport dosar, roluri, stare, complet, incomplet, necitibil, legat, fundal, șablon, central, familie, doar copii de rezervă, începeți aici, stare legătură
from: b35bdd10
---

## Starea copiei

Fiecare copie a unui model, fișierul principal și copiile de rezervă numerotate, primește o verificare a antetului.

| Etichetă | Înseamnă |
|---|---|
| **Complet** | Antetul și indexul fișierului încap în fișier |
| **Incomplet** | Fișierul este mai scurt decât arată propriul index: a fost tăiat la copiere, încărcare sau sincronizare, ori este un fișier din cloud încă „doar online” |
| **Necitibil** | Fișierul nu este un fișier compus valid sau nu a putut fi citit |

În coloana **Status** un model arată **Complet**, un „*n* incomplet” chihlimbariu când cel puțin o copie este defectă, dar alta este sănătoasă, sau **Incomplet** roșu când nicio copie nu este sănătoasă.

## Copii de rezervă

Fișierele numite `Name.0001.rvt`, `Name.0002.rvt` și așa mai departe sunt copii de rezervă numerotate ale lui `Name.rvt`. Sunt grupate sub modelul lor, cele mai noi primele, în **Toate … copiile**. Cardul se citește din fișierul principal când acesta este complet, altfel din cea mai nouă copie completă („cea mai nouă completă”).

## Roluri

Afișate cursiv sub numele unui model.

| Rol | Înseamnă |
|---|---|
| Legat de *alt model*: fundal | Un alt model din dosar îl leagă, deci cel mai probabil este fundalul altcuiva, precum modelul unui consultant |
| Fișier de pornire sau fără nume | Un nume precum Blank, Template, Default, Untitled sau Project1: un punct de plecare sau un fișier care n-a fost niciodată denumit corect |
| Model central | Un model central pentru lucru în comun. Lucrul se face într-o copie locală, nu aici |
| Familie (o piesă) | Un fișier `.rfa` sau `.rft`: o componentă, nu proiectul |
| Doar copii de rezervă | Fișierul principal lipsește și au rămas doar copiile de rezervă numerotate |

## Cum se alege sugestia „Începeți aici”

BimCraft aplică raționamentul pe care l-ar aplica un utilizator cu experiență:

1. Candidații sunt fișiere de proiect citibile (`.rvt`, `.rte`) care nu sunt legate de alt model și nu sunt șabloane.
2. Modelele centrale și cele care au doar copii de rezervă contează doar când nu există nimic mai bun.
3. Dintre candidați, câștigă cel salvat cel mai recent.

Caseta își enumeră motivele și avertizează când un fișier care pare alegerea evidentă este deteriorat, când alte modele sunt de fundal și când alegerea este un model central. Este o estimare; verificați cu cine a lucrat ultimul la proiect.

## Stare legătură

| Etichetă | Înseamnă |
|---|---|
| **În acest dosar** | Găsit la calea relativă salvată sau la finalul căii complete salvate, în dosar |
| **Nume identic găsit** | Nu la calea lui, dar în dosar există un fișier cu același nume. Verificați dacă este cel corect |
| **Fișier de bibliotecă** | Un tabel de coduri pentru note sau ansambluri. Acestea vin cu programul pe fiecare calculator |
| **Nu este în acest dosar** | Nu a fost găsit nicăieri în dosar |

Coloana **Legături găsite** din **Modele** arată câte legături ale unui model au fost găsite, din cele așteptate în dosar (fișierele de bibliotecă nu se numără).

## Puse deoparte

| Linie | Înseamnă |
|---|---|
| Dosare de întreținere Revit (nu sunt citite) | `*_backup`, `*_log` și `Revit_temp`, plus dosarele ascunse și `__MACOSX` |
| Resturi de blocare, jurnal și copii de rezervă | Fișierele `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` și `.slog` |
| Alte fișiere | Tot restul (primele 40 sunt numite) |
