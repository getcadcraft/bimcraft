---
title: 0.9-da yeniliklər
summary: Divar formaları, bölmə, sürüşmə, uzatma və şəbəkə xəttinə kilidləmə, yerdən aşağı mərtəbələr, şəbəkə ölçüləri və planda Ölçmə, iş üslubu ilə surət görünüşləri və qələm cədvəlləri, Belə hesabat ver, Collada və Google Earth ixracı, Scan to BIM, külək və seysmik analiz, qətranla çap əlavələri.
keywords: yeniliklər, 0.9, buraxılış qeydləri, divar formaları, düzbucaqlı, fırlanmış düzbucaqlı, çoxbucaqlı, qövs, xətlər üzrə seçmə, kontur izləmə, sürüşmə, birləşmə, qutu ilə uzatma, düzləşdirmə və kilidləmə, divarı bölmək, boşluq, yenidən birləşdirmə, şəbəkəyə kilidləmə, böyümə başlanğıcı, ölçü başlanğıcı, aşağıya mərtəbə əlavə et, bodrum, mərtəbə əmri, şəbəkə ölçüləri, planda ölç, iş üslubu, surət görünüşü, öz surəti, əlaqəli görünüş, qələm cədvəli, çap olunduğu kimi, belə hesabat ver, miqyası yazın, svg idxalı, planda yerləşdir, modeldə yerləşdir, collada, dae, kmz, google earth, scan to bim, külək yükü, seysmik, sonlu elementlər, sənədlər paneli, qətranla çap, yeniliklər, nə yenidir, buraxılış qeydləri, dəyişiklik jurnalı, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, təxliyə, insanlar, növbələr, akustika, reverberasiya, impuls cavabı, sel, külək, zəlzələ, təhlükə, həyat dövrü, xidmət müddəti, ids, teqlər, cədvəllər, köçürmə, düzləşdirmə, paylama, şəkil, fon, skandan divarlar, civilcraft-dan sahə, panel çertyojları, karkas, günəş, pv, bölmə, vrf, fan coil, boru ölçüsü, kabel tirəsi, işıqlandırma, beton, seysmik, skanı müqayisə et, epsg, proyeksiya, sənədlər, şablon, karbon, qiymət, energyplus, render mühərriki, birlikdə aç, usd, glb, unreal, geri qaytarma, əlavələr, pcf, simvollar, bitkilər, izləmə, qələmlər, lent, layihə brauzeri, tərtibat
from: 5624fe88
---

BimCraft 0.8.1-ə görə 0.9-da nə dəyişib. İki böyük mövzu həqiqi divar aləti və böyük BIM proqramlarından gələn insanların gözlədiyi kimi davranan görünüşlərdir. Onların ətrafında Collada ixracı, elektrik qurğularını yerləşdirə bilən köməkçilər, Scan to BIM və {{ui:Analiz}} sekmələrində külək, seysmik və sonlu elementlər işi var.

## Yeni

### Divarlar

