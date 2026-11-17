---
title: 0.9 versiyasidagi yangiliklar
summary: Devor shakllari, boʻlish, siljitish, choʻzish va toʻrga qulflash, pastki sathlar, setka oʻlchamlari va rejada oʻlchash, ish uslubi va qalamlar jadvali bilan takroriy koʻrinishlar, Report as, Collada va Google Earth eksporti, BIMʼga skanerlash, shamol va seysmik tahlil, smola bilan chop etish qoʻshimchalari.
keywords: yangiliklar, nima yangi, 0.9, relizlar eslatmalari, devor shakllari, toʻgʻri toʻrtburchak, koʻpburchak, yoy, tanlangan chiziqlar, konturni olish, siljish, ulash, quti boʻyicha choʻzish, tekislash va qulflash, devorni boʻlish, boʻshliq, qayta ulash, toʻrga qulflash, oʻsish nuqtasi, oʻlchash boshlanishi, pastga sath qoʻshish, yerto‘la, sath buyrugʻi, setka oʻlchamlari, rejada oʻlchash, ish uslubi, koʻrinishni nusxalash, mustaqil nusxa, bogʻlangan koʻrinish, qalamlar jadvali, koʻrinishdagidek chop etish, quyidagicha hisobot, masshtabni kiritish, SVG import, rejaga joylashtirish, modelga joylashtirish, collada, dae, kmz, google earth, BIMʼga skanerlash, shamol yuklamasi, seysmik, chekli elementlar, hujjatlar paneli, smola bilan chop etish, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, evakuatsiya, odamlar, navbatlar, akustika, reverberatsiya, impuls javobi, toshqin, shamol, zilzila, xavf, hayot sikli, xizmat muddati, ids, teglar, jadvallar, koʻchirish, tekislash, taqsimlash, rasm, fon, skandan devorlarga, CivilCraftʼdan uchastka, panel chizmalari, karkas, quyosh, PV, boʻlish, VRF, fan-koil, quvur oʻlchamlari, kabel lotogi, yoritilganlik, beton, skanni solishtirish, EPSG, proyeksiya, hujjatlar, shablon, uglerod, xarajat, EnergyPlus, render dvigateli, ochish, USD, GLB, Unreal, bekor qilish, qoʻshimchalar, PCF, belgilar, oʻsimliklar, iz olish, qalamlar, lenta, loyiha brauzeri, joylashuv
from: 5624fe88
---

Bu BimCraft 0.9 versiyasida, 0.8.1 bilan solishtirganda, nimalar oʻzgarganini koʻrsatadi. Ikki asosiy yoʻnalish — haqiqiy devor vositasi va katta BIM dasturlaridan kelgan odamlar kutadigan tarzda ishlaydigan koʻrinishlar. Ularning atrofida Collada eksporti, elektr qurilmalarini joylashtira oladigan yordamchilar, BIMʼga skanerlash hamda {{ui:Tahlil}} yorligʻidagi shamol, seysmik va chekli elementlar ishlari bor.

## Yangi

### Devorlar

