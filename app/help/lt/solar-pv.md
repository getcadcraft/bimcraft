---
title: Saulės PV moduliai, šešėliavimas ir išeiga
summary: Montuokite saulės modulius ant stogų arba ant žemės, apskaičiuokite jų šešėliavimą pagal modelį, įvertinkite metinę energiją, parinkite grandinių dydį ir sudarykite vienlinijės schemos duomenis. Visi įvesties duomenys rodomi, o pradinis modulis ir nuostoliai yra bendriniai.
keywords: saulė, pv, fotovoltinis, masyvas, modulis, stogas, šešėliavimas, išeiga, kwh, kwp, grandinių dydis, keitiklis, vienlinijė, vienlinijė schema, polinkis, azimutas, eilių tarpas
from: adf4aaf3
---

## Ką darysite

Atidarykite **Saulės PV** sritį. Pasirinkite stogo paviršių (jo polinkis ir kryptis nuskaitomi iš modelio) arba išdėliokite žemės masyvą su polinkiu ir kryptimi; moduliai įdedami į vidų su atitraukimais ir suskaičiuojami, o rezultatas – nuolatinės srovės galia kWp. Masyvo įdėjimas įrašo jį į modelį kaip saulės įrenginius viename atšaukimo žingsnyje.

## Šešėliavimas, išeiga ir grandinės

- **Šešėliavimas** kiekvienam moduliui siunčia spindulį į saulę tipinėms kiekvieno mėnesio dienoms, lygindamas su paties modelio geometrija, todėl skaičiuojami kaimyniniai pastatai, parapetai ir eilės priekyje. Sumažinama tik tiesioginė saulės šviesa, o iš dalies pašešėliuotas masyvas netenka galios proporcingai.
- **Išeiga** pateikia kWh pagal mėnesį ir metus, kWh vienam kWp ir veikimo koeficientą. Saulė paimama iš jūsų pačių mėnesinių horizontalaus paviršiaus sumų, jei jas įvedate. Jų nesant, sritis naudoja giedro dangaus viršutinę ribą ir apie tai praneša. **Gauti klimatą iš NASA POWER** mygtuku Išeigos skirtuke: jis siunčia tik sklypo platumą ir ilgumą, vieną kartą, o atsakymą saugo šiame kompiuteryje (patikrinta naršyklėje 2026-10-30). PVGIS neleidžia tinklalapiui perskaityti savo atsakymo, todėl skirtukas pateikia nuorodą, kuri naujame skirtuke atidaro PVGIS mėnesinius sklypo duomenis; įklijuokite, ką jis rodo, į langelį, ir dvylika mėnesių užsipildys.
- **Grandinės** patikrina modulius kiekvienoje grandinėje pagal keitiklio įtampos langą šalčiausią ir karščiausią dieną, o lygiagrečias grandines – pagal jo srovę.
- **Vienlinijė** sudaro schemos duomenis (masyvas, sujungimo dėžė, atjungiklis, keitiklis, skydas, tinklas) su laidų ir saugiklių dydžiais pagal jūsų įvestus koeficientus. Tai duomenys ir SVG; CadCraft Elektros priedas gali įdėti juos kaip simbolius.

Modulio, keitiklio, nuostolių ir laidų koeficientai, kurie pateikiami su BimCraft, yra bendriniai pavyzdžiai, pažymėti kiekviename rezultate. Įveskite gamintojo duomenis ir projektuojamas normų vertes, o projektą turi peržiūrėti asmuo, atsakingas už jį.
