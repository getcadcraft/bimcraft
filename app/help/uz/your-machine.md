---
title: Sizning kompyuteringizda render qilish imkoniyatlari
summary: Sozlamalar › Render grafikani, protsessor yadrolarini va brauzer ilovaga ishlatishga ruxsat bergan xotirani, shuningdek render qayerdan boshlanishini belgilaydigan darajani koʻrsatadi.
keywords: sizning kompyuteringiz, grafika kartasi, gpu, webgpu, webgl, protsessor, cpu, yadrolar, oqimlar, xotira, ram, umumiy xotira, izolyatsiya, daraja, tezlik, sekin, render tezligi, noutbuk
from: 360f2375
---

{{ui:Sozlamalar}} ({{key:Mod+,}}) ni oching, ilovaning oʻz yorligʻida qoling va {{ui:Render}} qismiga aylantiring. {{ui:Sizning kompyuteringiz}} brauzer ilova uchun render qilishga nimalarga ruxsat berganini roʻyxatlaydi. Bu yerdagi hech narsa kompyuteringizdan chiqmaydi.

| Qator | Bu nimani bildiradi |
|---|---|
| {{ui:Grafika}} | Brauzer bildirgan grafika kartasi. "WebGPU" uning render ishini bajara olishini bildiradi; "faqat WebGL 2" WebGPU yoʻqligini bildiradi: jonli koʻrinish va yuqori sifatli rasmlar WebGL 2 orqali grafika kartasidan foydalanadi (eski WebGL yoʻli bilan rasmlar, WebGPU talab qiladigan qoʻshimchalarsiz); dasturiy taqlid esa hamma narsa protsessorda ishlashini bildiradi |
| {{ui:Protsessor}} | Brauzer bildirgan protsessor yadrolari soni |
| {{ui:Xotira}} | Kompyuterda taxminan qancha xotira borligi, brauzer aytganda. Ayrim brauzerlar buni bildirmaydi |
| {{ui:Umumiy xotira}} | Sahifa ishchilari xotirani oʻzaro ulashishi mumkinmi. Yoqilgan boʻlsa, har bir yadro bitta sahna nusxasi ustida ishlashi mumkin; oʻchirilgan boʻlsa, har biriga oʻz nusxasi kerak, shuning uchun katta sahna bir vaqtda kamroq yadroga sigʻadi |
| {{ui:Tez protsessor kodi}} | Brauzer tezroq WebAssembly kodini ishlatadimi. Usiz sekinroq zaxira kod ishlatiladi |
| {{ui:Sath}} | {{ui:Grafika kartasi, yuqori}}, {{ui:Grafika kartasi, oddiy}} yoki {{ui:Faqat protsessor}}, uning sababi ostida |

## Daraja

Daraja render qayerdan boshlanishini belgilaydi, shunda integrallashgan grafika chipi yoki grafika kartasi umuman boʻlmagan noutbuk ham tez javob beradi. Integrallashgan yoki telefon grafika chipi, yoki 4 GB yoki undan kam xotira hech qachon {{ui:Grafika kartasi, yuqori}} darajasini olmaydi.

:::note
Brauzerlar farq qiladi. Bir xil kompyuter bir brauzerda WebGPU, boshqasida "faqat WebGL 2" koʻrsatishi mumkin. Linuxda aksar brauzerlarda hali WebGPU yoʻq.
:::
