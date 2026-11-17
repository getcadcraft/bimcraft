---
title: Modeļa pārbaude pret klienta IDS
summary: Ielādējiet saņemto .ids failu un sadaļā Problēmas skatiet visus elementus, kas tam neatbilst, pirms nododat IFC.
keywords: ids, informācijas piegādes specifikācija, buildingsmart, prasības, nodošana, pārbaude, validācija, kvalitāte, eir, bep, īpašība, klasifikācija, materiāls, iepirkums
from: 7b960222
---

## Ko jūs darīsiet

IDS (Information Delivery Specification jeb informācijas piegādes specifikācija, buildingSMART standarts) ir saraksts ar to, ko IFC failam jāsatur: kādas klases, kurām īpašībām ar kādām vērtībām, klasifikācijas, materiāli un kur kas jānovieto. Klienti un publiskie iepirkumi kopā ar darbu nosūta šādu specifikāciju. BimCraft pārbauda atvērto IFC modeli pret to un uzskaita katru elementu, kas neatbilst prasībām.

## Soļi

1. Atveriet IFC modeli.
2. Kreisajā panelī zem {{ui:Modeļa pārbaudes}} atveriet {{ui:Pārbaudīt pret IDS}} vai izvēlnē, kas atbilst jūsu izvēlnes stilam, izvēlieties {{ui:Pārbaudīt pret IDS…}}.
3. Noklikšķiniet uz {{ui:Ielādēt .ids failu…}} un izvēlieties failu. Nekas netiek augšupielādēts.
4. Izlasiet rezultātu: katra specifikācija ar {{ui:Izpildīts}} vai {{ui:Neizpildīts}} un to elementu skaitu, uz kuriem tā attiecas.
5. Atveriet Problēmas ({{key:Ctrl+Shift+M}}) un noklikšķiniet uz neizpildītās prasības, lai atlasītu elementu un tuvinātu uz to.

## Ko jums vajadzētu redzēt

- Viens brīdinājums par katru elementu un prasību, ko tas neizpilda, ar specifikācijas nosaukumu, to, ko prasa IDS, un to, kas elementam ir.
- Obligātā specifikācija, ar ko modelī nekas neatbilst, ir atsevišķs brīdinājums.
- Pārbaudes pārskats (sadaļā Problēmas) sākas ar IDS: tā nosaukumu, versiju, autoru un katras specifikācijas attiecināmo, izpildīto un neizpildīto elementu skaitu.

## Lietderīga informācija

- IFC saglabā tikai atsauci uz IDS (tā nosaukumu, virsrakstu, versiju un jaucējvērtību), nevis pašu IDS: klienta IDS var būt konfidenciāls, un IFC tiek nosūtīts citiem cilvēkiem. IDS paliek šajā pārlūkprogrammā blakus modelim, tāpēc, atkārtoti atverot saglabāto IFC šeit, tas tiek pārbaudīts vēlreiz. IDS ielādēšana vai aizmiršana ir viens solis, ko var atsaukt.
- Atverot citā datorā vai citā pārlūkprogrammā, sadaļā Problēmas parādās paziņojums, ka IDS nav atrasts: ielādējiet to vēlreiz, lai pārbaudītu atkārtoti.
- Lai nosūtītu IDS kopā ar IFC, pirms ielādēšanas iestatījumos cilnē BimCraft ieslēdziet {{ui:Glabāt IDS IFC iekšienē}}.
- Katra izmaiņa, atsaukšana un atkārtošana tiek pārbaudīta vēlreiz nedaudz vēlāk.
- Vērtības tiek salīdzinātas IDS veidā: teksts precīzi (ir svarīgs reģistrs), skaitļi SI vienībās ar nelielu pieļaujamo novirzi (garumi metros, tāpēc modelis milimetros vispirms tiek pārvērsts).
- Specifikācija, kas rakstīta citai IFC versijai (piemēram, IFC2X3, kad modelis ir IFC4), tiek joprojām pārbaudīta, un rezultātā tas tiek norādīts.
- Ja IDS failam ir kļūdas, ko atklātu IDS audits, dialogā tās tiek uzskaitītas; specifikācijas, kurās tās ir, neizpildās.
- Neizpildījumu var pieņemt ar pamatojumu, tāpat kā jebkuru problēmu. Tas paliek pieņemts, kamēr elementa vērtības paliek tādas pašas.

- IDS šablonus lasa kā visu vērtību. Sākumā esošais `^` un beigās esošais `$` arī tiek uztverti kā "visa vērtība", kā to vairums IDS failu nozīmē.

## Tālāk

- [Pārbaudīt modeli, vai nav bieži sastopamu problēmu](topic:model-checks)
- [Sienas vai durvju maiņa](topic:change-a-wall-or-door)
