---
title: Projekto etapai: nuo užduoties iki nurodymų statybvietei
summary: Pradėkite nuo užduoties su tiksliniais plotais ir braižydami matykite, ar atitinka, ar trūksta; palyginkite koncepcijos variantus su ja, susiekite specifikacijas ir mazgus su tipais, peržiūrėkite dirbtuvių brėžinius ir įrašykite nurodymus statybvietei prie elementų.
keywords: užduotis, patalpų žiniaraštis, tikslinis plotas, atitinka, trūksta, patalpos, koncepcijos variantai, variantai, tūrio modelis, biudžetas, specifikacija, spec, mazgas, konstrukcinis mazgas, tipas, dirbtuvių brėžinys, peržiūra, patvirtinti, pakartotinai pateikti, nurodymas statybvietei, revizija, priežastis, laukas, etapas
from: 0a49b852
---

## Ką darysite

Vienoje skiltyje atlikite visus projekto etapus: surašykite kliento užduotį kaip patalpas su tiksliniais plotais, palyginkite koncepcijos variantus su ja, laikykite specifikaciją ir konstrukcinius mazgus su tipais, kuriems jie priklauso, peržiūrėkite dirbtuvių brėžinius, kai jie grįžta iš atliekančiųjų darbus, ir įrašykite nurodymus statybvietei prie elementų, kuriuos jie keičia.

## Veiksmai

1. Kairiajame skydelyje atidarykite **Projekto etapai**, tada **Užduotis**.
2. Įklijuokite patalpas, po vieną eilutėje: `Living; 1; 30` reiškia vieną 30 m² patalpą. Skaičių galima praleisti. Pasirinkite **Pridėti patalpas**. Užpildykite klientą, statybvietę, biudžetą, leistiną nuokrypį ir programą, tada pasirinkite **Įrašyti užduotį**.
3. Nubraižykite sienas. Kiekviena sienų sudaryta patalpa, turinti užduoties patalpos pavadinimą (skaičius po jo, pvz., „Miegamasis 2“, ignoruojamas), yra skaičiuojama. **Patalpų žiniaraštis** rodo **Atitinka**, **Trūksta**, **Viršija** arba **Nenubraižyta**, o skirtumas nurodomas m².
4. Norėdami pradėti naują projektą šiuo būdu, pasirinkite **Pradėti naują projektą pagal užduotį**. Atveriamas naujas modelis, pagal vieną iš jūsų išsaugotų šablonų, jei jį pasirinksite, ir į jį kaip pirmas žingsnis įdedama užduotis.
5. Atidarykite **Variantai pagal užduotį**. Visi modelyje išsaugoti tūrio variantai nubraižomi vienodu masteliu su bendru plotu, tuo, ko reikalauja užduotis, ir tuo, kiek užduoties patalpų telpa. **Sudėti užduotį čia** sudėlioja patalpas į varianto aukštus, pradedant žemiausiu, ir nurodo, kas netelpa. Kaina skaičiuojama tik pagal projekto kainų lentelę; jei nėra atitinkamos eilutės, rodoma „Nėra įkainio“.
6. Atidarykite **Tipai, specifikacijos ir mazgai**. Kiekvienas sienos, durų, lango ir grindų tipas rodo, ar jam yra specifikacijos tekstas, su juo susieti mazgai ir kur specifikacija, žiniaraščiai bei lapai nesutampa. **Susieti mazgą** prideda DetailCraft arba CadCraft failą, adresą arba šio modelio lapą.
7. Atidarykite **Dirbtuvių brėžiniai**. Modelyje pasirinkite elementus, kuriuos apima dirbtuvių brėžinys, tada **Gauti jį**. Naudokite **Patvirtinti**, **Pagal pastabas** arba **Keisti**, nurodydami peržiūrėtojo vardą ir pastabą. **Pateikta pakartotinai** sukuria kito tos pačios įrašo revizijos įrašą ir išsaugo peržiūros istoriją. Būsena taip pat įrašoma ant kiekvieno elemento.
8. Atidarykite **Nurodymai statybvietei**. Pasirinkite elementus, savais žodžiais nurodykite priežastį ir tai, kaip tai veikia kainą bei laiką, tada pasirinkite **Įrašyti ją**. Įrašius išdavimą, **Paaiškinti pakeitimus nuo šio išdavimo** nurodo, kuriuos pakeistus elementus apima nurodymas ir kurie pakito, bet nieko neįrašyta.

## Verta žinoti

- Kiekvienas žingsnis – vienas **Anuliuoti** veiksmas. Niekas neatmetama: neatitinkanti užduotis, tipas, prieštaraujantis savo tekstui, ar pavėluotas dirbtuvių brėžinys yra įspėjimas arba pastaba skiltyje **Problemos**.
- Užduoties patalpos yra erdvės be sienų. Jos turi tikslinį plotą, o ne nubraižytą, todėl patalpų žiniaraščiai ir COBie jų nelaiko nubraižytomis patalpomis.
- Išdėstymas tik sudėlioja patalpas į aukštus pagal plotą. Sienų jis nebraižo.
- Specifikacijos tekstas rašomas skiltyje **Dokumentai** iš modelio. Čia jis tik lyginamas su paties modelio matmenimis: jokia standarto punkto niekada nerašoma už jus.
- Dirbtuvių brėžiniai ir nurodymai statybvietei yra įrašai toje pačioje istorijoje kaip skiltyje **Išdavimai ir revizijos», todėl abi skiltys juos rodo.
- Dirbtuvių brėžinio būsena yra kiekvieno elemento savybė (`CadCraft_ShopDrawing`), o nurodymas statybvietei – `CadCraft_SiteInstruction`, todėl **Rasti** ir **Spalva pagal savybę** gali juos naudoti.
- Lauke patikrinti žymenys (7 etapas) yra **Savybėse** skirsnyje **Patikrinimas**.
