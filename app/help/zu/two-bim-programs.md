---
title: Ukusebenza phakathi kwezinhlelo ezimbili ze-BIM
summary: Thumela imodeli isuka kuhlelo olulodwa lwe-BIM iye kwelinye nge-IFC ne-BimCraft ephakathi, gcina ama-GlobalId, amasethi ezakhiwo nokuhlukaniswa, setha zombili izinhlelo ngezakhiwo ezifanayo, bese ubona okubuyile.
keywords: ifc, uhambo oluphindwayo, ukusebenziseka ndawonye, globalid, guid, amasethi ezakhiwo, psets, ukuhlukaniswa, izipharamitha ezabiwe, ukumaphayo kwezakhiwo, umhumushi, bcf, ukuhlelwa, ukudluliswa
from: 9f224176
---

## Okuzokwenza

Hambisa imodeli phakathi kwezinhlelo ezimbili ze-BIM, isibonelo kusuka ku-Revit kuya ku-Archicad nakubuyele, ngokudlula ku-IFC, ne-BimCraft phakathi ukuze ihlole, yengeze kuyo futhi ibike okusinde. Akukho ifomethi yefayela yalolo hlelo elifundwa: konke kuhamba njenge-IFC.

## Okugcinwa yi-BimCraft

Uma ushintsha imodeli ku-BimCraft bese uchofoza {{ui:Gcina njenge-IFC}}, yonke into ongayishintshanga ibhalwa kabusha njengoba yayinjalo. Ngakho:

- **Ama-GlobalId** ahlala efanayo, ukuze enye inhlelo ihlanganise ngayinye yento eyayithumele.
- **Amasethi ezakhiwo** namanani awo ahlala, ngaphandle kwamanani owashintshile.
- **Ukuhlukaniswa** kuhlala kuxhunyelwe ezintweni zakho.

## Setha zombili izinhlelo ngezakhiwo ezifanayo

1. Vula imodeli ku-BimCraft (nephakheji lephrojekthi, uma unalo: amaqembu alo ezakhiwo ayengezwa).
2. Ngakwesokunxele, vula {{ui:Phakathi kwezinhlelo ezimbili ze-BIM}}.
3. Ngaphansi kwe-**Ukumaphayo kwezakhiwo**, landa okudingwa yiyo yonke inhlelo:
   - {{ui:Izipharamitha ezabiwe}}: ifayela lepharamitha elabiwe. Ku-Revit, lilayishe nge-Manage › Shared Parameters bese wengeza izipharamitha ezigabeni eziyidingayo.
   - {{ui:Amasethi ezakhiwo wokuthumela i-IFC}}: ifayela lesethi yezakhiwo echazwe umsebenzisi. Ezilungiselelweni zokuthumela i-IFC ye-Revit, khetha lo ngaphansi kwamasethi ezakhiwo achazwe umsebenzisi, ukuze i-IFC ethunyelwe ithwale isethi namagama ezakhiwo afanayo.
   - {{ui:Ithebula lokumaphayo (CSV)}}: yonke into enesethi yayo ye-IFC negama, uhlobo lwayo, namagama afanayo kuyo yonke inhlelo. Amafayela okumaphayo e-Archicad awasiyo ifomethi eshicilelwe, ngakho hlela umhumushi wawo we-IFC nomphathi wezakhiwo ngesandla usebenzisa leli thebula.
   - {{ui:Ifayela lokumaphayo}}: konke ukumaphayo njengefayela elilodwa, ukuze ligcinwe nephrojekthi.

Amasethi ajwayelekile (Pset_ no-Qto_) ashiywa ngaphandle kwefayela lepharamitha elabiwe: zombili izinhlelo zizibhala kudatha yazo.

## Thumela imodeli ubuye nayo

1. Khipha i-IFC kusuka kuhlelo lokuqala ngama-GlobalId agciniwe (Revit: "Store the IFC GUID in an element parameter after export" ivuliwe).
2. Vula kwi-BimCraft, uhlole ({{ui:Ukuhlola imodeli}}, {{ui:Ukuhlola ukungqubuzana}}), wengeze izinkinga ({{ui:Izinkinga}}, BCF), shintsha amanani uma udinga, bese {{ui:Gcina njenge-IFC}}.
3. Vula i-IFC egciniwe kwinhlelo yesibili, usebenze kuyo, bese uthumela i-IFC kusuka kuleyo nhlelo ngama-GlobalId agciniwe (umhumushi we-Archicad: "Global Unique Identifiers: Keep existing").
4. Ebuyela ku-BimCraft, vula imodeli ephumile, bese wengeza leyo ebuyile ({{ui:Engeza imodeli}} ngaphansi kwe-Amamodeli).
5. Ku-{{ui:Phakathi kwezinhlelo ezimbili ze-BIM}}, khetha **Kuphume** no **Kubuyile**, bese uchofoza {{ui:Yenza umbiko}}.

## Funda umbiko

- **Izinto**: zingaki ezibuyile nge-GlobalId efanayo, zingaki ezingekho, nezingaki ezintsha. Izinto ngeGlobalId entsha zibonakala njengezingekho nezintsha: enye inhlelo ayizigcinanga.
- **Uhlobo lwe-IFC lushintshile**: izinto ezibuyile njengohlobo lwento oluhlukile.
- **Amanani ezici agcinwe**: ingxenye yamanani abuyela ngaphandle kokushintshwa. Uhlu oluphansi lubonisa izici ezinamanani ashintshe kakhulu noma ashoweyo.
- **Ukuhlukaniswa**: kugcinwe, kushintshiwe (uhlelo olufanayo, ikhodi ehlukile) noma kushoweyo.

{{ui:Landa umbiko (CSV)}} inikeza yonke into nenombolo yayo. Ukuze ubone izinto ezihambe noma eshintshe ukwakheka, sebenzisa {{ui:Qhathanisa izinguqulo}} kumamodeli amabili afanayo.

:::note
I-BimCraft ayisebenzisi nakuphi kwalezi zinhlelo ezimbili. Ukuthi yiziphi izilungiselelo ezidlulisa inani zincike ezilungiselelweni ze-IFC zohlelo ngalunye: umbiko ubonisa okubuyile ngempela, ngakho zama isilungiselelo, khipha futhi uqhathanise.
:::

## Izinkinga zihamba njenge-BCF

Izinkinga ozikhulisa ku-BimCraft zikhishwa njenge-BCF ({{ui:Izinkinga}}), okufundeka ngamathuluzi awo e-BCF ngazo zombili izinhlelo, ngakho umbuzo mayelana nento ufika kumuntu osebenza kwenye inhlelo ngombono wayo.

Bona futhi [Vula iphakheji lephrojekthi](topic:open-project-bundle), [Kusuka kufayela lephrojekthi kuya ku-BimCraft nge-IFC](topic:rvt-to-ifc) kanye [Qhathanisa izinguqulo ezimbili zemodeli](topic:compare-versions).
