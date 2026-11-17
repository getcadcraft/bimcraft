---
title: Verwarming en koeling controleren met EnergyPlus
summary: Schrijf het model als EnergyPlus-bestand, of voer EnergyPlus versie 26.2.0 erop uit in de browser, en vergelijk de ontwerpbelastingen met de snelle hulp voor verwarming en koeling. Een tweede mening voor het vroege ontwerp, geen berekening voor naleving.
keywords: energyplus, energiesimulatie, ontwerpdag, verwarmingsbelasting, koelbelasting, weerbestand, epw, idf, thermische massa, jaarlijkse energie, simuleren
from: b82a5bf2
---

## Wat u gaat doen

Het paneel **Controleren met EnergyPlus** schrijft het geopende model als EnergyPlus-invoerbestand (een IDF): één zone per ruimte, de muren, vloeren, daken en ramen met hun U-waarden, de luchtverversing en de ideale verwarming en koeling. U kunt dat bestand altijd **opslaan** en het in uw eigen EnergyPlus draaien.

Als u ook de engine instelt, kan het paneel meteen simuleren en toont het de ontwerpverwarming en -koeling van EnergyPlus naast die van de snelle hulp, ruimte voor ruimte.

Dit is een ontwerphulpmiddel. Energienormen, certificering en vergunningen vereisen een goedgekeurd hulpmiddel en de klimaatgegevens die het nodig heeft, en het resultaat moet worden nagekeken door de persoon die ervoor instaat.

## De engine instellen

BimCraft bevat EnergyPlus niet. Het is een grote WebAssembly-build (ongeveer 6 MB gecomprimeerd, plus een datubestand van 4.6 MB), dus u host het zelf en typt het adres in het paneel. De pagina laadt het alleen wanneer u op een simulatieknop drukt, nooit bij het opstarten. Het adres moet https zijn, een pad op deze site, of localhost.

## Ontwerpdagen of een jaar

- **Ontwerpdagen simuleren** heeft geen weerbestand nodig. Het draait een koude winterdag zonder zon en een hete, heldere zomerdag, bij de temperaturen in de invoer voor verwarming en koeling op het tabblad Daglicht, en meldt de belasting van elke ruimte in watt.
- **Een jaar simuleren** heeft een weerbestand in EPW-formaat nodig dat u kiest. Het voegt personen, verlichting en apparatuur toe uit dezelfde invoer (altijd aan, want er wordt geen rooster verzonnen) en meldt de verwarmings- en koelenergie van elke ruimte in kWh. Weerbestanden hebben hun eigen licenties, dus gebruik er een die u mag gebruiken.

## Thermische massa

Vink **Muren met bekende lagen thermische massa geven** aan. Muren, daken en vloeren waarvan de materiaallagen bekend zijn, worden dan laag voor laag geschreven, met dichtheid en soortelijke warmte uit een korte tabel met typische waarden per materiaalnaam. De lagen worden eerst van buiten af genomen, in de volgorde waarin het bestand ze vermeldt. Elementen zonder lagen blijven bij hun U-waarde, zonder massa.

## De vergelijking lezen

De twee methoden beantwoorden iets andere vragen. De snelle hulp houdt elk element bij; het EnergyPlus-bestand middelt de U-waarden van elke ruimte per soort oppervlak. Een verschil van meer dan 15 % in de ontwerpverwarming van een ruimte wordt als opmerking vermeld in het ⚠-paneel, met beide cijfers. Koeling verschilt door het ontwerp meer: de snelle hulp berekent een piek uit de zon op één datum, en EnergyPlus dimensioneert op zijn eigen ontwerpdag.
