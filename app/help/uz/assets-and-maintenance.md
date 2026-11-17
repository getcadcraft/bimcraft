---
title: Resurslar maʼlumotlari va texnik xizmat yozuvini modelda saqlash
summary: Topshirilgan IFC modelni binoni ishlatish uchun ishlating: jihozlar va qurilmalar uchun ishlab chiqaruvchi, model, seriya raqami, kafolat va xizmat muddati, hamda bajarilgan texnik xizmat yozuvi — barchasi IFC ga yoziladi.
keywords: topshirish, foydalanishga qabul, bajarilgan holat, topshirish toʻplami, resurslar, resurslar reestri, obyektni boshqarish, fm, ekspluatatsiya, texnik xizmat, xizmat koʻrsatish, kafolat, seriya raqami, shtrixkod, ishlab chiqaruvchi, model, xizmat muddati, topshirish, cobie, raqamli egizak, muddati oʻtgan, muddati, ish buyurtmasi
from: b84ac492
---

{{ui:Resurslar}} yorligʻi oʻng panelda ochiq IFC modelni bino jihozlari qaydiga aylantiradi. Hammasi IFC ning oʻzida, IFC ning oʻz xususiyatlar toʻplamlari va vazifalarida yoziladi, shuning uchun faylni ochadigan keyingi dastur uni ham oʻqiydi. Hech narsa yuklanmaydi va server kerak emas: uni saqlash uchun IFC ni saqlang.

## Nimalar roʻyxatga olinadi

- Jihozlar va qurilmalar: mebel, sanitariya qurilmalari, yoritish moslamalari, maishiy asboblar, havo terminallari, klapanlar, nasoslar, ventilyatorlar, qozonlar, rezervuarlar, rozetkalar, shchitlar, liftlar va boshqa shunga oʻxshash elementlar, hamda jihoz maʼlumotlari bor kutubxona elementlari.
- Boshqa har qanday element, uni **kuzatish**: modelda tanlang (eshik, devor, oddiy obyekt sifatida chizilgan nasos) va {{ui:Tanlanganlarni kuzatish}} ni bosing.
- Resurs maʼlumoti yoki texnik xizmat vazifasi allaqachon bor har qanday element, bu yerda yoki boshqa dastur tomonidan yozilgan.

Muddati oʻtganlar birinchi, keyin 30 kun ichida muddati tugaydiganlar. Nom, belgi, ishlab chiqaruvchi, model yoki seriya raqami, sath boʻyicha filtrlang yoki {{ui:Faqat muddati oʻtganlar yoki 30 kun ichida muddati tugaydiganlar}} ni belgilang.

## Resurs maʼlumotlari

Roʻyxatdagi resursni bosing (yoki modelda tanlang), uning maʼlumotlarini oching: ishlab chiqaruvchi, model, model havolasi, seriya raqami, shtrixkod, oʻrnatilgan kun, kafolat raqami va uning boshlanishi hamda tugashi, xizmat muddati yillarda. {{ui:Maʼlumotlarni saqlash}} ularni bir qadamda yozadi ({{key:Mod+Z}} uni ortga qaytaradi). Qiymatni olib tashlash uchun katakni boʻsh qoldiring.

## Hujjatlar

Maʼlumotlar ostida {{ui:Hujjatlar}} resursga bogʻlangan qoʻllanmalar, kafolatlar, fotosuratlar, sertifikatlar va chizmalarni sanab beradi. Turini tanlang, unga sarlavha bering (yoki boʻsh qoldiring: fayl nomi ishlatiladi) va qayerdaligini kiriting:

- **veb-manzil** (`https://…`): unga yangi oynada ochiladigan Ochish havolasi beriladi;
- yoki **fayl nomi yoki yoʻli** (`Manuals/AHU-1.pdf`, `C:\FM\pump.pdf`, tarmoq ulashmasi): fayllarni IFC yonida, oʻsha jildda yoki undan pastroqda saqlang, shunda jildni topshirganingizda nomlar ishlashda davom etadi. BimCraft nomini koʻrsatadi; faylni jilddan oching.

