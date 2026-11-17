---
title: Raporti i dosjes: rolet, statuset dhe lidhjet
summary: Çdo etiketë në raportin e dosjes, çfarë do të thotë, dhe si zgjidhet sugjerimi Fillo këtu.
keywords: raport dosjeje, rolet, statusi, i plotë, i paplotë, i palexueshëm, i lidhur, sfond, fillestar, qendror, familje, vetëm kopje rezervë, fillo këtu, statusi i lidhjes
from: b35bdd10
---

## Statusi i kopjes

Çdo kopje e një modeli, skedari kryesor dhe kopjet rezervë të numëruara, merr një kontroll të kokës.

| Etiketa | Kuptimi |
|---|---|
| **I plotë** | Koka dhe indeksi i skedarit përshtaten brenda skedarit |
| **I paplotë** | Skedari është më i shkurtër se indeksi i vet: u ndërpre gjatë kopjimit, ngarkimit ose sinkronizimit, ose është një skedar në re që është ende vetëm "online" |
| **I palexueshëm** | Skedari nuk është një skedar i vlefshëm i përbërë, ose nuk mund të lexohej |

Te kolona **Statusi** një model shfaq **I plotë**, një "*n* të paplota" me ngjyrë qelibari kur të paktën një kopje është e dëmtuar por një tjetër është e shëndoshë, ose **I paplotë** me ngjyrë të kuqe kur asnjë kopje nuk është e shëndoshë.

## Kopjet rezervë

Skedarët e emërtuar `Name.0001.rvt`, `Name.0002.rvt` e kështu me radhë janë kopje rezervë të numëruara të `Name.rvt`. Grupohen nën modelin e tyre, më të rejat e para, në **Të gjitha kopjet …**. Karta lexohet nga skedari kryesor kur është i plotë, ose nga kopja rezervë më e fundit e plotë ("më e fundit e plotë").

## Rolet

Shfaqen me kursiv nën emrin e një modeli.

| Roli | Kuptimi |
|---|---|
| Lidhur nga *një model tjetër*: sfond | Një model tjetër në dosje e lidh këtë, kështu që ka shumë gjasa të jetë sfondi i dikujt tjetër, si modeli i një konsulenti |
| Skedar fillestar ose pa emër | Një emër si Blank, Template, Default, Untitled ose Project1: një pikënisje, ose një skedar që nuk u emërtua kurrë siç duhet |
| Model qendror | Një model qendror i punuar me shumë përdorues. Puna bëhet në një kopje lokale, jo këtu |
| Familje (një pjesë) | Një skedar `.rfa` ose `.rft`: një komponent, jo projekti |
| Vetëm kopje rezervë | Skedari kryesor është zhdukur dhe kanë mbetur vetëm kopjet rezervë të numëruara |

## Si zgjidhet Fillo këtu

BimCraft zbaton arsyetimin që do të zbatonte një përdorues me përvojë:

1. Kandidatët janë skedarë projekti të lexueshëm (`.rvt`, `.rte`) që nuk janë lidhur nga një model tjetër dhe nuk janë fillestarë.
2. Modelet qendrorë dhe ato vetëm me kopje rezervë llogariten vetëm kur nuk ka asgjë më të mirë.
3. Midis kandidatëve, ai që u ruajt më së fundi fiton.

Kutia liston arsyet e saj, dhe paralajmëron kur një skedar që duket si zgjedhja e qartë është i dëmtuar, kur modele të tjera janë sfond, dhe kur zgjedhja është një model qendror. Është një supozim i mirë; kontrollo me atë që e punoi projektin për herë të fundit.

## Statusi i lidhjes

| Etiketa | Kuptimi |
|---|---|
| **Në këtë dosje** | Gjendet te rruga relative e ruajtur, ose në fund të rrugës së plotë të ruajtur brenda dosjes |
| **U gjet emër i njëjtë** | Jo te rruga e vet, por një skedar me të njëjtin emër është në dosje. Kontrollo që është ai i duhuri |
| **Skedar biblioteke** | Një tabelë kodesh shënimesh ose kodesh montimi. Këto vijnë me programin në çdo kompjuter |
| **Nuk është në këtë dosje** | Nuk u gjet askund në dosje |

Kolona **Lidhjet e gjetura** te **Modelet** tregon sa nga lidhjet e një modeli u gjetën, nga ato që pritet të jenë në dosje (skedarët e bibliotekës nuk numërohen).

## Lënë mënjanë

| Rreshti | Kuptimi |
|---|---|
| Dosjet e pastrimit të Revit (nuk lexohen) | Dosjet `*_backup`, `*_log` dhe `Revit_temp`, plus dosjet e fshehura dhe `__MACOSX` |
| Mbetje kyçjeje, regjistrimi dhe kopjimi | Skedarët `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` dhe `.slog` |
| Skedarë të tjerë | Gjithçka tjetër (të parët 40 emërtohen) |
