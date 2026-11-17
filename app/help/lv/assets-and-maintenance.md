---
title: Glabājiet aktīvu datus un apkopes ierakstu modelī
summary: Izmantojiet nodoto IFC modeli ēkas ekspluatācijai: ražotājs, modelis, sērijas numurs, garantija un kalpošanas laiks iekārtām un armatūrai, kā arī veikto apkopju ieraksts — viss ierakstīts IFC.
keywords: nodošana, pabeigšanas sertifikāts, lietošanas atļauja, izpildrasējums, nodošanas pakotne, aktīvi, aktīvu reģistrs, objektu pārvaldība, fm, ekspluatācija, apkope, serviss, garantija, sērijas numurs, svītrkods, ražotājs, modelis, kalpošanas laiks, nodošana, cobie, digitālais dvīnis, kavēts, jāizpilda, darba uzdevums
from: b84ac492
---

Cilne {{ui:Resursi}} labajā panelī pārvērš atvērto IFC modeli par ēkas iekārtu reģistru. Viss tiek ierakstīts pašā IFC, IFC savās rekvizītu kopās un uzdevumos, tāpēc nākamā programma, kas atvērs failu, to nolasīs arī. Nekas netiek augšupielādēts, un serveris nav vajadzīgs: saglabājiet IFC, lai to paturētu.

## Kas ir sarakstā

- Iekārtas un aprīkojums: mēbeles, sanitārtehnika, apgaismes ķermeņi, ierīces, gaisa izplūdes, vārsti, sūkņi, ventilatori, katli, tvertnes, kontaktligzdas, sadales skapji, lifti un citi līdzīgi elementi, kā arī bibliotēkas vienumi ar aprīkojuma datiem.
- Jebkurš cits elements, ko **izsekojat**: izvēlieties to modelī (durvis, siena, sūknis, zīmēts kā vienkāršs objekts) un noklikšķiniet uz {{ui:Izsekot atlasītos}}.
- Viss, kam jau ir aktīvu dati vai apkopes uzdevums, ierakstīts šeit vai citā programmā.

Kavētais ir pirmais, tad tas, kas jāizpilda 30 dienu laikā. Filtrējiet pēc nosaukuma, marķējuma, ražotāja, modeļa vai sērijas numura, pēc līmeņa, vai atzīmējiet {{ui:Tikai kavētie vai tie, kas jāizpilda 30 dienu laikā}}.

## Aktīvu dati

Noklikšķiniet uz aktīva sarakstā (vai izvēlieties to modelī), lai atvērtu tā datus: ražotājs, modelis, modeļa atsauce, sērijas numurs, svītrkods, diena, kad uzstādīts, garantijas numurs un tās sākums un beigas, kā arī kalpošanas laiks gados. {{ui:Saglabāt datus}} ieraksta tos vienā solī ({{key:Mod+Z}} atsauc). Atstājiet lauku tukšu, lai noņemtu vērtību.

## Dokumenti

Zem datiem {{ui:Dokumenti}} uzskaita rokasgrāmatas, garantijas, fotogrāfijas, sertifikātus un zīmējumus, kas saistīti ar aktīvu. Izvēlieties veidu, dodiet nosaukumu (vai atstājiet tukšu: tiks izmantots faila nosaukums) un norādiet, kur tas atrodas:

- **tīmekļa adrese** (`https://…`): tai ir atvēršanas saite, kas atveras jaunā cilnē;
- vai **faila nosaukums vai ceļš** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, tīkla resurss): turiet failus blakus IFC, tajā pašā mapē vai zem tās, lai nosaukumi strādā arī tad, kad nododat mapi. BimCraft rāda nosaukumu; atveriet failu no mapes.

Failus pašus nekad neaugšupielādē un nekopē IFC: tiek ierakstīta tikai saite. Tīmekļa adrese ar paroli, kā arī jebkura saite, kas nav tīmekļa adrese vai fails (piemēram, `javascript:`), tiek noraidīta. {{ui:Noņemt}} noņem dokumentu no aktīva (viens solis; {{key:Mod+Z}} atsauc).

Dokumenti, ko cita programma pievienojusi elementam, arī tiek uzskaitīti. Dokumenti uz elementa **tipa** rādās uz katra šī tipa elementa, un to tiek norādīts; mainiet tos vietā, kur tips izveidots.

IFC katrs dokuments ir IFC dokumenta atsauce, kas saistīta ar elementu, un tā veids saglabāts šajā saistībā, gan IFC4, gan IFC2X3.

## Apkopes ieraksts

