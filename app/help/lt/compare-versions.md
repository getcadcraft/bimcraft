---
title: Dviejų modelio versijų palyginimas
summary: Atidarykite dvi to paties IFC modelio versijas ir pamatykite, kurie elementai pridėti, pašalinti ir pakeisti, susieti pagal jų GlobalId, su CSV failu su kiekvienu pakeitimu.
keywords: palyginti, skirtumas, skirtumai, versijos, revizija, pakeitimai, pakeista, pridėta, pašalinta, perkelta, globalid, guid, kas pasikeitė
from: cfca6971
---

## Ką darysite

Pamatykite, kas pasikeitė tarp turėto modelio ir gauto: kurie elementai nauji, kurie dingo, kurie perkelti ar gavo naujas savybių reikšmes.

## Žingsniai

1. Atidarykite naujesnę versiją, tada spustelėkite {{ui:Pridėti modelį…}} ir pasirinkite senesnę. Žr. [Rodyti kelis IFC modelius kartu](topic:several-models).
2. Skiltyje {{ui:Modeliai}} atidarykite {{ui:Palyginti versijas}}.
3. Pasirinkite {{ui:Senesnė versija}} ir {{ui:Naujesnė versija}}.
4. Spustelėkite {{ui:Palyginti}}.
5. Spustelėkite elementą sąraše, kad jį pasirinktumėte ir pamatytumėte jo savybes. Spustelėkite {{ui:Atsisiųsti CSV}}, kad gautumėte kiekvieną pakeitimą, savybę po savybės.
6. Spustelėkite {{ui:Išvalyti}}, kad grįžtumėte į įprastą vaizdą.

## Ko turėtumėte matyti

- **Pridėti** elementai mėlynai, iš naujesnės versijos.
- **Pašalinti** elementai raudonai, iš senesnės versijos.
- **Pakeisti** elementai ochros spalva, iš naujesnės versijos; kiekvienas nurodo, kas pasikeitė: savybės, perkėlimas ir per kiek, arba nauja forma.
- Viskas, kas nepakito, rodoma permatoma.

## Verta žinoti

- Elementai susiejami pagal jų GlobalId. Programa, kuri kiekvieno eksporto metu duoda elementams naujus GlobalId, priverčia kiekvieną elementą atrodyti pašalintu ir vėl pridėtu.
- Pozicijos lyginamos ten, kur modeliai yra scenoje. Jei viena versija tyčia perkelta, pirmiausia ją sulygiuokite su {{ui:Perkelti}} skiltyje {{ui:Modeliai}}.
- GlobalId, panaudotas du kartus viename modelyje, paliekamas iš palyginimo. [Patikrinkite modelį dėl dažnų problemų](topic:model-checks) šiuos suranda.

## Toliau

- [Problemos ir BCF failai](topic:issues-bcf)
- [Sudėti kiekius pagal savybę](topic:quantity-totals)