- **Butun shakllarni chizing.** {{ui:Chizish}} boʻlimida {{ui:Shakllar}} ni oching (yoki devor qatorining Shakl roʻyxatidan shaklni tanlang): toʻgʻri toʻrtburchak, burilgan toʻgʻri toʻrtburchak, 3 tadan 64 tagacha tomonli koʻpburchak, markaz boʻyicha yoy, urinma yoy, tanlangan chiziqlar boʻylab devorlar yoki ichini bosgan yopiq maydon atrofidagi devorlar. Toʻgʻri toʻrtburchak toʻrtta ulangan burchakli toʻrtta devor boʻlib, bitta bekor qilish qadamidir. Qarang: [Devor shakllari, boʻlish, siljitish, choʻzish va qulflash](topic:wall-tools).
- **Chizishdan oldin belgilang, keyin oʻzgartiring.** Devor qatorida {{ui:Siljish}} va {{ui:Ulash}} bor (erkin turgan devorlar chizish uchun belgisini olib tashlang). Keyinchalik chizilgan devorlarda {{ui:Siljish}}, {{ui:Quti boʻyicha choʻzish}} va {{ui:Tekislash va qulflash}} dan foydalaning. Siljitilgan yoki choʻzilgan devor oʻz eshiklari, derazalari va oʻlchamlarini saqlab qoladi. Har bir retsept bitta bekor qilish qadamidir.
- **Devorlarni kesing.** {{ui:Boʻlish}}, {{ui:Boʻshliq}}, {{ui:Erkin uchlar}}, {{ui:Qismini oʻchirish}} va {{ui:Qayta ulash}} devorni bir bosishda yoki boshqa devor kesib oʻtgan joyda kesadi. Eshik orqali kesishga ruxsat berilmaydi. Qarang: [Devor shakllari, boʻlish, siljitish, choʻzish va qulflash](topic:wall-tools).
- **Devorlarni setka chiziqlariga qulflang.** Setka chizigʻi boʻylab devorni tanlang va {{ui:Xossalar}} ichida {{ui:Toʻrga qulflash}} ni belgilang. Setka vositasi yoqilgan boʻlsa, tanlangan chiziq uchun {{ui:Masofaga surish}} ga masofani kiriting — qulflangan devorlar bitta bekor qilish qadamida ergashadi.
- **Bitta devor shaklini belgilang.** Bitta devorning {{ui:Xossalar}} oynasida uning yuqori yoki pastki qismini tom, pol yoki shiftga biriktirish, balandlik konturini tahrirlash, egish yoki eshik yoki deraza boʻlmagan devor teshigini kesish mumkin. Qarang: [Devor shakli](topic:wall-shape).
- **Uzunlik qaysi uchi qolishini bildiradi.** {{ui:Oʻsish nuqtasi}} uzunlikni oʻzgartirganda boshlanish, tugash yoki markaz joyida qolishini belgilaydi.
- **Uzunlik va rejadagi oʻlcham mos keladi.** {{ui:Oʻlchash boshlanishi}} (markaziy chiziq, ichki yuz yoki tashqi yuz) ham Uzunlik maydonini, ham rejadagi devor oʻlchamlarini boshqaradi. U markaziy chiziqdan boshlanadi, shuning uchun rejadagi devor oʻlchamlari avval tashqi yuzni koʻrsatgan joyda endi markaziy chiziqni koʻrsatadi. Uni devor qatorida, {{ui:Xossalar}} ichida yoki {{ui:Sozlamalar}} › {{ui:BimCraft}} › {{ui:Devorlar}} da oʻzgartiring.

### Sathlar, setkalar va oʻlchash

- **Pastga sath qoʻshing.** {{ui:Sathlar}} panelidagi {{ui:Pastga sath qoʻshish}} eng pastkisi ostiga, xuddi shunday balandlikda, manfiy balandlikda (Level -1, Level -2) sath qoʻshadi. Boshqa hech narsa siljimaydi. {{ui:Sathlar qoʻshish…}} endi manfiy balandliklarni qabul qiladi. Buyruq satrida LEVEL, LEVELS, STOREY yoki STOREYS yozilsa {{ui:Sathlar qoʻshish…}} ochiladi, menyular va lenta yorliqlarida {{ui:Sathlar}} tugmasi bor. Qarang: [Saytlar, binolar va sathlar](topic:site-building-and-levels).
- **Rejadagi setka oʻlchamlari.** {{ui:Setka}} vositasi yoqilganda {{ui:Oʻlchamlar}} ni belgilang — har bir sathning rejasida qoʻshni chiziqlar orasidagi masofa va umumiy oʻlcham doiralardan tashqarida chiziladi. Qarang: [Setkani oʻlchash](topic:grid-dimensions).
- **Rejada oʻlchash.** {{ui:Chizish}} guruhidagi {{ui:Oʻlchash}} ikki bosish orasidagi masofani X va Y farqlari bilan beradi. Modelga hech narsa saqlanmaydi. Qarang: [Rejada oʻlchash](topic:measure-on-the-plan).
- **Bir nechta ustunlarni bir vaqtda oʻzgartiring.** Ustunlarni devor bilan birga tanlang — roʻyxat har bir turni {{ui:Faqat shularni qoldirish}} bilan koʻrsatadi. Bir bosish ustunlarni qoldiradi va ularning umumiy maydonlarini koʻrsatadi.
- **Hamma joyda bitta oʻlchov birligi.** Koordinatalar, oʻlchamlar, kesimlar, varaq masshtablari, freym yorligʻidagi yuklamalar va natijalar hamda Muammolar matni tanlangan birlikka amal qiladi. Eksportlar SI da qoladi.

### Koʻrinishlar, varaqlar va chop etish

