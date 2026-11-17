---
title: Cədvəllər, ölçülər və planın PDF-i
summary: Çəkdiyinizcə dəyişən qapı, pəncərə, divar və otaq cədvəlləri, planda ölçülər və mərtəbənin planı standart miqyasda PDF kimi saxlanılır.
keywords: cədvəl, qapı cədvəli, pəncərə cədvəli, divar cədvəli, otaq cədvəli, miqdarlar, həcmlərin hesablanması, sahə, csv, elektron cədvəl, ölçülər, ölçü, çap, pdf, plot, miqyas, 1/4", 1:50, vərəq
from: d97cd16e
---

## Nə edəcəksiniz

Çəkdiyiniz binanın nəyə bərabər olduğunu çəkdiyiniz zaman görün: hər ölçüdən neçə qapı və pəncərə, hər növdən nə qədər divar, hər otaq nə qədər böyükdür. Planda ölçülər qoyun və çap və ya göndərmək üçün PDF kimi saxlayın.

## Cədvəllər

{{ui:Çək}} açıq olduqda sol paneldəki **Cədvəllər** eyni anda bir cədvəl göstərir:

- **Qapılar** və **Pəncərələr**: hər biri öz markası ilə (D1, D2 … və W1 …, yerləşdirdikcə verilir), növü, eni, hündürlüyü (və kəsəyi), səviyyəsi və olduğu divar.
- **Divarlar növə görə**: hər divar növü üçün neçə divar olduğu, qalınlığı, ümumi uzunluğu və yan sahəsi **Ümumi sahə**, **Çıxılmalar** və **Xalis sahə** kimi, cəmi ilə.
- **Otaqlar**: nömrə, ad, səviyyə, sahə və perimetr, ümumi sahə ilə.
- **Döşəmələr**: hər döşəmə öz səviyyəsi, növü və qalınlığı ilə, və ümumi sahəsi, çıxılmaları və xalis sahəsi ilə.
- **Örtüklər**: divar növlərinin hər örtük qatı (material və divarın tərəfinə görə) və tavanlar, üzlərin sayı və ümumi, çıxılmalar və xalis sahə ilə.
- **Divar növləri: həcmlərin hesablanması məlumatı**: hər divar növünə bir dəfə daxil edilənlər (vahid, məhlul, norma), divarların sayı, uzunluğu və xalis sahəsi, və norma ölçülən kəmiyyətə vurulmuş. Bax: [Divar yığımları](topic:wall-assemblies).

- **Otaqlar üzrə örtüklər**, **Divarlar üzrə örtüklər**, **Zonalar üzrə örtüklər** və **Örtük kəmiyyətləri**: hər otağı nə örtdüyü, sahələrlə, kəsimlər daxil olmaqla kafel sayları və altlıq həcmləri. Bax: [Otaq örtükləri və örtük cədvəlləri](topic:room-finishes).
- Öz **quraşdırmalarınız**: qruplaşdırdığınız, cəmlədiyiniz və ad altında saxladığınız cədvəl. Bax: [Cədvəli tərtib edin, saxlayın və ixrac edin](topic:schedule-layouts).

Cədvəllər hər redaktə ilə dəyişir. Elementlərini seçmək üçün sətirə və ya tək rəqəmə klikləyin. **CSV yüklə** cədvəli elektron cədvəldə açmaq üçün yükləyir; **Excel yüklə** və **Google Sheets üçün kopyala** onun altındadır. **Otaq örtükləri** və **Spesifikasiya** ([Spesifikasiyanı modeldən yazın](topic:specification)) eyni yerdən açılır.

## Qatın sahəsi və həcmi

**Cədvəllər** siyahısında **Qatlar: sahə və həcm** seçin. Bu, istifadə olunan hər divar, döşəmə, dam və tavan növünün hər qatı üçün bir sətir verir: element, növ və onun LOD-u, qat (divarda xarici tərəfdən, döşəmə, dam və ya tavanda üstdən sayılır), onun materialı və funksiyası, qalınlığı, neçə element, **xalis sahə** və **həcm**.

