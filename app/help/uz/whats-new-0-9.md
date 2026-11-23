---
title: 0.9 versiyasidagi yangiliklar (oldinroq)
summary: Devor shakllari, bo'lish, siljish, choʻzish va setkaga qulflash, pastki sathlar, setka oʻlchamlari va rejada oʻlchash, ish uslubi va qalam jadvallari bilan takroriy koʻrinishlar, Quyidagicha hisobot qilish, Collada va Google Earth eksporti, Scan to BIM, shamol va seysmik tahlil, smola bilan chop etish qoʻshimchalari.
keywords: 0.9 yangiliklari, oldingi relis, yangiliklar, 0.9, relis eslatmalari, devor shakllari, toʻgʻri toʻrtburchak, koʻpburchak, yoy, chiziqlarni tanlash, kontur izi, siljish, ulash, quti boʻyicha choʻzish, tekislash va qulflash, devorni boʻlish, boʻshliq, qayta ulash, setkaga qulflash, boshidan oʻsish, oʻlchash boshlanishi, pastki sath, sath buyrugʻi, yerto'la, setka oʻlchamlari, rejada oʻlchash, ish uslubi, takroriy koʻrinish, mustaqil nusxa, bogʻlangan koʻrinish, qalam jadvali, qogʻozda chop etish, quyidagicha hisobot, masshtabni kiriting, SVG import, rejaga joylashtirish, modelga joylashtirish, collada, dae, kmz, google earth, scan to bim, shamol yuki, seysmik, chekli elementlar, hujjatlar paneli, smola bilan chop etish, yangiliklar, oʻzgarishlar jurnali, 0.8, 0.8.1, versiya, yangi imkoniyatlar, evakuatsiya, odamlar, navbatlar, akustika, reverberatsiya, impulsli javob, suv toshqini, shamol, zilzila, xavf, hayot sikli, xizmat muddati, ids, teglar, jadvallar, surish, tekislash, taqsimlash, rasm, fon, scan to walls, CivilCraftdan joy, panel chizmalari, karkas, quyosh, pv, split, vrf, fan coil, quvur oʻlchamlari, kabel lotogi, yoritilganlik, beton, seysmik, skanerlashni solishtirish, epsg, proyeksiya, hujjatlar, shablon, uglerod, narx, energyplus, render mexanizmi, ochish, usd, glb, unreal, ortga qaytarish, qoʻshimchalar, pcf, belgilar, oʻsimliklar, iz olish, qalamlar, lenta, loyiha brauzeri, maket
from: 816df7f8
---

Bu BimCraft 0.9 da 0.8.1 bilan solishtirganda nima oʻzgarganini koʻrsatadi. Ikki asosiy yoʻnalish: haqiqiy devor asbobi va katta BIM dasturlaridan kelgan odamlar kutadigan tarzda ishlaydigan koʻrinishlar. Ularning yonida Collada eksporti, elektr qurilmalarini joylashtira oladigan yordamchilar, Scan to BIM hamda {{ui:Analysis}} yorligʻidagi shamol, seysmik va chekli elementlar ishlari bor.

## Yangi

### Devorlar

