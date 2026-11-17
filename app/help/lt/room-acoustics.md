---
title: Patikrinkite patalpos aidėjimą ir pasiklausykite jo
summary: Aidėjimo trukmė pagal oktavų juostas kiekvienai patalpai (Sabine ir Eyring) pagal jos dydį ir apdailą bei jūsų nustatytą tikslą, o balsas, plojimas ar muzika groja per apskaičiuotą patalpos impulsinį atsaką.
keywords: akustika, aidėjimas, aidėjimo trukmė, RT60, sabine, eyring, sugertis, aidas, garsas, klausytis, impulsinis atsakas, kalba, klasė, biuras, kilimas, akustinė plytelė, triukšmas
from: 16996cbb
---

Skyrius {{ui:Patalpų akustika}} kairiajame skydelyje apskaičiuoja, kiek laiko garsas užsilaiko kiekvienoje patalpoje. Jis iš atidaryto IFC modelio nuskaito kiekvienos patalpos grindų plotą, aukštį, sienas, duris ir langus. Modelis nekeičiamas.

## Pasirinkite apdailą

Kai modelis nurodo, kas dengia paviršių, patalpa tai nuskaito: kiekvienos sienos tipo vidinį sluoksnį (žinomi gipsas, tinkas, plytos, betonas ir blokeliai), grindų rūšį (mediena ar betonas) ir ar lubos išklotos plytelėmis. Šalia kiekvieno pasirinkimo esanti etiketė nurodo, ar reikšmė paimta iš modelio, yra numatytoji, ar pasirinkta jūsų; norėdami ją pakeisti, pasirinkite kitą apdailą. Ką modelis nenurodo, lieka numatytoji reikšmė. Koeficientai yra **tipinės paskelbtos vertės**; kai turite gaminio bandymų duomenis, pakeiskite jas jais. Įveskite **tikslą** (ilgiausią vidutinių dažnių aidėjimo trukmę, kurios norite) – bet kuri patalpa, viršijanti šią ribą, bus įspėjimas su sugertimi, kuri ją sumažintų.

## Skaitykite lentelę

Aidėjimas pateikiamas nuo 125 Hz iki 4 kHz. Sabine tinka gyvoms patalpoms, o Eyring – negyvoms; eilutė, pažymėta *Naudojama*, naudoja Eyring, kai vidutinė sugertis didesnė nei 0.2. Oro sugertis įskaičiuota (didelėse patalpose ji sutrumpina aukštąsias juostas). Tai statistinis modelis: jis laiko, kad garsas sklinda tolygiai, todėl ilgos ar plokščios patalpos ir labai mažos patalpos yra tik apytikslis vadovas; baldai, žmonės ir atviros durys neskaičiuojami.

## Klausykitės

{{ui:Groti šioje patalpoje}} groja balsą (čia sukurtą), plojimą, nuskambintas natas ar **jūsų pačių garso failą** (jis lieka jūsų kompiuteryje) per impulsinį atsaką, apskaičiuotą patalpai: tiesioginį garsą, pirmuosius atspindžius to dydžio dėžės ir uodegą, kuri silpsta patalpos aidėjimo trukme kiekvienoje juostoje. {{ui:Groti be patalpos poveikio}} groja tą patį garsą tokiu pat lygiu, bet be patalpos. Impulsinį atsaką ar garsą patalpoje galite įrašyti kaip WAV failus. Skamba kaip to dydžio ir apdailos patalpa, o ne kaip kokia nors tikra patalpa.

## Žmonės ir baldai

Įveskite **žmonių šioje patalpoje** skaičių, kad būtų įskaityta jų sugertis. Modelyje esantys baldai (sofos, lovos, kėdės, stalai, spintos, atpažįstami pagal pavadinimą) prideda savo sugertį. Skaičiai yra apytiksliai planavimo dydžiai, suapvalinti; patalpai, kuri yra svarbi, pakeiskite juos matavimais.

## Šaltinis ir klausytojas

Skyriuje {{ui:Garso šaltinis ir klausytojas}} spustelėkite {{ui:Padėti šaltinį}} arba {{ui:Padėti klausytoją}} ir spustelėkite patalpos planą. Jūsų grojamas garsas tada girdimas iš ten: tiesioginis garsas pasiekia po atstumo, o atsispindėjusi dalis yra to atstumo lygio. Norėdami grįžti į atstumo langelį, abu išvalykite.

## Netolygi sugertis ir patalpos modos

Skyriuje {{ui:Netolygi sugertis (dėžės formos patalpa)}} įveskite patalpą kaip dėžę ir pasirinkite jos grindų, lubų ir sienų apdailą. Lentelė prideda Fitzroy ir Arau-Puchades prie Sabine ir Eyring: jie tris priešingų paviršių poras nagrinėja atskirai, todėl kilimu dengta patalpa su kietomis lubomis nevertinama kaip per trumpo aidėjimo. Kai poros labai skiriasi, pastaba nurodo, kuriai verta pasitikėti. Po lentele **Patalpos modos** išvardijamos žemiausios stovinčiosios dėžės bangos ir dažnis, žemiau kurio patalpa turi atskiras modas, o ne tolygų garso lauką. Tai dėžės formos patalpos prognozės, projektavimo pagalba, o ne matavimas.

## Vienetai

Patalpų plotai, aukščiai, tūriai ir atstumai rodomi pasirinktais {{ui:Vienetai}} (kvadratinės ir kubinės pėdos, coliai, milimetrai, centimetrai ar metrai). Pats skaičiavimas lieka SI; keičiasi tik rodymas. Laikas (sekundėmis), dažniai ir lygiai nekinta.
