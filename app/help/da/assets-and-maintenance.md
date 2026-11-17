---
title: Gem aktivdata og en vedligeholdelsesjournal i modellen
summary: Brug den afleverede IFC-model til drift af bygningen: fabrikant, model, serienummer, garanti og levetid for udstyr og installationer, samt en journal over udført vedligeholdelse, alt skrevet ind i IFC'en.
keywords: aflevering, færdigmeldingsbevis, ibrugtagningstilladelse, som-bygget, afleveringspakke, aktiver, aktivregister, facility management, fm, drift, vedligeholdelse, service, garanti, serienummer, stregkode, fabrikant, producent, model, levetid, aflevering, cobie, digital tvilling, forfalden, forfalder, arbejdsordre
from: b84ac492
---

Fanen {{ui:Aktiver}} i højre panel gør den åbne IFC-model til en fortegnelse over bygningens udstyr. Alt skrives ind i selve IFC'en, i IFC's egne egenskabssæt og opgaver, så det næste program, der åbner filen, også læser det. Intet uploades, og der kræves ingen server: gem IFC'en for at beholde den.

## Hvad der står på listen

- Udstyr og installationer: møbler, sanitetsudstyr, belysningsarmaturer, hvidevarer, luftterminaler, ventiler, pumper, ventilatorer, kedler, tanke, udtag, tavler, elevatorer og andre sådanne elementer, samt biblioteksemner med udstyrsdata.
- Ethvert andet element, du **følger**: vælg det i modellen (en dør, en væg, en pumpe tegnet som et almindeligt objekt), og klik på {{ui:Følg valgte}}.
- Alt, der allerede har aktivdata eller en vedligeholdelsesopgave, skrevet her eller af et andet program.

Det forfaldne kommer først, derefter det, der forfalder inden for 30 dage. Filtrér efter navn, mærke, fabrikant, model eller serienummer, efter etage, eller sæt flueben ved {{ui:Kun forfaldne eller forfalder inden for 30 dage}}.

## Aktivdata

Klik på et aktiv på listen (eller vælg det i modellen) for at åbne dets data: fabrikant, model, modelreference, serienummer, stregkode, den dag det blev installeret, garantinummeret og dets start og slut, samt dets levetid i år. {{ui:Gem data}} skriver dem i ét trin ({{key:Mod+Z}} fortryder det). Lad en boks stå tom for at fjerne den værdi.

## Dokumenter

Under dataene lister {{ui:Dokumenter}} manualer, garantier, fotos, certifikater og tegninger, der er knyttet til aktivet. Vælg typen, giv den en titel (eller lad den stå tom: filnavnet bruges), og angiv hvor den er:

- en **webadresse** (`https://…`): den får et Åbn link-link, der åbner i en ny fane;
- eller et **filnavn eller en sti** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, et netværksdrev): behold filerne ved siden af IFC'en, i samme mappe eller en under den, så navnene stadig virker, når du giver mappen videre. BimCraft viser navnet; åbn filen fra mappen.

Filerne selv bliver aldrig uploadet eller kopieret ind i IFC'en: kun linket skrives. En webadresse med en adgangskode i, og ethvert link, der hverken er en webadresse eller en fil (fx `javascript:`), afvises. {{ui:Fjern}} tager et dokument af aktivet (ét trin; {{key:Mod+Z}} fortryder det).

Dokumenter, et andet program har lagt på elementet, vises også. Dokumenter på elementets **type** vises på hvert element af typen og siger det; ret dem der, hvor typen blev lavet.

I IFC'en er hvert dokument en IFC-dokumentreference knyttet til elementet, med dets type gemt på forbindelsen, i både IFC4 og IFC2X3.

## Vedligeholdelsesjournalen

Under dokumenterne: {{ui:Registrér udført arbejde}}: den dag det blev udført, arbejdet, hvem der udførte det, hvornår det næste skal laves, og noter. Hvert punkt er ét trin; {{ui:Rediger}} og {{ui:Slet}} ændrer det senere. Det nyeste punkts næste forfaldsdato afgør, om aktivet er forfalden eller snart forfalder.

