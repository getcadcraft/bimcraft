---
title: Muammolarni bartaraf etish
summary: BimCraft koʻrsatadigan xabarlar, ularning sabablari va nima qilish kerakligi: fayllar, papkalar, 3D modellar, chizmalar va tahrirlarni ochish uchun.
keywords: muammo, xato, ishlamayapti, ochilmayapti, muvaffaqiyatsiz, toʻliq emas, buzilgan, sekin, ishdan chiqish, boʻsh, yetishmayapti, xabar, yordam
from: 1e5a79fc
---

Xabarlar ekran pastidagi holat qatorida chiqadi, biror narsa muvaffaqiyatsiz boʻlganda qizil rangda. Quyidagi xabarni toping.

## Fayllarni ochish

**"*name* IFC, RVT, RFA, DWG yoki DXF fayli emas."**
BimCraft faylni tanimadi. Kengaytmani va faylning boʻsh emasligini tekshiring. PDF, rasmlar va ofis fayllari ochilmaydi.

**".ifczip hali qoʻllab-quvvatlanmaydi. Modelni oddiy .ifc fayl sifatida saqlang yoki eksport qiling."** (`.ifcxml` uchun ham)
`.ifczip` ni arxivdan oching (u ichida `.ifc` saqlangan oddiy zip) yoki oddiy IFC eksport qiling.

**"… BimCraft hali oʻqimaydigan loyiha fayli."**
`.pln`, `.pla`, `.tpl` yoki `.bpn` fayl. Undan IFC yoki DWG eksport qiling va uni oching: qarang: [.pln va .pla loyiha fayllarini ochish](topic:pln-project-files).

**"Bu IFC fayl oʻqib boʻlmadi."**
IFC fayl buzilgan yoki haqiqiy IFC emas. Uni matn muharririda oching: haqiqiy IFC fayl `ISO-10303-21;` bilan boshlanadi. Uni qayta eksport qiling.

**"Bu fayl toʻliq emas: u … MB, lekin uning oʻz indeksi kamida … MB ga yetadigan maʼlumotlarga ishora qiladi. …"**
Loyiha yoki oila fayli nusxalash, yuklash yoki sinxronlashda kesilib qolgan. "Faqat onlayn" holatidagi bulutli disk fayli ham xuddi shunday koʻrinadi. Oʻz-oʻzidan ochilgan fayl hali ochiladi, kartochka tepasida shu xabar bilan va "Tiklangan qismlar koʻrsatilmoqda; toʻliq model uchun asl nusxani qayta nusxalang." bilan: kartochka faqat har bir bayti faylda boʻlgan qismlarni koʻrsatadi va qolganlarini **Faylda yoʻq** ostida sanaydi. Bulutli diskingizda faylni oflayn qilib qoʻying yoki asl nusxani qayta nusxalab, qayta oching. Papkada BimCraft eng yangi toʻliq zaxira nusxani koʻrsatadi.

**"… Faylning oʻz mundarija roʻyxati ham yoʻqolgan qismda, shuning uchun undagi hech narsani ochib boʻlmaydi."**
Fayl shu qadar erta kesilganki, hatto uning mundarija roʻyxati ham yoʻq. Bu nusxadan hech narsani tiklab boʻlmaydi. Asl nusxani qayta nusxalang va qayta oching.

**"Bu compound fayl BasicFileInfo oqimiga ega emas, shuning uchun u Revit fayli emas."**
Fayl boshqa turdagi compound fayl (eski ofis hujjatlari ham shu konteynerdan foydalanadi). Toʻgʻri faylni tanlaganingizni tekshiring.

**"Oldingi narsa ustida hali ishlanmoqda…"**
BimCraft hali oldingi fayl yoki papka bilan band. Holat qatori tugashini kuting, soʻng qayta urinib koʻring.

**Fayl tanlagichda mening faylim faol emas.**
Tanlagich faqat `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` va `.dxf` ni taklif qiladi. Boshqa fayllarni sahifaga sudrab olib keling, BimCraft oʻqiy olishini oʻzi aytadi.

## Papkalarni ochish

**"Bu papkada 20 000 dan ortiq fayl bor. Kichikroq papkani tanlang, masalan bitta loyihani."**
Juda yuqori papkani tanladingiz, masalan butun disk. Bitta loyiha papkasini tanlang.

