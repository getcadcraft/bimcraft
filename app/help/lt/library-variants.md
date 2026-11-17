---
title: Įterpti ir pakeisti bibliotekos elementą, turintį variantų
summary: Kai kurie bibliotekos elementai būna kelių dydžių ar parinkčių. Prieš įterpdami pasirinkite variantą, matykite, koks variantas yra įterptas elementas, pakeiskite jį kitu variantu vienu spustelėjimu ir išsaugokite, kai elementas atnaujinamas.
keywords: variantas, variantai, dydžiai, parinktys, konfigūracija, biblioteka, librarycraft, įterpti, pakeisti, konfigūratorius, šeima, tipas, atnaujinimas, jungtys
from: c05f0af3
---

## Ką darysite

Įterpkite bibliotekos elementą reikiamu dydžiu ar parinktimi ir vėliau pakeiskite nuomonę, neįterpdami jo iš naujo. Elementas su variantais yra vienas bibliotekos elementas (vienas pavadinimas, viena licencija, viena versija) su lentele variantų, kuriais jis pateikiamas: pavyzdžiui, montavimo plokštė Small, Medium ir Large dydžiais arba ta pati plokštė be skylių.

## Pasirinkite variantą ir įterpkite

1. Atidarykite skirtuką {{ui:Biblioteka}} ir spustelėkite elemento kortelę.
2. Po pavadinimu pasirinkimas {{ui:Variantas}} rodo kiekvieną variantą su dydžiu. Elemento numatytasis variantas pasirenkamas pirmas.
3. Pasirinkite vieną. Planas, dydis ir 3D kūno eilutė seka jūsų pasirinkimą.
4. Spustelėkite {{ui:Įterpti į planą}} (arba {{ui:Įterpti į modelį}} 3D vaizde) ir įterpkite kaip bet kurį elementą: žr. [Įterpti įrangą ir baldus iš bibliotekos](topic:place-from-library).

Įterptas elementas pavadinamas pagal elementą ir variantą, pavyzdžiui *Montavimo plokštė — Large*, kad **Įrangos** žiniaraštis ir medis juos atskirtų. Kiekvienas variantas yra atskiras IFC tipas: tą patį variantą įterpus du kartus, jie dalijasi vienu tipu, o kitas variantas gauna savo.

## Pamatykite, koks variantas yra įterptas elementas

Pasirinkite elementą. **Savybėse** lauke **Bibliotekos elementas** yra eilutė **Variantas**. IFC ją saugo `CadCraft_LibraryItem`: `Variant` (varianto id), `VariantName` ir `VariantValues` (parinkčių reikšmės tekstu), kad kitos programos galėtų ją perskaityti.

## Pakeiskite į kitą variantą

1. Pasirinkite įterptą elementą ir spustelėkite {{ui:Pakeisti elementą…}} lauke **Bibliotekos elementas**. Atsidaro {{ui:Biblioteka}} skirtukas.
2. Viršuje **Kiti variantai, skirti** *elementui* rodo kiekvieną variantą su dydžiu. Įterptasis pažymėtas ir negali būti pasirinktas.
3. Spustelėkite {{ui:Keisti į …}} variantą, kurį norite.

Elementas išlaiko savo vietą, posūkį, aukštą, elemento numerį, kiekį ir pastabas; jo tipas, forma ir duomenys pasikeičia į kitą variantą. {{key:Mod+Z}} grąžina pirmąjį. Vietoj to galite pasirinkti bet kurį kitą elementą iš žemiau esančio sąrašo, kaip anksčiau: žr. [Pakeisti įterptą elementą ir atnaujinti bibliotekos elementus](topic:swap-and-update-library-items).

## Kopijavimas, įklijavimas ir atnaujinimai

- Įterpto varianto kopija yra tas pats variantas: šiame modelyje ir kitame modelyje, atidarytame tame pačiame naršyklės skirtuke, per Kopijuoti ir Įklijuoti.
- **Atnaujinimai** išlaiko variantą: jei naujesnėje elemento versijoje jis vis dar yra, įterpimas tampa tos naujos versijos variantu. Jei naujoje versijoje jo nebėra, įterpimas gauna numatytąjį elemento variantą.

## Verta žinoti

- Tik kai kurie bibliotekos elementai turi variantus. Kortelės to nenurodo; {{ui:Variantas}} pasirinkimą pamatote, kai ją atidarote.
- Elementas gali nurodyti **jungtis** (ports – sujungimo taškus vamzdžiams ir orlaidėms) kiekvienam variantui. Biblioteka skirtuke rodo, kiek jų turi variantas. Jos dar **nerašomos** į IFC, kai elementą įterpiate iš bibliotekos skirtuko.
- Variantas be 3D kūno įterpiamas su pakaitine dėžute, kaip ir bet kuris 2D simbolis.
- Dydžiai pasirinkime pateikiami milimetrais, kaip juos rašo biblioteka.
