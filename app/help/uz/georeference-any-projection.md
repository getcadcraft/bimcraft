---
title: Istalgan proyeksiya bilan georeferensiya
summary: BimCraft’ga model koordinatalari qaysi xarita tizimida ekanini ayting: toʻliq EPSG roʻyxati, istalgan UTM zonasi yoki oʻzingiz aniqlagan proyeksiyadan tanlang va uni Joylashuv, xarita qatlamlari va nuqta bulutlari uchun ishlating.
keywords: proyeksiya, koordinatalar tizimi, crs, epsg, utm, utm zonasi, maxsus proyeksiya, proj4, proj satri, prj, wkt, georeferensiya, xaritaga moslash, xarita konvertatsiyasi, IfcProjectedCRS, mening proyeksiyalarim, kenglik, uzunlik, sharqiy, shimoliy, lambert, gauss-kruger, shtat tekisligi, milliy toʻr
from: 6894c1f2
---

Ba’zi rejalar qisqa roʻyxatda boʻlmagan xarita tizimida chizilgan: UTM zonasi, milliy toʻr yoki matn taʼrifi sifatida yozilgan proyeksiya. {{ui:Oʻlchash}} › {{ui:Koordinatalar tizimi…}} sizga model qaysi tizimdan foydalanishini aytish imkonini beradi.

## Model uchun tizimni tanlash

