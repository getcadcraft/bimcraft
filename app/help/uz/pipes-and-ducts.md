---
title: Quvurlar va kanallar
summary: Quvur va kanal trassalarini planda markaziy chiziqlari boyicha chizing; tirsaklar, troynik, reduktorlar va oʻtishlar avtomatik yaratiladi, trassalar IFC faylida tizimlarga tegishli va ulangan portlar bilan boʻladi hamda planlarda, jadvallarda va hisob-kitobda koʻrinadi.
keywords: quvur, quvurlar, quvur oʻtkazgich, santexnika, kanal, kanallar, havo kanallari, isitish-ventilatsiya, mep, mexanik, tirsak, troynik, reduktor, oʻtish, fitting, fittinglar, klapan, klapanlar, zadvijka, shar klapan, globus klapan, teskari klapan, stoyka, nishab, drenaj, kanalizatsiya, shamollatish, sovuq suv, issiq suv, sovutilgan suv, isitish, gaz, yongʻin xavfsizligi, berilayotgan havo, qaytish havosi, chiqarish, tizim, tizimlar, port, portlar, ulagich, ulagichlar, jihoz, jihozlar, santexnika jihozi, yuvgich, rakovina, hojatxona, lavabo, oshxona rakovinasi, dush, kir yuvish vanna, jihoz birliklari, uhc, dfu, drenajlar oʻlchami, drenaj oʻlchamini hisoblash, bino drenaji, tarmoq, havo oqimi, cfm, ishqalanish, teng ishqalanish, oʻlchamlash, jadval, hajmlarni hisoblash, nbr, nbr 5648, nbr 5688, nbr 8160, pvc eritiladigan, kanalizatsiya, dn
from: 85140bc5
---

## Nima qilasiz

Bino quvurlari va kanallarini devor chizganingizdek chizasiz: oʻrnatgan balandlikda trassaning markaziy chizigʻining burchaklarini bosasiz. BimCraft fittinglarni yaratadi, har bir qismni oʻz tizimiga qoʻyadi va ularni ulaydi, shuning uchun boshqa dasturlar trassani bitta ulangan tizim sifatida oʻqiydi.

## Quvur chizish

1. {{ui:Draw}} ni yoqing, {{ui:Build}} ni oching va {{ui:Pipe}} ni tanlang.
2. Panelda **tizim** ni tanlang (sovuq suv, issiq suv, sanitariya drenaji, gaz…). U odatdagi materialni belgilaydi: suv uchun mis, drenaj va shamollatish uchun PVX, isitish, sovutilgan suv, gaz va yongʻin xavfsizligi uchun poʻlat. Kerak boʻlsa **material**, **klass** va **oʻlcham** ni oʻzgartiring. Oʻlchamlar va devorlar ommaviy standartlardan olinadi: poʻlat quvur ASME B36.10M, mis truba ASTM B88, PVX ASTM D1785 va PEX ASTM F876. Braziliya loyihalarida **PVC water pipe (NBR 5648)** ni, sovuq suv uchun eritiladigan PVX ni va **PVC drain pipe (NBR 5688)** ni, normal yoki kuchaytirilgan seriyada, drenaj va shamollatish uchun ishlatish mumkin: ularning oʻlchamlari DN bilan nomlanadi (DN 25, DN 100). Ulardan birini tanlaganingizdan keyin boshqa tizimni tanlasangiz, braziliya quvurlari saqlanadi (PVC water pipe dan keyin sanitariya drenaji uchun PVC drain pipe).
3. **At** ni belgilang: quvur markaziy chizigʻining sath ustidagi balandligi.
4. Quvur boshlanadigan joyni, soʻng har bir burchakni bosing. Oxirgi nuqtada ikki marta bosing yoki {{key:Enter}} ni bosing. {{key:Backspace}} oxirgi burchakni qaytarib oladi; {{key:Esc}} trassani bekor qiladi.