- **Butun shakllarni chizish.** {{ui:Draw}} da {{ui:Shapes}} ni oching (yoki Devor qatoridagi Shakl roʻyxatidan shaklni tanlang): toʻgʻri toʻrtburchak, aylantirilgan toʻrtburchak, 3 tadan 64 tagacha tomonli koʻpburchak, markaz boʻyicha yoy, urinma yoy, tanlangan chiziqlar boʻylab devorlar yoki ichini bosgan yopiq maydon atrofidagi devorlar. Toʻrtburchak — toʻrtta birikkan burchakli toʻrtta devor va bitta ortga qaytarish qadami. Qarang: [Devor shakllari, boʻlish, siljish, choʻzish va qulflash](topic:wall-tools).
- **Chizishdan oldin oʻrnating, keyin oʻzgartiring.** Devor qatorida {{ui:Offset}} va {{ui:Join}} bor (erkin turgan devorlar chizish uchun belgisini olib tashlang). Keyinchalik chizilgan devorlarda {{ui:Offset}}, {{ui:Box stretch}} va {{ui:Align and lock}} dan foydalaning. Koʻchirilgan yoki choʻzilgan devor oʻz eshik, deraza va oʻlchamlarini saqlaydi. Har bir retsept bitta ortga qaytarish qadami.
- **Devorlarni kesish.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} va {{ui:Rejoin}} devorni bir bosishda yoki boshqa devor uni kesib oʻtgan joyda kesadi. Eshik orqali kesishga ruxsat berilmaydi. Qarang: [Devor shakllari, boʻlish, siljish, choʻzish va qulflash](topic:wall-tools).
- **Devorlarni setka chiziqlariga qulflash.** Setka chizigʻi boʻylab devorni tanlang va {{ui:Properties}} ichida {{ui:Lock to grid}} ni belgilang. Setka asbobi yoqilgan holda {{ui:Move by}} ga tanlangan chiziq uchun masofani kiriting: qulflangan devorlar bitta ortga qaytarish qadamida ergashadi.
- **Bitta devor shaklini oʻzgartirish.** Bitta devorning {{ui:Properties}} ida uning yuqorisi yoki tagini tomga, polga yoki shiftga biriktirishingiz, uning balandlik konturini tahrirlashingiz, egdirishingiz yoki eshik yoki derazasiz devor teshigini kesishingiz mumkin. Qarang: [Devor shakli](topic:wall-shape).
- **Uzunlik qaysi uch qolishini bildiradi.** {{ui:Grow from}} uzunlikni oʻzgartirganda boshlanish, tugash yoki markaz joyida qolishini belgilaydi.
- **Uzunlik va rejadagi oʻlcham mos keladi.** {{ui:Measure from}} (markaz chizigʻi, ichki yoki tashqi yuz) ham Uzunlik maydonini, ham rejadagi devor oʻlchamlarini boshqaradi. Markaz chizigʻidan boshlanadi, shuning uchun rejadagi devor oʻlchamlari avval tashqi yuzni koʻrsatgan boʻlsa, endi markaz chizigʻini koʻrsatadi. Uni Devor qatorida, {{ui:Properties}} da yoki {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}} da oʻzgartiring.

### Sathlar, setkalar va oʻlchash

- **Pastki sath qoʻshish.** {{ui:Levels}} panelidagi {{ui:Add a level below}} eng pastkisi ostiga, shu balandlikda, manfiy balandlikda sath qoʻshadi (Level -1, Level -2). Boshqa hech narsa siljimaydi. {{ui:Add levels…}} endi manfiy balandliklarni qabul qiladi. Buyruq qatorida LEVEL, LEVELS, STOREY yoki STOREYS yozilsa {{ui:Add levels…}} ochiladi, menyular va lenta yorliqlarida {{ui:Levels}} tugmasi bor. Qarang: [Uchastkalar, binolar va sathlar](topic:site-building-and-levels).
- **Rejadagi setka oʻlchamlari.** {{ui:Grid}} asbobi yoqilgan holda {{ui:Dimensions}} ni belgilang: har bir sath rejasida qoʻshni chiziqlar orasidagi masofa va umumiy oʻlcham belgilar tashqarisida chiziladi. Qarang: [Setkani oʻlchash](topic:grid-dimensions).
- **Rejada oʻlchash.** {{ui:Draw}} guruhidagi {{ui:Measure}} ikki bosish orasidagi masofani X va Y farqlari bilan beradi. Modelda hech narsa saqlanmaydi. Qarang: [Rejada oʻlchash](topic:measure-on-the-plan).
- **Bir nechta ustunni bir vaqtda oʻzgartirish.** Ustunlarni devor bilan birga tanlang, roʻyxat har bir turni {{ui:Keep only these}} bilan koʻrsatadi. Bir bosish ustunlarni saqlaydi va ularning umumiy maydonlarini koʻrsatadi.
- **Hamma joyda bitta koʻrsatish birligi.** Koordinatalar, oʻlchovlar, kesimlar, varaq masshtablari, freym yorligʻidagi yuklar va natijalar hamda Muammolar matni siz tanlagan birlikka amal qiladi. Eksportlar SI da qoladi.

### Koʻrinishlar, varaqlar va chop etish

