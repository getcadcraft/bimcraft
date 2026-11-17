---
title: "Klimato ateitis: 2050 ir 2080 potvynis, karštis ir gaisras"
summary: Iš naujo paleiskite potvynį, energijos metus ir gaisro orientacinį vertinimą su būsimu klimatu (scenarijai SSP2-4.5 ir SSP5-8.5, 2050 ir 2080 metai) iš klimato duomenų paketo, rodydami dabartį šalia ateities.
keywords: klimatas, klimato kaita, ateitis, 2050, 2080, ssp, cmip6, scenarijus, jūros lygis, potvynis, karštis, orų failas, epw, morfavimas, energyplus, gaisras, miškų gaisras, gaisro oras
from: 224ecd08
---

Klimato skaičiai ateina iš **duomenų paketo**, o ne iš programos. Įjunkite priedą {{ui:Klimato ateitis}} skiltyje Parametrai › Priedai arba įkelkite savo paketo failą bloke {{ui:Klimato ateitis}}.

:::warning
Paketas, kuris ateina su priedu, yra **pavyzdys**: trys vietos (Denveris, Majamis, Johanesburgas), vienas klimato modelis, penkeri metai kiekviename 20 metų laikotarpyje. Jis skirtas įrankiams išbandyti, **ne projektavimui**. Skydelis tai rodo paryškintai, kol jis naudojamas. Pilnas paketas (daug modelių, visi metai, daugiau vietų) sukuriamas su `tools/climate/build-pack.mjs` iš NASA NEX-GDDP-CMIP6 duomenų.
:::

## Pasirinkite ateitį

Kairiajame skydelyje, {{ui:Pavojaus atkūrimas}}, pasirinkite **Scenarijų** (SSP2-4.5, vidurio kelias, arba SSP5-8.5, didelė tarša) ir **Metus** (2050 reiškia 2041–2060, 2080 reiškia 2071–2090; abu lyginami su 1995–2014). **Vieta** yra paketo vieta, artimiausia modelio sklypui (IfcSite platuma ir ilguma), arba ta, kurią pasirenkate. Toli nuo visų vietų naudojami paketo pasaulinio vidurkio pokyčiai, ir skydelis tai nurodo.

## Potvynis: dabartis šalia ateities

Pasirinkus scenarijų, nustatykite **Potvynio tipą**: pakrantės (prideda jūros lygio kilimą), upės arba smarkaus lietaus (gilesnis pagal naujausios dienos kritulių pokytį), arba abu. Spauskite Vykdyti: potvynis paleidžiamas kaip anksčiau, o lentelė rodo dabartinį ir būsimą potvynį šalia vienas kito (vandens lygis, patalpos, kurios užsemia, giliausias vanduo). Prielaidos išvardytos po ja:

- pakrantės lygis pakyla visu jūros lygio kilimu; banga ir audra nekeičiamos;
- upės debitas auga tiesiogiai su naujausios dienos kritulių kiekiu, o gylis seka debitą iki 0.6 laipsnio (Manningo lygtis plačiam kanalui);
- abi dalys tiesiog sudedamos.

## Šiluma: ateities orų failas

Pasirinkite rūšį {{ui:Šiluma: ateities orų failas}}, pasirinkite dabartinį `.epw` orų failą ir spauskite {{ui:Sukurti ateities orų failą}}. Failas **morfuojamas** kas mėnesį paskelbtu poslinkio ir ištempimo metodu (Belcher, Hacker ir Powell, 2005): mėnesio vidurkis sušyla pagal paketo pokytį, karštos popietės pagal dienos maksimumo pokytį, o šaltos naktys pagal dienos minimumo pokytį; santykinis drėgnumas keičiasi pagal paketo pokytį, o rasos taškas apskaičiuojamas iš naujo. Slėgis ir vėjas lieka tokie patys. Lentelė lygina vidutines ir aukščiausias temperatūras, 0.4 % vėsinimo ir 99.6 % šildymo projektines temperatūras, valandas ties 30 °C ir 35 °C bei laipsnių dienas.

{{ui:Įrašyti ateities orų failą}} jį įrašo; {{ui:Naudoti energijos patikroje}} perduoda EnergyPlus patikrai (skirtukas Energija). Ateities failas yra tie patys tipiniai metai, tik šiltesni: jis nepridės naujų karščio bangų.

## Energijos metai: dabartis šalia ateities

EnergyPlus patikroje (skirtuke Energija, savarankiškas priedas su jūsų pačių varikliu) pasirinkite dabartinį orų failą, tada scenarijų ir metus bloke {{ui:Klimato ateitis}}, ir spauskite {{ui:Modeliuoti metus: dabartinis ir ateities}}: metai paleidžiami pagal dabartinį failą ir jo morfuotą ateitį, o kiekvieno kambario šildymas ir vėsinimas išvardijami šalia vienas kito.

## Gaisro rizika (tik orientacinis vertinimas)

Pasirinkite rūšį {{ui:Gaisrų rizika (tik orientacinis vertinimas)}}: artimiausia augmenija, nuolydis nuo jos iki pastato ir atstumas iki jos. Rezultatas yra juosta nuo labai žemos iki ekstremalios, dabartinė ir ateities.

:::warning
**Tik orientacinis vertinimas.** Tai mūsų pačių santykinė skalė, skirta nustatyti, ar vietai reikia tinkamo gaisro rizikos vertinimo, o ne kodo įvertinimas ar gaisro atakos lygis. Ji dauginama iš augmenijos svorio, nuolydžio koeficiento (ugnis maždaug padvigubėja greičiu kas 10 laipsnių į viršų, skaičiuojant iki 20 laipsnių), atstumo koeficiento (10 m padalinta iš atstumo, daugiausia 1) ir paketo gaisro oro indekso pokyčio.
:::

## Iš kur skaičiai

- **Temperatūra, drėgmė, saulės šviesa, krituliai, gaisro oras:** NASA NEX-GDDP-CMIP6, kasdien mažinamo mastelio CMIP6 klimato modelių išvestis. Kiekvieno modelio išvestis licencijuota pagal CC BY 4.0. Gaisro oro pokytis yra Canadian Fire Weather Index, apskaičiuotas kiekvienai dienai pagal modelio orus (su kasdiene drėgme vietoj vidurdienio drėgmės).
- **Jūros lygio kilimas:** IPCC AR6 pasaulinis vidurkis (ne vietinis; žemės kilimas ar nuslūgimas juo neįtraukiami), nebent paketas pateikia vietinius skaičius.
- Paketas nurodo savo šaltinį, licenciją ir datą; skydelis jas rodo.
