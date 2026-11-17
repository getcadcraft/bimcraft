---
title: Karkasni tuzilmaviy tahlil qilish
summary: Siz belgilagan yuklama holatlari va kombinatsiyalar ostida modelning toʻsin, ustun va diagonallarining kuchlari, tayanch reaksiyalari va egilishlari; IFC da saqlanadi. Tahlil vositasi, normaga tekshiruv emas.
keywords: tahlil, birliklar, futlar va dyuymlar, koʻrsatish birligi, tuzilmaviy tahlil, loyihalash tekshiruvlari, foydalanish darajasi, prokat, payvandlangan, AISC 360, EN 1993-1-1, karkas tahlili, analitik model, bikrlik usuli, yuklamalar, yuklama holati, kombinatsiya, doimiy yuklama, vaqtinchalik yuklama, oʻz ogʻirligi, reaksiyalar, egilish momenti, kesuvchi kuch, boʻylama kuch, egilish, egilgan shakl, tayanchlar, sharnirli, qistirilgan, boʻshatish, hisobot, pdf, csv, craftscript, frame3d, toʻsinlar, ustunlar, elementlar
from: b93b58c4
---

O‘ngdagi {{ui:Tahlil}} yorlig‘i ochiq modelning toʻsin, ustun va diagonallaridagi kuchlarni, ustun poydevorlaridagi reaksiyalarni va elementlarning qanchalik egilishini siz bergan yuklamalar uchun topadi.

