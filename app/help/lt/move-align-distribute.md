---
title: Perkelkite, kopijuokite, lygiuokite ir paskirstykite pastatų elementus
summary: Perkelkite sienas, perdangas, kolonas ir padėtus elementus pagal bazinį tašką ir antrą tašką arba įvestą atstumą, kopijuokite juos eidami ir sulygiuokite ar išdėstykite vienodai – plane arba pasirinkę iš 3D vaizdo.
keywords: perkelti, kopijuoti, lygiuoti, paskirstyti, tarpai, poslinkis, bazinis taškas, pastūmis, sienos, kolonos, perdangos, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Ką darysite

Perstumsite sieną, koloną, perdangą ar padėtą bibliotekos elementą į naują vietą, padarysite jų kopijas arba kelis elementus sulygiuosite, nebrėždami jų iš naujo.

## Pavadinimai ir klavišai

Komandos vadinasi {{ui:Perkelti}}, {{ui:Lygiuoti}} ir {{ui:Paskirstyti}}, ir komandinėje eilutėje galite įvesti `MOVE`, `ALIGN` ir `DISTRIBUTE`, kaip drafting programoje CadCraft. Vienas skirtumas: BimCraft {{key:M}} yra {{ui:Matuoti}}, todėl Perkelti turi savo klavišą – {{key:Shift+M}}. Įrankiai yra meniu {{ui:Versija}}.

## Perkelti

1. Pasirinkite, ką perkelti, plane arba 3D vaizde. Sienos, perdangos, kolonos ir padėti bibliotekos elementai gali būti pasirinkti vienu pasirinkimu.
2. Paspauskite {{key:Shift+M}} arba pasirinkite {{ui:Perkelti}}.
3. Spustelėkite bazinį tašką, tada antrą tašką. Arba po bazinio taško įveskite atstumą ir paspauskite {{key:Enter}}: elementas judės ta kryptimi, kur nuo bazinio taško nukreiptas žymeklis. Taip pat galite įvesti `dx,dy` (arba `@dx,dy`) ar `ilgis<kampas`.
4. Paspauskite {{key:C}}, kad įjungtumėte {{ui:Kopijuoti}}: tada kiekvienas perkėlimas daro kopiją ir paruošia kitą. Paspauskite {{key:Esc}}, kad sustabdytumėte.
Abu taškus taip pat galima spustelėti 3D vaizde: kai įjungtas Perkelti, žymeklis susitinka su aukšto grindų aukščiu, todėl spustelėjimas ten yra plano taškas. Laikydami nuspaustą {{key:Shift}}, spustelėkite, kad pasirinktumėte kitą elementą. Naudokite plano, viršaus, priekio ar šono vaizdą pagal norą: taškai visada guli tame aukšte.

Siena perkeliama kartu su savo durimis ir langais. Nubrėžtos grindys perkeliamos kartu su savo angomis. Kambariai, grindys ir lubos, sekančios sienas, atnaujinami. Sienos, kurios buvo prijungtos prie perkeltos sienos, lieka, kur buvo.

Kiekvienas perkėlimas yra vienas pakeitimas: vienas {{key:Mod+Z}} jį atšaukia, o jis pasiekia visus gyvoje TeamWork sesijoje. Padėto bibliotekos elemento tokiu būdu kopijuoti negalima; naudokite {{ui:Redaguoti}} › {{ui:Kopijuoti}} ir {{ui:Įklijuoti}}.

## Lygiuoti

Pasirinkite du ar daugiau elementų, pasirinkite {{ui:Lygiuoti}}, tada pusę (kairė, centras, dešinė, viršus, vidurys ar apačia) ir ką lygiuoti: visą pasirinkimą, pirmąjį pasirinktą, paskutinį pasirinktą arba spustelėtą tašką. Juostoje paspauskite {{ui:Lygiuoti}}.

## Paskirstyti

Pasirinkite tris ar daugiau elementų, pasirinkite {{ui:Paskirstyti}}, tada kryptį (skersai arba žemyn) ir tarpus: vienodi tarpai tarp jų arba vienodi centrai. Du galiniai lieka savo vietoje.

Sienos, kurias lygiavimas ar paskirstymas perkelia, išlaiko savo sujungimus, kaip ir perkeliant: siena, prijungta prie perkeltos sienos, slysta savo galu išilgai savo linijos, kad liktų prijungta; į ją atsiremiančios pertvaros keliauja kartu, o dvi prijungtos sienos, kurios abi perkeltos, išlaiko kampą ten, kur susitinka jų naujos linijos. Kambariai lieka uždaryti. Tai vienas žingsnis **Pakeitimuose**.
