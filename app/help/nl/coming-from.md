---
title: Overstappen van andere BIM- en tekenprogramma's
summary: Hoe gewoonten uit desktop-BIM-authoring en het bekijken van DWG-bestanden overeenkomen met BimCraft, en de verschillen waar mensen over struikelen.
keywords: overstappen, migreren, bekend, desktop-BIM, familie, parameters, projectbrowser, eigenschappenpalet, kubus (weergave), xref, lagenbeheer, verschillen, vergelijken
from: 2de629af
---

Als u Revit kent, zal het grootste deel van BimCraft qua woorden vertrouwd aanvoelen, maar qua omvang onbekend. Het belangrijkste verschil: **deze versie leest en inspecteert modellen en bewerkt IFC-gegevens. Ze maakt nog niet zoals Revit.** U kunt geen wanden tekenen, geen families plaatsen, geen weergaven of bladen maken, en geen projectbestand opslaan. Wat u wel kunt: vrijwel elk gebouwbestand openen op elke computer met een browser, zien wat erin zit, een hele projectmap controleren en de gegevens in een IFC-model corrigeren.

## Gewoonten in kaart gebracht

| Als u gewend bent aan | In BimCraft |
|---|---|
| Een `.rvt` openen in Revit om het model te zien | BimCraft opent de `.rvt` als bestandskaart: uitgave, projectinformatie, koppelingen, voorbeeld. Voor het 3D-model exporteert u IFC en opent u dat. [Een project- of familiebestand lezen](topic:read-rvt-file) |
| Controleren in welke uitgave een bestand is opgeslagen voordat u het opent | De kaart toont bovenaan "opgeslagen in Revit …", zonder het bestand te upgraden of aan te raken |
| De Projectbrowser | Geen browser van weergaven en bladen. Een IFC-model heeft de lijsten {{ui:Verdiepingen}} en {{ui:Elementen}}; een tekening heeft bladtabbladen |
| Het eigenschappenpalet | Het paneel {{ui:Eigenschappen}} rechts, voor het element dat u hebt aangeklikt. IFC-eigenschapssets in plaats van parametergroepen |
| Instantie- en typeparameters | Instantie-eigenschapssets, en sets met de markering "(type)". Een wijziging van het type geldt voor elk element van dat type, zoals in Revit. [Een typeeigenschap wijzigen voor elk element van een type](topic:type-vs-instance) |
| Type bewerken | Geen dialoogvenster: klik op een waarde in een set "(type)" en typ |
| Meerdere elementen selecteren, filters, Alle instanties selecteren | Eén element tegelijk. Nog niet beschikbaar |
| De weergavekubus en het navigatiewiel | Een weergavekubus in de rechteronderhoek, vier knoppen ({{ui:Passend}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Zijaanzicht}}) en vrij draaien. Geen navigatiewiel |
| Shift en middelste muisknop slepen om te draaien, middelste muisknop slepen om te verschuiven | Links slepen draait, rechts slepen (of {{key:Shift}} en slepen) verschuift, het wiel zoomt. De menustijl {{ui:BIM-lint}} schakelt over naar verschuiven met middelste muisknop slepen, en naar draaien met {{key:Shift}} en de middelste knop. [Menu's, toetsen en muis](topic:menus-keys-and-mouse) |
| Plattegronden, doorsneden, snijkaders | Eén {{ui:Doorsnede}}-vlak tegelijk ({{key:X}}); geen snijkader of 2D-plattegronden. [Een IFC-model snijden met een snijvlak](topic:section-plane) |
| Verbergen in beeld, isoleren, zichtbaarheid en grafische instellingen | {{ui:Verdiepingen}} aan en uit, {{ui:Ruimten}} en {{ui:Randen}}. Nog geen verbergen per element |
| Ruimten | IFC-ruimten, aanvankelijk verborgen. Klik op {{ui:Ruimten}} |
| Opslaan, Opslaan als, synchroniseren met centraal | {{ui:Opslaan als IFC}} downloadt een nieuw IFC-bestand. Het origineel verandert nooit. Geen centraal model, geen gedeeld werken |
| Ongedaan maken met {{key:Mod+Z}} | Werkt op IFC-bewerkingen tot u opslaat. [IFC-eigenschappen wijzigen en een bewerkte kopie opslaan](topic:edit-ifc-properties) |
| Koppelingen beheren | Open de projectmap: elke koppeling wordt gecontroleerd en gemarkeerd als **In deze map**, **Dezelfde naam gevonden**, **Bibliotheekbestand** of **Niet in deze map**. [Een hele projectmap openen](topic:open-project-folder) |
| Controleren, of een bestand openen om te zien of het beschadigd is | Het mapverslag controleert in enkele seconden elke kopie en back-up op onvolledige bestanden. [Een map controleren op beschadigde kopieën](topic:check-folder-health) |
| Het juiste bestand kiezen uit een rommelige map | Het vak {{ui:Begin hier}} stelt er één voor, met redenen |

Als u modellen vooral opent om ze te controleren, zoals in een programma voor modelcontrole of IFC-weergave, kies dan de menustijl {{ui:Bekijken}}: de hulpmiddelen voor bekijken en controleren staan voorop, en de bouwhulpmiddelen wachten in één menu. Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).

