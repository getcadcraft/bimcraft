---
title: Oilalar va ularning oʻlchamlari
summary: Eshiklar, derazalar va mebel oilalarga kiradi. Oilaning har bir oʻlchami IFC faylida bitta tur boʻladi, shuning uchun tur roʻyxati BimCraftda qisqa qoladi, boshqa dasturlar esa oddiy turlarni oʻqiydi.
keywords: oila, oilalar, tur, turlar, oʻlcham, oʻlchamlar, eshik turi, deraza turi, mebel, stol, javon, shkaf, yangi oʻlcham, nusxa olish, oila joylash, oila fayli, ccfamily, ifc kutubxonasi, loyiha kutubxonasi, guruh, koʻrinuvchanlik, IfcDoorType, IfcWindowType, IfcGroup
from: 77caac48
---

## Oila nima

Oila bir turdagi narsaning bir necha oʻlchami: bir pallali eshik 32, 36 va 42 dyuym kenglikda keladi, yoki stol uzun va qisqa boʻladi. BimCraftda oilani bir marta, uning oʻlchamlari ostida koʻrasiz, uzun turlar roʻyxati oʻrniga.

IFC da oilalar yoʻq. Faylda har bir oʻlcham oddiy tur (eshik turi, deraza turi, mebel turi…), oila esa oʻz oʻlchamlarini sanab beruvchi guruh. Boshqa BIM dasturlari turlar va guruhni shundayligicha oʻqiydi; BimCraft oilani ulardan qayta tiklaydi.

## Qayerdan topish

- Loyiha koʻrigʻidagi **Oilalar** guruhi bu modeldagi oilalarni koʻrsatadi: har birida nechta oʻlcham borligi va nechtasi joylashtirilganligi bilan. Ularning pastida **Boshlangʻich oilalar**: Eshik va Deraza asboblaridagi eshiklar va derazalar, shuningdek stol, javon bloki va tagli shkaf.
- {{ui:Yigʻilish}} › {{ui:Oilalar…}} bir xil roʻyxatni oynada koʻrsatadi.
- Oilani ochish uchun bosing: uning oʻlchamlari, har bir oʻlchamning qiymatlari va har biridan nechta element ishlatilgani.

## Eshiklar va derazalar

Eshik va Deraza asboblari shu turdagi oilalarni hamda yonida **oʻlchamlar roʻyxatini** chiqaradi. Oʻlchamni tanlang yoki **W** va **H** ni kiriting: hech bir oʻlchamda boʻlmagan kenglik va balandlik eshikni joylashtirganda oilaning yangi oʻlchamiga aylanadi. Bir xil oʻlchamdagi eshiklar bitta turni ulashadi.

Tanlangan eshik yoki deraza uchun **{{ui:Xossalar}}** da **Oila** va **Oʻlcham** koʻrsatiladi. Roʻyxatdan boshqa oʻlchamni tanlang yoki yangi kenglik yoki balandlik kiriting. {{ui:Oilani ochish}} uga tegishli oilani ochadi.

Har bir eshik yoki deraza ramkasi oʻz devorining qalinligiga amal qiladi, oilalar boʻlmagandagidek. Oʻlcham turi 140 mm devorda chizilgan eshikni ham saqlaydi, turlarni oʻqiydigan dasturlar uchun.

## Shu oiladan yangi oʻlcham

1. Oilani oching.
2. **Shu oiladan yangi oʻlcham** ostida qiymatlarini kiriting (Kenglik, Balandlik va oilaning boshqa parametrlari) va xohlasangiz nom bering. Nom boʻlmasa, u qiymatlaridan nomlanadi.
3. {{ui:Oʻlcham yaratish}} ni bosing.

Ikki oʻlchamda bir xil qiymatlar boʻlishi mumkin emas. **Nomini oʻzgartirish** oʻlcham nomini oʻzgartiradi; **Olib tashlash** hech kim ishlatmayotgan oʻlchamni olib tashlaydi; **{{ui:Tanlash}}** shu oʻlchamdagi elementlarni tanlaydi.

## Mebel joylashtirish

1. {{ui:Yigʻilish}} › {{ui:Oila joylash}}, yoki oila oynasidagi {{ui:Joylashtirish}}.
2. Panelda oilani va uning oʻlchamini tanlang.
3. Qavatda joylashtirish uchun rejada bosing. Bosishdan oldin 90° burish uchun {{key:R}} ni bosing. Toʻxtatish uchun {{key:Esc}}.

Joylashtirilgan buyumning {{ui:Xossalar}} panelida uning oʻlchami, joyi va qancha burilgani koʻrsatiladi; {{key:Delete}} uni oʻchiradi. Bir oʻlchamdagi har bir buyum shu oʻlchamning shaklini ulashadi, shuning uchun oilani oʻzgartirsangiz, hammasi oʻzgaradi.

## Oʻlchamlar jadvalidan

{{ui:Jadvaldan oʻlchamlar…}} oila oynasida CSV faylni oʻqiydi (vergul, nuqtali vergul yoki tab). Birinchi qatorda ustunlar nomlanadi: parametrning nomi yoki yorligʻi va ixtiyoriy `Name`. Uzunliklar birlik yozilmasa millimetrda (`1.2 m`, `36 in`). Ha / Yoʻq ustunlari yes, no, true, false, 1 yoki 0 ni qabul qiladi, ustuni boʻlmagan parametr standart qiymatini saqlaydi. Har bir qator oʻlchamga aylanadi, bir qadamda, uni bekor qilsa boʻladi; mavjud oʻlcham oʻtkazib yuboriladi. Oʻqilmaydigan yoki oila chiza olmaydigan bitta qator butun jadvalni rad etadi va qator raqamini aytadi. Eng koʻpi 200 qator va 1 MB. {{ui:Oʻlchamlarni jadval sifatida saqlash}} xuddi shu jadvalni qaytadan yozadi.

