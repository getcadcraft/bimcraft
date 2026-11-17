---
title: "Siyaasadaha caadiga ah: deji waxa dhismo cusub ku bilaabmo"
summary: Mar hal mar sheeg nooca darbiga, dabaqyada, xaashida ugu horreysa, calaamadaha LOD, unugyada iyo qalabka dhismo cusub uu ku bilaabmo, mashaariicda metric iyo imperial, oo la wadaago siyaasadaha xafiiska sida fayl yar.
keywords: caadi, default, siyaasadaha caadiga ah, siyaasad, heerka xafiiska, caadiyada xafiiska, qaab, dhismo cusub, darbiga ugu horreeya, metric, masonry, LOD, heerka horumarinta, xaashida ugu horreysa, paper, miisaan, dabaqyada, magacyada dabaqa, qalabka darbiga, unugyada, joogga dabaqa, wadaag, export, import, json
from: 42379aa5
---

## Waxa aad samayn doontaa

U sheeg BimCraft waxa dhismo cusub uu ku bilaabmo, si qofna xafiiska uusan wax isku mid ah mar kasta u beddelin. Tani waa add-on: wuu damaa ilaa aad shido, siyaasad aan la dejin waxay ka tagtaa dejinta asalka ah ee BimCraft sida ay tahay.

:::note
Kuwani waa dejinta caadiga ah ee dhismaha **cusub** iyo waxyaabaha **cusub**. Mashruuc aad horay u bilowday ma beddelmo.
:::

## Tallaabooyin

1. Fur Dejinta, tag {{ui:Kordhin}} oo shid {{ui:Siyaasadaha caadiga ah}}.
2. Dejinta, fur tab-ka **BimCraft** oo dooro {{ui:Siyaasadaha caadiga ah}} liiska bidix.
3. Deji siyaasadaha aad rabto. Mid kasta wuxuu ku bilaabmaa **kii BimCraft-ka**, oo ku qoran qaansada waxa uu yahay. Siyaasad leh sanduuq **Metric** iyo **Imperial** waxay qaadataa qiime kasta nooca mashruuca; buuxi kuwa kaliya ee aad u baahan tahay.
4. Ma jiro badhan Kaydi: isbeddel kasta waa la kaydiyaa markaad samaynayso. Qiime aan la isticmaali karin waa la diidaa, sababta ayaa la sheegaa, qiimihii hore wuu joogaa.
5. Guji {{ui:Dhismo cusub}}. Foomka waxaa lagu buuxiyaa siyaasadahaaga, qiime kasta oo siyaasad dejisay wuxuu ku xiga **laga helay Siyaasadaha caadiga ah**. Wali wax beddeli kartaa mid kasta ka hor {{ui:Abuur}}.

## Siyaasadaha

- **Unugyada dhismo cusub**: unugyada waxay u beddelmaan kuwa Abuur-ka.
- **Tirada dabaqyada**, **Magacyada dabaqyada** iyo **Dhererka dabaqa**. Magac kasta, `{n}` wuxuu tiriyaa 1, 2, 3; `{n0}` wuxuu tiriyaa 0, 1, 2; `{nn}` iyo `{nn0}` ayaa sidaas oo kale ah oo leh laba lambar. Marka `Dabaq {nn0}` wuxuu siiyaa Dabaq 00, Dabaq 01, Dabaq 02.
- **Nooca darbiga ugu horreeya**: waxa uu sawiro qalabka darbiga marka ugu horreysa. Xafiis metric ah wuxuu ku bilaabi karaa Exterior masonry 300 mm, mashaariicda imperial waxay haysanayaan Exterior 2×6.
- **Calaamadda LOD ee nooca darbiga bilowga**: heerka horumarinta (LOD 100 ilaa 500) ee sagaal nooca bilowga ah ay muujiyaan meel kasta oo nooc la liisto. Eeg [Dhis garbaha darbiyada](topic:wall-assemblies).
- **LOD ee nooca darbi cusub la sameeyay**: calaamadda ay nooca cusub ku bilaabato tafatiraha nooca. Halkaas ayaad ka beddeli kartaa.
- **Xaashida ugu horreysa**: warqadeeda, miisaankeeda, lambarkeeda iyo magaceeda (isticmaal `{level}` si aad u hesho magaca dabaqa ugu hooseeya), ama midna xaashi ugu horreysa.
- **Cabbirrada qoraalka warqadda** (Dejinta › Global › Siyaasadaha caadiga ah): dhererka xafiiska, mm sida la daabacay, qoraallada, qoraalka cabbirka, calaamadaha, magacyada qolalka, xarfaha goobta, cinwaanka muuqaalka iyo qoraalka jadwalka. Dhismo cusub ayaa qaadaa markuu abuurmo, waxayna ku hayaa faylkiisa. Eeg [Naqshadee cabbirka dhabta ah, qor miisaanka](topic:annotation-sizes).
- **Qalabka firfircoon kadib Abuur**: Dooro, sida BimCraft isaga uu sameeyo, ama Darbi, si laba guji ee ugu horreeya qorshaha uu u sawiro darbi.

