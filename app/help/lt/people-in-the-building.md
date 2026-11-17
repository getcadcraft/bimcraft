---
title: Leiskite žmonėms pereiti pastatą
summary: Evakuacija ar įprasti dienos atvykimai per jūsų patalpas, duris ir laiptus, su eilėmis ten, kur pastatas susiaurėja, ilgiausias kelias iš kiekvienos patalpos į išėjimą ir rezultatai kaip Problemos. Bendras minios modelis projektavimo sprendimams, o ne gaisrinės saugos sertifikatas.
keywords: žmonės, evakuacija, evakuacijos kelias, išėjimas, pabėgimas, kelionės atstumas, eilė, minia, srautas, durų plotis, laiptai, atvykimai, siaurėjimas, simuliacija, gyventojai, pėstieji, kas jei, užblokuotos durys
from: 84aa8920
---

{{ui:Žmonės pastate}} kairiojo skydelio skyrius leidžia žmonėms pereiti atidaryto IFC modelio patalpas, duris ir laiptus. Modelyje nieko nekeičiama ir nieko neįkeliama.

:::warning
Tai **projektavimo pagalba, o ne gaisrinės saugos sertifikatas**. Ji nežino apie gaisrą, dūmus, paniką, judėjimo sunkumus ar tai, ko reikalauja norminis dokumentas. Ribos yra jūsų: ilgiausias kelias iki išėjimo ir turimas laikas yra skaičiai, kuriuos įvedate patys, ir nė vienas iš jų nėra numatytas.
:::

## Paleisti

1. Atidarykite modelį su uždarytomis patalpomis ir durimis. Durys, turinčios patalpą tik vienoje pusėje, yra išėjimas; durys tarp dviejų patalpų jas sujungia; laiptai sujungia patalpas savo galuose.
2. Pasirinkite **Evakuacija** (visi eina į išėjimą), **Atvykimai** (visi įeina ir eina į patalpą) arba **Keitimas** (patalpose esantys žmonės išeina, o tiek pat įeina), ir plotą vienam žmogui. Patalpos, pavadintos kaip koridorius, laiptinė, vestibiulis ar tualetas, žmonių neturi.
3. Spustelėkite {{ui:Vykdyti}}. Gausite laiką, per kurį išeina paskutinis žmogus (ir kada išeina pusė bei devyni iš dešimties), eilę prie kiekvienų durų ir laiptų, patalpą su ilgiausiu keliu ir planą, kuris atkuria eigą.

## Kas jei

Pažymėkite {{ui:Uždaryta}} ant durų lentelėje ir vėl paleiskite: žmonės ras kitą kelią, o patalpos be išėjimo bus išvardytos kaip klaidos. Dviejų kartų platesnės durys patalpą ištuština gerokai greičiau; lentelėje matyti, kur yra eilės.

## Kaip tai veikia

Kiekviena patalpa yra tinklelis, todėl žmonės apeina kampus, o ne eina per sienas. Greitis mažėja, kai patalpa pildosi (S = 1.4 (1 − 0.266 D) m/s, D – žmonių skaičius kvadratiniame metre). Durys praleidžia 1.3 žmogaus per sekundę per kiekvieną metrą jų pločio, atėmus 150 mm kiekvienoje pusėje; laiptai – 1.0 ir lėtesnis ėjimas. Žmonės laukia eilėje pagal atėjimo tvarką. Paleidimo numeris pakartoja tą patį paleidimą tiksliai.

Asistentas gali paleisti tą patį: paprašykite evakuacijos arba ilgiausio kelio iki išėjimo iš kiekvienos patalpos.

## Žmonės kiekvienoje patalpoje

Atidarykite {{ui:Žmonės kiekvienoje patalpoje}}, kad įvestumėte skaičių bet kuriai patalpai. Tuščias laukelis naudoja plotą vienam žmogui (rodomą pilkai); 0 ištuština patalpą. Jūsų skaičiai naudojami paleidimui ir išsaugomi šioje naršyklėje.

## Priešpriešinis srautas prie durų

**Keitimo** režime žmonės, einantys išeiti, ir žmonės, einantys įeiti, susitinka tose pačiose durose. Kai pro duris kitas žmogus praeina priešinga kryptimi tuoj po paskutinio, durys išlaiko dalį savo greičio (čia 0.8; tai prielaida, nes paskelbtos reikšmės skiriasi), o lentelėje skaičiuojami krypties pakeitimai. Durys, kurios dažnai keičia kryptį, skiltyje Problemos įrašomos kaip pastaba.

## Laiptai ir aikštelės

Kiekviena laiptų aikštelė pareikalauja vienos sekundės, kad ėjėjas apsisuktų (prielaida). Tiesūs laiptai jos neturi; L ar U formos laiptai turi vieną. Laiptų greitis vis tiek priklauso nuo jų bėgio pločio.

## 3D vaizde

Pažymėkite {{ui:Rodyti žmones 3D vaizde}}, ir ėjėjai pasirodo kaip figūros modelyje, nuspalvinti pagal tai, ką daro, ir juda grojant paleidimą. Į modelį nieko nepridedama.
