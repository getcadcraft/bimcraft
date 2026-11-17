---
title: Verwarmings- en koelbelastingen schatten
summary: Het warmteverlies van elke ruimte, de verwarming over een jaar op basis van graaddagen en de koelpiek, op basis van wat de ruimte in het model begrenst en de U-waarde van elk element, met alle invoer zichtbaar. Een ontwerphulpmiddel, geen nalevingsberekening.
keywords: energie, verwarming, koeling, warmteverlies, warmtebelasting, koelbelasting, u-waarde, warmtedoorgangscoëfficiënt, graaddagen, hdd, ventilatie, luchtverversingen, interne winsten, zonnewinst, lambda, geleidbaarheid, isolatie, vroeg ontwerp, analyse, ruimten, ruimte
from: ec312d20
---

In het tabblad {{ui:Daglicht}}, na {{ui:Berekenen}}, open {{ui:Verwarmings- en koelbelasting}} en klik op {{ui:De belastingen berekenen}}. Elke ruimte krijgt zijn **warmteverlies** op een koude ontwerpdag, zijn **verwarming over een jaar** en zijn **koelpiek** op een warme dag. Er wordt niets geüpload; er verandert niets in het model tenzij u een U-waarde typt.

:::warning
Dit is **een ontwerphulpmiddel, geen nalevingsberekening**: een stationaire schatting met alle invoer op het scherm. Het is **niet** de methode ISO 52016-1, geen simulatie en geen energiecertificaat; het dimensioneert geen ketels, warmtepompen of koelmachines. Controleer de resultaten, en laat de apparatuur door een ingenieur dimensioneren.
:::

## Wat elke ruimte begrenst

BimCraft vindt dit in het model zelf, dus elk IFC-bestand van welk programma dan ook werkt (het heeft de ruimtegrenzen niet nodig die sommige programma's exporteren). Vanaf elk stukje van het eigen oppervlak van elke ruimte kijkt het recht naar buiten:

- het eerste element dat het raakt (wand, raam, deur, vloer, dak, bekleding, gordijngevel of balk) **begrenst** dat stukje;
- net voorbij dat element: ofwel **een andere ruimte** (als buurruimte gerekend, op dezelfde temperatuur: geen verlies), ofwel **niets** (buiten), of, onder een vloer op de laagste verdieping, **de grond**;
- een open doorgang naar een andere ruimte telt als buurruimte; een stukje dat nergens raakt (binnen 1.5 m zijwaarts of omlaag, 8 m omhoog) wordt onder de ruimte vermeld en buiten beschouwing gelaten.

Ramen en deuren krijgen hun eigen formaat uit de IFC (totale breedte × hoogte) van de wand waarin ze zitten. Klik op een ruimte in de tabel om elk element te zien dat haar begrenst, met de oppervlakte, de U-waarde en waar de U-waarde vandaan komt.

## U-waarden

Voor elk element dat BimCraft gebruikt, in deze volgorde:

1. **De eigen U-waarde van de IFC**: de `ThermalTransmittance` in de gemeenschappelijke eigenschapsset van het element (bijvoorbeeld `Pset_WallCommon`) of die van zijn type. De meeste ontwerpprogramma's kunnen die schrijven.
2. **De materiaallagen**: 1 ÷ (binnenoppervlakteweerstand + de dikte van elke laag ÷ de geleidbaarheid λ + buitenoppervlakteweerstand), met de gebruikelijke oppervlakteweerstanden (0.13 en 0.04 m²K/W voor wanden; 0.10 naar boven, 0.17 naar beneden binnen). Typische geleidbaarheden om mee te beginnen (steenwol 0.035, baksteen 0.77, beton 1.4…). Onder {{ui:Geleidbaarheid van materialen}} typt u die van de fabrikant, en elke U-waarde uit die lagen volgt.
3. **Een typische waarde** (wanden 0.3, daken 0.2, vloeren 0.25, ramen 1.4, deuren 1.6 W/m²K), als zodanig gemarkeerd. Typ de uwe.

Een U-waarde die u in het detail van een ruimte typt, wordt als `ThermalTransmittance` in de gemeenschappelijke eigenschapsset van het element geschreven (één stap; {{key:Mod+Z}} maakt het ongedaan). Als meerdere elementen die set delen (bijvoorbeeld één wandtype), veranderen ze allemaal samen, en de statusregel vermeldt hoeveel er zijn.

## Verwarming

- **Warmteverlies** = Σ U × A × (binnen − buiten) voor alles naar buiten + Σ U × A × (binnen − grond) voor vloeren op de grond + 0.335 × luchtverversingen per uur × het volume van de ruimte × (binnen − buiten). 0.335 Wh per m³ per kelvin is de dichtheid van lucht (1.2 kg/m³) maal de warmtecapaciteit ervan (1005 J/kgK).
- **Verwarming over een jaar** = (het verlies van de ruimte per graad naar buiten, via de constructie en de lucht, plus haar grondverlies geschaald naar hetzelfde verschil) × de **graaddagen** × 24 ÷ 1000, in kWh. Typ de graaddagen voor de plaats, of gebruik {{ui:Graaddagen uit een CSV lezen…}} (één rij per dag of maand; het laatste getal in elke rij wordt opgeteld). Gebruik graaddagen tot de basistemperatuur van uw bron: die basis houdt al rekening met de gratis warmte van mensen, verlichting en zon.

## Koeling

De **koelpiek** = de warmte door de constructie en de lucht bij de zomerse ontwerptemperatuur + mensen (vloeroppervlak per persoon × warmte per persoon) + verlichting en apparatuur per m² vloer + **de zon**: de piek van {{ui:Zon door de ramen op een datum}} voor die ruimte. Bereken eerst de zon, op een warme dag; tot die tijd telt de zon 0 en vermeldt de sectie dat. De pieken van elk deel worden opgeteld, ook als ze op verschillende uren vallen, wat een beetje overdrijft.

## Wat er niet in zit

- De maandelijkse en uurlijkse methoden van ISO 52016-1 (een betaalde norm), warmte die in de massa van het gebouw wordt opgeslagen, koudebruggen, hoe verwarmings- en koelsystemen presteren, en klimaatbestanden.
- Ruimten naast elkaar worden op dezelfde temperatuur genomen; onverwarmde ruimten worden niet gemodelleerd.

Zie ook [Het daglicht in elke ruimte schatten](topic:daylight-factor).
