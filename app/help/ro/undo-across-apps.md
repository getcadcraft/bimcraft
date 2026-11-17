---
title: Anularea pe mai multe aplicații în CadCraft Studio
summary: În Studio, BimCraft îi spune lui Studio fiecare pas finalizat, astfel încât Studio poate anula ultimul pas în fereastra în care ați lucrat ultima dată.
keywords: anulare, studio, mai multe aplicații, anulare proiect, istoric, jurnal, fereastră
from: c66dd0c1
---

## Ce face

În CadCraft Studio, fiecare fereastră de aplicație îi spune lui Studio când un pas este finalizat (un perete desenat, un set de pereți acceptat dintr-o scanare). Studio păstrează acești pași în ordinea în care ați lucrat și poate cere ferestrei care a făcut ultimul pas să-l anuleze, folosind propria anulare a ferestrei. Ctrl+Z în BimCraft rămâne al BimCraft și este anunțat și lui Studio.

## De reținut

- Studio cere unei ferestre să anuleze doar când lista ei de anulări este exact cum a lăsat-o pasul. După Salvare (care începe o listă nouă de modificări) sau după ce schimbați modelul pe care îl editați, BimCraft răspunde că lista s-a mutat și Studio omite această fereastră. Nimic nu este forțat.
- Anularea efectelor unei aplicații într-o altă aplicație nu este încă realizată.
- În afara Studio nimic nu se schimbă.
- Elementul de meniu din Studio care cere anularea vine odată cu o versiune Studio; până atunci pașii sunt raportați, dar niciun element de meniu nu îi folosește.

## Următorul

- [Lucrul live cu alții](topic:work-live)
