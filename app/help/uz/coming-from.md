---
title: Boshqa BIM va chizma dasturlaridan kelish
summary: Stol usti BIM muharrirlari va DWG koʻrish dasturlaridagi odatlar BimCraft ga qanday mos kelishi va adashtiradigan farqlar.
keywords: oʻtish, koʻchirish, tanish, stol usti bim, oila, parametrlar, loyiha brauzeri, xossalar paneli, koʻrinish kubi, xref, qatlamlar boshqaruvchisi, farqlar, solishtirish
from: 2de629af
---

Agar Revit bilan ishlagan boʻlsangiz, BimCraft ning koʻp qismi soʻzlar jihatidan tanish, lekin qamrov jihatidan notanish boʻlib tuyuladi. Eng muhim farq: **bu versiya modellarni oʻqiydi va tekshiradi hamda IFC maʼlumotlarini tahrirlaydi. U hali Revit kabi muallif sifatida ishlamaydi.** Devor chizolmaysiz, oilalarni joylashtira olmaysiz, koʻrinishlar yoki varaqlar yarata olmaysiz, loyiha faylini saqlay olmaysiz. Siz esa brauzeri bor har qanday kompyuterda deyarli har qanday bino faylini ochishingiz, unda nima borligini koʻrishingiz, butun loyiha papkasini tekshirishingiz va IFC modelidagi maʼlumotlarni tuzatishingiz mumkin.

## Odatlar xaritasi

| Agar sizda odat boʻlsa | BimCraft da |
|---|---|
| Revit da modelni koʻrish uchun `.rvt` ni ochish | BimCraft `.rvt` ni fayl kartochkasi sifatida ochadi: versiya, loyiha maʼlumoti, havolalar, oldindan koʻrish. 3D model uchun IFC eksport qilib, shuni oching. [Loyiha yoki oila faylini oʻqish](topic:read-rvt-file) |
| Faylni ochishdan oldin qaysi versiyada saqlanganini tekshirish | Kartochkaning tepasida "Revit … da saqlangan" deb yoziladi, faylni yangilamasdan va unga tegmasdan |
| Loyiha brauzeri | Koʻrinishlar va varaqlarning brauzeri yoʻq. IFC modelida {{ui:Qavatlar}} va {{ui:Elementlar}} roʻyxatlari bor; chizmada varaq yorliqlari bor |
| Xossalar palitrasi | Siz bosgan element uchun oʻng tomondagi {{ui:Xossalar}} paneli. Parametr guruhlari oʻrniga IFC xossa toʻplamlari |
| Nusxa va tur parametrlari | Nusxa xossa toʻplamlari va "(tur)" deb belgilangan toʻplamlar. Turdagi oʻzgarish shu turdagi har bir elementga qoʻllanadi, Revit dagidek. [Tur xossasini turdagi har bir element uchun oʻzgartirish](topic:type-vs-instance) |
| Tur tahrirlash | Dialog yoʻq: "(tur)" toʻplamidagi qiymatni bosing va yozing |
| Koʻp elementlarni tanlash, filtrlar, Barcha nusxalarni tanlash | Bir vaqtda bitta element. Hali qurilmagan |
| Koʻrinish kubi va navigatsiya gʻildiragi | Pastki oʻng burchakda koʻrinish kubi, toʻrtta tugma ({{ui:Moslash}}, {{ui:Yuqori}}, {{ui:Old}}, {{ui:Yon}}) va erkin aylantirish. Navigatsiya gʻildiragi yoʻq |
| Shift va oʻrta tugma bilan aylantirish, oʻrta tugma bilan surish | Chap tugma bilan aylantiriladi, oʻng tugma (yoki {{key:Shift}} va sudrash) bilan suriladi, gʻildirak bilan kattalashtiriladi. {{ui:BIM lenta}} menyu uslubi surishni oʻrta tugmaga, aylantirishni esa {{key:Shift}} va oʻrta tugmaga oʻtkazadi. [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse) |
| Qavat rejalari, kesimlar, kesim qutilari | Bir vaqtda bitta {{ui:Kesim}} tekisligi ({{key:X}}); kesim qutisi yoki 2D rejalar yoʻq. [IFC modelni kesish tekisligi bilan kesing](topic:section-plane) |
| Koʻrinishda yashirish, ajratish, koʻrinuvchanlik/grafika | {{ui:Qavatlar}} ni yoqish va oʻchirish, {{ui:Boʻshliqlar}} va {{ui:Qirralar}}. Hali element boʻyicha yashirish yoʻq |
| Xonalar | IFC boʻshliqlari, dastlab yashirin. {{ui:Boʻshliqlar}} ni bosing |
| Saqlash, Boshqacha saqlash, markaziy model bilan sinxronlash | {{ui:IFC sifatida saqlash}} yangi IFC fayl yuklab oladi. Asl fayl hech qachon oʻzgarmaydi. Markaziy model va birgalikda ishlash yoʻq |
| {{key:Mod+Z}} bilan ortga qaytarish | Saqlaguningizgacha IFC tahrirlarida ishlaydi. [IFC xossalarini oʻzgartiring va tahrirlangan nusxani saqlang](topic:edit-ifc-properties) |
| Havolalarni boshqarish | Loyiha papkasini oching: har bir havola tekshiriladi va **Bu papkada**, **Bir xil nom topildi**, **Kutubxona fayli** yoki **Bu papkada emas** deb belgilanadi. [Butun loyiha papkasini oching](topic:open-project-folder) |
| Audit, yoki fayl buzilganmi yoki yoʻqligini tekshirish uchun ochish | Papka hisoboti har bir nusxa va zaxira nusxani kesilganlikka tekshiradi, soniyalar ichida. [Papkani buzilgan nusxalar uchun tekshiring](topic:check-folder-health) |
| Chalkash papkadan toʻgʻri faylni tanlash | {{ui:Bu yerdan boshlang}} katagi sabablari bilan bittasini taklif qiladi |

