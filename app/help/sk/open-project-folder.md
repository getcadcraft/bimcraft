---
title: Otvorenie celého projektového priečinka
summary: Nasmerujte BimCraft na projektový priečinok, aby ste naraz videli každý model, jeho zálohy a odkazy, a nechajte pole Začnite tu navrhnúť, na ktorom súbore pracovať.
keywords: priečinok, adresár, projektový priečinok, sieťová jednotka, server, začnite tu, ktorý súbor, zálohy, odkazy, xrefs, nedávne priečinky, pretiahnutie priečinka
from: 16fbdce2
---

## Čo urobíte

Otvoríte celý projektový priečinok, napríklad ten, ktorý ste dostali na úlohu, a necháte BimCraft, aby ho spracoval: ktoré modely sú v ňom, ktoré kópie sú zálohy, čo na čo odkazuje, ktoré súbory sú poškodené a ktorý súbor pravdepodobne chcete otvoriť.

Číta sa iba niekoľko kilobajtov, ktoré každá karta modelu potrebuje, takže priečinok na sieťovej jednotke alebo v synchronizovanom cloude je v poriadku.

## Kroky

:::chromium
1. Kliknite na {{ui:Otvoriť priečinok}} vľavo (alebo uprostred prázdnej obrazovky).
2. V okne, ktoré sa otvorí, vyberte projektový priečinok a kliknite na **Vybrať** (alebo na **Nahrať** či **Otvoriť**, podľa vášho systému).
3. Kliknite na **Zobraziť súbory**, keď sa prehliadač opýta „Povoliť stránke zobraziť súbory?“. Karte sa tým povolí iba čítať priečinok; nič sa nenahráva.
4. Počkajte, kým stavový riadok počíta: „Vypisovanie priečinka: … súborov“, potom „Kontrola súborov Revit: … z …“.
:::

:::firefox
1. Kliknite na {{ui:Otvoriť priečinok}} vľavo (alebo uprostred prázdnej obrazovky).
2. V okne, ktoré sa otvorí, vyberte projektový priečinok a potvrďte. Firefox vás môže požiadať o potvrdenie, že stránka môže čítať súbory priečinka; súbory však zostávajú na vašom počítači.
3. Počkajte, kým stavový riadok ukáže „Čítanie priečinka: … súborov“, potom „Kontrola súborov Revit: … z …“.
:::

:::safari
1. Kliknite na {{ui:Otvoriť priečinok}} vľavo (alebo uprostred prázdnej obrazovky).
2. V okne, ktoré sa otvorí, vyberte projektový priečinok a kliknite na **Nahrať**. Napriek tomuto slovu nič neopustí váš Mac: súbory sa iba odovzdajú karte.
3. Počkajte, kým stavový riadok ukáže „Čítanie priečinka: … súborov“, potom „Kontrola súborov Revit: … z …“.
:::

Priečinok môžete aj **pretiahnuť** z {{pick:mac=Finder|windows=Prieskumník súborov|linux=váš správca súborov}} na stránku. Pretiahnutý priečinok sa otvorí bez výzvy na povolenie v každom prehliadači.

## Čo uvidíte

Správa o priečinku vyplní stred:

- Názov priečinka, počty modelov, výkresov CAD, modelov IFC a súborov, a celková veľkosť.
- Červené alebo oranžové poznámky, ak sú niektoré súbory neúplné alebo ak v priečinku chýbajú prepojené súbory.
- Pole {{ui:Začnite tu}}: súbor, ktorý BimCraft navrhuje otvoriť, s dôvodmi.
- **Modely**: jeden riadok na model, so zálohami zoskupenými pod ním.
- **Prepojené a odkazované súbory**, **Modely IFC**, **Výkresy CAD** a **Odložené**, ak ich priečinok obsahuje.

Vľavo panel {{ui:Priečinok}} to zhrnie; **Problémy** hovoria „Žiadne“, keď je každá kópia v poriadku.

## Použitie poľa Začnite tu

Pole pomenuje jeden súbor a uvedie dôvod, napríklad:

- „Najnovšia uložená práca v tomto priečinku (3. marca 2025).“
- „*Consultant.rvt* je prepojený do iných modelov, takže je podklad, nie súbor na úpravu.“
- „*Tower.rvt* vyzerá ako zjavná voľba, ale je poškodený; jeho posledná dobrá kópia je z …“
- „Toto je centrálny model: v Revit ho otvorte cez „Create New Local“ a pracujte v lokálnej kópii.“

1. Prečítajte si dôvody.
2. Kliknite na {{ui:Otvoriť jeho kartu}}, ak chcete prečítať kartu tohto súboru, alebo na {{ui:Zobraziť v zozname}}, ak chcete nájsť jeho riadok v **Modely**.
3. Pred tým, ako sa na súbor spoľahnete, sa opýtajte toho, kto na projekte naposledy pracoval. Pole to hovorí tiež: je to odhad založený na názvoch, dátumoch a odkazoch.

## Otvorenie súborov zo správy

1. Kliknite na názov modelu a otvorte jeho kartu. Karta skontroluje každý odkaz voči priečinku.
2. Na návrat kliknite na {{ui:Späť na}} a na názov priečinka hore na karte (alebo na {{ui:Späť do priečinka}} vľavo).
3. Kliknite na ľubovoľný súbor IFC pod **Modely IFC**, aby sa otvoril v 3D.
4. Kliknite na ľubovoľný DWG alebo DXF pod **Výkresy CAD**, aby sa otvoril v 2D. Jeho prepojené výkresy a obrázky sa v priečinku nájdu automaticky.

## Opätovné otvorenie priečinka neskôr

:::chromium
Priečinky, ktoré ste otvorili pomocou {{ui:Otvoriť priečinok}} alebo pretiahnutím, sú vľavo vypísané pod {{ui:Nedávne priečinky}}. Kliknite na {{ui:Znova otvoriť}} a názov priečinka, aby sa znova otvoril bez výberu. Po reštarte prehliadača sa Chrome alebo Edge opýta ešte raz; zvoľte „Povoliť pri každej návšteve“, aby sa to prestalo pýtať. Zoznam sa uchováva iba v tomto prehliadači a nikdy sa neposiela. Kliknutím na × priečinok zabudnete.
:::

:::firefox safari
Tento prehliadač si priečinky medzi návštevami nepamätá. Vyberte priečinok znova cez {{ui:Otvoriť priečinok}} alebo ho pretiahnite.
:::

## Časté chyby

- **Výber priečinka, ktorý je príliš veľký.** Pri viac ako 20 000 súboroch: „Tento priečinok má viac ako 20 000 súborov. Vyberte menší priečinok, napríklad jeden projekt.“ Vyberte projektový priečinok, nie celý disk.
- **Výber nadradeného priečinka viacerých projektov.** Pole {{ui:Začnite tu}} potom vyberá naprieč projektmi. Vyberte jeden projekt.
- **Vyzerá to, že priečinky Revit sú ignorované.** Priečinky `*_backup`, `*_log` a `Revit_temp` sú údržba a sú vypísané pod **Odložené**; nečítajú sa.
- **Očakávanie, že sa model otvorí v 3D z karty.** Projektový súbor je iba karta. Otvorte jeho export IFC.
- **Telefóny a tablety.** Mnohé mobilné prehliadače nedokážu vybrať priečinky vôbec. Použite počítač.

Pozrite [Kontrola priečinka na poškodené kópie, chýbajúce odkazy a zvyšky](topic:check-folder-health) a [Správa o priečinku: roly, stavy a odkazy](topic:folder-roles).
