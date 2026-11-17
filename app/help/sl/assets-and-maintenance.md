---
title: Hranite podatke o sredstvih in evidenco vzdrževanja v modelu
summary: Uporabite predan IFC model za upravljanje stavbe: proizvajalec, model, serijska številka, garancija in življenjska doba opreme ter inventarja ter evidenca opravljenega vzdrževanja, vse zapisano v IFC.
keywords: primopredaja, potrdilo o dokončanju, potrdilo o uporabi, kot grajeno, paket za primopredajo, sredstva, register sredstev, upravljanje objektov, fm, obratovanje, vzdrževanje, servis, garancija, serijska številka, črtna koda, proizvajalec, model, življenjska doba, cobie, digitalni dvojček, zamujeno, rok, delovni nalog
from: b84ac492
---

Zavihek {{ui:Assets}} v desnem podoknu spremeni odprt IFC model v evidenco opreme stavbe. Vse je zapisano v samem IFC, v lastnih naborih lastnosti in opravilih IFC, zato jo prebere tudi naslednji program, ki odpre datoteko. Ničesar se ne naloži in strežnik ni potreben: datoteko IFC shranite, da ohranite spremembe.

## Kaj je našteto

- Oprema in inventar: pohištvo, sanitarni inventar, svetila, aparati, zračni priključki, ventili, črpalke, ventilatorji, kotli, rezervoarji, izhodi, stikalne plošče, dvigala in drugi taki elementi ter elementi knjižnice s podatki o opremi.
- Vsak drug element, ki ga **spremljate**: izberite ga v modelu (vrata, zid, črpalka, narisana kot navaden objekt) in kliknite {{ui:Track picked}}.
- Vse, kar že ima podatke o sredstvu ali nalogo vzdrževanja, zapisano tukaj ali z drugim programom.

Najprej je tisto, kar je zamujeno, nato tisto, kar zapade v 30 dneh. Filtrirate lahko po imenu, oznaki, proizvajalcu, modelu ali serijski številki, po etaži ali obkljukate {{ui:Only overdue or due within 30 days}}.

## Podatki o sredstvu

Kliknite sredstvo na seznamu (ali ga izberite v modelu), da odprete njegove podatke: proizvajalec, model, referenca modela, serijska številka, črtna koda, dan namestitve, številka garancije ter njen začetek in konec ter življenjska doba v letih. {{ui:Save the data}} jih zapiše v enem koraku ({{key:Mod+Z}} to razveljavi). Pustite polje prazno, da odstranite vrednost.

## Dokumenti

Pod podatki {{ui:Documents}} so navedeni priročniki, garancije, fotografije, potrdila in risbe, povezane s sredstvom. Izberite vrsto, dajte naslov (ali ga pustite prazen: uporabi se ime datoteke) in vnesite, kje je:

- **spletni naslov** (`https://…`): dobi povezavo Odpri povezavo, ki se odpre v novem zavihku;
- ali **ime datoteke ali pot** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, omrežna mapa): datoteke hranite poleg IFC, v isti mapi ali v podmapi, da imena delujejo tudi, ko mapo predate. BimCraft prikaže ime; datoteko odprite iz mape.

Datoteke same se nikoli ne naložijo ali kopirajo v IFC: zapiše se samo povezava. Spletni naslov z geslom v njem in vsaka povezava, ki ni spletni naslov ali datoteka (na primer `javascript:`), sta zavrnjena. {{ui:Remove}} vzame dokument s sredstva (en korak; {{key:Mod+Z}} to razveljavi).

Dokumenti, ki jih je drug program pripel na element, so prav tako navedeni. Dokumenti na **tipu** elementa se prikažejo pri vsakem elementu tega tipa in to tudi povedo; te spremenite tam, kjer je bil tip narejen.

V IFC je vsak dokument referenca IFC dokumenta, povezana z elementom, z njeno vrsto na tej povezavi, enako v IFC4 in IFC2X3.

## Evidenca vzdrževanja

Pod dokumenti kliknite {{ui:Record work done}}: dan, ko je bilo opravljeno, delo, kdo ga je opravil, kdaj je naslednji rok in opombe. Vsak vnos je en korak; {{ui:Edit}} in {{ui:Delete}} ga pozneje spremenita. Naslednji rok najnovejšega vnosa odloči, ali je sredstvo zamujeno ali kmalu zapade.

