---
title: Jadvallar, oʻlchamlar va reja PDF fayli
summary: Chizgan sari oʻzgaradigan eshik, deraza, devor va xona jadvallari, planda oʻlchamlar va qavat planini standart masshtabda PDF sifatida saqlash.
keywords: jadval, eshik jadvali, deraza jadvali, devor jadvali, xona jadvali, miqdorlar, hajmlarni hisoblash, maydon, csv, elektron jadval, oʻlchamlar, oʻlcham, chop etish, pdf, chizish, masshtab, 1/4", 1:50, varaq
from: d97cd16e
---

## Nima qilasiz

Chizayotganingizda, qurgan binoyingiz nimaga teng ekanini koʻrasiz: har bir oʻlchamdagi eshik va derazalar soni, har bir turdagi devor qanchaligi, har bir xona qanchaligi. Planga oʻlchamlar qoʻying va uni chop etish yoki yuborish uchun PDF sifatida saqlang.

## Jadvallar

{{ui:Draw}} yoqilgan boʻlsa, chap paneldagi **Schedules** bir vaqtda bitta jadvalni koʻrsatadi:

- **Doors** va **Windows**: har biri belgisi bilan (D1, D2 … va W1 …, joylashtirganingizda berilgan), turi, kengligi, balandligi (va tokchasi), qavati va joylashgan devori.
- **Walls by type**: har bir devor turi uchun nechta devor, ularning qalinligi, umumiy uzunligi va yon maydoni **Gross area**, **Deductions** va **Net area** koʻrinishida, jami bilan.
- **Rooms**: raqami, nomi, qavati, maydoni va perimetri, jami maydon bilan.
- **Floors**: har bir pol qavati, turi va qalinligi bilan, hamda uning yalpi maydoni, ayirmalari va sof maydoni.
- **Finishes**: devor turlarining har bir pardozlash qatlami (material va devor tomoni boʻyicha) va shiftlar, yuzlar soni va yalpi, ayirmalar va sof bilan.
- **Wall types: takeoff data**: har bir devor turiga bir marta kiritilgan maʼlumot (birlik, qorishma, norma), devorlar soni, ularning uzunligi va sof maydoni, hamda norma oʻlchangan miqdorga koʻpaytirilgani. Qarang: [Devor yigʻmalari](topic:wall-assemblies).

- **Finishes by room**, **Finishes by wall**, **Finishes by zone** va **Finish quantities**: har bir xonani nima qoplashi, maydonlar, kesishlarni hisobga olgan holda plitkalar soni va asos hajmlari. Qarang: [Xona pardozlari va pardoz jadvallari](topic:room-finishes).
- Oʻz **set-ups** ingiz: guruhlangan, jamlangan va nom bilan saqlangan jadval. Qarang: [Jadvalni tuzish, saqlash va eksport qilish](topic:schedule-layouts).

Jadvallar har bir tahrirda oʻzgaradi. Qatorni yoki bitta raqamni bosing, u qaysi elementlardan kelganini tanlash uchun. **Download CSV** jadvalni elektron jadvalda ochish uchun saqlaydi; **Download Excel** va **Copy for Google Sheets** uning ostida. **Room finishes** va **Specification** ([Specification ni modeldan yozish](topic:specification)) xuddi shu joydan ochiladi.

## Har bir qatlamning maydoni va hajmi

Schedules roʻyxatida **Layers: area and volume** ni tanlang. U ishlatilayotgan har bir devor, pol, tom va shift turining har bir qatlami uchun bitta qator koʻrsatadi: element, turi va uning LOD si, qatlam (devorda tashqi tomondan, pol, tom yoki shiftda yuqoridan sanaladi), uning materiali va vazifasi, qalinligi, elementlar soni, **net area** va **volume**.

