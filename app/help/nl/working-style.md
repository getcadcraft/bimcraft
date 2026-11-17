---
title: Werkstijl, gedupliceerde weergaven, pennen op papier, Rapporteren als en sjablonen
summary: Kies hoe BimCraft zich gedraagt voor de manier waarop u werkt, dupliceer elke weergave als eigen kopie of als gekoppelde weergave, bewaar pennenoverschrijvingen in het bestand en druk af zoals getoond of via een pennentabel, rapporteer een element als een andere IFC-klasse en start projecten vanuit uw eigen sjablonen.
keywords: werkstijl, weergave dupliceren, dupliceren, kopie van weergave, afhankelijke weergave, gekoppelde weergave, eigen kopie, weergavekopie, pennenoverschrijvingen, pennen, lijndiktes, afdrukken zoals getoond, pennentabel, plotstijl, ctb, monochroom, grijswaarden, rapporteren als, IFC-klasse, herclassificeren, voorgedefinieerd type, generiek model, plaat als weg, wand als paneel, dak als helling, projectsjabloon, sjabloon, nieuw vanuit sjabloon, opslaan als sjabloon, kantoorstandaard
from: 231d98b0
---

## Wat u gaat doen

Stel BimCraft in voor de manier waarop u werkt, dupliceer weergaven, druk ze af zoals u verwacht, tel elementen als wat ze werkelijk zijn en start elk project vanuit het sjabloon van uw kantoor.

## Een werkstijl kiezen

1. Open {{ui:Instellingen}} en het tabblad {{ui:BimCraft}}. Zoek {{ui:Werkstijl}}.
2. Kies één:
   - {{ui:Elke weergave eigen}} (de eerste keuze): een gedupliceerde weergave kopieert zijn annotaties en die blijven van die weergave; bladen worden afgedrukt zoals het scherm ze toont.
   - {{ui:Gedeelde annotaties en pennentabellen}}: gedupliceerde weergaven delen hun annotaties; afdrukken gaat via een pennentabel.
3. Onder de keuze staan de vier dingen die hij instelt. Wijzig er één afzonderlijk; daarna staat de stijl op {{ui:Aangepast}}.

De werkstijl wordt in deze browser bewaard, net als de indeling van de werkruimte. Een sjabloon neemt hem mee naar nieuwe modellen.

## Een weergave dupliceren

1. In de {{ui:Projectbrowser}} heeft elke plattegrond, plafondplattegrond, callout, gevel en doorsnede een knop {{ui:Dupliceren}} (twee bladen).
2. Geef de kopie een naam en kies hoe die zich gedraagt:
   - {{ui:Eigen kopie}}: het tekenwerk, de maatvoering, de bijsnijding, de verborgen elementen en de pennen worden gekopieerd en blijven van die weergave. Het bewerken van een van beide weergaven verandert nooit de andere, zodat een weergave op een uitgegeven blad blijft zoals die is uitgegeven.
   - {{ui:Gekoppeld}}: die toont dezelfde weergave met één set annotaties en instellingen.
3. De kopie staat vermeld onder {{ui:Gedupliceerde weergaven}}. Klik erop om hem te openen; de balk boven de plattegrond zegt dat het een kopie is, met {{ui:Omhoog}} terug naar zijn weergave.
4. De schuifknop opent de instellingen: de naam, {{ui:Weergavebereik}} (een eigen kopie heeft er een eigen), {{ui:Eigen kopie maken}} voor een gekoppelde kopie, en {{ui:Verwijderen}}.

Kopieën van gevels en doorsneden komen op uw eigen bladen, net als de weergaven waaruit ze zijn voortgekomen. Dupliceren is één stap ongedaan te maken, en kopieën worden in de IFC naast de callouts bewaard.

## Pennen bewaard bij de weergave, en afgedrukt zoals getoond

