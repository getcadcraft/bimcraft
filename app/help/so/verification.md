---
title: Calaamadee walxaha sida la hubiyay ama goobta laga xaqiijiyay
summary: Walax laga akhriyay PDF ama scan waa mid aan la xaqiijin ilaa aad hubiso. Calaamadee walxaha sida la hubiyay, ama sida goobta laga xaqiijiyay (LOD 500) oo ay ku jiraan qofka cabbiray, goorta iyo habka, oo soo gudbi moodeel as-built ah oo sheegaya midka kale.
keywords: aan la xaqiijin, la xaqiijiyay, la hubiyay, goobta laga xaqiijiyay, as built, as-built, lod 500, xidhitaanka, wareejin, goobta lagu cabbiray, fiid cabbir, laser, scan, sahan, dhismo jira, beddel, calaamadee sida la hubiyay, xaqiijin, heerka 7
from: df35d908
---

## Waxa aad samayn doontid

Raadi waxa moodeelka ka mid ah oo qof si dhab ah u eegay. Walax waxay leedahay mid ka mid ah saddex calaamadood, ama midna:

- **Aan la xaqiijin**: barnaamijku wuu aqoonsaday marka laga soo akhriyo PDF, naqshad la scan-gareeyay, naqshad la raacay ama scan daruuro dhibcood. Qof weli ma hubin.
- **La hubiyay**: qof ayaa barbar dhigay naqshadda ay ka timid.
- **Goobta laga xaqiijiyay (LOD 500)**: qof ayaa goobta cabbiray. Yaa, goorta iyo habka waa lagu kaydiyaa.
- **Calaamad la'aan**: qof ayaa sawiray. Moodeelku ma sheego wax ku saabsan.

## Tallaabooyin

1. Dooro hal walax ama badan (darbiyo, albaabo, daaqado, qolal, walax kasta).
2. Panel-ka {{ui:Properties}} fur {{ui:Verification}}.
3. Ku qor yaa hubiyay ama cabbiray. Taariikhdu waa maanta ilaa aad beddesho.
4. Guji {{ui:Mark as checked}}. Cabbirka goobta, dooro sida loo cabbiray (fiid cabbir, mitirka laser-ka, scan, sahan) oo guji {{ui:Mark as field-verified (LOD 500)}}.
5. {{ui:Mark as unverified}} iyo {{ui:Take the mark off}} waxay dib u celiyaan. Guji kasta waa hal tallaabo oo aad ka noqon kartaa, doorashada oo dhan.

Si degdeg ah u calaamadee doorasho: {{ui:Tools}} › {{ui:Mark as checked}} (qoraalka: `MARKCHECKED`) wuxuu calaamadeeyaa doorashada sida ay adiga hubisay, maanta.

## Waxa aad arkaysaa

- Qorshaha, walax aan la xaqiijin waxay leedahay sanduuq jajab ah iyo "?"; walax goobta laga xaqiijiyay waxay leedahay calaamad hubin. Ka saar {{ui:Show verification marks in the plan}} qaybta {{ui:Audit}} si aad u qariso.
- {{ui:Schedules}} › {{ui:Verification}} wuxuu liistaa walax kasta oo calaamad leh, iyo heerkeeda, xaaladda, qofka, goorta, habka iyo meesha ay ka timid.
- Audit-ku wuxuu liistaa walaxyada aan la xaqiijin, wuxuuna tiriyaa walaxa goobta laga xaqiijiyay sida LOD 500. Eeg [Hubi moodeelka](topic:audit-the-model).

## Scan-ka

Markaad scan-ka ku barbar dhigayso moodeelka, {{ui:Mark the matching elements as field-verified}} wuxuu calaamadeeyaa walax kasta oo scan-ku arkay sida la dhisay dulqaadka gudihiisa, habka "scan", iyo dulqaadka ku jira qoraalka. Eeg [Isbarbar dhig scan moodeelka](topic:compare-scan-with-model).

:::warning
Barbardhiggan wuxuu isku dhigaa sanduuqa walax kasta lambarrada scan-ka. Ma aha sahan rasmi ah. Isticmaal walaxyada aad sidoo kale goob ahaan u eegtay.
:::

## Moodeelka as-built iyo xirmada wareejinta

{{ui:Build the handover package}} ee tab-ka {{ui:Assets}} wuxuu moodeelka as-built ku dhex geliyaa zip-ka, oo leh:

- qoraal ku saabsan mashruuca oo tirinaya walaxyada goobta laga xaqiijiyay, la hubiyay, aan la xaqiijin iyo kuwa aan calaamad lahayn;
- `as-built/verified-elements.csv`: walax kasta iyo qol kasta oo xaaladdooda, qofka, goorta iyo habka;
- `as-built/as-built-drawings.pdf`: kooxda naqshadaha sida hadda tahay;
- buugga isbeddelka naqshadaha, marka moodeelku soo saaray kooxaha.

Eeg [Hantida iyo dayactirka](topic:assets-and-maintenance).

## Sida loo kaydiyo IFC-da

Walax kasta oo calaamadaysan waxay leedahay habayn sifooyin `CadCraft_Verification`: State, By, On, Method, Source, Note, iyo LevelOfDevelopment (`LOD 500` intii ay goobta laga xaqiijinayso). Waa qoraal fudud, sidaas darteed barnaamijyada kale way akhrin karaan, Raadi, Midabee sifada ku salaysan iyo jadwallada calaamadaha ayaa isticmaali kara. Qoraalka as-built waa habayn sifooyin `CadCraft_AsBuilt` oo mashruuca ku jirta. Walax aan habaynta lahayn lama cabbirin goobta.

## Xiga

- [Darbiyada laga sameeyo qorshayaasha](topic:walls-from-plans)
- [Hubi moodeelka](topic:audit-the-model)
