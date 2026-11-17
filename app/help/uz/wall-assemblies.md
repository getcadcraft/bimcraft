---
title: Devor qatlamlari va tayanch oʻlchamlari
summary: Oʻz devor turlaringizni aniq yadro bilan, qatlam-qatlam qurib, loyiha materiallari kutubxonasini saqlang va oʻlchamlarni yuzlar va oʻq chiziqlariga qoʻying; ular devor oʻzgarganda ham bogʻlangan holda qoladi.
keywords: lod, rivojlanish darajasi, lod 200, lod 300, umumiy, devor qatlamlari, devor turi, qatlamlar, yadro, yadro yuzi, yadro oʻq chizigʻi, boʻshliq, havo boʻshligʻi, membrana, uy qoplamasi, material kutubxonasi, materiallar, qalinlik, tayanch oʻlchami, oʻlcham, bogʻlangan, joylashuv chizigʻi, fasad qoplamasi, stoyka, gipskarton
from: 4ea8fbf5
---

## Nima qilasiz

Qurmoqchi boʻlgan devorga mos devor turi yarating: fasad qoplamasi, obshivka, 5½ dyuymli stoyka yadrosi va gipskarton, yoki gʻisht, havo boʻshligʻi va yogʻoch karkasli devor. Qaysi qatlamlar yadro ekanini belgilang, shunda oʻlcham yoki joylashuv chizigʻi atrofdagi pardozlar oʻzgarganda ham yadroni ushlab tura oladi. Keyin devorlarni oʻzingiz nazarda tutgan yuzlar va oʻq chiziqlarigacha oʻlchang.

## Devor turini yaratish

1. Binoni boshlang yoki IFC modelini oching va {{ui:Draw}} ni yoqing, soʻng {{ui:Wall}} asbobini tanlang.
2. {{ui:Wall type}} ichidan boshlangʻich turni tanlang va {{ui:Wall assemblies…}} ni oching. Boshlangʻich tur nusxa sifatida ochiladi; yangi turga nom bering.
3. Qatlamlar roʻyxatning yuqorisidagi tashqi tomondan pastdagi ichki tomongacha boradi. Har bir qatlam uchun materialni tanlang, qalinligini kiriting (loyiha birliklarida yoki `12.7 mm` yoki `1/2"` kabi aniq qiymatlarda), funksiyasini tanlang (pardozlash, asos, konstruksiya, izolyatsiya, membrana) va **Yadro** qatlamlariga belgi qoʻying. Yadro bir butun guruh boʻlishi shart.
4. {{ui:Add layer}} qatlam qoʻshadi, {{ui:Add cavity}} shamollatish bilan havo boʻshligʻini qoʻshadi (koʻrsatilmagan, shamollatilmagan, shamollatiladigan), {{ui:Add membrane}} esa nominal qalinligi boʻlmagan qatlam qoʻshadi, masalan uy qoplamasi. Strelka tugmalari qatlamni tashqariga yoki ichkariga suradi.
5. Koʻrinish qatlamlarni masshtab boʻyicha chizadi, yadro tagiga chizilgan, qatorlar kabi raqamlangan, va har bir qatlam, yadro hamda jami qalinlikni oʻlchaydi. {{ui:Save type}} ni bosing.

Yangi tur devor asbobi roʻyxatida va tanlangan devorning **Xususiyatlar** boʻlimida chiqadi. Tahrir qilgan turingizni saqlash shu turdan foydalanayotgan har bir devorni oʻzgartiradi; {{ui:Duplicate type}} alohida nusxa yaratadi va uni faqat tanlagan devorlarga beradi. Har bir saqlash bitta bekor qilish qadami boʻlib, unga koʻchgan devorlar, ular ichidagi eshik va derazalar hamda ularga bogʻliq oʻlchamlar ham kiradi.

