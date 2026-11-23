---
title: Įkelkite savo objektus ir šeimų failus į biblioteką
summary: Skaitykite šeimų failus (.rfa) ir IFC, DWG, DXF, glTF ar OBJ failus skirtuke Biblioteka, įterpkite juos kaip bet kurį bibliotekos elementą ir laikykite skiltyje Mano objektai — privačiame sąraše, kurį matote tik jūs.
keywords: rfa, šeima, šeimos, šeimų biblioteka, savi objektai, mano objektai, privatūs objektai, privati biblioteka, importuoti objektus, gamintojo turinys, bim objektai, ifc objektas, gltf, obj, dwg blokas, laikyti, perjungti, migruoti
from: 886261f8
---

## Ką darysite

Įkelkite jau turimus objektus į BimCraft: šeimų biblioteką iš Revit, gamintojo IFC ar DWG atsisiuntimą, tinklelį iš kito modeliavimo įrankio. Failą skaitote skirtuke {{ui:Biblioteka}}, objektą įterpiate į modelį kaip tinkamą IFC elementą ir, jei norite jo vėliau, laikote skiltyje {{ui:Mano objektai}}.

## Žingsniai

1. Atverkite IFC modelį arba pradėkite naują pastatą.
2. Spustelėkite skirtuką {{ui:Biblioteka}} šalia {{ui:Savybės}}.
3. Spustelėkite {{ui:Failai…}}, tada {{ui:Pasirinkite failą…}}. Pasirinkite vieną failą arba kelis iš karto: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` arba `.csv`. Arba spustelėkite {{ui:Pasirinkite aplanką…}}, kad perskaitytumėte visą aplanką ir jame esančius aplankus (iki 200 failų vienu kartu).
4. Spustelėkite kortelę, kad pamatytumėte, kas perskaityta: plano peržiūrą, pavadinimą, gamintoją ir modelį, dydžius bei pastabas.
5. Spustelėkite {{ui:Įterpti į planą}} arba {{ui:Įterpti į modelį}}, kad jį įterptumėte.
6. Norėdami naudoti jį kituose projektuose, spustelėkite {{ui:Saugoti mano objektuose}}. Kai perskaitėte kelis failus, {{ui:Saugoti visus mano objektuose}} įrašo juos visus vienu kartu.
7. Vėliau spustelėkite {{ui:Mano objektai}} skirtuke Biblioteka, kad juos rastumėte. Jie įterpiami, keičiami ir atnaujinami kaip bet kuris bibliotekos elementas.

Failai skaitomi šiame skirtuke. Nieko nesiunčiama, kol nepasirinkote {{ui:Saugoti mano objektuose}}.

## Ką skaitoma iš kiekvienos failo rūšies

| Failas | Ką gausite |
|---|---|
| IFC | Kiekvienas elemento tipas kaip objektas su tikra 3D forma, IFC klase ir savybių rinkiniais |
| glTF, GLB, OBJ | Vienas objektas su tikra 3D forma kaip tinkleliu. Pirmiausia nustatykite vienetus ir kryptį aukštyn. |
| DWG, DXF | Kiekvienas blokas kaip objektas su jo plano brėžiniu ir atributais |
| Šeimos failas (`.rfa`) | Šeimos pavadinimas, kategorija, gamintojas, modelis, parametrai ir jos tipai. **Ne jos 3D forma:** vietoje jos stovi dėžė pagal šeimos plotį, gylį ir aukštį. |
| CSV | Vienas objektas kiekvienai eilutei: pavadinimas, dydžiai ir duomenys, nubraižyti kaip dėžė |

## Šeimos failai ir jų 3D forma

3D forma `.rfa` faile saugoma nedokumentuotu formatu, todėl BimCraft nuskaito šeimos duomenis ir nespėlioja jos geometrijos. Kortelė tai nurodo: „Geometrija iš šios šeimos nenuskaityta; vietoje jos stovi dėžė.“

Norėdami įkelti šeimą su tikra forma, eksportuokite ją iš programos, kuri ją sukūrė (Revit):

1. Atverkite šeimą arba projektą, kuriame ji įdėta.
2. Pasirinkite **Failas > Eksportuoti > IFC**. Žr. [eksporto parametrus, kurie čia geriausiai atsidaro](topic:rvt-to-ifc).
3. BimCraft perskaitykite `.ifc` failą su {{ui:Failai…}}. Kiekvienas šeimos tipas atkeliauja kaip atskiras objektas su savo forma ir savybių rinkiniais.

Daugelis gamintojų šalia šeimos failo siūlo IFC ar DWG atsisiuntimą. Tie failai skaitomi tiesiogiai.

## Šeimų tipai

Šeima su keliais tipais atkeliauja kaip vienas elementas su pasirinkimu {{ui:Variantas}}, po vieną variantą kiekvienam tipui. Kiekvienas variantas turi reikšmes, kurios skiriasi tarp tipų, ir savo dėžę, jei tipas turi plotį ir gylį. Šeima su vienu tipu yra paprastas elementas, užpildytas to tipo reikšmėmis.

Kai kurios šeimos laiko savo tipus tipų kataloge: `.txt` failas tuo pačiu pavadinimu šalia šeimos failo. Pasirinkite abu kartu arba pasirinkite aplanką, ir katalogo eilutės tampa variantais.

## Šeimos duomenys su tikra forma

Jei aplanke yra šeimos failas ir IFC, glTF ar OBJ failas tuo pačiu pavadinimu (`Chair.rfa` ir `Chair.ifc`), pasirinkite juos abu kartu arba pasirinkite aplanką. BimCraft sukuria vieną elementą: šeimos failas duoda pavadinimą, gamintoją, modelį, parametrus ir tipus, o kitas failas — tikrą 3D formą. Pastabose nurodoma, iš kurio failo paimta forma. Viena forma naudojama visiems tipams.

Kai šeimos faile įrašytas paveikslėlis, elemento duomenyse jis rodomas po plano brėžiniu. Paveikslėlis rodomas tik ten; jis su elementu neišsaugomas.

## Mano objektai

{{ui:Mano objektai}} yra jūsų asmeninis privatus sąrašas bibliotekoje. Tik jūs matote, kas jame yra: jis nepatenka į viešą biblioteką, į paiešką ar į jūsų komandos rodinį. Jis susietas su jūsų paskyra, todėl tie patys objektai bus ir kitame kompiuteryje, kai prisijungsite prie bibliotekos.

- Norint išsaugoti objektą, reikia būti prisijungus prie bibliotekos. Žr. [prisijungimas prie bibliotekos](topic:library-credits).
- Objekto išsaugojimas siunčia tik jį vieną į jūsų paskyrą. Iki tol jis lieka jūsų kompiuteryje.
- {{ui:Pašalinti iš mano objektų}} pašalina objektą iš sąrašo. Jau įterptos kopijos brėžiniuose lieka.
- Norėdami dalytis objektu su visais, įkelkite jį į viešą biblioteką pagal pasirinktą licenciją.

:::note
Mano objektai dar bandomi ir gali būti neatverti jūsų paskyrai. Jei šaltinis trūksta arba rodoma žinutė „Mano objektai dar neatverti šiai paskyrai“, vis tiek galite skaityti ir įterpti savo failus su {{ui:Failai…}}; jie išsaugomi jūsų modelio viduje.
:::

## Dažnos klaidos

- **Tikėtis šeimos tikros formos iš `.rfa`.** Skaitomi tik jos duomenys. Formai eksportuokite IFC.
- **Du elementai ten, kur tikėtasi vieno.** Šeima ir jos formos failas sujungiami tik tada, kai jų pavadinimai sutampa tiksliai, nepaisant galūnės, ir yra tame pačiame aplanke.
- **Tinklelis atkeliauja tūkstantį kartų per didelis arba guli ant šono.** Prieš pasirinkdami failą, nustatykite {{ui:Failo vienetai}} ir {{ui:Tinklelio aukštyn krypties ašis}} skiltyje {{ui:Failai…}}.
- **„Nėra šeimos duomenų“ faile.** Tai projektas (`.rvt`, išsaugotas su kitu galūne) arba šeimos šablonas, o ne šeima. Žr. [Perskaitykite projekto ar šeimos failą](topic:read-rvt-file).
- **Saugoti turinį, kurio saugoti neleidžiama.** Kai kurios mokamos bibliotekos neleidžia kopijuoti už savo paslaugos ribų. Patikrinkite sąlygas turinio, kurio nesukūrėte.
