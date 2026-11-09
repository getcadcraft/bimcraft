---
title: 0.8 və 0.8.1-də yeniliklər
summary: BimCraft-a insanların binadan keçməsi, eşidilən otaq akustikası, sel, külək və zəlzələ oxutması, əlli illik həyat dövrü görünüşü, IDS ilə yoxlamalar, etiketlər və cədvəllər, Hərəkət, Düzləşdirmə və Paylama, plan altında şəkillər, skandan divarlar, panel çertyojları, günəş, bölünmüş və VRF sistemləri, boru və kabel ölçüsü, beton və zəlzələ yoxlamaları, istənilən xəritə proyeksiyası, render mühərriki seçimi və Studio geri qaytarması əlavə olunub; 0.8.1 lentdəki boz alətləri düzəldir.
keywords: yeni nə var, yeniliklər, buraxılış qeydləri, dəyişikliklər jurnalı, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, təxliyə, insanlar, növbələr, akustika, reverberasiya, impuls cavabı, sel, külək, zəlzələ, təhlükə, həyat dövrü, xidmət müddəti, ids, etiketlər, cədvəllər, hərəkət, düzləşdirmə, paylama, şəkil, fon, skandan divarlar, sahə, panel çertyojları, çərçivə, günəş, pv, bölünmüş, vrf, fan coil, boru ölçüsü, kabel tirəsi, işıqlandırma, beton, seysmik, skanı müqayisə et, epsg, proyeksiya, sənədlər, şablon, karbon, dəyər, energyplus, render mühərriki, ilə aç, usd, glb, unreal, geri qaytar, əlavələr, pcf, simvollar, bitkilər, izləmə, qələmlər, lent, layihə brauzeri, düzüm
from: 87b03056
---

Bu, BimCraft 0.8 (2026-11-01) və 0.8.1 (2026-11-02) versiyalarında 0.7-ə nisbətən dəyişənlərdir. BimCraft indi bina haqqında sual cavablandıra və onu sınaqdan keçirə bilir: insanlar, səs, su, külək və zəlzələlərlə, və daha çox alətlərlə çəkə bilir; 0.8.1 düzəliş buraxılışıdır.

## Yeni

### Binanı sınaqdan keçirin

- **Binada insanlar.** Sol panelin {{ui:Binadakı insanlar}} bölməsi təxliyəni və ya normal bir günün gəlişlərini otaqlarınızdan, qapılarınızdan və pilləkənlərinizdən keçirir. Binanın daraldığı yerlərdə növbələri, hər otaqdan çıxışa ən uzun gedişi və son adamın nə qədər vaxt aldığını görürsünüz. Qapıda {{ui:Bağlı}} qeydini qoyun ki, nə dəyişdiyini görəsiniz, və {{ui:İnsanları 3D görünüşdə göstər}} qeydini qoyun ki, gəzənləri izləyəsiniz. Tapıntılar Problemlərə göndərilir. Bu, dizayn qərarları üçün qaba izdiham modelidir, yanğın təhlükəsizliyi sertifikatı deyil. Bax [Binadan insanları keçirin](topic:people-in-the-building).
- **Otaq akustikası və onu eşitmək.** {{ui:Otaq akustikası}} bölməsi hər otağın reverberasiya müddətini oktava zolaqları üzrə verir (Sabine və Eyring), ölçüsündən və seçdiyiniz örtüklərdən. Öz hədəfinizlə isə hansı udma səviyyəsinin ona uyğun gələcəyini deyir. {{ui:Bu otaqda oxut}} səs, alqış, çalınan notlar və ya öz səs faylınızı otaq üçün hesablanmış impuls cavabı ilə oxudur. Udma rəqəmləri əvəz etməyiniz üçün tipik dərc olunmuş dəyərlərdir. Bax [Otaq akustikası](topic:room-acoustics).
- **Sel, külək və zəlzələ oxutması.** {{ui:Təhlükə oxutması}} suyun otaqlara qalxmasını, hər mərtəbəyə küləyin təzyiqini və mərtəbələri silkələyən zəlzələni plan və ya fasad üzərində, zaman sürgüsü ilə oxudur. Sadə modellər fərziyyələri ilə birlikdə panelində göstərilir; norma yoxlaması deyil. Bax [Sel, külək və ya zəlzələ oxutmasını işə salın](topic:hazard-playback).
- **Əlli ildə nə köhnəlir.** {{ui:Həyat dövrü görünüşü}} pəncərələri, qapıları, örtükləri və damı hər biri xidmət müddəti ilə, dəyişdirilmə illəri ilə və vahid başına qiymət yazdığınızda illər üzrə dəyəri və cari dəyəri siyahılayır. {{ui:Cədvəli saxla (CSV)}} onu yazır. Xidmət müddətləri planlaşdırma rəqəmləridir. Bax [Əlli ildə nəyin köhnəldiyini görün](topic:life-cycle-view).
- **Beton və zəlzələ yoxlamaları.** {{ui:Analiz}} sekmesinin {{ui:Beton elementləri}} və {{ui:Seysmik yüklər}} blokları beton tirləri və sütunları ACI 318-19 üzrə yoxlayır və sərt döşəmələr üçün ASCE 7-22 üzrə ekvivalent yanal qüvvələri və mərtəbə sürüşməsini hesablayır. Mühəndis tərəfindən yoxlanması üçündür. Bax [Beton elementlərini yoxlayın və seysmik yüklər hazırlayın](topic:concrete-and-seismic).

