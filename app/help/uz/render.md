---
title: Model rasmini render qilish
summary: Kunduzgi yorugʻlik koʻrinishidagi 3D koʻrinish rasmini oling: osmon, joy kenglamasidagi quyosh, yumshoq soyalar, shisha derazalar; WebGPU bilan grafik kartada yoʻl kuzatuvchi, osmonlar, kamera, yorugʻlikni aralashtirish, tonlash, tuman va render navbati bilan.
keywords: render, tayyor sozlamalar, presetlar, sahna presetlari, ichki, tashqi, kesim koʻrinishi, tun, bir bosishda, rendering, yoʻl kuzatish, path tracing, ray tracing, global illumination, aks etish, sinish, yuqori sifat, foto, fotorealistik, realistik, rasm, image, png, still, osmon, quyosh, kunduzgi yorugʻlik, soyalar, yumshoq soyalar, ambient occlusion, shisha, derazalar, metall, materiallar, ekspozitsiya, yorqinlik, bulutli, alacakaranlik, studio, taqdimot, vizualizatsiya, webgpu, shovqinsizlantirish, fizik osmon, hdri, ies, maydon chuqurligi, panorama, oq balans, yorugʻlikni aralashtirish, render elementlari, exr, 16 bitli png, tuman, kaustika, render navbati
from: beb74cc7
---

{{ui:Render}} asboblar panelidagi tugma 3D koʻrinishning kunduzgi yorugʻlikka oʻxshash rasmini chizadi: osmon, joy kenglamasi quyosh turgan joyda, yumshoq soyalar, butun osmondan tushadigan va burchaklarni qorongʻilashtiradigan yorugʻlik hamda shisha yoki metall koʻrinishiga oʻxshash ranglar. Model va fayl oʻzgarmaydi.

## Koʻrinishni render qilish

