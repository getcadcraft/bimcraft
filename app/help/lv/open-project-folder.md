---
title: Atvērt visu projekta mapi
summary: Norādiet BimCraft uz projekta mapi, lai uzreiz redzētu visus modeļus, to dublējumus un saites, un ļaujiet lodziņam Sāciet šeit ieteikt, ar kuru failu strādāt.
keywords: mape, direktorija, projekta mape, tīkla disks, serveris, sāciet šeit, kurš fails, dublējumi, saites, xref, pēdējās mapes, mapes ievilkšana
from: 16fbdce2
---

## Ko jūs darīsiet

Atveriet visu projekta mapi, piemēram, to, kas jums iedota darbam, un ļaujiet BimCraft to sakārtot: kādi modeļi tur ir, kuras kopijas ir dublējumi, kas ar ko ir saistīts, kuri faili ir bojāti un kuru failu jūs, visticamāk, vēlaties atvērt.

Tiek nolasīti tikai daži kilobaiti, ko katrai modeļa kartītei vajag, tāpēc mape tīkla diskā vai sinhronizētā mākoņa mapē ir pieņemama.

## Soļi

:::chromium
1. Kreisajā pusē (vai tukšā ekrāna vidū) noklikšķiniet uz {{ui:Atvērt mapi}}.
2. Atvērtajā logā izvēlieties projekta mapi un noklikšķiniet uz **Atlasīt** (vai **Augšupielādēt** vai **Atvērt**, atkarībā no jūsu sistēmas).
3. Kad pārlūks jautā "Ļaut vietnei skatīt failus?", noklikšķiniet uz **Skatīt failus**. Tas ļauj cilnei tikai nolasīt mapi; nekas netiek augšupielādēts.
4. Pagaidiet, kamēr statusa rindā notiek skaitīšana: "Mapes uzskaitīšana: … failu", tad "Revit failu pārbaude: … no …".
:::

:::firefox
1. Kreisajā pusē (vai tukšā ekrāna vidū) noklikšķiniet uz {{ui:Atvērt mapi}}.
2. Atvērtajā logā izvēlieties projekta mapi un apstipriniet. Firefox var lūgt apstiprināt, ka lapa drīkst nolasīt mapes failus; tie joprojām paliek jūsu datorā.
3. Pagaidiet, kamēr statusa rindā rakstīts "Mapes nolasīšana: … failu", tad "Revit failu pārbaude: … no …".
:::

:::safari
1. Kreisajā pusē (vai tukšā ekrāna vidū) noklikšķiniet uz {{ui:Atvērt mapi}}.
2. Atvērtajā logā izvēlieties projekta mapi un noklikšķiniet uz **Augšupielādēt**. Neraugoties uz vārdu, nekas neatstāj jūsu Mac: faili tikai tiek nodoti cilnei.
3. Pagaidiet, kamēr statusa rindā rakstīts "Mapes nolasīšana: … failu", tad "Revit failu pārbaude: … no …".
:::

Varat arī **ievilkt mapi** no {{pick:mac=Finder|windows=Failu pārlūks|linux=jūsu failu pārvaldnieks}} lapā. Ievilkta mape atveras bez atļaujas jautājuma katrā pārlūkprogrammā.

## Ko jums vajadzētu redzēt

Mapes pārskats aizpilda vidu:

- Mapes nosaukums, modeļu, CAD rasējumu, IFC modeļu un failu skaits, kā arī kopējais izmērs.
- Sarkanas vai dzeltenas piezīmes, ja daži faili ir nepilnīgi vai daži saistītie faili trūkst mapē.
- Lodziņš {{ui:Sāciet šeit}}: fails, ko BimCraft iesaka atvērt, ar iemesliem.
- **Modeļi**: viena rinda katram modelim, ar tā dublējumiem grupētiem zem tā.
- **Saistītie un atsauces faili**, **IFC modeļi**, **CAD rasējumi** un **Atlikts malā**, ja mapē ir kaut kas no tā.

Kreisajā pusē panelis {{ui:Mape}} to apkopo; **Problēmas** rāda "Nav", kad katra kopija ir veselīga.

