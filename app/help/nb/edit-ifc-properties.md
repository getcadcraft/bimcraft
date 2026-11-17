---
title: Endre IFC-egenskaper og lagre en redigert kopi
summary: Endre et elements navn, merking, beskrivelse eller en egenskapsverdi, angre, og last ned en ny IFC-fil mens originalen forblir som den var.
keywords: rediger, endre, egenskaper, parametere, merking, navn, gi nytt navn, merke, lagre som, last ned, angre, kopi, ifc, skriv
from: f8035d62
---

## Hva du skal gjøre

Korriger data i en IFC-modell: gi et element nytt navn, rett merkingen, endre en egenskapsverdi. Lagre deretter en ny IFC-fil med endringene dine. Filen du åpnet, blir aldri berørt.

## Hva du kan endre

| Felt | Redigerbart |
|---|---|
| Navn, Objekttype, Merking, Beskrivelse | Ja |
| Enkeltverdier for egenskaper (tekst, tall, Ja/Nei) | Ja |
| Typeegenskaper (sett merket «(type)») | Ja, og endringen gjelder for hvert element av den typen |
| Type, GlobalId, Linje | Nei |
| Mengder (lengder, arealer, volumer, antall) | Nei |
| Lister, oppregninger og andre verdier med flere deler | Nei |
| Geometri, posisjon, legge til eller slette elementer | Nei |

## Trinn

1. Åpne en IFC-modell og klikk elementet du vil endre.
2. I panelet {{ui:Egenskaper}} klikker du verdien du vil endre. Den blir til et tekstfelt. En tom verdi vises som *tom*.
3. Skriv inn den nye verdien.
4. Trykk {{key:Enter}}, eller klikk et annet sted, for å beholde den. Trykk {{key:Esc}} for å avbryte.
5. Se på verdien: den er nå fet med en blå strek ved siden av, som markerer en redigert verdi.
6. Se på delen {{ui:Endringer}} til venstre: endringen står oppført som *element*: *felt*, gammel verdi til ny verdi.
7. Gjenta for andre verdier eller andre elementer.
8. Klikk {{ui:Lagre som IFC}} (den viser hvor mange endringer som venter, for eksempel «Lagre som IFC (3)»), eller trykk {{key:Mod+S}}.
9. Finn «*originalnavn* (edited).ifc» i nedlastingsmappen din.

## Hva du bør se

Statuslinjen sier «Lagret *navn* (edited).ifc med *n* endringer (… bytes). Originalfilen er uendret.» Listen {{ui:Endringer}} tømmes, klar for neste runde.

## Typer verdier

- **Tekst**: alt du skriver inn, beholdes som det er. Å tømme Navn, Objekttype, Merking eller Beskrivelse fjerner verdien.
- **Tall**: skriv et vanlig tall, for eksempel `2.4` eller `1200`, i filens egne enheter. Ingen enhetssymboler. Alt annet viser «Bruk et tall.»
- **Heltall** (antall, hele tall): «Bruk et heltall.» hvis du skriver inn et desimaltall.
- **Ja/Nei**: verdien blir en meny med Ja og Nei.

Hver verdi beholder sin IFC-type, så et tall forblir et tall, og andre programmer leser det riktig.

## Angre

1. Klikk {{ui:Angre}} i delen {{ui:Endringer}}, eller trykk {{key:Mod+Z}} når du ikke skriver i et felt.
2. Gjenta for å angre flere. Hver angring fjerner den nyeste endringen.

Du kan ikke angre forbi en lagring: etter lagring starter listen på nytt. Den lagrede filen beholder alt.

## Hvorfor endringen din bare endrer ett element

Eksportører sparer plass ved å dele data. Ett egenskapssett kan være delt av tjue dører, og én verdi («Brannklasse: 60 min») kan stå oppført i nitti sett. Hvis BimCraft bare endret den delte verdien, ville hvert element som deler den, endre seg også.

Derfor kopierer BimCraft før den skriver:

- Hvis egenskapssettet du redigerer, er delt med andre elementer, får elementet ditt sin egen kopi av settet, og bare kopien endres.
- Hvis verdien er delt med andre sett, får settet ditt sin egen kopi av verdien.

Naboene beholder sine gamle data. Dette kalles *copy-on-write* (kopier ved skriving). Det legger til noen få små oppføringer i filen, som alle IFC-programmer leser normalt.

**Typeegenskaper er unntaket med vilje.** Et sett merket «(type)» hører til elementets type, og i IFC leser hvert element av den typen det derfra. Å endre det endrer typen, slik at hvert element av typen viser den nye verdien. Listen {{ui:Endringer}} markerer slike endringer med «(type)». Se [Endre en typeegenskap for alle elementer av en type](topic:type-vs-instance).

## Advarsler før du mister arbeid

- Å åpne en annen fil mens du har ulagrede endringer, spør «Du har *n* ulagrede endringer i *fil*. Forkast dem?» Klikk Avbryt for å fortsette å arbeide, og lagre deretter.
- Å lukke eller laste inn fanen på nytt med ulagrede endringer får nettleseren til å spørre om du vil forlate siden.

## Vanlige feil

- **Å skrive enheter.** `2400 mm` avvises. Skriv `2400`.
- **Å endre en typeegenskap når du mente ett element.** Se etter merknaden «(type)» før du skriver. Hvis du vil at ett element skal være annerledes, endre en egenskap for forekomsten, eller merkingen eller navnet i stedet.
- **Å forvente at originalfilen endres.** Lagring laster alltid ned en ny fil. Erstatt originalen selv hvis det er det du vil, og behold en kopi.
- **Å trykke {{key:Mod+S}} uten endringer.** BimCraft lagrer bare når det er noe å lagre; ellers kan nettleserens egen «Lagre side» åpnes. Lukk den.
- **Å lagre to ganger og forvente to små filer.** Hver lagring inneholder alle redigeringene siden du åpnet modellen.
- **Å forvente at redigeringer føres tilbake til en prosjektfil.** BimCraft skriver bare IFC. Ta den redigerte IFC-filen inn i tegneprogrammet ditt slik du importerer en hvilken som helst IFC.