- **Ish uslubi.** {{ui:Sozlamalar}} › {{ui:BimCraft}} › {{ui:Ish uslubi}} har bir koʻrinish oʻz izohlari va qalamlar jadvaliga ega boʻlishi yoki ularni ulashishi oʻrtasida tanlaydi. Qarang: [Ish uslubi, takroriy koʻrinishlar, qogʻozdagi qalamlar, Report as va shablonlar](topic:working-style).
- **Koʻrinishni nusxalash.** Rejalar, shiftlar rejasi, chaqiruvlar, fasadlar va kesimlarni {{ui:Mustaqil nusxa}} yoki {{ui:Bogʻlangan}} sifatida nusxalash mumkin; {{ui:Mustaqil nusxa qilish}} bogʻlangan nusxani mustaqil qiladi. Qarang: [Ish uslubi, takroriy koʻrinishlar, qogʻozdagi qalamlar, Report as va shablonlar](topic:working-style).
- **Koʻrinishdagidek yoki qalamlar jadvali orqali chop etish.** Qalam bekor qilishlari koʻrinish bilan birga IFC da saqlanadi, varaqlar va PDF lar ularni ekrandagidek chizadi. Oʻsha mavzuda qalamlar jadvallari ham yoritilgan.
- **Report as.** {{ui:Xossalar}} dagi {{ui:Quyidagicha hisobot qilish}} yoʻlni chizilgan plitani, panel sifatida chizilgan devorni yoki rampa sifatida chizilgan tomni tanlagan sinfingiz boʻyicha IFC ga yozadi va jadvallarda, Miqdorlarda, Topish, Rang boʻyicha va Muammolarda shunday sanaydi.
- **Tahrirlash fasadlar va kesimlarda.** Fasad yoki kesimning oʻzida devorlar, teshiklar, sathlar, oʻlchamlar va izohlarni chizing va siljiting, oʻz varaq oʻlchamlari va sarlavha bloklari bilan. Qarang: [Fasadlar va kesimlarda tahrirlash](topic:edit-in-elevations).
- **Varaqlar.** Har bir varaq gorizontal yoki vertikal boʻlishi mumkin. Har bir joylashtirilgan koʻrinish yonida {{ui:Masshtabni kiriting}} katagi bor (1:64, 2:1, 1/4" = 1'). Joylashtirilgan chizmani sudrab yoki strelka tugmalari bilan surish mumkin, {{ui:Formatlar…}} › {{ui:SVG import qilish…}} esa oʻz varaq dizaynini har bir varaq uchun kiritilgan maydonli sarlavha blokiga aylantiradi.
- **Varaqda kutubxona mualliflari.** Kutubxona elementlari bilan chizmalar toʻplamiga istalgan varaqqa joylashtirish mumkin boʻlgan Kutubxona mualliflari jadvali qoʻshiladi. Qarang: [Kutubxona mualliflari](topic:library-credits).

### Kutubxona: joylashtirish

- **Joylashtirish koʻrinishga ergashadi.** Reja koʻrinishida Kutubxona {{ui:Rejaga joylashtirish}} ni, 3D da {{ui:Modelga joylashtirish}} ni, Boʻlingan (Split) rejimda esa asosiy amal sifatida {{ui:Rejaga joylashtirish}} boʻlgan boʻlinadigan tugmani koʻrsatadi. Ikkala usul ham bir xil IFC elementini yozadi. Kutubxona kartasini rejaga yoki 3D koʻrinishga sudrab ham qoʻyish mumkin; qalam yoki barmoq bilan avval bosib turing, keyin sudrang. Qarang: [Kutubxonadan joylashtirish](topic:place-from-library).

### Fayllar va yordamchilar

- **Collada va Google Earth.** Asboblar panelidagi {{ui:Collada}} (menyu uslublarida Fayl menyusi) .dae faylni yoki xaritada model turgan joyga joylashtirilgan .kmz faylni yozadi. Qarang: [Modelni Collada yoki Google Earth uchun eksport qilish](topic:collada).
- **Yordamchilar elektr qurilmalarini joylashtira oladi.** Ulangan yordamchingizda qurilmalarni qoʻshish, roʻyxatlash, oʻzgartirish va oʻchirish hamda chiroqlarni sozlash uchun yangi vositalar bor. Yordamchilar {{ui:Sozlamalar}} da yoqmaguningizcha oʻchiq turadi. Qarang: [AI yordamchisi modelingiz bilan ishlashi](topic:assistants).
- **BIMʼga skanerlash (qoʻshimcha).** Standart holatda oʻchiq va Nuqtalar buluti qoʻshimchasini talab qiladi. Skandan qavatlar, devorlar, eshiklar va derazalarni har biri uchun oʻlchangan chetlanish bilan taklif qiladi; qabul qilish bitta bekor qilish qadamidir.

### Tahlil

- **Shamol va seysmik joy maʼlumotlari.** {{ui:Tahlil}} yorligʻida: qattiq yopiq bino uchun ASCE 7-10 yoki 7-16 boʻyicha shamol yuklamalari — har bir qavatga yuklama holati sifatida kuch bilan — hamda USGS qidiruvi va loyiha spektri bilan seysmik joy maʼlumotlari.
- **Konstruktiv kuzatuv va chekli elementlar.** Beton tekshiruvlari ACI 318-19 boʻyicha, ekvivalent yon kuchlar ASCE 7-22 boʻyicha, qavat siljishi, plitalar va devorlar plastinka sifatida, yuklama kombinatsiyalari ASCE 7 va EN 1990 boʻyicha. Bizning chekli elementlar dvigatelimiz qobiqlar, tetraedrlar va xos tebranish tahlilini bajaradi. Qarang: [Beton elementlarni tekshirish va seysmik yuklarni hisoblash](topic:concrete-and-seismic) va [Freym tahlili](topic:frame-analysis).

### Boshqa qoʻshimchalar va hujjatlar

- **Ichki yoritish (qoʻshimcha).** Yoritish armaturalarini joylashtiradi va har bir sathning rejasiga yoritilganlikni lyuks raqamlari bilan yozadi, yorqinlik bahosi va chop etiladigan hisobot bilan.
- **Hujjatlar paneli.** {{ui:Fayl}} › {{ui:Hujjatlar…}} da qulf fayli bilan olish va qaytarish, reviziya harflari, reliz holatlari va tarix mavjud.
- **Hududlar va poʻlat.** Regulations qoʻshimchasidagi Janubiy Afrika chizma va qurilish qoidalari toʻplamlari hamda umumiy kesimlar jadvalidagi 976 ta Buyuk Britaniya poʻlat oʻlchami.
- **Bepul smola bilan chop etish qoʻshimchalari.** Slaysr, tayanchlar va tagʻlik, ekspozitsiya sinovi hamda GOO, SL1, Chitubox va Anycubic fayl formatlari, barchasi standart holatda oʻchiq.

## Har bir ilovada

- Tugma yoki boshqaruv ustiga borganda Bootstrap tooltip koʻrinadi.
- Boʻsh chizish maydonidagi boshlangʻich maslahatda yopish tugmasi bor; BimCraft uni yopilganini eslab qoladi.
- Panel yorliqlari qatori sigʻmasa endi kesilmaydi, aylantiriladi.
- Hujjat ochiq boʻlganda brauzer yorligʻida "<hujjat> - BimCraft | CadCraft" yoziladi.
- {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Joylashuv}} da joylashuvlar ikki qatorli variantlar roʻyxatidir.
- {{ui:Sozlamalar}} dagi til roʻyxatida 0.8 ga qaraganda koʻproq tillar bor; ingliz tilidan boshqa tillar mashina qoralamalaridir.