- Sahə həmin növün elementlərinin xalis sahəsidir, divar növləri, döşəmələr və örtüklərdə olduğu kimi, layihənin ölçmə üsulu ilə ölçülür. Dam yamacda ölçülür; damlar üçün heç bir ölçmə üsulunda qayda yoxdur.
- Həcm həmin sahənin qatın öz qalınlığına vurulmuşudur.
- Növü olmayan döşəmə, dam və ya tavan bir sətirdir: öz qalınlığında bir qat.
- Hava boşluğu öz sahəsi ilə siyahıya salınır və ümumi həcmdən çıxarılır. Membranın sahəsi var, həcmi yoxdur.

Elementlərini seçmək üçün sətirə klikləyin. **CSV yüklə** cədvəli saxlayır.

## Sahələr necə ölçülür

Hər sahə toplanan üç rəqəmdir: ümumidən çıxılmalar çıxılır, nəticə xalisdir. Qayda bu cədvəllərin hər birinin üstündə yazılıb, və bu bir qaydadır: cədvəllər, IFC faylında saxlanılan miqdarlar və TakeoffCraft-a verilən həcmlərin hesablanması hamısı ondan istifadə edir.

- **Divar**: ümumi bir divarın bir üzüdür, mərkəz xətti boyunca uzunluğu ilə hündürlüyü (yuxarısı və ya aşağısı formalı divar üçün həqiqi üz). Hər qapı, pəncərə və digər açılış çıxılır, en və hündürlük, hər açılış bir dəfə.
- **Döşəmə və ya tavan**: ümumi konturu içindəki sahədir. Daxilindəki hər açılış və kəsik bir dəfə çıxılır.
- **Divar örtüyü**: divar növünün hər örtük qatı divarın bir üzünü örtür, divar kimi ölçülür, eyni açılışlar çıxılır. Örtük divarın bir qatıdır: Örtüklərdə siyahıya salınır və divar sahəsinə əlavə edilmir, buna görə qapısı olan divar heç vaxt iki dəfə sayılmır.

Bu **CadCraft defolt** qaydasıdır: hər açılış ölçüsündən asılı olmayaraq çıxılır; divar uzunluqları mərkəz xətti boyunca ölçülür; üzlüklər ölçülmür. Hər layihə başqa üsul seçənə qədər bunu istifadə edir.

## Ölçmə üsulunu seçin

Cədvəlin üstündə **Ölçmə üsulu** BimCraft ilə gələn üsulları sadalayır, **Üsul faylı yüklə** isə ofisinizin öz üsulunu götürür. Seçim IFC faylında saxlanılır, bir geri-alma addımı kimi, və üç şey onun ardınca gedir: cədvəllər, faylda saxlanılan xalis miqdarlar və TakeoffCraft-a verilən həcmlərin hesablanması. Hər cədvəlin üstündəki qayda üsulla başlayır, onun mənbəsi, mənbənin oxunduğu tarix və **Kəmiyyət mühəndisi tərəfindən yoxlanılmayıb** sözləri ilə.

Üsul fayl kimi kiçik faktlar toplusudur, proqram kodu deyil. Hər kəmiyyət üçün o deyir:

- **çıxılan ən kiçik açılış**: məsələn, 0.5 m² və ya daha kiçik açılış divar sahəsində qalır;
- **divar birləşmələri necə ölçülür**: mərkəz xətti boyunca; və ya başqa divara qarşı bitən divar həmin divarın üzünə qədər ölçülür; və ya başqa divara birləşən hər divar ucu yaxın üzə qədər ölçülür;
- **üzlüklərin örtük üçün ölçülüb-ölçülmədiyi** (örtüyün açılışlara qayıdışları), sahə kimi və ya sığ olduqda uzunluq kimi. Üzlüyün dərinliyi divarın qalınlığının yarısı qəbul olunur;
- **daşlama haqqında nə dediyi**: necə ölçüldüyü və bildirdiyi hər hansı tullantı və ya məhlul payı.

BimCraft ilə gələn üsullar:

