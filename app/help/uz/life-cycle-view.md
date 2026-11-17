---
title: Ellik yil davomida nima eskirishini koʻring
summary: Modeldagi derazalar, eshiklar, pardozlar va tom, ularning xizmat muddati, har bir narsa almashtiriladigan yillar hamda birlik narxini kiritganingizda yil boʻyicha xarajat va uning joriy qiymati.
keywords: hayot sikli, lifecycle, xizmat muddati, almashtirish, texnik xizmat koʻrsatish, xarajat, joriy qiymat, chegirma, inflyatsiya, 50 yil, derazalar, boʻyoq, tom, pardozlar, butun hayot davri
from: 1b849545
---

Chap panelning {{ui:Hayot sikli koʻrinishi}} boʻlimi modelda bor va tadqiqot davri (dastlab 50 yil) davomida eskiradigan hamda almashtiriladigan narsalarni sanab beradi. Modeldagi hech narsa oʻzgartirilmaydi.

## Qanday oʻqiladi

Har bir qism oʻz miqdorini koʻrsatadi (modeldan oʻlchangan: deraza maydoni, tashqi va ichki eshiklar, tashqi devor pardozi, ichki boʻyoq, pol va shift pardozi, tomning proyeksiyasi, zinalar), **yillarda xizmat muddati** va **birlik narxi**. Qism oʻz muddatida, muddatining ikki barobarida va hokazo almashtiriladi, agar bu tadqiqot tugashidan oldin boʻlsa; shunday qilib, 50 yillik tadqiqotda 30 yillik deraza bir marta, 30-yilda almashtiriladi. Xizmat muddatlari odatiy rejalashtirish raqamlari: ularni oʻz mahsulotlaringiz va iqlimingizga moslang. Hech qanday narx taxmin qilinmaydi; pulning yil boʻyicha miqdorini, jamini va uning joriy qiymatini koʻrish uchun narx kiriting. Xohlasangiz, chegirma stavkasi va inflyatsiya stavkasini qoʻshing.

{{ui:Jadvalni saqlash (CSV)}} komponentlarni va yillarni yozadi. Quvurlar, havo kanallari, simlar va jihozlar ham roʻyxatga kiritilgan (quyida qarang).

## Quvurlar, havo kanallari, simlar va jihozlar

- **Quvurlar va havo kanallari** chizilgan har bir yoʻnalishning metrlaridir. **Jihozlar** (nasoslar, ventilyatorlar, klapanlar, terminallar, armaturalar, rozetkalar, kalitlar, shchitlar va Aktivlar yorligʻida kuzatiladigan boshqa narsalar) turi boʻyicha sanaladi, har bir tur rejalashtirish muddati bilan. Aktivlar yorligʻida oʻz *xizmat muddati* belgilangan element oʻz muddati bilan alohida qator boʻladi; agar oʻrnatilgan sanasi boʻlsa, u oʻz yoshidan boshlanadi: 16 yoshli, 10 yillik muddatli nasos hozir almashtirilishi kerak, soʻngra har oʻn yilda.
- **Simlar** taxminiy hisoblanadi: har bir zanjir boʻyicha shchitdan qurilmalar boʻylab, eng yaqinidan boshlab, rejadagi masofa, yoʻnaltirish uchun 1,25 ga koʻpaytirilgan. Model kabel chizmaydi, shuning uchun uni oʻz hajmlarni hisoblashingiz bilan tekshiring.
- Muddatlar tekshirilishi kerak boʻlgan rejalashtirish raqamlari, manba emas.

## Har bir almashtirish uchun karbon

Belgilang: {{ui:Har bir almashtirishning mujassamlashgan uglerodini hisobga olish}}. Yangi deraza, eshik, zina, tom, quvur yoki jihoz modelning oʻsha turdagi oʻz elementlari tashiydigan uglerod boʻyicha hisobga olinadi (Karbon yorligʻidagi koeffitsientlar, birlik uchun). Elementi yoki koeffitsienti boʻlmagan qism, masalan boʻyoq, pardozlar va simlar, chiziqcha koʻrsatadi va roʻyxatga kiritiladi. Eski qismning foydalanish muddati tugashi va uni almashtirish ishi hisobga olinmaydi.
