---
title: Siuntimas į vamzdžių įtempių ar izometrijos programą ir nuskaitymas atgal (PCF)
summary: Įrašykite modelio vamzdžių trasas kaip PCF vamzdynų komponentų failą arba nuskaitykite PCF failą iš vamzdžių įtempių ar izometrijos programos ir nubraižykite jo vamzdį kaip trasas.
keywords: pcf, vamzdynų komponentų failas, vamzdžių įtempiai, izometrija, izometrijos, eksportas, importas, vamzdynai, įrenginys, plieninis vamzdis, darbo perkėlimas, kita programinė įranga
from: 24f91355
---

## Ką darysite

PCF yra paprastas tekstinis failas, kurį skaito ir rašo vamzdžių įtempių bei izometrijos programos. Jame išvardyti kiekvienos vamzdynų linijos komponentai su jų galiniais taškais ir vidiniais skersmenimis.

## Eksportas

1. Pasirinkite vamzdžio įrankį. Parinkčių eilutėje rodomas **Eksportuoti PCF**.
2. Spustelėkite jį. Įrašoma kiekviena modelio vamzdžių trasa: tiesus vamzdis, alkūnės (90 laipsnių posūkis, kitaip – lenkimas), trišakiai su jų šakos tašku, reduktoriai ir vožtuvai.
3. Failas naudoja milimetrus. Vidiniai skersmenys yra nominalūs skersmenys milimetrais. Alkūnės centrinis taškas yra jos kampas, kur susitinka dvi atkarpos.

PCF rašomas plieniniam sandūrinio suvirinimo vamzdžiui. Kita medžiaga taip pat įrašoma su plieninių komponentų kodais, ir tai pažymima Problemų skydelyje.

## Importas

1. Pasirinkite vamzdžio įrankį ir spustelėkite **Importuoti PCF…**, tada pasirinkite failą.
2. Tiesus vamzdis iki alkūnių, lenkimų, vožtuvų ir flanšų tampa viena trasa dabartiniame lygyje. Dydžio keitimas pradeda naują trasą. Trišakio šaka tampa atskira trasa, prasidedančia trišakio centre.
3. Modelis pats sudaro savo jungiamąsias detales. Reduktoriai ir trišakiai nekopijuojami: jie atsiranda ten, kur susitinka skirtingų dydžių trasos ar šaka.

:::note
Aukščiai faile skaitomi kaip aukščiai virš dabartinio lygio. Apkrovos, tvirtinimai ir pats įtempių skaičiavimas PCF faile nėra ir nepersikelia.
:::

## Patikrinkite, kas atkeliavo

- Bendras vamzdžio ilgis kiekvienoje linijoje turi sutapti su šaltiniu.
- Problemų skydelyje kiekvieną kartą išvardijama: alkūnė, kurios centrinis taškas nėra vienodu atstumu nuo abiejų galų; vamzdis be ilgio; ir vidinis skersmuo, kuris nėra standartinis dydis.

## Vamzdynas, kuris jau yra IFC faile

Kai IFC failas atidarytas, **Eksportuoti PCF** taip pat įrašo jo paties vamzdžių segmentus, jungiamąsias detales ir vožtuvus šalia trasų, kurias nubraižėte. Segmentas gauna savo galus iš prievadų arba iš savo kūno galų. Jungiamoji detalė be prievadų paliekama, ir apie tai praneša Problemų skydelis. Galite eksportuoti vien iš IFC, kai modelyje nėra nubraižytų trasų.

Importuojant atramos, atšakos (olets), flanšai, tarpikliai ir kamščiai faile nebraižomi. Problemų skydelyje išvardijama, kiek kiekvienos rūšies buvo praleista, kad nieko nedingtų be žinios.
