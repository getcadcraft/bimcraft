---
title: 0.9-da yeniliklər (əvvəlki)
summary: Divar formaları, bölmə, sürüşmə, uzatma və şəbəkəyə kilidləmə, yerdən aşağı səviyyələr, şəbəkə ölçüləri və planda ölçmə, işləmə üslubları və qələm cədvəlləri ilə təkrarlanmış görünüşlər, Belə hesabat ver, Collada və Google Earth ixracı, Scan to BIM, külək və seysmik analiz, qətran çapı əlavələri.
keywords: whats new 0.9, əvvəlki buraxılış, yeniliklər, 0.9, buraxılış qeydləri, divar formaları, düzbucaqlı, çoxbucaqlı, qövs, xətləri seç, kontur izləmə, sürüşmə, birləşdir, qutu ilə uzat, düzləşdir və kilidlə, divarı böl, boşluq, yenidən birləşdir, şəbəkəyə kilidlə, başlanğıcdan böyüt, başlanğıc ölçüsü, aşağıya səviyyə, zirzəmi, səviyyə əmri, şəbəkə ölçüləri, planda ölçmə, işləmə üslubu, təkrarlanmış görünüş, öz surəti, əlaqəli görünüş, qələm cədvəli, göründüyü kimi çap, belə hesabat ver, miqyas yaz, svg idxalı, planda yerləşdir, modeldə yerləşdir, collada, dae, kmz, google earth, scan to bim, külək yükü, seysmik, sonlu elementlər, sənədlər paneli, qətran çapı, yeniliklər, nə yeni, buraxılış qeydləri, dəyişikliklər, 0.8, 0.8.1, versiya, yeni xüsusiyyətlər, təxliyə, insanlar, növbələr, akustika, reverberasiya, impuls cavabı, sel, külək, zəlzələ, təhlükə, həyat dövrü, xidmət müddəti, ids, etiketlər, cədvəllər, hərəkət, düzləşdirmə, paylama, şəkil, fon, scan to walls, civilcraft sahəsi, panel çertyojları, karkas, günəş, pv, bölmə, vrf, fankoyl, boru ölçüsü, kabel tirəsi, işıqlanma, beton, seysmik, scan müqayisəsi, epsg, proyeksiya, sənədlər, şablon, karbon, dəyər, energyplus, render mühərriki, birlikdə aç, usd, glb, unreal, geri qaytar, əlavələr, pcf, simvollar, bitkilər, izləmə, qələmlər, lent, layihə brauzeri, tərtibat
from: 816df7f8
---

Bu, BimCraft 0.9-da 0.8.1-ə nisbətən nəyin dəyişdiyini göstərir. Əsas iki mövzu real divar alətidir və böyük BIM proqramlarından gələn istifadəçilərin gözlədiyi kimi davranan görünüşlərdir. Onların yanında Collada ixracı, elektrik qurğularını yerləşdirə bilən köməkçilər, Scan to BIM, habelə {{ui:Analysis}} tabında külək, seysmik və sonlu elementlər işi var.

## Yeni

### Divarlar