| Üsul | Divarlar: çıxılan ən kiçik açılış | Divar örtükləri | Tavanlar | Daşlama |
|---|---|---|---|---|
| CadCraft defolt | hər açılış | hər açılış | hər kəsik | norma yoxdur |
| RICS NRM 2 (Birləşmiş Krallıq), 2-ci nəşr 2021 | 0.5 m² və ya daha kiçik qalır | 1 m² və ya daha kiçik qalır | 1 m² və ya daha kiçik qalır | sahəyə görə; faiz göstərilməyib |
| AAQS Afrika üçün Standart Üsul 2015 | 0.5 m² və ya daha kiçik qalır | 0.5 m² və ya daha kiçik qalır | 0.5 m² və ya daha kiçik qalır | sahəyə görə; xalis ölçülür, 0% tullantı |
| IS 1200 (Hindistan), 1976, kərpic işi | 0.1 m² və ya daha kiçik qalır | defolt (aşağıya baxın) | defolt | həcmə görə |
| BIA Technical Note 10 (ABŞ), 2009 | hər açılış | defolt | defolt | vahidlərdə 5% tullantı, məhlulda 15% |

Üsulya arxalanmazdan əvvəl bu məhdudiyyətləri oxuyun:

- **Onların heç biri kəmiyyət mühəndisi tərəfindən yoxlanılmayıb.** Hər biri adı çəkilən mənbəni oxumaq və onun rəqəmlərini onları verən bəndlə yazmaqla hazırlanıb. Əgər siz kəmiyyət mühəndisisinizsə və birini yoxlaya bilirsinizsə, tətbiqin yaradıcıları sizdən eşitmək istəyir.
- Qaydanı mənbədən oxumaq mümkün olmayan yerlərdə üsul bunun üçün **təsdiqlənməyib** deyir və CadCraft defolt istifadə olunur. BimCraft ilə gələn heç bir üsulun divar birləşmələri, üzlüklər və ya döşəmələr üçün təsdiqlənmiş qaydası yoxdur, buna görə onlar bütün üsullarda defolt yolla ölçülür.
- IS 1200 açılışları suvaqda üç zolaqla çıxır. Üsul faylı hələlik zolaqları saxlaya bilmir, buna görə divar örtükləri həmin üsulda defoltu istifadə edir və qayda bunu deyir.
- Cənubi Afrikanın Tikinti İşlərinin Ölçülməsi üzrə Standart Sistemi bunların arasında **deyil**: onun mətni oxuna bilməyib. Afrika üçün AAQS üsulu deyir ki, o, həmin sistemin 1991-ci nəşri əsasında hazırlanıb, amma bu, fərqli sənəddir.
- BIA Technical Note 10 sənaye smeta qeydidir, standart ölçmə üsulu deyil.
- Açılış tam ən kiçik ölçüdədirsə, üsulun öz sözlərinə ("not exceeding", "less than") uyğun gəlir. Ondan 10 000 hissədə 2 hissədən az fərqlənən ölçülər dəqiq həmin ölçü sayılır.
- Üsul altında faylda divarın xalis yan sahəsi və döşəmənin və ya tavanın xalis sahəsi üsulu izləyir, və miqdarlar dəsti onu adlandırır. Faylda ümumi sahələr və həcmlər çəkildiyi kimi qalır.

**Üsul seçimindəki qeydlər** mənbənin nəyi açıq buraxdığını deyir. **Mənbəni açın** sənədə gedir.

### Ofisinizin öz üsulu

Üsul faylı `cadcraft-measurement-method` formatında JSON-dur. Onun hər dəyəri bu dəyərin gəldiyi bəndi adlandırır; bənd olmayan dəyər rədd edilir. Fayl yüklənəndə yoxlanılır, yanlış sahə adlandırılır və keçməyən fayldan heç nə istifadə olunmur. Seçildikdə fayl layihənin içində saxlanılır, beləliklə layihə başqa kompüterdə eyni açılır. Onun ID-si sizin öz adınızdır (tətbiqlə birlikdə gələn üsulun ID-si olmaya bilər).

## Kərpic, bloklar və məhlul