Quvur devorlar kabi, shuningdek boshqa trassalarga tutashadi: davom ettirish uchun quvur uchidan boshlang, yoki boshqa quvur chizigʻida tugatib shoxlanting. Yangi trassa tutashgan quvurning balandligini oladi.

Jihoz portida boshlangan yoki tugagan trassa oʻz oʻlchami va tizimini oladi va unga mahkam bogʻlanadi: qarang [Portli MEP jihozlari](topic:mep-equipment) va [Quvur va kanallarni jihozga ulash](topic:mep-connections).

## Loyihaning santexnika standartini belgilash

Quvur panelidagi birinchi roʻyxat modelning **santexnika standarti**: **US (IPC, dyuym)** yoki **Brazil (ABNT, DN)**. U modelda saqlanadi, shuning uchun faylni ochgan har bir kishi trassalarni bir xil tarzda boshlaydi. **US** rejimida yangi trassa mis (suv) yoki PVX Schedule 40 (drenaj) bilan, dyuymda, Xalqaro santexnika kodeksi nishabi bilan boshlanadi. **Brazil** rejimida sovuq suv PVC soldável DN 25 bilan, sanitariya va yomgʻir drenajlari hamda shamollatish PVC esgoto DN 100 bilan NBR 8160 nishabi boʻyicha, issiq suv esa misda boshlanadi. Bu jihoz konnektorida yoki jihoz porti ustida boshlangan trassaga ham qoʻllanadi. Oldin chizilgan quvurlar oʻz materialini va oʻz jadvallarini saqlaydi; material roʻyxati ochiq qoladi, shuning uchun US modelida bitta braziliya trassasini ataylab chizish mumkin. Tanlovsiz fayl oldingidek ishlaydi: yangi trassa ishlatilayotgan material boʻyicha boradi.

## Kanal chizish

1. {{ui:Duct}} ni tanlang. Tizimni (berilayotgan, qaytish, chiqarish yoki tashqi havo) va shaklni tanlang: dumaloq, toʻrtburchak yoki yassi oval.
2. Kengligi va balandligini kiriting (dumaloq kanalning kengligi uning diametri), hamda markaziy chiziqning balandligi uchun **At**.
3. Havo oqimi boʻyicha oʻlchamlash uchun **Airflow** va **Friction** tezligini kiriting va {{ui:Size it}} ni bosing. Kanal teng ishqalanish usulida oʻlchanadi, bu ASHRAE Handbook ning kanal loyihalash bobidagi usul, va mavjud oʻlchamga yaxlitlanadi, shuning uchun ishqalanish siz kiritgan tezlikdan past yoki unga teng chiqadi. Tezlik kiritilmasa, 100 ft uchun 0,08 in. suv ustuni (0,8 Pa/m) ishlatiladi. Toʻgʻri burchakli kanal siz kiritgan balandlikni saqlaydi va kenglik oladi; tomonlari 4 dan 1 gacha koʻp boʻlsa, BimCraft buni aytadi.
4. Quvur kabi burchaklarni bosing.

## Santexnika jihozlari

{{ui:Build}} › {{ui:Place family}} dan boshlash uchun besh jihoz taklif qiladi, har biri drenaj va sovuq suv ulagichi bilan: **Water closet** (hojatxona), **Lavatory** (lavabo), **Kitchen sink** (oshxona rakovinasi), **Shower tray** (dush podoni) va **Laundry tub** (kir yuvish vannasi). Ular joylashtirilayotganda old tomoni sizga qaraydi, orqasi devorga tiraladi. Ularning drenajlari NBR 8160 ning eng kichik jihoz drenaji boʻyicha (hojatxona uchun DN 100, oshxona rakovinasi uchun DN 50, qolganlari uchun DN 40); suv DN 20. Ularning oʻlchamini oʻzgartiring yoki har qanday oila kabi tahrirlang: qarang [Oilalar va ularning oʻlchamlari](topic:families).

