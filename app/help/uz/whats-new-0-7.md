---
title: 0.7 da yangi nima bor (oldingi)
summary: BimCraft devorlarni bir necha sathda, bu sathni nusxalashni, PDF va skanerlardan devorlarni, oʻz devor qatlamlaringizni, boyroq oilalarni, portli MEP jihozlarini, toʻqnashuv toʻplamlarini, teshiklar va quvur spullarini, aktiv hujjatlarini, COBie va sensor koʻrsatkichlarini, osmon, quyosh, setkada kunduzgi yorugʻlik va isitish hamda sovutish yuklamalarini, skanerlarni registratsiya qilishni, jonli koʻrinish va grafik kartada yoʻl kuzatishni, STEP va USD ni, kutubxona variantlarini va AI yordamchilari uchun koʻp narsani qoʻshadi.
keywords: 0.7 da yangi nima bor, oldingi relis, relis eslatmalari, oʻzgarishlar jurnali, oʻzgarishlar, 0.7, versiya, yangi imkoniyatlar, sathlar boʻylab devorlar, bu sathni nusxalash, pdf, skaner, izlash, rejalardan devorlar, devor qatlamlari, yadro, membrana, tayanch oʻlchamlari, material kutubxonasi, koʻrsatish birliklari, koʻrinish uslubi, karkas, joist, oilalar, parametrlar, reja belgisi, hotspotlar, takrorlash, batafsillik darajasi, ichki oilalar, csv oʻlchamlari, har bir element, jihozlar, portlar, ulanishlar, masofalar, teshiklar, spullar, spul varaqlari, dala payvandi, havo kanali kesish roʻyxati, hujjatlar, cobie, sensorlar, mqtt, jonli oqim, vertikal osmon komponenti, quyosh issiqligi, kunduzgi yorugʻlik setkasi, isitish, sovutish, yuklamalar, u-qiymati, skanerlarni registratsiya qilish, icp, e57, jonli koʻrinish, yoʻl kuzatish, webgpu, shovqinsizlantirish, fizik osmon, yorugʻlik aralashtirish, render navbati, sizning kompyuteringiz, step, usd, loyiha toʻplami, massa ishlab chiqish, variantlar, yordamchilar, add-on api, zavod, elektr, loyihani tekshirish
from: ef226539
---

Bu BimCraft 0.7 da oldingi 0.6 bilan solishtirganda nima oʻzgarganligi. Roʻyxat soha boʻyicha guruhlangan, eng muhimi birinchi.

## Yangi

### Bino chizish