1. Zet {{ui:Tekenen}} aan en kies {{ui:Pennen}}.
2. {{ui:Voor}} toont nu elke categorie: wanden, deuren en ramen, vloeren, daken, kolommen, trappen, meubilair en de rest, en tekenwerk en maatvoering.
3. {{ui:Toepassen}} bewaart de pen in de IFC bij de weergave die getoond wordt: een plattegrond, een plafondplattegrond, een callout of een gedupliceerde weergave. Pennen die vóór 0.9 zijn gemaakt, werden in de browser bewaard; {{ui:Deze in het bestand bewaren}} verplaatst ze.
4. Bladen en de PDF tekenen elke pen zoals het scherm hem toont.

Om in plaats daarvan via een pennentabel af te drukken, zet u {{ui:Afdrukken}} in de rij Pennen op {{ui:Via een pennentabel}}, en kies dan een tabel (kleur, monochroom, grijswaarden) of {{ui:Pennentabel bewerken…}}: elke kleur krijgt de kleur, lijndikte en rastering waarmee hij wordt afgedrukt. De tabel is het plotstijlbestand van CadCraft, dus {{ui:Importeren…}} neemt een tabel over die in de CadCraft-app is gemaakt, en {{ui:Exporteren}} geeft er weer een terug. Het model bewaart zijn keuze; zonder keuze bepaalt de werkstijl het.

## Een element rapporteren als een andere klasse

Een vloer die als weg is getekend, een wand die als paneel wordt gebruikt, een dak dat als helling is gevormd: houd het gereedschap waarmee u het tekende en rapporteer het als wat het is.

1. Selecteer het element en open {{ui:Eigenschappen}}. Open {{ui:Rapporteren als}}.
2. Typ in het zoekveld om een klasse te vinden die bij de vorm past, kies die en het bijbehorende voorgedefinieerde type. Voor een eigen type kiest u USERDEFINED en geeft u het een naam.
3. {{ui:Toepassen}} (één stap ongedaan maken). {{ui:Wissen}} rapporteert het weer zoals het getekend is.

U bewerkt het nog steeds met het gereedschap waarmee het getekend werd. Het opgeslagen IFC-bestand schrijft het als de gerapporteerde klasse, zodat andere programma's, de opmeting van {{ui:Hoeveelheden}}, Zoeken, Kleur op basis van, modelcontroles en {{ui:Problemen}} het als die klasse tellen. De staten laten een als paneel gerapporteerde wand weg uit de staat van wanden, en {{ui:Elementen per gerapporteerde klasse}} toont ze allemaal. Het werkt in IFC4- en IFC2X3-bestanden; de lijst biedt alleen de klassen die de IFC-versie van het bestand heeft. Deuren, ramen, trappen, ruimten en niveaus behouden hun eigen klasse.

## Een project opslaan als sjabloon en ervan starten

1. Klik met een project open op {{ui:Opslaan als sjabloon}} naast {{ui:Opslaan}}.
2. Geef het een naam. Vink {{ui:Ook het sjabloonbestand downloaden}} aan om het als IFC-bestand te delen, en {{ui:Nieuwe modellen hiermee beginnen}} om het uw standaard te maken.
3. Een sjabloon bewaart de niveaus, weergavesjablonen en weergave-instellingen, gedupliceerde weergaven en callouts, tekenwerk, pennen en de pennentabel, tags, families en typen, bladen, bladformaten, titelblokken en de werkstijl. Muren, vloeren, deuren en alle andere modelelementen worden weggelaten.
4. Klik op {{ui:Nieuw gebouw}} en kies het onder {{ui:Starten vanuit}}, of kies {{ui:Een sjabloonbestand…}} voor een sjabloon dat u is toegestuurd. Het nieuwe project krijgt een eigen naam en een eigen projectidentiteit; al het andere is zoals het in het sjabloon staat.

:::note
Sjablonen worden in deze browser bewaard. Teamsjablonen die via CadCraft Studio worden gedeeld, zijn nog niet beschikbaar: stuur in plaats daarvan het sjabloonbestand.
:::
