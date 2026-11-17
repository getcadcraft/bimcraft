---
title: Devorlarni chizish
summary: Devorlarni sathning rejasida burchaklarini bosish yoki uzunliklarni yozish orqali chizing; burchaklar oʻzi ulanadi va devorlar IFC sifatida saqlanadi.
keywords: egri, yoy, joylashuv chizigʻi, tekislash, devor, devorlar, chizish, reja, qavat rejasi, xona, burchak, ulash, devor turi, 2x6, 2x4, cmu, beton, balandlik, sath, sathlar, qavat, yozilgan uzunlik, ortogonal, tutib olish
from: 8269cd4b
---

## Nima qilasiz

Binoning devorlarini har bir sathning rejasida chizing. Devor boshlanadigan nuqtani va keyin har bir burchakni bosing; BimCraft burchaklarni siz uchun ulaydi, har bir devorga uning qatlamlarini beradi (siding, tagqoplama, stoykalar, gipskarton …) va uni yuqoridagi sathgacha koʻtaradi. 3D koʻrinish devorlarni chizganingizda koʻrsatadi.

## Rejani oching

1. Yangi bino boshlang ([Yangi bino boshlash](topic:start-a-new-building)) yoki IFC modelini oching.
2. Asboblar panelida {{ui:Draw}} ni bosing. Yangi bino allaqachon yoqilgan holda ochiladi.
3. Sathning rejasi chapda, 3D koʻrinish esa oʻngda turadi. Sathni reja tepasidagi roʻyxatdan yoki **Sathlar** panelidagi yonidagi dumaloq tugma orqali tanlang.
4. {{ui:Plan}}, {{ui:Split}} va {{ui:3D}} asboblar panelidagi {{ui:View}} qatorining asboblari (PLAN, SPLIT buyruqlari va tugmalar avvalgidek ishlaydi). Faqat reja uchun {{ui:Plan}}, ikkalasi uchun {{ui:Split}}, 3D ni yopish uchun {{ui:3D}} dan foydalaning. Oyna tor boʻlsa (yoki interfeys oʻlchami katta boʻlsa), {{ui:Split}} rejani 3D koʻrinishning yonida emas, uning ustida koʻrsatadi.

Reja sathni poldan 4'-0" (1200 mm) balandlikda kesadi, xuddi qavat rejasi kabi. Kattalashtirish uchun sichqonchaning gʻildiragini aylantiring, surish uchun oʻrta yoki oʻng tugmani bosib torting (yoki {{key:Space}} ni ushlab turib torting); {{ui:Select}} yoqilgan boʻlsa, oddiy torting ham suradi. Kursor reja ustida tursa, {{key:F}} uni oynaga moslaydi.

## Xona chizish

1. {{ui:Wall}} ni bosing (yoki {{key:W}} ni bosing).
2. Birinchi roʻyxatda devor turini tanlang, masalan **Tashqi 2×6** yoki **Ichki 2×4**.
3. Balandligini tanlang: **Yuqoridagi sathgacha** (oʻsha sath siljisa, devor ham ergashadi), bir nechta sathdan oʻtadigan devor uchun **Yuqoriroq sathgacha** (zinali zal, ikki balandlikdagi xona, baland frontonli devor) yoki **Qatʼiy balandlik** va uni yozing. Bunday devor chizilgan sathga tegishli boʻladi; u oʻtadigan sathlarning rejalarida ochroq koʻrinadi, xonalar unga tiralib yopiladi va shu rejalardan unga eshik va derazalarni bosish mumkin (eshik oʻsha sathning poli ustida turadi). Devorning oʻzini koʻchirish yoki shaklini oʻzgartirish uchun uning boshlanadigan sathiga oʻting.
4. Devor boshlanadigan joyni bosing.
5. Har bir burchakni bosing. Har bir bosish bitta devor yaratadi; keyingisi oldingisi tugagan joydan boshlanadi. Uzunlik va burchak kursor yonida koʻrinadi.
6. Xonani yopish uchun birinchi nuqtani yana bosing. Holat qatorida xonada nechta devor borligi aytiladi; markaz chizigʻi rejimida har bir devor tashqi qatlamini xonaning tashqi tomonida oladi.
7. Yopmasdan toʻxtatish uchun {{key:Esc}} ni bosing (yoki oʻng tugmani, yoki ikki marta bosing).

Burchaklar oʻzi ulanadi: ikki devor kesim chokida uchrashadi, boshqa devorga tiralib tugagan devor oʻz yuzi bilan toʻxtaydi (T shakli), bitta nuqtada uchta yoki undan koʻp devor burchakni birga ishlatadi. Bir-birini kesib oʻtgan devorlar oʻz holicha qoladi.

