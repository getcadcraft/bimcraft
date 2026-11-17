---
title: Onlayn va oflayn
summary: BimCraft saytdan nimani yuklashi, Oflayn uchun saqlash IFC modellar va DWG chizmalarni ulanishsiz qanday ochishi va ochadigan hech bir faylingiz nega hech qachon yuklanmasligi.
keywords: oflayn, onlayn, internet, ulanish, tarmoq yoʻq, samolyot, obyektga tashrif, oflayn uchun saqlash, oflayn tayyor, yuklash, maxfiylik, wasm, webassembly, IFC dvigateli, dwg, bulut
from: 39e5c7eb
---

BimCraft fayllaringizni brauzer yorligʻida oʻqiydi. Ochish, koʻrish, tahrirlash va saqlash hech qachon fayllaringizni biror joyga yubormaydi, onlayn yoki oflaynda. [Oflayn ishlash](common:offline) barcha ilovalarda oflayn nusxalar qanday ishlashini tushuntiradi; bu sahifa BimCraft ga xos narsalarni yoritadi.

## Saytdan nima yuklanadi

| Qism | Oflayn nusxasiz qachon yuklanadi | Hajmi |
|---|---|---|
| Ilovaning oʻzi, 3D koʻruvchi va IFC dvigatel kodi bilan | BimCraft ochilganda | Bir necha megabayt |
| IFC dvigatelining WebAssembly qismi | Yorliqda ochiladigan birinchi IFC fayl: "IFC dvigatelini ishga tushirish…" | Taxminan 1.6 MB |

DWG va DXF chizmalar, loyiha va oila fayllari hamda jildlar qoʻshimcha narsa talab qilmaydi: ularning oʻqish dasturlari ilovaning bir qismi.

## BimCraft ni oflayn ishlatish uchun saqlash

1. BimCraft ni onlayn holatda oching.
2. Yuqoridagi ilova panelida {{ui:Oflayn uchun saqlash}} tugmasini bosing.
3. Tugma hisoblashini kuzating, masalan: "212 tadan 40 tasi saqlanmoqda". BimCraft nusxasi taxminan 11 MB, chunki unga IFC dvigateli kiradi.
4. {{ui:Oflayn tayyor}} chiqquncha kuting.

{{ui:Oflayn tayyor}} yozilgandan keyin IFC modellar, DWG va DXF chizmalar, loyiha fayllari, jildlar va bu yordam ulanishsiz ochiladi. Oʻqish dasturlarini "isitish" uchun avval IFC yoki DWG ochishingiz shart emas.

Nusxani yangilash yoki oʻchirish uchun {{ui:Oflayn tayyor}} ni bosing va {{ui:Qayta saqlash (eng yangi versiyani olish)}} yoki {{ui:Oflayn nusxani oʻchirish}} ni tanlang.

## Tugma nimani bildiradi

| Tugma | Maʼnosi |
|---|---|
| {{ui:Oflayn uchun saqlash}} | Bu brauzerda hali oflayn nusxa yoʻq. Saqlash uchun bosing |
| "*n* dan *m* saqlanmoqda" | Saqlanmoqda; tugallanguncha yorliqni ochiq saqlang |
| {{ui:Oflayn tayyor}} | Saqlangan. Qachon ekanini koʻrish uchun ustiga olib boring; menyu uchun bosing |
| {{ui:Saqlab boʻlmadi}} | Ayrim fayllar yuklanmadi. Ulanishni tekshiring va qayta urinish uchun bosing. Oxirgi yaxshi nusxa boʻlsa, u saqlanadi |
| {{ui:Oflayn rejim mavjud emas}} | Bu oyna oflayn nusxa saqlay olmaydi (shaxsiy oyna yoki boshqariladigan kompyuter). Qarang: [Oflayn ishlash](common:offline) |

:::offline
Siz oflaynsiz.

- Agar tugma {{ui:Oflayn tayyor}} desa, har qanday fayl odatdagidek ochiladi.
- Aks holda faqat bu yorliq allaqachon yuklagan narsalar ishlaydi: shu yorliqda hech qachon yuklanmagan oʻqish dasturi ishga tushmaydi va bu turdagi faylni ochish holat satrida brauzer xatosini koʻrsatadi. Ulanish qaytguncha yorliqni qayta yuklamang.
:::

## Ulanish talab qilmaydigan narsalar

BimCraft yorliqda ochilgach, bular saqlangan nusxa boʻlmasa ham oflaynda ishlaydi:

- Loyiha va oila fayllarini oʻqish hamda jildlarni tekshirish.
- Allaqachon ochiq modelda elementlarni tanlash, xossalarni oʻqish va IFC qiymatlarini tahrirlash.
- {{ui:IFC sifatida saqlash}} va {{ui:CSV yuklab olish}}: ikkalasi ham yorliqda amalga oshiriladigan yuklab olishlar.

## Hali mavjud emas

- **Bulutga saqlash.** Fayllar faqat kompyuteringizga saqlanadi.

Qarang: [Fayllaringiz qayerga boradi](common:your-files).
