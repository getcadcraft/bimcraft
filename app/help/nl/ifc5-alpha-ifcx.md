---
title: IFC5-alpha (IFCX-bestanden) openen en exporteren
summary: Een laboptie voor het IFC5-alpha-bestandsformaat (.ifcx). Open een bestand met zijn lagen, zie wat het lezen niet kon controleren en exporteer de geopende modellen. Het formaat verandert nog, dus lees eerst.
keywords: ifc5, ifcx, alpha, buildingsmart, json, lagen, schema, lab, hoeveelheden, qto, exporteren, importeren
from: cffe1669
---

IFC5-alpha (bestandsextensie {{ui:.ifcx}}) is het bestandsformaat dat buildingSMART nog ontwerpt. Het is niet definitief: de bestanden, en onze lezing ervan, kunnen veranderen. Daarom is dit een laboptie, en komt lezen eerst.

## Inschakelen

1. Kies {{ui:Instellingen}}, en daarna de sectie {{ui:IFC5-alpha (IFCX)}} van het tabblad BimCraft.
2. Vink {{ui:IFC5 alpha (IFCX) - het formaat verandert nog; lees eerst}} aan.

Het staat standaard uit. Zolang het uit staat, wordt een .ifcx-bestand geweigerd met een zin die naar deze pagina verwijst. {{ui:Open IFC5-alpha (.ifcx)…}} en de exportknop {{ui:IFC5 alpha}} verschijnen als het aan staat.

## Openen

- Kies een .ifcx-bestand met {{ui:Een bestand of map openen}} (het vervangt het geopende model, na de gebruikelijke vraag over wijzigingen), of
- kies {{ui:Open IFC5-alpha (.ifcx)…}} en selecteer meerdere bestanden tegelijk: het bestand, zijn lagen en de schemabestanden die het importeert. Met een model al open wordt het bestand **naast het model toegevoegd**; de x in de modellijst verwijdert het weer, en dat werkt als ongedaan maken.

Een IFCX-bestand somt knooppunten op (een pad, zijn kinderen, wat het erft, zijn attributen). Meerdere bestanden kunnen hetzelfde knooppunt beschrijven: een later bestand (een laag) overschrijft de attributen van een eerder bestand, en een null-kind verwijdert een kind. BimCraft voegt ze samen en tekent het resultaat als een klein IFC4-model: project, terrein, gebouw, verdiepingen en elementen met namen, klassen, eigenschappen, hoeveelheden, kleuren en meshes.

Er wordt niets van het netwerk opgehaald. De schemabestanden die een bestand importeert (bijvoorbeeld `ifc@v5a.ifcx`) worden alleen gebruikt als u ze samen met het bestand heeft gekozen; anders vermeldt het rapport dat, en worden de attributen gelezen zonder typecontrole.

### Het rapport

Na het openen somt een rapport op wat het lezen vond: gegevens die niet bij hun schema passen, schemabestanden die niet zijn opgegeven, en attributen die hier geen IFC-betekenis hebben. Attributen zonder koppeling worden **behouden** in het model, niet weggegooid, en bij exporteren teruggeschreven.

## Wat wordt wat

| In het IFCX-bestand | In BimCraft |
|---|---|
| Een knooppunt met een IFC-klasse (project, terrein, gebouw, verdieping, wand …) | Het overeenkomende IFC4-element; een klasse die deze lezing niet kent, wordt een building element proxy |
| De naam die het knooppunt onder zijn ouder heeft | De elementnaam |
| Attributen met een hoeveelheidssoort (Length, Area, Volume, Mass …) | Een IFC4-hoeveelheidsset genaamd `Qto_IFCX` (IFC4-hoeveelheden blijven IFC4 `Qto_*`-sets) |
| Andere eigenschapsattributen | Een eigenschapsset genaamd `Pset_IFCX` |
| Mesh- en transformatieattributen | De driehoeken en plaatsing van het element; onzichtbare meshes worden niet getekend |
| Kleur, dekking, materiaal, classificatie | Oppervlaktestijl, materiaal en classificatie van het element |

Eenheden worden als meter gelezen, met Z omhoog: de alpha zegt dat eenheden later worden gedocumenteerd.

## Exporteren

Kies {{ui:IFC5 alpha}} op de werkbalk, lees de notitie, en klik daarna op {{ui:Exporteer .ifcx}}. Het bestand heeft onze eigen kop (auteur CadCraft, versie ifcx_alpha) en vermeldt zelf dat het het alpha-formaat is. Elk model wordt geschreven in zijn eigen bestandscoördinaten, in meter, met namen, klassen, eigenschapssets, hoeveelheden (als attributen met hun soort), kleuren en driehoeken. Lagen en overerving worden afgevlakt geschreven. Controleer het bestand in het programma waarnaar u het stuurt.

## Beperkingen

- Gekromde geometrie (krommen, oppervlakken) wordt niet gelezen: alleen driehoeksmeshes.
- Deuren en ramen die in een wand zijn ingesloten, worden op de verdieping geplaatst; de wand waar ze vandaan komen, is niet gekoppeld.
- IFC4 `Qto_*`-setnamen blijven behouden als attribuutgroepen van ons eigen (`cadcraft::qto::…`); het standaard alpha-schema heeft maar een paar hoeveelheidsnamen.
- Het formaat kan onder ons veranderen; een bestand dat vandaag is gemaakt, leest morgen misschien niet.
