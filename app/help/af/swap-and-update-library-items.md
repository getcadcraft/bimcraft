---
title: Ruil 'n geplaasde item en werk biblioteekitems op
summary: Vervang een geplaasde biblioteekitem met 'n ander terwyl sy plek en itemnommer behou word, en kyk in die biblioteek vir nuwer weergawes van alles in die model.
keywords: ruil, vervang, plaasvervanger, opdateer, nuwer weergawe, soek opdaterings, biblioteek, teruggetrek, lisensieverandering, itemnommer
from: 8bdfe01d
---

## Wat jy sal doen

Verander van plan oor 'n item sonder om dit weer te skuif, en hou die biblioteekitems in 'n model op datum.

## Ruil een item

1. Klik op 'n geplaasde biblioteekitem in die model.
2. In {{ui:Eienskappe}}, klik {{ui:Ruil item…}} in die **Biblioteekitem**-kassie. Die {{ui:Biblioteek}}-oortjie open.
3. Vind die nuwe item en klik op sy kaartjie.
4. Klik {{ui:Ruil … na hierdie}}.

Die element behou sy plek, draai, verdieping, itemnommer, hoeveelheid en notas. Sy tipe, vorm en itemdata verander na die nuwe item. Items wat op dieselfde manier geplaas word, deel een tipe, soos wanneer jy hulle plaas.

'n Item met variante (sien [Plaas en ruil 'n biblioteekitem wat variante het](topic:library-variants)) lys sy ander variante bo-aan die {{ui:Biblioteek}}-oortjie wanneer jy dit ruil: een klik elk.

Wanneer die nuwe item 'n ander soort ding is, byvoorbeeld 'n opwasbak in die plek van 'n tafel, verander die element se IFC-klas om daarby te pas (hier van meubelelement na sanitêre terminaal), sodat ander sagteware dit korrek skeduleer. Dit bly dieselfde element, met dieselfde GlobalId, sodat skakels daarna steeds werk. {{key:Mod+Z}} bring die ou klas terug saam met die ou item.

## Kyk vir opdaterings

1. Klik {{ui:Opdaterings}} in die werkbalk (of {{ui:Soek opdaterings}} in 'n biblioteekitem se kassie).
2. Lees die lys: elke biblioteekitem in die model met sy weergawe in die model, die jongste weergawe en 'n status: **Op datum**, **Nuwer weergawe**, **Teruggetrek** of **Nie gevind nie**. Dit sê ook wat verander het (meetkunde, data, lisensie of 'n regstelling).
3. Klik {{ui:Opdateer}} op 'n ry, of {{ui:Opdateer alles}}.

## Wat jy behoort te sien

- "Opgedateer *n* plasings. Plekke, itemnommers, hoeveelhede en notas word behou."
- "Opgedateer: *item*"-reëls in die veranderingslys. {{key:Mod+Z}} ontdoen elkeen.

## Goed om te weet

- Slegs items wat uit die Biblioteek kom, kan nagegaan word. Items uit lêers dra geen biblioteek-id nie.
- Wanneer 'n lisensie verander het, behou die kopie wat jy reeds geplaas het die lisensie waarmee dit gekom het, totdat jy dit opdateer.
- 'n **Teruggetrekte** item word nie vir nuwe plasings aangebied nie. Een wat om kopieregredes teruggetrek is, kan glad nie afgelaai word nie; vervang dit met {{ui:Ruil item…}}.
- 'n Geplaasde variant bly daardie variant wanneer die nuwer weergawe van die item dit nog het; anders neem dit die item se verstekvariant.
- Nagaan stuur slegs die item-id's en weergawes, nooit jou model nie.
