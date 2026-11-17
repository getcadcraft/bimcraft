---
title: Rendera en bild av modellen
summary: Gör en dagsljusbild av 3D-vyn: himmel, solen på din platss latitud, mjuka skuggor och glasfönster; med WebGPU strålföljd på grafikkortet, med himlar, kamera, ljusblandning, gradering, dimma och en renderingskö.
keywords: rendera, förinställning, förinställningar, scenförinställning, interiör, exteriör, sektionsvy, natt, ett klick, rendering, strålföljning, strålspårning, global belysning, reflektioner, refraktion, hög kvalitet, foto, fotorealistisk, realistisk, bild, png, stillbild, himmel, sol, dagsljus, skuggor, mjuka skuggor, ambient occlusion, glas, fönster, metall, material, exponering, ljusstyrka, mulet, skymning, studio, presentation, visualisering, webgpu, brusreducering, fysikalisk himmel, hdri, ies, skärpedjup, panorama, vitbalans, ljusblandning, renderingselement, exr, 16-bitars png, dimma, kaustik, renderingskö
from: beb74cc7
---

{{ui:Rendera}} på verktygsfältet gör en bild av 3D-vyn som liknar dagsljus: en himmel, solen där platsens latitud placerar den, mjuka skuggor, ljus från hela himlen som mörknar hörnen, och färger som kan se ut som glas eller metall. Modellen och filen ändras inte.

## Rendera vyn