- **Bütöv formalar çəkin.** {{ui:Çək}}-də {{ui:Formalar}} açın (və ya Divar sətirinin **Forma** siyahısından bir forma seçin): düzbucaqlı, fırlanmış düzbucaqlı, 3-dən 64 tərəfə qədər çoxbucaqlı, mərkəzlə qövs, toxunan qövs, seçilmiş xətlər üzrə divarlar və kliklədiyiniz bağlı sahənin ətrafında divarlar. Düzbucaqlı dörd divar, dörd birləşmiş künc və bir geri qaytarma addımıdır. Bax [Divar formaları, bölmə, sürüşmə, uzatma və kilidləmə](topic:wall-tools).
- **Əvvəl təyin edin, sonra dəyişin.** Divar sətirində {{ui:Sürüşmə}} və {{ui:Birləşdir}} var (sərbəst dayanan divarlar üçün söndürün). Sonra çəkilmiş divarlarda {{ui:Sürüşmə}}, {{ui:Qutu ilə uzatma}} və {{ui:Düzləşdir və kilidlə}} istifadə edin. Hərəkət etdirilən və ya uzadılan divar öz qapılarını, pəncərələrini və ölçülərini saxlayır. Hər reseptin bir geri qaytarma addımı var.
- **Divarları kəsin.** {{ui:Böl}}, {{ui:Boşluq}}, {{ui:Sərbəst uclar}}, {{ui:Hissəni sil}} və {{ui:Yenidən birləşdir}} divarı klikləməklə və ya onu başqa divarın kəsdiyi yerdə kəsir. Qapıdan keçən kəsik rədd olunur. Bax [Divar formaları, bölmə, sürüşmə, uzatma və kilidləmə](topic:wall-tools).
- **Divarları şəbəkə xətlərinə kilidləyin.** Şəbəkə xətti boyunca divarı seçin və **Xassələr**də {{ui:Şəbəkəyə kilidlə}} işarələyin. {{ui:Şəbəkə}} aləti açıq olduqda seçilmiş xətt üçün {{ui:Köçürmə}} qutusuna məsafə yazın; kilidlənmiş divarlar bir geri qaytarma addımında izləyir.
- **Bir divarın formasını dəyişin.** Bir divarın **Xassələr**ində onun üstünü və ya əsasını dam, döşəmə və ya tavana bağlaya, fasad konturunu redaktə edə, əyə və ya heç bir qapısı və pəncərəsi olmayan divar açılışı kəsə bilərsiniz. Bax [Divarın forması](topic:wall-shape).
- **Uzunluq hansı tərəfin saxlandığını deyir.** {{ui:Böyümə başlanğıcı}} uzunluğu dəyişdikdə başlanğıcın, sonun və ya mərkəzin yerində qalmasını təyin edir.
- **Uzunluq və plan ölçüsü uyğundur.** {{ui:Ölçü başlanğıcı}} (mərkəz xətti, daxili üz və ya xarici üz) həm Uzunluq sahəsini, həm də planın divar ölçülərini idarə edir. Mərkəz xəttindən başlayır, buna görə planın divar ölçüləri indi əvvəl xarici üzü oxuduğu yerdə mərkəz xəttini oxuyur. Onu Divar sətirində, **Xassələr**də və ya Parametrlər › BimCraft › Divarlar-da dəyişin.

### Mərtəbələr, şəbəkələr və ölçmə

- **Aşağıya mərtəbə əlavə et.** Mərtəbə panelindəki {{ui:Aşağıya mərtəbə əlavə et}} ən aşağı mərtəbənin altına, onunla eyni hündürlükdə, mənfi kotada (Mərtəbə -1, Mərtəbə -2) mərtəbə əlavə edir. Başqa heç nə hərəkət etmir. {{ui:Mərtəbələr əlavə et…}} indi mənfi hündürlükləri qəbul edir. Komanda sətirində LEVEL, LEVELS, STOREY və ya STOREYS yazmaq {{ui:Mərtəbələr əlavə et…}} açır, və menyularda və lent sekmələrində {{ui:Mərtəbələr}} düyməsi var. Bax [Sahələr, binalar və mərtəbələr](topic:site-building-and-levels).
- **Planda şəbəkə ölçüləri.** {{ui:Şəbəkə}} aləti açıq olduqda {{ui:Ölçülər}} işarələyin ki, qonşu xətlər arasındakı məsafəni və hər mərtəbənin planında baloncuqların kənarında ümumi ölçünü çəkə. Bax [Şəbəkəni ölçün](topic:grid-dimensions).
- **Planda ölçmə.** Çək qrupunda {{ui:Ölç}} iki klik arasında X və Y fərqləri ilə məsafə verir. Modelə heç nə saxlanmır. Bax [Planda ölçün](topic:measure-on-the-plan).
- **Bir neçə sütunu birdən dəyişin.** Sütunları divarla birlikdə seçin və seçim hər növü {{ui:Yalnız bunları saxla}} ilə siyahılayır. Bir klik sütunları saxlayır və onların ortaq sahələrini göstərir.
- **Hər yerdə bir ekran vahidi.** Koordinatlar, ölçmələr, kəsiklər, vərəq miqyasları, çərçivə sekmə yükləri və nəticələri və Problemlər mətni seçdiyiniz vahidi izləyir. İxraclar SI olaraq qalır.

### Görünüşlər, vərəqlər və çap