1. 3D koʻrinishni rasm qanday boʻlishini xohlasangiz shunday sozlang: aylantiring va kattalashtiring, xohlamagan qavatlar yoki elementlarni yashiring, va agar rasm kesimni koʻrsatishi kerak boʻlsa, [kesim](topic:section-plane) ni oʻrnating.
2. Asboblar panelidagi {{ui:Render}} ni bosing.
3. Agar bosilgan {{ui:Sahna}} sizga mos kelmasa, boshqasini tanlang (qarang: [Sahna presetlari](topic:render#scene-presets-a-good-picture-in-one-click)), {{ui:Hajmi}} ni tanlang, soʻng muloqot oynasida {{ui:Render}} ni bosing.

   Rasm render qilinayotganda toʻlib boradi va har bir oʻtishda silliqroq boʻladi. {{ui:Toʻxtatish}} (yoki {{key:Esc}}) uni erta tugatadi va hozirgi rasmni saqlaydi.

4. PNG sifatida yuklab olish uchun {{ui:Saqlash}} ni bosing, yoki boshqa format uchun {{ui:Boshqacha saqlash}} (qarang: [Rasmni saqlash](topic:render#save-the-picture)). U model faylining nomi bilan nomlanadi.

:::tip
Kamerani tekshirish uchun {{ui:Qoralama}} ni {{ui:Koʻrinish oʻlchami}} da boshlang, soʻng kattaroq oʻlchamda {{ui:Yaxshi}} yoki {{ui:Eng yaxshi}} ni render qiling.
:::

## Sahna presetlari: bir bosishda yaxshi rasm

Muloqot oynasining tepasida toʻrtta {{ui:Sahna}} tugmasi bor. Har biri osmon, yorqinlik, yer, chekka chiziqlar, sifat va quyoshni bir bosishda sozlaydi, shuning uchun birinchi rasmgacha oʻrganadigan hech narsa yoʻq. Birini bosing, soʻng {{ui:Render}} ni bosing.

| Sahna | Nimani sozlaydi | Foydalanish uchun |
|---|---|---|
| {{ui:Tashqi}} | Ochiq osmon, modelning oʻz quyoshi, yer yoqilgan | Binoning tashqaridan koʻrinishi |
| {{ui:Ichki}} | Bulutli osmon (bir xil yorugʻlik, qattiq quyosh dogʻlari yoʻq), yarim pogʻona yorugʻroq | Xonadan ichkaridagi koʻrinish |
| {{ui:Kesim koʻrinishi}} | Oq studiya, yer yoʻq, tez renderda chekka chiziqlar | Kesim bilan kesilgan model |
| {{ui:Tun}} | Quyosh botgan (joy yarim sharida qish oʻrtasidagi yarim tun), bir pogʻona yorugʻroq | Modelni yoritadigan chiroqlar. Chiroqlar boʻlmasa rasm qorongʻi boʻladi |

- {{ui:Bu koʻrinish uchun tanlash}} siz uchun tanlaydi: kesim yoqilgan boʻlsa {{ui:Kesim koʻrinishi}}, kamera model ichida boʻlsa {{ui:Ichki}}, aks holda {{ui:Tashqi}}. Muloqot oynasini birinchi marta ochganingizda u shunday boshlanadi.
- Har bir sozlama pastda qoladi va oʻzgartirilishi mumkin. Bir marta sozlamani oʻzgartirsangiz, sahna tanlangan boʻlib qolmaydi, tugmalar ostidagi chiziq sozlamalaringiz oʻzingiz ekanini aytadi. Qiymatlarini qaytarish uchun sahnani yana bosing.
- Sahna dvigatel, shakl, hajm, materiallar, kamera yoki chiroqlarga tegmaydi.

:::note
Sahnalar ModelCraft va BimCraft da bir xil qiymatlar beradi. Tayyor rasm qanday koʻrinishi modelingizga va grafik kartangizga bogʻliq.
:::

## Rasmda nima koʻrinadi

3D koʻrinish qattiq koʻrsatadigan narsalar: yashirin va shaffof elementlar, yashirin qavatlar va yashirin modellar chiqarib tashlanadi, xonalar faqat {{ui:Boʻshliqlar}} yoqilgan boʻlsa koʻrinadi. Kesim tekisligi yoki kesim qutisi koʻrinishni kesgani kabi rasmni ham kesadi. Elementlar oʻz ranglarida koʻrinadi: xususiyat boʻyicha boʻyash ({{ui:Rang}} yorlogʻi) ishlatilmaydi.

## Sozlamalar

| Sozlama | Nima qiladi |
|---|---|
| {{ui:Hajmi}} | Koʻrinish hajmi, koʻrinish hajmining ikki baravari, Full HD, 4K yoki kvadrat |
| {{ui:Shakl}} | {{ui:Tez}}, yoki pastda tavsiflangan {{ui:Yuqori sifat (nurni kuzatish)}} va uning {{ui:Vaqt chegarasi}} bilan |
| {{ui:Sifat}} | Nechta oʻtish (yuqori sifatda namunalar) oʻrtachalanishi: {{ui:Qoralama}} 16, {{ui:Yaxshi}} 64, {{ui:Eng yaxshi}} 256. Koʻproq oʻtishlar silliqroq soyalar va chekkalar beradi, lekin koʻproq vaqt oladi |
| {{ui:Osmon}} | {{ui:Ochiq osmon}}, {{ui:Bulutli}}, {{ui:Alacakaranlik}} yoki {{ui:Oq studiya}} (oddiy oq fon) |
| {{ui:Quyosh}} | 21 iyun soat 15:00, fayl uning joyi uchun beradigan kenglikda (IfcSite), modelning haqiqiy shimoliga burilgan. Boshqa vaqt uchun {{ui:Bu rasm uchun boshqa sana va vaqtni tanlang}} ni belgilang |
| {{ui:Yorqinlik}} | Yorugʻroq yoki qorongʻiroq, pogʻonalarda (stop) |
| {{ui:Model ostidagi yer}} | Modelning eng past nuqtasidagi yer: soyalarni qabul qiladi va ufqqa qadar yoʻqoladi |
| {{ui:Qirralarni chizish}} | Elementlarning qirralarini rasm ustida ingichka chizadi |

Tanlangan vaqtda quyosh ufqdan pastda boʻlsa, bu tun demak: osmon qorongʻilashadi va modelning chiroqlari uni yoritadi.

## Chiroqlar

Modeldagi har bir yoritgich rasmda chiroq boʻladi: IFC fayldagi yoritgichlar (IfcLightFixture yoki yoritgich sifatida terilgan element), shu jumladan kutubxonadan joylashtirganlaringiz. Har biri yoritgich ostidan biroz pastga yoritadi. Fayl yoritgichning quvvatini bergan boʻlsa, uning yorqinligi undan kelib chiqadi; aks holda 800 lumen, iliq oq.

Muloqot oynasi {{ui:Chiroqlar}} roʻyxatida chiroqlarni koʻrsatadi: birini oʻchirish uchun belgisini olib tashlang yoki uning yorqinligini lumenda kiriting. Bu oʻzgarishlar IFC ga saqlanadi (yoritgichning `CadCraft_Light` xususiyatlar toʻplamida, Xususiyatlarda ham oʻzgartirish mumkin), va {{key:Ctrl+Z}} ularni bekor qiladi.

Fayl joyi haqida hech narsa demasa, quyosh 40° shimoliy kenglikka qoʻyiladi va muloqot oynasi buni aytadi. Vaqt joyning soati boʻyicha hisoblanadi, uzunlikdan kelib chiqib, shuning uchun soatlar boshqacha sozlangan joyda bir soat farq qilishi mumkin.

Bu sozlamalar keyingi rasm uchun shu brauzerda saqlanadi. Ular IFC faylga saqlanmaydi.

## Shisha va boshqa materiallar

{{ui:Materiallar}} ostida ekrandagi har bir rang oʻz koʻrinishiga ega: {{ui:Xira}}, {{ui:Yarim yaltiroq}}, {{ui:Yaltiroq}}, {{ui:Metall}}, {{ui:Silliqlangan metall}}, {{ui:Shisha}} yoki {{ui:Xira shisha}}. IFC fayl shaffof qilgan ranglar (masalan, deraza oynasi) {{ui:Shisha}} sifatida boshlanadi.

:::note
{{ui:Tez}} rejimda shisha va metall modelning qolgan qismini emas, osmonni aks ettiradi va yorugʻlik shisha orqali sinmaydi. Quyidagi {{ui:Yuqori sifat (nurni kuzatish)}} rejimi ikkalasini ham qiladi.
:::

## Yuqori sifat

{{ui:Shakl}} › {{ui:Yuqori sifat (nurni kuzatish)}} ni tanlang: yorugʻlikni kamera koʻradigan tarzda kuzatadigan rasm uchun:

- yorugʻlik sirtlar orasida sakraydi, shuning uchun deraza orqali yoki chiroq bilan yoritilgan xona hamma tomondan yoritiladi va ranglar qoʻshnilariga oʻtadi;
- shisha haqiqiy shisha: yorugʻlik undan sinadi va u modelni aks ettiradi;
- metall va silliqlangan sirtlar modelning qolgan qismini aks ettiradi;
- yorugʻlik panellari panel kabi yoritadi, yumshoq soyalar bilan.

U {{ui:Tez}} dan ancha sekin: har bir oʻtishda har bir piksel yorugʻligi qayta kuzatiladi. Rasm donador boshlanadi va namunalar yigʻilgach tozalanadi, shuning uchun kichikdan boshlang ({{ui:Koʻrinish oʻlchami}}, {{ui:Qoralama}}) va {{ui:Vaqt chegarasi}} ni tanlang: u tugaganda hozirgi rasm saqlanadi. {{ui:Toʻxtatish}} ham uni saqlaydi. Birinchi oʻtish brauzer yoʻl kuzatuvchini tayyorlaguncha kutadi.

Brauzerda WebGPU bor boʻlsa, yoʻl kuzatuvchi CadCraft ning oʻzi va grafik kartada ishlaydi; rasm ostidagi chiziq buni aytadi. {{ui:Toʻxtatish}} yoki vaqt chegarasidan keyin {{ui:Davom ettirish}} bir xil rasm bilan namunalari toʻlguncha davom etadi; sozlamani oʻzgartirish yoki {{ui:Render}} ni yana bosish yangidan boshlaydi. WebGPU boʻlmasa, rasm oʻrniga WebGL bilan yoʻl kuzatiladi (chiziq buni aytadi) va {{ui:Davom ettirish}} taklif qilinmaydi.

:::linux
Linux da Firefox va koʻpchilik Chrome sozlamalarida hali WebGPU yoʻq, shuning uchun yuqori sifat u yerda WebGL dan foydalanadi.
:::

Bu rejimda chekkalar chizilmaydi, teksturalar oʻz rangi va gʻadir-budurligini koʻrsatadi, lekin ularning notekisliklarini emas, va kesim rasm boshlanishidan oldin model ustida bajariladi.

{{ui:Shovqinsizlantirish (namunalardan keyin qolgan donalarni olib tashlaydi)}} sukut boʻyicha yoqilgan: rasm tugaganda yoki toʻxtatilganda, qolgan donalar shu uchun yaratilgan neyron tarmoq bilan tozalanadi (Intel Open Image Denoise ning eʼlon qilingan tarmogʻi, sizning kompyuteringizda ishlaydi: grafik kartada, boʻlmasa protsessorda). {{ui:Koʻrsatish}} › {{ui:Shovqinsizlantirishdan oldingi rasm}} uni render qilingandek koʻrsatadi.

## WebGPU da osmonlar va yorugʻlik profillari

WebGPU bilan yuqori sifatda yana ikkita osmon bor:

- {{ui:Fizik osmon}} kunduzgi yorugʻlikni quyosh balandligidan hisoblaydi: tepada chuqur koʻk, ufqda oqish chiziq, va quyosh past boʻlganda isiroq va xiraroq. {{ui:Tumanlik}} juda toza kundan (2) tumanligacha (10) boradi.
- {{ui:Osmon rasmi (HDRI)}} modelni haqiqiy joyning panorama rasmi bilan yoritadi. {{ui:Rasm tanlang…}} ekvirektangulyar `.hdr` yoki `.exr` faylni oladi; {{ui:Aylantirish}} uni model atrofida aylantiradi va {{ui:Rasm yorugʻligi}} uni yorugʻroq yoki qorongʻiroq qiladi. Rasm oʻz quyoshiga ega, shuning uchun modelning quyoshi qoʻshilmaydi. U faqat sahifa ochiq boʻlganda saqlanadi: qayta ochgandan keyin uni qayta tanlang.

{{ui:Chiroqlar}} roʻyxatidagi har bir chiroq ishlab chiqaruvchining yorugʻlik profilini olishi mumkin: {{ui:IES profili…}} IES (LM-63) faylni oʻqiydi va chiroq shu yoritgich kabi yorugʻlik sochadi (tor pastga yorugʻlik yoki devor yuvuvchi). Bu nomdagi har bir chiroq uni ishlatadi, va chiroq oʻz yorqinligini saqlaydi. Ishlatishni toʻxtatish uchun profil nomini bosing.

Toza shishali derazalar osmon yorugʻligiga xonaga yoʻl topishga yordam beradi.

{{ui:Tez}} rejimi va WebGL yoʻl kuzatuvchisi {{ui:Fizik osmon}} va {{ui:Osmon rasmi (HDRI)}} ni ochiq osmon sifatida koʻrsatadi va yorugʻlik profillarini eʼtiborsiz qoldiradi.

## Kamera

{{ui:Kamera}} rasmni fotosurat kabi sozlaydi:

- {{ui:Ekspozitsiya}}: {{ui:Yorugʻlik surgichi}} ni saqlang yoki {{ui:Kamera sozlamalari}} ni tanlang va kameradagidek {{ui:Diafragma (f-stop)}}, {{ui:Deklanshyor tezligi}} va {{ui:ISO}} ni oʻrnating; ularning yonidagi EV odatiy ekspozitsiya qiymati. f/16 da 1/100 s va ISO 100 quyoshli kunga toʻgʻri keladi; qorongʻiroq sahna kengroq diafragma, sekinroq deklanshyor yoki yuqoriroq ISO ni talab qiladi. Bu har qanday rejimda ishlaydi.
- {{ui:Maydon chuqurligi}} {{ui:Fokus masofasi (m)}} dan yaqinroq yoki uzoqroq narsalarni xuddi shu f-stopli obyektiv qilganidek xiralashtiradi (koʻrinish oʻrtasidagi narsaga fokuslash uchun boʻsh qoldiring); {{ui:Diafragma shakli}} fokusdan tashqari yorqin nuqtalarga doira yoki parrak shakli beradi.
- {{ui:Ikki nuqtali perspektiva (vertikal chiziqlar vertikal qoladi)}} kamerani tekislaydi va rasmni siljitadi, architektura tilt-shift obyektivi kabi, shuning uchun binoga tepaga yoki pastga qaraganingizda devorlar egilmaydi.
- {{ui:Oq balans}} qaysi yorugʻlik rangi oq koʻrinishini belgilaydi: iliq chiroq yorugʻligi uchun pastroq (masalan, 3000 K), soya va bulutli kunlar uchun yuqoriroq.
- {{ui:Proyeksiya}}: {{ui:360° panorama}} kamera atrofidagi hamma narsaning 2:1 rasmini panorama koʻruvchilar uchun qiladi; {{ui:360° stereo panorama}} shlemlar uchun chap koʻz va oʻng koʻz panoramasini ketma-ket joylashtiradi; {{ui:Kub xaritasi (6 ta yuz)}} 3 × 2 toʻr shaklida oltita kvadrat koʻrinish yasaydi. Kenglik {{ui:Hajmi}} dan olinadi.

Proyeksiya, maydon chuqurligi, ikki nuqtali perspektiva va oq balans grafik kartadagi yoʻl kuzatuvchi (WebGPU) ni talab qiladi, shuning uchun ular faqat {{ui:Yuqori sifat (nurni kuzatish)}} da koʻrinadi.

## Rasmni yakunlash

{{ui:Rasm}} yuqori sifatli rasmni fotosurat kabi tonlaydi, va har bir boshqaruv tayyor rasmni darhol oʻzgartiradi, qayta render qilmasdan:

- {{ui:Koʻrinish (koʻrinish konversiyasi)}}: {{ui:ACES filmik}} (rasm oldingidek), {{ui:AgX}} (yumshoqroq, juda yorugʻ yorugʻlikda rangni saqlaydi), {{ui:Filmik}} (yumshoq plyonka egri chizigʻi) yoki {{ui:Standart}} (oddiy, yorugʻ yorugʻlik oqqa qirqiladi).
- {{ui:Kontrast}} va {{ui:Yorugʻ joylarni siqish}} (juda yorugʻ qismlarda detallarni qaytaradi).
- {{ui:Bloom}} (yorugʻ yorugʻlik atrofidagi yumshoq porlash), {{ui:Yorqinlik}} va uning {{ui:Yorqinlik chiziqlari}} (eng yorugʻ nuqtalardan yulduz nurlari) va {{ui:Vinyetka}} (qorongʻiroq burchaklar).
- {{ui:Rang jadvali (.cube)…}} `.cube` fayldan rang tonini uning {{ui:Rang jadvali kuchi}} bilan qoʻllaydi; osmon rasmi kabi, u faqat sahifa ochiq boʻlganda saqlanadi.

## Rasmni saqlash

{{ui:Boshqacha saqlash}} {{ui:Saqlash}} yonida faylni tanlaydi: {{ui:PNG}}, {{ui:JPEG}} yoki {{ui:WebP}} ulashish uchun (JPEG va WebP faqat brauzer yoza olgan joyda), va grafik kartadagi yuqori sifatli render dan keyin yana:

- {{ui:PNG, 16 bit}}: tonlangan rasm, yorqinlik pogʻonalari orasida nozikroq qadamlar bilan, bosma nashr yoki keyingi tahrir uchun.
- {{ui:EXR, har bir qatlam (32-bit suzuvchi nuqta)}}: rasm render qilingandek (chiziqli yorugʻlik, tonlashsiz), har bir render elementi va yorugʻlik guruhi oʻz qatlami bilan, kompozit dasturlar uchun.
- {{ui:Render fayli (.ccrender, keyinroq qayta tahrirlash uchun)}}: muloqot oynasi rasmni qayta aralashtirish va tonlash uchun kerak boʻlgan hamma narsa. {{ui:Render faylini oching…}} uni aralashmasi va tonlash bilan qayta olib keladi, renderlamasdan.

## Render dan keyin yorugʻliklarni aralashtirish

Rasmni render qilishdan oldin {{ui:Yorugʻlikni aralashtirish (renderdan keyin har bir chiroqning rangi va yorugʻligini oʻzgartiring)}} ni yoqing. Rasm tugagach (yoki toʻxtatilgach), {{ui:Rasmni aralashtiring}} uning yorugʻliklarini guruhlarda koʻrsatadi: osmon, quyosh va chiroqlar nomi boʻyicha (bir xil nomdagi har bir chiroq bitta guruh). Guruhni oʻchiring, unga rang bering yoki yorugʻroq yoki qorongʻiroq qiling, va rasm darhol oʻzgaradi, qayta render qilmasdan. {{ui:Aralashmani saqlash}} aralashmani keyinroq tanlash uchun nom bilan saqlaydi; {{ui:Render qilinganidek}} rasmni yaratilgan holatiga qaytaradi. {{ui:Saqlash}} aralashtirilgan rasmni saqlaydi.

{{ui:Render elementlari (albedo, normallar, chuqurlik, diffuz, spekulyar, transmissiya, emissiya, ID lar)}} rasmning qismlarini ham saqlaydi. {{ui:Koʻrsatish}} koʻrinishni ulardan biriga oʻtkazadi: sirt ranglari (albedo), normallar, chuqurlik, diffuz, spekulyar va oʻtkazilgan yorugʻlik (har biri toʻgʻridan va bilvosita), nima porlasa va osmon, hamda niqoblar yasash uchun har bir obyekt yoki material uchun rang.

Ikkalasi ham grafik kartada qoʻshimcha qatlamlarni saqlaydi. Katta oʻlchamlarda grafik kartada joy yetmasligi mumkin; muloqot oynasi buni aytadi va kichikroq oʻlcham ishlaydi.

## Tuman, tutun, shovqin va kaustika

Bular {{ui:Tuman, tutun va shovqin}} ichida joylashgan va grafik kartada {{ui:Yuqori sifat (nurni kuzatish)}} da ishlaydi; boshqa dvigatellar ularni tashlab ketadi.

- {{ui:Tuman va xiralik}} havoni balandlikkacha quyosh, osmon va chiroqlar yoritadigan tuman bilan toʻldiradi. {{ui:Qanchalik uzoqni koʻrish mumkin, metrda}} uning qanchalik qalinligini belgilaydi (taxminan 100 m yengil xiralik, 20 m qalin tuman), {{ui:Tumanning yer ustidan balandligi, metrda}} u qayerda tugashi va {{ui:Yorugʻlik nurlari}} tuman yorugʻlik tomon qanchalik porlashi. Quyosh yorugʻligi tumanning tepasida chiqib ketadi, shuning uchun quyosh deraza orqali yoki binolar orasidan oʻtganda uni yorugʻlik nurlari sifatida koʻrasiz.
- {{ui:Tutun yoki bulut}} yorugʻlik bilan yoritilgan tuman kabi bitta tutun yoki bulut hajmini qoʻshadi. {{ui:Tur}} — {{ui:Bulut}}, {{ui:Tutun ustuni}} yoki {{ui:Hajm faylidan (.ccvol)}}, CadCraft ning oʻz setka formati. {{ui:Tafsilot}} va {{ui:Turlanish}} yaratilgan bulut yoki ustunni oʻzgartiradi, {{ui:Eng uzun tomonining oʻlchami, metrda (0 = modelning oʻlchami)}}, {{ui:X boʻylab surish (m)}}, {{ui:Y boʻylab surish (m)}}, {{ui:Z boʻylab surish (m)}} va {{ui:Aylantirish}} uni joylashtiradi (u model oʻrtasidan boshlanadi), {{ui:Qalinlik}} uni zichroq qiladi, {{ui:Oldinga porlash}} uni yorugʻlik tomon yorugʻroq qiladi va {{ui:Rang}} uni boʻyaydi. Hajm fayli osmon rasmi kabi faqat sahifa ochiq boʻlganda saqlanadi.
- {{ui:Rasm toza boʻlgan joyda erta toʻxtatish (moslashuvchan namuna olish)}} piksellar tinchlangan pikselga koʻproq namuna bermaydi. {{ui:Qabul qilinadigan shovqin}} piksel toʻxtaganda qancha dona qolishi. Rasm ostidagi chiziq pikselga oʻrtacha qancha namuna berilganini koʻrsatadi.
- {{ui:Kaustika (shisha orqali sinadigan yoki koʻzgudan qaytadigan yorugʻlik)}} chiroqlar va quyosh yorugʻligini kuzatadi, shuning uchun shisha shar yoki koʻzgu yorugʻligi ostidagi yorqin dogʻ donasiz chiqadi. U tuman, tutun, yorugʻlikni aralashtirish yoki render elementlari yoqilganda oʻchiriladi va 360° rasmlar uchun emas, balki rasmlar uchun moʻljallangan.

## Render navbati

Muloqot oynasidagi {{ui:Render navbati}}: {{ui:Bu rasmni navbatga qoʻshish}} rasmning sozlamalari va koʻrinishini saqlaydi, va {{ui:Navbatni boshlash}} kutayotganlarini bu kompyuterda birin-ketin render qiladi. Sahifani yopish navbatni saqlaydi; davom ettirish uchun xuddi shu modelni oching. {{ui:Saqlash}} tayyor rasmni yuklab oladi; {{ui:Olib tashlash}} va {{ui:Tugaganlarini tozalash}} roʻyxatni tartibga soladi. Navbat yuqori sifatda render qiladi, shuning uchun WebGPU kerak.

## Qancha vaqt oladi

Rasm sizning kompyuteringizda, grafik kartangiz tomonidan yaratiladi; hech narsa yuklanmaydi. Vaqt oʻtishlar va piksellar bilan oshadi: {{ui:Eng yaxshi}} da {{ui:Qoralama}} dan 16 barobar koʻp oʻtish bor, va 4K rasmda Full HD dan taxminan toʻrt barobar piksel bor. Katta modellar har bir oʻtishda uzoqroq vaqt oladi.
