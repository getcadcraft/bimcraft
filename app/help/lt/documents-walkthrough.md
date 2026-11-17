---
title: Dokumentai ir revizijos (saugykla)
summary: Žingsnis po žingsnio pavyzdys su tikru darbu: įdėkite IFC modelių projekto aplanką po kontrole, paimkite modelį, pakeiskite, grąžinkite su pastaba, siųskite peržiūrai, patvirtinkite ir išleiskite, peržiūrėkite istoriją ir tai, kas jį naudoja, ką mato antras asmuo, kol failas užrakintas, ir kaip tai veikia su debesies aplankais.
keywords: saugykla, dokumentai, pavyzdys, vadovas, paimti, grąžinti, revizija, išleidimas, patvirtinimas, užrakinimas, istorija, kur naudojamas, ifc, modelis, debesies aplankas, projekto aplankas, du žmonės, bendras aplankas
from: 0a753f25
---

## Ką darysite

Jūs esate Ana, dirbanti su Riverside klinika kartu su kolega Benu. Projekto IFC modeliai yra viename aplanke, kurį abu pasiekiate (bendrame diske, sinchronizuojamame aplanke ar debesies aplanke). Pabaigoje vienas failas bus nuėjęs nuo pirmos kopijos iki išleistos revizijos **A**, vėl pakeistas kaip **B.1**; pamatysite, kas ką padarė, ir ką mato Benas, kai failą laikote jūs.

Viskas laikoma paslėptame aplanke `.ccvault` šalia jūsų failų: serverio nėra, nieko neįkeliama (debesies aplankas – išimtis, žr. paskutinį žingsnį). Kiekvieno mygtuko ir taisyklės visos vietoje žr. temą *Dokumentai: paėmimas, revizijos ir išleidimas* ten, kur ji yra jūsų programoje.

## 1. Nustatykite projekto aplanką

1. Pasirinkite {{ui:Dokumentai}} šalia {{ui:Atidaryti aplanką}} pradžios ekrane arba {{ui:Dokumentai…}} meniu **Failas**.
2. Pasirinkite {{ui:Pasirinkite projekto aplanką}} ir pasirinkite aplanką, kuriame yra projekto IFC modeliai. (Projekto aplankai veikia Studio ir naršyklėse, kurios gali atidaryti aplanką, pavyzdžiui, Chrome ir Edge. Kitose naršyklėse skydelis tai pasako.)
3. Pasirinkite {{ui:Pakeitimas}} šalia **Jūs:** ir įveskite savo vardą, `Ana` (jei klausia, ir šio kompiuterio pavadinimą). Skydelyje dabar rašoma *Jūs: Ana, kompiuteris* ir jūsų kompiuterio pavadinimas. Jūsų vardas bus prie visko, ką darote.
4. Pasirinkite {{ui:Sukurti saugyklą šiame aplanke}} ir įveskite projekto pavadinimą `Riverside clinic`. Skydelyje rašoma *Saugykla pradėta projektui Riverside clinic.*

## 2. Įdėkite failą po kontrole

1. Atidarykite **Failai ne saugykloje** ir pasirinkite {{ui:Pridėti}} šalia `models/House.ifc`.
2. Jis pasirodys skiltyje **Failai saugykloje** revizijoje **A.1**, būsenoje **Darbas vyksta**. A.1 yra jo pirmoji kopija; saugykla laiko kiekvienos revizijos kopiją.

## 3. Paimkite, pakeiskite, grąžinkite

1. Pasirinkite {{ui:Atidaryti}} šalia `models/House.ifc`. Modelis atsidaro BimCraft, o skydelis užsidaro, kad matytumėte modelį. Vėl atidarykite skydelį iš {{ui:Dokumentai}}.
2. Vėl atidarykite skydelį ir pasirinkite {{ui:Paimti}}. Eilutėje dabar rašoma **Paimta jums**. Aplanke `.ccvault/locks` sukurtas užrakto failas; niekas kitas negali paimti šio failo, kol jūs jo negrąžinsite.
3. Pakeiskite modelį: perkelkite sieną, įdėkite duris. Įrašymas atmetamas, nebent modelis paimtas jums, ir pasako kodėl; Įrašyti kaip visada veikia kaip jūsų kopijos kopija.
4. Atidarykite skydelį, pasirinkite {{ui:Grąžinti}} ir įveskite, kas pasikeitė (`Perkėlė duris`). Skydelis sako *grąžinta kaip A.2*. Aplanke esantis failas dabar yra modelis, kurį turėjote atidarę, o užraktas dingsta. Grąžinimas be pakeitimų palieka revizijos numerį.

Jei persigalvojote, {{ui:Anuliuoti paėmimą}} grąžina failą be naujos revizijos.

## 4. Peržiūra ir išleidimas