## Kako je shranjeno v IFC

- Proizvajalec in model v `Pset_ManufacturerTypeInformation`, serijska številka, črtna koda in dan namestitve v `Pset_ManufacturerOccurrence`, garancija v `Pset_Warranty`, življenjska doba v `Pset_ServiceLife`, vse na samem elementu. Če tip elementa že ima proizvajalca ali model, se prikaže, dokler ne vnesete svojega.
- Vsak vnos vzdrževanja je IFC **opravilo** vrste vzdrževanja, povezano z elementom, z datumi (v IFC4 tudi kot lastna časa opravila) in naborom `CadCraft_Maintenance` z dnem, kdo ga je opravil in dnem naslednjega roka.
- Vrednosti, ki jih delijo drugi elementi, se najprej kopirajo: sprememba enega sredstva nikoli ne spremeni sosedov.
- V starejših IFC2X3 datotekah so datumi zapisani kot besedilo (`YYYY-MM-DD`); ta različica tam zahteva ločen zapis datuma, ki ga BimCraft ne zapisuje.

## Odčitki senzorjev

Odprite {{ui:Sensor values}} in {{ui:Open readings (CSV)…}}, da uvozite odčitke, izvožene iz sistema za upravljanje stavbe, podatkovnega beležilnika ali preglednice:

- **prvi stolpec je čas**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` ali sekunde Unix. Čas brez časovnega pasu se prebere v časovnem pasu vašega računalnika. Datumi z dnevom na prvem mestu, kot `23/10/2026`, se ne preberejo (so dvoumni); izvozite ISO datume.
- **vsak drug stolpec je en senzor**, z naslovom njegove **oznake**, **imena** ali **GlobalId** sredstva. Naslov, ki ne ustreza nobenemu sredstvu ali jih ustreza več, je naveden in izpuščen. Stolpci so ločeni z vejicami, podpičji ali tabulatorji; pri podpičjih ali tabulatorjih se prebere tudi decimalna vejica (`21,5`).
- Časi ali vrednosti, ki se ne preberejo (beseda, enota, vpisana v celico), se preštejejo in izpustijo, nikoli se jih ne ugiba.

Zadnji odčitek je prikazan v stolpcu {{ui:Reading}} seznama in v bloku {{ui:Sensor}} sredstva, z **grafikonom** vseh odčitkov (na telefonu grafikoni počakajo, da tapnete {{ui:Show the chart}}). Nastavite **spodnjo in zgornjo mejo** ter enoto na sredstvu in kliknite {{ui:Save the limits}}: odčitek zunaj mej označi sredstvo. Obkljukajte {{ui:Show on the model}}, da vsako sredstvo pobarvate po odčitku — modro pod spodnjo mejo, zeleno znotraj mej in rdeče nad zgornjo mejo ter, za sredstva brez mej, enotna modra lestvica od najnižjega do najvišjega odčitka — z odčitkom kot oznako (do 60 oznak, najprej označene).

**Odčitki ostanejo v tem zavihku brskalnika**: niso shranjeni v IFC in nikamor poslani; naslednjič znova odprite CSV. **Meje se shranijo v IFC** (nabor `CadCraft_Sensor` na elementu: Low, High, Unit), da naslednja oseba, ki odpre datoteko, vidi iste oznake.

## Odčitki v živo

{{ui:Live feed}} bere vrednosti sproti, **neposredno iz tega brskalnika v vaš sistem**. Nič ne gre prek našega strežnika in nič se ne shrani drugje kot v zavihku brskalnika. Ob odprtju datoteke se nič ne poveže: poveže se samo {{ui:Connect}}.

- **MQTT preko WebSockets**: naslov poslušalca WebSocket vašega posrednika (`wss://broker.example.com:8884/mqtt`) in ena ali več tem z `{tag}` na mestu, kjer gre oznaka sredstva, na primer `site/{tag}/temperature` (BimCraft se naroči na `site/+/temperature` in prebere oznako iz teme vsakega sporočila). Teme brez `{tag}` poimenujejo senzor same. Sporočilo je bodisi navadno število (`21.5`) bodisi JSON, na primer `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (nastavite {{ui:Value field in JSON}}, če se vaše polje imenuje drugače).
- **Vprašaj naslov (HTTP)**: spletni naslov, na katerega odgovarja vaš sistem za upravljanje stavbe ali vaša majhna skripta, vprašan vsakih nekaj sekund (vsaj 5). Lahko odgovori z JSON po oznakah (`{"AHU-1": 21.5}`), s seznamom JSON (`[{"tag": "AHU-1", "value": 21.5}]`) ali s CSV odčitkov, kot zgoraj. Če ne odgovori, BimCraft pred naslednjim vprašanjem počaka dvakrat dlje, največ pet minut.

