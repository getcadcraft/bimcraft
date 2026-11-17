---
title: DWG yoki DXF chizmasini koʻrish
summary: DWG yoki DXF ni oching, model fazosi va varaqlar boʻylab harakatlaning, koordinatalarni oʻqing va hali chizilmagan narsalarni koʻring.
keywords: dinamik bloklar, koʻrinish holatlari, dwg, dxf, cad, chizma, 2d, koʻrinish, koʻruvchi, surish, kattalashtirish, model fazosi, qogʻoz fazosi, maket, koordinatalar, dwg ochish
from: 4db3122a
---

## Nima qilasiz

CAD chizmasini oching, uni 3D yoki 2D da koʻring, atrofida harakatlaning, model fazosi va uning varaqlari orasida oʻting va koordinatalarni oʻqing. BimCraft DWG va DXF chizmalarini koʻrsatadi; ularni tahrir qilmaydi va saqlamaydi. Oʻzgartirish uchun {{ui:Edit in CadCraft}} ni bosing va chizma yangi yorliqda CadCraft chizma ilovasida ochiladi.

## Qadamlar

1. {{ui:Fayl tanlash}} ni bosing yoki chizmani sahifaga tashlang.
2. `.dwg` yoki `.dxf` faylni tanlang.
3. "Chizma oʻqilmoqda…" holat qatorida kutib turing. Katta chizmalar bir necha soniya oladi. Keyin u oʻqish qancha davom etganini, birinchi tasvir chizilayotganda "render qilinmoqda…" va buning qancha davom etganini aytadi.
4. Chizma 3D da ochiladi, katta chizmani koʻrsatishning eng tez usuli (qarang: [DWG yoki DXF chizmasini 3D da koʻrish](topic:dwg-in-3d)). Tekis 2D koʻrinish uchun {{ui:Model}} ni bosing. Chizmalarni doim 2D da ochish uchun {{ui:Sozlamalar}} › {{ui:BimCraft}} › **Chizmalar ochiladi** ni {{ui:Model (2D)}} ga oʻrnating. Model fazosida hech narsasi boʻlmagan chizma yoki 3D ni koʻrsata olmaydigan brauzer uni 2D da ochadi.
5. Chizma ustidagi yorliqlarga qarang: avval {{ui:Model}}, keyin chizmaning oʻz tartibida har bir varaq uchun bittadan yorliq.
6. Varaq yorligʻini bosing va oʻsha varaqni koʻring: qogʻoz, unda model viewportlar orqali koʻrinadi.
7. Model fazosiga qaytish uchun {{ui:Model}} ni bosing.
8. Koʻrsatkichni chizma ustiga olib boring va burchakdagi X va Y koordinatalarni oʻqing.

## Nimani koʻrishingiz kerak

- Chizma oynaga moslangan. Ranglar chizmaga ergashadi; oq chiziqlar (rang 7) mavzu siyohi rangida chiziladi, va och ranglar yorugʻ mavzuda oʻqilishi uchun quyuqlashtiriladi.
- Chap tomondagi {{ui:Chizma}} paneli: fayl, oʻlchami, format (masalan "AutoCAD 2018 (AC1032)"), birliklar, elementlar va qatlamlar soni, varaqlar soni, va mavjud boʻlsa bogʻlangan chizmalar va jihozlar.
- Chap tomondagi {{ui:Qatlamlar}} roʻyxati.
- Oʻngda: qanday harakatlanish, bogʻlangan chizmalar va tasvirlar, va **Hali chizilmagan**.

## Harakatlanish

:::mouse
| Vazifa | Buni bajaring |
|---|---|
| Surish | Istalgan tugma bilan sudrang |
| Kattalashtirish | Gʻildirakni aylantiring; koʻrsatkich ostidagi nuqta joyida qoladi |
| Moslash | Ikki marta bosing, {{key:F}} ni bosing yoki {{ui:Moslash}} ni bosing |
:::

:::mac mouse
Sensorli panelda ikki barmoq bilan aylantirish kattalashtiradi, surmaydi. Barmoqlarni yaqinlashtirish ham kattalashtiradi. Surish uchun bosing va sudrang.
:::

