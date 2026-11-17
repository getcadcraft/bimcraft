---
title: Een hele projectmap openen
summary: Wijs BimCraft naar een projectmap om alle modellen, hun back-ups en koppelingen tegelijk te zien, en laat het vak Begin hier voorstellen welk bestand u moet bewerken.
keywords: map, map openen, projectmap, netwerkstation, server, begin hier, welk bestand, back-ups, koppelingen, xrefs, recente mappen, map slepen
from: 16fbdce2
---

## Wat u gaat doen

Open een hele projectmap, zoals de map die u voor een opdracht hebt gekregen, en laat BimCraft die uitzoeken: welke modellen er zijn, welke kopieën back-ups zijn, wat naar wat verwijst, welke bestanden beschadigd zijn, en welk bestand u waarschijnlijk wilt openen.

Er worden alleen de paar kilobytes gelezen die elke modelkaart nodig heeft, dus een map op een netwerkstation of een gesynchroniseerde cloudmap is prima.

## Stappen

:::chromium
1. Klik links op {{ui:Een map openen}} (of in het midden van het lege scherm).
2. Kies de projectmap in het venster dat opent en klik op **Selecteren** (of **Uploaden** of **Openen**, afhankelijk van uw systeem).
3. Klik op **Bestanden bekijken** wanneer de browser vraagt "Mag de site bestanden bekijken?". Dit laat alleen het tabblad de map lezen; er wordt niets geüpload.
4. Wacht terwijl de statusregel telt: "Inhoud van de map wordt opgehaald: … bestanden", en daarna "Revit-bestanden worden gecontroleerd: … van …".
:::

:::firefox
1. Klik links op {{ui:Een map openen}} (of in het midden van het lege scherm).
2. Kies de projectmap in het venster dat opent en bevestig. Firefox kan vragen of de pagina de bestanden van de map mag lezen; die blijven op uw computer.
3. Wacht terwijl de statusregel "De map wordt gelezen: … bestanden" zegt, en daarna "Revit-bestanden worden gecontroleerd: … van …".
:::

:::safari
1. Klik links op {{ui:Een map openen}} (of in het midden van het lege scherm).
2. Kies de projectmap in het venster dat opent en klik op **Uploaden**. Ondanks het woord verlaat niets uw Mac: de bestanden worden alleen aan het tabblad overgedragen.
3. Wacht terwijl de statusregel "De map wordt gelezen: … bestanden" zegt, en daarna "Revit-bestanden worden gecontroleerd: … van …".
:::

U kunt ook de **map slepen** vanuit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerder}} naar de pagina. Een gesleepte map wordt in elke browser geopend zonder toestemmingsvraag.

## Wat u ziet

Het mapoverzicht vult het midden:

- De mapnaam, aantallen modellen, CAD-tekeningen, IFC-modellen en bestanden, en de totale grootte.
- Rode of oranje opmerkingen als bestanden onvolledig zijn of gekoppelde bestanden ontbreken in de map.
- Het vak {{ui:Begin hier}}: het bestand dat BimCraft voorstelt om te openen, met de redenen.
- **Modellen**: één rij per model, met de back-ups eronder gegroepeerd.
- **Gekoppelde en verwezen bestanden**, **IFC-modellen**, **CAD-tekeningen** en **Apart gezet**, als de map die heeft.

Links vat het paneel {{ui:Map}} dit samen; **Problemen** zegt "Geen" wanneer elke kopie in orde is.

## Het vak Begin hier gebruiken

Het vak noemt één bestand en geeft de reden, bijvoorbeeld:

- "Nieuwste opgeslagen werk in deze map (3 mrt 2025)."
- "*Consultant.rvt* is in andere modellen gekoppeld, dus het is achtergrond en niet het bestand om te bewerken."
- "*Tower.rvt* lijkt de voor de hand liggende keuze, maar het is beschadigd; de laatste goede kopie is van …"
- "Dit is een centraal model: open het in Revit met "Create New Local" en werk in de lokale kopie."

1. Lees de redenen.
2. Klik op {{ui:De kaart openen}} om de kaart van dat bestand te lezen, of op {{ui:Toon het in de lijst}} om de rij in **Modellen** te vinden.
3. Controleer bij wie het project het laatst is bewerkt voordat u erop vertrouwt. Het vak zegt dat ook: het is een beste gok op basis van namen, datums en koppelingen.

## Bestanden openen vanuit het overzicht

1. Klik op de naam van een model om de kaart te openen. De kaart controleert elke koppeling tegen de map.
2. Klik op {{ui:Terug naar}} en op de mapnaam bovenaan de kaart (of op {{ui:Terug naar de map}} links) om terug te keren.
3. Klik op een IFC-bestand onder **IFC-modellen** om het in 3D te openen.
4. Klik op een DWG of DXF onder **CAD-tekeningen** om het in 2D te openen. De gekoppelde tekeningen en afbeeldingen worden automatisch in de map gevonden.

## Een map later opnieuw openen

:::chromium
Mappen die u hebt geopend met {{ui:Een map openen}} of door te slepen, staan links onder {{ui:Recente mappen}}. Klik op {{ui:Heropenen}} en de mapnaam om de map opnieuw te openen zonder hem te kiezen. Na een herstart van de browser vraagt Chrome of Edge het opnieuw; kies "Altijd toestaan" om te voorkomen dat het opnieuw vraagt. De lijst wordt alleen in deze browser bewaard en nooit ergens naartoe gestuurd. Klik op × om een map te vergeten.
:::

:::firefox safari
Deze browser onthoudt mappen niet tussen bezoeken. Kies de map opnieuw met {{ui:Een map openen}}, of sleep hem erin.
:::

## Veelgemaakte fouten

- **Een map kiezen die te groot is.** Boven 20.000 bestanden: "Deze map bevat meer dan 20.000 bestanden. Kies een kleinere map, zoals één project." Kies de projectmap, niet het hele station.
- **De bovenliggende map van meerdere projecten kiezen.** Het vak {{ui:Begin hier}} kiest dan over projecten heen. Kies één project.
- **Revit-mappen lijken genegeerd.** De mappen `*_backup`, `*_log` en `Revit_temp` zijn huishoudelijk; ze staan onder **Apart gezet** en worden niet gelezen.
- **Verwachten dat een model vanaf de kaart in 3D opent.** Een projectbestand is alleen een kaart. Open de IFC-export.
- **Telefoons en tablets.** Veel mobiele browsers kunnen helemaal geen mappen kiezen. Gebruik een computer.

Zie [Een map controleren op beschadigde kopieën, ontbrekende koppelingen en restanten](topic:check-folder-health) en [Mapoverzicht: rollen, statussen en koppelingen](topic:folder-roles).
