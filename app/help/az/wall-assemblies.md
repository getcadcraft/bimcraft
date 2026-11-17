---
title: Divar quruluşları və referans ölçüləri
summary: Öz divar tiplərinizi aydın nüvə ilə qat-qat qurun, layihə material kitabxanası saxlayın və divar dəyişəndə yerində qalan üzlərə və mərkəz xətlərinə ölçü verin.
keywords: lod, inkişaf səviyyəsi, lod 200, lod 300, ümumi, divar quruluşu, divar tipi, qatlar, nüvə, nüvə üzü, nüvə mərkəz xətti, boşluq, hava boşluğu, membran, bina örtüyü, material kitabxanası, materiallar, qalınlıq, referans ölçüsü, ölçü, assosiativ, yerləşmə xətti, üzlük, dirək, gipskarton
from: 4ea8fbf5
---

## Nə edəcəksiniz

Qurmaq istədiyiniz divara uyğun divar tipi yaradın: üzlük, örtük, 5½ düymlük dirəkli nüvə və gipskarton, və ya kərpic, hava boşluğu və taxta karkaslı divar. Hansı qatların nüvə olduğunu qeyd edin ki, ölçü və ya yerləşmə xətti nüvəni saxlaya bilsin, ətrafdakı üz qatları isə dəyişsin. Sonra divarları istədiyiniz üzlərə və mərkəz xətlərinə ölçün.

## Divar tipi yaradın

1. Yeni bina başladın və ya IFC modeli açın, {{ui:Çək}} seçimini aktiv edin, sonra {{ui:Divar}} alətini seçin.
2. {{ui:Divar tipi}} siyahısından başlanğıc seçin və {{ui:Divar quruluşları…}} açın. Başlanğıc surət kimi açılır; yeni tipə ad verin.
3. Qatlar siyahının yuxarısındakı xarici tərəfdən aşağıdakı daxili tərəfə doğru gedir. Hər qatın materialını seçin, qalınlığını yazın (layihə vahidləri ilə, və ya `12.7 mm` və ya `1/2"` kimi dəqiq ölçü ilə), funksiyasını seçin (üz, altlıq, struktur, izolyasiya, membran) və **Nüvə** qatlarını işarələyin. Nüvə davamlı bir qrup olmalıdır.
4. {{ui:Təbəqə əlavə et}} qat əlavə edir. {{ui:Boşluq əlavə et}} ventilyasiyası ilə (göstərilməyib, havalandırılmayan, havalandırılan) hava boşluğu əlavə edir. {{ui:Membran əlavə et}} nominal qalınlığı olmayan qat əlavə edir, məsələn bina örtüyü. Oxlar qatı xaricə və ya daxilə köçürür.
5. Önizləmə qatları miqyasda çəkir, nüvə altdan xətt ilə, sətirlər kimi nömrələnmiş, və hər qatı, nüvəni və ümumi qalınlığı ölçür. {{ui:Tipi saxla}}.

Yeni tip Divar aləti siyahısında və seçilmiş divarın **Xassələr** bölməsində görünür. Redaktə etdiyiniz tipi saxlamaq həmin tipi istifadə edən hər divarı dəyişir; {{ui:Tipin surətini yarat}} ayrı tip yaradır və onu yalnız seçdiyiniz divarlara verir. Hər saxlama bir geri qaytarma addımıdır: onunla birlikdə yerini dəyişən divarlar, onların qapı və pəncərələri və onlardan asılı ölçülər də geri qaytarılır.

Boşluq eni artırır. Membran isə eni artırmır: cədvəl onu sonra tapa bilsin deyə tipdə qalır və divarın və ya nüvənin qalınlığına daxil edilmir. Boşluq və ya membran heç vaxt bərk material kimi sayılmır. IFC2X3 kimi saxlanmış faylda membran tipin qeydində saxlanır, lakin fiziki material qatlarından çıxarılır.

## Tipi inkişaf səviyyəsi (LOD) ilə işarələyin

Tip özünün nə qədər işlənmiş olduğunu bildirə bilər. Redaktorda **İnkişaf səviyyəsi (LOD)** sabit miqyas təklif edir: 100, 200, 300, 350, 400, 500, və ya **Təyin edilməyib**. Ümumi divar ("Wall 230 generic") LOD 100 və ya LOD 200-dür; real qatları olan konkret quruluş ("230 clay brick, plastered both sides") LOD 300 və ya daha yüksəkdir. Bu işarəni siz təyin edirsiniz: BimCraft onu özü hesablamır və başlanğıc tiplərdə işarə yoxdur.

