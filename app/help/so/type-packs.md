---
title: Xirmooyinka nooca: wadaag noocyada darbiga iyo fayl furan
summary: Kaydi noocyada darbiga oo leh lakabyadooda, alaabta, calaamadaha iyo koodhadhka kala-soocidda, iyo qoysaska, sida hal fayl furan (JSON caadi ah ama IFC), oo ku dar mashruuc kale. Noocyada darbiga ee faylka IFC ee barnaamij kale ayaa sidoo kale la akhrin karaa.
keywords: xirmada nooca, noocyada, darbi nooc, wadaag, dhoofin, soo gelin, maktabad, furan, json, ifc, IfcWallType, IfcMaterialLayerSet, IfcProjectLibrary, alaabta, lakabyada, template, heer xafiis, qoysaska
from: e4c91331
---

## Waxa aad samayn doontid

Noocyadii darbigaaga ka qaado mashruuc kale, ama siiyo qof ka shaqeeya barnaamij kale. Xirmada nooca waxay haysaa darbi kasta oo nooc ah oo leh lakabyadiisa, dhumucdooda, alaabta, core-ka, godadka, mudnaanta lakabka, heerka horumarka, xogta xisaabinta iyo koodhadhka kala-soocidda, iyo qoysaska aad ku darto. Waa fayl furan: qoraal JSON caadi ah oo qof walba akhriyi karo, ama fayl IFC. Waxba kuma xirna shirkad, dal ama akoon.

## Noocyada ka keen mashruuc

1. Fur **Data** bar-ka moodelka oo dooro {{ui:Type packs}}.
2. Hoosta {{ui:Save types from this project}}, calaamadi noocyada darbiga ee aad rabto inaad ku darto. Noocyada mashruucu leeyahay waa la calaamadiyay; nooc bilow ah ayaa lagu dari karaa, wuxuuna u galaa nuqul ahaan. Calaamadi qoysaska haddii aad rabto inay ku jiraan.
3. Ku qor {{ui:Pack name}}.
4. {{ui:Save as a pack (.json)}} wuxuu soo dejiyaa fayl `.cctypes.json`. {{ui:Save as IFC (.ifc)}} wuxuu soo dejiyaa fayl IFC ah oo keliya noocyada ku jira: nooc darbi kasta sida IfcWallType oo leh kooxdeeda lakabka alaabta, alaabta iyo kala-soocidda, barnaamij BIM kasta.

## Noocyada ku dar mashruuc

1. Isla daaqadda, dooro {{ui:Open a pack or an IFC file…}} oo dooro xirmo `.json` ama fayl `.ifc`.
2. Daaqaddu waxay liistaa waxa faylku ku jiro: nooc darbi kasta oo leh dhumucdiisa, tirada lakabyada iyo koodhadhka, alaabta iyo qoysaska.
3. Dooro waxa dhacaya {{ui:A type this project already has}}: **Hay kii mashruuca**, **Ku dar kii xirmada nuqul ahaan** (waxay magac cusub ku heli doontaa oo ku dhamaanaya "(2)"), ama **Beddel (kaliya marka darbi aan isticmaalin)**.
4. {{ui:Add to the project}}. Daaqaddu waxay liistaa waxa la daray, la nuqul sameeyay, la beddelay ama la hayay. Waa hal tallaabo oo dib loo celin karo.

Noocyada cusub waxay ku jiraan liiska noocyada qalabka darbiga isla markiiba.

## Noocyada sagxadda, saqafka iyo saqafka hoose

Liiska noocyada la kaydinayo wuxuu sidoo kale haystaa noocyada sagxadda, saqafka iyo saqafka hoose ee mashruuca iyo bilowgooda (lagu calaamadiyay Floor, Roof, Ceiling). Xirmo wuxuu qaadi karaa afarta nooc oo dhan; nooc kasta wuxuu magacaabaa fasalkiisa IFC (IfcWallType, IfcSlabType, IfcCoveringType). Nooca sagxadda, saqafka ama saqafka hoose ee walxaha isticmaalaa looma beddelo xirmo; beddel tafatiraha nooca.

## Hal nooc oo ah shay Maktabad

Calaamadi hal nooc oo keliya, kadibna dooro **Kaydi sida shay Maktabad…**. Wuxuu kaydiyaa fayl `.cctype.json`: shay Maktabad oo nooca Types ah oo haysta nooca keliya (lakabyadiisa, alaabta, LOD iyo koodhadhka kala-soocidda). Soo gudbi Maktabadda si aad u wadaagto. **Fur xirmo ama fayl IFC** ayaa akhrisa shay noocan oo kale, wuxuuna nooceeda ku daraa mashruuca sida xirmo.

## Waxa wanaagsan in la ogaado

- Faylka IFC ee barnaamij kale waxa laga furi karaa halkan. Nooc darbi kasta oo ku leh lakabyo alaab ah ayaa la akhriyaa: magaca, alaabta lakabyada iyo dhumucdooda, iyo godad kasta waa kuwa faylka laftiisa. Lakabyada core-ka yihiin iyo waxa lakab kasta sameeyo (dhamaystiran, qaab, dhisme, kulaylin) waa la malaynayaa, nooca waxaa lagu calaamadiyay **(la malaynayo)**, oo waa in aad ku hubiso tafatiraha nooca darbiga. Nooc darbi aan lakab lahayn waa la reebay oo magaciisa ayaa la sheegaa.
- Alaabta mashruucu horay u leeyahay waa la hayaa sida ay tahay. Alaab cusub oo magaceedu la yimid ayaa magaceeda ku dhamaysa "(xirmo)".
- Nooc darbi oo darbiyadu isticmaalaan looma beddelo xirmo. Ku beddel tafatiraha nooca darbiga, kaasoo darbiyadiisa si sax ah u wareejiya.
- Koodh lagu dejiyay darbi kasta ma socdo: waa darbigaas gaarka ah. Koodhka lagu dejiyay nooca ayaa socda.
- Faylka oo leh goob aan qaabkaasi lahayn, lakab alaabtiisu maqan tahay, ama wax aan qoraal caadi ahayn ahayn ayaa la diidaa, fariintuna waxay sheegaa meesha iyo sababta.
- Lama dhisin: noocyada dabaqa, saqafka iyo saqafka hoose (nooc kasta dhumucdiisa gaarka ah ayuu leeyahay, sidaas darteed noocyo ma lahan nooca version-kan), noocyada albaabka iyo daaqadda ee aan qoys ahayn, iyo xarriiqyada ama midabyada faylka barnaamij kale.
