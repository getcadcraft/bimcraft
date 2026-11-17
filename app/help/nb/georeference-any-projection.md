---
title: Georeferering med en hvilken som helst projeksjon
summary: Si fra til BimCraft hvilket kartsystem en modells koordinater er i, fra hele EPSG-listen, enhver UTM-sone eller en projeksjon du definerer selv, og bruk det til posisjon, kartlag og punktskyer.
keywords: projeksjon, koordinatsystem, crs, epsg, utm, utm-sone, egendefinert projeksjon, proj4, proj-streng, prj, wkt, georeferering, kartkonvertering, ifcprojectedcrs, mine projeksjoner, breddegrad, lengdegrad, østkoordinat, nordkoordinat, lambert, gauss-kruger, statsplan, nasjonalt rutenett
from: 6894c1f2
---

Noen planer er tegnet i et kartsystem som ikke står i en kort liste: en UTM-sone, et nasjonalt rutenett, eller en projeksjon som noen har skrevet ned som en tekstdefinisjon. {{ui:Mål}} › {{ui:Koordinatsystem…}} lar deg angi hvilket en modell bruker.

## Velg systemet for en modell

1. Åpne modellen, velg {{ui:Mål}}, og så {{ui:Koordinatsystem…}}.
2. Skriv i søkefeltet. Alle disse virker:
   - et EPSG-nummer: `32633` eller `EPSG:2277`;
   - en UTM-sone: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - ord fra navnet: `lambert 93`, `mga zone 56`, `texas central`;
   - en projeksjonsdefinisjon: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, valgfritt med et navn foran (`My grid = +proj=…`);
   - innholdet i en `.prj`-fil, eller bruk {{ui:Last inn en .prj-fil…}}.
3. Velg et resultat, og så {{ui:Bruk dette systemet}}.

Valget lagres i modellen (et egenskapssett kalt `CadCraft_CRS` på prosjektet), slik at det åpnes igjen med modellen. Lagre modellen for å beholde det. {{ui:Fjern det fra modellen}} går tilbake til det filen sier.

Gir definisjonen din samme koordinater som et oppført EPSG-system, sier BimCraft det og bruker den koden. Når flere oppførte systemer har samme matematikk, nevner den dem også.

## Mine projeksjoner

En definisjon du limer inn, eller en `.prj` du laster inn, kan beholdes med {{ui:Behold i Mine projeksjoner}}. Listen ligger på denne enheten (denne nettleseren) og tilbys neste gang du åpner velgeren.

## Hva som bruker det

- {{ui:Mål}} › {{ui:Posisjon}} gjør et valgt punkt til breddegrad og lengdegrad gjennom modellens system. Den stoppet med en merknad før når filen oppga kartsystemet sitt uten en EPSG-kode; med et lagret valg gir den svaret.
- Kartlagene under modellen bruker det samme systemet. En punktsky eller en terrengfil i et annet system tilbys modellens (se nedenfor).
- {{ui:Innstillinger}} › {{ui:BimCraft}} › {{ui:Posisjon}} › {{ui:Velg et annet system…}} angir hva {{ui:Posisjon}} også rapporterer: breddegrad og lengdegrad i et oppført geografisk system, eller øst- og nordkoordinater i et oppført projisert system, i tillegg til modellens eget.

## En modell som ikke er på kartet ennå

Hvis filen ikke har noen kartkonvertering, åpner valg av et system {{ui:Plasser denne modellen på kartet}}. Du kan også åpne den fra {{ui:Mål}} › {{ui:Kartorigo…}}.

1. Gi modellens origo som øst- og nordkoordinater i systemet, eller skriv inn en breddegrad og lengdegrad og velg {{ui:Konverter til østkoordinater og nordkoordinater}}.
2. Gi rotasjonen mot rutenettets nord (grader, mot klokken; 0 betyr at modellens Y-akse peker mot rutenettets nord) og høyden til origo.
3. Målestokken starter med enhetsforskjellen mellom modellen og kartet (0.001 for en millimetermodell på et meterrutenett). Endre den bare for en kombinert bakke-til-rutenett-faktor.
4. Velg {{ui:Plasser på kartet}}. Ett trinn å angre skriver en IfcProjectedCRS og en IfcMapConversion (IFC4). Selve modellen flytter seg ikke.

En IFC2X3-fil har ingen av disse entitetene. BimCraft skriver de samme tallene slik den standarden tillater: buildingSMART-egenskapssettene `ePSet_MapConversion` og `ePSet_ProjectedCRS` på prosjektet, byggeplassens breddegrad og lengdegrad, og geografisk nord. Dialogen sier det. Lagre modellen for å beholde det.

## En modell som allerede er på kartet

Når filen allerede plasserer seg på kartet og du velger et annet system, spør BimCraft:

- {{ui:Endre bare det Posisjon viser}} beholder filens egen georeferering og bruker ditt valg for {{ui:Posisjon}}, kartlagene og punktskyene (modellens tall leses da som om de er i det nye systemet).
- {{ui:Flytt modellen til dette systemet}} skriver om georefereringen: origo går gjennom projeksjonen (øst, nord, høyde, rotasjon og målestokk), og IfcProjectedCRS (navn, datum, projeksjon, sone, enhet) skrives om, slik at den lagrede IFC-filen sier det nye systemet. Stedet på jorden er det samme: origo beholder sin breddegrad og lengdegrad. Elementene inne i modellen endres aldri; bare georefereringen gjør det.

Dialogen viser gammelt og nytt origo før du velger. Å flytte dit og tilbake gir origo tilbake innen en millimeter.

## Punktskyer og terreng i et annet system

En sky eller en måleundersøkelsesfil har sitt eget system (LAS, LAZ, E57, GeoTIFF) eller ingen. Når det avviker fra modellens, tilbyr BimCraft {{ui:Projiser på nytt til modellens system}}. Punktene flyttes i grupper (i en bakgrunnsprosess når det er mange, slik at siden forblir brukbar), filen på datamaskinen din røres ikke, og statuslinjen sier hva som ble gjort. Åpne filen igjen for å gå tilbake til dens eget system. For en sky som allerede er åpen, gjør {{ui:Projiser på nytt til modellen…}} i skylinjen det samme.

Hvis filen ikke nevner noe system, spør BimCraft {{ui:Hvilket system er denne filen i?}}: velg det med {{ui:Velg systemet…}}, og svaret huskes for den filen på denne enheten. {{ui:Behold filens eget system}} lar punktene være som de er.

## Når noe er tilnærmet

Problemer listes i dialogen og i Problemer-panelet, aldri stille:

- Et sted utenfor området systemet er laget for: tallene fungerer, men forvrengningen vokser.
- Datumforskyvninger som krever en rutenettfil (NADCON, NTv2 og lignende) er ikke tilgjengelige. Systemer på et annet datum flyttes med det rutenettfrie skiftet EPSG-registeret oppgir, og resultatet er tilnærmet innen den nøyaktigheten som er oppgitt, som meldingen gir i meter.
- Et punkt som ikke kan projiseres, utelates og telles; en fil over størrelsesgrensen avvises med grensen oppgitt.

:::tip
Kartkoordinater krever en kartkonvertering. En fil uten en plasseres på kartet med {{ui:Kartorigo…}}.
:::

:::note
Flytting mellom datum uten en rutenettfil er god til noen få meter; resultatet fra {{ui:Posisjon}} sier hvor langt det er når katalogen kjenner det.
:::
