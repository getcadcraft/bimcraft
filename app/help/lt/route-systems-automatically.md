---
title: Automatiškai tiesti ortakius, nuotekų, vandens ir šaldymo agento vamzdžius
summary: Kolizijų patikroje BimCraft suranda kelią aplink atvirą modelį ortakiams, gravitaciniam nuotekų nutekėjimui, šaltam ir karštam vandeniui bei išskaidytiems arba kelių šakų šaldymo agento vamzdžiams ir nubraižo linijas su jungiamosiomis detalėmis vienu anuliavimo žingsniu. Projektavimo pagalba: dydžius, nuolydžius ir patikras pateikia programos lentelės bei jūsų įvesti skaičiai; čia nieko nesakoma apie tai, kad projektas atitinka normas.
keywords: automatinis tiesimas, automatiškai tiesti, tiesti ortakius, tiesti vamzdžius, nuotekos, sanitarinė, gravitacija, stovas, vėdinimas, sifonas, vanduo, karštas vanduo, grąžinimo kilpa, recirkuliacija, šaldymo agentas, išskaidytas, kelių šakų, VRF, ekvivalentinis ilgis, šakos komplektas, Y jungtis
from: 5841d513
---

## Ką darysite

Leiskite BimCraft sudėlioti tinklą tarp jungčių, kurios jau yra modelyje, aplink sienas ir sijas, o tada patikrinkite jį pagal matomus skaičius.

## Žingsniai

1. Atverkite modelį ir kolizijų patikrą. Skiltyje **Automatiškai tiesti ortakius** pasirinkite oro tiekimo įrenginį ir jo išleidimo angas, arba skiltyje **Automatiškai tiesti kitas sistemas** pasirinkite sistemą.
2. **Sanitarinis nuotekų nuleidimas gravitacija.** Įveskite išleidimo vietą ir, jei turite, stovų vietas. Pažymėkite **Tiesti visus aukštus vienu kartu**, kad būtų paimti visi aukštai, kuriuose yra įrenginių: kiekvieno aukšto nuotekos jungiasi prie stovo savo lygyje, o stovas eina nuo aukščiau aukščiausio čiaupo iki savo pado. Spauskite {{ui:Tiesti}}.
3. **Sifonas iki vėdinimo.** Skydelyje išvardytas atstumas nuo kiekvieno sifono iki jo vėdinimo. Įveskite didžiausią pagal jūsų normas leidžiamą reikšmę laukelyje **Didžiausias atstumas nuo sifono iki vėdinimo**; bet koks įrenginys, viršijantis ją, nurodomas kaip neatliktas, su viršijimu milimetrais. Pažymėkite **Vėdinti per stovą**, kai įrenginiai neturi savo vėdinimo atšakos: tada atstumas matuojamas iki stovo. BimCraft nepateikia šiam skaičiavimui normų lentelės: skaičių įvedate jūs.
4. **Šaltas ir karštas vanduo.** Pasirinkite šaltinį, įveskite slėgį šaltinyje ir slėgį, kurio reikia prie įrenginio. Pažymėkite **Karštas vanduo**, pasirinkite šildytuvo karštą jungtį ir pažymėkite **Grąžinimo kilpa**, kad grąžinimo linija baigtųsi šildytuvo jungtyje **karšto grąžinimo**, arba kitoje jūsų pasirinktoje jungtyje (ta baigiasi 150 mm atstumu, atvira, kad galėtumėte ją prijungti).
5. **Išskaidytas, kelių šakų ir VRF.** Pasirinkite lauko bloką, pažymėkite vidinius blokus ir įveskite kiekvieno galingumą. Įveskite ribas pagal gamintojo duomenis. Įveskite lenkimo ir šakos komplekto **ekvivalentinį ilgį** (gamintojo reikšmes), tada ilgiausias ir bendras ilgiai tikrinami pagal ekvivalentinius ilgius.
6. Spauskite {{ui:Tiesti}}. Skydelyje nurodoma, kiek linijų nubraižyta ir ką nepavyko atlikti bei kodėl. {{ui:Anuliuoti}} atšaukia viską vienu žingsniu.

## Ko turėtumėte matyti

Vamzdžiai su alkūnėmis, trišakiais ir redukcijomis; nuotekos, kurios krenta bent mažiausią savo dydžiui nustatytą nuolydį; vėdinimo atšakos prie įrenginių; šaldymo agento linijos kaip skysčio ir dujų pora, kuri kiekvienu kampu sukasi ta pačia kryptimi, o šakos komplektas pažymėtas ten, kur šaka atsiskiria nuo magistralės.

## Verta žinoti

- Kur viena nuotekų linija susijungia su kita, modelis nubraižo trišakį. Planas tokias vietas įvardija kaip 45 laipsnių Y jungtis, kad galėtumėte pakeisti detalę.
- Karštas vanduo naudoja įrenginio savo karštą jungtį, kai jo šeimoje tokia yra, o kai nėra — jungtį 100 mm atstumu nuo šaltos.
- Šaldymo agento linijos prasideda tarp dviejų kiekvieno bloko jungčių. Kai dvi bloko jungtys stovi per arti lenkimui, pora išlieka centruota tarp jų.
- Vandens tinklas naudoja skaičiavimuose rodomą paklausos kreivę ir trinties skaičius; prieš pasikliaudami slėgiais, pakeiskite juos pagal savo normas.
- Dideli namai gali užtrukti pusę minutės ar ilgiau, daugiausia dėl karšto tinklo.
- Tai projektavimo pagalba. Kvalifikuotas asmuo tikrina dydžius, nuolydžius, vėdinimą ir slėgius pagal taikomas normas.

## Toliau

[Patikrinkite kolizijas](topic:clash-check) · [Patikrinkite vamzdžius ir ortakius pagal konstrukciją](topic:mep-against-structure) · [Vamzdžių ir įrangos jungtys](topic:mep-connections)
