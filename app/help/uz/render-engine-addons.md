---
title: Render dvigatelini qoʻshimcha orqali qoʻshish
summary: Qoʻshimcha Render muloqot oynasining Dvigatellar roʻyxatiga nimani qoʻsha olishi, dastur ishga tushirish uchun kerak boʻlgan ruxsat va Studio nimani tekshirishi hamda soʻrashi.
keywords: qoʻshimcha, addon, dvigatel, render dvigateli, ishlab chiquvchi, engine.run, ruxsat, dastur, skript, imzolangan, studio, api
from: 06295376
---

Qoʻshimcha (Sozlamalar › Qoʻshimchalar) {{ui:Render}} ning Dvigatellar roʻyxatiga dvigatel qoʻshishi mumkin. Qoʻshimcha mualliflari uchun toʻliq matn qoʻshimcha spetsifikatsiyasining 16-boʻlimida; qisqacha:

- Qoʻshimcha oʻz prefiksi bilan boshlanadigan identifikator, nom, ixtiyoriy sozlamalar va **yo** dasturni ishga tushirish **yoki** rasmni chizadigan JavaScript funksiyasini roʻyxatdan oʻtkazadi.
- Dastur ishga tushiradigan dvigatelga **`engine.run`** ruxsati kerak; u oʻrnatishdan oldin va Sozlamalarda koʻrsatiladi. U faqat Studio da ishlaydi; brauzerda u saqlanadigan fayl sifatida koʻrinadi.
- Qoʻshimcha dasturni nomlaydi (oddiy fayl nomi, hech qachon shell emas), **imzolangan qoʻshimcha ichidagi** skriptni va oʻrin egalari hamda oddiy soʻzlardan tuzilgan argumentlarni. Studio dasturni topadi yoki bir marta koʻrsatishingizni soʻraydi.
- Qoʻshimcha birinchi marta dasturni ishga tushirganda, **Studio buni oʻz muloqot oynasida soʻraydi**: qaysi qoʻshimcha, qaysi dastur va skript dastur qila oladigan hamma narsani qila olishi. Faqat ishonchli qoʻshimchaga ruxsat bering. Javobingiz shu qoʻshimcha va dastur uchun eslab qolinadi.
- Paket (sahna USD va sozlamalar fayli sifatida, qoʻshimcha soʻrasa glTF fayl bilan) hamda qoʻshimcha skripti yangi vaqtinchalik jildga joylashtiriladi, dastur oʻsha yerda ishlaydi va rasm qoʻshimcha dvigatel nomi bilan belgilangan holda qaytadi.

:::note
Qoʻshimchalar render dvigatellarini faqat qoʻshimcha API 1.4 dan boshlab qoʻsha oladi. Ochiq manbali buyruq qatori renderi uchun ishlaydigan misol uning oʻz omborida; u hali oʻsha renderida ishga tushirilmagan.
:::
