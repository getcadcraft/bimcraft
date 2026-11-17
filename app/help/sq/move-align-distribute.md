---
title: Zhvendos, kopjo, rreshto dhe shpërndaj elementët e ndërtesës
summary: Zhvendos muret, dyshemetë, kolonat dhe artikujt e vendosur me një pikë bazë dhe një pikë të dytë ose një distancë të shkruar, kopjoji ndërsa shkon, dhe rreshtoji ose shpërndaji në mënyrë të barabartë, në planimetri ose nga një zgjedhje në 3D.
keywords: zhvendos, kopjo, rreshto, shpërndaj, hapësirë, zhvendosje, pikë bazë, ofset, mure, kolona, dysheme, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Çfarë do të bësh

Zhvendos një mur, një kolonë, një dysheme ose një artikull biblioteke të vendosur në një vend të ri, bëj kopje të tij, ose rreshto disa elementë, pa i vizatuar përsëri.

## Emrat dhe tastet

Komandat quhen {{ui:Zhvendos}}, {{ui:Rreshto}} dhe {{ui:Shpërndaj}}, dhe mund të shkruash `MOVE`, `ALIGN` dhe `DISTRIBUTE` në rreshtin e komandave, si në aplikacionin e vizatimit CadCraft. Një dallim: në BimCraft {{key:M}} është Mas, kështu që Zhvendos ka tastin e vet, {{key:Shift+M}}. Mjetet janë në menynë {{ui:Ndërtimi}}.

## Zhvendos

1. Zgjidh çfarë do të zhvendosësh, në planimetri ose në pamjen 3D. Muret, dyshemetë, kolonat dhe artikujt e bibliotekës së vendosur mund të zgjidhen të gjitha në një zgjedhje.
2. Shtyp {{key:Shift+M}} ose zgjidh {{ui:Zhvendos}}.
3. Kliko një pikë bazë, pastaj një pikë të dytë. Ose, pas pikës bazë, shkruaj një distancë dhe shtyp {{key:Enter}}: shkon në drejtimin ku tregon treguesi nga pika bazë. Mund të shkruash edhe `dx,dy` (ose `@dx,dy`), ose `gjatësi<kënd`.
4. Shtyp {{key:C}} për të ndezur {{ui:Kopjo}}: çdo zhvendosje bën atëherë kopje dhe mbetet gati për të tjerën. Shtyp {{key:Esc}} për ta ndalur.

Të dyja pikat mund të klikohen edhe në pamjen 3D: me Zhvendos aktiv, treguesi takon lartësinë e dyshemesë së nivelit, kështu që një klikim atje është një pikë e planimetrisë. Mbaj {{key:Shift}} të shtypur kur klikon për të zgjedhur një element tjetër. Përdor planimetri, Sipër, Para ose Anësore sipas dëshirës: pikat gjithmonë shtrihen në atë nivel.

Një mur merr me vete dyert dhe dritaret e tij. Një dysheme e vizatuar merr hapjet e saj. Dhomat, dyshemetë dhe tavanet që ndjekin muret përditësohen. Muret që u lidhën me murin e zhvendosur mbeten aty ku janë.

Çdo zhvendosje është një ndryshim: një {{key:Mod+Z}} e zhbën, dhe arrin te të gjithë në një sesion Live TeamWork. Një artikull biblioteke i vendosur nuk mund të kopjohet kështu; përdor {{ui:Redakto}} › {{ui:Kopjo}} dhe {{ui:Ngjit}}.

## Rreshto

Zgjidh dy ose më shumë elementë, zgjidh {{ui:Rreshto}}, pastaj një anë (majtas, qendër, djathtas, sipër, mes ose poshtë) dhe me çfarë të rreshtohet: grupin e zgjedhur, elementin e parë të zgjedhur, të fundit të zgjedhur, ose një pikë që klikon. Shtyp {{ui:Rreshto}} te shiriti.

## Shpërndaj

Zgjidh tre ose më shumë elementë, zgjidh {{ui:Shpërndaj}}, pastaj një drejtim (horizontalisht ose vertikalisht) dhe hapësirën: hapësira të barabarta midis tyre ose qendra të barabarta. Dy ato në skaje qëndrojnë aty ku janë.

Muret që Rreshton ose Shpërndan mjeti i zhvendos i ruajnë lidhjet e tyre, si me Zhvendos: një mur i lidhur me një mur të zhvendosur rrëshqet me skajin e vet përgjatë vijës së vet për të mbetur i lidhur, ndarjet që mbështeten në të vijnë me të, dhe dy mure të lidhur që zhvendosen të dy e mbajnë qoshen aty ku takohen vijat e reja. Dhomat mbeten të mbyllura. Është një hap në **Ndryshimet**.
