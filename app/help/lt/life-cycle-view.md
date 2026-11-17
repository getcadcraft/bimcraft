---
title: Pažiūrėkite, kas nusidėvi per penkiasdešimt metų
summary: Langai, durys, apdaila ir stogas, esantys modelyje, jų tarnavimo laikas, metai, kada kiekvienas keičiamas, ir kaina pagal metus bei jos dabartinė vertė, kai įvedate kainą už vienetą.
keywords: gyvavimo ciklas, lifecycle, tarnavimo laikas, keitimas, priežiūra, kaina, dabartinė vertė, diskontas, infliacija, 50 metų, langai, dažai, stogas, apdaila, visas gyvavimo ciklas
from: 1b849545
---

Skyriuje {{ui:Gyvavimo ciklo vaizdas}} kairiajame skydelyje išvardijama, kas modelyje nusidėvi ir kada keičiama per studijos laikotarpį (iš pradžių 50 metų). Modelyje nieko nekeičiama.

## Kaip skaityti

Kiekviena dalis rodo savo kiekį (išmatuotą iš modelio: lango plotas, išorinės ir vidinės durys, išorinės sienos apdaila, vidaus dažai, grindų ir lubų apdaila, stogo plotas, laiptai), **tarnavimo laiką metais** ir **kainą už vienetą**. Dalis keičiama, kai sukanka jos tarnavimo laikas, du kartus didesnis tarnavimo laikas ir t. t., jei tai dar prieš studijos pabaigą. Todėl 30 metų langas 50 metų studijoje keičiamas vieną kartą, 30-aisiais metais. Tarnavimo laikai yra tipiniai planavimo duomenys: pakeiskite juos pagal savo gaminius ir klimatą. Kaina nepriskiriama; įveskite ją, kad pamatytumėte pinigus pagal metus, bendrą sumą ir jos dabartinę vertę. Jei norite, pridėkite diskonto normą ir infliacijos normą.

{{ui:Įrašyti grafiką (CSV)}} įrašo komponentus ir metus. Vamzdžiai, ortakiai, laidai ir įranga taip pat įtraukiami (žr. žemiau).

## Vamzdžiai, ortakiai, laidai ir įranga

- **Vamzdžiai ir ortakiai** – tai kiekvieno nubraižyto ruožo metrai. **Įranga** (siurbliai, ventiliatoriai, vožtuvai, terminalai, armatūra, išvadai, jungikliai, skydai ir kiti dalykai, kuriuos seka skirtukas Turtas) skaičiuojama pagal rūšį, kiekviena rūšis su planavimo tarnavimo laiku. Elementas, kurio *tarnavimo laikas* nustatytas skirtuke Turtas, yra atskira eilutė su tuo tarnavimo laiku, o jei nurodyta montavimo data, skaičiavimas prasideda nuo jo amžiaus: 16 metų siurblys su 10 metų tarnavimo laiku keičiamas dabar, paskui kas dešimt metų.
- **Laidai** yra **įvertinimas**: plano atstumas nuo skydo išilgai kiekvienos grandinės prietaisų, pradedant artimiausiu, padaugintas iš 1,25 dėl trasavimo. Modelis kabelio nebraižo, todėl patikrinkite jį pagal savo kiekių skaičiavimą.
- Tarnavimo laikai yra planavimo duomenys, kuriuos reikia peržiūrėti, o ne šaltinis.

## Anglies pėdsakas kiekvienam keitimui

Pažymėkite {{ui:Įtraukti kiekvieno pakeitimo įkūnytąjį anglies pėdsaką}}. Naujas langas, durys, laiptai, stogas, vamzdis ar įrangos vienetas skaičiuojamas pagal anglies kiekį, kurį turi tos rūšies modelio elementai (skirtuko Anglis koeficientai, vienetui). Dalis be elemento ar koeficiento, pavyzdžiui, dažai, apdaila ir laidai, rodo brūkšnelį ir įrašoma į sąrašą. Senos dalies tarnavimo pabaiga ir jos keitimo darbai neskaičiuojami.
