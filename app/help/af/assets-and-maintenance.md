---
title: Hou batedata en 'n onderhoudsrekord in die model
summary: Gebruik die oorhandigde IFC-model om die gebou te bedryf: vervaardiger, model, serienommer, waarborg en diensleeftyd vir toerusting en toebehore, en 'n rekord van die onderhoud wat gedoen is, alles in die IFC geskryf.
keywords: oorhandiging, voltooiingsertifikaat, besettingsertifikaat, soos gebou, oorhandigingspakket, bate, batereëister, fasiliteitsbestuur, fm, bedryf, onderhoud, diens, waarborg, serienommer, strepieskode, vervaardiger, model, diensleeftyd, oorhandiging, cobie, digitale tweeling, agterstallig, verskuldig, werksorder
from: b84ac492
---

Die {{ui:Bates}}-oortjie in die regterpaneel maak die oop IFC-model 'n rekord van die gebou se toerusting. Alles word in die IFC self geskryf, in IFC se eie eienskapstelle en take, sodat die volgende program wat die lêer oopmaak dit ook lees. Niks word opgelaai nie en geen bediener is nodig nie: stoor die IFC om dit te behou.

## Wat gelys word

- Toerusting en toebehore: meubels, sanitêre toebehore, ligtoebehore, toestelle, lugterminale, kleppe, pompe, waaiers, ketels, tenks, uitlate, skakelborde, hyse en ander soortgelyke elemente, en biblioteekitems met toerustingdata.
- Enige ander element wat jy **volg**: kies dit in die model ('n deur, 'n muur, 'n pomp wat as 'n gewone voorwerp geteken is) en klik {{ui:Volg gekies}}.
- Enigiets wat reeds batedata of 'n onderhoudstaak het, hier geskryf of deur 'n ander program.

Wat agterstallig is, kom eerste, dan wat binne 30 dae verskuldig is. Filtreer op naam, etiket, vervaardiger, model of serienommer, op vlak, of merk {{ui:Net agterstallig of binne 30 dae verskuldig}}.

## Batedata

Klik 'n bate in die lys (of kies dit in die model) om sy data oop te maak: vervaardiger, model, modelverwysing, serienommer, strepieskode, die dag wat dit geïnstalleer is, die waarborgnommer en sy begin- en eindatums, en sy diensleeftyd in jare. {{ui:Stoor die data}} skryf hulle in een stap ({{key:Mod+Z}} ontdoen dit). Los 'n blokkie leeg om daardie waarde te verwyder.

## Dokumente

Onder die data lys {{ui:Dokumente}} die handleidings, waarborge, foto's, sertifikate en tekeninge wat aan die bate gekoppel is. Kies die soort, gee dit 'n titel (of los dit leeg: die lêernaam word gebruik) en tik waar dit is:

- 'n **webadres** (`https://…`): dit kry 'n Oop-skakel, wat in 'n nuwe oortjie oopmaak;
- of 'n **lêernaam of pad** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, 'n netwerkdeling): hou die lêers langs die IFC, in dieselfde vouer of een daaronder, sodat die name nog werk wanneer jy die vouer oorhandig. BimCraft wys die naam; maak die lêer oop vanuit die vouer.

Die lêers self word nooit opgelaai of in die IFC gekopieer nie: net die skakel word geskryf. 'n Webadres met 'n wagwoord daarin, en enige skakel wat nie 'n webadres of 'n lêer is nie (soos `javascript:`), word geweier. {{ui:Verwyder}} neem 'n dokument van die bate af (een stap; {{key:Mod+Z}} ontdoen dit).

Dokumente wat 'n ander program op die element geplaas het, word ook gelys. Dokumente op die element se **tipe** wys op elke element van daardie tipe en sê so; verander dié waar die tipe gemaak is.

In die IFC is elke dokument 'n IFC-dokumentverwysing wat aan die element gekoppel is, met sy soort op daardie koppeling, in IFC4 en IFC2X3 eenders.

## Die onderhoudsrekord

Onder die dokumente, {{ui:Teken gedane werk aan}}: die dag dit gedoen is, die werk, wie dit gedoen het, wanneer dit weer verskuldig is en notas. Elke inskrywing is een stap; {{ui:Wysig}} en {{ui:Skrap}} verander dit later. Die nuutste inskrywing se volgende verskuldigdatum besluit of die bate agterstallig is of binnekort verskuldig is.

