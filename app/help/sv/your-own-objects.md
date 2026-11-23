---
title: Ta med egna objekt och familjefiler till biblioteket
summary: Läs familjefiler (.rfa) och IFC-, DWG-, DXF-, glTF- eller OBJ-filer på fliken Bibliotek, placera dem som vilket biblioteksobjekt som helst och behåll dem i Mina objekt, en privat lista som bara du kan se.
keywords: rfa, familj, familjer, familjebibliotek, egna objekt, mina objekt, privata objekt, privat bibliotek, importera objekt, tillverkarinnehåll, bim-objekt, ifc-objekt, gltf, obj, dwg-block, spara, byt, migrera
from: 886261f8
---

## Vad du gör

Ta med objekt du redan har till BimCraft: ett familjebibliotek från Revit, en tillverkares IFC- eller DWG-nedladdning, ett nät från en annan modelleringsapp. Du läser filen på fliken {{ui:Bibliotek}}, placerar objektet i din modell som ett riktigt IFC-element, och om du vill ha det igen senare behåller du det i {{ui:Mina objekt}}.

## Steg

1. Öppna en IFC-modell, eller starta en ny byggnad.
2. Klicka på fliken {{ui:Bibliotek}} bredvid {{ui:Egenskaper}}.
3. Klicka på {{ui:Filer…}}, sedan {{ui:Välj en fil…}}. Välj en fil eller flera samtidigt: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` eller `.csv`. Eller klicka på {{ui:Välj en mapp…}} för att läsa en hel mapp och mapparna i den (upp till 200 filer på en gång).
4. Klicka på ett kort för att se vad som lästes: planförhandsvisningen, namnet, tillverkare och modell, storlekarna och anteckningarna.
5. Klicka på {{ui:Placera i plan}} eller {{ui:Placera i modell}} för att placera det.
6. För att använda det igen i andra projekt, klicka på {{ui:Spara i mina objekt}}. Med flera filer lästa sparar {{ui:Spara alla i mina objekt}} dem i ett svep.
7. Senare klickar du på {{ui:Mina objekt}} på fliken Bibliotek för att hitta dem. De placeras, byts ut och uppdateras som vilket biblioteksobjekt som helst.

Filerna läses på den här fliken. Inget laddas upp förrän du väljer {{ui:Spara i mina objekt}}.

## Vad som läses från varje filtyp

| Fil | Vad du får |
|---|---|
| IFC | Varje elementtyp som ett objekt med sin riktiga 3D-form, IFC-klass och egenskapsuppsättningar |
| glTF, GLB, OBJ | Ett objekt med sin riktiga 3D-form som ett nät. Ange enheter och vilket håll som är upp först. |
| DWG, DXF | Varje block som ett objekt med sin plan och sina attribut |
| Familjefil (`.rfa`) | Familjens namn, kategori, tillverkare, modell, parametrar och dess typer. **Inte dess 3D-form:** en låda med familjens Bredd, Djup och Höjd står in för den. |
| CSV | Ett objekt per rad: namn, storlekar och data, ritat som en låda |

## Familjefiler och deras 3D-form

3D-formen i en `.rfa`-fil lagras i ett odokumenterat format, så BimCraft läser familjens data och gissar inte dess geometri. Kortet säger så: "Geometrin lästes inte från den här familjen; en låda står in."

För att få in en familj med dess riktiga form, exportera den från programmet som skapade den (Revit):

1. Öppna familjen, eller ett projekt med familjen placerad i sig.
2. Välj **Arkiv > Exportera > IFC**. Se [exportinställningarna som fungerar bäst här](topic:rvt-to-ifc).
3. I BimCraft läser du `.ifc`-filen med {{ui:Filer…}}. Varje familjetyp kommer som ett eget objekt, med sin form och sina egenskapsuppsättningar.

Många tillverkare erbjuder en IFC- eller DWG-nedladdning vid sidan av familjefilen. Dessa läses direkt.

## Familjetyper

En familj med flera typer kommer som ett objekt med ett val av {{ui:Variant}}, en variant per typ. Varje variant har de värden som skiljer sig mellan typerna, och en egen låda när typen har en Bredd och ett Djup. En familj med en typ blir ett vanligt objekt, fyllt med den typens värden.

Vissa familjer har sina typer i en typkatalog: en `.txt`-fil med samma namn bredvid familjefilen. Välj båda tillsammans, eller välj mappen, så blir katalogens rader varianter.

## En familjs data på en riktig form

Om en mapp innehåller en familjefil och en IFC-, glTF- eller OBJ-fil med samma namn (`Chair.rfa` och `Chair.ifc`), välj båda tillsammans eller välj mappen. BimCraft gör ett objekt: familjefilen ger namn, tillverkare, modell, parametrar och typer, och den andra filen ger den riktiga 3D-formen. Anteckningarna säger vilken fil formen kom från. En form används för varje typ.

Om en familjefil har en bild sparad i sig visar objektets detaljer den bilden under planritningen. Bilden visas bara där; den sparas inte med objektet.

## Mina objekt

{{ui:Mina objekt}} är din egen privata lista i biblioteket. Bara du kan se vad som finns i den: den finns inte i det offentliga biblioteket, inte i sökningen och visas inte för ditt team. Den följer ditt konto, så samma objekt finns på en annan dator när du loggar in i biblioteket.

- Du måste vara inloggad i biblioteket för att spara ett objekt. Se [logga in i biblioteket](topic:library-credits).
- Att spara ett objekt skickar just det objektet till ditt konto. Tills dess ligger det kvar på din dator.
- {{ui:Ta bort från mina objekt}} tar bort ett objekt från listan. Kopior som redan placerats i ritningar finns kvar.
- För att dela ett objekt med alla, ladda upp det till det offentliga biblioteket i stället, under en licens du väljer.

:::note
Mina objekt testas och kanske inte är öppet för ditt konto ännu. Om källan saknas, eller det står "Mina objekt är inte öppet för det här kontot ännu", kan du ändå läsa och placera dina egna filer med {{ui:Filer…}}; de sparas i din modell.
:::

## Vanliga misstag

- **Att vänta sig familjens riktiga form från en `.rfa`.** Bara dess data läses. Exportera IFC för formen.
- **Två objekt där du väntade dig ett.** En familj och dess formfil sammanfogas bara när namnen stämmer exakt, bortsett från ändelsen, och de ligger i samma mapp.
- **Ett nät kommer tusen gånger för stort, eller ligger på sidan.** Ange {{ui:Filens enheter}} och {{ui:Nätets uppåtaxel}} under {{ui:Filer…}} innan du väljer filen.
- **”Inga familjedata” på en fil.** Det är ett projekt (`.rvt` sparat med en annan ändelse) eller en familjemall, inte en familj. Se [Läs en projekt- eller familjefil](topic:read-rvt-file).
- **Att spara innehåll du inte får lagra.** Vissa betalbibliotek tillåter inte kopior utanför sin egen tjänst. Kontrollera villkoren för innehåll du inte själv har gjort.