- **İş üslubu.** {{ui:Parametrlər}} › {{ui:BimCraft}} › {{ui:İş üslubu}} hər görünüşün öz annotasiyalarına və qələm cədvəllərinə malik olması və ya onların paylaşılması arasında seçim edir. Bax [İş üslubu, surət görünüşləri, kağızda qələmlər, Belə hesabat ver və şablonlar](topic:working-style).
- **Görünüşü surət edin.** Planlar, tavan planları, çağırışlar, fasadlar və kəsiklər {{ui:Öz surəti}} və ya {{ui:Əlaqəli}} kimi surət edilə bilər; {{ui:Öz surətinə çevir}} əlaqəli olanı müstəqil edir. Bax [İş üslubu, surət görünüşləri, kağızda qələmlər, Belə hesabat ver və şablonlar](topic:working-style).
- **Ekrandakı kimi çap et, və ya qələm cədvəli ilə.** Qələm dəyişiklikləri görünüşlə birlikdə IFC-də saxlanır, vərəqlər və PDF-lər onları ekranda olduğu kimi çəkir. Eyni mövzu qələm cədvəllərini də əhatə edir.
- **Belə hesabat ver.** Xassələrdə {{ui:Belə hesabat ver}} yolu təkər kimi çəkilmiş döşəməni, panel kimi divarı və ya pandus kimi damı seçdiyiniz sinif kimi IFC-yə yazır və bunu cədvəllərdə, Kəmiyyətlərdə, Axtarışda, Rənglə və Problemlərdə belə sayır.
- **Fasad və kəsiklərdə redaktə.** Fasad və ya kəsikdə divarları, açılışları, mərtəbələri, ölçüləri və qeydləri birbaşa çəkin və köçürün, öz vərəq ölçüləriniz və ştamplarınızla. Bax [Fasad və kəsiklərdə redaktə](topic:edit-in-elevations).
- **Vərəqlər.** Hər vərəq üfüqi və ya şaquli ola bilər. Yerləşdirilmiş hər görünüşün siyahısı yanında {{ui:Miqyası yazın}} qutusu var (1:64, 2:1, 1/4" = 1'). Yerləşdirilmiş çertyoju sürükləyə və ya ox düymələri ilə yerini dəyişə bilərsiniz, və {{ui:Formatlar…}} › {{ui:SVG idxal edin…}} öz vərəq dizaynınızı hər vərəq üçün yazılmış sahələrlə ştampa çevirir.
- **Vərəqdə kitabxana kreditləri.** Kitabxana elementləri olan çertyoj dəsti istənilən vərəqdə yerləşdirə biləcəyiniz Kitabxana kreditləri cədvəli alır. Bax [Kitabxana kreditləri](topic:library-credits).

### Kitabxana: yerləşdirmək

- **Yerləşdirmə görünüşü izləyir.** Plan görünüşündə Kitabxana {{ui:Planda yerləşdir}} göstərir; 3D-də {{ui:Modelə yerləşdir}} göstərir; Split-də əsas əməl kimi {{ui:Planda yerləşdir}} olan bölünmüş düymə göstərir. Hər iki üsul eyni IFC elementini yazır. Kitabxana kartını planın və ya 3D görünüşün üzərinə də sürükləyə bilərsiniz; qələm və ya barmaqla basıb saxlayın, sonra sürükləyin. Bax [Kitabxanadan yerləşdirmək](topic:place-from-library).

### Fayllar və köməkçilər

- **Collada və Google Earth.** Alət panelindəki {{ui:Collada}} (menyu üslublarında Fayl menyusunda) .dae, və ya modelin xəritədə olduğu yerdə yerləşdirilmiş .kmz yazır. Bax [Modeli Collada və ya Google Earth üçün ixrac edin](topic:collada).
- **Köməkçilər elektrik qurğuları yerləşdirə bilər.** Qoşulmuş köməkçinizin qurğuları əlavə etmək, siyahılamaq, dəyişmək və silmək və işıqları təyin etmək üçün yeni alətləri var. Köməkçilər {{ui:Parametrlər}}-də yandırana qədər söndürülüb. Bax [Köməkçinizlə modelində işləyin](topic:assistants).
- **Scan to BIM (əlavə).** Defolt olaraq söndürülüb və Nöqtə buludları əlavəsi lazımdır. Skandan hər biri üçün ölçülmüş kənarlaşma ilə döşəmələr, divarlar, qapılar və pəncərələr təklif edir; qəbul etmək bir geri qaytarma addımıdır.

### Analiz

- **Külək və seysmik sahə məlumatı.** {{ui:Analiz}} sekmələrində: ASCE 7-10 və ya 7-16 ilə bərk qapalı bina üçün külək yükləri, hər mərtəbədə yük halları kimi qüvvə ilə, və USGS axtarışı və layihə spektri ilə seysmik sahə məlumatı.
- **Struktur davamı və sonlu elementlər.** ACI 318-19 ilə beton yoxlamaları, ASCE 7-22 ilə ekvivalent yanal qüvvələr, mərtəbə sürüşməsi, plitələr kimi döşəmələr və divarlar, və ASCE 7 və EN 1990 yük kombinasiyaları. Öz sonlu elementlər mühərrikimiz qabıqlar, dördüzlü tetraedrlər və modal analiz edir. Bax [Beton elementlərini yoxlayın və seysmik yükləri qurun](topic:concrete-and-seismic) və [Çərçivə analizi](topic:frame-analysis).

### Digər əlavələr və sənədlər

- **Daxili işıqlandırma (əlavə).** İşıq qurğuları yerləşdirir və hər mərtəbənin planına luksi rəqəm kimi yazır, parıltı təxmini və çap oluna bilən hesabatla.
- **Sənədlər paneli.** {{ui:Fayl}} › {{ui:Sənədlər…}} lock faylı ilə götürmə və qaytarma, rəvizyon hərfləri, buraxılış vəziyyətləri və tarixçəyə malikdir.
- **Regionlar və polad.** Regulyasiya əlavəsində Cənubi Afrika çertyoj və tikinti qaydaları paketləri, və ümumi kəsik cədvəlində 976 Böyük Britaniya polad ölçüsü.
- **Pulsuz qətranla çap əlavələri.** Slaycer, dəstəklər və raft, ekspozisiya testi, və GOO, SL1, Chitubox və Anycubic fayl formatları, hamısı defolt olaraq söndürülüb.

## Bütün tətbiqlərdə

- Düyməni və ya idarəetməni üzərinə gətirdikdə Bootstrap tooltip göstərilir.
- Boş çertyoj sahəsindəki başlanğıc ipucunun bağlama düyməsi var; BimCraft onun bağlandığını yadda saxlayır.
- Sekmə zolağı sığmadıqda indi kəsilmək əvəzinə sürüşür.
- Sənəd açıq olduqda brauzer sekməsi "<sənəd> - BimCraft | CadCraft" yazır.
- {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Tərtibat}}-da tərtibatlar iki sətirli seçimlərin açılan siyahısıdır.
- {{ui:Parametrlər}}-dəki dil siyahısı 0.8-dən daha çox dil təklif edir; ingilis dilindən başqa dillər maşın qaralamalarıdır.

