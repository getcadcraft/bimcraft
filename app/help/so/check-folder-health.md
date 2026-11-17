---
title: Ka hubi galka koobiyada burburay, xiriirrada maqan iyo wixii hadhay
summary: Isticmaal warbixinta galka si aad u hesho faylalka moodelka ee go'ay, aad u doorato koobiga dambe ee buuxa, aad u aragto xiriirrada maqan, oo aad ogaato faylalka qufulka iyo kuwa meel-ku-meel.
keywords: hubinta caafimaadka, burburay, khaldan, aan dhammaystirnayn, go'ay, backup, xiriirro maqan, xref maqan, audit, wixii hadhay, faylalka qufulka, dwl, bak, gudbin
from: 3025a539
---

## Waxa aad samaynaysaa

Ka hubi galka mashruuca ka hor inta aadan gudbin ama shaqo ku bilaabin: moodel kasta ma buuxa, koobiga wanaagsan ee u dambeeyay kee, oo dhammaan faylalka isku xidhan ma jiraan?

## Tallaabooyin: koobiyada burburay

1. Fur galka mashruuca. Eeg [Fur galka mashruuca oo dhan](topic:open-project-folder).
2. Akhri qoraallada hoosta magaca galka. "2 files are incomplete or unreadable. See the models below." macnaheedu waa wax eegid ayaa jira.
3. Ku jira **Models**, eeg tiirka **Status**. **Complete** waa wanaagsan. "1 incomplete" oo midab ambar ah macnaheedu waa hal koobi oo xun, laakiin mid kale oo wanaagsan ayaa jira. **Incomplete** oo casaan ah macnaheedu waa koobi wanaagsan lama helin.
4. Fur **All … copies** hoosta moodel leh dhibaato. Waxa uu liisteeyaa faylka ugu weyn iyo koobi kasta oo lambar leh, kan ugu cusub marka hore, oo leh cabbirka, taariikhda iyo xaaladda.
5. Akhri qoraalka ka sarreeya liiska, tusaale ahaan "Tower.rvt is incomplete (183.2 MB, should be at least 214.0 MB). The card shows the newest complete copy, Tower.0012.rvt (Mar 3, 2025)." Tusaale: Tower.rvt waa go'ay (183.2 MB, waa inuu ahaadaa ugu yaraan 214.0 MB). Kaarka wuxuu muujinayaa koobiga ugu cusub ee buuxa, Tower.0012.rvt (Mar 3, 2025).
6. Guji koobiga aad rabto inaad furto. Koobiyada buuxa oo keliya ayaa la guji karaa.

## Waxa hubinta caafimaadka samaysa

Koobi kasta oo moodel kasta waxa lagu hubiyaa degdeg madaxa, 512 bytes kasta, si galka ay ka buuxaan moodelo waaweyn ay ilbiriqsiyo ku dhammaato. Fayl kaas oo index-kiisa uu ka dhex tago dhamaadkiisa waxaa loo arkaa inuu go'ay markii la koobiyeynayay, la soo gudbinayay ama la isku waafaqsiinayay. Fayl ku jira diska cloud-ka oo weli yahay "online only" wuxuu ku egyahay sidaas oo kale.

Kaarka moodel kasta waxa laga akhriyaa faylka ugu weyn markii uu wanaagsan yahay, markii uusan wanaagsanayn waxa laga akhriyaa koobiga lambarka leh ee ugu cusub ee wanaagsan.

## Tallaabooyin: xiriirrada maqan

1. Raadso qoraalka "*n* linked files are not in this folder." hoosta magaca galka. Macnaheedu: *n* faylal isku xidhan galkan ma ku jiraan.
2. U dhaadh **Linked and referenced files**. Xiriirrada maqan ayaa marka hore la liisteeyaa.
3. Akhri tiirka **Where** xiriir kasta:
   - **Galkan ku jira**: waxa la helay jidka moodelku kaydiyay.
   - **Magac isku mid ah**: fayl magac isku mid ah ayaa galka dhex ku jira meel kale. Hubi inuu yahay mid saxan.
   - **Fayl maktabad**: miis koodka keynote ama isku-dhis. Kuwan waxa la socda barnaamijka kombiyuutar kasta, sidaas darteed looma filayo inay galka ku jiraan.
   - **Galkan kuma jiro**: meel kasta oo galka dhex ah lama helin.
4. Akhri **Used by** si aad u aragto moodelada xiriira fayl kasta.

BimCraft wuxuu xiriir kasta marka hore ka raadiyaa jidkiisa isku xidhan, kadibna dhamaadka jidka la kaydiyay (sida `\\server\jobs\Tower\Cad\X-Refs\site.dwg` waxa la helaa `X-Refs/site.dwg` markaad galka `Cad` dooratay), kadibna magaca faylka meel kasta oo galka dhex ku jira.

## Tallaabooyin: wixii hadhay

1. U dhaadh **Set aside** oo ku yaal dhammaadka warbixinta.
2. Akhri saddex saf oo laga yaabo inay soo muuqdaan:
   - Galalka nadaafadda (`*_backup`, `*_log`, `Revit_temp`): lama akhrin.
   - Wixii qufulka, log-ga iyo backup-ka ka hadhay: faylal sida `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`. Waxay ka tagaan barnaamijyo buu jabay ama furnaa markii galka la koobiyeynayay. Badanaa waa amaan in la tirtiro marka qof faylalkaas furayn.
   - Faylal kale: wax kasta oo BimCraft aan akhrin.

## Khaladaadka caadiga ah

- **Faylka ugu weyn ee burburay tirtirida ka hor inta aan koobi wanaagsan la kaydin.** Marka hore koobiga ugu dambeeya ee buuxa koobi, kadibna ka dhig faylka burburay.
- **Si indha la'aan ugu kalsoonaanta "Magac isku mid ah".** Laba sawir oo kala duwan ayaa magac isku mid ah yeelan kara. Haddii shaki jiro, labaduba fur.
- **In aad u malaynayso faylka maktabadda ee maqan inay dhibaato tahay.** Miisaska koodka keynote iyo isku-dhiska waxay la nool yihiin barnaamijka kombiyuutar kasta.
- **Tirada faylalka way kala duwan tahay browser-ada.** Firefox iyo Safari, {{ui:Fur gal}} wuxuu gacanta siiyaa fayl kasta, oo ay ku jiraan kuwa galalka nadaafadda ku jira, sidaas darteed tirada (iyo xadka 20,000 ee faylalka) waxay ku jiraan. Galka la jiido wuu ka reebaa, sida Chrome iyo Edge. Warbixintu waa isku mid marka kale.