Fayllarning oʻzi hech qachon yuklanmaydi va IFC ga nusxalanmaydi: faqat havola yoziladi. Parolli veb-manzil va veb-manzil yoki fayl boʻlmagan har qanday havola (masalan `javascript:`) rad etiladi. {{ui:Olib tashlash}} hujjatni resursdan chiqaradi (bir qadam; {{key:Mod+Z}} uni ortga qaytaradi).

Boshqa dastur elementga qoʻygan hujjatlar ham roʻyxatga olinadi. Elementning **turidagi** hujjatlar shu turdagi har bir elementda koʻrinadi va buni aytadi; ularni tur yaratilgan joyda oʻzgartiring.

IFC da har bir hujjat elementga bogʻlangan IFC hujjat havolasi boʻladi, uning turi shu bogʻlanishda saqlanadi, IFC4 va IFC2X3 da bir xil.

## Texnik xizmat yozuvi

Hujjatlar ostida {{ui:Bajarilgan ishni qayd etish}}: ish bajarilgan kun, ish, kim bajargan, keyingi muddat qachon va izohlar. Har bir yozuv bir qadam; {{ui:Tahrirlash}} va {{ui:Oʻchirish}} uni keyinroq oʻzgartiradi. Eng yangi yozuvning keyingi muddati resurs muddati oʻtganmi yoki tez orada muddati tugaydimi, shuni hal qiladi.

## IFC da qanday saqlanadi

- Ishlab chiqaruvchi va model `Pset_ManufacturerTypeInformation` da, seriya raqami, shtrixkod va oʻrnatilgan kun `Pset_ManufacturerOccurrence` da, kafolat `Pset_Warranty` da, xizmat muddati `Pset_ServiceLife` da — elementning oʻzida. Agar elementning turida ishlab chiqaruvchi yoki model allaqachon bor boʻlsa, siz oʻzingiznikini kiritguncha u koʻrinadi.
- Har bir texnik xizmat yozuvi — texnik xizmat turidagi IFC **vazifa**, elementga bogʻlangan, sanalari bilan (IFC4 da vazifaning oʻz vaqtlari sifatida ham) va kun, kim bajargani hamda keyingi muddat kuni bilan `CadCraft_Maintenance` toʻplami.
- Boshqa element bilan umumiy boʻlgan qiymatlar avval nusxalanadi: bitta resursni oʻzgartirish hech qachon qoʻshnilarini oʻzgartirmaydi.
- Eski IFC2X3 fayllarida sanalar matn sifatida yoziladi (YYYY-MM-DD); bu versiya u yerda alohida sana yozuvini talab qiladi, BimCraft uni yozmaydi.

## Sensor koʻrsatkichlari

Bino boshqaruv tizimi, maʼlumot yigʻuvchi yoki elektron jadvaldan eksport qilingan koʻrsatkichlarni kiritish uchun {{ui:Sensor qiymatlari}} va {{ui:Oʻlchovlarni ochish (CSV)…}} ni oching:

- **Birinchi ustun — vaqt**: `2026-10-23 14:05`, `2026-10-23T14:05:00Z`, `2026-10-23T14:05+02:00` yoki Unix soniyalari. Zonasiz vaqt kompyuteringizning oʻz vaqt zonasida oʻqiladi. `23/10/2026` kabi kun-birinchi sanalar oʻqilmaydi (ular noaniq); ISO sanalarini eksport qiling.
- **Qolgan har bir ustun — bitta sensor**, sarlavhasi resursning **belgisi**, **nomi** yoki **GlobalId** bilan boshlanadi. Hech bir resursga yoki bir nechtasiga mos kelmaydigan sarlavha roʻyxatga olinadi va chiqarib tashlanadi. Ustunlarni vergul, nuqtali vergul yoki tab ajratadi; nuqtali vergul yoki tab bilan oʻnlik vergul (`21,5`) ham oʻqiladi.
- Oʻqib boʻlmaydigan vaqt yoki qiymatlar (soʻz, katakka yozilgan birlik) sanaladi va chiqarib tashlanadi, hech qachon taxmin qilinmaydi.