- Maydon shu turdagi elementlarning sof maydoni, Devorlar turi boʻyicha, Pollar va Pardozlashdagi kabi oʻlchangan, loyihaning oʻlchash usuli boʻyicha. Tom nishabda oʻlchanadi; hech bir oʻlchash usulida tomlar uchun qoida yoʻq.
- Hajm shu maydon koʻpaytirilgan qatlamning oʻz qalinligi.
- Turi yoʻq pol, tom yoki shift bitta qator: oʻz qalinligidagi bitta qatlam.
- Havo boʻshligʻi maydoni bilan roʻyxatga olinadi va umumiy hajmdan chiqariladi. Membrana maydoni bor, hajmi yoʻq.

Elementlarini tanlash uchun qatorni bosing. **Download CSV** jadvalni saqlaydi.

## Maydonlar qanday oʻlchanadi

Har bir maydon uchta sonning yigʻindisi: yalpi minus ayirmalar sof. Qoida har bir jadval ustida yozilgan va bu bitta qoida: jadvallar, IFC faylida saqlangan miqdorlar va TakeoffCraft ga berilgan hisob-kitob ularning hammasi uni ishlatadi.

- **Devor**: yalpi devorning bir yuzi, markaziy chiziq boʻyicha uzunligi koʻpaytirilgan balandligi (yuqori yoki pastki shakli bor devor uchun haqiqiy yuz). Har bir eshik, deraza va boshqa teshik ayiriladi, kengligi koʻpaytirilgan balandligi, har bir teshik bir marta.
- **Pol yoki shift**: yalpi maydon uning konturi ichidagi maydon. Ichidagi har bir teshik va kesim bir marta ayiriladi.
- **Devor pardozi**: devor turining har bir pardozlash qatlami devorning bir yuzini qoplaydi, devor kabi oʻlchanadi, bir xil teshiklar ayiriladi. Pardoz devorning qatlami: u Pardozlarda roʻyxatga olinadi va devor maydoniga qoʻshilmaydi, shuning uchun eshikli devor hech qachon ikki marta sanalmaydi.

Bu **CadCraft default**: har bir teshik ayiriladi, qanday kattalikda boʻlishidan qatʼi nazar; devor uzunliklari markaziy chiziq boʻyicha; reveal lar oʻlchanmaydi. Siz boshqa usulni tanlamaguningizcha har bir loyiha shunday ishlaydi.

## Oʻlchash usulini tanlash

Jadval ustida **Measurement method** BimCraft bilan keladigan usullarni koʻrsatadi, **Load a method file** esa idoraning oʻz usulini oladi. Tanlov IFC faylida saqlanadi, bitta bekor qilish qadami sifatida, va uchta narsa birdaniga unga ergashadi: jadvallar, faylda saqlangan sof miqdorlar va TakeoffCraft ga berilgan hisob-kitob. Har bir jadval ustidagi qoida endi usulni, uning manbasini, manba oʻqilgan sanani va **Unchecked by a quantity surveyor** soʻzlarini boshlaydi.

Usul — dastur kodi emas, balki kichik faktlar fayli. Har bir miqdor uchun u aytadi:

- **eng kichik ayiriladigan teshik**: masalan, 0,5 m² yoki undan kichik teshik devor maydonida qoladi;
- **devor tutashuvlari qanday oʻlchanadi**: markaziy chiziq boʻyicha; yoki boshqasiga tiralgan devor oʻsha devorning yuziga qadar; yoki boshqa devorga tutashgan har bir devor uchi yaqin yuzgacha;
- **pardoz uchun reveal lar oʻlchanadimi** (pardozning teshiklarga qaytishlari), maydon sifatida yoki sayoz boʻlsa, uzunlik sifatida. Reveal ning chuqurligi devor qalinligining yarmi deb olinadi;
- **gʻisht-tosh haqida nima deydi**: u qanday oʻlchanadi va qanday chiqindi yoki qorishma zahirasi aytilgan.

BimCraft bilan keladigan usullar:

