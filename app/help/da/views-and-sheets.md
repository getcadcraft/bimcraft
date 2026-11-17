---
title: Visninger, visningsintervaller og egne ark
summary: Find hver plan, facade, snit, 3D-visning, liste og ark i projektbrowseren, angiv hvordan hver plan skæres og hvad den viser, lav henvisninger og tegn linjer og skraveringer i én visning, gem indstillinger i visningsskabeloner og arrangér egne ark.
keywords: henvisning, henvisningsvisning, detaljevisning, forstørret plan, tegning, detaljelinjer, tegnelinjer, skravering, skraveret område, udfyldt område, udfyldningsmønster, reflekteret loftplan, rcp, loftplan, loftgitter, lysarmaturer, projektbrowser, visninger, visningsinterval, beskæring, beskæringsområde, visningsskala, underlag, vis en anden etage, snitplan, snithøjde, top, bund, visningsdybde, synlighed, kategorier, skjul i visning, visningsskabelon, skabeloner, ark, arkark, tegningshoved, viewport, skala, arrangér ark, layout, pdf, plan-indstillinger, browser
from: ee1d5afe
---

## Hvad du gør

Arbejd, som BIM-projekter er organiseret: hver visning i én liste, hver plan skåret, hvor du vil have den, de samme indstillinger for flere planer gennem en skabelon, og ark, du selv lægger ud.

## Projektbrowseren

1. Tænd for {{ui:Tegn}}. Det venstre panel har en {{ui:Projektbrowser}} under modellerne.
2. Den lister:
   - **Gulvplaner**: hver etage. Klik på en for at se dens plan. Skyderknappen ved siden af sætter dens visningsinterval (nedenfor). En plan, der følger en skabelon, viser skabelonens navn.
   - **Loftplaner**: hver etages reflekterede loftplan (nedenfor).
   - **Henvisninger**: hver henvisning med den visning, den tegnes på, og {{ui:Ny henvisning}}. **Mangler** lister henvisninger, hvis visning er væk.
   - **Facader** og **Snit**: de fire sider og hver snitlinje. Klik på en for at åbne tegningssættet, den tegnes i.
   - **3D-visninger**: de visninger, du har gemt med {{ui:Visninger}}.
   - **Lister**: klik på en for at vise den under planen.
   - **Ark**: de ark, du har lavet, {{ui:Nyt ark}}, og {{ui:Tegningssæt…}} for hele sættet lavet af modellen.
   - **Visningsskabeloner** med {{ui:Ny skabelon}}, og **Links** (de linkede modeller).

## Sæt en plans visningsinterval

1. Klik på skyderknappen ved siden af en etage under **Gulvplaner**.
2. Angiv højderne over den etage:
   - **Snit ved**: hvor planen skærer gennem vægge, døre og vinduer (1200 mm, cirka 4 ft, medmindre du ændrer det).
   - **Top**: ting over snittet og under toppen tegnes stiplet (et højt skab, en bjælke). Lad det stå tomt for etagens højde.
   - **Bund** og **Dybde under bunden**: ting lavere end snittet tegnes med tynde linjer ned til bunden og så langt under den.
3. Under **Vist i denne plan** fravælger du det, planen udelader: møbler, rum, søjler og så videre.
4. For at udelade enkelte elementer: vælg dem i planen eller 3D-visningen, åbn dialogen og klik på {{ui:Skjul de valgte her}}. {{ui:Vis dem alle}} bringer dem tilbage.
5. Klik på {{ui:Brug disse indstillinger}}.

Planen skæres straks igen, og tegningssættet og dine ark følger med. Et punktskys udsnit følger også snithøjden.

## Beskær en plan, angiv en skala, vis en anden etage under den

Alle tre står i samme dialog (skyderknappen ved siden af en etage):

- **Skala**: den skala, planen udskrives i ({{ui:Udskriv}} på planens bjælke), og som den placeres på et ark i. **{{ui:Tilpas}}** vælger den største standardskala, der passer.
- **Beskæringsområde**: klik på {{ui:Tegn på planen…}}, og klik derefter på et hjørne og det modsatte hjørne på planen ({{key:Esc}} stopper). Planen uden for området skjules på skærmen, og du kan stadig arbejde der. Udskrevet, på ark og i tegningssættet viser planen kun det, der er inden for. {{ui:Ryd}} fjerner beskæringen. {{ui:Tilpas}} tilpasser til beskæringen.
- **Underlag**: vælg en anden etage. Dens vægge, skårne elementer, døre og vinduer tegnes lyst under denne plan, så du kan flugte med etagen under eller over. Du kan ikke vælge dem her, og de udskrives i lys grå.

