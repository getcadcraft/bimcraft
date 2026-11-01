---
title: BimCraft ekrani
summary: Har bir bar, panel va tugmani ekrandagi nomi boʻyicha koʻrish va ekran har bir fayl turi uchun qanday oʻzgarishi.
keywords: ekran, joylashuv, panellar, asboblar paneli, interfeys, ui, koʻrinish, xossalar paneli, brauzer, ilova paneli
from: 2eb01ec2
---

BimCraft ekranining tepasida bar bor va uning ostida uchta soha bor: chapda panel, oʻrtada sahna va oʻngda {{ui:Properties}} paneli. Har bir sohada nima koʻrinishi siz ochgan narsaga bogʻliq: IFC model, loyiha yoki oila fayli, chizma yoki jild.

## Ilova paneli

Tepadagi nozik panel BimCraft ning oʻzi emas, CadCraft saytiga tegishli. Chapdan oʻngga:

- CadCraft belgisi: CadCraft bosh sahifasiga oʻtadi.
- Ilova nomi va versiya menyusi. Ichki versiyada qaysi versiyani ishga tushirayotganingizni koʻrsatadi va chiqarilgan versiyaga oʻtish imkonini beradi.
- {{ui:BimCraft haqida}}: ilovaning saytdagi sahifasi.
- {{ui:Settings}}: BimCraft ning oʻz sozlamalari va barcha ilovalar uchun umumiy sozlamalar. Qarang [BimCraft sozlamalari](topic:settings).
- {{ui:Full screen}}: ekran rejimlari boʻylab aylanadi. Qarang pastda [Ekran rejimlari](topic:workspace#screen-modes).
- {{ui:Paper}} va {{ui:Model}}: yorugʻ va qorongʻi mavzular. 3D koʻrinish va 2D chizmalar tanlagan mavzuga ergashadi.

## Chap panel

Chap panel doim **Fayl yoki jildni ochish** bilan boshlanadi:

- Tashlash sohasi, {{ui:Choose a file, or drop a file or folder here}}. Bitta fayl tanlash uchun bosing, yoki uning ustiga fayl yoki jildni tashlang (yoki sahifaning istalgan joyiga).
- {{ui:Open a folder}}: butun loyiha jildini tanlash. Qarang [Butun loyiha jildini ochish](topic:open-project-folder).
- {{ui:Recent folders}}: Chrome va Edge da, jildni jild tanlagich orqali yoki tashlab ochganingizdan keyin paydo boʻladi. Uni qayta ochish uchun {{ui:Reopen}} va jild nomini bosing, unutish uchun esa kichik × ni bosing.

Uning ostida boʻlimlar tegishli boʻlganda paydo boʻladi:

| Boʻlim | Qachon koʻrinadi | Ichida nima bor |
|---|---|---|
| {{ui:Changes}} | IFC model ochiq | Saqlanmagan tahrirlaringiz, eng yangisi birinchi, {{ui:Undo}} va {{ui:Save as IFC}} bilan |
| {{ui:File}} | Model yoki fayl kartochkasi ochiq | Fayl haqida maʼlumot: hajmi, sxema yoki nashr, loyiha, muallif, elementlar soni |
| {{ui:Drawing}} | DWG yoki DXF ochiq | Format, birliklar, obyekt va qatlamlar soni, varaqlar, bogʻlangan chizmalar, jihozlar |
| {{ui:Folder}} | Jild ochiq | Fayl va modellar soni, hajmi, topilgan muammolar |
| {{ui:Back to the folder}} | Jilddan fayl ochgansiz | Jild hisobotiga qaytadi |
| {{ui:Layers}} | Chizma ochiq | Har bir qatlam uchun belgi qutisi, {{ui:All on}} va {{ui:All off}} bilan |
| {{ui:Storeys}} | IFC model ochiq | Har bir qavat uchun belgi qutisi, eng yuqori qavat birinchi |
| {{ui:Elements}} | IFC model ochiq | Modelda har bir turdagi elementlar soni (eng keng tarqalgan 30 tasi) |

## Sahna

Ekranning oʻrtasi ochiq faylni koʻrsatadi.

- **Boʻsh**: "Bino modelini oching." yozuvi, {{ui:Choose a file}} va {{ui:Open a folder}}, hamda har bir format haqida qisqa tavsif.
- **IFC model**: 3D koʻrinish, yuqorisida asboblar paneli, nomlangan guruhlarda, CadCraft chizma ilovasidagidek, har bir asbobning belgisi nomi ustida: {{ui:View}} ({{ui:Fit}}, {{ui:Top}}, {{ui:Front}}, {{ui:Side}}, {{ui:Edges}}, {{ui:Spaces}}); {{ui:Edit}} ({{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} va {{ui:More}}, qarang [Kutubxona elementlarini nusxalash, qoʻyish va dublikat qilish](topic:copy-paste)); {{ui:Model}} ({{ui:Units}} va {{ui:Draw}}); {{ui:Library}} ({{ui:Library}}, {{ui:Equipment}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Review}} ({{ui:Show}}, {{ui:Section}}, {{ui:Walk}}, {{ui:Measure}}; qarang [IFC modelni kesim tekisligi bilan kesish](topic:section-plane)); va {{ui:Output}} (render, jonli koʻrinish, VR, eksportlar, boʻyash va saqlangan koʻrinishlar). {{ui:Draw}} yoqilgan boʻlsa, uning ostidagi Chizish paneli xuddi shunday koʻrinishga ega: {{ui:View}} (sath va reja turi), {{ui:Draw}}, {{ui:Edit}} va {{ui:Library}}. Koʻrinish kubi pastki oʻng burchakda turadi. Qarang [IFC modelni ochish va 3D da atrofga qarash](topic:open-ifc-model). {{ui:Settings}} › {{ui:General}} bu tugmalarda belgilar, yorliqlar yoki ikkalasini tanlash, guruh nomlarini koʻrsatish yoki yashirish imkonini beradi; asboblar paneli va guruhlarini tartiblash uchun uni oʻng tugma bilan bosing. Qisqa oynada asboblar paneli belgilar ostidagi nomlarni tashlab yuboradi.
- **Loyiha yoki oila fayli**: fayl kartochkasi, oldindan koʻrish rasmi, loyiha maʼlumoti va bogʻlangan fayllar bilan. Qarang [Loyiha yoki oila faylini oʻqish](topic:read-rvt-file).
- **DWG yoki DXF**: tablar qatori ({{ui:Model}}, soʻng har bir varaq uchun bittadan, chizmada belgilangan jihozlar boʻlsa {{ui:Equipment}}, {{ui:3D}}, {{ui:Fit}} va {{ui:Print view}}), chizma va burchakda jonli X va Y koordinatalar. Qarang [DWG yoki DXF chizmani koʻrish](topic:view-dwg) va [DWG yoki DXF chizmani 3D da koʻrish](topic:dwg-in-3d).
- **Jild**: jild hisoboti, {{ui:Start here}} qutisi va modellar, bogʻlanishlar, IFC modellar va chizmalar jadvallari bilan. Qarang [Butun loyiha jildini ochish](topic:open-project-folder).

Sahnaning pastki qismidagi **holat satri** BimCraft nima qilayotganini aytadi ("Model oʻqilmoqda…", "Geometriya qurilmoqda: 5400 ta elementdan 1200 tasi") va biror narsa xato ketsa, qizil rangda nima notoʻgʻri ketganini koʻrsatadi. Muvaffaqiyat haqidagi xabarlar bir necha soniyadan soʻng oʻchadi.

## Xossalar paneli

Oʻng panel quyidagilarni koʻrsatadi:

- IFC model uchun: bosgan elementingiz, uning nomi, turi, tegi, GlobalId va har bir xossalar toʻplami. Oʻzgartirish mumkin boʻlgan qiymatlar tugma kabi koʻrinadi. Qarang [Xossalar paneli maydonlari](topic:properties-panel).
- Chizma uchun: chizmada qanday harakatlanish, chizmaning bogʻlangan chizmalari va rasmlari va ularning topilgan-topilmaganligi, hamda **Hali chizilmagan** narsalar roʻyxati.
- Fayl kartochkasi yoki jild uchun: keyin nimani ochishni tushuntiruvchi qisqa eslatma.

## Kichik ekranda

Oyna noutbuk ekranidan torroq boʻlganda, BimCraft sohalarini qatlaydi: sahna tepada, panellar pastda. Panellarga yetish uchun sahifani aylantiring. Telefonda ular bitta ustun, planshetda ikkita ustun boʻladi.

## Ekran rejimlari

Ilova panelidagi {{ui:Full screen}} tugmasi yoki har qanday platformada {{key:Ctrl+Shift+F}}, uch rejim orasida aylanadi:

1. Odatiy.
2. Toʻliq ekran, barlar hali koʻrinib turadi.
3. Toʻliq ekran, ilova paneli yashirilgan. Uni qaytarish uchun kursorni yuqori chetga olib boring yoki u yerni teging.

Odatiy rejimga qaytish uchun {{key:Esc}} ni bosing. Toʻliq ekranni qoʻllab-quvvatlamaydigan brauzerlar (masalan, iPhone da) faqat odatiy va yashirin barlar oʻrtasida almashadi.

## Tegishli

- [Tugmalar va sichqoncha](topic:keyboard)
- [BimCraft ochadigan va saqlaydigan fayllar](topic:files)
