---
title: Dokumentet nga modeli
summary: Shkruaj një specifikim ose një përshkrim një herë si shabllon, me fusha për sasitë, vetitë dhe etiketat, dhe plotësoje nga IFC i hapur si PDF ose dokument Word.
keywords: dokument, dokumente, specifikim, specifikime, përshkrim, shabllon, markdown, raport, word, docx, pdf, sasi, tabelë, lloj pune, tabelë dyersh, përfundime, documentcad
from: 2b0c9156
---

## Çfarë do të bësh

Një shabllon është një tekst në Markdown me fusha në kllapa të dyfishta. BimCraft i plotëson fushat nga modeli i hapur (numrat, sasitë sipas llojit, vetitë, [etiketat](topic:tags-and-schedules) e tua) dhe ruan rezultatin si PDF, dokument Word (.docx) ose Markdown.

## Hapat

1. Hap një model IFC.
2. Në panelin e majtë, nën {{ui:Sasi}}, hap {{ui:Dokumentet nga modeli}}.
3. Zgjidh një shabllon: {{ui:Dyert dhe montimet}} ose {{ui:Muret, veshjet dhe përfundimet}}, ose {{ui:Ngarko një shabllon (.md)…}} për një tënd.
4. Nëse shablloni lexon etiketa që modeli nuk i përcakton ende, kliko {{ui:Shto etiketat e këtij shablloni}}, pastaj vendos etiketa te elementët nën {{ui:Etiketat}}.
5. Ndrysho tekstin siç dëshiron dhe kliko {{ui:Shfaq dokumentin}}.
6. Kliko {{ui:PDF}} (zgjidh së pari A4 ose Letter) ose {{ui:Word (.docx)}}.

## Çfarë do të shohësh

- Dokumentin e plotësuar nën butona, me tabelat e tij.
- Një listë paralajmërimesh kur një fushë nuk mund të lexohet (një etiketë që nuk është përcaktuar, një veti që modeli nuk e ka, një bllok që nuk mbyllet kurrë); një fushë e tillë shtypet si `[?…]`.
- Faqet PDF me titullin e dokumentit dhe "Faqja 1 nga 3" në fund të çdo faqeje; tabelat e gjata vazhdojnë me rreshtin e titullit.

## Fushat

| Fusha | Jep |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | emrin dhe përshkrimin e projektit, emrin e skedarit, sot |
| `{{count IfcDoor}}` | sa dyer ka |
| `{{sum IfcWall NetSideArea}}` | një total, me njësinë e vet |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | aritmetikë (`+ - * /` dhe kllapa) mbi terma në kllapa katrore: `[sum …]`, `[count …]`, dhe brenda një each `[qty Width]`. `round n` cakton shifrat pas presjes, `unit` shton një njësi. Diçka që nuk mund ta lexojë, ose një pjesëtim me zero, shtyp `[?…]` dhe jep paralajmërim |
| `{{qty IfcWall NetSideArea by Type}}` | një tabelë: një rresht për lloj me numrin e tij dhe totalin, dhe një rresht total |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | një tabelë, një rresht për element |
| `{{tag Finish}}` | në një cikël, vlera e elementit; gjetiu çdo vlerë e përdorur (Oak, Paint) |
| `{{tags}}` | përkufizimet e etiketave si tabelë |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | teksti një herë për element; pjesa pas `{{else}}` kur nuk ka asnjë |
| `{{#group IfcWall by Type}} … {{/group}}` | teksti një herë për lloj, me `{{value}}`, `{{count}}`, `{{sum Length}}` dhe një `{{#each}}` të thjeshtë brenda |

Brenda `{{#each}}`: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (Etiketa IFC), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (i vetë elementit, me njësinë e tij).

Një klasë mund të jetë disa (`IfcDoor|IfcWindow`) ose çdo element (`*`). Ngushtoje çdonjërën me `where`: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testet janë `=`, `!=`, `~` (përmban), `>`, `<`, `>=`, `<=`, `has` dhe `hasnot`; bashkoji disa me `and`; vendos një vlerë me hapësira në "thonjëza". `sort Name` rendit një cikël.

## Tabelat dhe specifikimi në një dokument

`{{schedule doors}}` shtyp një tabelë modeli si tabelë, sipas paraqitjes së zyrës: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ose emrin e një konfigurimi që ke ruajtur te Tabelat. `{{specification}}` shtyp specifikimin e projektit. Shabllonet **Tabelat e vizatimeve të punës** dhe **Specifikimi** i përdorin ato. Në pamjen paraprake, kliko një shifër të një tabele të tillë për të zgjedhur elementët nga e cila vjen. Shih [Paraqit, ruaj dhe eksporto një tabelë](topic:schedule-layouts) dhe [Shkruaj specifikimin nga modeli](topic:specification).

## Të dobishme

- Një fushë emërton një të integruar (Name, Type, Storey, Class, Material, Mark), një etiketë (`tag:Fire rating`, ose emrin e saj), një veti (`Pset_WallCommon.FireRating`) ose vetëm emrin e një vetie (`NetSideArea`, `Width`): një emër i thjeshtë lexon grupin e vetive të çdo elementi, grupet e sasive të parat, kështu që `Width` te një derë është gjerësia e derës, jo trashësia e murit. Brenda `where`, një emër i thjeshtë lexon grupin që shumica e elementeve të zgjedhur kanë.
- Sasitë janë ato që thonë grupet e sasive të skedarit (BimCraft i shkruan për atë që vizaton); njësitë vijnë nga cilësimet e njësive të skedarit.
- Fjalët e fushave (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) mbeten në anglisht në çdo gjuhë. Shabllonet shembull janë në anglisht.
- Teksti nga modeli nuk bëhet kurrë formatim: një emër me `*` ose `|` shtypet siç është.
- Ruaje një shabllon që ke ndryshuar me {{ui:Mbaje në këtë shfletues}} (vetëm ky shfletues e ka) ose {{ui:Shkarko shablloni}}.
- Teksti PDF përdor fontet standarde PDF: një karakter jashtë tekstit të Evropës Perëndimore shtypet si "?" dhe rreshti i statusit thotë sa janë.
- Shabllonet për çdo lloj pune gjenden te Biblioteka (lloji Shabllon dokumenti). Te Dokumentet nga modeli, zgjidh Nga Biblioteka…, zgjidh një, dhe teksti i tij dhe etiketat që lexon hyjnë; redakto sipas dëshirës. Publikimi i shabllonit tënd në Bibliotekë është i njëjti ngarkim si çdo element tjetër. Ende nuk është ndërtuar: llogaritje përtej numrave dhe totaleve.
