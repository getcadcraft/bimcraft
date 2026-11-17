---
title: Sienos iš susekto brėžinio
summary: Paverskite DWG ar DXF planą sienomis, durimis ir langais aukšte ir palikite brėžinį po planu kaip atskaitą.
keywords: dwg, dxf, sekimas, susektas, importuoti planą, konvertuoti, CAD į BIM, 2D į 3D, sienos iš linijų, sluoksniai, blokai, durys iš blokų, pagrindas, atskaitos brėžinys, fonas, xref, brėžimo programa
from: 3bf213f1
---

## Ką darysite

Naudokite planą, kurį jūs (ar kas nors kitas) nubrėžėte brėžimo programoje, kaip modelio pradžią: jo sienų linijos tampa sienomis, o durų ir langų blokai tampa durimis ir langais.

## Žingsniai

1. Įjunkite {{ui:Braižymas}} ir pasirinkite aukštą, kurį rodo brėžinys, plano aukštų sąraše.
2. Pasirinkite {{ui:Versija}} › {{ui:Iš brėžinio…}}, tada {{ui:Pasirinkite brėžinį…}} ir pasirinkite DWG ar DXF.
3. Dialoge:
   - **Brėžinio vienetai** paimami iš brėžinio; pasirinkite kitus, jei jie neteisingi (planas, nubrėžtas pėdomis, bet nuskaitytas kaip coliai, yra dvylika kartų per mažas).
   - **Sienos sluoksniuose**: pažymėkite sluoksnius, kuriuose yra sienų linijos. Sluoksniai, kurių pavadinimuose yra „wall“, pažymimi už jus.
   - **Linijos yra**: **abiejų sienos paviršių** (įprastas planų braižymo būdas: kiekviena lygiagrečių linijų pora, nutolusi ne daugiau kaip 600 mm, tampa viena siena, tokio storio kaip tarpas), **sienų ašys** arba **vienas paviršius** su siena kairėje ar dešinėje. Su ašimis ar vienu paviršiumi sienos tipas nustato storį.
   - **Sienos tipas** ir **Sienos aukštis**, kaip sienos įrankiui.
   - **Blokai**: pasirinkite durų ar langų tipą kiekvienam blokui, kuris yra durys ar langas, arba jį praleiskite. Blokai, kurių pavadinimuose yra „door“ ar „window“, parenkami už jus. Kiekvienas įdedamas į sieną, ant kurios stovi, tokio pločio kaip blokas palei sieną; durys atsidaro į tą pusę, į kurią nubrėžtas jų atsidarymas.
   - **Kur eis**: pagal brėžinio koordinates arba su jo apatiniu kairiuoju kampu ties plano pradžia.
   - **Palikti brėžinį po šio aukšto planu**: palikite pažymėtą, kad matytumėte brėžinį plonomis linijomis po tuo, ką kuriate.
4. Eilutė po pasirinkimais parodo, kiek sienų, durų ir langų bus sukurta. Spustelėkite {{ui:Sukurti juos}}.

## Ką turėtumėte matyti

- Sienos, durys ir langai aukšte, sujungti ten, kur susitinka, su kambariais, kuriuos jie uždaro; viskas yra vienas žingsnis, todėl {{key:Mod+Z}} atšaukia viską.
- Brėžinys kaip plonos linijos po planu. {{ui:Versija}} › {{ui:Iš brėžinio…}} išvardija aukšte išsaugotus brėžinius, kiekvieną su {{ui:Pašalinti}}; pašalinus vieną, sienos lieka.
- IFC faile išsaugotas brėžinys yra aukšto anotacija (jo linijos), todėl kitos BIM programos rodo jį taip pat.

:::note
PDF ar skenuotas brėžinys taip pat veikia: žr. [Sienos iš planų rinkinio](topic:walls-from-plans). Lankai praleidžiami (BimCraft braižo tiesias sienas), taip pat praleidžiamos linijos blokų viduje. Linijos be poros „abiejų paviršių“ režime suskaičiuojamos dialoge ir praleidžiamos: nubrėžkite tas sienas su {{ui:Siena}} įrankiu arba sutvarkykite jas su {{ui:Keisti}} › {{ui:Apkirpti / pratęsti}} (žr. [Apkirpti, pratęsti ir sujungti sienas](topic:trim-extend-walls)).
:::

:::tip
Susekote ant nuskenuoto vaizdo brėžimo programoje? Atidarykite nuskenuotą vaizdą ir čia, ir patikrinkite sienas pagal jį: žr. [Modelis iš skenavimo](topic:model-from-a-scan).
:::