### Yoxlayın və hesabat verin

- **IDS ilə yoxlayın.** Müştərinin verdiyi `.ids` faylını yükləyin və IFC-ni təhvil verməzdən əvvəl ona uyğun gəlməyən hər elementi Problemlərdə görün. {{ui:Model yoxlamaları}} altında {{ui:IDS ilə yoxlayın}} açın. Bax [Modeli müştərinin IDS-i ilə yoxlayın](topic:check-against-ids).
- **Etiketlər və cədvəllər.** Öz etiketlərinizi təyin edin, onları bir çox elementə eyni anda qoyun və sütunları, filtrləri və qrupları etiketləri oxuyan cədvəllər yaradın; etiketlər IFC-də saxlanılır. Bax [Etiketlər və cədvəllər](topic:tags-and-schedules).
- **Modeldən sənədlər.** {{ui:Modeldən sənədlər}} açıq IFC-dən spesifikasiya şablonunu doldurur və PDF, Word sənədi və ya Markdown kimi saxlayır. Bax [Modeldən sənədlər](topic:documents-from-the-model).
- **Skanı modellə müqayisə edin.** Açıq nöqtə buludu ilə {{ui:Müqayisə et}} hər elementi tikilmiş, qismən tikilmiş, əskik və ya çatılmamış kimi qiymətləndirir və tikilmə faizini göstərir. Bax [Skanı modellə müqayisə edin](topic:compare-scan-with-model).
- **Karbon və dəyər.** Karbon paneli dəyişdirə biləcəyiniz əmsal cədvəlindən daxili karbonu toplayır, Dəyər paneli isə qiymətləri 4D cədvəli üzrə yayır. BimCraft ilə gələn əmsallar ümumidir və yoxlanılmamış kimi işarələnib. Bax [Daxili karbon və dəyər](topic:embodied-carbon-and-5d-cost).
- **İstənilən xəritə proyeksiyası.** {{ui:Ölç}} › {{ui:Koordinat sistemi…}} EPSG nömrəsi, UTM zonası, ad və ya öz proyeksiya təsvirinizi qəbul edir. Bax [İstənilən proyeksiya ilə coğrafi istinad](topic:georeference-any-projection).

### Çəkin və redaktə edin

