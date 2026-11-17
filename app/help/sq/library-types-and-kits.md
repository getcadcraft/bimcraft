---
title: Simbole, tipe dhe asete, shabllone projektesh dhe komplete të shpejta
summary: Biblioteka ka tre lloje artikujsh (Simbole, Tipe, Asete). Shto një Tip te projekti yt, nis nga një shabllon projekti i ndarë, shto një komplet të shpejtë, dhe ndaj të tuajat përmes faqes së ngarkimit të Bibliotekës.
keywords: bibliotekë, simbole, tipe, asete, tip, tip muri, tip dyshemeje, tip çatie, tip tavani, shabllon projekti, shabllon, komplet i shpejtë, komplet, ndaj, ngarko, version, regjistri i ndryshimeve, LOD, klasifikim, licencë, shënime nga praktika
from: e13b0e67
---

## Çfarë do të bëni

Gjeni atë që ju duhet në Bibliotekë sipas asaj që është, shtoni një Tip te projekti që po vizatoni, nisni një projekt të ri nga një shabllon që dikush e ka ndarë, dhe ndani shabllonet, tipet dhe kompletet tuaja.

## Tre llojet e artikujve të Bibliotekës

- **Simbolet** janë konventa vizatimi: vetëm 2D, të vizatuara në madhësinë e shënimit, të grupuara sipas disiplinës.
- **Tipet** tregojnë nga çfarë përbëhet një element: shtresat e tij me trashësinë e tyre reale, nivelin e tij të zhvillimit (LOD) dhe kodin e klasifikimit. Një Tip shtohet te projekti, nuk vizatohet.
- **Asetet** janë objekte fizike si dyer, dritare, mobilje, armatura dhe pajisje, me pamje planimetrike dhe trup 3D në madhësi reale.

Te skeda {{ui:Bibliotekë}}, zgjidhni {{ui:Bibliotekë}} dhe përdorni **Lloji i artikullit** për të shfaqur Të gjitha, Simbolet, Tipet ose Asetet.

## Shtoni një Tip te projekti juaj

1. Zgjidhni **Tipet** nën Lloji i artikullit dhe hapeni një.
2. Kontrolloni ndërtimin, LOD-in dhe klasifikimin e tij nën figurë, pastaj zgjidhni {{ui:Shto te ky projekt}}.
3. Shtohet si tip muri, dysheme, çati ose tavani me të cilin mund të vizatoni. Nëse një tip me atë emër ekziston tashmë, i riu shtohet si kopje dhe i juaji mbetet ashtu siç ishte. Një Zhbëj e heq.

## Shabllonet e projektit dhe kompletet e shpejta

Zgjidhni {{ui:Komplete}} për të parë çfarë kanë ndarë njerëzit.

- **Një shabllon projekti** është një skedar IFC me nivele, rrjete, tipe dhe cilësime. {{ui:Ruaj te shabllonet e mia}} e vendos në Ndërtesë e re nën Nis nga.
- **Një komplet i shpejtë** është një listë artikujsh bibliotekë. {{ui:Shfaq artikujt e kompletit}} i liston si karta që mund t'i vendosni.
- Çdo komplet ka një version dhe një regjistër ndryshimesh, më i riu i pari. Një version që fillon me 0 është për diskutim; 1.0.0 është vetëm për atë që pronari i linjës e ka miratuar.

## Ndajeni tuajin

- **Një shabllon projekti:** {{ui:Ruaj si shabllon}}, shëno {{ui:Bëj gjithashtu një skedar për ndarje në Bibliotekë}}, shto çfarë mban dhe një version. Merrni një skedar `.json`.
- **Një komplet i shpejtë:** te {{ui:Komplete}}, zgjidhni {{ui:Bëj një komplet të shpejtë nga ky projekt}}. Lista përfshin artikujt e Bibliotekës që përdor projekti.
- **Një Tip:** te {{ui:Paketat e tipeve}}, shëno një tip dhe zgjidh {{ui:Ruaj si artikull të Bibliotekës…}}.

Ngarkoni skedarin në faqen e ngarkimit të Bibliotekës. Ai kalon të njëjtën shqyrtim si çdo artikull tjetër, dhe zgjidhni licencën atje: çdo artikull shpall licencën e vet. Kërkohen për artikujt LOD-i, një klasë IFC dhe një kod klasifikimi (një kod, jo vetëm një emër).

## Shënime nga praktika

Në faqen e çdo artikulli të Bibliotekës, anëtarët e hyrë mund të shtojnë një shënim: të përdorur në një projekt real, të provuar në një projekt shembull, ose gjetur një problem. Thoni çfarë lloj projekti me disa fjalë dhe mos përfshini emra klientësh. Një shënim është publik dhe nuk është një vlerësim: nuk e ndryshon artikullin.

## Të mirë për t'u ditur

- Asgjë nuk dërgohet nga aplikacioni. Skedarët bëhen në kompjuterin tuaj dhe i ngarkoni vetë.
- Një komplet i bërë nga një shabllon mban tekstin IFC saktësisht siç u ruajt. Kontrolloni për çdo gjë private përpara se ta ngarkoni.
- CadCraft shfaq Simbolet dhe Asetet në skedën e Bibliotekës; Tipet dhe shabllonet janë për projektet BimCraft.
