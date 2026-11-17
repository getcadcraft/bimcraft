---
title: Sahnani oʻyin dvigateliga yuborish
summary: Studio sahnani Unreal Engine loyihasiga yozib, har bir yuborishda uni sinxron saqlaydi; sizning tahrirlaringiz CadCraft hech qachon yozmaydigan qatlamda yashaydi. Uni ochadigan plagin hali chiqarilmagan.
keywords: unreal, unreal engine, oʻyin dvigateli, havola, yuborish, usd stsena, loyiha, jonli, cine camera, movie render queue
from: 154d55ef
---

CadCraft Studio da Dvigatellar roʻyxati Unreal Engine loyihasiga **havola** saqlashi mumkin. Faqat bir tomonga: CadCraft dan Unreal ga.

## Sahnani yuborish

1. Dvigatellar roʻyxatida Unreal yozuvini tanlang. Birinchi marta Studio loyihangiz jildini (`.uproject` fayli bilan) tanlashingizni soʻraydi; u buni eslab qoladi.
2. {{ui:Yuborish}} ni bosing. Studio loyiha ichida `CadCraft/<file name>/` ni yozadi: sahna USD fayl sifatida, sozlamalar fayli, yorugʻlik profillari va ikkita kichik qatlam fayli.
3. Modelni oʻzgartiring, saqlang va qayta yuboring. Faqat sahna va sozlamalar fayli almashtiriladi.

## Sizning tahrirlaringiz xavfsiz

Unreal ochadigan stsena kichik ildiz qatlam boʻlib, uning ostida ikkita qatlam bor: yuqorida **sizning** (`<name>.user.usda`, dastlab boʻsh, CadCraft uni hech qachon qayta yozmaydi) va pastda CadCraft ning sahnasi. Oʻz qatlamingizga saqlagan tahrirlaringiz sahna qayta yuborilganda ham qoladi. Unreal darajasiga joylashtirgan chiroqlar va boshqa aktyorlar stsenadan tashqarida, ularga ham tegilmaydi.

## Studio boʻlmasa

Brauzerda yoki Studio Unreal ni topmagan kompyuterda Dvigatellar roʻyxatida **Unreal loyiha jildi (.zip)** ni tanlang va {{ui:Render}} ni bosing. U xuddi shu jildni zip sifatida saqlaydi: uni loyihangizning `CadCraft` jildiga ochib joylashtiring. Birinchi saqlashda **Stsena fayllarini qoʻshish** ni yoqiq qoldiring; keyingi saqlashlar uchun oʻchiring, shunda zip faqat sahna va sozlamalar faylini oladi va sizning qatlamingiz hech qachon almashtirilmaydi.

:::note
Stsenani ochadigan, quyosh, chiroqlar, kameralar va ekspozitsiyani qoʻllaydigan, har bir yuborishni kuzatadigan va kamerani renderlaydigan Unreal plagini **hali chiqarilmagan** va Unreal da hali ishga tushirilmagan. U chiqarilguncha Yuborish fayllarni loyihaga joylashtiradi va ularni Unreal ning oʻz USD vositalari ochishi mumkin. Birinchi tizim Windows; macOS keyin keladi.
:::
