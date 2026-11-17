---
title: Vendosni pajisje dhe mobilje nga Biblioteka
summary: Gjeni një artikull në Bibliotekë, një skedar ose vizatimin e hapur, vendoseni në një kat të një modeli IFC me një pamje paraprake fantazmë, rrotullojeni, ngjitni te një mur, dhe ruajeni.
keywords: lëvizje, rrotullim, kthim, tërheqje, bibliotekë, librarycraft, vendos, fut, pajisje, mobilje, bllok, familje, artikull, katalog, përmbajtje, kcl, csv, gltf, obj, rfa, dwg, lloj ifc
from: 3dad5d4b
---

## Çfarë do të bëni

Vendosni një artikull biblioteke në një model IFC: një lavaman, një tavolinë pune, një karrige. BimCraft e shkruan si element IFC të duhur me një lloj, kështu që çdo kopje e të njëjtit artikull ndan një grup të vetëm gjeometrie, dhe të dhënat, numri i artikullit dhe licenca e tij udhëtojnë me të.

## Hapat

1. Hapni një model IFC.
2. Klikoni skedën {{ui:Bibliotekë}} pranë {{ui:Vetitë}} në të djathtë, ose {{ui:Bibliotekë}} në shiritin e veglave mbi modelin.
3. Zgjidhni një burim:
   - **Simbole të integruara**: simbole gjenerike planimetrie hidraulike të përfshira me BimCraft nën Apache-2.0, të disponueshme pa lidhje. Kontrolloni përmasat e tyre para ndërtimit. Për simbolet elektrike të planimetrisë dhe pajisjet elektrike IFC, përdorni **Ndërtimi › Elektrike**.
   - **Biblioteka**: Biblioteka CadCraft në këtë faqe. Artikujt publikë nuk kërkojnë hyrje.
   - **Ky skedar**: blloqet e një vizatimi DWG ose DXF të hapur. Një bllok dinamik me gjendje dukshmërie ofrohet një herë për çdo gjendje, emërtuar "Lavaman: Dy vaska", secila e vizatuar me vetëm objektet e asaj gjendjeje.
   - **Skedarë…**: një skedar DWG, DXF, IFC, glTF/GLB, OBJ, RFA ose CSV në kompjuterin tuaj. Lexohet në këtë skedë; asgjë nuk ngarkohet.
   - **Burime të tjera**: një bibliotekë tjetër që flet të njëjtin format burimi. Shtoni adresën e saj një herë; ruhet në këtë shfletues.
4. Kërkoni ose zgjidhni një kategori, pastaj klikoni një kartelë. Kartela tregon një pamje paraprake planimetrie, emrin, prodhuesin dhe modelin, licencën dhe versionin.
5. Klikoni {{ui:Vendos në planimetri}} (në pamjen Planimetri) ose {{ui:Vendos në model}} (në pamjen 3D). Te {{ui:Ndaj}}, ku planimetria dhe pamja 3D shfaqen bashkë, butoni është një buton i ndarë: veprimi kryesor është {{ui:Vendos në planimetri}}, dhe shigjeta në skajin e djathtë hap një menu me {{ui:Vendos në model}}. Ose tërhiqni kartelën, ose figurën te detajet e artikullit, mbi planimetri ose pamjen 3D: artikulli vendoset aty ku lëshoni. Me një stilolaps ose gisht, mbani shtypur kartelën për një moment, pastaj tërhiqeni.
6. Zgjidhni katin te shiriti i vendosjes. Te pamja 3D, katet mbi të fshihen gjatë vendosjes dhe pamja kthehet nga lart; në planimetri, plani tashmë e shfaq atë kat. Zgjedhja e {{ui:Vendos në model}} vetëm nga planimetria sjell pamjen 3D pranë saj.
7. Lëvizni treguesin mbi model: një kuti transparente tregon ku shkon artikulli.
8. Shtypni {{key:R}} për ta rrotulluar 90°. Shtypni {{key:Tab}} (ose {{ui:Ngjitje te muri}}) për ta vendosur pjesën e pasme te muri më i afërt, duke u kthyer nga dhoma.
9. Klikoni për ta vendosur. Ose shkruani pozicionin te **X, Y (mm)**, për shembull `1200, 3400`, dhe shtypni {{key:Enter}}.

Një dritë ose çdo gjë tjetër e varur nga lart: vendosni **Montimi** te **Në tavan**. Maja e artikullit atëherë ndodhet në pjesën e poshtme të tavanit mbi vendin (ose në lartësinë e nivelit aty ku nuk ka tavan). Me një planimetri tavani në pamjen e planimetrisë, **Montimi** fillon te **Në tavan**.

10. Përgjigjuni një pyetjeje: **numri i artikullit** (plotësohet numri i radhës i lirë), sasia dhe një shënim. Shtypni {{key:Enter}}.
11. Vendosni më shumë, ose shtypni {{key:Esc}} për të ndaluar.
12. Klikoni {{ui:Ruaj si IFC}} për të shkarkuar kopjen e redaktuar.

## Planimetri ose model

Butoni i vendosjes së Bibliotekës ndjek pamjen ku jeni, dhe ndryshon sapo ndryshoni pamjen (butonat {{ui:Planimetri}}, {{ui:Ndaj}} dhe {{ui:3D}}, tastierën, hapjen e një skedari). Planimetria shfaq një buton, {{ui:Vendos në planimetri}}; 3D shfaq një buton, {{ui:Vendos në model}}; Ndaj shfaq butonin e ndarë, me {{ui:Vendos në planimetri}} si veprim kryesor dhe {{ui:Vendos në model}} në menunë e tij. Të dyja mënyrat përdorin të njëjtin shirit vendosjeje dhe shkruajnë të njëjtin element IFC: treguesi punon në pamjen e planimetrisë për njërën dhe në pamjen 3D për tjetrën. Shtypni {{key:Esc}} në çdo kohë për të ndaluar.

