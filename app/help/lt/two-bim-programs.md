---
title: Darbas tarp dviejų BIM programų
summary: Siųskite modelį iš vienos BIM programos į kitą per IFC, su BimCraft viduryje; išlaikykite jo GlobalId, savybių rinkinius ir klasifikacijas, nustatykite abi programas tomis pačiomis savybėmis ir pamatykite, kas grįžo.
keywords: ifc, kelionė pirmyn ir atgal, sąveikumas, globalid, guid, savybių rinkiniai, psets, klasifikacijos, bendrieji parametrai, savybių atitikimas, vertėjas, bcf, koordinavimas, mainai
from: 9f224176
---

## Ką darysite

Perkelkite modelį tarp dviejų BIM programų, pavyzdžiui, iš Revit į Archicad ir atgal, per IFC, o BimCraft yra per vidurį: jis tikrina, papildo ir praneša, kas išliko. Nei viena programa nėra skaitoma pagal savo failo formatą: viskas keliauja kaip IFC.

## Ką išlaiko BimCraft

Kai pakeičiate modelį BimCraft ir spustelėjate {{ui:Save as IFC}}, kiekviena eilutė, kurios nepakeitėte, įrašoma atgal tokia, kokia buvo. Todėl:

- **GlobalId** išlieka tie patys, ir kita programa gali kiekvieną elementą atitikti tam, kurį išsiuntė.
- **Savybių rinkiniai** ir jų reikšmės išlieka, išskyrus reikšmes, kurias pakeitėte.
- **Klasifikacijos** lieka priskirtos savo elementams.

## Nustatykite abi programas tomis pačiomis savybėmis

1. Atidarykite modelį BimCraft (ir projekto paketą, jei turite: jo savybių grupės bus pridėtos).
2. Kairiajame skydelyje atidarykite {{ui:Between two BIM programs}}.
3. Skiltyje **Savybių atitikimas** atsisiųskite tai, ko reikia kiekvienai programai:
   - {{ui:Shared parameters}}: bendrųjų parametrų failas. Revit įkelkite jį per Manage › Shared Parameters ir pridėkite parametrus kategorijoms, kurioms jų reikia.
   - {{ui:IFC export property sets}}: vartotojo apibrėžtų savybių rinkinių failas. Revit IFC eksporto nustatymuose pasirinkite jį vartotojo apibrėžtų savybių rinkiniuose, kad eksportuotas IFC turėtų tuos pačius rinkinių ir savybių pavadinimus.
   - {{ui:Mapping table (CSV)}}: kiekviena savybė su jos IFC rinkiniu ir pavadinimu, tipu bei atitinkamais pavadinimais kiekvienoje programoje. Archicad atitikties failai nėra paskelbtas formatas, todėl jo IFC vertėją ir savybių tvarkyklę nustatykite pagal šią lentelę rankiniu būdu.
   - {{ui:Mapping file}}: visas atitikimas kaip vienas failas, laikomas kartu su projektu.

Standartiniai rinkiniai (Pset_ ir Qto_) neįtraukiami į bendrųjų parametrų failą: abi programos juos rašo iš savo duomenų.

## Išsiųskite modelį ir atgaukite jį

1. Eksportuokite IFC iš pirmos programos išlaikydami GlobalId (Revit: įjunkite „Store the IFC GUID in an element parameter after export“).
2. Atidarykite jį BimCraft, patikrinkite ({{ui:Model checks}}, {{ui:Clash check}}), pridėkite problemas ({{ui:Issues}}, BCF), prireikus pakeiskite reikšmes ir {{ui:Save as IFC}}.
3. Atidarykite įrašytą IFC antroje programoje, dirbkite su juo ir eksportuokite IFC iš ten išlaikydami GlobalId (Archicad vertėjas: „Global Unique Identifiers: Keep existing“).
4. Grįžę į BimCraft, atidarykite modelį, kuris išvyko, tada pridėkite tą, kuris grįžo ({{ui:Pridėti modelį}} skiltyje Modeliai).
5. {{ui:Between two BIM programs}} pasirinkite **Išvyko** ir **Grįžo**, ir spustelėkite {{ui:Make the report}}.

## Skaitykite ataskaitą

- **Elementai**: kiek grįžo su tuo pačiu GlobalId, kiek trūksta ir kiek naujų. Elementai su nauju GlobalId rodomi kaip vienas trūkstamas ir vienas naujas: kita programa jo neišlaikė.
- **Pakeista IFC klasė**: elementai, grįžę kaip kitos rūšies elementai.
- **Išlaikytos savybių reikšmės**: reikšmių, grįžusių nepakeistų, dalis. Žemiau sąraše rodomos savybės su daugiausia pakeistų ar trūkstamų reikšmių.
- **Klasifikacijos**: išlaikytos, pakeistos (ta pati sistema, kitas kodas) arba trūkstamos.

{{ui:Download the report (CSV)}} pateikia kiekvieną savybę su jos skaičiais. Norėdami pamatyti, kurie elementai pajudėjo ar pakeitė formą, naudokite {{ui:Compare versions}} tiems patiems dviem modeliams.

:::note
BimCraft nevykdo nei vienos iš programų. Kurie nustatymai perduoda reikšmę, priklauso nuo kiekvienos programos IFC nustatymų: ataskaita rodo, kas iš tikrųjų grįžo, todėl išbandykite nustatymą, eksportuokite iš naujo ir palyginkite.
:::

## Problemos keliauja kaip BCF

Problemos, kurias iškeliate BimCraft, eksportuojamos kaip BCF ({{ui:Issues}}), kurį abi programos skaito savo BCF įrankiais, todėl klausimas apie elementą pasiekia žmogų, dirbantį kitoje programoje, kartu su savo vaizdu.

Žr. taip pat [Atidaryti projekto paketą](topic:open-project-bundle), [Iš projekto failo į BimCraft per IFC](topic:rvt-to-ifc) ir [Palyginti dvi modelio versijas](topic:compare-versions).
