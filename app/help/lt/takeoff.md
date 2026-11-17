---
title: Kiekiai TakeoffCraft programai
summary: Vienu spustelėjimu siunčia modelio kiekius į TakeoffCraft – sienas pagal tipą, stogus pagal nuožulnų plotą, kraigus, kampus ir įdubas, pamatus, duris ir langus, spintas, elektros prietaisus, grindų plotą ir medienos pjovimo sąrašą – pažymėtus kiekvieno lygio plane, su prekybos paketų surinkimais prie elementų.
keywords: kiekių skaičiavimas, kiekių apskaita, sąmata, sąmatų sudarymas, medžiagų sąrašas, specifikacija, takeoffcraft, kiekiai, sienos plotas, stogo plotas, kvadratai, pamatas, betonas, kubiniai metrai, pjovimo sąrašas, mediena, prekybos paketas, surinkimas
from: c5a745af
---

## Ką darysite

Paverskite modelį medžiagų sąrašu ir sąmata TakeoffCraft programoje. BimCraft nubraižo kiekvieno lygio planą standartiniu mastu, pažymi ant jo kiekvieną kiekį ir įdeda kiekių skaičiavimą į PDF. TakeoffCraft pats išmatuoja žymas, todėl kiekvieną skaičių galima patikrinti lape.

## Siųsti

1. Spustelėkite {{ui:Kiekių skaičiavimas}} modelio juostoje (šalia {{ui:Lapai}}).
2. TakeoffCraft atsidaro naujame skirtuke su planais. Kai paklausia, pasirinkite atidaryti PDF rastą kiekių skaičiavimą.
3. Įveskite kainas TakeoffCraft kiekių lentelėje; surinkimai jau išvardija medžiagas.

:::note
Kai TakeoffCraft čia nepasiekiamas, mygtukas vietoj to atsisiunčia PDF. Atidarykite jį TakeoffCraft vėliau: programa pati ras kiekių skaičiavimą.
:::

## Kas matuojama

- **Sienos** pagal tipą ir aukštį: jų ašys kaip ruožai, su sienos aukščiu elemente, todėl TakeoffCraft apskaičiuoja ilgį ir sienos plotą. Kiekvienas ruožas turi sienos duris ir langus, todėl TakeoffCraft jas atima iš sienos ploto vieną kartą pagal tą pačią taisyklę kaip BimCraft žiniaraščiuose: abu sutampa bendram, atskaitymams ir grynajam plotui. Sienos tipo kiekių duomenys (vienetas, skiedinys, norma; žr. [Sienų surinkimai](topic:wall-assemblies)) ateina kaip viena įkainuota eilutė to tipo elemente. Pagal kitą matavimo metodą nei numatytąjį (žr. [Pasirinkti matavimo metodą](topic:plan-schedules-and-pdf#choose-a-measurement-method)) kiekių skaičiavime nurodomas metodas, kiekvienas ruožas perduoda, ką sankryžos nurodo nuo savo sienos paviršiaus, o TakeoffCraft matuoja tuo pačiu metodu ir jį pavadina. Tipas, kurio vienetas turi ilgį ir aukštį, perduoda du komponentus su kiekiais: vienetus užsakymui ir skiedinio tūrį, įkainotus, kai tipo norma yra už vienetą, už 1000 vienetų ar už m³ skiedinio. Skaičius, kuris tiksliai sutampa su sveikuoju skaičiumi, TakeoffCraft gali būti vienetu didesnis, nes perdavimas suapvalina pozicijas lape.
- **Stogai**: kiekviena stogo plokštuma kaip plotas su savo nuolydžiu (TakeoffCraft pateikia nuožulnų plotą), kraigai, kampai ir įdubos (kampai ir įdubos išilgai jų nuolydžio), karnizai ir šoninės kraštinės.
- **Pamatai**: pamatai ir cokoliniai sienos kaip ruožai per jų vidurius, plokštės kaip plotai su savo storiu, todėl betonas gaunamas pagal tūrį.
- **Durys ir langai** suskaičiuoti pagal tipą, su langų apdaila.
- **Apatinės spintos** pagal jų frontų ilgį.
- **Elektros prietaisai** suskaičiuoti pagal rūšį.
- **Kiekvieno lygio grindų plotas** pagal jo patalpas.
- **Medienos pjovimo sąrašas** iš karkaso, suskaičiuotas atskirame lape (vienas taškas vienam gabalui).

Kai prekybos pakete yra atitinkamas surinkimas – išorinės ir vidinės sienos, perdangos, pamatai, cokoliniai sienos, čerpės, kraigo ir kampo dangtelis, įdubos, karnizai, vidaus durys, langų apdaila, apatinės spintos, lizdai, jungikliai, šviestuvai, jungiamosios dėžutės ir skydas – elementas gauna savo medžiagas ir formules. Paketai pateikiami be kainų ir dar nebuvo peržiūrėti sąmatininko.

:::tip
Planai kiekvieną kartą sudaromi iš modelio, todėl po pakeitimo tiesiog dar kartą spustelėkite {{ui:Kiekių skaičiavimas}}.
:::