Oila qaysi jihoz ekanini oila tahrirlovchisining **Ulagichlar** yorligida, {{ui:Plumbing fixture}} ostida koʻrsatadi. Uning drenaji keyin jihoz birliklarida hisoblanadi: hojatxona uchun 6 UHC, lavabo uchun 1, oshxona rakovinasi yoki kir yuvish vannasi uchun 3, dush uchun 2 (NBR 8160), yoki IPC 709.1 jadvalidagi drenaj jihoz birliklari.

## Jihoz ulagichidan

Ulagichli oiladan joylashtirilgan elementlar (rakovina drenaji va jumragi, havo terminalining boʻyni: qarang [Oilani tahrirlash](topic:family-editor)) {{ui:Pipe}} yoki {{ui:Duct}} yoqilgan boʻlsa, boʻsh ulagichlarini nuqta sifatida koʻrsatadi va koʻrsatkich ularga tutashadi.

- **Ulagichdan boshlash**: trassa tizimini va oʻlchamini oladi (panel materiali boʻyicha, ulagich oʻlchamida yoki undan bir oz katta quvur; dumaloq kanal esa diametri boʻyicha). Ulagich pastga yoki yuqoriga qaragan boʻlsa, masalan rakovina ostidagi drenaj kabi, trassa avval toʻgʻri pastga yoki yuqoriga **At** dagi balandlikka boradi, soʻng sizning bosishlaringiz boʻyicha davom etadi.
- **Ulagichda tugatish**: trassa pastga yoki yuqoriga ulagichga tushadi va shu yerda tugaydi.

Trassa IFC faylida elementga ulangan boʻladi, shuning uchun boshqa dasturlar jihozni oʻz tizimining bir qismi sifatida koʻradi. Trassaning uchida ulagich bilan keyinroq joylashtirilgan element ham unga ulanadi. Ulagichdan koʻchirilgan trassa undan endi ulanmaydi.

## Tayyor fittinglar

| Qayerda | BimCraft nima yaratadi |
|---|---|
| Trassa burilsa | Tirsak. Poʻlat quvur ASME B16.9 ning uzun radiusida (oʻlchamning 1,5 × i), boshqa quvur bitta tashqi diametrda, dumaloq kanal 1,5 diametrda, toʻrtburchak kanal bitta kenglikda (yuqoriga yoki pastga burilsa bitta balandlikda) |
| Trassa boshqa trassaning chizigʻida tugasa | Troynik; boshqa trassa shu yerda boʻlinadi |
| Ikki trassa uchma-uch, turli oʻlchamda uchrashsa | Reduktor (quvurlar uchun) yoki oʻtish (kanallar uchun) |
| Bir oʻlchamdagi ikki trassa uchma-uch burchak ostida uchrashsa | Tirsak |

Trassani oʻzgartirsangiz, koʻchirsangiz yoki oʻchirsangiz, shu qavatdagi har bir fitting qayta yaratiladi. Agar oyoq uchidagi fittinglar uchun juda qisqa boʻlsa, BimCraft buni aytadi va hech narsani oʻzgartirmaydi: burchakni uzoqroqqa suring.

:::note
Fittinglar va klapanlar umumiy: quvur yoki kanal oʻlchamidan chiziladi, ishlab chiqaruvchi katalogidan emas. Ulangan, presslangan va jilolangan fittinglar, klapan korpuslari va jihozlarning ishlab chiqaruvchi oʻz oʻlchamlari bor; buyurtma berishdan oldin ularni yetkazib beruvchi bilan tekshiring.
:::

## Stoykalar

Chizish paytida **At** ga yangi balandlikni kiriting va {{key:Enter}} ni bosing: trassa oxirgi burchakda toʻgʻri yuqoriga yoki pastga oʻtadi, har bir uchida tirsak bilan. Stoyka yuqoridagi qavatga chiqishi mumkin. Har bir qavat koʻrinish diapazoni yetadigan trassa qismlarini koʻrsatadi, stoykada **UP** yoki **DN** bilan.

## Drenajlar va ularning nishabi

