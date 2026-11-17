---
title: Gjurmo një nivel, vendos penat për pamje, skico një shkallë, hap një OBJ
summary: Shfaqni një nivel tjetër me vija me pika nën planimetri dhe rreshtojeni; jepni mureve, dyerve dhe dritareve pennën e tyre në një pamje; vizatoni një vijë ecjeje për të marrë një shkallë; hapni një rrjet Wavefront OBJ.
keywords: gjurmim, referencë, nënshtresë, pena, trashësi vije, lloj vije, mbivendosje, shkallë, skicë, rrafshim, OBJ, rrjet, import, Wavefront
from: 333ebbde
---

## Gjurmo një nivel

Zgjidhni {{ui:Gjurmo}} në menynë {{ui:Ndërtimi}}, pastaj një pamje nga lista: planimetria e një niveli tjetër, planimetria e tavanit të një niveli ose një thirrje (e prerë sipas kornizës së saj). Muret, kolonat dhe dyshemetë e saj shfaqen me vija me pika nën planimetrinë që po vizatoni. Zhvendoseni duke klikuar një pikë bazë mbi referencën dhe më pas vendin ku duhet të shkojë ajo pikë, ose shkruani X, Y dhe një kënd (rrotullohet rreth qendrës së vet). {{ui:Rivendos}} e kthen në vend, {{ui:Fshih}} e heq. Është vetëm referencë: asgjë nuk përzgjidhet, nuk printohet dhe nuk ruhet në IFC. BimCraft e mban mend për çdo nivel në këtë shfletues.

## Pena për pamje

Zgjidhni {{ui:Pena}}. Thoni për çfarë është pena: të gjithë muret, të gjitha dyert, të gjitha dritaret, lloji i elementit të përzgjedhur ose elementët e përzgjedhur. Zgjidhni një trashësi, një vijë (e plotë, me pika, me pika të holla) dhe një ngjyrë, pastaj {{ui:Zbato}}. Ndryshimi vlen vetëm për planimetrinë e këtij niveli. Një përzgjedhje e fortë mbizotëron mbi një lloj, dhe një lloj mbizotëron mbi një kategori të tërë. {{ui:Pastro të gjitha}} i heq ato. Ruhen në këtë shfletues. Vendosni shenjën te **Ngjyrat e penave në 3D** për t'i vizatuar penat me ngjyrë mbi model në pamjen 3D (trashësia ose vija me pika i përkasin vijës, kështu që atje shfaqet vetëm ngjyra); hiqeni shenjën për t'u kthyer. {{ui:Printo}} i vizaton ato në PDF-në e planimetrisë: trashësia zmadhohet sipas ekranit (pena standarde e murit prej 1.75 piksele është 0.5 mm), vijat me pika mbeten të tilla, dhe një ngjyrë printohet me vlerën e temës së letrës.

## Një shkallë nga një skicë

Zgjidhni {{ui:Skiconi shkallën}} dhe klikoni kthesat e vijës së ecjes, duke filluar nga hapi i poshtëm. Një vijë është një shkallë e drejtë, dy vija që takohen në kënd të drejtë janë një L, dhe tri vija (lart, tërthor, mbrapsht) janë një U. Shtypni {{key:L}} për të vizatuar një rrafshim: klikoni kthesat e tij dhe shtypni {{key:Enter}}; ana e tij e shkurtër përcakton gjerësinë e shkallës. Shtypni {{key:Enter}} për të vendosur shkallën. Çdo shkallë llogaritet nga gjatësia e vijës suaj dhe numri i ngritjeve që kërkon lartësia. Pas kësaj është një shkallë e zakonshme: ndryshojeni te Vetitë, dhe vrima e shkallës dhe korrimanët ndjekin.

Vendosni shenjën te **Bëje një familje** në rreshtin e veglës (ose shtypni {{key:F}}) përpara {{key:Enter}}, për ta vendosur shkallën si familje (një shkallë e drejtë, L ose U). Ajo hyn si një element i vetëm dhe hapet në redaktorin e familjes me gjerësinë, shkallën, lartësinë totale, shkallët në çdo fluturim dhe hapësirën e një U-je si parametra, që të shtoni madhësi, simbol planimetrie ose pika aktive. Hapat dhe lartësia e ngritjes rrjedhin prej tyre. Nuk ka korrimanë as vrimë shkallësh: ato i takojnë një shkalle të zakonshme.

## Hap një OBJ

Hapni një skedar `.obj` si çdo skedar tjetër. Një OBJ nuk ka njësi, kështu që BimCraft lexon metra me Y lart, siç e shkruajnë shumicën e programeve. Çdo objekt ose grup bëhet një element rrjeti në një nivel të vetëm, dhe pastaj mund ta shikoni, matni, e prisni, e vendosni në një model dhe e ruani si IFC. Vijat, kurbat dhe sipërfaqet lihen jashtë, dhe rreshti i gjendjes e thotë këtë.

Një objekt që është saktësisht një prizëm i drejtë (një rrjet i mbyllur me dy skaje paralele, identike dhe anë të sheshta pingule me to: një soletë, një shtyllë, një bllok muri, një pllakë me vrima) ruhet në IFC si trupi i vet i nxjerrë të IFC-së, me konturin dhe thellësinë e tij, jo si listë trekëndëshash. Programet e tjera e lexojnë si trup të vërtetë, ai mbetet i vogël, dhe thellësia dhe kontura e tij mund të ndryshohen më vonë. Rreshti i gjendjes thotë sa objekte u mbajtën në këtë mënyrë. Çdo gjë që nuk është saktësisht prizëm (një formë e ngushtuar, një rrjet me një kulm të zhvendosur, një rrjet me hapësirë) mbetet si trekëndësha. Një skedar STEP lexohet në të njëjtën mënyrë.
