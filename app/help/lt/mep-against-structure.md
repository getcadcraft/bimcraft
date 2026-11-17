---
title: Vamzdžių ir ortakių patikrinimas pagal konstrukciją
summary: Paleiskite paruoštus vamzdžių ir ortakių susidūrimų rinkinius su sienomis, perdangomis, sijomis ir kolonomis, raskite linijas, kurios eina per arti konstrukcijos nei leidžia jų izoliacija ir tarpas, ir išvardykite linijoms reikalingas angas per sienas ir perdangas CSV ir BCF formatais.
keywords: mep, susidūrimas, susidūrimų patikra, koordinavimas, konstrukcija, sienos, perdangos, sijos, kolonos, atstumas, minkštas susidūrimas, izoliacija, tarpas, anga, angos, įvadas, gaubtas, šerdies gręžimas, statybiniai darbai, bcf, csv
from: 2d597f01
---

## Ką darysite

Įsitikinkite, kad įrenginiai tinka pastatui: kas įsiremia į konstrukciją, kas eina per arti jos ir kur sienose bei perdangose reikia angų. Atverkite kairiajame skydelyje {{ui:Susidūrimų patikra}}; skyrius **Vamzdžiai ir ortakiai su konstrukcija** yra po įprasta patikra.

## Kieti susidūrimai

Abu rinkinių sąrašai dabar siūlo ir **Vamzdžius ir ortakius**, **Sienas**, **Perdangas ir stogus**, **Sijas**, **Kolonas** ir **Konstrukciją** (visus keturis), kiekvienas su savo elementų skaičiumi. Spustelėkite {{ui:Vamzdžiai ir ortakiai × konstrukcija}}, kad pasirinktumėte pirmąjį ir paskutinįjį, ir paleiskite patikrą; arba patys pasirinkite bet kokią porą ir spustelėkite {{ui:Vykdyti}}. Žr. [Susidūrimų patikra](topic:clash-check).

## Atstumai

Kai kuriems įrenginiams reikia erdvės aplink: izoliacijai, darbui ar įvadui.

1. Savybių lange nurodykite vamzdžio ar ortakio linijos **Izoliacijos** storį (nieko nebraižoma).
2. Susidūrimų patikroje įveskite **Tarpą aplink vamzdžius ir ortakius** (mm).
3. Spustelėkite {{ui:Tikrinti atstumus}}: kiekviena dalis, kuri yra arčiau sienos, perdangos, sijos ar kolonos nei jos izoliacija su tarpu, išvardijama su turimu ir reikalingu atstumu. Spustelėkite eilutę, kad pamatytumėte abu.

Dalis, kuri eina per sieną ar perdangą, yra anga, o ne atstumo pažeidimas, ir ji išvardijama ten.

## Reikalingos angos

Spustelėkite {{ui:Reikalingos angos}}. Kur linijos ašis kerta sieną ar perdangą, BimCraft išvardija jai reikalingą angą: apvalią apvaliam vamzdžiui ar ortakiui, kitu atveju stačiakampę. Jos dydis lygus linijos išoriniam matmeniui, pridėjus dvigubą izoliaciją ir dvigubą tarpą; ji centruota ten, kur linija kerta. Spustelėkite eilutę, kad pamatytumėte liniją ir sieną ar perdangą.

- {{ui:Angos CSV formatu}}: viena eilutė kiekvienai angai su linija, jos dydžiu ir izoliacija, angos dydžiu, elementu, per kurį ji eina, ir jo GlobalId, aukštu, centro X, Y ir Z koordinatėmis bei tuo, kiek toli linija eina pro ją.
- {{ui:Angos kaip BCF problemos}}: viena problema kiekvienai angai su kamera, nukreipta į ją, ir pasirinktomis linija bei elementu, skirta konstrukcijos inžinieriaus programai.

:::note
Nieko nepjaunama: angos – tai sąrašas žmonėms, kurie jas dimensionuoja. Tarpą įveskite patys; joks kodeksas nenurodo, koks turi būti angos dydis. Sijos ir kolonos yra susidūrimai, o ne angos: ar vamzdis gali eiti pro jas, sprendžia konstrukcijos inžinierius.
:::
