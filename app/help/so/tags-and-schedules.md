---
title: Calaamadi walxaha oo jadwal ku samee calaamadda
summary: Qeex calaamadahaaga (magac, nooc, qiimayaasha la oggol yahay, fasalada), calaamadi walxo badan mar keliya, oo samee jadwallo tiirarkoodu, shaandhaysiyadoodu iyo kooxahoodu akhriyaan calaamadaha. Calaamadaha waxay ku kaydsan yihiin IFC.
keywords: tags, tag, tagging, custom properties, parameters, shared parameters, property set, pset, schedule, filter, group by, finish, fire rating, bulk edit, csv, calaamad, calaamadaha, sifooyin, jadwal, shaandheyn, kooxee, dhamaystir, heer dab, csv
from: 9cc7c90d
---

## Waxa aad samayn doontaa

Calaamad waa sifo aad leedahay, sida *Finish* ama *Fire rating*. Mar keliya ayaad qeexaysaa mashruuca, waxaana lagu dejiyaa walxo badan oo isku mar ah, BimCraft jadwal walba ayuu akhrin karaa: jadwalka calaamadaha halkan, {{ui:Quantities}}, Find, Color by property iyo [Documents from the model](topic:documents-from-the-model).

## Tillaabooyinka

1. Fur moodel IFC, ama bilow dhismo cusub.
2. Dhinaca bidix, hoosta {{ui:Quantities}}, fur {{ui:Tags}}.
3. Riix {{ui:Add a tag}}. Siiso magac, dooro nooca, haddii aad rabto liiska qiimayaasha la oggol yahay (kala soo reeb commas) iyo fasalada ay u tahay (`IfcDoor`, `IfcWall` …). Riix {{ui:Add the tag}}.
4. Dooro walxaha moodelka (Find way kaa caawinaysaa: dooro albaabada oo dhan mar keliya).
5. Hoosta {{ui:Tag the selection}}, dooro ama ku qor qiime calaamad kasta oo aad rabto inaad dejiso, kuwa kale ka tag ahaan siday yihiin, kadibna riix {{ui:Apply to … selected elements}}.
6. Hoosta {{ui:Tag schedule}}, calaamee tiirarka, ku dar shaandheyn, dooro {{ui:Group by}}, kadibna riix {{ui:Download CSV}}.

## Waxa aad arki lahayd

- Tallaabo ku jirta liiska isbeddelka oo loogu talagalay qeexid kasta oo la kaydiyay iyo calaamad kasta oo la dhigay; {{ui:Undo}} ayaa soo celinaya.
- Walxaha fasal aan calaamaddu u ahayn waa laga reebay calaamadda, sadarka xaaladdu waxay sheegaysaa tirada.
- Jadwalka calaamadaha wuxuu liiskarayaa hal safka walax kasta, oo lagu kooxeeyay goobta aad dooratay; riix unugga ugu horreeya safka si aad walxaas u doorato.
- {{ui:Quantities}} wuxuu liiskarayaa calaamadaha hoosta `CadCraft_Tags`, sidaas darteed halkaas waxaad ku wada tiri kartaa balaadhka ama tirooyinka calaamad kasta.

## Noocyada

Noocyadu waa isku liiska sida parameters-ka qoyska: Length (millimeters), Angle (degrees), Number, Whole number, Yes / No, Pen (1–16), Text, Material iyo Fill. Qiime aan ku habboonayn nooceeda, ama aan ahayn mid ka mid ah qiimayaasha la oggol yahay, waa la diidaa oo fariin ayaa la siiyaa, wax kalena ma beddelmaan.

## Waxa wanaagsan in la yaqaan

- Wax kasta waa IFC caadi ah, sidaas darteed barnaamijyada kale qiimayaasha way akhrin karaan: qeexidda waxay ku jirtaa property set `CadCraft_TagDefs` mashruuca, qiimayaasha waxay ku jiraan property set `CadCraft_Tags` walx kasta (hal sifo oo calaamad kasta). Dhererka waxaa lagu qoraa unugga dhererka faylka.
- `IfcWall` ee fasalada calaamadda waxay sidoo kale ku daraysaa darbiyada standard-case iyo kuwa elemented.
- Magac-bedelka calaamad wuxuu magacaa qiimayaasheeda walx kasta isla tallaabo kaas. Calaamad tirtirida waxay tirtirtaa oo keliya qeexiddeeda: qiimayaasha hore loo dejiyay waxay ku sii jiraan walxaha sifooyin caadi ah. Marka hore nadiifi (dooro {{ui:Clear}}) si aad uga saarto.
- Calaamadaha habka CadCraft drafting app (block attributes) weli lama dhisin.
