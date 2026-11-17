---
title: Isitish va sovutish yuklamalarini baholash
summary: Har bir xonaning issiqlik yoʻqotishi, yil davomida isitishi (daraja-kunlar boʻyicha) va sovutish choʻqqisi — modeldagi chegaralar hamda har bir elementning U-qiymatidan, har bir kirish qiymati koʻrsatilgan holda. Loyihalash yordamchisi, muvofiqlik hisobi emas.
keywords: energiya, isitish, sovutish, issiqlik yoʻqotishi, issiqlik yuklamasi, sovutish yuklamasi, u-qiymat, issiqlik oʻtkazuvchanlik, daraja-kunlar, hdd, shamollatish, havo almashinuvi, ichki tushumlar, quyosh issiqligi, lambda, oʻtkazuvchanlik, izolyatsiya, dastlabki loyihalash, tahlil, xonalar, boʻshliqlar
from: ec312d20
---

{{ui:Kunduzgi yorugʻlik}} yorligʻida, {{ui:Hisoblash}} dan keyin {{ui:Isitish va sovutish yuklamalari}} ni oching va {{ui:Yuklamalarni hisoblash}} ni bosing. Har bir xona sovuq loyiha kunida **issiqlik yoʻqotishi**ni, issiq kunda esa **yil davomidagi isitishi** va **sovutish choʻqqisini** oladi. Hech narsa yuborilmaydi; modeldagi hech narsa oʻzgarmaydi, faqat siz U-qiymat kiritsangina oʻzgaradi.

:::warning
Bu **loyihalash yordamchisi, muvofiqlik hisobi emas**: ekranda har bir kirish koʻrsatilgan doimiy holat bahosi. Bu ISO 52016-1 usuli **emas**, simulyatsiya yoki energiya sertifikati emas; qozon, issiqlik nasosi yoki sovutgich oʻlchamini belgilamaydi. Natijalarni tekshiring, jihozlar oʻlchamini esa muhandis bilan belgilang.
:::

## Xonani chegaralovchi narsalar

BimCraft buni modelning oʻzidan topadi, shuning uchun har qanday dasturning IFC fayli ishlaydi (baʼzi dasturlar eksport qiladigan boʻshliq chegaralari shart emas). Har bir xona yuzasining har bir boʻlagidan u toʻgʻri tashqariga qaraydi:

- u uchrashgan birinchi devor, deraza, eshik, pol, tom, qoplama, pardali devor yoki tirgak shu boʻlakni **chegaralaydi**;
- shu elementdan oʻtib, yo **boshqa xona** (qoʻshni sifatida, bir xil haroratda: yoʻqotish yoʻq), yo **hech narsa** (tashqarida), yoki eng past qavatdagi pol ostida — **yer** keladi.
- Ochiq eshik boshqa xonaga qoʻshni sifatida hisoblanadi; hech narsaga uchramaydigan boʻlak (yon tomonga 1,5 m yoki pastga 1,5 m, yuqoriga 8 m ichida) xona ostida roʻyxatga olinadi va hisobga kirmaydi.

Deraza va eshiklar oʻz oʻlchamini, ular joylashgan devordan, IFC dan oladi (umumiy eni × balandligi). Jadvalda xonani chegaralovchi har bir elementni, uning maydonini, U-qiymatini va U-qiymat qayerdan olingani koʻrish uchun xonani bosing.

## U-qiymatlar

BimCraft har bir element uchun quyidagi tartibda foydalanadi:

1. **IFC ning oʻz U-qiymati** — elementning umumiy xossalar toʻplamidagi (masalan `Pset_WallCommon`) yoki uning turidagi `ThermalTransmittance`. Aksariyat loyihalash dasturlari uni yoza oladi.
2. **Uning material qatlamlari** — 1 ÷ (ichki sirt qarshiligi + har bir qatlam qalinligi ÷ uning oʻtkazuvchanligi λ + tashqi sirt qarshiligi), odatdagi sirt qarshiliklari bilan (devorlar uchun 0,13 va 0,04 m²K/W; ichkarida yuqoriga 0,10, pastga 0,17). Boshlash uchun odatdagi oʻtkazuvchanliklar (mineral jun 0,035, gʻisht 0,77, beton 1,4…); {{ui:Materiallarning issiqlik oʻtkazuvchanligi}} ostida ishlab chiqaruvchiniki kiriting — shu qatlamlardan olingan har bir U-qiymat unga ergashadi.
3. **Odatiy qiymat** (devorlar 0,3, tomlar 0,2, polar 0,25, derazalar 1,4, eshiklar 1,6 W/m²K), shunday deb belgilangan — oʻzingizniki kiriting.

Xona tafsilotida kiritilgan U-qiymat elementning umumiy xossalar toʻplamiga `ThermalTransmittance` sifatida yoziladi (bitta qadam; {{key:Mod+Z}} uni bekor qiladi). Agar bir nechta element bu toʻplamni ulashsa (masalan, bir xil devor turi), ularning hammasi birga oʻzgaradi va holat satrida nechtasi oʻzgarganligi aytiladi.

## Isitish

- **Issiqlik yoʻqotishi** = Σ U × A × (ichki − tashqi) tashqariga yoʻnalgan hamma narsa uchun + Σ U × A × (ichki − yer) yerdagi polar uchun + 0,335 × soatiga havo almashinuvi × xona hajmi × (ichki − tashqi). 0,335 Wh/m³·K — havo zichligi (1,2 kg/m³) bilan uning issiqlik sigʻimi (1005 J/kgK) koʻpaytmasi.
- **Yil davomida isitish** = (xonaning tashqariga har bir daraja boʻyicha yoʻqotishi — konstruksiya va havo orqali, unga yer yoʻqotishi bir xil farqqa mos keltirilgan holda) × **daraja-kunlar** × 24 ÷ 1000, kWh da. Joy uchun daraja-kunlarni kiriting yoki {{ui:Daraja-kunlarni CSV fayldan oʻqish…}} (har bir qatorda bir kun yoki oy; har bir qatordagi oxirgi son qoʻshiladi). Manbangiz ishlatgan asosiy haroratga koʻra daraja-kunlardan foydalaning: bu asos odamlar, yoritish va quyoshning bepul issiqligini allaqachon hisobga oladi.

## Sovutish

**Sovutish choʻqqisi** = konstruksiya va havo orqali yoz loyiha haroratidagi issiqlik + odamlar (bir kishiga pol maydoni × bir kishiga issiqlik) + har m² pol uchun yoritish va jihozlar + **quyosh**: shu xona uchun {{ui:Quyosh derazalar orqali sana boʻyicha}} choʻqqisi. Avval quyoshni hisoblang, issiq kunda; shu paytgacha quyosh 0 hisoblanadi va boʻlim buni aytadi. Har bir qismning choʻqqisi turli soatlarda tushsa ham yigʻiladi, bu biroz oshirib yuboradi.

## Nimalarni hisobga olmaydi

- ISO 52016-1 oylik va soatlik usullari (pullik standart), binoning massasida saqlangan issiqlik, issiqlik koʻpriklari, isitish va sovutish tizimlarining ishlashi hamda iqlim fayllari.
- Bir-biriga yonma-yon xonalar bir xil haroratda olinadi; isitilmagan boʻshliqlar modellashtirilmaydi.

Shuningdek qarang: [Xonalardagi kunduzgi yorugʻlikni baholash](topic:daylight-factor).
