---
title: Skontrolujte dozvuk miestnosti a vypočujte si ho
summary: Čas dozvuku po oktávových pásmach pre každú miestnosť (Sabine a Eyring) z jej veľkosti a povrchových úprav, vlastný cieľ a hlas, tlesknutie alebo hudba prehraté cez vypočítanú impulznú odozvu miestnosti.
keywords: akustika, dozvuk, čas dozvuku, RT60, sabine, eyring, pohlcovanie, ozvena, zvuk, počúvanie, impulzná odozva, reč, učebňa, kancelária, koberec, akustický podhľad, hluk
from: 16996cbb
---

Časť {{ui:Akustika miestností}} ľavého panela počíta, ako dlho zvuk dozníva v každej miestnosti. Z otvoreného modelu IFC načítava plochu podlahy, výšku, steny, dvere a okná každej miestnosti. V modeli sa nič nemení.

## Výber povrchových úprav

Tam, kde model hovorí, čo je na povrchu, miestnosť to načíta: vnútornú vrstvu typu každej steny (sadrokarton, omietka, tehla, betón a tvárnice sú známe), druh podlahy (drevo alebo betón) a či je strop obkladaný. Štítok pri každej voľbe ukazuje, či je údaj z modelu, predvolený alebo váš výber; na prepísanie vyberte inú úpravu. Čokoľvek, čo model nehovorí, zostáva na predvolenej hodnote. Koeficienty sú **typické publikované hodnoty**; keď máte skúšobné údaje výrobku, nahraďte ich nimi. Zadajte **cieľ** (najdlhší stredofrekvenčný dozvuk, aký chcete) a každá miestnosť nad ním bude upozornená spolu s pohlcovaním, ktoré by ju znížilo.

## Čítanie tabuľky

Dozvuk je uvedený pre 125 Hz až 4 kHz. Sabine sa hodí pre dozvučné miestnosti a Eyring pre tlmené; riadok označený *Použité* použije Eyring, keď je priemerné pohlcovanie nad 0.2. Pohlcovanie vzduchu je zahrnuté (v dlhých miestnostiach skracuje vysoké pásma). Je to štatistický model: predpokladá rovnomerné šírenie zvuku, takže dlhé alebo ploché miestnosti a veľmi malé miestnosti sú len hrubým odhadom a nábytok, ľudia a otvorené dvere sa nepočítajú.

## Počúvanie

{{ui:Prehrať v tejto miestnosti}} prehrá hlas (vytvorený tu), tlesknutie, odrhnuté tóny alebo **váš vlastný zvukový súbor** (zostáva vo vašom počítači) cez impulznú odozvu vypočítanú pre miestnosť: priamy zvuk, prvé odrazy kvádra takej veľkosti a dozvuk, ktorý dozníva v čase dozvuku miestnosti v každom pásme. {{ui:Prehrať bez miestnosti}} prehrá rovnaký zvuk rovnakou hlasitosťou bez miestnosti. Impulznú odozvu alebo zvuk v miestnosti môžete uložiť ako súbory WAV. Znie to ako miestnosť danej veľkosti a úpravy, nie ako nejaká skutočná miestnosť.

## Ľudia a nábytok

Zadajte počet **ľudí v tejto miestnosti**, aby sa pripočítalo ich pohlcovanie. Nábytok, ktorý model obsahuje (pohovky, postele, stoličky, stoly, skrine, vyhľadané podľa názvu), pridá svoje vlastné. Hodnoty sú hrubé plánovacie údaje, zaokrúhlené; pri dôležitej miestnosti ich nahraďte meraniami.

## Zdroj a poslucháč

V časti {{ui:Zdroj a poslucháč}} stlačte {{ui:Umiestniť zdroj}} alebo {{ui:Umiestniť poslucháča}} a kliknite na pôdorys miestnosti. Zvuk, ktorý prehráte, sa potom počuje odtiaľ: priamy zvuk prichádza po vzdialenosti a dozvučná časť je na úrovni pre túto vzdialenosť. Obidve zrušte, aby ste sa vrátili k poliu pre vzdialenosť.

## Nerovnomerné pohlcovanie a módy miestnosti

V časti {{ui:Nerovnomerná absorpcia (miestnosť ako kváder)}} zadajte miestnosť ako kváder a vyberte úpravy jej podlahy, stropu a stien. Tabuľka pridáva k Sabine a Eyring metódy Fitzroy a Arau-Puchades: tri dvojice protiľahlých plôch posudzujú osobitne, takže miestnosť s kobercom a tvrdým stropom sa nevyhodnotí ako príliš krátka. Keď sa dvojice výrazne líšia, poznámka uvedie, ktorej dvojici dôverovať. Pod tabuľkou **Módy miestnosti** sú uvedené najnižšie stojaté vlny kvádra a frekvencia, pod ktorou má miestnosť samostatné módy namiesto rovnomerného zvukového poľa. Ide o predpovede pre kváder, pomôcku pri návrhu a nie o meranie.

## Jednotky

Plochy, výšky, objemy a vzdialenosti miestností sa zobrazujú v {{ui:Jednotky}}, ktoré ste zvolili (štvorcové a kubické stopy, palce, milimetre, centimetre alebo metre). Výpočet prebieha stále v SI; mení sa len zobrazenie. Časy (sekundy), frekvencie a úrovne sa nemenia.