İşarə Divar aləti tip siyahısında tipin adının yanında, divarın Xassələrində və [Növü dəyiş](topic:wall-tools) siyahısında görünür; dəyişdirmədən sonra hesabat səviyyənin yuxarı və ya aşağı getdiyini bildirir. **Tipə görə divarlar** cədvəlində və onun CSV faylında görmək üçün Parametrlər › BimCraft › Divarlar bölməsində **Hər divar tipinin LOD-nu divar cədvəlində göstər** seçimini aktiv edin: sonuncu sütun, LOD, əlavə olunur. İşarə IFC faylında tiplə birlikdə saxlanır (tipin `CadCraft_WallType` xassə dəstində, `LOD` xassəsi kimi və tipin qeydinin içində), buna görə faylı yenidən açdıqda da var. Hazırda işarə yalnız divar tiplərindədir, tək elementlərdə və digər element növlərində yoxdur.

## Eskiz mərhələsi üçün ümumi divarlar

Divar aləti tip siyahısı iki **ümumi** divarla başlayır: **Ümumi divar 200 mm (xarici)** və **Ümumi divar 100 mm (daxili)**. Hər biri ümumi materialın bir qatıdır və LOD 200 ilə işarəlidir. Divarların harada olduğunu bildiyiniz, lakin nədən qurulduğunu hələ bilmədiyiniz zaman onlardan istifadə edin.

Tipi LOD 100 və ya LOD 200 ilə işarələnmiş divar hər planda, hər təfərrüat səviyyəsində **bir ştrixlənmiş zolaq** kimi çəkilir: qat yoxdur, qat xətləri yoxdur. Bu, ümumi divarlar və LOD 100 və ya 200 ilə işarələdiyiniz hər öz tipiniz üçün doğrudur. Divarın özü tamdır: qalınlığı, qapı və pəncərələri, otaqları və kəmiyyətləri var.

İşləmək üçün tipini dəyişin (Redaktə › Divarlar › **Növü dəyiş**, və ya Xassələrdə Tip). Divar yenidən çəkilmir: eyni divar yeni tipi alır və hesabat nəyin hərəkət etdiyini bildirir. LOD 300 və ya daha yüksək işarəli tip qatları ilə əvvəlki kimi çəkilir.

İşarədən asılı olmayaraq hər divarı qatları ilə çəkmək üçün: Parametrlər › BimCraft › Divarlar, **LOD 100 və ya LOD 200 tipli divarları bir ştrixlənmiş zolaq kimi çək** seçimini söndürün.

Başlanğıc qapı və pəncərələr də ümumi növlərdir (məhsul yox, ölçü və açılma üsulu). **Hər divar tipinin LOD-nu divar cədvəlində göstər** aktiv olduqda Qapı və Pəncərə cədvəlləri onlar üçün LOD 200 göstərir.

## Tipə həcmlərin hesablanması məlumatı verin

Divar tipi redaktorunda **Həcmlərin hesablanması məlumatı** smetaçının divar haqqında tip üçün bir dəfə bilməli olduğu məlumatı qəbul edir: divarın qurulduğu **vahid** (kərpic və ya blok: adı, uzunluğu, hündürlüyü və eni), **məhlul** (adı və birləşmə qalınlığı) və valyuta kodu ilə **qiymət** (üç hərf, məsələn USD, EUR və ya ZAR) və nəyə görə olduğu: divarın xalis sahəsinin kvadrat metri və ya kvadrat futu, divar uzunluğunun metri və ya futu, və ya hər divar. Hamısı ixtiyaridir.

Məlumat tiplə birlikdə faylda saxlanır. Tipin hər divarı onu bildirir: {{ui:Cədvəllər}} › **Divar tipləri: həcmlərin hesablanması məlumatı** vahidi, məhlulu, qiməti və qiymətin ölçülmüş kəmiyyətə vurulmuş dəyərini göstərir, və TakeoffCraft-a ötürülən həcm siyahısı bunu həmin divar tipinin elementində daşıyır. Tipdə dəyişin, hər divar onu izləyir.

Kərpic və ya blokları və məhlulu saymaq üçün daha üç sahə var:

- **Vahidlərdə tullantı, %** vahidlərin sayına əlavə olunur. Layihənin ölçmə üsulunun rəqəmini istifadə etmək üçün boş buraxın; üsulun belə rəqəmi yoxdursa heç nə əlavə olunmur. Üsul nə deyirsə-desin, tullantı olmaması üçün 0 daxil edin.
- **Əlavə məhlul, %** məhlul götürən oyuqlar və ya deşiklər üçündür. Məhlulun həcminə əlavə olunur. Heç biri yoxdursa boş buraxın.
- **Bu vahiddən qurulmuş qatlar**: bu kərpic və ya blokun təbəqəsi olan hər qatı işarələyin. Boşluqlu divarın ikisi var. Heç biri işarələnməyibsə, nüvə qatları sayılır.