## Hoe dit in die IFC bewaar word

- Vervaardiger en model in `Pset_ManufacturerTypeInformation`, serienommer, strepieskode en die dag van installasie in `Pset_ManufacturerOccurrence`, die waarborg in `Pset_Warranty`, die diensleeftyd in `Pset_ServiceLife`, op die element self. Wanneer die element se tipe reeds 'n vervaardiger of model dra, wys dit totdat jy jou eie tik.
- Elke onderhoudsinskrywing is 'n IFC-**taak** van die onderhoudsoort, aan die element gekoppel, met sy datums (in IFC4 ook as die taak se eie tye) en 'n `CadCraft_Maintenance`-stel met die dag, wie dit gedoen het en die volgende verskuldigdag.
- Waardes wat 'n ander element deel, word eers gekopieer: om een bate te verander, verander nooit sy bure nie.
- In ouer IFC2X3-lêers word die datums as teks geskryf (JJJJ-MM-DD); daardie weergawe wil 'n aparte datumrekord hê, wat BimCraft nie daar skryf nie.

## Sensorlesings

Maak {{ui:Sensorwaardes}} en {{ui:Maak lesings oop (CSV)…}} oop om lesings in te bring wat uit 'n geboubestuurstelsel, 'n datalogger of 'n sigblad uitgevoer is:

- Die **eerste kolom is die tyd**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` of Unix-sekondes. 'n Tyd sonder 'n sone word in jou rekenaar se eie tydsone gelees. Dag-eerste datums soos `23/10/2026` word nie gelees nie (hulle is dubbelsinnig); voer ISO-datums uit.
- **Elke ander kolom is een sensor**, met as opskrif die bate se **etiket**, **naam** of **GlobalId**. 'n Opskrif wat by geen bate pas nie, of by meer as een, word gelys en uitgelaat. Kommas, kommapunte of tabs skei die kolomme; met kommapunte of tabs word 'n desimale komma (`21,5`) ook gelees.
- Tye of waardes wat nie lees nie ('n woord, 'n eenheid wat in die sel getik is) word getel en uitgelaat, nooit geraai nie.

Die laaste lesing wys in die lys se {{ui:Lesing}}-kolom en in die bate se {{ui:Sensor}}-blok, met 'n **grafiek** van elke lesing (op 'n foon wag grafieke tot jy op {{ui:Wys die grafiek}} tik). Stel 'n **lae en hoë limiet** en 'n eenheid op 'n bate en {{ui:Stoor die limiete}}: 'n lesing buite hulle merk die bate. Merk {{ui:Wys op die model}} om elke bate volgens sy lesing te verf: blou onder sy lae limiet, groen binne sy limiete, rooi bo sy hoë limiet, en, vir bates sonder limiete, 'n enkele blou skaal van die laagste tot die hoogste lesing. Die lesing verskyn as 'n etiket (tot 60 etikette, gemerkte eerste).

**Lesings bly in hierdie blaaieroortjie**: hulle word nie in die IFC gestoor nie en nêrens gestuur nie; maak die CSV die volgende keer weer oop. Die **limiete word in die IFC gestoor** (`CadCraft_Sensor`-stel op die element: Low, High, Unit), sodat die volgende persoon wat die lêer oopmaak dieselfde merkers sien.

## Lewendige lesings

{{ui:Lewendige voer}} lees waardes soos hulle gebeur, **reguit van hierdie blaaier na jou eie stelsel**. Niks gaan deur ons bediener nie, en niks word iewers gestoor behalwe in jou blaaieroortjie nie. Niks koppel wanneer 'n lêer oopgaan nie: slegs {{ui:Koppel}} doen dit.

- **MQTT oor WebSockets**: die adres van jou makelaar se WebSocket-luisteraar (`wss://broker.example.com:8884/mqtt`), en een of meer onderwerpe met `{tag}` waar die bate se etiket hoort, byvoorbeeld `site/{tag}/temperature` (BimCraft teken in op `site/+/temperature` en lees die etiket uit elke boodskap se onderwerp). Onderwerpe sonder `{tag}` noem die sensor self. 'n Boodskap is óf 'n gewone getal (`21.5`) óf JSON soos `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` ({{ui:Waardeveld in JSON}} stel as joune anders heet).
- **Vra 'n adres (HTTP)**: 'n webadres wat jou geboubestuurstelsel of 'n klein skrip van jou antwoord, elke so veel sekondes gevra (minstens 5). Dit kan met JSON antwoord wat deur etiket gesleutel is (`{"AHU-1": 21.5}`), 'n JSON-lys (`[{"tag": "AHU-1", "value": 21.5}]`), of 'n CSV van lesings soos die bo een. As dit nie antwoord nie, wag BimCraft twee keer so lank voor dit weer vra, tot vyf minute.

