---
title: IFC modelni kesim tekisligi bilan kesish
summary: 3D modelni yuqoridan, oldindan yoki yondan kesing, yoki faqat kesim qutisi ichidagini yoki qiyshiq yuzli bir nechta qutidan iborat hajm ichidagini qoldiring; ichkarini koʻrish uchun. Kesimni sudrab yoki yozib siljiting, uni teskari qiling va kesimda nima koʻrinishini tanlang.
keywords: kesim, kesim tekisligi, kesim qutisi, ushlagichlar, sudrash, chekka, tanlov qutisi, kesish qutisi, kesish, kesim qatlami, qavat rejasi, reja kesimi, fasad, ichki, ichki boʻshliq, teskari, siljish, kesim hajmi, pogʻonali kesim, L shaklli, egish, qiya kesim, qiya tekislik, qoʻshimcha tekislik
from: 6315e71a
---

## Nima qilasiz

Bitta tekislik bilan IFC modelni kesib, uning ichini koʻring: reja uchun tepadan yoki bino orqali kesim uchun oldindan yoki yondan.

## Qadamlar

1. IFC modelni oching. Qarang: [IFC modelni oching va 3D da koʻrib chiqing](topic:open-ifc-model).
2. Asboblar panelidagi {{ui:Kesim}} tugmasini bosing yoki {{key:X}} tugmasini bosing. Model yarmigacha kesiladi va asboblar paneli ostida panel paydo boʻladi.
3. Qayerdan kesishni tanlang: {{ui:Yuqori}}, {{ui:Old}} yoki {{ui:Yon}}. {{ui:Old}} va {{ui:Yon}} koʻrinishni ham kesimga qaratadi.
4. Kesimni siljiting: {{ui:Siljish}} suruvchisini suring yoki qutiga metrda masofa kiriting va {{key:Enter}} ni bosing. Millimetrda ham kiritishingiz mumkin, masalan `1200 mm`.
5. Kesimning boshqa tomonini saqlash uchun {{ui:Teskari}} ni bosing.
6. Uning xususiyatlarini koʻrish uchun kesimdagi elementni bosing.
7. Kesimni olib tashlash uchun {{ui:Oʻchiq}} ni bosing, yana {{ui:Kesim}} ni bosing yoki {{key:X}} ni bosing.

## Kesim qutisi

Shu panelda {{ui:Quti}} ni bosing, faqat qutining ichidagini qoldirish uchun. {{ui:X}}, {{ui:Y}} va {{ui:Z}} ning har birida ikkita suruvchi bor: quti qayerdan boshlanishi va qayerda tugashi, modelning chetidan metrda. Qiymatlar ularning yonida koʻrinadi.

- {{ui:Tanlov atrofidagi quti}} qutini tanlagan elementlaringiz atrofiga moslaydi va ularga yaqinlashtiradi. Har tomonda 300 mm joy qoldiradi; uni {{ui:Sozlamalar}} › {{ui:BimCraft}} › {{ui:Tanlov atrofidagi zaxira}} da oʻzgartiring.
- Elementlar tanlangan boʻlsa, {{ui:Koʻrsatish}} › {{ui:Tanlov atrofida kesim qutisi}} yoki {{key:Shift+X}} xuddi shuni bir qadamda bajaradi, hatto kesim yoqilmagan boʻlsa ham.
- Qutidagi **ushlagichlar** uni koʻrsatkich bilan siljitadi: yuz oʻrtasidagi kvadratni sudrang, shu yuzni siljitish uchun; qirra oʻrtasidagisini, u yerda tutashgan ikki yuzni siljitish uchun; burchagidagisini, uchtasini siljitish uchun. Suruvchilar ularga ergashadi. {{ui:Yuqori}} rejimida burchak qutini reja boʻylab, {{ui:Old}} yoki {{ui:Yon}} rejimida esa fasad boʻylab siljitadi.
- {{ui:Butun model}} qutini yana butun modelga ochadi.
- {{ui:Yuqori}}, {{ui:Old}} yoki {{ui:Yon}} uni yana bitta tekislikka qaytaradi.

## Bir nechta qutidan hajm, qiyshiq yuzlar va qoʻshimcha tekisliklar

Quti har doim kerakli shakl boʻlavermaydi: pogʻonali kesim, L shaklli qanot yoki panjaraga nisbatan toʻgʻri boʻlmagan devor boʻylab kesim.