| Usul | Devorlar: eng kichik ayiriladigan teshik | Devor pardozlari | Shiftlar | Gʻisht-tosh |
|---|---|---|---|---|
| CadCraft default | har bir teshik | har bir teshik | har bir kesim | zahira yoʻq |
| RICS NRM 2 (Buyuk Britaniya), 2-nashr 2021 | 0,5 m² yoki undan kichik qoladi | 1 m² yoki undan kichik qoladi | 1 m² yoki undan kichik qoladi | maydon boʻyicha; foizlar aytilmagan |
| AAQS Africa uchun standart usul 2015 | 0,5 m² yoki undan kichik qoladi | 0,5 m² yoki undan kichik qoladi | 0,5 m² yoki undan kichik qoladi | maydon boʻyicha; sof oʻlchangan, 0% chiqindi |
| IS 1200 (Hindiston), 1976, gʻishtin terish | 0,1 m² yoki undan kichik qoladi | default (quyida) | default | hajm boʻyicha |
| BIA Technical Note 10 (AQSh), 2009 | har bir teshik | default | default | birliklarda 5% chiqindi, qorishmada 15% |

Usulga ishonishdan oldin bu cheklovlarni oʻqing:

- **Ularning hech birini hech bir miqdor muhandisi tekshirmagan.** Har biri koʻrsatilgan manbani oʻqib, uning raqamlarini ularning bandlari bilan yozish orqali yaratilgan. Agar siz miqdor muhandisi boʻlsangiz va birortasini tekshira olsangiz, ilova yaratuvchilari sizdan eshitishni xohlaydi.
- Qoida manbadan oʻqib boʻlmagan joyda, usul uni **not confirmed** deb belgilaydi va CadCraft default ishlatiladi. BimCraft bilan keladigan birorta ham usulda devor tutashuvlari, reveal lar yoki pollar uchun tasdiqlangan qoida yoʻq, shuning uchun ular hammasida default usulda oʻlchanadi.
- IS 1200 suvoqdagi teshiklarni uch diapazonda ayiradi. Usul fayli hali diapazonlarni saqlay olmaydi, shuning uchun devor pardozlari bu usulda defaultdan foydalanadi va qoida buni aytadi.
- Janubiy Afrika Standard System of Measuring Building Work bu yerda **emas**: uning matni oʻqib boʻlmadi. AAQS Africa usuli esa uni 1991-yil nashriga asoslangan deydi, lekin bu boshqa hujjat.
- BIA Technical Note 10 bu sanoat hisoblash eslatmasi, standart oʻlchash usuli emas.
- Aynan eng kichik oʻlchamdagi teshik usulning oʻz soʻzlariga amal qiladi ("not exceeding", "less than"). 2 ta birlik 10 000 ta birlik ichidagi oʻlchamlar uni aynan shu deb hisoblanadi.
- Usul boʻyicha faylning devorning sof yon maydoni va pol yoki shiftning sof maydoni usulga ergashadi va miqdorlar toʻplami uni nomlaydi. Faylda yalpi maydonlar va hajmlar chizilganidek qoladi.

**Notes on this method**, tanlagich ostida, har bir manba nimani ochiq qoldirishini aytadi. **Open the source** hujjatga oʻtadi.

### Idoraning oʻz usuli

Usul fayli `cadcraft-measurement-method` formatidagi JSON. Uning har bir qiymati uni keltirib chiqaradigan bandni nomlaydi; bandi yoʻq qiymat rad etiladi. Fayl yuklanganda tekshiriladi, notoʻgʻri maydon nomlanadi va tekshiruvdan oʻtmagan fayldan hech narsa ishlatilmaydi. Tanlangandan keyin fayl loyiha ichida saqlanadi, shuning uchun loyiha boshqa kompyuterda ham bir xil ochiladi. Uning identifikatori oʻzingizning oddiy nomingiz boʻladi (ilova bilan kelgan usulning identifikatori boʻlishi mumkin emas).

## Gʻisht, blok va qorishma

