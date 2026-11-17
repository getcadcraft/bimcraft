---
title: Njësitë gjatë importimit: një skedar shpreh njësitë e veta, ose ju pyetet më parë
summary: Kur një skedar që sillni shpreh njësitë e veta, BimCraft i përdor dhe e thotë këtë. Kur nuk e bën, BimCraft pyet para se të vendosë diçka dhe e mban mend përgjigjen tuaj për atë skedar.
keywords: njësi, importim, hap, OBJ, STL, DWG, DXF, IFC, re pikash, element biblioteke, milimetra, metra, inç, këmbë, shkallë, madhësi e gabuar, shumë e madhe, shumë e vogël, 1000 herë, pyet, mbahet mend
from: f044e9bc
---

## Çfarë do të bëni

Sillni një skedar dhe sigurohuni që hyn në madhësinë e duhur.

## Hapa

1. Hapni ose shtoni skedarin si zakonisht: {{ui:E hapur}}, {{ui:Skedarët}} e Bibliotekës, {{ui:Re pikash}}, ose Ndërto › Nga një vizatim.
2. Nëse skedari shpreh njësitë e veta, asgjë nuk pyetet. Rreshti i statusit thotë cilat njësi shpreh skedari.
3. Nëse jo, një dialog pyet për **Njësitë e** skedarit. Zgjidhni çfarë është një njësi në skedar dhe klikoni {{ui:Përdor këto njësi}}. Asgjë nuk vendoset para se të përgjigjeni.
4. {{ui:Anulo}} (ose {{key:Esc}}) nuk sjell asgjë.

## Cilat skedarë shprehin njësitë e tyre

- **IFC**: shpreh njësinë e gjatësisë, dhe "U hap" thotë cilën. Një IFC që nuk shpreh asnjërën pyetet para se të hapet; përgjigja juaj shkruhet në model, kështu skedari e shpreh një herë kur ruani.
- **DWG dhe DXF**: njësitë e futjes së vizatimit. Një vizatim pa to pyetet (skedarët e Bibliotekës, Ndërto › Nga një vizatim, terreni nga izoipsat).
- **Lista pikash** për terren: nuk shprehin njësi. Ju pyetet.
- **Re pikash**: LAS dhe LAZ me sistem koordinatash, E57, PTX dhe PLY shprehin të tyret. Të tjerët pyeten.
- **OBJ dhe STL**: nuk shprehin kurrë njësi. Ju pyetet.
- **glTF dhe GLB**: metra, sipas rregullit të vetë formatit.
- **Imazhe**: nuk kanë madhësi të vetën. Imazhi përshtatet me pamjen dhe e vendosni madhësinë me shkallën sipas dy pikave. Madhësia që jepni mbahet mend për atë skedar: kur vendoset sërish, hyn në atë madhësi dhe rreshti i statusit e thotë këtë.
- **Shtojca Re pikash**: pyet kur ndërtoni një re pikash që skedari i saj nuk shpreh njësi, dhe e shënon re-n me njësinë që mban.

## Mirë të dini

- Përgjigja mbahet mend për atë skedar (emrin, madhësinë dhe datën) në këtë kompjuter, në çdo aplikacion CadCraft. Herën tjetër që hyn i njëjti skedar nuk pyetet, dhe rreshti i statusit thotë se u përdorën njësitë e mbajtura mend.
- Për t'u pyetur përsëri: paleta e komandave ({{key:Mod+K}}) › **Pyet përsëri për njësitë e skedarëve të importuar**.
- Një listë njësish që importi ka tashmë (Njësitë e Bibliotekës, njësitë e shiritit të renës, Njësitë e vizatimit te Ndërto › Nga një vizatim) ende ndryshon njësitë pas importit. Lista e Njësive të mjetit të terrenit tani është vetëm ajo me të cilën fillon pyetja.
