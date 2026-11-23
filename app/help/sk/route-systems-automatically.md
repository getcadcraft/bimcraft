---
title: Automatické trasovanie vzduchotechniky, odpadov, vody a potrubí chladiva
summary: V kontrole kolízií BimCraft nájde trasu okolo otvoreného modelu pre vzduchotechnické potrubia, gravitačný odvod, studenú a teplú vodu a rozdeľované alebo multi-split potrubia chladiva, a nakreslí trasy s ich tvarovkami v jednom kroku späť. Pomôcka pri kreslení: rozmery, sklony a kontroly pochádzajú z tabuliek v programe a z čísel, ktoré zadáte; nič tu nehovorí, že návrh spĺňa predpis.
keywords: automatické trasovanie, autoroute, trasovať potrubia, trasovať vzduchotechniku, odpady, gravitácia, stúpačka, odvetranie, zápachová uzávierka, voda, teplá voda, cirkulačná slučka, chladivo, split, multi-split, VRF, ekvivalentná dĺžka, odbočková sada, wye
from: 5841d513
---

## Čo urobíte

Nechajte BimCraft navrhnúť sieť trás medzi prípojkami, ktoré už sú v modeli, okolo múrov a nosníkov, a potom ju skontrolujte podľa čísel, ktoré vidíte.

## Postup

1. Otvorte model a kontrolu kolízií. V časti **Automaticky trasovať vzduchotechniku** vyberte vzduchotechnickú jednotku a jej koncové prvky, alebo v časti **Automaticky trasovať ostatné systémy** vyberte systém.
2. **Sanitárny odvod gravitáciou.** Zadajte polohu odtoku a, ak ich máte, polohy stúpačiek. Zaškrtnite **Trasovať každé podlažie naraz**, aby sa vzali všetky podlažia, ktoré majú armatúry: odpady každého podlažia sa napoja na stúpačku na svojej úrovni a stúpačka vedie od miesta nad najvyšším odberným miestom až po svoju pätu. Stlačte {{ui:Trasovať}}.
3. **Zápachová uzávierka k odvetraniu.** Panel vypisuje vzdialenosť od každej zápachovej uzávierky k jej odvetraniu. Zadajte najviac, čo váš predpis dovoľuje, do **Najviac od zápachovej uzávierky k odvetraniu**; každá armatúra nad tým je uvedená ako nevyriešená s počtom milimetrov navyše. Zaškrtnite **Odvetrať cez stúpačku**, keď armatúry nemajú vlastný odvetrávací nátrubok: vzdialenosť sa potom meria ku stúpačke. BimCraft neobsahuje tabuľku predpisu: číslo zadáte vy.
4. **Studená a teplá voda.** Vyberte zdroj, zadajte tlak na zdroji a tlak, ktorý potrebujete na armatúre. Zaškrtnite **Teplá voda**, vyberte teplú prípojku ohrievača a zaškrtnite **Cirkulačná slučka**, aby sa cirkulačné vedenie ukončilo na prípojke **hot-return** ohrievača alebo na inej prípojke, ktorú vyberiete (tá sa ukončí 150 mm pred koncom, otvorená, aby ju mohli spojiť vy).
5. **Split, multi-split a VRF.** Vyberte vonkajšiu jednotku, zaškrtnite vnútorné jednotky a zadajte výkon každej z nich. Zadajte limity podľa údajov vášho výrobcu. Zadajte **ekvivalentnú dĺžku** ohybu a odbočovacej sady (hodnoty výrobcu) a najdlhšie a celkové dĺžky sa skontrolujú podľa ekvivalentných dĺžok.
6. Stlačte {{ui:Trasovať}}. Panel ukáže, koľko trás nakreslil, a čo nedokázal spraviť a prečo. {{ui:Späť}} vráti všetko späť v jednom kroku.

## Čo by ste mali vidieť

Potrubia s kolenami, T-kusmi a redukciami; odpady, ktoré klesajú aspoň o najmenší sklon pre svoju veľkosť; odvetrávacie nátrubky pri armatúrach; potrubia chladiva ako dvojica kvapalinového a plynového vedenia, ktorá sa na každom ohybe otáča rovnakým spôsobom, s odbočovacou sadou označenou tam, kde odbočka vychádza z hlavnej trasy.

## Dobre vedieť

- Kde sa odpad napojí na iný odpad, model nakreslí T-kus. Pôdorys tieto miesta pomenúva ako 45-stupňové wye odbočky, aby ste mohli tvarovku zmeniť.
- Teplá voda používa vlastnú teplú prípojku armatúry, keď ju jej rodina má, a prípojku 100 mm vedľa studenej, keď ju nemá.
- Prípojky chladiva začínajú medzi dvoma portami každej jednotky. Keď sú dva porty jednotky príliš blízko na ohyb, dvojica zostane vycentrovaná medzi nimi.
- Sieť vody používa krivku odberu a hodnoty trenia zobrazené vo výpočtoch; pred spoliehaním sa na tlaky ich nahraďte hodnotami vášho predpisu.
- Veľké domy môžu trvať pol minúty alebo dlhšie, najmä teplá sieť.
- Toto je pomôcka pri kreslení. Kvalifikovaná osoba overí rozmery, sklony, odvetranie a tlaky podľa predpisu, ktorý platí.

## Ďalej

[Kontrola kolízií](topic:clash-check) · [Kontrola potrubí a vzduchotechniky voči konštrukcii](topic:mep-against-structure) · [Prepojenia medzi potrubím a zariadeniami](topic:mep-connections)
