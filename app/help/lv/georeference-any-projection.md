---
title: Georeferencēšana ar jebkuru projekciju
summary: Norādiet BimCraft, kurā kartes sistēmā ir modeļa koordinātes — no pilna EPSG saraksta, jebkuras UTM zonas vai pašu definētas projekcijas — un izmantojiet to Atrašanās vietai, kartes slāņiem un punktu mākoņiem.
keywords: projekcija, koordinātu sistēma, crs, epsg, utm, utm zona, pielāgota projekcija, proj4, proj virkne, prj, wkt, georeferencēt, georeferencēšana, kartes konvertācija, ifcprojectedcrs, manas projekcijas, ģeogrāfiskais platums, ģeogrāfiskais garums, austrumu koordināte, ziemeļu koordināte, Lamberts, Gauss-Krīgers, valsts plaknes sistēma, nacionālais režģis
from: 6894c1f2
---

Daži plāni ir zīmēti kartes sistēmā, kas nav īsajā sarakstā: UTM zona, valsts režģis vai projekcija, ko kāds ierakstījis kā teksta definīciju. {{ui:Mērīt}} › {{ui:Koordinātu sistēma…}} ļauj norādīt, kuru modelis izmanto.

## Izvēlieties sistēmu modelim

1. Atveriet modeli, izvēlieties {{ui:Mērīt}}, tad {{ui:Koordinātu sistēma…}}.
2. Ierakstiet meklēšanas lodziņā. Darbojas jebkurš no šiem:
   - EPSG numurs: `32633` vai `EPSG:2277`;
   - UTM zona: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - vārdi no nosaukuma: `lambert 93`, `mga zone 56`, `texas central`;
   - projekcijas definīcija: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, pēc izvēles ar nosaukumu priekšā (`My grid = +proj=…`);
   - `.prj` faila teksts, vai izmantojiet {{ui:Ielādēt .prj failu…}}.
3. Izvēlieties rezultātu, tad {{ui:Izmantot šo sistēmu}}.

Izvēle tiek saglabāta modelī (projekta rekvizītu kopā `CadCraft_CRS`), tāpēc tā atveras kopā ar modeli. Saglabājiet modeli, lai to paturētu. {{ui:Noņemt no modeļa}} atgriežas pie tā, ko norāda fails.

Ja jūsu definīcija dod tās pašas koordinātas kā uzskaitīta EPSG sistēma, BimCraft par to paziņo un izmanto šo kodu; ja vairākas uzskaitītas sistēmas dala vienādu matemātiku, tas nosauc arī pārējās.

## Manas projekcijas

Definīciju, ko ielīmējat, vai `.prj`, ko ielādējat, var paturēt ar {{ui:Saglabāt sadaļā Manas projekcijas}}. Saraksts atrodas šajā ierīcē (šajā pārlūkprogrammā) un tiek piedāvāts nākamreiz, kad atverat izvēlni.

## Ko tas izmanto

- {{ui:Mērīt}} › {{ui:Atrašanās vieta}} pārvērš izvēlēto punktu ģeogrāfiskajā platumā un garumā caur modeļa sistēmu. Agrāk tas apstājās ar piezīmi, ja fails nosauca savu kartes sistēmu bez EPSG koda; ar saglabātu izvēli tas sniedz atbildi.
- Kartes slāņi zem modeļa izmanto to pašu sistēmu. Punktu mākonis vai reljefa fails citā sistēmā tiek piedāvāts modeļa sistēmā (skatiet zemāk).
- {{ui:Iestatījumi}} › BimCraft › {{ui:Atrašanās vieta}} › {{ui:Izvēlēties citu sistēmu…}} nosaka, ko {{ui:Atrašanās vieta}} papildus rāda: ģeogrāfisko platumu un garumu jebkurā uzskaitītā ģeogrāfiskā sistēmā vai austrumu un ziemeļu koordinātes jebkurā projicētā sistēmā, papildus modeļa pašam.

## Modelis, kas vēl nav kartē

Ja failam nav kartes konvertācijas, sistēmas izvēle atver {{ui:Novietot šo modeli kartē}}. To var atvērt arī no {{ui:Mērīt}} › {{ui:Kartes sākumpunkts…}}.