1. Pasirinkite {{ui:Siųsti peržiūrai}}. Būsena tampa **Peržiūrai**, o failas – tik skaitomas.
2. Prieš tvirtindami pasirinkite {{ui:Projekto parametrai}} ir išvardykite, kas gali tvirtinti (vienas vardas eilutėje), pavyzdžiui, `Ben` ir `Carla`, ir pažymėkite taisyklę, kad tvirtintojas turi būti kitas nei autorius. Pasirinkite {{ui:Įrašyti parametrus}}. Dabar pati saugykla neleidžia kitiems.
3. Benas (arba Carla) pasirenka {{ui:Patvirtinti}} ir įveskia tvirtintojo vardą. Būsena tampa **Išleista**, o revizija – **A**, su *patvirtino* ir vardu. Išleistas failas tik skaitomas. {{ui:Grąžinti}} būtų grąžinęs jį į Darbas vyksta su priežastimi.

Tvirtintojo vardas yra vardas, įvestas skydelyje; tai yra įrašas, kas pasirašė, o ne tapatybės įrodymas.

## 5. Nauja revizija

1. Išleistame faile pasirinkite {{ui:Nauja revizija}}. Jūs ją laikote kitai raidei.
2. Pakeiskite ją, tada {{ui:Grąžinti}}. Revizija yra **B.1**, darbas vyksta. Išleiskite ją tuo pačiu būdu, ir ji taps **B**. {{ui:Anuliuoti paėmimą}} prieš pirmą grąžinimą palieka ją **A**.

Revizijų raidės eina A, B … Z, AA, AB. Jei jūsų standartas kai kurias raides praleidžia, projekto parametras *Naudoti ASME Y14.35 seką* kitoms revizijoms praleidžia I, O, Q, S, X ir Z.

## 6. Pažiūrėkite, kas įvyko

Pasirinkite failo pavadinimą, kad atidarytumėte jo informaciją:

- **{{ui:History}}**: kiekvienas įvykis, naujausias pirmas, su tuo, kas, kuriuo kompiuteriu ir kada: *Grąžinta A.2* – Ana, *Išleista* – Benas ir t. t.
- **{{ui:Revisions}}**: revizijų lentelė: kiekviena išsaugota revizija su data, kas ją grąžino, pastaba ir kas patvirtino. Saugykla kiekvienos kopiją laiko `.ccvault/revs`.
- **{{ui:Uses}}**: dokumentai, į kuriuos rodo IFC modelis.
- **{{ui:Used by}}**: sąraše pateikiamas kiekvienas saugyklos modelis, nurodantis į šį failą.

## Modeliai, nukreipiantys į kitus dokumentus

IFC modelis, nukreipiantis į kitus aplanko dokumentus (brėžinius, žiniaraščius), rodo juos skiltyje **Uses**, o kiekvienas iš jų rodo modelį skiltyje **Used by**. Grąžinus dokumentą galite matyti, kurie modeliai į jį nurodo.

## 7. Ką mato Benas, kol failą laikote jūs

Dabar vėl paimkite failą ir paprašykite Beno atidaryti tą patį projekto aplanką savo kompiuteryje ir atidaryti skydelį. Failo eilutėje jis mato **Paėmė Ana** savo kompiuteryje **nuo** laiko ir jokio mygtuko {{ui:Paimti}}. Jei vis tiek bandytų, saugykla atmestų: užrakto failo sistema du kartus nekurs, todėl du žmonės negali abu turėti failo net tą pačią akimirką, kai aplankas yra diske Studio. (Naršyklėje aplankas leidžia tik geriausią pastangą, ir skydelis tai pasako skiltyje **Aplankas**.)

Jei Ana išvykusi ir Benui reikia failo, {{ui:Nutraukti paėmimą}} jį atlaisvina. Jis turi įvesti priežastį; ji įrašoma į žurnalą kartu su tuo, kieno buvo paėmimas. Kai projektas nurodo administratorius, tik jie gali. Paėmimas, senesnis nei senumo riba (pagal numatymą 14 dienų), pažymimas *seniai*. Nutraukus, Anos vėlyvas grąžinimas atmetamas, todėl jūs du negalite vienas kito perrašyti.

## 8. Debesies aplankai

Debesies aplankas yra projekto aplankas, laikomas jūsų komandos debesies saugykloje, todėl komandai nereikia bendro disko. Studio, prisijungus prie savo CadCraft paskyros, skydelis rodo {{ui:Atidaryti debesies aplanką}} šalia {{ui:Pasirinkite projekto aplanką}}. Pasirinkite jį ir parinkite aplanką, rodomą kaip darbo sritis / aplankas. Darbo srities savininkas pirmiausia sukuria aplanką, o komandos debesies saugykla turi būti įjungta. Viskas aukščiau veikia taip pat; užraktą sukuria serveris, kuris griežtai veikia tarp žmonių. Jei neprisijungę, skydelis paprašo prisijungti. Įprastame naršyklės skirtuke debesies mygtuko nėra; naudokite Studio.

## Pabandykite

Atlikite aštuonis žingsnius aukščiau su tikro failo kopija. Dviem asmenims reikalingas kitas žmogus arba du langai su dviem vardais. Jei bandysite su tikru bendru aplanku, Bendruomenės testavimo puslapis turi patikrinimą, kuris klausia būtent to, ir priima rezultatus.
