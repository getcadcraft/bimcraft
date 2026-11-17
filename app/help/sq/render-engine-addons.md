---
title: Shto një motor renderimi me një shtojcë
summary: Çfarë mund të shtojë një shtojcë te lista e motorëve të dialogut Renderim, leja që i duhet për të ekzekutuar një program, dhe çfarë kontrollon dhe pyet Studio.
keywords: shtojcë, addon, motor, motor renderimi, zhvillues, engine.run, leje, program, skriptim, nënshkruar, studio, api
from: 06295376
---

Një shtojcë (Cilësimet › Shtojcat) mund të shtojë një motor te lista e motorëve të {{ui:Renderim}}. Teksti i plotë për autorët e shtojcave është seksioni 16 i specifikimit të shtojcës; shkurt:

- Shtojca regjistron një motor me një id që fillon me emrin e vet, një emër, cilësime opsionale dhe **ose** një program për ta ekzekutuar **ose** një funksion në JavaScript që vizaton imazhin.
- Një motor që ekzekuton një program kërkon lejen **`engine.run`**, e shfaqur para instalimit dhe te Cilësimet. Ekzekutohet vetëm në Studio; në shfletues shfaqet si skedar për t'u ruajtur.
- Shtojca emëron programin (vetëm një emër i thjeshtë skedari, kurrë një shell), një skript që ndodhet **brenda shtojcës së nënshkruar**, dhe argumente të përbëra nga vendmbajtës dhe fjalë të thjeshta. Studio e gjen programin ose të kërkon një herë ta tregosh vendndodhjen.
- Hera e parë që një shtojcë ekzekuton një program, **Studio të pyet në dialogun e vet**: cila shtojcë, cili program, dhe që një skript mund të bëjë çdo gjë që mund të bëjë programi. Lejoje vetëm një shtojcë në të cilën ke besim. Përgjigja jote mbahet mend për atë shtojcë dhe atë program.
- Paketa (skena si USD dhe një skedar cilësimesh, me skedarin glTF kur shtojca e kërkon) dhe skripti i shtojcës shkojnë në një dosje të re të përkohshme, programi ekzekutohet aty, dhe imazhi kthehet i shënuar me emrin e motorit të shtojcës.

:::note
Shtojcat mund të shtojnë motorë renderimi vetëm nga API e shtojcave 1.4. Një shembull i punuar për një renderues me rresht komandash me burim të hapur është në depon e vet; nuk është ekzekutuar ende në atë renderues.
:::
