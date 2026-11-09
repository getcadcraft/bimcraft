---
title: 0.8 va 0.8.1 versiyalaridagi yangiliklar
summary: BimCraft ga binodagi odamlar kuzatuvi, eshitiladigan xona akustikasi, suv toshqini, shamol va zilzila ijrosi, ellik yillik hayot sikli koʻrinishi, IDS boʻyicha tekshiruvlar, teglar va jadvallar, Koʻchirish, Tekislash va Taqsimlash, reja ostidagi rasmlar, skanerdan devorlar, panel chizmalari, quyosh, split va VRF tizimlari, quvur va kabel oʻlchamlari, beton va seysmik tekshiruvlar, istalgan xarita proyeksiyasi, render mexanizmini tanlash va Studio ortga qaytarish qoʻshildi; 0.8.1 Ribbon tartibidagi oʻchirilgan asboblarni tuzatadi.
keywords: yangiliklar, nima yangi, reliz eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.8, 0.8.1, versiya, yangi imkoniyatlar, evakuatsiya, odamlar, navbatlar, akustika, reverberatsiya, impuls javobi, suv toshqini, shamol, zilzila, xavf, hayot sikli, xizmat muddati, ids, teglar, jadvallar, koʻchirish, tekislash, taqsimlash, rasm, fon, skanerdan devorlar, civilcraft sayti, panel chizmalari, karkas, quyosh, pv, split, vrf, fankoil, quvur oʻlchami, kabel tirsagi, yoritilganlik, beton, seysmik, skanerni solishtirish, epsg, proyeksiya, hujjatlar, shablon, uglerod, narx, energyplus, render mexanizmi, ochish, usd, glb, unreal, ortga qaytarish, qoʻshimchalar, pcf, belgilar, oʻsimliklar, iz olish, qalamlar, ribbon, loyiha brauzeri, maket
from: 87b03056
---

Bu BimCraft 0.8 (2026-11-01) va 0.8.1 (2026-11-02) versiyalarida 0.7 ga nisbatan nimalar oʻzgarganini koʻrsatadi. BimCraft endi bino haqidagi savollarga javob bera oladi va uni odamlar, tovush, suv, shamol va zilzilalar bilan sinab koʻra oladi, shuningdek koʻproq asboblar bilan chizish mumkin; 0.8.1 xatolarni tuzatish relizi.

## Yangi

### Binoni sinab koʻring

- **Binodagi odamlar.** Chap paneldagi {{ui:People in the building}} boʻlimi evakuatsiya yoki odatdagi kunning kelishlarini xonalaringiz, eshiklaringiz va zinalaringiz orqali oʻtkazadi. Bino torayadigan joylarda navbatlarni, har bir xonadan chiqishgacha boʻlgan eng uzoq yoʻlni va oxirgi odamga ketgan vaqtni koʻrasiz. Nima oʻzgarishini koʻrish uchun eshikda {{ui:Shut}} ni belgilang, piyodalarni tomosha qilish uchun esa {{ui:Show the people in the 3D view}} ni belgilang. Natijalar Muammolar paneliga yuboriladi. Bu loyihalash qarorlari uchun taxminiy odamlar oqimi modeli, yongʻin xavfsizligi sertifikati emas. Qarang [Odamlarni bino orqali oʻtkazish](topic:people-in-the-building).
- **Xona akustikasi va uni eshitish.** {{ui:Room acoustics}} boʻlimi har bir xonaning reverberatsiya vaqtini oktava poloslari boʻyicha beradi (Sabine va Eyring boʻyicha), xonaning oʻlchami va tanlagan pardozlaridan kelib chiqib. Oʻz maqsadingizni kiritsangiz, unga erishish uchun qancha yutilish kerakligini aytadi. {{ui:Play it in this room}} xona uchun hisoblangan impuls javobi orqali ovoz, chapak, chertilgan notalar yoki oʻz tovush faylingizni ijro etadi. Yutilish koʻrsatkichlari almashtirish uchun odatdagi nashr etilgan qiymatlardir. Qarang [Xona akustikasi](topic:room-acoustics).
- **Suv toshqini, shamol va zilzila ijrosi.** {{ui:Hazard playback}} xonalar orasida koʻtarilayotgan suvni, har bir qavatdagi shamol bosimini va qavatlarni silkitayotgan zilzilani vaqt surgʻichi bilan reja yoki fasad koʻrinishida koʻrsatadi. Oddiy modellar va ularning taxminlari panelda koʻrsatiladi; bu kod tekshiruvi emas. Qarang [Suv toshqini, shamol yoki zilzilani ijro etish](topic:hazard-playback).
- **Ellik yil ichida nima eskiradi.** {{ui:Life-cycle view}} derazalar, eshiklar, pardozlar va tomni, ularning har biri uchun xizmat muddatini, almashtirish yillarini va birlik narxini kiritsangiz, yil boʻyicha narxni hamda uning hozirgi qiymatini roʻyxatlaydi. {{ui:Save the schedule (CSV)}} uni fayl qilib yozadi. Xizmat muddatlari rejalashtirish uchun berilgan raqamlar. Qarang [Ellik yil ichida nima eskirishini koʻring](topic:life-cycle-view).
- **Beton va seysmik tekshiruvlar.** {{ui:Analysis}} yorligʻidagi {{ui:Concrete members}} va {{ui:Seismic loads}} bloklari beton toʻsin va ustunlarni ACI 318-19 boʻyicha tekshiradi, qattiq qavatlar uchun ASCE 7-22 boʻyicha ekvivalent yon kuchlarni hisoblaydi hamda qavat siljishini koʻrsatadi. Muhandis tekshirishi uchun. Qarang [Beton elementlarni tekshirish va seysmik yuklarni hisoblash](topic:concrete-and-seismic).

