---
title: Een AI-assistent met uw model laten werken
summary: Schakel assistenten in via Instellingen, zodat een assistent op uw computer elementen kan vinden, hun eigenschappen kan lezen, ze in de weergave kan isoleren en muren, deuren, ramen, vloeren, niveaus en rasters kan tekenen, via CadCraft Studio. Uit tot u het inschakelt.
keywords: ai, assistent, mcp, script, automatisering, studio, elementen zoeken, isoleren, eigenschappen, rechten, verbreken, activiteit, muren tekenen, deuren toevoegen, ramen toevoegen, niveaus, rasters, vloeren, ongedaan maken, opslaan, opdrachtregel, cli, headless, gebruiken met AI-assistenten
from: c5ee595b
---

## Wat u zult leren

Hoe u een AI-assistent (elke assistent die MCP spreekt) het IFC-model dat u open heeft laat bekijken en erin laat tekenen, wat die wel en niet kan, en hoe u hem stopt.

## Wat een assistent in BimCraft kan doen

| Hij vraagt om | Wat er gebeurt | Vereist |
|---|---|---|
| Elementen vinden | Hij krijgt een lijst van elementen op klasse, verdieping, naam of eigenschapswaarde, zoals **Zoeken** doet | Lezen |
| Eigenschappen lezen | Hij krijgt de attributen, het type, de eigenschapssets en hoeveelheden van één element, zoals **Eigenschappen** ze toont | Lezen |
| Het model beschrijven, muren opsommen | Hij krijgt de niveaus, muren, deuren, ramen, ruimten, vloeren, rasters en kolommen, en van elke muur de uiteinden, het type en de hoogte | Lezen |
| Isoleren, doorzichtig maken, verbergen of tonen | De 3D-weergave verandert alsof u het menu {{ui:Show}} had gebruikt | Weergave wijzigen en tekenen |
| Muren, deuren, ramen, vloeren, niveaus of rasterlijnen tekenen | Het model verandert alsof u de hulpmiddelen {{ui:Draw}} had gebruikt: muren sluiten aan, en ruimten, vloeren en daken volgen | Weergave wijzigen en tekenen |
| Een naam of een eigenschapswaarde wijzigen | De Name, Description, Object type of Tag van één element, of één eigenschapswaarde. Een waarde die het met andere elementen deelt, wordt eerst voor hem gekopieerd; een waarde van zijn type verandert alleen wanneer de assistent dat zegt, omdat elk element van dat type dan meegaat | Weergave wijzigen en tekenen |
| Verplaatsen, verwijderen, muren, deuren en ramen wijzigen | Elementen verschuiven of worden verwijderd samen met wat ze hosten; muren die met de hulpmiddelen {{ui:Draw}} zijn getekend, veranderen op hun uiteinden of type, deuren en ramen op hun plaats, maat of type, en ruimten en verbindingen volgen | Weergave wijzigen en tekenen |
| Een staat opzetten, indelen en lezen | "Een deurstaat per verdieping, met brandwering en beslag": de assistent noemt de staat, zijn kolommen (een eigenschap of tag wordt een kolom) en zijn groepering; BimCraft vult hem uit het model en legt hem uit, en neemt wat de assistent niet heeft opgegeven over van de kantoorstandaard. De opzet komt in uw lijst Staten. Elke regel die hij terugkrijgt, noemt zijn elementen, zodat hij ze kan selecteren | Lezen om te lezen; Weergave wijzigen en tekenen om een opzet op te slaan |
| Een staat exporteren | CSV, Excel of tabgescheiden tekst om in Google Sheets te plakken (er wordt niets naar Google gestuurd) | Exporteren |
| Ruimteafwerkingen lezen en instellen | De afwerkingstypen, de vloer-, wand- en plafondafwerking van elke ruimte, en zones; oppervlakten, tegelaantallen en substraatvolumes komen dan uit de afwerkstaten | Lezen; Weergave wijzigen en tekenen om in te stellen |
| Elementen selecteren, zijn eigen stappen ongedaan maken | Elementen worden in de weergave gekozen; zijn laatste stap wordt teruggedraaid | Weergave wijzigen en tekenen |
| Opslaan | Een nieuw IFC-bestand met elke wijziging, zoals {{ui:Save as IFC}} het maakt (het origineel wordt nooit gewijzigd) | Opslaan |
| USD exporteren | De open modellen als OpenUSD (.usda, .usdc of .usdz), zoals {{ui:USD}} op de werkbalk ze schrijft | Exporteren |
| Een afbeelding renderen, de renderwachtrij uitvoeren | Een afbeelding van de 3D-weergave, zoals het dialoogvenster {{ui:Render}} die maakt met uw renderinstellingen, tenzij hij om andere vraagt; of afbeeldingen van hoge kwaliteit die aan de wachtrij van het dialoogvenster worden toegevoegd en één na de ander worden gerenderd (de wachtrij heeft WebGPU nodig). Er verandert niets in het model ([Een afbeelding renderen](topic:render)) | Exporteren |

