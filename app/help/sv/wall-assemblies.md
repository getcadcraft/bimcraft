---
title: Väggsammansättningar och referensmått
summary: Bygg egna väggtyper skikt för skikt med en tydlig kärna, behåll ett projektmaterialbibliotek och sätt mått till ytor och mittlinjer som följer med när väggen ändras.
keywords: lod, utvecklingsnivå, lod 200, lod 300, generisk, väggsammansättning, väggtyp, skikt, kärna, kärnyta, kärnmittlinje, luftspalt, membran, husfolie, materialbibliotek, material, tjocklek, referensmått, mått, associativ, placeringslinje, fasadbeklädnad, regel, gips
from: 4ea8fbf5
---

## Vad du gör

Gör en väggtyp som passar väggen du ska bygga: fasadbeklädnad, underlagsskiva, en 5½-tums regelkärna med gips, eller tegel, en luftspalt och en trästomsvägg. Markera vilka skikt som är kärnan, så att ett mått eller en placeringslinje kan hålla kärnan kvar när ytskikten runt den ändras. Sätt sedan mått på väggar till de ytor och mittlinjer du menar.

## Gör en väggtyp

1. Starta en byggnad eller öppna en IFC-modell och slå på {{ui:Rita}}, välj sedan verktyget {{ui:Vägg}}.
2. Välj en startmall i {{ui:Väggtyp}} och öppna {{ui:Väggsammansättningar…}}. En startmall öppnas som en kopia; ge den nya typen ett namn.
3. Skikten går från utsidan överst i listan till insidan längst ned. Välj materialet för varje skikt, skriv dess tjocklek (projektets enheter, eller explicita värden som `12.7 mm` eller `1/2"`), välj dess funktion (yta, underlag, konstruktion, isolering, membran) och bocka i **Kärna**-skikten. Kärnan måste vara en sammanhängande grupp.
4. {{ui:Lägg till skikt}} lägger till ett skikt, {{ui:Lägg till luftspalt}} lägger till en luftspalt med dess ventilation (ej angiven, oventilerad, ventilerad), {{ui:Lägg till membran}} lägger till ett skikt utan nominell tjocklek, till exempel husfolie. Pilarna flyttar ett skikt utåt eller inåt.
5. Förhandsvisningen ritar skikten i skala med kärnan understruken, numrerade som raderna, och sätter mått på varje skikt, kärnan och totalen. {{ui:Spara typ}}.

Den nya typen finns i listan i verktyget {{ui:Vägg}} och i en vald väggs **Egenskaper**. Om du sparar en typ du redigerar ändras varje vägg som använder den; {{ui:Duplicera typ}} gör en separat typ och ger den bara de väggar du valt. Varje sparning är ett ångra-steg, tillsammans med väggarna den flyttar, dörrarna och fönstren i dem och de mått som beror av dem.

En luftspalt ökar bredden. Ett membran ökar inte bredden: det finns kvar i typen så att en förteckning kan hitta det senare, och det räknas inte med i väggens eller kärnans tjocklek. En luftspalt eller ett membran räknas aldrig som massivt material. I en fil sparad som IFC2X3 finns ett membran kvar i typens post men utelämnas från dess fysiska materialskikt.

## Märk en typ med dess utvecklingsnivå (LOD)

En typ kan ange hur utvecklad den är. I redigeraren erbjuder **Utvecklingsnivå (LOD)** den fasta skalan 100, 200, 300, 350, 400 och 500, eller **Inte angiven**. En generisk vägg ("Vägg 230 generisk") är LOD 100 eller 200; en specifik uppbyggnad med sina verkliga skikt ("230 lertegel, putsad på båda sidor") är LOD 300 eller högre. Märkningen är din att ange: BimCraft räknar inte ut den, och startmallarna har ingen.

Märkningen visas bredvid typens namn i listan över väggtyper i verktyget {{ui:Vägg}}, i en väggs Egenskaper och i listan för [Byt typ](topic:wall-tools), och rapporten efter ett byte säger om nivån gick upp eller ner. För att se den i förteckningen **Väggar efter typ** och dess CSV, bocka i **Visa varje väggtyps LOD i väggförteckningen** under Inställningar › BimCraft › {{ui:Väggar}}: en sista kolumn, LOD, läggs till. Den sparas i IFC-filen med typen (i typens egenskapsuppsättning `CadCraft_WallType`, som egenskapen `LOD` och i typens post), så den finns kvar när du öppnar filen igen. Märkningen gäller just nu bara väggtyper, inte enskilda element eller andra typer av element.

## Generiska väggar för skissstadiet

Typlistan i verktyget {{ui:Vägg}} börjar med två **generiska** väggar: **Generisk vägg 200 mm (utvändig)** och **Generisk vägg 100 mm (invändig)**. Var och en är ett skikt av det generiska materialet, märkt LOD 200. Använd dem när du vet var väggarna ska gå men ännu inte vad de är gjorda av.

En vägg vars typ är märkt **LOD 100** eller **LOD 200** ritas i varje plan som **ett skrafferat band**, på varje detaljnivå: inga skikt, inga skiktlinjer. Det gäller de generiska väggarna och alla egna typer som du märker LOD 100 eller 200. Själva väggen är komplett: den har sin tjocklek, sina dörrar och fönster, sina rum och sina mängder.

För att utveckla den byter du dess typ (Redigera › {{ui:Väggar}} › **{{ui:Byt typ}}**, eller Typ i Egenskaper). Väggen ritas aldrig om: samma vägg får den nya typen, och rapporten säger vad som flyttades. En typ märkt LOD 300 eller högre ritas med sina skikt som tidigare.

