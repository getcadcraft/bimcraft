---
title: 3D da masofa, yuz maydoni va joylarni oʻlchash
summary: IFC modelning ikki nuqtasi orasidagi masofani burchak va qirralarga tutilgan holda oʻlchang, X, Y va Z boʻylab farqni oʻqing hamda tekis yuzning maydonini oʻlchang.
keywords: oʻlchash, oʻlchov, masofa, uzunlik, oʻlcham, maydon, yuz maydoni, tutish, burchak, qirra, lenta, chizgʻich, erkin masofa, joy, latitude, longitude, lat long, koordinatalar, geomaʼlumotnoma, xarita konversiyasi, EPSG, geodezik oʻlchash, sharqiy koordinata, shimoliy koordinata, WGS 84, datum
from: 5f430bba
---

## Nima qilasiz

Erkin masofani, devor uzunligini yoki yuzning oʻlchamini modelning oʻzidan tekshiring, muallif dasturini ochmasdan.

## Qadamlar

1. IFC modelni oching.
2. Asboblar panelida {{ui:Oʻlchash}} ni bosing yoki {{key:M}} ni bosing. Koʻrinish pastida satr ochiladi.
3. **Masofa:** {{ui:Masofa}} tanlangan holda birinchi nuqtani, soʻngra ikkinchisini bosing. Burchak yaqinida koʻrsatkich unga tutiladi, qirra yaqinida esa qirraga; koʻrsatkich yonidagi kichik yozuv qaysi biri ekanini aytadi. Har bir bosishlar juftligi bitta oʻlchov beradi.
4. **Yuz maydoni:** {{ui:Yuz maydoni}} ni tanlang va yuzni bosing. Butun tekis yuz yorishadi va uning maydoni koʻrinadi.
5. **Toʻgʻri chiziqlar:** ikkinchi nuqtani tanlayotganda {{key:Shift}} ni ushlab turing yoki satrdagi {{ui:Toʻgʻri}} ni bosib, uni yoqilgan holda saqlang. Chiziq koʻrsatkich eng yaqin boʻlgan bitta oʻq boʻylab davom etadi (yuqoridan koʻrinishda rejaning X yoki Y boʻylab; boshqa koʻrinishlarda X, Y yoki Z boʻylab), va koʻrsatkich yozuvi "oʻq boʻylab toʻgʻri" deydi. {{key:M}} hali ham Oʻlchashni boshlaydi va toʻxtatadi.
6. Oʻlchovlarni olib tashlash uchun {{ui:Tozalash}} ni, oʻlchashni toʻxtatish uchun esa {{ui:Tayyor}} (yoki {{key:Esc}}) ni bosing.

## Nimani koʻrishingiz kerak

- Ikki nuqta orasidagi chiziq, uzunligi yozilgan; satrda uzunlik va u X, Y va Z boʻylab qancha borishi (model oʻqlarida, Z yuqoriga), barchasi asboblar panelida tanlangan {{ui:Birliklar}} da.
- Yuz maydoni kvadrat metrda, yuzda va satrda.
- Yozuvlar oʻlchovlarida koʻrinishni aylantirganingizda, surganingizda va kattalashtirganingizda qoladi.
- Oʻlchayotganda bosishlar elementlarni tanlamaydi. Kesim tekisligi yoki qutisi modelni hali ham kesadi va siz koʻrsatilgan narsani, kesilgan yuzlar bilan birga, oʻlchashingiz mumkin.

## Yer yuzida nuqta qayerda

Oʻlchash satrida {{ui:Joylashuv}} ni bosing, soʻngra modeldagi nuqtani bosing (masofalardagidek burchak va qirralarga tutiladi). Satrda quyidagilar koʻrsatiladi:

- **kenglik va uzunlik**, oʻnli darajalarda va daraja, daqiqa, soniyalarda, dastlab WGS 84 da;
- **xarita koordinatalari** (sharqiy va shimoliy, asboblar panelida tanlangan {{ui:Birliklar}} da yoziladi) modelning oʻz xarita tizimida, masalan `EPSG:28356`;
- **balandlik** va fayl nomlagan vertikal datum, hamda fayl **oʻz datumi** (masalan GDA94).

{{ui:Nusxalash}} hammasini bir qatorda buferga qoʻyadi. Kenglik va uzunlik qaysi tizimda ekanini {{ui:Sozlamalar}} › {{ui:BimCraft}} › {{ui:Joylashuv}} ostida oʻzgartiring: WGS 84 (GPS va veb xaritalar kabi), faylning oʻz datumi yoki ETRS89 yoki NAD83 kabi boshqa keng tarqalgan datum.

Bu geomaʼlumotnomali modelni talab qiladi: EPSG kodli proyeksion tizimga xarita konversiyasi bilan eksport qilingan model. Faqat sayt kengligi va uzunligiga ega model taxminiy joyni oladi, u sayt nuqtasi va haqiqiy shimolidan hisoblanadi va satr buni aytadi. Bir nechta model ochiq boʻlganda, har bir nuqta oʻz modelining geomaʼlumotnomasidan foydalanadi.

:::note
Datumlar orasida oʻtish (masalan GDA94 dan WGS 84 ga) grid fayllarsiz bajariladi, shuning uchun u bir necha metrgacha aniq; holat satri qanchalik aniqligini aytadi. Xarita koordinatalarining oʻzi aniq.
:::

## Keng tarqalgan xatolar

- **"…geomaʼlumotnomaga ega emas".** Faylda na xarita konversiyasi, na sayt kengligi va uzunligi bor. Uni koordinatalar tizimi belgilangan holda qayta eksport qiling (muallif vositasida umumiy koordinatalar / geodezik nuqta).
- **Xarita koordinatalari bor, lekin kenglik va uzunlik yoʻq.** Fayl xarita tizimini EPSG kodisiz nomlaydi yoki roʻyxatda boʻlmagan kod bilan; holat satri qaysi ekanini aytadi.
- **Nuqta burchakka emas, yuzga tushadi.** Tutish koʻrsatkich ostidagi elementga qaraydi. Burchakka yaqinroq suring yoki kattalashtiring.
- **Maydon kutilganidan kichik.** Teshiklar hisobga olinmaydi, egilgan yuz esa bir nechta yuz: har birini bosing.
- **{{key:Esc}} oʻlchashni toʻxtatdi.** Birinchi {{key:Esc}} yarim tayyor masofani tashlaydi; ikkinchisi toʻxtatadi.

## Keyingi

- [IFC modelni kesim tekisligi bilan kesish](topic:section-plane)
- [Elementlarni yashirish, ajratish va orqali koʻrish](topic:hide-and-isolate)
