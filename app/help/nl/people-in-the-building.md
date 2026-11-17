---
title: Mensen door het gebouw laten lopen
summary: Een evacuatie of een gewone dag met aankomsten door uw ruimten, deuren en trappen, met wachtrijen waar het gebouw smaller wordt, de langste looproute naar een uitgang vanuit elke ruimte, en de bevindingen als Problemen. Een grof menigtemodel voor ontwerpkeuzes, geen brandveiligheidscertificaat.
keywords: mensen, evacuatie, vluchtweg, ontvluchting, uitgang, loopafstand, wachtrij, menigte, stroom, deurbreedte, trappen, aankomsten, knelpunt, simulatie, gebruikers, voetganger, wat-als, geblokkeerde deur
from: 84aa8920
---

De sectie {{ui:Mensen in het gebouw}} van het linkerpaneel laat mensen door de ruimten, deuren en trappen van het geopende IFC-model lopen. Er wordt niets in het model veranderd en er wordt niets geüpload.

:::warning
Dit is **een ontwerphulpmiddel, geen brandveiligheidscertificaat**. Het kent geen vuur, rook, paniek, verschillen in mobiliteit of wat een voorschrift van u vraagt. De grenzen zijn aan u: de langste looproute naar een uitgang en de beschikbare tijd zijn getallen die u invoert, en er wordt geen enkel getal aangenomen.
:::

## Uitvoeren

1. Open een model met gesloten ruimten en deuren. Een deur met een ruimte aan maar één kant is een uitgang; een deur tussen twee ruimten verbindt ze; een trap verbindt de ruimten aan zijn uiteinden.
2. Kies **Evacuatie** (iedereen loopt naar een uitgang), **Aankomsten** (iedereen komt binnen en loopt naar een ruimte) of **Uitwisseling** (de mensen in de ruimten vertrekken terwijl evenveel mensen binnenkomen), en de vloeroppervlakte per persoon. Ruimten met een naam als gang, trap, hal of toilet bevatten niemand.
3. Klik op {{ui:Uitvoeren}}. U krijgt de tijd waarop de laatste persoon buiten is (en wanneer de helft en negen op de tien personen buiten zijn), de wachtrij bij elke deur en trap, de ruimte met de langste looproute, en een plattegrond die de simulatie afspeelt.

## Wat-als-situaties

Vink {{ui:Dicht}} aan bij een deur in de tabel en voer opnieuw uit: mensen zoeken een andere weg, of de ruimten zonder uitweg worden als fouten vermeld. Een deur die twee keer zo breed is, leegt een ruimte veel eerder; de tabel laat zien waar de wachtrijen zijn.

## Hoe het werkt

Elke ruimte is een raster, zodat mensen om hoeken lopen, niet door muren. De snelheid daalt naarmate een ruimte vol raakt (S = 1.4 (1 − 0.266 D) m/s, D in personen per m²). Een deur laat 1.3 personen per seconde door per meter van zijn breedte, minus 150 mm aan elke kant; een trap 1.0, en lopen gaat trager. Mensen wachten in een rij op volgorde van aankomst. Een runnummer herhaalt dezelfde simulatie precies.

De assistent kan hetzelfde uitvoeren: vraag om een evacuatie, of om de langste looproute naar een uitgang vanuit elke ruimte.

## Mensen per ruimte

Open {{ui:Mensen per ruimte}} om voor elke ruimte een getal in te typen. Een leeg vak gebruikt het getal van de vloeroppervlakte (in grijs getoond); 0 leegt een ruimte. Uw getallen worden gebruikt voor de simulatie en blijven bewaard in deze browser.

## Tegenstroom bij deuren

In **Uitwisseling** ontmoeten mensen die naar buiten gaan en mensen die binnenkomen elkaar bij dezelfde deuren. Wanneer een deur iemand in de andere richting doorlaat die direct achter de laatste persoon komt, behoudt hij een deel van zijn snelheid (hier 0.8; een aanname, omdat gepubliceerde waarden verschillen), en de tabel telt de richtingswisselingen. Een deur die vaak van richting wisselt, staat als opmerking in Problemen.

## Trappen en bordessen

Elk bordes van een trap kost een lopende persoon één seconde om te draaien (een aanname). Een rechte trap heeft er geen; een L- of U-trap heeft er één. De snelheid van de trap komt nog steeds uit de breedte van zijn trapbaan.

## In de 3D-weergave

Vink {{ui:Toon de mensen in de 3D-weergave}} aan, dan verschijnen de wandelaars als figuren in het model, gekleurd naar wat ze doen, en bewegen ze terwijl u de simulatie afspeelt. Er wordt niets aan het model toegevoegd.
