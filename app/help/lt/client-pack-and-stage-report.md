---
title: Klientui skirti paketai, etapų ataskaitos ir variantų palyginimas
summary: Sudarykite klientui skirtą paketą arba etapo ataskaitą iš modelio, su tūrio variantais, palygintais pagal plotą ir kainą, aukštų plotais, brėžiniais su jų peržiūromis ir leidimų istorija. Kiekvienas rodiklis išlaiko elementus, į kuriuos jis remiasi.
keywords: klientui skirtas paketas, pristatymas, etapo ataskaita, ataskaita, variantų palyginimas, variantai, palyginti variantus, plotas ir kaina, kaina pagal variantą, be įkainio, tūris, aukštų plotai, brėžinių sąrašas, leidimų istorija, rodikliai, susieti rodikliai
from: f6679bf5
---

## Ką darysite

Sudarykite klientui skirtą paketą arba etapo ataskaitą iš modelio, kaip jis yra dabar, ir palyginkite išsaugotus tūrio variantus šalia vienas kito pagal plotą ir kainą.

## Žingsniai

1. Kairiajame skydelyje atidarykite **Klientui skirtas paketas ir etapo ataskaita**.
2. Spauskite **Atidaryti dokumentuose** šalia Klientui skirto paketo arba Etapo ataskaitos. Dokumentas atsiranda skiltyje Dokumentai iš modelio, kur galite pakeisti jo tekstą.
3. Peržiūroje spustelėkite rodiklį, kad pasirinktumėte elementus, į kuriuos jis remiasi.
4. Spauskite **Sukurti paketą**. Įrašomas vienas zip failas: dokumentas PDF formatu, 3D vaizdo paveikslėlis ir `figures.csv`, kuriame išvardytas kiekvienas rodiklis su jo elementų GlobalId.

## Laukai

Juos galite naudoti bet kuriame dokumente.

| Laukas | Ką spausdina |
|---|---|
| `{{stage}}` | Projekto etapas iš brėžinio duomenų. |
| `{{options}}` | Išsaugoti tūrio variantai šalia vienas kito: aukštai, aukštis, pėdsakas, bendras grindų plotas, apvalkalas ir kaina. |
| `{{areas}}` | Grindų plotas pagal lygį iš patalpų. |
| `{{sheets}}` | Lapai su peržiūra, kurioje jie stovi, ir data, kada jie paskutinį kartą buvo išleisti. |
| `{{issues}}` | Leidimų istorija ir brėžinių pakeitimų žurnalas. |
| `{{changes}}` | Kas pasikeitė nuo paskutinio leidimo, lapas po lapo. |

## Kaip skaičiuojami variantai

Kaina ateina tik iš jūsų projekto kainų lentelės (Energija/Kaina, 5D kaina). Niekas nėra įvertinama už jus.

- Kainos eilutė įkainuoja variantą tik tada, kai jos klasėse nurodytas `IfcBuildingElementProxy`.
- Grindų plotą įkainuoja eilutė, kurioje yra variantui naudojimą nusakantis žodis, pavyzdžiui, biuras. Jei jos nėra, naudojama eilutė su žodžiais bendras grindų plotas arba pastato masė. Eilutė su m² naudoja bendrą grindų plotą. Eilutė su m³ naudoja tūrį.
- Apvalkalą (perimetras kartų aukštis) įkainuoja eilutė su žodžiu apvalkalas arba fasadas.
- Variantas be atitinkančios eilutės rodo **Be įkainio**. Bendra suma rodoma tik tada, kai kiekviena prašoma dalis turi įkainį.

## Verta žinoti

- Variantus laikykite su **Laikyti kaip variantą** kambarių programos tūrių sąraše. Žr. Tūrio variantai.
- PDF negali pasirinkti elementų. Už BimCraft ribų `figures.csv` perduoda ryšį nuo kiekvieno rodiklio iki jo elementų.

## Dar neįgyvendinta

- Lapai ir nubrėžti vaizdai į dokumentą neįdedami. Paketas talpina tik 3D vaizdo paveikslėlį.