- **Hərəkət, Düzləşdirmə və Paylama.** {{ui:Versiya}} altında; {{key:Shift+M}} Hərəkəti başladır (sadə {{key:M}} hələ də Ölçüdür). Hərəkət {{key:C}} ilə gedərkən kopyalayır, hər addım bir geri qaytarmadır və Live TeamWork sessiyasında yayılır. Bax [Hərəkət, kopyalama, düzləşdirmə və paylama](topic:move-align-distribute).
- **Planın altında şəkillər.** {{ui:Versiya}} › {{ui:Şəkil}} PNG, JPEG və ya WebP şəklini mərtəbə planının altına və ya şaquli müstəviyə yerləşdirir. Miqyası iki nöqtə ilə təyin edin, sonra onu tərpədin, çevirin, solğunlaşdırın və kilidləyin. MarkupCraft-da kopyalanan sahə vərəqinin miqyasında yapışdırılır. Bax [Planın altına şəkil qoyun](topic:pictures-as-backgrounds).
- **Skandan divarlar.** Skan açıq olduqda divarlar, qapılar və otaqlar təklif kimi gəlir; onları birbir saxlayır və ya rədd edirsiniz, bir geri qaytarma addımı ilə. Yalnız iki perpendikulyar istiqamətdəki divarlar tapılır. Bax [Skanı divarlara çevirin](topic:scan-to-walls).
- **İzləmə, qələmlər və eskizdən pilləkən.** {{ui:İzləmə}} başqa mərtəbəni plan altında kəsikli göstərir, {{ui:Qələmlər}} divarlara, qapılara və pəncərələrə bir görünüşdə öz xətt qalınlığını verir və {{ui:Pilləkən eskizi}} gedilən xətti pilləkənə çevirir. Wavefront OBJ şəbəkəsi açılır. Bax [Mərtəbəni izləyin, qələmlər və eskizdən pilləkən](topic:trace-pens-stairs-obj).
- **CivilCraft-ın Ünvandan sahəyə tapdıqları.** CivilCraft-ın Ünvandan sahəyə tapdığı binalar və parsel təklif kimi gəlir; əlavə etmək istədiklərinizi işarələyirsiniz. Bax [CivilCraft-ın sahəsindən başlayın](topic:site-from-civilcraft).
- **Panel çertyojları.** {{ui:Versiya}} › {{ui:Panel çertyojları}} divarları, döşəmələri və damları taxta və ya yüngül polad çərçivədə qurur və kəsim siyahısını CSV, emal çertyojlarını isə PDF kimi saxlayır. Başlanğıc dəyərlərdir, struktur layihə deyil. Bax [Panel çertyojları](topic:panel-drawings).
- **Simvol palitrası və bitkilər.** {{ui:Versiya}} › {{ui:Simvol palitrası}} elektrik və santexnika simvollarını adına görə tapır; {{ui:Kitabxana}} mənbəyinin {{ui:Bitkilər}} hissəsi plan simvolları ilə təxminən 400 bitkini siyahılayır. Bax [Simvol palitrası](topic:symbol-palette) və [Bitki yerləşdirin](topic:plant-list).

## Boru, kanal və enerji

- **Bölünmüş, VRF və fan coil-lər.** Qoşulmaları ilə daxili və xarici qurğular, və nümunə dəyərlər cədvəlindən ölçülmüş xətt dəstləri; dəyişə bilərsiniz. Bax [Bölünmüş, VRF və fan coil-lər](topic:split-vrf-fan-coils).
- **Hesablamalar.** Hesablamalar paneli təchizat boru və kanal ölçülərini təzyiq itkisi ilə yoxlayır, kabelləri tirələrdən və borulardan yönləndirir və doldurulmanı göstərir, və IES və ya EULUMDAT fayllarından işıqlandırmanı hesablayır. Defoltlar etiketlənib; öz normanızın dəyərlərini yazın. Bax [Boru, kanal, kabel və işıq hesabları](topic:mep-calculations).
- **PCF faylları.** Boru aləti üzrə **PCF ixrac et** boru-gərginlik və izometrik proqramları üçün xətləri yazır, və oxunan PCF faylı borunu çəkir. Bax [Boru komponent faylları](topic:piping-pcf).
- **Günəş PV.** Damlara və ya yerə massivlər yerləşdirin, onları modeldən kölgələndirin, illik enerjini təxmin edin, sətirləri yoxlayın və bir xətt sxemi məlumatı yaradın. Başlanğıc modul və itkilər ümumidir. Bax [Günəş PV](topic:solar-pv).
- **EnergyPlus faylı.** EnergyPlus ilə yoxla paneli modeli öz EnergyPlus-unuzda işlətmək üçün IDF kimi yazır. Brauzerdə işlətmək üçün özünüzün host etdiyiniz və ünvanını yazdığınız quruluş lazımdır; BimCraft onu özü daşımır. Bax [EnergyPlus ilə istilik və soyutmanı yoxlayın](topic:check-with-energyplus).

## Şəkillər və fayllar

- **Render mühərrikini seçin.** {{ui:Render}}-də {{ui:Engine}} seçimi var. İki daxili mühərrik (Fast və Path tracer) defolt olaraq qalır. **Open in** səhnəni USD və ya glTF faylı kimi, Unreal layihə qovluğunu isə .zip kimi saxlayır; CadCraft Studio-da əlavə bir mühərriki əlavə ola bilər. Layihəni açan Unreal plug-in-i buraxılmayıb. Bax [Şəkli hansı proqramın çəkdiyini seçin](topic:render-engines).
- **Studio geri qaytarması.** CadCraft Studio daxilində BimCraft Studio-ya hər bitmiş addımı bildirir ki, Studio istifadə etdiyiniz son pəncərədə son addımınızı geri qaytara bilsin. Bax [Tətbiqlər arasında geri qaytarma](topic:undo-across-apps).
- **Faylınızdakı əlavələr.** IFC hansı əlavələrin yazdığını qeyd edir və açanda çatışmayanları təklif edir. Bax [Faylınızdakı əlavələr](topic:add-ons-in-your-file).

