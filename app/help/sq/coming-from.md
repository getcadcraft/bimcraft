---
title: Nga programet e tjera BIM dhe të vizatimit
summary: Si përputhen zakonet nga hartimi BIM desktop dhe shikimi i skedarëve DWG me BimCraft, dhe ndryshimet që ngatërrojnë njerëzit.
keywords: kalim, migrim, i njohur, bim desktop, familje, parametra, shfletues projekti, paleta e vetive, kubi i pamjes, xref, menaxheri i shtresave, ndryshime, krahasim
from: 2de629af
---

Nëse e njihni Revit, pjesa më e madhe e BimCraft do t'ju duket e njohur me fjalë dhe e panjohur në shtrirje. Ndryshimi më i rëndësishëm: ky version lexon dhe inspekton modele dhe redakton të dhënat IFC. Ende nuk hartëzon si Revit. Nuk mund të vizatoni mure, të vendosni familje, të bëni pamje ose fletë, ose të ruani një skedar projekti. Ajo që mund të bëni është të hapni pothuajse çdo skedar ndërtese në çdo kompjuter me shfletues, të shihni çfarë përmban, të kontrolloni një dosje të tërë projekti dhe të korrigjoni të dhënat në një model IFC.

## Zakone të përshtatura

| Nëse jeni mësuar me | Në BimCraft |
|---|---|
| Hapjen e një `.rvt` në Revit për të parë modelin | BimCraft e hap `.rvt` si kartelë skedari: versioni, informacioni i projektit, lidhjet, pamja paraprake. Për modelin 3D, eksportoni IFC dhe hapeni atë. [Lexo një skedar projekti ose familjeje](topic:read-rvt-file) |
| Kontrollimin e versionit në të cilin u ruajt një skedar përpara hapjes | Karta thotë "saved in Revit …" lart, pa e përditësuar ose prekur skedarin |
| Project Browser | Nuk ka shfletues pamjesh dhe fletësh. Një model IFC ka listat {{ui:Storeys}} dhe {{ui:Elements}}; një vizatim ka skedat e fletës |
| Paletën Properties | Paneli {{ui:Properties}} në të djathtë, për elementin që klikuat. Grupe vetish IFC në vend të grupeve të parametrave |
| Parametrat e instancës dhe të tipit | Grupe vetish të instancës, dhe grupe të shënuar "(type)". Një ndryshim tipi vlen për çdo element të tipit, ashtu si në Revit. [Ndrysho një veti tipi për çdo element të një tipi](topic:type-vs-instance) |
| Edit Type | Pa dialog: klikoni një vlerë në një grup "(type)" dhe shkruani |
| Përzgjedhjen e shumë elementeve, filtrat, Select All Instances | Një element në një kohë. Nuk është ndërtuar ende |
| Kubin e pamjes dhe rrotën e navigimit | Një kub pamjeje në qoshen e poshtme djathtas, katër butona ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}) dhe rrotullim i lirë. Nuk ka rrotë navigimi |
| Shift dhe tërheqje me butonin e mesit për rrotullim, tërheqje me mesin për lëvizje | Rrotullimi me butonin e majtë, tërheqja me të djathtin (ose {{key:Shift}} dhe tërhiq) për lëvizje, rrota zmadhon. Stili i menusë {{ui:BIM ribbon}} kalon në lëvizje me butonin e mesit dhe {{key:Shift}} me butonin e mesit për rrotullim. [Menutë, tastet dhe miu](topic:menus-keys-and-mouse) |
| Planet e kateve, prerjet, kutitë e prerjes | Një plan {{ui:Section}} në një kohë ({{key:X}}); pa kuti prerjeje ose plane 2D. [Pritni një model IFC me një plan prerjeje](topic:section-plane) |
| Fshehja në pamje, izolimi, dukshmëria/grafika | {{ui:Storeys}} ndezur dhe fikur, {{ui:Spaces}} dhe {{ui:Edges}}. Nuk ka fshehje për element të veçantë ende |
| Dhomat | Hapësira IFC, fillimisht të fshehura. Klikoni {{ui:Spaces}} |
| Ruaj, Ruaj si, sinkronizim me qendrën | {{ui:Save as IFC}} shkarkon një skedar IFC të ri. Origjinali nuk ndryshon kurrë. Nuk ka qendër, nuk ka punë të përbashkët |
| Zhbërje me {{key:Mod+Z}} | Funksionon për ndryshimet IFC deri sa të ruani. [Ndrysho vetitë IFC dhe ruaj një kopje të ndryshuar](topic:edit-ifc-properties) |
| Manage Links | Hapni dosjen e projektit: çdo lidhje kontrollohet dhe shënohet **In this folder**, **Same name found**, **Library file** ose **Not in this folder**. [Hap një dosje të tërë projekti](topic:open-project-folder) |
| Auditimi, ose hapja e një skedari për të parë nëse është i dëmtuar | Raporti i dosjes kontrollon çdo kopje dhe rezervë për t'u prerë, në sekonda. [Kontrollo një dosje për kopje të dëmtuara](topic:check-folder-health) |
| Zgjedhja e skedarit të duhur nga një dosje e ngatërruar | Kutia {{ui:Start here}} sugjeron një, me arsyet |