- **Bütöv formalar çəkin.** {{ui:Draw}} bölməsində {{ui:Shapes}} açın (və ya Divar sətirinin Forma siyahısından formanı seçin): düzbucaqlı, fırlanmış düzbucaqlı, 3-dən 64-ə qədər tərəfli çoxbucaqlı, mərkəzinə görə qövs, toxunan qövs, seçilmiş xətlər üzrə divarlar və ya klikləyib daxil olduğunuz qapalı sahənin ətrafında divarlar. Düzbucaqlı dörd birləşmiş künclə dörd divar və bir geri qaytarma addımıdır. Bax: [Divar formaları, bölmə, sürüşmə, uzatma və kilidləmə](topic:wall-tools).
- **Əvvəl təyin edin, sonra dəyişin.** Divar sətrində {{ui:Offset}} və {{ui:Join}} var (sərbəst divarlar çəkmək üçün qeyd işarəsini silin). Sonradan çəkilmiş divarlarda {{ui:Offset}}, {{ui:Box stretch}} və {{ui:Align and lock}} istifadə edin. Yerdəyişmiş və ya uzadılmış divar qapılarını, pəncərələrini və ölçülərini saxlayır. Hər resept bir geri qaytarma addımıdır.
- **Divarları kəsin.** {{ui:Split}}, {{ui:Gap}}, {{ui:Free ends}}, {{ui:Delete segment}} və {{ui:Rejoin}} divarı klikdə və ya başqa divarın kəsişdiyi yerdə kəsir. Qapıdan keçən kəsik rədd edilir. Bax: [Divar formaları, bölmə, sürüşmə, uzatma və kilidləmə](topic:wall-tools).
- **Divarları şəbəkə xətlərinə kilidləyin.** Şəbəkə xətti boyunca divarı seçin və {{ui:Xassələr}} bölməsində {{ui:Lock to grid}} qutusunu qeyd edin. Şəbəkə alətini açıq saxlayaraq seçilmiş xətt üçün {{ui:Move by}} sahəsinə məsafə yazın, kilidlənmiş divarlar bir geri qaytarma addımında onunla hərəkət edir.
- **Bir divarın formasını dəyişin.** Bir divarın {{ui:Xassələr}} bölməsində onun yuxarısını və ya altını damа, döşəməyə və ya tavana bağlaya, hündürlük konturunu redaktə edə, əyə və ya heç bir qapı və ya pəncərə olmadan divarda açıqlıq kəsə bilərsiniz. Bax: [Divar forması](topic:wall-shape).
- **Uzunluq hansı ucun sabit qaldığını göstərir.** {{ui:Grow from}} uzunluğu dəyişəndə başlanğıcın, sonun və ya mərkəzin yerində qalmasını təyin edir.
- **Uzunluq və plan ölçüsü uyğundur.** {{ui:Measure from}} (mərkəz xətti, daxili üz və ya xarici üz) həm Uzunluq sahəsini, həm də planın divar ölçülərini idarə edir. Mərkəz xəttindən başlayır, ona görə planın divar ölçüləri əvvəllər xarici üzü göstərdiyi yerdə indi mərkəz xəttini göstərir. Divar sətrində, {{ui:Xassələr}} bölməsində və ya {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Walls}} bölməsində dəyişin.

### Səviyyələr, şəbəkələr və ölçmə

- **Aşağıya səviyyə əlavə edin.** {{ui:Levels}} panelində {{ui:Add a level below}} ən aşağı səviyyənin altında, onun qədər hündür, mənfi hündürlükdə (Səviyyə -1, Səviyyə -2) səviyyə əlavə edir. Başqa heç nə yerini dəyişmir. {{ui:Add levels…}} artıq mənfi hündürlükləri qəbul edir. Komanda sətrində LEVEL, LEVELS, STOREY və ya STOREYS yazmaq {{ui:Add levels…}} açır və menyularda və lent tablarında {{ui:Levels}} düyməsi var. Bax: [Sahələr, binalar və səviyyələr](topic:site-building-and-levels).
- **Planda şəbəkə ölçüləri.** {{ui:Grid}} aləti açıq olanda {{ui:Dimensions}} qutusunu qeyd edin, bu zaman hər səviyyənin planında qonşu xətlər arasındakı məsafə və ümumi ölçü dairələrdən kənarda çəkilir. Bax: [Şəbəkəni ölçün](topic:grid-dimensions).
- **Planda ölçmə.** {{ui:Draw}} qrupundakı {{ui:Measure}} iki klik arasında X və Y fərqləri ilə birlikdə məsafə verir. Modeldə heç nə saxlanılmır. Bax: [Planda ölçmə](topic:measure-on-the-plan).
- **Bir neçə sütunu birdən dəyişin.** Sütunları divarla birlikdə seçin, siyahıda hər növ {{ui:Keep only these}} ilə göstərilir. Bir klik sütunları saxlayır və onların ortaq sahələrini göstərir.
- **Hər yerdə bir ölçü vahidi.** Koordinatlar, ölçülər, kəsiklər, vərəq miqyasları, çərçivə sekmesinin yüklər və nəticələri və Problemlər mətni seçdiyiniz vahidi izləyir. İxraclar SI-də qalır.

### Görünüşlər, vərəqlər və çap

