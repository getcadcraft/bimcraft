---
title: Beraam verwarmings- en verkoellaste
summary: Elke vertrek se hitteverlies, sy verwarming oor 'n jaar volgens graad-dae en sy verkoelingspiek, uit wat dit in die model begrens en elke element se U-waarde, met elke invoer gewys. 'n Ontwerphulpmiddel, nie 'n nakomingsberekening nie.
keywords: energie, verwarming, verkoeling, hitteverlies, hitte-las, verkoellas, u-waarde, termiese oordragkoëffisiënt, graad-dae, hdd, ventilasie, lugverversings, interne winste, sonwins, lambda, geleidingsvermoë, isolasie, vroeë ontwerp, analise, vertrekke, ruimtes
from: ec312d20
---

In die {{ui:Dagligte}}-oortjie, na {{ui:Bereken}}, maak {{ui:Verwarmings- en verkoellaste}} oop en klik op {{ui:Werk die laste uit}}. Elke vertrek kry sy **hitteverlies** op 'n koue ontwerpdag, sy **verwarming oor 'n jaar** en sy **verkoelingspiek** op 'n warm een. Niks word opgelaai nie; niks in die model verander nie tensy jy 'n U-waarde tik.

:::warning
Dit is **'n ontwerphulpmiddel, nie 'n nakomingsberekening nie**: 'n bestendige-toestand-beraming met elke invoer op die skerm. Dit is **nie** die ISO 52016-1-metode nie, nie 'n simulasie nie en nie 'n energiesertifikaat nie; dit dimensioneer nie ketels, warmtepompe of verkoelers nie. Kontroleer resultate, en dimensioneer toerusting, saam met 'n ingenieur.
:::

## Wat elke vertrek begrens

BimCraft vind dit in die model self, so enige program se IFC werk (dit het nie die ruimtegrense nodig wat sommige programme uitvoer nie). Vanaf elke stukkie van elke vertrek se eie oppervlak kyk dit reguit uit:

- die eerste muur, venster, deur, vloer, dak, bedekking, gordynmuur of balk wat dit ontmoet **begrens** daardie stukkie;
- net verby daardie element, óf **'n ander vertrek** (as naburig gereken, teen dieselfde temperatuur: geen verlies nie), **niks** (buite), of, onder 'n vloer op die laagste vlak, **die grond**;
- 'n oop deuropening na 'n ander vertrek tel as naburig; 'n stukkie wat niks heeltemal ontmoet nie (binne 1.5 m sywaarts of afwaarts, 8 m op) word onder die vertrek gelys en uitgelaat.

Vensters en deure kry hul eie grootte uit die IFC (algehele breedte × hoogte) uit die muur waarin hulle sit. Klik op 'n vertrek in die tabel om elke element te sien wat dit begrens, met sy oppervlakte, sy U-waarde en waar die U-waarde vandaan kom.

## U-waardes

Vir elke element wat BimCraft gebruik, in hierdie volgorde:

1. **Die IFC se eie U-waarde** — die `ThermalTransmittance` in die element se algemene eienskapstel (byvoorbeeld `Pset_WallCommon`) of dié van sy tipe. Die meeste ontwerpprogramme kan dit skryf.
2. **Sy materiaallae** — 1 ÷ (binneoppervlakweerstand + elke laag se dikte ÷ sy geleidingsvermoë λ + buite-oppervlakweerstand), met die gewone oppervlakweerstande (0.13 en 0.04 m²K/W vir mure; 0.10 opwaarts, 0.17 afwaarts binne). Tipiese geleidingsvermoëns om mee te begin (mineraalwol 0.035, baksteen 0.77, beton 1.4…); onder {{ui:Materiaal se geleidingsvermoë}} tik die vervaardiger s'n, en elke U-waarde uit daardie lae volg.
3. **'n Tipiese waarde** (mure 0.3, dakke 0.2, vloere 0.25, vensters 1.4, deure 1.6 W/m²K), as sodanig gemerk — tik jou eie.

'n U-waarde wat in 'n vertrek se besonderhede getik word, word as `ThermalTransmittance` in die element se algemene eienskapstel geskryf (een stap; {{key:Mod+Z}} ontdoen dit). As verskeie elemente dieselfde stel deel (een muurtipe, sê maar), verander hulle almal saam, en die statuslyn sê hoeveel.

## Verwarming

- **Hitteverlies** = Σ U × A × (binne − buite) vir alles na buite + Σ U × A × (binne − grond) vir vloere op die grond + 0.335 × lugverversings per uur × die vertrek se volume × (binne − buite). 0.335 Wh per m³ per kelvin is lug se digtheid (1.2 kg/m³) maal sy hittekapasiteit (1005 J/kgK).
- **Verwarming oor 'n jaar** = (die vertrek se verlies per graad na buite, deur die struktuur en die lug, plus sy grondverlies geskaal na dieselfde verskil) × die **graad-dae** × 24 ÷ 1000, in kWh. Tik die graad-dae vir die plek, of {{ui:Lees graad-dae uit 'n CSV…}} (een ry per dag of maand; die laaste getal in elke ry word opgetel). Gebruik graad-dae tot die basistemperatuur wat jou bron gebruik: daardie basis laat reeds toe vir die gratis hitte van mense, ligte en die son.

## Verkoeling

Die **verkoelingspiek** = die hitte deur die struktuur en die lug by die somerontwerptemperatuur + mense (vloer per persoon × hitte per persoon) + verligting en toerusting per m² vloer + **die son**: die piek van {{ui:Son deur die vensters op 'n datum}} vir daardie vertrek. Werk eers die son uit, op 'n warm dag; tot dan tel die son 0 en sê die afdeling so. Die piek van elke deel word saamgetel, selfs as hulle op verskillende ure val, wat 'n bietjie oorskat.

## Wat dit uitlaat

- Die ISO 52016-1 maandelikse en uurlikse metodes (’n betaalde standaard), hitte wat in die gebou se massa geberg word, termiese brue, hoe verwarmings- en verkoelingstelsels presteer, en klimaatlêers.
- Vertrekke langs mekaar word teen dieselfde temperatuur geneem; ongeverwarmde ruimtes word nie gemodelleer nie.

Sien ook [Beraam die dagligte in elke vertrek](topic:daylight-factor).
