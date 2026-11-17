---
title: Joonise kontrollimine prindivaates
summary: Lülita DWG või DXF prindivaatele, et näha seda mustvalgelt koos joonepaksustega ja ilma kihtideta, mida ei prindita.
keywords: prindi, trükk, eelvaade, trükieelvaade, joonepaksus, mustvalge, must-valge, defpoints, ei prindita
from: 1a59c23e
---

## Mida sa teed

Vaata, kuidas leht paberil välja näeb enne printimist programmist, mis selle tegi: mustvalgelt, joonepaksused õiges laiuses ja ilma kihtideta, mis on seatud mitte printima.

## Sammud

1. Ava DWG- või DXF-joonis.
2. Klõpsa joonise kohal olevat lehevahelehte.
3. Klõpsa vahelehtede lõpus {{ui:Prindivaade}} või vajuta {{key:P}}.
4. Suumi detaili peale, et võrrelda paksusid ja õhukesi jooni.
5. Klõpsa uuesti {{ui:Prindivaade}} või vajuta {{key:P}}, et naasta tavapäraste värvide juurde.

## Mida peaksid nägema

- Valge paber hallil laual, iga joon ja tekst on mustad, olenemata teemast.
- Joonepaksused: lehel joonistatakse iga paksus oma tegelikus laiuses paberil, nii et 0.5 mm joon on kaks korda paksem kui 0.25 mm joon igal suumitasemel. Joont ei joonistata kunagi õhemana kui selle ekraanipaksus.
- Kihid, mis on seatud mitte printima, ja kiht DEFPOINTS on peidetud.
- Nupp {{ui:Prindivaade}} jääb sisselülitatuks. Prindivaade jääb sisse, kui vahetad lehte või avad teise joonise, kuni lülitad selle välja.

Vaates {{ui:Mudel}} kasutab prindivaade ainult ekraanipaksusi (õhukesed jooned ühe pikslina, paksemad veidi jämedamana), sest mudeliruumil ei ole paberi formaati.

## Levinud vead

- **Ootad, et see prindib.** Prindivaade on eelvaade. Printimine ja PDF-eksport ei ole BimCraftis veel sisse ehitatud; prindi programmist, mis joonise tegi.
- **Ootad printimisstiile.** Pliiatabeleid ja trükistiilide värve ei loeta. Kõik on lihtsalt must.
- **Vajutad P tekstiväljas kirjutamise ajal.** {{key:F}} ja {{key:P}} ei tee midagi, kui kirjutad väljale või kui on näidatud seadmete loend.