- **İşləmə üslubu.** {{ui:Settings}} › {{ui:BimCraft}} › {{ui:Working style}} hər görünüşün öz şərhlərinə və qələm cədvəllərinə malik olması ilə onların paylaşılması arasında seçim edir. Bax: [İşləmə üslubu, təkrarlanmış görünüşlər, kağızda qələmlər, Belə hesabat ver və şablonlar](topic:working-style).
- **Görünüşü təkrarlayın.** Planlar, tavan planları, çağırışlar, fasadlar və kəsiklər {{ui:Own copy}} və ya {{ui:Linked}} kimi təkrarlana bilər; {{ui:Make own copy}} əlaqəli olanı müstəqil edir. Bax: [İşləmə üslubu, təkrarlanmış görünüşlər, kağızda qələmlər, Belə hesabat ver və şablonlar](topic:working-style).
- **Göründüyü kimi və ya qələm cədvəli ilə çap.** Qələm dəyişiklikləri görünüşlə birlikdə IFC-də saxlanılır, vərəqlər və PDF-lər onları ekrandakı kimi çəkir. Eyni mövzu qələm cədvəllərini də əhatə edir.
- **Belə hesabat ver.** {{ui:Xassələr}} bölməsində {{ui:Report as}} yol kimi çəkilmiş döşəməni, panel kimi çəkilmiş divarı və ya pandus kimi çəkilmiş damı seçdiyiniz sinif kimi IFC-yə yazır və cədvəllərdə, Miqdarlarda, Tap-da, Rənglə və Problemlərdə bu şəkildə hesablayır.
- **Fasadlarda və kəsiklərdə redaktə edin.** Divarları, açıqlıqları, səviyyələri, ölçüləri və qeydləri birbaşa fasad və ya kəsikdə çəkin və yerini dəyişin, öz vərəq ölçüləriniz və başlıq bloklarınızla. Bax: [Fasadlarda və kəsiklərdə redaktə](topic:edit-in-elevations).
- **Vərəqlər.** Hər vərəq üfüqi və ya şaquli ola bilər. Yerləşdirilmiş hər görünüşdə miqyas siyahısının yanında {{ui:Type a scale}} qutusu durur (1:64, 2:1, 1/4" = 1'). Yerləşdirilmiş çertyoju sürükləyə və ya ox düymələri ilə yerini dəyişə bilərsiniz, {{ui:Formats…}} › {{ui:Import SVG…}} öz vərəq dizaynınızı hər vərəq üçün sahələri yazılmış başlıq blokuna çevirir.
- **Kitabxana təşəkkürləri vərəqdə.** Kitabxana elementləri olan çertyoj dəsti hər vərəqdə yerləşdirə biləcəyiniz Kitabxana təşəkkürləri cədvəli alır. Bax: [Kitabxana təşəkkürləri](topic:library-credits).

### Kitabxana: yerləşdirmə

- **Yerləşdirmə görünüşü izləyir.** Plan görünüşündə Kitabxana {{ui:Place in plan}} göstərir; 3D-də {{ui:Place in model}} göstərir; Bölünmüş görünüşdə əsas əməliyyat kimi {{ui:Place in plan}} olan bölünmüş düymə göstərir. Hər iki üsul eyni IFC elementini yazır. Kitabxana kartını planın və ya 3D görünüşün üzərinə də sürükləyə bilərsiniz; qələm və ya barmaqla basıb saxlayın, sonra sürükləyin. Bax: [Kitabxanadan yerləşdirin](topic:place-from-library).

### Fayllar və köməkçilər

- **Collada və Google Earth.** Alətlər panelində {{ui:Collada}} (üslub menyularında Fayl menyusu) .dae faylı və ya xəritədə modelin yerləşdiyi yerə qoyulmuş .kmz yazır. Bax: [Modeli Collada kimi və ya Google Earth üçün ixrac edin](topic:collada).
- **Köməkçilər elektrik qurğularını yerləşdirə bilir.** Qoşulmuş köməkçinin qurğuları əlavə etmək, siyahılamaq, dəyişmək və silmək, habelə işıqları təyin etmək üçün yeni alətləri var. Köməkçilər {{ui:Settings}} bölməsində onları yandırmadığınız müddətcə söndürülü qalır. Bax: [Süni intellekt köməkçisinin modelinizlə işləməsinə icazə verin](topic:assistants).
- **Scan to BIM (əlavə).** Defolt olaraq söndürülüdür və Point clouds əlavəsi tələb edir. Skanerdən hər ölçülmüş meyl ilə döşəmə, divar, qapı və pəncərə təklif edir; qəbul etmək bir geri qaytarma addımıdır.

### Analiz

- **Külək və seysmik sahə məlumatları.** {{ui:Analysis}} tabında: ASCE 7-10 və ya 7-16 üzrə bərk qapalı bina üçün külək yükləri, hər mərtəbədə yük halları kimi qüvvə ilə; USGS axtarışı və layihə spektri olan seysmik sahə məlumatları.
- **Struktur davamı və sonlu elementlər.** ACI 318-19 üzrə beton yoxlamaları, ASCE 7-22 üzrə ekvivalent yanal qüvvələr, mərtəbə sürüşməsi, lövhə kimi döşəmələr və divarlar, ASCE 7 və EN 1990 üzrə yük birləşmələri. Öz sonlu elementlər mühərrikimiz qabıqları, tetraedrləri və modal analizi edir. Bax: [Beton elementlərini yoxlayın və seysmik yükləri hesablayın](topic:concrete-and-seismic) və [Çərçivə analizi](topic:frame-analysis).

### Digər əlavələr və sənədlər

- **İnteryer işıqlandırması (əlavə).** İşıq qurğularını yerləşdirir və hər səviyyənin planına lüksü rəqəm kimi yazır, parıltı qiymətləndirməsi və çap oluna bilən hesabatla birlikdə.
- **Sənədlər paneli.** {{ui:File}} › {{ui:Documents…}} kilid faylı ilə götürmə və qaytarma, rev­iziya hərfləri, buraxılış vəziyyətləri və tarixçə təklif edir.
- **Regionlar və polad.** Tənzimləmələr əlavəsində Cənubi Afrika çertyoj və tikinti qaydaları paketləri, paylaşılan kəsik cədvəlində isə 976 Böyük Britaniya polad ölçüsü.
- **Pulsuz qətran çapı əlavələri.** Slicer, dayaqlar və plita, ekspozisiya testi və GOO, SL1, Chitubox və Anycubic fayl formatları; hamısı defolt olaraq söndürülüdür.

## Hər tətbiqdə

- Düyməni və ya idarəetmə elementini göstərmək Bootstrap alətlə ipucu göstərir.
- Boş çəkiliş sahəsindəki başlanğıc ipucunun bağlama düyməsi var; BimCraft onun bağlandığını yadda saxlayır.
- Sığmayan panel tab zolağı artıq kəsilmir, sürüşür.
- Sənəd açıq olanda brauzer tabı "<sənəd> - BimCraft | CadCraft" yazır.
- {{ui:Settings}} › {{ui:General}} › {{ui:Layout}} bölməsində tərtibatlar iki sətirli seçimlərin açılan siyahısıdır.
- {{ui:Settings}} dilləri 0.8-dən çox dil təklif edir; ingilis dilindən başqa dillər maşın qaralamalarıdır.

## Düzəldilib

- **Pilləkənlərdə, pandusda, məhəccərlərdə, dam səthlərində, sərbəst cihazlarda, şəkillərdə və yollarda Hərəkət işləyir.** Divarı ortadan sürükləmək divarı özünə nəzərən düz saxlayır, künclər birləşmiş divarlar boyunca sürüşür. Köhnə sərbəst köçürmə üçün {{key:Mod}} saxlayın; {{ui:Square up}} 90 dərəcəni geri qaytarır.
- **Birləşmiş düyündə qalınlıq və ya tip dəyişikliyi** L, T, üç divarlı düyündə və əyri divarın yanında küncü bağlı saxlayır.
- **Otaq qrupunu köçürmək və ya kopyalamaq** qrupdan kənar birləşmiş divarları birləşmiş saxlayır.
- **Yenidən etmək (Redo) divar ölçüsünün kimliyini saxlayır.**
- **Draw söndürülü ikən divarı seçmək** Xassələrdə artıq xəta vermir.
- **Render GPU işə düşmədikdə** dayanmaq əvəzinə WebGL-ə keçir.
- **EnergyPlus yoxlaması** yenidən yandırıla bilir.
- **Sənədlər** mərkəzləşdirilmiş dialoq kimi açılır. {{key:Esc}}, X və ya qaralmış səhifəyə klik onu bağlayır.
- **{{ui:Plan}}, {{ui:Split}} və {{ui:3D}} düymələri** Draw bir dəfə yandırılmasını gözləmədən model açılan kimi görünür.

## Açıq məhdudiyyətlər

- Heç nə real avadanlıqda çap olunmayıb. Qətran dayaqları yenidir və hələ sınaqdan keçməyib.
- Külək, seysmik, beton və sonlu elementlər nəticələri mühəndis üçün yoxlama vasitəsidir, real binaya deyil, bağlı düsturlara qarşı yoxlanılıb.
- BIM-ə çevrilmə yalnız sintetik binada sınaqdan keçirilib, real skanda deyil, və yalnız düzbucaqlı otaqları tapır.
- Collada burada Blender və ya Google Earth-də açılmayıb.
- İşıqlandırma qiymətləndirməsi öz izləmə alətimizlə yoxlanılıb, digər işıqlandırma proqramları ilə yox.
- Cənubi Afrika rəqəmləri təsdiqlənməyib.
- Ingilis dilindən başqa dillər maşın qaralamalarıdır.
- Divar birləşmə üslubları (düz birləşmə, bucaq kəsimi, künc düzəltmə) və qat prioriteti hazır deyil; künclər bucaq kəsimi ilə birləşdirilir.

Qalan hər şey [Hələ nə qurulmayıb](topic:not-built-yet) səhifəsindədir. Əvvəlki dəyişikliklər bu səhifədə aşağıda 0.8 və 0.8.1 qeydlərindədir.

## Əvvəlki: 0.8 və 0.8.1

Bu, BimCraft 0.8 (2026-11-01) və 0.8.1 (2026-11-02) versiyalarında 0.7-yə nisbətən nəyin dəyişdiyini göstərir. BimCraft indi binalar haqqında suallara cavab verə və onları insanlar, səs, su, külək və zəlzələlərlə sınaya bilir, və daha çox alətlə çəkə bilir; 0.8.1 düzəliş buraxılışıdır.

### Yeni

**Binanı sınayın**

- **Binadakı insanlar.** Sol panelin {{ui:People in the building}} bölməsi təxliyə və ya adi iş günü gəlişlərini otaqlarınızdan, qapılarınızdan və pilləkənlərinizdən keçirir. Binanın daraldığı yerdəki növbələri, hər otaqdan çıxışa ən uzun gedişi və sonuncu adamın nə qədər vaxt apardığını görürsiniz. Dəyişənin nə olduğunu görmək üçün qapıda {{ui:Shut}} qutusunu qeyd edin, yeriyənləri izləmək üçün {{ui:Show the people in the 3D view}} qutusunu qeyd edin. Nəticələr Problemlərə gedir. Dizayn qərarları üçün kobud izdiham modelidir, yanğın təhlükəsizliyi sertifikatı deyil. Bax: [Binada insanları gəzdirin](topic:people-in-the-building).
- **Otaq akustikası və dinləmə.** {{ui:Room acoustics}} bölməsi hər otağın reverberasiya müddətini oktava zolaqları üzrə (Sabine və Eyring) ölçüsündən və seçdiyiniz təsvirlərdən verir, öz hədəfinizlə isə hansı udmanın ona çatmaq üçün lazım olduğunu deyir. {{ui:Play it in this room}} səs, alqış, çalınan notlar və ya öz səs faylınızı otaq üçün hesablanmış impuls cavabından keçirərək oxudur. Udma rəqəmləri əvəz etməyiniz üçün tipik dərc olunmuş dəyərlərdir. Bax: [Otaq akustikası](topic:room-acoustics).
- **Sel, külək və zəlzələ oxutması.** {{ui:Hazard playback}} suyun otaqlara qalxmasını, hər mərtəbədə külək təzyiqini və zaman sürgüsü ilə plan və ya fasadda mərtəbələrin silkələnməsini zəlzələ kimi oxudur. Sadə modellər və onların fərziyyələri panelə yazılır; norma yoxlaması deyil. Bax: [Sel, külək və ya zəlzələni oxudun](topic:hazard-playback).
- **Əlli ildə nə köhnəlir.** {{ui:Life-cycle view}} hər birinin xidmət müddəti olan pəncərələri, qapıları, təsvirləri və damı, əvəz olunma illərini, vahid qiymət yazdığınız zaman isə illər üzrə dəyəri və indiki dəyərini siyahılayır. {{ui:Save the schedule (CSV)}} onu yazır. Xidmət müddətləri planlaşdırma rəqəmləridir. Bax: [Əlli ildə nə köhnəldiyini görün](topic:life-cycle-view).
- **Beton və seysmik yoxlamalar.** {{ui:Analysis}} tabının {{ui:Concrete members}} və {{ui:Seismic loads}} blokları beton tirləri və sütunları ACI 318-19 üzrə yoxlayır və bərk döşəmələrdə ASCE 7-22 üzrə ekvivalent yanal qüvvələr və mərtəbə sürüşməsi hesablayır. Mühəndis yoxlaması üçündür. Bax: [Beton elementlərini yoxlayın və seysmik yükləri hesablayın](topic:concrete-and-seismic).

**Yoxlayın və hesabat verin**

- **IDS ilə yoxlayın.** Müştərinin verdiyi `.ids` faylını yükləyin və IFC-ni təhvil verməzdən əvvəl ona uyğun gəlməyən hər elementi Problemlərdə görün. {{ui:Model checks}} altında {{ui:Check against an IDS}} açın. Bax: [Modeli müştərinin IDS-i ilə yoxlayın](topic:check-against-ids).
- **Etiketlər və cədvəllər.** Öz etiketlərinizi təyin edin, onları bir çox elementə birdən qoyun və sütunları, filtrləri və qruplaşdırmaları onları oxuyan cədvəllər yaradın; etiketlər IFC-də saxlanılır. Bax: [Etiketlər və cədvəllər](topic:tags-and-schedules).
- **Modeldən sənədlər.** {{ui:Documents from the model}} açıq IFC-dən spesifikasiya şablonunu doldurur və PDF, Word sənədi və ya Markdown kimi saxlayır. Bax: [Modeldən sənədlər](topic:documents-from-the-model).
- **Skanı modellə müqayisə edin.** Açıq nöqtə buludu ilə {{ui:Compare}} hər elementi tikilmiş, qismən tikilmiş, çatışmayan və ya çatılmamış kimi qiymətləndirir və tikilmə faizini göstərir. Bax: [Skanı modellə müqayisə edin](topic:compare-scan-with-model).
- **Karbon və dəyər.** Karbon paneli redaktə edə biləcəyiniz amil cədvəlindən təcəssüm olunmuş karbonu toplayır, Dəyər paneli isə qiymətləri 4D cədvəlinə bölür. BimCraft ilə gələn amillər ümumidir və yoxlanılmamış kimi qeyd olunub. Bax: [Təcəssüm olunmuş karbon və dəyər](topic:embodied-carbon-and-5d-cost).
- **İstənilən xəritə proyeksiyası.** {{ui:Measure}} › {{ui:Coordinate system…}} EPSG nömrəsi, UTM zonası, ad və ya öz proyeksiya təsvirinizi qəbul edir. Bax: [İstənilən proyeksiya ilə georeferanslama](topic:georeference-any-projection).

**Çəkin və redaktə edin**

- **Hərəkət, Düzləşdirmə və Paylama.** {{ui:Build}} altında; {{key:Shift+M}} Hərəkəti başladır (adi {{key:M}} hələ də Ölçmədir). Hərəkət {{key:C}} ilə gedərkən kopyalayır, hər addım bir geri qaytarmadır və Live TeamWork sessiyasında hərəkət edir. Bax: [Köçürün, kopyalayın, düzləşdirin və paylayın](topic:move-align-distribute).
- **Planın altında şəkillər.** {{ui:Build}} › {{ui:Picture}} səviyyənin planının altında və ya şaquli müstəvidə PNG, JPEG və ya WebP yerləşdirir. Miqyası iki nöqtə ilə təyin edin, yerini dəyişin, döndərin, solğunlaşdırın və kilidləyin. MarkupCraft-da kopyalanmış sahə vərəqinin miqyasında yapışdırılır. Bax: [Planın altına şəkil qoyun](topic:pictures-as-backgrounds).
- **Skandan divarlar.** Skan açıq olanda divarlar, qapılar və otaqlar təkliflər kimi gəlir; onları birbaşa saxlayır və ya rədd edirsiniz, hamısı bir geri qaytarma addımında. Yalnız iki perpendikulyar istiqamətdəki divarlar tapılır. Bax: [Skanı divarlara çevirin](topic:scan-to-walls).
- **İzləmə, qələmlər və skeç pilləkən.** {{ui:Trace}} başqa səviyyəni planın altında xətlə göstərir, {{ui:Pens}} divarlara, qapılara və pəncərələrə bir görünüşdə öz xətt qalınlığını verir, {{ui:Sketch stair}} gəzinti xəttini pilləkənə çevirir. Wavefront OBJ şəbəkəsi açılır. Bax: [Səviyyəni izləyin, qələmləri və eskizdən pilləkəni yaradın](topic:trace-pens-stairs-obj).
- **Ünvana görə binalar.** CivilCraft-ın Ünvandan sahə tapdığı binalar və sahə təkliflər kimi gəlir; əlavə etmək istədiklərinizi qeyd edirsiniz. Bax: [CivilCraft-ın sahəsindən başlayın](topic:site-from-civilcraft).
- **Panel çertyojları.** {{ui:Build}} › {{ui:Panel drawings}} taxta və ya yüngül polad divarları, döşəmələri və damları karkasla çərçivəyə alır və kəsim siyahısını CSV, emal çertyojlarını PDF kimi saxlayır. Başlanğıc dəyərlərdir, struktur layihə deyil. Bax: [Panel çertyojları](topic:panel-drawings).
- **Simvol palitrası və bitkilər.** {{ui:Build}} › {{ui:Symbol palette}} elektrik və santexnika simvollarını adına görə tapır; {{ui:Library}} mənbəsinin {{ui:Plants}} bölməsi plan simvolları olan təxminən 400 bitkini siyahılayır. Bax: [Simvol palitrası](topic:symbol-palette) və [Bitki yerləşdirin](topic:plant-list).

**Borular, hava kanalları və enerji**

- **Bölünmüş, VRF və fankoyllar.** Daxili və xarici qurğular öz birləşmələri ilə, xətt dəstləri isə dəyişə biləcəyiniz tipik nümunə dəyərləri cədvəlindən ölçülür. Bax: [Bölünmüş, VRF və fankoyllar](topic:split-vrf-fan-coils).
- **Hesablamalar.** Hesablamalar paneli təchizat borularını və hava kanallarını təzyiq itkisi ilə yoxlayır, kabelləri tirələrdən və borulardan keçirir və onların doluluğunu göstərir, IES və ya EULUMDAT fayllarından isə işıqlanmanı hesablayır. Defoltlar etiketlənib; kodunuzun dəyərlərini yazın. Bax: [Boru, hava kanalı, kabel və işıq hesablamaları](topic:mep-calculations).
- **PCF faylları.** Boru aləti üçün **Export PCF** boru gərginliyi və izometrik proqramlar üçün xətləri yazır, geri oxunan PCF faylı isə borunu çəkir. Bax: [Boru komponent faylları](topic:piping-pcf).
- **Günəş PV.** Massivləri damlara və ya yerə quraşdırın, modeldən kölgələndirin, illik enerji təxmin edin, sətirləri yoxlayın və təkxətli diaqram məlumatı yaradın. Başlanğıc modul və itkilər ümumidir. Bax: [Günəş PV](topic:solar-pv).
- **EnergyPlus faylı.** EnergyPlus ilə yoxlama paneli modeli öz EnergyPlus-unuzda işlədilə bilən IDF kimi yazır. Brauzerdə işlətmək özünüz yerləşdirdiyiniz və ünvanını yazdığınız quruluş tələb edir; BimCraft onu özü daşımır. Bax: [EnergyPlus ilə istilik və soyutmanı yoxlayın](topic:check-with-energyplus).

**Fayllar və şəkillər**

- **Render mühərriki seçimi.** {{ui:Render}} bölməsində {{ui:Engine}} seçimi var. İki daxili mühərrikimiz (Fast və Path tracer) defolt olaraq qalır. **Birlikdə aç** səhnəni USD və ya glTF faylı kimi, Unreal layihə qovluğunu isə .zip kimi saxlayır; CadCraft Studio-da əlavə mühərrik əlavə edə bilər. Layihəni açan Unreal plagini buraxılmayıb. Bax: [Şəkli hansı proqramın çəkdiyini seçin](topic:render-engines).
- **Studio geri qaytarması.** CadCraft Studio daxilində BimCraft Studio-ya hər bitmiş addımı bildirir ki, Studio sizin istifadə etdiyiniz son pəncərədə son addımı geri qaytara bilsin. Bax: [Tətbiqlər arasında geri qaytarma](topic:undo-across-apps).
- **Faylınızdakı əlavələr.** IFC hansı əlavələrin onu yazdığını qeyd edir və onu açanda sizdə olmayanları təklif edir. Bax: [Faylınızdakı əlavələr](topic:add-ons-in-your-file).

**Hər tətbiqdə**

- **Süni intellekt köməkçiniz** Studio bağlantısı ilə BimCraft-ı idarə edə və modelin haqqında suallara cavab verə bilər, məsələn hansı otaqların verilmiş sahə altında olduğu. Studio-nun öz süni intellekti yoxdur. Bax: [Süni intellekt köməkçisinin modelinizlə işləməsinə icazə verin](topic:assistants).
- **Lent sətirləri.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} Wrap, 2 sətir və ya 1 sətir təklif edir; Wrap defolt olaraq qalır.
- **Giriş qurğuları.** Trackpad, qələm, 3D siçan, idarəedici və MIDI parametrləri bütün tətbiqlər üçün ümumidir.
- **Problemlər və Live.** Xəbərdarlıq paneli və Live sessiyaları əvvəlki kimi işləyir, yuxarıdakı yeni yoxlamalar isə Problemlərə gedir.
- **Dillər.** 54 dil, onlardan on yenisi. İngilis dilindən başqa dillər hələ ana dili danışan tərəfindən oxunmamış maşın qaralamalarıdır; yardım mövzuları əsasən ingilis dilindədir.

