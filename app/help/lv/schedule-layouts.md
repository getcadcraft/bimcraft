---
title: Izkārtojiet, saglabājiet un eksportējiet specifikāciju
summary: Group a schedule, give it subtotals and totals, add a column read from a property, save it as a set-up in the file, and export it as a spreadsheet workbook (.xlsx), as text to paste into an online sheet, or as CSV. The office standard fills in what a schedule does not state.
keywords: specifikācijas izkārtojums, grupēt pēc, apakškopsumma, kopsumma, virsraksti, biroja standarts, noklusējuma politikas, iestatījums, durvju specifikācija pa stāviem, ugunsizturība, apkalumi, xlsx, darbgrāmata, tiešsaistes darblapa, ielīmēt, csv, eksports, izklājlapa, elementi, atlasīt no specifikācijas, skaitlis
from: 95dfd801
---

## Ko jūs darīsiet

Pārvērst vienkāršu specifikāciju par to, ko jūsu birojs izdod: grupētu pēc līmeņa, tipa vai telpas, ar apakškopsummām un kopsummu, ar nepieciešamajām kolonnām, savā nosaukumā. Tad nosūtiet to uz izklājlapu. Katra rinda un katrs skaitlis joprojām zina elementus, no kuriem tie radušies.

## Soļi

1. Ieslēdziet {{ui:Zīmēšana}} un atveriet **Specifikācijas** kreisajā panelī. Izvēlieties specifikāciju, piemēram, **Durvis**.
2. Virs tabulas izvēlieties **Grupēt pēc** (specifikācijas kolonna, piemēram, Līmenis vai Tips, vai **Bez grupēšanas**) un **Kopsummas** (**Bez kopsummām**, **Viena kopsumma** vai **Apakškopsummas un kopsumma**). **Kā iestatīts** atstāj izvēli saglabātajam iestatījumam vai biroja standartam.
3. Lai pievienotu kolonnu, kas tiek nolasīta no elementiem, zem tabulas ierakstiet īpašuma vai birkas nosaukumu (piemēram, `FireRating`, `Pset_DoorCommon.FireRating` vai birkas nosaukumu, piemēram, `Ironmongery`) un noklikšķiniet **Pievienot kolonnu**. BimCraft vispirms nolasa paša elementa īpašumu kopas, tad tā tipa. Ja vēl nav vērtības, tā to saka; kolonna aizpildās pati, tiklīdz vērtība tiek iestatīta.
4. Ierakstiet nosaukumu (piemēram, "Durvju specifikācija pa stāviem") un noklikšķiniet **Saglabāt kā iestatījumu**. Iestatījums tiek glabāts ēkas failā un pievienojas Specifikāciju sarakstam ar savu nosaukumu. Tas seko katrai modeļa izmaiņai. **Noņemt šo iestatījumu** to izņem. Abas ir viens solis atsaukšanā.

## Noklikšķiniet uz skaitļa, lai atlasītu, no kā tas radies

Noklikšķiniet uz jebkuras rindas vai jebkura atsevišķa skaitļa, lai plānā un 3D atlasītu aiz tā stāvošos elementus:

- rinda atlasa tās rindas elementus;
- apakškopsumma vai kopsumma atlasa visu, ko tā summē; grupas virsraksts — savu grupu;
- skaitlis ar saviem elementiem atlasa tos: sienas tipa **Atskaitījumi** atlasa tās durvis un logus, telpas sienu laukums — tās sienas.

Tas pats darbojas arī dokumentā, kas izveidots no modeļa: priekšskatījumā noklikšķiniet uz specifikācijas skaitļa.

## Eksports

- **Lejupielādēt Excel** saglabā .xlsx darbgrāmatu. Garumi, laukumi, tilpumi un skaiti ir reāli skaitļi kolonnā rādītajās mērvienībās (pēdas un collas paliek teksts). Otrā lapa **Elementi** uzskaita katrai rindai GlobalId elementus, no kuriem tā radusies.
- **Kopēt Google Sheets** ieliek specifikāciju starpliktuvē kā tabulatoru atdalītu tekstu. Google Sheets darblapā noklikšķiniet šūnā A1 un ielīmējiet. **Atvērt jaunu Google Sheets** atver `sheets.new`, Google savu adresi tukšai darblapai, jūsu pašu Google kontā. BimCraft neparakstās Google kontā un nekam tur nesūta: ielīmēšana ir jūsu.
- **Lejupielādēt CSV** saglabā tabulu tādu, kāda tā izkārtota ekrānā.

## Biroja standarts

Birojs var vienreiz pateikt, kā tā specifikācijas ir izkārtotas. Ieslēdziet papildinājumu **Noklusējuma politikas** ([Noklusējuma politikas](topic:default-policies)) un iestatiet **Iestatījumi › Globāli › Noklusējuma politikas › Specifikācijas izkārtojums (biroja standarts)**:

| Politika | Ko tā dara |
|---|---|
| Grupēt specifikācijas pēc | Līmeņa, tipa, telpas vai bez grupēšanas, katrai specifikācijai, kurai ir šāda kolonna |
| Kopsummas specifikācijās | Bez kopsummām, viena kopsumma beigās vai apakškopsumma zem katras grupas un kopsumma |
| Specifikācijas nosaukums | Veidne, piemēram, `{project}: {schedule}` |
| Kolonnu virsraksti | Kā rakstīts, VISI LIELIE BURTI vai Ar Lielajiem Burtiem |

Standarts attiecas uz katru specifikāciju, neatkarīgi no tā, kas to iestatījis: paneļa vienkāršajām specifikācijām, saglabātu iestatījumu, specifikāciju, ko iestatījis asistents, eksportiem un specifikācijām dokumentā. Iestatījums, kas nosaka savu grupēšanu, kopsummas vai nosaukumu, tos patur; standarts aizpilda pārējo. Panelis norāda, kuras daļas iestatījis biroja standarts. Politikas tiek pārvietotas kopā ar pārējām Noklusējuma politikas failā.

## Labi zināt

- Iestatījums nosauc savu avota specifikāciju un tās kolonnas; tajā nav skaitļu. Skaitļi tiek nolasīti no modeļa katru reizi.
- Saraksti, kas nav elementu rindas (sienu konstrukcijas un materiālu leģenda), šeit nav izkārtojami un nav eksportējami.
- Asistents var to visu izdarīt jums: skatiet [Ļaujiet AI asistentam strādāt ar jūsu modeli](topic:assistants).
