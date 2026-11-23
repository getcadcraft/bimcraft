---
title: Een AI-assistent met uw model laten werken
summary: Schakel assistenten in via Instellingen, zodat een assistent op uw computer elementen kan vinden, hun eigenschappen kan lezen, ze in de weergave kan isoleren en wanden, deuren, ramen, vloeren, niveaus en rasterlijnen kan tekenen, via CadCraft Studio. Uit totdat u het aanzet.
keywords: ai, assistent, mcp, script, automatisering, studio, elementen zoeken, isoleren, eigenschappen, rechten, verbreken, activiteit, wanden tekenen, deuren toevoegen, ramen toevoegen, niveaus, rasters, vloeren, ongedaan maken, opslaan, opdrachtregel, cli, headless, gebruik met AI-assistenten
from: 66d72742
---

## Wat u leert

Hoe u een AI-assistent (elke assistent die MCP spreekt) toegang geeft tot het IFC-model dat u open hebt en erin kunt tekenen, wat die wel en niet kan, en hoe u dat stopt.

## Wat een assistent in BimCraft kan doen

| Vraagt om | Wat er gebeurt | Vereist |
|---|---|---|
| Elementen zoeken | Hij krijgt een lijst met elementen op klasse, verdieping, naam of eigenschapswaarde, zoals **Zoeken** die geeft | Lezen |
| Eigenschappen lezen | Hij krijgt de kenmerken, het type, de eigenschapssets en hoeveelheden van één element, zoals **Eigenschappen** ze toont | Lezen |
| Het model beschrijven, wanden opsommen | Hij krijgt de niveaus, wanden, deuren, ramen, ruimten, vloeren, rasters en kolommen, en per wand de uiteinden, het type en de hoogte | Lezen |
| Isoleren, doorzichtig maken, verbergen of tonen | De 3D-weergave verandert alsof u het menu {{ui:Tonen}} had gebruikt | De weergave wijzigen en tekenen |
| Wanden, deuren, ramen, vloeren, niveaus of rasterlijnen tekenen | Het model verandert alsof u de hulpmiddelen onder {{ui:Tekenen}} had gebruikt: wanden sluiten aan, ruimten, vloeren en daken volgen | De weergave wijzigen en tekenen |
| Een naam of eigenschapswaarde wijzigen | De Naam, Beschrijving, Objecttype of Tag van één element, of één eigenschapswaarde. Een waarde die het met andere elementen deelt, wordt eerst voor dat element gekopieerd; een waarde van het type wijzigt alleen als de assistent dat zegt, omdat elk element van dat type meevolgt | De weergave wijzigen en tekenen |
| Verplaatsen, verwijderen, wanden, deuren en ramen wijzigen | Elementen worden verplaatst of verwijderd met de elementen die erin of erop zitten; wanden die met de hulpmiddelen van {{ui:Tekenen}} zijn getekend, veranderen aan hun uiteinden of type, deuren en ramen aan hun plaats, afmeting of type, en ruimten en aansluitingen volgen | De weergave wijzigen en tekenen |
| Een staat opzetten, indelen en lezen | "Een deurstaat per verdieping, met brandwering en beslag": de assistent noemt de staat, haar kolommen (een eigenschap of tag wordt een kolom) en haar groepering; BimCraft vult hem uit het model en legt hem uit, en neemt wat de assistent niet heeft gezegd over uit de kantoornorm. De opzet komt bij uw lijst met staten. Elke regel die terugkomt noemt zijn elementen, zodat hij ze kan selecteren | Lezen om te lezen; De weergave wijzigen en tekenen om een opzet op te slaan |
| Een staat exporteren | CSV, Excel of tabgescheiden tekst om in Google Sheets te plakken (niets wordt naar Google gestuurd) | Exporteren |
| Vloerafwerkingen lezen en instellen | De afwerkingstypes, de vloer-, wand- en plafondafwerking van elke ruimte, en zones; oppervlakten, aantallen tegels en ondergrondvolumes komen dan uit de afwerkstaten | Lezen; De weergave wijzigen en tekenen om in te stellen |
| Elementen selecteren, de eigen stappen ongedaan maken | Elementen worden in de weergave aangeklikt; de laatste stap wordt ongedaan gemaakt | De weergave wijzigen en tekenen |
| Opslaan | Een nieuw IFC-bestand met elke wijziging, zoals {{ui:Opslaan als IFC}} het maakt (het oorspronkelijke bestand wordt nooit gewijzigd) | Opslaan |
| USD exporteren | De geopende modellen als OpenUSD (.usda, .usdc of .usdz), zoals {{ui:USD}} op de werkbalk ze schrijft | Exporteren |
| Een afbeelding renderen, de renderwachtrij uitvoeren | Een afbeelding van de 3D-weergave, zoals het dialoogvenster {{ui:Renderen}} die maakt met uw renderinstellingen, tenzij het om andere vraagt, of afbeeldingen in hoge kwaliteit die aan de wachtrij van het dialoogvenster worden toegevoegd en één na één worden gerenderd (de wachtrij heeft WebGPU nodig). Er verandert niets in het model ([Een afbeelding renderen](topic:render)) | Exporteren |

