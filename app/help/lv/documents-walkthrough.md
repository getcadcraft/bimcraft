---
title: "Dokumenti un pārskatījumi (glabātuve)"
summary: "Soli pa solim pārskats par vienu reālu darbu: ievietojiet projekta mapi ar IFC modeļiem kontrolē, izņemiet modeli, mainiet to, atgriezt ar piezīmi, nosūtiet pārskatīšanai, apstipriniet un izlaidiet, skatiet vēsturi un to, kas to izmanto, ko otrs cilvēks redz, kamēr fails ir bloķēts, un kā tas darbojas ar mākoņa mapēm."
keywords: "glabātuve, dokumenti, pamācība, apmācība, izņemt, atgriezt, pārskatījums, izlaist, apstiprināt, bloķēt, vēsture, ifc, modelis, mākoņa mape, projekta mape, divi cilvēki, kopīgota mape"
from: 0a753f25
---

## Ko jūs darīsiet

Jūs esat Ana, strādājat pie Riverside Clinic kopā ar kolēģi Ben. Projekta IFC modeļi atrodas vienā mapē, ko abi sasniedzat (kopīgotā diskā, sinhronizētā mapē vai mākoņa mapē). Līdz beigām viens fails būs nonācis no sava pirmā eksemplāra līdz izlaistam pārskatījumam **A**, ticis mainīts atkal kā **B.1**, jūs redzēsiet, kas ko darīja, un redzēsiet, ko Ben redz, kad jūs turat failu.

Viss glabājas paslēptā mapē `.ccvault` blakus jūsu failiem: nav servera, nekas netiek augšupielādēts (mākoņa mape ir izņēmums, skatiet pēdējo soli). Visas pogas un noteikumus vienuviet skatiet tēmā *Dokumenti: izņemšana, pārskatījumi un izlaišana*, ja jūsu lietotnei tāda ir.

## 1. Iestatiet projekta mapi

1. Sākuma ekrānā izvēlieties {{ui:Documents}} blakus {{ui:Open a folder}}, vai {{ui:Documents…}} izvēlnē **Fails**.
2. Izvēlieties {{ui:Choose the project folder}} un atlasiet mapi, kurā ir projekta IFC modeļi. (Projekta mapes darbojas Studio un pārlūkos, kas var atvērt mapi, piemēram, Chrome un Edge. Citos pārlūkos panelis to norāda.)
3. Izvēlieties {{ui:Change}} blakus **Jūs:** un ierakstiet savu vārdu, `Ana` (ja jautā, arī šā datora nosaukumu). Panelī tagad rakstīts *Jūs: Ana uz* un jūsu dators. Jūsu vārds tiek pievienots visam, ko darāt.
4. Izvēlieties {{ui:Start a vault in this folder}} un ierakstiet projekta nosaukumu `Riverside clinic`. Panelī rakstīts *Glabātuve sākta projektam Riverside clinic.*

## 2. Ievietojiet failu kontrolē

1. Atveriet **Faili ārpus glabātuves** un izvēlieties {{ui:Add}} blakus `models/House.ifc`.
2. Fails parādās zem **Faili glabātuvē** pārskatījumā **A.1**, stāvoklis **Darbs notiek**. A.1 ir tā pirmais eksemplārs; glabātuve glabā katra pārskatījuma eksemplāru.

## 3. Izņemt, mainīt, atgriezt

1. Izvēlieties {{ui:Open}} blakus `models/House.ifc`. Modelis atveras BimCraft, un panelis aizveras, lai jūs to varētu redzēt. Atveriet paneli vēlreiz no {{ui:Documents}}.
2. Atveriet paneli vēlreiz un izvēlieties {{ui:Check out}}. Rindā tagad rakstīts **Izņēmis jūs**. Mapē `.ccvault/locks` tiek izveidots bloķēšanas fails; neviens cits nevar izņemt šo failu, kamēr jūs to neatgriezīsit.
3. Mainiet modeli: pārvietojiet sienu, pievienojiet durvis. Saglabāt tiek noraidīts, ja modelis nav izņemts jums, un paskaidro, kāpēc; Saglabāt kā vienmēr darbojas kopijai, kas ir jūsu.
4. Atveriet paneli, izvēlieties {{ui:Check in}} un ierakstiet, kas mainījies (`Pārvietoju durvis`). Panelī rakstīts *atgriezts kā A.2*. Fails projekta mapē tagad ir modelis, ko bijāt atvēruši, un bloķējums ir noņemts. Atgriežot bez izmaiņām, pārskatījums paliek.

Ja domājat citādi, {{ui:Undo check-out}} atdod failu atpakaļ bez jauna pārskatījuma.

## 4. Pārskatīšana un izlaišana

