---
title: Arbetsplanet: ställ in det, visa det, titta rakt på det
summary: Arbetsplanet är planet som modellinjer, modelltext och Arbetsplansvisaren använder. Ställ in det till en nivå, en yta, ett namngivet referensplan eller en linje; visa det i vyerna; öppna visaren för att rita på ett lodrätt plan.
keywords: arbetsplan, ställ in arbetsplan, visa arbetsplan, referensplan, arbetsplansvisare, namngivet plan, yta, nivå, lodrätt plan, vertikalt plan, rita på en vägg, fasadritning, fångst, justering, referensplan
from: 8aceee1d
---

## Vad du gör

Välj planet du ritar på, se var det är, och rita på ett plan som står lodrätt.

## Steg

1. Slå på **Rita** och öppna menyn **Bygg** (i menyfliksläget: fliken Arkitektur, Arbetsplan).
2. Välj **Ange arbetsplan**. Gör sedan något av följande:
   - välj en nivå i **Ange till**;
   - välj ett namngivet referensplan i listan bredvid;
   - klicka på en linje i planvyn: en vägg, en rutnätslinje, ett referensplan, en modellinje eller ett gardinsystem. Arbetsplanet blir det lodräta planet genom linjen;
   - klicka på en plan yta i 3D-vyn. Arbetsplanet ligger på ytan.
3. Välj **Visa arbetsplan** för att se det: ett tonat ark med ett metertrutnät i 3D-vyn, en streckad kontur eller linje i planvyn och en streckad kontur i fasad- och sektionspanelen. Välj det igen för att dölja det.
4. Välj **Arbetsplansvisaren** för att titta rakt på planet. De svarta linjerna är modellen skuren av planet. Använd dess verktyg för att rita en modellinje, en modelltext eller ett referensplan på planet. **Titta på den i 3D** vrider 3D-vyn så att den vetter mot planet.

## Referensplan

Ett referensplan är ett namngivet plan som du ritar som en linje.

1. Välj **Referensplan**. Skriv ett namn på dess rad om du vill ha ett (annars får det ett namn åt dig) och en höjd.
2. Klicka där det börjar och där det slutar. I planvyn blir det ett lodrätt plan. I Arbetsplansvisaren blir det ett plan som står vinkelrätt mot arbetsplanet.
3. Det visas som en streckad grön linje med sitt namn i planvyn, en streckad kontur i 3D-vyn och i fasad- och sektionspanelen.
4. Markera det för att byta namn på det, ändra dess längd, höjd och fot, eller tryck på **Använd som arbetsplan**.

Två referensplan kan inte ha samma namn, eftersom namnet är hur du väljer ett.

## Bra att veta

- En modell utan inställt arbetsplan fungerar på sin lägsta nivå.
- Arbetsplanet sparas i filen. Att visa eller dölja det kommer ihåg i den här webbläsaren, inte i filen.
- Om arbetsplanet följer ett referensplan och du flyttar det planet, flyttas arbetsplanet med det.
- På ett lodrätt arbetsplan öppnar verktygen Modellinje och Modelltext visaren, eftersom en planvy inte kan peka på en höjd.
- Ritverktygen fångar ändarna på referensplan som ritats i planvyn på samma sätt som de fångar andra linjers ändar i visaren.

## I IFC-filen

- Arbetsplanet är en egenskapsuppsättning (CadCraft_WorkPlane) på projektet.
- Ett referensplan är en IfcAnnotation med objekttypen ReferencePlane och dess namn. Dess form är planets slutna kontur, så att ett annat program visar var det är. Dess uppsättning CadCraft_ReferencePlane innehåller ursprung, riktning, normal och utsträckning. IFC har ingen klass för ett referensplan; en annotation räknas inte som ett byggnadselement och avgränsar inte rum.
