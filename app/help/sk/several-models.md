---
title: Zobrazenie viacerých modelov IFC spolu
summary: Pridajte do scény ďalšie súbory IFC, napríklad architektúru, konštrukcie a inštalácie, zobrazte ich v rovnakých súradniciach, presuňte jeden, skryte jeden a vyberte, ktorý upravujete.
keywords: federovanie, federovaný model, viac modelov, viac súborov, kombinovať, prekrytie, koordinácia, branža, konštrukcia, mep, inštalácie, odsadenie, presunúť model, aktívny model, pridať model
from: df0efbbf
---

## Čo urobíte

Pozrite si modely z rôznych branží na jednom mieste: model architekta so statickými a technickými modelmi. Každý zostáva samostatným súborom; BimCraft ich len zobrazuje spolu.

## Postup

1. Otvorte prvý model IFC obvyklým spôsobom.
2. V {{ui:Modely}} vľavo kliknite na {{ui:Pridať model…}} a vyberte jeden alebo viac súborov IFC. Každý sa objaví v zozname a v 3D pohľade.
3. Zrušte začiarknutie modelu, aby sa skryl; začiarknite ho, aby sa znova zobrazil.
4. Ak model prichádza na nesprávnom mieste (iný geodetický bod), kliknite pod ním na {{ui:Presunúť}}, zadajte, o koľko ho posunúť pozdĺž X, Y a Z v metroch, a kliknite na {{ui:Použiť}}.
5. Model s bodkou je ten, ktorý upravujete. Kliknutím na bodku iného modelu upravíte ten.
6. Kliknutím na × vedľa modelu ho vyberiete zo scény.

## Otvorenie modelov tímu

Keď je otvorený model cloudový súbor v tímovom projekte, pod zoznamom sa objaví {{ui:Otvoriť modely tímu}}. Otvorí ďalšie modely IFC projektu vedľa tohto, každý posunutý o odsadenie, ktoré nastavil projekt. Modely, ktoré sú pred vami skryté, sa nenačítajú a sú spočítané; model, ktorý projekt otočil, sa otvorí neotočený a tiež sa spočíta; súbory, ktoré nie sú IFC (napríklad DWG), sa preskočia a menujú sa v stavovom riadku. Model, ktorý je už otvorený, sa nikdy neotvorí dvakrát. Tlačidlo je skryté pri súbore, ktorý nie je v tímovom projekte.

## Čo by ste mali vidieť

- Každý model v súradniciach prvého modelu, tak ako ich umiestňuje jeho súbor. Modely exportované z toho istého projektu sa zarovnajú bez presúvania.
- Keď vyberiete prvok modelu, ktorý neupravujete, jeho vlastnosti sa zobrazia len na čítanie, s {{ui:Upraviť tento model}} na prepnutie.
- {{ui:Strom modelu}}, {{ui:Podlažia}}, {{ui:Farba}}, zoznam {{ui:Zmeny}}, umiestňovanie položiek knižnice a {{ui:Uložiť ako IFC}} fungujú všetky na modeli, ktorý upravujete. Skrytie, izolácia, priehľad a {{ui:Vybrať všetko}} fungujú cez každý model.
- {{ui:Uložiť ako IFC}} stiahne model, ktorý upravujete, iba so svojimi zmenami.

## Časté chyby

- **Model je ďaleko alebo chýba.** Jeho súbor používa iné súradnice. Použite {{ui:Prispôsobiť}}, aby ste ho našli, a potom ho {{ui:Presunúť}} na miesto.
- **Zmazať alebo Kopírovať je na vybranom prvku sivé.** Patrí do iného modelu: najprv naň prepnite.
- **Otvorenie súboru cez Vybrať súbor nahradilo všetko.** Tým sa začne nová scéna. Na pridanie súborov k tomu, čo máte, použite {{ui:Pridať model…}}.

## Ďalej

- [Skrytie, izolácia a priehľad prvkov](topic:hide-and-isolate)
- [Farbenie prvkov podľa vlastnosti](topic:color-by-property)
