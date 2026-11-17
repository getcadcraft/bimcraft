---
title: Hold ressursdata og en vedlikeholdslogg i modellen
summary: Bruk den overleverte IFC-modellen til å drive bygningen: produsent, modell, serienummer, garanti og levetid for utstyr og armatur, og en logg over utført vedlikehold, alt skrevet inn i IFC-filen.
keywords: overlevering, ferdigattest, brukstillatelse, som bygget, as-built, overleveringspakke, ressurser, ressursregister, eiendomsforvaltning, fm, drift, vedlikehold, service, garanti, serienummer, strekkode, produsent, modell, levetid, overlevering, cobie, digital tvilling, forfalt, forfaller, arbeidsordre
from: b84ac492
---

Fanen {{ui:Ressurser}} i høyre panel gjør den åpne IFC-modellen om til en oversikt over bygningens utstyr. Alt skrives inn i selve IFC-filen, i IFCs egne egenskapssett og oppgaver, slik at neste program som åpner filen også leser det. Ingenting lastes opp, og ingen server trengs: lagre IFC-filen for å beholde den.

## Hva som listes

- Utstyr og armatur: møbler, sanitærutstyr, lysarmaturer, hvitevarer, luftterminaler, ventiler, pumper, vifter, kjeler, tanker, uttak, koblingstavler, heiser og andre slike elementer, og bibliotekselementer med utstyrsdata.
- Ethvert annet element du **følger**: velg det i modellen (en dør, en vegg, en pumpe tegnet som et vanlig objekt) og klikk {{ui:Følg valgte}}.
- Alt som allerede har ressursdata eller en vedlikeholdsoppgave, skrevet her eller av et annet program.

Forfalt kommer først, deretter det som forfaller innen 30 dager. Filtrer etter navn, merkelapp, produsent, modell eller serienummer, etter etasje, eller kryss av {{ui:Bare forfalt eller forfaller innen 30 dager}}.

## Ressursdata

Klikk en ressurs i listen (eller velg den i modellen) for å åpne dataene: produsent, modell, modellreferanse, serienummer, strekkode, dagen den ble installert, garantinummeret og start og slutt for den, og levetiden i år. {{ui:Lagre dataene}} skriver dem i ett steg ({{key:Mod+Z}} angrer det). La en boks stå tom for å fjerne den verdien.

## Dokumenter

Under dataene lister {{ui:Dokumenter}} bruksanvisninger, garantier, bilder, sertifikater og tegninger knyttet til ressursen. Velg typen, gi den en tittel (eller la den stå tom: filnavnet brukes) og skriv hvor den er:

- en **webadresse** (`https://…`): den får en Åpne-lenke som åpnes i en ny fane;
- eller et **filnavn eller en sti** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, en nettverksdeling): behold filene ved siden av IFC-filen, i samme mappe eller en under den, slik at navnene fortsatt fungerer når du overleverer mappen. BimCraft viser navnet; åpne filen fra mappen.

Filene selv lastes aldri opp og kopieres ikke inn i IFC-filen: bare lenken skrives. En webadresse med passord i, og enhver lenke som ikke er en webadresse eller en fil (for eksempel `javascript:`), avvises. {{ui:Fjern}} tar et dokument bort fra ressursen (ett steg; {{key:Mod+Z}} angrer det).

Dokumenter et annet program har lagt på elementet, listes også. Dokumenter på elementets **type** vises på alle elementer av den typen og sier det; endre dem der typen ble laget.

I IFC-filen er hvert dokument en IFC-dokumentreferanse knyttet til elementet, med typen lagret på den koblingen, i både IFC4 og IFC2X3.

## Vedlikeholdsloggen

Under dokumentene: {{ui:Registrer utført arbeid}}: dagen det ble utført, arbeidet, hvem som utførte det, når det neste gang forfaller, og notater. Hvert innslag er ett steg; {{ui:Rediger}} og {{ui:Slett}} endrer det senere. Det nyeste innslagets neste forfallsdato avgjør om ressursen er forfalt eller forfaller snart.

