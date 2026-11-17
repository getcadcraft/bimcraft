---
title: Vienetai importuojant: failas nurodo savo vienetus arba jūsų klausiama pirmiausia
summary: Kai importuojamas failas nurodo savo vienetus, BimCraft jais naudojasi ir apie tai praneša. Kai nenurodo, BimCraft prieš ką nors įdėdamas klausia ir prisimena jūsų atsakymą tam failui.
keywords: vienetai, importas, atidaryti, OBJ, STL, DWG, DXF, IFC, taškų debesis, bibliotekos elementas, milimetrai, metrai, coliai, pėdos, mastelis, neteisingas dydis, per didelis, per mažas, 1000 kartų, klausti, prisimenama
from: f044e9bc
---

## Ką darysite

Įkelkite failą ir įsitikinkite, kad jis įkeliamas tinkamu dydžiu.

## Veiksmai

1. Atidarykite arba pridėkite failą įprastai: {{ui:Atvira}}, bibliotekos {{ui:Failai}}, {{ui:Taškų debesys}} arba Kurti › Iš brėžinio.
2. Jei failas nurodo savo vienetus, nieko neklausiama. Būsenos eilutėje rašoma, kokius vienetus failas nurodo.
3. Jei nenurodo, dialogas klausia **Failo vienetai**. Pasirinkite, koks yra vienas failo vienetas, ir spustelėkite {{ui:Naudoti šiuos vienetus}}. Kol neatsakote, nieko neįdedama.
4. {{ui:Atšaukti}} (arba {{key:Esc}}) nieko neįkelia.

## Kurie failai nurodo savo vienetus

- **IFC**: nurodo savo ilgio vienetą, o „Atidaryta“ praneša, koks jis. IFC, kuriame vieneto nenurodyta, prieš atidarant klausiama; jūsų atsakymas įrašomas į modelį, todėl failas jį nurodo, kai įrašote.
- **DWG ir DXF**: brėžinio įterpimo vienetai. Brėžinio be jų klausiama (bibliotekos failai, Kurti › Iš brėžinio, reljefas iš horizontalių).
- **Taškų sąrašai** reljefui: vienetų nenurodo. Klausiama.
- **Taškų debesys**: LAS ir LAZ su koordinačių sistema, E57, PTX ir PLY nurodo savo vienetus. Kitų klausiama.
- **OBJ ir STL**: niekada nenurodo vienetų. Klausiama.
- **glTF ir GLB**: metrai pagal formato taisyklę.
- **Paveikslėliai**: neturi savo dydžio. Paveikslėlis pritaikomas prie vaizdo, o dydį nustatote su Mastelis pagal du taškus. Nurodytas dydis prisimenamas tam failui: įdėjus iš naujo, jis įkeliamas tuo dydžiu, o būsenos eilutėje tai nurodoma.
- **Taškų debesų priedas**: klausia, kai kuriate debesį, kurio failas nenurodo vieneto, ir debesies skaičius pažymi tuo vienetu, kurį jis turi.

## Verta žinoti

- Atsakymas prisimenamas tam failui (jo pavadinimas, dydis ir data) šiame kompiuteryje visose CadCraft programose. Kitą kartą, kai tas pats failas įkeliamas, nebeklausiama, o būsenos eilutėje rašoma, kad panaudoti prisiminti vienetai.
- Kad būtumėte klausiami iš naujo: komandų paletė ({{key:Mod+K}}) › **Klausti iš naujo importuotų failų vienetų**.
- Vienetų sąrašas, kurį jau turi importas (bibliotekos vienetai, debesies juostos vienetai, Brėžinio vienetai iš Kurti › Iš brėžinio), vis tiek pakeičia vienetus vėliau. Reljefo įrankio vienetų sąrašas dabar tik nurodo, nuo ko prasideda klausimas.
