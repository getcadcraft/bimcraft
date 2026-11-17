---
title: Durys ir langai
summary: Įdėkite duris ir langus nubrėžtose sienose: nukreipkite į sieną, pamatykite atsidarymą ir atstumus iki kampų, spustelėkite; sienos anga išsipjauna pati.
keywords: durys, langas, langai, anga, atsidarymas, vyris, kryptis, apversti, stumdomos durys, durys į sieną, garažo vartai, dvigubos durys, varstomas langas, viengubas langas, dvigubas langas, slenkamas langas, nejudantis langas, palangė, antbalkis, sulankstomos durys, prancūziškos durys, ūkio durys, šoniniai langai, įėjimo durys, iškabamas langas, panoraminis langas, antšviesis langas
from: 4d8ac009
---

## Ką darysite

Įdėkite duris ir langus sienose, kurias nubraižėte ([Braižykite sienas](topic:draw-walls)). Nukreipkite į sieną, ir durys ar langas parodys, kur jie bus, kuria kryptimi atsidarys ir kiek yra iki kiekvieno kampo. Spustelėkite, ir anga pati išsipjauna sienoje plane ir 3D.

## Įdėkite duris

1. Įjungę {{ui:Braižymas}}, spustelėkite {{ui:Durys}} (arba paspauskite {{key:D}}).
2. Pasirinkite tipą: **Viengubos atsidarančios durys**, **Dvigubos atsidarančios durys**, **Stumdomos durys**, **Durys į sieną**, **Garažo vartai**, **Sulankstomos spintos durys**, **Prancūziškos durys**, **Ūkio durys (ant sienos)** arba **Įėjimo durys su šoniniais langais**. Įprastas dydis užpildo **W** ir **H**; pasirinkite kitą iš šalia esančio dydžių sąrašo arba įveskite kitus, pavyzdžiui, `2'-8"` arba `800`. Sąraše taip pat yra šio modelio durų šeimos (žr. [Šeimos ir jų dydžiai](topic:families)).
3. Nukreipkite į sieną. Durų simbolis seka žymeklį išilgai sienos, o atstumas nuo kiekvieno šio paviršiaus galo rodomas plane.
4. Durys atsidaro į tą sienos pusę, kurioje yra žymeklis. Paspauskite {{key:H}} (arba spustelėkite {{ui:Apversti}}), kad vyriai būtų kitame gale.
5. Spustelėkite. Durys įdėtos, o įrankis lieka įjungtas kitoms. Nukreipkite į sienos vidurį, ir durys pačios centruojasi.

Norėdami įdėti tiksliu atstumu, nukreipkite į sieną arti kampo, nuo kurio matuojate, įveskite atstumą (pavyzdžiui, `2'` arba `600`) ir paspauskite {{key:Enter}}. Atstumas matuojamas nuo artimesnio sienos paviršiaus galo iki durų krašto.

## Įdėkite langą

1. Spustelėkite {{ui:Langas}} (arba paspauskite {{key:N}}).
2. Pasirinkite tipą: **Nejudantis langas**, **Viengubas langas**, **Dvigubas langas**, **Varstomas langas**, **Slenkamas langas**, **Iškabamas langas**, **Panoraminis langas** arba **Antšviesis langas**, ir jo **W**, **H** bei **Palangė** (lango apačios aukštis virš grindų).
3. Nukreipkite į sieną ir spustelėkite arba įveskite atstumą ir paspauskite {{key:Enter}} kaip durims. Langas stovi sienos išorėje.

## Perkelkite, apverskite, naikinkite

- Įjungę {{ui:Pasirinkti}}, vilkite duris ar langą išilgai sienos. Vilkite jį į kitą sieną, kad perkeltumėte ten.
- {{key:Delete}} naikina pažymėtas duris ir langus; siena užsidaro.
- Perkėlus ar ištrynus sieną, perkeliama arba naikinama tai, kas joje yra. Kai sienos pradžia juda išilgai savo linijos, jos durys ir langai išlieka savo vietoje.
- {{ui:Anuliuoti}} ir {{ui:Perdaryti}} atšaukia ir atkuria kiekvieną įdėjimą, perkėlimą ar naikinimą.

## Kas neleidžiama

- **Netelpa toje sienoje.** Durys ar langas per platūs sienai arba išsikištų per jos galą. Pabandykite trumpesnį plotį arba ilgesnę sieną.
- **Jis aukštesnis už sieną.** Palangė pliusas aukštis yra virš sienos viršaus.

## Kas išsaugoma

Kiekvienos durys ar langas yra IFC durys ar langas su savo dydžiu, veikimu (pavyzdžiui, viengubas atsidarymas kairėn), dydžio tipu (vienas tipas kiekvienam šeimos dydžiui), `Pset_DoorCommon` arba `Pset_WindowCommon` ir pagrindiniais kiekiais, užpildantis IFC angą jos sienoje. Sienos grynasis šoninis plotas ir tūris angos neįskaito. Kitos BIM programos atidaro jį kaip duris sienoje.

## Verta žinoti

- Plane durys rodomos atidarytos 90° su savo atsidarymu, stumdomos durys – kaip du sparnai, durys į sieną – įslystančios į sieną, garažo vartai – brūkšnine linija virš galvos, o langai – su rėmo ir stiklo linijomis.
- Plotis yra visas rėmo plotis; durų varčia yra plotis, atėmus abi staktas.
- Nubraižytų durų ir langų kopijavimas dar neįgyvendintas: įdėkite kitą.

## Rūsio evakuacinis langas ir duobė

Pasirinkite **Rūsio evakuacinis langas su duobe** langų tipų sąraše. Jis prasideda kaip 36 × 48 colių varstomas langas, kurio palangė 36 coliai virš lygio. Duobė yra sienos išorėje, su bent 48 colių švariu pločiu, 36 colių išsikišimu ir apačia 6 coliais žemiau palangės. Plane ji rodoma brūkšninėmis linijomis, 3D – kaip trys atvirais viršais šonai. Duobė yra lango IFC kūno dalis, todėl išsaugojimas, perkėlimas, dydžio keitimas ar naikinimas lango kartu ją nusineša. Keičiant dydį, prie kiekvienos staktos lieka bent 6 coliai.

Tai yra modeliavimo numatytosios reikšmės, ne atitikties liudijimas. Atskirai patikrinkite tikrą gamintojo nurodytą laisvą angą, vietinius reikalavimus, žemės lygį, drenažą ir bet kokius reikalingus kopėčių atstumus. Duobės gylis ir aukštis yra iš anksto nustatyti matmenys; jie neseka reljefo.