**Wall types: takeoff data** birligi uzunlik va balandlikka ega boʻlgan har bir devor turining birliklari va qorishmasini sanaydi (qarang [Devor turiga hisoblash maʼlumotini berish](topic:wall-assemblies#give-a-type-its-takeoff-data)). Bular hisoblangan formulalar aynan shunday:

- **Bir qatlam yuzasidagi birliklar** = 1 / ((birlik uzunligi + bogʻlam) × (birlik balandligi + bogʻlam)). 10 mm bogʻlamli 215 × 65 mm gʻisht: 1 / (225 × 75 mm) = m² uchun 59,26.
- **Qatlam boʻylab birlik kengliklari** = (qatlam qalinligi + bogʻlam) / (birlik kengligi + bogʻlam), butun songa yaxlitlangan, kamida 1. 102,5 mm qatlamdagi 102,5 mm gʻisht 1 ga teng; xuddi shu gʻishtdagi 215 mm devor 2 ga teng.
- **Birliklar** = birliklar yuzasi × birlik kengliklari × devor yuzining sof maydoni, turning gʻisht qatlamlari boʻyicha qoʻshilgan.
- **Buyurtma qilinadigan birliklar** = birliklar × (1 + chiqindi % / 100), eng yaqin butun birlikka yuqoriga yaxlitlangan. Chiqindi turda kiritilgan; agar kiritilmagan boʻlsa, usulniki, agar u aytgan boʻlsa; aks holda 0%.
- **Qorishma** = sof maydon × qatlam qalinligi, birliklar hajmi ayirilgan (birliklar × uzunlik × balandlik × kenglik), keyin turda kiritilgan qoʻshimcha foiz qoʻshiladi (yuzalar yoki teshiklar uchun), keyin usul aytgan zaxira qoʻshiladi. Unga birlik kengligi kerak.

Nima taxmin qilinadi: turning har bir gʻisht qatlami uning yagona birligidan qurilgan; birlik kengligidan qalinroq qatlam shuncha birlik kengligi deb sanaladi, har biri uzunasiga yotqizilgan qatlam kabi, shuning uchun kesilgan birliklar, yopuvchilar va maxsus shakllar alohida sanalmaydi; hech bir qatlam birlikdan qurilgan deb belgilanmagan joyda, asosiy qatlamlar qatlam deb olinadi, va jadval ustidagi eslatma buni aytadi. **Amount** — stavka va stavka qanday birlikka: bu endi buyurtma qilinadigan birlik, 1000 buyurtma qilinadigan birlik yoki m³ qorishma boʻlishi ham mumkin.

Belgilar elementlarning IFC tegi: **Properties** (Tag) da uni oʻzgartiring, jadval unga ergashadi. Har bir IFC modeli uchun, chizilgan yoki chizilmagan, [Miqdorlarni jamlash, elementlarni roʻyxatlash va fazolarni jadvallash](topic:quantity-totals) istalgan xossani jamlaydi.

## Oʻlchamlar

Plan har bir chizilgan devorning uzunligini tashqi yuzi boʻylab koʻrsatadi (ichki devor: bir yuz boʻylab) va eshik yoki deraza bor devor uchun burchaklardan har bir teshikkacha zanjir. **Dimensions** model panelida ularni yashiradi va yana koʻrsatadi.

## Rejani PDF sifatida saqlash

1. Kerakli qavatni koʻrsating va **Levels** panelida birliklarni belgilang.
2. Model panelida {{ui:Print}} ni bosing.
3. BimCraft "<file> — <level>.pdf" ni saqlaydi: sahifaga sigʻadigan eng katta standart masshtabdagi plan qora-oq rangda (Letter da futda va dyuymda 1/4" = 1'-0", 1/8" = 1'-0" …; A4 da millimetrda 1:50, 1:100 …), devorlari boʻyalgan, eshik, deraza, xona nomlari va maydonlari, oʻlchamlar, va qavat, fayl, kesish balandligi, sana va masshtab bilan sarlavha chizigʻi.

PDF chiziqlar va matn sifatida chiziladi, shuning uchun u istalgan kattalashtirishda oʻtkir qoladi va matnini qidirish mumkin.

## Foydali maʼlumot

- Jadvallarda faqat chizish asboblari yaratgan narsalar roʻyxatga olinadi. Boshqa dasturdan kelgan eshik va derazalar oʻrniga Quantity totals da koʻrinadi.
- Ishni narxlash uchun miqdorlarni TakeoffCraft ga bering: qarang [Miqdorlar TakeoffCraft ga](topic:takeoff). CSV yuklab olish elektron jadval uchun qoladi.
