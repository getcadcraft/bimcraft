---
title: Har bir xonadagi kunduzgi yorugʻlikni baholash
summary: Har bir xonaning oʻrtacha kunduzgi yorugʻlik koeffitsiyenti: uning derazalari, ichki yuzalari va har bir deraza koʻradigan osmon, osmon burchagi model ichida oʻlchanadi. Dastlabki loyihalash bahosi, simulyatsiya yoki kodga muvofiqlik tekshiruvi emas.
keywords: kunduzgi yorugʻlik, kunduzgi yorugʻlik koeffitsiyenti, oʻrtacha kunduzgi yorugʻlik koeffitsiyenti, adf, vertikal osmon komponenti, vsc, quyosh issiqligi, quyosh, g-qiymat, toʻr, boʻlingan oqim, osmon komponenti, ichki aks etgan komponent, tabiiy yorugʻlik, deraza, oynalash, osmon burchagi, toʻsiq, soyalash, balkon, soyabon, aks ettirish, oʻtkazuvchanlik, dastlabki loyihalash, tahlil, xonalar, boʻshliqlar
from: 5f300a78
---

Modelning {{ui:Kunduzgi yorugʻlik}} yorligʻi oʻng panelda har bir xonaning **oʻrtacha kunduzgi yorugʻlik koeffitsiyentini** hisoblaydi: bulutli osmonning yorugʻligidan xonaga oʻrtacha qancha, foizda, yetib borishi. U ochiq IFC modelining xonalarini (boʻshliqlarni) va derazalarini oʻqiydi. Modelda hech narsa oʻzgarmaydi va hech narsa yuklanmaydi.

:::warning
Bu yorliqdagi hamma narsa **loyihalash yordamchisi, muvofiqlik hisobi emas**: nashr etilgan usullar boʻyicha dastlabki loyihalash bahosi, **simulyatsiya emas** va **qurilish kodi yoki standart boʻyicha tekshiruv emas**. BS EN 17037, LEED, BREEAM va energiya kodlari joyning iqlimi bilan kunduzgi yorugʻlik simulyatsiyasini talab qiladi; ular uchun kunduzgi yorugʻlik simulyatsiya dasturidan foydalaning.
:::

## Hisoblash

1. Xonalari (boʻshliqlari) va derazalari boʻlgan IFC modelni oching. Bu yerda ochilgan modellarda har bir yopiq devorlar toʻplamining ichida xona bor.
2. {{ui:Kunduzgi yorugʻlik}} yorligʻini oching va {{ui:Hisoblash}} ni bosing.
3. Har bir xona oʻzining kunduzgi yorugʻlik koeffitsiyenti va diapazonini koʻrsatadi: 2 % dan kam, 2–5 %, 5 % yoki undan koʻp. Xonani bossangiz, uning yuzalarini va har bir derazaning maydonini hamda osmon burchagini koʻrasiz; xona va uning derazalari modelda tanlanadi.

Kiritilgan maʼlumotni oʻzgartirsangiz, raqamlar darhol oʻzgaradi; modelni oʻzgartirgandan keyin {{ui:Qayta hisoblash}} ni bosing. {{ui:CSV}} har bir xonani uning raqamlari va ishlatilgan kiritilgan maʼlumotlari bilan saqlaydi.

## Formula

Oʻrtacha kunduzgi yorugʻlik koeffitsiyenti (%) = T × Ag × θ × M ÷ (A × (1 − R²)), xonaning derazalari boʻyicha qoʻshilgan (Littlefair formulasi; BRE 209, BS 8206-2 va CIBSE LG10 da qoʻllaniladi):

