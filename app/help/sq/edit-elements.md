---
title: Fshi, prit, kopjo dhe ngjit elementët e ndërtesës
summary: Zgjidh mure, dyer, mobilje ose çdo gjë tjetër në një model IFC; fshije, prije, ose kopjoje dhe ngjite aty ku klikon, në vend, ose në një kat tjetër.
keywords: fshi, hiq, fshij, prit, kopjo, ngjit, dublo, zhvendos, përzgjidh të gjitha, zgjidh të gjitha, element ndërtese, mur, derë, dritare, shkallë, hapje, zhbëj
from: d9eec37f
---

## Çfarë do të bëni

Ndryshoni atë që ndodhet në një model IFC: hiqni elementët që nuk ju duhen, kopjoni një mur ose një grup mobiljesh në një vend tjetër, ose zhvendosni elementë duke i prerë dhe ngjitur. Çdo ndryshim është një hap që mund ta zhbëni, dhe ruajtja shkruan një skedar të ri, kështu që origjinali juaj mbetet ashtu siç ishte.

## Hapat

1. Hapni një model IFC. Shihni [Hap një model IFC dhe shiko në 3D](topic:open-ifc-model).
2. Zgjidhni atë që doni të ndryshoni: klikoni një element, mbani {{key:Mod}} ose {{key:Shift}} dhe klikoni për të zgjedhur më shumë, ose shtypni {{key:Mod+A}} ({{ui:Më shumë}}, {{ui:Përzgjidh të gjitha}}) për të zgjedhur çdo element që shfaqet.
3. Pastaj:
   - **Fshi:** shtypni {{key:Delete}}, ose {{ui:Më shumë}}, {{ui:Fshi}}.
   - **Kopjo:** shtypni {{key:Mod+C}} ose klikoni {{ui:Kopjo}}.
   - **Prit:** shtypni {{key:Mod+X}}, ose {{ui:Më shumë}}, {{ui:Prit}}. Elementët largohen dhe mund t'i ngjitni.
4. Për të ngjitur, shtypni {{key:Mod+V}} ose klikoni {{ui:Ngjit}}. Një kuti transparente me madhësinë e asaj që keni kopjuar ndjek treguesin mbi katin e zgjedhur në shiritin e vendosjes. Shtypni {{key:R}} për ta kthyer 90°, pastaj klikoni aty ku duhet të shkojë. Çdo klik vendos një kopje tjetër; shtypni {{key:Esc}} për ta ndaluar.
5. Ose shtypni {{key:Mod+Shift+V}} ({{ui:Më shumë}}, {{ui:Ngjit në vend}}): pas një prerjeje, elementët kthehen saktësisht aty ku ishin; pas një kopjimi, kopja vendoset pranë origjinaleve.
6. Klikoni {{ui:Ruaj si IFC}} për të shkarkuar modelin e ndryshuar.

## Çfarë shoqëron një element

- **Pjesët:** një shkallë merr vrapet e saj, një mur perde panelet e tij; çdo gjë e përbërë nga pjesë i merr të gjitha.
- **Hapjet:** një mur merr hapjet e prera në të. Fshirja e një dere ose dritareje merr me vete edhe hapjen që ajo mbushte, kështu muri mbyllet, ashtu si bën në një program hartimi. Fshirja e një muri të vizatuar në BimCraft fshin edhe dyert dhe dritaret e tij, dhe bashkon murët që mbeten. Fshirja e një muri nga një skedar i bërë diku tjetër i le dyert dhe dritaret aty ku ishin.
- **Të dhënat:** një kopje ka të njëjtin lloj, materiale, grupe vetish dhe sasi si origjinali, dhe një GlobalId të ri. Ndryshimi i një vlere më vonë në kopje nuk prek origjinalin.
- **Artikujt e bibliotekës** mbajnë të dhënat e tyre të bibliotekës; një kopje merr numrin e radhës së lirë, dhe një artikull i prerë që ngjitet përsëri mban numrin e vet.

## Çfarë duhet të shihni

- "Fshirë: …" ose "Ngjitur: …" në listën {{ui:Ndryshimet}}. {{key:Mod+Z}} e heq mbrapsht ndryshimin e fundit; {{key:Mod+Y}} e vendos përsëri.
- Pas një fshirjeje, rreshti i gjendjes thotë sa pjesë dhe hapje u fshinë gjithashtu.
- Elementët e ngjitur zgjidhen, kështu që mund t'i ngjitni përsëri në vend për të bërë një rresht, ose t'i fshini.

## Mirë të dish

- Kopjet përdorin të njëjtën gjeometri si origjinali (IFC lejon elementët të ndajnë të njëjtën gjeometri), kështu skedari rritet shumë pak.
- Elementët e ndërtesës ngjiten në modelin nga u kopjuan, në të njëjtën skedë. Për të përdorur artikuj bibliotekë të vendosur në një model tjetër, kopjoni një artikull në një kohë: shihni [Kopjo, ngjit dhe dublo artikujt e bibliotekës](topic:copy-paste).
- Katet, hapësirat, ndërtesat dhe vendi nuk mund të fshihen ose kopjohen. Zgjidhni elementët që janë brenda tyre. Një dhomë e vizatuar në BimCraft del nga murët përreth: fshini një mur për të bashkuar dy dhoma.
- Muret, dyert dhe dritaret e vizatuara me veglat e vetë BimCraft për mure, dyer dhe dritare nuk mund të kopjohen, prerë ose dublohen ende; rreshti i gjendjes e thotë këtë. Vizatojini përsëri. Fshirja funksionon.
- Kopjimi vendos edhe emrat dhe vetitë e asaj që kopjuat në kujtesën e fragmenteve si tekst, për ta ngjitur në një tabelë llogaritëse ose në një e-mail.

## Gabimet e zakonshme

- **{{ui:Fshi}} është gri.** Nuk është zgjedhur asgjë, ose janë zgjedhur vetëm katet ose hapësirat. Vendosni treguesin mbi të për të lexuar arsyen.
- **Ngjitja thotë se elementët erdhën nga një model tjetër.** Keni hapur një model tjetër pasi i kopjuat. Hapni përsëri modelin e parë dhe kopjojini atje.
- **Kopja e ngjitur është në një kat tjetër.** Shiriti i vendosjes {{ui:Kati}} vendos ku shkon; zgjidhni katin përpara se të klikoni.

## Lidhur me

- [Fshih, izolo dhe shiko përmes elementëve](topic:hide-and-isolate)
- [Tastet dhe miu](topic:keyboard#edit)
