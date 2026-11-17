---
title: Fasadni joylashtirish va uning koʻrinishini ochish
summary: Planga fasad belgisini qoʻying, uni koʻrinadigan tomonga yoʻnaltiring, soʻng uning chizmasini loyiha brauzerida toping, unda tahrirlang va varaqqa qoʻying. Ribbon tartiblari va klassik tartib uchun qadamlar.
keywords: fasad, fasad koʻrinishi, fasad belgisi, fasad yorligʻi, fasad joylashtirish, yangi fasad, fasad yaratish, tashqi fasad, yon koʻrinish, old koʻrinish, nuqtadan koʻrinish, fasad qayerda, fasadni ochish, varaqdagi fasad, fasadni teskari aylantirish, fasadni qayta nomlash, shimoliy fasad, koʻrinishlarni yonma-yon, bo'lingan koʻrinish, reja va 3D yonma-yon
from: a7cfd2b9
---

## Nima qilasiz

Oʻzingiz xohlagan nuqtadan, xohlagan tomonga qarab, binoning chizmasini yaratasiz. Buning uchun planda ikki marta bosish kifoya. Chizma keyin binoning boshqa fasadlari qatorida roʻyxatga olinadi.

:::note
Toʻrt tomon allaqachon mavjud. Har bir binoda {{ui:Project browser}} ichida {{ui:Elevations}} ostida Shimol, Sharq, Janub va Gʻarb fasadlari bor, hech narsa joylashtirmasdan. Oʻz fasadingizni, boshqa joydan koʻrinish kerak boʻlganda joylashtiring: burchakli qanot ro'parasidan, hovli ichidan yoki xona ichidagi bitta devorning koʻrinishi.
:::

## Asbob qayerda

- Ribbon tartiblari: {{ui:View}} › **Create** › {{ui:Elevation}}.
- Klassik tartib: {{ui:Draw}} ni yoqing, soʻng {{ui:Build}} › {{ui:Elevation}}.
- Istalgan menyu uslubi: buyruq Elevation deb nomlangan; buyruqlar paneli uni topadi, buyruq qatori esa ELEVATION ni qabul qiladi.

## Qadamlar

1. {{ui:Elevation}} ni tanlang. Fasad qavat planiga joylashtiriladi, shuning uchun 3D koʻrinishda boʻlsangiz, BimCraft siz turgan qavatning planini koʻrsatadi. Koʻrsatkich **Click where the elevation stands** deydi.
2. Koʻrinish qaerdan olinishini bosing. Tashqi fasad uchun binodan tashqarida bosing, siz koʻrmoqchi boʻlgan devordan biroz uzoqroqda.
3. Koʻrsatkich endi **Click the way it looks** deydi. Binoga tomon harakatlaning: strelka yoʻnalishni koʻrsatadi, birinchi bosishingiz ustidagi qisqa chiziq koʻrinish qaradigan chekka. Bosing.
4. Plan ustida raqamli doira va koʻrsatkich paydo boʻladi. Bu fasad belgisi. Birinchisi 1, keyingisi 2.
5. Tugatish uchun Esc ni bosing, yoki davom eting va yana bir belgi qoʻying.

Belgi qoʻyish bitta qadam: {{key:Mod+Z}} uni qaytarib oladi.

## Chizmani ochish

Ikkinchi bosishdan keyin plan oldingizda qoladi. Chizma {{ui:Project browser}} da:

1. {{ui:Elevations}} ni oching. Sizniki toʻrt tomondan keyin **Elevation 1** sifatida roʻyxatda boʻladi.
2. Chizmani koʻrish va unda ishlash uchun qatordagi qalam tugmasi {{ui:Edit in this view}} ni bosing: devorlar, eshiklar, derazalar va sathlarni koʻchiring, izoh va oʻlchamlar qoʻshing. Qarang: [Fasad va kesimlarda tahrirlash](topic:edit-in-elevations).
3. Chizmalar toʻplamini ochish uchun qatorning oʻzini bosing yoki koʻrinishni oʻz varagingizga qoʻshing. Qarang: [Koʻrinishlar va varaqlar](topic:views-and-sheets).

Klassik tartibda loyiha brauzeri {{ui:Draw}} yoqilgan paytda chap panelda boʻladi. Ribbon tartiblarida u Properties ostidagi {{ui:Project Browser}} yorligʻi.

## Koʻrinish nimani koʻrsatadi

- Belgi oldida bino boʻylab nima boʻlsa hammasi. Orqadagi hech narsa emas.
- Sathlar, ularning nomlari va balandliklari bilan.
- Agar belgi bino ichida tursa, u turgan narsa xuddi kesim kabi shu yerda kesiladi. Toza tashqi fasad uchun tashqarida turing.

## Oʻzgartirish

Planda belgini tanlang ({{ui:Select}} bilan uning doirasini bosing). Xossalarda:

- {{ui:Label}}: uning raqami yoki oʻz nomi, 8 ta belgigacha.
- {{ui:Flip the view}}: oʻsha joydan teskari tomonga qarash.
- {{ui:Look as far as}}: koʻrinish belgidan oldinga qancha masofaga yetishi. 0 hammasini koʻrsatadi.

Belgi va uning chizmasini oʻchirish uchun Delete ni bosing. Undo ikkalasini qaytarib qoʻyadi.

:::tip
Ishlayotganda plan va 3D koʻrinishni bir vaqtda koʻrish uchun, ribbon tartiblarida {{ui:View}} › **Windows** › {{ui:Tile Views}} dan, klassik tartibda esa {{ui:Split}} dan foydalaning. Koʻrinish yorligʻini bosish bitta koʻrinishga qaytaradi.
:::

## Cheklovlar

- Belgini planda hali sudrab yoki burab boʻlmaydi. Uni oʻchirib qayta joylashtiring, yoki {{ui:Flip the view}} dan foydalaning.
- Varaqqa qoʻshish mumkin boʻlgan koʻrinishlar roʻyxatida oʻz fasadingiz kesimlar bilan birga koʻrsatiladi.
- Eshik va deraza belgilari toʻrtta yon fasadda chiziladi, siz joylashtirgan fasadda emas.

## IFC da

Belgi faylga IfcAnnotation sifatida "Elevation 1" nomi va "Elevation marker" obyekt turi bilan saqlanadi, u joylashtirilgan qavatda. Boshqa dastur uni annotatsiya sifatida koʻrsatadi; chizmaning oʻzini BimCraft har safar modeldan yaratadi.