Butun xonani bir vaqtda chizish uchun: toʻgʻri toʻrtburchak, aylantirilgan toʻrtburchak, koʻpburchak, yoylar, tanlangan chiziqlar boʻylab yoki kontur atrofidagi devorlar uchun {{ui:Shapes}} ni oching (qarang: [Devor shakllari, boʻlish, siljitish, choʻzish va qulflash](topic:wall-tools)).

## Chizma tayanchini tanlang

Birinchi bosishdan oldin **Markaz chizigʻi**, **Ichki yuz** yoki **Tashqi yuz** ni tanlang. Yuz tanlanganda bosishlaringiz va yozilgan uzunliklar oʻsha yuzni anglatadi; BimCraft devorning markaz chizigʻini umumiy qalinlikning yarmiga siljitadi va ketma-ket burchaklarni ulaydi. Chizish yoʻnalishiga nisbatan **Tashqi chapda** yoki **Tashqi oʻngda** ni tanlang. Soat strelkasiga qarshi chizilgan yopiq kontur uchun tashqi tomon oʻngda; soat strelkasi boʻyicha chizilganda chapda boʻladi. **Ichki yuz** bilan devor tanasi chizigʻingizning tashqi tomoniga, **Tashqi yuz** bilan boshqa tomoniga oʻtadi. Yuz bilan chizish konturni yopganingizda tanlagan tashqi tomoningizni saqlaydi. Markaz chizigʻida xonani yopmaydigan devorlar tanlagan tashqi tomonini oladi; xonani yopish esa uni qanday chizganingizdan qatʼiy nazar, har bir devorning tashqi tomonini xonaning tashqarisiga oʻzi qoʻyadi.

Devor turini, tayanchni yoki tashqi tomonni oʻzgartirish joriy zanjirni tugatadi. Teskari burilish yaqinida uzun kesimlar kvadrat uchlarni qoldirish orqali cheklanadi.

Chizish paytida boʻsh joy ustidagi uchi devor uchi yoki oldingi burchak bilan gorizontal yoki vertikal tekislanishi mumkin. Uzuq-uzuq yoʻriqnoma bu nuqtani tutib olingan kursor bilan bogʻlaydi. Shift chizish yoʻnalishini toʻgʻri burchakda ushlab turadi; shunda tekislash shu yoʻnalish boʻylab toʻxtaydi. Yaqin uchlar, oʻrtalar va devor kesishmalari uzoqdagi tekislashdan ustun turadi.

## Joylashuv chizigʻi

**Tayanch** **Tashqi yuz** yoki **Ichki yuz** boʻlganda, devor oʻsha yuzni joylashuv chizigʻi sifatida saqlaydi. Keyinchalik devor qalinlashsa yoki tashqi tomoni teskari aylantirilsa, oʻsha yuz oʻz joyida qoladi va devor uning atrofida kengayadi yoki aylanadi. Unga burchakda uchrashgan toʻgʻri devor kuzatib boradi, shuning uchun burchak yopiq qoladi. Joylashuv chizigʻini keyin **Xossalar** da oʻzgartirishingiz mumkin: qarang: [Devor, eshik yoki derazani oʻzgartirish](topic:change-a-wall-or-door).

## Egri devor chizish

1. {{ui:Wall}} ni bosing, soʻng parametrlar qatoridagi **Shakl** roʻyxatidan **Egri** ni tanlang.
2. Devor boshlanadigan joyni, soʻng tugaydigan joyni bosing.
3. Uning yoyidagi nuqtani bosing. Yoki yoy balandligini kiriting va {{key:Enter}} ni bosing.
4. Zanjir devor oxiridan davom etadi. Uni tugatish uchun {{key:Esc}} ni bosing.

Egri devor uchlarida devorlarga ulanadi (burchak va T ulanishlari ishlaydi), xonalar hosil qiladi va yoyi boʻylab eshik va derazalarni ushlab turadi. Ular toʻgʻri birliklar boʻlib qoladi, oʻrtasida devorga perpendikulyar turadi, masofasi esa yoy boʻylab oʻlchanadi. Devor aylananing eng koʻp uch chorakini burishi mumkin. U oʻz uchlariga va yoyining oʻrtasiga tutib olinadi.

Egri devorlar uchun hali qurilmagan: {{ui:Trim / extend}} va {{ui:Corner}}, karkas, avtomatik reja oʻlchamlari va yoy boʻylab tutib olish. Qarang: [Hali qurilmagan](topic:not-built-yet).

## Bosish oʻrniga uzunlikni yozish

Birinchi bosishdan keyin yozing va {{key:Enter}} ni bosing:

| Yozing | Chizadi |
|---|---|
| `12'6"` yoki `3810` | shuncha uzunlikdagi devor, kursor koʻrsatgan yoʻnalishda |
| `12'6"<90` | shuncha uzunlikda, shu burchakda (gradus, oʻngdan soat strelkasiga qarshi) |
| `@3000,0` | oxirgi nuqtadan shuncha uzoqdagi nuqtagacha, koʻndalang va yuqoriga |
| `1200,3400` | rejadagi shu nuqtagacha |

Devor asbobi yoqilgan paytda raqam yozsangiz, u toʻgʻridan-toʻgʻri {{ui:Length}} maydoniga tushadi. Futda va dyuymda oddiy raqam dyuym hisoblanadi; millimetrda esa millimetr. Birlikni doim yozishingiz mumkin: `3.5 m`, `10 ft`, `6 1/2"`.

## Tutib olish

- Devor uchlari, ularning yuz burchaklari va devor oʻrtalari kursor yaqin boʻlganda tutib olinadi (kvadrat, uchburchak).
- Kursor devorning markaz chizigʻiga yoki ikki yuziga tutib olinadi (xoch).
- Oxirgi nuqtadan yoʻnalish yaqin boʻlganda har 15° da ushlanadi; uni 0°, 90°, 180° yoki 270° da ushlab turish uchun {{key:Shift}} ni ushlab turing.
- Erkin yoʻnalishlarda uzunlik 1/2" (yoki 10 mm) gacha yaxlitlanadi.

## Oʻzgartirish, qaytarish, oʻchirish

- Har bir devor **Oʻzgarishlar** ichida bitta qadam: {{ui:Undo}} va {{ui:Redo}} devorlarni orqaga qaytaradi va qayta qoʻyadi.
- {{ui:Select}} yoqilgan boʻlsa, rejada devorni bosib tanlang; 3D koʻrinish va **Xossalar** unga ergashadi. {{key:Delete}} tanlangan devorlarni oʻchiradi, ular birlashtirgan devorlar esa qayta tozalanadi.

## Sathlar

**Sathlar** paneli har bir sathni uning balandlik belgisi va balandligi bilan roʻyxatlaydi.

- Yangi nom, balandlik belgisi yoki balandlik yozing va {{key:Enter}} ni bosing. Sath belgisini (yoki balandligini) oʻzgartirish undan yuqoridagi sathlarni shuncha siljitadi, sathgacha koʻtariladigan devorlar esa ergashadi.
- {{ui:Add a level on top}} eng yuqoridagining ustiga yangi sath qoʻshadi, xuddi shunday balandlikda.
- {{ui:Add a level below}} eng pastkisining ostiga sath qoʻshadi (yer osti qavati), xuddi shunday balandlikda: agar eng past sath 0 da boʻlsa, uning belgisi manfiy boʻladi va boshqa sathlar siljimaydi. {{ui:Undo}} uni olib tashlaydi.
- {{ui:Copy this level…}} koʻrayotgan sathingizdagi narsalarni boshqa sathda yoki yuqoridagi yangi sathda qayta chizadi: devorlar eshik va derazalari bilan, pollar va shiftlar (tomlarsiz). Yuqoridagi sathgacha koʻtarilgan devorlar yangi sathdan yuqoridagi sathgacha koʻtariladi; xonalar oʻzi paydo boʻladi. Bitta {{ui:Undo}} hammasini qaytaradi. Agar boshqa sathda devorlar allaqachon boʻlsa, nusxa ularga qoʻshiladi.
- Asbob panelidagi {{ui:Units}} chizish asboblari koʻrsatadigan va oʻqiydigan hamma narsa uchun birliklarni tanlaydi (fut va dyuym, dyuym, oʻnlik fut, millimetr, santimetr yoki metr).

## Saqlash

{{ui:Save as IFC}} ni bosing. Har bir devor IFC devori boʻladi: markaz chizigʻi, birlashgan shakli, turi va qatlamlari, `Pset_WallCommon` va asosiy miqdorlari (uzunlik, balandlik, maydonlar va hajmlar) bilan, shuning uchun boshqa BIM dasturlari uni ochadi va jadvalga kiritadi.

## Yaxshi bilish kerak

- Devorlar markaz chizigʻi boʻylab chiziladi. Qalinlik devor turidan olinadi.
- Reja bu yerda chizilgan devorlarni toʻldirilgan, qolgan hamma narsani (kutubxona elementlari, boshqa dasturlardan modellar) esa xuddi shu tekislik bilan kesilgan holda koʻrsatadi; kesim ostidagi narsalar ingichka chiziqlarda koʻrinadi.
- Boshqa dasturlar yaratgan devorlar rejada koʻrinadi, lekin bu asboblar bilan hozircha oʻzgartirib boʻlmaydi.