**Divar növləri: həcmlərin hesablanması məlumatı** vahid uzunluğu və hündürlüyü olan hər divar növünün vahidlərini və məhlulunu hesablayır (bax [Növə həcmlərin hesablanması məlumatı verin](topic:wall-assemblies#give-a-type-its-takeoff-data)). Bunlar dəqiq hesablanmış formulalardır:

- **Bir yarpaqın sahəsinə düşən vahidlər** = 1 / ((vahidin uzunluğu + birləşmə) × (vahidin hündürlüyü + birləşmə)). 10 mm birləşməli 215 × 65 mm kərpic: 1 / (225 × 75 mm) = m² üçün 59.26.
- **Yarpağın eninə düşən vahid enləri** = (yarpağın qalınlığı + birləşmə) / (vahidin eni + birləşmə), tam ədədə yuvarlaqlaşdırılmış, ən azı 1. 102.5 mm qalınlıqlı yarpaq 102.5 mm kərpicdən 1-dir; eyni kərpiclə 215 mm divar 2-dir.
- **Vahidlər** = sahəyə düşən vahidlər × eninə düşən vahid enləri × divar üzünün xalis sahəsi, növün kərpic yarpaqları üzrə toplanmış.
- **Sifariş ediləcək vahidlər** = vahidlər × (1 + tullantı % / 100), ən yaxın tam vahidə yuxarı yuvarlaqlaşdırılmış. Tullantı növdə daxil edilmiş olandır; heç biri daxil edilməyibsə, üsulun bildirdiyi (əgər bildirirsə); əks halda 0%.
- **Məhlul** = xalis sahə × yarpağın qalınlığı, vahidlərin həcmi (vahidlər × uzunluq × hündürlük × en) çıxılmaqla, sonra növdə daxil edilmiş çuxur (frog) və ya deşiklər üçün əlavə faiz, sonra üsulun bildirdiyi pay əlavə olunmaqla. Vahidin enini tələb edir.

Qəbul olunanlar: növün hər daşlama yarpağı növün bir vahidindən qurulur; vahidin enindən qalın yarpaq o qədər vahid eni sayılır, hər biri uzununa qoyulmuş yarpaq kimi, buna görə kəsilmiş vahidlər, bağlayıcılar və xüsusi formalar ayrıca sayılmır. Vahidin qurulduğu kimi heç bir qat işarələnməyibsə, əsas qatlar yarpaq qəbul olunur və cədvəlin üstündəki qeyd bunu deyir. **Miqdar** dərəcənin nə üçün olduğuna vurulmuş dərəcədir: indi bu da sifariş ediləcək vahid, 1000 sifariş ediləcək vahid və ya m³ məhlul ola bilər.

Markalar elementlərin IFC etiketidir: birini **Xassələr**də (Etiket) dəyişin və cədvəl izləyir. Hər IFC modeli üçün, çəkilmiş və ya çəkilməmiş, [Miqdarları cəmləyin, elementləri sadalayın və məkanların cədvəli](topic:quantity-totals) hər xassəni cəmləyir.

## Ölçülər

Plan çəkilmiş hər divarın uzunluğunu xarici üzü boyunca göstərir (daxili divar: bir üzü boyunca) və qapı və ya pəncərəsi olan divar üçün künclərdən hər açılışa qədər zəncir. {{ui:Ölçülər}} modelin alətlər panelində onları gizlədir və yenidən göstərir.

## Planı PDF kimi saxlayın

1. İstədiyiniz səviyyəni göstərin və **Səviyyələr** panelində vahidləri təyin edin.
2. Modelin alətlər panelində {{ui:Çap}} klikləyin.
3. BimCraft "<file> — <level>.pdf" saxlayır: plan qara-ağ, səhifəyə sığan ən böyük standart miqyasda (Letter-də fut və düymlə 1/4" = 1'-0", 1/8" = 1'-0" …; A4-də millimetrlə 1:50, 1:100 …), divarları doldurulmuş, qapılar, pəncərələr, otaq adları və sahələri, ölçülər və səviyyə, fayl, kəsik hündürlüyü, tarix və miqyası göstərən başlıq zolağı ilə.

PDF xətlər və mətn kimi çəkilir, buna görə istənilən zoomda kəskin qalır və mətni axtarıla bilir.

## Yaxşı bilmək

- Cədvəllər yalnız BimCraft alətləri ilə çəkdiyinizi sadalayır. Başqa proqramdan gələn qapı və pəncərələr əvəzinə Miqdarların cəmi bölməsində göstərilir.
- İşi qiymətləndirmək üçün miqdarları TakeoffCraft-a verin: bax [Miqdarlar TakeoffCraft-a](topic:takeoff). CSV yükləmə elektron cədvəl üçün qalır.
