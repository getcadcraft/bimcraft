---
title: Elementų pažymėjimas kaip patikrintų arba patikrintų vietoje (LOD 500)
summary: Elementas, nuskaitytas iš PDF ar skenavimo, lieka nepatikrintas, kol jo nepatikrinate. Pažymėkite elementus kaip patikrintus arba kaip patikrintus vietoje (LOD 500) su tuo, kas, kada ir kaip juos išmatavo, ir perduokite tikrovės modelį (as-built), kuriame aišku, kas yra kas.
keywords: nepatikrinta, patikrinta, patikrinta vietoje, kaip pastatyta, as-built, lod 500, uždarymas, perdavimas, išmatuota vietoje, ruletė, lazeris, skenavimas, geodezija, esamas pastatas, pakeitimas, pažymėti kaip patikrintą, patikrinimas, 7 etapas
from: df35d908
---

## Ką darysite

Stebėkite, ką modelyje kas nors iš tikrųjų peržiūrėjo. Elementas turi vieną iš trijų žymų arba jokios:

- **Nepatikrinta**: programa atpažino jį iš PDF, skenuoto brėžinio, perbraižyto brėžinio arba taškų debesies skenavimo. Dar niekas nepatikrino.
- **Patikrinta**: asmuo palygino jį su brėžiniu, iš kurio jis paimtas.
- **Patikrinta vietoje (LOD 500)**: asmuo jį išmatavo vietoje. Kas, kada ir kaip išmatavo, saugoma kartu su elementu.
- **Be žymos**: nubraižė asmuo. Modelis apie jį nieko neteigia.

## Veiksmai

1. Pasirinkite vieną elementą arba kelis (sienas, duris, langus, patalpas, bet kurį elementą).
2. {{ui:Savybės}} lange atidarykite {{ui:Patikrinimas}}.
3. Įrašykite, kas patikrino arba išmatavo. Data yra šiandien, nebent ją pakeisite.
4. Spustelėkite {{ui:Pažymėti kaip patikrintą}}. Matavimui vietoje pasirinkite, kaip buvo matuota (ruletė, lazerinis atstumo matuoklis, skenavimas, geodezinė nuotrauka), ir spustelėkite {{ui:Pažymėti kaip patikrintą vietoje (LOD 500)}}.
5. {{ui:Pažymėti kaip nepatikrintą}} ir {{ui:Nuimti žymą}} grąžina atgal. Kiekvienas paspaudimas yra vienas veiksmas, kurį galima anuliuoti, visam pasirinkimui.

Greitai pažymėti pasirinkimą: {{ui:Įrankiai}} › {{ui:Pažymėti kaip patikrintą}} (įvedus: `MARKCHECKED`) pažymi jį kaip patikrintą jūsų, šiandien.

## Ką turėtumėte matyti

- Plane nepatikrintas elementas turi brūkšninį rėmelį ir „?“; patikrintas vietoje – varnelę. Nuimkite žymę nuo {{ui:Rodyti patikros žymas plane}} skyriuje {{ui:Auditas}}, kad jas paslėptumėte.
- {{ui:Žiniaraščiai}} › {{ui:Patikrinimas}} išvardija kiekvieną pažymėtą elementą su jo lygiu, būsena, kas, kada, kaip ir iš kur jis paimtas.
- Auditas išvardija nepatikrintus elementus ir skaičiuoja elementą, patikrintą vietoje, kaip LOD 500. Žr. [Modelio auditas](topic:audit-the-model).

## Iš skenavimo

Kai lyginate skenavimą su modeliu, {{ui:Pažymėti atitinkamus elementus kaip patikrintus vietoje}} pažymi kiekvieną elementą, kurį skenavimas užfiksavo kaip pastatytą tolerancijos ribose, su metodu „skenavimas“ ir tolerancija pastaboje. Žr. [Palyginti skenavimą su modeliu](topic:compare-scan-with-model).

:::warning
Tas palyginimas sutapatina kiekvieno elemento dėžutę su skenavimo taškais. Tai nėra geodezinė nuotrauka. Naudokite jį elementams, kuriuos taip pat patys apžiūrėjote.
:::

## Tikrovės modelis ir perdavimo paketas

{{ui:Sudaryti perdavimo paketą}} skirtuke {{ui:Ištekliai}} į ZIP archyvą įdeda tikrovės modelį su:

- pareiškimu projekte, kiek elementų patikrinta vietoje, patikrinta, nepatikrinta ir be žymos;
- `as-built/verified-elements.csv`: kiekvienas elementas ir patalpa su būsena, kas, kada ir kaip;
- `as-built/as-built-drawings.pdf`: brėžinių rinkinys toks, koks yra dabar;
- brėžinių keitimų žurnalas, kai modelis yra išleidęs rinkinius.

Žr. [Turtas ir priežiūra](topic:assets-and-maintenance).

## Kaip tai saugoma IFC

Kiekvienas pažymėtas elementas turi savybių rinkinį `CadCraft_Verification`: State, By, On, Method, Source, Note ir LevelOfDevelopment (`LOD 500`, kai patikrinta vietoje). Tai paprastos tekstinės savybės, todėl kitos programos jas rodo, o Rasti, Spalvinti pagal savybę ir žymų žiniaraščiai gali jas naudoti. Tikrovės pareiškimas yra savybių rinkinys `CadCraft_AsBuilt` projekte. Elementas be šio rinkinio nebuvo išmatuotas vietoje.

## Kitas žingsnis

- [Sienos iš brėžinių rinkinio](topic:walls-from-plans)
- [Modelio auditas](topic:audit-the-model)
