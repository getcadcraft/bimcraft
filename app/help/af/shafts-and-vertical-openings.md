---
title: Skagte en openings deur vloere
summary: 'n Skag is een omtrek wat elke vloer, plafon en dak tussen twee vlakke sny. 'n Vertikale opening sny een daarvan. Muuropening sny 'n muur.
keywords: skag, hyskag, liftskag, trapopening, trapstyg, vertikale opening, vloeropening, plafonopening, dakopening, dakvensteropening, gat in vloer, muuropening, IfcOpeningElement, aftrekking, netto oppervlakte
from: 8e9e1641
---

## Wat jy gaan doen

Sny 'n hyskag deur 'n gebou met een skets, sny 'n gat in een vloer, en lees wat uit die oppervlaktes geneem is.

## Waar die gereedskap is

- Lintuitlegte: {{ui:Argitektuur}} › **Opening** › {{ui:Skag}}, {{ui:Vertikale opening}} en {{ui:Muuropening}}.
- Klassieke uitleg: die Teken-balk › {{ui:Vertrekke}}-menu (Skag, Vertikale opening) en › {{ui:Mure}}-menu (Muuropening).

## 'n Skag

1. Maak die vloerplan oop van die vlak waar die skag begin. Kies {{ui:Skag}}.
2. In die ry kies die {{ui:Basisvlak}} en die {{ui:Boonste vlak}}, en verskuiwings as dit bo of onder hulle begin of eindig.
3. Klik die hoeke van die omtrek. Klik die eerste hoek weer, dubbelklik of druk Enter om klaar te maak.
4. Elke vloer, plafon en dak tussen die twee hoogtes word gesny. Die statuslyn sê hoeveel.

'n Skag is een ding. Kies sy omtrek op enige vlak wat dit deurgaan: Eienskappe het sy naam, vlakke en verskuiwings, wat dit sny en die oppervlakte wat uitgeneem word. Verander dit en elke opening volg. Skrap dit en elke opening verdwyn. Elkeen is een ontdoen-stap.

Dit hou aan sny: 'n vloer wat later tussen sy vlakke gemaak word, word sonder vra gesny, en 'n vloer wat jy skrap, word losgelaat.

Die vloer waarop die skag staan, word nie gesny nie (sy bo is die basis). Gee die basis 'n negatiewe verskuiwing om dit ook te sny. Gee die boonste 'n positiewe verskuiwing om deur die dak te gaan.

## 'n Vertikale opening

1. Kies {{ui:Vertikale opening}}. In die ry kies wat gesny moet word: die vloer, die plafon of die dak.
2. Klik die hoeke van die omtrek en maak klaar soos hierbo.
3. Die vloer, plafon of dak van hierdie vlak onder die omtrek word gesny. Dit behoort aan daardie een element: skrap die vloer en die opening gaan saam.

## 'n Muuropening

{{ui:Muuropening}} is die gereedskap van [Vorm 'n muur](topic:wall-shape): klik 'n muur op die plan, of twee hoeke op sy vlak in 3D.

## Hoeveelhede

Volgens die meetreël vir vloere is 'n element se netto oppervlakte sy bruto oppervlakte minus wat daaruit gesny is. 'n Skag of 'n vertikale opening is 'n aftrekking op elke vloer en plafon wat dit sny; die Vloere- en afwerkingskedules en die IFC-hoeveelhede wys dieselfde getalle. Op 'n dak is die aftrekking die oppervlakte van die dakvlak: die planoppervlakte gedeel deur die cosinus van die helling.

'n Omtrek wat oor die rand hang, trek net die deel af wat op die element lê.

## As niks gesny word nie

'n Skag met niks in sy pad nie word tog gemaak, en dit sê so: dit sal sny wat later daar gebou word. 'n Vertikale opening het iets onder hom nodig; met niks daar nie, sê die statuslyn dit en word niks gemaak nie.

## In die IFC

Elke snit is 'n IfcOpeningElement met IfcRelVoidsElement na die element wat dit sny, sodat enige IFC-program die gat wys. 'n Dak word vlak vir vlak gesny. Die skag self is 'n IfcGroup van sy openings.

## Nog nie gebou nie

- Geboë omtrekke.
- 'n Skag se mure: teken dit met die Muur-gereedskap.
- Die omtrek wysig deur sy hoeke te sleep (verander dit in Eienskappe, of skrap en skets weer).
- 'n Geteekende vloer se eie Eienskappe wys net sy oppervlakte minus sy eie openings; die skedules en IFC-hoeveelhede sluit die skag in.

Sien ook [Vertrekke en vertrekskeiers](topic:rooms-and-separators).
