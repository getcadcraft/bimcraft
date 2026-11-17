---
title: Zgjidh cili program vizaton imazhin
summary: Zgjedhja e Motorit te dialogu Renderim: dy motorët tanë, programet e tjera në CadCraft Studio dhe çfarë bën uebi në vend të tyre.
keywords: renderim, motor, renderues, motor renderimi, shtojcë, plugin, studio, program i jashtëm, vizatuar nga, radhë, motor shtojce
from: 44a1ef5e
---

{{ui:Renderim}} ka një zgjedhje **Motor** mbi Formën. Dy motorët tanë janë gjithmonë aty dhe punojnë kudo; shtojcat mund të shtojnë të tjerë, dhe në CadCraft Studio lista përmban edhe programet që e marrin skenën përsipër.

| Motor | Çfarë bën | Ku |
|---|---|---|
| I integruar: Me shpejtësi | Imazhi i shpejtë: dritë ditore, hije të buta, pamje xhami dhe metali, brenda sekondave | Shfletuesi dhe Studio |
| I integruar: Gjurmim shtegu | Drita që kërcen mes sipërfaqeve, në kartën tënde grafike ose në procesor; radha e renderimit dhe kompjuterët e tjerë në rrjetin tënd | Shfletuesi dhe Studio |
| Motori i një shtojce | Vizaton dhe e kthen imazhin: shih [Vizato imazhin me një program tjetër](topic:render-other-program) | Shfletuesi (motor i shkruar në JavaScript) ose Studio (motor që ekzekuton një program) |
| Një program që e merr skenën përsipër | Studio e vendos skenën në dosjen e vet dhe e mban të sinkronizuar | Studio |
| Hap në … | Ruan skenën dhe e hap në një program; asgjë nuk kthehet: shih [Hap skenën në një program tjetër](topic:render-open-in) | Uebi ruan skedarin |

## Si sillet zgjedhja

- Zgjedhja e Me shpejtësi ose e Gjurmimit të shtegut ndryshon edhe Formën, dhe anasjelltas. Asgjë tjetër në dialog nuk ndryshon për ata që nuk përdorin asnjë motor tjetër.
- Një motor që nuk është i disponueshëm mbetet në listë me arsyen ("nuk u gjet", "kërkon një version më të ri"); nuk mund ta zgjedhësh. Në shfletues një motor që punon vetëm në Studio shfaq "ruan një skedar": {{ui:Renderim}} atëherë e ruan skenën dhe cilësimet e saj në një skedar që e merr me vete te ai program.
- Zgjedhja ruhet me cilësimet e renderimit të skedarit, dhe motori që zgjodhe të fundit është motori fillestar për skedarët që nuk kanë zgjedhje të vetën.
- Një imazh nga një program tjetër thotë cili program e vizatoi dhe versionin e tij, si në dialog ashtu edhe në radhën e renderimit. Premtimet e faqes [Renderimi i një imazhi të modelit](topic:render) mbulojnë **motorët tanë** vetëm: një program tjetër ndriçon, tonon dhe mostron në mënyrën e vet, kështu që dy imazhe të së njëjtës skenë janë të ngjashme në kamerë, diell, llamba dhe ekspozim, por jo piksel për piksel.

## Çfarë i jepet çdo motori

Skena i shkon një programi tjetër si **paketë**: modeli si skedar USD (i njëjti skedar që shkruan [Ruaj si USD](topic:usd)), dhe një skedar cilësimesh që mban atë që një importues USD nuk mund të besohet ta trajtojë: vlerat e sakta të materialeve, llambat që janë të ndezura me fuqinë dhe profilet e tyre të dritës, dielli, qielli, ekspozimi dhe kamera ashtu si e vizaton dialogu. Asgjë nuk ngarkohet askund.

## Radha e renderimit

Një imazh për një program tjetër mund të presë në [radhën e renderimit](topic:render#the-render-queue) si ai ynë; puna e tij mban mend për cilin motor është.