Zem dokumentiem {{ui:Ierakstīt paveikto darbu}}: diena, kad darbs izpildīts, darbs, kas to izpildīja, kad nākamreiz jāizpilda un piezīmes. Katrs ieraksts ir viens solis; {{ui:Rediģēt}} un {{ui:Dzēst}} to maina vēlāk. Jaunākā ieraksta nākamais izpildes datums nosaka, vai aktīvs ir kavēts vai drīz jāizpilda.

## Kā tas glabājas IFC

- Ražotājs un modelis `Pset_ManufacturerTypeInformation`, sērijas numurs, svītrkods un uzstādīšanas diena `Pset_ManufacturerOccurrence`, garantija `Pset_Warranty`, kalpošanas laiks `Pset_ServiceLife` — pašā elementā. Ja elementa tipam jau ir ražotājs vai modelis, tas tiek rādīts, kamēr neievadāt savu.
- Katrs apkopes ieraksts ir IFC **uzdevums** apkopes veidā, saistīts ar elementu, ar saviem datumiem (IFC4 arī kā paša uzdevuma laiki) un `CadCraft_Maintenance` kopu ar dienu, kad tas izpildīts, kas to darīja un nākamo izpildes dienu.
- Vērtības, ko dala citi elementi, vispirms tiek nokopētas: viena aktīva maiņa nekad nemaina kaimiņus.
- Vecākos IFC2X3 failos datumi ierakstīti kā teksts (YYYY-MM-DD); šai versijai vajadzīgs atsevišķs datuma ieraksts, ko BimCraft tur neraksta.

## Sensoru rādījumi

Atveriet {{ui:Sensoru vērtības}} un {{ui:Atvērt rādījumus (CSV)…}}, lai ielādētu rādījumus, kas eksportēti no ēkas pārvaldības sistēmas, datu reģistratora vai izklājlapas:

- **Pirmā kolonna ir laiks**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` vai Unix sekundes. Laiks bez zonas tiek nolasīts jūsu datora laika joslā. Datumi ar dienu priekšā, piemēram, `23/10/2026`, netiek nolasīti (tie ir neskaidri); eksportējiet ISO datumus.
- **Katra cita kolonna ir viens sensors**, ar virsrakstu, kas ir tā aktīva **marķējums**, **nosaukums** vai **GlobalId**. Virsraksts, kas neatbilst nevienam aktīvam vai atbilst vairākiem, tiek uzskaitīts un izlaists. Kolonnas atdala komati, semikoli vai tabulēšanas zīmes; ar semikoliem vai tabulēšanas zīmēm tiek nolasīts arī decimālkomats (`21,5`).
- Laiki vai vērtības, ko nevar nolasīt (vārds vai šūnā ierakstīta mērvienība), tiek saskaitītas un izlaistas un nekad netiek minētas pēc pieņēmuma.

Pēdējais rādījums parādās saraksta kolonnā {{ui:Rādījums}} un aktīva blokā {{ui:Sensors}} ar **diagrammu** visiem rādījumiem (tālrunī diagrammas gaida, līdz pieskaraties {{ui:Rādīt diagrammu}}). Iestatiet aktīvam **zemāko un augstāko robežu** un mērvienību un noklikšķiniet uz {{ui:Saglabāt robežvērtības}}: rādījums ārpus tām atzīmē aktīvu. Atzīmējiet {{ui:Rādīt uz modeļa}}, lai krāsotu katru aktīvu pēc tā rādījuma — zils zem zemākās robežas, zaļš robežās un sarkans virs augstākās; aktīviem bez robežām tiek lietota viena zila skala no zemākā līdz augstākajam rādījumam. Rādījums tiek rādīts kā uzraksts (līdz 60 uzrakstiem, vispirms atzīmētie).

**Rādījumi paliek šajā pārlūkprogrammas cilnē**: tie netiek saglabāti IFC un nekur nesūtīti; nākamreiz atveriet CSV vēlreiz. **Robežvērtības tiek saglabātas IFC** (`CadCraft_Sensor` kopa elementā: Low, High, Unit), lai nākamais, kas atvērs failu, redzētu tos pašus karogus.

## Tiešraides rādījumi

{{ui:Tiešraides plūsma}} nolasa vērtības, kamēr tās rodas, **tieši no šīs pārlūkprogrammas uz jūsu sistēmu**. Nekas neiet caur mūsu serveri, un nekas netiek glabāts nekur citur kā pārlūkprogrammas cilnē. Nekas nepieslēdzas, kad fails tiek atvērts: to dara tikai {{ui:Savienot}}.

- **MQTT pār WebSockets**: jūsu brokera WebSocket klausītāja adrese (`wss://broker.example.com:8884/mqtt`) un viena vai vairākas tēmas ar `{tag}`, kur jāieliek aktīva marķējums, piemēram, `site/{tag}/temperature` (BimCraft abonē `site/+/temperature` un nolasa marķējumu no katras ziņas tēmas). Tēmas bez `{tag}` nosauc pašu sensoru. Ziņa ir vai vienkāršs skaitlis (`21.5`), vai JSON, piemēram, `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` (iestatiet {{ui:Vērtības lauks JSON}}, ja jūsējais saucas citādi).
- **Pieprasīt adresi (HTTP)**: tīmekļa adrese, uz kuru jūsu ēkas pārvaldības sistēma vai jūsu mazs skripts atbild, pieprasot ik pa dažām sekundēm (vismaz ik pēc 5). Tā var atbildēt ar JSON pēc marķējuma (`{"AHU-1": 21.5}`), JSON sarakstu (`[{"tag": "AHU-1", "value": 21.5}]`) vai CSV rādījumu failu kā iepriekš. Ja tā neatbild, BimCraft pirms nākamā pieprasījuma gaida divreiz ilgāk, līdz pieciem minūtēm.

