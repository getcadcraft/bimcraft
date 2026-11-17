---
title: Pripojte potrubia a VZT potrubia k zariadeniam
summary: Začnite alebo ukončite potrubie alebo VZT potrubie na prípojke, aby prevzalo jej dimenziu a systém a zostalo k nej pevne pripojené, potom skontrolujte pripojenia — voľné prípojky, nesúlad dimenzií a systémov a úseky bez zdroja.
keywords: mep, pripojiť, pripojenie, pripojenia, prípojka, prípojky, voľná prípojka, nesúlad dimenzie, nesúlad systému, zdroj, kontrola pripojení, pevné, nasledovať, presunúť zariadenie, ifcrelconnectsports, koordinácia
from: 29144fb0
---

## Čo budete robiť

Spojte úseky so zariadeniami, aby bol model jedným prepojeným systémom: výstup čerpadla s potrubím, ktoré z neho vychádza, hrdlo difúzora s odbočným VZT potrubím. Potom nechajte BimCraft vypísať, čo nie je spojené.

## Kreslenie z prípojky

1. Vyberte {{ui:Potrubie}} alebo {{ui:VZT potrubie}}.
2. Presuňte kurzor na prípojku zariadenia (malé krúžky; voľná prípojka je nakreslená výstražnou farbou). Kurzor sa na ňu prichytí a zobrazí **na prípojke**.
3. Kliknite: úsek začína vo výške prípojky a **prevezme jej dimenziu a systém** (potrubie tiež prevezme obvyklý materiál systému). Stavový riadok uvedie, čo prevzal.
4. Kreslite ďalej ako obvykle. Ukončenie úseku na inej prípojke pripojí aj tento koniec.

Koniec úseku na prípojke je **pevne pripojený** k nej: presuniete alebo otočíte zariadenie (vo Vlastnostiach) a koniec úseku ide s ním; upravíte úsek a tento koniec zostane na prípojke. Ostatné rohy úseku zostanú na mieste, takže po veľkom presune môže prvý úsek odísť z prípojky pod uhlom: presuňte aj ďalší roh.

## Kontrola pripojení

Otvorte {{ui:Zostava}} a kliknite na {{ui:Skontrolovať pripojenia}}. Zoznam pod lištou zobrazuje:

| Riadok | Čo to znamená |
|---|---|
| Prípojka nie je pripojená | Zariadenie má pripojenie, k ktorému nie je nakreslený nič |
| Na konci nič nie je | Úsek končí vo vzduchu |
| Spojené prípojky rôznych dimenzií | Úsek jednej dimenzie sa stretne s prípojkou alebo úsekom inej dimenzie bez redukcie (menovitá dimenzia potrubia, tvar a strany VZT potrubia) |
| Spojené prípojky rôznych systémov | Napríklad spiatočné VZT potrubie na prívodnom difúzore |
| Potrubie spojené s VZT potrubím | Dva pripojenia rôznych druhov sa stretnú |
| Žiadne zariadenie v jeho sieti ho nezásobuje | Nič, k čomu je úsek pripojený, ani zďaleka, nemá výstup. Odtoky, dažďová a odvetrávacia kanalizácia sa tým nekontrolujú: ich voda prichádza z armatúr |
| Pevne pripojené k prípojke zariadenia, ktoré už nie je v modeli | Zariadenie bolo zmazané; nakreslite koniec znova alebo zmažte úsek |

Chyby sú prvé. Kliknutím na riadok vyberiete to, čo pomenúva. {{ui:Zavrieť}} skryje zoznam. Kontrola číta model tak, ako je nakreslený: kontroluje pripojenia a dimenzie, nikdy prietoky, tlaky alebo vyváženie.
