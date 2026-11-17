---
title: Įkūnytoji anglis ir sąnaudos tvarkaraštyje
summary: Sudėkite modelio įkūnytąją anglį pagal atvirą, redaguojamą koeficientų lentelę ir paskirstykite kainas per 4D tvarkaraštį į sąnaudų ir pinigų srautų kreivę. Abu pradeda nuo jūsų įvestų ar importuotų verčių.
keywords: įkūnytoji anglis, anglis, carbon, co2, kgco2e, išmetimai, koeficientų lentelė, epd, 5d, sąnaudos, pinigų srautas, S kreivė, tvarkaraščio sąnaudos, kainos, kiekių skaičiavimo kainos
from: 83e82840
---

## Įkūnytoji anglis

Atidarykite skydelį **Anglis**. Kiekvieno elemento kiekis (tūris, plotas arba ilgis) padauginamas iš koeficiento iš lentelės pagal gyvavimo ciklo modulį: gaminio stadija privaloma, transportavimas ir atliekos – neprivalomi. Sumos pateikiamos pagal medžiagą, klasę ir aukštą bei vienam grindų kvadratiniam metrui.

**Koeficientų lentelė priklauso jums.** Eilutės, kurios ateina su BimCraft, yra bendros pradinės reikšmės tinkamo dydžio eilės. Jos nėra iš duomenų bazės, pažymėtos kaip nepatikrintos, ir jas reikia pakeisti šaltiniu, kurį naudojate (EPD, nacionaline duomenų baze arba jūsų įmonės duomenimis). Redaguokite eilutes skydelyje arba importuokite ir eksportuokite lentelę kaip CSV ar JSON. Jūsų pridėtos eilutės pakeičia pradinę eilutę su tuo pačiu id. Lentelė įrašoma modelyje.

Elementai be atitikmens arba be kiekio išvardijami kaip Problemos, o ne skaičiuojami kaip nulis.

## Sąnaudos 4D tvarkaraštyje

Atidarykite skydelį **Sąnaudos** šalia 4D tvarkaraščio. Įveskite kainas (surašykite jas, importuokite CSV ar JSON arba perkelkite TakeoffCraft eilutes), kiekvieną kainą susiekite su modelio medžiagomis raktažodžiais, ir ji įkainoja kiekvienos užduoties elementus. Užduoties sąnaudos paskirstomos per jos pradžios ir pabaigos dienas (tolygiai arba su krūviu pradžioje ar pabaigoje), o skydelis braižo kaupiamąją pinigų srautų kreivę pagal dieną, savaitę ar mėnesį, su sąnaudomis pagal etapą ir paketą bei tuo, kas planuota, palyginta su tuo, kas pastatyta tam tikrą datą. Eksportas į CSV. Nieko neįkainojama, kol nepateikiate kainų: jokių nepridedama.

## Valiuta

Kainų lentelėje galima nurodyti, kokia valiuta yra kainos (trys raidės, pavyzdžiui, USD arba EUR). 5D skydelyje yra laukelis tam, jis įrašomas faile kartu su kainomis, o JSON eksportuose jis taip pat išsaugomas. Lentelė, sukurta anksčiau, arba ta, kurioje palikote tuščią, neturi valiutos: jos sąnaudos rodomos kaip USD, numatytoji programos reikšmė, ir apie tai skydelis bei bendros sumos praneša. Valiutos tarpusavyje nekonvertuojamos.
