---
title: Ka dhig caawiye AI inuu moodelkaaga kula shaqeeyo
summary: Ka shid caawiyayaasha Settings si caawiye kombiyuutarkaaga ku jira u helo walxaha, akhriyo sifooyinkooda, ka saar muuqaalka, oo ku sawir darbiyo, albaabo, daaqado, dabaqyo, heerar iyo grids, iyada oo loo marayo CadCraft Studio. Waa la damiyaa ilaa aad shido.
keywords: ai, caawiye, mcp, script, automation, studio, raadi walxaha, ka saar, sifooyinka, ogolaansho, ka jaree, dhaqdhaqaaq, sawir darbiyo, ku dar albaabo, ku dar daaqado, heerar, grids, dabaqyo, ka noqo, kaydi, command line, cli, headless, isticmaal caawiyayaasha AI
from: c5ee595b
---

## Waxa aad baran doontid

Sida loo ogolaado caawiye AI (caawiye kasta oo hadla MCP) inuu eego moodelka IFC ee aad furan tahay oo uu ku sawiro, waxa uu samayn karo iyo waxa uusan samayn karin, iyo sida loo joojiyo.

## Waxa caawiyuhu samayn karo BimCraft

| Waxa uu weydiisto | Waxa dhacaa | Wuxuu u baahan yahay |
|---|---|---|
| Raadi walxaha | Wuxuu helaa liis walxo oo fasal, dabaq, magac ama qiimaha sifada ku saabsan, sida **Raadi** samayso | Akhri |
| Akhri sifooyinka | Wuxuu helaa hal walax oo sifooyinkeeda, nooceeda, set-yada sifada iyo cabbirrada, sida **Sifooyinka** muujiyo | Akhri |
| Sharax moodelka, liis darbiyada | Wuxuu helaa heerarka, darbiyada, albaabada, daaqadaha, qolalka, sagxadaha, grids iyo tiirarka, iyo dhamaadka darbi kasta, nooceeda iyo dherkeeda | Akhri |
| Ka soo saar, ku dar kaliya, qari ama muuji | Muuqaalka 3D wuu isbedelaa sida aad u isticmaashay menu-ga {{ui:Muuji}} | Beddel aragtida oo sawir |
| Sawir darbiyo, albaabo, daaqado, dabaqyo, heerar ama grid lines | Moodelka wuu isbedelaa sida aad u isticmaashay qalabka {{ui:Sawir}}: darbiyada isku xidhan, qolalka, sagxadaha iyo saqafyada raacaan | Beddel aragtida oo sawir |
| Beddel magac ama qiimaha sifada | Magaca, sharaxaadda, nooca shayga ama tag-ka hal walax, ama qiimaha sifo kaliya. Qiimaha uu la wadaago walxo kale waa la koobiyeeyaa marka hore; qiimaha nooca walxa wuxuu isbedelaa kaliya marka caawiyuhu sheego, sababtoo ah walxaha nooca oo dhan way raacaan | Beddel aragtida oo sawir |
| Beddel, tirtir, darbiyada, albaabada iyo daaqadaha beddel | Walxaha way guurayaan ama way tirtirmaan iyo waxa ay martiqaadaan; darbiyada lagu sawiray qalabka {{ui:Sawir}} waxay isbedelaan geeskooda ama nooceedaba, albaabada iyo daaqadaha meeshooda, cabbirkooda ama nooceedaba, qolalkana iyo isku xidhka way raacaan | Beddel aragtida oo sawir |
| Dhig, habee oo akhri jadwal | "Jadwal albaabbo dabaq kasta, oo leh heer dab-kicinta iyo hardware-ka albaabka": caawiyuhu wuxuu magacaabaa jadwalka, tiirarkiisa (sifo ama tag wuxuu noqdaa tiir) iyo kooxeynta; BimCraft wuu buuxiyaa oo wuu habeeyaa ka moodelka, wixii caawiyuhu sheegin ayaa laga qaadaa heerka xafiiska. Dejintu waxay ku biirtaa liiskaaga **Jadwallada**. Safka kasta oo uu dib u helo wuxuu magacaabaa walxaheeda, si uu u dooran karo | Akhri si aad u akhrido; Beddel aragtida oo sawir si aad u kaydiso dejinta |
| Soo saar jadwal | CSV, Excel, ama qoraal tab kala soocaya oo lagu dhejin karo Google Sheets (waxba Google looma diro) | Soo saar |
| Akhri oo dejiya dhamaystirka qolalka | Noocyada dhamaystirka, dhamaystirka dabaq, darbi iyo saqaf kasta ee qol kasta, aagagga; bedadka, tirada alaabta iyo mugga substrate-ka ayaa markaas ka imanaya jadwallada dhamaystirka | Akhri; Beddel aragtida oo sawir si aad dejiso |
| Dooro walxaha, ka noqo tallaabooyinkiisa | Walxaha waxa lagu doortaa aragtida; tallaabadiisa ugu dambeysay waa la qaadaa | Beddel aragtida oo sawir |
| Kaydi | Fayl IFC cusub oo leh isbedel kasta, sida {{ui:U kaydi sida IFC}} u sameyso (asalka lama beddelo) | Kaydi |
| Soo saar USD | Moodelada furan ee OpenUSD ah (.usda, .usdc ama .usdz), sida {{ui:USD}} ee toolbar-ka u qoro | Soo saar |
| Sawir rendar, samee queue-ka rendarka | Sawir ee aragtida 3D, sida dialog-ka {{ui:Rendar}} u sameeyo oo leh dejinta Render-kaaga haddii aanu wax kale waydiin, ama sawirro tayo sare ah oo lagu daro queue-ka dialog-ka, oo mid kasta kadib kan kale lagu rendero (queue-ku wuxuu u baahan yahay WebGPU). Waxba moodelka kama beddelo ([Sawir rendar](topic:render)) | Soo saar |

