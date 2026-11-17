---
title: Virzīt cilvēkus caur ēku
summary: Evakuācija vai parastas dienas ierašanās caur jūsu telpām, durvīm un kāpnēm, ar rindām tur, kur ēka sašaurinās, garākais gājiens līdz izejai no katras telpas un atradumi kā Problēmas. Rupjs pūļa modelis projektēšanas lēmumiem, nevis ugunsdrošības sertifikāts.
keywords: cilvēki, evakuēšanās, izeja, izbēgšana, gājiena attālums, rinda, plūsma, durvju platums, kāpnes, ierašanās, sašaurinājums, simulācija, iemītnieki, gājējs, kas būtu, ja, bloķētas durvis
from: 84aa8920
---

Sadaļa {{ui:Cilvēki ēkā}} kreisajā panelī virza cilvēkus caur atvērtā IFC modeļa telpām, durvīm un kāpnēm. Modelī nekas netiek mainīts un nekas netiek augšupielādēts.

:::warning
Šis ir **projektēšanas palīglīdzeklis, nevis ugunsdrošības sertifikāts**. Tas nezina par uguni, dūmiem, paniku, kustību ierobežojumiem vai to, ko prasa normatīvs. Robežas nosakāt jūs: garākais gājiens līdz izejai un pieejamais laiks ir skaitļi, ko ierakstāt jūs, un neviens nav pieņemts.
:::

## Palaist

1. Atveriet modeli ar slēgtām telpām un durvīm. Durvis, kur telpa atrodas tikai vienā pusē, ir izeja; durvis starp divām telpām tās savieno; kāpnes savieno telpas savos galos.
2. Izvēlieties **Evakuācija** (visi iet uz izeju), **Ierašanās** (visi ieiet un dodas uz telpu) vai **Apmaiņa** (cilvēki telpās iziet, kamēr tikpat daudzi ieiet), un telpas grīdas platību uz vienu cilvēku. Telpas, kas nosauktas kā koridors, kāpnes, vestibils vai tualete, neturēs nevienu.
3. Noklikšķiniet uz {{ui:Palaist}}. Jūs saņemat laiku, kad pēdējais cilvēks ir izgājis (un kad puse un deviņi no desmit), rindu pie katrām durvīm un kāpnēm, telpu ar garāko gājienu un plānu, kas atskaņo gaitu.

## Ko darīt, ja

Atzīmējiet {{ui:Slēgts}} durvīm tabulā un palaidiet vēlreiz: cilvēki atrod citu ceļu, vai telpas bez izejas tiek uzskaitītas kā kļūdas. Durvis, kas ir divreiz platākas, iztukšo telpu daudz ātrāk; tabula rāda, kur ir rindas.

## Kā tas darbojas

Katra telpa ir režģis, tāpēc cilvēki iet ap stūriem, nevis caur sienām. Ātrums krītas, kad telpa piepildās (S = 1.4 (1 − 0.266 D) m/s, kur D ir cilvēki uz m²). Durvis laiž cauri 1.3 cilvēkus sekundē uz katru metru to platuma, mīnus 150 mm katrā pusē; kāpnes 1.0, un gājiens tajās ir lēnāks. Cilvēki gaida rindā pēc ierašanās kārtības. Palaišanas numurs atkārto tieši to pašu gaitu.

Asistents var palaist to pašu: pieprasiet evakuāciju vai garāko gājienu līdz izejai no katras telpas.

## Cilvēki katrā telpā

Atveriet {{ui:Cilvēki katrā telpā}}, lai ierakstītu skaitli jebkurai telpai. Tukšais lodziņš izmanto grīdas platības skaitli (rādīts pelēkā krāsā); 0 iztukšo telpu. Jūsu skaitļi tiek izmantoti palaišanai un glabājas šajā pārlūkprogrammā.

## Pretplūsma pie durvīm

Sadaļā **Apmaiņa** cilvēki, kas iet ārā, un cilvēki, kas ieiet, satiekas pie tām pašām durvīm. Kad durvis izlaiž kādu pretējā virzienā tieši aiz pēdējā cilvēka, tās saglabā daļu sava ātruma (šeit 0.8; tas ir pieņēmums, jo publicētās vērtības atšķiras), un tabula saskaita virziena maiņas. Durvis, kas bieži maina virzienu, tiek uzskaitītas sadaļā Problēmas kā piezīme.

## Kāpnes un laukumi

Katrs kāpņu laukums liek gājējam pagriezties vienu sekundi (pieņēmums). Taisnām kāpnēm tā nav; L vai U veida kāpnēm ir viens. Kāpņu ātrums joprojām ir atkarīgs no tā posma platuma.

## 3D skatā

Atzīmējiet {{ui:Rādīt cilvēkus 3D skatā}}, un gājēji parādās kā figūras modelī, krāsoti pēc tā, ko viņi dara, un pārvietojas, kad atskaņojat gaitu. Modelim nekas netiek pievienots.