## Slik lagres det i IFC-filen

- Produsent og modell i `Pset_ManufacturerTypeInformation`, serienummer, strekkode og installasjonsdagen i `Pset_ManufacturerOccurrence`, garantien i `Pset_Warranty`, levetiden i `Pset_ServiceLife`, på selve elementet. Når elementets type allerede har produsent eller modell, vises den til du skriver din egen.
- Hvert vedlikeholdsinnslag er en IFC-**oppgave** av vedlikeholdstypen, knyttet til elementet, med datoene sine (i IFC4 også som oppgavens egne tider) og et sett `CadCraft_Maintenance` med dagen, hvem som utførte det og neste forfallsdag.
- Verdier som et annet element deler, kopieres først: å endre én ressurs endrer aldri naboene.
- I eldre IFC2X3-filer skrives datoene som tekst (ÅÅÅÅ-MM-DD); den versjonen vil ha en egen datopost der, som BimCraft ikke skriver.

## Sensoravlesninger

Åpne {{ui:Sensorverdier}} og {{ui:Åpne målinger (CSV)…}} for å hente avlesninger eksportert fra et bygningsstyringssystem, en datalogger eller et regneark:

- **Den første kolonnen er tidspunktet**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` eller Unix-sekunder. Et tidspunkt uten sone leses i datamaskinens egen tidssone. Dager først, som `23/10/2026`, leses ikke (de er tvetydige); eksporter ISO-datoer.
- **Hver annen kolonne er én sensor**, med overskriften satt til ressursens **merkelapp**, **navn** eller **GlobalId**. En overskrift som ikke samsvarer med noen ressurs, eller med mer enn én, listes og utelates. Komma, semikolon eller tabulatorer skiller kolonnene; med semikolon eller tabulatorer leses også et desimalkomma (`21,5`).
- Tidspunkter eller verdier som ikke kan leses (et ord, en enhet skrevet i cellen), telles og utelates. De gjettes aldri.

Siste avlesning vises i listens kolonne {{ui:Måling}} og i ressursens {{ui:Sensor}}-blokk, med et **diagram** over alle avlesninger (på en telefon venter diagrammene til du trykker på {{ui:Vis diagrammet}}). Sett en **nedre og en øvre grense** og en enhet på en ressurs, og klikk {{ui:Lagre grensene}}: en avlesning utenfor dem flagger ressursen. Kryss av {{ui:Vis på modellen}} for å farge hver ressurs etter avlesningen: blå under nedre grense, grønn innenfor grensene og rød over øvre grense. For ressurser uten grenser brukes én blå skala fra laveste til høyeste avlesning. Avlesningen vises som etikett (opptil 60 etiketter, de flaggede først).

**Avlesningene blir i denne nettleserfanen**: de lagres ikke i IFC-filen og sendes ikke noe sted; åpne CSV-filen på nytt neste gang. **Grensene lagres i IFC-filen** (et `CadCraft_Sensor`-sett på elementet: Low, High, Unit), så neste person som åpner filen ser de samme flaggene.

## Direkte avlesninger

{{ui:Direkte strøm}} leser verdier etter hvert som de oppstår, **rett fra denne nettleseren til ditt eget system**. Ingenting går via serveren vår, og ingenting lagres noe sted annet enn i nettleserfanen. Ingenting kobles til når en fil åpnes: bare {{ui:Koble til}} gjør det.

- **MQTT over WebSockets**: adressen til brokerens WebSocket-lytter (`wss://broker.example.com:8884/mqtt`), og ett eller flere emner med `{tag}` der ressursens merkelapp skal stå, for eksempel `site/{tag}/temperature`. BimCraft abonnerer da på `site/+/temperature` og leser merkelappen fra hver meldings emne. Emner uten `{tag}` nevner sensoren selv. En melding er enten et vanlig tall (`21.5`) eller JSON, for eksempel `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}`. Sett {{ui:Verdifelt i JSON}} hvis ditt felt heter noe annet.
- **Spør en adresse (HTTP)**: en webadresse som bygningsstyringssystemet ditt eller et lite skript av deg svarer på, spurt med et fast antall sekunder mellom hver gang (minst 5). Den kan svare med JSON nøklet på merkelapp (`{"AHU-1": 21.5}`), en JSON-liste (`[{"tag": "AHU-1", "value": 21.5}]`), eller en CSV med avlesninger som den over. Svarer den ikke, venter BimCraft dobbelt så lenge før neste spørring, opptil fem minutter.

