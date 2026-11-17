---
title: Probleemoplossing
summary: Berichten die BimCraft toont, wat ze veroorzaakt en wat u moet doen, bij het openen van bestanden, mappen, 3D-modellen, tekeningen en wijzigingen.
keywords: probleem, fout, werkt niet, kan niet openen, mislukt, onvolledig, beschadigd, traag, vastlopen, leeg, ontbrekend, bericht, help
from: 1e5a79fc
---

Berichten verschijnen in de statusregel onder aan de werkruimte, in rood wanneer iets is mislukt. Zoek het bericht hieronder.

## Bestanden openen

**"*name* is geen IFC-, RVT-, RFA-, DWG- of DXF-bestand."**
BimCraft herkende het bestand niet. Controleer de extensie en of het bestand niet leeg is. PDF's, afbeeldingen en kantoorbestanden kunnen niet worden geopend.

**".ifczip wordt nog niet ondersteund. Sla het model op of exporteer het als gewoon .ifc-bestand."** (ook voor `.ifcxml`)
Pak de `.ifczip` uit (het is een gewoon zipbestand met een `.ifc` erin) of exporteer gewone IFC.

**"… is een projectbestand dat BimCraft nog niet leest."**
Een `.pln`-, `.pla`-, `.tpl`- of `.bpn`-bestand. Exporteer er IFC of DWG uit en open dat: zie [.pln- en .pla-projectbestanden openen](topic:pln-project-files).

**"Dit IFC-bestand kon niet worden gelezen."**
Het IFC-bestand is beschadigd of is geen echt IFC. Open het in een teksteditor: een echt IFC-bestand begint met `ISO-10303-21;`. Exporteer het opnieuw.

**"Dit bestand is onvolledig: het is … MB, maar de eigen index verwijst naar gegevens van minstens … MB. …"**
Het project- of familiebestand is afgekapt tijdens het kopiëren, uploaden of synchroniseren. Een bestand op een clouddrive dat "alleen online" is, ziet er hetzelfde uit. Een bestand dat op zichzelf wordt geopend, opent nog steeds, met dit bericht bovenaan de kaart en "Wat hersteld kon worden wordt getoond; kopieer het origineel opnieuw voor het volledige model.": de kaart toont alleen de delen waarvan elke byte in het bestand zit, en zet de rest onder **Niet in het bestand**. Maak het bestand offline beschikbaar in uw clouddrive, of kopieer het origineel opnieuw, en open het opnieuw. In een map toont BimCraft in plaats daarvan de nieuwste volledige back-up.

**"… De eigen inhoudsopgave van het bestand zit ook in het ontbrekende deel, dus er kan niets worden geopend."**
Het bestand is zo vroeg afgekapt dat zelfs de inhoudsopgave ontbreekt. Uit deze kopie kan niets worden hersteld. Kopieer het origineel opnieuw en open het opnieuw.

**"Dit samengestelde bestand heeft geen BasicFileInfo-stroom, dus het is geen Revit-bestand."**
Het bestand is een samengesteld bestand van een ander soort (oude kantoordocumenten gebruiken dezelfde container). Controleer of u het juiste bestand heeft gekozen.

**"Nog bezig met de vorige…"**
BimCraft is nog bezig met het vorige bestand of de vorige map. Wacht tot de statusregel klaar is en probeer het dan opnieuw.

**De bestandskiezer maakt mijn bestand grijs.**
De kiezer biedt alleen `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` en `.dxf` aan. Sleep andere bestanden in plaats daarvan naar de pagina; dan vertelt BimCraft u of het ze kan lezen.

## Mappen openen

**"Deze map bevat meer dan 20.000 bestanden. Kies een kleinere map, zoals één project."**
U heeft een te hoge map gekozen, zoals een hele schijf. Kies één projectmap.

**"De browser gaf geen toegang tot *name*. Kies het opnieuw met Een map openen."**
U klikte op {{ui:Heropenen}} bij een recente map, en de toestemming van de browser werd geweigerd of is verlopen. Kies de map opnieuw, of sleep hem erin.

**De browser zegt dat hij bestanden gaat "uploaden".**
Dat is de eigen tekst van de browser voor het aanbieden van bestanden aan een pagina. BimCraft stuurt ze nergens naartoe. Sleep de map erin om de vraag te vermijden.

**Er gebeurt niets op een telefoon of tablet.**
Veel mobiele browsers kunnen geen mappen kiezen. Open losse bestanden, of gebruik een computer.

## De IFC-engine laadt de eerste keer

**De statusregel blijft staan op "Starting the IFC engine…", of toont een fout zoals "Failed to fetch".**
De IFC-engine kon niet worden gedownload. U bent misschien offline, of een firewall of contentblokkering houdt hem tegen.

:::offline
U bent offline. Als de knop in de app-balk niet {{ui:Klaar voor offline gebruik}} zegt, is de IFC-engine nooit in deze browser opgeslagen. Maak opnieuw verbinding, open het bestand opnieuw en klik daarna op {{ui:Opslaan voor offline gebruik}}, zodat het de volgende keer offline werkt. Zie [Online en offline](topic:online-offline).
:::

:::online
Laad de pagina opnieuw en probeer het opnieuw. Vraag op een werknetwerk uw IT-team om de `.wasm`-bestanden van de site toe te staan.
:::

## Opslaan voor offline gebruik

**De knop zegt {{ui:Kon niet opslaan}}.**
Sommige bestanden zijn niet gedownload, meestal omdat de verbinding is weggevallen. Controleer uw verbinding en klik opnieuw op de knop. Een eerdere offlinekopie blijft bewaard tot er een nieuwe volledig is.