1. Modelni oching, {{ui:Oʻlchash}} ni, soʻng {{ui:Koordinatalar tizimi…}} ni tanlang.
2. Qidiruv maydoniga yozing. Bularning istalgani ishlaydi:
   - EPSG raqami: `32633` yoki `EPSG:2277`;
   - UTM zonasi: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - nomdagi soʻzlar: `lambert 93`, `mga zone 56`, `texas central`;
   - proyeksiya taʼrifi: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m`, ixtiyoriy ravishda oldida nom bilan (`My grid = +proj=…`);
   - `.prj` faylining matni; yoki {{ui:.prj faylini yuklash…}} dan foydalaning.
3. Natijani tanlang, soʻng {{ui:Bu tizimdan foydalanish}}.

Tanlov modelda saqlanadi (loyihada `CadCraft_CRS` nomli xossalar toʻplami sifatida), shuning uchun u model bilan birga qayta ochiladi. Saqlash uchun modelni saqlang. {{ui:Modeldan olib tashlash}} fayl aytganiga qaytaradi.

Agar taʼrifingiz roʻyxatdagi EPSG tizimi bilan bir xil koordinatalar bersa, BimCraft buni aytadi va shu kodni ishlatadi; bir nechta roʻyxatdagi tizim bir xil hisoblashga ega boʻlsa, boshqalarini ham nomlaydi.

## Mening proyeksiyalarim

Siz joylashtirgan taʼrif yoki yuklagan `.prj` faylni {{ui:Mening proyeksiyalarimda saqlash}} bilan saqlash mumkin. Roʻyxat shu qurilmada (shu brauzerda) saqlanadi va keyingi safar tanlagichni ochganingizda taklif qilinadi.

## Undan kim foydalanadi

- {{ui:Oʻlchash}} › {{ui:Joylashuv}} tanlangan nuqtani model tizimi orqali kenglik va uzunlikka aylantiradi. Ilgari fayl xarita tizimini EPSG kodisiz nomlasa, u eslatma bilan toʻxtardi; endi saqlangan tanlov bilan javob beradi.
- Model ostidagi xarita qatlamlari bir xil tizimdan foydalanadi. Boshqa tizimdagi nuqta bulutlari yoki relyef fayli modelniki bilan taklif qilinadi (quyida).
- {{ui:Sozlamalar}} › {{ui:BimCraft}} › {{ui:Joylashuv}} › {{ui:Boshqa tizimni tanlash…}} {{ui:Joylashuv}} ning yana nimani xabar berishini belgilaydi: istalgan roʻyxatdagi geografik tizimda kenglik va uzunlik yoki istalgan proyeksiyalangan tizimda sharqiy va shimoliy koordinatalar, modelning oʻz tizimidan tashqari.

## Modelni hali xaritada boʻlmagan holat

Agar faylda xarita konvertatsiyasi yoʻq boʻlsa, tizimni tanlash {{ui:Bu modelni xaritaga joylashtiring}} ni ochadi. Uni {{ui:Oʻlchash}} › {{ui:Xarita boshlangʻichi…}} dan ham ochishingiz mumkin.

1. Modelning boshlangʻich nuqtasini tizimda sharqiy va shimoliy koordinatalar sifatida bering yoki kenglik va uzunlikni kiriting va {{ui:Sharqiy va shimoliy koordinatalarga aylantirish}} ni tanlang.
2. Shimoliy tomonga aylanishni (gradus, soat strelkasiga qarshi; 0 degani modelning Y oʻqi shimoliy tomonga qaraydi) va boshlangʻich nuqtaning balandligini bering.
3. Masshtab model va xarita orasidagi birlik farqidan boshlanadi (metrli toʻrda millimetrli model uchun 0.001). Uni faqat yer-toʻr kombinatsiyalangan koeffitsiyenti uchun oʻzgartiring.
4. {{ui:Xaritaga joylashtirish}} ni tanlang. Bitta ortga qaytarish qadami IfcProjectedCRS va IfcMapConversion (IFC4) ni yozadi. Model oʻzi koʻchmaydi.

IFC2X3 faylda ikkala obyekt ham yoʻq. BimCraft bir xil raqamlarni shu standart ruxsat berganicha yozadi: buildingSMART xossalar toʻplamlari `ePSet_MapConversion` va `ePSet_ProjectedCRS` loyihada, saytning kengligi va uzunligi, hamda haqiqiy shimol. Dialog buni aytadi. Saqlash uchun modelni saqlang.

## Model allaqachon xaritada boʻlgan holat

Agar fayl oʻzini allaqachon xaritaga joylashtirgan boʻlsa va boshqa tizimni tanlasangiz, BimCraft soʻraydi:

- {{ui:Faqat Joylashuv koʻrsatganini oʻzgartirish}} faylning oʻz georeferensiyasini saqlaydi va {{ui:Joylashuv}}, xarita qatlamlari va nuqta bulutlari uchun sizning tanlovingizni ishlatadi (model raqamlari shunda yangi tizimda deb oʻqiladi).
- {{ui:Modelni shu tizimga koʻchirish}} georeferensiyani qayta yozadi: boshlangʻich nuqta proyeksiyadan oʻtadi (sharqiy, shimoliy, balandlik, aylanish va masshtab) va IfcProjectedCRS (nomi, datum, proyeksiya, zona, birlik) qayta yoziladi, shuning uchun saqlangan IFC yangi tizimni koʻrsatadi. Yer yuzidagi joy oʻzgarmaydi: boshlangʻich nuqta kenglik va uzunligini saqlaydi. Modeldagi elementlar hech qachon oʻzgarmaydi; faqat georeferensiya oʻzgaradi.

Dialog tanlashdan oldin eski va yangi boshlangʻich nuqtani koʻrsatadi. U yerga va orqaga koʻchirish boshlangʻich nuqtani millimetr aniqligida qaytaradi.

## Boshqa tizimdagi nuqta bulutlari va relyef

Bulut yoki tadqiqot fayli oʻz tizimini (LAS, LAZ, E57, GeoTIFF) yoki hech birini olib yuradi. U modelnikidan farq qilsa, BimCraft {{ui:Modelning tizimiga qayta proyeksiyalash}} ni taklif qiladi. Nuqtalar paketlarda koʻchiriladi (koʻp boʻlsa ishchi jarayonda, sahifa ishlashda qolishi uchun), kompyuteringizdagi fayl tegilmaydi va holat qatori nima qilinganini aytadi. Fayl oʻz tizimiga qaytish uchun uni qayta oching. Allaqachon ochiq bulut uchun bulut panelidagi {{ui:Modelga qayta proyeksiyalash…}} xuddi shuni bajaradi.

Agar fayl tizimni nomlamasa, BimCraft soʻraydi: {{ui:Bu fayl qaysi tizimda?}} — {{ui:Tizimni tanlang…}} bilan tanlang va javob shu fayl uchun shu qurilmada eslab qolinadi. {{ui:Faylning oʻz tizimini saqlash}} nuqtalarni oʻz holicha qoldiradi.

## Taxminiy boʻlgan narsalar

Muammolar dialogda va Muammolar panelida roʻyxatlanadi, hech qachon jimgina emas:

- Tizim uchun moʻljallangan maydon tashqarisidagi joy: raqamlar ishlaydi, lekin buzilish oshadi.
- Setka fayli talab qiladigan datum siljishlari (NADCON, NTv2 va shunga oʻxshash) mavjud emas. Boshqa datumdagi tizimlar EPSG reestri roʻyxatga olgan setkasiz siljish bilan koʻchiriladi va natija koʻrsatilgan aniqlikkacha taxminiy boʻladi; xabar buni metrda beradi.
- Proyeksiya qilib boʻlmaydigan nuqta chetda qoldiriladi va sanaladi; chegaradan katta fayl chegara koʻrsatilgan holda rad etiladi.

:::tip
Xarita koordinatalari xarita konvertatsiyasini talab qiladi. Uni olmagan fayl {{ui:Xarita boshlangʻichi…}} bilan xaritaga joylashtiriladi.
:::

:::note
Setkasiz datumlar orasida koʻchish bir necha metr aniqlikda; Joylashuv natijasi, katalog bilsa, qanchaligini aytadi.
:::
