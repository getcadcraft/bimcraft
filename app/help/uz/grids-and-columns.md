---
title: Setkalar va ustunlar
summary: Setka chiziqlarini raqamli va harfli doiracha belgilar bilan, oraliq boʻyicha yoki birma-bir joylashtiring, ular boʻylab devor va ustunlar chizing hamda planlar, fasadlar va kesimlarda koʻring.
keywords: setka, setkalar, setka chizigi, ustunlar setkasi, oʻq, oʻqlar, belgi, konstruktiv setka, 1 2 3, A B C, ustun, ustunlar, tayanch, ilashish, IfcGrid, IfcColumn
from: bf99a8f7
---

## Nima qilasiz

Binoni setka boʻyicha belgilang, soʻng uning chiziqlari boʻylab devor chizing va ustunlar joylashtiring.

## Butun setkani joylashtirish

1. {{ui:Chizish}} ni yoqing, soʻng {{ui:Yigʻilish}} › {{ui:Setka}} ni tanlang.
2. {{ui:Setkani joylashtirish…}} tugmasini bosing. **Raqamlangan chiziqlar** (1, 2, 3…) va **harflangan chiziqlar** (A, B, C…) nechta boʻlishini hamda ular orasidagi masofani koʻrsating. Bitta oraliq kiriting yoki notekis oraliqlar uchun vergul bilan ajratib bir nechtasini yozing (masalan `20', 24', 20'`). {{ui:Oxirgi chiziqlardan keyin}} — har bir chiziq boshqa turdagi tashqi chiziqlardan qancha narigacha davom etishi; {{ui:Burilish (gradus)}} butun setkani buradi.
3. {{ui:Joylashtirish}} tugmasini bosing, soʻng birinchi kesishma (1 / A) qayerda boʻlishini bosing. Oldindan koʻrinish kursorni kuzatib boradi.

Raqamlangan chiziqlar plan boʻylab yuqoriga yoʻnaladi va uning boʻylab joylashadi; harflangan chiziqlar plan boʻylab yoʻnaladi va yuqoriga qarab joylashadi. Harflar chizmalardagidek I va O ni tashlab ketadi, shuning uchun ular hech qachon 1 yoki 0 deb oʻqilmaydi.

## Setka chiziqlarini birma-bir chizish

{{ui:Setka}} yoqilgan holda chiziq boshlanadigan va tugaydigan joyni bosing. U yoʻnalgan chiziqlar boʻyicha keyingi belgini oladi (3 dan keyin 4 keladi; B dan keyin C keladi). Toʻxtatish uchun {{key:Esc}} ni bosing.

## Setka chizigini oʻzgartirish

{{ui:Setka}} yoqilgan holda chiziqni bosib tanlang. Yangi {{ui:Belgi}} ni kiriting va {{key:Enter}} ni bosing, yoki {{ui:Bu chiziqni oʻchirish}} ni bosing ({{key:Delete}} ni ham bosish mumkin). {{ui:Belgilar}} doiracha belgilarni chiziqning ikkala uchiga, har bir chiziqning boshiga yoki oxiriga qoʻyadi, yoki umuman qoʻymaydi. Har bir oʻzgarish bitta qadam: uni {{key:Mod+Z}} bilan ortga qaytarish mumkin.

## Ustunlar boʻylab chizish

{{ui:Devor}} asbobi, {{ui:Ustun}} asbobi va boshqa chizish asboblari setka chiziqlariga hamda ularning kesishmalariga ilashadi (ilashish belgisi — xoch bilan kichik doira).

**Ustunlar:** {{ui:Yigʻilish}} › {{ui:Ustun}} ni tanlang, shaklni (toʻrtburchak yoki dumaloq), oʻlchamni va ustun **yuqori qavatgacha** davom etishini yoki belgilangan balandlikkacha boʻlishini tanlang, soʻng bosing. {{ui:Har bir setka kesishmasida}} hali ustuni boʻlmagan har bir kesishmaga ustun qoʻyadi. Ustunning shaklini, oʻlchamini yoki balandligini oʻzgartirish uchun uni bosing va {{ui:Xossalar}} da tahrirlang; {{key:Delete}} uni oʻchiradi. Yuqori qavatgacha davom etadigan ustunlar, uning balandligi oʻzgarganda, unga ergashadi.

## Nimani koʻrishingiz kerak

- Har bir qavat planida setka, har bir chiziqning uchida belgi va uning yorligʻi.
- Chizmalar toʻplamidagi setka chiziqlari: planlarda, shuningdek chiziq oxiridan koʻrinadigan fasad va kesimlarda, belgisi bino ustida. Qarang [Fasadlar, kesimlar va varaqlar](topic:sheets).
- IFC faylda: bino uchun bitta setka (IfcGrid, raqamlangan chiziqlari bir roʻyxatda, harflangan chiziqlari boshqasida), ustunlar esa oʻlchami, balandligi va miqdorlari bilan IfcColumn sifatida. Boshqa BIM dasturlari ikkalasini ham koʻrsatadi.

:::note
Boshqa dasturdan kelgan faylda joylashgan setka koʻrsatiladi va asboblar unga ilashadi, lekin uning chiziqlarini bu yerda oʻzgartirib boʻlmaydi.
:::
