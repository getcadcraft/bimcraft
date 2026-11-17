---
title: Ändra IFC-egenskaper och spara en redigerad kopia
summary: Ändra ett elements namn, tagg, beskrivning eller ett egenskapsvärde, ångra, och ladda ner en ny IFC-fil medan originalet förblir oförändrat.
keywords: redigera, ändra, egenskaper, parametrar, tagg, namn, byt namn, markering, spara som, ladda ner, ångra, kopiera, ifc, skriv
from: f8035d62
---

## Vad du ska göra

Korrigera data i en IFC-modell: byt namn på ett element, rätta dess tagg, ändra ett egenskapsvärde. Spara sedan en ny IFC-fil med dina ändringar. Filen du öppnade rörs aldrig.

## Vad du kan ändra

| Fält | Redigerbart |
|---|---|
| Namn, Objekttyp, Tagg, Beskrivning | Ja |
| Enskilda egenskapsvärden (text, tal, Ja/Nej) | Ja |
| Typegenskaper (uppsättningar märkta "(type)") | Ja, och ändringen gäller för varje element av den typen |
| Typ, GlobalId, Rad | Nej |
| Kvantiteter (längder, areor, volymer, antal) | Nej |
| Listor, uppräkningar och andra värden med flera delar | Nej |
| Geometri, position, att lägga till eller ta bort element | Nej |

## Steg

1. Öppna en IFC-modell och klicka på elementet du vill ändra.
2. I panelen {{ui:Egenskaper}}, klicka på värdet du vill ändra. Det blir en textruta. Ett tomt värde visas som *tomt*.
3. Skriv det nya värdet.
4. Tryck på {{key:Enter}}, eller klicka någon annanstans, för att behålla det. Tryck på {{key:Esc}} för att avbryta.
5. Titta på värdet: det är nu fetstilt med en blå linje bredvid, vilket markerar ett redigerat värde.
6. Titta i avsnittet {{ui:Ändringar}} till vänster: ändringen listas som *element*: *fält*, gammalt värde till nytt värde.
7. Upprepa för andra värden eller andra element.
8. Klicka på {{ui:Spara som IFC}} (den visar hur många ändringar som väntar, till exempel "Spara som IFC (3)"), eller tryck på {{key:Mod+S}}.
9. Hitta "*originalnamn* (edited).ifc" i din nedladdningsmapp.

## Vad du ska se

Statusraden säger "Sparade *namn* (edited).ifc med *n* ändringar (… byte). Din originalfil är oförändrad." Listan {{ui:Ändringar}} töms, redo för nästa omgång.

## Typer av värden

- **Text**: allt du skriver behålls som det är. Att rensa Namn, Objekttyp, Tagg eller Beskrivning tar bort värdet.
- **Tal**: skriv ett vanligt tal, till exempel `2.4` eller `1200`, i filens egna enheter. Inga enhetssymboler. Allt annat visar "Använd ett tal."
- **Heltal** (antal, heltal): "Använd ett heltal." om du skriver ett decimaltal.
- **Ja/Nej**: värdet blir en meny med Ja och Nej.

Varje värde behåller sin IFC-typ, så ett tal förblir ett tal och andra program läser det rätt.

## Ångra

1. Klicka på {{ui:Ångra}} i avsnittet {{ui:Ändringar}}, eller tryck på {{key:Mod+Z}} när du inte skriver i ett fält.
2. Upprepa för att ångra mer. Varje ångring tar bort den nyaste ändringen.

Du kan inte ångra förbi en sparning: efter att du sparat börjar listan om. Den sparade filen behåller allt.

## Varför din redigering ändrar bara ett element

Exportörer sparar utrymme genom att dela data. En egenskapsuppsättning kan delas av tjugo dörrar, och ett värde ("Brandklass: 60 min") kan listas i nittio uppsättningar. Om BimCraft bara ändrade det delade värdet skulle varje element som delar det också ändras.

Så BimCraft kopierar innan den skriver:

- Om egenskapsuppsättningen du redigerar delas med andra element får ditt element en egen kopia av uppsättningen, och bara kopian ändras.
- Om värdet delas med andra uppsättningar får din uppsättning en egen kopia av värdet.

Grannarna behåller sina gamla data. Detta kallas *copy-on-write*. Det lägger till några små poster i filen, som alla IFC-program läser normalt.

**Typegenskaper är undantaget med avsikt.** En uppsättning märkt "(type)" tillhör elementets typ, och i IFC läser varje element av den typen den därifrån. Att ändra den ändrar typen, så varje element av typen visar det nya värdet. Listan {{ui:Ändringar}} markerar sådana redigeringar med "(type)". Se [Ändra en typegenskap för varje element av en typ](topic:type-vs-instance).

## Varningar innan du förlorar arbete

- Om du öppnar en annan fil medan du har osparade ändringar frågar den "Du har *n* osparade ändringar i *fil*. Kassera dem?" Klicka på Avbryt för att fortsätta arbeta, och spara sedan.
- Om du stänger eller laddar om fliken med osparade ändringar frågar webbläsaren om du vill lämna.

## Vanliga misstag

- **Att skriva enheter.** `2400 mm` nekas. Skriv `2400`.
- **Att ändra en typegenskap när du menade ett element.** Leta efter notisen "(type)" innan du skriver. Om du vill att ett element ska skilja sig, ändra en instansegenskap eller dess Tagg eller Namn i stället.
- **Att förvänta sig att originalfilen ändras.** Sparning laddar alltid ner en ny fil. Ersätt originalet själv om det är vad du vill, och behåll en kopia.
- **Att trycka på {{key:Mod+S}} utan ändringar.** BimCraft sparar bara när det finns något att spara; annars kan webbläsarens egna "Spara sida" öppnas. Stäng den.
- **Att spara två gånger och förvänta sig två små filer.** Varje sparning innehåller varje redigering sedan du öppnade modellen.
- **Att förvänta sig att redigeringar går tillbaka till en projektfil.** BimCraft skriver bara IFC. Ta in den redigerade IFC-filen i ditt författarprogram på samma sätt som du importerar valfri IFC.
