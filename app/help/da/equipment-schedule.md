---
title: Opbyg en udstyrsliste og eksportér CSV
summary: Omsæt postmærkningerne i en tegning af et serveringskøkken til en udstyrsliste, filtrér den, hop til hver post på dens ark, og download den som CSV.
keywords: udstyr, udstyrsliste, serveringskøkken, køkken, postmærkninger, kcl, attributter, stykliste, bom, csv, regneark, eksport, dataudtræk
from: e3faa1c8
---

## Hvad du gør

Læs udstyrslisten ud af en køkken- eller serveringstegning, kontrollér den, find hver post på planen, og download den som regnearksfil.

Det virker på tegninger, hvor udstyrsmærkningerne har deres data som blokattributter, som køkkenbiblioteker som KCL gør: hver mærkning rummer postnummeret (`KCL-ITEM`), mængde, kategori, producent, model, el- og VVS-data og bemærkninger. Andre tegninger har ingen {{ui:Equipment}}-fane.

## Trin

1. Åbn tegningen, helst fra dens projektmappe, så dens tilknyttede tegninger også indlæses.
2. Klik på fanen {{ui:Equipment}} over tegningen. Dens label viser, hvor mange poster der er på ark, fx »Equipment (88)«.
3. Læs listen: **Post**, **Antal**, **Udstyr**, **Producent**, **Model**, **El**, **VVS** og **Hvor**.
4. Vælg hvad der skal listes i menuen over tabellen: **Alle ark**, ét ark, **Ikke på noget ark**, eller **Alt mærket i tegningen**. Hvert valg viser sit antal.
5. Skriv i filterfeltet (»Filter: kategori, producent, model…«) for at indsnævre listen, fx `køleskab` eller `208`.
6. Klik på en posts arknavn i kolonnen **Hvor**.
7. Kig på tegningen: BimCraft skifter til det ark, zoomer ind på posten og tegner en ring om den. Statuslinjen siger »Post *n*, *kategori* er markeret med en ring på *ark*.«
8. Klik på {{ui:Equipment}} for at gå tilbage til listen.
9. Klik på {{ui:Download CSV}}.

## Hvad du bør se

- En fil ved navn »*tegningens navn* equipment.csv« (med arkets navn i parentes, når du listede ét ark) i din downloadmappe. Den åbnes i Excel, Numbers, LibreOffice eller Google Sheets.
- Statuslinjen: »Hentet *filnavn* (*n* poster).«

CSV'en har disse kolonner: Post, Antal, Kategori, Producent, Model, El, VVS, Bemærkninger, El-bemærkninger, VVS-bemærkninger, Ark og Placeret (antal mærkninger). Den downloader netop de rækker tabellen viser, efter menuen og filteret.

## Sådan bygges listen

- Den læses fra **selve mærkningerne**, ikke fra listetabellen tegnet på arket. Noten over tabellen siger, hvor mange mærkninger der blev læst.
- En række er ét postnummer med ét sæt data. Dens mængde er **summen** af dens mærkninger, sådan som en udskrevet liste tæller: hylder mærket »5« ét sted og »3« et andet sted er 8, vist som »5 + 3«.
- **Hvor** lister de ark, der viser hver post, udregnet ud fra hvad hvert arks viewporte viser, altså det der udskrives. »Model only« betyder at intet ark viser den.
- **Nummer brugt to gange** markerer ét postnummer på to forskellige stykker udstyr. Rækken har et gult mærke.
- Mærkninger som intet ark viser holdes adskilt under **Ikke på noget ark**. De er ofte rester fra tidligere planer eller andre opgaver, og de blandes aldrig ind i **Alle ark**.
- **El** viser ampere, kW, HP, volt, fase, tilslutning og stik som mærket. **VVS** viser tilslutningsstørrelser: CW koldt vand, HW varmt vand, DD direkte afløb, ID indirekte afløb og gas. Andre mærkningsfelter vises endnu ikke.

## Typiske fejl

- **Ingen {{ui:Equipment}}-fane.** Tegningen har ingen `KCL-ITEM`-mærkninger, eller dens udstyr er tegnet uden data. Der er intet at læse.
- **Antal stemmer ikke med den udskrevne liste.** En udskrevet liste kan vise reservenumre eller bruge kortere navne end mærkningerne. Stol på mærkningerne for hvad der er placeret, og kontrollér forskelle med tegneren.
- **CSV'en viser mærkelige tegn.** Filen er UTF-8. Åbn den med dit regnearks importkommando og vælg UTF-8, hvis programmet spørger.
- **En celle starter med et apostrof.** Værdier der begynder med `=`, `+`, `-` eller `@` får et foranstillet `'`, så regnearkene ikke kører dem som formler.
- **{{key:F}} og {{key:P}} gør ingenting.** De virker på tegningen, ikke på listen. Klik først på en arkfane.