### 0.8.1-də düzəldilib

- **Lent + Layihə brauzeri tərtibatı.** Daxil et › CAD idxalı, Daxil et › Şəkil və İdarəetmə › Layihə vahidləri "BimCraft-da hələ qurulmayıb" deyirdi. İndi Şəkil Şəkil aləti açır, CAD idxalı {{ui:Build}} › {{ui:From a drawing…}} açır (DWG, DXF, PDF və ya skan), Layihə vahidləri isə {{ui:Settings}} › {{ui:Global}} › {{ui:Units}} açır. Hərəkət və Düzləşdirmə öz alətlərini işə salır, Səviyyə {{ui:Add levels…}} açır, Mərhələlər təmir mərhələləri bölməsini, Materiallar isə material kitabxanasını açır.
- **DWG sinifləri bölməsi.** Yanlış növ kimi oxunurdu; BimCraft-da və DWG oxuyan digər tətbiqlərdə düzəldilib.
- **İş vaxtında dil.** Studio və paketlənmiş nəşrlər indi yenidən başlatmadan dili dəyişə bilir. Hər platformada hələ sınaqdan keçməyib; dil dəyişmirsə bizə bildirin.
- **Archicad paket skripti.** Ayrıca yüklənən `archicad_bundle.py` indi Archicad-ın yolunu tapır, qovluğu 20 saniyəyə qədər izləyir və paketin yanında yenidən cəhd edir.