## Tuzatildi

- **Zinalarda, shuningdek pandus, panjara, tom tekisliklari, erkin turgan qurilmalar, rasmlar va yoʻllarda Siljitish ishlaydi.**
- **Devorni sudrash endi xonani buzmaydi.** Markaziy tutqich devorni oʻzi boʻyicha kvadrat qilib siljitadi, burchaklari ulangan devorlar boʻylab suriladi. Eski erkin siljitish uchun {{key:Mod}} ni ushlab turing; {{ui:Tekislash}} 90 gradusni qaytaradi.
- **Ulangan tugunda qalinlik yoki tur oʻzgarganda** burchak L, T, uch devorli tugun va egri devor yonida yopiq qoladi.
- **Xonalar guruhini siljitish yoki nusxalash** guruhdan tashqaridagi ulangan devorlarni ulangan holda saqlaydi.
- **Qayta bajarish devor oʻlchamining identifikatorini saqlaydi.**
- **Draw oʻchiq boʻlganda devorni tanlash** Xossalarda xatolik bermaydi.
- **Render GPU ishga tusha olmasa,** toʻxtamasdan WebGL ga oʻtadi.
- **EnergyPlus tekshiruvini** yana yoqish mumkin.
- **Hujjatlar markazlashtirilgan dialog sifatida ochiladi.** {{key:Esc}}, X yoki xiralashgan sahifani bosish uni yopadi.
- **{{ui:Reja}}, {{ui:Boʻlish}} va {{ui:3D}} tugmalari** model ochilishi bilan koʻrinadi, Chizish bir marta yoqilganidan keyin emas.

## Amaliy chegaralar

