---
title: Hap skenën në një program tjetër
summary: Ruaj skenën si skedar USD ose glTF për çdo program që i lexon, ose hape nga Studio në një program në këtë kompjuter.
keywords: hap në, usd, gltf, glb, eksport, program renderimi, archviz, studio, usdview, dërgo, dorëzim, paketë, dosje unreal
from: 0a6559ee
---

Zgjidh një hyrje **Hap në** nga lista e motorëve të {{ui:Renderim}} për ta çuar skenën në një program tjetër. Asgjë nuk kthehet te modeli.

## Një skedar për çdo program

- **Skedari USD** ruan skenën si `.usdc` (ose `.usdz` kur modeli mban imazhe): [i njëjti skedar si Ruaj si USD](topic:usd), me materialet, llambat dhe kamerat. Ruan instancimin dhe vlerat e sakta të materialeve. Shumica e renderuesve, motorëve të lojërave dhe shikuesve lexojnë USD.
- **Skedari glTF (.glb)** ruan skedarin glTF 2.0, më të lehtë, me materialet, teksturat dhe llambat; shih [Dërgo modelin te një program renderimi](topic:model-for-rendering) për atë që mban dhe atë që lë jashtë.

- **Dosja e projektit Unreal (.zip)** ruan dosjen që shkruan [Dërgo skenën te një motor lojërash](topic:render-unreal), për një projekt në çdo kompjuter.

Të tre punojnë në shfletues dhe në Studio.

## Në Studio: hape në një program

Studio liston programet që gjen në këtë kompjuter që mund ta hapin skenën: usdview nëse është në rrugën tënde të kërkimit, dhe programi i vetë kompjuterit për llojin e skedarit. Zgjidh një, zgjidh USD ose glTF aty ku lexon të dyja, dhe kliko {{ui:Renderim}}. Studio e shkruan paketën në një dosje të re nën Dokumentet (`CadCraft hand-off`; asgjë nuk mbishkruhet, çdo dërgim merr dosjen e vet), dhe e nis programin mbi të, pastaj thotë ku janë skedarët.

| Program | Lexon më mirë |
|---|---|
| usdview | USD |
| Programi i vetë kompjuterit | Çfarëdo që ka kompjuteri për llojin e skedarit |

Studio nis vetëm programet nga kjo listë e fiksuar; nuk ekzekuton asgjë që faqja kërkon me emër, dhe nuk nis kurrë një program me licencën GNU GPL (shih [Vizato imazhin me një program tjetër](topic:render-other-program#programs-cadcraft-never-runs)). Çdo program që lexon USD ose glTF e hap skedarin nga **Një skedar për çdo program** më lart.

:::note
Twinmotion, Enscape dhe programet e tjera të vizualizimit nuk janë në listë: CadCraft nuk është testuar me to dhe nuk pretendon asgjë për ta. Një skedar glTF ose USD nga këtu është rruga hyrëse; shih shënimet për [renderuesit shtojcë](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::