## Düzəldilənlər

- **Pilləkənlərdə, pandusda, barmaqlıqlarda, dam müstəvilərində, sərbəst qurğularda, şəkillərdə və yollarda köçürmə işləyir.**
- **Sürüklənən divar otağı əyri etmir.** Mərkəz tutacağı divarı öz müstəvisində köçürür və künclər birləşmiş divarlar boyunca sürüşür. Köhnə sərbəst köçürmə üçün {{key:Mod}} basılı saxlayın; {{ui:Düzbucaq et}} 90 dərəcəni geri qaytarır.
- **Birləşmiş düyündə qalınlıq və ya növ dəyişikliyi** L, T, üç divarlı düyündə və əyri divarın yanında künci bağlı saxlayır.
- **Birləşmiş otaqlar qrupunu köçürmək və ya surət etmək** qrupdan kənarda qalan birləşmiş divarları birləşmiş saxlayır.
- **Divar ölçüsü identifikasiyasını saxlayır.** Yenidən işlətmə divar ölçüsünün şəxsiyyətini saxlayır.
- **Draw söndürülmüş ikən divarı seçmək** Xassələrdə xəta vermir.
- **Vizuallaşdırma GPU işə düşmədikdə WebGL-ə keçir**, dayanmaq əvəzinə.
- **EnergyPlus yoxlaması yenidən yandırıla bilər.**
- **Sənədlər mərkəzləşdirilmiş dialoq kimi açılır.** {{key:Esc}}, X və ya solğun səhifəyə klik onu bağlayır.
- **{{ui:Plan}}, {{ui:Split}} və {{ui:3D}} düymələri** model açılan kimi görünür, yalnız Çək bir dəfə yandırıldıqdan sonra yox.

## Dürüst məhdudiyyətlər