- **T**, shishaning yorugʻlik oʻtkazuvchanligi (boshlash uchun 0.7: ishlab chiqaruvchi koʻrsatkichidan foydalaning).
- **Ag**, oynalangan maydon: har bir derazaning maydoni (umumiy eni × balandligi, aks holda modeldagi oʻlchami) × **oynalangan ulush** (boshlash uchun 0.75: qolgani ramka).
- **θ**, deraza koʻradigan osmon burchagi, gradusda (quyida).
- **M**, shishadagi chang uchun saqlash koeffitsiyenti (boshlash uchun 1).
- **A**, xonaning har bir ichki yuzasi: pol, devorlar, shift va derazalar, xonaning oʻz shaklidan olinadi.
- **R**, ularning oʻrtacha aks ettirishi, maydon boʻyicha ogʻirlangan: pol 0.2, devorlar 0.5, shift 0.7 (boshlash uchun); shisha 0.1 hisoblanadi.

## Osmon burchagi qanday oʻlchanadi

Har bir deraza uchun BimCraft modelni derazaga tik, shishaning tashqi yuzidan oʻtgan tik tekislik bilan kesadi va gorizontdan toʻgʻridan-toʻgʻri yuqoriga qaraydi: kesim uchratgan hamma narsa derazaning oldida (qarshi tomondagi bino, yuqoridagi balkon yoki soyabon, tom chetlari) 90° ning bir qismini toʻsadi. θ qolgani. Deraza oʻzi va u turgan devor hisobga olinmaydi. Buni derazaning kengligi boʻylab besh joyda bajaradi va oʻrtachasini oladi, shuning uchun oldidagi ingichka ustun oʻz ulushini oladi, butun osmonni emas.

Derazaning markazidan 8.5 m balandda va 9.9 m uzoqlikda turgan bino 40.65° ni toʻsadi (tangensi 8.5 ÷ 9.9 boʻlgan burchak), θ = 49.35° qoladi.

## Har bir derazaning vertikal osmon komponenti

{{ui:Hisoblash}} har bir deraza butun osmonning qanchasini koʻrishini ham oʻlchaydi: xuddi shu tik kesim derazaning oldidagi har bir yoʻnalishga (har 2° da, bir chetdan ikkinchisigacha) buriladi, shuning uchun bir tomondagi bino, qanot yoki chuqur chetlik oʻz ulushini oladi. Shundan BimCraft **vertikal osmon komponentini (VSC)** hisoblaydi: bulutli osmon yorugʻligining qanchasi shishaga yetib boradi, ochiq, tekis tom oladigan ulush sifatida. Oldida hech narsa boʻlmagan deraza **39.6 %** oladi, bu tik deraza olishi mumkin boʻlgan eng koʻp qiymat. Derazadan 25° yuqoriga koʻtarilgan uzun bino taxminan **27 %** qoldiradi, bu Buyuk Britaniya qoʻllanmasi (BRE 209) qoida sifatida ishlatadigan raqam. Xonaning tafsilotlarida har bir deraza oʻzining VSC qiymatini va **toʻsiq burchagini** (uning oldida toʻgʻridan-toʻgʻri qanchalik baland narsalar koʻtarilganini) koʻrsatadi.

Osmon CIE standart bulutli osmoni: tepaga qarab gorizontdagiga nisbatan uch barobar yorugʻroq, kesim esa aniq: hech narsa namuna sifatida olinmaydi.

## Quyosh derazalar orqali sana boʻyicha

{{ui:Quyosh derazalar orqali sana boʻyicha}} ni oching va sanani tanlang. BimCraft oʻsha kun davomida quyoshni chorak soatlik vaqtlarda kuzatadi va har bir deraza uchun shisha orqali kiradigan issiqlikni qoʻshadi:

- **toʻgʻridan-toʻgʻri quyosh**, u derazaning oldida boʻlganda va modelning hech narsasi uni toʻsmasa (xuddi shu aniq kesim, quyosh tomonga buriladi: tush paytida yoz quyoshini soyalaydigan balkon pastdagi qish quyoshini kiritadi);
- **osmon yorugʻligi** shisha ustida, derazaning koʻra olmaganidan tashqari;
- **yerdan qaytgan yorugʻlik** (uning aks ettirishi: boshlash uchun 0.2);
- hammasi shishaning **g-qiymati** (quyosh energiyasining qancha qismini oʻtkazishi: boshlash uchun 0.6; ishlab chiqaruvchi koʻrsatkichidan foydalaning) va uning oynalangan ulushi orqali oʻtadi.

