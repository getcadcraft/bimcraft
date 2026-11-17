---
title: Porovnanie skenu s modelom a 4D harmonogramom
summary: Posúďte každý prvok modelu voči otvorenému mračnu bodov (hotové, čiastočne, chýba, nedosiahnuté), zobrazte percento hotových, zafarbite model podľa nich a pri načítanom 4D harmonograme zoznam toho, čo zaostáva alebo predbieha 4D deň.
keywords: sken, mračno bodov, postup, percento dokončenia, hotové, chýba, za harmonogramom, pred harmonogramom, 4D, postup na stavbe, odchýlka, skutočné zhotovenie, laserový sken, dron, porovnanie
from: 6fdc9003
---

Otvorte IFC, otvorte mračno bodov vedľa neho (pozri [Mračná bodov](topic:point-clouds)) a umiestnite ho na model. Sekcia {{ui:Porovnať sken s modelom}} sa zobrazí v pravom paneli, kým je mračno otvorené.

## Čo to robí

Stlačte {{ui:Porovnať}}. Každý prvok modelu sa posudzuje podľa svojho povrchu, pretože to vidí skener. Šesť plôch jeho ohraničujúceho kvádra sa rozdelí na bunky s veľkosťou asi 20 cm; bunka sa počíta, keď bod skenu leží v rámci vašej {{ui:Tolerancie}} (50 mm na začiatku) od plochy. Počíta sa najlepšia veľká plocha, takže stena naskenovaná z jednej strany nie je penalizovaná za svoju druhú stranu.

- **Hotové**: aspoň 40 % povrchu je vidieť.
- **Čiastočne**: 10 % až 40 %.
- **Chýba**: menej než to, ale sken k prvku dosiahne (body do 1.5 m od neho).
- **Nedosiahnuté**: sken tam nikdy nebol, takže o ňom nič nehovoríme.

Pri hotových a čiastočne hotových prvkoch uvádza aj priemerné odchýlenie bodov skenu od povrchu modelu a hovorí, či je prvok na mieste (v rámci tolerancie), blízko (do trojnásobku) alebo mimo (ďalej). Vidí iba odchýlky až do päťnásobku tolerancie: prvok postavený ďalej od svojho miesta, než je to, sa zobrazí ako chýbajúci.

Súhrn uvádza percento hotových medzi prvkami, ktoré sken dosiahne, podľa počtu a podľa objemu. Čiastočne hotové prvky sa počítajú osobitne a nepričítavajú sa k hotovým.

## Voči harmonogramu 4D

Pri načítanom 4D harmonograme (pozri [4D harmonogram](topic:4d-schedule)) výsledok tiež používa deň, ktorý ste nastavili na posuvníku 4D: prvky, ktoré mali byť hotové do toho dňa a ktoré sken nezobrazuje ako hotové, sú **za harmonogramom**; prvky, ktoré ešte nemali byť hotové a sú hotové, sú **pred harmonogramom**. Prvky za harmonogramom sú uvedené v {{ui:Problémy}} a tabuľku je možné na ne filtrovať. Bez harmonogramu sa o tom, či zaostávajú alebo predbiehajú, nič nehovorí.

## Tabuľka a model

Kliknutím na riadok vyberte prvok. {{ui:Zafarbiť model}} zafarbí prvky na zeleno (hotové), jantárovo (čiastočne), červeno (chýba) alebo sivo (nedosiahnuté); {{ui:Vlastné farby}} ich vráti späť. {{ui:Uložiť CSV}} zapíše tabuľku. {{ui:Označiť zodpovedajúce prvky ako overené na mieste}} označí každý prvok, ktorý bol videný ako hotový a je v rámci tolerancie, ako overený na mieste (LOD 500, metóda sken), jedným krokom, ktorý môžete vrátiť späť. Pozrite si [Označenie prvkov ako skontrolovaných alebo overených na mieste](topic:verification).

:::warning
Toto porovnáva ohraničujúci kváder každého prvku s bodmi skenu v rámci tolerancie. **Nie je to zameranie, výkaz výmer ani podklad pre platbu.** Prvok skrytý za naskenovaným (múr za obkladom, doska pod podlahovou úpravou) zdieľa svoj povrch a môže sa zobraziť ako hotový; zakrivený alebo šikmý prvok má kváder väčší než jeho teleso a môže sa zobraziť ako čiastočne alebo chýbajúci. Pred konaním sa pozrite na zoznam. Komentáre k povoleniam a poznámky o postupe v tom nie sú: zostávajú v stĺpcoch, v ktorých ich uchovávate.
:::

Asistent môže spustiť to isté porovnanie nástrojom {{ui:Porovnať sken s modelom}}; nič v modeli nezmení.