- Heç nə real avadanlıqda çap olunmayıb. Qətran dəstəkləri yenidir və hələ sübut olunmayıb.
- Külək, seysmik, beton və sonlu elementlərin nəticələri mühəndis üçün yoxlama vasitələridir, bərk formalara qarşı yoxlanılıb, real binaya qarşı yox.
- İşıqlandırma təxmini bizim öz izləmə ilə yoxlanılıb, digər işıqlandırma proqramları ilə yox.
- Cənubi Afrika rəqəmləri təsdiqlənməyib.
- Birləşmə üslubları (uc, bucaq, künclü bərabərləşdirmə) və qat prioriteti hələ qurulmayıb; künclər bucaqlıdır.
- İngilis dilindən başqa dillər maşın qaralamalarıdır.

Hər şey başqa yerdədir: [Hələ hazır olmayanlar](topic:not-built-yet). Əvvəlki dəyişikliklər bu səhifədə aşağıda 0.8 və 0.8.1 qeydlərindədir.

## Əvvəlki: 0.8 və 0.8.1

BimCraft 0.7-yə görə 0.8 (2026-11-01) və 0.8.1 (2026-11-02) buraxılışlarında nə dəyişib. BimCraft indi bina haqqında suallara cavab verə və onu insanlar, səs, su, külək və zəlzələlərlə sınaqdan keçirə bilər, və daha çox alətlə çəkə bilər; 0.8.1 düzəliş buraxılışıdır.

### Yeni

**Binanı sınaqdan keçirin**

- **Binadakı insanlar.** Sol paneldəki {{ui:Binadakı insanlar}} bölməsi təxliyəni və ya normal günün gəlişlərini otaqlarınızdan, qapılarınızdan və pilləkənlərinizdən keçirir. Bina daraldıqda növbələri, hər otaqdan çıxışa ən uzun yolu və son adamın nə qədər vaxt aldığını görürsünüz. Dəyişikliyi görmək üçün qapıda {{ui:Bağlı}} işarələyin, gəzənləri görmək üçün {{ui:İnsanları 3D görünüşdə göstər}} işarələyin. Nəticələr Problemlərə gedir. Layihələndirmə qərarları üçün kobud izdiham modeli, yanğın təhlükəsizliyi sertifikatı deyil. Bax [Binanın içində insanları gəzdirin](topic:people-in-the-building).
- **Otaq akustikası və onu eşitmək.** {{ui:Otaq akustikası}} bölməsi hər otağın reverberasiya vaxtını oktava zolağı üzrə (Sabine və Eyring) onun ölçüsündən və seçdiyiniz təmizləmələrdən verir, öz hədəfinizlə isə nə qədər udulmanın ona çatacağını deyir. {{ui:Bu otaqda oxut}} səsi, əl çalmanı, dartılmış notları və ya öz səs faylınızı otaq üçün hesablanmış impuls cavabı ilə çalır. Udulma rəqəmləri əvəz etmək üçün tipik dərc olunmuş dəyərlərdir. Bax [Otaq akustikası](topic:room-acoustics).
- **Sel, külək və zəlzələ oxutması.** {{ui:Təhlükə oxutması}} suyun otaqlara qalxmasını, hər mərtəbədə külək təzyiqini və mərtəbələri silkələyən zəlzələni plan və ya fasadda zaman sürgüsü ilə oynadır. Sadə modellər və onların fərziyyələri panelədə; bu kod yoxlaması deyil. Bax [Sel, külək və ya zəlzələni oynadın](topic:hazard-playback).
- **Əlli ildə nə köhnəlir.** {{ui:Həyat dövrü görünüşü}} hər birinin xidmət müddəti ilə pəncərələri, qapıları, təmizləmələri və damı siyahılayır, əvəz olunma illərini və vahid qiyməti yazdığınız zaman il üzrə qiyməti və onun indiki dəyərini. {{ui:Cədvəli saxla (CSV)}} onu yazır. Xidmət müddətləri planlama rəqəmləridir. Bax [Əlli ildə nəyin köhnəldiyinə baxın](topic:life-cycle-view).
- **Beton və seysmik yoxlamalar.** {{ui:Analiz}} sekmələrinin {{ui:Beton elementləri}} və {{ui:Seysmik yüklər}} bölmələri beton tirləri və sütunları ACI 318-19 ilə yoxlayır, və ASCE 7-22 ilə bərk döşəmələrdə ekvivalent yanal qüvvələr qurur, mərtəbə sürüşməsi ilə. Mühəndis yoxlaması üçün. Bax [Beton elementlərini yoxlayın və seysmik yükləri qurun](topic:concrete-and-seismic).

