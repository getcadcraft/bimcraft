---
title: Odoslanie potrubia do programu pre pevnosť alebo izometriu a jeho načítanie späť (PCF)
summary: Zapíšte trasy potrubia modelu ako súbor PCF pre potrubné komponenty alebo načítajte súbor PCF z programu pre pevnosť potrubia alebo izometrie a nakreslite jeho potrubie ako trasy.
keywords: pcf, súbor potrubných komponentov, pevnosť potrubia, izometria, izometrie, export, import, potrubie, zariadenie, oceľové potrubie, presun zákazky, iný softvér
from: 24f91355
---

## Čo urobíte

PCF je prostý textový súbor, ktorý čítajú a zapisujú programy pre pevnosť potrubia a izometrie. Vypisuje komponenty každého potrubného vedenia s ich koncovými bodmi a svetlosťami.

## Export

1. Vyberte nástroj Potrubie. Riadok možností zobrazuje **Exportovať PCF**.
2. Kliknite naň. Zapíše sa každá trasa potrubia v modeli: priame potrubie, kolená (otočenie o 90 stupňov, inak oblúk), T-kusy s ich bodom odbočky, redukcie a ventily.
3. Súbor používa milimetre. Svetlosti sú menovité priemery v milimetroch. Stredový bod kolena je jeho roh, kde sa stretávajú jeho dve ramená.

PCF sa zapisuje pre oceľové potrubie so zvarom na tupo. Trasa v inom materiáli sa zapíše tiež, s kľúčmi oceľových komponentov, a je uvedená v paneli Problémy.

## Import

1. Vyberte nástroj Potrubie a kliknite na **Importovať PCF…**, potom vyberte súbor.
2. Priame potrubie cez kolená, oblúky, ventily a príruby sa stane jednou trasou na aktuálnej úrovni. Zmena rozmeru začne novú trasu. Odbočka T-kusa sa stane vlastnou trasou začínajúcou v strede T-kusa.
3. Model si kladie vlastné tvarovky. Redukcie a T-kusy sa nekopírujú: objavia sa tam, kde sa stretnú trasy rôznych rozmerov alebo odbočka.

:::note
Výšky v súbore sa čítajú ako výšky nad aktuálnou úrovňou. Zaťaženia, podpery a samotná analýza pevnosti nie sú v súbore PCF a neprenesú sa.
:::

## Kontrola, čo sa preniesol

- Celková dĺžka potrubia na potrubné vedenie by mala zodpovedať zdroju.
- Panel Problémy uvádza raz každý: koleno, ktorého stredový bod nie je rovnako vzdialený od oboch koncov, potrubie bez dĺžky a svetlosť, ktorá nie je štandardným rozmerom.

## Potrubie, ktoré je už v súbore IFC

Keď je otvorený súbor IFC, **Exportovať PCF** zapíše aj jeho vlastné segmenty potrubia, tvarovky a ventily, vedľa trás, ktoré ste nakreslili. Segment získa svoje konce z portov alebo z koncov svojho telesa. Tvarovka bez portov sa vynechá a panel Problémy to uvedie. Export môžete urobiť iba z IFC, keď model nemá nakreslené trasy.

Pri importe sa podpery, olety, príruby, tesnenia a záslepky v súbore nekreslia. Panel Problémy uvedie, koľko každého z nich bolo vynechaných, aby nič nezmizlo bez upozornenia.