Agar asosan modellarni tekshirish uchun ochsangiz, xuddi model tekshirish yoki IFC koʻrish dasturidagidek, {{ui:Koʻruvchi}} menyu uslubini tanlang: koʻrish va tekshirish vositalari birinchi turadi, qurilish vositalari esa bitta menyuda kutadi. Qarang: [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse).

## DWG fayllardan koʻrish

Agar DWG larni AutoCAD yoki DWG koʻruvchisida ochsangiz:

| Agar sizda odat boʻlsa | BimCraft da |
|---|---|
| Pastda model va joylashuv yorliqlari | Chizma ustida yorliqlar: {{ui:Model}} va har bir varaq uchun bittadan |
| ZOOM Extents, gʻildirakni ikki marta bosish | Ikki marta bosish, {{key:F}} yoki {{ui:Moslash}} |
| Oʻrta tugma bilan surish | Istalgan tugma bilan sudrang |
| Qatlamlar boshqaruvchisi | {{ui:Qatlamlar}} roʻyxati: koʻrsatish uchun belgilang, yashirish uchun belgini olib tashlang, {{ui:Hammasini yoqish}} va {{ui:Hammasini oʻchirish}} |
| Havola boshqaruvchisi | Oʻng tomondagi **Bogʻlangan chizmalar**, **Koʻrsatilgan** yoki **Topilmadi** bilan, va {{ui:Bogʻlangan chizmalarni qoʻshish…}} |
| Chop etish oldindan koʻrinishi | {{ui:Chop etish koʻrinishi}} yoki {{key:P}}: oq fonda qora, chiziq qalinligi bilan. Bu chop etmaydi |
| Blok atributlaridan maʼlumot olish | Teglangan oziq-ovqat xizmati chizmalari uchun {{ui:Jihozlar}} yorligʻi, {{ui:CSV yuklab olish}} bilan |
| Oʻlchash, chizish, tahrirlash, boshqacha saqlash | BimCraft da yoʻq. Chizish va tahrirlashni CadCraft chizmachilik ilovasi bajaradi |

## Odatda adashtiradigan farqlar

- **U brauzerda ishlaydi, brauzer esa fayllaringizga ehtiyotkor.** BimCraft faqat siz tanlagan yoki sudrab olib kelgan fayl va papkalarni oʻqiy oladi. U faylni oʻz-oʻzidan ocholmaydi va uning ustiga saqlay olmaydi. Har bir saqlash — yuklab olish.
- **Hech narsa yuklanmaydi.** Ba'zi brauzerlarning papka oynalarida "upload" (yuklash) soʻzi brauzerning oʻz atamasi. Fayllar kompyuteringizda qoladi.
- **IFC — model formati.** Loyiha fayli kartochka sifatida ochiladi, chunki uning 3D tarkibi hujjatlashtirilmagan. BimCraft ga modellar koʻchishining yoʻli sifatida IFC ni koʻring.
- **Tahrirlar nusxa-yozish tarzida.** Bitta elementning qiymatini oʻzgartirish qoʻshnilariga taʼsir qilmaydi, hatto eksportchi ularda bu qiymatni baham koʻrgan boʻlsa ham. Tur xossalari bunga ataylab istisno.
- **Loyiha yoʻq, koʻrinishlar yoʻq.** BimCraft bir vaqtda bitta faylni koʻrsatadi va uni yopganingizdan keyin hech narsani eslab qolmaydi, faqat Chrome va Edge dagi oxirgi papkalar nomlaridan tashqari.
- **Mac tugmalari.** Revit ning Windows tugmalarida Ctrl ishlatiladigan joyda BimCraft tugmalarida {{key:Mod}} ishlatiladi: Mac da Command.
- **Sichqoncha odatlaringiz.** Aylantirish Shift va oʻrta tugma emas, chap tugma bilan; faqat {{ui:BIM lenta}} menyu uslubini tanlamasangiz yoki tugmalarni oʻzingiz [Menyular, tugmalar va sichqoncha](topic:menus-keys-and-mouse) boʻlimida sozlamasangiz.

Hozir oʻrniga nima ishlatish kerakligi uchun [Hali qurilmagan narsalar](topic:not-built-yet) ga qarang.