**Yoxlayın və hesabat verin**

- **IDS ilə yoxlayın.** Müştərinin verdiyi `.ids` faylını yükləyin və IFC-ni təhvil verməzdən əvvəl Problemlərdə ona uyğun olmayan hər elementi görün. {{ui:Model yoxlamaları}} altında {{ui:IDS ilə yoxlayın}} açın. Bax [Modeli müştərinin IDS-i ilə yoxlayın](topic:check-against-ids).
- **Teqlər və cədvəllər.** Öz teqlərinizi müəyyən edin, onları bir çox elementə birdən təyin edin və sütunları, süzgəcləri və qrupları onları oxuyan cədvəllər qurun; teqlər IFC-də saxlanır. Bax [Teqlər və cədvəllər](topic:tags-and-schedules).
- **Modeldən sənədlər.** {{ui:Modeldən sənədlər}} açıq IFC-dən spesifikasiya şablonunu doldurur və PDF, Word sənədi və ya Markdown kimi saxlayır. Bax [Modeldən sənədlər](topic:documents-from-the-model).
- **Skanı modellə müqayisə edin.** Açıq nöqtə buludu ilə {{ui:Müqayisə et}} hər elementi tikilmiş, qismən tikilmiş, itmiş və ya çatılmamış kimi qiymətləndirir və tikilmiş faizi göstərir. Bax [Skanı modellə müqayisə edin](topic:compare-scan-with-model).
- **Karbon və qiymət.** Karbon paneli daxili karbonu sizin redaktə edə biləcəyiniz amil cədvəlindən toplayır, və Qiymət paneli qiymətləri 4D cədvəli üzrə yayır. BimCraft ilə gələn amillər ümumidir və yoxlanmamış kimi işarələnib. Bax [Daxili karbon və qiymət](topic:embodied-carbon-and-5d-cost).
- **İstənilən xəritə proyeksiyası.** {{ui:Ölç}} › {{ui:Koordinat sistemi…}} EPSG nömrəsi, UTM zonası, ad və ya öz proyeksiya tərifinizi qəbul edir. Bax [İstənilən proyeksiya ilə coğrafi bağlama](topic:georeference-any-projection).

**Çəkin və redaktə edin**

- **Hərəkət, Düzləşdirmə və Paylama.** {{ui:Versiya}} altında; {{key:Shift+M}} Hərəkəti başladır (adi {{key:M}} hələ də Ölçmədir). Hərəkət {{key:C}} ilə surət çıxararaq gedir, hər addım bir geri qaytarmadır və Canlı TeamWork sessiyasında gedir. Bax [Köçürün, surət çıxarın, düzləşdirin və paylayın](topic:move-align-distribute).
- **Plan altında şəkillər.** {{ui:Versiya}} › {{ui:Şəkil}} mərtəbə planının altına və ya şaquli müstəviyə PNG, JPEG və ya WebP yerləşdirir. Miqyası iki nöqtə ilə təyin edin, və köçürün, fırladın, solğunlaşdırın və kilidləyin. MarkupCraft-da kopyalanmış sahə öz vərəq miqyasında yapışır. Bax [Planın altına şəkil qoyun](topic:pictures-as-backgrounds).
- **Skandan divarlar.** Skan açıq olduqda divarlar, qapılar və otaqlar təkliflər kimi gəlir, onları birbirinin ardınca saxlayır və ya rədd edirsiniz, bir geri qaytarma addımında. Yalnız iki perpendikulyar istiqamətdəki divarlar tapılır. Bax [Skanı divarlara çevirin](topic:scan-to-walls).
- **İzləmə, qələmlər və kiçik pilləkən.** {{ui:İzləmə}} başqa mərtəbəni plan altında kəsikli göstərir, {{ui:Qələmlər}} divarlara, qapılara və pəncərələrə bir görünüşdə öz xətt qalınlığını verir, və {{ui:Pilləkən eskizi}} gəzinti xəttini pilləkənə çevirir. Wavefront OBJ şəbəkəsi açılır. Bax [Mərtəbəni izləyin, qələmlər və eskizdən pilləkən](topic:trace-pens-stairs-obj).
- **Ünvan ətrafında binalar.** CivilCraft-ın Ünvandan sahəyə tapdığı binalar və parsel təkliflər kimi gəlir; əlavə etmək istədiyinizi işarələyirsiniz. Bax [CivilCraft-ın sahəsindən başlayın](topic:site-from-civilcraft).
- **Panel çertyojları.** {{ui:Versiya}} › {{ui:Panel çertyojları}} taxta və ya yüngül polad divar, döşəmə və damları çərçivəyə alır və kəsim siyahısını CSV, iş çertyojlarını PDF kimi saxlayır. Başlanğıc dəyərləri, struktur layihə deyil. Bax [Panel çertyojları](topic:panel-drawings).
- **Simvol palitrası və bitkilər.** {{ui:Versiya}} › {{ui:Simvol palitrası}} elektrik və santexnika simvollarını ada görə tapır; {{ui:Kitabxana}}-nın {{ui:Bitkilər}} mənbəyi plan simvolları ilə təxminən 400 bitki siyahılayır. Bax [Simvol palitrası](topic:symbol-palette) və [Bitki yerləşdirin](topic:plant-list).