### Tekshirish va hisobot

- **IDS boʻyicha tekshirish.** Mijoz bergan `.ids` faylni yuklang va IFC ni topshirishdan oldin IDS talabiga javob bermaydigan har bir elementni Muammolar panelida koʻring. {{ui:Model checks}} ostidagi {{ui:Check against an IDS}} ni oching. Qarang [Modelni mijozning IDS boʻyicha tekshirish](topic:check-against-ids).
- **Teglar va jadvallar.** Oʻz teglaringizni aniqlang, ularni koʻplab elementlarga bir vaqtda qoʻying va ustunlari, filtrlari hamda guruhlari ularni oʻqiydigan jadvallar tuzing; teglar IFC ichida saqlanadi. Qarang [Teglar va jadvallar](topic:tags-and-schedules).
- **Modeldan hujjatlar.** {{ui:Documents from the model}} ochiq IFC dan spetsifikatsiya shablonini toʻldiradi va uni PDF, Word hujjati yoki Markdown sifatida saqlaydi. Qarang [Modeldan hujjatlar](topic:documents-from-the-model).
- **Skanerni modelga solishtirish.** Nuqta buluti ochiq boʻlganda, {{ui:Compare}} har bir elementni qurilgan, qisman qurilgan, yoʻq yoki yetib borilmagan deb baholaydi va qurilgan foizini koʻrsatadi. Qarang [Skanerni modelga solishtirish](topic:compare-scan-with-model).
- **Uglerod va narx.** Uglerod paneli oʻzgartirishingiz mumkin boʻlgan koeffitsiyentlar jadvali asosida oʻrnatilgan uglerodni jamlaydi, narx paneli esa narxlarni 4D jadval boʻyicha taqsimlaydi. BimCraft bilan keladigan koeffitsiyentlar umumiy boʻlib, tekshirilmagan deb belgilangan. Qarang [Oʻrnatilgan uglerod va narx](topic:embodied-carbon-and-5d-cost).
- **Istalgan xarita proyeksiyasi.** {{ui:Measure}} › {{ui:Coordinate system…}} EPSG raqamini, UTM zonasini, nomini yoki oʻz proyeksiya taʼrifini qabul qiladi. Qarang [Istalgan proyeksiya bilan georeferens](topic:georeference-any-projection).

### Chizish va tahrirlash

