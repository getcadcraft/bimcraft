---
title: Model hujjatlari
summary: Spetsifikatsiya yoki tavsifni bir marta shablon sifatida yozing, miqdorlar, xususiyatlar va teglar uchun maydonlar bilan, va ochiq IFC dan PDF yoki Word hujjat sifatida toʻldiring.
keywords: hujjat, hujjatlar, spetsifikatsiya, spec, tavsif, shablon, markdown, hisobot, word, docx, pdf, miqdorlar, jadval, mutaxassislik, eshik jadvali, pardozlar, documentcad
from: 2b0c9156
---

## Nima qilasiz

Shablon — qoʻsh figurali qavslar ichida maydonlari bor Markdown matni. BimCraft maydonlarni ochiq modeldan toʻldiradi (sanoqlar, turlar boʻyicha miqdorlar, xususiyatlar, sizning [teglaringiz](topic:tags-and-schedules)) va natijani PDF, Word hujjat (.docx) yoki Markdown sifatida saqlaydi.

## Qadamlar

1. IFC modelni oching.
2. Chap panelda, {{ui:Miqdorlar}} ostida {{ui:Model hujjatlari}} ni oching.
3. Shablonni tanlang: {{ui:Eshiklar va furnitura}} yoki {{ui:Devorlar, qoplamalar va pardozlar}}, yoki oʻzingiznikini uchun {{ui:Shablonni yuklash (.md)…}}.
4. Agar shablon model hali aniqlamagan teglarni oʻqisa, {{ui:Bu shablon teglarini qoʻshish}} ni bosing, soʻng {{ui:Teglar}} ostida elementlarni teglang.
5. Matnni istaganingizcha oʻzgartiring va {{ui:Hujjatni koʻrsatish}} ni bosing.
6. {{ui:PDF}} (avval A4 yoki Letter ni tanlang) yoki {{ui:Word (.docx)}} ni bosing.

## Nimani koʻrasiz

- Tugmalar ostida toʻldirilgan hujjat, uning jadvallari bilan.
- Maydonni oʻqib boʻlmaganda ogohlantirishlar roʻyxati (aniqlanmagan teg, model boʻlmagan xususiyat, hech qachon yopilmagan blok); bunday maydon `[?…]` shaklida chop etiladi.
- PDF sahifalari: hujjat sarlavhasi va har bir sahifa pastida "1-sahifa (jami 3)" kabi raqam; uzun jadvallar sarlavha qatori bilan keyingi sahifaga oʻtadi.

## Maydonlar

| Maydon | Beradi |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | loyihaning nomi va tavsifi, faylning nomi, bugungi sana |
| `{{count IfcDoor}}` | nechta eshik |
| `{{sum IfcWall NetSideArea}}` | yigʻindi, birligi bilan |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | arifmetika (`+ - * /` va qavslar) kvadrat qavs ichidagi hadlar ustida: `[sum …]`, `[count …]` va each ichida `[qty Width]`. `round n` oʻnlik kasrlar sonini belgilaydi, `unit` birlik qoʻshadi. Oʻqib boʻlmaydigan narsa yoki nolga boʻlish `[?…]` deb chop etiladi va ogohlantiradi |
| `{{qty IfcWall NetSideArea by Type}}` | jadval: har bir tur uchun bir qator, soni va yigʻindisi bilan, va jami qatori |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | jadval, har bir element uchun bir qator |
| `{{tag Finish}}` | siklda elementning qiymati; boshqa joyda ishlatilgan har bir qiymat (Oak, Paint) |
| `{{tags}}` | teg taʼriflari jadval sifatida |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | matn har bir element uchun bir marta; `{{else}}` dan keyingi qism element boʻlmasa |
| `{{#group IfcWall by Type}} … {{/group}}` | matn har bir tur uchun bir marta, `{{value}}`, `{{count}}`, `{{sum Length}}` va ichida oddiy `{{#each}}` bilan |

`{{#each}}` ichida: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC tegi), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementning oʻz qiymati, birligi bilan).

Sinf bir nechta boʻlishi mumkin (`IfcDoor|IfcWindow`) yoki har bir element (`*`). Ularning istalganini `where` bilan toraytiring: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Shartlar `=`, `!=`, `~` (ichida bor), `>`, `<`, `>=`, `<=`, `has` va `hasnot`; bir nechtasini `and` bilan bogʻlang; boʻshliqli qiymatni qoʻshtirnoq ichiga oling. `sort Name` siklni tartiblaydi.

## Jadvallar va hujjatdagi spetsifikatsiya

`{{schedule doors}}` model jadvalini ofis tuzilmangizda jadval sifatida chop etadi: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, yoki Jadvallarda saqlagan tuzilmangizning nomi. `{{specification}}` loyihaning spetsifikatsiyasini chop etadi. **Ishchi chizma jadvallari** va **Spetsifikatsiya** shablonlari ulardan foydalanadi. Oldindan koʻrishda bunday jadvalning raqamini bossangiz, undan kelgan elementlar tanlanadi. Qarang: [Jadvalni joylashtiring, saqlang va eksport qiling](topic:schedule-layouts) va [Spetsifikatsiyani modeldan yozing](topic:specification).

## Bilish foydali

- Maydon ichki nomni (Name, Type, Storey, Class, Material, Mark), tegni (`tag:Fire rating` yoki uning nomi), xususiyatni (`Pset_WallCommon.FireRating`) yoki faqat xususiyat nomini (`NetSideArea`, `Width`) bildiradi: yalang nom har bir elementning oʻz toʻplamini oʻqiydi, avval miqdor toʻplamlari, shuning uchun eshikdagi `Width` eshikning kengligi, devorning qalinligi emas. `where` ichida yalang nom tanlangan elementlarning koʻpchiligida boʻlgan toʻplamni oʻqiydi.
- Miqdorlar — fayldagi miqdor toʻplamlari nima desa shu (BimCraft chizgan narsalari uchun yozadi); birliklar faylning birlik sozlamalaridan olinadi.
- Maydon soʻzlari (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) har bir tilda ingliz tilida qoladi. Namuna shablonlar inglizcha.
- Modeldan kelgan matn formatlashga aylanmaydi: nomdagi `*` yoki `|` oddiy belgi sifatida chop etiladi.
- Oʻzgartirgan shablonni {{ui:Ushbu brauzerda saqlash}} (faqat shu brauzerda) yoki {{ui:Shablonni yuklab olish}} bilan saqlang.
- Har bir mutaxassislikning shablonlari Kutubxonada yashaydi (tur: Hujjat shabloni). Model hujjatlarida **Kutubxonadan…** ni tanlang, birini tanlang: uning matni va u oʻqiydigan teglar keladi; uni xohlaganingizcha tahrirlang. Oʻz shabloningizni Kutubxonaga joylash, boshqa elementni yuklash bilan bir xil. Hali qurilmagan: hisoblar, sanash va yigʻindidan tashqari hisob-kitoblar.
- PDF matni standart PDF shriftlaridan foydalanadi: Gʻarbiy Yevropa matnidan tashqaridagi belgi "?" deb chop etiladi va holat satri nechtasi ekanini aytadi.