- Hech narsa haqiqiy uskunada chop etilmagan. Smola tayanchlari yangi va hali sinovdan oʻtmagan.
- Shamol, seysmik, beton va chekli elementlar natijalari muhandis uchun tekshiruv vositasi boʻlib, yopiq shakllar boʻyicha tekshirilgan, haqiqiy binoda emas.
- BIMʼga skanerlash sintetik binoda sinovdan oʻtgan, haqiqiy skanerda emas, faqat toʻgʻri burchakli xonalarni topadi.
- Collada bu yerda Blender yoki Google Earth da ochilmagan.
- Yoritish bahosi bizning oʻz izimizga qarab tekshirilgan, boshqa yoritish dasturlariga qarab emas.
- Janubiy Afrika raqamlari tasdiqlanmagan.
- Devor birlashtirish uslublari (butt, mitre, square off) va qatlam ustuvorligi qurilmagan; burchaklar mitre usulida.
- Ingliz tilidan boshqa tillar mashina qoralamalaridir.

Qolgan hammasi [Hali qurilmagan narsalar](topic:not-built-yet) da. Oldingi oʻzgarishlar ushbu sahifada pastroqdagi 0.8 va 0.8.1 yozuvlarida.

## Oldingi: 0.8 va 0.8.1

Bu BimCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) versiyalarida 0.7 ga qaraganda nimalar oʻzgarganini koʻrsatadi. BimCraft endi bino haqidagi savollarga javob bera oladi va uni sinab koʻra oladi — odamlar, tovush, suv, shamol va zilzilalar bilan, koʻproq vositalar bilan chizadi; 0.8.1 tuzatish reliz.

### Yangi

**Binoni sinash**

- **Binodagi odamlar.** Chap panelning {{ui:Binodagi odamlar}} boʻlimi evakuatsiyani yoki odatiy kun kelishlarini xonalaringiz, eshiklaringiz va zinalaringiz orqali oʻtkazadi. Bino torayadigan joylarda navbatlarni, har bir xonadan chiqishgacha boʻlgan eng uzoq yoʻlni va oxirgi odamning qancha vaqt olganini koʻrasiz. Oʻzgarish nimaga olib kelishini koʻrish uchun eshikda {{ui:Yopiq}} ni belgilang va yurganlarni kuzatish uchun {{ui:Odamlarni 3D koʻrinishda koʻrsatish}} ni belgilang. Topilmalar Muammolarga boradi. Bu loyihalash qarorlari uchun taxminiy olomon modeli, yongʻin xavfsizligi sertifikati emas. Qarang: [Odamlarni binodan oʻtkazish](topic:people-in-the-building).
- **Xona akustikasi va uni eshitish.** {{ui:Xona akustikasi}} boʻlimi har bir xona uchun oktava polosasi boʻyicha reverberatsiya vaqtini (Sabine va Eyring) xona oʻlchami va tanlagan pardozlardan hisoblaydi; oʻz maqsadingiz bilan esa qancha yutilish talab qilinishini aytadi. {{ui:Shu xonada ijro etish}} xona uchun hisoblangan impuls javobi orqali ovozni, qarsakni, chertilgan notalarni yoki oʻz tovush faylingizni ijro etadi. Yutilish raqamlari siz almashtirishingiz uchun odatiy nashr etilgan qiymatlardir. Qarang: [Xona akustikasi](topic:room-acoustics).
- **Toshqin, shamol va zilzila ijrosi.** {{ui:Xavfni koʻrsatish}} xonalar orqali koʻtariladigan suvni, har bir qavatdagi shamol bosimini va qavatlarni silkitadigan zilzilani reja yoki fasadda vaqt surgichi bilan koʻrsatadi. Oddiy modellar, ularning taxminlari panelda; bu qoidalar tekshiruvi emas. Qarang: [Toshqin, shamol yoki zilzilani ijro etish](topic:hazard-playback).
- **Ellik yildan keyin nima eskiradi.** {{ui:Hayot sikli koʻrinishi}} derazalar, eshiklar, pardozlar va tomni har biri xizmat muddati, almashtirish yillari bilan roʻyxatlaydi va birlik narxini kiritsangiz, yil boʻyicha xarajat va uning joriy qiymatini koʻrsatadi. {{ui:Jadvalni saqlash (CSV)}} uni yozib beradi. Xizmat muddatlari rejalashtirish raqamlaridir. Qarang: [Ellik yil ichida nima eskirishini koʻrish](topic:life-cycle-view).
- **Beton va seysmik tekshiruvlar.** {{ui:Tahlil}} yorligʻining {{ui:Beton elementlar}} va {{ui:Seysmik yuklar}} boʻlimlari beton balkalar va ustunlarni ACI 318-19 boʻyicha tekshiradi va qattiq qavatlarda ASCE 7-22 boʻyicha ekvivalent yon kuchlarni hisoblaydi, qavat siljishi bilan. Muhandis tekshirishi uchun. Qarang: [Beton elementlarni tekshirish va seysmik yuklarni hisoblash](topic:concrete-and-seismic).