:::touch
Bir barmoq bilan sudrab suring. Chizmalar uchun barmoqlarni yaqinlashtirib kattalashtirish hali qurilmagan: butun varaqni koʻrish uchun {{ui:Moslash}} ga bosing, va yaqinlashtirish uchun sichqoncha yoki sensorli paneldan foydalaning.
:::

## Dinamik bloklar

Dinamik blok chizma saqlangan koʻrinish holatida chiziladi: har bir joylashtirilgan blok chizma saqlangan holatda koʻrinadi ("Plan" yoki "Front", "Single bowl" yoki "Double bowl"). Oʻngda **Dinamik bloklar** model fazosida joylashtirilgan har bir blokni roʻyxatlaydi: nechta joylashtirilgan, qaysi holatlarni koʻrsatadi va blok ega boʻlgan barcha holatlar. {{ui:3D}} da joylashtirilgan blokni bossangiz, Xossalarda **Dinamik blok**, **Koʻrsatilgan holat** va **Boshqa holatlar** koʻrinadi. BimCraft holatlarni almashtirmaydi.

## Hali chizilmagan

Bu versiyada ayrim turdagi obyektlar chizilmaydi. Ular oʻngda **Hali chizilmagan** ostida sanaladi ("Bu qismlar hozircha oʻtkazib yuboriladi, taxmin qilinmaydi."), shuning uchun nimadir yetishmayotganini bilasiz. Chiziqlar, polichiziqlar, yoylar, aylanalar, ellipslar, splaynlar, shtrixlashlar va toʻldirilgan yuzalar, matn va koʻp qatorli matn, atributli bloklar, oʻlchamlar, yetakchilar va koʻp yetakchilar, jadvallar, tasvirlar va viewportlar chizilgan. 3D yuzlar, polyface mesh va poligon meshlar yuqoridan koʻrinadigan qirralari sifatida chiziladi; ularni sirt sifatida koʻrish uchun {{ui:3D}} ga oʻting.

Binar DXF ochilmaydi: BimCraft buni aytadi. Uni yaratgan dasturdan ASCII DXF yoki DWG sifatida qayta saqlang.

## Keng tarqalgan xatolar

- **Chizma boʻsh koʻrinadi.** Ayrim qatlamlar chizmaning oʻzida oʻchirilgan yoki muzlatilgan boʻlishi mumkin; ular {{ui:Qatlamlar}} da belgilanmagan holda boshlanadi. {{ui:Hammasini yoqish}} ni bosing. Agar holat "*name* boʻsh chizma: unda chiziqlar, matn yoki bloklar yoʻq." desa, unda hech narsa yoʻq.
- **Varaq boʻsh ramkani koʻrsatadi.** Varaq bogʻlangan chizmalarga tayanishi mumkin. Qarang: [Bogʻlangan chizmalar va tasvirlarni topish](topic:dwg-linked-files).
- **Matn bir oz boshqacha koʻrinadi.** BimCraft matnni chizmaning oʻz shriftlarida emas, tor sans-serif shriftda chizadi, shuning uchun matn uni yaratgan dasturdagidan bir oz kengroq yoki torroq boʻlishi mumkin.
- **"*name* oʻqib boʻlmadi. U buzilgan boʻlishi yoki oʻquvchi hali qoʻllamaydigan formatda saqlangan boʻlishi mumkin."** Oxiridagi qavs faylning format kodini koʻrsatadi. Uni yaratgan dasturdan eski DWG yoki DXF sifatida saqlang va yana urinib koʻring.
- **Oʻlchash, chizish yoki tahrirlash kutilishi.** BimCraft faqat chizmalarni koʻradi. Xuddi shu faylni CadCraft chizma ilovasida ochish uchun {{ui:Edit in CadCraft}} ni bosing; u tahrir qiladi va nusxani DWG yoki DXF sifatida saqlaydi. Asl faylingiz oʻzgarmaydi, bogʻlangan chizmalar BimCraft dasturida qoladi. Tugma faqat CadCraft siz uchun ochiq boʻlgan joyda koʻrinadi.

## Keyingisi

- [DWG yoki DXF chizmasini 3D da koʻrish](topic:dwg-in-3d)
- [Qatlamlar va varaqlar bilan ishlash](topic:dwg-layers-sheets)
- [Chizmani chop etish koʻrinishida tekshirish](topic:print-view)
