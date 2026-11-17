---
title: Vægformer, deling, forskydning, strækning og lås
summary: Tegn vægge som rektangel, polygon, bue, på valgte linjer eller rundt om en kontur, del dem, tag et stykke ud, forskyd, kasse-stræk, flugt dem og lås dem til hinanden, til en målsætning eller til en gitterlinje. Hver ændring holder væggene sammenføjet og er ét fortrydelsestrin.
keywords: skift type, ændr type, omtyp, hvad flyttede, lod, udviklingsniveau, sammenføjningsstil, gering, stød, afslut firkantet, næste, løber igennem, forbyd sammenføjning, tillad sammenføjning, lagprioritet, kerne, prioritet, kryds, rektangel, roteret rektangel, polygon, indskrevet, omskrevet, bue, centrum, tangentbue, vælg linjer, tab, optegn, kontur, del, mellemrum, slet segment, sammenføj igen, forskydning, kopi, kasse-stræk, markeringsramme, stræk, flugt, lås, hængelås, begrænsning, lås målsætning, redigér målsætning, gitter, lås til gitter, flyt gitterlinje, placeringsforskydning, frit stående, vokse fra, mål fra, midterlinje, indvendig flade, udvendig flade, Alt
from: 5b7d2f75
---

## Det skal du gøre

Lav og ændr vægge med vægværktøjets opskrifter. Hver ender på samme måde som at tegne en væg ved hjørnerne: hjørnerne sammenføjes af sig selv, sammenføjningerne gemmes i filen, og hele ændringen er ét trin i **Ændringer**, som {{ui:Fortryd}} tager tilbage. Væggene beholder deres identitet: en væg, du deler, forskyder eller strækker, er stadig den samme væg, med sine døre, vinduer og målsætninger.

## Tegn et rektangel, en polygon eller en bue

Med {{ui:Tegn}} slået til åbner du {{ui:Former}} i gruppen Tegn (eller vælger en form i listen **Form** i rækken Væg). Rækken Væg viser vægtypen, tegnereferencen, ydersiden og toppen, som for værktøjet {{ui:Væg}}. Klik derefter, eller skriv punkterne (x,y · @dx,dy · @længde<vinkel · en længde langs markøren):

- **Rektangel**: to modsatte hjørner. Fire vægge, fire hjørnesammenføjninger, ét trin.
- **Roteret rektangel**: hvor første side starter og slutter (det sætter dens drejning og længde), derefter et tredje klik for den anden side.
- **Polygon**: centrum, og derefter et hjørne (**Indskrevet**) eller midten af en side (**Omskrevet**). Sæt først **Sider** (3 til 64).
- **Bue, centrum**: centrum, start (det sætter radius), slut. **Retning**: den kortere vej, mod uret eller med uret. Et sving over tre fjerdedele af en cirkel tegnes som to vægge.
- **Tangentbue**: klik på enden af en væg, og derefter hvor buen slutter. Buen forlader væggens ende i væggens egen retning.

En lukket form får sin ydre side udad. Tegnet på **Udvendig flade** eller **Indvendig flade** er den flade, du klikker på, den flade, der bliver stående.

## Vægge på linjer, du allerede har

- **Vælg linjer**: klik på en linje, og en væg lægges på den. Tryk {{key:Tab}} (eller hold {{key:Shift}} nede, mens du klikker) for at tage hele kæden af linjer, der er forbundet ende til ende. Linjerne er denne visnings tegnelinjer, optegningsreferencen og gitterlinjerne.
- **Optegn kontur**: klik inde i et område, der er lukket af disse linjer eller af vægge. Væggene går rundt om det mindste areal omkring klikket.

## Sæt før du tegner: forskydning og sammenføjning

Rækken Væg har to felter mere, som bruges af værktøjet {{ui:Væg}} og formerne:

- **Forskydning**: væggene tegnes så langt fra den linje, du klikker på: + til dens venstre side, − til dens højre side, set i den retning, du tegner.
- **Sammenføj**: fjern fluebenet for at tegne frit stående vægge. Deres ender får **Forbyd sammenføjning** og bliver frie, hvor de end går (se [Ændr en væg](topic:change-a-wall-or-door)).

## Del, tag et stykke ud, sammenføj igen

Åbn {{ui:Vægge}} i gruppen Redigér.

- **Del**: klik på en væg, hvor den skal skæres, eller skriv afstanden fra dens start. Nær en væg, der krydser den, fanger skæringen, hvor de mødes. De to dele har samme type og bliver sammenføjet ende til ende. **Mellemrum** efterlader et rum af den længde, centreret på skæringen. **Frie ender** giver de skårne ender Forbyd sammenføjning i stedet (Indstillinger › BimCraft › Vægge › **Når en væg deles** bestemmer, hvilken der er sat fra start). En dør eller et vindue følger den del, det står i; et snit gennem et afvises.
- **Slet segment**: klik, hvor stykket starter, og hvor det slutter. En dør i stykket følger med.
- **Sammenføj igen**: klik på de to dele af én væg (på linje, samme type). De bliver én væg igen, den første, du klikkede på, med dørene fra begge.