## Har bir element uchun

Tahrirlovchida **Har bir element** deb belgilangan parametr (Ha / Yoʻq, masalan fortochka, yorliq yoki material qoʻshadigan) oʻlchamning bir qismi emas: bir oʻlchamdagi ikki eshik farq qilishi mumkin. Elementni tanlang va {{ui:Xossalar}} bu parametrlarni koʻrsatadi; birini oʻzgartirsangiz, oʻsha element oʻz shakli bilan qayta chiziladi (mebel va jihozlar oʻz shakliga ega boʻladi, eshik va derazalar devorlarida qayta yasaladi). Ularni hammasini standartga qaytarsangiz, element oʻz oʻlchamining shakliga qaytadi.

## Detallashtirish darajasi

{{ui:Yigʻilish}} › {{ui:Oilalar…}} › **Detallashtirish darajasi** modeldagi har bir oila uchun qattiq jismlarda saqlanadigan va reja belgilarida chiziladigan narsani belgilaydi: **Nozik** hamma narsani saqlaydi, **Oʻrta** va **Qoʻpol** esa tahrirlovchi nozikroq deb belgilagan qismlarni olib tashlaydi (kichikroq fayllar, tezroq koʻrinishlar). **Avtomatik** hamma narsani saqlaydi va varaq koʻrinishi masshtabiga qarab tanlaydi: 1:50 va undan katta — nozik, 1:100 — oʻrta, 1:200 va undan kichik — qoʻpol. Bitta qadam, uni bekor qilsa boʻladi.

## Oilani nusxalash

Hech narsadan boshlashingiz shart emas. {{ui:Nusxa olish}} oilani parametrlari, jismlari va oʻlchamlari bilan yangi nom ostida nusxalaydi. Nusxani tahrirlovchida oʻzgartiring; asl nusxa oʻz holicha qoladi.

## Oila fayllari

- {{ui:Oila faylini saqlash}} `.ccfamily.json` faylini saqlaydi: oilaning parametrlari, jismlari va oʻlchamlari. Uni boshqa modelda Oilalar guruhidagi {{ui:Oila faylini ochish…}} bilan oching.
- {{ui:IFC sifatida saqlash}} oilani kichik IFC fayl sifatida saqlaydi: uning oʻlchamlari turlari va guruhi, IFC loyiha kutubxonasi bilan eʼlon qilingan. Boshqa dasturlar uni turlar toʻplami sifatida ochadi; BimCraft uni yana oila sifatida ochadi.

Bu yerda ochilgan oila fayli maʼlumot sifatida oʻqiladi va hech narsa yozilishidan oldin tekshiriladi. Modelda kaliti bor oila alohida oila sifatida keladi. Boshqa oilalarni oʻz ichiga olgan oila (tahrirlovchidagi **Ichidagi oilalar** boʻlimiga qarang) ularni ham olib keladi: fayl ularni sanab beradi, model esa oʻzida borlarini saqlab qoladi.

## Kutubxonadagi oilalar

{{ui:Oilalar…}} ni oching va kutubxonada ulashilgan oilalarni koʻrish uchun {{ui:Kutubxonadan…}} ni tanlang. {{ui:Bu loyihaga qoʻshish}} uni oila fayli kabi oʻqiydi: BimCraft hech narsa yaratishdan oldin har bir maydonni tekshiradi, oila oʻz oilasi sifatida keladi va tahrirlovchida ochiladi. Qoʻshish bitta bekor qilish qadami boʻladi. Oʻzingizniki ulashish uchun {{ui:Hammasini kutubxona sifatida saqlash}} dan foydalaning va faylni kutubxonaga yuboring (kutubxona xodimlari oila faylini buyruq bilan nashr qiladi, har bir oila oʻz oʻlchamlari bilan alohida element boʻladi). Agar kutubxonaga ulanib boʻlmasa, roʻyxat buni aytadi va hech narsa oʻzgarmaydi.

## Boshqa dasturlarning turlari

Boshqa dasturlar yaratgan turlar ham Oilalar guruhida koʻrinadi, taxminiy guruhlash bilan: elementlar nomining birinchi ikki nuqta (:) oldidagi qismi boʻyicha, aks holda faqat raqamlari bilan farq qiladigan tur nomlari boʻyicha. Oila oynasi qaysi taxmin ishlatilganini aytadi. Ular roʻyxatga olinadi va ularning elementlarini tanlash mumkin, lekin bu yerda tahrirlanmaydi: ularda oila retsepti yoʻq.

:::note
Boshlangʻich eshik va derazalar oilalar paydo boʻlishidan oldingidek aniq chiziladi. Oilalardan oldin yaratilgan fayllar oʻzgarishsiz ochiladi: ularning eshik va derazalari oʻz oilasi ostida ishlatilgan oʻlchamlar bilan koʻrinadi va siz ularni birinchi marta oʻzgartirganingizda oʻz oʻlchamiga koʻchadi.
:::

Shuningdek qarang: [Oilani tahrirlash](topic:family-editor) va [Eshiklar va derazalar](topic:doors-and-windows).
