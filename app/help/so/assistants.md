---
title: Ka dhig kaalmeeye AI inuu kaashado moodelkaaga
summary: Dejinta hoosteeda ku hawlgeli kaalmeeyayaasha si kaalmeeye kombiyuutarkaaga ku jira u helo walxaha, u akhriyo sifooyinkooda, aragtida ku keligeeda u muujiyo, oo darbiyo, albaabyo, daaqado, sagxado, heerar iyo shabakado u sawiro, iyada oo loo marayo CadCraft Studio. Waa la damiyaa ilaa aad hawlgelisid.
keywords: ai, kaalmeeye, mcp, qoraal, otomaatig, studio, hel walxaha, ku keligeeda, sifooyinka, ogolaansho, ka jaree, dhaqdhaqaaq, sawir darbiyo, ku dar albaabyo, ku dar daaqado, heerar, shabakado, ka noqo, kaydi, sadka amarka, cli, madhan, isticmaal kaalmeeyayaasha
from: 66d72742
---

## Waxa aad baran doontaa

Sida loo oggolaado kaalmeeye AI (kaalmeeye kasta oo hadli kara MCP) inuu eego moodelka IFC ee aad furtay oo uu ku sawiro, waxa uu samayn karo iyo waxa aanu samayn karin, iyo sida loo joojiyo.

## Waxa kaalmeeyuhu samayn karo BimCraft

| Waxa uu weydiisto | Waxa dhacaa | Waxa loo baahan yahay |
|---|---|---|
| Hel walxaha | Wuxuu helaa liis walxaha ah sida fasalka, dabaqa, magaca ama qiimaha sifada, sida **Raadi** samayso | Akhri |
| Akhri sifooyinka | Wuxuu helaa sifooyinka hal walax, nooca, qaybaha sifooyinka iyo tirooyinka, sida **Sifooyinka** muujiyo | Akhri |
| Sharax moodelka, liis darbiyada | Wuxuu helaa heerarka, darbiyada, albaabyada, daaqadaha, qolalka, sagxadaha, shabakadaha iyo tiirarka, iyo darbi kasta dhammaadkeeda, nooca iyo dhererka | Akhri |
| Ka soo saar, ka dhig mid aan cadayn, qari ama muuji | Aragtida 3D way isbeddeshaa sida aad isticmaashay menuga {{ui:Muuji}} | Beddel aragtida oo sawir |
| Sawir darbiyo, albaabyo, daaqado, sagxado, heerar ama khadadka shabakada | Moodelka way isbeddelaa sida aad isticmaashay qalabka {{ui:Sawir}}: darbiyada way isku xidhmaan, qolalka, sagxadaha iyo saqafyada way raacaan | Beddel aragtida oo sawir |
| Beddel magac ama qiimaha sifada | Magaca, Sharaxa, Nooca walxa ama Calaamadda hal walax, ama qiimaha sifo keliya. Qiime ay la wadaagto walxo kale waa la koobiyeeyaa marka hore; qiimaha nooceeda wuxuu isbeddelaa kaliya marka kaalmeeyuhu sheego, sababtoo ah walax kasta oo nooca ah way raacdaa | Beddel aragtida oo sawir |
| Guuri, tirtir, beddel darbiyada, albaabyada iyo daaqadaha | Walxaha way guuraan ama way tirtirmaan oo waxa ay hayaan ayaa la socda; darbiyada lagu sawiray qalabyada {{ui:Sawir}} waxa ay isbeddelaan dhamaadkooda ama nooceeda, albaabyada iyo daaqadaha meeshooda, cabbirkooda ama nooceeda, qolalka iyo isku xidhka way raacaan | Beddel aragtida oo sawir |
| Dejiso, habeeyo oo akhri jadwal. "Jadwal albaabyada sida dabaqa, oo leh darajada dab-iidka iyo alaabta birta": kaalmeeyuhu wuxuu magacaabaa jadwalka, tiirarkiisa (sifo ama calaamad wuxuu noqdaa tiir) iyo kooxeynta; BimCraft wuxuu buuxiyaa oo habeeyaa moodelka, waxa kaalmeeyuhu aanu sheegin wuxuu ka qaadaa heerka xafiiska. Dejintan waxay ku biirtaa liistaada Jadwallada. Sadar kasta oo uu dib u helo wuxuu magacaabaa walxahiisa si uu u dooran karo | Akhri si aad u akhrido; Beddel aragtida oo sawir si aad dejinta u kaydiso |
| Dhoofi jadwal | CSV, Excel, ama qoraal kala-saaran tab si aad ugu dhejiso Google Sheets (waxba looma diro Google) | Dhoofi |
| Akhri oo dejiso dhammaystirka qolalka | Noocyada dhammaystirka, sagxadda, darbiga iyo saqafka qol kasta, aagagga, tirada alaabta iyo mugga lakabka hoosta; aagagga, tirada alaabta iyo mugga lakabka hoosta waxay ka imanayaan jadwallada dhammaystirka | Akhri; Beddel aragtida oo sawir si aad u dejiso |
| Dooro walxaha, ka noqo tallaabooyinkiisa | Walxaha waxa lagu doortaa aragtida; tallaabadiisii ugu dambaysay waa la ka noqonayaa | Beddel aragtida oo sawir |
| Kaydi | Fayl IFC cusub oo leh isbeddel kasta, sida {{ui:U kaydi sida IFC}} u sameeyo (asalka looma beddelo) | Kaydi |
| Dhoofi USD | Moodellada furan sida OpenUSD (.usda, .usdc ama .usdz), sida {{ui:USD}} ee qalabka ku qoro | Dhoofi |
| Sawir sawir, socodsii safka rendarka | Sawir ee aragtida 3D, sida wada-hadalka {{ui:Rendar}} u sameeyo oo leh dejinta Rendar-kaaga, mana aanu codsan kuwo kale; ama sawirro tayo sare leh oo lagu daro safka wada-hadalka oo mid-mid loo rendaro (safku wuxuu u baahan yahay WebGPU). Waxba moodelka kuma beddelo ([Sawir sawir](topic:render)) | Dhoofi |

