---
title: Me çfarë renderon kompjuteri yt
summary: Cilësimet › Renderimi tregon grafikën, bërthamat e procesorit dhe memorien që ky shfletues e lejon aplikacionin të përdorë, dhe nivelin që vendos ku fillon renderimi.
keywords: kompjuteri yt, kartë grafike, gpu, webgpu, webgl, procesor, cpu, bërthama, thread, memorie, ram, memorie e përbashkët, izolim, nivel, shpejtësi, ngadalë, shpejtësia e renderimit, laptop
from: 360f2375
---

Hap **Cilësimet** ({{key:Mod+,}}), qëndro në skedën e vetë aplikacionit dhe lëviz te **Renderimi**. **Kompjuteri juaj** liston çfarë e lejon ky shfletues aplikacionin të përdorë për renderim. Asgjë prej saj nuk del nga kompjuteri yt.

| Rreshti | Çfarë do të thotë |
|---|---|
| {{ui:Graphics}} | Kartën grafike që raporton shfletuesi. "WebGPU" do të thotë se mund ta bëjë punën e renderimit; "WebGL 2 only" do të thotë se nuk ka WebGPU: pamja e drejtpërdrejtë dhe imazhet me cilësi të lartë përdorin kartën grafike përmes WebGL 2 (imazhet me rrugën e vjetër WebGL, pa veçoritë që kërkojnë WebGPU); një zëvendësues softuerik do të thotë se gjithçka punon në procesor |
| {{ui:Processor}} | Sa bërthama procesori raporton shfletuesi |
| {{ui:Memory}} | Afërsisht sa memorie ka kompjuteri, kur e thotë shfletuesi. Disa shfletues nuk e thonë |
| {{ui:Shared memory}} | Nëse faqja mund të ndajë memorien mes punëtorëve të saj. Kur është e ndezur, çdo bërthamë mund të punojë mbi një kopje të vetme të skenës; kur është e fikur, secila ka nevojë për kopjen e vet, kështu që një skenë e madhe përshtatet në më pak bërthama njëkohësisht |
| {{ui:Fast processor code}} | Nëse shfletuesi ekzekuton kodin më të shpejtë WebAssembly. Pa të përdoret një alternativë më e ngadaltë |
| {{ui:Level}} | {{ui:Graphics card, high}}, {{ui:Graphics card, basic}} ose {{ui:Processor only}}, me arsyen nën të |

## Niveli

Niveli është vendi ku fillon renderimi, kështu që një laptop me një çip grafik të integruar ose pa kartë grafike fare mbetet i shpejtë. Një çip grafik i integruar ose celular, ose 4 GB memorie ose më pak, nuk merr kurrë {{ui:Graphics card, high}}.

:::note
Shfletuesit ndryshojnë. I njëjti kompjuter mund të shfaqë WebGPU në një shfletues dhe "WebGL 2 only" në një tjetër. Në Linux shumica e shfletuesve ende nuk kanë WebGPU.
:::