- **Bir necha sathda devorlar.** Devor asbobining balandlik roʻyxati **Yuqoriga** — har qanday yuqoridagi sathgacha — taklif qiladi, xuddi Xususiyatlar tanlangan devor uchun shunday qiladi. Oraliq sathlarning rejalarida devor yorugʻroq koʻrinadi, u yerdagi xonalar unga yopishadi va eshik hamda derazalar oʻsha rejalardan unga qoʻyilishi mumkin; Xususiyatlardagi **Orqali oʻtadi** oʻtadigan sathlarni aytadi. Qarang [Devor, eshik yoki derazani oʻzgartirish](topic:change-a-wall-or-door#change-a-wall).
- **Bu sathni nusxalash.** Sathlar panelidagi {{ui:Copy this level…}} sathning devorlarini ularning eshik va derazalari bilan, pollari va shiftlari bilan boshqa sathga yoki yuqoriga yangi sathga qayta chizadi, bitta bekor qilish qadamida; xonalar oʻzi paydo boʻladi. Qarang [Devorlarni chizish](topic:draw-walls#levels).
- **PDF yoki skanerdan devorlar.** {{ui:Build}} › {{ui:From a drawing…}} endi PDF (chiziqli ish yoki ichidagi skaner) yoki skaner qilingan reja (PNG, JPEG, TIFF, koʻp sahifa) ni qabul qiladi: har bir sahifa sath uchun devorlar, eshiklar, derazalar va xonalarga aylanadi, sahifa uning rejasi ostida saqlanadi. Izlash tarmoq yoki oʻqitilgan modelni ishlatmaydi va natija chiziqlar bergan narsa: har bir sathni sahifasi bilan tekshiring. Qarang [Rejalar toʻplamidan devorlar](topic:walls-from-plans).
- **Oʻz devor qatlamlaringiz.** {{ui:Wall assemblies…}} devor turini qatlam-qatlam, yadro, havo boʻshliqlari va membranalar bilan, oʻlchamli koʻrinish bilan quradi; {{ui:Material library…}} loyiha materiallarini IFC da saqlaydi; {{ui:Annotate}} › {{ui:Reference dimension}} yuzlar va yadro chiziqlarigacha oʻlchaydi va devorlar oʻzgarganda ularga ergashadi. Hamjamiyat hissadori Doc (drsurfbum) dan. Qarang [Devor qatlamlari va tayanch oʻlchamlari](topic:wall-assemblies).
- **Koʻrsatish birliklari va koʻrinish boshqaruvi.** Asboblar panelidagi {{ui:Units}} uzunliklarni futda va dyuymda, dyuymda, oʻnlik futda, millimetrda, santimetrda yoki metrda koʻrsatadi: oʻlchamlar, jadvallar, koordinatalar, oʻlchovlar va kesimlarda. {{ui:Plan}}, {{ui:Split}} va {{ui:3D}} asboblar panelida turadi, boʻlinmani sudrash mumkin (yoki klaviaturadan siljitish), {{ui:Shaded}}, {{ui:Edges}} va {{ui:Wireframe}} koʻrinish kubi yonida turadi va tom qiyaligi, peshtoq hamda soffit tanlangan tomni darhol oʻzgartiradi. Hamjamiyat hissadori Joel (yisraelk) dan. Qarang [Devorlarni chizish](topic:draw-walls#levels).
- **Qavat taxtalari (joist) oraliq boʻyicha.** {{ui:Framing}} muhandislik joistlarini (dastlabki) ham, arralangan yogʻochni ham chiza oladi, eng kichik roʻyxatdagi seriya va chuqurlikni tanlab, oraliqqa yetadiganini, markaz boʻyicha 16" yoki 24" ni, ikki yoʻnalishda; ular IFC va kesish roʻyxatiga kiradi. Ishlab chiqaruvchi nashr qilgan jadvaldan taklif, muhandislik emas. Ham Joeldan. Qarang [Devorlar, qavatlar va tomlarni karkas bilan](topic:framing).
- **Koʻproq elektr qurilmalari.** {{ui:Electrical}} maʼlumot, telefon va audio-video rozetkalarni, tanlash kalitini, taymerni, termostatni, tutun va issiqlik datchiklarini, tortish stansiyasi va sirenani, ventilyatorni, energiya hisoblagichini va pastki shchitni qoʻshadi; har biri oʻz IFC sinfida. Qarang [Elektr reja](topic:electrical-plan).

### Oilalar

- **Oilalar koʻproq ishlaydi.** Parametrlar butun sonlar, matn, material, qalam yoki toʻldirish boʻlishi mumkin; oila oʻz reja belgisini chizishi, qattiq jismni takrorlashi, qismlarni kattaroq batafsillik darajalari uchun belgilashi, boshqa oilalarni ushlab turishi (stoldagi oyoq kabi) va rejada joylashtirilgan elementda ham sudrab siljitiladigan hotspotlarga ega boʻlishi mumkin. Oʻlchamlar CSV jadvalidan keladi, va **Har bir element** belgilangan parametrlar bir xil oʻlchamdagi ikki eshikni farqli qilishi mumkin. Qarang [Oilani tahrirlash](topic:family-editor#plan-symbol) va [Oilalar va ularning oʻlchamlari](topic:families#sizes-from-a-table).

### Quvurlar, havo kanallari va jihozlar

- **Portli jihozlar.** {{ui:Build}} › {{ui:Equipment}} umumiy havo ishlov beruvchi, inline ventilyator, nasos, qozon, suv isitgich, terminal blok, diffuzor, panjara yoki bakni joylashtiradi, siz kiritgan qiymatlar boʻyicha oʻlchangan, quvur va havo kanali ulanishlari portlar sifatida. Har biri IFC sinfi sifatida IFC portlari bilan saqlanadi. Qarang [MEP jihozlari portlari bilan](topic:mep-equipment).
- **Ulangan yoʻllar.** Port boshlagan quvur yoki havo kanali oʻz oʻlchamini va tizimini oladi va unga qotib qoladi: nasosni siljiting, uning quvuri ergashadi. {{ui:Check connections}} ochiq portlar, bogʻlanmagan uchlar, oʻlcham va tizim nomuvofiqligini hamda hech narsa taʼminlamagan yoʻllarni roʻyxatlaydi. Qarang [Quvurlar va havo kanallarini jihozlarga ulash](topic:mep-connections).
- **Quvurlar va havo kanallari konstruksiyaga qarshi.** {{ui:Clash check}} tayyor toʻplamlarga ega va {{ui:Pipes and ducts × structure}} bir bosishda; {{ui:Check clearances}} har bir yoʻlning izolyatsiyasi va siz kiritgan boʻshliqni ishlatadi; {{ui:Openings needed}} yoʻllar devor va plitalardan oʻtadigan joylarni CSV va BCF muammolari sifatida roʻyxatlaydi. Hech narsa kesilmaydi. Qarang [Quvurlar va havo kanallarini konstruksiyaga qarshi tekshirish](topic:mep-against-structure).
- **Poʻlat quvur spullari.** Poʻlat yoʻl eng uzun uzunlikda va siz qoʻygan {{ui:Field weld}} larda raqamlangan spullarga kesiladi; {{ui:Spool sheets (PDF)}} har bir spul uchun izometrik koʻrinishi, kesish uzunliklari, fitinglar, payvandlar va materiallar roʻyxati bilan sahifa beradi, {{ui:Duct cut list}} esa toʻgʻri havo kanali boʻlaklarini roʻyxatlaydi. Qarang [Poʻlat quvur spullari va spul varaqlari](topic:pipe-spools).

Bular chizish va muvofiqlashtirish yordamchilari, muhandis tomonidan oʻlchangan: oqimlar, bosimlar yoki balanslash yoʻq.

## Boshqarish

### Binoni boshqarish

- **Har bir aktiv uchun hujjatlar.** {{ui:Assets}} yorligʻi qoʻllanmalar, kafolatlar, suratlar va chizmalarni IFC yonidagi fayl nomi yoki veb-manzil orqali aktivga bogʻlaydi; faqat havola IFC ga kiradi. Qarang [Hujjatlar](topic:assets-and-maintenance#documents).
- **COBie jadvali.** {{ui:Save as COBie (.xlsx)}} COBie 2.4 topshirish ish kitobini yozadi, va oʻqilgan COBie ish kitobi bitta {{ui:Apply}} dan oldin har bir oʻzgarishni roʻyxatlaydi. U hali COBie tekshiruvchisidan oʻtmagan. Qarang [COBie jadvali](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensor koʻrsatkichlari va jonli oqimlar.** Koʻrsatkichlar CSV ini oching, yoki brauzerdan toʻgʻridan-toʻgʻri oʻzingizning MQTT brokeringizga yoki bino tizimingiz javob beradigan manzilga {{ui:Connect}} qiling: har bir aktiv oxirgi koʻrsatkichini va grafigini koʻrsatadi, modelda rangli boʻladi va IFC da saqlangan chegaralardan tashqarida boʻlsa belgilanadi. Koʻrsatkichlar tabda qoladi; parollar hech qachon saqlanmaydi. Qarang [Sensor koʻrsatkichlari](topic:assets-and-maintenance#sensor-readings) va [Jonli koʻrsatkichlar](topic:assets-and-maintenance#live-readings).

### Kunduzgi yorugʻlik va energiya

- **Har bir deraza ostida osmon va quyosh.** {{ui:Daylight}} yorligʻi har bir derazaga uning vertikal osmon komponentini va toʻsiq burchagini beradi, {{ui:Sun through the windows on a date}} bilan sana boʻyicha quyoshni kuzatadi va har bir xona boʻylab {{ui:Daylight factor on a grid}} ni hisoblaydi, uning rejasida chizilgan. Qarang [Har bir derazaning vertikal osmon komponenti](topic:daylight-factor#vertical-sky-component-of-each-window).
- **Isitish va sovutish yuklamalari.** {{ui:Heating and cooling loads}} har bir xonaning issiqlik yoʻqotishini, yil davomida isitishini daraja-kunlardan va sovutish choʻqqisini hisoblaydi, modelda uni chegaralovchi narsalardan va har bir elementning U-qiymatidan; u yerda kiritilgan U-qiymat IFC ga yoziladi. Qarang [Isitish va sovutish yuklamalarini baholash](topic:heating-and-cooling-loads).

Ikkalasi ham nashr qilingan usullar boʻyicha loyihalash yordamchilari, muvofiqlik hisoblari emas, va har bir panel buni aytadi.

### Skanerlar

- **Bir nechta skanerni registratsiya qilish.** {{ui:Register scans…}} (start panelida yoki {{ui:Show}} da) skanerlarni tanlangan nuqta juftliklari yoki kiritilgan nishonlar bilan bitta ramkaga joylashtiradi, ICP bilan nuqtadan nuqtagacha, soʻng nuqtadan tekislikkacha aniqlaydi, registratsiyani kichik loyiha fayli sifatida saqlaydi va registratsiyalangan bulutni bitta LAS yoki E57 fayl sifatida yozadi. Qarang [Bir nechta skanerni bittaga registratsiya qilish](topic:register-scans).

### Rasmlar va jonli koʻrinish

- **Jonli koʻrinish.** Asboblar panelidagi {{ui:Live view}} modelni 3D koʻrinish yonida real vaqt koʻrinishida koʻrsatadi, uni va har bir oʻzgarishni kuzatib boradi, Walk, kun vaqti va oy bilan; {{ui:Live view in a new window}} uni ikkinchi ekranga qoʻyadi. Qarang [Jonli koʻrinish](topic:live-view).
- **Grafik kartada yoʻl kuzatish.** WebGPU bilan {{ui:Render}} › {{ui:High quality (path traced)}} CadCraft ning oʻz yoʻl kuzatuvchisini grafik kartada ishlatadi, toʻxtatish va {{ui:Resume}} mumkin, oxirida shovqinsizlantiriladi; WebGPU boʻlmasa, u avvalgidek WebGL yoʻl kuzatuvchisini ishlatadi. Qarang [Yuqori sifat](topic:render#high-quality).
- **Render dialogida koʻproq** (grafik kartada, shuning uchun WebGPU kerak): fizik osmon va osmon rasmlari, IES yorugʻlik profillari, diafragma, chuqurlik, ikki nuqtali perspektiva, oq balans va 360° panoramalar bilan kamera, tayyor rasm uchun rang berish, yorugʻlik aralashtirish va renderdan keyingi render elementlari, tuman, tutun va kaustika, 16-bit PNG, EXR yoki render fayl sifatida saqlash, va render navbati. Qarang [Grafik kartadagi osmon va yorugʻlik profillari](topic:render#skies-and-light-profiles-on-the-graphics-card) va [Render navbati](topic:render#the-render-queue).
- **Sizning kompyuteringiz.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Rendering}} › {{ui:Your machine}} ushbu brauzer ilovaga ruxsat bergan grafikani, protsessor yadrolarini va xotirani koʻrsatadi, hamda render qaysi darajadan boshlanishini. Qarang [Sizning mashinangiz nima bilan render qiladi](topic:your-machine).

### Fayllar va boshqa ilovalar

- **STEP fayllar ochiladi.** `.step` yoki `.stp` qism, jihoz yoki yetkazuvchi modeli (AP203, AP214, AP242) kichik IFC model sifatida ochiladi, har bir qattiq jism tekshirish, kesish, oʻlchash va IFC sifatida saqlash mumkin boʻlgan element. Ranglar va yigʻmaning qism nomlari hali oʻqilmaydi. Qarang [BimCraft ochadigan va saqlaydigan fayllar](topic:files#what-it-opens).
- **USD eksporti.** Asboblar panelidagi {{ui:USD}} ochiq modellarni `.usda`, `.usdc` yoki `.usdz` sifatida yozadi, sayt, bino, qavat va intizom boʻyicha joylashtirilgan, har bir elementning IFC sinfi, GlobalId va xususiyatlari bilan. Qarang [Modelni USD sifatida eksport qilish](topic:usd).
- **CivilCraft dan massa.** CivilCraft ning sayt koʻrinishidan yuborilgan bino massasi Xususiyatlarda oʻz oʻrganish raqamlarini koʻrsatadi, va {{ui:Develop this mass}} bitta bekor qilish qadamida har bir qavatda va pol uchun devorlar quradi. Qarang [Sayt tahlilidan bino massasini ishlab chiqish](topic:develop-a-mass).
- **Variantli kutubxona elementlari.** Bir necha variantda kelgan element {{ui:Library}} yorligʻida {{ui:Variant}} tanlovga ega; joylashtirilgan element variantini IFC da saqlaydi, {{ui:Swap item…}} boshqa variantlarni roʻyxatlaydi, va nusxalar hamda yangilanishlar uni saqlaydi. Qarang [Variantli kutubxona elementini joylashtirish va almashtirish](topic:library-variants).
- **Loyiha toʻplamlari papkada.** {{ui:Open a folder}} {{ui:Project bundles}} ostida `.ccbundle.zip` fayllarini roʻyxatlaydi, va toʻplamdagi har bir maketda **…da ochish**: PDF MarkupCraft ga, DWG CadCraft ga, yangi yorliqda. Qarang [Maketni ochish](topic:open-project-bundle#open-a-layout).

### Yordamchilar va qoʻshimchalar

- **AI yordamchilari uchun koʻproq.** Yordamchi endi elementlarni qayta nomlash va xususiyat qiymatlarini oʻrnatish, elementlarni koʻchirish va oʻchirish, devor, eshik va derazalarni oʻzgartirish, USD ni eksport qilish, rasm render qilish yoki render navbatini ishga tushirishi mumkin; har bir oʻzgarish bitta bekor qilish qadami. Qarang [AI yordamchisi modelingiz bilan ishlashi](topic:assistants).
- **Qoʻshimchalar modelda qura oladi.** Add-on API 1.1 qoʻshimchaga modelda bitta bekor qilish qadami sifatida oʻzgarish qilish imkonini beradi (u Jonli TeamWork orqali yuradi), modelni oʻqish, va quvur va havo kanali yoʻllarini, portlarni, jihozlarni va spullarni oʻqish.
- **Zavod qoʻshimchasi** (Sozlamalar › Umumiy › Qoʻshimchalar da yoqmaguningizcha oʻchiq): quvur spetsifikatsiyalari yoʻllarga qarshi tekshiriladi, yoʻllarning izometrik chizmalari SVG va DXF sifatida materiallar roʻyxati bilan, nozzlar bilan joylashtirilgan umumiy jarayon jihozlari, ikki port orasidagi marshrutizator va zavod joylashuvini tekshirish. Chizish yordamchisi, muhandislik tasdiqlashi emas; uning matnlari faqat ingliz tilida.

## Oʻzgargan

- **Noutbukdagi birinchi uy.** Noutbuk oʻlchamidagi ekranda BimCraft faqat reja bilan ishga tushadi, Chizish paneli reja bilan yonma-yon joylashgan tor panel boʻladi, chizma ketganda reja va 3D koʻrinish qayta paydo boʻladi, 3D koʻrinish butun uyni tor oynada kadrga oladi, va oʻlchamlar chiziqlaridan oldin eshik va derazalar tanlanadi.
- **Rasmni saqlash.** Render dialogidagi **PNG saqlash** endi {{ui:Save}}, va boshqa formatlar uchun yonida {{ui:Save as}}. Qarang [Rasmni saqlash](topic:render#save-the-picture).
- **Tahlil yorligʻida** {{ui:Design checks}} bloki bor: u sizning holatlaringiz uchun ASCE 7 yoki EN 1990 yuk kombinatsiyalarini tuzadi va har bir prokat poʻlat I-shaklni (W, S, IPE, HEA yoki HEB oʻlchami, profil nomi va oʻlchami boʻyicha) AISC 360 yoki EN 1993-1-1 boʻyicha tekshiradi, uning sigʻimining qancha qismini ishlatishini koʻrsatadi. Muhandis koʻrib chiqquncha bu yordamchi; payvandlangan shakllar va boshqa kesimlar "tekshirilmagan" deydi. Qarang [Loyihalash tekshiruvlari](topic:frame-analysis#design-checks).

## Tuzatilgan

- Yangi oila oʻlchamini yaratgan qadamdan keyin qayta bajarish ishlamadi ("oʻlcham yoʻq"). Har bir qadam endi qayta bajarganda bir xil IFC GlobalId larni yaratadi, shuning uchun qayta bajarish oilalar va boshqa har bir oʻzgarish uchun ishlaydi.
- Ikki kishi bir oilani saqlaganda (Jonli TeamWork seansida yoki ikki oynada), ikkinchi saqlash birinchisining oʻzgarishini jim almashtirdi. Endi u rad etadi va uning oʻzgarishini qanday koʻrish va oʻzingizniki qayta qilishni aytadi.
- AQSh survey futida oʻqilgan model har bir futni 0,3048 m deb oʻqidi, 0,3048006096 m oʻrniga, bu AQSh futidagi har bir georeferenslangan IFC ni xaritada siljitdi.
- Oila muharriri: uni yopish klaviatura fokusini sahifaga tushirmaydi, uning Saqlash tugmasi telefonda koʻrinib turadi va uning maydonlari telefonni kattalashtirmaydi.

## Har bir ilovada

- **Birliklar.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} uzunlik, maydon, hajm, burchak va qiyalik uchun har biri roʻyxatga ega, birliklarning taʼriflari bergan aniq oʻlchamlar bilan (AQSh survey foot oʻz birligi). Ishlatmaydigan birliklarni oʻchiring, ular birlik roʻyxatlaridan chiqadi; birini yulduzcha bilan belgilang, yangi ish shunda boshlanadi. Fayl doim oʻz birligini saqlaydi. BimCraft da asboblar panelidagi {{ui:Units}} roʻyxati kalitlarga amal qiladi, yulduzcha esa asboblar panelida tanlamaguningizcha koʻrsatish birliklarini belgilaydi (oldingi tanlovingiz saqlanadi), va chizish asboblarining uzunlik maydonlari istalgan birlik belgisini qabul qiladi, masalan `3.5 m` yoki `10 US ft`. Qarang [Birliklar, yozilgan qiymatlar va birlik roʻyxatlari](common:unit-lists).
- **Zichroq tartib va yigʻiladigan panellar.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} ekranga koʻproq sigʻdiradi (sensorli ekranlar va telefonlar katta tugmalarini saqlaydi). Har bir yon panelda ingichka sarlavha paneli bor: uni sudrab panelni joylashtiring yoki suzdiring, boshqa panel sarlavhasiga tashlab bir ramkani yorliqlar sifatida ulashing, uni chetga siljishi uchun mahkamlang yoki yashirib, chetdan qaytaring. Qarang [Panellarni joylashtirish](common:arrange-panels#make-the-layout-denser).
- **Dialoglar siljiydi.** Dialogni sarlavha panelidan sudrab chizmadan uzoqlashtiring; u qoldirgan joyiga qaytadi. Markazlash uchun sarlavha panelini ikki marta bosing. Qarang [Dialogni siljitish](common:arrange-panels#move-a-dialog).
- **AI yordamchilari uchun retseptlar.** Yordamchingiz uchun oʻnta ishlangan soʻrov (chizmani tartibga keltirish, toʻplamni chizish, chizmalarni tekshirish, modeldan savol soʻrash, hajmlarni hisoblash, qism variantini sinash va hokazo), har biri chaqiradigan asboblar va kerakli ruxsatlar bilan; har biri bizning testlarimiz tomonidan qayta ijro etiladi. Ilovalar ichida AI yoʻq. Qarang [AI yordamchilari uchun retseptlar](common:assistants-recipes).
- **Tillar.** **Português (Portugal)** {{ui:Settings}} › {{ui:General}} › {{ui:Language}} da yangi. U, **Português (Brasil)**, **Español (México)** va **Bahasa Indonesia** endi ilovalarning har bir soʻziga ega, ona tilida tekshirilmagan qoralama sifatida. Yordam mavzulari inglizcha, bir nechtasi ispancha.
- **CadCraft Studio** yangilanish tekshiruvi nima uchun ishlamaganini aytadi (tizim uchun fayl hali yoʻq, tarmoq yoʻq, notoʻgʻri imzo) "Tayyor" degan oʻrniga, va siz yopgan Yangi nima bor kartasini yangiroq relis chiqquncha qaytarmaydi.

## Bu versiyada hali yoʻq

- **0.7 kod bilan imzolanmagan.** Imzolash va Microsoft Store paketi 0.8 ga koʻchdi, chunki sertifikat tekshiruvi hali kelmagan. Har bir fayl yonidagi SHA-256 ni getcadcraft.com/download da tekshiring. Windows da, agar SmartScreen oʻrnatgichni toʻxtatsa, **Batafsil** ni, soʻng **Baribir ishga tushirish** ni tanlang. Mac da, birinchi marta, CadCraft Studio ni oʻng tugma bilan bosing va **Ochish** ni tanlang. CadCraft Studio hali ilovalar doʻkonida emas, va iPad yoki iPhone versiyasi hali yoʻq.
- {{ui:Units}} dagi burchak va qiyalik roʻyxatlari saqlanadi, lekin hali hech bir katakcha ularni oʻqimaydi.
- Grafik kartada yoʻl kuzatish, Render dialogidagi qoʻshimchalar va render navbati WebGPU ni talab qiladi (usiz, yuqori sifat WebGL yoʻl kuzatuvchisini ishlatadi); jonli koʻrinish brauzerda boʻlsa WebGPU ni, aks holda WebGL 2 ni ishlatadi. Ular faqat bu yerda yumshoq grafika stubida sinovdan oʻtgan, hali haqiqiy grafik kartalarda emas. Jonli koʻrinishda BimCraft da sochish yoki ulashish yoʻq (ModelCraft da bor).
- Yozilgan sayohatni video sifatida render qilish BimCraft da qurilmagan.
- Loyihalash tekshiruvlari: IFC profil nomi W, S, IPE, HEA yoki HEB oʻlchami boʻlmagan I-shakl (yoki oʻlchami undan farq qilsa) payvandlangan deb olinadi va "tekshirilmagan" qaytadi, xuddi shunday trubalar, burchaklar, kanallar, ingichka qismlar va buralish. Hech bir muhandis hali tekshiruvlarni koʻrib chiqmagan.
- Chizilgan elementlarni bittadan nusxalash, aylantirish, akslantirish yoki massiv qilish mumkin emas (butun sathni nusxalash mumkin), va boʻlinadigan devor, Matn asbobi yoki parda devori yoʻq. Yuqori sathdagi, pastki sathdagi devor bilan uchrashgan devor uning 3D jismiga kesilmaydi, va jadvallar yuqori sathdagi teshikni oʻz devorining sathi ostida sanaydi.
- Oilalar: loyihalar orasida ulashiladigan oilalar kutubxonasi qurilmagan. Oilalar va nusxalangan sathlar hali boshqa BIM dasturlarida ochilmagan.
- MEP: jihozlar umumiy (ishlab chiqaruvchi maʼlumotisiz); poʻlat spullardagi tees va reduktorlar umumiy, ASME B16.9 jadvalidan emas; {{ui:Library}} yorligʻidan joylashtirilgan kutubxona elementlarining portlari IFC ga yozilmaydi; hech narsa muhandis tomonidan tekshirilmagan.
- Zavod qoʻshimchasi hali marshrutlangan yoʻlni modelga chiza olmaydi, izometriklarida spullarni raqamlay olmaydi yoki kutubxonadan joylashtirilgan jihozlar joylashuvini tekshira olmaydi.
- CivilCraft ning zavod kutubxonasidagi zavodlarni BimCraft ning {{ui:Library}} yorligʻidan hali joylashtirib boʻlmaydi.
- Energiya: soatlik simulyatsiya yoʻq, ISO 52016-1 usuli yoʻq va iqlim fayllari yoʻq. Aktivlar: BimCraft yopiq boʻlganda koʻrsatkichlarni saqlaydigan yoki ogohlantirish yuboradigan joylashtirilgan egizak yoʻq.
- Skanerlarni registratsiya qilish sinov skanerlarida sinab koʻrilgan, haqiqiy skaner toʻplamida hali emas; E57 fayllar hali 6 million nuqtagacha va 512 MB gacha ochiladi.
- Loyiha toʻplamlari faqat BimCraft da ochiladi (boshqa dasturlar maketni **…da ochish** orqali oladi), va toʻplamlar hamda ikki dasturli komplekt stublarga qarshi sinovdan oʻtkazilgan, hali Archicad yoki Revit bilan emas.

Qolgani [Hali nima qurilmagan](topic:not-built-yet) da.
