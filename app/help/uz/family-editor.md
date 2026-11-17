---
title: Oilani tahrirlash
summary: Oila parametrlarini, formulalarini va qattiq jismlarini oʻzgartiring, qismlarni Ha / Yoʻq parametri bilan koʻrsating, jismlarni kesing va biriktiring, quvurlar va havo kanallari uchun ulagich bering va natijani saqlanadigan IFC dan chizilgan holda koʻring.
keywords: oila tahrirlovchisi, oilani tahrirlash, parametr, parametrlar, formula, formulalar, koʻrinuvchanlik, ha yoʻq, jism, jismlar, quti, ekstruziya, extrude, aylantirish, sweep, profil, yoy, boolean, booleanlar, kesish, birlashtirish, difference, union, dastak, dastaklar, ish tekisligi, eskiz, yangi oila, ulagich, ulagichlar, port, portlar, quvur ulagichi, havo kanali ulagichi, drenaj, suv taʼminoti
from: 1ab31c10
---

## Tahrirlovchini ochish

Oilani oching (loyiha koʻrigʻidagi **Oilalar**, yoki {{ui:Yigʻilish}} › {{ui:Oilalar…}}) va {{ui:Oilani tahrirlash}} ni bosing. Hech narsadan boshlash uchun {{ui:Yangi oila}} ni bosing: unga nom bering, nima ekanini aytib bering (eshik, deraza, mebel, jihoz yoki boshqa narsa) va eshik yoki deraza boʻlsa, uning plan belgisi va dastagi qaysi boshlangʻich oilalardan olinishini tanlang. Tahrirlovchi bir necha parametr va bitta jism bilan oila ochadi.

Boshlangʻich oilani tahrirlash oʻzgarishlaringizni faqat shu modelda saqlaydi. Boshqa modellarda boshlangʻich oila oʻz holicha qoladi.

Modelda hech narsa {{ui:Oilani saqlash}} ni bosmaguningizcha oʻzgarmaydi. Tahrirlovchining oʻz bekor qilish va qayta bajarishi bor (nom yonidagi oʻq tugmalari yoki {{key:Mod+Z}} va {{key:Mod+Y}}); saqlash model bekor qilishida bitta qadam boʻladi.

## Parametrlar

{{ui:Parametrlar}} yorligʻi oilaning parametrlarini sanaydi: nomi, turi va standart qiymati. Turlari: **Uzunlik** (millimetrda), **Burchak** (gradusda), **Son**, **Butun son**, **Ha / Yoʻq**, **Qalam** (1–16) va soʻzlarni emas, raqamlarni saqlaydigan uchta tur: **Matn**, **Material** (loyiha materiallaridan biri) va **Toʻldirish** (reja toʻldirilishi). Soʻzlar formulalarda ishlatilmaydi; ular jismga rang beradi (uning **Materiali**), belgi qismini toʻldiradi yoki belgi matnida `{Name}` sifatida chiqadi. **Har bir element** katagi parametrni oʻlchamga emas, har bir joylashtirilgan element oʻzi uchun belgilaydigan parametrga aylantiradi.

- **Formula** parametrni boshqalarga bogʻlaydi, masalan `Width / 30` yoki `if(Width > 1200, 2, 1)`. Formulalardagi uzunliklar millimetrda, yoki birlik yozing: `3'`, `6in`, `50cm`.
- Parametrni qayta nomlasangiz, uni har bir formula va maydonda ham oʻzgartiradi. Hali ishlatilayotgan parametrni olib tashlab boʻlmaydi.
- Jismning **Materiali** loyiha materialining rangini oladi (yoki Material parametrining rangini), **Koʻrsatiladi** qiymati uni kattaroq detallashtirish darajalarida yashiradi, **Takrorlash** nusxalar yaratadi: soni (son yoki butun son parametri, 1 dan 200 gacha) va ular orasidagi x, y va z boʻyicha qadam. Takrorlangan jism taxtalar, tayoqlar yoki teshiklar qatoridir; kesishda ishlatilsa, nusxalar birga kesiladi.
- Eshik yoki deraza oilasi devoridan yana ikkita nom oladi: `WallThickness` va `Face` (1 yoki −1, eshik ochiladigan tomon).

## Jismlar

{{ui:Jismlar}} yorligʻi jismlarni sanaydi. Quti, ekstruziya, aylantirish yoki yoʻl boʻylab cho'zish qoʻshing:

| Jism | Nimani belgilaysiz |
|---|---|
| Quti | ikki burchagi: x0 dan x1 gacha, y0 dan y1 gacha, z0 dan z1 gacha |
| Ekstruziya | ish tekisligidagi profil (plan, old yoki yon), tekislik qayerda va chuqurlik |
| Aylantirish | profil, tekislikdagi oʻq va 360° gacha burchak |
| Yoʻl boʻylab | nuqtalar yoʻli va radius (tayoq yoki relslar) |

