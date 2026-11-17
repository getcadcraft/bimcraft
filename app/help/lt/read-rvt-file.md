---
title: Perskaityti projekto arba šeimos failą
summary: Atidarykite .rvt, .rfa, .rte ar .rft failą ir perskaitykite jo versiją, bendrą darbą, projekto informaciją, šeimos parametrus, nuorodas ir peržiūros paveikslėlį be programos, kuri jį sukūrė.
keywords: rvt, rfa, rte, rft, projekto failas, šeima, versija, kuri versija, build, bendras darbas, centrinis failas, projekto informacija, peržiūra, miniatiūra, nuorodos
from: df3600e1
---

## Ką atliksite

Sužinoti, kas yra projekto ar šeimos faile, nenaudojant Revit: kuri versija jį įrašė, ar jis bendrinamas, projekto informaciją ir į ką jis nurodo. Naudinga, kai failas atkeliauja iš kito žmogaus ir reikia žinoti, kurioje versijoje jį atidaryti.

## Žingsniai

1. Spustelėkite {{ui:Pasirinkti failą}}.
2. Pasirinkite `.rvt`, `.rfa`, `.rte` arba `.rft` failą.
3. Palaukite akimirką. Būsenos eilutėje rodoma „Skaitomas failas…“, o paskui „Atidarytas *failo pavadinimas*“.
4. Kortelės viršuje pažiūrėkite: failo įrašytą peržiūros paveikslėlį, failo rūšį ir versiją, kuria jis įrašytas, bei projekto pavadinimą.
5. Slinkite žemyn ir skaitykite kortelės skyrius.

## Ką turėtumėte matyti

Kortelė viduryje, su šiais skyriais, kai failas juos turi:

| Skyrius | Ką jis jums sako |
|---|---|
| Failas | Failo pavadinimas, dydis, rūšis (projektas, projekto šablonas, šeima arba šeimos šablonas), versija ir build, kuriuo jis įrašytas, bendras darbas, centrinio modelio kelias, kur paskutinį kartą įrašytas, kas jį įrašė, lokalė ir dokumento GUID |
| Projekto informacija | Paties projekto laukai, pvz., pavadinimas, numeris, klientas, adresas ir statusas. Laukai, kurie vis dar turi naujo projekto numatytąsias reikšmes, praleidžiami. |
| Šeima, Šeima: … | Šeimai: jos pavadinimas, kategorija, versija, paskutinis atnaujinimas ir jos parametrai, grupė po grupės |
| Susieti ir nurodyti failai | Kiekvienas susietas modelis, CAD nuoroda, paveikslėlis ir pastabų lentelė, į kuriuos failas nurodo, su išsaugotu keliu |

Kairėje {{ui:Failas}} skydelis pakartoja pagrindinius faktus ir prideda **Skaityta**: kiek failo BimCraft iš tikrųjų perskaitė, paprastai apie 40 KB iš failo, kurio dydis gali siekti daug megabaitų. Dešinėje {{ui:Savybės}} skydelis nurodo, kad elementų savybėms reikia 3D modelio.

## Kodėl nėra 3D

3D modelis ir projekto failo elementai saugomi nedokumentuotu formatu. BimCraft nuskaito tik dokumentuotas ar aiškiai skaitomas failo dalis: failo informaciją, projekto informaciją, šeimos duomenis, nuorodų sąrašą ir peržiūros paveikslėlį. Kitų dalių neįspėja. Norėdami pamatyti modelį 3D ir nuskaityti elementų savybes, eksportuokite IFC iš programos, kuri sukūrė failą. Žr. [Gauti projekto failą į 3D per IFC](topic:rvt-to-ifc).

## Dažnos klaidos

- **Tikėtis 3D.** Žr. aukščiau.
- **Nuorodos rodo tik išsaugotą kelią.** Failas, atidarytas savarankiškai, negali patikrinti, ar jo nuorodos egzistuoja. Atidarykite aplanką, kuriame jis yra, ir BimCraft pažymės kiekvieną nuorodą kaip rastą arba nerastą: [Atidaryti visą projekto aplanką](topic:open-project-folder).
- **„Šis failas neišsamus…“** Failas buvo nutrauktas kopijuojant, įkeliant arba sinchronizuojant. Taip nutinka ir debesies disko failui, kuris vis dar yra „tik internete“. BimCraft vis tiek atidaro failą ir rodo tik tai, kas atkurta: gintaro spalvos pranešimą kortelės viršuje, skyrių **Atkurta iš šio failo**, kuriame išvardytos dalys, kurių kiekvienas baitas yra faile, ir **Nėra faile** likusioms. Trūkstama dalis niekaip nepapildoma, todėl versija, peržiūros paveikslėlis ar projekto informacija gali trūkti, jei jie buvo įrašyti už nutraukimo vietos. Jei nutrūko net failo turinio sąrašas, nieko atverti neįmanoma. Nukopijuokite originalą iš naujo ir atidarykite jį, kad gautumėte visą failą.
- **„Šiame faile nėra peržiūros paveikslėlio“.** Kai kurie failai įrašomi be jo. Tai normalu.
- **Atidarote atsarginę kopiją per klaidą.** Failai, pavadinti kaip `Tower.0004.rvt`, yra sunumeruotos atsarginės kopijos. Atidarius aplanką, jos sugrupuojamos kartu su savo modeliu.