Boʻshliq kenglikni qoʻshadi. Membrana hech narsa qoʻshmaydi: u tur ichida qoladi, shunda keyinroq jadval uni topa oladi, va devor yoki yadro qalinligiga hisoblanmaydi. Boʻshliq yoki membrana hech qachon qattiq material sifatida hisoblanmaydi. IFC2X3 formatidagi faylda membrana tur yozuvida saqlanadi, lekin uning fizik material qatlamlaridan chiqarib tashlanadi.

## Turni rivojlanish darajasi (LOD) bilan belgilash

Tur oʻzining qanchalik ishlab chiqilganini koʻrsatishi mumkin. Muharrirda **Rivojlanish darajasi (LOD)** 100, 200, 300, 350, 400 va 500 qat'iy shkalasini yoki **Oʻrnatilmagan** ni taklif qiladi. Umumiy devor ("Devor 230 umumiy") LOD 100 yoki 200 boʻladi; aniq tuzilma oʻz haqiqiy qatlamlari bilan ("230 gʻisht, ikki tomoni suvalgan") LOD 300 yoki undan yuqori. Belgini oʻzingiz qoʻyasiz: BimCraft uni hisoblamaydi, boshlangʻich turlarda esa belgi yoʻq.

Belgi turning nomi yonida koʻrinadi: devor asbobining tur roʻyxatida, devorning Xususiyatlarida va [Turni almashtirish](topic:wall-tools) roʻyxatida. Almashtirishdan keyingi hisobot darajasi koʻtarilganmi yoki tushganmi, shuni aytadi. Uni **Devorlar turi boʻyicha** jadvalida va uning CSV faylida koʻrish uchun Sozlamalar › BimCraft › Devorlar boʻlimida **Har bir devor turining LOD ini devor jadvalida koʻrsatish** ni belgilang: oxirgi ustun, LOD, qoʻshiladi. U tur bilan birga IFC faylida saqlanadi (turning `CadCraft_WallType` xususiyatlar toʻplamida `LOD` xususiyati sifatida va tur yozuvi ichida), shuning uchun fayl qayta ochilganda ham u bor. Belgi hozircha faqat devor turlarida; alohida elementlarda yoki boshqa turdagi elementlarda emas.

## Eskiz bosqichi uchun umumiy devorlar

Devor asbobining Tur roʻyxati ikkita **umumiy** devor bilan boshlanadi: **Umumiy devor 200 mm (tashqi)** va **Umumiy devor 100 mm (ichki)**. Har biri umumiy materialning bitta qatlami boʻlib, LOD 200 belgisiga ega. Devorlar qayerga borishini bilsangiz, lekin nimadan qilinishini hali bilmasangiz, ularni ishlating.

LOD 100 yoki LOD 200 belgili turdagi devor har bir rejada **bitta shtrixlangan lenta** sifatida chiziladi, har qanday batafsillik darajasida: qatlamlar yoʻq, qatlam chiziqlari yoʻq. Bu umumiy devorlar va LOD 100 yoki 200 deb belgilagan oʻz turingiz uchun ham shunday. Devorning oʻzi toʻliq: qalinligi, eshik va derazalari, xonalari va miqdorlari bor.

Ishlab chiqish uchun uning turini almashtiring (Tahrir › Devorlar › **Turni almashtirish**, yoki Xususiyatlarda Tur). Devor qayta chizilmaydi: oʻsha devor yangi turni oladi va hisobot nima koʻchganini aytadi. LOD 300 yoki undan yuqori belgilangan tur oldingidek qatlamlari bilan chiziladi.

Hamma devorni belgisidan qat'i nazar qatlamlari bilan chizish uchun: Sozlamalar › BimCraft › Devorlar boʻlimida **LOD 100 yoki LOD 200 turdagi devorni bitta shtrixlangan lenta sifatida chizish** belgisini olib tashlang.

