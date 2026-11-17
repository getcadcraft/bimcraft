---
title: Šeimos ir jų dydžiai
summary: Durys, langai ir baldai pateikiami šeimomis. Kiekvienas šeimos dydis yra vienas tipas IFC faile, todėl tipų sąrašas BimCraft lieka trumpas, o kitos programos skaito paprastus tipus.
keywords: šeima, šeimos, tipas, tipai, dydis, dydžiai, durų tipas, langų tipas, baldai, stalas, lentyna, spintelė, naujas dydis, dubliuoti, įdėti šeimą, šeimos failas, ccfamily, ifc biblioteka, projekto biblioteka, grupė, matomumas, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Kas yra šeima

Šeima – tai vienos rūšies daiktas keliais dydžiais: viena atviriamoji durų varčia, kuri gaminama 32, 36 ir 42 in pločio, arba stalas, kuris gaminamas ilgas ir trumpas. BimCraft šeimą matote vieną kartą, o po ja – jos dydžiai, o ne ilgas tipų sąrašas.

IFC neturi šeimų. Faile kiekvienas dydis yra įprastas tipas (durų tipas, langų tipas, baldų tipas…), o šeima yra grupė, kurioje išvardyti jos dydžiai. Kitos BIM programos skaito tipus ir grupę tokius, kokie jie yra; BimCraft iš jų atkuria šeimą.

## Kur jas rasti

- Projekto naršyklės grupė **Šeimos** išvardija šio modelio šeimas, su tuo, kiek dydžių turi kiekviena ir kiek jų įdėta. Žemiau jų yra **Pradinės šeimos**: Durų ir Langų įrankių durys ir langai, taip pat stalas, lentynų blokas ir apatinė spintelė.
- {{ui:Build}} › {{ui:Families…}} rodo tą patį sąrašą lange.
- Spustelėkite šeimą, kad ją atidarytumėte: jos dydžius, kiekvieno dydžio reikšmes ir kiek elementų naudoja kiekvieną.

## Durys ir langai

Durų ir langų įrankiai išvardija tos rūšies šeimas, o šalia – **dydžių sąrašą**. Pasirinkite dydį arba įveskite **W** ir **H**: plotis ir aukštis, kurių nė vienas dydis dar neturi, tampa nauju šeimos dydžiu, kai įdedate duris. Tokio paties dydžio durys naudoja vieną tipą.

Skiltyje {{ui:Properties}} pasirinktos durys ar langas rodo savo **Šeima** ir **Dydis**. Pasirinkite kitą dydį iš sąrašo arba įveskite naują plotį ar aukštį. {{ui:Open the family}} atidaro šeimą, kuriai jis priklauso.

Kiekvienų durų ar lango rėmas seka savo sienos storį, kaip ir anksčiau, prieš šeimas. Dydžio tipas taip pat išlaiko duris, nubrėžtas 140 mm sienoje, programoms, kurios skaito tipus.

## Naujas dydis iš šios šeimos

1. Atidarykite šeimą.
2. Po **Naujas dydis iš šios šeimos** įveskite jos reikšmes (Plotis, Aukštis ir kiti šeimos parametrai) ir, jei norite, pavadinimą. Be pavadinimo jis pavadinamas pagal savo reikšmes.
3. Spustelėkite {{ui:Make the size}}.

Du dydžiai negali turėti tų pačių reikšmių. **Pervadinti** keičia dydžio pavadinimą; **Pašalinti** pašalina dydį, kurio niekas nenaudoja; **Pasirinkti** pasirenka to dydžio elementus.

## Įdėkite baldus

1. {{ui:Build}} › {{ui:Place family}}, arba {{ui:Place}} šeimos lange.
2. Juostoje pasirinkite šeimą ir jos dydį.
3. Spustelėkite plane, kad įdėtumėte ją aukšte. Prieš spustelėdami, paspauskite {{key:R}}, kad pasisuktų 90°. {{key:Esc}} – sustoja.

Įdėto gabalo {{ui:Properties}} rodo jo dydį, vietą ir kiek jis pasuktas; {{key:Delete}} jį pašalina. Visi to paties dydžio gabalai naudoja to dydžio formą, todėl pakeitus šeimą, pakinta visi.

## Dydžiai iš lentelės

{{ui:Sizes from a table…}} šeimos lange nuskaito CSV failą (kablelis, kabliataškis arba tabuliacija). Pirmoje eilutėje įvardijami stulpeliai: parametro pavadinimas arba etiketė, o pasirinktinai `Name`. Ilgiai yra milimetrais, nebent parašysite vienetą (`1.2 m`, `36 in`); stulpeliai Yes / No priima yes, no, true, false, 1 arba 0, o parametras be stulpelio išlaiko savo numatytąją reikšmę. Kiekviena eilutė tampa dydžiu vienu žingsniu, kurį galite atšaukti; dydis, kuris jau yra, praleidžiamas. Viena eilutė, kurios neperskaitoma arba kurios šeima negali nubraižyti, atmeta visą lentelę ir nurodo savo eilutės numerį. Daugiausia 200 eilučių ir 1 MB. {{ui:Save the sizes as a table}} įrašo tą pačią lentelę atgal.