Elke lesing gaan na die bate wie se etiket, naam of GlobalId dit noem, presies soos 'n CSV-kolom sou; name wat by geen bate pas nie, word gelys. Die lesings sluit by die {{ui:Sensorwaardes}} aan: die lys, die grafieke, die limiete en die kleure op die model werk almal dieselfde.

**Jou wagwoord of token** word vir een verbinding getik: dit word aan die verbinding gegee en die blokkie word leeggemaak; dit word nooit in hierdie blaaier of in die IFC gestoor nie. 'n Token gaan as 'n standaard `Authorization: Bearer`-opskrif, en geen koekies word gestuur nie.

{{ui:Hou hierdie instellings in die IFC}} skryf die adres, die onderwerpe, die waardeveld en hoe gereeld om te vra in die model (`CadCraft_Feed`-stel op die projek; daar is geen veld vir 'n wagwoord nie), sodat die volgende persoon wat die lêer oopmaak net sy eie aanmelding tik en op {{ui:Koppel}} klik. Moenie 'n wagwoord of 'n sleutel in die adres self sit nie: 'n adres met 'n gebruikernaam en wagwoord daarin word geweier.

:::note
**Wat jou makelaar of adres nodig het.** 'n Blaaierbladsy kan slegs met 'n bediener praat wat dit toelaat:
- Die bladsy is veilig (https), so die blaaier koppel slegs aan `wss://`- en `https://`-adresse, behalwe op jou eie rekenaar (`localhost`), waar `ws://` en `http://` werk om te toets.
- 'n HTTP-adres moet versoeke van hierdie bladsy toelaat (CORS: die opskrif `Access-Control-Allow-Origin`, en `Authorization` tussen die toegelate opskrifte as jy 'n token gebruik).
- Die meeste makelaars (Mosquitto, EMQX, HiveMQ en ander) bied 'n WebSocket-luisteraar; dit is dikwels af totdat dit aangeskakel word. BimCraft praat MQTT 3.1.1.
:::

Daar is **geen waarskuwings** wanneer BimCraft gesluit is nie: limiete merk 'n bate solank die model oop is met 'n voer gekoppel. 'n Gebou dag en nag dophou benodig 'n bediener, wat BimCraft nie laat loop nie.

## COBie-sigblad

**COBie** is die oorhandigingsigblad wat baie eienaars en fasiliteitspanne vra (gepubliseer deur die National BIM Standard in die VSA; BS 1192-4 in die VK). Maak {{ui:COBie-sigblad}} in die oortjie oop:

- {{ui:Stoor as COBie (.xlsx)}} skryf die COBie 2.4-blaaie (Contact, Facility, Floor, Space, Type, Component, System, Job, Document en Attribute) uit die model en die batedata: die gebou, sy vlakke en vertrekke (oppervlaktes uit die model se hoeveelhede), elke bate as 'n komponent met sy serienommer, geïnstalleerde dag, waarborgbegin, etiket en strepieskode, sy tipe met vervaardiger, model, diensleeftyd en waarborglengte, die stelsels waaraan dit behoort, die onderhoudsrekord as take en die gekoppelde dokumente. Elke komponent dra die element se IFC GlobalId. Tik jou e-posadres vir COBie se "created by"-kolom, of los dit leeg (dan staan daar n/a). Waardes wat die model nie het nie, sê **n/a**; die kategoriekolomme dra die IFC-klas, nie 'n OmniClass-kode nie.
- {{ui:Lees 'n COBie-sigblad…}} lees een terug, van BimCraft of 'n ander program, en **lys eers elke verandering**: watter bate, watter waarde, van wat na wat, en nuwe dokumente. {{ui:Pas toe}} skryf hulle almal in een stap ({{key:Mod+Z}} ontdoen dit). Rye word eers volgens die GlobalId gepas, dan volgens die komponent se naam. Rye wat by niks in die model pas nie, word gelys, nie bygevoeg nie.

'n Sigblad word as onbetroubaar behandel: formules word nooit gelees of uitgevoer nie (slegs die waarde wat laas in die sel gestoor is), 'n waarde wat 'n waarborg sou laat eindig voor dit begin en 'n dokumentskakel wat nie 'n webadres of lêernaam is nie, word uitgelaat en getel, en baie groot werkboeke word geweier. COBie se take is 'n tipe se beplande werk, so hulle word uitgeskryf maar nie teruggelees nie. In die sigblad wat BimCraft skryf, word teks wat 'n sigblad vir 'n formule kan aanvaar (wat met `=`, `+`, `-` of `@` begin) as teks gemerk.

Die werkboek is in ons toetse nagegaan teen 'n onafhanklike sigbladleser; dit is nie deur 'n COBie-valideerder gegaan nie. As 'n ontvangende span een laat loop, vertel ons wat dit sê.

## Oorhandigingsdokumente

Die papiere wat saam met die voltooide gebou na die eienaar gaan, behoort aan die projek, nie aan een bate nie. Op die {{ui:Bates}}-oortjie, maak {{ui:Oorhandigingsdokumente}} oop:

1. {{ui:Voeg 'n dokument by}}, kies sy soort (voltooiingsertifikaat, besettingsertifikaat, waarborg, handleiding, soos-gebou-tekeninge, ander), en tik sy titel, uitreikdatum, wie dit uitgereik het en sy verwysingsnommer.
2. Sê waar dit is: 'n webadres, 'n lêernaam langs die IFC, of {{ui:Heg 'n lêer aan}}.
3. {{ui:Voeg by die lys}}. {{ui:Wysig}} en {{ui:Verwyder}} verander die lys; elk is een stap wat jy kan ontdoen.

{{ui:Bou die oorhandigingspakket}} laai een zip af: 'n omslagblad wat elke dokument lys, dieselfde lys as 'n sigblad, die COBie-werkboek (die dokumente is op sy Document-blad, as rye oor die Facility), die model, en elke aangehegte lêer. 'n Voltooiings- of besettingsertifikaat wat nog nie in die lys is nie, word op die omslag genoem; die pakket word tog gebou.

Die model in die pakket is die **soos-gebou-model**: dit sê watter elemente op die terrein gemeet is. Daarmee, in die vouer `as-built`: die verklaring, 'n lys van elke element met sy verifikasiestatus, die tekenstel soos dit nou is as een PDF (die soos-gebou-tekeninge), en die tekenveranderingslys wanneer die model stelle uitgereik het. Sien [Merk elemente as nagegaan of veldgeverifieer](topic:verification).

- In die IFC-lêer is elke dokument 'n IfcDocumentInformation wat aan die projek gekoppel is (IfcRelAssociatesDocument), met sy titel, verwysing, datum, uitreiker en plek, sodat ander programme dit lys.
- 'n Aangehegte lêer word volgens naam, grootte en SHA-256 aangeteken. Om die lêer self by die projek te hou, gebruik {{ui:Stoor die projek as 'n bundel}} ('n .ccbundle hou die model en die aangehegte lêers; om dit oop te maak gee hulle terug, elk nagegaan teen sy rekord). 'n Gewone stoor vra watter een jy wil hê.
- 'n Gewone .ifc hou die rekord, nie die lêer nie: nadat jy dit oopgemaak het, gebruik {{ui:Heg die lêer weer aan}}. Dieselfde lêer word herken; 'n ander een vervang die rekord.

## CSV

{{ui:CSV}} stoor elke bate met sy data, elke onderhoudsinskrywing en elke dokument, een ry elk, vir 'n sigblad of 'n ander onderhoudsprogram.

:::note
Nie gebou nie: 'n gehuisveste diens wat lesings hou en waarskuwings stuur terwyl BimCraft gesluit is, en COBie se take terugle. Sien [Nog nie gebou nie](topic:not-built-yet).
:::