Tërheqja e një kartele nuk ka tast të vetin: butoni i ndarë, ose butoni i thjeshtë, bën të njëjtën gjë me tastierën.

## Lëvizni ose rrotulloni një artikull të vendosur

Te {{ui:Vizato}}, zgjidhni artikullin në planimetri. Një dorezë katrore shfaqet te pika e vendosjes së tij dhe një dorezë rrethore pranë saj.

- Tërhiqni artikullin, ose dorezën e tij katrore, për ta zhvendosur. Ngjitet si vegla Mur (skajet dhe faqet e murit); {{key:Shift}} e mban kënd të drejtë me vendin ku ishte.
- Tërhiqni dorezën rrethore për ta rrotulluar me hapa 15°. Mbajeni {{key:Shift}} për hapa 1°.
- Shtypni {{key:R}} për ta rrotulluar 90°.
- Te **Vetitë** (edhe në pamjen 3D), shkruani **X**, **Y** dhe **Rrotullimi (°)**, ose klikoni **Rrotullo 90°**.

Çdo zhvendosje është një hap i {{ui:Zhbëj}} dhe udhëton në Live TeamWork. Artikulli e mban numrin e tij, të dhënat e bibliotekës dhe lartësinë mbi nivelin. Ende nuk është ndërtuar: tërheqja e tij në pamjen 3D.

## Çfarë duhet të shihni

- Artikulli në model, i zgjedhur, me vetitë e tij djathtas: një kuti **Library item** me licencën dhe atribuimin e tij, dhe grupet `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` dhe, për artikujt nga vizatime të etiketuara, `CadCraft_SourceAttributes`.
- "Vendosur: *item* (artikull *n*)" te lista e ndryshimeve. {{key:Mod+Z}} e zhbën atë.
- Rreshti i statusit: "U vendos *item* si artikull *n*."

## Të mirëpërdorura

- Disa artikuj vijnë në disa madhësi ose opsione: kartela atëherë ka një zgjedhje **Variant**, dhe ai që zgjidhni është ai që vendoset. Shih [Vendos dhe zëvendëso një artikull biblioteke që ka variante](topic:library-variants).
- Një artikull pa trup 3D (një simbol 2D) vendoset me një kuti zëvendësuese; ju e jepni lartësinë kur pyeteni.
- Më shumë të njëjtë: zgjidhni një artikull të vendosur dhe përdorni {{ui:Kopjo}} dhe {{ui:Ngjit}}, ose {{key:Mod+D}}. Shih [Kopjo, ngjit dhe dyfisho artikujt e bibliotekës](topic:copy-paste).
- Për të nisur çdo vendosje me ngjitjen te muri të ndezur, aktivizoni **Fillo me ngjitjen te muri të ndezur** te [cilësimet e BimCraft](topic:settings).
- Gjatësitë konvertohen në njësitë e vetë modelit, cilado qoftë ajo.
- **Entourage** (pemë, shkurre, njerëz, makina) gjendet gjithashtu në bibliotekë: kërkoni "tree", "person" ose "car". Këto vizatohen nga CadCraft (CC0) dhe mbajnë ngjyrat e tyre kur vendosen (trungu kafe, gjethet jeshile, dritaret e makinës transparente), në BimCraft dhe në programe të tjera BIM. Shfaqen te [fotografitë e renderuara](topic:render).
- Në një skedar IFC2X3 trupi shkruhet si një solid me faqe; në IFC4 si një grup faqesh të trekëndëzuara. Të dyja hapen në mjete të tjera IFC.
- Një vizatim (DWG ose DXF) nuk mund të ruhet këtu, kështu që artikujt vendosen vetëm në modele IFC. Përdorni **Ky skedar** në një vizatim për të parë se çfarë do të bëhen blloqet e tij.

## Artikuj në gjuhën tuaj

Një artikull mund të mbajë emrin, përshkrimin dhe llojin e tij në gjuhë të tjera. Kur i ka në gjuhën me të cilën është vendosur BimCraft (Cilësimet › Të përgjithshme › Gjuha), faqja e artikullit i shfaq ato, me emrin që i dha prodhuesi poshtë, dhe **Vendos** e shkruan emrin në gjuhën tuaj në model, kështu që tabela {{ui:Pajisjet}} e liston kështu. Artikulli mbetet i njëjti artikull: kontrolli për përditësime dhe zëvendësimi bëhen sipas vetë artikullit, kurrë sipas emrit të tij. Artikujt pa përkthim mbajnë fjalët e tyre.

## Gabimet e zakonshme

- **Butoni i vendosjes mungon.** Nuk është hapur asnjë model IFC. Hapeni fillimisht.
- **Fantazma nuk ndjek treguesin.** Treguesi është jashtë zonës së modelit, ose plani i katit nuk shihet. Klikoni {{ui:Sipër}}.
- **{{ui:Ngjitje te muri}} thotë se nuk ka mure.** Kati nuk ka mure në IFC (disa eksporte vendosin muret në një kat tjetër). Zgjidhni atë kat, ose shkruani X dhe Y.
- **Artikujt e një skedari janë të madhësi të gabuar.** Skedari nuk ka njësi, ose tregon njësi të gabuara. Te {{ui:Skedarë…}} zgjidhni njësitë dhe lexojeni përsëri.

:::tip
Vendosja e të njëjtit artikull dy herë ndan një lloj IFC të vetëm, kështu që një model me dyzet karrige e ruan karrigen vetëm një herë.
:::