Oxirgi koʻrsatkich roʻyxatning {{ui:Koʻrsatkich}} ustunida va resursning {{ui:Sensor}} blokida, har bir koʻrsatkichning **diagrammasi** bilan koʻrinadi (telefonda diagrammalar {{ui:Diagrammani koʻrsatish}} ni bosguncha kutadi). Resursda **quyi va yuqori chegara** hamda birlik oʻrnating va {{ui:Chegaralarni saqlash}} ni bosing: undan tashqaridagi koʻrsatkich resursni belgilaydi. {{ui:Modelda koʻrsatish}} ni belgilang, shunda har bir resurs oʻz koʻrsatkichi boʻyicha boʻyaladi — quyi chegaradan past boʻlsa koʻk, chegaralar ichida boʻlsa yashil, yuqori chegaradan yuqori boʻlsa qizil, chegarasi yoʻq resurslar uchun esa eng past koʻrsatkichdan eng yuqorigacha bitta koʻk shkala — koʻrsatkichi yorliq sifatida (60 tagacha yorliq, belgilanganlari birinchi).

**Koʻrsatkichlar faqat shu brauzer oynasida qoladi**: ular IFC ga saqlanmaydi va hech qayerga yuborilmaydi; keyingi safar CSV ni qayta oching. **Chegaralar IFC da saqlanadi** (elementda `CadCraft_Sensor` toʻplami: Low, High, Unit), shuning uchun faylni ochgan keyingi odam bir xil belgilarni koʻradi.

## Jonli koʻrsatkichlar

{{ui:Jonli oqim}} qiymatlarni ular yuz berganda oʻqiydi, **toʻgʻridan-toʻgʻri shu brauzerdan sizning tizimingizga**. Hech narsa bizning serverimiz orqali oʻtmaydi va brauzer oynasidan boshqa joyda hech narsa saqlanmaydi. Fayl ochilganda hech narsa ulanmaydi: faqat {{ui:Ulanish}} ulanadi.

- **MQTT WebSockets orqali**: brokeringizning WebSocket tinglovchisi manzili (`wss://broker.example.com:8884/mqtt`) va bir yoki bir nechta mavzu, resursning belgisi qoʻyiladigan joyda `{tag}` bilan, masalan `site/{tag}/temperature` (BimCraft `site/+/temperature` ga obuna boʻladi va belgini har bir xabarning mavzusidan oʻqiydi). `{tag}` siz mavzular sensorning oʻzini nomlaydi. Xabar yoki oddiy son (`21.5`), yoki JSON, masalan `{"value": 21.5, "time": "2026-10-23T14:05:00Z"}` boʻladi (agar sizniki boshqacha nomlangan boʻlsa, {{ui:JSON ichidagi qiymat maydoni}} ni belgilang).
- **Manzilga soʻrov (HTTP)**: bino boshqaruv tizimingiz yoki kichik skriptingiz javob beradigan veb-manzil, har necha soniyada soʻraladi (kamida 5). U belgi boʻyicha kalitlangan JSON bilan (`{"AHU-1": 21.5}`), JSON roʻyxati bilan (`[{"tag": "AHU-1", "value": 21.5}]`) yoki yuqoridagiga oʻxshash koʻrsatkichlar CSV si bilan javob berishi mumkin. Javob bermasa, BimCraft yana soʻrashdan oldin ikki barobar uzoqroq kutadi, beshgacha daqiqa.

Har bir koʻrsatkich nomi koʻrsatilgan resursga boradi — xuddi CSV ustuni kabi; hech bir resursga mos kelmaydigan nomlar roʻyxatga olinadi. Koʻrsatkichlar {{ui:Sensor qiymatlari}} ga qoʻshiladi: roʻyxat, diagrammalar, chegaralar va modeldagi ranglar bir xil ishlaydi.

**Parolingiz yoki tokeningiz** bitta ulanish uchun kiritiladi: u ulanishga beriladi va katak boʻshatiladi; u hech qachon bu brauzerda yoki IFC da saqlanmaydi. Token standart `Authorization: Bearer` sarlavhasi bilan yuboriladi va hech qanday cookie yuborilmaydi.