Boshlangʻich eshik va derazalar ham umumiy turdagilar (oʻlcham va ochilish usuli, mahsulot emas). **Har bir devor turining LOD ini devor jadvalida koʻrsatish** yoqilgan boʻlsa, Eshiklar va Derazalar jadvallari ular uchun LOD 200 ni koʻrsatadi.

## Turga hajmlarni hisoblash maʼlumotlarini berish

Devor turi muharririda **Hajmlarni hisoblash maʼlumotlari** smetachi devor haqida bilishi kerak boʻlgan narsani — turga bir marta — oladi: u qurilgan **birlik** (gʻisht yoki blok: nomi, uzunligi, balandligi va kengligi), **qorishma** (nomi va boʻgʻin qalinligi) va **stavka** hamda uning valyuta kodi (uch harf, masalan USD, EUR yoki ZAR) va u nimaga hisoblanadi: sof devor maydonining kvadrat metri yoki kvadrat futi, devor uzunligining metri yoki futi, yoki har bir devor. Bularning hammasi ixtiyoriy.

Bu fayl ichida tur bilan saqlanadi. Shu turdagi har bir devor buni xabar qiladi: {{ui:Schedules}} › **Devor turlari: hajmlarni hisoblash maʼlumotlari** birlik, qorishma, stavka va oʻlchangan miqdorga koʻpaytirilgan stavkani koʻrsatadi, TakeoffCraft ga berilgan hajmlarni hisoblash esa shu devor turi elementiga bu maʼlumotni olib boradi. Turda oʻzgartiring — har bir devor unga ergashadi.

Gʻisht yoki blok va qorishmani sanash uchun yana uchta maydon bor:

- **Birliklardagi chiqindi, %** birliklar soniga qoʻshiladi. Uni boʻsh qoldirsangiz, loyihaning oʻlchash usuli qiymati ishlatiladi, usulda boʻlmasa hech narsa. 0 kiritsangiz, usul nima desa ham chiqindi boʻlmaydi.
- **Qoʻshimcha qorishma, %** botiqlar yoki qorishma oladigan teshiklar uchun. U qorishma hajmiga qoʻshiladi. Boʻsh qoldirsangiz, hech narsa qoʻshilmaydi.
- **Shu birlikdan qurilgan qatlamlar**: har bir gʻisht yoki blok qatlamini belgilang. Boʻshliqli devorda ikkita boʻladi. Hech biri belgilanmasa, yadro qatlamlari sanaladi.

Stavka buyurtma uchun birlik boʻyicha, buyurtma uchun har 1000 birlik boʻyicha yoki qorishmaning m³ boʻyicha ham boʻlishi mumkin. Birlikning uzunligi va balandligi boʻlsa, **Devor turlari: hajmlarni hisoblash maʼlumotlari** bir qatlamning m² (yoki ft²) dagi birliklar sonini, buyurtma beriladigan birliklarni va qorishma hajmini koʻrsatadi; formulalar [Gʻisht, blok va qorishma](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar) boʻlimida. Turda bitta birlik boʻladi: ikki xil birlik qatlamini (gʻisht tashqi qatlam va blok ichki qatlam) bitta turda hali sanab boʻlmaydi.

## Yadroni qimirlatmasdan ushlash

**Xususiyatlar** da devorning **Joylashuv chizigʻi** ni yadro yuziga yoki yadro oʻq chizigʻiga qoʻying. Keyinroq pardoz qoʻshsangiz yoki qalinlashtirsangiz, bu chiziq joyida qoladi va devor uning atrofida oʻsadi; burchaklarda unga tegadigan devorlar ergashadi, shuning uchun toʻgʻri burchaklar yopiq qoladi.

## Loyiha materiallari