**Borular, kanallar və enerji**

- **Split, VRF və fan coil.** Daxili və xarici qurğular öz birləşmələri ilə, və xətt dəstləri dəyişə biləcəyiniz tipik nümunə dəyərlər cədvəlindən ölçülür. Bax [Split, VRF və fan coil](topic:split-vrf-fan-coils).
- **Hesablamalar.** Hesablamalar paneli təchizat borularını və kanalları təzyiq düşküsü ilə yoxlayır, kabelləri tirələrdən və borulardan marşrutlaşdırır və onların doldurulmasını göstərir, və IES və ya EULUMDAT fayllarından işıqlanmanı hesablayır. Defoltlar etiketlənib; öz kodunuzun dəyərlərini yazın. Bax [Boru, kanal, kabel və işıq hesablamaları](topic:mep-calculations).
- **PCF faylları.** Boru aləti üzrə **PCF ixrac et** boru gərginliyi və izometrik proqramları üçün xətləri yazır, və geri oxunan PCF faylı onun borusunu çəkir. Bax [Boru komponent faylları](topic:piping-pcf).
- **Günəş PV.** Damlarda və ya yerdə massivlər quraşdırın, onları modeldən kölgələndirin, illik enerji qiymətləndirin, simləri yoxlayın və bir xətt diaqramı məlumatı yaradın. Başlanğıc modul və itkilər ümumidir. Bax [Günəş PV](topic:solar-pv).
- **EnergyPlus faylı.** Check with EnergyPlus paneli modeli sizin öz EnergyPlus-unuzda işləyəcək IDF kimi yazır. Brauzerdə işlətmək sizin host etdiyiniz quruluş və yazdığınız ünvan tələb edir; BimCraft onu daşımır. Bax [EnergyPlus ilə istilik və soyutmanı yoxlayın](topic:check-with-energyplus).

**Şəkillər və fayllar**

- **Render mühərrikini seçin.** {{ui:Vizuallaşdırma}}-nın {{ui:Mühərrik}} seçimi var. İki daxili mühərrikimiz (Sürətli və Yol izləyici) defolt olaraq qalır. **Birlikdə aç** səhnəni USD və ya glTF faylı kimi, Unreal layihə qovluğunu isə .zip kimi saxlayır; CadCraft Studio-da əlavə mühərrik əlavə edə bilər. Layihəni açan Unreal plagini buraxılmayıb. Bax [Şəkli hansı proqramın çəkdiyini seçin](topic:render-engines).
- **Studio geri qaytarması.** CadCraft Studio daxilində BimCraft hər bitmiş addımı Studio-ya bildirir ki, Studio sonuncu istifadə etdiyiniz pəncərədə son addımınızı geri ala bilsin. Bax [Tətbiqlər arasında geri qaytarma](topic:undo-across-apps).
- **Faylınızdakı əlavələr.** IFC hansı əlavələrin ona yazdığını qeyd edir və onu açdıqda sizdə olmayanları təklif edir. Bax [Faylınızdakı əlavələr](topic:add-ons-in-your-file).

**Bütün tətbiqlərdə**