{{ui:Bu sozlamalarni IFC da saqlash}} manzilni, mavzularni, qiymat maydonini va qancha tez-tez soʻralishini modelga yozadi (loyihada `CadCraft_Feed` toʻplami; parol uchun maydon yoʻq), shuning uchun faylni ochgan keyingi odam faqat oʻz loginini kiritib {{ui:Ulanish}} ni bosadi. Manzilning oʻzida parol yoki kalit qoʻymang: foydalanuvchi nomi va parolli manzil rad etiladi.

:::note
**Brokeringiz yoki manzilingizga nima kerak.** Brauzer sahifasi faqat ruxsat bergan server bilan gaplasha oladi:
- Sahifa xavfsiz (https), shuning uchun brauzer faqat `wss://` va `https://` manzillariga ulanadi — faqat oʻz kompyuteringizda (`localhost`) bundan mustasno, u yerda sinov uchun `ws://` va `http://` ishlaydi.
- HTTP manzili bu sahifadan soʻrovlarga ruxsat berishi kerak (CORS: `Access-Control-Allow-Origin` sarlavhasi va token ishlatsangiz, ruxsat etilgan sarlavhalar orasida `Authorization`).
- Koʻpchilik brokerlar (Mosquitto, EMQX, HiveMQ va boshqalar) WebSocket tinglovchisini taklif qiladi; uni yoqmaguncha koʻpincha oʻchiq boʻladi. BimCraft MQTT 3.1.1 bilan ishlaydi.
:::

BimCraft yopiq boʻlganda **ogohlantirishlar boʻlmaydi**: chegaralar faqat model ochiq va oqim ulangan paytda resursni belgilaydi. Binoni tun-kun kuzatish uchun server kerak, BimCraft uni ishga tushirmaydi.

## COBie jadvali

**COBie** — bu koʻpgina egalar va obyekt jamoalari talab qiladigan topshirish elektron jadvali (AQShda National BIM Standard tomonidan nashr etilgan; Buyuk Britaniyada BS 1192-4). Oynada {{ui:COBie jadvali}} ni oching:

- {{ui:COBie (.xlsx) sifatida saqlash}} modeldan va resurs maʼlumotlaridan COBie 2.4 varaqlarini yozadi — Contact, Facility, Floor, Space, Type, Component, System, Job, Document va Attribute: bino, uning qavatlari va xonalari (maydonlar model miqdorlaridan), har bir resurs komponent sifatida, seriya raqami, oʻrnatilgan kun, kafolat boshlanishi, belgi va shtrixkod bilan, uning turi ishlab chiqaruvchi, model, xizmat muddati va kafolat uzunligi bilan, unga tegishli tizimlar, texnik xizmat yozuvi ishlar sifatida va bogʻlangan hujjatlar. Har bir komponentda elementning IFC GlobalId si boʻladi. COBie ning "created by" ustuni uchun elektron pochta manzilingizni kiriting yoki boʻsh qoldiring (u holda n/a yoziladi). Modelda boʻlmagan qiymatlar **n/a** deb yoziladi; kategoriya ustunlarida OmniClass kodi emas, IFC sinfi turadi.
- {{ui:COBie jadvalini oʻqish…}} uni BimCraft yoki boshqa dasturdan qaytarib oʻqiydi va **avval har bir oʻzgarishni roʻyxatga oladi**: qaysi resurs, qaysi qiymat, qaysidan qaysiga va yangi hujjatlar. {{ui:Qoʻllash}} ularning hammasini bir qadamda yozadi ({{key:Mod+Z}} uni ortga qaytaradi). Qatorlar avval GlobalId boʻyicha, keyin komponentning nomi boʻyicha moslashtiriladi. Modelda hech narsaga mos kelmaydigan qatorlar roʻyxatga olinadi, qoʻshilmaydi.

Elektron jadval ishonchsiz deb hisoblanadi: formulalar hech qachon oʻqilmaydi yoki bajarilmaydi (faqat katakka oxirgi saqlangan qiymat), kafolat boshlanishidan oldin tugaydigan qiymat va veb-manzil yoki fayl nomi boʻlmagan hujjat havolasi chiqarib tashlanadi va sanaladi, juda katta ishchi kitoblar rad etiladi. COBie ning ishlari turning rejalashtirilgan ishlari, shuning uchun ular yoziladi, lekin qaytarib oʻqilmaydi. BimCraft yozadigan elektron jadvalda formula boʻlishi mumkin boʻlgan matn (`=`, `+`, `-` yoki `@` bilan boshlanuvchi) matn sifatida belgilanadi.