## Hər tətbiqdə

- **AI-nizi qoşun.** Öz köməkçiniz Studio-nun qoşulması ilə BimCraft-ı idarə edə bilər və modeldə sual cavablandıra bilər, məsələn verilmiş sahənin altında hansı otaqların olduğunu. Studio-nun öz AI-si yoxdur. Bax [AI köməkçi ilə modelinizdə işləyin](topic:assistants).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} Sarmal, 2 sətir və ya 1 sətir təklif edir; Sarmal defolt olaraq qalır.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, idarəetmə pultu və MIDI parametrləri bütün tətbiqlər tərəfindən paylaşılır.
- **Problemlər və Live.** Xəbərdarlıq paneli və Live sessiyaları əvvəlki kimi işləyir; yuxarıdakı yeni yoxlamalar Problemlərə verilir.
- **Dillər.** 54 dil, onlardan on tanesi yenidir. İngilis dilindən başqaları hələ ana dili danışan biri tərəfindən oxunmamış maşın qaralamalarıdır; kömək mövzuları əsasən ingilis dilindədir.

## 0.8.1-də düzəlişlər

- **Lent + Layihə brauzeri düzümü.** Əlavə et › CAD idxal et, Əlavə et › Şəkil və İdarə et › Layihə vahidləri "BimCraft-da hələ quraşdırılmayıb" deyirdi. İndi Şəkil Şəkil alətini açır, CAD idxal et {{ui:Versiya}} › {{ui:Çertyojdan…}} (DWG, DXF, PDF və ya skan) açır, Layihə vahidləri {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Vahidlər}} açır. Hərəkət və Düzləşdirmə müvafiq alətləri işə salır, Səviyyə {{ui:Mərtəbələr əlavə et…}} açır, Mərhələlər Yenidənqurma mərhələləri bölməsini, Materiallar isə material kitabxanasını açır.
- **DWG siniflər bölməsi.** Yanlış tip kimi oxunurdu; BimCraft-da və DWG oxuyan digər tətbiqlərdə düzəldildi.
- **İş vaxtı dili.** Studio və paketli nəşrlər yenidən başlatmadan dil dəyişə bilir. Hələ hər platformada sınaqdan keçməyib; dilin dəyişmədiyini bizə bildirin.
- **Archicad paketi skripti.** Ayrıca yüklənən `archicad_bundle.py` indi Archicad-ın yolunu tapır, qovluğu 20 saniyəyə qədər izləyir və paketin yanında yenidən cəhd edir.

## Bu versiyada hələ yoxdur

- **Təhlükəsizlik və dizayn köməkçiləri.** Binada insanlar bina normasından gələn gediş məsafəsi limitinə malik deyil (limiti siz yazırsınız) və real planda əl ilə yoxlanılmayıb. Akustika, həyat dövrü və sel rəqəmləri planlaşdırma dəyərləridir, norma yoxlaması deyil.
- **İqlim gələcəkləri və EnergyPlus.** Daxili iqlim gələcəkləri yoxdur: sel işi üçün ssenari faylı yükləyə bilərsiniz. Brauzerdə EnergyPlus işə salınması bu buraxılışın tərkibində deyil.
- **Lent düzümü.** Material Takeoff "Hazır deyil" qalır, çünki BimCraft-ın material miqdar siyahısı yoxdur; və daha 54 boz lent aləti arxasında hələ BimCraft aləti yoxdur.
- **İmzalama və platformalar.** Windows quraşdırıcıları və macOS .dmg imzasızdır, ona görə SmartScreen {{ui:Ətraflı məlumat}}, sonra {{ui:Yenə də işə sal}} göstərir, macOS-da isə sağ klik sonra {{ui:Aç}} tələb olunur. iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Real səhifə testləri.** Bəzi köhnə BimCraft brauzer testləri test səhifəmizdə 0.8.1-dən əvvəl olduğu kimi hələ də uğursuz olur.

Qalanları [Hələ hazır olmayanlar](topic:not-built-yet) səhifəsindədir. Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) səhifəsindədir.