1. Ställ in 3D-vyn som du vill ha bilden: vrid och zooma, dölj våningsplan eller element du inte vill ha, och ange ett [snitt](topic:section-plane) om bilden ska visa ett snitt.
2. Klicka på {{ui:Rendera}} på verktygsfältet.
3. Välj en {{ui:Scen}} om den som är intryckt inte är den du vill ha (se [Scenförinställningar](topic:render#scene-presets-a-good-picture-in-one-click)), välj {{ui:Storlek}} och klicka sedan på {{ui:Rendera}} i dialogrutan.

   Bilden fylls på medan den renderas och blir jämnare för varje pass. {{ui:Stoppa}} (eller {{key:Esc}}) avslutar den i förtid och behåller bilden så långt den hunnit.

4. Klicka på {{ui:Spara}} för att ladda ner den som PNG, eller {{ui:Spara som}} för ett annat format (se [Spara bilden](topic:render#save-the-picture)). Den namnges efter modellens fil.

:::tip
Börja med {{ui:Utkast}} vid {{ui:Vyns storlek}} för att kontrollera kameran, och rendera sedan {{ui:Bra}} eller {{ui:Bäst}} i större storlek för den slutliga bilden.
:::

## Scenförinställningar: en bra bild med ett klick

Överst i dialogrutan finns fyra {{ui:Scen}}-knappar. Var och en ställer in himlen, ljusstyrkan, marken, kantlinjerna, kvaliteten och solen med ett klick, så att det inte finns något att lära sig innan den första bilden. Klicka på en och sedan på {{ui:Rendera}}.

| Scen | Vad den ställer in | Användning |
|---|---|---|
| {{ui:Exteriör}} | Klar himmel, modellens egna sol, mark på | Byggnaden utifrån |
| {{ui:Interiör}} | Mulen himmel (jämnt ljus, inga hårda solfläckar), ett halvt steg ljusare | En vy inifrån ett rum |
| {{ui:Sektionsvy}} | Vit studio, ingen mark, kantlinjer i den snabba renderingen | En modell skuren av ett snitt |
| {{ui:Natt}} | Solen nere (midnatt mitt i vintern för platsens halvklot), ett steg ljusare | Lampor som lyser upp modellen. Utan lampor blir bilden mörk |

- {{ui:Välj för den här vyn}} väljer åt dig: {{ui:Sektionsvy}} när ett snitt är på, {{ui:Interiör}} när kameran är inne i modellen, annars {{ui:Exteriör}}. Första gången du öppnar dialogrutan startar den så av sig själv.
- Alla inställningar nedanför finns kvar och kan ändras. När du ändrar en som scenen ställer in, är ingen knapp intryckt, och raden under knapparna säger att inställningarna är dina egna. Klicka på scenen igen för att återställa dess värden.
- En scen rör inte motorn, Egenform, storleken, materialen, kameran eller lamporna.

:::note
Scenerna ger samma värden i ModelCraft och BimCraft. Hur den färdiga bilden ser ut beror på din modell och ditt grafikkort.
:::

## Vad som syns i bilden

Det 3D-vyn visar som fast form: dolda och genomskinliga element, dolda våningsplan och dolda modeller utelämnas, och rum visas bara när {{ui:Utrymmen}} är på. Ett snittplan eller snittbox skär bilden på samma sätt som det skär vyn. Element visas i sina egna färger: färgning efter egenskap (fliken {{ui:Färg}}) används inte.

## Inställningar

| Inställning | Vad den gör |
|---|---|
| {{ui:Storlek}} | Vyns storlek, dubbla vyns storlek, Full HD, 4K eller en kvadrat |
| {{ui:Egenform}} | {{ui:Snabbt}}, eller {{ui:Hög kvalitet (strålföljning)}} (nedan) med sin {{ui:Tidsgräns}} |
| {{ui:Kvalitet}} | Hur många pass (eller, i hög kvalitet, samplingar) som medelvärdesbildas: {{ui:Utkast}} 16, {{ui:Bra}} 64, {{ui:Bäst}} 256. Fler pass ger jämnare skuggor och kanter och tar längre tid |
| {{ui:Himmel}} | {{ui:Klar himmel}}, {{ui:Mulet}}, {{ui:Skymning}} eller {{ui:Vit studio}} (en vit bakgrund) |
| {{ui:Sol}} | 21 juni kl. 15:00 på den latitud som filen anger för sin plats (IfcSite), vriden till modellens verkliga nord. Bocka i {{ui:Använd ett annat datum och en annan tid för den här bilden}} för en annan tid |
| {{ui:Ljusstyrka}} | Ljusare eller mörkare, i steg (bländarsteg) |
| {{ui:Mark under modellen}} | En mark vid modellens lägsta punkt som tar skuggorna och tonar ut mot horisonten |
| {{ui:Rita kanter}} | Ritar elementens kanter tunt över bilden |

När solen är under horisonten vid den valda tiden är det natt: himlen blir mörk och modellens lampor lyser upp den.

## Lampor

Varje ljusarmatur i modellen är en lampa i bilden: armaturerna i en IFC-fil (IfcLightFixture, eller ett element som är typat som ljusarmatur), inklusive dem du placerar från biblioteket. Varje lampa lyser nedåt från strax under armaturen. När filen anger en armaturs effekt i watt följer dess ljusstyrka av den; annars är den 800 lumen, ett varmt vitt ljus.

Dialogrutan listar lamporna under {{ui:Lampor}}: avmarkera en för att stänga av den, eller skriv dess ljusstyrka i lumen. Ändringarna sparas i IFC-filen (armaturens egenskapsuppsättning `CadCraft_Light`, där du också kan ändra dem i {{ui:Egenskaper}}), och {{key:Ctrl+Z}} ångrar dem.

När en fil inte säger var dess plats ligger, placeras solen på 40° nordlig breddgrad, och dialogrutan säger det. Tiden är platsens klocktid, beräknad från dess longitud, så den kan vara en timme fel där klockorna är inställda annorlunda.

Inställningarna sparas i den här webbläsaren till nästa bild. De sparas inte i IFC-filen.

## Glas och andra material

Under {{ui:Material}} har varje färg på skärmen ett utseende: {{ui:Matt}}, {{ui:Satin}}, {{ui:Blank}}, {{ui:Metall}}, {{ui:Polerad metall}}, {{ui:Glas}} eller {{ui:Frostat glas}}. Färger som IFC-filen gör genomskinliga (fönsterglas, till exempel) börjar som {{ui:Glas}}.

:::note
I läget {{ui:Snabbt}} reflekterar glas och metall himlen, inte resten av modellen, och ljuset böjs inte genom glas. Läget {{ui:Hög kvalitet (strålföljning)}} nedan gör båda.
:::

## Hög kvalitet

Välj {{ui:Egenform}} › {{ui:Hög kvalitet (strålföljning)}} för en bild som följer ljuset så som en kamera ser det:

- ljus studsar mellan ytor, så ett rum som belyses genom ett fönster, eller av en lampa, blir upplyst runt om och färger sprider sig till grannarna;
- glas är riktigt glas: ljuset böjs genom det och glaset reflekterar modellen;
- metall och polerade ytor reflekterar resten av modellen;
- ljuspaneler lyser som paneler, med mjuka skuggor.

Det är mycket långsammare än {{ui:Snabbt}}: varje pass följer ljuset för varje pixel på nytt. Bilden börjar kornig och klarnar när samplerna adderas, så börja smått ({{ui:Vyns storlek}}, {{ui:Utkast}}) och välj en {{ui:Tidsgräns}}: när den tar slut behålls bilden så långt den kommit. {{ui:Stoppa}} behåller den också. Det första passet väntar medan webbläsaren förbereder strålföljaren.

Där webbläsaren har WebGPU är strålföljaren CadCraft:s egen och körs på grafikkortet; raden under bilden säger det. Efter {{ui:Stoppa}} eller tidsgränsen fortsätter {{ui:Återuppta}} med samma bild tills den har alla sina samplingar; ändrar du en inställning eller trycker på {{ui:Rendera}} igen börjar den om. Utan WebGPU strålföljs bilden i stället med WebGL (raden säger det) och {{ui:Återuppta}} erbjuds inte.

:::linux
Firefox och de flesta Chrome-installationer på Linux har ännu inget WebGPU, så hög kvalitet använder WebGL där.
:::

I det här läget ritas inga kanter, texturer visar sin färg och ruhet men inte sina ojämnheter, och ett snitt görs på modellen innan bilden startar.

{{ui:Brusreducering (tar bort kornigheten som blir kvar efter samplen)}} är på som standard: när bilden är klar, eller stoppad, tas kornigheten som finns kvar bort av ett neuralt nätverk avsett för detta (Intel Open Image Denoises publicerade nätverk, som körs på din egen dator: på grafikkortet, annars på processorn). {{ui:Visa}} › {{ui:Bilden före brusreducering}} visar den så som den renderades.

## Himlar och ljusprofiler på grafikkortet

Med WebGPU har hög kvalitet två extra himlar:

- {{ui:Fysikalisk himmel}} räknar ut dagsljuset från solens höjd: djupblått rakt upp, ett blekt band vid horisonten, och en sol som blir varmare och svagare när den står lågt. {{ui:Dis}} går från en mycket klar dag (2) till en disig (10).
- {{ui:Himmelsbild (HDRI)}} belyser modellen med en panoramabild av en verklig plats. {{ui:Välj en bild…}} tar en equirectangular-fil `.hdr` eller `.exr`; {{ui:Vrid}} vrider den runt modellen och {{ui:Bildens ljusstyrka}} gör den ljusare eller mörkare. Bilden har sin egen sol, så modellens sol läggs inte till. Den behålls bara så länge sidan är öppen: efter att du öppnat den igen väljer du den på nytt.

Varje lampa i listan {{ui:Lampor}} kan ta en tillverkares ljusprofil: {{ui:IES-profil…}} läser en IES-fil (LM-63) och lampan sprider sitt ljus så som den armaturen gör (en smal downlight, en väggtvättare). Alla lampor med det namnet använder den, och lampan behåller sin egen ljusstyrka. Klicka på profilens namn för att sluta använda den.

Fönster av klart glas hjälper himlens ljus att hitta in i ett rum.

Läget {{ui:Snabbt}} och WebGL-strålföljaren visar {{ui:Fysikalisk himmel}} och {{ui:Himmelsbild (HDRI)}} som en klar himmel och ignorerar ljusprofiler.

## Kameran

{{ui:Kamera}} ställer in bilden som ett fotografi:

- {{ui:Exponering}}: behåll {{ui:Ljusstyrka}}-reglaget, eller välj {{ui:Kamerainställningar}} och ställ in {{ui:Bländare (f-tal)}}, {{ui:Slutartid}} och {{ui:ISO}} som på en kamera; EV bredvid dem är det vanliga exponeringsvärdet. f/16 vid 1/100 s och ISO 100 motsvarar en solig dag; en mörkare scen vill ha en vidare bländare, en långsammare slutartid eller ett högre ISO. Det här fungerar i alla lägen.
- {{ui:Skärpedjup}} suddar det som är närmare eller längre bort än {{ui:Fokusavstånd (m)}}, så som en lins med det f-talet gör (lämna tomt för att fokusera på det som är mitt i vyn); {{ui:Bländarform}} ger ur-fokus-höjdpunkter en rund eller bladad form.
- {{ui:Tvåpunktsperspektiv (vertikala linjer förblir vertikala)}} rättar kameran och förskjuter bilden, som en arkitektonisk tilt-shift-lins gör, så att väggarna inte lutar när du ser upp eller ner mot en byggnad.
- {{ui:Vitbalans}} anger vilken ljusfärg som visas som vitt: lägre (till exempel 3000 K) för varmt lampljus, högre för skugga och mulna dagar.
- {{ui:Projektion}}: {{ui:360° panorama}} gör en 2:1-bild av allt runt kameran för panoramavisare; {{ui:360° stereopanorama}} staplar en vänster- och en högerögonpanorama för headset; {{ui:Kubkarta (6 sidor)}} gör sex kvadratiska vyer i ett rutnät på 3 × 2. Bredden kommer från {{ui:Storlek}}.

Projektion, skärpedjup, tvåpunktsperspektiv och vitbalans kräver strålföljaren på grafikkortet (WebGPU), så de visas bara i {{ui:Hög kvalitet (strålföljning)}}.

## Färdigställ bilden

{{ui:Bild}} gradera den högkvalitativa bilden som ett fotografi, och varje kontroll ändrar den färdiga bilden direkt, utan att rendera igen:

- {{ui:Utseende (vytransform)}}: {{ui:ACES filmiskt}} (bilden som tidigare), {{ui:AgX}} (mjukare, behåller färg i mycket starkt ljus), {{ui:Filmiskt}} (en mild filmkurva) eller {{ui:Standard}} (rakt, starkt ljus klipps till vitt).
- {{ui:Kontrast}} och {{ui:Högdagerkomprimering}} (återställer detaljer i mycket ljusa partier).
- {{ui:Ljussken}} (en mjuk glöd runt starkt ljus), {{ui:Bländning}} med sina {{ui:Bländningsstrimmor}} (stjärnstrålar från de ljusaste punkterna) och {{ui:Vinjettering}} (mörkare hörn).
- {{ui:Färgtabell (.cube)…}} tillämpar en färggradering från en `.cube`-fil, med sin {{ui:Färgtabellens styrka}}; liksom en himmelsbild behålls den bara så länge sidan är öppen.

## Spara bilden

{{ui:Spara som}} bredvid {{ui:Spara}} väljer filen: {{ui:PNG}}, {{ui:JPEG}} eller {{ui:WebP}} för delning (JPEG och WebP endast där webbläsaren kan skriva dem), och efter en högkvalitativ rendering på grafikkortet även:

- {{ui:PNG, 16 bitar}}: den graderade bilden med finare steg mellan nyanserna, för utskrift eller vidare redigering.
- {{ui:EXR, varje lager (32-bitars flyttal)}}: bilden så som den renderades (linjärt ljus, ingen gradering) med varje renderingselement och ljusgrupp som eget lager, för kompositeringsprogram.
- {{ui:Renderingsfil (.ccrender, för att gradera igen senare)}}: allt dialogrutan behöver för att blanda och gradera bilden igen. {{ui:Öppna en renderingsfil…}} hämtar tillbaka den, med sin blandning och gradering, utan att rendera.

## Blanda ljusen efter renderingen

Slå på {{ui:Ljusblandning (ändra varje ljuskällas färg och ljusstyrka efter renderingen)}} innan du trycker på {{ui:Rendera}}. När bilden är klar (eller stoppad) listar {{ui:Blanda bilden}} dess ljus i grupper: himlen, solen och lamporna efter namn (varje lampa med samma namn är en grupp). Stäng av en grupp, ge den en färg, eller gör den ljusare eller mörkare, så ändras bilden direkt, utan att rendera igen. {{ui:Spara blandning}} behåller blandningen under ett namn som du kan välja igen senare; {{ui:Som renderad}} går tillbaka till bilden så som den gjordes. {{ui:Spara}} sparar den blandade bilden.

{{ui:Renderingselement (albedo, normaler, djup, diffus, spegel, transmission, emission, ID)}} behåller bildens delar också. {{ui:Visa}} växlar vyn till en av dem: ytfärgerna (albedo), normalerna, djupet, det diffusa, spegelreflekterade och genomsläppta ljuset (vart och ett direkt och indirekt), det som glöder och himlen, och en färg per objekt eller per material för att göra masker.

Båda behåller extra lager på grafikkortet. Vid stora storlekar kanske grafikkortet inte har plats; dialogrutan säger det, och en mindre storlek fungerar.

## Dimma, rök, brus och kaustik

Dessa finns i {{ui:Dimma, rök och brus}} och fungerar i {{ui:Hög kvalitet (strålföljning)}} på grafikkortet; de andra motorerna utelämnar dem.

- {{ui:Dimma och disig luft}} fyller luften upp till en höjd med en dis som solen, himlen och lamporna belyser. {{ui:Hur långt du ser, i meter}} anger hur tjock den är (ungefär 100 m är en lätt dis, 20 m en tjock dimma), {{ui:Dimmans höjd över marken, i meter}} är där den slutar, och {{ui:Ljusstrålar}} är hur mycket dimman glöder mot ljuset. Solljus lämnar dimman vid dess överkant, så där solen kommer in genom ett fönster eller mellan byggnader ser du den som ljusstrålar.
- {{ui:Rök eller moln}} lägger till en volym rök eller moln som belyses som dimman. {{ui:Slag}} är ett {{ui:Moln}}, en {{ui:Rökpelare}} eller {{ui:Från en volymfil (.ccvol)}}, CadCraft:s eget rutnätsformat. {{ui:Detalj}} och {{ui:Variation}} ändrar ett skapat moln eller en pelare; {{ui:Storlek på dess längsta sida, i meter (0 = modellens storlek)}}, {{ui:Flytta X (m)}}, {{ui:Flytta Y (m)}}, {{ui:Flytta Z (m)}} och {{ui:Vrid}} placerar den (den startar i mitten av modellen); {{ui:Tjocklek}} gör den tätare, {{ui:Framåtglöd}} gör den ljusare mot ljuset, och {{ui:Färg}} tonar den. En volymfil behålls bara så länge sidan är öppen, precis som en himmelsbild.
- {{ui:Stoppa tidigt där bilden är ren (adaptiv sampling)}} ger inga fler samplingar till pixlar som har lugnat sig. {{ui:Brus att godta}} är hur mycket korn som finns kvar när en pixel slutar. Raden under bilden säger hur många samplingar en pixel fick i genomsnitt.
- {{ui:Kaustik (ljus som bryts av glas eller studsar mot speglar)}} spårar ljus från lamporna och solen, så att den ljusa fläcken under en glaskula eller en speglads ljus på en vägg blir ren i stället för kornig. Den är avstängd när dimma, rök, ljusblandning eller renderingselement är på, och den är gjord för bilder, inte för 360°-bilder.

## Renderingskön

{{ui:Renderingskö}} i dialogrutan: {{ui:Lägg till den här bilden i kön}} behåller bildens inställningar och vy, och {{ui:Starta kön}} renderar det som väntar, ett efter ett, på den här datorn. När du stänger sidan finns kön kvar; öppna samma modell för att fortsätta. {{ui:Spara}} laddar ner en färdig bild; {{ui:Ta bort}} och {{ui:Rensa färdiga}} städar listan. Kön renderar i hög kvalitet, så den behöver WebGPU.

## Hur lång tid det tar

Bilden görs på din egen dator, av dess grafikkort; ingenting laddas upp. Tiden växer med passen och pixlarna: {{ui:Bäst}} har 16 gånger så många pass som {{ui:Utkast}}, och en 4K-bild har ungefär fyra gånger så många pixlar som Full HD. Stora modeller tar längre tid per pass.
