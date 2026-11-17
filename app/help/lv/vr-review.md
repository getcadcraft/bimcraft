---
title: Modeļa pārskatīšana VR austiņās
summary: Staigājiet pa IFC modeli pilnā izmērā VR austiņās: lēkājiet, grieziet, mēriet, atveriet griezumu, novietojiet BCF problēmas ar attēlu, skatiet to kā galda modeli un satieciet tiešsaistes sesijas pārējos dalībniekus.
keywords: vr, virtuālā realitāte, austiņas, webxr, xr, immersīvs, quest, oculus, vive, index, pico, staigāt, staigājums, teleportēties, dizaina pārskatīšana, koordinācija, pārskatīšana, mērīt, griezums, griezt, problēma, problēmas, bcf, galda modelis, mērogota maketa, klātbūtne, avatari, tiešraide, kopā
from: 8994b36d
---

{{ui:VR}} rīkjoslā ievieto jūs modelī ar VR austiņām pilnā izmērā. Jūs stāvat tur, kur atrodas 3D skata kamera, grīdā zem tās, skatoties tajā pašā virzienā. Austiņas rāda to, ko rāda 3D skats: paslēptie stāvi, elementi un modeļi paliek paslēpti, un krāsotie materiāli tiek līdzi. Nekas netiek augšupielādēts: pārlūkprogramma to zīmē šajā datorā (vai austiņu pašas pārlūkprogrammā).

## Kas jums nepieciešams

- Austiņas, ko pārlūkprogramma var vadīt (WebXR): patstāvīgu austiņu pašas pārlūkprogramma vai Chrome vai Edge datorā ar pieslēgtām austiņām.
- Atvērts IFC modelis drošā lapā (https), kā tā ir šajā vietnē.

Ja austiņu nav, {{ui:VR}} ir pelēks un norāda iemeslu.

## Sākums

1. Iestatiet 3D skatu vietā, no kuras sākt: telpā vai ārpusē, skatoties uz ēku.
2. Noklikšķiniet uz {{ui:VR}} rīkjoslā.
3. Uzvelciet austiņas.

Izvēlne ir uz kreisās rokas aizmugures. Norādiet uz to ar labo kontrolieri un nospiediet sprūdu, lai izvēlētos pogu. (Ar vienu roku izvēlne peld tur, kur sākāt.)

## Pārvietošanās

- **Lēkt:** sadaļā {{ui:Pārvietot}} norādiet uz grīdu un nospiediet sprūdu; nolecat tur. Vai pabīdiet kociņu uz priekšu, lai mērķētu, un atlaidiet, lai lēktu. Var nolēkt tikai uz grīdām, pārsegumiem un zemes (virsmām, kas vērstas uz augšu), nekad uz sienas.
- **Pagriezties:** pabīdiet kociņu pa kreisi vai pa labi: katrreiz pagriežaties par 30°.
- **Staigāt:** savā brīvajā zonā vienkārši staigājiet.

## Mērīšana

Izvēlieties {{ui:Mērīt}} un nospiediet sprūdu divos punktos. Attālums starp tiem rādās metros. Punkts tuvu stūrim piestiprinās pie stūra.

## Griezuma atvēršana

Izvēlieties {{ui:Griezums}} un nospiediet sprūdu uz virsmas:

- uz sienas (vai uz kaut kā, kas nav grīda): viss starp jums un šo virsmu tiek nogriezts, lai jūs varētu redzēt iekšā. Tas labi darbojas no ārpuses vai pāri telpai;
- uz grīdas, no augšas: plāna griezums 1,2 m virs šīs grīdas, lai sienas rādītu savu apakšējo daļu.

{{ui:Notīrīt}} noņem griezumu un mērījumus. Ja [griezuma plakne](topic:section-plane) sagriež modeli, kad sākat, austiņas sākas ar to.

## Problēmas novietošana

Izvēlieties {{ui:Problēma}} un nospiediet sprūdu, kur ir problēma. Numurēta tapiņa to atzīmē, un problēma nonāk cilnē {{ui:Problēmas}} kā BCF tēma ar attēlu no tā, ko redzējāt, un kameru, kur stāvējāt, modeļa paša koordinātēs. Saglabājiet tās kopā ar pārējām [problēmām](topic:issues-bcf) kā BCF failu; citi koordinācijas rīki atver tās tajā pašā skatā.

Pievienojiet komentāru problēmai pēc izejas no VR, cilnē Problēmas: rakstīšana austiņās vēl nav izveidota.

## Skatīt kā galda virsmas modeli

{{ui:Galda virsma}} samazina modeli, lai tas ietilptu galdā jūsu priekšā; staigājiet apkārt tam vai pagrieziet ar kociņu. {{ui:Pilnā izmērā}} jūs ievieto atpakaļ tur, kur bijāt.

## Kopā ar citiem, tiešraidē

[Tiešsaistes sesijā](topic:work-live) ikviens VR redz pārējos kā galvu un divas rokas viņu krāsā, ar vārdu un punktu, kur katrs norāda. Ikviena veiktās izmaiņas nonāk jūsu austiņās dažu mirkļu laikā. Cilvēki pie galda austiņās vēl netiek rādīti.

## Iziet

Izvēlieties {{ui:Iziet no VR}} (vai noņemiet austiņas un beidziet tur). 3D skats ekrānā pārvietojas uz vietu, kur atradās jūsu galva.

:::note
Pārbaudīts ar austiņu emulatoru, vēl ne uz visām austiņām. Liels modelis var panākt, ka austiņas iestrēgst: vispirms paslēpiet stāvus vai modeļus, kas nav vajadzīgi ([paslēpt un izolēt](topic:hide-and-isolate)).
:::