{{ui:Material library…}} loyiha materiallarini roʻyxatlaydi: nomi, kategoriyasi, qatlam boshlanadigan qalinlik, koʻrsatish rangi, kesim shtrixlash namunasi va izohlar. Kutubxona loyiha bilan birga IFC da saqlanadi. Qatlam uchun material tanlash oʻsha qatlamga materialning standart qalinligini beradi, uni keyin oʻzgartirish mumkin; kutubxonani keyinroq tahrirlash chizilgan devorlar oʻlchamini hech qachon oʻzgartirmaydi. Qatlamning material roʻyxatidan {{ui:+ New material…}} bilan ham material yaratishingiz mumkin.

## Tayanch oʻlchamlari

{{ui:Annotate}} › {{ui:Reference dimension}}: gorizontal, vertikal yoki bogʻlangan oʻlchamni tanlang va tayanchni: tashqi yoki ichki pardoz yuzi, tashqi yoki ichki yadro yuzi, devor oʻq chizigʻi yoki yadro oʻq chizigʻi. Birinchi devorni tanlang, xohlasangiz tayanchni almashtiring, ikkinchisini tanlang, soʻng oʻlcham chizigʻi qayerga borishini bosing. Bitta devorda ikki tayanch uning umumiy yoki yadro qalinligini oʻlchaydi. {{ui:Reference dimensions…}} koʻrinishdagi oʻlchamlarni roʻyxatlaydi, shu jumladan devori yoʻqolganlarni, hamda Xususiyatlar, Tayanchlarni qayta bogʻlash va Oʻchirish tugmalari bilan.

### Oʻlchamlarni qoida boʻyicha butun reja uchun

{{ui:Annotate}} › {{ui:Dimension the plan…}} koʻrayotgan qavat rejasining tashqi tomonini oʻlchaydi: har bir yoʻnalishdagi umumiy oʻlcham, har bir tashqi chekka boʻylab oʻlchamlar qatori (devor uchlari, chekkaga tegadigan devorlar, va undagi eshik hamda derazalar), qatorlar bino tashqarisida toza joylashtirilgan. Kerakli narsalarni belgilang, sonini oʻqing, soʻng {{ui:Add the dimensions}}. Bular oddiy tayanch oʻlchamlari, shuning uchun devorlar siljiganda ularga ergashadi va ularning istalgan birini tanlash, siljitish yoki oʻchirish mumkin; butun toʻplam bitta bekor qilish qadami boʻladi va uni yana ishga tushirish hech qanday oʻlchamni ikki marta yaratmaydi.

Bu faqat tashqi tomonni oʻlchaydi: bino ichidagi xonalar, egri devorlar va rejaga nisbatan kvadrat boʻlmagan devorlar qoʻl asboblariga qoldiriladi, setka chiziqlari esa devor emas, shuning uchun setkalar orasidagi oʻlchamlar bu yerda yaratilmaydi. Ulangan yordamchingiz `plan_dimension` bilan xuddi shuni qila oladi.

Oʻlcham devorlarga biriktirilgan, ekrandagi nuqtaga emas: devor siljisa yoki uning turi oʻzgarsa, qiymat unga ergashadi. Devor oʻchirilsa, oʻlcham hal qilinmagan deb xabar beradi va qayta bogʻlamaguningizcha yoki bekor qilmaguningizcha raqam koʻrsatmaydi. Uzunlik maydoni `10',12'` kabi reja koordinatalarini ham qabul qiladi — oʻlcham chizigʻi aniq joyda boʻlishi uchun.

Oʻlchamlar BimCraft chizgan devorlar uchun, reja koʻrinishlarida. Hali qurilmagan: kesim va balandlik koʻrinishlaridagi oʻlchamlar, eshik, deraza va boshqa komponentlarga oʻlchamlar hamda rejada va kesimda chizilgan qatlamlar; qarang: [Hali nima qurilmagan](topic:not-built-yet).

## Shuningdek qarang

[Devorlarni chizish](topic:draw-walls), [Devor, eshik yoki derazani oʻzgartirish](topic:change-a-wall-or-door), [Xususiyatlar](topic:properties-panel).
