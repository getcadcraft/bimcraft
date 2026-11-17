---
title: Paneeltekeningen in hout of lichtgewicht staal
summary: Kader de wanden, vloeren en daken van het model in als panelen in hout of lichtgewicht staal, zie elke stijl, regel, latei, vloerbalk en spar op schaal, en sla de snijlijst op als CSV en de werkplaatstekeningen als PDF.
keywords: paneel, constructie, werkplaatstekening, snijlijst, lichtgewicht staal, staalstijl, LGS, hout, vloerbalk, spar, latei, voorraad, PDF
from: c09f916e
---

## De panelen openen

Kies {{ui:Paneeltekeningen}} in het menu {{ui:Build}} (of typ {{cmd:PANELS}}). De lijst bevat elke getekende wand, elke vloer en elk dak van het model, elk met een vinkje. Wanden komen met hun deuren en ramen als openingen. Een vloer wordt ingekaderd als de rechthoek rond de omtrek, met de vloerbalken in de korte richting. Een dak wordt ingekaderd als een zadeldak over de omtrek van de wanden, met de helling van het dak; de lijst zegt dat erbij, omdat een walmdak of een complex dak geen zadeldak is.

## Materiaal, maat en afstand

Kies {{ui:Materiaal}}: **Hout** of **Lichtgewicht staal**. Stalen onderdelen zijn C-stijlen die worden genoemd naar hun diepte en dikte (bijvoorbeeld C92-1.2), met een railprofiel voor de regels. {{ui:Profielmaat}} kiest één maat voor elk aangevinkt paneel, of laat het op Standaard staan om de standaardwaarden van elk soort paneel te gebruiken. {{ui:Afstand}} is de afstand tussen stijlen, vloerbalken of sparren. Dit zijn startwaarden die u zelf instelt. Het zijn geen constructieve controles: of een stijl op die afstand een wand draagt, en een latei op die overspanning, hoort bij de rekentabellen (de add-on Bouwvoorschriften heeft die van de IRC) en bij uw constructeur.

## Wat u krijgt

Het eerste aangevinkte paneel wordt op schaal in het dialoogvenster getekend, met de afmetingen. {{ui:Snijlijst (CSV)}} slaat de onderdelen van elk paneel op, per merk, maat en lengte, en de voorraadlengten die u ervoor moet kopen. {{ui:Werkplaatstekeningen (PDF)}} slaat één A3-pagina per paneel op, met elk onderdeel gemerkt en de snijlijst erbij. {{ui:Tekening (SVG)}} slaat het eerste paneel op als tekening. Wat de constructiecode niet kan kaderen (een opening te dicht bij het uiteinde van een wand, een latei die niet onder de regels past, een stuk langer dan de langste voorraad) wordt zowel in het dialoogvenster als in **Problemen** vermeld.

## Wat het niet doet

De panelen zijn tekeningen die op verzoek uit het model worden gemaakt: er wordt niets in het model geschreven, dus ze passen altijd erbij. Om de constructie als onderdelen in het model te zetten, gebruikt u {{ui:Constructie}} voor houten wanden, vloeren en daken.
