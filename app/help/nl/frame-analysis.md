---
title: Het constructieve raamwerk analyseren
summary: Krachten, reacties en doorbuigingen van de balken, kolommen en verbanden van het model onder de belastinggevallen en combinaties die u instelt, bewaard in de IFC. Een analysehulpmiddel, geen normcontrole.
keywords: analyse, eenheden, voeten en inches, weergave-eenheid, constructieve analyse, ontwerpcontroles, benuttingsgraad, gewalst, gelast, AISC 360, EN 1993-1-1, raamanalyse, analytisch model, stijfheidsmethode, belastingen, belastinggeval, combinatie, eigen gewicht, permanente belasting, veranderlijke belasting, reacties, buigend moment, dwarskracht, normaalkracht, doorbuiging, vervormde vorm, opleggingen, scharnierend, ingeklemd, vrijlating, rapport, pdf, csv, craftscript, frame3d, balken, kolommen, staven
from: b93b58c4
---

Het tabblad {{ui:Analyse}} aan de rechterkant zoekt de krachten in de balken, kolommen en verbanden van het geopende model, de reacties aan de kolomvoeten en hoe ver de staven buigen, voor de belastingen die u opgeeft.

:::warning
Het is een **analysehulpmiddel, geen normcontrole**. De analyse past geen ontwerpnorm toe: zij dimensioneert staven niet en controleert geen capaciteiten, en zij kiest geen belastingfactoren. Een constructeur controleert het analytische model, zijn belastingen en opleggingen, en beslist wat de getallen betekenen. Het blok {{ui:Ontwerpcontroles}} hieronder controleert gewalste stalen I-profielen volgens AISC 360 of EN 1993-1-1, een hulpmiddel totdat een constructeur het heeft beoordeeld: zie [Ontwerpcontroles](topic:frame-analysis#design-checks).
:::

## Uitvoeren

1. Open een IFC-model en het tabblad {{ui:Analyse}}.
2. Selecteer een of meer balken, kolommen of verbanden in de weergave, kies een {{ui:Geval}}, een {{ui:Belasting}} en een {{ui:Richting}}, typ de waarde en druk op {{ui:Belasting toevoegen}}: kN/m voor een belasting verdeeld over een staaf, kN voor een puntlast.
3. Druk op {{ui:Analyse uitvoeren}}.

De tabel toont per staaf de grootste normaalkracht, de dwarskrachten, buigende momenten, torsie en doorbuiging; klik op de naam van een staaf om die in de weergave te selecteren. Daaronder staan de reacties. {{ui:Op het model}} tekent de vervormde vorm, of een van de krachten als diagram naast elke staaf. De resultaten worden verouderd wanneer het model verandert: voer de analyse dan opnieuw uit.

Elke belasting en instelling is één wijziging in de lijst {{ui:Wijzigingen}}: {{ui:Ongedaan maken}} draait die terug, en {{ui:Opslaan als IFC}} bewaart ze in het bestand (de eigenschapsset `CadCraft_Analysis` van het project), zodat de belastingen er nog zijn de volgende keer dat het model hier wordt geopend.

## Hoe het analytische model wordt gemaakt

- Elke IfcBeam, IfcColumn en IfcMember waarvan de vorm één rechte extrusie is, wordt een staaf op de zwaartelijn van zijn doorsnede. De doorsnede-eigenschappen komen uit het profiel: I-, U-, L- en T-vormen, rechthoeken en buizen, cirkels en ronde buizen, of elke gesloten omtrek (dan is de torsieconstante een schatting, zoals in het rapport wordt vermeld). Al het andere wordt weggelaten en geteld.
- In een model stoppen balken bij het vlak van een kolom en liggen ze onder de vloer. Elk staafeinde wordt langs zijn eigen lijn verplaatst naar de as van de staaf waarop het aansluit, wanneer die as dichtbij ligt (binnen ongeveer de grootte van de doorsneden), en die staaf wordt daar gesplitst. Het rapport meldt hoeveel einden zijn verplaatst.
- **Kolomvoeten** waar niets onder ligt, zijn opleggingen: ingeklemd (het begin) of scharnierend (vastgehouden en tegen verdraaien, vrij om te roteren).
- **Balkeinden** zijn stijf of scharnierend door de regel {{ui:Balkuiteinden zonder verbinding}}; **verbanden** (IfcMember) zijn aan beide uiteinden scharnierend. Selecteer één staaf om haar einden, of de voet van een kolom, een eigen regel te geven.
- Materialen op naam: beton (E = 30 GPa), hout (E = 11 GPa), anders staal (E = 200 GPa).

Kan het raamwerk bewegen zonder iets te buigen — een mechanisme — dan stopt de berekening en meldt ze waar en in welke richting.

## Belastinggevallen, combinaties, tekens en het rapport

De analyse begint met **Permanent** (eigen gewicht), **Veranderlijk** en **Permanent + veranderlijk**; voeg gevallen en combinaties toe met de factoren die uw ontwerpnorm vraagt. N > 0 is trek; My > 0 zet de lokale −z-zijde van de staaf op trek (een balk die onder de zwaartekracht doorzakt, heeft My > 0). {{ui:Rapport (PDF)}} en {{ui:Rapport (CSV)}} bevatten de aannames, doorsneden, gevallen, reacties met hun sommen, staafkrachten, verplaatsingen en een omhullende. {{ui:Exporteren als CraftScript}} schrijft het raamwerk naar de werkomgeving Script van PartCraft, waar de bibliotheekfunctie `frame3d` het oplost in leesbare code.

De methode is de directe stijfheidsmethode, lineair en van de eerste orde tenzij u **Tweede orde (P-Delta)** aanvinkt; getoetst aan leerboekvoorbeelden.

**Tweede orde (P-Delta).** Vink *Tweede orde (P-Delta)* aan naast Uitvoeren: elke combinatie wordt opnieuw opgelost, met de normaalkrachten van de staven die werken op het vervormde raamwerk (elke staaf in 4 stukken gesneden, zodat de buiging van een staaf tussen zijn uiteinden ook meetelt), tot de normaalkrachten zich stabiliseren. De resultaatregel geeft het aantal doorgangen en hoeveel de zijdelingse uitwijking is toegenomen; de momenten, doorbuigingen, ontwerpcontroles en het rapport gebruiken dan deze resultaten. Boven de elastische kritieke belasting van het raamwerk stopt de berekening en meldt dat. Het is elastisch met kleine rotaties, alleen buiging, zonder stijfheidsreductie of fictieve belastingen (niet de AISC-directe analysemethode op zich); vloeren, wanden en stijve vloeren blijven van de eerste orde.

**Drukbelasting op vloeren.** Voor betonvloeren (de analyse leest een vloer als plaat wanneer het materiaal beton is) heeft het blok Belastingen {{ui:Druk op elke vloer}}: typ kN/m², kies het geval hierboven en druk op {{ui:Toevoegen aan vloeren}}. Die druk wordt naar beneden verdeeld over elke vloer die de analyse vond, en wordt vermeld met een koppeling Verwijderen. Het is één druk voor alle vloeren, niet een per vloer, en het is geen normbelasting: typ de waarde die uw constructeur u geeft.

**Eigenfrequenties (eindige elementen).** Het blok {{ui:Eindige elementen: eigenfrequenties}} onder de resultaten zoekt de laagste eigenvormen van hetzelfde model met de eindige-elementenengine: balken met hun eindvrijlatingen, vloeren en wanden als vlakke vierknoops-schalen, stijve vloeren, opleggingen. Kies het aantal eigenvormen (3, 6, 10 of 20) en het vloerelement (de vierknoopsschaal voor dikke of dunne vloeren, of het dunne-vloerelement) en druk op {{ui:Frequenties zoeken}}. De tabel geeft de frequentie van elke eigenvorm in Hz, de periode in seconden en de effectieve modale massa langs X, Y en Z als aandeel van de massa die kan bewegen. {{ui:Tonen op het model}} tekent elke eigenvorm zoals de vervormde vorm wordt getekend. Massa is de materiaaldichtheid maal het volume: belastingen voegen geen massa toe, en een materiaal zonder dichtheid heeft geen massa. Het rapport (PDF, CSV) bevat de tabel. Het is alleen elastisch en geldt alleen voor kleine verplaatsingen, en er wordt hier geen aardbevings- of windbelasting uit een norm afgeleid. Geen normcontrole; uw constructeur beoordeelt de resultaten.

**Responsspectrum, tijdgeschiedenis en pushover.** Drie blokken meer staan onder de frequenties en gebruiken hetzelfde eindige-elementenmodel. De massa voor alle drie is de materiaaldichtheid plus de neerwaartse belastingen van de gevallen die u aanvinkt, elk vermenigvuldigd met een factor die u typt (bijvoorbeeld Permanent met 1 en Veranderlijk met het aandeel dat u als massa telt).

{{ui:Responsspectrum}} leest elke eigenvorm af van een spectrum dat u opgeeft (een tabel van periode en versnelling, of de ASCE 7-vorm uit SDS, SD1 en TL; de knop {{ui:Waarden uit het blok Seismisch gebruiken}} kopieert die uit het blok Seismisch), en combineert de eigenvormen met CQC, SRSS, de tienprocentregel of een absolute som. Daarna voegt het de richtingen X, Y en Z samen (100 % + 30 % of SRSS). Het geeft de basisschuifkracht, verdiepingsdrifts, staafeindkrachten en een eigenvormtabel die waarschuwt wanneer de gebruikte eigenvormen minder dan 90 % van de massa dragen. U kunt de resultaten schalen met een factor of tot een basisschuifkracht die u typt; het blok berekent die basisschuifkracht nooit zelf. Resultaten hebben geen teken.

{{ui:Tijdgeschiedenis}} voert een grondversnelling uit door modale superpositie (exact voor de rechte lijnen tussen de punten van het verloop) of door directe integratie (Newmark-gemiddelde-versnelling met Rayleigh-demping). De invoer is een zelf gemaakte sinus of puls (altijd gemarkeerd als synthetisch), een verloop dat u plakt, of een tekstbestand dat u opent (tijd en versnelling, één versnelling per regel met een stap, of een PEER-achtig bestand met een DT=-kop; in g of m/s²). Het geeft de dakverplaatsing en de basisschuifkracht tegen de tijd, de drift van elke verdieping, en de omhullende van de staafeindkrachten. Modellen met een zeer lang verloop houden het alleen voor de sessie.

{{ui:Pushover}} duwt het dak zijwaarts in kleine stappen (patroon zoals de eerste eigenvorm, of uniform), met plastische scharnieren aan de uiteinden van staven met een I-vorm. Een scharnier geeft mee bij het plastische moment, dat daalt naarmate de normaalkracht toeneemt (berekend uit de getekende vorm, afrondingen genegeerd). Verharding is optioneel, P-delta is optioneel, en een zwaartekrachtcombinatie kan eerst worden toegepast. Het geeft de capaciteitscurve (basisschuifkracht tegen dakverplaatsing), het eerste scharnier, en de toestand en plastische rotatie van elk scharnier. {{ui:Niet-lineaire tijdgeschiedenis uitvoeren}} voert dezelfde scharnieren uit onder het verloop van het blok Tijdgeschiedenis, op kleine modellen. Scharnieren ontstaan alleen aan de uiteinden van staven (plaats een knoop waar er een moet ontstaan, binnen een overspanning); een staaf die aan beide uiteinden is vrijgelaten krijgt er geen, en het vloeien en knikken van verbanden is niet gemodelleerd; vloeren en wanden blijven elastisch; er worden geen acceptatiecriteria gegeven. Geen normcontrole; uw constructeur beoordeelt de resultaten. De instellingen worden met het model bewaard en het rapport bevat de tabellen.

**Nog niet beschikbaar:** knik, een correctie voor ontbrekende massa in het responsspectrum, schaling van verloop, acceptatiecriteria voor scharnieren (dynamische respons is er, hierboven), oppervlaktebelastingen anders dan de ene druk op elke vloer, staafexcentriciteiten, verbanden die alleen trek opnemen, wanden en vloeren in het raamwerk, en normcontroles van gelaste profielen en van andere doorsneden dan gewalste I-profielen. Zie [Nog niet beschikbaar](topic:not-built-yet).

## Eenheden

Lengten volgen de eenheid die u kiest in de werkbalk ({{ui:Eenheden}}), zoals de rest van BimCraft: de lastposities die u typt en ziet ({{ui:Van}}, {{ui:Naar}}, {{ui:Bij}}), de punten van knoopbelastingen en reacties, de verdiepingshoogten in {{ui:Seismisch}}, en de doorbuigings- en driftkolommen (voet en inch tonen deze kleine lengten in decimale inches). Wijzig de eenheid op elk moment; het tabblad tekent zich opnieuw. Krachten blijven in kN en kN·m, en het rapport (PDF, CSV) en het CraftScript-bestand blijven in millimeters, met de eenheid erbij vermeld. Doorsnedematen, staafdiameters en dekkingen in het blok {{ui:Beton}} blijven in millimeters, zoals ze heten.

## Ontwerpcontroles

Het blok {{ui:Ontwerpcontroles}} (hetzelfde als dat van DetailCraft) vraagt om een {{ui:Ontwerpnorm}}, ASCE 7 + AISC 360 of EN 1990 + EN 1993-1-1, en een {{ui:Staalsoort}}. Geef elk belastinggeval zijn soort (permanent, veranderlijk, wind …); {{ui:Combinaties maken}} schrijft de belastingcombinaties van de norm uit uw gevallen, en de analyse voert ze daarna uit als elke andere combinatie.

{{ui:Staven controleren}} controleert daarna elk **gewalst stalen I-profiel** met de controles van DetailCraft (trek, druk met knik, buiging met kip, dwarskracht, buiging met normaalkracht, doorbuiging; de artikelen staan in het rapport), en toont hoeveel van zijn capaciteit het gebruikt, gekleurd op het model. Het is een **hulpmiddel totdat een constructeur het heeft beoordeeld**.

**Welke staven worden gecontroleerd.** Een IFC-profiel zegt niet of een stalen I-profiel gewalst of gelast is. BimCraft noemt het daarom alleen gewalst wanneer de profielnaam (anders de typenaam van het element) een maat is uit de AISC W- of S-tabellen of uit de EN 10365 IPE-, HEA- of HEB-tabellen (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **en** de hoogte, breedte, lijf en flens in het bestand binnen 1 % van die maat liggen. Elk ander I-profiel (een plaatligger, een maat onder een andere naam, een bewerkte maat) wordt als gelast beschouwd en komt terug als **niet gecontroleerd**, net als buizen, hoekprofielen, U-profielen en andere doorsneden, slanke delen en torsie. Controleer die staven met een constructeur.
