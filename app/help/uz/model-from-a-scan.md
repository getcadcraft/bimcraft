---
title: Skanerdan model
summary: Lazerli skanerdan devorgacha qisqa qoʻllanma: nuqtalar buluti yangi bino yonida ochiladi, sath bilan tekislanadi va devorlari rejada izlanadi.
keywords: skanerlash, lazerli skanerlash, nuqtalar buluti, haqiqiy holat, mavjud bino, geodezik oʻlchash, izlash, skanerdan BIM gacha, skanerdan model, kesim, tekislash, toʻgʻri burchak, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Nima qilasiz

Mavjud binoni uning lazerli skanerlaridan chizing: skan koʻrsatgan joylarda devorlar, toʻgʻri sathda, bir-biriga nisbatan toʻgʻri burchak ostida.

## Qadamlar

1. **Chizish uchun bino.** {{ui:Fayl}} › {{ui:Yangi bino}}, binoda qancha sath boʻlsa, shuncha bilan (sathlarni keyinroq qoʻshish mumkin, qarang: [Sayt, undagi bino va uning sathlari](topic:site-building-and-levels)). {{ui:Chizish}} yoqiladi.
2. **Skan.** {{ui:Koʻrsatish}} › {{ui:Nuqtalar buluti}} ni tanlang va faylni tanlang (LAS, LAZ, E57, PLY, PCD, PTX yoki XYZ: qarang: [Modelning yonida nuqtalar buluti koʻrsatish](topic:point-clouds)). Bulut 3D koʻrinishda chiqadi, reja esa uning **kesimini** koʻrsatadi: sath ustidagi 1200 mm (4 fut) balandlikdagi skanlangan nuqtalar, nuqta sifatida. Bu devorlar, eshiklar va derazalar eng yaxshi koʻrinadigan balandlik.
3. **Sath bilan tekislang.** Model panelidagi {{ui:Skanerlash}} menyusini oching va {{ui:Uning polini bu sathga moslash}} ni bosing: bulut skanlangan pol koʻrsatilgan sathda turguncha yuqoriga yoki pastga siljiydi. Endi kesim devorlarni kesib oʻtayotganini tekshiring.
4. **Binoga nisbatan toʻgʻri qilib burang.** {{ui:Skanerlash}} › {{ui:Uni binoga nisbatan toʻgʻri qilib burish}} buluti shunday buradiki, kesimidagi devorlar reja oʻqlari boʻylab joylashadi, shuning uchun {{key:Shift}} bosib chizilgan devorlar skan bilan mos keladi. U topilgan devorlarning oʻrtasi atrofida buriladi, shuning uchun kesimga tushgan daraxtlar yoki qoʻshni devor skanni burib yubormaydi. Avval polni tekislang: shunda kesim devorlarni kesib oʻtadi.
5. **Devorlarni izlang.** {{ui:Devor}} ni tanlang va nuqtalar boʻylab bosing: asbob skanlangan nuqtalarga (tutqich belgisi kichik romb) hamda chizilgan devorlarga tutiladi. Devor oʻz oʻrta chizigʻida chiziladi, shuning uchun devor chiqadigan ikki qator nuqtaning oʻrtasi boʻylab bosing; qalinligini devor turini avval tanlab kiriting. Soʻng kesim boʻshliqlarni koʻrsatgan joylarga eshik va derazalar qoʻshing.
6. **Keyingi sath.** Reja sathlari roʻyxatidan yuqoridagi sathni tanlang: kesim sathning kesish balandligini kuzatadi. Polni shu sathga qayta moslang, faqat skan polari sathlaringizdagi joyda boʻlmasa.

## Nima koʻrishingiz kerak

- Sathni oʻzgartirganingizda kesim ham oʻzgaradi, va qalinroq kesim ({{ui:Skanerlash}} › {{ui:Kesim qalinligi}}) skan siyrak boʻlgan joylarda koʻproq nuqta koʻrsatadi.
- {{ui:Skanerlash}} › {{ui:Moslashni bekor qilish}} buluti ochilgandagi joyiga qaytaradi. Tekislash buluti faqat koʻrinishda siljitadi: u IFC faylda saqlanmaydi va siz chizgan devorlar joyida qoladi. Moslash buluti bilan birga {{ui:Joylashtirish}} yoki {{ui:Birliklar}} oʻzgarganda yoki boshqa modelni ochganda ketadi.
- {{ui:Skanerlash}} › {{ui:Kesimni rejada koʻrsatish}} nuqtalarni yashiradi yoki koʻrsatadi.

:::tip
Katta skanlar: reja kesimning 60,000 tagacha nuqtasini, 3D koʻrinish esa butun bulutning bir necha million nuqtasini chizadi, ikkalasi ham skan boʻylab teng tanlanadi, shuning uchun katta fayl ham tez ishlaydi. Izlashni chizmachilik ilovasida qilish uchun bulut panelidagi {{ui:CadCraft da kuzatish}} tugmasidan foydalaning.
:::
