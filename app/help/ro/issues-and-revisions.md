---
title: Emiteri, revizii și jurnalul de modificări al desenului
summary: Înregistrați fiecare set de planșe pe care îl trimiteți, vedeți ce s-a schimbat de atunci pe fiecare planșă și element și țineți instrucțiunile de șantier, desenele de execuție și modelele legate de emiterea de care aparțin.
keywords: emitere, set emis, set trimis, trimitere, revizie, revizii, ce s-a schimbat, de la emitere, jurnal de modificări, registru de desene, transmitere, instrucțiune de șantier, desen de execuție, model legat, licitație, construcție, instantaneu, comparare
from: 4c732832
---

## Ce veți face

Înregistrați o emitere: ce planșe au plecat, la ce dată, în ce scop, fiecare la revizia sa. Ulterior, întrebați ce s-a schimbat de la acea emitere. Țineți instrucțiunile de șantier și desenele de execuție returnate asociate emiterii.

## Pași

1. În panoul din stânga, deschideți **Emiteri și revizii**.
2. Alegeți **Înregistrare emitere**. Revizia este propusă (A, apoi B; o revizie numerotată, cum este P1, crește). Alegeți pentru ce este emisă, cui merge, data și planșele. Când este setată etapa proiectului, scopul o urmează. Când pachetul de autorizare are o listă de documente justificative, planșele legate de această listă sunt bifate automat.
3. Lăsați bifat **Salvare și o copie a modelului ca emis** pentru a păstra modelul exact cum a plecat. Copia se descarcă; numele, dimensiunea și SHA-256 ei se păstrează cu emiterea.
4. Alegeți **Înregistrare emitere**. O planșă care s-a schimbat de la ultima emitere primește revizia nouă. O planșă care nu s-a schimbat își păstrează revizia. Cartușul fiecărei planșe arată revizia sa.
5. Pentru a vedea ce s-a schimbat, alegeți **Modificări de la**, lângă o emitere. Fiecare planșă apare ca Identic sau Modificat, cu elementele adăugate, modificate și șterse de pe ea. Faceți clic pe un număr pentru a selecta acele elemente.
6. Alegeți **Adăugare înregistrare** pentru o instrucțiune de șantier, un desen de execuție, un set de adnotări, un model legat sau o notă. Alegeți emiterea de care ține. Un fișier pe care îl alegeți este înregistrat după nume, dimensiune și SHA-256; fișierul rămâne unde este.
7. **Jurnalul de modificări al desenului** arată un rând pentru fiecare planșă și o coloană pentru fiecare emitere. **Descărcare jurnal de modificări (CSV)** îl salvează împreună cu emiterile și înregistrările.
8. **Salvare istoric emiteri** scrie un fișier `.issues.json`. MarkupCraft, TakeoffCraft și DetailCraft îl citesc cu **Citire istoric emiteri**.

## De reținut

- Istoricul este păstrat în interiorul fișierului IFC (setul de proprietăți `CadCraft_Issues` pe proiect). Alte programe îl ignoră.
- O planșă este considerată modificată când propria configurare s-a schimbat sau când s-a schimbat un element pe care îl arată: un plan arată nivelul său, o fațadă sau o secțiune întregul model, iar un tabel de uși sau ferestre arată ușile sau ferestrele sale.
- Un element este considerat modificat când s-a schimbat o proprietate, poziția, dimensiunea sau forma sa.
- Pentru a vedea exact ce proprietate s-a schimbat, deschideți copia salvată a modelului emis cu **Comparare versiuni**.
- Ștergerea unei emiteri păstrează înregistrările sale, fără emitere. Fiecare pas se anulează printr-o singură {{ui:Anulare}}.
- Un model cu peste 60,000 de elemente nu păstrează, pentru fiecare element, o înregistrare cu emiterea. Planșele sunt totuși comparate.

## Încă nerealizat

- Planșele nu sunt salvate ca PDF odată cu emiterea.
- Norii de revizuire nu sunt desenați pe planșele proprii ale BimCraft. Înregistrați norii în MarkupCraft, la emiterea respectivă.