Isbeddel kasta oo kaalmeeyuhu sameeyo waa hal tallaabo oo ku jirta **Isbeddelada**, oo magaceedu yahay "Kaalmeeye: …" (tusaale ahaan "Kaalmeeye: ku dar 4 darbi"). Sidaas darteed {{key:Mod+Z}} wuxuu ka noqonayaa ficilkiisa oo dhan, waxaanad ogaan kartaa cidda leh tallaabada. Daaqadda kuma furi karto fayllo: adigaa furta moodelka; wuxuu ka shaqeeyaa kan furan.

## Hawlgeli

Kaalmeeyayaasha waxay gaadhaan BimCraft iyada oo loo marayo CadCraft Studio ee kombiyuutarkaaga; browser-ka caadiga ah ma lahan jid gelid.

1. Fur {{ui:Dejinta}} oo dooro tab-ka **BimCraft**.
2. Hoos **Kaalmeeyayaasha**, calaamadi **Ogolow kaalmeeyayaasha AI iyo qoraallada inay isticmaalaan BimCraft**.
3. **Akhri** adigaa loo calaamadiyay. Calaamadi **Beddel aragtida oo sawir** haddii kaalmeeyuhu u oggol yahay inuu ku keligeeda muujiyo oo qariyo walxaha iyo sawirka, iyo **Kaydi** haddii uu moodelka u kaydin karo fayl cusub.
4. Ku xidh kaalmeeyaha Studio (Studio wuxuu muujinayaa cinwaanka iyo dejinta lagu dhejiyo).

## Intii kaalmeeyuhu xidhan yahay

Fiiro ku yaal sare panelka midig ayaa sheegaya kaalmeeyaha xidhan iyo waxa uu samayn karo. Guji {{ui:Ka jaree}} si aad isla markaa u soo afjarto fadhigiisa; wuu mar kale ku xidhmaa si uu u sii wado.

**Dhaqdhaqaaqa**, oo hoos ku yaal **Kaalmeeyayaasha** dejinta, wuxuu liistaa wicitaan kasta oo kaalmeeyuhu sameeyay, kan ugu dambeeyay marka hore, iyo in uu shaqeeyay iyo in kale.

:::tip
Ku weydii erey cad, tusaale ahaan "ku keligeed muuji darbiyada dibadda ee Dabaqa 1", "albaabyadee ma leeyihiin darajada dab-iidka?", ama "ku sawir qol 6 x 4 mitir oo ku yaal Dabaqa 1 oo leh albaab darbiga koonfureed". Kaalmeeyuhu wuxuu helaa walxaha oo wuxuu ku muujiyaa aragtidaada, ama wuu sawiraa.
:::

## Daaqad la'aan: qoraallo iyo sadka amarka

Qalabyada sawirka isla kuwaas ayaa ku shaqeeya faylasha IFC ee foolderro aad magacowday, iyadoo aan daaqad la furin: server-ka MCP ee CadCraft iyo sadka amarka waxay bilaabi karaan dhismo cusub ama fur fayl IFC, sharax, ku dar darbiyo, albaabyo, daaqado, sagxado, heerar iyo shabakado, ka noqo oo kaydi sida fayl `.ifc` cusub. Afar qalab oo dheeraad ah ayaa u habboon qoraallada: `ifc_batch` wuxuu socodsiiyaa ilaa 200 tallaabo oo tafatir ah hal mar (oo dhan ama waxba: hal ka noqod wuxuu qaadaa batch-ka oo dhan, tallaabo diidan ayaa ka noqonaysa kuwa kale oo magacaabaa tallaabada); `ifc_describe` wuxuu liistaa heerarka iyo darbi kasta oo leh albaabyadiisa iyo daaqadihiisa; `ifc_render_png` wuxuu qoraa sawir hufan oo hubin ah oo moodelka ah (aan alwaax, tekstuur ama hooska lahayn) iyadoo aan daaqad la furin; `usd_export` wuxuu qoraa `.usda`, `.usdc` ama `.usdz`. Sadka amarka, `cadcraft bim script.json --from model.ifc -o out.ifc` wuxuu socodsiiyaa qoraal tallaabooyin ah, `--usd`, `--png` iyo `--plan` waxay qoraan fayl USD, sawir ama qorshe isla socodsiintaas. Adigu go'aamiyaa foolderrada uu isticmaali karo iyo in uu wax beddeli karo ama kaydin karo.

## Joojiso

Ka saar calaamadda **Ogolow kaalmeeyayaasha AI iyo qoraallada inay isticmaalaan BimCraft**. Dhammaan kaalmeeyayaasha isla markaa way ka go'aan, dejintana way xasuusataa xiliga soo socda.

## Eeg sidoo kale

- [Cuntooyinka kaalmeeyayaasha AI](common:assistants-recipes): tusaalooyin shaqo, mid kasta oo leh qalabyada uu wacayo.
- [Hel walxaha iyada oo loo marayo fasal, magac ama sifo](topic:find)
- [Qari, ku keligeeda muuji oo ka dhig aragtida walxaha](topic:hide-and-isolate)
- [Dejinta BimCraft](topic:settings)
