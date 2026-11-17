---
title: Habee, kaydi oo dhoofi jadwal
summary: Kooxee jadwal, siiso subtotal iyo wadar, ku dar tiir laga akhriyo sifo, ku kaydi sida dejin faylka dhexdiisa, oo u dhoofi sida buug-shaqo (.xlsx), sida qoraal lagu dhejiyo xaashi online, ama sida CSV. Heerka xafiiska wuxuu buuxiyaa wixii jadwalku aanu sheegin.
keywords: habaynta jadwalka, kooxee, subtotal, wadar, madasha, dejin, jadwalka albaabbada dabaq kasta, heerka dabka, ironmongery, xlsx, buug-shaqo, xaashi online, dhaji, csv, dhoofin, jadwal, walxaha, dooro jadwal, heerka xafiiska
from: 95dfd801
---

## Waxa aad samayn doontid

Jadwal caadi ah ku beddel mid xafiiskaaga soo saaro: lagu kooxeeyay dabaq, nooc ama qol, oo leh subtotal iyo wadar, tiirarka aad u baahan tahay, magaciisa gaarka ah. Kadibna u dir xaashi buug-shaqo. Safka kasta iyo lambar kasta ayaa weli ogaanaya walxaha ay ka yimaadeen.

## Tallaabooyinka

1. Shid {{ui:Sawir}} oo fur **Jadwallada** dhinaca bidix. Dooro jadwal, tusaale ahaan **Albaabbada**.
2. Miiskha sare, dooro **Kooxee** (tiir ka mid ah jadwalka, sida Heer ama Nooc, ama **Ma jiro kooxeyn**) iyo **Wadarta** (**Ma jiro wadar**, **Hal wadar**, ama **Subtotal iyo wadar**). **Sida la dejiyay** wuxuu dooradda ka tagaa dejinta la kaydiyay ama heerka xafiiska.
3. Si aad tiir ugu darto oo laga akhriyo walxaha, qor magac sifo ama calaamad hoosta miiska (tusaale ahaan `FireRating`, `Pset_DoorCommon.FireRating` ama magaca calaamad sida `Ironmongery`) oo guji **Ku dar tiir**. BimCraft marka hore wuxuu akhrinayaa property sets-ka walxaha laftiisa, kadibna kuwa noociisa. Marka aan walax weli qiimo lahayn, waa sheegaysaa; tiirku wuu buuxmaa isaga keligiis markii qiimo la dhigo.
4. Qor magac (tusaale ahaan "Jadwalka albaabbada dabaq kasta") oo guji **Ku kaydi sidii dejin**. Dejintu waxa lagu kaydiyaa faylka dhismaha oo waxay ku biirtaa liiska Jadwallada magaceeda. Waxay raacaa isbeddel kasta oo moodelka ah. **Ka saar dejintan** ayaa mar kale ka saara. Labaduba waa hal tallaabo oo Ka noqo.

## Guji tiro si aad u doorato meesha ay ka timid

Guji safka kasta, ama tiro kasta, si aad u doorato walxaha ka dambeeya qorshaha iyo 3D:

- safka waxa uu doortaa walxaha safkaas;
- subtotal ama wadar waxa uu doortaa wixii ay ku darto, madasha kooxda waxa uu doortaa kooxdeeda;
- tiro leh walxo u gaar ah ayaa doorta kuwaas: **Ka jarista** nooca darbiga waxa uu doortaa albaabbadiisa iyo daaqadihiisa, bedka darbiga qol waxa uu doortaa darbiyadiisa.

Isla sidaas ayay ku shaqeysaa dukumeenti laga sameeyay moodelka: horjoogga, guji tiro jadwal.

## Dhoofin

- **Soo deji Excel** wuxuu kaydiyaa buug-shaqo .xlsx. Dherarka, bedadka, mugyada iyo tirooyinka waa lambar dhab ah oo cutubka tiirku muujiyo (fiit iyo inji waxay sii haraan qoraal). Xaashi labaad, **Elements**, wuxuu liistaa safka kasta GlobalId-yada walxaha ka dambeeya.
- **Koobiyee Google Sheets** wuxuu jadwalka ku dhigaa clipboard-kaaga qoraal ay kala saaraan tab. Google Sheet-ka, guji unugga A1 oo dhejiy. **Fur Google Sheet cusub** wuxuu furaa `sheets.new`, ciwaanka Google ee xaashi madhan, akoonkaaga Google gudahiisa. BimCraft ma soo galo Google ma-na diro wax halkaas: dhejinta waa kaaga.
- **Soo deji CSV** wuxuu kaydiyaa miiska sida uu u habaysan yahay shaashadda.

## Heerka xafiiska

Xafiis wuxuu hal mar sheegi karaa sida jadwalladiisa loo habeeyo. Shid add-on-ka **Default Policies** ([Default Policies](topic:default-policies)) oo dejig, **Dejinta › Global › Default Policies › Habaynta jadwalka (heerka xafiiska)**:

| Siyaasadda | Waxa ay sameyso |
|---|---|
| Kooxee jadwalada sida | Heer, Nooc, Qol ama ma jiro kooxeyn, jadwal kasta oo tiir noocaas ah leh |
| Wadarta jadwalada | Ma jiro wadar, hal wadar dhamaadka, ama subtotal hoosta kooxmid kasta iyo wadar |
| Cinwaanka jadwalka | Qaab, tusaale ahaan `{project}: {schedule}` |
| Madasha tiirarka | Sida la qoray, XARAFKA WEYN ama Xarafyo Weyn |

Heerku wuxuu ku dhacaa jadwal kasta, cidna dejisay: jadwallada caadiga ah ee dhinaca, dejinta la kaydiyay, jadwal ay caawiye dejiyay, dhoofinta iyo jadwallada dukumeentiga. Dejin sheegta kooxeyntiisa, wadarteeda ama cinwaankeeda gaarka ah ayaa ilaalinaysa; heerku wuxuu buuxiyaa inta kale. Dhinaca waxa lagu sheegaa qaybaha uu heerka xafiiska dejiyay. Siyaasadaha waxay la socdaan faylka Default Policies oo kuwa kale la wada.

## Waxa wanaagsan in la ogaado

- Dejintu waxay magacaabaa jadwalka isha iyo tiirarkeeda; ma haysto tiro. Tirooyinka mar kasta waa laga akhriyaa moodelka.
- Liisaska aan ahayn safka walxaha (isku-dhafka darbiyada iyo astaanta agabka) ma lahan habayn ama dhoofin halkan.
- Caawiye ayaa dhammaan tan kuu samayn kara: eeg [Oggolow caawiye AI inuu moodelkaaga la shaqeeyo](topic:assistants).