1. {{ui:Quti}} da {{ui:Quti qoʻshish}} ni bosing. Endi kesim **istalgan** qutining ichidagini saqlaydi, shuning uchun ikkita quti pogʻonali yoki L shaklli hajm hosil qiladi. Yonidagi roʻyxat qaysi qutini suruvchilar oʻzgartirishini koʻrsatadi ({{ui:Quti 1}}, {{ui:Quti 2}}…); {{ui:Bu qutini olib tashlash}} tanlangan qutini olib tashlaydi. Hajmda 8 tagacha quti boʻlishi mumkin.
2. Tanlangan qutini shakllantirish uchun {{ui:Qiyalik va tekisliklar}} ni oching:
   - {{ui:Yuz}} ni tanlang va har bir yoʻnalishda qancha egilishini gradusda kiriting (80 gacha). Yuz oʻrtasi atrofida buriladi; boshqa yuzlar suruvchilar qoʻygan joyda qoladi. {{ui:Tekislash}} uni joyiga qaytaradi.
   - {{ui:Tekislik qoʻshish}} qutini yana bitta tekislik bilan kesadi. {{ui:Yuzlar}} kesib tashlangan tomon qaragan yoʻnalish boʻlib, X dan Y tomon gradusda; {{ui:Qiyalik}} esa u yuqoriga qancha burilishi (0 tik tekislik uchun, 90 gorizontal tekislik uchun); {{ui:Siljish}} esa tekislikning qutining oʻrtasidan metrda qancha uzoqligi. × uni olib tashlaydi. Bitta quti 6 tagacha qoʻshimcha tekislikka ega boʻlishi mumkin.
3. Hajm qattiq jismlarni kesganda, kesilgan yuzlar oldingidek toʻldiriladi, shu jumladan ikki quti pogʻonada uchrashgan joyda ham.

:::tip
Agar kontur yoʻqolib, hech narsa qolmasa, egilishlar yoki tekisliklar shu qutida hech narsa qoldirmaydi; panel buni aytadi. Yuzni orqaga egilting yoki tekislik siljishini oʻzgartiring.
:::

## Saytida burilgan bino

Koʻp modellarda bino fayl oʻqlariga (haqiqiy shimol, umumiy koordinatalar) nisbatan burchak ostida turadi. Devorlar burchak ostida boʻlsa, yangi kesim bino oʻziga nisbatan toʻgʻri boshlanadi: {{ui:Old}}, {{ui:Yon}} va quti oʻz devorlari boʻylab yoʻnaladi, va kesim panelidagi {{ui:Binoga nisbatan toʻgʻri}} yoqilgan boʻladi. Modelning oʻqlarini olish uchun uni bosing, qaytish uchun yana bosing (holat satri binoning qancha burilganini aytadi). **Sozlamalar › BimCraft › Saytida burilgan bino › Saytga qoʻyilganidek** tanlansa, kesimlar va koʻrinishlar oʻrniga modelning oʻqlaridan boshlanadi. Qarang: [Sozlamalar](topic:settings).

## Nimani koʻrishingiz kerak

- **Yuqori** kesimdan pastda qolganini saqlaydi, shuning uchun xonalarga tepadan qarab koʻrasiz. Siljish modelning pastki qismidan yuqoriga qarab oʻlchanadi.
- **Old** kesimning orqasida qolganini, oldindan qaralganda saqlaydi; **Yon** esa undan narigini yondan koʻrinishda saqlaydi. Siljish modelning oldi yoki yonidan oʻlchanadi.
- Ingichka rangli kontur tekislik qayerdaligini koʻrsatadi.
- Tekislik devor, plita yoki boshqa qattiq jismni kesgan joyda, kesilgan yuz chizilgan kesim kabi quyuq rangda toʻldiriladi. Paneldagi {{ui:Toʻldirish}} buni yoqadi va oʻchiradi.
- Burchakdagi koʻrinish kubi modelni kesimga istalgan tomondan qarash uchun buradi.
- Bosish koʻrinadigan narsani tanlaydi: kesib tashlangan narsani tanlab boʻlmaydi.

## Keng tarqalgan xatolar

- **Hech narsa oʻzgarmadi.** Kesim tom ustida yoki model tashqarisida boʻlishi mumkin. Suruvchini suring yoki kichikroq siljish kiriting.
- **Siljish orqaga qaytib ketdi.** Modeldan tashqaridagi masofa uning oxiriga koʻchiriladi, holat satri buni aytadi.
- **Muammo (BCF) hajmning faqat bir qismini koʻrsatadi.** Muammo bitta qutini uning egilgan yuzlari va tekisliklari bilan saqlaydi: hajmning birinchi qutisi. Muammo yaratganingizda holat satri buni aytadi.
- **Kesim boʻsh.** {{ui:Toʻldirish}} oʻchiq: devor, plita va boshqa qattiq jismlarning kesilgan yuzlarini toʻldirish uchun uni bosing.
- **Toʻldirilgan kesim dogʻli koʻrinadi yoki bir qismini qoldiradi.** Toʻldirish yopiq qattiq jismlarni talab qiladi; faylda shakli yopiq boʻlmagan element (yakka varaq, daraxt barglari) boʻyalmasdan qoldiriladi. Turli rangdagi qismlardan iborat element (ramka va uning oynasi) qismlari bir-biriga yopishganda toʻldiriladi.
- **Kesim paneli qayerda?** U kesadigan 3D koʻrinishning tepasida turadi: {{ui:Boʻlish}} da 3D yarmida, faqat {{ui:Reja}} da esa chizma panelining ostida. Qisqa koʻrinishda u aylanib boradi.

## Keyingisi

- [Qavatlar, boʻshliqlar va qirralarni koʻrsatish va yashirish](topic:storeys-and-spaces)
- [DWG yoki DXF chizmasini 3D da koʻrish](topic:dwg-in-3d) — 3D dagi chizmalarda ham xuddi shu kesim tekisligi boʻladi.
