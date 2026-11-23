---
title: Ievietojiet bibliotēkā savus objektus un ģimeņu failus
summary: Lasiet ģimeņu failus (.rfa) un IFC, DWG, DXF, glTF vai OBJ failus cilnē Bibliotēka, novietojiet tos kā jebkuru bibliotēkas vienumu un glabājiet sadaļā Mani objekti, privātā sarakstā, ko redz tikai jūs.
keywords: rfa, ģimene, ģimenes, ģimeņu bibliotēka, savi objekti, mani objekti, privātie objekti, privātā bibliotēka, objektu imports, ražotāja saturs, bim objekti, ifc objekts, gltf, obj, dwg bloks, saglabāt, pārslēgt, migrēt
from: 886261f8
---

## Ko jūs darīsiet

Ievietojiet BimCraft objektus, kas jums jau ir: ģimeņu bibliotēku no Revit, ražotāja IFC vai DWG lejupielādi, tīklu no cita modelētāja. Failu lasāt cilnē {{ui:Bibliotēka}}, objektu novietojat modelī kā pilnvērtīgu IFC elementu un, ja vēlaties to vēlāk izmantot atkal, saglabājat sadaļā {{ui:Mani objekti}}.

## Soļi

1. Atveriet IFC modeli vai sāciet jaunu ēku.
2. Noklikšķiniet uz cilnes {{ui:Bibliotēka}} blakus {{ui:Rekvizīti}}.
3. Noklikšķiniet uz {{ui:Faili…}}, tad uz {{ui:Izvēlēties failu…}}. Izvēlieties vienu failu vai vairākus uzreiz: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` vai `.csv`. Vai noklikšķiniet uz {{ui:Izvēlieties mapi…}}, lai nolasītu visu mapi un tajā esošās mapes (līdz 200 failiem vienā reizē).
4. Noklikšķiniet uz kartītes, lai redzētu, kas nolasīts: plāna priekšskatījumu, nosaukumu, ražotāju un modeli, izmērus un piezīmes.
5. Noklikšķiniet uz {{ui:Novietot plānā}} vai {{ui:Novietot modelī}}, lai to novietotu.
6. Lai izmantotu to atkal citos projektos, noklikšķiniet uz {{ui:Saglabāt manos objektos}}. Ja nolasīti vairāki faili, {{ui:Saglabāt visus manos objektos}} saglabā tos vienā reizē.
7. Vēlāk noklikšķiniet uz {{ui:Mani objekti}} cilnē Bibliotēka, lai tos atrastu. Tos novieto, aizvieto un atjaunina kā jebkuru bibliotēkas vienumu.

Failus nolasa šajā cilnē. Nekas netiek augšupielādēts, līdz izvēlaties {{ui:Saglabāt manos objektos}}.

## Ko nolasa no katra faila veida

| Fails | Ko jūs saņemat |
|---|---|
| IFC | Katrs elementa tips kā objekts ar savu īsto 3D formu, IFC klasi un rekvizītu kopām |
| glTF, GLB, OBJ | Viens objekts ar savu īsto 3D formu kā tīklu. Vispirms iestatiet mērvienības un to, kurā virzienā ir augša. |
| DWG, DXF | Katrs bloks kā objekts ar savu plāna rasējumu un atribūtiem |
| Ģimenes fails (`.rfa`) | Ģimenes nosaukums, kategorija, ražotājs, modelis, parametri un tās tipi. **Nav tās 3D formas:** tās vietā stāv kaste ar ģimenes Platumu, Dziļumu un Augstumu |
| CSV | Viens objekts katrā rindā: nosaukums, izmēri un dati, zīmēts kā kaste |

## Ģimeņu faili un to 3D forma

3D forma `.rfa` failā ir saglabāta nedokumentētā formātā, tāpēc BimCraft nolasa ģimenes datus un neuzmin tās ģeometriju. Kartītē tas ir norādīts: "Geometry not read from this family; a box stands in." (latviski: "Ģeometrija no šīs ģimenes nav nolasīta; tās vietā stāv kaste.").

Lai ievietotu ģimeni ar tās īsto formu, eksportējiet to no programmas, kas to izveidoja (Revit):

1. Atveriet ģimeni vai projektu, kurā ģimene ir novietota.
2. Izvēlieties **File > Export > IFC**. Skatiet [eksporta iestatījumi, kas šeit darbojas vislabāk](topic:rvt-to-ifc).
3. BimCraft nolasiet `.ifc` failu ar {{ui:Faili…}}. Katrs ģimenes tips nonāk kā savs objekts ar savu formu un rekvizītu kopām.

Daudzi ražotāji piedāvā IFC vai DWG lejupielādi blakus ģimenes failam. Tie nolasās tieši.

## Ģimenes tipi

Ģimene ar vairākiem tipiem nonāk kā viens vienums ar izvēli {{ui:Variants}}, pa vienam variantam katram tipam. Katram variantam ir vērtības, kas atšķiras starp tipiem, un sava kaste, ja tipam ir Platums un Dziļums. Ģimene ar vienu tipu ir vienkāršs vienums, kas piepildīts ar šī tipa vērtībām.

Dažas ģimenes glabā savus tipus tipu katalogā: `.txt` failā ar tādu pašu nosaukumu blakus ģimenes failam. Izvēlieties abus kopā vai izvēlieties mapi, un kataloga rindas kļūst par variantiem.

## Ģimenes dati uz īstas formas

Ja mapē ir ģimenes fails un IFC, glTF vai OBJ fails ar tādu pašu nosaukumu (`Chair.rfa` un `Chair.ifc`), izvēlieties abus kopā vai izvēlieties mapi. BimCraft izveido vienu vienumu: ģimenes fails dod nosaukumu, ražotāju, modeli, parametrus un tipus, bet otrs fails dod īsto 3D formu. Piezīmes norāda, no kura faila nāca forma. Viena forma tiek izmantota visiem tipiem.

Ja ģimenes failā ir saglabāts attēls, vienuma detaļās šis attēls rādās zem plāna rasējuma. Attēls tiek rādīts tikai tur; tas netiek saglabāts kopā ar vienumu.

## Mani objekti

{{ui:Mani objekti}} ir jūsu pašu privātais saraksts bibliotēkā. Tajā esošo redz tikai jūs: tas nav publiskajā bibliotēkā, meklēšanā un nav rādīts jūsu komandai. Tas seko jūsu kontam, tāpēc tie paši objekti ir pieejami citā datorā, kad pierakstāties bibliotēkā.

- Lai saglabātu objektu, jums jābūt pierakstītam bibliotēkā. Skatiet [pierakstīšanās bibliotēkā](topic:library-credits).
- Objekta saglabāšana nosūta tikai šo objektu uz jūsu kontu. Līdz tam tas paliek jūsu datorā.
- {{ui:Noņemt no maniem objektiem}} izņem objektu no saraksta. Jau novietotas kopijas rasējumos paliek.
- Lai dalītos ar objektu ar visiem, augšupielādējiet to publiskajā bibliotēkā zem licences, ko izvēlaties.

:::note
Mani objekti vēl tiek testēti, un tie, iespējams, vēl nav atvērti jūsu kontam. Ja avots trūkst vai tiek rādīts "My objects is not open for this account yet" (Mani objekti šim kontam vēl nav atvērti), jūs joprojām varat nolasīt un novietot savus failus ar {{ui:Faili…}}; tie tiek saglabāti jūsu modelī.
:::

## Biežākās kļūdas

- **Gaidīt ģimenes īsto formu no `.rfa`.** Nolasīti tikai tā dati. Eksportējiet IFC, lai iegūtu formu.
- **Divi vienumi tur, kur gaidījāt vienu.** Ģimene un tās formas fails tiek apvienoti tikai tad, kad nosaukumi sakrīt precīzi, izņemot galotni, un tie atrodas vienā mapē.
- **Tīkls ienāk tūkstoš reižu par lielu vai guļ uz sāniem.** Pirms faila izvēles iestatiet {{ui:Faila vienības}} un {{ui:Režģa augšējā ass}} zem {{ui:Faili…}}.
- **"No family data" failā.** Tas ir projekts (`.rvt`, saglabāts ar citu galotni) vai ģimenes veidne, nevis ģimene. Skatiet [Nolasīt projekta vai ģimenes failu](topic:read-rvt-file).
- **Satura glabāšana, ko nedrīkst glabāt.** Daudzas maksas bibliotēkas neatļauj kopijas ārpus sava pakalpojuma. Pārbaudiet noteikumus saturam, ko neesat izveidojis jūs.