- **Koʻchirish, tekislash va taqsimlash.** {{ui:Build}} ostida; {{key:Shift+M}} Koʻchirishni boshlaydi (oddiy {{key:M}} hamon Oʻlchash). Koʻchirish harakat davomida {{key:C}} bilan nusxa oladi, har bir qadam bitta ortga qaytarish boʻladi va Live TeamWork seansida uzatiladi. Qarang [Koʻchirish, nusxalash, tekislash va taqsimlash](topic:move-align-distribute).
- **Reja ostidagi rasmlar.** {{ui:Build}} › {{ui:Picture}} qavat rejasi ostiga yoki vertikal tekislikka PNG, JPEG yoki WebP joylashtiradi. Masshtabni ikki nuqta bilan belgilang, keyin uni koʻchiring, buring, xiralashtiring va qulflang. MarkupCraft da nusxalangan maydon varaq masshtabida joylashadi. Qarang [Reja ostiga rasm qoʻyish](topic:pictures-as-backgrounds).
- **Skanerdan devorlar.** Skaner ochiq boʻlganda devorlar, eshiklar va xonalar takliflar sifatida keladi; ularni bittadan qabul qilasiz yoki rad etasiz, bitta ortga qaytarish qadamida. Faqat ikki perpendikulyar yoʻnalishdagi devorlar topiladi. Qarang [Skanerni devorlarga aylantirish](topic:scan-to-walls).
- **Iz, qalamlar va zina eskizi.** {{ui:Trace}} boshqa qavatni reja ostida punktir chiziq bilan koʻrsatadi, {{ui:Pens}} devorlar, eshiklar va derazalarga bitta koʻrinishda alohida chiziq qalinligi beradi, {{ui:Sketch stair}} esa yurish chizigʻini zinaga aylantiradi. Wavefront OBJ toʻri ochiladi. Qarang [Qavat izi, qalamlar va eskizdan zina](topic:trace-pens-stairs-obj).
- **Manzil atrofidagi binolar.** CivilCraft ning Manzildan saytga funksiyasi topgan binolar va uchastka takliflar sifatida keladi; qoʻshish uchun kerakliklarini belgilaysiz. Qarang [CivilCraft saytidan boshlash](topic:site-from-civilcraft).
- **Panel chizmalari.** {{ui:Build}} › {{ui:Panel drawings}} yogʻoch yoki yengil poʻlat karkasli devorlar, qavatlar va tomlarni chizadi hamda kesish roʻyxatini CSV, ustaxona chizmalarini PDF sifatida saqlaydi. Boshlangʻich qiymatlar, konstruktiv loyiha emas. Qarang [Panel chizmalari](topic:panel-drawings).
- **Belgilar palitrasi va oʻsimliklar.** {{ui:Build}} › {{ui:Symbol palette}} elektr va santexnika belgilarini nomi boʻyicha topadi; {{ui:Library}} ning {{ui:Plants}} manbai reja belgilari bilan taxminan 400 oʻsimlik roʻyxatini beradi. Qarang [Belgilar palitrasi](topic:symbol-palette) va [Oʻsimlikni joylashtirish](topic:plant-list).

### Quvurlar, havo kanallari va energiya

- **Split, VRF va fankoillar.** Ichki va tashqi bloklar ularning ulanishlari bilan, suyuqlik liniyalari esa oʻzgartirishingiz mumkin boʻlgan odatiy namunaviy qiymatlar jadvali asosida oʻlchangan. Qarang [Split, VRF va fankoillar](topic:split-vrf-fan-coils).
- **Hisob-kitoblar.** Hisob-kitoblar paneli bosim pasayishi bilan ta'minot quvuri va havo kanali oʻlchamlarini tekshiradi, kabellarni lotoklar va quvurlar orqali oʻtkazadi hamda ularning toʻlishini koʻrsatadi, IES yoki EULUMDAT fayllari boʻyicha yoritilganlikni hisoblaydi. Standart qiymatlar belgilangan; kodingizdagi qiymatlarni kiriting. Qarang [Quvur, havo kanali, kabel va yorugʻlik hisob-kitoblari](topic:mep-calculations).
- **PCF fayllar.** Quvur asbobidagi **PCF eksport qilish** quvur kuchlanishi va izometrik dasturlar uchun yoʻllarni yozadi, oʻqilgan PCF fayl esa quvurni chizadi. Qarang [Quvur komponentlari fayllari](topic:piping-pcf).
- **Quyosh PV.** Tomlarga yoki yerga massivlar oʻrnating, ularni modeldan soyalang, yillik energiyani baholang, stringlarni tekshiring va bir chiziqli sxema maʼlumotini yarating. Standart modul va yoʻqotishlar umumiy. Qarang [Quyosh PV](topic:solar-pv).
- **EnergyPlus fayli.** EnergyPlus bilan tekshirish paneli modelni oʻz EnergyPlus dasturingizda ishga tushirish uchun IDF sifatida yozadi. Brauzerda ishga tushirish uchun oʻzingiz joylashtirgan va manzilini kiritadigan versiya kerak; BimCraft uni olib kelmaydi. Qarang [EnergyPlus bilan isitish va sovutishni tekshirish](topic:check-with-energyplus).

### Rasmlar va fayllar

- **Render mexanizmini tanlash.** {{ui:Render}} da {{ui:Engine}} tanlovi bor. Bizning ikkita oʻrnatilgan mexanizm (Fast va Path tracer) standart boʻlib qoladi. **Boshqa dasturda ochish** sahnani USD yoki glTF fayl sifatida saqlaydi, Unreal loyiha papkasini esa .zip sifatida; CadCraft Studio da qoʻshimcha mexanizmni qoʻshimcha dastur qoʻshishi mumkin. Loyihani ochadigan Unreal plagini hali chiqarilmagan. Qarang [Rasmni qaysi dastur chizishini tanlash](topic:render-engines).
- **Studio ortga qaytarish.** CadCraft Studio ichida BimCraft har bir tugallangan qadamni Studio ga bildiradi, shunda Studio siz oxirgi ishlatgan oynadagi oxirgi qadamni ortga qaytara oladi. Qarang [Ilovalar boʻylab ortga qaytarish](topic:undo-across-apps).
- **Faylingizdagi qoʻshimchalar.** IFC qaysi qoʻshimchalar unga yozganini qayd etadi va uni ochganingizda sizda yoʻq qoʻshimchalarni taklif qiladi. Qarang [Faylingizdagi qoʻshimchalar](topic:add-ons-in-your-file).

