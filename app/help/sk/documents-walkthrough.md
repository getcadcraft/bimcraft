---
title: Dokumenty a revízie (trezor)
summary: Krok za krokom pri jednej skutočnej zákazke: dajte priečinok projektu s modelmi IFC pod kontrolu, odhláste model, zmeňte ho, prihláste ho s poznámkou, pošlite na revíziu, schváľte a uvoľnite, pozrite históriu a to, čo ho používa, čo vidí druhá osoba, kým je zamknutý, a ako to funguje s cloudovými priečinkami.
keywords: trezor, dokumenty, postup, návod, odhlásiť, prihlásiť, revízia, uvoľnenie, schválenie, zámok, história, kde použité, ifc, model, cloudový priečinok, priečinok projektu, dvaja ľudia, zdieľaný priečinok
from: 0a753f25
---

## Čo budete robiť

Ste Ana a pracujete na Riverside clinic spolu s kolegom Benom. IFC modely projektu sú v jednom priečinku, ku ktorému sa dostanete obaja (zdieľaný disk, synchronizovaný priečinok alebo cloudový priečinok). Na konci jeden súbor prejde od prvej kópie k uvoľnenej revízii **A**, je znova zmenený ako **B.1**, uvidíte, kto čo urobil, a uvidíte, čo vidí Ben, keď súbor držíte vy.

Všetko je uložené v skrytom priečinku `.ccvault` vedľa vašich súborov: žiadny server, nič sa neodosiela (výnimkou je cloudový priečinok, pozri posledný krok). Každé tlačidlo a pravidlo na jednom mieste nájdete v téme *Dokumenty: odhlásenie, revízie a uvoľnenie*, tam, kde ju vaša aplikácia má.

## 1. Nastavte priečinok projektu

1. Vyberte {{ui:Dokumenty}} vedľa {{ui:Otvoriť priečinok}} na úvodnej obrazovke, alebo {{ui:Dokumenty…}} v ponuke **Súbor**.
2. Vyberte {{ui:Vybrať projektový priečinok}} a zvoľte priečinok, ktorý obsahuje IFC modely projektu. (Priečinky projektov fungujú v Studio a v prehliadačoch, ktoré vedia otvoriť priečinok, ako Chrome a Edge. V iných prehliadačoch to panel povie.)
3. Vyberte {{ui:Zmena}} vedľa **Vy:** a napíšte svoje meno, `Ana` (ak sa pýta, aj názov tohto počítača). Panel teraz hovorí *Vy: Ana na* a váš počítač. Vaše meno ide ku všetkému, čo urobíte.
4. Vyberte {{ui:Založiť trezor v tomto priečinku}} a napíšte názov projektu, `Riverside clinic`. Panel hovorí *Trezor bol založený pre Riverside clinic.*

## 2. Dajte súbor pod kontrolu

1. Otvorte **Súbory mimo trezora** a vyberte {{ui:Pridať}} vedľa `models/House.ifc`.
2. Objaví sa pod **Súbory v trezore** v revízii **A.1**, stav **Rozpracované**. A.1 je jeho prvá kópia; trezor uchováva kópiu každej revízie.

## 3. Odhláste, zmeňte, prihláste

1. Vyberte {{ui:Otvorené}} vedľa `models/House.ifc`. Model sa otvorí v BimCraft a panel sa zavrie, aby ste ho videli. Panel znova otvorte cez {{ui:Dokumenty}}.
2. Znova otvorte panel a vyberte {{ui:Odhlásiť}}. Riadok teraz hovorí **Odhlásené vám**. Zámkový súbor sa vytvoril v `.ccvault/locks`; nikto iný tento súbor nemôže odhlásiť, kým ho vy neprihlásite.
3. Zmeňte model: posuňte stenu, pridajte dvere. Uloženie je odmietnuté, pokiaľ model nie je odhlásený vám, a povie prečo; {{ui:Uložiť ako}} vždy funguje pre kópiu vášho vlastného.
4. Otvorte panel, vyberte {{ui:Prihlásiť}} a napíšte, čo sa zmenilo (`Dvere presunuté`). Panel povie *prihlásené ako A.2*. Súbor v priečinku projektu je teraz model, ktorý ste mali otvorený, a zámok zmizol. Prihlásenie bez zmeny ponechá revíziu.

Ak si to rozmyslíte, {{ui:Zrušiť odhlásenie}} vráti súbor bez novej revízie.

## 4. Revízia a uvoľnenie

