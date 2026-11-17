---
title: Skelet til vægge, gulve og tage
summary: Generér stendere, remme, overliggere, bjælker, spær eller fagværk ud fra modellen og behold dem med den; de laves igen, når væggene, åbningerne, gulvene eller taget ændres, og Træliste er tilskæringslisten.
keywords: TJI, I-bjælke, bjælketabel, indlæs en tabel, skelet, ramme, stender, rem, øvre rem, overligger, kongestender, jackstender, trimmer, kort stender, bundrem, afstivning, hjørne, kalifornisk hjørne, T-samling, bjælke, randbjælke, båndbjælke, spær, valmspær, dalspær, jackspær, rygbjælke, loftsbjælke, bindebjælke, fagværk, træliste, tilskæringsliste, board feet, 2x4, 2x6, afstand, centerafstand
from: 76d0ffb5
---

## Hvad du skal gøre

Byg skelettet ud fra det, du tegnede. BimCraft lægger stendere, remme og overliggere i væggene, bjælkerne i gulvene og spærene (eller fagværkerne) i taget, dimensionerer dem ud fra mærkede standardtabeller, gemmer dem med modellen og laver dem igen, når det, de bærer, ændres. Listen **Træliste** er tilskæringslisten.

## Lav skelettet

1. Vælg på et niveau {{ui:Build}} og vælg {{ui:Skelet}}.
2. Vælg **afstanden** (16" eller 24" centerafstand; 400 eller 600 mm), **hjørnerne** (tre-stender eller kalifornisk), **Spær** eller **Fagværk** til tage, og om vægge får en række **afstivning** halvvejs i højden. Til gulve vælger du **Savet træ** eller **TJI (foreløbig)** og sætter bjælkeretningen til automatisk, plan X eller plan Y.
3. Klik på **Lav skelet til hver væg**, eller klik på en væg, et gulv eller et tag (på niveauet taget står på) for kun at lave det.

Slå **Vis skelet** fra for at skjule alle skeletdele, ligesom et lag; **Gennemsigtig** skjuler de vægge, gulve og tage, der har skelet, så du kun kan se skelettet.

## Hvad du får

- **Vægge**: en bundrem (skåret ved døre), en dobbelt øvre rem, stendere på layoutet fra væggens start, kong- og jackstendere og en overligger ved hver dør og hvert vindue, korte stendere over overliggere og under vinduer, en grov underkarm under vinduer, hjørner hvor vægge mødes (væggen, der løber igennem, tager hjørnestenderne), to støttestendere hvor en anden væg støder ind i en T-samling, og afstivning mellem stenderne.
- **Gulve**: bjælker på tværs af gulvets korte led som standard, eller langs din valgte planakse; randbjælker rundt om kanten, og dobbelte trimmere og overliggere rundt om en trappeåbning, med bjælkerne igennem den skåret korte (halebjælker). TJI-tilstanden vælger den mindste opførte serie og højde, der når det målte frie spænd ved den valgte afstand.
- **Tage**: almindelige spær, vinkelret på hver tagfod, jackspær hvor valme og dale skærer dem, valme- og dalspær, rygbjælker, loftsbjælker på remmene og bindebjælker, eller enkle fagværk med den afstand, ét stykke hver.

## Ændr det

Vælg et skeletstykke i 3D-visningen eller modeltræet. **Egenskaber** viser dets skelet: ændr afstanden, gulvbjælketype og -retning, hjørnerne, afstivningen eller tagskelettet. Flytning af vægge, døre og vinduer, eller ændring af gulvet eller taget, laver skelettet igen af sig selv.

For at beholde et stykke, du satte med vilje, når skelettet laves igen, vælg det og vælg **Behold dette stykke, når skelettet laves igen**. Et beholdt stykke bliver, hvor det er; når skelettet omkring det ændres, markeres det, så du kan kontrollere det.

## TJI-gulve fra en tabel, du indlæser

BimCraft indeholder ingen bjælkeproducenters spændtabeller (de tilhører producenten og ændres med hver udgave). Vælg et gulvs skelet, sæt **Gulvbjælker** til **TJI (foreløbig)** og vælg **Indlæs en tabel…** i **Egenskaber**: en fil i formatet `cadcraft-tji-table`, JSON eller CSV, som du har lavet ud fra producentens aktuelle spændtabeller. Den angiver producenten, produktet og udgaven og hvor tallene kommer fra, og den viser for hver lastsituation (nyttelast, egenlast, nedbøjningsgrænse, understøtningslængde) det største frie spænd for hver serie og højde ved hver afstand.

- BimCraft tager gulvets **frie spænd**, vælger den laveste højde, og inden for den den serie, hvis opførte spænd rækker dertil for den afstand og lastsituation, du valgte, og skelet gulvet med den. Hvis spændet eller afstanden er uden for tabellen, siger den det og ændrer intet.
- Lasterne, nedbøjningsgrænsen, understøtningslængden, tabellen og sætningen »Foreløbig layoutvejledning; det endelige valg kræver producentens tabeller og projektets laster« står på Træliste-listen, skrives ind i modellen med skelettet og vises i **Problemer**-panelet som en note. En tabel markeret som eksempel siger det i en advarsel.
- Med tilvalget **Bygningsreglementet** tændt læser dets bjælkeregel også en indlæst tabel; uden en tabel udelades TJI-bjælker fra kontrollen, som før.
- Tabellen bliver i denne browser, indtil du rydder den eller indlæser en anden. Filen: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; eller `metric`: mm, metres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) og `rows` (`series`, `depth`, `spans`: for hvert tilfældes id, afstanden og det største frie spænd, for eksempel `"16": "15-6"`). I CSV er de samme oplysninger `# nøgle = værdi`-linjer, efterfulgt af `series,depth,case,spacing,span`.
- Uden en indlæst tabel afvises et TJI-layout, og intet ændres: **Indlæs en TJI-tabel: producentens tabeller er deres og er ikke indbygget.** En model, der blev skelet med den ældre indbyggede TJI-tabel (før denne ændring), beholder alle bjælker, den har; Egenskaber og Problemer siger, at tabellen er nødvendig, og gulvet kan skelettes igen, når du har indlæst en. Massivt savede bjælker virker som før.

Dette er en layoutvejledning. Det endelige bjælkevalg kræver producentens tabeller, projektets laster og en ingeniør.

## Tilskæringslisten

I Lister-panelet vælg **Træliste**: hvert skeletstykke grupperet efter størrelse og den lagerlængde, du ville købe (hele 2'-længder fra 8'; 600 mm-trin fra 2400 i millimeter), med antallet af stykker og board feet. **CSV** downloader den.

:::warning
Størrelser for overliggere, bjælker, spær og loftsbjælker kommer fra mærkede standardtabeller for et typisk et- eller to-etagers hus, ikke ingeniørarbejde. **Egenskaber** siger, når et spænd eller en åbning er ud over sin tabel. En projekterende eller ingeniør kontrollerer spænd, laster og forbindelser.

TJI-layouts bruger kun en tabel, du indlæser, og som du laver ud fra producentens aktuelle spændtabeller; BimCraft leverer ingen. Forslaget kontrollerer ikke understøtning, punktlaster, udkragninger, huller, overliggere ved trapper eller forbindelser, og modellens I-profil er skematisk.
:::

## Hvad der gemmes

Hvert skelettede væg, gulv eller tag er en IFC-elementsamling ("Framing") bestående af IFC-elementer (stendere, remme, spær, bindebjælker, afstivning, fagværk) og bjælker (overliggere, bjælker, randbjælker, rygbjælker), hver med sin størrelse, længde og board feet.
