---
title: Dërgo skenën te një motor lojërash
summary: Studio mund ta shkruajë skenën në një projekt Unreal Engine dhe ta mbajë të sinkronizuar në çdo dërgim; ndryshimet e tua jetojnë në një shtresë që CadCraft kurrë nuk e shkruan. Shtojca që e hap nuk është publikuar ende.
keywords: unreal, unreal engine, motor lojërash, lidhje, dërgo, skedar USD, projekt, drejtpërdrejt, kamerë cine, radhë renderimi filmi
from: 154d55ef
---

Në CadCraft Studio lista e motorëve mund të mbajë një **lidhje** me një projekt Unreal Engine. Vetëm në një drejtim: nga CadCraft te Unreal.

## Dërgo skenën

1. Zgjidh hyrjen Unreal në listën e motorëve. Hera e parë, Studio të kërkon të zgjedhësh dosjen e projektit tënd (ajo me skedarin `.uproject`); e mban mend.
2. Kliko {{ui:Dërgo}}. Studio shkruan `CadCraft/<emri i skedarit>/` brenda projektit: skenën si skedar USD, skedarin e cilësimeve, profilet e dritës dhe dy skedarë të vegjël shtresash.
3. Ndrysho modelin, ruaje dhe dërgo përsëri. Vetëm skena dhe skedari i cilësimeve zëvendësohen.

## Ndryshimet e tua janë të sigurta

Skena që hap Unreal është një shtresë e vogël rrënjë e krijuar një herë, me dy shtresa poshtë saj: **jotja** lart (`<name>.user.usda`, bosh në fillim, kurrë e rishkruar nga CadCraft) dhe ajo e skenës së CadCraft nën të. Ndryshimet që ruan në shtresën tënde mbeten kur skena dërgohet përsëri. Dritat dhe aktorët e tjerë që vendos në nivelin e Unreal janë jashtë skenës, dhe as ata nuk preken.

## Pa Studio

Në shfletues, ose në një kompjuter ku Studio nuk gjen Unreal, zgjidh **Dosja e projektit Unreal (.zip)** në listën e motorëve dhe kliko {{ui:Renderim}}. Ruan të njëjtën dosje si zip: nxirre nga zip-i në dosjen `CadCraft` të projektit tënd. Lëre **Përfshi skedarët e skenës** të ndezur herën e parë; fike për ruajtjet e mëvonshme, që zip-i të mbajë vetëm skenën dhe skedarin e cilësimeve, dhe shtresa jote të mos zëvendësohet kurrë.

:::note
Shtojca Unreal që hap skenën, zbaton diellin, llambat, kamerat dhe ekspozimin, ndjek çdo dërgim dhe renderon një kamerë **nuk është publikuar ende** dhe nuk është ekzekutuar në Unreal. Deri atëherë, Dërgo i vendos skedarët në projekt dhe mjetet USD të vetë Unreal mund t'i hapin. Windows është sistemi i parë; macOS e ndjek.
:::