**Tekshirish va hisobot**

- **IDS boʻyicha tekshirish.** Mijoz bergan `.ids` faylini yuklang va IFC ni topshirishdan oldin Muammolarda unga javob bermaydigan har bir elementni koʻring. {{ui:Model tekshiruvi}} ostida {{ui:IDS boʻyicha tekshirish}} ni oching. Qarang: [Modelni mijozning IDS bilan tekshirish](topic:check-against-ids).
- **Teglar va jadvallar.** Oʻz teglaringizni aniqlang, ularni koʻplab elementlarga bir vaqtda qoʻying va ustunlari, filtrlari hamda guruhlari ularni oʻqiydigan jadvallar tuzing; teglar IFC da saqlanadi. Qarang: [Teglar va jadvallar](topic:tags-and-schedules).
- **Modeldan hujjatlar.** {{ui:Model hujjatlari}} ochiq IFC dan spetsifikatsiya shablonini toʻldiradi va uni PDF, Word hujjati yoki Markdown sifatida saqlaydi. Qarang: [Modeldan hujjatlar](topic:documents-from-the-model).
- **Skanni modelga solishtirish.** Nuqtalar buluti ochiq boʻlganda {{ui:Solishtirish}} har bir elementni qurilgan, qisman qurilgan, yoʻq yoki yetib kelinmagan deb baholaydi va qurilganlik foizini koʻrsatadi. Qarang: [Skanni modelga solishtirish](topic:compare-scan-with-model).
- **Uglerod va xarajat.** Uglerod paneli tahrirlash mumkin boʻlgan omil jadvalidan oʻrnatilgan uglerodni yigʻadi, Xarajat paneli esa narxlarni 4D jadval boʻylab taqsimlaydi. BimCraft bilan kelgan omillar umumiy va tekshirilmagan deb belgilangan. Qarang: [Oʻrnatilgan uglerod va xarajat](topic:embodied-carbon-and-5d-cost).
- **Istalgan xarita proyeksiyasi.** {{ui:Oʻlchash}} › {{ui:Koordinatalar tizimi…}} EPSG raqamini, UTM zonasini, nomini yoki oʻz proyeksiya taʼrifini qabul qiladi. Qarang: [Istalgan proyeksiya bilan georeferensiya](topic:georeference-any-projection).

**Chizish va tahrirlash**

- **Koʻchirish, tekislash va taqsimlash.** {{ui:Yigʻilish}} ostida; {{key:Shift+M}} koʻchirishni boshlaydi (oddiy {{key:M}} hali ham Oʻlchash). Koʻchirish {{key:C}} bilan yurganda nusxa oladi, har bir qadam bitta bekor qilish, va Live TeamWork seansida harakat qiladi. Qarang: [Koʻchirish, nusxalash, tekislash va taqsimlash](topic:move-align-distribute).
- **Reja ostidagi rasmlar.** {{ui:Yigʻilish}} › {{ui:Rasm}} sathning rejasi ostiga yoki vertikal tekislikka PNG, JPEG yoki WebP joylashtiradi. Masshtabni ikki nuqta bilan belgilang, uni koʻchiring, buring, xiralashtiring va qulflang. MarkupCraft da nusxalangan maydon oʻz varagʻining masshtabida joylashadi. Qarang: [Reja ostiga rasm qoʻyish](topic:pictures-as-backgrounds).
- **Skandan devorlar.** Skan ochiq boʻlganda devorlar, eshiklar va xonalar birma-bir saqlab yoki rad etiladigan takliflar sifatida keladi, bitta bekor qilish qadamida. Faqat ikki oʻzaro perpendikulyar yoʻnalishdagi devorlar topiladi. Qarang: [Skanni devorlarga aylantirish](topic:scan-to-walls).
- **Iz, qalamlar va sketch zina.** {{ui:Iz olish}} boshqa sathni reja ostida shtrixli koʻrsatadi, {{ui:Qalamlar}} devorlar, eshiklar va derazalarga bitta koʻrinishda oʻz chiziq qalinligini beradi, {{ui:Zinani eskizlash}} esa yurish chizigʻini zinaga aylantiradi. Wavefront OBJ tor ochiladi. Qarang: [Eskizdan sathning izi, qalamlar va zina](topic:trace-pens-stairs-obj).
- **Manzil atrofidagi binolar.** CivilCraft ning Manzildan uchastka qidiruvi topgan binolar va parsel takliflar sifatida keladi; qoʻshish uchun kerakliklarini belgilaysiz. Qarang: [CivilCraft uchastkasidan boshlash](topic:site-from-civilcraft).
- **Panel chizmalari.** {{ui:Yigʻilish}} › {{ui:Panel chizmalari}} yogʻoch yoki yengil oʻlchamli poʻlat devorlar, polar va tomlarni karkasga soladi va kesish roʻyxatini CSV, ustaxona chizmalarini PDF sifatida saqlaydi. Boshlangʻich qiymatlar, konstruktiv loyiha emas. Qarang: [Panel chizmalari](topic:panel-drawings).
- **Belgilar palitrasi va oʻsimliklar.** {{ui:Yigʻilish}} › {{ui:Belgilar palitrasi}} elektr va santexnika belgilarini nomi boʻyicha topadi; {{ui:Kutubxona}} ning {{ui:Oʻsimliklar}} manbasi reja belgilari bilan taxminan 400 ta oʻsimlikni roʻyxatlaydi. Qarang: [Belgilar palitrasi](topic:symbol-palette) va [Oʻsimlik joylashtirish](topic:plant-list).

