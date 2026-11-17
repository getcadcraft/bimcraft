---
title: Xonalar, pollar, shiftlar va tomlar
summary: Xonalar devorlar ularni yopishi bilan paydo boʻladi; xona yoki butun bino uchun pol va shift bering, devorlarga choʻkma yoki fronton tom qoʻying. Devorlar siljisa, ularning hammasi ularga ergashadi.
keywords: xona, xonalar, boʻshliq, maydon, perimetr, pol, plita, qoplama pol, shift, tom, choʻkma tom, fronton tom, qiyalik, chiqma, karniz, tizma, vodiy, 6/12
from: 1fb1813c
---

## Nima qilasiz

Bino qobigʻini tugallang. Xonalar devorlardan oʻzi paydo boʻladi; pol, shift va tomning har biri bitta bosishda qoʻyiladi. Ular devorlardan topilgani uchun devorlar siljisa, ular ham siljiydi.

## Xonalar

Chizilgan devorlar bilan yopilgan har bir boʻshliq xona hisoblanadi. U oxirgi devor uni yopishi bilanoq paydo boʻladi, raqami (birinchi qavatda 101, 102 … keyingi qavatda 201 …) va nomi (**Xona 1**, **Xona 2** …) bilan, uning maydoni esa rejada oʻrtasida koʻrsatiladi.

- {{ui:Tanlash}} yoqilgan boʻlsa, xonani tanlash uchun uning ichiga bosing. **Xossalar** boʻlimida uning **Nomi** (masalan, `Oshxona`) va **Raqami** ni oʻzgartiring; uning maydoni va perimetri koʻrsatiladi.
- Ikki xona orasidagi devorni oʻchirsangiz, ular bitta boʻladi; xona ustidan devor chizsangiz, u ikkiga boʻlinadi. Atrofidagi devorlar siljiganda xona oʻz nomi va raqamini saqlab qoladi.
- Xonani alohida oʻchirib boʻlmaydi: u devorlar hosil qilgan boʻshliq.

Maydonlar devor yuzalari ichidan oʻlchanadi. Xonalar IFC boʻshliqlari sifatida pol maydoni, perimetri, balandligi va hajmi bilan saqlanadi, shuning uchun jadvallar ularni oʻqiydi (qarang: [Miqdorlarni jamlash, elementlarni roʻyxatga olish va boʻshliqlarni jadvallash](topic:quantity-totals)).

## Polar

1. {{ui:Pol}} tugmasini bosing.
2. **Bu xona** yoki **Butun bino** ni tanlang, soʻng **Koʻrinishi** (yogʻoch pol yoki beton plita) va qalinligini belgilang.
3. Xona ichiga (yoki bino ichida istalgan joyga) nuqta qoʻying. Pol qoplaydigan joy uning maydoni bilan ajratib koʻrsatiladi.
4. Bosing. Polning ustki tekisligi qavat sathida boʻladi; u qalinligi qadar pastga tushadi. Butun bino poli devorlarning tashqi yuzalarigacha yetadi.

## Shiftlar

1. {{ui:Shift}} tugmasini bosing.
2. **Bu xona** yoki **Butun bino** ni tanlang va uning polidan **Balandligi** ni kiriting.
3. Ichiga nuqta qoʻying va bosing.
4. Uni pastdan, toʻri va ustidagi yoritgichlari bilan koʻrish uchun rejani shift rejasiga oʻtkazing: qarang: [Koʻrinishlar, koʻrinish diapazonlari va oʻz varaqlaringiz](topic:views-and-sheets).

## Tom

1. Devorlari tomni koʻtaruvchi qavatda {{ui:Tom}} tugmasini bosing.
2. **Qiyalik** ni 12 ga nisbatan koʻtarilish (`6/12`) yoki gradusda (`30`) kiriting, va **Chiqma** ni kiriting.
3. **Uchlari** ni tanlang: **Choʻkma tom** (har bir tomon qiyalashadi), **Qisqa tomonlarda frontonlar** yoki **Uzun tomonlarda frontonlar** (toʻrt tomonli bino uchun) yoki **Bir qiyali tom**.
4. Bino ichiga nuqta qoʻying: karniz va tizma rejada koʻrinadi. Bosing.

