---
title: Sudėti kiekius, išvardyti elementus ir sudaryti erdvių žiniaraštį
summary: Suskaičiuokite elementus ir sudėkite jų ilgius, plotus, tūrius ar bet kurią skaitinę savybę, grupuodami pagal bet kurią savybę; išvardykite kiekvieną elementą atskira eilute arba sudarykite erdvių žiniaraštį su plotais ir tūriais. Kiekvienas atsisiunčiamas kaip CSV.
keywords: kiekis, kiekiai, kiekių skaičiavimas, suma, žiniaraštis, kiekių sąrašas, kiekių žiniaraštis, qto, csv, grupuoti pagal, skaičiuoti, ilgis, plotas, tūris, erdvės, kambariai, kambarių žiniaraštis, plotų žiniaraštis, elementų sąrašas
from: e2e7210c
---

## Ką atliksite

Gauti sumas iš modelio: sienų ilgius pagal aukštą, durų skaičių pagal tipą, perdangos tūrį pagal medžiagą, kiekvienos zonos kainą.

## Žingsniai

1. Atidarykite IFC modelį.
2. Kairiajame skydelyje atidarykite {{ui:Kiekių suma}}.
3. Skiltyje {{ui:Skaičiuoti}} pasirinkite {{ui:Visi elementai}} arba tik pažymėtus.
4. Po {{ui:Grupuoti pagal}} pasirinkite savybę, pvz., {{ui:Klasė}}. Spustelėkite {{ui:Pridėti grupę}}, kad padalintumėte toliau, iki trijų, pvz., pagal {{ui:Aukštas}}.
5. Po {{ui:Sudėti}} pažymėkite skaičius, kuriuos sudėti. Modelio kiekių rinkiniai iš pradžių pažymėti.
6. Spustelėkite {{ui:Atsisiųsti CSV}}, kad atidarytumėte lentelę skaičiuoklėje.

## Ką turėtumėte matyti

- Viena eilutė kiekvienai grupei, su tuo, kiek elementų ji turi, ir kiekviena suma, bei bendros sumos eilutė.
- Elementai be reikšmės suskaičiuojami, bet nieko nepridedama. Tada CSV prie sumos prideda stulpelį „praleista“, kad matytumėte, kiek jų yra.
- Skaičiai rodomi failo paties vienetais, kaip failas juos saugo, dažnai ilgiai milimetrais.

## Vienas elementas eilutėje arba erdvės

Pakeiskite {{ui:Rodyti}}:

- **Viena eilutė kiekvienam elementui**: kiekvienas elementas savo eilutėje, su savybėmis pagal {{ui:Stulpeliai}} ir skaičiais pagal {{ui:Sudėti}}. CSV pradžioje yra kiekvieno elemento GlobalId. Spustelėkite pirmą reikšmę eilutėje, kad pasirinktumėte tą elementą.
- **Erdvės**: kiekvienas kambarys su numeriu, pavadinimu, aukštu, plotu ir tūriu bei jų sumomis. Plotai ir tūriai imami iš erdvės kiekių, kaip failas juos nurodo. Kai failo jų nėra, jie išmatuojami pagal erdvės formą m² ir m³ ir rodomi kursyvu; CSV nurodo, kuris yra kuris.

## Kitas žingsnis

- [Rasti elementus pagal klasę, pavadinimą ar savybę](topic:find)
- [Nuspalvinti elementus pagal savybę](topic:color-by-property)

## Infrastruktūra (IFC 4.3)

Pasirinkite **Infrastruktūra (IFC 4.3)** rodinių sąraše, kad pamatytumėte kelius, geležinkelius, tiltus ir jūrų darbus, sudėtus pagal klasę ir tipą, su ilgiu, plotu ir tūriu, kuriuos nurodo pats failas. Kiekis, kurio failas nenurodo, paliekamas tuščias ir niekada neskaičiuojamas. **Siųsti infrastruktūros kiekius į TakeoffCraft** įrašo `.quantities.json` failą, kurį TakeoffCraft atidaro kaip tipizuotus kiekius.