## Sådan gemmes det i IFC'en

- Fabrikant og model i `Pset_ManufacturerTypeInformation`, serienummer, stregkode og installationsdagen i `Pset_ManufacturerOccurrence`, garantien i `Pset_Warranty`, levetiden i `Pset_ServiceLife`, på selve elementet. Når elementets type allerede angiver en fabrikant eller model, vises den, indtil du skriver din egen.
- Hvert vedligeholdelsespunkt er en IFC-**opgave** af vedligeholdelsestypen, knyttet til elementet, med dets datoer (i IFC4 også som opgavens egne tider) og et `CadCraft_Maintenance`-sæt med dagen, hvem der udførte det, og den næste forfaldsdag.
- Værdier, som andre elementer deler, kopieres først: ændring af ét aktiv ændrer aldrig dets naboer.
- I ældre IFC2X3-filer skrives datoerne som tekst (YYYY-MM-DD); den version kræver en særskilt datopost, som BimCraft ikke skriver.

## Sensoraflæsninger

Åbn {{ui:Sensorværdier}} og {{ui:Åbn aflæsninger (CSV)…}} for at hente aflæsninger, der er eksporteret fra et bygningsstyringssystem, en datalogger eller et regneark:

- **Den første kolonne er tidspunktet**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` eller Unix-sekunder. Et tidspunkt uden tidszone læses i din computers egen tidszone. Datoer med dag først, såsom `23/10/2026`, læses ikke (de er tvetydige); eksportér ISO-datoer.
- **Hver anden kolonne er én sensor**, med en overskrift lig aktivets **mærke**, **navn** eller **GlobalId**. En overskrift, der ikke matcher noget aktiv, eller matcher flere, vises på listen og udelades. Kommaer, semikolon eller tabulatorer adskiller kolonnerne; med semikolon eller tabulatorer læses et decimalkomma (`21,5`) også.
- Tider eller værdier, der ikke kan læses (et ord, en enhed skrevet i cellen), tælles og udelades, aldrig gættes.

Den seneste aflæsning vises i listens kolonne {{ui:Aflæsning}} og i aktivets {{ui:Sensor}}-blok, med et **diagram** over alle aflæsninger (på en telefon venter diagrammer, til du trykker på {{ui:Vis diagrammet}}). Angiv en **nedre og øvre grænse** og en enhed på et aktiv, og klik på {{ui:Gem grænserne}}: en aflæsning uden for dem markerer aktivet. Sæt flueben ved {{ui:Vis på modellen}} for at farvelægge hvert aktiv efter dets aflæsning — blåt under dets nedre grænse, grønt inden for grænserne og rødt over den øvre grænse, og for aktiver uden grænser en enkelt blå skala fra den laveste til den højeste aflæsning — med aflæsningen som etiket (op til 60 etiketter, de markerede først).

**Aflæsninger bliver i denne browserfane**: de gemmes ikke i IFC'en og sendes ingen steder hen; åbn CSV-filen igen næste gang. **Grænserne gemmes i IFC'en** (et `CadCraft_Sensor`-sæt på elementet: Low, High, Unit), så den næste person, der åbner filen, ser de samme markeringer.

## Live-aflæsninger

{{ui:Live-feed}} læser værdier, efterhånden som de sker, **direkte fra denne browser til dit eget system**. Intet går gennem vores server, og intet gemmes andre steder end i din browserfane. Intet forbinder, når en fil åbnes: kun {{ui:Opret forbindelse}} gør det.

- **MQTT over WebSockets**: adressen på din brokers WebSocket-lytter (`wss://broker.example.com:8884/mqtt`), og et eller flere emner med `{tag}` der, hvor aktivets mærke skal stå, fx `site/{tag}/temperature` (BimCraft abonnerer på `site/+/temperature` og læser mærket fra hver beskeds emne). Emner uden `{tag}` navngiver selve sensoren. En besked er enten et almindeligt tal (`21.5`) eller JSON, fx `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (angiv {{ui:Værdifelt i JSON}}, hvis dit hedder noget andet).
- **Spørg en adresse (HTTP)**: en webadresse, dit bygningsstyringssystem eller et lille script af dig svarer på, og spørges hvert nogle sekunder (mindst 5). Den kan svare med JSON nøglet efter mærke (`{"AHU-1": 21.5}`), en JSON-liste (`[{"tag": "AHU-1", "value": 21.5}]`) eller en CSV med aflæsninger som ovenfor. Svarer den ikke, venter BimCraft dobbelt så længe før næste forespørgsel, op til fem minutter.

