---
title: Miqdorlarni TakeoffCraftʼga uzatish
summary: Bir bosishda modelning miqdorlari TakeoffCraftʼga yuboriladi — turlari boʻyicha devorlar, qiya maydoni boʻyicha tomlar, tom qirralari, qiya qirralar va vodiylar, poydevorlar, eshiklar va derazalar, shkaflar, elektr qurilmalari, qavat maydoni hamda yogʻoch kesish roʻyxati — har bir qavat rejasida belgilangan holda, elementlarda savdo toʻplamlarining yigʻmalari bilan.
keywords: hajmlarni hisoblash, miqdor boʻyicha hisoblash, smeta, smeta tuzish, materiallar roʻyxati, materiallar spetsifikatsiyasi, takeoffcraft, miqdorlar, devor maydoni, tom maydoni, kvadratlar, poydevor, beton, kub yard, kesish roʻyxati, yogʻoch, savdo toʻplami, yigʻma
from: c5a745af
---

## Nima qilasiz

Modelni TakeoffCraftʼda materiallar roʻyxati va smetaga aylantiring. BimCraft har bir qavatning rejasini standart masshtabda chizadi, unda har bir miqdorni belgilaydi va hajmlarni hisoblashni PDF ichiga joylaydi. TakeoffCraft belgilarni oʻzi oʻlchaydi, shuning uchun har bir raqamni varaqda tekshirish mumkin.

## Yuborish

1. Model panelida {{ui:Hajmlarni hisoblash}} tugmasini bosing ({{ui:Varaqlar}} yonida).
2. TakeoffCraft rejalar bilan yangi yorliqda ochiladi. Soʻraganda, PDF ichidan topilgan hajmlarni hisoblashni ochishni tanlang.
3. TakeoffCraftʼning miqdorlar jadvaliga narxlaringizni kiriting; yigʻmalarda materiallar allaqachon koʻrsatilgan.

:::note
Bu yerda TakeoffCraft mavjud boʻlmasa, tugma oʻrniga PDF faylni yuklab oladi. Uni keyinroq TakeoffCraftʼda oching: u ichidagi hajmlarni hisoblashni topadi.
:::

## Nimalar oʻlchanadi

- **Devorlar** turi va balandligi boʻyicha: ularning oʻq chiziqlari uzunlik sifatida, elementda devor balandligi bilan, shuning uchun TakeoffCraft uzunlik va devor maydonini beradi. Har bir uzunlik devorning eshiklari va derazalarini oladi, shuning uchun TakeoffCraft ularni devor maydonidan bir marta chiqaradi, BimCraft jadvallari bilan bir xil qoida boʻyicha: ikkalasi yalpi, chegirmalar va sof qiymatda mos keladi. Devor turining hajmlarni hisoblash maʼlumotlari (oʻlchov birligi, qorishma, stavka; qarang: [Devor yigʻmalari](topic:wall-assemblies)) shu tur elementiga bitta narxlangan qator sifatida keladi. Standart usuldan boshqa oʻlchash usuli boʻyicha (qarang: [Oʻlchash usulini tanlash](topic:plan-schedules-and-pdf#choose-a-measurement-method)), hisoblashda usul koʻrsatiladi, har bir uzunlikda tugunlar devor yuzidan nima olib tashlashi koʻrsatiladi va TakeoffCraft xuddi shu usulda oʻlchaydi va uni nomlaydi. Birligida uzunlik va balandlik boʻlgan tur ikkita tarkibiy qism bilan miqdorlarni beradi: buyurtma qilinadigan birliklar va qorishma hajmi; stavka birlik boʻyicha, 1000 birlik boʻyicha yoki qorishmaning m³ boʻyicha boʻlsa, narxlanadi. Miqdor aniq butun songa toʻgʻri kelsa, TakeoffCraftʼda bir birlikka koʻp boʻlishi mumkin, chunki uzatish varaqdagi joylashuvlarni yaxlitlaydi.
- **Tomlar**: har bir tom tekisligi qiyaligi bilan maydon sifatida (TakeoffCraft qiya maydonni beradi), tom qirralari, qiya qirralar va vodiylar (qiya qirralar va vodiylar oʻz qiyaligi boʻylab), tom osti va yon chetlar.
- **Poydevorlar**: tayanch va devor poydevorlari oʻz oʻrtalari atrofida uzunliklar sifatida, plitalar esa qalinligi bilan maydon sifatida, shuning uchun beton hajm boʻyicha chiqadi.
- **Eshiklar va derazalar** turi boʻyicha sanaladi, deraza bezaklari bilan.
- **Pastki shkaflar** ularning old tomonlari uzunligi boʻyicha.
- **Elektr qurilmalari** turi boʻyicha sanaladi.
- **Qavat maydoni** har bir qavatning xonalaridan.
- **Yogʻoch kesish roʻyxati** karkasdan, oʻz varagida sanaladi (har bir dona uchun bitta nuqta).

Savdo toʻplami mos yigʻmaga ega boʻlgan joyda — tashqi va ichki devorlar, plitalar, poydevorlar, devor poydevorlari, shifer, tom qirrasi va qiya qirra qopqogʻi, vodiylar, tom osti, ichki eshiklar, deraza bezaklari, pastki shkaflar, rozetkalar, kalitlar, chiroqlar, tutashuv qutilari va shchit — element oʻz materiallari va formulalari bilan keladi. Toʻplamlar narxsiz keladi va hali smetachi tomonidan koʻrib chiqilmagan.

:::tip
Rejalar har safar bosganingizda model asosida yaratiladi, shuning uchun oʻzgarishdan keyin {{ui:Hajmlarni hisoblash}} tugmasini yana bosing.
:::