**Quvurlar, kanallar va energiya**

- **Split, VRF va fan-koillar.** Ichki va tashqi bloklar ularning ulanishlari bilan, va sovutgich liniyalari odatiy namunaviy qiymatlar jadvalidan oʻlchamlangan, uni oʻzgartirish mumkin. Qarang: [Split, VRF va fan-koillar](topic:split-vrf-fan-coils).
- **Hisob-kitoblar.** Hisob-kitoblar paneli taʼminot quvurlari va kanallar oʻlchamini bosim pasayishi bilan tekshiradi, kabellarni lotoklar va trubalar orqali oʻtkazadi va ularning toʻlishini koʻrsatadi, IES yoki EULUMDAT fayllaridan yoritilganlikni hisoblaydi. Standart qiymatlar belgilangan; kodingizning qiymatlarini kiriting. Qarang: [Quvur, kanal, kabel va yoritish hisob-kitoblari](topic:mep-calculations).
- **PCF fayllari.** Quvur vositasining **PCF eksport qilish** buyrugʻi quvur yoʻllarini quvur kuchlanishi va izometrik dasturlar uchun yozadi; qayta oʻqilgan PCF fayli oʻz quvurini chizadi. Qarang: [Quvur komponentlari fayllari](topic:piping-pcf).
- **Quyosh PV.** Tomlarga yoki yerga massivlarni oʻrnating, ularni modeldan soyalang, yillik energiyani baholang, stringlarni tekshiring va bitta chiziqli sxema maʼlumotlarini yarating. Boshlangʻich modul va yoʻqotishlar umumiy. Qarang: [Quyosh PV](topic:solar-pv).
- **EnergyPlus fayli.** Panelda EnergyPlus bilan tekshirish modelni oʻz EnergyPlus dasturingizda ishlatish uchun IDF sifatida yozadi. Brauzerda ishlatish siz oʻzingiz joylashtirgan va manzilini kiritgan versiyani talab qiladi; BimCraft uni olib yurmaydi. Qarang: [EnergyPlus bilan isitish va sovutishni tekshirish](topic:check-with-energyplus).

**Rasmlar va fayllar**

- **Render dvigatelini tanlang.** {{ui:Render}} da {{ui:Mexanizm}} tanlovi bor. Ikkita oʻrnatilgan dvigatelimiz (Tez va Yoʻl izlovchi) standart boʻlib qoladi. **Quyidagicha ochish** sahnani USD yoki glTF fayli sifatida, Unreal loyiha papkasini esa .zip sifatida saqlaydi; CadCraft Studio da qoʻshimcha dvigatel qoʻshishi mumkin. Loyihani ochadigan Unreal plagini chiqarilmagan. Qarang: [Rasmni qaysi dastur chizishini tanlash](topic:render-engines).
- **Studio da bekor qilish.** CadCraft Studio ichida BimCraft har bir tugallangan qadamni Studio ga bildiradi, shunda Studio oxirgi ishlatgan oynangizdagi oxirgi qadamni bekor qila oladi. Qarang: [Ilovalar boʻylab bekor qilish](topic:undo-across-apps).
- **Faylingizdagi qoʻshimchalar.** IFC qaysi qoʻshimchalar unga yozganini qayd etadi va uni ochganingizda sizda yoʻq boʻlganlarini taklif qiladi. Qarang: [Faylingizdagi qoʻshimchalar](topic:add-ons-in-your-file).

