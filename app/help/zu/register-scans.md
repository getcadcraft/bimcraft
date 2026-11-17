---
title: Hlanganisa izikena eziningi zibe sinye
summary: Beka izikena ezithathwe kumaphozishini ahlukene ohlaka olulodwa ngamapheya amaphoyinti akhethiwe noma izinhloso ezithayiphiwe, uzithuthukise nge-ICP, ulondoloze ukuhlanganisa njengephrojekthi, bese uthumela ifu elihlanganisiwe njenge-LAS noma i-E57.
keywords: hlanganisa, ukuhlanganisa, izikena, ifu lephoyinti, icp, iterative closest point, izinhloso, amapheya amaphoyinti, ukuguqulwa okuqinile, ukulinganisa, ukuhlanganisa, e57, las, scan to bim
from: e8e270db
---

## Okuzokwenza

Izikena eziningana zendawo eyodwa (ngayinye isuka endaweni yayo yesikena) ziqala ezixhumanisweni zazo. Zihlanganise: nika iskena ngayinye indawo eyodwa ukuze zonke zihlale ohlakeni olulodwa, bese ulondoloza lokho njengephrojekthi bese ubhala ifu elihlanganisiwe njengefayela elilodwa le-LAS noma le-E57.

## Beka izikena

1. Vula ingxoxo ({{ui:Hlanganisa izikena…}} ephaneli yokuqala, noma {{ui:Bonisa}} › {{ui:Hlanganisa izikena…}} uma imodeli seyivuliwe). {{ui:Engeza izikena…}} uthatha amafayela e-LAS, LAZ, E57, PLY, PCD, PTX, PTS noma XYZ, noma uwayise engxoxweni. Izikena ezisebenzisa iyunithi ezahlukene ziyenqatshwa ngenothi: guqula eyodwa kuqala.
2. Khetha {{ui:Iskena okufanele lihanjiswe}} no {{ui:Beka eceleni kwalo}}. Isithombe sibonisa wonke amaskena ohlaka njengoba likunjalo manje, umbala owodwa ngamunye: {{ui:Ipulani}}, {{ui:Phambili}} noma {{ui:Uhlangothi}}; hudula ukuze uhambise, sebenzisa ivili lemouse ukuze usondeze.
3. **Ngamapheya amaphoyinti.** Chofoza {{ui:Khetha ipheya}}, bese uchofoza iphoyinti kuskena okufanele lihanjiswe, bese uchofoza indawo efanayo kwenye iskena (ikhona, isiqondisi, unyawo lensika). Yenza lokhu okungenani kathathu, ngamaphoyinti angelona umugqa owodwa futhi ahlukaniswe kabanzi. Chofoza {{ui:Beka ngamapheya}}: iskena libekwa ngokufanelana kwamaskwele amancane kakhulu, futhi **Okusele** kukhombisa ukuthi ipheya ngayinye isazophuthela kangakanani. Ipheya enenombolo enkulu iphuthe ngokukhethwa: yisuse ngesiphambano bese ubeka futhi.
4. **Ngezinhloso.** Uma izixhumanisi zephoyinti ezingempela sizaziwa (izinhloso ezihlolwe), chofoza {{ui:Khetha, bese uthayipha inhloso}}, chofoza iphoyinti kuskena lalo, bese uthayipha i-X, i-Y ne-Z yenhloso emgqeni. Amapheya nezinhloso ezithayiphiwe zingaxutshwa ngokukhululeka.

## Thuthukisa nge-ICP

Amapheya anika ukubekwa okuyinkomba. {{ui:Thuthukisa}} ihambisa iskena kuze izindawo zalo zihlale kwezezinye: kuqala **iphoyinti kuya kwiphoyinti**, bese **iphoyinti kuya kundiza**. Ithebula lidweba isinyathelo ngasinye ngephutha lalo nenani lamaphoyinti ahlanganisiwe; umugqa ongaphezulu kwalo udweba iphutha lehla. {{ui:Misa}} iphelisa ukusebenza ngalesi sinyathelo esiqhubekayo bese igcina lapho ifike khona. {{ui:Hlehlisa}} ithatha bonke ukusebenza (noma ukubekwa kokugcina) buyele emuva; {{ui:Setha kabusha}} ibuyisela iskena ezixhumanisweni zalo zefayela.

Ukuze kube lula kulaptop, i-ICP isebenza ngesabelo esincishisiwe samaphoyinti ({{ui:Amaphoyinti asetshenzisiwe}}, 5,000 kuya ku-60,000) futhi ilahla okuhlangana okukude kunalokho okushiwo yi-{{ui:Ibanga elikhulu lokuhlangana}} (ngokuzenzakalelayo 5% wosayizi weskena, uncipha lapho uzinzile). Idinga ukubekwa okuyinkomba kuqala: amaskena ahlanganayo kancane abika ukuthi awakwazi ukuhlangana. Izindawo ezibukeka zilingene noma zigoqekile kuphela azikwazi ukulungisa indawo ngaphansi kwazo; engeza amapheya kulokho.

## Londoloza nokuthumela

- {{ui:Londoloza iphrojekthi}} ibhala ifayela elincane le-`.ccscans.json`: igama leskena ngalinye, usayizi walo nesigaxa sokuqala se-64 KB, kanye nokuguqulwa kwalo. Alibambi amaphoyinti. {{ui:Vula iphrojekthi…}} ithola amafayela eskena ngalezo zinkomba (amafayela kufanele engezwe kuqala) futhi ibuyisele wonke ukuguqulwa.
- {{ui:Thumela i-LAS}} no {{ui:Thumela i-E57}} babhala ifayela elilodwa elinawo wonke amaskena endaweni yawo ehlanganisiwe. Amaphoyinti awabhalwa kabusha emithonjeni; ukuguqulwa kusetshenziswa ekuphumeni. Uma {{ui:Funda wonke amaphoyinti kumafayela}} ivuliwe, ifayela ngalinye liyafundwa futhi ngephoyinti ngalinye (kuze kufike kuma-20 million ngeskena); uma livaliwe, kubhalwa kuphela amaphoyinti abonakala kumbukeli.
- {{ui:Khombisa iclawudi elihlanganisiwe}} (BimCraft) ibhala i-LAS ivule kumbukeli we-3D eceleni kwemodeli, njengoba kwenza nanoma iyiphi iclawudi.

:::note
Akukho okulayishwa. Ukuhlanganisa kusebenza ngeziyunithi zamafayela uqobo futhi kugcina amamilimitha: i-LAS ibhalwa ngesikali esilingana (kuze kufike ku-0.1 mm), i-E57 ngamanani amade. Uhlelo lokuqondanisa lungena ku-LAS kuphela uma wonke amaskena eqamba ikhodi efanayo ye-EPSG. Umbhali we-E57 ungowethu; uhlolwa ngokufunda amafayela ayo ngalo mfundi nangelibE57Format.
:::
