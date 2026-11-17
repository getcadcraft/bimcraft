---
title: Pastato tūrio plėtojimas iš sklypo tyrimo
summary: Paimkite pastato tūrį, ištirtą CivilCraft sklypo vaizde, ir išplėtokite jį į lygius, sienas ir perdangas, išlaikydami sklypo vietą žemėlapyje.
keywords: tūris, pastato tūris, tūrinis modeliavimas, sklypo tyrimas, plėtojimas, CivilCraft, perdavimas, lygiai, sienos, grindys, pėdsakas, georeferencija, IFC
from: 557b94d1
---

CivilCraft sklypo vaizde gali braižyti pastatų tūrius sklype ir tikrinti juos pagal žemę, jūsų įvestas ribas ir saulę. **Plėtoti BimCraft** ten atidaro BimCraft naujame skirtuke su tūriais; **Tūriai kaip IFC** įrašo juos kaip failą, kurį čia atidarote įprastu būdu. Abiem atvejais kiekvienas tūris atkeliauja kaip vietovė, pastatas su vienu lygiu kiekvienam aukštui ir vienas blokas (pats tūris), nešantis savo skaičius.

## Plėtoti tūrį

1. Pasirinkite tūrį 3D vaizde. Savybėse rodoma jo paskirtis, aukštai ir aukšto aukštis, pėdsakas, bendras grindų plotas, kaip jis stovi ant nuolydžio ir jo sklypas.
2. Spustelėkite **Plėtoti šį tūrį**.

Vienu atšaukiamu žingsniu kiekvienas to pastato lygis gauna sienas aplink pėdsaką (pėdsakas yra sienų išorinis paviršius; kiekviena siena eina iki lygio virš jos, o viršutinė yra vieno aukšto aukščio) ir perdangą po visu pastatu. Blokas pakeičiamas, o pastatas išlaiko tyrimo skaičius savybių rinkinyje `CadCraft_SiteMass`, pažymėtuose kaip išplėtoti. Stogo nėra: stogas priklauso nuo projekto.

## Sklypo vieta

Failas iš CivilCraft įrašomas projekto paties ilgio vienetais ir, jei CivilCraft projektas turėjo koordinačių sistemą, perduoda ją kaip projekto žemėlapio konvertavimą. Tūrio plėtojimas to nekeičia, todėl pastatas lieka ten, kur nurodo žemėlapis.
