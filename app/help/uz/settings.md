---
title: BimCraft sozlamalari
summary: Xonalar va boʻshliqlar koʻrinishini, qirralar chizilishini va model qaysi koʻrinishda ochilishini tanlang, hamda devorga tutashtirish yoqilgan holda joylashtirishni boshlang.
keywords: sozlamalar, afzalliklar, parametrlar, boʻshliqlar, xonalar, ifcspace, qirralar, chiziqlar, unumdorlik, katta model, ochilish koʻrinishi, kamera, yuqori koʻrinish, devorga tutashtirish, tutashtirish
from: 4416e64f
---

Sozlamalarni ilova panelidagi tishli belgi bilan yoki {{key:Mod+,}} bilan oching. Birinchi yorliq, {{ui:BimCraft}}, shu ilovaga tegishli sozlamalarni saqlaydi; {{ui:Umumiy}} barcha CadCraft ilovalari birgalikda ishlatadigan sozlamalarni saqlaydi (mavzu, asboblar paneli, panellar). BimCraft sozlamalari faqat ilovaning oʻzida mavjud: ularni shu yerda oʻzgartirasiz va bu brauzer ularni eslab qoladi. Oynaning pastidagi {{ui:BimCraft sozlamalarini tiklash}} ularni, va umumiy sozlamalarni ham, boshlangʻich holatiga qaytaradi.

## Menyular, tugmalar va sichqoncha

Menyu uslubi (BimCraft ning oʻz asboblar paneli, uy dizayni menyu paneli, BIM lentasi yoki chizmachilik buyruq satri), oʻz tugmalaringiz va menyularingiz, hamda gʻildirak va sichqoncha tugmalari nima qilishi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).

## Model ochilganda

- **Xonalar va boʻshliqlarni koʻrsatish** (boshlanishda oʻchiq): xonalar va boʻshliqlar koʻrinadigan qutilar boʻlib, ortidagi devorlarni yashirishi mumkin, shuning uchun ular boshida yashirin. Model ustidagi {{ui:Boʻshliqlar}} tugmasi ochiq model uchun ularni hali ham yoqadi va oʻchiradi.
- **Qirralar**: {{ui:Qirralar yoqilgan}} (boshida) chizmachilik koʻrinishini beradigan qirra chiziqlarini chizadi. {{ui:Faqat kichik modellar}} ularni faqat 300,000 uchburchakdan kam modellarda chizadi, bu katta modellarni aylantirishni tezroq qiladi. {{ui:Qirralar oʻchirilgan}} har bir modelni ularsiz boshlaydi. {{ui:Qirralar}} tugmasi ochiq model uchun ularni hali ham almashtiradi. 1.5 million uchburchakdan yuqorida qirralar doim oʻchiq boʻladi.

## Chizmalar qanday ochiladi

DWG yoki DXF chizmasi birinchi marta qanday koʻrinishini: {{ui:3D (eng tez)}} (boshida) hatto katta chizmani ham tez chizadi, yoki {{ui:Model (2D)}} tekis model maydoni koʻrinishini ochadi. Chizma ustidagi yorliqlar {{ui:Model}}, varaqlar va {{ui:3D}} oʻrtasida istalgan vaqtda almashtiradi. Model maydonida hech narsasi yoʻq chizma yoki 3D ni koʻrsata olmaydigan brauzer chizmani doim 2D da ochadi.

## Ochilish koʻrinishi

Model bilan ochiladigan kamera: {{ui:Moslash}} (boshida, butun model bir burchakdan), {{ui:Yuqori}}, {{ui:Old}} yoki {{ui:Yon}}. Model ustidagi tugmalar koʻrinishni istalgan vaqtda oʻzgartiradi.

**Saytida burilgan bino**: koʻp modellar binoni fayl oʻqlariga nisbatan burchak ostida keladi (geodezik yoki umumiy koordinatalarda). {{ui:Binoga nisbatan toʻgʻri}} (boshida) bunday binoni toʻgʻri koʻrsatadi: {{ui:Moslash}}, {{ui:Yuqori}}, {{ui:Old}}, {{ui:Yon}}, koʻrinish kubining yuzlari va har bir yangi kesim devorlari boʻylab yoʻnaladi, koʻrinish kubining kompasi esa hali ham modelning shimolini koʻrsatadi. {{ui:Saytga qoʻyilganidek}} fayl oʻqlarini saqlaydi. Devorlari oʻqlar boʻylab yoʻnalgan bino ikkala holatda ham bir xil koʻrinadi.