## Qaabaynta jadwalka: heerka xafiiska

Dejinta › Global › Siyaasadaha caadiga ah, hoosta **Qaabaynta jadwalka (heerka xafiiska)**, deji sida jadwal kasta loo kooxeeyo, haddii ay leedahay wadarta-hoose iyo wadar, cinwaankeeda, iyo xarfaha tiirarka. Jadwal kasta oo aan qeexin midkiisa ayaa qaadata, cidkasta oo dejisay. Eeg [Habee, kaydi oo dhoofi jadwalka](topic:schedule-layouts).

## La wadaag xafiiska

1. Dejinta, fur tab-ka **Global** oo dooro {{ui:Siyaasadaha caadiga ah}}.
2. Qor **Magaca xafiiska** haddii aad rabto. Waa la qorayaa faylka.
3. Guji {{ui:Kaydi faylka}}. Waxaad heleysaa fayl yar oo ku dhammaanaya `.ccdefaults.json`.
4. Kombiyuutar kale, shid add-on-ka, fur isla meeshii oo guji {{ui:Soo qaad faylka}}. Siyaasadaha faylka ayaa beddelaya kuwa kombiyuutarkaas.

Tab-ka Global wuxuu sidoo kale leeyahay **Nidaamka unugyada mashruuca cusub**, oo khuseeya dhammaan apps-ka leh add-on-ka, iyo {{ui:Dib u deji siyaasad kasta}}. {{ui:Dib u deji dejinta asalka ah ee BimCraft}} tab-ka BimCraft wuxuu nadiifiyaa kuwa BimCraft oo keliya.

## Waxa muhiim ah

- Faylku waa JSON furan oo caadi ah: liis magacyada siyaasadaha iyo qiimayaasha. Siyaasad uu faylku magacaabo oo nooca hadda aan garanayn waa laga reebayaa, waxaana lagu sheegayaa fariinta; kuwa kale ayaa soo gala.
- Siyaasadaha waxa lagu hayaa browser-kan, dhammaan apps-ka CadCraft ee kombiyuutarkan. Lama kaydiyo faylka dhismaha, kumana wada xidhna kombiyuutarro kale: u isticmaal faylka.
- Calaamadda LOD ee nooca bilowga waxay ka timid siyaasadda kombiyuutarkan. Nooc aad ka samayso nuqul nooc bilowga ah ayaa calaamadiisa ku qaada faylka dhismaha.
- BimCraft ma laha dejin saxnaan, sidaas darteed siyaasad saxnaan halkan ma jiro.
- Dhismo laga bilaabay qaab wuxuu qaadaa dabaqyada iyo xaashiyada qaabka. Siyaasadda nooca darbiga iyo tan unugyada ayaa weli khuseysa.
- Ka shid add-on-ka wax kasta waa dib u noqdaan kuwa BimCraft. Siyaasadahaaga waa la kaydiyaa si loogu soo celiyo markaad dib u shidid.