Katrs rādījums nonāk pie aktīva, kuru nosauc tā marķējums, nosaukums vai GlobalId, tieši kā CSV kolonna; nosaukumi, kas neatbilst nevienam aktīvam, tiek uzskaitīti. Rādījumi pievienojas {{ui:Sensoru vērtības}}: saraksts, diagrammas, robežvērtības un krāsas modelī darbojas tāpat.

**Jūsu parole vai token** tiek ierakstīta vienam savienojumam: tā tiek nodota savienojumam, un lauks tiek iztukšots; tā nekad netiek saglabāta šajā pārlūkprogrammā vai IFC. Token tiek sūtīts kā standarta `Authorization: Bearer` galvene, un nekādas sīkdatnes netiek sūtītas.

{{ui:Paturēt šos iestatījumus IFC}} ieraksta adresi, tēmas, vērtību lauku un to, cik bieži pieprasīt, modelī (`CadCraft_Feed` kopa projektā; paroles lauka tur nav), tāpēc nākamais, kas atvērs failu, ievada tikai savu pieteikšanos un noklikšķina uz {{ui:Savienot}}. Nelieciet paroli vai atslēgu pašā adresē: adrese ar lietotājvārdu un paroli tiek noraidīta.

:::note
**Ko vajag jūsu brokerim vai adresei.** Tīmekļa lapa var sarunāties tikai ar serveri, kas to atļauj:
- Lapa ir droša (https), tāpēc pārlūks savienojas tikai ar `wss://` un `https://` adresēm — izņemot jūsu pašu datoru (`localhost`), kur `ws://` un `http://` strādā testēšanai.
- HTTP adresei jāļauj pieprasījumi no šīs lapas (CORS: galvene `Access-Control-Allow-Origin`, un `Authorization` starp atļautajām galvenēm, ja izmantojat token).
- Vairums brokeru (Mosquitto, EMQX, HiveMQ un citi) piedāvā WebSocket klausītāju; tas bieži ir izslēgts, kamēr to neieslēdz. BimCraft runā MQTT 3.1.1.
:::

Kad BimCraft ir aizvērts, **brīdinājumu nav**: robežvērtības atzīmē aktīvu tikai tad, kad modelis ir atvērts un pieslēgta tiešraides plūsma. Ēkas uzraudzībai visu diennakti vajadzīgs serveris, ko BimCraft nedarbina.

## COBie izklājlapa

**COBie** ir nodošanas izklājlapa, ko daudzi īpašnieki un pārvaldības komandas pieprasa (publicējis National BIM Standard ASV; BS 1192-4 Lielbritānijā). Atveriet {{ui:COBie izklājlapa}} cilnē:

