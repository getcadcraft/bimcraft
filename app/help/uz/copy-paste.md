---
title: Kutubxona elementlarini nusxalash, qoʻyish va nusxa olish
summary: Joylashtirilgan kutubxona elementidan nusxa oling va uni bosgan joyingizga, asl nusxa yoniga yoki boshqa modelga qoʻying; boshqa elementlarning xususiyatlarini matn sifatida nusxalang; amallarni bekor qiling va qayta bajaring.
keywords: nusxalash, qoʻyish, nusxa olish, bufer, joyida qoʻyish, kesish, oʻchirish, hammasini tanlash, ortga qaytarish, qayta bajarish, tahrirlash menyusi, qoʻshimcha, kutubxona elementi, joylashtirish, takrorlash, massiv
from: 6ac15931
---

## Nima qilasiz

Allaqachon joylashtirgan elementingizdan yana nusxalar oling: ikkinchi ish stoli, bir qator lavabolar. Bu mavzu **joylashtirilgan kutubxona elementlari** haqida: BimCraft modelga yozgan elementlar. Ulardan birini istalgan modelga, hatto boshqa yorliqqa ham qoʻyish mumkin. Devorlar, eshiklar va boshqa barcha elementlar oʻz modelida xuddi shunday nusxalanadi, kesiladi, qoʻyiladi va oʻchiriladi: [Bino elementlarini oʻchirish, kesish, nusxalash va qoʻyish](topic:edit-elements) ga qarang.

Buyruqlar model ustidagi asboblar panelida: {{ui:Ortga qaytarish}}, {{ui:Qayta bajarish}}, {{ui:Nusxalash}}, {{ui:Qoʻyish}} va {{ui:Qoʻshimcha}}, unda {{ui:Kesish}}, {{ui:Nusxalash}}, {{ui:Qoʻyish}}, {{ui:Joyida qoʻyish}}, {{ui:Nusxa olish}}, {{ui:Oʻchirish}}, {{ui:Hammasini tanlash}} va {{ui:Hech birini tanlamaslik}} bilan menyu. Hozir bajarilishi mumkin boʻlmagan buyruq kulrang boʻladi; ustiga sichqonchani keltirib sababini oʻqing yoki uni bossangiz, holat satri sababini aytadi.

## Qadamlar

1. Ichida kutubxona elementi bor IFC modelni oching yoki avval uni joylashtiring. Qarang: [Kutubxonadan jihozlar va mebellarni joylashtirish](topic:place-from-library).
2. 3D koʻrinishda elementni bosing. Uning xususiyatlarida **Kutubxona elementi** oynasi koʻrinadi.
3. {{ui:Nusxalash}} ni bosing yoki {{key:Mod+C}} tugmalarini bosing.
4. {{ui:Qoʻyish}} ni bosing yoki {{key:Mod+V}} tugmalarini bosing. Joylashtirish paneli ochiladi va kursor ortidan shaffof quti harakatlanadi, u asl nusxadek buriladi.
5. {{key:R}} bilan 90° ga burish, {{key:Tab}} bilan orqa tomonini devorga tutashtirish yoki joylashtirish panelida X va Y ni kiritish mumkin.
6. Nusxa qayerga borishini bosing. Har bir bosish yana bir nusxani joylashtiradi; toʻxtatish uchun {{key:Esc}} ni bosing.
7. Model tahrirlangan nusxasini yuklab olish uchun {{ui:IFC sifatida saqlash}} ni bosing.

## Joyida qoʻyish

{{ui:Qoʻshimcha}}, {{ui:Joyida qoʻyish}} yoki {{key:Mod+Shift+V}} hech narsa bosmasdan, bir xil X va Y koordinatada va bir xil burilishda qoʻyadi:

