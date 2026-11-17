---
title: Patalpų apdaila ir apdailos žiniaraščiai
summary: Nurodykite, kuo dengiamos kiekvienos patalpos grindys, sienos ir lubos, pridėkite zonas, pvz., plytelėmis išklotą apsauginę sienelę, ir gaukite apdailos žiniaraščius pagal patalpas, sienas ir zonas su plotais, plytelių kiekiais (įskaitant pjaustytas) ir pagrindo tūriais.
keywords: apdaila, apdailos, apdailos žiniaraštis, patalpų apdaila, grindų apdaila, sienų apdaila, lubų apdaila, grindjuostė, plytelė, plytelės, pjaustytos plytelės, plytelių skaičius, atliekos, pagrindas, lyginamasis sluoksnis, pagrindo plokštė, tinkas, zona, apsauginė sienelė, dado, šlapia zona, vidaus, kiekiai
from: 8c30498c
---

## Ką darysite

Vieną kartą nurodykite BimCraft, kuo apdailinama kiekviena patalpa. Apdailos žiniaraščiai tada pateikia plotus, plytelių kiekius, kuriuos reikia užsakyti, ir pagrindo tūrius, ir keičiasi kartu su modeliu.

## Žingsniai

1. Įjunkite {{ui:Braižymas}}, kairiajame skydelyje atidarykite **Žiniaraščiai** ir spustelėkite **Patalpų apdaila**.
2. Po **Apdailos tipai** spustelėkite **Pridėti apdailos tipą**. Suteikite pavadinimą, rūšį (**Plytelės**, **Lakštas**, **Danga** arba **Plokštė**) ir storį. Plytelėms nurodykite plytelės ilgį ir plotį, siūlę bei atliekų priedą procentais. Jei po apdaila yra kas nors (lyginamasis sluoksnis, pagrindo plokštė, tinko sluoksnis), įvardykite tai po **Pagrindas** ir nurodykite jo storį.
3. Po **Patalpos** pasirinkite kiekvienos patalpos grindų, sienų ir lubų apdailą. Jei patalpoje yra grindjuostė, įrašykite jos pavadinimą ir aukštį.
4. Po **Zonos** spustelėkite **Pridėti zoną** daliai patalpos, kuriai taikoma kita apdaila:
   - **sienos** zona yra juosta tarp dviejų aukščių virš grindų (plytelėmis išklota apsauginė sienelė nuo 0 iki 1200, dado). Ji taikoma visoms patalpos sienoms arba pasirinkite tos patalpos sienas modelyje ir spustelėkite mygtuką **Įjungta**, kad ji liktų tik jose;
   - **grindų** ar **lubų** zona yra plotas, kurį įvedate. Jis atimamas iš pačios patalpos apdailos.
5. Spustelėkite **Įrašyti**. Tai vienas žingsnis Anuliuoti. Ilgiai įvedami projekto vienetais.

## Žiniaraščiai

Žiniaraščių sąraše atsiranda keturi įrašai:

- **Apdaila pagal patalpas**: kiekviena patalpa su grindų, sienų ir lubų apdaila, jų plotais ir grindjuostė su savo ilgiu.
- **Apdaila pagal sienas**: kiekviena sienos atkarpa patalpos pusėje ir juosta, kurią dengia apdaila, su ilgiu, bendru plotu, atskaitymais, grynuoju plotu ir – plytelėms – sveikomis plytelėmis, pjaustytomis plytelėmis bei plytelėmis užsakymui.
- **Apdaila pagal zonas**: kiekviena zona su jos apdaila, grynuoju plotu, plytelėmis ir pagrindo tūriu.
- **Apdailos kiekiai**: viena eilutė kiekvienai apdailai: grynasis plotas, sveikos ir pjaustytos plytelės, plytelės užsakymui, pagrindas ir jo tūris bei paties apdailos sluoksnio tūris.

Grupuokite, sumuokite, įrašykite ir eksportuokite juos kaip bet kurį žiniaraštį: žr. [Žiniaraščio išdėstymas, įrašymas ir eksportas](topic:schedule-layouts). Spustelėkite skaičių, kad pasirinktumėte, iš ko jis gautas: sienos atskaitymai pasirenka jos duris ir langus.

## Kaip matuojama apdaila

- **Sienos**: kiekviena sienos atkarpa patalpos pusėje – jos ilgis palei patalpą, padaugintas iš aukščio, kurį dengia apdaila, atėmus kiekvienos durų ir langų dalį tame aukštyje. Siena, žemesnė už patalpą, apdailinama iki savo viršaus. Kurios angos yra per mažos atskaityti, lemia projekto matavimo metodas ([Žiniaraščiai](topic:plan-schedules-and-pdf)).
- **Grindys ir lubos**: patalpa sienų vidiniuose paviršiuose, atėmus joje esančias salas.
- **Grindjuostė**: patalpos sienų ilgis, atėmus durų plotį.
- **Plytelės**: klojamos tinkleliu nuo vieno paviršiaus kampo, tarp plytelių – viena siūlė. Plytelė, visiškai esanti paviršiuje, yra sveika plytelė; iš dalies esanti (prie krašto, aplink angą) – pjaustyta plytelė. Plytelės užsakymui – sveikos plius pjaustytos, plius atliekų priedas, suapvalinta į viršų. Kiekviena pjaustyta plytelė skaičiuojama kaip nauja: atraižos nenaudojamos pakartotinai.
- **Pagrindo tūris**: grynasis plotas, padaugintas iš pagrindo storio.
- Skaičius, pažymėtas **≈**, apskaičiuojamas iš ploto, o ne klojamas plytelė po plytelės: paviršius, iš kurio atimta įvesta zona, arba labai didelis paviršius.

## Naudinga žinoti

- Apdailos saugomos pastato byloje (savybių rinkinys `CadCraft_Finishes` projekte). Kiekviena patalpa, turinti apdailą, taip pat gauna standartinį IFC savybių rinkinį `Pset_SpaceCoveringRequirements`, kad kitos programos perskaitytų pavadinimus.
- Plytelių išdėstymas prasideda nuo kampo. Išdėstymas centruotas patalpoje, raštas (šachmatinis, plytų kloties) ir atraižų naudojimas nėra skaičiuojami.
- Lenkta siena ir patalpos riba, kuri nėra siena (patalpos skyriklis), išvardijama kaip **Kita riba** su savo ilgiu ir be angų.
- Anksčiau buvęs įrašas **Apdaila** išvardija sienų tipų apdailos sluoksnius; **Sluoksniai: plotas ir tūris** išvardija kiekvieną sluoksnį kiekviename sluoksniuotame tipe. Čia nurodytos patalpų apdailos taikomos patalpai virš tų sluoksnių.
- Asistentas gali nustatyti apdailas jums su `finishes_set`: žr. [Leiskite DI asistentui dirbti su jūsų modeliu](topic:assistants).