## Sammenføjningsstil, forbyd sammenføjning, lagprioritet

Åbn {{ui:Vægge}} i gruppen Redigér.

- **Sammenføjningsstil**: klik på et hjørne, hvor to lige vægge ender. Hvert klik går til den næste stil: **Gering** (begge ender skåret efter linjen fra det indre til det ydre hjørne, det alle hjørner starter med), **Stød** (den ene væg løber igennem til den andens ydre flade, som standser ved dens side) og **Afslut firkantet** (som stød, og den væg, der løber igennem, ender firkantet; i en ret vinkel ser den ud som stød). **Næste**, eller {{key:Tab}}, gør den anden væg til den, der løber igennem. Listen **Stil** i linjen viser det hjørne, du klikkede på sidst. De samme to valg findes i **Egenskaber** for én væg: **Sammenføjningsstil ved start / ved slut** og **Løber igennem**. Hver ændring er ét trin i **Ændringer**. Planen, 3D-legemet, rummene og mængderne følger med.
- Ved et T løber den væg, hvis side mødes, altid igennem. Hvor to vægge krydser, siger et klik (eller **Kontinuerlig ved krydsning** i Egenskaber), hvilken af de to der er kontinuerlig; det afgør, hvilken vægs lag der tegnes igennem krydset.
- Stilen hører til sammenføjningen: den bliver, når vægge flyttes, og forsvinder kun, når sammenføjningen forsvinder (væggen slettes, deles i den ende, eller enden får Forbyd sammenføjning). Et hjørne med en buet væg, eller hvor tre eller flere vægge mødes, beholder geringen. Et hjørne skarpere end cirka 30 grader, eller fladere end cirka 150, falder også tilbage til gering.
- **Forbyd sammenføjning**: klik nær en vægende. Den ende gøres fri: den sammenføjes med intet, hvor væggen end går, indtil du klikker på den igen. Frie ender markeres med et kryds, mens værktøjet er slået til. Den samme kontakt er **Sammenføj ved start / Sammenføj ved slut** i Egenskaber.
- **Lagprioritet**: hvor vægge med lag mødes, skærer det stærkeste lag det svagere, så kerner sammenføjes med kerner, og en finish standser ved det stærkeste lag. Hvert lag har en prioritet fra 0 til 999; som standard kommer den fra lagets funktion (konstruktion 800, underlag 600, isolering 400, membran 300, finish 200, en spalte 100). {{ui:Lagprioritet}} åbner vægopbygningen, hvor kolonnen **Prioritet** sætter lagets eget tal. Lag med samme prioritet standser ved hinanden, og en linje tegnes kun mellem forskellige materialer. Du ser det på planer med **Middel** eller **Fin** detaljeringsgrad, ved hjørner, T-samlinger og krydsninger af to lige vægge. Indstillinger › BimCraft › Vægge › **Rens væglag hvor vægge mødes** slår det fra. Det ændrer kun det, der tegnes inde i væggene: væggenes konturer og mængder bliver, som sammenføjningsstilen giver dem.

## Skift type på mange vægge

At gå fra skitseplaner til arbejdstegninger er mest et skift af type: en generisk væg bliver til den specifikke opbygning. Du tegner ingenting om.

1. Vælg væggene (én, eller flere med {{key:Ctrl}} eller {{key:Shift}}).
2. Tryk i **Egenskaber** på **Skift type…** under Vægtype (eller åbn {{ui:Vægge}} i gruppen Redigér og vælg {{ui:Skift type}}, som åbner den samme liste). Listen åbner inde i **Egenskaber**, i de valgte vægges egen blok. Det er ikke en dialog, og den dækker intet: planen, 3D-visningen og valget fungerer, mens den er åben, og den følger de vægge, du vælger.
3. Listen viser hver vægtype med dens tykkelse og dens LOD-mærke, fx "Væg 230 generisk, LOD 200" og "230 mursten, pudset på begge sider, LOD 300". De typer, de valgte vægge har nu, er markeret. Skriv i **Søg** for at indsnævre: et navn, en tykkelse eller `lod 300`.
4. Klik på en type. Hver valgt væg skifter til den i ét trin, så ét {{ui:Fortryd}} tager hele skiftet tilbage. Det lille x lukker listen.

Hver væg beholder sin placeringslinje. En væg på sin midterlinje vokser til begge sider. En væg, hvis placeringslinje er en flade, beholder den flade og vokser den anden vej, og de vægge, der er forbundet til den, følger med i hjørnerne. Vægge låst til en skiftet væg følger den også. Døre og vinduer bliver i deres vægge og skæres igen til den nye tykkelse.

Efter skiftet viser listen **Hvad flyttede**: hvor mange vægge der er ændret, og til hvad, tykkelsen og LOD før og efter, de vægge, der flyttede sig sidelæns for at beholde deres placeringslinje, de sammenføjede vægge, der fulgte med, de døre og vinduer, der er indsat igen, og hvert rum, hvis areal ændrede sig, med dets areal før og efter. Statuslinjen siger det samme på én linje. Rapporten fortæller kun; den stopper aldrig et skift. At vælge en type i **Egenskaber › Vægtype** gør det samme skift og giver den samme rapport.

