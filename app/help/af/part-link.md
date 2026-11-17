---
title: Stuur 'n element na PartCraft en neem dit terug
summary: Kies 'n steun, beugel, leuning of stuk toerusting, ontwerp dit as 'n onderdeel in PartCraft met die gebou rondom, en aanvaar die nuwe vorm terug in die model.
keywords: partcraft, onderdeel, stuur, skakel, element, steun, beugel, heining, leuning, toerusting, ontwerp, ronde reis, aanvaar, verander, onderdeelskakels
from: 4ce2f449
---

## Wat jy gaan doen

Ontwerp een element van die gebou as 'n onderdeel: stuur dit na PartCraft, verander dit daar (sny, voeg by, boor, verander grootte), en bring die nuwe vorm terug in die model.

## Stappe

1. Kies een element in die model: 'n generiese element, toerusting, 'n kolom, 'n balk, 'n leuning of meubels.
2. Kies {{ui:Part links}} op die werkbalk en dan {{ui:Send to PartCraft}}. PartCraft maak oop in 'n nuwe oortjie met die element as 'n onderdeel. Die elemente binne 3 m word grys langs dit geteken sodat jy dit op sy plek kan ontwerp. Hulle kan daar nie verander word nie.
3. Verander die onderdeel in PartCraft. In PartCraft kies {{ui:File}} › {{ui:Export}} › {{ui:Save back to BimCraft}}. Jy kan so dikwels terugstoor as wat jy wil.
4. Terug in BimCraft wys die {{ui:Part links}}-knoppie 'n telling, en die kaart lys die element as {{ui:Changed in PartCraft}} met die grootte- en volumeverandering in woorde.
5. Kies {{ui:Show}} om dit te bekyk, dan {{ui:Accept}} om die element die nuwe vorm te gee, of {{ui:Keep mine}} om dit soos dit was te laat.

## Wat jy behoort te sien

- Aanvaar is een ontdoen-stap. Die element hou sy plek, GlobalId, tipe, materiaal en eienskappe. Slegs die liggaam daarvan word vervang.
- Die element kry 'n eienskapstel {{ui:CadCraft_PartLink}} met die skakel, sy status en die hersiening.
- {{ui:Send again}} maak dieselfde element weer in PartCraft oop, op dieselfde skakel.

## Goed om te weet

- Mure, vloere, dakke, deure, vensters, trappe, hellings en ruimtes word deur die bougereedskap uit 'n omtrek geteken en na elke verandering weer opgebou. 'n Liggaam uit 'n ander program sou daaroor geskryf word, so hulle word met 'n rede geweier.
- Die vorm kom terug as 'n maasnetwerk (IFC-tessellasie), nie as die onderdeel se kenmerke nie. Die onderdeel se geskiedenis bly in PartCraft.
- As die element in die model verander het nadat jy dit gestuur het, sê die kaart dit voordat jy aanvaar: aanvaar vervang daardie veranderinge.
- Niks word opgelaai nie. Die twee programme is bladsye van een webwerf en gee die element tussen mekaar oor in hierdie blaaier. Albei moet in dieselfde blaaier oop wees.
- Die element moet in PartCraft in 'n soliede liggaam sluit. 'n Element waarvan die vorm groot oop gapings het, word daar geweier, met die aantal oop rande.
- Om te aanvaar, maak die model wat die element bevat die aktiewe model.
