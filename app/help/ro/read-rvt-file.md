---
title: Citirea unui fișier de proiect sau de familie
summary: Deschideți un fișier .rvt, .rfa, .rte sau .rft și citiți versiunea sa, lucrul în echipă, informațiile despre proiect, parametrii familiei, legăturile și imaginea de previzualizare, fără programul care l-a creat.
keywords: rvt, rfa, rte, rft, fișier de proiect, familie, versiune, ce versiune, compilare, lucru în echipă, model central, informații despre proiect, previzualizare, miniatură, legături
from: df3600e1
---

## Ce urmează să faceți

Aflați ce conține un fișier de proiect sau de familie fără să-l deschideți în Revit: ce versiune l-a salvat, dacă este în lucru în echipă, informațiile despre proiect și ce leagă. Util când un fișier vine de la altcineva și trebuie să știți în ce versiune să-l deschideți.

## Pași

1. Faceți clic pe {{ui:Alegere fișier}}.
2. Alegeți un fișier `.rvt`, `.rfa`, `.rte` sau `.rft`.
3. Așteptați puțin. Linia de stare spune „Se citește fișierul…” și apoi „Deschis *nume fișier*”.
4. Uitați-vă în partea de sus a cardului: imaginea de previzualizare salvată în fișier, tipul fișierului și versiunea în care a fost salvat, precum și numele proiectului.
5. Derulați în jos ca să citiți secțiunile cardului.

## Ce ar trebui să vedeți

Cardul din mijloc, cu aceste secțiuni când fișierul le conține:

| Secțiune | Ce vă spune |
|---|---|
| Fișier | Numele fișierului, dimensiunea, tipul (proiect, șablon de proiect, familie sau șablon de familie), versiunea și compilarea în care a fost salvat, lucrul în echipă, calea modelului central, unde și de cine a fost salvat ultima dată, limba și GUID-ul documentului |
| Informații despre proiect | Câmpurile proprii ale proiectului, cum ar fi nume, număr, client, adresă și stare. Câmpurile rămase la valorile implicite ale unui proiect nou sunt omise. |
| Familie, Familie: … | Pentru o familie: numele său, categoria, versiunea, ultima actualizare și parametrii săi, grup cu grup |
| Fișiere legate și referite | Fiecare model legat, legătură CAD, imagine și tabel de note pe care fișierul le indică, cu calea sa salvată |

În stânga, panoul {{ui:Fișier}} repetă faptele principale și adaugă **Citit**: cât din fișier a citit efectiv BimCraft, de obicei circa 40 KB dintr-un fișier de multe megaocteți. În dreapta, panoul {{ui:Proprietăți}} spune că proprietățile elementelor au nevoie de modelul 3D.

## De ce nu există 3D

Modelul 3D și elementele din fișierul de proiect sunt stocate într-un format nedocumentat. BimCraft citește doar părțile fișierului care sunt documentate sau ușor de citit: informațiile despre fișier, informațiile despre proiect, datele familiei, lista legăturilor și imaginea de previzualizare. Nu ghicește restul. Ca să vedeți modelul în 3D și să citiți proprietățile elementelor, exportați IFC din programul care a creat fișierul. Vezi [Obținerea unui fișier de proiect în 3D prin IFC](topic:rvt-to-ifc).

## Greșeli frecvente

- **Așteptarea unui 3D.** Vezi mai sus.
- **Legăturile arată doar calea salvată.** Un fișier deschis singur nu poate verifica dacă legăturile sale există. Deschideți în schimb dosarul în care se află, iar BimCraft marchează fiecare legătură ca găsită sau negăsită: [Deschiderea unui dosar de proiect întreg](topic:open-project-folder).
- **„Acest fișier este incomplet…”** Fișierul a fost întrerupt în timpul copierii, încărcării sau sincronizării. Un fișier dintr-un cloud care este încă „doar online” face la fel. BimCraft îl deschide totuși și arată doar ce s-a recuperat: un avertisment chihlimbariu în partea de sus a cardului, o secțiune **Recuperat din acest fișier** care listează părțile ale căror octeți sunt toți în fișier și **Nu este în fișier** pentru rest. Nu se completează nimic pentru partea lipsă, deci versiunea, imaginea de previzualizare sau informațiile despre proiect pot lipsi când au fost stocate după punctul de întrerupere. Dacă și lista de conținut a fișierului a fost tăiată, nu se poate deschide nimic. Copiați din nou originalul și redeschideți-l pentru fișierul complet.
- **„Nicio imagine de previzualizare în acest fișier”.** Unele fișiere se salvează fără una. Este normal.
- **Deschiderea unei copii de rezervă din greșeală.** Fișierele numite ca `Tower.0004.rvt` sunt copii de rezervă numerotate. Deschiderea dosarului le grupează cu modelul lor.