**De knop zegt {{ui:Offline gebruik is niet beschikbaar}}.**
Dit venster kan geen offlinekopie bewaren, bijvoorbeeld een privévenster of een beheerde werkcomputer. Zie [Offline werken](common:offline).

**De knop blijft even op "Opslaan *n* van *m*" staan.**
De kopie van BimCraft is ongeveer 11 MB, het meeste daarvan is de IFC-engine. Houd het tabblad open tot er {{ui:Klaar voor offline gebruik}} staat.

**BimCraft opende offline maar lijkt verouderd.**
Uw opgeslagen kopie is van een eerder bezoek. Klik als u online bent op {{ui:Klaar voor offline gebruik}} en kies {{ui:Opnieuw opslaan (de nieuwste versie ophalen)}}.

## 3D-weergave

**Het model staat niet waar ik verwachtte, of het is heel klein.**
Druk op {{key:F}} of klik op {{ui:Passend}}. Passend kadert altijd alles in het model in, ook verdiepingen die u heeft uitgevinkt en losse elementen ver van het gebouw, zodat het gebouw klein kan lijken. Zoom van daaruit in.

**Klikken kiest niets.**
Houd de muis stil terwijl u klikt: een kleine sleep draait het model. Elementen op uitgevinkte verdiepingen kunnen niet worden gekozen. Met {{ui:Ruimten}} aan worden de doorzichtige ruimten eerder gekozen dan wat erin zit.

**De knop {{ui:Randen}} is grijs: "Randen zijn uit voor zeer grote modellen".**
Het model heeft meer dan 1,5 miljoen driehoeken. Randen blijven uit om geheugen te sparen.

**Het tabblad wordt traag, wit, of toont de vastlooppagina van de browser.**
Het model is te groot voor het geheugen dat de browser aan het tabblad geeft. Sluit andere tabbladen en laad opnieuw. Exporteer een kleinere IFC: één gebouw, één discipline of minder verdiepingen. Zie [Browsers, apparaten en geheugen](topic:platforms).

**De 3D-weergave blijft leeg.**
WebGL is misschien uitgeschakeld of geblokkeerd. Zet in de instellingen van de browser hardwareversnelling (of grafische versnelling) aan en start de browser opnieuw.

## IFC bewerken

**"Gebruik een getal."** De waarde is numeriek. Typ een gewoon getal zonder eenheden, zoals `2.4`.

**"Gebruik een geheel getal."** De waarde is een aantal of een geheel getal. Verwijder de decimalen.

**"Alleen eigenschappen met één waarde kunnen worden bewerkt."** Lijsten, opsommingen en hoeveelheden zijn alleen-lezen.

**{{key:Mod+S}} opent het venster "Pagina opslaan" van de browser.**
Er zijn geen niet-opgeslagen wijzigingen, dus BimCraft laat de toets aan de browser. Sluit het venster.

**{{key:Mod+Z}} doet niets.**
Het werkt alleen zolang er niet-opgeslagen wijzigingen zijn en u niet in een veld typt. Na een keer opslaan is er niets meer om ongedaan te maken.

**De lijst {{ui:Wijzigingen}} toont nog wijzigingen nadat ik ze heb weggegooid en een tekening of map heb geopend.**
Als u de vraag "Weggooien?" met OK beantwoordt en daarna iets anders opent dan een IFC-model, blijven de oude wijzigingen in het geheugen, en {{ui:Opslaan als IFC}} zou ze dan nog steeds opslaan. Om echt opnieuw te beginnen, opent u het oorspronkelijke IFC opnieuw, of laadt u de pagina opnieuw.

**Mijn wijziging veranderde meer elementen dan ik had gekozen.**
U heeft een eigenschap gewijzigd in een set met "(type)". Typeeigenschappen gelden voor elk element van het type. Klik op {{ui:Ongedaan maken}}. Zie [Een typeeigenschap wijzigen voor elk element van een type](topic:type-vs-instance).

## Tekeningen

**"*name* kon niet worden gelezen. Het is misschien beschadigd, of opgeslagen in een indeling die de lezer nog niet verwerkt (…)."**
Sla de tekening vanuit het programma waarmee hij is gemaakt op als een oudere DWG (2018 of eerder) of als DXF, en probeer het opnieuw.

**"Deze tekening heeft niets om te tonen."** of **"*name* is een lege tekening: hij bevat geen lijnen, tekst of blokken."**
De tekening is leeg, of bevat alleen dingen die BimCraft nog niet tekent (zie **Nog niet getekend** rechts).

**"Deze tekening is zeer groot; alleen een deel wordt getoond."**
BimCraft is gestopt met tekenen om reactief te blijven. Zet lagen die u niet nodig heeft uit, of open de bladen die u nodig heeft uit een kleinere tekening.

**Delen van een blad ontbreken.**
Gekoppelde tekeningen ontbreken misschien: kijk rechts onder **Gekoppelde tekeningen**. Zie [Gekoppelde tekeningen en afbeeldingen zoeken](topic:dwg-linked-files). Lagen kunnen ook uit staan: klik op {{ui:Alles aan}}.

**Een afbeelding wordt als lege kader getoond.**
Het bestand is niet gevonden, of het is een TIFF ("TIFF kan niet in een browser worden getoond"). Voeg een PNG- of JPEG-kopie toe met {{ui:Afbeeldingen toevoegen…}}.

**Scrollen op mijn trackpad zoomt in plaats van de tekening te verschuiven.**
Zo werken tekeningen in BimCraft. Klik en sleep om te verschuiven.

## Nog steeds vast

Lees [Wat nog niet beschikbaar is](topic:not-built-yet): het ding dat u zoekt bestaat misschien niet in deze build.
