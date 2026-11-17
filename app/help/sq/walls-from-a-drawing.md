---
title: Mure nga një vizatim i gjurmuar
summary: Kthe një plan DWG ose DXF në mure, dyer dhe dritare në një nivel, dhe mbaje vizatimin nën plan si referencë.
keywords: dwg, dxf, gjurmim, gjurmuar, importo plan, konverto, nga cad në bim, 2d në 3d, mure nga vija, shtresa, blloqe, dyer nga blloqet, nënshtresë, vizatim referimi, sfond, xref, aplikacion vizatimi
from: 3bf213f1
---

## Çfarë do të bësh

Përdor një plan që ti (ose dikush tjetër) e ke vizatuar në aplikacionin e vizatimit si fillim të modelit: vijat e tij të mureve bëhen mure, blloqet e dyerve dhe dritareve bëhen dyer dhe dritare.

## Hapat

1. Ndiz {{ui:Vizato}} dhe zgjidh nivelin që tregon plani te lista e niveleve të planit.
2. Zgjidh {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}}, pastaj {{ui:Zgjidh një vizatim…}} dhe zgjidh DWG ose DXF.
3. Në dialog:
   - **Njësitë e vizatimit** vijnë nga vizatimi; zgjidh të tjera nëse janë të gabuara (një plan i vizatuar në këmbë që lexohet si inç është dymbëdhjetë herë më i vogël).
   - **Shtresat me muret**: shëno shtresat ku janë vijat e mureve. Shtresat emrat e të cilave thonë "wall" (mur) janë shënuar për ty.
   - **Vijat janë**: **të dy faqet e çdo muri** (mënyra e zakonshme e vizatimit të planeve: çdo çift vijash paralele deri 600 mm larg njëra-tjetrës bëhet një mur aq i trashë sa hapësira), **boshtet qendrore të mureve**, ose **një faqe** me murin në të majtë ose në të djathtë. Me boshte qendrore ose një faqe, tipi i murit cakton trashësinë.
   - **Tipi i murit** dhe **Lartësia e murit**, si për veglën {{ui:Mur}}.
   - **Blloqet**: zgjidh një tip dyeje ose dritareje për çdo bllok që është derë ose dritare, ose lëre jashtë. Blloqet emrat e të cilëve thonë "door" ose "window" zgjidhen për ty. Secili vendoset në murin ku ndodhet, aq i gjerë sa blloku përgjatë murit; një derë hapet nga ana ku vizatohet lëkundja e saj.
   - **Ku shkon**: në koordinatat e vet të vizatimit, ose me qoshen e tij të poshtme majtas në origjinën e planit.
   - **Mbaje vizatimin nën planin e këtij niveli**: lëre të shënuar që ta shohësh vizatimin si vija të holla nën atë që bën.
4. Vija nën zgjedhjet thotë sa mure, dyer dhe dritare do të bëjë. Kliko {{ui:Krijoji ato}}.

## Çfarë duhet të shohësh

- Muret, dyert dhe dritaret në nivel, të bashkuara aty ku takohen, me dhomat që mbyllin; i gjithë është një hap, kështu që {{key:Mod+Z}} e kthen mbrapsht.
- Vizatimi si vija të holla nën plan. {{ui:Ndërtimi}} › {{ui:Nga një vizatim…}} liston vizatimet e mbajtura në nivel, secili me {{ui:Hiq}}; heqja e një prej tyre lë muret.
- Në skedarin IFC, vizatimi i mbajtur është një shënim në nivel (vijat e tij), kështu që edhe programet e tjera BIM e shfaqin.

:::note
Një PDF ose një skanim funksionon gjithashtu: shih [Mure nga një grup planesh](topic:walls-from-plans). Harqet lihen jashtë (BimCraft vizaton mure të drejta), dhe kështu janë edhe vijat brenda blloqeve. Vijat pa çift në "të dy faqet" numërohen në dialog dhe lihen jashtë: vizato ato mure me veglën {{ui:Mur}}, ose rregulloji me {{ui:Modifiko}} › {{ui:Pritë / zgjat}} (shih [Pritë, zgjat dhe bashko muret](topic:trim-extend-walls)).
:::

:::tip
Gjurmuar mbi një skanim në aplikacionin e vizatimit? Hap edhe skanimin këtu dhe kontrollo muret me të: shih [Model nga një skanim](topic:model-from-a-scan).
:::