Isbedel kasta oo caawiyuhu sameeyo waa hal tallaabo oo ku jirta **Isbedelada**, oo magacaabmaysa "Assistant: …" (tusaale "Assistant: ku dar 4 darbi"), sidaas darteed {{key:Mod+Z}} wuxuu ka noqonayaa ficilkiisa oo dhan, waxaadna arki kartaa tallaabada qofka ay tahay. Daaqadda gudaheeda ma furi karo faylal: adiga ayaa furta moodelka; wuxuu ka shaqeeyaa kan furan.

## Shid

Caawiyayaasha waxay BimCraft gaaraan iyadoo loo marayo CadCraft Studio kombiyuutarkaaga; browser-ka caadiga ahi ma leh jid gelid.

1. Fur {{ui:Dejinta}} oo dooro tab-ka **BimCraft**.
2. Hoos **Caawiyayaasha**, calaamadee **Ogolow caawiyayaasha AI iyo scripts-ka inay isticmaalaan BimCraft**.
3. **Akhri** waa la calaamadeeyay adiga. Calaamadee **Beddel aragtida oo sawir** haddii caawiyuhu ka dooran karo, qarin karo walxaha, iyo sawiri karo, iyo **Kaydi** haddii uu moodelka u kaydin karo fayl cusub.
4. Ku xidh caawiyaha Studio (Studio wuxuu muujinayaa cinwaanka iyo dejinta lagu dhejiyo).

## Intaad caawiye ku xirnaan

Qoraal sare oo ku yaal panel-ka midig wuxuu sheegayaa caawiyaha ku xiran iyo waxa uu samayn karo. Guji {{ui:Ka jaree}} si aad fadhigiisa isla markiiba u dhammaysid; wuxuu dib u xidhmayaa si uu u sii socdo.

**Dhaqdhaqaaq**, oo ku yaal hoos **Caawiyayaasha** ee Settings, wuxuu liistaa wicitaan kasta oo caawiyuhu sameeyay, kan ugu dambeeya marka hore, iyo in uu shaqeeyay ama ayan shaqeyn.

:::tip
Ku weydii erayo fudud, tusaale "ka saar darbiyada dibadda ee Dabaqa 1", "albaabbo noocee ah ayaa aan lahayn heer dab-kicinta?" ama "sawir qol 6 x 4 m ah oo Dabaqa 1 ku yaal, oo leh albaab darbiga koonfureed". Caawiyuhu wuxuu helaa walxaha oo muujiyaa aragtidaada, ama wuu sawiraa.
:::

## Adigoo aan daaqad lahayn: script-yada iyo command line-ka

Qalabka sawirka ee isku mid ah ayaa ku shaqeeya faylasha IFC ee folders-ka aad magacaabto, iyadoo aan daaqad furan: MCP server-ka CadCraft iyo command line-ku waxay bilaabi karaan dhismo cusub ama furi karaan fayl IFC, sharax, ku dar darbiyo, albaabo, daaqado, dabaqyo, heerar iyo grids, ka noqo, oo kaydi sida fayl `.ifc` cusub. Adiga ayaa go'aamiya folders-ka uu isticmaali karo iyo inuu wax beddeli karo ama kaydin karo.

## Dami

Ka saar calaamadda **Ogolow caawiyayaasha AI iyo scripts-ka inay isticmaalaan BimCraft**. Caawiye kasta isla markiiba waa la jaraa, dejintuna waa la kaydiyaa xilliga xiga.

## Eeg sidoo kale

- [Cuntooyinka caawiyayaasha AI](common:assistants-recipes): tusaalooyin shaqo, mid kastaba leh qalabka uu wicitaano.
- [Raadi walxaha fasal, magac ama sifo](topic:find)
- [Qari, kaliya u dhig, ama muuqaal cadaan u dhig walxaha](topic:hide-and-isolate)
- [Dejinta BimCraft](topic:settings)