Har bir raqam kiritilgan son yoki parametrlar ifodasi boʻlishi mumkin. Har bir jismda rang va **Koʻrinadi qachon** bor: uni boʻsh qoldirsangiz, doim koʻrinadi, yoki Ha / Yoʻq parametrini (yoki `Shelves >= 3` kabi taqqoslashni) nomlasangiz, faqat shunda koʻrinadi. Bu koʻrinuvchanlik parametridir.

### Profilni chizish

Ekstruziya yoki aylantirish profili oldindan koʻrish ostida ish tekisligida chiziladi:

- Tanlangan nuqtadan keyin yangi nuqta qoʻshish uchun qogʻozni bosing.
- Nuqtani siljitish uchun uni torting. Nuqtalar setkaga tortiladi; ularni erkin joylashtirish uchun {{key:Shift}} ni ushlab turing.
- Segmentdagi kichik kvadratni bossangiz, u yerga nuqta qoʻshiladi. Segmentni yoyga aylantirish uchun {{key:Shift}} bilan bosing (boshqa tomonga qaytarish uchun yana bosing, keyin toʻgʻri chiziq).
- Nuqtani oʻchirish uchun ikki marta bosing.

Boʻsh nuqtalar parametrlar bilan belgilanadi: ularni torttirmasdan, jadvalda oʻzgartiring.

## Booleanlar

{{ui:Booleanlar}} yorligʻi ikkinchi jismni birinchisidan kesib oladi yoki ularni biriktiradi. Boolean natijasini yana kesish yoki biriktirish mumkin. Booleanda ishlatilgan jism faqat uning bir qismi sifatida chiziladi.

Ikkinchi jism Ha / Yoʻq parametri bilan yashirilsa, birinchisi oʻz holicha qoladi; birinchisi yashirilsa, natija ham yashiriladi.

## Reja belgisi

{{ui:Reja belgisi}} yorligʻi rejada bu oila uchun jismlar kesimi oʻrniga koʻrsatiladigan narsani chizadi: oilaning oʻz oʻqlarida chiziqlar, toʻrtburchaklar, doiralar, yoylar, koʻpburchaklar va matn. Har bir qismida **qalam** (1–16, ifoda yoki Qalam parametri), **toʻldirish** (yoʻq, qattiq, diagonal, kesishgan, beton, izolyatsiya, tuproq yoki Toʻldirish parametri), **koʻrsatiladi** ifodasi, asosidan millimetrda **kesish oraligʻi** (reja kesimi uning ichida boʻlsa toʻliq vaznda, pastda ingichka, yuqorida shtrixli chiziladi: kesimdan yuqoridagi javon shtrixli koʻrinadi), detallashtirish darajasi va takrorlash bor. Matnda parametrlarni `{Name}` shaklida nomlash mumkin. **Reja koʻrsatadi: Jismlarning kesimi** variantida reja jismlarni kesishda davom etadi, belgi esa oilada qoladi. Boshqa dasturlar belgini oilaning asosi sifatida oʻqiydi (chiziqlar va shakllar; matn BimCraftda qoladi).

## Ichidagi oilalar

{{ui:Ichidagi oilalar}} yorligʻi bu oilaning ichiga boshqa oilani qoʻyadi: stoldagi oyoq, eshikdagi dastak. Oilani tanlang, keyin uning joyini (x, y, z), qancha burilishini (faqat chorak burilishlar: 0, 90, 180, 270), qachon koʻrinishini va oladigan qiymatlarini kiriting, har bir qatorda bittadan `Height = Height - 40` shaklida. Ichki oilani saqlash bu oilani qayta chizadi; boshqa oila tomonidan ushlab turilgan oilani oʻchirib boʻlmaydi; oila oʻz-oʻzini, hatto boshqa oila orqali ham, ichiga ololmaydi va joylashtirish toʻrt darajada toʻxtaydi.

## Issiq nuqtalar

Issiq nuqta — parametrni oʻzgartirish uchun sudrab suriladigan nuqta yoki chekka. {{ui:Issiq nuqtalar}} yorligʻida bittasini qoʻshing, u qaysi oʻq boʻylab surilishini va qaysi son parametrini oʻzgartirishini tanlang va uning joyini jismlardagi bilan bir xil ifodalarda yozing. Oldindan koʻrishda dastaklar ostida **Issiq nuqtalar** ni tanlang va ularni sudrang. Rejadagi joylashtirilgan elementda ({{ui:Tanlash}} bilan tanlang) x va y issiq nuqtalari tutqich sifatida koʻrinadi: birini torting, element issiq nuqta shu yerda boʻladigan oʻlchamni oladi, ular orasidagi formulalar orqali; bitta bekor qilish uni qaytaradi. Issiq nuqta boshqariladigan parametrni, Ha / Yoʻq yoki soʻzni oʻzgartira olmaydi.