1. Norādiet modeļa sākumpunktu kā austrumu un ziemeļu koordinātes sistēmā vai ierakstiet ģeogrāfisko platumu un garumu un izvēlieties {{ui:Pārvērst austrumu un ziemeļu koordinātēs}}.
2. Norādiet pagriezienu līdz režģa ziemeļiem (grādos, pretēji pulksteņrādītāja virzienam; 0 nozīmē, ka modeļa Y ass rāda uz režģa ziemeļiem) un sākumpunkta augstumu.
3. Mērogs sākas ar mērvienību starpību starp modeli un karti (0.001 milimetru modelim uz metru režģa). Mainiet to tikai kombinētam zemes-režģa koeficientam.
4. Izvēlieties {{ui:Novietot kartē}}. Viens atsaukšanas solis ieraksta IfcProjectedCRS un IfcMapConversion (IFC4). Pats modelis nekustas.

IFC2X3 failā nav neviena no šiem vienumiem. BimCraft ieraksta tos pašus skaitļus tā, kā to atļauj šis standarts: buildingSMART rekvizītu kopas `ePSet_MapConversion` un `ePSet_ProjectedCRS` projektā, vietas ģeogrāfisko platumu un garumu un patieso ziemeļu virzienu. Dialoglodziņš to norāda. Saglabājiet modeli, lai to paturētu.

## Modelis, kas jau ir kartē

Kad fails jau ir novietots kartē un jūs izvēlaties citu sistēmu, BimCraft jautā:

- {{ui:Mainīt tikai to, ko rāda Atrašanās vieta}} paturē faila pašu georeferenci un izmanto jūsu izvēli {{ui:Atrašanās vieta}}, kartes slāņiem un punktu mākoņiem (modeļa skaitļi tad tiek lasīti kā atrodoši jaunajā sistēmā).
- {{ui:Pārvietot modeli uz šo sistēmu}} pārraksta georeferenci: sākumpunkts iet cauri projekcijai (austrumu un ziemeļu koordinātes, augstums, pagrieziens un mērogs), un IfcProjectedCRS (nosaukums, datums, projekcija, zona, vienība) tiek pārrakstīts, tāpēc saglabātais IFC norāda jauno sistēmu. Vieta uz zemes paliek tā pati: sākumpunkts saglabā savu ģeogrāfisko platumu un garumu. Elementi modelī nekad nemainās; mainās tikai georeference.

Dialoglodziņš rāda veco un jauno sākumpunktu, pirms izvēlaties. Pārvietojoties uz turieni un atpakaļ, sākumpunkts atgriežas līdz vienam milimetram.

## Punktu mākoņi un reljefs citā sistēmā

Mākonis vai uzmērījuma fails pats nes savu sistēmu (LAS, LAZ, E57, GeoTIFF) vai nenes nevienu. Kad tā atšķiras no modeļa sistēmas, BimCraft piedāvā {{ui:Pārprojicēt modeļa sistēmā}}. Punkti tiek pārvietoti partijās (darbinieka procesā, kad to ir daudz, lai lapa paliktu lietojama), fails jūsu datorā netiek aizskarts, un statusa rindā norādīts, kas izdarīts. Atkārtoti atveriet failu, lai atgrieztos pie tā paša sistēmas. Jau atvērtam mākonim {{ui:Pārprojicēt uz modeli…}} mākoņa joslā dara to pašu.

Ja fails nenosauc sistēmu, BimCraft jautā {{ui:Kādā sistēmā ir šis fails?}}: izvēlieties to ar {{ui:Izvēlēties sistēmu…}}, un atbilde tiek atcerēta šim failam šajā ierīcē. {{ui:Paturēt faila pašu sistēmu}} atstāj punktus, kādi tie ir.

## Kad kaut kas ir aptuvens

Problēmas tiek uzskaitītas dialoglodziņā un panelī Problēmas, nekad klusi:

- Vieta ārpus apgabala, kam sistēma paredzēta: skaitļi strādā, bet izkropļojums pieaug.
- Datumu nobīdes, kam nepieciešams režģa fails (NADCON, NTv2 un tamlīdzīgi), nav pieejamas. Sistēmas citā datumā tiek pārvietotas ar bezrežģa nobīdi, ko uzskaita EPSG reģistrs, un rezultāts ir aptuvens līdz norādītajai precizitātei, ko ziņojums sniedz metros.
- Punkts, ko nevar projicēt, tiek izlaists un saskaitīts; fails, kas pārsniedz izmēra ierobežojumu, tiek noraidīts, un ierobežojums tiek norādīts.

:::tip
Kartes koordinātēm nepieciešama kartes konvertācija. Failu bez tās novieto kartē ar {{ui:Kartes sākumpunkts…}}.
:::

:::note
Pārvietošanās starp datumiem bez režģa faila ir precīza dažu metru robežās; Atrašanās vietas rezultāts norāda, cik tieši, kad katalogs to zina.
:::
