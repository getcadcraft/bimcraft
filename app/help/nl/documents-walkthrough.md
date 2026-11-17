---
title: Documenten en revisies (de kluis)
summary: Een stap-voor-stap-doorloop van één echte klus: zet een projectmap met IFC-modellen onder controle, check een model uit, wijzig het, check het in met een notitie, stuur het ter beoordeling, keur het goed en geef het vrij, bekijk de geschiedenis en wat er naar verwijst, wat een tweede persoon ziet terwijl het vergrendeld is, en hoe het werkt met cloudmappen.
keywords: kluis, documenten, doorloop, zelfstudie, uitchecken, inchecken, revisie, vrijgave, goedkeuren, vergrendeling, geschiedenis, waar gebruikt, ifc, model, cloudmap, projectmap, twee personen, gedeelde map
from: 0a753f25
---

## Wat u gaat doen

U bent Ana, en werkt aan de Riverside Clinic met een collega, Ben. De IFC-modellen van het project staan in één map die u allebei bereikt (een gedeelde schijf, een gesynchroniseerde map, of een cloudmap). Aan het eind is één bestand van de eerste kopie doorgegaan naar een vrijgegeven revisie **A**, is het opnieuw gewijzigd als **B.1**, hebt u gezien wie wat deed, en hebt u gezien wat Ben ziet als u het bestand vasthoudt.

Alles wordt bewaard in een verborgen map `.ccvault` naast uw bestanden: geen server, niets geüpload (een cloudmap is de uitzondering, zie de laatste stap). Voor elke knop en regel op één plek, zie het onderwerp *Documenten: uitchecken, revisies en vrijgave* waar uw app dat heeft.

## 1. De projectmap instellen

1. Kies {{ui:Documenten}} naast {{ui:Een map openen}} op het startscherm, of {{ui:Documenten…}} in het menu **Bestand**.
2. Kies {{ui:De projectmap kiezen}} en kies de map met de IFC-modellen van het project. (Projectmappen werken in Studio en in browsers die een map kunnen openen, zoals Chrome en Edge. In andere browsers zegt het paneel dat.)
3. Kies {{ui:Wijziging}} naast **U:** en typ uw naam, `Ana` (als het erom vraagt, ook de naam van deze computer). Het paneel zegt nu *U: Ana op* en uw computer. Uw naam staat bij alles wat u doet.
4. Kies {{ui:Een kluis in deze map beginnen}} en typ de naam van het project, `Riverside clinic`. Het paneel zegt *Kluis gestart voor Riverside clinic.*

## 2. Een bestand onder controle brengen

1. Open **Bestanden niet in de kluis** en kies {{ui:Toevoegen}} naast `models/House.ifc`.
2. Het verschijnt onder **Bestanden in de kluis** op revisie **A.1**, status **Werk in uitvoering**. A.1 is de eerste kopie; de kluis bewaart een kopie van elke revisie.

## 3. Uitchecken, wijzigen, inchecken

1. Kies {{ui:Open}} naast `models/House.ifc`. Het model opent in BimCraft en het paneel sluit zodat u het kunt zien. Open het paneel weer via {{ui:Documenten}}.
2. Open het paneel opnieuw en kies {{ui:Uitchecken}}. De rij zegt nu **Uitgecheckt naar u**. Er is een vergrendelingsbestand gemaakt in `.ccvault/locks`; niemand anders kan dit bestand uitchecken totdat u het incheckt.
3. Wijzig het model: verplaats een wand, voeg een deur toe. Opslaan wordt geweigerd tenzij het model naar u is uitgecheckt, en zegt waarom; Opslaan als werkt altijd voor een kopie van uw eigen werk.
4. Open het paneel, kies {{ui:Inchecken}} en typ wat er veranderd is (`Deur verplaatst`). Het paneel zegt *ingecheckt als A.2*. Het bestand in de projectmap is nu het model dat u open had, en de vergrendeling is weg. Inchecken zonder wijziging behoudt de revisie.

Als u van gedachten verandert, geeft {{ui:Uitcheck ongedaan maken}} het bestand terug zonder nieuwe revisie.

## 4. Beoordelen en vrijgeven

1. Kies {{ui:Ter beoordeling sturen}}. De status wordt **Ter beoordeling** en het bestand is alleen-lezen.
2. Kies vóór het goedkeuren {{ui:Projectinstellingen}} en noteer wie mag goedkeuren (één naam per regel), bijvoorbeeld `Ben` en `Carla`, en vink de regel aan dat de goedkeurder iemand anders moet zijn dan de auteur. Kies {{ui:Instellingen opslaan}}. Nu weigert de kluis zelf iedereen anders.
3. Ben (of Carla) kiest {{ui:Goedkeuren}} en typt de naam van de goedkeurder. De status wordt **Vrijgegeven** en de revisie wordt **A**, met *goedgekeurd door* en de naam. Een vrijgegeven bestand is alleen-lezen. {{ui:Terugsturen}} zou het naar Werk in uitvoering hebben teruggezet, met een reden.