3D koʻrinishda xuddi shu issiq nuqtalar tanlangan elementda tutqich sifatida chiqadi, yuqoriga-pastga (z oʻqi) boʻlganlari ham, rejada chizib boʻlmaydigan. Elementni tanlang, tutqichni oʻz oʻqi boʻylab torting va qoʻyib yuboring: element issiq nuqta shu yerda boʻladigan oʻlchamni oladi, bitta bekor qilish qadami sifatida. Tutqichlar kesim qutisi yoqilgan boʻlsa yashiriladi, chunki u xuddi shu tutqichlardan foydalanadi.

## Ulagichlar

Qavatda joylashtirilgan oilalarda (mebel, jihozlar va boshqalar) **Ulagichlar** yorligʻi bor: quvur yoki havo kanali elementga ulanadigan nuqtalar, masalan lavabo krani va drenajida. {{ui:Ulagich qoʻshish}} ni bosing va sozlang:

- **Turi**: quvur yoki havo kanali va uning **Tizimi** (sovuq suv, sanitar drenaj, ta'minot havosi…).
- **x**, **y** va **z**: u qayerda, oilaning oʻz oʻqlarida. Jism raqamlari kabi, har biri son yoki parametrlar formulasi boʻlishi mumkin, shuning uchun ulagich oʻlchamga qarab siljiydi.
- **Chiqish yoʻnalishi**: quvur yoki havo kanali qaysi yoʻnalishda chiqadi, oila oʻqlaridan biri boʻylab (lavabo ostidagi drenaj **Pastga** qaraydi).
- **Oʻlchami (mm)**: quvurning nominal oʻlchami (DN) yoki dumaloq havo kanalining diametri.
- **Oqim**: ulanadigan (kran kabi) uchun **Kirish**, drenaj qiladigan uchun **Chiqish**.

Oldindan koʻrish har bir ulagichni chiqish yoʻnalishi koʻrsatilgan halqa sifatida chizadi. Eshik va derazalarda ulagich yoʻq.

Santexnika jihozi uchun **Santexnika jihozi** ostida qaysi biri ekanini tanlang (hojatxona, lavabo, oshxona mojaroni, dush, kir yuvish havzasi). Boshlangʻich jihozlar buni allaqachon aytadi.

Oilaning har bir elementi IFC faylida portlar sifatida ulagichlarini oladi va element oʻlchami oʻzgarganda yoki oila saqlanganda ular qayta yasaladi. IFC tizimlarini oʻqiydigan dasturlar har bir quvur yoki havo kanali qayerga tegishli ekanini koʻradi.

## Oldindan koʻrish va uning dastaklari

Oldindan koʻrish — oila modelga saqlanadigan kod bilan IFC koʻrinishida yozilgan va qaytarib chizilgan holati. Siz koʻrgan narsa boshqa dasturlarga boradigan narsa. Uning ostida **Koʻrsatilgan oʻlcham** oldindan koʻrish ishlatadigan parametr qiymatlarini belgilaydi.

**Dastaklar** oldindan koʻrishdagi nuqtalar: **Oʻlcham** Kenglik, Chuqurlik va Balandlik uchun dastak koʻrsatadi; **Tanlangan jism** tanlangan jismning har bir yuzi uchun bittadan koʻrsatadi. Dastakni torting:

- parametr belgilagan yuzda koʻrsatilgan oʻlcham oʻzgaradi (oilaning formulalari saqlanadi);
- kiritilgan son belgilagan yuzda son oʻzgaradi.

## Saqlash

{{ui:Oilani saqlash}} oilani tekshiradi, keyin uning har bir oʻlchamini qayta chizadi va har bir elementini qayta yasaydi, bitta bekor qilinadigan qadam sifatida. Agar oʻlcham oʻzgarish bilan chizib boʻlmasa (masalan, jismning shu oʻlchamda kengligi boʻlmasa), hech narsa saqlanmaydi va tahrirlovchi qaysi oʻlchamligini aytadi.

Agar tahrirlovchingiz ochiq paytda boshqa biri xuddi shu oilani saqlagan boʻlsa (Live TeamWork sessiyasida yoki boshqa oynada), {{ui:Oilani saqlash}} rad etadi va buni aytadi, uning oʻzgarishini sizniki bilan almashtirmaydi. Tahrirlovchini yoping, oilani qayta oching va uning oʻzgarishini koʻring, keyin oʻzingizniki qiling.

:::note
Geometriya IFC ning oʻz qattiq jismlari sifatida saqlanadi: ekstruziyalar, aylantirishlar, yoʻl boʻylab cho'zilgan disklar va Boolean natijalari. Hech narsa uchburchaklar roʻyxatiga aylantirilmaydi, shuning uchun fayllar kichik qoladi va boshqa dasturlar shakllarni shakl sifatida oʻqiy oladi. Yoylari bor profillar IFC4 da yoylari bilan saqlanadi; IFC2X3 da profilda yoy segmentlari yoʻq, shuning uchun u yerda yoylar qisqa toʻgʻri boʻlaklar sifatida saqlanadi.
:::

Shuningdek qarang: [Oilalar va ularning oʻlchamlari](topic:families).
