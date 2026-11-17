---
title: Patikrinti modelį dėl dažnų problemų
summary: Raskite elementus, kuriems trūksta reikalingos savybės, GlobalId, naudojamus du kartus, elementus be aukšto ir kopijas, sudėtas viena ant kitos.
keywords: patikra, modelio patikra, patvirtinimas, kokybė, trūkstama savybė, privaloma, dublikatas, globalid, guid, aukštas, sudėta, persidengimas
from: 4d835513
---

## Ką atliksite

Peržiūrėkite modelį prieš jį perduodami: problemas, kurios sutrikdo žiniaraščius, kiekius ir kitų žmonių programinę įrangą.

## Veiksmai

1. Atidarykite IFC modelį.
2. Kairiajame skydelyje atidarykite {{ui:Modelio patikros}}.
3. Skiltyje {{ui:Privalomos savybės}} jau yra taisyklė (bet kuri klasė, Name). Pakeiskite jos klasę (arba {{ui:Bet kuri klasė}}) ir savybę arba spustelėkite {{ui:Pridėti savybę}}, kad pridėtumėte kitą taisyklę; x pašalina vieną. Elementas neatitinka taisyklės, kai savybės nėra arba ji tuščia. Taisyklės išlieka šioje naršyklėje visiems modeliams.
4. Spustelėkite {{ui:Vykdyti patikras}}.
5. Spustelėkite rezultatą, kad pasirinktumėte tuos elementus ir priartintumėte prie jų.

## Ko turėtumėte matyti

- **Trūksta privalomos savybės**: kiekviena taisyklė su elementais, kuriems nėra jai reikšmės.
- **GlobalId naudojamas du kartus**: elementai, turintys tą patį GlobalId. Kita programinė įranga juos laiko vienu elementu.
- **Be aukšto**: elementai, kurių forma nepatenka į jokį aukštą.
- **Kopijos viena ant kitos**: tos pačios klasės ir tipo elementai su ta pačia forma toje pačioje vietoje; kiekiuose jie skaičiuojami du kartus.

Kiekviena rezultatų eilutė yra mygtukas: spustelėkite, kad pasirinktumėte tuos elementus ir priartintumėte prie jų. Rodomos tik pirmosios 50 kiekvienos patikros grupių. Tie patys radiniai rodomi ir skydelyje {{ui:Problemos}}.

## Verta žinoti

- Kai atidaryta kelių modelių, patikros nagrinėja aktyvų modelį. Žr. [Peržiūrėti kelis IFC modelius kartu](topic:several-models).
- Po pakeitimo paleiskite patikras iš naujo.
- Skydelyje {{ui:Problemos}} ilgiai, plotai ir tūriai problemos tekste atitinka įrankių juostoje pasirinktus {{ui:Vienetai}} (durys „800 mm“ rodomos kaip 2'-7 1/2" pėdomis ir coliais); pakeiskite vienetą, ir skydelis perrašys tekstą.

## Toliau

- [Modelio auditas: patalpos, žymos, LOD, susidūrimai ir sąsajos](topic:audit-the-model)
- [Ieškoti elementų pagal klasę, pavadinimą ar savybę](topic:find)
- [Naikinti, iškirpti, kopijuoti ir įklijuoti statybinius elementus](topic:copy-paste)