Qiymət sifariş olunan hər vahid üçün, sifariş olunan hər 1000 vahid üçün və ya hər m³ məhlul üçün də ola bilər. Vahidin uzunluğu və hündürlüyü olduqda **Divar tipləri: həcmlərin hesablanması məlumatı** bir təbəqənin hər m²-də (və ya ft²-də) vahidləri, sifariş olunan vahidləri və məhlulun həcmini göstərir; düsturlar [Kərpic, blok və məhlul](topic:plan-schedules-and-pdf#bricks-blocks-and-mortar) bölməsindədir. Tipin bir vahidi var: fərqli vahidlərin iki təbəqəsi (xarici kərpic təbəqəsi və daxili blok təbəqəsi) hələlik bir tipdə sayıla bilməz.

## Nüvəni yerində saxlayın

**Xassələr**də divarın **Yerləşmə xətti**ni nüvə üzünə və ya nüvənin mərkəz xəttinə təyin edin. Sonra üz təbəqəsi əlavə etdikdə və ya qalınlaşdırdıqda bu xətt öz yerində qalır və divar ətrafında böyüyür; künclə ona qovuşan divarlar izləyir, beləliklə düz künclər bağlı qalır.

## Layihə materialları

{{ui:Material kitabxanası…}} layihənin materiallarını siyahılayır: ad, kateqoriya, qatın başladığı qalınlıq, göstərmə rəngi, kəsik doldurma naxışı və qeydlər. Kitabxana layihə ilə birlikdə IFC-də saxlanır. Qat üçün material seçmək o qata materialın standart qalınlığını verir, sonra onu dəyişə bilərsiniz; kitabxananı sonradan redaktə etmək artıq çəkdiyiniz divarların ölçüsünü heç vaxt dəyişmir. Qatın material siyahısından {{ui:+ Yeni material…}} ilə də material yarada bilərsiniz.

## Referans ölçüləri

{{ui:Şərh et}} › {{ui:Referans ölçüsü}}: üfüqi, şaquli və ya düzləşdirilmiş seçin, və istinad: xarici və ya daxili üz təbəqəsi, xarici və ya daxili nüvə üzü, divarın mərkəz xətti və ya nüvənin mərkəz xətti. Birinci divarı seçin, istəsəniz istinadı dəyişin, ikinci divarı seçin, sonra ölçü xəttinin getdiyi yeri klikləyin. Bir divarda iki istinad onun ümumi və ya nüvə qalınlığını ölçür. {{ui:Referans ölçüləri…}} görünüşün ölçülərini siyahılayır, o cümlədən divarını itirmiş olanları, və **Xassələr**, İstinadları yenidən bağla və Sil ilə.

### Bütün planı qaydalarla ölçün

{{ui:Şərh et}} › {{ui:Planı ölçüləndir…}} baxdığınız mərtəbə planının xaricini ölçür: hər istiqamətdə ümumi ölçü, hər xarici kənar boyunca ölçülər sırası (divar uçları, kənara qovuşan divarlar və onların qapı və pəncərələri), sıralar binadan kənarda yerləşdirilir. İstədiyinizi işarələyin, sayını oxuyun, sonra {{ui:Ölçüləri əlavə et}}. Bunlar adi referans ölçüləridir: divarlar hərəkət etdikdə onlarla birlikdə hərəkət edir və hər birini seçə, köçürə və ya silə bilərsiniz; bütün dəst bir geri qaytarma addımıdır və yenidən işlətmək heç birini ikiqat etmir.

Yalnız xarici tərəfi ölçür: binanın içindəki otaqlar, əyri divarlar və plana düzbucaqlı olmayan divarlar əl alətləri üçün qalır, şəbəkə xətləri isə divar deyil, buna görə şəbəkələr arasındakı ölçülər burada yaradılmır. Qoşulmuş köməkçiniz eyni işi `plan_dimension` ilə edə bilər.

Ölçü ekrandakı yerə yox, divarlara bağlıdır: divar hərəkət etdikdə və ya tipi dəyişdikdə dəyər izləyir. Divar silinərsə, ölçü həll olunmadığını bildirir və siz yenidən bağlamayana və ya geri qaytarmayana qədər rəqəm göstərmir. Uzunluq qutusu həmçinin dəqiq yerdə ölçü xətti üçün `10',12'` kimi plan koordinatlarını qəbul edir.

Ölçülər BimCraft-ın çəkdiyi divarlar üçündür, plan görünüşlərində. Hələ hazır deyil: kəsik və fasadlarda ölçülər, qapılara, pəncərələrə və digər komponentlərə ölçülər, və planda və kəsikdə çəkilən quruluş qatları; bax [Hələ hazır olmayanlar](topic:not-built-yet).

## Həmçinin bax

[Divarların çəkilməsi](topic:draw-walls), [Divarı, qapını və ya pəncərəni dəyişin](topic:change-a-wall-or-door), [Xassələr](topic:properties-panel).