Vsak odčitek gre sredstvu, katerega oznaka, ime ali GlobalId ga navaja, natanko kot stolpec CSV; imena, ki ne ustrezajo nobenemu sredstvu, so navedena. Odčitki se pridružijo {{ui:Sensor values}}: seznam, grafikoni, meje in barve na modelu delujejo enako.

**Vaše geslo ali žeton** se vpiše za eno povezavo: preda se povezavi, polje se izprazni; nikoli se ne shrani v tem brskalniku ali v IFC. Žeton gre kot standardna glava `Authorization: Bearer`, piškotki pa se ne pošiljajo.

{{ui:Keep these settings in the IFC}} zapiše naslov, teme, polje z vrednostjo in pogostost vprašanj v model (nabor `CadCraft_Feed` na projektu; polja za geslo ni), zato naslednja oseba, ki odpre datoteko, vpiše samo svojo prijavo in klikne {{ui:Connect}}. Ne dajte gesla ali ključa v sam naslov: naslov z uporabniškim imenom in geslom je zavrnjen.

:::note
**Kaj potrebuje vaš posrednik ali naslov.** Spletna stran lahko govori le s strežnikom, ki to dovoli:
- Stran je varna (https), zato se brskalnik poveže samo z naslovi `wss://` in `https://` — razen na vašem računalniku (`localhost`), kjer `ws://` in `http://` delujeta za preizkušanje.
- Naslov HTTP mora dovoliti zahteve s te strani (CORS: glava `Access-Control-Allow-Origin`, in `Authorization` med dovoljenimi glavami, če uporabljate žeton).
- Večina posrednikov (Mosquitto, EMQX, HiveMQ in drugi) ponuja poslušalca WebSocket; pogosto je izklopljen, dokler ga ne vklopite. BimCraft govori MQTT 3.1.1.
:::

Ko je BimCraft zaprt, **ni opozoril**: meje označijo sredstvo, dokler je model odprt in je povezan vir. Spremljanje stavbe ves čas zahteva strežnik, ki ga BimCraft ne poganja.

## Preglednica COBie

**COBie** je preglednica za primopredajo, ki jo pogosto zahtevajo lastniki in vzdrževalne ekipe (objavlja jo National BIM Standard v ZDA; BS 1192-4 v Veliki Britaniji). Odprite {{ui:COBie spreadsheet}} v zavihku:

- {{ui:Save as COBie (.xlsx)}} zapiše liste COBie 2.4 — Contact, Facility, Floor, Space, Type, Component, System, Job, Document in Attribute — iz modela in podatkov o sredstvih: stavbo, njene etaže in prostore (površine iz količin modela), vsako sredstvo kot komponento s serijsko številko, dnem namestitve, začetkom garancije, oznako in črtno kodo, njegov tip s proizvajalcem, modelom, življenjsko dobo in dolžino garancije, sisteme, ki jim pripada, evidenco vzdrževanja kot opravila ter povezane dokumente. Vsaka komponenta nosi IFC GlobalId elementa. Vnesite svoj e-poštni naslov za stolpec „created by“ ali ga pustite prazen (tedaj piše n/a). Vrednosti, ki jih model nima, pišejo **n/a**; stolpci kategorij nosijo razred IFC, ne kode OmniClass.
- {{ui:Read a COBie spreadsheet…}} jo prebere nazaj, iz BimCraft ali drugega programa, in **najprej našteje vse spremembe**: kateri sredstvo, katera vrednost, iz česa v kaj, in novi dokumenti. {{ui:Apply}} jih zapiše vse v enem koraku ({{key:Mod+Z}} to razveljavi). Vrstice se ujemajo po GlobalId, nato po imenu komponente. Vrstice, ki se ne ujemajo z ničemer v modelu, so navedene, ne dodane.