Tom devorlar ustida, ulardan bitta yuqori qavatda turadi, uning ostki tekisligi devorlarning tashqi yuzasiga tutashadi. Fronton uchlari pastdagi devor qalinligidagi fronton devori bilan toʻldiriladi. L-, T- yoki U-shaklidagi bino qanotlari vodiylarda tutashuvchi choʻkma tom oladi.

## Ularni oʻzgartirish

Pol, shift yoki tomni tanlang (3D koʻrinishda, model daraxtida yoki tomni yuqori qavatda uning konturi ichiga bosib) va uni **Xossalar** da oʻzgartiring: polning koʻrinishi, qalinligi va yuqori tekisligining sathdan balandligi; shiftning balandligi, qalinligi va **Naqsh** (shift rejasida chiziladigan toʻr: yoʻq, 600 × 600, 600 × 1200, 2' × 2' yoki 2' × 4'); tomning qiyaligi, chiqmasi, uchlari va qalinligi. Har bir oʻzgarish bitta ortga qaytarish qadami boʻladi.

## Pol, shift yoki tomga qatlamlar bilan tur berish

Pol, shift va tom devor kabi **tur** olishi mumkin: har birida material va haqiqiy qalinligi bor nomlangan qatlamlar tuzilmasi.

- **Joylashtirganda.** Pol, Shift, Tom va Pol chizish asboblarida qator ustida **Turi** roʻyxati bor. **Turi yoʻq** elementni avvalgidek oʻz qalinligi bilan joylashtiradi. Tur esa qatlamlari yigʻindisi qalinligida joylashtiradi.
- **Keyinroq.** Pol, shift yoki tomni tanlang va **Xossalar** da **Turi** ni tanlang. Element oʻsha element boʻlib qoladi: joyi, xonasi va maʼlumotlari saqlanadi va hech narsa qayta chizilmaydi. Faqat uning turi, qalinligi va materiali oʻzgaradi. Eskiz bosqichidagi element shunday ishlangan elementga aylanadi: umumiy turini haqiqiy tur bilan almashtiring.
- **Turni tahrirlash…** shu tur uchun tur muharririni ochadi: qatlamlar **yuqoridan** pastga, oʻzak, har bir qatlamning vazifasi va turning LOD belgisi. Saqlash shu turdagi har bir elementni bir qadamda oʻzgartiradi, bitta ortga qaytarish uni qaytaradi. Boshlangʻich turni oʻzgartirsangiz, u oʻz turingiz sifatida nusxa boʻlib saqlanadi.
- Elementda tur boʻlsa, uning **Qalinligi** turniki boʻladi va uni qoʻlda kiritib boʻlmaydi. Uni oʻzgartirish uchun boshqa tur yoki **Turi yoʻq** ni tanlang.

Boshlangʻich turlar har biri uchun bitta **umumiy** tur (bitta qatlamli umumiy material, LOD 200 belgisi bilan) va ikkita qatlamli tur (LOD 300 belgisi bilan): yogʻoch balkali pol va qorishma qatlamli beton pol; yogʻoch tom va beton tekis tom; gipsokarton shift va osilma plitkali shift. Ular boshlangʻich qiymatlar, sinovdan oʻtgan konstruksiyalar emas: ulardan foydalanishdan oldin qatlamlarni tekshiring.

**Qatlamlar: maydon va hajm** jadvali ishlatilayotgan har bir turning har bir qatlamini roʻyxatlaydi; qarang: [Jadvallar, oʻlchamlar va PDF](topic:plan-schedules-and-pdf). Pol, tom va shift turlari turlar toʻplami sifatida yoki Kutubxona elementi sifatida loyihalar orasida koʻchadi; qarang: [Turlar toʻplamlari](topic:type-packs).

## Foydali maʼlumot

- Devorlarni siljitish, qoʻshish yoki oʻchirish ularning ustidagi xonalar, pollar, shiftlar va tomni qayta yasaydi.
- Tomni har qanday kontur ustiga qoʻyish mumkin. Har bir devorga oʻz qiyaligi, fronton yoki bir qiyali uchi, koʻtarilgan tayanch rama, peshtoq va osma tekislik berish yoki bitta tom tekisligini chizish uchun qarang: [Tomlar: har bir devor uchun qiyalik, frontonlar, bir qiyali tomlar va tom tekisliklari](topic:roofs).
- {{key:Delete}} tanlangan pol, shift yoki tomni oʻchiradi.
