---
title: Modelio grupės
summary: Sujunkite pasirinktus elementus į vieną pavadintą grupę, vėl padėkite grupę kitur ir pakeiskite vieną kopiją – pasikeis visos kopijos.
keywords: grupė, modelio grupė, grupavimas, išskaidyti grupę, egzempliorius, kopija, kartoti, tipinis vienetas, angos, butas, redaguoti grupę, IfcGroup
from: 121c5027
---

## Ką darysite

Sugrupuosite tipinę angą, padėsite ją kelis kartus ir pakeisite visas kopijas pakeisdami vieną.

## Kur yra įrankis

- Juostos išdėstymas: {{ui:Architektūra}} › **Modelis** › {{ui:Modelio grupė}}.
- Klasikinis išdėstymas: braižymo juosta › meniu {{ui:Patalpos}} › Modelio grupė.

## Veiksmai

1. Įrankiu Pasirinkti išrinkite elementus: spustelėkite vieną, kitus – Ctrl+spustelėjimu arba Shift+spustelėjimu.
2. Pasirinkite {{ui:Modelio grupė}}. Elementai iš karto tampa grupe. Pirma įveskite {{ui:Grupės pavadinimas}} eilutėje, kad ją pavadintumėte, arba vėliau įveskite naują pavadinimą, kad pervadintumėte.
3. Paspauskite {{ui:Įdėti kitą}} ir spustelėkite, kur turi stovėti kopija: jos apatinis kairysis kampas patenka į spustelėjimo vietą.
4. Pakeiskite bet kurią kopiją: perkelkite sienos galą, pakeiskite durų dydį, ištrinkite koloną. Visos kitos grupės kopijos pasikeičia tuo pačiu žingsniu, o vienu anuliavimu viskas atšaukiama.
5. Kol įrankis {{ui:Modelio grupė}} yra aktyvus, spustelėjimas ant elemento pasirenka visą jo grupę.

## Kiti dalykai, kuriuos galite daryti

- {{ui:Pridėti pasirinktus}}: pridėkite daugiau elementų prie paskutinę kartą pasirinktos grupės.
- {{ui:Išskaidyti grupę}}: ši kopija tampa įprastais elementais. Kitos kopijos lieka grupe.
- Visą kopiją perkelkite su {{ui:Perkelti}}: tai ta pati grupė naujoje vietoje; kitos nejuda.
- Ištrynus kopijos elementus, ta kopija dingsta.

## Ką gali turėti grupė

Sienos su durimis ir langais, kolonos bei nubrėžtos grindys gali būti vėl padedamos ir išlaikomos vienodos. Grupėje gali būti ir kitų elementų, bet tada jos dar negalima padėti iš naujo; eilutė paaiškina kodėl.

Kopijos perkeliamos, o ne pasukamos ar atspindimos.

## IFC faile

Grupė yra IfcGroup su IfcRelAssignsToGroup ryšiu su jos nariais, kurie lieka įprastomis sienomis, kolonomis ir grindimis. Kiekviena tos pačios grupės kopija turi tą patį apibrėžties id.

## Dar neįgyvendinta

- Kopijos sukimas ar atspindėjimas.
- Laiptai, stogai, kambarių grindys ir bibliotekos elementai grupėje, kuri vėl padedama.
- Sienos profilis, nuolydis ir sienos angos nepatenka į kopijas.
- Grupės grupėse.

Taip pat žr. [Perkelkite, lygiuokite ir paskirstykite](topic:move-align-distribute).
