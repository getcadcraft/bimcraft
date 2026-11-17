---
title: Vizatime paneli me dru ose çelik të lehtë
summary: Kornizo muret, dyshemetë dhe çatitë e modelit si panele me dru ose çelik të lehtë, shiko çdo montant, rrasë, trarë mbi hapje, trarë dyshemeje dhe mbajtëse çatie në përmasë, dhe ruaj listën e prerjeve si CSV dhe vizatimet e punishteje si PDF.
keywords: panel, kornizim, vizatim punishteje, listë prerjesh, çelik i lehtë, montant çeliku, LGS, dru, trarë dyshemeje, mbajtëse çatie, trarë mbi hapje, stok, PDF
from: c09f916e
---

## Hap panelet

Zgjidh {{ui:Vizatime panelesh}} te menyja {{ui:Ndërtimi}} (ose shkruaj {{cmd:PANELS}}). Lista përmban çdo mur të vizatuar, çdo dysheme dhe çdo çati të modelit, secili me një shenjë. Muret vijnë me dyert dhe dritaret e tyre si hapje. Një dysheme kornizohet si drejtkëndëshi rreth konturit të saj, me trarët që shkojnë në drejtimin më të shkurtër. Një çati kornizohet si çati dy-ujore mbi konturin e mureve të saj, me pjerrësinë e çatisë; lista e thotë këtë, sepse një çati katërujore ose komplekse nuk është dy-ujore.

## Materiali, madhësia dhe distanca

Zgjidh {{ui:Materiali}}: **Dru** ose **Çelik i lehtë**. Pjesët prej çeliku janë C-montantë të emërtuar sipas thellësisë dhe trashësisë së tyre (për shembull C92-1.2), me një shirit për rrasat. {{ui:Përmasa e elementit}} zgjedh një madhësi për çdo panel të shënuar, ose lëre në Default për të marrë parazgjedhjet e çdo lloji paneli. {{ui:Distanca}} është largësia mes montantëve, trarëve të dyshemesë ose mbajtëseve të çatisë. Këto janë vlera fillestare që ti të vendosësh. Ato nuk janë kontroll kodi: nëse një montant në atë distancë mban atë mur, dhe një trarë sipër hapjes për atë deschidë, varet nga tabelat e kodit (shtojca Rregulloret e ndërtimit ka atë të IRC) dhe nga inxhinieri yt.

## Çfarë merr

Paneli i parë i shënuar vizatohet në shkallë në dialog, me dimensionet. {{ui:Listë prerjesh (CSV)}} ruan çdo pjesë të çdo paneli sipas shënimit, madhësisë dhe gjatësisë, dhe gjatësitë e stokut që duhet blerë për to. {{ui:Vizatime punishteje (PDF)}} ruan një faqe A3 për çdo panel, me çdo pjesë të shënuar dhe listën e prerjeve të saj. {{ui:Vizatim (SVG)}} ruan panelin e parë si vizatim. Çdo gjë që kodi i kornizimit nuk mund ta kornizojë (një hapje shumë afër fundit të murit, një trari sipër hapjes që nuk futet nën rrasat, një pjesë më e gjatë se gjatësia më e madhe e stokut) listohet në Problemet, si dhe në dialog.

## Çfarë nuk bën

Panelet janë vizatime të bëra nga modeli sa herë kërkon ti: asgjë nuk shkruhet në model, kështu që përputhen gjithmonë me të. Për të vënë kornizimin në model si elemente, përdor {{ui:Skeletim}} për muret, dyshemetë dhe çatitë prej druri.