Ishchi kitob bizning sinovlarimizda mustaqil elektron jadval oʻquvchisi bilan tekshirilgan; u COBie validatoridan oʻtmagan. Qabul qiluvchi jamoa uni ishga tushirsa, nima deyishini bizga ayting.

## Topshirish hujjatlari

Tayyor bino bilan egaga beriladigan qogʻozlar loyihaga tegishli, bitta resursga emas. {{ui:Resurslar}} yorligʻida {{ui:Topshirish hujjatlari}} ni oching:

1. {{ui:Hujjat qoʻshish}}, turini tanlang (bajarilganlik sertifikati, foydalanishga qabul sertifikati, kafolat, qoʻllanma, bajarilgan holat chizmalari, boshqa), sarlavhasi, berilgan sana, kim bergani va havola raqamini kiriting.
2. Qayerdaligini koʻrsating: veb-manzil, IFC yonida saqlangan fayl nomi yoki {{ui:Fayl biriktirish}}.
3. {{ui:Roʻyxatga qoʻshish}}. {{ui:Tahrirlash}} va {{ui:Olib tashlash}} roʻyxatni oʻzgartiradi; har biri ortga qaytarish mumkin boʻlgan bir qadam.

{{ui:Topshirish toʻplamini yaratish}} bitta zip yuklab oladi: har bir hujjatni sanab beradigan muqova sahifa, elektron jadvaldagi bilan bir xil roʻyxat, COBie ishchi kitobi (hujjatlar uning Document varagʻida, Facility haqidagi qatorlar sifatida), model va har bir biriktirilgan fayl. Hali roʻyxatda boʻlmagan bajarilganlik yoki foydalanishga qabul sertifikati muqovada nomlanadi; toʻplam baribir yaratiladi.

Toʻplamdagi model **bajarilgan holat modeli**: unda qaysi elementlar obyektda oʻlchanganligi koʻrsatilgan. U bilan birga `as-built` jildida: bayonot, har bir elementning tekshiruv holati bilan roʻyxati, chizmalar toʻplami hozirgi holatida bitta PDF sifatida (bajarilgan holat chizmalari) va model chizmalar toʻplamlari berilgan boʻlsa, chizmalar oʻzgarishlari jurnali. Qarang: [Elementlarni tekshirilgan yoki dalada tasdiqlangan deb belgilash](topic:verification).

- IFC faylida har bir hujjat loyihaga bogʻlangan IfcDocumentInformation (IfcRelAssociatesDocument) boʻladi, sarlavhasi, havolasi, sanasi, beruvchisi va joyi bilan, shuning uchun boshqa dasturlar uni roʻyxatga oladi.
- Biriktirilgan fayl nomi, hajmi va SHA-256 bilan qayd etiladi. Faylning oʻzini loyiha bilan saqlash uchun {{ui:Loyihani toʻplam sifatida saqlash}} dan foydalaning (.ccbundle modelni va biriktirilgan fayllarni saqlaydi; uni ochganda ular qaytariladi, har biri oʻz yozuviga qarab tekshiriladi). Oddiy saqlashda qaysi birini xohlashingiz soʻraladi.
- Oddiy .ifc yozuvni saqlaydi, faylni emas: uni ochgandan keyin {{ui:Faylni qayta biriktiring}} dan foydalaning. Oʻsha fayl tanib olinadi; boshqasi yozuvni almashtiradi.

## CSV

{{ui:CSV}} har bir resursni uning maʼlumotlari bilan, har bir texnik xizmat yozuvini va har bir hujjatni, har biri alohida qator qilib, elektron jadval yoki boshqa texnik xizmat dasturi uchun saqlaydi.

:::note
Hali qurilmagan: BimCraft yopiq boʻlganda koʻrsatkichlarni saqlaydigan va ogohlantirishlar yuboradigan xostingdagi xizmat hamda COBie ishlarini qaytarib oʻqish. Qarang: [Hali qurilmagan](topic:not-built-yet).
:::
