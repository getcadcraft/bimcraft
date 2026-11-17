---
title: Plasarea unei fațade și deschiderea vizualizării sale
summary: Plasați un marcaj de fațadă pe planul de nivel, orientați-l spre ceea ce doriți să vedeți, apoi găsiți desenul în navigatorul de proiect, editați-l și puneți-l pe o foaie. Pași pentru aranjamentele cu panglică și pentru aranjamentul clasic.
keywords: fațadă, vizualizare fațadă, marcaj de fațadă, etichetă de fațadă, plasare fațadă, fațadă nouă, creare fațadă, fațadă exterioară, vedere laterală, vedere frontală, vizualizare dintr-un punct, unde este fațada mea, deschidere fațadă, fațadă pe o foaie, inversare fațadă, redenumire fațadă, fațadă nord, vizualizări alăturate, divizare vizualizare, plan și 3D alăturate
from: a7cfd2b9
---

## Ce veți face

Creați o fațadă proprie: un desen al clădirii văzute dintr-un punct ales, privind în direcția aleasă. Durează două clicuri pe un plan de nivel. Desenul apare apoi în lista celorlalte fațade ale clădirii.

:::note
Cele patru laturi există deja. Fiecare clădire are fațadele Nord, Est, Sud și Vest în {{ui:Project browser}}, sub {{ui:Elevations}}, fără să plasați nimic. Plasați una proprie atunci când doriți o vedere din alt loc: perpendicular pe o aripă înclinată, din interiorul unei curți sau al unui perete dintr-o încăpere.
:::

## Unde este instrumentul

- Aranjamente cu panglică: {{ui:View}} › **Creare** › {{ui:Elevation}}.
- Aranjament clasic: activați {{ui:Draw}}, apoi {{ui:Build}} › {{ui:Elevation}}.
- Orice stil de meniu: comanda se numește Cotă; paleta de comenzi o găsește, iar linia de comandă acceptă ELEVATION.

## Pași

1. Alegeți {{ui:Elevation}}. Fațada se plasează pe un plan de nivel, deci dacă erați în vizualizarea 3D, BimCraft afișează planul nivelului pe care erați. Indicatorul spune **Faceți clic unde se află fațada**.
2. Faceți clic de unde se ia vizualizarea. Pentru o fațadă exterioară, faceți clic în afara clădirii, la o mică distanță de peretele pe care doriți să-l vedeți.
3. Indicatorul spune acum **Faceți clic pe felul în care arată**. Deplasați-vă spre clădire: o săgeată arată direcția, iar linia scurtă trasată peste primul clic este marginea de unde se privește. Faceți clic.
4. Pe plan apare un cerc cu un număr și un indicator. Acesta este marcajul de fațadă. Primul este 1, următorul 2.
5. Apăsați Esc pentru a încheia sau continuați și plasați alt marcaj.

Plasarea unui marcaj este un singur pas: {{key:Mod+Z}} îl anulează.

## Deschiderea desenului

După al doilea clic, planul rămâne în față. Desenul se află în {{ui:Project browser}}:

1. Deschideți {{ui:Elevations}}. Fațada proprie apare după cele patru laturi, ca **Fațadă 1**.
2. Faceți clic pe butonul creion {{ui:Edit in this view}} de pe rândul ei pentru a vedea desenul și a lucra în el: mutați pereți, uși, ferestre și niveluri, adăugați note și cote. Vezi [Editare în fațade și secțiuni](topic:edit-in-elevations).
3. Faceți clic pe rândul în sine pentru a deschide setul de desene sau adăugați vizualizarea pe o foaie proprie. Vezi [Vizualizări și foi](topic:views-and-sheets).

În aranjamentul clasic, navigatorul de proiect se află în panoul din stânga cât timp {{ui:Draw}} este activat. În aranjamentele cu panglică, este fila {{ui:Project Browser}} de sub Proprietăți.

## Ce arată vizualizarea

- Tot ce se află în fața marcajului, până unde ajunge clădirea. Nimic din spate.
- Nivelurile, cu nume și înălțimi.
- Dacă marcajul se află în interiorul clădirii, ce se află acolo este tăiat, ca de o secțiune. Pentru o fațadă exterioară curată, plasați marcajul afară.

## Modificarea ei

Selectați marcajul pe plan (faceți clic pe cercul lui cu {{ui:Select}}). Proprietățile conțin:

- {{ui:Label}}: numărul sau un nume propriu, de cel mult 8 caractere.
- {{ui:Flip the view}}: privirea în direcția opusă, din același loc.
- {{ui:Look as far as}}: până unde ajunge vizualizarea în fața marcajului. 0 afișează tot.

Apăsați Delete pentru a elimina marcajul și desenul lui. Anulare le restabilește pe amândouă.

:::tip
Pentru a vedea planul și vizualizarea 3D în același timp, în timp ce lucrați, folosiți {{ui:View}} › **Ferestre** › {{ui:Tile Views}} în aranjamentele cu panglică sau {{ui:Split}} în aranjamentul clasic. Un clic pe o filă de vizualizare revine la o singură vizualizare.
:::

## Limite

- Un marcaj nu poate fi încă tras sau rotit pe plan. Ștergeți-l și plasați-l din nou sau folosiți {{ui:Flip the view}}.
- În lista vizualizărilor pe care le puteți adăuga pe o foaie, o fațadă proprie apare împreună cu secțiunile.
- Etichetele ușilor și ferestrelor sunt desenate pe cele patru fațade laterale, nu pe una plasată manual.

## În IFC

Marcajul este salvat în fișier ca IfcAnnotation numit "Elevation 1", cu tipul de obiect "Elevation marker", la nivelul pe care a fost plasat. Un alt program îl afișează ca adnotare; desenul în sine este generat de BimCraft din model, de fiecare dată.
