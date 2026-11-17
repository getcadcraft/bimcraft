---
title: Online en offline
summary: Wat BimCraft van de site laadt, hoe Opslaan voor offline gebruik IFC-modellen en DWG-tekeningen laat openen zonder verbinding, en waarom niets dat u opent ooit wordt geüpload.
keywords: offline, online, internet, verbinding, geen netwerk, vliegtuigmodus, bezoek op de bouwplaats, opslaan voor offline gebruik, klaar voor offline gebruik, uploaden, privacy, wasm, webassembly, IFC-engine, dwg, cloud
from: 39e5c7eb
---

BimCraft leest uw bestanden in het browsertabblad. Openen, inspecteren, bewerken en opslaan sturen uw bestanden nooit ergens naartoe, online of offline. [Werken offline](common:offline) legt uit hoe offlinekopieën in elke app werken; deze pagina behandelt wat specifiek is voor BimCraft.

## Wat BimCraft van de site laadt

| Onderdeel | Wanneer het laadt zonder offlinekopie | Grootte |
|---|---|---|
| De app zelf, met de 3D-viewer en de code van de IFC-engine | Wanneer u BimCraft opent | Meerdere megabytes |
| Het WebAssembly-deel van de IFC-engine | Het eerste IFC-bestand dat u in het tabblad opent: "IFC-engine starten…" | Ongeveer 1.6 MB |

DWG- en DXF-tekeningen, project- en familiebestanden en mappen hebben niets extra nodig: hun lezers maken deel uit van de app.

## BimCraft voor offline gebruik opslaan

1. Open BimCraft terwijl u online bent.
2. Klik op {{ui:Opslaan voor offline gebruik}} in de appbalk bovenaan.
3. Kijk hoe de knop oploopt: "Opslaan 40 van 212", bijvoorbeeld. De kopie van BimCraft is ongeveer 11 MB, omdat de IFC-engine erin zit.
4. Wacht op {{ui:Klaar voor offline gebruik}}.

Zodra er {{ui:Klaar voor offline gebruik}} staat, openen IFC-modellen, DWG- en DXF-tekeningen, projectbestanden, mappen en deze help zonder verbinding. U hoeft niet eerst een IFC- of DWG-bestand te openen om de lezers op te warmen.

Om de kopie bij te werken of te verwijderen, klikt u op {{ui:Klaar voor offline gebruik}} en kiest u {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}} of {{ui:De offlinekopie verwijderen}}.

## Wat de knop zegt

| Knop | Betekent |
|---|---|
| {{ui:Opslaan voor offline gebruik}} | Nog geen offlinekopie in deze browser. Klik om er één op te slaan |
| "Opslaan *n* van *m*" | Bezig met opslaan; houd het tabblad open tot het klaar is |
| {{ui:Klaar voor offline gebruik}} | Opgeslagen. Houd erboven om te zien wanneer; klik voor het menu |
| {{ui:Kon niet opslaan}} | Sommige bestanden zijn niet gedownload. Controleer uw verbinding en klik om het opnieuw te proberen. De laatste goede kopie, als die er is, blijft bewaard |
| {{ui:Offline gebruik is niet beschikbaar}} | Dit venster kan geen offlinekopie bewaren (een privévenster of een beheerde computer). Zie [Werken offline](common:offline) |

:::offline
U bent offline.

- Als de knop {{ui:Klaar voor offline gebruik}} zegt, openen alle soorten bestanden zoals gewoonlijk.
- Als dat niet zo is, werkt alleen wat dit tabblad al heeft geladen: een lezer die nooit in dit tabblad is geladen, kan niet starten, en het openen van dat soort bestand toont een foutmelding van de browser in de statusregel. Herlaad het tabblad niet voordat u weer online bent.
:::

## Wat nooit een verbinding nodig heeft

Zodra BimCraft in het tabblad is geopend, werken deze zonder verbinding, ook zonder opgeslagen kopie:

- Project- en familiebestanden lezen en mappen controleren.
- Elementen kiezen, eigenschappen lezen en IFC-waarden bewerken in een model dat al open is.
- {{ui:Opslaan als IFC}} en {{ui:CSV downloaden}}: beide zijn downloads die in het tabblad worden gemaakt.

## Wat nog niet beschikbaar is

- **Opslaan in de cloud.** Bestanden worden alleen op uw computer opgeslagen.

Zie [Waar uw bestanden naartoe gaan](common:your-files).