För att rita varje vägg efter dess skikt oavsett märkning: Inställningar › BimCraft › {{ui:Väggar}}, avmarkera **Rita väggar av en LOD 100- eller LOD 200-typ som ett skrafferat band**.

Startdörrarna och -fönstren är också generiska slag (en storlek och ett sätt att öppnas, inte en produkt). Med **Visa varje väggtyps LOD i väggförteckningen** på visar förteckningarna Dörrar och Fönster LOD 200 för dem.

## Ge en typ dess mängdavtagningsdata

I redigeraren för väggtyper tar **Mängdavtagningsdata** med det en kalkylator behöver veta om väggen, en gång för typen: **enheten** den är byggd av (ett tegel eller ett block: dess namn, längd, höjd och bredd), **murbruket** (namn och fogtjocklek) och en **kostnad** med dess valutakod (tre bokstäver, till exempel USD, EUR eller ZAR) och vad den gäller per: en kvadratmeter eller kvadratfot nettoväggyta, en meter eller fot vägglängd, eller per vägg. Allt detta är valfritt.

Den sparas med typen i filen. Varje vägg av typen rapporterar sedan den: {{ui:Förteckningar}} › **Väggtyper: mängdavtagningsdata** listar enheten, murbruket, kostnaden och kostnaden gånger den uppmätta mängden, och mängdavtagningen som lämnas till TakeoffCraft bär den på den väggtypens post. Ändra den på typen så följer alla väggar med.

Tre fält till är för att räkna tegel eller block och murbruk:

- **Spill på enheter, %** läggs till antalet enheter. Lämna det tomt för att använda siffran i projektets mätmetod, eller ingen om metoden saknar en. Ange 0 för att inte ha något spill oavsett vad metoden säger.
- **Extra murbruk, %** är för fickor eller hål som tar upp murbruk. Det läggs till murbrukets volym. Lämna det tomt om inget.
- **Skikt byggda av denna enhet**: bocka i varje skikt som är ett blad av detta tegel eller block. En luftspaltvägg har två. Om inget är ibockat räknas kärnskikten.

Kostnaden kan också gälla per enhet att beställa, per 1000 enheter att beställa eller per m³ murbruk. Där enheten har en längd och en höjd visar **Väggtyper: mängdavtagningsdata** enheterna per m² (eller ft²) av ett blad, enheterna att beställa och murbrukets volym; formlerna finns i [Tegel, block och murbruk](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar). En typ har en enhet: två blad av olika enheter (ett yttre tegelblad och ett inre blockblad) kan ännu inte räknas på en typ.

## Håll kärnan stilla

I **Egenskaper** sätter du en väggs **Placeringslinje** till en kärnyta eller kärnmittlinjen. När du senare lägger till eller tjockar ett ytskikt står den linjen kvar där den är och väggen växer runt den; väggar som möter den i ett hörn följer med, så att raka hörn förblir slutna.

## Projektmaterial

{{ui:Materialbibliotek…}} listar projektets material: namn, kategori, den tjocklek ett skikt börjar med, visningsfärg, snittmönster och anteckningar. Biblioteket sparas i IFC-filen tillsammans med projektet. När du väljer ett material för ett skikt får skiktet materialets standardtjocklek, som du sedan kan ändra; om du redigerar biblioteket senare ändras aldrig väggar du redan ritat. Du kan också skapa ett material från skiktets materiallista med {{ui:+ Nytt material…}}.

## Referensmått

{{ui:Annotera}} › {{ui:Referensmått}}: välj horisontellt, vertikalt eller justerat, och en referens: utvändig eller invändig ytskiktsyta, utvändig eller invändig kärnyta, väggens mittlinje eller kärnmittlinjen. Välj den första väggen, byt referens om du vill, välj den andra och klicka sedan där måttlinjen ska gå. Två referenser på en vägg mäter dess totala tjocklek eller dess kärntjocklek. {{ui:Referensmått…}} listar vyns mått, även de som tappat en vägg, med Egenskaper, Koppla om referenser och Ta bort.

### Sätt mått på hela planen efter regler

{{ui:Annotera}} › {{ui:Måttsätt planen…}} sätter mått på ytterkanten av den planritning du tittar på: den totala storleken åt varje håll, en rad mått längs varje ytterkant (väggändar, väggar som möter kanten, och dörrarna och fönstren i den), med raderna placerade fritt från byggnaden. Bocka för det du vill ha, läs antalet och klicka sedan på {{ui:Lägg till måtten}}. De är vanliga referensmått, så de följer väggarna när väggarna flyttas, och du kan välja, flytta eller ta bort vilket som helst av dem; hela uppsättningen är ett ångra-steg, och att köra den igen skapar inga dubbletter.

Den sätter mått bara på utsidan: rum inne i byggnaden, krökta väggar och väggar som inte är vinkelräta mot planen lämnas åt handverktygen, och rutnätslinjer är inga väggar, så mått mellan rutnät görs inte här. Din anslutna assistent kan göra samma sak med `plan_dimension`.

Måttet är fäst vid väggarna, inte vid en plats på skärmen: när en vägg flyttas eller dess typ ändras följer värdet med. Om en vägg tas bort säger måttet att det inte kan lösas upp och visar inget tal, tills du kopplar om det eller ångrar. Längdrutan tar också planens koordinater, till exempel `10',12'`, för en måttlinje på en exakt plats.

Mått är till för väggar som BimCraft ritat, i planvyer. Finns inte ännu: mått i sektioner och fasader, till dörrar, fönster och andra komponenter, och sammansättningsskikt som ritas i plan och sektion; se [Vad som inte finns ännu](topic:not-built-yet).

## Se även

[Rita väggar](topic:draw-walls), [Ändra en vägg, dörr eller fönster](topic:change-a-wall-or-door), [Egenskaper](topic:properties-panel).
