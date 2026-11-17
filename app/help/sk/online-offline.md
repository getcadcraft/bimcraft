---
title: Online a offline
summary: Čo BimCraft načítava zo stránky, ako Uložiť na offline použitie sprístupní modely IFC a výkresy DWG bez pripojenia a prečo sa nič, čo otvoríte, nikdy neodosiela.
keywords: offline, online, internet, pripojenie, bez siete, režim v lietadle, návšteva na mieste, uložiť na offline použitie, pripravené offline, odoslanie, súkromie, wasm, webassembly, IFC engine, DWG, cloud
from: 39e5c7eb
---

BimCraft číta vaše súbory v karte prehliadača. Otváranie, kontrola, úprava a ukladanie nikdy nič neposielajú nikam, ani online, ani offline. [Práca offline](common:offline) vysvetľuje, ako fungujú offline kópie vo všetkých aplikáciách; táto stránka opisuje, čo je špecifické pre BimCraft.

## Čo BimCraft načítava zo stránky

| Časť | Kedy sa načíta bez offline kópie | Veľkosť |
|---|---|---|
| Samotná aplikácia s 3D prehliadačom a kódom IFC enginu | Keď otvoríte BimCraft | Niekoľko megabajtov |
| Časť WebAssembly IFC enginu | Prvý súbor IFC, ktorý otvoríte v karte: "Spúšťa sa IFC engine…" | Asi 1.6 MB |

Výkresy DWG a DXF, projektové a rodinné súbory a priečinky nepotrebujú nič navyše: ich čítačky sú súčasťou aplikácie.

## Uloženie BimCraft na offline použitie

1. Otvorte BimCraft, keď ste online.
2. Kliknite na {{ui:Uložiť na offline použitie}} na hlavnom paneli aplikácie hore.
3. Sledujte, ako tlačidlo počíta: napríklad "Ukladá sa 40 z 212". Kópia BimCraft má asi 11 MB, lebo obsahuje IFC engine.
4. Počkajte na {{ui:Pripravené offline}}.

Keď sa zobrazí {{ui:Pripravené offline}}, modely IFC, výkresy DWG a DXF, projektové súbory, priečinky aj táto pomoc sa otvoria bez pripojenia. Nemusíte najprv otvárať IFC ani DWG, aby sa čítačky "zahriali".

Ak chcete kópiu aktualizovať alebo odstrániť, kliknite na {{ui:Pripravené offline}} a vyberte {{ui:Uložiť znova (získať najnovšiu verziu)}} alebo {{ui:Odstrániť offline kópiu}}.

## Čo hovorí tlačidlo

| Tlačidlo | Znamená |
|---|---|
| {{ui:Uložiť na offline použitie}} | Offline kópia v tomto prehliadači ešte nie je. Kliknutím ju uložíte |
| "Ukladá sa *n* z *m*" | Ukladá sa; nechajte kartu otvorenú, kým sa to neskončí |
| {{ui:Pripravené offline}} | Uložené. Presunutím kurzora zistite kedy; kliknutím otvoríte ponuku |
| {{ui:Nepodarilo sa uložiť}} | Niektoré súbory sa nestiahli. Skontrolujte pripojenie a kliknutím to skúste znova. Posledná dobrá kópia, ak nejaká je, sa zachová |
| {{ui:Offline nie je k dispozícii}} | Toto okno nemôže uchovávať offline kópiu (súkromné okno alebo spravovaný počítač). Pozri [Práca offline](common:offline) |

:::offline
Ste offline.

- Ak tlačidlo hovorí {{ui:Pripravené offline}}, každý druh súboru sa otvorí ako obvykle.
- Ak nie, funguje iba to, čo táto karta už načítala: čítačka, ktorá sa v tejto karte nikdy nenačítala, sa nespustí a otvorenie takého súboru zobrazí chybu od prehliadača v stavovom riadku. Kartu znova nenačítavajte, kým nebudete znova online.
:::

## Čo nikdy nepotrebuje pripojenie

Keď je BimCraft otvorený v karte, tieto veci fungujú offline aj bez uloženej kópie:

- Čítanie projektových a rodinných súborov a kontrola priečinkov.
- Výber prvkov, čítanie vlastností a úprava hodnôt IFC v už otvorenom modeli.
- {{ui:Uložiť ako IFC}} a {{ui:Stiahnuť CSV}}: obe sú sťahovania vykonané v karte.

## Čo zatiaľ nie je k dispozícii

- **Ukladanie do cloudu.** Súbory sa ukladajú iba do vášho počítača.

Pozri [Kam idú vaše súbory](common:your-files).
