---
title: Zhvillo një masë ndërtese nga një studim i vendit
summary: Merr një masë ndërtese të studiuar te pamja e vendit të CivilCraft dhe zhvilloje në nivele, mure dhe dysheme, me vendin e saj në hartë të ruajtur.
keywords: masë, masë ndërtese, projektim me masa, studim vendi, zhvillim, CivilCraft, dorëzim, nivele, mure, dysheme, gjurmë, gjeoreferencë, IFC
from: 557b94d1
---

Pamja e vendit të CivilCraft mund të vizatojë masa ndërtesash mbi një parcelë dhe t'i testojë kundër tokës, kufijve që shkruan dhe diellit. **Zhvillo në BimCraft** hap BimCraft në një skedë të re me masat; **Masat si IFC** i ruan si një skedar që hapet këtu në mënyrën e zakonshme. Në të dyja rastet çdo masë arrin si një vend, një ndërtesë me një nivel për kat, dhe një bllok (vetë masa) që mban shifrat e saj.

## Zhvillo një masë

1. Zgjidh një masë në pamjen 3D. Vetitë tregojnë përdorimin e saj, katet dhe lartësinë e katit, gjurmën, sipërfaqen bruto të dyshemesë, si ulet në pjerrësi, dhe parcelën e saj.
2. Kliko **Zhvillo këtë masë**.

Në një hap të vetëm zhbërjeje, çdo nivel i asaj ndërtese merr mure rreth gjurmës (gjurma është faqja e jashtme e mureve; çdo mur shkon deri në nivelin mbi të, dhe ai i fundit është një kat i lartë) dhe një dysheme nën gjithë ndërtesën. Blloku zëvendësohet dhe ndërtesa mban shifrat e studimit në grupin e vetive `CadCraft_SiteMass`, i shënuar si i zhvilluar. Nuk ka çati: një çati varet nga projektimi.

## Vendi i ndërtesës

Një skedar nga CivilCraft shkruhet në njësinë e gjatësisë së projektit dhe, kur projekti i CivilCraft kishte një sistem koordinatash, e mban atë si konvertimin e hartës së projektit. Zhvillimi i një mase e lë atë të paprekur, kështu që ndërtesa mbetet aty ku e tregon harta.
