---
title: Ontwikkelingsvlak (LOD) en mylpaalkontroles
summary: Gee elemente 'n ontwikkelingsvlak, sien waar dit vandaan kom, kontroleer die model teen die LOD wat 'n mylpaal vra, en herstel ontbrekende etikette en naamlose vertrekke. Elke kontrole adviseer; niks word geblokkeer nie.
keywords: lod, ontwikkelingsvlak, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mylpaal, mylpaaltabel, modelkontroles, ontbrekende etikette, naamlose vertrekke, generiese vroeg, ifc-klas, klassifikasie
from: 2091c79b
---

## Wat jy sal doen

Sê hoe ver ontwikkel elke element is, en kontroleer dan die hele model teen wat 'n projekmylpaal vra.

## Stappe

1. Kies 'n element (of verskeie) en maak {{ui:Eienskappe}} oop. Vind {{ui:Ontwikkelingsvlak}}.
2. Kies 'n vlak uit die lys. Elke vlak word benoem volgens wat dit beteken, en elkeen sluit die vlakke onder dit in. Een ontdoen-stap dek die hele keuse.
3. Lees waar die vlak vandaan kom: hierdie element, sy tipe, of 'n veldgeverifieerde merk.
4. Om die model te kontroleer, maak {{ui:Modelkontroles}} aan die linkerkant oop, en dan {{ui:LOD-mylpale}}. Kies die mylpaal en die tabel (die beginstel-tabel, of jou eie CSV- of JSON-lêer met {{ui:Belasting}}).
5. Klik {{ui:Kontroleer die model}}. Die totale en 'n reël vir elke tabelry wys wat sy vlak bereik het en wat nie; die bevindinge verskyn ook in die Probleemlys.
6. Onder {{ui:Ontbrekende etikette en naamlose vertrekke}}, klik {{ui:Vind hulle}}, wysig die voorstelle indien jy wil, en klik {{ui:Pas toe}}.

## Wat jy behoort te sien

- Die vlak wat jy op die element gekies het, met sy IFC-klas en klassifikasiekodes langs.
- Totale en rye vir die mylpaal. 'n Tabel verander nooit wat 'n vlak beteken nie: die skaal is vas, 'n tabel sê net watter vlak 'n mylpaal nodig het.
- "Generiese vroeg bly": advies om elemente generies te hou by 'n vroeë mylpaal. Dit is net advies.

## Goed om te weet

- Niks hier blokkeer jou nie. 'n Model onder die vlak wat 'n mylpaal vra, word gelys, nie geweier nie.
- Die drie dele van 'n vlak (geometrie, inligting, dokumentasie) kan elk gestel word; 'n merk wys voldoen, onder of nie gestel nie.
