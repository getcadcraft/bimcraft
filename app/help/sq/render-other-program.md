---
title: Vizato imazhin me një program tjetër
summary: Renderuesi ynë i vetë me gjurmim shtegu vizaton imazhin e Renderimit; një program tjetër mund ta vizatojë vetëm nëpërmjet një shtojce motori renderimi në CadCraft Studio. Çfarë bartet dhe pse disa programe nuk ofrohen kurrë.
keywords: renderim, motor, program i jashtëm, motor shtojce, studio, sfond, radhë, usd, gltf, vizatuar nga, blender, gpl
from: 652b413c
---

Imazhi në {{ui:Renderim}} vizatohet nga **motorët tanë**: Me shpejtësi dhe Gjurmim shtegu, në shfletues dhe në CadCraft Studio. Një program tjetër mund ta vizatojë vetëm kur e sjell një **shtojcë motori renderimi**: shih [Shto një motor renderimi me një shtojcë](topic:render-engine-addons). Për ta çuar skenën në një program tjetër dhe për të vazhduar punën atje, përdor [Hap skenën në një program tjetër](topic:render-open-in) ose [Dërgo skenën te një motor lojërash](topic:render-unreal).

## Vizato një imazh me motorin e një shtojce

1. Ndiz shtojcën te Cilësimet › Shtojcat. Motori i saj shfaqet në listën e motorëve të {{ui:Renderim}}.
2. Zgjidhe. Cilësimet e veta shfaqen nën listën e motorëve.
3. Kliko {{ui:Renderim}}. Në Studio, hera e parë që një shtojcë ekzekuton një program, Studio të pyet në dialogun e vet. Progresi shfaqet ndërsa vizaton; {{ui:Ndalo}} e ndal. Imazhi shfaqet i shënuar me motorin që e vizatoi.

Një motor i shkruar në JavaScript punon edhe në shfletues. Një motor që ekzekuton një program në këtë kompjuter punon vetëm në Studio; në shfletues shfaqet si skedar për t'u ruajtur.

## Çfarë bartet

Motori merr një **paketë**: modelin si skedar USD (dhe një skedar glTF kur e kërkon), dhe një skedar cilësimesh me vlerat e sakta të materialeve, diellin dhe qiellin, çdo llambë që është e ndezur me fuqinë dhe profilin e saj të dritës, kamerën dhe ekspozimin. Çdo program ndriçon, tonon dhe mostron në mënyrën e vet, kështu që imazhet janë të ngjashme në kamerë, diell, llamba dhe ekspozim, por jo piksel për piksel.

## Programet që CadCraft nuk i nis kurrë

CadCraft nuk nis kurrë një program me licencën GNU GPL, dhe nuk e liston kurrë si motor ose si objektiv të Hap në. Blender është një nga ata, prandaj nuk është në listën e motorëve. Një skedar USD ose glTF i ruajtur nga {{ui:Renderim}} hapet akoma në të, si në çdo program që lexon ato skedarë.

:::note
Kamerat panoramë dhe stereo dhe një imazh qielli (përdoren ngjyrat e qiellit) nuk bartën te një program tjetër. Asgjë e bërë në një program tjetër nuk kthehet te modeli.
:::
