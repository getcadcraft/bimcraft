---
title: Georeferera med valfri projektion
summary: Tala om för BimCraft vilket kartsystem en modells koordinater är i, från hela EPSG-listan, valfri UTM-zon eller en projektion du definierar själv, och använd det för Plats, kartlager och punktmoln.
keywords: projektion, koordinatsystem, crs, epsg, utm, utm-zon, egen projektion, proj4, proj-sträng, prj, wkt, georeferens, georeferering, kartkonvertering, ifcprojectedcrs, mina projektioner, latitud, longitud, östvärde, nordvärde, lambert, gauss-kruger, state plane, nationellt rutnät
from: 6894c1f2
---

Vissa planer är ritade i ett kartsystem som inte finns i en kort lista: en UTM-zon, ett nationellt rutnät eller en projektion som någon skrev ner som en textdefinition. {{ui:Mät}} › {{ui:Koordinatsystem…}} låter dig ange vilket system modellen använder.

## Välj systemet för en modell

1. Öppna modellen, välj {{ui:Mät}} och sedan {{ui:Koordinatsystem…}}.
2. Skriv i sökrutan. Något av detta fungerar:
   - ett EPSG-nummer: `32633` eller `EPSG:2277`;
   - en UTM-zon: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - ord ur namnet: `lambert 93`, `mga zone 56`, `texas central`;
   - en projektionsdefinition: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, eventuellt med ett namn före (`Mitt rutnät = +proj=…`);
   - texten i en `.prj`-fil, eller använd {{ui:Läs in en .prj-fil…}}.
3. Välj ett resultat och klicka sedan på {{ui:Använd det här systemet}}.

Valet sparas i modellen (en egenskapsuppsättning med namnet `CadCraft_CRS` på projektet), så att det öppnas igen tillsammans med modellen. Spara modellen för att behålla det. {{ui:Ta bort den från modellen}} går tillbaka till det som filen säger.

Om din definition ger samma koordinater som ett listat EPSG-system säger BimCraft det och använder den koden; när flera listade system delar samma matematik nämner den de andra också.

## Mina projektioner

En definition du klistrar in, eller en `.prj` du läser in, kan sparas med {{ui:Spara under Mina projektioner}}. Listan finns på den här enheten (i den här webbläsaren) och erbjuds nästa gång du öppnar väljaren.

## Vad som använder den

- {{ui:Mät}} › {{ui:Plats}} omvandlar en vald punkt till latitud och longitud genom modellens system. Den brukade stanna med en notering när filen angav sitt kartsystem utan EPSG-kod; med ett sparat val ger den svaret.
- Kartlagren under modellen använder samma system. Ett punktmoln eller en terrängfil i ett annat system erbjuds modellens (se nedan).
- {{ui:Inställningar}} › {{ui:BimCraft}} › {{ui:Plats}} › {{ui:Välj ett annat system…}} anger vad {{ui:Plats}} också visar: latitud och longitud i valfritt listat geografiskt system, eller östvärde och nordvärde i valfritt projicerat system, utöver modellens eget.

## En modell som inte är på kartan än

Om filen saknar en kartkonvertering öppnar valet av ett system {{ui:Placera den här modellen på kartan}}. Du kan också öppna den från {{ui:Mät}} › {{ui:Kartorigo…}}.

1. Ange modellens origo som östvärde och nordvärde i systemet, eller skriv en latitud och longitud och välj {{ui:Konvertera till östvärde och nordvärde}}.
2. Ange rotationen mot rutnätsnord (grader, moturs; 0 innebär att modellens Y-axel pekar mot rutnätsnord) och origots höjd.
3. Skalan börjar med enhetsskillnaden mellan modellen och kartan (0.001 för en millimetermodell på ett meterrutnät). Ändra den bara för en kombinerad mark-till-rutnät-faktor.
4. Välj {{ui:Placera på kartan}}. Ett ångra-steg skriver en IfcProjectedCRS och en IfcMapConversion (IFC4). Modellen själv flyttar sig inte.

En IFC2X3-fil har varken den ena eller den andra entiteten. BimCraft skriver samma värden på det sätt den standarden tillåter: buildingSMART:s egenskapsuppsättningar `ePSet_MapConversion` och `ePSet_ProjectedCRS` på projektet, platsens latitud och longitud, och sann nord. Dialogrutan säger det. Spara modellen för att behålla det.

## En modell som redan är på kartan

När filen redan placerar sig på kartan och du väljer ett annat system frågar BimCraft:

- {{ui:Ändra bara det Plats visar}} behåller filens egna georeferens och använder ditt val för {{ui:Plats}}, kartlagren och punktmolnen (modellens tal tolkas då som att de ligger i det nya systemet).
- {{ui:Flytta modellen till det här systemet}} skriver om georeferensen: origo går genom projektionen (östvärde, nordvärde, höjd, rotation och skala) och IfcProjectedCRS (namn, datum, projektion, zon, enhet) skrivs om, så att den sparade IFC:n anger det nya systemet. Platsen på jorden är densamma: origo behåller sin latitud och longitud. Element inne i modellen ändras aldrig; bara georeferensen gör det.

Dialogrutan visar det gamla och det nya origot innan du väljer. Att flytta dit och sedan tillbaka för origot inom en millimeter.

## Punktmoln och terräng i ett annat system

Ett moln eller en mätfil bär sitt eget system (LAS, LAZ, E57, GeoTIFF) eller inget. När det skiljer sig från modellens erbjuder BimCraft {{ui:Projicera om till modellens system}}. Punkterna flyttas i omgångar (i en bakgrundsprocess när det är många, så att sidan förblir användbar), filen på din dator rörs inte, och statusraden säger vad som gjordes. Öppna filen igen för att gå tillbaka till dess eget system. För ett moln som redan är öppet gör {{ui:Projicera om till modellen…}} i molnraden samma sak.

Om filen inte anger något system frågar BimCraft {{ui:Vilket system ligger den här filen i?}}: välj med {{ui:Välj systemet…}} och svaret kommer ihåg för den filen på den här enheten. {{ui:Behåll filens eget system}} lämnar punkterna som de är.

## När något är ungefärligt

Problem listas i dialogrutan och i panelen Problem, aldrig tyst:

- En plats utanför området som systemet är gjort för: talen fungerar, men förvrängningen ökar.
- Datumförskjutningar som kräver en rutnätsfil (NADCON, NTv2 och liknande) finns inte. System på ett annat datum flyttas med den rutnätsfria förskjutning som EPSG-registret listar, och resultatet är ungefärligt inom den noggrannhet som anges, som meddelandet anger i meter.
- En punkt som inte kan projiceras lämnas ut och räknas; en fil över storleksgränsen avvisas med gränsen angiven.

:::tip
Kartkoordinater kräver en kartkonvertering. En fil utan en placeras på kartan med {{ui:Kartorigo…}}.
:::

:::note
Förflyttning mellan datum utan rutnätsfil är bra inom några meter; resultatet från Plats säger hur mycket när katalogen känner till det.
:::