## Izmantot lodziņu Sāciet šeit

Lodziņš nosauc vienu failu un pasaka, kāpēc, piemēram:

- "Jaunākais saglabātais darbs šajā mapē (2025. gada 3. marts)."
- "*Consultant.rvt* ir saistīts ar citiem modeļiem, tāpēc tas ir fons, nevis fails rediģēšanai."
- "*Tower.rvt* šķiet acīmredzama izvēle, bet tas ir bojāts; tā pēdējā derīgā kopija ir no …"
- "Šis ir centrālais modelis: programmā Revit atveriet to ar "Create New Local" un strādājiet vietējā kopijā."

1. Izlasiet iemeslus.
2. Noklikšķiniet uz {{ui:Atvērt tā kartīti}}, lai izlasītu šī faila kartīti, vai uz {{ui:Parādīt sarakstā}}, lai atrastu tā rindu sadaļā **Modeļi**.
3. Pirms paļaušanās uz failu pajautājiet, kas pēdējais strādāja pie projekta. Lodziņš to saka arī pats: tas ir labākais minējums no nosaukumiem, datumiem un saitēm.

## Atvērt failus no pārskata

1. Noklikšķiniet uz modeļa nosaukuma, lai atvērtu tā kartīti. Kartīte pārbauda katru saiti pret mapi.
2. Lai atgrieztos, noklikšķiniet uz {{ui:Atpakaļ uz}} un mapes nosaukuma kartītes augšdaļā (vai uz {{ui:Atpakaļ uz mapi}} kreisajā pusē).
3. Noklikšķiniet uz jebkura IFC faila zem **IFC modeļi**, lai to atvērtu 3D.
4. Noklikšķiniet uz jebkura DWG vai DXF zem **CAD rasējumi**, lai to atvērtu 2D. Tā saistītos rasējumus un attēlus mapē atrod automātiski.

## Atkal atvērt mapi vēlāk

:::chromium
Mapes, ko atvērāt ar {{ui:Atvērt mapi}} vai ievelkot, kreisajā pusē ir uzskaitītas sadaļā {{ui:Pēdējās mapes}}. Noklikšķiniet uz {{ui:Atkārtoti atvērt}} un mapes nosaukuma, lai to atkal atvērtu bez izvēles. Pēc pārlūkprogrammas restartēšanas Chrome vai Edge vēlreiz pajautā vienreiz; izvēlieties "Atļaut katrā apmeklējumā", lai pārtrauktu jautājumu. Saraksts glabājas tikai šajā pārlūkprogrammā un nekur nenosūtīts. Noklikšķiniet uz × , lai aizmirstu mapi.
:::

:::firefox safari
Šī pārlūkprogramma starp apmeklējumiem nevar atcerēties mapes. Izvēlieties mapi vēlreiz ar {{ui:Atvērt mapi}} vai ievelciet to.
:::

## Biežākās kļūdas

- **Pārāk liela mape.** Vairāk nekā 20 000 failu: "Šajā mapē ir vairāk nekā 20,000 failu. Izvēlieties mazāku mapi, piemēram, vienu projektu." Izvēlieties projekta mapi, nevis visu disku.
- **Vairāku projektu vecākmapes izvēle.** Lodziņš {{ui:Sāciet šeit}} tad izvēlas starp projektiem. Izvēlieties vienu projektu.
- **Šķiet, ka Revit savas mapes tiek ignorētas.** Mapes `*_backup`, `*_log` un `Revit_temp` ir tīrīšanas mapes; tās ir uzskaitītas sadaļā **Atlikts malā**, nevis nolasītas.
- **Gaidīt, ka modelis atvērsies 3D no savas kartītes.** Projekta fails ir tikai kartīte. Atveriet tā IFC eksportu.
- **Tālruņi un planšetdatori.** Daudzas mobilās pārlūkprogrammas vispār nevar izvēlēties mapes. Izmantojiet datoru.

Skatiet [Pārbaudīt mapi, vai nav bojātu kopiju, trūkstošu saišu un atlikumu](topic:check-folder-health) un [Mapes pārskats: lomas, statusi un saites](topic:folder-roles).