- **Ish uslubi.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} har bir koʻrinishda oʻz izohlari va qalam jadvallari boʻlishi yoki ularning umumiy boʻlishi oʻrtasida tanlaydi. Qarang: [Ish uslubi, takroriy koʻrinishlar, qogʻozdagi qalamlar, Quyidagicha hisobot qilish va shablonlar](topic:working-style).
- **Koʻrinishni takrorlash.** Rejalar, shift rejalari, chaqiruvlar, fasadlar va kesimlarni {{ui:Own copy}} yoki {{ui:Linked}} sifatida takrorlash mumkin; {{ui:Make own copy}} bogʻlangan nusxani mustaqil qiladi. Qarang: [Ish uslubi, takroriy koʻrinishlar, qogʻozdagi qalamlar, Quyidagicha hisobot qilish va shablonlar](topic:working-style).
- **Koʻrinishdagidek yoki qalam jadvali orqali chop etish.** Qalam sozlamalari koʻrinish bilan birga IFC da saqlanadi, varaqlar va PDF lar ekrandagidek chizadi. Oʻsha mavzu qalam jadvallarini ham qamrab oladi.
- **Quyidagicha hisobot qilish.** {{ui:Properties}} dagi {{ui:Report as}} yoʻl sifatida chizilgan plitani, panel sifatida chizilgan devorni yoki rampa sifatida chizilgan tomni tanlagan sinfingiz bilan IFC ga yozadi va jadvallarda, Miqdorlarda, Topishda, Rang boʻyicha va Muammolarda shunday hisoblaydi.
- **Fasad va kesimlarda tahrirlash.** Devorlar, teshiklar, sathlar, oʻlchamlar va izohlarni fasad yoki kesimning oʻzida chizing va siljiting, oʻz varaq oʻlchamlari va sarlavha bloklari bilan. Qarang: [Fasad va kesimlarda tahrirlash](topic:edit-in-elevations).
- **Varaqlar.** Har bir varaq gorizontal yoki vertikal boʻlishi mumkin. Har bir joylashtirilgan koʻrinish yonidagi masshtab roʻyxati yonida {{ui:Type a scale}} maydoni bor (1:64, 2:1, 1/4" = 1'). Joylashtirilgan chizmani sudrab yoki oʻq tugmalari bilan surish mumkin, {{ui:Formats…}} › {{ui:Import SVG…}} esa sizning varaq dizayningizni har bir varaq uchun kiritilgan maydonlar bilan sarlavha blokiga aylantiradi.
- **Varaqda kutubxona mualliflari.** Kutubxona elementlari bilan chizmalar toʻplami uchun istalgan varaqqa joylashtirish mumkin boʻlgan Kutubxona mualliflik roʻyxati chiqadi. Qarang: [Kutubxona mualliflik roʻyxati](topic:library-credits).

### Kutubxona: joylashtirish

- **Joylashtirish koʻrinishga ergashadi.** Reja koʻrinishida Kutubxona {{ui:Place in plan}} ni koʻrsatadi; 3D da {{ui:Place in model}} ni; Split da esa asosiy harakat sifatida {{ui:Place in plan}} boʻlgan boʻlinadigan tugma koʻrsatiladi. Ikkala usul ham bir xil IFC elementini yozadi. Kutubxona kartochkasini rejaga yoki 3D koʻrinishga sudrab olib borishingiz ham mumkin; qalam yoki barmoq bilan bosib turing, keyin torting. Qarang: [Kutubxonadan joylashtirish](topic:place-from-library).

### Fayllar va yordamchilar

- **Collada va Google Earth.** Asboblar panelidagi {{ui:Collada}} (menyu uslublarida Fayl menyusi) `.dae` yoki xaritada model joylashgan joyga qoʻyilgan `.kmz` yozadi. Qarang: [Modelni Collada yoki Google Earth uchun eksport qilish](topic:collada).
- **Yordamchilar elektr qurilmalarini joylashtira oladi.** Ulangan yordamchingizda qurilmalarni qoʻshish, roʻyxatlash, oʻzgartirish va oʻchirish hamda chiroqlarni sozlash uchun yangi asboblar bor. Yordamchilar {{ui:Settings}} da yoqmaguningizcha oʻchiq turadi. Qarang: [AI yordamchi bilan modelingiz ustida ishlash](topic:assistants).
- **Scan to BIM (qoʻshimcha).** Standart holda oʻchiq, Nuqtalar bulutlari qoʻshimchasini talab qiladi. Skanerlashdan har bir oʻlchangan chetlanish bilan taklif qilingan polar, devorlar, eshiklar va derazalarni taklif qiladi; qabul qilish bitta ortga qaytarish qadami.

### Tahlil

- **Shamol va seysmik joy maʼlumotlari.** {{ui:Analysis}} yorligʻida: ASCE 7-10 yoki 7-16 boʻyicha yopiq qurilish uchun shamol yuklari, har bir qavatdagi kuch yuklash holatlari sifatida; USGS qidiruvi va loyihaviy spektr bilan seysmik joy maʼlumotlari.
- **Konstruktiv davomi va chekli elementlar.** ACI 318-19 boʻyicha beton tekshiruvlari, ASCE 7-22 boʻyicha ekvivalent gorizontal kuchlar, qavat siljishi, plitalar va devorlar plastinka sifatida, ASCE 7 va EN 1990 dan yuklash kombinatsiyalari. Bizning chekli elementlar mexanizmimiz qobiqlar, tetraedrlar va modal tahlilni bajaradi. Qarang: [Beton elementlarni tekshirish va seysmik yuklarni hisoblash](topic:concrete-and-seismic) hamda [Freym tahlili](topic:frame-analysis).

### Boshqa qoʻshimchalar va hujjatlar

- **Ichki yoritish (qoʻshimcha).** Yoritish armaturalarini joylashtiradi va har bir sath rejasiga luksni raqam sifatida yozadi, yorugʻlik nurlanishi bahosi va chop etiladigan hisobot bilan.
- **Hujjatlar paneli.** {{ui:File}} › {{ui:Documents…}} qulf fayli bilan olish va qaytarish, revizya harflari, chiqarilish holatlari va tarixni oʻz ichiga oladi.
- **Hududlar va poʻlat.** Regulations qoʻshimchasidagi Janubiy Afrika chizma va qurilish qoidalari toʻplamlari, umumiy kesim jadvalidagi 976 ta Buyuk Britaniya poʻlat oʻlchami.
- **Bepul smola bilan chop etish qoʻshimchalari.** Slicer, tayanchlar va plita, ekspozitsiya sinovi, hamda GOO, SL1, Chitubox va Anycubic fayl formatlari; hammasi standart holda oʻchiq.

## Har bir ilovada

- Tugma yoki boshqaruvning ustiga borsangiz Bootstrap maslahati koʻrsatiladi.
- Boʻsh chizma maydonidagi boshlangʻich maslahatda yopish tugmasi bor; BimCraft uning yopilganini eslab qoladi.
- Panel yorligʻi sigʻmasa, endi kesilmasdan aylanadi.
- Hujjat ochiq boʻlganda brauzer yorligʻida "<hujjat> - BimCraft | CadCraft" yoziladi.
- {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} da maketlar ikki qatorli tanlovlarning ochiladigan roʻyxati.
- {{ui:Settings}} dagi til roʻyxatida 0.8 dagidan koʻproq tillar bor; ingliz tilidan boshqa tillar mashina qoralamasi.

## Tuzatildi

- **Zinalar, pandus, panjaralar, tom tekisliklari, erkin turgan qurilmalar, rasmlar va yoʻllarda Koʻchirish ishlaydi.**
- **Devorni sudrash xonani buzmaydi.** Markaziy tutqich devorni oʻziga nisbatan kvadrat holatda siljitadi, burchaklari birikkan devorlar boʻylab suriladi. Eski erkin siljish uchun {{key:Mod}} ni ushlab turing; {{ui:Square up}} 90 darajani qaytaradi.
- **Birikkan tugunda qalinlik yoki tur oʻzgarishi** burchakni L, T, uch devorli tugun va egri devor yonida yopiq holda saqlaydi.
- **Xonalar guruhini koʻchirish yoki nusxalash** guruhdan tashqaridagi birikkan devorlarni birikkan holda saqlaydi.
- **Qayta bajarish devor oʻlchamining identifikatorini saqlaydi.**
- **Draw oʻchiq holda devorni tanlash** Xossalarda xatoga olib kelmaydi.
- **Render GPU ishga tushmasa**, toʻxtab qolmasdan WebGL ga oʻtadi.
- **EnergyPlus tekshiruvini** yana yoqish mumkin.
- **Hujjatlar** markazlashgan dialog sifatida ochiladi. {{key:Esc}}, X yoki xiralashgan sahifani bosish uni yopadi.
- **{{ui:Plan}}, {{ui:Split}} va {{ui:3D}} tugmalari** model ochilishi bilanoq koʻrinadi, Draw bir marta yoqilgandan keyin emas.

## Haqiqiy cheklovlar

- Hech narsa haqiqiy uskunada chop etilmagan. Smola tayanchlari yangi va sinovdan oʻtmagan.
- Shamol, seysmik, beton va chekli elementlar natijalari muhandis uchun tekshiruv vositalari boʻlib, yopiq shakllar bilan tekshirilgan, haqiqiy binoga qarshi emas.
- Scan to BIM sintetik binoda sinovdan oʻtkazilgan, haqiqiy skanerlashda emas, faqat toʻgʻri burchakli xonalarni topadi.
- Collada bu yerda Blenderda yoki Google Earthda ochilmagan.
- Yoritish bahosi boshqa yoritish dasturlari bilan emas, bizning oʻz izimizga qarshi tekshirilgan.
- Janubiy Afrika raqamlari tasdiqlanmagan.
- Devor birikish uslublari (butt, mitre, square off) va qatlam ustuvorligi hali yoʻq; burchaklar mitered.
- Ingliz tilidan boshqa tillar mashina qoralamalari.

Qolgan hamma narsa [Hali qurilmagan narsalar](topic:not-built-yet) da. Oldingi oʻzgarishlar bu sahifada pastroqdagi 0.8 va 0.8.1 eslatmalarida.

## Oldinroq: 0.8 va 0.8.1

BimCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) da nima oʻzgarganini koʻrsatadi, 0.7 bilan solishtirganda. BimCraft endi bino haqidagi savollarga javob bera oladi va uni odamlar, tovush, suv, shamol va zilzilalar bilan sinab koʻradi, shuningdek koʻproq asboblar bilan chizadi; 0.8.1 tuzatish relisi.