Hver avlesning går til ressursen som merkelappen, navnet eller GlobalId-en oppgir, akkurat som en CSV-kolonne ville gjort. Navn som ikke samsvarer med noen ressurs, listes. Avlesningene går inn i {{ui:Sensorverdier}}: listen, diagrammene, grensene og fargene i modellen fungerer på samme måte.

**Passordet eller tokenet ditt** skrives for én tilkobling: det sendes til tilkoblingen, og boksen tømmes. Det lagres aldri i denne nettleseren eller i IFC-filen. Et token sendes som en standard `Authorization: Bearer`-header, og ingen informasjonskapsler sendes.

{{ui:Behold disse innstillingene i IFC-filen}} skriver adressen, emnene, verdifeltet og hvor ofte det spørres, inn i modellen (et `CadCraft_Feed`-sett på prosjektet; det finnes ikke noe felt for passord). Da skriver neste person som åpner filen bare inn sin egen innlogging og klikker {{ui:Koble til}}. Ikke legg et passord eller en nøkkel i selve adressen: en adresse med brukernavn og passord i den avvises.

:::note
**Hva brokeren eller adressen din trenger.** En nettleserside kan bare snakke med en server som tillater det:
- Siden er sikker (https), så nettleseren kobler bare til `wss://`- og `https://`-adresser, unntatt på din egen datamaskin (`localhost`), der `ws://` og `http://` fungerer for testing.
- En HTTP-adresse må tillate forespørsler fra denne siden (CORS: headeren `Access-Control-Allow-Origin`, og `Authorization` blant de tillatte headerne hvis du bruker token).
- De fleste brokere (Mosquitto, EMQX, HiveMQ og andre) tilbyr en WebSocket-lytter. Den er ofte av til den slås på. BimCraft bruker MQTT 3.1.1.
:::

Det finnes **ingen varsler** når BimCraft er lukket: grensene flagger en ressurs bare mens modellen er åpen og en strøm er tilkoblet. Å følge en bygning døgnet rundt krever en server, som BimCraft ikke kjører.

## COBie-regneark

**COBie** er overleveringsregnearket mange eiere og driftsteam ber om (utgitt av National BIM Standard i USA; BS 1192-4 i Storbritannia). Åpne {{ui:COBie-regneark}} i fanen:

- {{ui:Lagre som COBie (.xlsx)}} skriver COBie 2.4-arkene (Contact, Facility, Floor, Space, Type, Component, System, Job, Document og Attribute) fra modellen og ressursdataene: bygningen, etasjene og romene (arealer fra modellens mengder), hver ressurs som en komponent med serienummer, installasjonsdag, garantistart, merkelapp og strekkode, dens type med produsent, modell, levetid og garantilengde, systemene den hører til, vedlikeholdsloggen som jobber, og de tilknyttede dokumentene. Hver komponent bærer elementets IFC-GlobalId. Skriv inn e-postadressen din for COBies kolonne «created by», eller la den stå tom (da står det n/a). Verdier modellen ikke har, står **n/a**. Kategorikolonnene inneholder IFC-klassen, ikke en OmniClass-kode.
- {{ui:Les et COBie-regneark…}} leser et tilbake, fra BimCraft eller et annet program, og **lister alle endringer først**: hvilken ressurs, hvilken verdi, fra hva til hva, og nye dokumenter. {{ui:Bruk}} skriver dem alle i ett steg ({{key:Mod+Z}} angrer det). Rader matches først på GlobalId, deretter på komponentens navn. Rader som ikke samsvarer med noe i modellen, listes og legges ikke til.

