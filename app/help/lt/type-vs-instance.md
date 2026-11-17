---
title: Pakeiskite tipo savybę kiekvienam to tipo elementui
summary: Atskirkite tipo savybes nuo egzemplioriaus savybių, pakeiskite reikšmę tipe, kad kiekvienas elementas sektų, ir patikrinkite, ar vieno elemento redagavimas lieka tik jo.
keywords: tipas, egzempliorius, tipo savybės, šeimos tipas, bendras, kopija rašant, visi elementai, masinis redagavimas, gamintojas, modelis
from: bffd8789
---

## Ką darysite

Nustatykite durų tipo gamintoją, kad kiekvienos to tipo durys jį rodytų, tada suteikite vienoms durims savo gaisrinį atsparumą, nepaliesdami kitų. Tai parodo tipo ir egzemplioriaus savybių skirtumą BimCraft.

## Tipas ar egzempliorius?

- **Egzemplioriaus** savybė priklauso vienam elementui: jo žymė, ženklas, patalpa, jo paties gaisrinis atsparumas.
- **Tipo** savybė priklauso tipui, kurį bendrina daug elementų: gamintojas, modelis, durų tipo plotis.

Skydelyje {{ui:Properties}} rinkiniai, gaunami iš tipo, turi „ (type)“ po pavadinimo ir eilutę „Type property: a change here applies to every element of this type.“ Kiti rinkiniai priklauso pačiam elementui. **Tipas** pirmame bloke rodo tipo pavadinimą.

## Žingsniai: pakeiskite tipą

1. Atidarykite IFC modelį ir spustelėkite duris.
2. Pažiūrėkite jų **Tipas** pirmame {{ui:Properties}} skydelio bloke, pavyzdžiui, „Single-Flush 900 x 2100“.
3. Slinkite iki rinkinio, kurio pavadinimas baigiasi „(type)“.
4. Spustelėkite reikšmę, kurią norite pakeisti, pavyzdžiui, **Manufacturer**.
5. Įveskite naują reikšmę ir paspauskite {{key:Enter}}.
6. Pažiūrėkite į {{ui:Changes}} sąrašą: įrašas baigiasi „(type)“.
7. Spustelėkite kitas to paties tipo duris.
8. Patikrinkite tą pačią reikšmę: ji rodo ir naują reikšmę.

## Žingsniai: pakeiskite tik vieną elementą

1. Spustelėkite vienas duris.
2. Atidarykite rinkinį be „(type)“ pavadinime, pavyzdžiui, `Pset_DoorCommon`.
3. Spustelėkite reikšmę, pavyzdžiui, **FireRating**, įveskite naują reikšmę ir paspauskite {{key:Enter}}.
4. Spustelėkite greta esančias duris to paties tipo.
5. Patikrinkite tą pačią reikšmę: ji vis dar rodo seną reikšmę.

Net jei eksportuotojas tarp abiejų durų bendrino tą savybių rinkinį, BimCraft pirmoms durims prieš keičiant suteikė savo kopiją. Žr. [Kodėl jūsų redagavimas keičia tik vieną elementą](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Įrašykite

1. Spustelėkite {{ui:Save as IFC}} arba paspauskite {{key:Mod+S}}.
2. Atidarykite įrašytą kopiją BimCraft ar bet kurioje IFC peržiūros programoje, kad patikrintumėte abu pakeitimus.

## Dažnos klaidos

- **Ne kiekvienas modelis turi tipų.** Kai kurie eksportuotojai neįrašo tipo objektų arba viską talpina egzemplioriuje. Tuomet nėra „(type)“ rinkinių, ir kiekvienas elementas turi būti keičiamas atskirai.
- **Ta pati reikšmė atsiranda ir tipo, ir egzemplioriaus rinkinyje.** Kai kurie eksportuotojai parametrą įrašo abiejose vietose. Kitos programos gali skaityti bet kurią iš jų; jei norite, kad jos sutaptų, pakeiskite abi.
- **Tikimasi pasirinkti „visas šio tipo duris“ ir redaguoti jas kartu.** Šioje versijoje daugelio pasirinkimo nėra. Tipo savybė yra būdas pakeisti daug elementų iš karto.