### Yangi

**Binoni sinash**

- **Binodagi odamlar.** Chap panelning {{ui:People in the building}} boʻlimi evakuatsiya yoki oddiy kundagi kelishlarni xonalaringiz, eshiklaringiz va zinalaringiz orqali oʻtkazadi. Bino torayadigan joylardagi navbatlarni, har bir xonadan chiqishgacha eng uzun yoʻlni va oxirgi odam qancha vaqt olishini koʻrasiz. Qaysi oʻzgarishni koʻrish uchun eshikda {{ui:Shut}} ni belgilang, piyodalarni koʻrish uchun {{ui:Show the people in the 3D view}} ni belgilang. Topilmalar Muammolarga boradi. Bu loyihalash qarorlari uchun taxminiy olomon modeli, yongʻin xavfsizligi sertifikati emas. Qarang: [Odamlarni bino orqali yurgizish](topic:people-in-the-building).
- **Xona akustikasi va uni eshitish.** {{ui:Room acoustics}} boʻlimi har bir xonaning reverberatsiya vaqtini oktava polosasi boʻyicha beradi (Sabine va Eyring) uning oʻlchami va tanlagan pardozlaridan; oʻz maqsadingiz bilan u qancha yutilish kerakligini aytadi. {{ui:Play it in this room}} ovoz, qarsak, chertilgan notalar yoki oʻz tovush faylingizni xona uchun hisoblangan impulsli javob orqali ijro etadi. Yutilish raqamlari oʻrnini bosish uchun tipik nashr qiymatlari. Qarang: [Xona akustikasi](topic:room-acoustics).
- **Suv toshqini, shamol va zilzila ijrosi.** {{ui:Hazard playback}} xonalar orasida koʻtarilayotgan suvni, har bir qavatga shamol bosimini va qavatlarni silkitayotgan zilzilani vaqt sirgʻichi bilan reja yoki fasadda koʻrsatadi. Oddiy modellar, ularning taxminlari panelda; kod tekshiruvi emas. Qarang: [Suv toshqini, shamol yoki zilzilani ijro etish](topic:hazard-playback).
- **Ellik yil ichida nima eskiradi.** {{ui:Life-cycle view}} har biri xizmat muddatiga ega derazalar, eshiklar, pardozlar va tomni, ularni almashtirish yillarini va birlik narxini kiritganingizda yil boʻyicha narxni va uning joriy qiymatini beradi. {{ui:Save the schedule (CSV)}} uni yozib oladi. Xizmat muddatlari rejalashtirish raqamlari. Qarang: [Ellik yil ichida nima eskirishini koʻring](topic:life-cycle-view).
- **Beton va seysmik tekshiruvlar.** {{ui:Analysis}} yorligʻidagi {{ui:Concrete members}} va {{ui:Seismic loads}} bloklari beton tirgaklar va ustunlarni ACI 318-19 boʻyicha tekshiradi va qattiq qavatlarda ASCE 7-22 boʻyicha ekvivalent gorizontal kuchlarni hisoblaydi, qavat siljishi bilan. Muhandis tekshirishi uchun. Qarang: [Beton elementlarni tekshirish va seysmik yuklarni hisoblash](topic:concrete-and-seismic).