**Hamma ilovalarda**

- **AI ni ulang.** Oʻz yordamchingiz BimCraft ni Studio ulanishi orqali boshqara oladi va model haqidagi savollarga javob beradi, masalan, qaysi xonalar berilgan maydon ostida. Studio ning oʻz AI si yoʻq. Qarang: [AI yordamchisi modelingiz bilan ishlashi](topic:assistants).
- **Asboblar paneli qatorlari.** {{ui:Sozlamalar}} › {{ui:Umumiy}} › {{ui:Asboblar paneli qatorlari}} Wrap, 2 qator yoki 1 qator taklif qiladi; Wrap standart boʻlib qoladi.
- **Kiritish qurilmalari.** Trackpad, qalam, 3D sichqoncha, kontroller va MIDI sozlamalari barcha ilovalar uchun umumiy.
- **Muammolar va Live.** Ogohlantirish paneli va Live seanslari avvalgidek ishlaydi, yuqoridagi yangi tekshiruvlar Muammolarga beriladi.
- **Tillar.** 54 ta til, ulardan oʻntasi yangi. Ingliz tilidan boshqalari ona tilida oʻqilmagan mashina qoralamalaridir; yordam mavzulari asosan ingliz tilida.

### 0.8.1 da tuzatilgan

- **Lenta + Loyiha brauzeri joylashuvi.** Insert › Import CAD, Insert › Image va Manage › Project Units "BimCraft da hali qurilmagan" degan edi. Endi Image Rasm vositasini ochadi, Import CAD {{ui:Yigʻilish}} › {{ui:Chizmadan…}} ni ochadi (DWG, DXF, PDF yoki skan), Project Units esa {{ui:Sozlamalar}} › {{ui:Global}} › {{ui:Birliklar}} ni ochadi. Move va Align Koʻchirish va Tekislash vositalarini ishga tushiradi, Level {{ui:Sathlar qoʻshish…}} ni ochadi, Phases Qayta qurish fazalari boʻlimini ochadi, Materials esa material kutubxonasini ochadi.
- **DWG sinflar boʻlimi.** U notoʻgʻri turda oʻqilgan edi; BimCraft va DWG ni oʻqiydigan boshqa ilovalarda tuzatildi.
- **Ish vaqtida til.** Studio va qadoqlangan nashrlar endi qayta ishga tushirmasdan tilni almashtira oladi. Hali har bir platformada sinalmagan; til oʻzgarmasa, bizga xabar bering.
- **Archicad toʻplam skripti.** Alohida yuklab olinadigan `archicad_bundle.py` endi Archicad yoʻlini topadi, papkani 20 soniyagacha kuzatadi va toʻplam yonida qayta urinadi.

### Bu versiyada hali yoʻq

- **Xavfsizlik va loyiha yordamchilari.** Binodagi odamlar uchun qurilish kodeksidan olingan yurish masofasi chegarasi yoʻq (chegarani siz kiritasiz) va haqiqiy rejada qoʻlda tekshirilmagan. Akustika, hayot sikli va xavf raqamlari rejalashtirish qiymatlari, kod tekshiruvi emas.
- **Iqlim kelajagi va EnergyPlus.** Oʻrnatilgan iqlim kelajagi yoʻq: toshqin hisobi uchun stsenariy faylini yuklashingiz mumkin. Brauzerdagi EnergyPlus ishga tushirish bu relizga kirmaydi.
- **Lenta joylashuvi.** Material hisob-kitobi "Hali qurilmagan" boʻlib qoladi, chunki BimCraft da material miqdorlari roʻyxati yoʻq; yana 54 ta kulrang lenta vositasi orqasida hali BimCraft vositasi yoʻq.
- **Imzo va platformalar.** Windows oʻrnatuvchilari va macOS .dmg imzolanmagan, shuning uchun SmartScreen {{ui:Batafsil}} va keyin {{ui:Baribir ishga tushirish}} ni koʻrsatadi, macOS da esa oʻng tugma, keyin {{ui:Ochish}}. iPad va iPhone nashri 0.8.1 uchun qayta qurilmagan.
- **Haqiqiy sahifa sinovlari.** Baʼzi eski BimCraft brauzer sinovlari bizning sinov sahifamizda hali ham muvaffaqiyatsiz tugaydi, 0.8.1 dan oldin boʻlgani kabi.

Qolgan hammasi [Hali qurilmagan narsalar](topic:not-built-yet) da. Oldingi oʻzgarishlar [0.7 dagi yangiliklar](topic:whats-new-0-7) da.