- **AI-nizi qoşun.** Öz köməkçiniz BimCraft-ı Studio-nun qoşulması ilə idarə edə və modeldə suallara cavab verə bilər, məsələn hansı otaqlar verilmiş sahənin altındadır. Studio-nun öz AI-si yoxdur. Bax [Köməkçinizlə modelində işləyin](topic:assistants).
- **Alət paneli sətirləri.** {{ui:Parametrlər}} › {{ui:Ümumi}} › {{ui:Alət paneli sətirləri}} Sarğı, 2 sətir və ya 1 sətir təklif edir; Sarğı defolt olaraq qalır.
- **Giriş cihazları.** Trackpad, qələm, 3D siçan, idarəedici və MIDI parametrləri bütün tətbiqlər arasında paylaşılır.
- **Problemlər və Canlı.** Xəbərdarlıq paneli və Canlı sessiyalar əvvəlki kimi işləyir, yuxarıdakı yeni yoxlamalar Problemlərə qidalanır.
- **Dillər.** 54 dil, onlardan on biri yenidir. İngilis dilindən başqa olanlar ana dili danışan tərəfindən oxunmamış maşın qaralamalarıdır; yardım mövzuları əsasən ingilis dilindədir.

### 0.8.1-də düzəldilənlər

- **Lent + Layihə brauzeri tərtibatı.** Daxil et › CAD idxalı, Daxil et › Şəkil və İdarə et › Layihə vahidləri "BimCraft-da hələ qurulmayıb" deyirdi. İndi Şəkil Şəkil aləti açır, CAD idxalı {{ui:Versiya}} › {{ui:Çertyojdan…}} açır (DWG, DXF, PDF və ya skan), və Layihə vahidləri {{ui:Parametrlər}} › {{ui:Qlobal}} › {{ui:Vahidlər}} açır. Köçürmə və Düzləşdirmə Köçürmə və Düzləşdirmə alətlərini işlədir, Mərtəbə {{ui:Mərtəbələr əlavə et…}} açır, Mərhələlər Yenidənqurma mərhələləri bölməsini açır və Materiallar material kitabxanasını açır.
- **DWG sinif bölməsi.** Yanlış tip kimi oxunurdu; BimCraft-da və DWG oxuyan digər tətbiqlərdə düzəldildi.
- **İş vaxtında dil.** Studio və qablaşdırılmış nəşrlər indi yenidən başlamadan dil dəyişə bilər. Bu, hələ hər platformada sınaqdan keçirilməyib; dil dəyişməsə bizə deyin.
- **Archicad paketi skripti.** `archicad_bundle.py`, ayrıca yükləmə, indi Archicad-ın yolunu tapır, qovluğu 20 saniyəyə qədər izləyir və paketin yanında yenidən cəhd edir.

### Bu versiyada hələ yoxdur

- **Təhlükəsizlik və layihə vasitələri.** Binadakı insanlarda binanın kodundan gələn gediş məsafəsi limiti yoxdur (limiti siz yazırsınız) və real planda əl ilə yoxlanılmayıb. Akustika, həyat dövrü və təhlükə rəqəmləri planlama dəyərləridir, kod yoxlaması deyil.
- **İqlim gələcəyi və EnergyPlus.** Daxili iqlim gələcəyi yoxdur: sel işi üçün ssenari faylı yükləyə bilərsiniz. Brauzerdə EnergyPlus işi bu buraxılışın hissəsi deyil.
- **Lent düzümü.** Material Takeoff "Hazır deyil" olaraq qalır, çünki BimCraft-da material kəmiyyət siyahısı yoxdur, və 54 digər boz lent aləti hələ BimCraft alətinin arxasında yoxdur.
- **İmzalama və platformalar.** Windows quraşdırıcıları və macOS .dmg imzalanmayıb, buna görə SmartScreen {{ui:Ətraflı məlumat}} göstərir, sonra {{ui:Yenə də işə sal}}, və macOS-da sağ klik sonra {{ui:Aç}} tələb edir. iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Real səhifə sınaqları.** Bəzi köhnə BimCraft brauzer testləri 0.8.1-dən əvvəl olduğu kimi sınaq səhifəmizdə hələ uğursuz olur.

Hər şey başqa yerdədir: [Hələ hazır olmayanlar](topic:not-built-yet). Əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) səhifəsindədir.
