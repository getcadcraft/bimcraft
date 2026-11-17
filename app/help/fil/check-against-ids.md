---
title: "Suriin ang model laban sa IDS ng kliyente"
summary: "I-load ang .ids file na ibinigay sa iyo at tingnan sa Problema ang bawat element na hindi tumutugon dito, bago mo ihatid ang IFC."
keywords: "ids, information delivery specification, buildingsmart, kinakailangan, paghahatid, suriin, validation, qa, eir, bep, property, klasipikasyon, materyal, procurement"
from: 7b960222
---

## Ano ang gagawin mo

Ang IDS (Information Delivery Specification, isang pamantayan ng buildingSMART) ang listahan ng dapat taglayin ng isang IFC: aling mga klase, aling mga property na may anong mga value, mga klasipikasyon, materyales, at kung saan dapat nakalagay ang mga bagay. Madalas magpadala ng ganito ang mga kliyente at public procurement kasama ng proyekto. Sinusuri ng BimCraft ang bukas na IFC model laban dito at inililista ang bawat element na kulang.

## Mga hakbang

1. Magbukas ng IFC model.
2. Buksan ang {{ui:Check against an IDS}} sa kaliwang panel, sa ilalim ng {{ui:Model checks}}, o piliin ang {{ui:Check against IDS…}} mula sa menu ng iyong menu style.
3. I-click ang {{ui:Load an .ids file…}} at piliin ang file. Hindi ito ina-upload.
4. Basahin ang resulta: bawat specification na may {{ui:Pass}} o {{ui:Fail}} at kung ilang element ang nalalapat dito.
5. Buksan ang Problema ({{key:Ctrl+Shift+M}}) at i-click ang isang failure para mapili ang element at mag-zoom dito.

## Ano ang dapat mong makita

- Isang babala bawat element at requirement na hindi nito natutugunan, kasama ang pangalan ng specification, ang hinihingi ng IDS, at ang mayroon ang element.
- Ang kinakailangang specification na walang tugmang anuman sa model ay sarili nitong isang babala.
- Ang check report (sa Problema) ay nagsisimula sa IDS: ang pamagat, bersyon, author, at bilang ng applicable, passed at failed ng bawat specification.

## Mahalagang malaman

- Tanging reference sa IDS (pangalan, pamagat, bersyon, at hash) ang itinatago ng IFC, hindi ang mismong IDS: maaaring confidential ang IDS ng kliyente, at napupunta ang IFC sa ibang tao. Nananatili ang IDS sa browser na ito kasama ng model, kaya kapag binuksan mo ulit dito ang na-save na IFC, muli itong sinusuri. Ang pag-load o pag-alis ng IDS ay isang hakbang na maaari mong i-undo.
- Kapag binuksan sa ibang computer o browser, nagpapakita ang Problema ng paalala na hindi nahanap ang IDS: i-load itong muli para masuri ulit.
- Para maipadala ang IDS kasama ng IFC, i-on ang {{ui:Keep the IDS inside the IFC}} sa Settings, sa tab na BimCraft, bago mo ito i-load.
- Bawat edit, undo at redo ay muling sinusuri makalipas ang sandali.
- Ang mga value ay inihahambing ayon sa paraan ng IDS: eksaktong text (may bisa ang malaki at maliit na letra), mga numero sa SI units na may maliit na tolerance (haba sa metro, kaya kino-convert muna ang model na nasa millimetro).
- Sinusuri pa rin ang specification na isinulat para sa ibang bersyon ng IFC (halimbawa IFC2X3 kung IFC4 ang model); sinasabi ito ng resulta.
- Kung may mga sira ang IDS file na mahuhuli ng IDS audit, nililista ito ng dialog; ang mga specification na may sira ay mag-fail.
- Maaari mong tanggapin ang isang failure na may dahilan, tulad ng kahit anong problema. Nananatili itong tanggap habang nananatiling pareho ang mga value ng element.

- Ang mga pattern sa IDS ay binabasa bilang buong value. Ang `^` sa simula at `$` sa dulo ay tinatanggap din bilang "buong value", gaya ng karaniwang kahulugan nila sa mga IDS file.

## Susunod

- [Suriin ang model para sa karaniwang problema](topic:model-checks)
- [Baguhin ang pader o pinto](topic:change-a-wall-or-door)