**Tekshirish va hisobot**

- **IDS boʻyicha tekshirish.** Mijoz bergan `.ids` faylni yuklang va IFC ni topshirishdan oldin unga javob bermaydigan har bir elementni Muammolarda koʻring. {{ui:Model checks}} ostidagi {{ui:Check against an IDS}} ni oching. Qarang: [Modelni mijozning IDS bilan tekshirish](topic:check-against-ids).
- **Teglar va jadvallar.** Oʻz teglaringizni aniqlang, ularni koʻp elementga bir vaqtda qoʻying va ustunlari, filtrlari va guruhlari ularni oʻqiydigan jadvallar yarating; teglar IFC da saqlanadi. Qarang: [Teglar va jadvallar](topic:tags-and-schedules).
- **Modeldan hujjatlar.** {{ui:Documents from the model}} ochiq IFC dan spetsifikatsiya shablonini toʻldiradi va PDF, Word hujjati yoki Markdown sifatida saqlaydi. Qarang: [Modeldan hujjatlar](topic:documents-from-the-model).
- **Skanerlashni modelga solishtirish.** Nuqtalar buluti ochiq boʻlganda, {{ui:Compare}} har bir elementni qurilgan, qisman qurilgan, yoʻq yoki yetib kelinmagan deb baholaydi va qurilish foizini koʻrsatadi. Qarang: [Skanerlashni modelga solishtirish](topic:compare-scan-with-model).
- **Uglerod va narx.** Carbon paneli oʻzgartirishingiz mumkin boʻlgan koeffitsiyentlar jadvalidan oʻrnatilgan uglerodni yigʻadi, Cost paneli esa narxlarni 4D jadval boʻyicha taqsimlaydi. BimCraft bilan kelgan koeffitsiyentlar umumiy va tekshirilmagan deb belgilangan. Qarang: [Oʻrnatilgan uglerod va narx](topic:embodied-carbon-and-5d-cost).
- **Har qanday xarita proyeksiyasi.** {{ui:Measure}} › {{ui:Coordinate system…}} EPSG raqamini, UTM zonasini, nomini yoki oʻz proyeksiya taʼrifingizni qabul qiladi. Qarang: [Istalgan proyeksiya bilan georeferens](topic:georeference-any-projection).