- **Xuddi shu modelning xuddi shu qavatiga**: bir joyga ikkita element qoʻyish foydasiz, shuning uchun nusxa asl nusxaning yoniga joylashadi: elementning oʻz kengligi boʻylab, bir element kengligi va yana 100 mm masofada. Qator hosil qilish uchun yangi nusxadan yana joyida qoʻying.
- **Boshqa qavatga yoki boshqa modelga**: aynan bir xil X, Y va burilish. BimCraft bir xil nomli qavatni ishlatadi; bunday qavat boʻlmasa, eng yaqin balandlikdagi qavat olinadi. Holat satrida qaysi qavat tanlanganligi koʻrsatiladi.

## Nusxa olish

{{ui:Qoʻshimcha}}, {{ui:Nusxa olish}} yoki {{key:Mod+D}} tanlangan elementdan nusxa oladi va darhol uni qoʻyishni boshlaydi: ikki qadam oʻrniga bir qadam.

## Boshqa modelga yoki boshqa yorliqqa

Nusxalangan narsa shu brauzerda saqlanadi, shuning uchun boshqa IFC modelni yoki boshqa yorliqdagi BimCraftni ochib, shu yerga qoʻyishingiz mumkin. Boshqa modelga kutubxona elementining oʻzi kerak: BimCraft uni element joylashtirilganda, almashtirilganda yoki shu yorliqda yangilanganda saqlaydi. Avvalgi seansda joylashtirilgan element faqat oʻz modelida qayta qoʻyilishi mumkin; boshqa modelda uni {{ui:Kutubxona}} yorligʻidan joylashtiring.

## Nimani koʻrasiz

- Modeldagi nusxa, tanlangan holatda, xuddi shu kutubxona elementi, litsenziya, jihoz maʼlumotlari, miqdor va izohi asl nusxadagidek, va **keyingi boʻsh element raqami** bilan. Raqamni Xususiyatlarda, `CadCraft_Placement` ostida oʻzgartiring.
- Oʻzgarishlar roʻyxatida "Joylashtirildi: *element* (element *n*)". {{key:Mod+Z}} uni qaytaradi; {{key:Mod+Y}} uni yana qaytaradi.

## Bilish foydali

- Nusxalar asl nusxaning turini ulashadi, shuning uchun ularning hammasi bitta geometriyadan foydalanadi, xuddi bir elementni ikki marta joylashtirgandek.
- {{ui:Ortga qaytarish}} va {{ui:Qayta bajarish}} har bir oʻzgarishni qamraydi: tahrirlangan qiymatlar, joylashtirishlar, qoʻyishlar, almashtirishlar va yangilanishlar. Qayta bajarish joylashtirishni xuddi oʻsha joyga qaytaradi; yangi oʻzgarish qayta bajarilishi mumkin boʻlgan narsalarni tozalaydi.
- Chizmaning 2D koʻrinishida tanlanadigan narsa yoʻq, shuning uchun nusxalash ham yoʻq. Chizmani oʻzgartirish uchun, koʻrinsa, {{ui:CadCraftda tahrirlash}} dan foydalaning.

## Keng tarqalgan xatolar

- **{{ui:Qoʻyish}} elementlar boshqa modeldan kelganini aytadi.** Oxirgi nusxalangan narsa bino elementi yoki bir nechta element edi: ular faqat oʻz modeliga qoʻyiladi. Bitta joylashtirilgan kutubxona elementini tanlang va uni nusxalang.
- **{{ui:Qoʻyish}} nusxa kutubxona elementisiz boshqa modeldan kelganini aytadi.** Elementni bu yorliqda bir marta {{ui:Kutubxona}} yorligʻidan joylashtiring, keyin nusxalang va qoʻying.
- **{{key:Mod+C}} oʻrniga sahifa matnini nusxalaydi.** Sahifada matn tanlangan edi. Avval modelni bosing.

## Tegishli

- [Tugmalar va sichqoncha](topic:keyboard#edit)
- [BimCraft sozlamalari](topic:settings)