## Kutubxona elementlarini joylashtirish

**Devorga tutashtirish boshidan yoqilgan boʻlsin** (boshida oʻchiq): kutubxona elementini joylashtirish yoki qoʻyish boshlanganda, uning orqa tomoni eng yaqin devorga tutashadi, xonaga qarab. {{key:Tab}} yoki joylashtirish panelidagi {{ui:Devorga tutashtirish}} uni hozircha oʻchiradi. Devorsiz qavat uni boshidan yoqilmagan holda boshlaydi.

## Kesim qutisi

{{ui:Tanlov atrofidagi zaxira}} — bu {{ui:Tanlov atrofida kesim qutisi}} tanlangan elementlarning har tomonida qoldiradigan joy, millimetrda: boshida 300, 5000 gacha. Qarang: [IFC modelni kesim tekisligi bilan kesish](topic:section-plane).

## Joylashuv

{{ui:Kenglik va uzunlik quyidagida}} tizimni tanlaydi, {{ui:Oʻlchash}} › {{ui:Joylashuv}} kenglik va uzunliklarni qaysi tizimda berishini: WGS 84 (EPSG:4326, boshida, GPS va veb-xaritalar ishlatadigani kabi), {{ui:Faylning oʻz datumi}}, yoki ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 va CGCS2000 dan biri. Faylning oʻz xarita tizimi va datumi har doim koʻrsatiladi. Qarang: [3D da masofalar, yuz maydonlari va joylarni oʻlchash](topic:measure).

## Burchak koʻrsatkichi

3D koʻrinishlarning pastki oʻng burchagida nima turishi (IFC model va 3D ga oʻtkazilgan chizma): {{ui:Koʻrinish kubi}} (boshida), {{ui:Oʻqlar belgisi}} (kichik X, Y va Z) yoki {{ui:Yoʻq}}. U darhol oʻzgaradi. 2D chizma koʻrinishida hech qachon koʻrsatkich boʻlmaydi.

Koʻrinish kubida yuzni, qirrani yoki burchakni bosing va oʻsha tomondan qarang; kubni sudrab atrofini aylantiring; halqani sudrab oʻz oʻrnida buring; boshlangʻich koʻrinish uchun uy belgisini bosing.

## Muammolardagi ismingiz

Tizimga kirganingizda muammolar hisobingiz nomini oladi va BimCraft hech narsa soʻramaydi: bu qism {{ui:Hisobingizdan (<name>)}} ni koʻrsatadi. {{ui:Boshqa ismdan foydalanish}} boshqa ism uchun quti ochadi, u siz {{ui:Hisobimdagi ismdan foydalanish}} ni tanlamaguningizcha ustun turadi. Tizimdan chiqqaningizda muammo shakli avvalgidek ism soʻraydi. Qarang: [Muammolar va BCF fayllar](topic:issues-bcf).

## Yordamchilar

**AI yordamchilar va skriptlar BimCraft dan foydalansin** (boshida oʻchiq): kompyuteringizdagi yordamchi CadCraft Studio orqali ochiq modelga yetishadi: **Oʻqish** elementlarni topadi va ularning xususiyatlarini oʻqiydi, **Koʻrinishni oʻzgartirish** ularni ajratadi, yashiradi va koʻrsatadi. **Faollik** uning chaqiruvlarini roʻyxatlaydi. Qarang: [AI yordamchi bilan modelingizda ishlash](topic:assistants).

:::note
Boshqa sozlamalar model ochilganda yoki joylashtirish boshlanganda qoʻllanadi. Allaqachon ochiq model asboblar paneli tugmalarini ishlatmaguningizcha yoki uni qayta ochmaguningizcha oʻz koʻrinishini saqlaydi.
:::

## Bogʻliq

- [Kutubxona elementlarini nusxalash, qoʻyish va takrorlash](topic:copy-paste)
- [Kutubxonadan jihoz va mebel joylashtirish](topic:place-from-library)
- [BimCraft ekrani](topic:workspace)
- [AI yordamchi bilan modelingizda ishlash](topic:assistants)
