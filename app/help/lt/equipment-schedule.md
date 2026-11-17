---
title: Sudarykite įrangos žiniaraštį ir eksportuokite CSV
summary: Paverskite maitinimo paslaugų brėžinio įrangos žymas į įrangos žiniaraštį, filtruokite jį, peršokite prie kiekvieno elemento jo lape ir atsisiųskite kaip CSV.
keywords: įranga, žiniaraštis, maitinimo paslaugos, virtuvė, elementų žymos, KCL, atributai, BOM, medžiagų sąrašas, csv, skaičiuoklė, eksportas, duomenų išgavimas
from: e3faa1c8
---

## Ką darysite

Perskaitykite įrangos sąrašą iš virtuvės ar maitinimo paslaugų brėžinio, patikrinkite jį, raskite kiekvieną elementą plane ir atsisiųskite kaip skaičiuoklės failą.

Tai veikia brėžiniuose, kurių įrangos žymos saugo savo duomenis kaip blokų atributus, kaip daro virtuvių projektavimo bibliotekos, pavyzdžiui, KCL: kiekviena žyma turi elemento numerį (`KCL-ITEM`), kiekį, kategoriją, gamintoją, modelį, elektros ir santechnikos duomenis bei pastabas. Kiti brėžiniai neturi {{ui:Equipment}} skirtuko.

## Žingsniai

1. Atidarykite brėžinį, geriausia iš jo projekto aplanko, kad įsikeltų ir susieti brėžiniai.
2. Spustelėkite {{ui:Equipment}} skirtuką virš brėžinio. Jo etiketėje rodoma, kiek elementų yra lapuose, pavyzdžiui, „Įranga (88)“.
3. Perskaitykite žiniaraštį: **Elementas**, **Kiekis**, **Įranga**, **Gamintojas**, **Modelis**, **Elektra**, **Santechnika** ir **Kur**.
4. Pasirinkite, ką išvardyti meniu virš lentelės: **Visi lapai**, vieną lapą, **Nė viename lape** arba **Viskas pažymėta brėžinyje**. Kiekvienas pasirinkimas rodo savo skaičių.
5. Įveskite filtro laukelyje („Filtras: kategorija, gamintojas, modelis…“), kad susiaurintumėte sąrašą, pavyzdžiui, `refrigerator` ar `208`.
6. Spustelėkite elemento lapo pavadinimą stulpelyje **Kur**.
7. Pažiūrėkite į brėžinį: BimCraft perjungia į tą lapą, priartina prie elemento ir aplink jį nubraižo žiedą. Būsenos eilutėje rašoma: „Elementas *n*, *category* apibrėžtas žiedu lape *sheet*.“
8. Spustelėkite {{ui:Equipment}}, kad grįžtumėte prie žiniaraščio.
9. Spustelėkite {{ui:Download CSV}}.

## Ką turėtumėte matyti

- Atsisiuntimų aplanke atsiranda failas pavadinimu „*drawing name* equipment.csv“ (su lapo pavadinimu laužtiniuose skliaustuose, kai išvardijote vieną lapą). Jis atsidaro Excel, Numbers, LibreOffice ar Google Sheets.
- Būsenos eilutė: „Atsisiųsta *file name* (*n* elementų).“

CSV turi šiuos stulpelius: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (kiek žymų). Jame atsisiunčiamos tiksliai tos eilutės, kurias rodo lentelė, po meniu ir filtro.

## Kaip sudaromas žiniaraštis

- Jis skaitomas iš pačių **žymų**, o ne iš lape nubraižytos žiniaraščio lentelės. Pastaba virš lentelės nurodo, kiek žymų perskaityta.
- Viena eilutė – vienas elemento numeris su vienu duomenų rinkiniu. Jos kiekis yra jos žymų **suma**, kaip spausdintame žiniaraštyje: lentynos, pažymėtos „5“ vienoje vietoje ir „3“ kitoje, yra 8, rodoma kaip „5 + 3“.
- **Kur** išvardija lapus, kuriuose rodomas kiekvienas elementas; tai nustatoma pagal tai, ką rodo kiekvieno lapo vaizdo langai, t. y. ką spausdina. „Tik modelis“ reiškia, kad joks lapas jo nerodo.
- **Numeris panaudotas du kartus** pažymi vieną elemento numerį dviems skirtingiems įrangos gabalams. Eilutė turi gintaro spalvos žymą.
- Žymos, kurių jokiame lape nėra, laikomos atskirai pagal **Nė viename lape**. Dažnai jos likusios iš ankstesnių planų ar kitų darbų ir niekada nemaišomos į **Visi lapai**.
- **Elektra** rodo amperus, kW, HP, voltus, fazę, jungtį ir kištuką, kaip pažymėta. **Santechnika** rodo jungčių dydžius: CW – šaltas vanduo, HW – karštas vanduo, DD – tiesioginis nuotekų išvadas, ID – netiesioginis nuotekų išvadas, ir dujos. Kiti žymų laukai dar nerodomi.

## Dažnos klaidos

- **Nėra {{ui:Equipment}} skirtuko.** Brėžinyje nėra `KCL-ITEM` žymų arba jo įranga nubraižyta be duomenų. Nėra ką skaityti.
- **Kiekiai skiriasi nuo spausdinto žiniaraščio.** Spausdintame žiniaraštyje gali būti atsarginių numerių arba trumpesni pavadinimai nei žymose. Dėl to, kas padėta, pasitikėkite žymomis; skirtumus tikrinkite su projektuotoju.
- **Atidarius CSV matomi keisti simboliai.** Failas yra UTF-8. Atidarykite jį skaičiuoklės importo komanda ir pasirinkite UTF-8, jei programa to paklaus.
- **Langelis prasideda apostrofu.** Reikšmės, prasidedančios `=`, `+`, `-` ar `@`, gauna pradžioje `'`, kad skaičiuoklės jų nevykdytų kaip formulių.
- **{{key:F}} ir {{key:P}} neveikia.** Jie veikia brėžinyje, o ne žiniaraštyje. Pirma spustelėkite lapo skirtuką.
