---
title: Mudeli kontrollimine levinud probleemide suhtes
summary: Leia elemendid, millelt puudub vajalik omadus, kahel korral kasutatud GlobalId-d, elemendid ilma korruseta ja üksteise peale laotud koopiad.
keywords: kontroll, mudelikontroll, valideerimine, kvaliteedikontroll, nõutav omadus, puuduv omadus, nõutav, dubleeritud, globalid, guid, korrus, üksteise peal, kattuv
from: 4d835513
---

## Mida sa teed

Vaata mudel üle enne selle edasi andmist: probleemid, mis rikuvad loendeid, koguseid ja teiste inimeste tarkvara.

## Sammud

1. Ava IFC-mudel.
2. Ava vasakust paneelist {{ui:Mudeli kontrollid}}.
3. Jaotises {{ui:Nõutavad omadused}} on reegel juba olemas (mis tahes klass, Name). Muuda selle klassi (või {{ui:Mis tahes klass}}) ja omadust või klõpsa {{ui:Lisa omadus}}, et lisada veel üks reegel; x eemaldab ühe. Element ei vasta reeglile, kui omadus puudub või on tühi. Reeglid jäävad sellesse brauserisse kõigi mudelite jaoks.
4. Klõpsa {{ui:Käivita kontrollid}}.
5. Klõpsa tulemusel, et valida need elemendid ja suumida nende juurde.

## Mida sa peaksid nägema

- **Nõutav omadus puudub**: iga reegel koos elementidega, millel sellele pole väärtust.
- **GlobalId on kasutatud kaks korda**: elemendid, millel on sama GlobalId. Teine tarkvara käsitleb neid ühe elemendina.
- **Ilma korruseta**: elemendid, mille kuju ei sisaldu üheski korrusel.
- **Koopiad üksteise peal**: sama klassi ja tüübi ning sama kujuga elemendid samas kohas, mis loevad koguste arvestuses kaks korda.

Iga tulemuse rida on nupp: klõpsa sellel, et valida need elemendid ja suumida nende juurde. Iga kontrolli kohta on loetletud ainult esimesed 50 rühma. Samad leiud ilmuvad ka paneelis {{ui:Probleemid}}.

## Hea teada

- Kui on avatud mitu mudelit, kontrollitakse aktiivset mudelit. Vt [Vaata mitut IFC-mudelit koos](topic:several-models).
- Pärast muudatust käivita kontrollid uuesti.
- Paneelis {{ui:Probleemid}} järgivad probleemi sõnades olevad pikkused, pindalad ja mahud tööriistaribal valitud {{ui:Ühikud}} („800 mm“ uks loetakse jalgades ja tollides kui 2'-7 1/2"); muuda ühikut ja paneel sõnastab need ümber.

## Järgmised

- [Audiiti mudel: ruumid, sildid, LOD, kokkupõrked ja liidesed](topic:audit-the-model)
- [Leia elemendid klassi, nime või omaduse järgi](topic:find)
- [Kustuta, lõika, kopeeri ja kleebi elemente](topic:copy-paste)