### Har bir ilovada

- **AI ni ulang.** Oʻz yordamchingiz Studio ning ulanishi orqali BimCraft ni boshqarishi va model haqidagi savollarga, masalan, berilgan maydon ostida qaysi xonalar borligiga, javob berishi mumkin. Studio ning oʻz AI si yoʻq. Qarang [AI yordamchisi modelingiz bilan ishlashi](topic:assistants).
- **Asboblar paneli qatorlari.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} Oʻrash, 2 qator yoki 1 qator variantlarini taklif qiladi; Oʻrash standart boʻlib qoladi.
- **Kiritish qurilmalari.** Trackpad, qalam, 3D sichqoncha, kontroller va MIDI sozlamalari barcha ilovalar uchun umumiy.
- **Muammolar va Live.** Ogohlantirishlar paneli va Live seanslari avvalgidek ishlaydi, yuqoridagi yangi tekshiruvlar esa Muammolar roʻyxatiga qoʻshiladi.
- **Tillar.** 54 ta til, ulardan oʻntasi yangi. Ingliz tilidan boshqalari ona tilida soʻzlovchi tomonidan hali oʻqilmagan mashina qoralamalari; yordam mavzulari asosan ingliz tilida.

## 0.8.1 da tuzatilgan

- **Ribbon va Loyiha brauzeri maketi.** Qoʻshish › CAD import, Qoʻshish › Rasm va Boshqarish › Loyiha birliklari "BimCraft da hali qurilmagan" deb yozardi. Endi Rasm Rasm asbobini ochadi, CAD import {{ui:Build}} › {{ui:From a drawing…}} ni ochadi (DWG, DXF, PDF yoki skaner), Loyiha birliklari esa {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} ni ochadi. Koʻchirish va Tekislash Koʻchirish va Tekislash asboblarini ishga tushiradi, Sath {{ui:Add levels…}} ni ochadi, Bosqichlar boʻlimi Renovatsiya bosqichlarini ochadi va Materiallar material kutubxonasini ochadi.
- **DWG sinflari boʻlimi.** U notoʻgʻri tur sifatida oʻqilgan edi; BimCraft da va DWG ni oʻqiydigan boshqa ilovalarda tuzatildi.
- **Ish vaqtida til.** Studio va qadoqlangan nashrlar endi qayta ishga tushirmasdan tilni almashtira oladi. Bu hali har bir platformada sinovdan oʻtmagan; til oʻzgarmasa, bizga xabar bering.
- **Archicad toʻplam skripti.** `archicad_bundle.py`, alohida yuklab olinadigan fayl, endi Archicad yoʻlini topadi, papkani 20 soniyagacha kuzatadi va toʻplam yonida qayta urinadi.

## Bu versiyada hali yoʻq

- **Xavfsizlik va loyihalash yordamchilari.** Binodagi odamlar kodeksdagi masofa chegarasiga ega emas (chegarani siz kiritasiz) va haqiqiy rejada qoʻlda tekshirilmagan. Akustika, hayot sikli va xavf raqamlari rejalashtirish qiymatlari, kod tekshiruvi emas.
- **Iqlim kelajagi va EnergyPlus.** Oʻrnatilgan iqlim kelajagi yoʻq: suv toshqini hisobi uchun stsenariy faylini yuklashingiz mumkin. Brauzerda EnergyPlus ishga tushirish bu relizning qismi emas.
- **Ribbon tartibi.** Material hajmlari hisobi "Qurilmagan" boʻlib qoladi, chunki BimCraft da material miqdorlari roʻyxati yoʻq, va yana 54 ta oʻchirilgan ribbon asbobi ortida hali BimCraft asbobi yoʻq.
- **Imzolash va platformalar.** Windows oʻrnatuvchilari va macOS .dmg imzolanmagan, shuning uchun SmartScreen {{ui:More info}} ni, soʻng {{ui:Run anyway}} ni koʻrsatadi, macOS da esa oʻng tugma bilan bosib {{ui:Open}} ni tanlash kerak. iPad va iPhone versiyasi 0.8.1 uchun qayta qurilmagan.
- **Haqiqiy sahifa testlari.** Baʼzi eski BimCraft brauzer testlari bizning test sahifamizda hali ham muvaffaqiyatsiz tugaydi, 0.8.1 dan oldin boʻlgani kabi.

Qolgan hamma narsa: [Hali qurilmagan narsalar](topic:not-built-yet). Oldingi oʻzgarishlar: [0.7 dagi yangiliklar](topic:whats-new-0-7).