**Chizish va tahrirlash**

- **Koʻchirish, tekislash va taqsimlash.** {{ui:Build}} ostida; {{key:Shift+M}} Koʻchirishni boshlaydi (oddiy {{key:M}} hamon Oʻlchash). Koʻchirish har bir qadamda {{key:C}} bilan nusxa oladi, har bir qadam bitta ortga qaytarish va Live TeamWork seansida uzatiladi. Qarang: [Koʻchirish, nusxalash, tekislash va taqsimlash](topic:move-align-distribute).
- **Reja ostidagi rasmlar.** {{ui:Build}} › {{ui:Picture}} sathning rejasi ostiga yoki vertikal tekislikka PNG, JPEG yoki WebP joylashtiradi. Masshtabni ikki nuqta bilan belgilang, uni suring, buring, xiralashtiring va qulflang. MarkupCraft da nusxalangan maydon varaq masshtabida joylashadi. Qarang: [Reja ostiga rasm qoʻyish](topic:pictures-as-backgrounds).
- **Skanerdan devorlar.** Skaner ochiq boʻlganda devorlar, eshiklar va xonalar takliflar sifatida keladi: ularni birma-bir saqlaysiz yoki rad etasiz, bitta ortga qaytarish qadamida. Faqat ikki oʻzaro perpendikulyar yoʻnalishdagi devorlar topiladi. Qarang: [Skanerdan devorlar yaratish](topic:scan-to-walls).
- **Iz, qalamlar va eskiz zinasi.** {{ui:Trace}} boshqa sathni reja ostida punktir bilan koʻrsatadi, {{ui:Pens}} devorlar, eshiklar va derazalarga bitta koʻrinishda oʻz chiziq qalinligini beradi, {{ui:Sketch stair}} yurish chizigʻini zinaga aylantiradi. Wavefront OBJ mesh ochiladi. Qarang: [Sathni iz qilish, qalamlar va eskizdan zina](topic:trace-pens-stairs-obj).
- **Manzil atrofidagi binolar.** CivilCraft ning Manzilni uchastkaga aylantirish topgan binolar va uchastka takliflar sifatida keladi; qoʻshish uchun belgilang. Qarang: [CivilCraftdan uchastka bilan boshlash](topic:site-from-civilcraft).
- **Panel chizmalari.** {{ui:Build}} › {{ui:Panel drawings}} yogʻoch yoki yengil poʻlat devorlar, pollar va tomlarni karkas bilan oʻraydi va kesish roʻyxatini CSV, ustaxona chizmalarini PDF sifatida saqlaydi. Boshlangʻich qiymatlar, konstruktiv loyiha emas. Qarang: [Panel chizmalari](topic:panel-drawings).
- **Belgilar palitrasi va oʻsimliklar.** {{ui:Build}} › {{ui:Symbol palette}} elektr va santexnika belgilarini nomi boʻyicha topadi; {{ui:Library}} ning {{ui:Plants}} manbasi taxminan 400 ta oʻsimlikni reja belgilari bilan roʻyxatlaydi. Qarang: [Belgilar palitrasi](topic:symbol-palette) va [Oʻsimlik joylashtirish](topic:plant-list).