### Bu versiyada hələ yoxdur

- **Təhlükəsizlik və dizayn köməkçiləri.** Binadakı insanlar binanın norması üzrə gediş məsafəsi limitinə malik deyil (limiti siz yazırsınız) və real planda əl ilə yoxlanılmayıb. Akustika, həyat dövrü və sel rəqəmləri planlaşdırma dəyərləridir, norma yoxlaması deyil.
- **İqlim gələcəkləri və EnergyPlus.** Daxili iqlim gələcəkləri yoxdur: sel işi üçün ssenari faylı yükləyə bilərsiniz. Brauzerdə EnergyPlus işi bu buraxılışın hissəsi deyil.
- **Lent tərtibatı.** Material Takeoff "Hazır deyil" olaraq qalır, çünki BimCraft-ın material miqdarları siyahısı yoxdur; 54 digər boz lent aləti üçün isə hələ BimCraft aləti yoxdur.
- **İmzalama və platformalar.** Windows quraşdırıcıları və macOS .dmg imzasızdır, ona görə SmartScreen {{ui:More info}}, sonra {{ui:Run anyway}} göstərir; macOS-da sağ klik, sonra {{ui:Open}} lazımdır. iPad və iPhone quruluşu 0.8.1 üçün yenidən qurulmayıb.
- **Real səhifə testləri.** Bəzi köhnə BimCraft brauzer testləri 0.8.1-dən əvvəl olduğu kimi, bizim test səhifəmizdə hələ də uğursuz olur.

Qalan hər şey [Hələ nə qurulmayıb](topic:not-built-yet) səhifəsindədir. Daha əvvəlki dəyişikliklər [0.7-də yeniliklər](topic:whats-new-0-7) səhifəsindədir.