Elke wijziging die een assistent maakt, is één stap in **Wijzigingen**, genoemd "Assistant: …" (bijvoorbeeld "Assistant: add 4 walls"), zodat {{key:Mod+Z}} de hele actie ongedaan maakt, en u ziet wiens stap het was. In het venster kan hij geen bestanden openen: u opent het model, en hij werkt met het model dat open is.

## Inschakelen

Assistenten bereiken BimCraft via CadCraft Studio op uw computer; de gewone browser heeft daar geen toegang toe.

1. Open {{ui:Instellingen}} en kies het tabblad **BimCraft**.
2. Vink onder **Assistenten** **Laat AI-assistenten en scripts BimCraft gebruiken** aan.
3. **Lezen** staat al voor u aan. Vink ook **De weergave wijzigen en tekenen** aan als de assistent mag isoleren, verbergen en tekenen, en **Opslaan** als hij het model als nieuw bestand mag opslaan.
4. Verbind de assistent in Studio (Studio toont het adres en de instellingen om in de assistent te plakken).

## Terwijl een assistent verbonden is

Een opmerking bovenaan het rechterpaneel laat zien welke assistent verbonden is en wat die kan doen. Klik op {{ui:Verbinding verbreken}} om de sessie meteen te beëindigen; hij moet opnieuw verbinding maken om verder te gaan.

**Activiteit**, onder **Assistenten** in Instellingen, toont elke aanroep die de assistent heeft gedaan, nieuwste eerst, met of die is gelukt.

:::tip
Vraag in gewone woorden, bijvoorbeeld "isoleer de buitenwanden op Niveau 1", "welke deuren hebben geen brandwering?" of "teken een ruimte van 6 bij 4 m op Niveau 1 met een deur in de zuidelijke wand". De assistent zoekt de elementen en toont ze in uw weergave, of tekent ze.
:::

## Zonder venster: scripts en de opdrachtregel

Dezelfde tekenhulpmiddelen werken op IFC-bestanden in mappen die u opgeeft, zonder geopend venster: de MCP-server en de opdrachtregel van CadCraft kunnen een nieuw gebouw starten of een IFC-bestand openen, het beschrijven, wanden, deuren, ramen, vloeren, niveaus en rasters toevoegen, ongedaan maken en opslaan als nieuw `.ifc`-bestand. Vier extra hulpmiddelen zijn geschikt voor scripts: `ifc_batch` voert tot 200 bewerkingsstappen als één uit (alles of niets: één keer ongedaan maken haalt de hele batch terug, en een geweigerde stap draait de rest terug en noemt de stap); `ifc_describe` geeft de niveaus en elke wand met zijn deuren en ramen; `ifc_render_png` schrijft een vlak gearceerde controleafbeelding van het model (zonder materialen, texturen of schaduwen) zonder venster; `usd_export` schrijft `.usda`, `.usdc` of `.usdz`. Op de opdrachtregel voert `cadcraft bim script.json --from model.ifc -o out.ifc` een script met stappen uit, en `--usd`, `--png` en `--plan` schrijven een USD-bestand, een afbeelding of een plattegrond uit dezelfde run. U bepaalt welke mappen het mag gebruiken en of het iets mag wijzigen of opslaan.

## Uitschakelen

Haal het vinkje weg bij **Laat AI-assistenten en scripts BimCraft gebruiken**. Elke assistent wordt meteen verbroken, en de instelling wordt bewaard voor de volgende keer.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de hulpmiddelen die het aanroept.
- [Elementen zoeken op klasse, naam of eigenschap](topic:find)
- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
- [Instellingen van BimCraft](topic:settings)
