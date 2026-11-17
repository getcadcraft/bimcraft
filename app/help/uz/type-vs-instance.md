---
title: Tur xossasini bir turning har bir elementi uchun oʻzgartirish
summary: Tur xossalarini ekzemplyar xossalaridan ajrating, turdagi qiymatni oʻzgartiring, shunda barcha elementlar unga ergashadi, va bitta elementning oʻz tahriri faqat oʻziga tegishli ekanini tekshiring.
keywords: tur, ekzemplyar, tur xossalari, oila turi, umumiy, yozishda nusxalash, barcha elementlar, ommaviy tahrir, ishlab chiqaruvchi, model
from: bffd8789
---

## Nima qilasiz

Eshik turiga ishlab chiqaruvchini oʻrnating, shunda shu turdagi har bir eshik uni koʻrsatadi, soʻngra bitta eshikka boshqalarga tegmasdan oʻz yongʻinga chidamlilik qiymatini bering. Bu BimCraft dasturidagi tur va ekzemplyar xossalari oʻrtasidagi farqni koʻrsatadi.

## Tur yoki ekzemplyar?

- Bir **ekzemplyar** xossasi bitta elementga tegishli: uning belgisi, markasi, xonasi, oʻz yongʻinga chidamliligi.
- Bir **tur** xossasi koʻp elementlar ulashadigan turga tegishli: ishlab chiqaruvchi, model, eshik turining eni.

{{ui:Xossalar}} panelida turdan kelgan toʻplamlar nomidan keyin " (tur)" va "Tur xossasi: bu yerdagi oʻzgarish shu turdagi har bir elementga qoʻllanadi." qatori bor. Qolgan toʻplamlar elementning oʻziga tegishli. Birinchi blokdagi **Tur** turning nomini koʻrsatadi.

## Qadamlar: turni oʻzgartirish

1. IFC modelini oching va eshikni bosing.
2. Birinchi blokdagi **Tur** ni belgilab qoʻying, masalan "Single-Flush 900 x 2100".
3. Nomi "(tur)" bilan tugaydigan toʻplamni toping.
4. Oʻzgartirmoqchi boʻlgan qiymatni bosing, masalan **Ishlab chiqaruvchi**.
5. Yangi qiymatni kiriting va {{key:Enter}} ni bosing.
6. {{ui:Oʻzgarishlar}} roʻyxatiga qarang: yozuv "(tur)" bilan tugaydi.
7. Shu turdagi boshqa eshikni bosing.
8. Xuddi shu qiymatni tekshiring: u ham yangi qiymatni koʻrsatadi.

## Qadamlar: faqat bitta elementni oʻzgartirish

1. Bitta eshikni bosing.
2. Nomida "(tur)" boʻlmagan toʻplamni oching, masalan `Pset_DoorCommon`.
3. Qiymatni bosing, masalan **FireRating**, yangi qiymat kiriting va {{key:Enter}} ni bosing.
4. Yonidagi, shu turdagi eshikni bosing.
5. Xuddi shu qiymatni tekshiring: u hali ham eski qiymatni koʻrsatadi.

Hatto eksport qiluvchi dastur bu xossalar toʻplamini ikkala eshik oʻrtasida ulashgan boʻlsa ham, BimCraft uni oʻzgartirishdan oldin birinchi eshikka oʻz nusxasini bergan. Qarang: [Nega tahriringiz faqat bitta elementni oʻzgartiradi](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Saqlash

1. {{ui:IFC sifatida saqlash}} ni bosing yoki {{key:Mod+S}} ni bosing.
2. Saqlangan nusxani BimCraft dasturida yoki istalgan IFC koʻruvchisida oching va ikkala oʻzgarishni tekshiring.

## Keng tarqalgan xatolar

- **Har bir modelda turlar boʻlmaydi.** Ba'zi eksport dasturlari tur obyektlarini yozmaydi yoki hammasini ekzemplyarga joylaydi. Unda "(tur)" toʻplamlari boʻlmaydi va har bir elementni alohida oʻzgartirish kerak.
- **Bir xil qiymat tur toʻplamida va ekzemplyar toʻplamida chiqadi.** Ba'zi eksport dasturlari parametrni ikki joyga ham yozadi. Boshqa dasturlar ulardan istalganini oʻqishi mumkin; ular bir xil boʻlishi kerak boʻlsa, ikkalasini ham oʻzgartiring.
- **Shu turdagi barcha eshiklarni tanlab, ularni birga tahrirlashni kutish.** Bu versiyada koʻp tanlash yoʻq. Koʻp elementni bir vaqtda oʻzgartirish uchun tur xossasi xizmat qiladi.
