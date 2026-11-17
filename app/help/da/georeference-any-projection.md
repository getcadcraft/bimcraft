---
title: Georeferér med en vilkårlig projektion
summary: Fortæl BimCraft, hvilket kortsystem en models koordinater er i, fra hele EPSG-listen, enhver UTM-zone eller en projektion, du selv definerer, og brug det til Placering, kortlag og punktskyer.
keywords: projektion, koordinatsystem, crs, epsg, utm, utm-zone, brugerdefineret projektion, proj4, proj-streng, prj, wkt, georeferering, kortkonvertering, ifcprojectedcrs, mine projektioner, breddegrad, længdegrad, øst, nord, lambert, gauss-kruger, state plane, nationalt net
from: 6894c1f2
---

Nogle planer er tegnet i et kortsystem, der ikke står på en kort liste: en UTM-zone, et nationalt net eller en projektion, nogen har skrevet ned som en tekstdefinition. {{ui:Mål}} › {{ui:Koordinatsystem…}} lader dig sige, hvilket en model bruger.

## Vælg systemet for en model

1. Åbn modellen, vælg {{ui:Mål}} og derefter {{ui:Koordinatsystem…}}.
2. Skriv i søgefeltet. Alle disse virker:
   - et EPSG-nummer: `32633` eller `EPSG:2277`;
   - en UTM-zone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - ord fra navnet: `lambert 93`, `mga zone 56`, `texas central`;
   - en projektionsdefinition: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, eventuelt med et navn foran (`Mit net = +proj=…`);
   - teksten i en `.prj`-fil, eller brug {{ui:Indlæs en .prj-fil…}}.
3. Vælg et resultat, og klik derefter på {{ui:Brug dette system}}.

Valget gemmes i modellen (et egenskabssæt ved navn `CadCraft_CRS` på projektet), så det åbnes igen med modellen. Gem modellen for at beholde det. {{ui:Fjern det fra modellen}} går tilbage til det, filen siger.

Hvis din definition giver de samme koordinater som et opført EPSG-system, siger BimCraft det og bruger den kode; når flere opførte systemer deler den samme matematik, nævner den de andre også.

## Mine projektioner

En definition, du indsætter, eller en `.prj`, du indlæser, kan gemmes med {{ui:Gem under Mine projektioner}}. Listen ligger på denne enhed (denne browser) og tilbydes, næste gang du åbner vælgeren.

## Hvad der bruger den

- {{ui:Mål}} › {{ui:Placering}} omregner et valgt punkt til breddegrad og længdegrad gennem modellens system. Den plejede at stoppe med en note, når filen navngav sit kortsystem uden en EPSG-kode; med et gemt valg giver den svaret.
- Kortlagene under modellen bruger det samme system. En punktsky eller en terrænfil i et andet system tilbydes modellens (se nedenfor).
- {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Placering}} › {{ui:Vælg et andet system…}} angiver, hvad {{ui:Placering}} også rapporterer: breddegrad og længdegrad i ethvert opført geografisk system, eller øst og nord i ethvert projiceret system, ud over modellens eget.

## En model, der endnu ikke er på kortet

Hvis filen ikke har en kortkonvertering, åbner valget af et system {{ui:Placér denne model på kortet}}. Du kan også åbne den fra {{ui:Mål}} › {{ui:Kortorigo…}}.

1. Angiv modellens origo som øst og nord i systemet, eller skriv en breddegrad og længdegrad og vælg {{ui:Konvertér til øst og nord}}.
2. Angiv rotationen til gitternord (grader, mod uret; 0 betyder, at modellens Y-akse peger mod gitternord) og origoens højde.
3. Skalaen starter med enhedsforskellen mellem modellen og kortet (0.001 for en millimeter-model på et meter-net). Ændr den kun for en kombineret faktor fra terræn til net.
4. Vælg {{ui:Placér på kortet}}. Ét fortrydelsestrin skriver en IfcProjectedCRS og en IfcMapConversion (IFC4). Selve modellen flytter sig ikke.

En IFC2X3-fil har ingen af de to entiteter. BimCraft skriver de samme tal på den måde, standarden tillader: buildingSMART-egenskabssættene `ePSet_MapConversion` og `ePSet_ProjectedCRS` på projektet, stedets breddegrad og længdegrad og rigtigt nord. Dialogen siger det. Gem modellen for at beholde det.

## En model, der allerede er på kortet

Når filen allerede placerer sig på kortet, og du vælger et andet system, spørger BimCraft:

- {{ui:Ændr kun det, Placering viser}} beholder filens egen georeference og bruger dit valg til {{ui:Placering}}, kortlagene og punktskyerne (modellens tal læses så som værende i det nye system).
- {{ui:Flyt modellen til dette system}} omskriver georeferencen: origo går gennem projektionen (øst, nord, højde, rotation og skala), og IfcProjectedCRS (navn, datum, projektion, zone, enhed) omskrives, så den gemte IFC siger det nye system. Stedet på jorden forbliver det samme: origo beholder sin breddegrad og længdegrad. Elementer inde i modellen ændres aldrig; kun georeferencen ændres.

Dialogen viser den gamle og den nye origo, før du vælger. At flytte derhen og tilbage igen returnerer origo til inden for en millimeter.

## Punktskyer og terræn i et andet system

En sky eller en målingsfil bærer sit eget system (LAS, LAZ, E57, GeoTIFF) eller intet. Når det afviger fra modellens, tilbyder BimCraft {{ui:Omprojicér til modellens system}}. Punkterne flyttes i batches (i en baggrundsproces, når der er mange, så siden forbliver brugbar), filen på din computer røres ikke, og statuslinjen siger, hvad der blev gjort. Åbn filen igen for at gå tilbage til dens eget system. For en sky, der allerede er åben, gør {{ui:Omprojicér til modellen…}} i skyens bjælke det samme.

Hvis filen ikke navngiver et system, spørger BimCraft {{ui:Hvilket system er denne fil i?}}: vælg det med {{ui:Vælg systemet…}}, og svaret huskes for den fil på denne enhed. {{ui:Behold filens eget system}} lader punkterne være, som de er.

## Når noget er omtrentligt

Problemer vises i dialogen og i Problemer-panelet, aldrig stille:

- Et sted uden for det område, systemet er lavet til: tallene virker, men forvrængningen vokser.
- Datumskift, der kræver en rastfil (NADCON, NTv2 og lignende), er ikke tilgængelige. Systemer på et andet datum flyttes med det rastfri skift, EPSG-registret angiver, og resultatet er omtrentligt inden for den nøjagtighed, meddelelsen angiver i meter.
- Et punkt, der ikke kan projiceres, udelades og tælles; en fil over størrelsesgrænsen afvises, og grænsen angives.

:::tip
Kortkoordinater kræver en kortkonvertering. En fil uden en placeres på kortet med {{ui:Kortorigo…}}.
:::

:::note
Flytning mellem datum uden en rastfil er god til nogle få meter; Placering-resultatet siger, hvor meget, når kataloget kender det.
:::