**Quvurlar, havo kanallari va energiya**

- **Split, VRF va fan coil.** Ichki va tashqi bloklar ularning ulanishlari bilan, va qurilmalar uchun qatorlar namunaviy misollar jadvalidan olinadi, uni oʻzgartirishingiz mumkin. Qarang: [Split, VRF va fan coil](topic:split-vrf-fan-coils).
- **Hisob-kitoblar.** Hisob-kitoblar paneli taʼminot quvurlari va havo kanallari oʻlchamlarini bosim tushishi bilan tekshiradi, kabellarni lotoklar va quvurlar orqali oʻtkazadi va ularning toʻlishini koʻrsatadi, IES yoki EULUMDAT fayllaridan yoritilganlikni hisoblaydi. Standart qiymatlar belgilangan; kodingizning qiymatlarini kiriting. Qarang: [Quvur, havo kanali, kabel va yorugʻlik hisoblari](topic:mep-calculations).
- **PCF fayllar.** Quvur asbobidagi **Export PCF** quvur stress va izometrik dasturlar uchun yoʻllarni yozadi; qayta oʻqilgan PCF fayl oʻz quvurini chizadi. Qarang: [Quvur komponentlari fayllari](topic:piping-pcf).
- **Quyosh PV.** Tomlarga yoki yerga panellar oʻrnating, ularni modeldan soyalang, yillik energiyani baholang, stringlarni tekshiring va bir chiziqli sxema maʼlumotlarini yarating. Boshlangʻich modul va yoʻqotishlar umumiy. Qarang: [Quyosh PV](topic:solar-pv).
- **EnergyPlus fayli.** Check with EnergyPlus paneli modelni oʻz EnergyPlus ingizda ishlatish uchun IDF sifatida yozadi. Brauzerda ishlatish siz oʻzingiz joylagan va manzilini kiritgan build talab qiladi; BimCraft uni oʻzi olib yurmaydi. Qarang: [EnergyPlus bilan isitish va sovutishni tekshirish](topic:check-with-energyplus).

**Rasmlar va fayllar**

- **Render mexanizmini tanlash.** {{ui:Render}} da {{ui:Engine}} tanlovi bor. Ikki oʻrnatilgan mexanizm (Fast va Path tracer) standart boʻlib qoladi. **Open in** sahnani USD yoki glTF fayl sifatida, Unreal loyiha jildini esa .zip sifatida saqlaydi; CadCraft Studio da qoʻshimcha mexanizm qoʻshishi mumkin. Loyihani ochadigan Unreal plagini chiqarilmagan. Qarang: [Rasmni qaysi dastur chizishini tanlash](topic:render-engines).
- **Studio ortga qaytarish.** CadCraft Studio ichida BimCraft har bir tugagan qadamni Studioga aytadi, shunda Studio oxirgi ishlatgan oynangizdagi qadamni bekor qila oladi. Qarang: [Ilovalar orasida ortga qaytarish](topic:undo-across-apps).
- **Faylingizdagi qoʻshimchalar.** IFC qaysi qoʻshimchalar unga yozganini qayd qiladi va uni ochganingizda sizda yoʻq boʻlganlarini taklif qiladi. Qarang: [Faylingizdagi qoʻshimchalar](topic:add-ons-in-your-file).