Sanitariya va yomgʻir drenajlari oʻlchamiga mos, Xalqaro santexnika kodeksi ruxsat beradigan eng kichik nishabdan boshlanadi: 2-1/2 in. gacha har bir fut uchun 1/4 in., 3 dan 6 in. gacha har bir fut uchun 1/8 in., 8 in. dan har bir fut uchun 1/16 in. Braziliya PVX drenaj quvuri NBR 8160 nishabidan boshlanadi: DN 75 gacha 2 %, DN 100 dan 1 %. Panelda yoki Xossalarda boshqa nishab kiriting: `1/4"/ft`, `2 %` yoki `1:50`. Trassa birinchi nuqtasidan pastga tushadi, shuning uchun drenajlarni oqim yoʻnalishida chizing. Plan tushishni va strelkani koʻrsatadi. Xossalar drenaj kodeks minimumidan tekisroq boʻlsa ogohlantiradi.

## Drenajlarni jihoz birliklari boʻyicha oʻlchash

Sanitariya drenajini tanlang: Xossalardagi **Fixture units** uning qancha yuk olib yurishini va unga kerak boʻlgan eng kichik oʻlchamni koʻrsatadi. Drenaj ulagichi trassada boʻlgan har bir santexnika jihozi hisobga olinadi, shuningdek unga oqib tushadigan har bir drenaj ham: drenajlarni oqim yoʻnalishida chizing, har biri oqib tushadigan drenajda tugasin.

- Braziliya PVX drenaj quvuridagi drenajlar **UHC** ni hisoblaydi va NBR 8160 ga amal qiladi; boshqalari **DFU** ni hisoblaydi va Xalqaro santexnika kodeksiga amal qiladi.
- **Drenaj**: **Branch** kodeksning jihoz shoxlari jadvali boʻyicha oʻlchanadi; **Building drain** esa nishab boʻyicha oʻz jadvalidan, shuning uchun uning **Slope** muhim.
- Drenaj xizmat qiladigan jihoz drenajlaridan (hojatxona uchun DN 100, yoki 3 in.) va unga oqib tushadigan drenajdan hech qachon kichik boʻlmaydi. NBR 8160 boʻyicha bino drenaji kamida DN 100.

{{ui:Size the drains}} modeldagi jihoz birliklari uchun juda kichik boʻlgan har bir sanitariya drenajini kerakli oʻlchamga keltiradi, bitta bekor qilinadigan qadam sifatida. Kerakligidan katta chizilgan drenaj oʻz holicha qoladi. Drenaj nishabida quvurining eng katta oʻlchami sigʻdira olmagan yukni olib yursa, BimCraft buni aytadi: unga tikroq nishab yoki boshqa quvur bering.

:::note
Jadvallar gorizontal drenajlar uchun. Stoykalar, shamollatish va yomgʻir drenajlari bu yerda oʻlchanmaydi: ularni va butun loyihani loyihaga tegishli kodeks boʻyicha tekshiring.
:::

## Klapanlar

1. {{ui:Valve}} ni va turini tanlang: zadvijka, shar, globus yoki teskari.
2. Quvur qaerga qoʻyilishi kerak boʻlsa, uni bosing. Quvur klapan atrofida kesiladi va klapan ikki tomonga ulanadi.

Trassaning Xossalarida uning klapanlari roʻyxatlanadi, har biri {{ui:Remove}} bilan.

Boshqa klapan turlari, filtr, kanallardagi zaslonkalar, oʻz quvur spetsifikatsiyalaringiz va ishlab chiqaruvchi oilalari: qarang [Quvur spetsifikatsiyalari, klapanlar, zaslonkalar va ishlab chiqaruvchi oilalari](topic:pipe-specs).

## Trassani oʻzgartirish

Trassaning istalgan qismini planda yoki 3D koʻrinishda tanlang. Xossalarda:

- **System**, **Material**, **Class** va **Size** (quvurlar uchun), yoki **Shape**, **Width**, **Height** (kanallar uchun).
- **Height above the level** trassani butunlay yuqoriga yoki pastga suradi.
- **Insulation**: uning qalinligi, oraliq tekshiruvi va teshiklar roʻyxati uchun saqlanadi (uning uchun hech narsa chizilmaydi): qarang [Quvur va kanallarni konstruksiyaga nisbatan tekshirish](topic:mep-against-structure).
- Poʻlat quvur: **Cut into spools**: qarang [Poʻlat quvur spullari va spul varaqlari](topic:pipe-spools).
- **Slope** (quvurlar uchun).
- **Flow** va {{ui:Size it}}: suv uchun, suvni 8 ft/s (2,4 m/s) da saqlaydigan eng kichik oʻlcham, issiq suv uchun esa 5 ft/s (1,5 m/s); braziliya PVX suv quvuri uchun (NBR 5626) 3 m/s da. Kanallar uchun chizilgan kanalning tezligi va ishqalanish tezligi. Sanitariya drenajlari oʻrniga jihoz birliklari boʻyicha oʻlchanadi: pastdagi **Size the drains by fixture units** ga qarang.

Har bir oʻzgarish {{ui:Undo}} ning bir qadamidir. {{key:Delete}} butun trassani oʻchiradi.

## Planlar

- 150 mm (taxminan 6 in.) dan kichik quvurlar markaziy chizigʻida bitta chiziq sifatida chiziladi, kattaroq quvurlar va barcha kanallar esa kengligida ikki chiziq sifatida.
- Har bir tizimning oʻz rangi bor; plan PDF ularni qora rangda chop etadi.
- Har bir trassa oʻz oʻlchami va tizimi bilan belgilanadi (masalan `2" CW` yoki `16×10 SA`).
- Plan koʻrinish diapazoni qaysi trassalarni koʻrsatishini hal qiladi, va {{ui:Shown in this plan}} **Pipes** yoki **Ducts** ni chiqarib tashlashi mumkin: qarang [Koʻrinishlar, koʻrinish diapazonlari va oʻz varaqlaringiz](topic:views-and-sheets).

## Jadvallar va hisob-kitob

{{ui:Schedules}} paneli **Pipes** (tizim, material va oʻlcham boʻyicha, uzunliklari bilan), **Ducts** (tizim, shakl va oʻlcham boʻyicha, uzunliklari va tashqi sirt maydoni bilan) va **Fittings and valves** (turi va oʻlchami boʻyicha, sanab chiqilgan) ni qoʻshadi. Qatorni bosib, nima roʻyxatga olinishini tanlang; {{ui:Download CSV}} uni yuklab oladi.

{{ui:Takeoff}} trassalarni TakeoffCraft ga olib boradi: quvur va kanal oʻlchami boʻyicha planda chizilgan trassa sifatida (nishabli drenajlar oʻz nishabi boʻyicha oʻlchanadi), fittinglar va klapanlar esa joylashgan joyida sanaladi: qarang [Modelning miqdorlarini TakeoffCraft ga yuborish](topic:takeoff). Stoykalar bu varaqdan chiqariladi, chunki plan ularni oʻlchay olmaydi; Pipes jadvalida ularning uzunligi bor.

## IFC faylida

Har bir trassa qismlarini olib yuruvchi yigʻilma: quvur va kanal segmentlari, fittinglar va klapanlar, har biri turi, materiali, tizimi uchun rangi va portlari bilan. Tutashgan portlar ulangan boʻladi, va har bir qism oʻz taqsimot tizimiga tegishli boʻladi (IFC2X3 fayllari bir xil narsani oqim segmentlari, fittinglar va boshqaruvchilar tizimida oladi). IFC tizimlarini oʻqiydigan boshqa dasturlar har bir tizim uchun bitta ulangan trassani koʻradi. Trassaning oʻz taʼrifi u bilan birga saqlanadi, shuning uchun BimCraft uni oʻzgartirganingizda xuddi shunday tarzda qayta yaratadi.