Nëse hapni kryesisht modele për t'i kontrolluar, si në një program kontrolli modelesh ose shikimi IFC, zgjidhni stilin e menusë {{ui:Viewer}}: mjetet e shikimit dhe kontrollit vijnë të parat, ndërsa mjetet e ndërtimit presin në një menu. Shih [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).

## Nga shikimi i skedarëve DWG

Nëse hapni DWG në AutoCAD ose në një shikues DWG:

| Nëse jeni mësuar me | Në BimCraft |
|---|---|
| Skedat e modelit dhe të paraqitjes poshtë | Skeda mbi vizatim: {{ui:Model}} dhe një për çdo fletë |
| ZOOM Extents, dy klikime në rrotë | Dy klikime, {{key:F}} ose {{ui:Fit}} |
| Lëvizja me butonin e mesit | Tërhiq me çdo buton |
| Menaxheri i shtresave | Lista {{ui:Layers}}: vendos shenjën për të shfaqur, hiqe për të fshehur, {{ui:All on}} dhe {{ui:All off}} |
| Menaxheri i xref | **Vizatime të lidhura** në të djathtë, me **Shown** ose **Not found**, dhe {{ui:Add linked drawings…}} |
| Pamja e printimit | {{ui:Print view}} ose {{key:P}}: e zezë mbi të bardhë me trashësi vijash. Nuk printon |
| Nxjerrja e të dhënave të atributeve të blloqeve | Skeda {{ui:Equipment}} për vizatimet e shërbimeve ushqimore me etiketa, me {{ui:Download CSV}} |
| Matja, vizatimi, redaktimi, ruaj si | Jo në BimCraft. Aplikacioni i vizatimit CadCraft vizaton dhe redakton |

## Ndryshime që ngatërrojnë njerëzit

- **Punon në shfletues, dhe shfletuesi është i kujdesshëm me skedarët tuaj.** BimCraft mund të lexojë vetëm skedarë dhe dosje që ia jepni, duke i zgjedhur ose duke i tërhequr brenda. Nuk mund të hapë një skedar vetë, dhe nuk mund të mbishkruajë një skedar. Çdo ruajtje është një shkarkim.
- **Asgjë nuk ngarkohet.** Fjala "upload" në disa dialogë dosjesh të shfletuesve është fjalori i vetë shfletuesit. Skedarët mbeten në kompjuterin tuaj.
- **IFC është formati i modelit.** Një skedar projekti hapet si kartelë sepse përmbajtja e tij 3D nuk është dokumentuar. Trajtojeni IFC si rrugën me të cilën modelet hyjnë në BimCraft.
- **Redaktimet janë kopje-në-shkrim.** Ndryshimi i vlerës së një elementi nuk ndryshon fqinjët e tij, edhe kur eksportuesi e ka ndarë atë vlerë mes tyre. Vetitë e tipit janë përjashtimi i qëllimshëm.
- **Pa projekt, pa pamje.** BimCraft shfaq një skedar në një kohë dhe nuk mban asgjë për të pasi mbyllni skedën, përveç emrave të dosjeve të fundit në Chrome dhe Edge.
- **Tastet e Mac.** Ku shkurtoret e Revit në Windows përdorin Ctrl, shkurtoret e BimCraft përdorin {{key:Mod}}: Command në Mac.
- **Zakonet tuaja me miun.** Rrotullimi është butoni i majtë, jo Shift dhe butoni i mesit, përveç nëse zgjidhni stilin e menusë {{ui:BIM ribbon}} ose vendosni vetë butonat te [Menutë, tastet dhe miu](topic:menus-keys-and-mouse).

Shih [Çfarë nuk është ndërtuar ende](topic:not-built-yet) për atë që duhet të përdorni në vend të saj sot.