Preglednica je obravnavana kot nezaupanja vredna: formule se nikoli ne preberejo ali izvedejo (le zadnja shranjena vrednost celice), vrednost, zaradi katere bi se garancija končala, preden se začne, in povezava do dokumenta, ki ni spletni naslov ali ime datoteke, sta izpuščeni in prešteti, zelo veliki delovni zvezki pa zavrnjeni. Opravila COBie so načrtovano delo tipa, zato so zapisana, a se ne preberejo nazaj. V preglednici, ki jo zapiše BimCraft, je besedilo, ki bi ga preglednica lahko vzela za formulo (začne se z `=`, `+`, `-` ali `@`), označeno kot besedilo.

Delovni zvezek je v naših preizkusih preverjen z neodvisnim bralnikom preglednic; ni bil preverjen z validatorjem COBie. Če ga ekipa prejemnik zažene, nam sporočite, kaj pokaže.

## Primopredajni dokumenti

Papirji, ki gredo lastniku ob dokončani stavbi, pripadajo projektu, ne enemu sredstvu. Na zavihku {{ui:Assets}} odprite {{ui:Handover documents}}:

1. {{ui:Add a document}}, izberite vrsto (potrdilo o dokončanju, potrdilo o uporabi, garancija, priročnik, risbe kot zgrajeno, drugo) in vnesite naslov, datum izdaje, kdo je izdal in referenčno številko.
2. Povejte, kje je: spletni naslov, ime datoteke, shranjene poleg IFC, ali {{ui:Attach a file}}.
3. {{ui:Add to the list}}. {{ui:Edit}} in {{ui:Remove}} spremenita seznam; vsako je en korak, ki ga lahko razveljavite.

{{ui:Build the handover package}} prenese en zip: naslovno stran z vsemi dokumenti, isti seznam kot preglednica, delovni zvezek COBie (dokumenti so na njegovem listu Document, kot vrstice o Facility), model in vsako priloženo datoteko. Potrdilo o dokončanju ali uporabi, ki še ni na seznamu, je na naslovni strani navedeno; paket se vseeno sestavi.

Model v paketu je **model kot zgrajen**: pove, kateri elementi so bili izmerjeni na gradbišču. Z njim je v mapi `as-built`: izjava, seznam vsakega elementa z njegovim stanjem preverjanja, komplet risb, kakršen je zdaj, kot en PDF (risbe kot zgrajeno), in dnevnik sprememb risb, kadar ima model izdane komplete. Glejte [Označite elemente kot preverjene ali preverjene na terenu](topic:verification).

- V IFC datoteki je vsak dokument IfcDocumentInformation, povezan s projektom (IfcRelAssociatesDocument), z naslovom, referenco, datumom, izdajateljem in mestom, da ga drugi programi lahko navedejo.
- Priložena datoteka se zabeleži z imenom, velikostjo in SHA-256. Če želite datoteko samo hraniti s projektom, uporabite {{ui:Save the project as a bundle}} (.ccbundle hrani model in priložene datoteke; ko ga odprete, ju dobite nazaj, vsako preverjeno glede na zapis). Navadno shranjevanje vpraša, kaj želite.
- Navadna .ifc datoteka hrani zapis, ne datoteke: po odprtju uporabite {{ui:Attach the file again}}. Ista datoteka se prepozna; druga datoteka nadomesti zapis.

## CSV

{{ui:CSV}} shrani vsako sredstvo s podatki, vsak vnos vzdrževanja in vsak dokument, vsakega v svoji vrstici, za preglednico ali drug program za vzdrževanje.

:::note
Še ni izdelano: gostovana storitev, ki hrani odčitke in pošilja opozorila, ko je BimCraft zaprt, ter branje opravil COBie nazaj. Glejte [Še ni izdelano](topic:not-built-yet).
:::
