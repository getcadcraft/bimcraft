---
title: Veggoppbygninger og referansemål
summary: Bygg dine egne veggtyper lag for lag med en tydelig kjerne, hold et prosjektmaterialbibliotek, og dimensjoner til flater og senterlinjer som forblir festet når veggen endrer seg.
keywords: lod, detaljeringsnivå, lod 200, lod 300, generisk, veggoppbygning, veggtype, lag, kjerne, kjerneflate, kjernesenterlinje, spalte, luftspalte, membran, husfolie, materialbibliotek, materialer, tykkelse, referansemål, måltilsetting, assosiativ, plasseringslinje, kledning, stender, gipsplate
from: 4ea8fbf5
---

## Det du skal gjøre

Lag en veggtype som samsvarer med veggen du skal bygge: kledning, bordkledning, en 5½ in stenderkjerne og gipsplate, eller murstein, en luftspalte og en trevegg. Merk hvilke lag som er kjernen, slik at en måltilsetting eller en plasseringslinje kan holde kjernen mens overflatene rundt den endrer seg. Dimensjoner deretter vegger til flatene og senterlinjene du mener.

## Lag en veggtype

1. Start en bygning eller åpne en IFC-modell, slå på {{ui:Tegn}}, og velg verktøyet {{ui:Vegg}}.
2. Velg en startmal i {{ui:Veggtype}} og åpne {{ui:Veggoppbygninger…}}. En startmal åpnes som en kopi; gi den nye typen et navn.
3. Lagene går fra utsiden øverst i listen til innsiden nederst. Velg materialet for hvert lag, skriv inn tykkelsen (prosjektenheter, eller eksplisitte verdier som `12.7 mm` eller `1/2"`), velg funksjonen (overflate, underlag, konstruksjon, isolasjon, membran) og kryss av for **Kjerne**-lagene. Kjernen må være én sammenhengende gruppe.
4. {{ui:Legg til lag}} legger til et lag, {{ui:Legg til spalte}} legger til en luftspalte med ventilasjon (uspesifisert, uventilert, ventilert), og {{ui:Legg til membran}} legger til et lag uten nominell tykkelse, for eksempel husfolie. Pilene flytter et lag utover eller innover.
5. Forhåndsvisningen tegner lagene i skala, med kjernen understreket og nummerert som radene, og dimensjonerer hvert lag, kjernen og totalen. {{ui:Lagre type}}.

Den nye typen finnes i listen til verktøyet Vegg og i **Egenskaper** for en valgt vegg. Når du lagrer en type du redigerer, endres hver vegg som bruker den. {{ui:Dupliser type}} lager en egen type og gir den bare til veggene du valgte. Hver lagring er ett trinn du kan angre, sammen med veggene den flytter, dørene og vinduene i dem og målene som avhenger av dem.

En spalte øker bredden. En membran øker ikke: den blir i typen slik at en tabell kan finne den senere, og den regnes ikke med i veggens eller kjernens tykkelse. En spalte eller en membran regnes aldri som massivt materiale. I en fil lagret som IFC2X3 beholdes en membran i typens post, men utelates fra de fysiske materiallagene.

## Merk en type med detaljeringsnivå (LOD)

En type kan vise hvor detaljert den er. I editoren tilbyr **Detaljeringsnivå (LOD)** den faste skalaen 100, 200, 300, 350, 400 og 500, eller **Ikke angitt**. En generisk vegg («Vegg 230 generisk») er LOD 100 eller 200; en spesifikk oppbygning med de faktiske lagene («230 leirmurstein, pusset på begge sider») er LOD 300 eller mer. Merket er ditt å sette: BimCraft beregner det ikke, og startmalene har ingen.

Merket vises ved siden av typens navn i listen til verktøyet Vegg, i en veggs Egenskaper og i listen til [Bytt type](topic:wall-tools). Rapporten etter et bytte sier om nivået gikk opp eller ned. For å se det i tabellen **Vegger etter type** og dens CSV, kryss av for **Vis LOD for hver veggtype i veggtabellen** under Innstillinger › BimCraft › Vegger: en siste kolonne, LOD, legges til. Det lagres i IFC-filen sammen med typen (i typens egenskapssett `CadCraft_WallType`, som egenskapen `LOD` og i typens post), slik at det er der når du åpner filen igjen. Merket gjelder foreløpig bare veggtyper, ikke enkeltelementer eller andre elementtyper.

## Generiske vegger for skissestadiet

Listen over veggtyper i verktøyet Vegg starter med to **generiske** vegger: **Generisk vegg 200 mm (utvendig)** og **Generisk vegg 100 mm (innvendig)**. Hver er ett lag av det generiske materialet, merket LOD 200. Bruk dem når du vet hvor veggene skal være, men ikke ennå hva de er laget av.

En vegg hvis type er merket **LOD 100** eller **LOD 200**, tegnes i hver plan som **ett skravert bånd**, på alle detaljnivåer: ingen lag, ingen laglinjer. Det gjelder de generiske veggene og enhver egen type du merker LOD 100 eller 200. Selve veggen er komplett: den har sin tykkelse, sine dører og vinduer, sine rom og sine mengder.

For å utvikle den bytter du typen (Rediger › Vegger › **Bytt type**, eller Type i Egenskaper). Veggen tegnes aldri på nytt: samme vegg får den nye typen, og rapporten sier hva som flyttet. En type merket LOD 300 eller høyere tegnes med lagene sine som før.

For å tegne hver vegg etter lagene, uansett merke: Innstillinger › BimCraft › Vegger, fjern haken for **Tegn vegger av en LOD 100- eller LOD 200-type som ett skravert bånd**.