1. Vyberte {{ui:Poslať na revíziu}}. Stav sa zmení na **Na revíziu** a súbor je iba na čítanie.
2. Pred schválením vyberte {{ui:Nastavenia projektu}} a uveďte, kto môže schváliť (jedno meno na riadok), napríklad `Ben` a `Carla`, a označte pravidlo, že schvaľovateľ musí byť niekto iný ako autor. Vyberte {{ui:Uložiť nastavenia}}. Teraz trezor sám odmietne každého iného.
3. Ben (alebo Carla) vyberie {{ui:Schváliť}} a napíše meno schvaľovateľa. Stav sa zmení na **Uvoľnené** a revízia na **A**, s *schválil* a menom. Uvoľnený súbor je iba na čítanie. {{ui:Vrátiť}} by ho vrátil do stavu Rozpracované, s dôvodom.

Meno schvaľovateľa je meno zadané v paneli; je to záznam o tom, kto schválil, nie dôkaz totožnosti.

## 5. Nová revízia

1. Na uvoľnenom súbore vyberte {{ui:Nová revízia}}. Držíte ju pre ďalšie písmeno.
2. Zmeňte ho a potom {{ui:Prihlásiť}}. Revízia je **B.1**, rozpracovaná. Uvoľnite ju rovnako a stane sa z nej **B**. {{ui:Zrušiť odhlásenie}} pred prvým prihlásením ho ponechá na **A**.

Písmená revízií idú A, B … Z, AA, AB. Ak váš štandard niektoré písmená vynecháva, projektové nastavenie *Použiť postupnosť ASME Y14.35* preskočí I, O, Q, S, X a Z pre ďalšie revízie.

## 6. Pozrite si, čo sa stalo

Vyberte názov súboru, aby ste otvorili jeho podrobnosti:

- **{{ui:História}}**: každá udalosť, najnovšia prvá, s kto, na ktorom počítači a kedy: *Prihlásené A.2* od Any, *Uvoľnené* od Bena, a tak ďalej.
- **{{ui:Revízie}}**: tabuľka revízií: každá uchovaná revízia, s jej dátumom, kto ju prihlásil, poznámkou a kto ju schválil. Trezor uchováva kópiu každej v `.ccvault/revs`.
- **{{ui:Používa}}**: dokumenty, na ktoré model IFC ukazuje.
- **{{ui:Používa}}**: zoznam každého modelu v trezore, ktorý ukazuje na tento súbor.

## Modely, ktoré ukazujú na iné dokumenty

Model IFC, ktorý ukazuje na iné dokumenty v priečinku (výkresy, tabuľky), ich zobrazí pod **Používa** a každý z nich ukáže model pod **Používa**. Keď prihlásite dokument, uvidíte, ktoré modely naň odkazujú.

## 7. Čo vidí Ben, kým súbor držíte

Teraz súbor znova odhláste a požiadajte Bena, aby otvoril ten istý priečinok projektu na svojom počítači a otvoril panel. Na riadku súboru uvidí **Odhlásené: Ana na** váš počítač **od** času a žiadne tlačidlo {{ui:Odhlásiť}}. Ak sa o to pokúsi aj tak, trezor to odmietne: zámok je súbor, ktorý systém nedokáže vytvoriť dvakrát, takže dvaja ľudia nemôžu súbor držať obaja, ani v tej istej zlomku sekundy, keď je priečinok na disku v Studio. (V prehliadači priečinok dovoľuje len približné zabezpečenie a panel to povie pod **Priečinok**.)

Ak Ana nie je prítomná a súbor je potrebný, {{ui:Zrušiť odhlásenie}} ho uvoľní. Treba napísať dôvod; ide do záznamu spolu s tým, čí bolo odhlásenie. Keď projekt uvádza správcov, môžu to urobiť iba oni. Odhlásenie staršie ako limit zastarania (predvolene 14 dní) je označené *dlho*. Po zrušení Aninho neskoršieho prihlásenia je odmietnuté, takže si navzájom nemôžete prepísať súbor.

## 8. Cloudové priečinky

Cloudový priečinok je priečinok projektu uložený v cloudovom úložisku vášho tímu, takže tím nepotrebuje zdieľaný disk. V Studio, prihlásený do svojho účtu CadCraft, panel zobrazuje {{ui:Otvoriť cloudový priečinok}} vedľa {{ui:Vybrať projektový priečinok}}. Vyberte ho a zvoľte priečinok, uvedený ako pracovný priestor / priečinok. Vlastník pracovného priestoru ho najprv vytvorí a cloudové úložisko tímu musí byť v platnosti. Všetko vyššie funguje rovnako; server vytvára zámok, ktorý je medzi ľuďmi prísny. Ak nie ste prihlásení, panel vás vyzve na prihlásenie. V bežnej karte prehliadača sa tlačidlo cloudu neponúka; použite Studio.

## Vyskúšajte

Urobte osem krokov vyššie s kópiou skutočného súboru. Pre kroky s dvoma osobami potrebujete ďalšiu osobu alebo dve okná s dvoma menami. Ak to skúšate so skutočným zdieľaným priečinkom, stránka Komunitné testovanie obsahuje kontrolu, ktorá sa pýta presne na toto, a prijíma výsledky.
