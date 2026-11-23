---
title: 0.7-də yeniliklər (əvvəlki)
summary: BimCraft bir neçə mərtəbə üzrə divarlar və Bu mərtəbəni kopyala, PDF-lərdən və skanlardan divarlar, öz divar quruluşlarınız, zənginləşdirilmiş ailələr, portlu MEP avadanlığı, toqquşma dəstləri, açılışlar və boru spulları, aktiv sənədləri, COBie və sensor göstəriciləri, səma, günəş, şəbəkədə gündüz işığı və istilik və soyutma yükləri, skan qeydiyyatı, canlı görünüş və qrafik kartında yol izləmə, STEP və USD, kitabxana variantları və süni intellekt köməkçiləri üçün daha çox əlavə edir.
keywords: 0.7-də yeniliklər, əvvəlki buraxılış, buraxılış qeydləri, dəyişikliklər, dəyişiklik jurnalı, 0.7, versiya, yeni xüsusiyyətlər, mərtəbələr üzrə divarlar, bu mərtəbəni kopyala, pdf, skan, izləmə, plan divarları, divar quruluşları, qatlar, nüvə, membran, istinad ölçüləri, material kitabxanası, ekran vahidləri, görünüş üslubu, karkas, tirlər, ailələr, parametrlər, plan simvolu, isti nöqtələr, təkrar, detal səviyyəsi, iç-içə ailələr, csv ölçüləri, element üzrə, avadanlıq, portlar, birləşmələr, təmizliklər, açılışlar, spullar, spul vərəqləri, yerində qaynaq, kanal kəsim siyahısı, sənədlər, cobie, sensorlar, mqtt, canlı axın, şaquli səma komponenti, günəş qazancı, gündüz işığı şəbəkəsi, istilik, soyutma, yüklər, u-dəyəri, skanları qeydiyyata al, icp, e57, canlı görünüş, yol izləmə, webgpu, səs-küyün təmizlənməsi, fiziki səma, işıq qarışdırma, render növbəsi, sizin kompüteriniz, step, usd, layihə paketi, bu kütləni işləyin, variantlar, köməkçilər, əlavə API, bitki, elektrik, layihə yoxlamaları
from: a638080d
---

BimCraft 0.6-ya görə 0.7-də nə dəyişib. Siyahı sahələrə görə qruplaşdırılıb, ən vacib olanlar birincidir.

## Yeni

### Bina çəkin