1. Izvēlieties {{ui:Send for review}}. Stāvoklis kļūst par **Nodots pārskatīšanai**, un fails ir tikai lasāms.
2. Pirms apstiprināšanas izvēlieties {{ui:Project settings}} un uzskaitiet, kas drīkst apstiprināt (vienu vārdu rindā), piemēram `Ben` un `Carla`, un atzīmējiet noteikumu, ka apstiprinātājam jābūt citam, nevis autoram. Izvēlieties {{ui:Save settings}}. Tagad pati glabātuve neļauj nevienam citam.
3. Ben (vai Carla) izvēlas {{ui:Approve}} un ieraksta apstiprinātāja vārdu. Stāvoklis kļūst par **Izlaists**, un pārskatījums kļūst par **A**, ar *apstiprināja* un vārdu. Izlaists fails ir tikai lasāms. {{ui:Send back}} to būtu atgriezis stāvoklī Darbs notiek, ar iemeslu.

Apstiprinātāja vārds ir panelī ierakstītais vārds; tas ir ieraksts par to, kas parakstīja, nevis identitātes pierādījums.

## 5. Jauns pārskatījums

1. Izlaistam failam izvēlieties {{ui:New revision}}. Jūs to turat nākamajam burtam.
2. Mainiet to, tad {{ui:Check in}}. Pārskatījums ir **B.1**, darbs notiek. Izlaidiet to tāpat, un tas kļūst par **B**. {{ui:Undo check-out}} pirms pirmās atgriešanas atstāj to pie **A**.

Pārskatījumu burti iet A, B … Z, AA, AB. Ja jūsu standarts dažus burtus izlaiž, projekta iestatījums *Izmantot ASME Y14.35 secību* izlaiž I, O, Q, S, X un Z nākamajiem pārskatījumiem.

## 6. Skatiet, kas notika

Izvēlieties faila nosaukumu, lai atvērtu tā informāciju:

- **{{ui:History}}**: katrs notikums, jaunākais pirmais, ar to, kas, kurā datorā un kad: *Atgriezts A.2*, Ana; *Izlaists*, Ben; un tā tālāk.
- **{{ui:Revisions}}**: pārskatījumu tabula: katrs saglabātais pārskatījums ar datumu, to, kas to atgrieza, piezīmi un to, kas apstiprināja. Glabātuve saglabā katra eksemplāru mapē `.ccvault/revs`.
- **{{ui:Uses}}**: dokumenti, uz kuriem norāda IFC modelis.
- **{{ui:Used by}}**: uzskaita katru modeli glabātuvē, kas norāda uz šo failu.

## Modeļi, kas norāda uz citiem dokumentiem

IFC modelis, kas norāda uz citiem mapes dokumentiem (zīmējumiem, specifikācijām), tos rāda zem **Izmanto**, un katrs no tiem rāda modeli zem **Izmanto no**. Atgriežot dokumentu, redzams, kuri modeļi uz to atsaucas.

## 7. Ko redz Ben, kamēr jūs turat failu

Tagad izņemiet failu atkal un lūdziet Ben atvērt to pašu projekta mapi savā datorā un atvērt paneli. Faila rindā viņš redz **Izņēmusi Ana** datorā **kopš** laika, un nav pogas {{ui:Check out}}. Ja viņš tomēr mēģina, glabātuve noraida: bloķējums ir fails, ko sistēma neizveido divreiz, tāpēc divi cilvēki nevar turēt failu abi, pat tajā pašā mirklī, kad mape ir diskā Studio. (Pārlūkā mape atļauj tikai labāko iespēju, un panelis to norāda sadaļā **Mape**.)

Ja Ana nav klāt un Ben vajag failu, {{ui:Break check-out}} to atbrīvo. Viņam jāieraksta iemesls; tas tiek ierakstīts žurnālā kopā ar to, kā izņemšana bija kāda. Ja projekts uzskaita administratorus, to var darīt tikai viņi. Izņemšana, kas vecāka par novecojuma robežu (pēc noklusējuma 14 dienas), tiek atzīmēta kā *ilgs laiks*. Pēc pārtraukšanas Anas novēlota atgriešana tiek noraidīta, tāpēc jūs abi nevarat pārrakstīt viens otra darbu.

## 8. Mākoņa mapes

Mākoņa mape ir projekta mape, ko glabā jūsu komandas mākoņa krātuvē, tāpēc komandai nav vajadzīgs kopīgots disks. Studio, pierakstījušies savā CadCraft kontā, panelis rāda {{ui:Open a cloud folder}} blakus {{ui:Choose the project folder}}. Izvēlieties to un atlasiet mapi, kas uzskaitīta kā darbvieta / mape. Darbvietas īpašniekam vispirms jāizveido mape, un komandas mākoņa krātuvei jābūt spēkā. Viss iepriekš minētais darbojas tāpat; serveris veido bloķējumu, kas ir stingrs starp cilvēkiem. Ja neesat pierakstījies, panelis liek pierakstīties. Parastā pārlūka cilnē mākoņa poga netiek piedāvāta; izmantojiet Studio.

## Izmēģiniet

Izpildiet iepriekšējos astoņus soļus ar reāla faila kopiju. Divu cilvēku soļiem vajadzīgs otrs cilvēks vai divi logi ar diviem vārdiem. Ja to izmēģināt ar reālu kopīgotu mapi, Kopienas testēšanas lapā ir pārbaude, kas to prasa tieši, un tā pieņem rezultātus.