**Har bir ilovada**

- **AI yordamchingiz.** Oʻz yordamchingiz Studio ulanishi orqali BimCraft ni boshqarishi va modeldagi savollarga javob berishi mumkin, masalan, qaysi xonalar berilgan maydon ostida. Studio oʻzining AI siga ega emas. Qarang: [AI yordamchi bilan modelingiz ustida ishlash](topic:assistants).
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} Wrap, 2 qator yoki 1 qatorni taklif qiladi; Wrap standart boʻlib qoladi.
- **Kiritish qurilmalari.** Trackpad, qalam, 3D sichqoncha, kontroller va MIDI sozlamalari barcha ilovalar uchun umumiy.
- **Muammolar va Live.** Ogohlantirishlar paneli va Live seanslari avvalgidek ishlaydi; yuqoridagi yangi tekshiruvlar Muammolarga qoʻshiladi.
- **Tillar.** 54 ta til, ulardan oʻntasi yangi. Ingliz tilidan boshqalari ona tilida oʻqilmagan mashina qoralamalari; yordam mavzulari asosan inglizcha.

### 0.8.1 da tuzatildi

- **Lenta + Loyiha brauzeri maketi.** Qoʻshish › CAD import qilish, Qoʻshish › Rasm va Boshqarish › Loyiha birliklari "BimCraftda hali qurilmagan" degan xabar bergan edi. Endi Rasm Rasm asbobini ochadi, CAD import qilish {{ui:Build}} › {{ui:From a drawing…}} ni ochadi (DWG, DXF, PDF yoki skaner), Loyiha birliklari esa {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} ni ochadi. Koʻchirish va Tekislash ularning asboblarini ishga tushiradi, Sath {{ui:Add levels…}} ni ochadi, Bosqichlar qayta qurish bosqichlari boʻlimini, Materiallar esa material kutubxonasini ochadi.
- **DWG sinflar boʻlimi.** U notoʻgʻri turda oʻqilgan edi; BimCraftda va DWG ni oʻqiydigan boshqa ilovalarda tuzatildi.
- **Ishlash vaqtida til.** Studio va qadoqlangan nashrlar endi qayta ishga tushirmasdan tilni almashtira oladi. Hamma platformada hali sinovdan oʻtmagan; til oʻzgarmasa, bizga xabar bering.
- **Archicad toʻplam skripti.** `archicad_bundle.py`, alohida yuklab olinadigan fayl, endi Archicad yoʻlini topadi, jildni 20 soniyagacha kuzatadi va toʻplam yonida qayta urinadi.

### Bu versiyada hali yoʻq

- **Xavfsizlik va loyihalash yordamchilari.** Binodagi odamlarda bino kodidan kelgan masofa chegarasi yoʻq (chegarani siz kiritasiz) va haqiqiy rejada qoʻl bilan tekshirilmagan. Akustika, hayot sikli va xavf raqamlari rejalashtirish qiymatlari, kod tekshiruvi emas.
- **Iqlim kelajagi va EnergyPlus.** Iqlim kelajagi oʻrnatilmagan: suv toshqini yurishi uchun stsenariy faylini yuklashingiz mumkin. Brauzerdagi EnergyPlus yurishi bu relisga kirmaydi.
- **Lenta maketi.** Material hajm roʻyxati BimCraftda material miqdorlari roʻyxati yoʻqligi uchun "Hali qurilmagan" boʻlib qoladi, va 54 ta boshqa kulrang lenta asbobining orqasida hali BimCraft asbobi yoʻq.
- **Imzo va platformalar.** Windows oʻrnatuvchilari va macOS .dmg imzosiz, shuning uchun SmartScreen {{ui:More info}} ni, soʻngra {{ui:Run anyway}} ni koʻrsatadi; macOS da oʻng tugma, soʻngra {{ui:Open}} kerak. iPad va iPhone quruvi 0.8.1 uchun qayta qurilmagan.
- **Haqiqiy sahifa sinovlari.** Ba'zi eski BimCraft brauzer sinovlari bizning sinov sahifamizda 0.8.1 dan oldin boʻlgani kabi hali ham muvaffaqiyatsiz tugaydi.

Qolgan hamma narsa [Hali qurilmagan narsalar](topic:not-built-yet) da. Oldingi oʻzgarishlar [0.7 dagi yangiliklar](topic:whats-new-0-7) da.