- **Bir neçə mərtəbə üzrə divarlar.** Divar aləti hündürlük siyahısı Xassələrin seçilmiş divar üçün etdiyi kimi, yuxarıdakı istənilən mərtəbəyə qədər **Yuxarıya qədər** təklif edir. Aralarındakı mərtəbələrin planları divarı açıq göstərir, orada otaqlar ona qarşı bağlanır və orada qapı və pəncərələr planlardan yerləşdirilə bilər; Xassələrdə **Keçir** keçdiyi mərtəbələri adlandırır. Bax [Divarı, qapını və ya pəncərəni dəyişin](topic:change-a-wall-or-door#change-a-wall).
- **Bu mərtəbəni kopyala.** Mərtəbə paneli Mərtəbələrdə {{ui:Bu səviyyəni kopyala…}} bir mərtəbənin divarlarını, onların qapı və pəncərələri ilə, döşəmələrini və tavanlarını başqa mərtəbədə və ya üstündə yeni mərtəbədə yenidən çəkir; bir geri qaytarma addımında; otaqlar özlüyündə görünür. Bax [Divarlar çəkmək](topic:draw-walls#levels).
- **PDF və ya skandan divarlar.** {{ui:Versiya}} › {{ui:Çertyojdan…}} indi PDF (xətt işi və ya içində skan) və ya skan edilmiş plan (PNG, JPEG, TIFF, bir neçə səhifə) qəbul edir: hər səhifə bir mərtəbənin divarları, qapıları, pəncərələri və otaqları olur, səhifə planının altında saxlanılır. İzləmə şəbəkə və öyrədilmiş model istifadə etmir, nəticə xətlərin verdiyidir: hər mərtəbəni səhifə ilə yoxlayın. Bax [Plan dəstindən divarlar](topic:walls-from-plans).
- **Öz divar quruluşlarınız.** {{ui:Divar quruluşları…}} divar tipini qat-qat qurur, nüvə, hava boşluqları və membranlarla, və ölçülü önizləmə ilə; {{ui:Material kitabxanası…}} layihənin materiallarını IFC-də saxlayır; {{ui:Şərh et}} › {{ui:Referans ölçüsü}} üz və nüvə xətlərinə ölçü verir və divarlar dəyişdikdə onları izləyir. İcma töhfəçisi Doc-dan (drsurfbum). Bax [Divar quruluşları və referans ölçüləri](topic:wall-assemblies).
- **Ekran vahidləri və görünüş idarəsi.** {{ui:Vahidlər}} alət panelində uzunluqları fut və düymlə, düymlə, onluq futla, millimetrlə, santimetrlə və ya metrlə göstərir; ölçülərdə, cədvəllərdə, koordinatlarda, ölçmələrdə və kəsiklərdə. {{ui:Plan}}, {{ui:Split}} və {{ui:3D}} alət panelindədir, bölünmə sürüklənə bilər (və ya klaviaturadan köçürülə bilər), {{ui:Kölgəli}}, {{ui:Kənarlar}} və {{ui:Karkas}} görünüş kubunun yanındadır, və dam meyli, fasadı və altlığı seçilmiş damı dərhal dəyişir. İcma töhfəçisi Joel-dən (yisraelk). Bax [Divarlar çəkmək](topic:draw-walls#levels).
- **Açıqlıq üzrə döşəmə tirləri.** {{ui:Karkas}} həm sıra ilə kəsilmiş taxtanı, həm də mühəndis tirlərini (ilkin) qura bilər, açıqlığa çatan ən kiçik siyahıdakı seriya və hündürlüyü seçərək, mərkəzdən 16" və ya 24", hər iki istiqamətdə; onlar IFC-yə və kəsim siyahısına gedir. Bir istehsalçının dərc olunmuş cədvəlindən tövsiyə, mühəndislik deyil. Həmçinin Joel-dən. Bax [Divarların, döşəmələrin və damların karkası](topic:framing).
- **Daha çox elektrik qurğusu.** {{ui:Elektrik}} data, telefon və audio-video çıxışları, seçici açarı, taymeri, termostatı, tüstü və istilik detektorlarını, çəkmə stansiyasını və siren, ventilyatoru, enerji sayğacını və alt paneli əlavə edir, hər biri öz IFC sinfi ilə. Bax [Elektrik planı](topic:electrical-plan).

### Ailələr

- **Ailələr daha çox iş görür.** Parametrlər tam ədəd, mətn, material, qələm və ya doldurma ola bilər; ailə öz plan simvolunu çəkə, bərk cismi təkrarlaya, detal səviyyələri üçün hissələri qeyd edə, digər ailələri saxlaya bilər (masada ayaq) və sürüklədiyiniz isti nöqtələri ola bilər, planda yerləşdirilmiş elementdə də. Ölçülər CSV cədvəlindən gəlir və **Element üzrə** işarəli parametrlər eyni ölçülü iki qapının fərqli olmasına imkan verir. Bax [Ailəni redaktə edin](topic:family-editor#plan-symbol) və [Ailələr və onların ölçüləri](topic:families#sizes-from-a-table).

### Borular, kanallar və avadanlıq

- **Portlu avadanlıq.** {{ui:Versiya}} › {{ui:Avadanlıq}} ümumi hava emalçısı, xətti ventilyator, nasos, qazan, su qızdırıcısı, terminal qurğu, difuzor, barmaqlıq və ya çəni yerləşdirir, yazdığınız qiymətlərlə ölçülü, boru və kanal birləşmələri portlar kimi. Hər biri IFC portları ilə öz IFC sinfi kimi saxlanılır. Bax [Portlu MEP avadanlığı](topic:mep-equipment).
- **Birləşdirilmiş xətlər.** Portdan başlanan boru və ya kanal onun ölçüsünü və sistemini alır və ona bağlı qalır: nasosu köçürün, borusu onu izləyir. {{ui:Birləşmələri yoxla}} açıq portları, boş uçları, ölçü və sistem uyğunsuzluqlarını və heç nəyi təmin etməyən xətləri siyahılayır. Bax [Boruları və kanalları avadanlığa birləşdirin](topic:mep-connections).
- **Boru və kanallar konstruksiyaya qarşı.** {{ui:Toqquşma yoxlaması}} hazır dəstləri və {{ui:Borular və kanallar × konstruksiya}} bir kliklə verir; {{ui:Təmizlikləri yoxla}} hər xəttin izolyasiyasını və yazdığınız boşluğu istifadə edir; {{ui:Lazım olan deşiklər}} xətlərin divarlardan və döşəmələrdən keçdiyi yerləri CSV və BCF problemləri kimi siyahılayır. Heç nə kəsilmir. Bax [Boru və kanalları konstruksiyaya qarşı yoxlayın](topic:mep-against-structure).
- **Polad boru spulları.** Polad xətt ən uzun uzunluqda və yerləşdirdiyiniz {{ui:Yerində qaynaq}}lar yerində nömrəli spullara kəsilir; {{ui:Spul vərəqləri (PDF)}} hər spul üçün izometrik görünüş, kəsim uzunluqları, fitinqlər, qaynaqlar və material siyahısı ilə səhifə verir, və {{ui:Kanal kəsim siyahısı}} düz kanal parçalarını siyahılayır. Bax [Polad boru spulları və spul vərəqləri](topic:pipe-spools).

Bunlar mühəndis tərəfindən ölçülmüş layihələndirmə və koordinasiya vasitələridir: axınlar, təzyiqlər və balanslaşdırma yoxdur.

### Binanı idarə etmək

- **Hər aktiv üçün sənədlər.** {{ui:Aktivlər}} sekmesi təlimatları, zəmanətləri, şəkilləri və çertyojları IFC-nin yanındakı fayl adı ilə və ya veb ünvanı ilə aktivə bağlayır; IFC-yə yalnız bağlantı gedir. Bax [Sənədlər](topic:assets-and-maintenance#documents).
- **COBie cədvəli.** {{ui:COBie kimi saxla (.xlsx)}} COBie 2.4 təhvil iş kitabçasını yazır, və oxunmuş COBie iş kitabçası bir {{ui:Tətbiq et}} əvvəl hər dəyişikliyi siyahılayır. Hələ COBie yoxlayıcısından keçməyib. Bax [COBie cədvəli](topic:assets-and-maintenance#cobie-spreadsheet).
- **Sensor göstəriciləri və canlı axınlar.** Göstəricilərin CSV-sini açın, və ya brauzerdən birbaşa öz MQTT brokerinizə və ya bina sisteminizin cavab verdiyi ünvana {{ui:Qoşul}}: hər aktiv son göstəricisini və qrafikini göstərir, modeldə rənglənir və IFC-də saxlanmış hədlərdən kənar olduqda işarələnir. Göstəricilər sekmədə qalır; şifrələr heç vaxt saxlanmır. Bax [Sensor göstəriciləri](topic:assets-and-maintenance#sensor-readings) və [Canlı göstəricilər](topic:assets-and-maintenance#live-readings).

### Gündüz işığı və enerji

- **Hər pəncərədə səma və günəş.** {{ui:Gündüz işığı}} sekmesi hər pəncərəyə onun şaquli səma komponentini və maneə bucağını verir, {{ui:Tarixdə pəncərələrdən keçən günəş}} ilə tarix üzrə günəşi izləyir və hər otaq üzrə {{ui:Şəbəkədə gündüz işığı əmsalı}}nı hesablayır, onun planda çəkilməsi ilə. Bax [Hər pəncərənin şaquli səma komponenti](topic:daylight-factor#vertical-sky-component-of-each-window).
- **İsitmə və soyutma yükləri.** {{ui:İsitmə və soyutma yükləri}} hər otağın istilik itkisini, dərəcə-günlərdən il üzrə isitməsini və soyutma pikini modeldə onu məhdudlaşdıran şeylərdən və hər elementin U-dəyərindən hesablayır; orada yazılmış U-dəyəri IFC-yə yazılır. Bax [İsitmə və soyutma yüklərinin hesablanması](topic:heating-and-cooling-loads).

Hər ikisi dərc olunmuş üsullarla layihələndirmə vasitələridir, uyğunluq hesablamaları deyil, və hər panel bunu deyir.

### Skanlar

- **Bir neçə skanın qeydiyyatı.** {{ui:Skanları qeydiyyata al…}} (başlanğıc panelində və ya {{ui:Göstər}}-də) skanları seçilmiş nöqtə cütləri və ya yazılmış hədəflərlə bir çərçivəyə yerləşdirir, nöqtədən nöqtəyə, sonra nöqtədən müstəviyə ICP ilə təkmilləşdirir, qeydiyyatı kiçik layihə faylı kimi saxlayır və qeydiyyatlı buludu bir LAS və ya E57 faylı kimi yazır. Bax [Bir neçə skanı birə qeydiyyata alın](topic:register-scans).

### Şəkillər və canlı görünüş

- **Canlı görünüş.** Alət panelindəki {{ui:Canlı görünüş}} modeli real vaxt görünüşündə 3D görünüşün yanında göstərir, onu və hər dəyişikliyi izləyir, Gəz, günün vaxtı və ayla birlikdə; {{ui:Canlı görünüş yeni pəncərədə}} onu ikinci ekrana qoyur. Bax [Canlı görünüş](topic:live-view).
- **Qrafik kartında yol izləmə.** WebGPU ilə {{ui:Vizuallaşdırma}} › {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} CadCraft-ın öz yol izləyicisini qrafik kartında işlədir, dayana və {{ui:Davam et}} edə bilər və sonda səs-küyü təmizlənir; WebGPU olmadan əvvəlki kimi WebGL yol izləyicisindən istifadə edir. Bax [Yüksək keyfiyyət](topic:render#high-quality).
- **Vizuallaşdırma dialoqunda daha çox.** (qrafik kartında işləyir, ona görə WebGPU lazımdır): fiziki səma və səma şəkilləri, IES işıq profilləri, f-stop, sahə dərinliyi, iki nöqtəli perspektiv, ağ balans və 360° panoramalar olan kamera, bitmiş şəkil üçün dərəcə, işıq qarışdırma və render sonrası render elementləri, duman, tüstü və kaustika, 16-bit PNG, EXR və ya render faylı kimi saxlama və render növbəsi. Bax [Qrafik kartında səmalar və işıq profilləri](topic:render#skies-and-light-profiles-on-the-graphics-card) və [Render növbəsi](topic:render#the-render-queue).
- **Sizin kompüteriniz.** {{ui:Parametrlər}} › {{ui:BimCraft}} › {{ui:Vizuallaşdırma}} › {{ui:Sizin kompüteriniz}} bu brauzerin tətbiqin istifadə etməsinə icazə verdiyi qrafikanı, prosessor nüvələrini və yaddaşı, və vizuallaşdırmanın başladığı səviyyəni göstərir. Bax [Kompüteriniz nə ilə vizuallaşdırır](topic:your-machine).

### Fayllar və digər tətbiqlər

- **STEP faylları açılır.** `.step` və ya `.stp` hissə, avadanlıq parçası və ya təchizatçının modeli (AP203, AP214, AP242) kiçik IFC modeli kimi açılır, hər bərk cisim yoxlana, kəsilə, ölçülə və IFC kimi saxlanıla bilən element olur. Rənglər və yığımın hissə adları hələ oxunmur. Bax [BimCraft-ın açdığı və saxladığı fayllar](topic:files#what-it-opens).
- **USD ixracı.** Alət panelindəki {{ui:USD}} açıq modelləri `.usda`, `.usdc` və ya `.usdz` kimi yazır, sahə, bina, mərtəbə və ixtisas üzrə düzülmüş, hər elementin IFC sinfi, GlobalId və xassələri ilə. Bax [Modeli USD kimi ixrac edin](topic:usd).
- **CivilCraft-dan kütlə.** CivilCraft-ın sahə görünüşündən göndərilən bina kütləsi Xassələrdə öz tədqiqat nömrələrini göstərir, və {{ui:Bu kütləni işləyin}} bir geri qaytarma addımında hər mərtəbədə divarlar və ondan döşəmə qurur. Bax [Sahə tədqiqatından bina kütləsini işləyin](topic:develop-a-mass).
- **Variantlı kitabxana elementləri.** Bir neçə variantda gələn element {{ui:Kitabxana}} sekmesində {{ui:Variant}} seçimi olur; yerləşdirilmiş element variantını IFC-də saxlayır, {{ui:Elementi dəyişdir…}} digər variantları siyahılayır, və surətlər və yeniləmələr onu saxlayır. Bax [Variantları olan kitabxana elementini yerləşdirin və dəyişin](topic:library-variants).
- **Qovluqda layihə paketləri.** {{ui:Qovluq aç}} {{ui:Layihə paketləri}} altında `.ccbundle.zip` fayllarını siyahılayır, və paketdəki hər tərtibatın **Burada aç …** düyməsi var: PDF MarkupCraft-a, DWG CadCraft-a, yeni sekmədə. Bax [Tərtibatı açın](topic:open-project-bundle#open-a-layout).

### Köməkçilər və əlavələr

- **Süni intellekt köməkçiləri üçün daha çox.** Köməkçi indi elementləri adlandıra və xassə dəyərlərini təyin edə, elementləri köçürə və silə, divarları, qapıları və pəncərələri dəyişə, USD ixrac edə, və şəkil render edə və ya render növbəsini işlədə bilər; hər dəyişiklik bir geri qaytarma addımıdır. Bax [Köməkçinizlə modelində işləyin](topic:assistants).
- **Əlavələr modeldə qura bilər.** Əlavə API 1.1 əlavəyə modeldə bir geri qaytarma addımı kimi dəyişiklik etməyə (Canlı TeamWork ilə gedir), modeli oxumağa və boru və kanal xətlərini, portları, avadanlığı və spulları oxumağa imkan verir.
- **Bitki əlavəsi** ({{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Əlavələr}}-də yandırana qədər söndürülüb): xətlərə qarşı yoxlanılan boru spesifikasiyaları, xətlərin SVG və DXF kimi izometrik çertyojları spesifikasiya ilə, modelə yerləşdirilmiş nozzlelu ümumi proses avadanlığı, iki port arasında marşrutlaşdırıcı və zavod planlaşdırma yoxlaması. Layihələndirmə vasitəsidir, mühəndis təsdiqi deyil; mətnləri yalnız ingilis dilindədir.

## Dəyişənlər

- **Birinci dəfə noutbukda.** Noutbuk ölçülü ekranda BimCraft yalnız planla başlayır, Çək paneli yanında planın sığdığı dar panel olur, plan və 3D görünüş çertyoj onları tərk etdikdə yenidən görünür, 3D görünüş bütün evi dar pəncərədə çərçivəyə alır, və qapılar və pəncərələr ölçü xətlərindən əvvəl seçilir.
- **Şəkli saxlamaq.** Render dialoqunda **PNG saxla** indi {{ui:Saxla}}-dır, yanında digər formatlar üçün {{ui:Fərqli saxla}}. Bax [Şəkli saxlayın](topic:render#save-the-picture).
- **Analiz sekmesi** {{ui:Layihə yoxlamaları}} bloku var: işlərinizin ASCE 7 və ya EN 1990 yük kombinasiyalarını qurur və hər valsovka edilmiş polad I-forma (W, S, IPE, HEA və ya HEB ölçüsü, profil adı və ölçüsü ilə) AISC 360 və ya EN 1993-1-1 ilə yoxlayır, tutumunun nə qədərindən istifadə etdiyini göstərir. Mühəndis yoxlayana qədər köməkçi; qaynaqlı formalar və digər kəsiklər "yoxlanılmayıb" deyir. Bax [Layihə yoxlamaları](topic:frame-analysis#design-checks).

## Düzəldilənlər

- Yeni ailə ölçüsü yaradan addımdan sonra redo uğursuz oldu ("ölçü yoxdur"). İndi hər addım redo-da eyni IFC GlobalId-ləri yenidən yaradır, buna görə redo ailələr və hər digər dəyişiklik üçün işləyir.
- İki nəfər eyni ailəni saxladıqda (Canlı TeamWork sessiyasında və ya iki pəncərədə), ikinci saxlama birincinin dəyişikliyini səssizcə əvəz edirdi. İndi rədd edir və onların dəyişikliyini necə görəcəyinizi və öz dəyişikliyinizi necə yenidən edəcəyinizi deyir.
- ABŞ sorğu futu olan model hər fut 0.3048 m kimi oxunurdu, 0.3048006096 m əvəzinə, bu da ABŞ futu ilə hər coğrafi IFC-ni xəritədə sürüşdürürdü.
- Ailə redaktoru: bağlandıqda klaviatura fokusu səhifəyə düşmür, Saxla telefonda görünür, və sahələri telefonu böyütmür.

## Bütün tətbiqlərdə

- **Vahidlər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Vahidlər}} uzunluq, sahə, həcm, bucaq və meyl üçün ayrıca siyahıya malikdir, vahidlərin təriflərinin verdiyi dəqiq ölçülərlə (ABŞ sorğu futu öz vahididir). İstifadə etmədiyiniz vahidləri söndürün və onlar siyahıdan çıxar; birini ulduzlayın və yeni iş ondan başlayır. Fayl həmişə öz vahidini saxlayır. BimCraft-da alət panelindəki {{ui:Vahidlər}} siyahısı açarları izləyir, ulduz siz alət panelində seçənə qədər ekran vahidlərini təyin edir (əvvəlki seçiminiz saxlanılır), və çəkmə alətlərinin uzunluq qutuları istənilən vahidin işarəsini qəbul edir, məsələn `3.5 m` və ya `10 US ft`. Bax [Vahidlər, yazılmış dəyərlər və vahid siyahıları](common:unit-lists).
- **Daha sıx tərtibat və yığılan panellər.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat sıxlığı}} › {{ui:Yığcam}} ekrana daha çox sığdırır (toxunma ekranları və telefonlar böyük düymələrini saxlayır). Hər yan paneli nazik başlıq zolağına malikdir: onu sürükləyin ki, panel dok olsun və ya üzsün, başqa panelin zolağına buraxın ki, bir çərçivəni sekmələr kimi paylaşsın, kənara sürüşmək üçün bərkidin, və ya gizlədin və kənardan geri gətirin. Bax [Panelləri düzün](common:arrange-panels#make-the-layout-denser).
- **Dialoqlar yerini dəyişir.** Dialoqu başlıq zolağından tutub çəkilmiş hissədən kənara çəkin; o, tərk etdiyiniz yerə qayıdır. Mərkəzə qaytarmaq üçün başlıq zolağına ikiklik edin. Bax [Dialoqu köçürün](common:arrange-panels#move-a-dialog).
- **Süni intellekt köməkçiləri üçün reseptlər.** Öz köməkçiniz üçün on işlənmiş sorğu (çertyoju təmizləmək, dəsti çap etmək, çertyojları yoxlamaq, modelə sual vermək, həcm hesablamaq, detal variantını sınamaq…), hər biri çağırdığı alətlər və lazımi icazələrlə, və hər biri testlərimizdə yenidən işlədilir. Tətbiqlərin içində süni intellekt yoxdur. Bax [Süni intellekt köməkçiləri üçün reseptlər](common:assistants-recipes).
- **Dillər.** **Português (Portugal)** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Dil}}-də yenidir. O, **Português (Brasil)**, **Español (México)** və **Bahasa Indonesia** ilə birlikdə indi tətbiqlərin hər sözünə malikdir, lakin ana dili danışan tərəfindən oxunmamış qaralama kimi. Yardım mövzuları ingilis dilindədir, bir neçəsi ispan dilində.
- **CadCraft Studio** yeniləmə yoxlaması niyə uğursuz olduğunu deyir (sizin sisteminiz üçün hələ fayl yoxdur, şəbəkə yoxdur, pis imza) və yalnız "Hazırdır" demək əvəzinə; və bağladığınız Nə yenidir kartını daha yeni buraxılış çıxana qədər geri gətirmir.

## Bu versiyada hələ yoxdur

- **0.7 kodla imzalanmayıb.** İmzalama və Microsoft Store paketi 0.8-ə keçdi, çünki sertifikat yoxlaması hələ gəlməyib. Hər faylın yanındakı SHA-256-nı getcadcraft.com/download-da yoxlayın. Windows-da SmartScreen quraşdırıcını dayandırırsa, {{ui:Ətraflı məlumat}} seçin, sonra {{ui:Yenə də işə sal}}. Mac-da ilk dəfə CadCraft Studio-ya sağ klikləyin və {{ui:Aç}} seçin. CadCraft Studio hələ tətbiq mağazasında deyil və hələ iPad və ya iPhone quruluşu yoxdur.
- {{ui:Vahidlər}}-də bucaq və meyl siyahıları saxlanılır, lakin hələ heç bir qutu onları oxumur.
- Qrafik kartında yol izləmə, Vizuallaşdırma dialoqunun əlavələri və render növbəsi WebGPU tələb edir (onsuz yüksək keyfiyyət WebGL yol izləyicisindən istifadə edir); canlı görünüş brauzerdə varsa WebGPU, yoxdursa WebGL 2 istifadə edir. Burada yalnız proqram qrafika ilə sınaqdan keçirilib, real qrafik kartlarında hələ yox. Canlı görünüşün BimCraft-da səpələnmə və paylaşma yoxdur (ModelCraft-ınkində var).
- Qeydə alınmış gəzintinin videoya render edilməsi BimCraft-da daxili deyil.
- Layihə yoxlamaları: IFC profil adı W, S, IPE, HEA və ya HEB ölçüsü olmayan I-forma (və ya ölçüsü ondan fərqlidirsə) qaynaqlı sayılır və "yoxlanılmayıb" qayıdır; boru, bucaq, kanal, arıq hissələr və burulma da belədir. Heç bir mühəndis hələ yoxlamaları nəzərdən keçirməyib.
- Çəkilmiş elementlər birbaşa köçürülə, döndərilə, əks etdirilə və ya sıralana bilməz (bütün mərtəbə köçürülə bilər); bölünən divar, Mətn aləti və ya pərdə divarı yoxdur. Yuxarı mərtəbədə aşağı mərtəbənin divarını kəsən divar həmin divarın 3D cisminə kəsilmir və cədvəllər yuxarı mərtəbənin açılışını öz divarının mərtəbəsində siyahılayır.
- Ailələr: təşkillər arasında paylaşılan ailə kitabxanası qurulmayıb. Ailələr və surət mərtəbələri hələ digər BIM proqramlarında açılmayıb.
- MEP: avadanlıq ümumidir (istehsalçı məlumatı yoxdur); polad spullarda tiyə və reduktorlar ümumidir, ASME B16.9 cədvəlindən deyil; {{ui:Kitabxana}} sekmesindən yerləşdirilmiş kitabxana elementlərinin portları IFC-yə yazılmır; heç nə mühəndis tərəfindən yoxlanmayıb.
- Bitki əlavəsi hələ modelə marşrutlaşdırılmış xətt çəkə, izometriklərində spulları nömrələyə və ya {{ui:Kitabxana}}dan yerləşdirilmiş avadanlığın layihəsini yoxlaya bilmir.
- CivilCraft-ın bitki kitabxanasındakı bitkilər hələ BimCraft-ın {{ui:Kitabxana}} sekmesindən yerləşdirilə bilmir.
- Enerji: saatlıq simulyasiya, ISO 52016-1 üsulu və iqlim faylları yoxdur. Aktivlər: BimCraft bağlı olduqda göstəriciləri saxlayan və ya xəbərdarlıq göndərən hostlanmış əkiz yoxdur.
- Skan qeydiyyatı sınaq skanlarında sınaqdan keçirilib, real skaner skan dəstində hələ yox; E57 faylları hələ 6 milyon nöqtə və 512 MB-a qədər açılır.
- Layihə paketləri yalnız BimCraft-da açılır (digər proqramlar tərtibatı **Burada aç …** ilə alır), və paketlər və iki proqramlı dəst stendlərlə sınaqdan keçirilib, Archicad və ya Revit ilə hələ yox.

Hər şey başqa yerdədir: [Hələ hazır olmayanlar](topic:not-built-yet).