**"Brauzer *name* ga ruxsat bermadi. Uni Papka ochish orqali qayta tanlang."**
{{ui:Qayta ochish}} ni bosdingiz va brauzerning ruxsati rad etilgan yoki muddati tugagan. Papkani qayta tanlang yoki sudrab olib keling.

**Brauzer fayllarni "yuklash" deydi.**
Bu brauzerning sahifaga fayllarni berish uchun oʻz soʻzi. BimCraft ularni hech qayerga yubormaydi. Savolni oldini olish uchun papkani sudrab olib keling.

**Telefon yoki planshetda hech narsa boʻlmaydi.**
Koʻpgina mobil brauzerlar papkalarni tanlay olmaydi. Bitta fayllarni oching yoki kompyuterdan foydalaning.

## IFC dvigateli birinchi marta yuklanadi

**Holat qatori "IFC dvigatelini ishga tushirilmoqda…" da qoladi yoki "Failed to fetch" kabi xato koʻrsatadi.**
IFC dvigatelini yuklab boʻlmadi. Siz oflaynda boʻlishingiz mumkin, yoki devor (firewall) yoki kontent bloklagich uni toʻxtatayotgan boʻlishi mumkin.

:::offline
Siz oflaynsiz. Ilova panelidagi tugma {{ui:Oflayn tayyor}} demasa, IFC dvigateli bu brauzerda hech qachon saqlanmagan. Ulanishni tiklang, faylni qayta oching, soʻng {{ui:Oflayn uchun saqlash}} ni bosing, shunda keyingi safar oflaynda ishlaydi. Qarang: [Onlayn va oflayn](topic:online-offline).
:::

:::online
Sahifani qayta yuklang va yana urinib koʻring. Ish tarmogʻida boʻlsangiz, IT jamoangizdan saytning `.wasm` fayllariga ruxsat berishni soʻrang.
:::

## Oflayn foydalanish uchun saqlash

**Tugmada {{ui:Saqlab boʻlmadi}} yozilgan.**
Baʼzi fayllar yuklanmadi, odatda ulanish uzilgani uchun. Ulanishni tekshiring va tugmani qayta bosing. Yangi nusxa toʻliq boʻlguncha avvalgi oflayn nusxa saqlanadi.

**Tugmada {{ui:Oflayn rejim mavjud emas}} yozilgan.**
Bu oyna oflayn nusxani saqlay olmaydi, masalan maxfiy oyna yoki boshqariladigan ish kompyuteri. Qarang: [Oflaynda ishlash](common:offline).

**Tugma bir muncha vaqt "*n* dan *m* saqlanmoqda" da turadi.**
BimCraft nusxasi taxminan 11 MB, asosan IFC dvigateli. {{ui:Oflayn tayyor}} deguncha yorliqni ochiq qoldiring.

**BimCraft oflaynda ochildi, lekin eskirgan koʻrinadi.**
Saqlangan nusxa avvalgi tashrifdan. Onlayn boʻlganingizda {{ui:Oflayn tayyor}} ni bosing va {{ui:Qayta saqlash (eng yangi versiyani olish)}} ni tanlang.

## 3D koʻrinish

**Model kutilgan joyda emas yoki juda kichik.**
{{key:F}} ni bosing yoki {{ui:Moslash}} ni bosing. Moslash har doim modeldagi hamma narsani kiritadi — belgisi olib tashlangan qavatlar va binodan uzoqdagi adashgan elementlarni ham — shuning uchun bino kichik koʻrinishi mumkin. Shundan keyin kattalashtiring.

**Bosish hech narsani tanlamaydi.**
Bosish vaqtida sichqonchani qimirlatmay tuting: kichik surish aylantiradi. Belgisi olib tashlangan qavatlardagi elementlarni tanlab boʻlmaydi. {{ui:Boʻshliqlar}} yoqilgan boʻlsa, shaffof boʻshliqlar ichidagi narsalardan oldin tanlanadi.

**{{ui:Qirralar}} tugmasi oʻchirilgan: "Juda katta modellarda qirralar oʻchirilgan".**
Modelda 1,5 milliondan ortiq uchburchak bor. Xotirani tejash uchun qirralar oʻchirilgan.

**Yorliq sekinlashadi, oqarib ketadi yoki brauzerning ishdan chiqish sahifasini koʻrsatadi.**
Model brauzer yorliqqa ajratgan xotiradan katta. Boshqa yorliqlarni yoping va qayta yuklang. Kichikroq IFC eksport qiling: bitta bino, bitta yoʻnalish yoki kamroq qavat. Qarang: [Brauzerlar, qurilmalar va xotira](topic:platforms).