- {{ui:Saglabāt kā COBie (.xlsx)}} ieraksta COBie 2.4 lapas — Contact, Facility, Floor, Space, Type, Component, System, Job, Document un Attribute — no modeļa un aktīvu datiem: ēku, tās līmeņus un telpas (laukumi no modeļa daudzumiem), katru aktīvu kā komponentu ar sērijas numuru, uzstādīšanas dienu, garantijas sākumu, marķējumu un svītrkodu, tā tipu ar ražotāju, modeli, kalpošanas laiku un garantijas garumu, sistēmas, kurām tas pieder, apkopes ierakstu kā darbus un saistītos dokumentus. Katram komponentam ir elementa IFC GlobalId. Ierakstiet savu e-pasta adresi COBie kolonnai "created by" vai atstājiet tukšu (tad tur būs n/a). Vērtības, kādu modelim nav, rāda **n/a**; kategoriju kolonnas satur IFC klasi, nevis OmniClass kodu.
- {{ui:Nolasīt COBie izklājlapu…}} nolasa to atpakaļ, no BimCraft vai citas programmas, un **vispirms uzskaita visas izmaiņas**: kuram aktīvam, kāda vērtība, no kā uz ko, un jaunie dokumenti. {{ui:Lietot}} ieraksta tās visas vienā solī ({{key:Mod+Z}} atsauc). Rindas tiek saskaņotas pēc GlobalId, tad pēc komponenta nosaukuma. Rindas, kas neatbilst nekam modelī, tiek uzskaitītas, nevis pievienotas.

Izklājlapu uzskata par neuzticamu: formulas nekad netiek nolasītas vai izpildītas (tiek ņemta tikai pēdējā šūnā saglabātā vērtība); vērtība, kas liktu garantijai beigties pirms sākuma, un dokumenta saite, kas nav tīmekļa adrese vai faila nosaukums, tiek izlaista un saskaitīta; ļoti lielas darbgrāmatas tiek noraidītas. COBie darbi ir tipa plānotie darbi: tie tiek ierakstīti, bet atpakaļ netiek nolasīti. Izklājlapā, ko veido BimCraft, teksts, ko izklājlapa varētu uzskatīt par formulu (sākas ar `=`, `+`, `-` vai `@`), ir atzīmēts kā teksts.

Darbgrāmata mūsu testos ir pārbaudīta ar neatkarīgu izklājlapu lasītāju; tā nav izgājusi COBie validatoru. Ja saņēmēja komanda to palaiž, pastāstiet mums, ko tas parāda.

## Nodošanas dokumenti

Papīri, kas tiek nodoti īpašniekam kopā ar gatavu ēku, pieder projektam, nevis vienam aktīvam. Cilnē {{ui:Resursi}} atveriet {{ui:Nodošanas dokumenti}}:

1. {{ui:Pievienot dokumentu}}, izvēlieties tā veidu (pabeigšanas sertifikāts, lietošanas atļauja, garantija, rokasgrāmata, izpildrasējumi, cits) un ierakstiet nosaukumu, izdošanas datumu, to, kas izdeva, un atsauces numuru.
2. Norādiet, kur tas atrodas: tīmekļa adrese, faila nosaukums, kas glabājas blakus IFC, vai {{ui:Pievienot failu}}.
3. {{ui:Pievienot sarakstam}}. {{ui:Rediģēt}} un {{ui:Noņemt}} maina sarakstu; katrs ir viens solis, ko var atsaukt.

{{ui:Izveidot nodošanas pakotni}} lejupielādē vienu zip failu: vāka lapu ar visiem dokumentiem, to pašu sarakstu kā izklājlapā, COBie darbgrāmatu (dokumenti ir tās Document lapā kā rindas par Facility), modeli un katru pievienoto failu. Pabeigšanas vai lietošanas sertifikāts, kas vēl nav sarakstā, vāka lapā tiek nosaukts; pakotne tik un tā tiek izveidota.

Modelis pakotnē ir **izpildmodelis**: tas norāda, kuri elementi izmērīti uz vietas. Mapē `as-built` tam pievienots paziņojums, katra elementa saraksts ar tā verifikācijas stāvokli, pašreizējais zīmējumu komplekts vienā PDF (izpildrasējumi) un rasējumu izmaiņu žurnāls, ja modelim ir izdoti komplekti. Skatiet [Atzīmējiet elementus kā pārbaudītus vai verificētus uz vietas](topic:verification).

- IFC failā katrs dokuments ir IfcDocumentInformation, kas saistīts ar projektu (IfcRelAssociatesDocument), ar nosaukumu, atsauci, datumu, izdevēju un vietu, lai citas programmas to uzskaitītu.
- Pievienotais fails tiek ierakstīts pēc nosaukuma, izmēra un SHA-256. Lai paturētu pašu failu kopā ar projektu, izmantojiet {{ui:Saglabāt projektu kā paku}} (.ccbundle glabā modeli un pievienotos failus; atverot, tie atgriežas, katrs pārbaudīts pret savu ierakstu). Parastā saglabāšana jautā, ko vēlaties.
- Vienkāršs .ifc saglabā ierakstu, nevis failu: pēc atvēršanas izmantojiet {{ui:Pievienojiet failu vēlreiz}}. Tas pats fails tiek atpazīts; cits fails aizstāj ierakstu.
