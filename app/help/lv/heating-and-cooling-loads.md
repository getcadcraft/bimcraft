---
title: Siltuma un dzesēšanas slodžu aplēse
summary: Katras telpas siltumzudumi, tās apsilde gadā pēc dienu grādiem un dzesēšanas maksimums, no tā, kas to ierobežo modelī, un katra elementa U-vērtības, ar visiem ievades datiem redzamiem. Projektēšanas palīglīdzeklis, nevis atbilstības aprēķins.
keywords: enerģija, apsilde, dzesēšana, siltumzudumi, siltuma slodze, dzesēšanas slodze, U-vērtība, siltumcaurlaidība, dienu grādi, HDD, ventilācija, gaisa maiņas, iekšējie ieguvumi, saules ieguvums, lambda, siltumvadītspēja, siltumizolācija, agrīnā projektēšana, analīze, telpas, zonas
from: ec312d20
---

Cilnē {{ui:Dienasgaisma}}, pēc {{ui:Aprēķināt}}, atveriet {{ui:Siltuma un dzesēšanas slodzes}} un noklikšķiniet uz {{ui:Aprēķināt slodzes}}. Katra telpa iegūst savus **siltumzudumus** aukstā projektēšanas dienā, savu **apsildi gadā** un savu **dzesēšanas maksimumu** karstā dienā. Nekas netiek augšupielādēts; modelī nekas nemainās, ja vien neierakstāt U-vērtību.

:::warning
Šis ir **projektēšanas palīglīdzeklis, nevis atbilstības aprēķins**: stacionārs novērtējums ar katru ievadi ekrānā. Tas **nav** ISO 52016-1 metode, nav simulācija un nav enerģijas sertifikāts; tas neizmēro katlus, siltumsūkņus vai aukstumiekārtas. Pārbaudiet rezultātus un izmēriet iekārtas kopā ar inženieri.
:::

## Kas ierobežo katru telpu

BimCraft to atrod pašā modelī, tātad darbojas jebkuras programmas IFC (tam nav vajadzīgas telpu robežas, ko eksportē dažas programmas). No katra telpas virsmas gabaliņa tas skatās taisni uz āru:

- pirmā siena, logs, durvis, grīda, jumts, apdare, stiklotā siena vai sija, ko tas sastop, **ierobežo** šo gabaliņu;
- tieši aiz šī elementa ir vai **cita telpa** (uzskatīta par blakus telpu tajā pašā temperatūrā: zudumu nav), **nekas** (ārā) vai, zem grīdas zemākajā stāvā, **zeme**;
- atvērta durvju ieeja uz citu telpu tiek uzskatīta par blakus telpu; gabaliņš, kas nesastop nekā (1,5 m sāniski vai lejup, 8 m augšup), tiek uzskaitīts telpai un neieskaitīts.

Logi un durvis iegūst savu izmēru no IFC (kopējais platums × augstums) no sienas, kurā atrodas. Noklikšķiniet uz telpas tabulā, lai redzētu katru elementu, kas to ierobežo, ar tā laukumu, U-vērtību un to, no kurienes U-vērtība radusies.

## U-vērtības

Katram elementam, ko BimCraft izmanto, šādā secībā:

1. **IFC pašas U-vērtība** — `ThermalTransmittance` elementa kopīgajā rekvizītu kopā (piemēram, `Pset_WallCommon`) vai tā tipa kopā. Lielākā daļa projektēšanas programmu to var ierakstīt.
2. **Tā materiālu slāņi** — 1 ÷ (iekšējā virsmas pretestība + katra slāņa biezums ÷ tā siltumvadītspēja λ + ārējā virsmas pretestība), ar parastajām virsmas pretestībām (0.13 un 0.04 m²K/W sienām; 0.10 augšup un 0.17 lejup iekšpusē). Tipiskas siltumvadītspējas, lai sāktu (akmensvilna 0.035, ķieģelis 0.77, betons 1.4…); zem {{ui:Materiālu siltumvadītspēja}} ierakstiet ražotāja vērtību, un katra U-vērtība no šiem slāņiem seko tai.
3. **Tipiska vērtība** (sienām 0.3, jumtiem 0.2, grīdām 0.25, logiem 1.4, durvīm 1.6 W/m²K), atzīmēta kā tāda — ierakstiet savu.

Telpas detaļās ierakstītā U-vērtība tiek ierakstīta elementa kopīgajā rekvizītu kopā kā `ThermalTransmittance` (viens solis; {{key:Mod+Z}} to atsauc). Ja vairāki elementi izmanto to pašu kopu (piemēram, viens sienas tips), tie visi mainās kopā, un statusa rindā norādīts, cik.

## Apsilde

- **Siltumzudumi** = Σ U × A × (iekšējā − ārējā) visam, kas ir ārā, + Σ U × A × (iekšējā − zemes) grīdām uz zemes + 0.335 × gaisa maiņas stundā × telpas tilpums × (iekšējā − ārējā). 0.335 Wh uz m³ uz kelvinu ir gaisa blīvums (1.2 kg/m³) reizināts ar tā siltumietilpību (1005 J/kgK).
- **Apsilde gadā** = (telpas zudums uz grādu uz āru, caur konstrukciju un gaisu, plus tās zemes zudums, mērogots līdz tai pašai starpībai) × **dienu grādi** × 24 ÷ 1000, kWh. Ierakstiet dienu grādus šai vietai vai izmantojiet {{ui:Nolasīt dienu grādus no CSV…}} (viena rinda uz dienu vai mēnesi; katras rindas pēdējais skaitlis tiek saskaitīts). Izmantojiet dienu grādus līdz tai bāzes temperatūrai, ko izmanto jūsu avots: šī bāze jau ņem vērā cilvēku, gaismu un saules brīvo siltumu.

## Dzesēšana

**Dzesēšanas maksimums** = siltums caur konstrukciju un gaisu vasaras projektēšanas temperatūrā + cilvēki (grīdas platība uz personu × siltums uz personu) + apgaismojums un iekārtas uz m² grīdas + **saule**: tās telpas {{ui:Saule caur logiem noteiktā datumā}} maksimums. Vispirms aprēķiniet sauli karstā dienā; līdz tam saule skaitās 0, un sadaļā tas ir norādīts. Katras daļas maksimumi tiek saskaitīti kopā, pat ja tie iestājas dažādās stundās, tāpēc rezultāts nedaudz tiek pārvērtēts.

## Ko tas neņem vērā

- ISO 52016-1 ikmēneša un stundas metodes (maksāts standarts), ēkas masā uzkrātais siltums, siltuma tilti, apkures un dzesēšanas sistēmu darbība un klimata faili.
- Blakus esošās telpas tiek ņemtas vienā temperatūrā; neapsildītas telpas nav modelētas.

Skatiet arī [Novērtējiet dienasgaismu katrā telpā](topic:daylight-factor).