Elke wijziging die een assistent maakt, is één stap in **Wijzigingen**, genoemd "Assistent: …" (bijvoorbeeld "Assistent: 4 muren toevoegen"), zodat {{key:Mod+Z}} zijn hele actie terugneemt, en u ziet wiens stap het was. In het venster kan hij geen bestanden openen: u opent het model, hij werkt met het model dat open is.

## Inschakelen

Assistenten bereiken BimCraft via CadCraft Studio op uw computer; de gewone browser heeft geen toegang.

1. Open {{ui:Settings}} en kies het tabblad **BimCraft**.
2. Vink onder **Assistenten** **Laat AI-assistenten en scripts BimCraft gebruiken** aan.
3. **Lezen** is voor u al aangevinkt. Vink ook **Weergave wijzigen en tekenen** aan als de assistent mag isoleren, verbergen en tekenen, en **Opslaan** als hij het model als nieuw bestand mag opslaan.
4. Verbind de assistent in Studio (Studio toont het adres en de instellingen om in de assistent te plakken).

## Terwijl een assistent verbonden is

Een melding bovenaan het rechterpaneel zegt welke assistent verbonden is en wat die kan. Klik op {{ui:Disconnect}} om zijn sessie meteen te beëindigen; hij moet opnieuw verbinding maken om verder te gaan.

**Activiteit**, onder **Assistenten** in Instellingen, toont elke aanroep die de assistent heeft gedaan, nieuwste eerst, en of die is gelukt.

:::tip
Vraag het in gewone woorden, bijvoorbeeld "isoleer de buitenmuren op Niveau 1", "welke deuren hebben geen brandwering?" of "teken een ruimte van 6 bij 4 meter op Niveau 1 met een deur in de zuidelijke muur". De assistent vindt de elementen en toont ze in uw weergave, of tekent ze.
:::

## Zonder venster: scripts en de opdrachtregel

Dezelfde tekenhulpmiddelen werken op IFC-bestanden in mappen die u noemt, zonder open venster: de MCP-server en de opdrachtregel van CadCraft kunnen een nieuw gebouw starten of een IFC-bestand openen, het beschrijven, muren, deuren, ramen, vloeren, niveaus en rasters toevoegen, het ongedaan maken en opslaan als een nieuw `.ifc`-bestand. U bepaalt welke mappen het mag gebruiken en of het iets mag wijzigen of opslaan.

## Uitschakelen

Vink **Laat AI-assistenten en scripts BimCraft gebruiken** uit. Elke assistent wordt meteen verbroken, en de instelling blijft voor de volgende keer bewaard.

## Zie ook

- [Recepten voor AI-assistenten](common:assistants-recipes): uitgewerkte voorbeelden, elk met de hulpmiddelen die het aanroept.
- [Elementen zoeken op klasse, naam of eigenschap](topic:find)
- [Elementen verbergen, isoleren en doorzichtig maken](topic:hide-and-isolate)
- [BimCraft-instellingen](topic:settings)