Har bir xonada kunning jami kWh da va eng yuqori qiymati vaqti bilan vattlarda koʻrsatiladi; xonaning tafsilotlarida kun diagramma sifatida chiziladi. Osmon Hottel modeli boʻyicha ochiq osmon (Duffie & Beckman, *Solar Engineering of Thermal Processes*), joy va fasl uchun yoz yoki qish koʻrsatkichlari va joyning balandligi bilan; quyoshning oʻrni NOAA ga tegishli. Joyning kengligi va uzunligi IFC joyidan olinadi, shimol esa modelning haqiqiy shimolidan; model joyni oʻz ichiga olmasa, kenglik va uzunlikni kiriting. Vaqtlar kiritilgan vaqt mintaqasida standart vaqtda (yozgi vaqtsiz) koʻrsatiladi, aks holda uzunlik taklif qiladigan vaqt mintaqasida.

Hisobga olinmaydi: bulutlar (bu ochiq kun), past burchaklarda shishaning kamroq kirishi, ramkalarning shishaga soya tashlashi, jaluzlar va devorlar hamda tom qabul qiladigan issiqlik. Shu yorliqdagi sovutish bahosi eng yuqori qiymatdan foydalanadi.

## Toʻr boʻyicha kunduzgi yorugʻlik koeffitsiyenti

{{ui:Toʻr boʻyicha kunduzgi yorugʻlik koeffitsiyenti}} ni oching va {{ui:Toʻrni hisoblash}} ni bosing: BimCraft har bir xonaning poli ustida ish tekisligi balandligida (boshlash uchun 0.85 m), devorlardan yarim metr ichkarida toʻr chizadi va har bir nuqtadagi kunduzgi yorugʻlik koeffitsiyentini **BRE boʻlingan oqim usuli** bilan hisoblaydi:

- **osmon komponenti**: nuqtadan har bir derazaning teshigi orqali koʻrinadigan bulutli osmon, ramkalar chegirilgan holda;
- **tashqaridan aks etgan komponent**: nuqta derazadan koʻradigan tashqaridagi binolar, ularning orqasidagi osmonning oʻndan bir qismi kabi yorqinlikda (agar ular ancha yorugʻ yoki qorongʻi boʻlsa, toʻsiq yorqinligini oʻzgartiring);
- **ichki aks etgan komponent**: xona ichida aylanadigan yorugʻlik, xonaning yuzalari va aks ettirishlari, derazalarning maydoni va ularning tashqarisidagi ulush (BRE formulasi, shisha oʻtkazuvchanligi bilan, u nazarda tutgan toza shisha oʻrniga).

Har bir xonada oʻrtacha, eng past nuqtasi va qanchasi 2 % yoki undan koʻpini olishi koʻrsatiladi; xonaning tafsilotlarida uning rejasi chiziladi, har bir nuqta kunduzgi yorugʻlik koeffitsiyenti boʻyicha rangli, derazalar qizil. Har qanday kompyuterda tez ishlashi uchun xonaga koʻpi bilan **400 nuqta** beriladi: katta xonada qadam kattalashadi (oʻz qadamingizni tanlash uchun qadamni kiriting).

## Nimalar hisobga olinmaydi

- Tom derazalari (yotgan yoki qiya shisha) roʻyxatga olinadi, lekin hisoblanmaydi: bu yerdagi formulalar devordagi derazalar uchun.
- Orqasida xonasi yoʻq derazalar (masalan, boʻshliqsiz holl) alohida roʻyxatga olinadi.
- Deraza nishlari (teshik tashqi yuzida olinadi), yaltiroqlik, quyosh soatlari va iqlimga asoslangan kunduzgi yorugʻlik. BS EN 17037, LEED yoki BREEAM uchun kunduzgi yorugʻlik simulyatsiya dasturidan foydalaning.
- Chegaralar eski britaniyalik qoʻllanmalardan (BS 8206-2) olingan, yoʻl-yoʻriq sifatida koʻrsatiladi, hech qachon oʻtdi yoki oʻtmadi sifatida emas.
