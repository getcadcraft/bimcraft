---
title: Deschiderea unui dosar de proiect complet
summary: Indicați BimCraft un dosar de proiect pentru a vedea simultan fiecare model, copiile sale de siguranță și legăturile, și lăsați caseta Începeți aici să sugereze ce fișier să deschideți.
keywords: dosar, director, dosar de proiect, unitate de rețea, server, începeți aici, ce fișier, copii de siguranță, legături, xrefs, dosare recente, tragere dosar
from: 16fbdce2
---

## Ce veți face

Deschideți un dosar de proiect complet, cum este cel primit pentru o lucrare, și lăsați BimCraft să îl organizeze: ce modele există, care copii sunt copii de siguranță, ce leagă de ce, ce fișiere sunt deteriorate și ce fișier probabil doriți să deschideți.

Sunt citiți doar câteva kilobytes necesari fiecărei fișe de model, deci un dosar de pe o unitate de rețea sau un dosar sincronizat în cloud este în regulă.

## Pași

:::chromium
1. Faceți clic pe {{ui:Deschidere dosar}} din stânga (sau în mijlocul ecranului gol).
2. Alegeți dosarul de proiect în fereastra care se deschide și faceți clic pe **Selectare** (sau **Încărcare** ori **Deschidere**, în funcție de sistem).
3. Faceți clic pe **Vizualizare fișiere** când browserul întreabă „Permiteți site-ului să vizualizeze fișierele?”. Asta permite doar filei să citească dosarul; nimic nu este încărcat.
4. Așteptați cât timp linia de stare numără: „Listarea dosarului: … fișiere”, apoi „Verificarea fișierelor Revit: … din …”.
:::

:::firefox
1. Faceți clic pe {{ui:Deschidere dosar}} din stânga (sau în mijlocul ecranului gol).
2. Alegeți dosarul de proiect în fereastra care se deschide și confirmați. Firefox poate cere să confirmați că pagina poate citi fișierele dosarului; ele rămân pe calculator.
3. Așteptați cât timp linia de stare arată „Citirea dosarului: … fișiere”, apoi „Verificarea fișierelor Revit: … din …”.
:::

:::safari
1. Faceți clic pe {{ui:Deschidere dosar}} din stânga (sau în mijlocul ecranului gol).
2. Alegeți dosarul de proiect în fereastra care se deschide și faceți clic pe **Încărcare**. Deși cuvântul sugerează altceva, nimic nu părăsește Mac-ul: fișierele sunt doar predate filei.
3. Așteptați cât timp linia de stare arată „Citirea dosarului: … fișiere”, apoi „Verificarea fișierelor Revit: … din …”.
:::

Puteți și să **trageți dosarul** din {{pick:mac=Finder|windows=Explorator de fișiere|linux=managerul de fișiere}} pe pagină. Un dosar tras se deschide fără nicio cerere de permisiune, în orice browser.

## Ce ar trebui să vedeți

Raportul dosarului umple zona din mijloc:

- Numele dosarului, numărul de modele, desene CAD, modele IFC și fișiere, plus dimensiunea totală.
- Note roșii sau chihlimbarii, dacă unele fișiere sunt incomplete sau unele fișiere legate lipsesc din dosar.
- Caseta {{ui:Începeți aici}}: fișierul pe care BimCraft îl sugerează, cu motivele.
- **Modele**: un rând pentru fiecare model, cu copiile sale de siguranță grupate sub el.
- **Fișiere legate și referențiate**, **Modele IFC**, **Desene CAD** și **Puse deoparte**, când dosarul are așa ceva.

În stânga, panoul {{ui:Dosar}} îl rezumă; **Probleme** spune „Niciuna” când fiecare copie este intactă.

## Folosirea casetei Începeți aici

Caseta numește un fișier și spune de ce, de exemplu:

- „Cea mai recentă lucrare salvată din acest dosar (3 mar. 2025).”
- „*Consultant.rvt* este legat în alte modele, deci este fundal, nu fișierul de editat.”
- „*Tower.rvt* pare alegerea evidentă, dar este deteriorat; ultima copie bună este din …”
- „Acesta este un model central: în Revit, deschideți-l cu «Create New Local» și lucrați în copia locală.”

1. Citiți motivele.
2. Faceți clic pe {{ui:Deschidere fișă}} pentru a citi fișa acelui fișier, sau pe {{ui:Afișare în listă}} pentru a găsi rândul său din **Modele**.
3. Verificați cu cine a lucrat ultima dată la proiect înainte de a vă baza pe el. Caseta spune și ea asta: este o estimare bazată pe nume, date și legături.

## Deschiderea fișierelor din raport

1. Faceți clic pe numele unui model pentru a-i deschide fișa. Fișa verifică fiecare legătură cu dosarul.
2. Faceți clic pe {{ui:Înapoi la}} și pe numele dosarului din partea de sus a fișei (sau pe {{ui:Înapoi la dosar}} din stânga) pentru a reveni.
3. Faceți clic pe orice fișier IFC de sub **Modele IFC** pentru a-l deschide în 3D.
4. Faceți clic pe orice DWG sau DXF de sub **Desene CAD** pentru a-l deschide în 2D. Desenele și imaginile legate sunt găsite automat în dosar.

## Redeschiderea unui dosar mai târziu

:::chromium
Dosarele deschise cu {{ui:Deschidere dosar}} sau prin tragere sunt listate sub {{ui:Dosare recente}} în stânga. Faceți clic pe {{ui:Redeschidere}} și pe numele dosarului pentru a-l deschide din nou, fără a-l alege. După o repornire a browserului, Chrome sau Edge întreabă încă o dată; alegeți „Permite la fiecare vizită” pentru a opri întrebarea. Lista este păstrată doar în acest browser, niciodată trimisă altundeva. Faceți clic pe × pentru a uita un dosar.
:::

:::firefox safari
Acest browser nu poate reține dosarele între vizite. Alegeți din nou dosarul cu {{ui:Deschidere dosar}} sau trageți-l în pagină.
:::

## Greșeli frecvente

- **Alegerea unui dosar prea mare.** Peste 20.000 de fișiere: „Acest dosar are mai mult de 20.000 de fișiere. Alegeți un dosar mai mic, cum ar fi un singur proiect.” Alegeți dosarul de proiect, nu întreaga unitate.
- **Alegerea dosarului-părinte al mai multor proiecte.** Caseta {{ui:Începeți aici}} alege atunci între proiecte. Alegeți un singur proiect.
- **Dosarele proprii Revit par ignorate.** Dosarele `*_backup`, `*_log` și `Revit_temp` sunt de întreținere și sunt listate sub **Puse deoparte**, nu citite.
- **Așteptarea ca un model să se deschidă în 3D din fișa sa.** Un fișier de proiect este doar o fișă. Deschideți exportul său IFC.
- **Telefoane și tablete.** Multe browsere mobile nu pot alege deloc dosare. Folosiți un calculator.

Vedeți [Verificarea unui dosar pentru copii deteriorate, legături lipsă și resturi](topic:check-folder-health) și [Raportul dosarului: roluri, stări și legături](topic:folder-roles).
