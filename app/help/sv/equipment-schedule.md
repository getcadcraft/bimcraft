---
title: Skapa en utrustningsförteckning och exportera CSV
summary: Gör om postbeteckningarna i en köksritning till en utrustningsförteckning, filtrera den, hoppa till varje post på dess blad och ladda ner den som CSV.
keywords: utrustning, förteckning, storkök, postbeteckningar, kcl, attribut, stycklista, bom, csv, kalkylblad, export, dataextraktion
from: e3faa1c8
---

## Vad du gör

Läs av utrustningslistan från en kök- eller storköksritning, kontrollera den, hitta varje post på planen och ladda ner den som en kalkylbladsfil.

Detta fungerar på ritningar vars utrustningsbeteckningar bär sina data som blockattribut, som köksdesignbibliotek som KCL gör. Varje beteckning innehåller postnumret (`KCL-ITEM`), antal, kategori, tillverkare, modell, el- och VVS-data samt anmärkningar. Andra ritningar har ingen flik {{ui:Utrustning}}.

## Steg

1. Öppna ritningen, helst från dess projektmapp så att dess länkade ritningar också laddas.
2. Klicka på fliken {{ui:Utrustning}} ovanför ritningen. Dess etikett visar hur många poster som finns på blad, till exempel "Utrustning (88)".
3. Läs förteckningen: **Post**, **Antal**, **Utrustning**, **Tillverkare**, **Modell**, **El**, **VVS** och **Var**.
4. Välj vad som ska listas i menyn ovanför tabellen: **Varje blad**, ett blad, **Inte på något blad** eller **Allt taggat i ritningen**. Varje val visar sitt antal.
5. Skriv i filterrutan ("Filter: kategori, tillverkare, modell…") för att begränsa listan, till exempel `kylskåp` eller `208`.
6. Klicka på en posts bladnamn i kolumnen **Var**.
7. Titta på ritningen: BimCraft byter till det bladet, zoomar in på posten och ritar en ring runt den. Statusraden säger "Post *n*, *kategori* är markerad på *blad*."
8. Klicka på {{ui:Utrustning}} för att gå tillbaka till förteckningen.
9. Klicka på {{ui:Ladda ner CSV}}.

## Vad du bör se

- En fil med namnet "*ritningens namn* utrustning.csv" (med bladets namn inom parentes när du listade ett blad) i mappen för hämtade filer. Den öppnas i Excel, Numbers, LibreOffice eller Google Sheets.
- Statusraden: "*filnamn* laddades ner (*n* poster)."

CSV-filen har dessa kolumner: Item, Qty, Category, Manufacturer, Model, Electrical, Plumbing, Remarks, Electrical remarks, Plumbing remarks, Sheets, Placed (hur många beteckningar). Den exporterar exakt de rader som tabellen visar, efter menyn och filtret.

## Så byggs förteckningen

- Den läses från **beteckningarna själva**, inte från förteckningstabellen som ritats på bladet. Noteringen ovanför tabellen säger hur många beteckningar som lästes.
- En rad är ett postnummer med en uppsättning data. Dess antal är **summan** av dess beteckningar, precis som en utskriven förteckning räknar det. Hyllor märkta "5" på ett ställe och "3" på ett annat blir 8, visat som "5 + 3".
- **Var** listar de blad som visar varje post. Det räknas ut från vad varje blads vyportar visar, vilket är det som skrivs ut. "Endast modell" betyder att inget blad visar posten.
- **Nummer använt två gånger** markerar ett postnummer på två olika utrustningsdelar. Raden har en gul markering.
- Beteckningar som inget blad visar hålls isär under **Inte på något blad**. De är ofta kvarlämnade från tidigare planer eller andra jobb, och blandas aldrig in i **Varje blad**.
- **El** visar ampere, kW, HP, volt, fas, anslutning och kontakt som de är märkta. **VVS** visar anslutningsdimensioner: CW kallvatten, HW varmvatten, DD direktavlopp, ID indirekt avlopp och gas. Andra beteckningsfält visas inte ännu.

## Vanliga misstag

- **Ingen flik {{ui:Utrustning}}.** Ritningen har inga `KCL-ITEM`-beteckningar, eller så är dess utrustning ritad utan data. Det finns inget att läsa.
- **Antalen skiljer sig från den utskrivna förteckningen.** En utskriven förteckning kan lista reservnummer eller använda kortare namn än beteckningarna. Lita på beteckningarna för vad som är placerat, och kontrollera skillnader med konstruktören.
- **CSV-filen visar konstiga tecken.** Filen är UTF-8. Öppna den med kalkylbladets importkommando och välj UTF-8 om programmet frågar.
- **En cell börjar med ett apostrof.** Värden som börjar med `=`, `+`, `-` eller `@` får ett inledande `'`, så att kalkylblad inte kör dem som formler.
- **{{key:F}} och {{key:P}} gör ingenting.** De fungerar på ritningen, inte på förteckningen. Klicka på en bladflik först.