:::warning
Bu **tahlil vositasi, normaga tekshiruv emas**. Tahlil hech qanday loyihalash normasini qoʻllamaydi: elementlar oʻlchamini belgilamaydi va sigʻimini tekshirmaydi, yuklama koeffitsiyentlarini tanlamaydi. Muhandis tahlil modelini, uning yuklamalari va tayanchlarini tekshiradi va raqamlarning maʼnosini hal qiladi. Undan pastdagi {{ui:Loyihalash tekshiruvlari}} bloki prokat poʻlat I-shakllarni AISC 360 yoki EN 1993-1-1 boʻyicha tekshiradi; muhandis koʻrib chiqquncha u yordamchi vosita: qarang: [Loyihalash tekshiruvlari](topic:frame-analysis#design-checks).
:::

## Ishga tushirish

1. IFC modelini va {{ui:Tahlil}} yorligʻini oching.
2. Koʻrinishda bitta yoki bir nechta toʻsin, ustun yoki diagonal tanlang, {{ui:Holat}} ni, {{ui:Yuklama}} ni va {{ui:Yoʻnalish}} ni tanlang, qiymatni kiriting va {{ui:Yuklama qoʻshish}} tugmasini bosing: element boʻylab tarqalgan yuklama uchun kN/m, nuqtaviy yuklama uchun kN.
3. {{ui:Tahlilni ishga tushirish}} tugmasini bosing.

Jadvalda har bir elementning eng katta boʻylama kuchi, kesuvchi kuchlari, egilish momentlari, buralishi va egilishi koʻrsatiladi; elementning nomini bosib, uni koʻrinishda tanlang. Quyida reaksiyalar. {{ui:Modelda}} egilgan shaklni chizadi yoki har bir element yonida bitta kuchning diagrammasini chizadi. Model oʻzgarsa natijalar eskiradi: qayta ishga tushiring.

Har bir yuklama va sozlash {{ui:Oʻzgarishlar}} roʻyxatida bitta oʻzgarish boʻladi: {{ui:Ortga qaytarish}} uni bekor qiladi, {{ui:IFC sifatida saqlash}} esa ularni faylda saqlaydi (loyihaning `CadCraft_Analysis` xossalar toʻplami), shuning uchun model keyingi safar ochilganda yuklamalari hali ham shu yerda boʻladi.

## Analitik model qanday yasaladi

- Har bir IfcBeam, IfcColumn va IfcMember, agar uning shakli bitta toʻgʻri ekstruziya boʻlsa, boʻlim markazi chizigʻida element boʻladi. Uning boʻlim xossalari profildan olinadi: I, U, L va T shakllari, toʻrtburchaklar va trubalar, doiralar va dumaloq trubalar yoki istalgan yopiq kontur (u holda buralish doimiysi taxminiy boʻladi va hisobotda aytiladi). Boshqa narsa chiqarib tashlanadi va sanaladi.
- Modelda toʻsinlar ustun yuzida toʻxtaydi va pol ostida turadi. Har bir element uchi oʻz chizigʻi boʻylab, agar oʻq yaqin boʻlsa (boʻlim oʻlchami atrofida), u kiradigan elementning oʻqiga yetkaziladi va oʻsha element shu yerda boʻlinadi. Hisobotda necha uchi siljitilganligi aytiladi.
- Hech narsa tushmaydigan **ustun poydevorlari** tayanchlardir: qistirilgan (boshlangʻich) yoki sharnirli (joyida ushlangan va buralishga qarshi, lekin aylanishga erkin).
- **Toʻsin uchlari** {{ui:Ulanishsiz toʻsin uchlari}} qoidasi bilan qattiq yoki sharnirli boʻladi; **diagonallar** (IfcMember) ikki uchida sharnirli. Bitta elementni tanlab, uning uchlariga yoki ustun poydevoriga alohida qoida bering.
- Materiallar nomi boʻyicha: beton (E = 30 GPa), yogʻoch (E = 11 GPa), aks holda poʻlat (E = 200 GPa).

Agar karkas hech narsani egmasdan harakatlansa — mexanizm — tahlil toʻxtaydi va qayerda va qaysi yoʻnalishda ekanini aytadi.

## Holatlar, kombinatsiyalar, belgilar va hisobot

Tahlil **Doimiy** (oʻz ogʻirligi), **Vaqtinchalik** va **Doimiy + vaqtinchalik** bilan boshlanadi; holatlar va kombinatsiyalarni loyihalash normangiz talab qiladigan koeffitsiyentlar bilan qoʻshing. N > 0 choʻzilish; My > 0 elementning mahalliy −z tomonini choʻzilishga qoʻyadi (gravitatsiya ostida egilgan toʻsin My > 0 ga ega). {{ui:Hisobot (PDF)}} va {{ui:Hisobot (CSV)}} taxminlar, kesimlar, holatlar, reaksiyalar va ularning yigʻindilari, element kuchlari, siljishlar va oʻrovchini oʻz ichiga oladi. {{ui:CraftScript sifatida eksport}} karkasni PartCraft’ning Script ish maydoni uchun yozadi, u yerda kutubxona funksiyasi `frame3d` uni oʻqilishi oson kodda yechadi.

Usul toʻgʻridan-toʻgʻri bikrlik usuli boʻlib, *Ikkinchi tartib (P-Delta)* ni belgilamasangiz, chiziqli va birinchi tartibli; darsliklardagi holatlar bilan tekshirilgan.

**Ikkinchi tartib (P-Delta).** Ishga tushirish yonidagi *Ikkinchi tartib (P-Delta)* ni belgilang: har bir kombinatsiya egilgan karkasda ishlaydigan element boʻylama kuchlari bilan qayta yechiladi (har bir element 4 boʻlakka boʻlinadi, shuning uchun uchlari orasidagi egilish ham hisobga olinadi), boʻylama kuchlar barqarorlashguncha. Natija qatorida oʻtishlar soni va siljish qanchaga oshgani koʻrsatiladi; momentlar, egilishlar, loyihalash tekshiruvlari va hisobot shu natijalardan foydalanadi. Karkasning elastik kritik yukidan yuqorida ishga tushirish toʻxtaydi va buni aytadi. U kichik burilishlar bilan elastik, faqat egilish, bikrlikni kamaytirmasdan va nominal yuklamalarsiz (oʻzicha AISC direct analysis usuli emas); plitalar, devorlar va qattiq pollar birinchi tartibda qoladi.

**Plitalarga pol bosimi.** Beton plitalar uchun (tahlil material beton boʻlganda plitani plastina sifatida oʻqiydi), Yuklamalar blokida {{ui:Barcha plitalarga bosim}} bor: kN/m² kiriting, yuqoridagi holatni tanlang va {{ui:Plitalarga qoʻshish}} tugmasini bosing. U topilgan har bir plitaga pastga yoʻnaltirilgan holda tarqaladi va Olib tashlash havolasi bilan roʻyxatlanadi. Bu barcha plitalar uchun bitta bosim, har biri uchun alohida emas, va normaviy yuklama emas: muhandisingiz bergan qiymatni kiriting.

**Tabiiy chastotalar (chekli elementlar).** Natijalar ostidagi {{ui:Chekli elementlar: xos chastotalar}} bloki shu modelning eng past tebranish shakllarini chekli elementlar dvigateli bilan topadi: elementlar uchi boʻshatilgan toʻsinlar, plitalar va devorlar toʻrt tugunli yassi qobiqlar sifatida, qattiq pollar va tayanchlar. Shakllar sonini (3, 6, 10 yoki 20) va plita elementini (qalin yoki yupqa plitalar uchun toʻrt tugunli qobiq yoki faqat yupqa plita uchun element) tanlang va {{ui:Chastotalarni topish}} ni bosing. Jadval har bir shaklning chastotasini Hz da, davrini soniyalarda va X, Y, Z boʻylab samarali modal massasini harakatlanishi mumkin boʻlgan massa ulushi sifatida beradi; {{ui:Modelda koʻrsatish}} har qanday shaklni egilgan shakl kabi chizadi. Massa — material zichligi koʻpaytirilgan hajm: yuklamalar massa qoʻshmaydi, zichligi yoʻq material massasiz. Hisobot (PDF, CSV) jadvalni oʻz ichiga oladi. Bu faqat elastik va kichik harakatli, bu yerda hech qanday norma boʻyicha seysmik yoki shamol yuklamasi yaratilmaydi. Normaviy tekshiruv emas; natijalarni muhandisingiz koʻrib chiqadi.

**Javob spektri, vaqt tarixi va pushover.** Yana uchta blok chastotalar ostida joylashgan va bir xil chekli elementlar modelidan foydalanadi. Ularning hammasi uchun massa — material zichligi va tanlagan holatlaringizning pastga yoʻnalgan yuklamalari, har biri siz kiritgan koeffitsiyent bilan koʻpaytirilgan (masalan, Doimiy 1 bilan va Vaqtinchalik esa massa sifatida sanaydigan ulushda).

{{ui:Javob spektri}} har bir shaklni siz bergan spektrdan oʻqiydi (davr va tezlanish jadvali yoki SDS, SD1 va TL dan ASCE 7 shakli; {{ui:Seysmik blok qiymatlarini ishlatish}} tugmasi ularni Seysmik blokdan nusxalaydi) va shakllarni CQC, SRSS, oʻn foiz qoidasi yoki mutlaq yigʻindi bilan birlashtiradi, soʻng X, Y va Z yoʻnalishlarini birlashtiradi (100 % + 30 % yoki SRSS). U asosiy kesuvchi kuch, qavatlar siljishi, element uchlaridagi kuchlar va ishlatilgan shakllar massaning 90 % dan kamini tashkil etsa ogohlantiradigan shakllar jadvalini beradi. Natijalarni koeffitsiyent bilan yoki siz kiritgan asosiy kesuvchi kuchgacha masshtablashingiz mumkin; blok bu asosiy kesuvchi kuchni oʻzi hisoblamaydi. Natijalarda belgi yoʻq.

{{ui:Vaqt tarixi}} yer tezlanishini modal superpozitsiya bilan (yozuvning nuqtalar orasidagi toʻgʻri chiziqlari uchun aniq) yoki toʻgʻridan-toʻgʻri integrallash bilan (Rayleigh susayishi bilan Newmark oʻrtacha tezlanish) ishga tushiradi. Kirish sintetik sinus yoki impuls (har doim sintetik deb belgilanadi), siz joylashtirgan yozuv yoki ochgan matn fayli boʻlishi mumkin (vaqt va tezlanish, har bir qatorda bitta tezlanish, qadam bilan, yoki DT= sarlavhali PEER uslubidagi fayl; g yoki m/s² da). U tom siljishi va asosiy kesuvchi kuchni vaqtga qarshi, har bir sathning siljishini va element uchlari kuchlarining oʻrovchisini beradi. Juda uzun yozuvli modellar uni faqat seans uchun saqlaydi.

{{ui:Pushover}} tomni kichik qadamlar bilan yon tomonga suradi (birinchi shakl kabi yoki bir tekis), I shaklga ega elementlar uchlarida plastik boʻgʻinlar bilan. Boʻgʻin plastik momentda oqadi, u boʻylama kuch oshgani sari kamayadi (chizilgan shakldan hisoblanadi, burchak yumaloqlari eʼtiborga olinmaydi); qotish ixtiyoriy, P-delta ixtiyoriy, va gravitatsiya kombinatsiyasi avval qoʻllanishi mumkin. U sigʻim egri chizigʻini (asosiy kesuvchi kuch tomning siljishiga qarshi), birinchi boʻgʻinni, har bir boʻgʻinning holatini va plastik burilishini beradi. {{ui:Chiziqsiz vaqt tarixini ishga tushirish}} kichik modellarda Vaqt tarixi blokining yozuvi ostida bir xil boʻgʻinlarni ishga tushiradi. Boʻgʻinlar faqat element uchlarida hosil boʻladi (oraliq ichida boʻgʻin hosil boʻlishi kerak boʻlgan joyga tugun qoʻying); ikki uchida boʻshatilgan element hech qanday boʻgʻinga ega emas; diagonallarning oqishi va buklanishi modellashtirilmagan; plitalar va devorlar elastik qoladi; qabul mezonlari berilmaydi. Normaviy tekshiruv emas; natijalarni muhandisingiz koʻrib chiqadi. Sozlamalar model bilan saqlanadi, hisobotda jadvallar boʻladi.

Hali qurilmagan: buklanish, javob spektri uchun yetishmayotgan massa tuzatishi, yozuvni masshtablash, boʻgʻinlar uchun qabul mezonlari (dinamik javob yuqorida mavjud), plitalarga bosimdan boshqa sirt yuklamalari, element ofsetlari, faqat choʻzuvchi diagonallar, karkasdagi devor va plitalar, payvandlangan shakllarning loyihalash normasi tekshiruvlari va prokat I-shakllardan boshqa boʻlimlar. Qarang: [Hali qurilmagan](topic:not-built-yet).

## Birliklar

Uzunliklar {{ui:Birliklar}} tugmasi bilan tanlagan birlikka amal qiladi, BimCraft’ning qolgan qismi kabi: kiritgan va koʻrgan yuklama joylari ({{ui:Manba}}, {{ui:Qayerga}}, {{ui:Da}}), tugun yuklari va reaksiyalar nuqtalari, {{ui:Seysmik}} dagi qavat balandliklari, shuningdek siljish va siljish-nisbat ustunlari (futlar va dyuymlarda bu kichik uzunliklar oʻnlik dyuymda koʻrsatiladi). Birlikni istalgan vaqtda oʻzgartiring; yorliq qayta chiziladi. Kuchlar kN va kN·m da qoladi; hisobot (PDF, CSV) va CraftScript fayli esa millimetrda qoladi va birlik yozib qoʻyiladi. {{ui:Beton}} blokidagi kesim oʻlchamlari, armatura diametrlari va qoplamalar nomlanganidek millimetrda qoladi.

## Loyihalash tekshiruvlari

{{ui:Loyihalash tekshiruvlari}} bloki (DetailCraft’nikiga oʻxshash) {{ui:Loyihalash normasi}} — ASCE 7 + AISC 360 yoki EN 1990 + EN 1993-1-1 — va {{ui:Poʻlat markasi}} ni qabul qiladi. Har bir yuklama holatiga uning turini (doimiy, vaqtinchalik, shamol …) bering va {{ui:Kombinatsiyalarni yaratish}} sizning holatlaringizdan normaning yuklama kombinatsiyalarini yozadi; tahlil ularni boshqa kombinatsiya kabi ishga tushiradi.

{{ui:Elementlarni tekshirish}} keyin har bir **prokat poʻlat I-shaklini** DetailCraft tekshiruvlari bilan tekshiradi (choʻzilish, buklanish bilan siqilish, yonlama-burilish buklanishi bilan egilish, kesish, boʻylama kuch bilan egilish, egilish; bandlar hisobotda), va uning sigʻimining qancha qismini ishlatishini modelda rang bilan koʻrsatadi. Bu **muhandis koʻrib chiqquncha yordamchi vosita**.

**Qaysi elementlar tekshiriladi.** IFC profili poʻlat I-shakl prokatmi yoki payvandlanganmi aytmaydi, shuning uchun BimCraft uni faqat profil nomi (boʻlmasa elementning tur nomi) AISC W yoki S jadvallaridan yoki EN 10365 IPE, HEA va HEB jadvallaridan oʻlcham boʻlganda (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **va** fayldagi balandlik, kenglik, devor va flanets 1 % ichida shu oʻlchamga mos kelganda prokat deb hisoblaydi. Har bir boshqa I-shakl (plastinka balka, boshqa nom ostidagi oʻlcham, tahrirlangan oʻlcham) payvandlangan deb olinadi va **tekshirilmagan** holda qaytadi; trubalar, burchaklar, kanallar va boshqa kesimlar, ingichka qismlar va buralish ham shunday. Bu elementlarni muhandis bilan tekshiring.
