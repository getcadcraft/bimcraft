---
title: Otaq örtükləri və örtük cədvəlləri
summary: Hər otağın döşəməni, divarları və tavanı nə ilə örtüldüyünü deyin, kafelli fartuk kimi zonalar əlavə edin və otaq, divar və zona üzrə örtük cədvəlləri alın: sahələr, kəsiklər daxil olmaqla kafel sayları və altlıq həcmləri ilə.
keywords: örtük, örtüklər, örtük cədvəli, otaq örtükləri, döşəmə örtüyü, divar örtüyü, tavan örtüyü, plintus, kafel, kafellər, kəsilmiş kafellər, kafel sayı, tullantı, altlıq, styajka, arxa lövhə, suvaq, zona, fartuk, dado, rütubətli sahə, daxili, kəmiyyətlər
from: 8c30498c
---

## Nə edəcəksiniz

BimCraft-a hər otağın nə ilə örtüldüyünü bir dəfə deyin. Örtük cədvəlləri sahələri, sifariş ediləcək kafelləri və altlıq həcmlərini verir və model dəyişdikcə özləri də dəyişir.

## Addımlar

1. {{ui:Çək}} aktiv edin, sol paneldə **Cədvəllər** açın və **Otaq örtükləri** klikləyin.
2. **Örtük növləri** altında **Örtük növü əlavə et** klikləyin. Ona ad, növ (Kafel, Təbəqə, Qat və ya Lövhə) və qalınlıq verin. Kafel üçün kafelin uzunluğunu və enini, birləşməni və faizlə tullantı payını yazın. Örtüyün altında nəsə varsa (styajka, arxa lövhə, suvaq qatı), onu **Altlıq** altında adlandırın və qalınlığını verin.
3. **Otaqlar** altında hər otağın döşəmə, divar və tavan örtüyünü seçin. Otaqda plintus varsa, onun adını və hündürlüyünü yazın.
4. **Zonalar** altında otağın başqa örtük alan hissəsi üçün **Zona əlavə et** klikləyin:
   - **divar** zonası döşəmədən iki hündürlük arasında zolaqdır (məsələn, 0-dan 1200-ə qədər kafelli fartuk, dado). O, otağın hər divarında olur; ya da onu yalnız bu divarlarda saxlamaq üçün modeldə otağın divarlarını seçib **Aç** düyməsinə basın;
   - **döşəmə** və ya **tavan** zonası yazdığınız sahədir. O, otağın öz örtüyündən çıxılır.
5. **Saxla** klikləyin. Bu, Geri qaytar-da bir addımdır. Ölçülər layihənin vahidləri ilə yazılır.

## Cədvəllər

Cədvəllər siyahısına dörd yazı əlavə olunur:

- **Otaqlara görə örtüklər**: hər otaq öz döşəmə, divar və tavan örtüyü, onların sahələri ilə və uzunluğu ilə plintus.
- **Divarlara görə örtüklər**: otağın tərəfindəki hər divar hissəsi və örtüyün əhatə etdiyi zolaq, uzunluğu, ümumi sahə, çıxılmalar, xalis sahə və kafellər üçün tam kafellər, kəsilmiş kafellər və sifariş ediləcək kafellər.
- **Zonalara görə örtüklər**: hər zona öz örtüyü, xalis sahəsi, kafelləri və altlıq həcmi ilə.
- **Örtük kəmiyyətləri**: hər örtük üçün bir sətir: xalis sahə, tam və kəsilmiş kafellər, sifariş ediləcək kafellər, altlıq və onun həcmi, örtüyün öz həcmi.

Onları digər cədvəllər kimi qruplaşdırın, cəmləyin, saxlayın və ixrac edin: bax [Cədvəli tərtib etmək, saxlamaq və ixrac etmək](topic:schedule-layouts). Rəqəmə klikləyərək onun mənbəyini seçin: divarın çıxılmaları onun qapılarını və pəncərələrini seçir.

## Sahələr necə ölçülür

- **Divarlar**: otağın tərəfindəki hər divar hissəsi, onun otaq boyu uzunluğu, örtüyün əhatə etdiyi hündürlüklə vurulmuş, hər qapı və pəncərənin o hündürlük daxilində olan hissəsi çıxılmaqla. Otaqdan alçaq divar öz yuxarısına qədər örtülür. Layihənin ölçmə üsulu hansı açılışların çıxılmaq üçün çox kiçik olduğunu müəyyən edir ([Cədvəllər](topic:plan-schedules-and-pdf)).
- **Döşəmələr və tavanlar**: divar üzlərinin daxilində otaq, içindəki adalar çıxılmaqla.
- **Plintus**: otağın divar uzunluğu, qapıların enləri çıxılmaqla.
- **Kafellər**: səthin bir küncündən şəbəkə kimi, kafellər arasında bir birləşmə ilə düzülür. Səthdə tam olan kafel tam kafeldir; qismən olan (kənarda, açılış ətrafında) kəsilmiş kafeldir. Sifariş ediləcək kafellər tam və kəsilmiş kafellərin cəmi, üstəgəl tullantı payı, yuxarı yuvarlaqlaşdırılmış. Hər kəsilmiş kafel yeni kafel kimi sayılır: kəsiklər təkrar istifadə olunmur.
- **Altlıq həcmi**: xalis sahə altlığın qalınlığına vurulmuş.
- **≈** işarəsi olan say sahədən hesablanır, kafel-kafel düzülmür: səthdən yazılı zona çıxılmış və ya çox böyük səth.

## Yaxşı bilmək

- Örtüklər bina faylında saxlanılır (layihədə `CadCraft_Finishes` xassə dəsti). Örtüyü olan hər otaq həm də standart IFC xassə dəsti `Pset_SpaceCoveringRequirements`-i alır ki, digər proqramlar adları oxuya bilsin.
- Kafel düzümü küncdən başlayır. Otağın mərkəzində düzülüş, naxış (balıq sümüyü, kərpic bağı) və kəsiklərin təkrar istifadəsi hesablanmır.
- Əyri divar və divar olmayan otaq sərhədi (otaq ayırıcısı) **Digər sərhəd** kimi, uzunluğu ilə və açılışsız siyahıya salınır.
- Əvvəlki **Örtüklər** yazısı divar tiplərinin örtük qatlarını sadalayır; **Qatlar: sahə və həcm** hər qatlı tipin hər qatını sadalayır. Burada otaq örtükləri bunların üzərinə tətbiq olunur.
- Assistent `finishes_set` ilə örtükləri sizin üçün təyin edə bilər: bax [Assistentlə modeldə işləmək](topic:assistants).