**3D koʻrinish boʻsh qoladi.**
WebGL oʻchirilgan yoki bloklangan boʻlishi mumkin. Brauzer sozlamalarida apparat tezlashtirishni (yoki grafik tezlashtirishni) yoqing va brauzerni qayta ishga tushiring.

## IFC ni tahrirlash

**"Raqam kiriting."** Qiymat sonli. Birliksiz oddiy son kiriting, masalan `2.4`.

**"Butun son kiriting."** Qiymat soni yoki butun son. Kasr qismini olib tashlang.

**"Faqat yagona qiymatli xususiyatlarni tahrirlash mumkin."** Roʻyxatlar, sanab oʻtishlar va oʻlchamlar faqat oʻqish uchun.

**{{key:Mod+S}} brauzerning "Sahifani saqlash" oynasini ochadi.**
Saqlanmagan oʻzgarishlar yoʻq, shuning uchun BimCraft tugmani brauzerga qoldirdi. Oynani yoping.

**{{key:Mod+Z}} hech narsa qilmaydi.**
U faqat saqlanmagan oʻzgarishlaringiz boʻlganda va maydonga matn kiritmayotganingizda ishlaydi. Saqlagandan keyin bekor qilinadigan narsa qolmaydi.

**{{ui:Oʻzgarishlar}} roʻyxati, ularni bekor qilib, chizma yoki papkani ochganimdan keyin ham tahrirlarni koʻrsatadi.**
"Ularni bekor qilish?" savoliga OK bilan javob berib, IFC modeldan boshqa narsani ochsangiz, eski tahrirlar xotirada qoladi va {{ui:IFC sifatida saqlash}} ularni hali ham saqlaydi. Haqiqatan yangidan boshlash uchun asl IFC ni qayta oching yoki sahifani yangilang.

**Tahririm tanlaganimdan koʻproq elementni oʻzgartirdi.**
"(tur)" deb belgilangan toʻplamdagi xususiyatni oʻzgartirdingiz. Tur xususiyatlari shu turdagi har bir elementga qoʻllanadi. {{ui:Ortga qaytarish}} ni bosing. Qarang: [Tur xususiyatini bir turdagi har bir element uchun oʻzgartirish](topic:type-vs-instance).

## Chizmalar

**"*name* oʻqib boʻlmadi. U buzilgan boʻlishi mumkin yoki oʻquvchi hali qayta ishlamaydigan formatda saqlangan (…)."**
Chizmani uni yaratgan dasturdan eski DWG (2018 yoki undan oldingi) yoki DXF sifatida saqlang va qayta urinib koʻring.

**"Bu chizmada koʻrsatadigan hech narsa yoʻq."** yoki **"*name* boʻsh chizma: unda chiziq, matn yoki bloklar yoʻq."**
Chizma boʻsh, yoki BimCraft hali chizmaydigan narsalarni saqlaydi (qarang oʻngdagi **Hali chizilmagan**).

**"Bu chizma juda katta; faqat bir qismi koʻrsatilmoqda."**
BimCraft javob berish uchun chizishni toʻxtatdi. Kerak boʻlmagan qatlamlarni oʻchiring yoki kerakli varaqlarni kichikroq chizmadan oching.

**Varaqning qismlari yoʻqolgan.**
Bogʻlangan chizmalar yetishmayotgan boʻlishi mumkin: oʻngdagi **Bogʻlangan chizmalar** ni koʻring. Qarang: [Bogʻlangan chizmalar va rasmlarni topish](topic:dwg-linked-files). Qatlamlar ham oʻchiq boʻlishi mumkin: {{ui:Hammasini yoqish}} ni bosing.

**Rasm boʻsh ramka boʻlib koʻrinadi.**
Uning fayli topilmadi yoki u TIFF ("TIFF brauzerda koʻrsatilmaydi"). {{ui:Rasmlarni qoʻshish…}} bilan PNG yoki JPEG nusxasini qoʻshing.

**Trackpadda aylantirish chizmani surmasdan kattalashtiradi.**
BimCraftʼda chizmalar shunday ishlaydi. Surish uchun bosing va suring.

## Hali tugallanmagan

[Hali qurilmagan narsalar](topic:not-built-yet) ni oʻqing: siz qidirayotgan narsa bu versiyada boʻlmasligi mumkin.