To ting stopper et skift, og så ændres intet: en dør eller et vindue, der ikke længere ville passe i sin væg (en væg bliver kortere, hvor et hjørne følger med; gør døren smallere eller flyt den væk fra hjørnet først), og en lås, som skiftet ville bryde (en væg låst til en gitterlinje ved sin midterlinje, mens dens placeringslinje er en flade; lås den op, eller sæt placeringslinjen tilbage på midterlinjen).

En assistent tilsluttet BimCraft kan gøre det samme skift (værktøjerne `wall_types_list` og `walls_swap_type`) og får den samme rapport tilbage.

LOD-mærket for en type sættes i vægopbygningseditoren: se [Vægopbygninger](topic:wall-assemblies).

## Forskydning og kasse-stræk

- **Forskydning**: klik på en væg og derefter på den side, den skal flyttes til, eller skriv afstanden. Væggen flyttes vinkelret på sig selv, og de vægge, der er forbundet til den, strækkes. Sæt flueben i **Kopiér** for i stedet en parallel kopi (den er ikke sammenføjet med originalen).
- **Kasse-stræk**: klik på to hjørner af en kasse, derefter et punkt at flytte fra og et punkt at flytte til. Hver vægende inden i kassen flyttes. En væg helt inde i kassen flyttes, og vægge, der støder op til den, følger med. Vægge, der krydser kassen, strækkes.

## Redigér en målsætning og lås den

Vælg en referencemålsætning (Notér › {{ui:Referencemål}}), og skriv dens værdi i **Egenskaber**: væggen ved dens anden reference flyttes vinkelret på sig selv, den første reference holder, og de sammenføjede vægge følger med. Sæt flueben i **Lås denne målsætning** for at beholde værdien: når den ene væg senere flyttes, følger den anden med. En låst værdi kan ikke skrives over, før du fjerner fluebenet.

## Justér og lås

**Justér og lås**: klik på en væggeflade (eller midterlinjen, nær væggens midte) eller en gitterlinje, derefter på den flade af væggen, der skal bringes ind på linjen. Væggen flyttes vinkelret ind på den. Sæt flueben i **Lås** først for at holde dem flugtet: en hængelås vises i planen, og når den ene væg flyttes, følger den anden. **Egenskaber** for en væg viser dens **Låse**, hver med **Lås op**.

## Lås vægge til gitterlinjer

Vælg en væg, der løber langs en gitterlinje, eller hvis ende sidder på en, og vælg gitterlinjen i **Egenskaber** › **Lås til gitter**. Vælg derefter gitterlinjen med værktøjet {{ui:Gitter}} og skriv en afstand i {{ui:Flyt med}}: linjen flyttes vinkelret på sig selv, og de vægge, der er låst til den, følger med, sammen med deres sammenføjede vægge, i ét trin. En væg låst til en gitterlinje kan ikke flyttes væk fra den af sig selv (flyt linjen, eller lås væggen op). En gitterlinje, der drejes, så en låst væg ikke kan forblive vinkelret på den, afvises. Omdøbes linjen, består låsen; slettes den, fjernes låsen.

## Længde: hvilken side holder, og hvad den måler

- **Vokse fra** (Egenskaber for én væg): **Start holder** (slutenden flytter sig), **Slut holder** (starten flytter sig) eller **Midten holder** (begge ender flytter sig med det halve). Mens du skriver længden, markerer planen det punkt, der holder. Væggen, der er sammenføjet i den ende, der flytter sig, flyttes vinkelret på sig selv og beholder sin vinkel.
- **Mål fra** (ved siden af **Mål** i planen, i Egenskaber og i Indstillinger › BimCraft › Vægge): midterlinjen, den indvendige flade eller den udvendige flade. Længdefeltet og planens vægmål læser den samme, så de stemmer. Den står som standard på midterlinjen.
- For at flytte en væg fri af sine sammenføjninger (de brydes, men væggen beholder sin identitet), hold {{key:Alt}} nede, mens du trækker i dens midtergreb.

## Godt at vide

- Disse opskrifter er vægværktøjets specifikation (sider 4 til 9). Sammenføjningsstil og lagprioritet er bygget til lige vægge. Lagprioritet vises kun i planen (ikke i snit, facader eller 3D, hvor en væg er ét legeme), ikke ved knuder med tre vægge eller flere, og membraner føres ikke videre.
- En sammenføjnings stil gemmes i dens registrering i IFC-filen (navnet på `IfcRelConnectsPathElements`, fx `CadCraft join L butt 1`), så andre programmer stadig læser sammenføjningen, og en ældre fil åbner med geringer.
- Låse og sammenføjninger gemmes i IFC-filen (låsene som `CadCraft_WallHolds` på projektet, sammenføjningerne som `IfcRelConnectsPathElements`), så de er der, når du åbner filen igen.
- Buede vægge kan deles, sammenføjes igen og have et stykke taget ud. De forskydes ikke og låses ikke.
- Se også [Tegn vægge](topic:draw-walls), [Ændr en væg, dør eller et vindue](topic:change-a-wall-or-door) og [Vægform](topic:wall-shape).
