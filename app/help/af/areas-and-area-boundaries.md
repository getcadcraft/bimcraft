---
title: Oppervlaktes en oppervlaktegrense
summary: Meet bruto gebougebied of verhuurbare oppervlakte binne grenslyne wat jy teken of uit die mure neem, en lys die oppervlaktes in 'n skedule.
keywords: oppervlakte, oppervlaktes, oppervlaktegrens, oppervlakteskema, bruto gebougebied, bruto vloeroppervlakte, GFA, verhuurbaar, oppervlakteplan, skedule van oppervlaktes, mure kies, nie omhein nie
from: c79f96d2
---

## Wat jy gaan doen

Teken die grense van 'n oppervlakteskema, plaas oppervlaktes binne hulle, en lees die totale.

## Waar die gereedskap is

- Lintuitlegte: {{ui:Argitektuur}} › **Vertrek & oppervlakte** › {{ui:Oppervlakte}} en {{ui:Oppervlaktegrens}}.
- Klassieke uitleg: die Teken-balk › {{ui:Vertrekke}}-kieslys.

## Stappe

1. Kies {{ui:Oppervlaktegrens}}. In die ry kies die {{ui:Skema}}: Bruto gebou of Verhuurbaar. Elke skema het sy eie grense.
2. Kies hoe om die lyne te maak in {{ui:Maak volgens}}:
   - **Teken**: klik punt na punt.
   - **Kies mure: middellyn**: klik 'n muur, en sy middellyn is 'n grens.
   - **Kies mure: die kant wat geklik is**: klik 'n muur aan die kant wat jy wil hê; daardie kant is die grens. Vir bruto gebougebied klik die buitekant van die buitenste mure.
3. Kies {{ui:Oppervlakte}}. Kies dieselfde skema, tik 'n naam, nommer of tipe as jy wil, en klik binne die grense.
4. Die oppervlakte word dadelik gemeet. Kies dit om sy naam, nommer of tipe in Eienskappe te verander.

## Wat volg wat

- 'n Grens wat gemaak is deur 'n muur te kies, volg daardie muur: beweeg die muur en die oppervlakte word in dieselfde stap weer gemeet.
- 'n Grens wat jy geteken het, bly waar jy dit geteken het.
- Kante van mure wat by 'n hoek ontmoet, ontmoet daar ook, so vier gekose mure sluit 'n oppervlakte sonder gapings.
- Oppervlaktegrense wys op die plan terwyl 'n vertrek- of oppervlakte-gereedskap in jou hand is, so hulle verstik nie die plan die res van die tyd nie.

## As die grense nie sluit nie

Die oppervlakte word steeds geplaas. Dit sê **Nie omhein nie** en meet niks totdat die grense om dit sluit. Dit is advies: niks word geweier nie.

## Die skedule

Linkerpaneel › {{ui:Skedules}} › **Oppervlaktes**: skema, nommer, naam, tipe, vlak, oppervlakte en omtrek, met 'n totaal. 'n Klik op 'n ry kies die oppervlakte. {{ui:Laai CSV af}} gee dieselfde tabel.

## In die IFC

'n Oppervlakte is 'n IfcSpace sonder liggaam: PredefinedType GFA vir die bruto gebou-skema, USERDEFINED met ObjectType Rentable vir verhuurbaar. Dit dra GrossFloorArea en GrossPerimeter, en geen netto oppervlakte nie, sodat dit nie vir 'n vertrek aangesien word nie. 'n Grens is 'n IfcVirtualElement.

## Nog nie gebou nie

- Eie skemas (net Bruto gebou en Verhuurbaar).
- Kleurvulling volgens oppervlaktetipe.
- Reëls wat die grens vir jou plaas, soos "tot by die glaslyn".

Sien ook [Vertrekke en vertrekskeiers](topic:rooms-and-separators), [Vertrek- en oppervlakte-etikette](topic:room-and-area-tags).