En visningsskabelon bærer skalaen sammen med højderne og kategorierne. Beskæringsområdet og underlaget hører altid til den ene plan.

## En etages loftplan

Hver etage har en reflekteret loftplan ved siden af dens gulvplan: planen set nedefra, til at lægge lofter ud og det, der hænger fra dem.

1. Klik på etagen under **Loftplaner** i browseren, eller vælg {{ui:Loftplan}} ved siden af etagen på planens bjælke.
2. Vægge skæres ved 2300 mm (cirka 7'-6"). Det, der ligger over det snit og under etagens højde, tegnes: lofter med deres gitter og en højdemærkning (`CLG 2438`), lys, bjælker. Døre, vinduer og det, der ligger under snittet, udelades.
3. For at lave et loft bruges {{ui:Loft}} som på gulvplanen, og så vælger du det og dets **Mønster** under Egenskaber. Se [Rum, gulve, lofter og tage](topic:floors-and-roofs).
4. For at hænge en lampe fra det, placér elementet fra biblioteket, mens loftplanen vises: det kommer under **Ved loftet**. Se [Placér udstyr og møbler fra biblioteket](topic:place-from-library).
5. Skyderknappen ved siden af en loftplan sætter dens snit og top, skala, kategorier, beskæringsområde og underlag, som for en gulvplan. Loftplaner tager ingen visningsskabelon.

Den tegnes på samme måde som gulvplanen (en reflekteret plan, ikke et spejlbillede). Et loft lavere end snittet tegnes ikke: sænk snittet for den etages loftplan. Loftplaner kommer på dine egne ark som planer; tegningssættet tilføjer dem ikke selv.

## Lav en henvisning

En henvisning viser en del af en plan større, i sin egen skala, som en visning for sig selv: et køkken, en trappe, et vægshjørne.

1. Vis den plan, loftplan eller henvisning, den hører til.
2. Vælg {{ui:Notér}} › {{ui:Henvisning}} på planens bjælke (eller {{ui:Ny henvisning}} i browseren), og klik derefter på ét hjørne af området og det modsatte hjørne. {{key:Esc}} stopper.
3. Henvisningen laves i 1:20 (1/2" = 1'-0" i fod og tommer). Dens rektangel og et rundt mærke tegnes på planen.
4. Klik på mærket med {{ui:Vælg}}, eller på henvisningen i browseren, for at åbne den: planen viser kun det område, i henvisningens skala. Bjælken siger {{ui:Henvisning:}} og dens navn; {{ui:Op}} går tilbage til visningen, den tegnes på.
5. Skyderknappen ved siden af den (i browseren eller på bjælken) omdøber den, ændrer dens skala, tegner dens rektangel igen eller sletter den.

En henvisning viser det, dens visning viser: det samme snit, de samme kategorier, en loftplans lofter. En henvisning til en henvisning virker på samme måde. Sæt en henvisning på et ark som en plan; dens mærke siger så, hvor den er (`1 / A-501`: den første visning på ark A-501). {{ui:Udskriv}} i en henvisning udskriver kun det område i dens skala.

Sletning af en henvisning sletter også de henvisninger, der er tegnet inde i den, og linjerne og skraveringerne i dem (du bliver spurgt først). Hvis etagen, en henvisning er tegnet på, slettes, bliver henvisningen stående under **Mangler**, til du sletter den, og de ark, den står på, melder den som manglende.

## Tegn linjer og skraveringer i én visning

Tegning er 2D-arbejde, der hører til én visning: noter i linjer, et skraveret område af beton eller jord, et udfyldt område. Det er aldrig i 3D-visningen og aldrig i en anden plan.

1. Vis gulvplanen, loftplanen eller henvisningen, du vil tegne i.
2. Vælg fra {{ui:Notér}} på planens bjælke:
   - {{ui:Linje}}: klik, hvor den starter, og hvor den slutter. Den næste linje starter, hvor den sidste sluttede; {{key:Enter}} starter forfra.
   - {{ui:Polylinje}}: klik dens punkter; {{key:Enter}} eller et dobbeltklik afslutter den, og et klik på dens første punkt lukker den.
   - {{ui:Rektangel}}: to modsatte hjørner.
   - {{ui:Skraveret område}}: vælg **Mønster** (Solid, Diagonal, Krydsskravering, Beton, Isolering, Jord) og dens skala på bjælken, og klik derefter på hjørnerne; {{key:Enter}}, et dobbeltklik eller et klik på det første hjørne lukker den. Med {{ui:Udfyld et rum}} afkrydset skraverer ét klik i et rum dets omrids.
3. Punkter fanger, som vægge gør; {{key:Shift}} holder en linje lige, og du kan skrive en længde, som for vægge. {{key:Backspace}} tager det sidste punkt tilbage.

Vælg en linje eller en skravering med {{ui:Vælg}} på planen. Egenskaber ændrer en skravering's mønster og skala og har {{ui:Flyt…}} (klik på punktet at flytte fra, og derefter hvor det skal hen). {{key:Delete}} sletter den. Hver linje, skravering og ændring er ét trin.

Linjer og skraveringer udskrives med planen, kommer på dine ark sammen med den og er i tegningssættet. Fravælg **Annoteringer** i et visningsinterval for at udelade dem fra den visning.

## Gem indstillingerne i en visningsskabelon

1. Klik på {{ui:Ny skabelon}} i browseren, eller på {{ui:Gem som skabelon…}} i en plans visningsinterval (planen bruger den så).
2. Giv den et navn, angiv højderne og kategorierne, og klik på {{ui:Gem skabelonen}}.
3. I enhver plans visningsinterval vælger du skabelonen. Planen tager dens højder og kategorier; ændrer du skabelonen, ændrer du hver plan, der bruger den. Elementer, du har skjult enkeltvis, forbliver skjult i deres egen plan.
4. Klik på en skabelon i browseren for at ændre, omdøbe eller slette den. Sletning af en lader dens planer beholde dens indstillinger som deres egne.

## Arrangér et ark, du selv har lavet

1. Klik på {{ui:Nyt ark}}. Skriv dets nummer og titel, og vælg papiret.
2. Klik på {{ui:Tilføj}} ved siden af en plan, loftplan, henvisning, facade, et snit eller en liste. Den havner midt på arket.
3. Træk den hen, hvor den skal være. Med den valgt vælger du en **Skala**, eller lader den stå på planens egen skala (når planen har én), ellers den skala, der passer til en tredjedel af arket. {{ui:Tag af arket}} fjerner den.
4. Klik på {{ui:Gem arket}}. Det står under **Ark**; klik på det for at ændre det senere.
5. {{ui:Download som PDF}} gemmer det ark som én side.

## Det skal du se

- Planer skåret i dine højder, med det over snittet stiplet og det, du har fravalgt, udeladt.
- En beskåret plan, skjult uden for dens område på skærmen og skåret til det på papir, i den skala du har angivet.
- En loftplan med lofternes gitter og højdemærkninger og lysene i loftet.
- Henvisninger med deres rektangel og mærke på planen, hver åbnet i sin egen skala.
- Linjer og skraveringer kun i den visning, du tegnede dem i.
- Dine ark tegnet igen fra modellen, hver gang du åbner dem, så de altid passer til den. En visning, hvis etage eller snitlinje er slettet, meldes og tegnes ikke.
- Hver ændring her er ét trin: {{key:Mod+Z}} tager den tilbage.

:::note
Alt dette gemmes i IFC-filen som egenskabssæt, som andre programmer lader være i fred: hver etages visningsinterval og loftplan på etagen, skabelonerne, henvisningerne og dine ark på projektet. Linjer og skraveringer er IFC-annoteringer i deres etage, så andre programmer ser dem som 2D-kurver og skraverede områder (deres egen tegning af hvert mønster), men ikke hvilken visning de hører til.
:::

:::tip
Andre BIM-programmer kalder snittet et visningsinterval eller snitplan, skabeloner visningsskabeloner eller visningsindstillinger, tegnelinjer detaljelinjer og skraveringsområder udfyldte områder. Ideerne er de samme; visningsindstillingerne følger ikke med til dem.
:::