Regnearket behandles som ikke pålitelig: formler leses aldri eller kjøres (bare verdien sist lagret i cellen). En verdi som ville gjort at en garanti slutter før den starter, og en dokumentlenke som ikke er en webadresse eller et filnavn, utelates og telles. Svært store arbeidsbøker avvises. COBies jobber er typens planlagte arbeid, så de skrives ut, men leses ikke tilbake. I regnearket BimCraft skriver, merkes tekst som et regneark kunne tolke som en formel (som begynner med `=`, `+`, `-` eller `@`), som tekst.

Arbeidsboken er i våre tester kontrollert mot en uavhengig regnearkleser. Den har ikke vært gjennom en COBie-validator. Hvis et mottakende team kjører en, si fra til oss hva den sier.

## Overleveringsdokumenter

Papirene som går til eieren med den ferdige bygningen, hører til prosjektet, ikke til én ressurs. Åpne {{ui:Overleveringsdokumenter}} på fanen {{ui:Ressurser}}:

1. {{ui:Legg til et dokument}}, velg typen (ferdigattest, brukstillatelse, garanti, bruksanvisning, som-bygget-tegninger eller annet), og skriv inn tittel, utstedelsesdato, hvem som utstedte den og referansenummeret.
2. Angi hvor den er: en webadresse, et filnavn ved siden av IFC-filen, eller {{ui:Legg ved en fil}}.
3. {{ui:Legg til i listen}}. {{ui:Rediger}} og {{ui:Fjern}} endrer listen; hver er ett steg du kan angre.

{{ui:Bygg overleveringspakken}} laster ned én zip-fil: en forside som lister hvert dokument, den samme listen som regneark, COBie-arbeidsboken (dokumentene står på Document-arket, som rader om Facility), modellen og hver vedlagt fil. En ferdigattest eller brukstillatelse som ikke står i listen ennå, nevnes på forsiden; pakken bygges likevel.

Modellen i pakken er **som-bygget-modellen**: den sier hvilke elementer som ble målt på stedet. Med den finnes i mappen `as-built`: erklæringen, en liste over hvert element med verifiseringsstatus, tegningssettet slik det er nå som én PDF (som-bygget-tegningene), og endringsloggen for tegningene når modellen har utstedte sett. Se [Merk elementer som kontrollert eller verifisert på stedet](topic:verification).

- I IFC-filen er hvert dokument en IfcDocumentInformation knyttet til prosjektet (IfcRelAssociatesDocument), med tittel, referanse, dato, utsteder og sted, så andre programmer kan liste det.
- En vedlagt fil registreres med navn, størrelse og SHA-256. For å beholde selve filen med prosjektet, bruk {{ui:Lagre prosjektet som en pakke}} (en .ccbundle holder modellen og de vedlagte filene; når den åpnes, får du dem tilbake, hver kontrollert mot sin oppføring). En vanlig lagring spør hva du vil.
- En vanlig .ifc beholder oppføringen, ikke filen. Etter åpning bruker du {{ui:Legg ved filen på nytt}}. Den samme filen gjenkjennes; en annen erstatter oppføringen.

## CSV

{{ui:CSV}} lagrer hver ressurs med sine data, hvert vedlikeholdsinnslag og hvert dokument, ett i hver rad, for et regneark eller et annet vedlikeholdsprogram.

:::note
Ikke bygget ennå: en hostet tjeneste som lagrer avlesninger og sender varsler når BimCraft er lukket, og å lese COBies jobber tilbake. Se [Ikke bygget ennå](topic:not-built-yet).
:::
