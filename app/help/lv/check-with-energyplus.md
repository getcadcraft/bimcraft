---
title: Apkures un dzesēšanas pārbaude ar EnergyPlus
summary: Ierakstiet modeli kā EnergyPlus failu vai palaidiet tam EnergyPlus versiju 26.2.0 pārlūkprogrammā un salīdziniet tā projektēšanas slodzes ar ātro apkures un dzesēšanas palīgu. Otrs viedoklis agrīnai projektēšanai, nevis atbilstības aprēķins.
keywords: energyplus, energosimulācija, projektēšanas diena, apkures slodze, dzesēšanas slodze, laika fails, epw, idf, termiskā masa, gada enerģija, simulēt
from: b82a5bf2
---

## Ko jūs darīsiet

Panelis **Pārbaude ar EnergyPlus** ieraksta atverto modeli kā EnergyPlus ievades failu (IDF): viena zona katrai telpai, sienas, grīdas, jumti un logi ar to U-vērtībām, gaisa apmaiņa un ideāla apkure un dzesēšana. Jūs vienmēr varat **saglabāt šo failu** un palaist to savā EnergyPlus.

Ja arī iestatāt dzinēju, panelis var simulēt uz vietas un uzskaita EnergyPlus projektēšanas apkuri un dzesēšanu blakus ātrajam palīgam, telpu pa telpai.

Šis ir projektēšanas palīgs. Energoefektivitātes normatīvi, sertifikācija un atļaujas prasa apstiprinātu rīku un tam nepieciešamos klimata datus, un rezultāts jāpārskata personai, kura par to atbild.

## Iestatiet dzinēju

BimCraft neiekļauj EnergyPlus. Tas ir liels WebAssembly build (apmēram 6 MB saspiests, plus 4,6 MB datu fails), tāpēc jūs to mitināt paši un ierakstiet tā adresi panelī. Lapa to ielādē tikai tad, kad nospiežat simulācijas pogu, nekad palaižot. Adresei jābūt https, šīs vietnes ceļam vai localhost.

## Projektēšanas dienas vai gads

- **Simulēt projektēšanas dienas** neprasa laika failu. Tā palaiž aukstu ziemas dienu bez saules un karstu, skaidru vasaras dienu ar temperatūrām, kas norādītas apkures un dzesēšanas ievades laukos cilnē Dienas gaisma, un atskaita katras telpas slodzi vatos.
- **Simulēt gadu** prasa laika failu EPW formātā, ko izvēlaties. Tas pievieno cilvēkus, apgaismojumu un iekārtas no tiem pašiem ievades datiem (vienmēr ieslēgti, jo grafiks netiek izdomāts) un atskaita katras telpas apkures un dzesēšanas enerģiju kWh. Laika failiem ir savas licences, tāpēc izmantojiet tādu, kuru drīkstat lietot.

## Termiskā masa

Atzīmējiet **Piešķirt sienām ar zināmiem slāņiem termisko masu**, un sienas, jumti un grīdas, kuru materiālu slāņi ir zināmi, tiek ierakstīti slāni pa slānim, ar blīvumu un īpatnējo siltumietilpību, kas paņemta no īsas tipisko vērtību tabulas pēc materiāla nosaukuma. Slāņi tiek ņemti vispirms no ārpuses, failā uzskaitītajā secībā. Elementi bez slāņiem paliek ar savu U-vērtību bez masas.

## Salīdzinājuma lasīšana

Abas metodes atbild nedaudz atšķirīgi jautājumus. Ātrais palīgs saglabā katru elementu; EnergyPlus fails vidēji aprēķina katras telpas U-vērtības pēc virsmas veida. Atšķirība virs 15 % telpas projektēšanas apkurē tiek uzskaitīta kā piezīme ⚠ panelī, ar abiem skaitļiem. Dzesēšana pēc dizaina atšķiras vairāk: ātrais palīgs aprēķina maksimumu no saules vienā datumā, bet EnergyPlus izmēro pēc sava projektēšanas dienas.