## Nustatykite kiekvienam elementui

Parametras, pažymėtas **Per element** redaktoriuje (Yes / No, kuris prideda antvirštę, etiketę ar medžiagą), nėra dydžio dalis: dvejos to paties dydžio durys gali skirtis. Pasirinkite elementą, ir **Savybės** rodo šiuos parametrus; pakeitus vieną, tas elementas perbraižomas su savo forma (baldai ir įranga gauna savo formą, durys ir langai vėl sukuriami savo sienose). Visus nustatę atgal į numatytąsias reikšmes, jis grįžta prie savo dydžio formos.

## Detalumo lygis

{{ui:Build}} › {{ui:Families…}} › **Detalumo lygis** nustato kiekvienai modelio šeimai, kas įrašoma kūnuose ir braižoma plano simboliuose: **Smulkus** išlaiko viską, **Vidutinis** ir **Grubus** praleidžia dalis, kurias redaktorius pažymi kaip smulkesnes (mažesni failai, greitesni vaizdai). **Automatinis** įrašo viską ir leidžia lapo vaizdui parinkti pagal jo mastelį: 1:50 ir didesnis – smulkus, 1:100 – vidutinis, 1:200 ir mažesnis – grubus. Vienas žingsnis, kurį galite atšaukti.

## Dubliuoti šeimą

Nereikia pradėti nuo nulio. {{ui:Duplicate}} nukopijuoja šeimą su jos parametrais, kūnais ir dydžiais nauju pavadinimu. Kopiją keiskite redaktoriuje; originalas lieka toks, koks buvo.

## Šeimų failai

- {{ui:Save the family file}} įrašo `.ccfamily.json`: šeimos parametrus, kūnus ir dydžius. Atidarykite jį kitame modelyje su {{ui:Open a family file…}} grupėje Šeimos.
- {{ui:Save as IFC}} įrašo šeimą kaip mažą IFC failą: jos dydžių tipus ir grupę, deklaruotą IFC projekto biblioteka. Kitos programos jį atidaro kaip tipų rinkinį; BimCraft – vėl kaip šeimą.

Čia atidarytas šeimos failas skaitomas kaip duomenys ir patikrinamas prieš bet ką įrašant. Šeima, kurios raktas jau yra modelyje, įeina kaip atskira šeima. Šeima, kurioje yra kitų (žr. {{ui:Families inside}} redaktoriaus žinyne), atsiveda ir juos: failas juos išvardija, o modelis išlaiko tuos, kuriuos jau turi.

## Šeimos bibliotekoje

Atidarykite {{ui:Families…}} ir pasirinkite {{ui:From the Library…}}, kad pamatytumėte bibliotekoje bendrinamas šeimas. {{ui:Add to this project}} nuskaito vieną iš jų kaip šeimos failą: BimCraft patikrina kiekvieną lauką prieš ką nors sukurdamas, šeima įeina kaip savarankiška šeima ir atsidaro redaktoriuje. Jos pridėjimas yra vienas atšaukimo žingsnis. Norėdami bendrinti savo, naudokite {{ui:Save all as a library}} ir siųskite failą į Biblioteką (Bibliotekos darbuotojai publikuoja šeimos failą komanda, o kiekviena šeima yra atskiras elementas su savo dydžiais). Jei su Biblioteka susisiekti nepavyksta, sąraše tai nurodoma ir nieko nekeičiama.

## Kitų programų tipai

Kitų programų sukurti tipai taip pat rodomi grupėje Šeimos, sugrupuoti pagal spėjimą: pagal elementų pavadinimų dalį iki pirmo dvitaškio, o jei jos nėra – pagal tipų pavadinimus, kurie skiriasi tik skaičiais. Šeimos lange nurodoma, kurį spėjimą naudojo. Jie išvardijami, ir galite pasirinkti jų elementus, bet čia jų nekeičiate: jiems nėra šeimos receptūros.

:::note
Pradinės durys ir langai nubraižyti lygiai taip, kaip buvo prieš šeimas. Failai, sukurti prieš šeimas, atsidaro nepakeisti: jų durys ir langai rodomi po savo šeima su naudojamais dydžiais ir perkeliami į savo dydį, kai pirmą kartą juos pakeisite.
:::

Taip pat žr. [Redaguoti šeimą](topic:family-editor) ir [Durys ir langai](topic:doors-and-windows).
