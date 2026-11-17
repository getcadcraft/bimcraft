---
title: Pakeiskite įdėtą elementą ir atnaujinkite bibliotekos elementus
summary: Pakeiskite vieną įdėtą bibliotekos elementą kitu, išlaikydami jo vietą ir elemento numerį, ir tikrinkite Biblioteką, ar nėra naujesnių visų modelio elementų versijų.
keywords: keisti, pakeisti, pakaitalas, atnaujinti, naujesnė versija, tikrinti atnaujinimus, biblioteka, atšauktas, licencijos pakeitimas, elemento numeris
from: 8bdfe01d
---

## Ką darysite

Pakeiskite savo nuomonę dėl elemento nebeperkeldami jo ir palaikykite bibliotekos elementus modelyje aktualius.

## Pakeisti vieną elementą

1. Spustelėkite įdėtą bibliotekos elementą modelyje.
2. Savybėse, **Bibliotekos elementas** langelyje, spustelėkite {{ui:Pakeisti elementą…}}. Atsidaro {{ui:Biblioteka}} skirtukas.
3. Raskite naują elementą ir spustelėkite jo kortelę.
4. Spustelėkite {{ui:Pakeisti … į šį}}.

Elementas išlaiko savo vietą, posūkį, aukštą, elemento numerį, kiekį ir pastabas. Jo tipas, forma ir duomenys pasikeičia į naujojo elemento. Panašiai įdėti elementai turi bendrą tipą, kaip ir įdedant.

Elementas, turintis variantų (žr. [Įdėti ir pakeisti bibliotekos elementą, turintį variantų](topic:library-variants)), keičiant parodo savo kitus variantus {{ui:Biblioteka}} skirtuko viršuje: po vieną spustelėjimą kiekvienam.

Kai naujasis elementas yra kitokio tipo daiktas, pavyzdžiui kriauklė vietoj stalo, elemento IFC klasė pasikeičia atitinkamai (čia iš baldų elemento į sanitarinį galinį įrenginį), kad kita programinė įranga jį tvarkaraštyje rodytų teisingai. Tai tas pats elementas su tuo pačiu GlobalId, todėl nuorodos į jį vis dar veikia. {{key:Mod+Z}} grąžina seną klasę su senu elementu.

## Tikrinti atnaujinimus

1. Spustelėkite {{ui:Atnaujinimai}} įrankių juostoje (arba {{ui:Tikrinti atnaujinimus}} bibliotekos elemento langelyje).
2. Perskaitykite sąrašą: kiekvienas bibliotekos elementas modelyje su versija modelyje, naujausia versija ir būsena: **Atnaujinta**, **Naujesnė versija**, **Atšauktas** arba **Nerastas**. Taip pat nurodoma, kas pasikeitė (geometrija, duomenys, licencija ar pataisa).
3. Spustelėkite {{ui:Atnaujinti}} eilutėje arba {{ui:Atnaujinti visus}}.

## Ką turėtumėte matyti

- „Atnaujinta *n* įdėjimų. Vietos, elementų numeriai, kiekiai ir pastabos išsaugomi.“
- Pakeitimų sąraše eilutės „Atnaujinta: *elementas*“. {{key:Mod+Z}} atšaukia kiekvieną.

## Verta žinoti

- Tikrinami tik elementai, atėję iš bibliotekos. Failų elementai neturi bibliotekos identifikatoriaus.
- Pakeitus licenciją, jau įdėta kopija išlaiko licenciją, su kuria atėjo, kol ją atnaujinsite.
- **Atšauktas** elementas nesiūlomas naujiems įdėjimams. Elementas, atšauktas dėl autorių teisių, visai negali būti atsisiųstas; pakeiskite jį su {{ui:Pakeisti elementą…}}.
- Įdėtas variantas lieka tuo pačiu variantu, jei naujesnė elemento versija jį dar turi; kitaip jis įgyja numatytąjį elemento variantą.
- Tikrinimas siunčia tik elementų identifikatorius ir versijas, niekada jūsų modelio.
