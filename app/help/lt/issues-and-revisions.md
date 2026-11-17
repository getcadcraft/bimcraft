---
title: Problemos, revizijos ir brėžinių pakeitimų žurnalas
summary: Įrašykite kiekvieną išduodamų lapų komplektą, žiūrėkite, kas nuo to laiko pakito kiekviename lape ir elemente, ir susiekite statybvietės nurodymus, dirbtuvių brėžinius ir susietus modelius su jiems priklausančia problema.
keywords: problema, išduotas komplektas, pateiktas komplektas, pateikimas, revizija, revizijos, kas pakito, pakeitimai nuo problemos, pakeitimų žurnalas, brėžinių pakeitimų žurnalas, brėžinių registras, perdavimo lapas, statybvietės nurodymas, dirbtuvių brėžinys, susietas modelis, konkursas, statyba, momentinė nuotrauka, palyginti
from: 4c732832
---

## Ką darysite

Įrašysite problemą: kurie lapai išsiųsti, kokia data, kokiam tikslui, kiekvienas su savo revizija. Vėliau galėsite paklausti, kas pakito nuo tos problemos. Statybvietės nurodymus ir grąžintus dirbtuvių brėžinius susiesite su problema.

## Žingsniai

1. Kairiajame skydelyje atidarykite **Problemos ir revizijos**.
2. Pasirinkite **Įrašyti problemą**. Revizija siūloma automatiškai (A, tada B; numeruota, pavyzdžiui P1, didėja). Pasirinkite, kam problema skirta, kam ji siunčiama, datą ir lapus. Kai nustatytas jūsų projekto etapas, tikslas seka etapą. Kai leidimo paketas turi pagalbinių dokumentų sąrašą, su juo susieti lapai pažymimi automatiškai.
3. Palikite pažymėtą **Taip pat įrašyti modelio kopiją kaip išduotą**, kad modelis liktų tiksliai toks, koks buvo išsiųstas. Kopija atsisiunčiama; jos pavadinimas, dydis ir SHA-256 saugomi kartu su problema.
4. Spustelėkite **Įrašyti šią problemą**. Lapas, kuris pakito nuo paskutinio išleidimo, gauna naują reviziją. Lapas, kuris nepakito, lieka su sava revizija. Kiekvieno lapo antraštės blokas rodo jo reviziją.
5. Norėdami pamatyti, kas pakito, šalia problemos pasirinkite **Pakeitimai nuo**. Kiekvienas lapas rodomas kaip **Tas pats** arba **Pakeistas**, su jame pridėtais, pakeistais ir pašalintais elementais. Spustelėkite skaičių, kad pažymėtumėte tuos elementus.
6. Pasirinkite **Pridėti įrašą** statybvietės nurodymui, dirbtuvių brėžiniui, žymėjimų rinkiniui, susietam modeliui ar pastabai. Pasirinkite problemą, su kuria jis susietas. Pasirinktas failas įrašomas pagal pavadinimą, dydį ir SHA-256; failas lieka ten, kur yra.
7. **Brėžinių pakeitimų žurnalas** rodo po vieną eilutę kiekvienam lapui ir po vieną stulpelį kiekvienai problemai. **Atsisiųsti žurnalą (CSV)** įrašo jį su problemomis ir įrašais.
8. **Įrašyti problemų istoriją** sukuria failą `.issues.json`. MarkupCraft, TakeoffCraft ir DetailCraft jį skaito su **Skaityti problemų istoriją**.

## Verta žinoti

- Istorija saugoma IFC faile (savybių rinkinys `CadCraft_Issues` projekte). Kitos programos ją ignoruoja.
- Lapas laikomas pakitusiu, kai pakito jo paties nustatymai arba elementas, kurį jis rodo: planas rodo savo lygį, fasadas ar pjūvis – visą modelį, durų ar langų žiniaraštis – savo duris ar langus.
- Elementas laikomas pakitusiu, kai pakito savybė, jo padėtis, dydis ar forma.
- Norėdami pamatyti, kuri tiksliai savybė pakito, atidarykite išsiųstos modelio kopijos failą su **Lyginti versijas**.
- Pašalinus problemą, jos įrašai išlieka be problemos. Kiekvienas žingsnis – vienas veiksmas „Anuliuoti“.
- Modelyje su daugiau nei 60 000 elementų nesaugomas kiekvieno elemento įrašas su problema. Lapai vis tiek lyginami.

## Dar neįgyvendinta

- Lapai nėra įrašomi kaip PDF kartu su problema.
- Revizijos debesis nepiešiamas ant BimCraft lapų. Debesis įrašykite MarkupCraft programoje, susietus su problema.
