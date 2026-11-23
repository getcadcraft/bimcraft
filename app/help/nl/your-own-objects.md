---
title: Eigen objecten en familiebestanden in de bibliotheek brengen
summary: Lees familiebestanden (.rfa) en IFC-, DWG-, DXF-, glTF- of OBJ-bestanden in het tabblad Bibliotheek, plaats ze zoals elk bibliotheekitem, en bewaar ze in Mijn objecten, een privélijst die alleen u kunt zien.
keywords: rfa, familie, families, familiebibliotheek, eigen objecten, mijn objecten, privéobjecten, privébibliotheek, objecten importeren, fabrikantinhoud, bim-objecten, ifc-object, gltf, obj, dwg-blok, bewaren, wisselen, migreren
from: 886261f8
---

## Wat u gaat doen

Breng objecten die u al hebt in BimCraft: een familiebibliotheek uit Revit, een IFC- of DWG-download van een fabrikant, of een mesh uit een ander modelleerprogramma. U leest het bestand in het tabblad {{ui:Bibliotheek}}, plaatst het object in uw model als een volwaardig IFC-element, en als u het later opnieuw wilt, bewaart u het in {{ui:Mijn objecten}}.

## Stappen

1. Open een IFC-model, of start een nieuw gebouw.
2. Klik op het tabblad {{ui:Bibliotheek}} naast {{ui:Eigenschappen}}.
3. Klik op {{ui:Bestanden…}}, en daarna op {{ui:Kies een bestand…}}. Kies één bestand of meerdere tegelijk: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` of `.csv`. Of klik op {{ui:Kies een map…}} om een hele map en de mappen erin te lezen (tot 200 bestanden in één keer).
4. Klik op een kaart om te zien wat er is gelezen: het voorbeeld van de plattegrond, de naam, fabrikant en model, de maten en de opmerkingen.
5. Klik op {{ui:In plattegrond plaatsen}} of {{ui:In model plaatsen}} om het te plaatsen.
6. Om het in andere projecten opnieuw te gebruiken, klikt u op {{ui:Bewaren in mijn objecten}}. Met meerdere gelezen bestanden bewaart {{ui:Alles bewaren in mijn objecten}} ze in één keer.
7. Klik later op {{ui:Mijn objecten}} in het tabblad Bibliotheek om ze terug te vinden. Ze worden geplaatst, verwisseld en bijgewerkt zoals elk bibliotheekitem.

De bestanden worden in dit tabblad gelezen. Niets wordt geüpload totdat u {{ui:Bewaren in mijn objecten}} kiest.

## Wat er uit elk soort bestand wordt gelezen

| Bestand | Wat u krijgt |
|---|---|
| IFC | Elk elementtype als object met zijn echte 3D-vorm, IFC-klasse en eigenschapssets |
| glTF, GLB, OBJ | Eén object met zijn echte 3D-vorm als mesh. Stel eerst de eenheden en de omhoogrichting in. |
| DWG, DXF | Elk blok als object met zijn plattegronds-tekening en attributen |
| Familiebestand (`.rfa`) | De naam, categorie, fabrikant, model, parameters en types van de familie. **Niet de 3D-vorm:** een doos met de breedte, diepte en hoogte van de familie staat in de plaats. |
| CSV | Eén object per rij: naam, maten en gegevens, getekend als een doos |

## Familiebestanden en hun 3D-vorm

De 3D-vorm in een `.rfa`-bestand is opgeslagen in een niet-gedocumenteerd formaat, dus BimCraft leest de gegevens van de familie en gokt de geometrie niet. De kaart zegt dat ook: "Geometry not read from this family; a box stands in." (in het Nederlands: geometrie niet gelezen uit deze familie; een doos staat in de plaats).

Om een familie met haar echte vorm binnen te halen, exporteert u die uit het programma dat hem heeft gemaakt (Revit):

1. Open de familie, of een project met de familie erin geplaatst.
2. Kies **Bestand > Exporteren > IFC**. Zie [de exportinstellingen die hier het best werken](topic:rvt-to-ifc).
3. Lees in BimCraft het `.ifc`-bestand met {{ui:Bestanden…}}. Elk familietype komt binnen als eigen object, met zijn vorm en eigenschapssets.

Veel fabrikanten bieden naast het familiebestand een IFC- of DWG-download aan. Die worden rechtstreeks gelezen.

## Familietypes

Een familie met meerdere types komt binnen als één item met een keuze {{ui:Variant}}, één variant per type. Elke variant heeft de waarden die tussen de types verschillen, en een eigen doos als het type een breedte en een diepte heeft. Een familie met één type is een gewoon item dat met de waarden van dat type is gevuld.

Sommige families bewaren hun types in een typecatalogus: een `.txt`-bestand met dezelfde naam naast het familiebestand. Selecteer beide tegelijk, of kies de map, en de rijen van de catalogus worden de varianten.

## De gegevens van een familie op een echte vorm

Staat in een map een familiebestand en een IFC-, glTF- of OBJ-bestand met dezelfde naam (`Chair.rfa` en `Chair.ifc`), selecteer dan beide tegelijk of kies de map. BimCraft maakt één item: het familiebestand levert de naam, fabrikant, model, parameters en types, en het andere bestand levert de echte 3D-vorm. In de opmerkingen staat uit welk bestand de vorm komt. Eén vorm wordt voor elk type gebruikt.

Staat er in een familiebestand een opgeslagen afbeelding, dan toont de details van het item die afbeelding onder de plattegrondtekening. De afbeelding wordt alleen daar getoond; ze wordt niet bij het item bewaard.

## Mijn objecten

{{ui:Mijn objecten}} is uw eigen privélijst in de bibliotheek. Alleen u ziet wat erin staat: het staat niet in de openbare bibliotheek, niet in zoekresultaten en niet bij uw team. Het volgt uw account, dus dezelfde objecten staan op een andere computer zodra u zich bij de bibliotheek aanmeldt.

- U moet bij de bibliotheek aangemeld zijn om een object te bewaren. Zie [aanmelden bij de bibliotheek](topic:library-credits).
- Een object bewaren stuurt dat ene object naar uw account. Tot dan blijft het op uw computer.
- {{ui:Verwijderen uit mijn objecten}} haalt een object van de lijst. Kopieën die al in tekeningen zijn geplaatst, blijven staan.
- Wilt u een object met iedereen delen, upload het dan naar de openbare bibliotheek, onder een licentie die u kiest.

:::note
Mijn objecten wordt getest en is misschien nog niet voor uw account open. Als de bron ontbreekt, of er staat "Mijn objecten is nog niet open voor dit account", dan kunt u uw eigen bestanden nog steeds lezen en plaatsen met {{ui:Bestanden…}}; ze worden in uw model bewaard.
:::

## Veelgemaakte fouten

- **Verwachten dat een `.rfa` de echte vorm van de familie heeft.** Alleen de gegevens worden gelezen. Exporteer IFC voor de vorm.
- **Twee items waar u er één verwachtte.** Een familie en haar vormbestand worden alleen samengevoegd als hun namen precies overeenkomen, afgezien van de extensie, en ze in dezelfde map staan.
- **Een mesh komt duizend keer te groot binnen, of ligt op zijn kant.** Stel {{ui:Eenheden van het bestand}} en {{ui:Omhoog-as van een mesh}} onder {{ui:Bestanden…}} in voordat u het bestand kiest.
- **"No family data" bij een bestand.** Het is een project (`.rvt` met een andere extensie opgeslagen) of een familiesjabloon, geen familie. Zie [een project- of familiebestand lezen](topic:read-rvt-file).
- **Inhoud bewaren die u niet mag opslaan.** Sommige betaalde bibliotheken staan geen kopieën buiten hun eigen dienst toe. Controleer de voorwaarden van inhoud die u niet zelf hebt gemaakt.