Startdørene og -vinduene er også generiske typer (en størrelse og en åpningsmåte, ikke et produkt). Med **Vis LOD for hver veggtype i veggtabellen** på, viser tabellene for dører og vinduer LOD 200 for dem.

## Gi en type mengdedata

I veggtypeeditoren tar **Mengdedata** det en kalkulator trenger å vite om veggen, én gang for typen: **enheten** den er bygget av (en murstein eller blokk: navn, lengde, høyde og bredde), **mørtelen** (navn og fugetykkelse) og en **sats** med valutakode (tre bokstaver, som USD, EUR eller ZAR) og hva den gjelder per: en kvadratmeter eller kvadratfot nettoveggareal, en meter eller fot veggelengde, eller per vegg. Alt er valgfritt.

Det lagres med typen i filen. Hver vegg av typen rapporterer deretter det: {{ui:Tabeller}} › **Vegg-typer: mengdedata** lister enheten, mørtelen, satsen og satsen ganget med den målte mengden, og mengdeuttaket som sendes til TakeoffCraft bærer det på den veggtypens post. Endrer du det på typen, følger alle veggene.

Tre felt er til for å telle murstein eller blokker og mørtel:

- **Svinn på enheter, %** legges til antall enheter. La det stå tomt for å bruke tallet fra prosjektets målemetode, eller ingen hvis metoden ikke har noe. Skriv 0 for å ikke ha svinn uansett hva metoden sier.
- **Ekstra mørtel, %** er for innsnitt eller perforasjoner som tar mørtel. Det legges til mørtelvolumet. La det stå tomt for ingen.
- **Lag bygget av denne enheten**: kryss av for hvert lag som er et blad av denne murstein eller blokk. En hulmur har to. Uten noe avkrysset telles kjernelagene.

Satsen kan også være per enhet som skal bestilles, per 1000 enheter som skal bestilles, eller per m³ mørtel. Der enheten har en lengde og en høyde, viser **Vegg-typer: mengdedata** enhetene per m² (eller ft²) av ett blad, enhetene som skal bestilles og mørtelvolumet. Formlene står i [Murstein, blokker og mørtel](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). En type har én enhet: to blad av ulike enheter (et murstein-ytterblad og et blokk-innerblad) kan ikke telles på én type ennå.

## Hold kjernen i ro

I **Egenskaper** setter du en veggs **Plasseringslinje** til en kjerneflate eller kjernesenterlinjen. Når du senere legger til eller tykkere en overflate, blir den linjen stående der den er, og veggen vokser rundt den. Vegger som møter den i et hjørne følger, slik at rette hjørner forblir lukket.

## Prosjektmaterialer

{{ui:Materialbibliotek…}} lister prosjektets materialer: navn, kategori, tykkelsen et lag starter med, visningsfarge, skravurmønster og notater. Biblioteket lagres i IFC-filen sammen med prosjektet. Når du velger et materiale for et lag, får laget materialets standardtykkelse, som du deretter kan endre. Redigering av biblioteket senere endrer aldri vegger du allerede har tegnet. Du kan også lage et materiale fra listen over lagets materialer med {{ui:+ Nytt materiale…}}.

## Referansemål

{{ui:Merknad}} › {{ui:Referansemål}}: velg horisontal, vertikal eller innrettet, og en referanse: utvendig eller innvendig overflateflate, utvendig eller innvendig kjerneflate, veggens senterlinje eller kjernesenterlinjen. Velg den første veggen, endre referansen om du vil, velg den andre, og klikk så der måltilsettingens linje skal ligge. To referanser på én vegg måler dens totale tykkelse eller kjernetykkelse. {{ui:Referansemål…}} lister visningens måltilsettinger, også de som har mistet en vegg, med Egenskaper, Bind referanser på nytt og Slett.

### Sett mål på hele planen etter regler

{{ui:Merknad}} › {{ui:Mål planen…}} setter mål på utsiden av etasjeplanen du ser på: den samlede størrelsen i hver retning, og en rad med mål langs hver ytre kant (veggender, vegger som møter kanten, og dørene og vinduene i den), med radene plassert fritt fra bygningen. Kryss av det du vil ha, les antallet, og klikk så {{ui:Legg til målene}}. De er vanlige referansemål, så de følger veggene når veggene flyttes, og du kan velge, flytte eller slette hvert av dem. Hele settet er ett trinn du kan angre, og å kjøre det en gang til lager ingen dobbel.

Den setter mål bare på utsiden. Rom inne i bygningen, buede vegger og vegger som ikke står vinkelrett på planen, overlates til håndverktøyene. Rutenettlinjer er ikke vegger, så mål mellom rutenettet lages ikke her. Din tilkoblede assistent kan gjøre det samme med `plan_dimension`.

Målet er knyttet til veggene, ikke til et sted på skjermen: når en vegg flyttes eller typen endres, følger verdien. Er en vegg slettet, sier målet at det er uløst og viser ikke noe tall, til du binder det på nytt eller angrer. Lengdefeltet tar også plankoordinater som `10',12'` for en målelinje på et eksakt sted.

Mål gjelder for vegger BimCraft har tegnet, i planvisninger. Ikke bygget ennå: mål i snitt og fasader, til dører, vinduer og andre komponenter, og konstruksjonslag tegnet i plan og snitt. Se [Hva som ikke er bygget ennå](topic:not-built-yet).

## Se også

[Tegn vegger](topic:draw-walls), [Endre en vegg, dør eller vindu](topic:change-a-wall-or-door), [Egenskaper](topic:properties-panel).
