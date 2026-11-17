---
title: Kontrola modelu podľa IDS klienta
summary: Načítajte súbor .ids, ktorý ste dostali, a pred odovzdaním IFC uvidíte v Problémy každý prvok, ktorý mu nevyhovuje.
keywords: ids, information delivery specification, buildingsmart, požiadavky, dodanie, kontrola, validácia, qa, eir, bep, vlastnosť, klasifikácia, materiál, verejné obstarávanie
from: 7b960222
---

## Čo budete robiť

IDS (Information Delivery Specification, norma buildingSMART) je zoznam toho, čo musí IFC obsahovať: ktoré triedy, ktoré vlastnosti s akými hodnotami, klasifikácie, materiály a kde majú prvky patriť. Klienti a verejné obstarávanie ho posielajú spolu so zákazkou. BimCraft kontroluje otvorený model IFC podľa neho a vypíše každý prvok, ktorý nespĺňa požiadavky.

## Postup

1. Otvorte model IFC.
2. Otvorte {{ui:Check against an IDS}} v ľavom paneli, pod {{ui:Model checks}}, alebo vyberte {{ui:Check against IDS…}} z ponuky podľa zvoleného štýlu ponuky.
3. Kliknite na {{ui:Load an .ids file…}} a vyberte súbor. Nič sa nenahráva na server.
4. Prečítajte výsledok: každú špecifikáciu s {{ui:Pass}} alebo {{ui:Fail}} a koľkým prvkom sa týka.
5. Otvorte Problémy ({{key:Ctrl+Shift+M}}) a kliknutím na nevyhovujúci prvok ho vyberte a priblížte.

## Čo by ste mali vidieť

- Jedno upozornenie na každý prvok a každú požiadavku, ktorej nevyhovuje, s názvom špecifikácie, tým, čo IDS požaduje, a tým, čo prvok má.
- Požadovaná špecifikácia, na ktorú nesedí nič v modeli, má vlastné samostatné upozornenie.
- Správa o kontrole (v Problémy) začína IDS: jeho názvom, verziou, autorom a počtami použiteľných, vyhovujúcich a nevyhovujúcich prvkov pre každú špecifikáciu.

## Dobré vedieť

- IFC uchováva iba odkaz na IDS (jeho názov, nadpis, verziu a hash), nie samotný IDS: IDS klienta môže byť dôverný a IFC ide ďalším ľuďom. IDS zostáva v tomto prehliadači vedľa modelu, takže keď uložený IFC znova otvoríte tu, kontroluje sa znova. Načítanie alebo zabudnutie IDS je jeden krok, ktorý môžete vrátiť späť.
- Ak model otvoríte na inom počítači alebo v inom prehliadači, Problémy zobrazí poznámku, že IDS sa nenašiel: načítajte ho znova, aby sa kontrola zopakovala.
- Ak chcete posielať IDS spolu s IFC, pred jeho načítaním zapnite {{ui:Keep the IDS inside the IFC}} v Nastaveniach, na karte BimCraft.
- Každá úprava, späť a znova sa o chvíľu skontroluje znova.
- Hodnoty sa porovnávajú spôsobom IDS: text presne (rozlišujú sa veľké a malé písmená), čísla v jednotkách SI s malou toleranciou (dĺžky v metroch, takže model v milimetroch sa najprv prevedie).
- Špecifikácia napísaná pre inú verziu IFC (napríklad IFC2X3, keď je model IFC4) sa aj tak skontroluje; výsledok to uvedie.
- Ak súbor IDS obsahuje chyby, ktoré by audit IDS označil, dialóg ich vypíše; špecifikácie, v ktorých sú, zlyhajú.
- Zlyhanie môžete prijať s dôvodom, rovnako ako ktorýkoľvek problém. Zostane prijaté, kým hodnoty prvku zostanú rovnaké.

- Vzory v IDS sa čítajú ako celá hodnota. Znak `^` na začiatku a `$` na konci sa tiež berú ako „celá hodnota“, ako väčšina súborov IDS myslí.

## Ďalej

- [Kontrola modelu na bežné problémy](topic:model-checks)
- [Zmena steny alebo dverí](topic:change-a-wall-or-door)
