---
title: Classificatiecodes (Uniclass, OmniClass, UniFormat)
summary: Geef elk element en elk type een classificatiecode, kies welke systemen een project gebruikt, zoek in de Uniclass-tabellen die bij de app komen, laad de eigen gelicentieerde tabellen van uw kantoor, en toon de codes in staten. De codes worden in het IFC-bestand geschreven voor andere software.
keywords: classificatie, classificeren, code, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tabel, elementcode, typecode, standaardcode, IfcClassification, IfcClassificationReference, cobie, staatkolom, csv, licentie, license
from: 222b94cd
---

## Wat u gaat doen

Zet een classificatiecode op muren, vloeren, daken, deuren, ramen en alles anders in het model, in maximaal drie systemen naast elkaar: Uniclass, OmniClass en UniFormat. Andere disciplines en andere software vertrouwen op de code, niet op de naam. Daarom worden de codes in het IFC-bestand opgeslagen als classificatieverwijzingen die elk BIM-programma leest.

## Een element een code geven

1. Selecteer een element (of meerdere) en open **Eigenschappen**. Open de sectie {{ui:Classification}}.
2. Typ de code in het vak van het systeem en druk op Enter. Met een geladen codelijst typt u een deel van een code of een paar woorden ("gordijngevel") en kiest u uit de overeenkomsten: de titel van de code wordt dan voor u ingevuld.
3. {{ui:Applies to}} zegt waar de code naartoe gaat: **Dit element**, of **Het type (elk element van het type)**. Een code op een wandtype wordt gelezen door elke muur van dat type, ook de muren die u later tekent.
4. {{ui:Clear}} haalt een code weg.

Onder elke code zegt de sectie waar hij vandaan komt: ingesteld op dit element, van het type, of de projectstandaard voor de klasse. De eigen code van een element wint altijd van die van zijn type, en die van het type van een standaard. Met meerdere geselecteerde elementen betekent een vak met "wisselend" dat ze geen gedeelde code hebben; er één typen geeft hem aan allemaal. Elke wijziging is één stap ongedaan maken.

Een code kan altijd worden getypt, of er nu een lijst is geladen of niet. Als hij er niet uitziet als een code van dat systeem, of niet in de geladen lijst staat, geeft een hint dat aan, en blijft de code zoals u hem typte.

## De systemen van het project kiezen

Open **Gegevens** in de modelbalk en kies {{ui:Classification}} (of {{ui:Project classification…}} in de sectie Eigenschappen).

- Vink de systemen aan die dit project gebruikt. Eigenschappen toont dan alleen die.
- **Uniclass**: de tabellen Elementen/functies (EF), Systemen (Ss) en Producten (Pr) komen bij de app. Ze zijn © NBS, gelicentieerd onder Creative Commons Attribution-NoDerivatives 4.0, en worden onveranderd doorgegeven. Het dialoogvenster toont de editie van elke tabel en de dag waarop hij is ingelezen. Het zijn niet de nieuwste tabellen: de uitgever brengt elk kwartaal nieuwe uit op de eigen site.
- **OmniClass** en **UniFormat**: er komt geen codelijst bij de app, omdat hun uitgever niet toestaat de tabellen zonder licentie door te geven. Typ een willekeurige code, of laad de eigen gelicentieerde tabel van uw kantoor.
- {{ui:Load a table (CSV)…}} leest de eigen tabel van uw kantoor uit een CSV-bestand met een codekolom en een titelkolom (een kopregel met de naam Code, Number of Identifier en Title, Name of Description wordt zelf gevonden; zonder die kopregel worden de eerste twee kolommen gebruikt). De tabel blijft in deze browser en wordt nooit in het projectbestand opgeslagen. Alleen de codes die u toekent, worden in het bestand bewaard. U kunt een nieuwere Uniclass-tabel op dezelfde manier laden.
- {{ui:Give elements a default code by their class}} geeft elke wand, vloer, dak, deur, raam, trap, helling, kolom, balk en stuk meubilair een startcode uit de Uniclass-tabel Elementen/functies wanneer die er zelf geen heeft. Elementen die u daarna tekent, krijgen die ook.
- {{ui:Show the codes as columns in the schedules}} voegt één kolom per systeem toe aan de staten Deuren, Ramen, Muren per type en Ruimten, en aan hun CSV. Een rij met meerdere elementen toont "wisselend" wanneer hun codes verschillen.

## Goed om te weten

- De standaardcodes zijn de eigen beginkeuze van CadCraft, niet van de uitgever, en zijn niet door een vakpersoon gecontroleerd. Controleer ze tegen de standaard van uw project.
- In het bestand is een standaard een echte classificatie, gemarkeerd met de relatienaam "CadCraft default". Hij verdwijnt zodra het element of zijn type een eigen code krijgt.
- Codes die een geïmporteerd bestand al heeft, worden gelezen en getoond, welke spelling het andere programma ook gebruikte voor de naam van het systeem. Codes van andere systemen (van een kantoor zelf) worden vermeld en met rust gelaten.
- De codes worden teruggelezen wanneer het bestand opnieuw wordt geopend, hier of in een ander programma. Ze worden ook meegenomen naar de IFC5-alpha-export (IFCX) wanneer die labopties aan staan, behalve een code die op een dak is ingesteld.
- Nog niet beschikbaar: een boom om een tabel niveau voor niveau te doorbladeren, codes op niveaus en ruimten als projectstandaard, en het controleren van een code tegen de editie die in het bestand staat.
