---
title: Susidūrimų sprendimas kiekvienos disciplinos taisymais
summary: Iš susidūrimų rezultatų skiltis **Siūlyti taisymus** kiekvienam susidūrimui išvardija, ką kiekviena disciplina galėtų padaryti: kanalą apeiti po sija, vamzdį perkelti į šoną, koloną perkelti, angą padaryti sijoje. Kiekvienas taisymas išbandomas modelio kopijoje su savo kompromisais, kad priimtumėte arba atmestumėte. Priimti taisymai įeina kaip vienas anuliavimo žingsnis.
keywords: susidūrimas, susidūrimo taisymas, susidūrimų sprendimas, koordinavimas, siūlyti taisymus, apeiti, poslinkis, kanalas, vamzdis, kabelių trasa, sija, kolona, anga, įvorė, kompromisas, disciplina, konstrukcija, mechaninė, santechnika, elektra, architektūra, asistentas
from: f7bafdd9
---

## Ką darysite

Paverskite susidūrimų sąrašą sprendimais. Kiekviena disciplina (konstrukcija, mechaninė, santechnika, elektra, architektūra) siūlo taisymus tik savo elementams, kiekvienas siūlymas tikrinamas modelio kopijoje, o pasirenkate jūs.

## Žingsniai

1. Pirmiausia atlikite susidūrimų patikrą. Žr. [Susidūrimų tikrinimas](topic:clash-check) ir [Vamzdžių ir kanalų tikrinimas su konstrukcija](topic:mep-against-structure).
2. Po rezultatais spauskite {{ui:Siūlyti taisymus}}. Šalia modelio atsidaro skydelis **Siūlomi taisymai**.
3. Kiekvienam susidūrimui matote kiekvienos disciplinos siūlymus, geriausi pirmi. Kiekvienoje eilutėje nurodoma, ką ji daro ir kokie jos kompromisai: ar ji išsprendžia susidūrimą, kiek naujų susidūrimų sukuria, kokias taisykles pažeidžia, kiek trasos prideda arba kiek toli ją perkelia, kiek jungčių ir kainos įvertis.
4. Spauskite {{ui:Rodyti}}, kad pamatytumėte elementus 3D. Spauskite {{ui:Priimti}} norimam taisymui (vienas kiekvienam susidūrimui) arba {{ui:Atmesti}}.
5. Eilutėje apačioje nurodoma, ką visi priimti taisymai daro kartu: kiek susidūrimų išspręsta, kiek liko ir ar atsirado kas nors nauja.
6. Spauskite {{ui:Taikyti priimtus taisymus (vienas anuliavimo žingsnis)}}. Susidūrimų patikra paleidžiama iš naujo. {{ui:Anuliuoti}} atšaukia visus iš karto.

## Ką gali kiekviena disciplina

- **Mechaninė** (kanalai, šildymo ir vėsinimo vamzdžiai): apeiti viršuje arba apačioje atkarpos, kuri susiduria, pakelti arba nuleisti visą trasą, perkelti į šoną, padaryti stačiakampį kanalą plokštesnį su tuo pačiu plotu.
- **Santechnika** (vanduo, nuotekos, dujos, gaisrinė): tie patys veiksmai, išskyrus tai, kad gravitacinei nuotekai niekada nesiūlomas apėjimas; ji gali būti perkelta tik visa, išlaikant nuolydį.
- **Elektra** (kabelių trasos ir vamzdeliai): tie patys veiksmai; kabelių trasa virš savęs turi palikti 150 mm laisvos vietos kabeliui tiesti.
- **Konstrukcija**: perkelti koloną (iki 300 mm) arba angą sijos sienelėje ar perdangoje trasai, kuri eina pro ją. Kiekvienam konstrukciniam taisymui nurodoma, kad jį patvirtina konstrukcijų inžinierius.
- **Architektūra**: įvorė sienoje trasai, kuri eina pro ją, arba perkelti sieną, žinomą kaip nelaikančią.

## Ką turėtumėte matyti

- Taisymai, kurie pažeidžia taisyklę, pažymimi: arčiau nei 25 mm tarpas iki kito elemento, žemiau 2100 mm laisvo aukščio linijos, sijos sienelės anga didesnė nei 40 % sijos aukščio arba per arti jos galų, sija, kuri pakeistų tarpatramį.
- Taisymus, kuriuos BimCraft gali atlikti, pritaiko prie modelio: trasos, kurias nubrėžėte vamzdžių ir kanalų įrankiais, ir kolonos, kurias nubrėžėte. Kiti pažymimi **Tik patarimas**: jų priėmimas tik prideda problemą skirtuke Problemos.

## Verta žinoti

- Taisymai ateina iš įmontuotų programos taisyklių; jiems DI nenaudojamas.
- Jei prijungiate asistentą (žr. [Leisti DI asistentui dirbti su jūsų modeliu](topic:assistants)), jis gali perskaityti susidūrimus ir pridėti savo siūlymus vienai disciplinai į atidarytą skydelį. Jie tikrinami tuo pačiu būdu, pažymimi asistento pavadinimu, ir nieko nekeičiama, kol neprimėte ir netaikysite.
- Kopija tikrinama su dėžutėmis aplink kiekvieną elementą ir kiekvieną trasos atkarpą, todėl įstrižai einanti trasa gali rodyti susidūrimą, kurio susidūrimų patikra neparodytų. Pritaikę taisymus, paleiskite susidūrimų patikrą iš naujo: ji galutinai lemia.
- Ribos (kiek toli trasa gali judėti, kiek aukštai gali kilti apėjimas, tarpas) yra skydelyje nurodytos numatytosios reikšmės.

## Toliau

- [Problemos ir BCF failai](topic:issues-bcf)
- [Vamzdžių ir kanalų trasų braižymas](topic:pipes-and-ducts)