Hver aflæsning går til det aktiv, hvis mærke, navn eller GlobalId den nævner, præcis som en CSV-kolonne ville; navne, der ikke matcher noget aktiv, vises på listen. Aflæsningerne føjes til {{ui:Sensorværdier}}: listen, diagrammerne, grænserne og farverne på modellen virker på samme måde.

**Din adgangskode eller dit token** indtastes til én forbindelse: den gives til forbindelsen, og boksen tømmes; den gemmes aldrig i denne browser eller i IFC'en. Et token sendes som en standard `Authorization: Bearer`-header, og der sendes ingen cookies.

{{ui:Behold disse indstillinger i IFC'en}} skriver adressen, emnerne, værdifeltet og hvor ofte der spørges ind i modellen (et `CadCraft_Feed`-sæt på projektet; der er intet felt til en adgangskode), så den næste person, der åbner filen, kun indtaster sit eget login og klikker på {{ui:Opret forbindelse}}. Læg ikke en adgangskode eller nøgle i selve adressen: en adresse med et brugernavn og en adgangskode i afvises.

:::note
**Hvad din broker eller adresse kræver.** En browserside kan kun tale med en server, der tillader det:
- Siden er sikker (https), så browseren kun forbinder til `wss://`- og `https://`-adresser — undtagen på din egen computer (`localhost`), hvor `ws://` og `http://` virker til test.
- En HTTP-adresse skal tillade forespørgsler fra denne side (CORS: headeren `Access-Control-Allow-Origin`, og `Authorization` blandt de tilladte headers, hvis du bruger et token).
- De fleste brokere (Mosquitto, EMQX, HiveMQ og andre) tilbyder en WebSocket-lytter; den er ofte slået fra, indtil den tændes. BimCraft taler MQTT 3.1.1.
:::

Der er **ingen alarmer**, når BimCraft er lukket: grænser markerer et aktiv, mens modellen er åben med en feed forbundet. At holde øje med en bygning døgnet rundt kræver en server, som BimCraft ikke kører.

## COBie-regneark

**COBie** er afleveringsregnearket, som mange bygherrer og driftsteam beder om (udgivet af National BIM Standard i USA; BS 1192-4 i Storbritannien). Åbn {{ui:COBie-regneark}} i fanen:

- {{ui:Gem som COBie (.xlsx)}} skriver COBie 2.4-arkene — Contact, Facility, Floor, Space, Type, Component, System, Job, Document og Attribute — ud fra modellen og aktivdataene: bygningen, dens etager og rum (arealer fra modellens mængder), hvert aktiv som en komponent med serienummer, installationsdag, garantistart, mærke og stregkode, dets type med fabrikant, model, levetid og garantilængde, de systemer det hører til, vedligeholdelsesjournalen som jobs og de knyttede dokumenter. Hver komponent bærer elementets IFC GlobalId. Skriv din e-mailadresse i COBies kolonne "created by", eller lad den stå tom (så står der n/a). Værdier, modellen ikke har, siger **n/a**; kategorikolonnerne indeholder IFC-klassen, ikke en OmniClass-kode.
- {{ui:Læs et COBie-regneark…}} læser et tilbage, fra BimCraft eller et andet program, og **lister hver ændring først**: hvilket aktiv, hvilken værdi, fra hvad til hvad, og nye dokumenter. {{ui:Anvend}} skriver dem alle i ét trin ({{key:Mod+Z}} fortryder det). Rækker matches efter GlobalId, derefter efter komponentens navn. Rækker, der ikke matcher noget i modellen, vises på listen, men tilføjes ikke.

Et regneark behandles som ikke-betroet: formler læses eller køres aldrig (kun den værdi, der sidst blev gemt i cellen), en værdi der ville få en garanti til at slutte før den starter, og et dokumentlink, der hverken er en webadresse eller et filnavn, udelades og tælles, og meget store arbejdsbøger afvises. COBies jobs er en types planlagte arbejde, så de skrives ud, men ikke læses tilbage. I det regneark BimCraft skriver, markeres tekst, som et regneark kunne tage for en formel (startende med `=`, `+`, `-` eller `@`), som tekst.

Arbejdsbogen er i vores tests kontrolleret mod en uafhængig regnearkslæser; den er ikke blevet gennemgået af en COBie-validator. Hvis et modtagende team kører en, så fortæl os, hvad den siger.

## Afleveringsdokumenter

Papirerne, der følger med den færdige bygning til bygherren, hører til projektet, ikke til ét aktiv. Åbn {{ui:Afleveringsdokumenter}} på fanen {{ui:Aktiver}}:

1. {{ui:Tilføj et dokument}}, vælg dets type (færdigmeldingsbevis, ibrugtagningstilladelse, garanti, manual, som-byggede tegninger, andet), og skriv dets titel, udstedelsesdato, hvem der udstedte det og dets referencenummer.
2. Angiv hvor det er: en webadresse, et filnavn gemt ved siden af IFC'en, eller {{ui:Vedhæft en fil}}.
3. {{ui:Føj til listen}}. {{ui:Rediger}} og {{ui:Fjern}} ændrer listen; hvert er ét trin, du kan fortryde.

{{ui:Byg afleveringspakken}} downloader én zip-fil: en forside med alle dokumenterne, den samme liste som et regneark, COBie-arbejdsbogen (dokumenterne står på dens Document-ark, som rækker om Facility), modellen og hver vedhæftet fil. Et færdigmeldingsbevis eller en ibrugtagningstilladelse, der endnu ikke står på listen, nævnes på forsiden; pakken bygges alligevel.

Modellen i pakken er **den som-byggede model**: den angiver, hvilke elementer der er målt på stedet. Med den, i mappen `as-built`: erklæringen, en liste over hvert element med dets verifikationsstatus, tegningssættet, som det er nu, som én PDF (de som-byggede tegninger), og tegningernes ændringslog, når modellen har udstedte sæt. Se [Markér elementer som kontrolleret eller verificeret på stedet](topic:verification).

- I IFC-filen er hvert dokument en IfcDocumentInformation knyttet til projektet (IfcRelAssociatesDocument), med dets titel, reference, dato, udsteder og sted, så andre programmer kan vise det.
- Et vedhæftet fil registreres med navn, størrelse og SHA-256. For at gemme selve filen sammen med projektet, brug {{ui:Gem projektet som en pakke}} (en .ccbundle indeholder modellen og de vedhæftede filer; åbner du den, får du dem tilbage, hver kontrolleret mod sin registrering). En almindelig gem spørger, hvilken du vil have.
- En almindelig .ifc gemmer registreringen, ikke filen: efter at have åbnet den, brug {{ui:Vedhæft filen igen}}. Den samme fil genkendes; en anden fil erstatter registreringen.

## CSV

{{ui:CSV}} gemmer hvert aktiv med dets data, hvert vedligeholdelsespunkt og hvert dokument, én række hver, til et regneark eller et andet vedligeholdelsesprogram.

:::note
Ikke lavet endnu: en hostet tjeneste, der gemmer aflæsninger og sender alarmer, mens BimCraft er lukket, og læsning af COBies jobs tilbage. Se [Ikke lavet endnu](topic:not-built-yet).
:::