De naam van de goedkeurder is de naam die in het paneel is getypt; het is een registratie van wie akkoord ging, geen bewijs van identiteit.

## 5. Een nieuwe revisie

1. Kies bij het vrijgegeven bestand {{ui:Nieuwe revisie}}. U houdt het vast voor de volgende letter.
2. Wijzig het, en kies daarna {{ui:Inchecken}}. De revisie is **B.1**, werk in uitvoering. Geef hem op dezelfde manier vrij en hij wordt **B**. {{ui:Uitcheck ongedaan maken}} vóór de eerste incheck laat hem op **A** staan.

Revisieletters lopen A, B … Z, AA, AB. Als uw standaard sommige letters overslaat, slaat de projectinstelling *De ASME Y14.35-volgorde gebruiken* I, O, Q, S, X en Z over voor de volgende revisies.

## 6. Bekijk wat er is gebeurd

Kies de naam van het bestand om de details te openen:

- **{{ui:Geschiedenis}}**: elke gebeurtenis, nieuwste eerst, met wie, welke computer en wanneer: *A.2 ingecheckt* door Ana, *Vrijgegeven* door Ben, enzovoort.
- **{{ui:Revisies}}**: de revisietabel: elke bewaarde revisie, met datum, wie hem heeft ingecheckt, de notitie en wie hem heeft goedgekeurd. De kluis bewaart een kopie van elk in `.ccvault/revs`.
- **{{ui:Gebruikt}}**: de documenten waar een IFC-model naar verwijst.
- **{{ui:Gebruikt door}}**: Gebruikt door toont elk model in de kluis dat naar dit bestand verwijst.

## Modellen die naar andere documenten verwijzen

Een IFC-model dat naar andere documenten in de map verwijst (tekeningen, staten), toont ze onder **Gebruikt**, en elk daarvan toont het model onder **Gebruikt door**. Check een document in en u ziet welke modellen ernaar verwijzen.

## 7. Wat Ben ziet terwijl u het bestand vasthoudt

Check het bestand nu opnieuw uit, en vraag Ben dezelfde projectmap op zijn computer te openen en het paneel te openen. In de rij van het bestand ziet hij **Uitgecheckt door Ana op** uw computer **sinds** het tijdstip, en geen knop {{ui:Uitchecken}}. Als hij het toch probeert, weigert de kluis: de vergrendeling is een bestand dat het systeem niet twee keer maakt, zodat twee personen het bestand niet allebei kunnen vasthouden, zelfs niet in dezelfde seconde, wanneer de map op schijf staat in Studio. (In een browser staat de map alleen een zo goed mogelijke werking toe, en het paneel zegt dat onder **Map**.)

Als Ana weg is en Ben het bestand nodig heeft, maakt {{ui:Uitcheck verbreken}} het vrij. Hij moet een reden typen; die gaat in het logboek met wie de uitcheck was. Als het project beheerders vermeldt, kunnen alleen zij dit doen. Een uitcheck die ouder is dan de verouderingsgrens (standaard 14 dagen) wordt gemarkeerd als *lange tijd*. Na het verbreken wordt Ana's late incheck geweigerd, zodat u elkaar niet kunt overschrijven.

## 8. Cloudmappen

Een cloudmap is een projectmap die in de cloudopslag van uw team staat, zodat het team geen gedeelde schijf nodig heeft. In Studio, aangemeld met uw CadCraft-account, toont het paneel {{ui:Een cloudmap openen}} naast {{ui:De projectmap kiezen}}. Kies die en kies de map, weergegeven als werkruimte / map. Een eigenaar van de werkruimte maakt de map eerst aan, en de cloudopslag van het team moet van kracht zijn. Alles hierboven werkt hetzelfde; de server maakt de vergrendeling, die strikt is over personen heen. Als u niet bent aangemeld, zegt het paneel dat u zich moet aanmelden. In een gewoon browsertabblad wordt de cloudknop niet aangeboden; gebruik Studio.

## Probeer het

Doe de acht stappen hierboven met een kopie van een echt bestand. Voor de stappen met twee personen hebt u een tweede persoon nodig, of twee vensters met twee namen. Als u het probeert met een echte gedeelde map, somt de Community-testpagina een controle op die precies dit vraagt, en neemt de resultaten aan.