## Vanuit het bekijken van DWG-bestanden

Als u DWG-bestanden opent in AutoCAD of een DWG-viewer:

| Als u gewend bent aan | In BimCraft |
|---|---|
| Tabbladen Model en indeling onderaan | Tabbladen boven de tekening: {{ui:Model}} en één per blad |
| ZOOM Extents, dubbelklik op het wiel | Dubbelklik, {{key:F}} of {{ui:Passend}} |
| Verschuiven met de middelste muisknop | Slepen met elke knop |
| Het lagenbeheer | De lijst {{ui:Lagen}}: vinkje aan om te tonen, uit om te verbergen, {{ui:Alles aan}} en {{ui:Alles uit}} |
| Het xref-beheer | **Gekoppelde tekeningen** rechts, met **Getoond** of **Niet gevonden**, en {{ui:Gekoppelde tekeningen toevoegen…}} |
| Afdrukvoorbeeld | {{ui:Afdrukweergave}} of {{key:P}}: zwart op wit met lijndikten. Er wordt niets afgedrukt |
| Gegevens uit blokattributen halen | Het tabblad {{ui:Apparatuur}} voor getagde horecatekeningen, met {{ui:CSV downloaden}} |
| Meten, tekenen, bewerken, opslaan als | Niet in BimCraft. De CadCraft-tekenapp tekent en bewerkt |

## Verschillen waarover mensen struikelen

- **Het draait in de browser, en de browser gaat voorzichtig met uw bestanden om.** BimCraft kan alleen bestanden en mappen lezen die u aanlevert, door ze te kiezen of erin te slepen. Het kan zelf geen bestand openen en het kan geen bestand overschrijven. Elke opslag is een download.
- **Er wordt niets geüpload.** Het woord "upload" in de mapdialogen van sommige browsers is de eigen formulering van de browser. De bestanden blijven op uw computer.
- **IFC is het modelformaat.** Een projectbestand opent als kaart omdat de 3D-inhoud niet gedocumenteerd is. Beschouw IFC als de manier waarop modellen in BimCraft komen.
- **Bewerkingen zijn kopiëren-bij-schrijven.** Het wijzigen van de waarde van één element verandert nooit de buren, ook niet wanneer de exporteur die waarde tussen hen deelde. Typeeigenschappen vormen de bewuste uitzondering.
- **Geen project, geen weergaven.** BimCraft toont één bestand tegelijk en onthoudt daarna niets over het bestand zodra u het tabblad sluit, behalve de namen van recente mappen in Chrome en Edge.
- **Mac-toetsen.** Waar de Windows-sneltoetsen van Revit {{key:Ctrl}} gebruiken, gebruiken de sneltoetsen van BimCraft {{key:Mod}}: Command op een Mac.
- **Uw muisgewoonten.** Draaien gebeurt met de linkermuisknop, niet met {{key:Shift}} en de middelste knop, tenzij u de menustijl {{ui:BIM-lint}} kiest of de knoppen zelf instelt in [Menu's, toetsen en muis](topic:menus-keys-and-mouse).

Zie [Wat nog niet beschikbaar is](topic:not-built-yet) voor wat u er vandaag voor kunt gebruiken.
