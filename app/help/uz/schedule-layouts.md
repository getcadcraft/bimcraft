---
title: Jadvalni joylashtirish, saqlash va eksport qilish
summary: Jadvalni guruhlang, unga oraliq va umumiy yigʻindilar bering, xossadan oʻqiladigan ustun qoʻshing, uni fayl ichida sozlama sifatida saqlang va elektron jadval (.xlsx), onlayn jadvalga joylashtirish uchun matn yoki CSV sifatida eksport qiling. Ofis standarti jadval aytmagan narsalarni toʻldiradi.
keywords: jadval joylashuvi, guruhlash, oraliq yigʻindi, umumiy yigʻindi, sarlavhalar, ofis standarti, standart siyosatlar, sozlama, eshik jadvali qavatlar boʻyicha, yongʻinga chidamlilik, temir-tersak, xlsx, ish kitobi, onlayn jadval, joylashtirish, csv, eksport, elektron jadval, elementlar, jadvaldan tanlash, raqam
from: 95dfd801
---

## Nima qilasiz

Oddiy jadvalni ofisingiz chiqaradigan jadvalga aylantiring: sath, tur yoki xona boʻyicha guruhlangan, oraliq va umumiy yigʻindilar bilan, kerakli ustunlar bilan, oʻz nomi ostida. Keyin uni elektron jadvalga yuboring. Har bir qator va har bir raqam hali ham qaysi elementlardan kelganini biladi.

## Qadamlar

1. {{ui:Chizish}} ni yoqing va chap panelda **Jadvallar** ni oching. Jadval tanlang, masalan **Eshiklar**.
2. Jadval ustida **Guruhlash** (jadval ustuni, masalan Qavat yoki Tur, yoki **Guruhlashsiz**) va **Yigʻindilar** (**Yigʻindisiz**, **Bitta yigʻindi** yoki **Oraliq yigʻindilar va umumiy yigʻindi**) ni tanlang. **Sozlanganidek** tanlovni saqlangan sozlamaga yoki ofis standartiga qoldiradi.
3. Elementlardan oʻqiladigan ustun qoʻshish uchun jadval ostiga xossa yoki yorliq nomini kiriting (masalan `FireRating`, `Pset_DoorCommon.FireRating` yoki `Ironmongery` kabi yorliq nomi) va **Ustun qoʻshish** ni bosing. BimCraft avval elementning oʻz xossalar toʻplamlarini, keyin uning turini oʻqiydi. Hech bir elementda qiymat boʻlmasa, shuni aytadi; qiymat oʻrnatilgach ustun oʻzi toʻladi.
4. Nom kiriting (masalan "Qavatlar boʻyicha eshik jadvali") va **Sozlama sifatida saqlash** ni bosing. Sozlama bino faylida saqlanadi va jadvallar roʻyxatiga oʻz nomi bilan qoʻshiladi. U modeldagi har bir oʻzgarishni kuzatadi. **Bu sozlamani olib tashlash** uni yana olib tashlaydi. Ikkalasi ham Ortga qaytarishda bitta qadam.

## Qaysi narsadan kelganini tanlash uchun raqamni bosing

Har qanday qatorni yoki har qanday yakka raqamni bosing, uning ortidagi elementlarni planda va 3D da tanlash uchun:

- qator oʻz elementlarini tanlaydi;
- oraliq yoki umumiy yigʻindi uning yigʻadigan hammasini tanlaydi, guruh sarlavhasi esa oʻz guruhini;
- oʻz elementlari bor raqam ularni tanlaydi: devor turining **Chegirmalari** uning eshiklari va derazalarini, xonaning devor maydoni esa uning devorlarini.

Modeldan yaratilgan hujjatda ham xuddi shunday: oldindan koʻrishda jadvalning raqamini bosing.

## Eksport

- **Excelni yuklab olish** .xlsx ish kitobini saqlaydi. Uzunliklar, maydonlar, hajmlar va sonlar ustun koʻrsatadigan birlikda haqiqiy raqamlar (futlar va dyuymlar matn boʻlib qoladi). Ikkinchi varaq, **Elementlar**, har bir qator uchun unga tegishli elementlarning GlobalId larini roʻyxatlaydi.
- **Google Sheets uchun nusxalash** jadvalni tabulyatsiya bilan ajratilgan matn sifatida buferga qoʻyadi. Google Sheets da A1 katakchani bosing va qoʻying. **Yangi Google Sheet ochish** Googlening boʻsh jadval uchun manzili `sheets.new` ni sizning Google hisobingizda ochadi. BimCraft Google ga kirmaydi va u yerga hech narsa yubormaydi: qoʻyish sizning ishingiz.
- **CSV ni yuklab olish** jadvalni ekranda qanday joylashgan boʻlsa, shunday saqlaydi.

## Ofis standarti

Ofis bir marta jadvallari qanday joylashtirilishini aytishi mumkin. **Standart siyosatlar** qoʻshimchasini yoqing ([Standart siyosatlar](topic:default-policies)) va **Sozlamalar › Global › Standart siyosatlar › Jadval joylashuvi (ofis standarti)** da belgilang:

| Siyosat | Nima qiladi |
|---|---|
| Jadvallarni guruhlash | Qavat, Tur, Xona yoki guruhlashsiz, bunday ustuni boʻlgan har bir jadval uchun |
| Jadvallardagi yigʻindilar | Yigʻindisiz, oxirida bitta yigʻindi yoki har bir guruh ostida oraliq yigʻindi va umumiy yigʻindi |
| Jadval sarlavhasi | Shablon, masalan `{project}: {schedule}` |
| Ustun sarlavhalari | Yozilganidek, KATTA HARFLARDA yoki Bosh Harflar Bilan |

Standart har bir jadvalga qoʻllanadi, kim sozlasa ham: panelda oddiy jadvallar, saqlangan sozlama, AI yordamchisi sozlagan jadval, eksportlar va hujjatdagi jadvallar. Oʻz guruhlash, yigʻindi yoki sarlavhasini bildiradigan sozlama ularni saqlaydi; standart qolganini toʻldiradi. Panel ofis standarti qaysi qismlarni oʻrnatganini koʻrsatadi. Siyosatlar boshqalari bilan birga Standart siyosatlar faylida koʻchiriladi.

## Foydali maʼlumotlar

- Sozlama manba jadvalini va uning ustunlarini nomlaydi; raqamlar unda saqlanmaydi. Raqamlar har safar modeldan oʻqiladi.
- Elementlar qatori boʻlmagan roʻyxatlar (devor yigʻmalari va material legendasi) bu yerda joylashuv va eksportga ega emas.
- AI yordamchisi bularning hammasini siz uchun qilishi mumkin: [AI yordamchisi modelingiz bilan ishlashi](topic:assistants) ga qarang.
