---
title: Görünüşlər, görünüş diapazonları və öz vərəqləriniz
summary: Layihə brauzerində hər plan, fasad, kəsik, 3D görünüş, cədvəl və vərəqi tapın, hər planın necə kəsildiyini və nə göstərdiyini təyin edin, çağırışlar yaradın, bir görünüşdə xətt və ştrixlamalar çəkin, parametrləri görünüş şablonlarında saxlayın və öz vərəqlərinizi tərtib edin.
keywords: çağırış, çağırış görünüşü, təfərrüat görünüşü, böyüdülmüş plan, çertyojlama, təfərrüat xətləri, çertyoj xətləri, ştrixlama, ştrixlama sahəsi, doldurulmuş sahə, doldurma naxışı, əks olunmuş tavan planı, rcp, tavan planı, tavan şəbəkəsi, işıq qurğuları, layihə brauzeri, görünüşlər, görünüş diapazonu, kəsmə, kəsmə sahəsi, kəsmə görünüşü, görünüş miqyası, altlıq, başqa mərtəbəni göstər, yarımton, kəsmə müstəvisi, kəsmə hündürlüyü, yuxarı, aşağı, görünüş dərinliyi, görünən olma, kateqoriyalar, görünüşdə gizlət, görünüş şablonu, şablonlar, vərəq, vərəqlər, ştamp bloku, görünüş pəncərəsi, miqyas, vərəqləri təşkil et, tərtibat, pdf, plan görünüş parametrləri, brauzer
from: ee1d5afe
---

## Nə edəcəksiniz

BIM layihələri təşkil olunduğu kimi işləyin: bütün görünüşlər bir siyahıda, hər plan istədiyiniz yerdə kəsilmiş, bir neçə plan üçün eyni parametrlər şablonla və öz tərtib etdiyiniz vərəqlər.

## Layihə brauzeri

1. {{ui:Çək}} açın. Sol paneldə modellərin altında {{ui:Layihə brauzeri}} var.
2. Bura daxildir:
   - **Mərtəbə planları**: hər mərtəbə. Birinə basın ki, planını görün. Yanındakı slayder düyməsi görünüş diapazonunu təyin edir (aşağıda). Şablonu izləyən plan şablonun adını göstərir.
   - **Tavan planları**: hər mərtəbənin əks olunmuş tavan planı (aşağıda).
   - **Çağırışlar**: hər çağırış və onun göründüyü görünüş, və {{ui:Yeni çağırış}}. **Çatışmır** itmiş görünüşü olan çağırışları siyahıya salır.
   - **Fasadlar** və **Kəsiklər**: dörd tərəf və hər kəsik xətti. Birinə basın ki, onların çəkildiyi çertyoj dəstini açın.
   - **3D görünüşlər**: {{ui:Görünüşlər}} ilə saxladığınız görünüşlər.
   - **Cədvəllər**: birinə basın, planın altında göstərin.
   - **Vərəqlər**: yaratdığınız vərəqlər, {{ui:Yeni vərəq}} və bütün dəst üçün modeldən yaradılmış {{ui:Çertyoj dəsti…}}.
   - **Görünüş şablonları**, {{ui:Yeni şablon}} ilə, və **Bağlantılar** (bağlı modellər).

## Planın görünüş diapazonunu təyin edin

1. **Mərtəbə planları** siyahısında mərtəbənin yanındakı slayder düyməsinə basın.
2. Həmin mərtəbənin üstündə hündürlükləri təyin edin:
   - **Kəsilən yer**: divarların, qapıların və pəncərələrin planın kəsildiyi yer (dəyişməsəniz 1200 mm, təxminən 4 fut).
   - **Yuxarı**: kəsikdən yuxarıda və yuxarı sərhəddin altında olan şeylər kəsik xətti ilə çəkilir (hündür dolab, tir). Boş buraxsanız mərtəbənin hündürlüyü.
   - **Aşağı** və **Aşağıdan dərinlik**: kəsikdən aşağıda olan şeylər nazik xətlərlə aşağıya qədər, və ondan da aşağıda çəkilir.
3. **Bu planda göstərilir** altında bu planın buraxdığı şeyləri (mebel, otaqlar, sütunlar və s.) silin.
4. Tək-tək elementləri buraxmaq üçün planda və ya 3D görünüşdə onları seçin, dialoqu açın və {{ui:Seçilmişləri burada gizlət}} basın. {{ui:Hamısını göstər}} onları geri qaytarır.
5. {{ui:Bu parametrləri istifadə et}} basın.

Plan dərhal yenidən kəsilir, çertyoj dəsti və vərəqləriniz onu izləyir. Nöqtə buludunun dilimi də kəsmə hündürlüyünü izləyir.

## Planı kəsin, miqyas verin, altında başqa mərtəbəni göstərin

Üçü eyni dialoqdadır (mərtəbənin yanındakı slayder düyməsi):

- **Miqyas**: planın çap olunduğu miqyas ({{ui:Çap}} planın panelində) və vərəqə düşdüyü miqyas. {{ui:Sığdır}} sığacaq ən böyük standart miqyası seçir.
- **Kəsmə sahəsi**: {{ui:Planda çək…}} basın, sonra planda bir künc və əks künc basın ({{key:Esc}} dayandırır). Kəsmə sahəsindən kənar plan ekranda örtülür və orada hələ də işləyə bilərsiniz; çapda, vərəqlərdə və çertyoj dəstində plan yalnız daxilində olanı göstərir. {{ui:Təmizlə}} kəsməni aradan qaldırır. {{ui:Sığdır}} kəsmə sahəsinə sığdırır.
- **Altlıq**: başqa mərtəbəni seçin. Onun divarları, kəsilmiş elementləri, qapıları və pəncərələri bu planın altında açıq çəkilir, aşağıdakı və ya yuxarıdakı mərtəbə ilə düzgün yerləşdirmək üçün. Burada onları seçə bilməzsiniz və açıq boz çap olunur.

Görünüş şablonu miqyası hündürlüklər və kateqoriyalarla birlikdə daşıyır. Kəsmə sahəsi və altlıq həmişə yalnız bir plana aiddir.

## Mərtəbənin tavan planı

Hər mərtəbənin mərtəbə planının yanında əks olunmuş tavan planı var: aşağıdan görünən plan, tavanların və onlardan asılan şeylərin tərtibi üçün.

1. **Tavan planları** altında mərtəbəyə basın və ya planın panelində mərtəbənin yanında {{ui:Tavan planı}} seçin.
2. Divarlar 2300 mm-də (təxminən 7'-6") kəsilir. Həmin kəsikdən yuxarı və mərtəbənin hündürlüyündən aşağı olan hər şey çəkilir: şəbəkəsi və hündürlük etiketi (`CLG 2438`) olan tavanlar, işıqlar, tirlər. Qapılar, pəncərələr və kəsikdən aşağıda olanlar buraxılır.
3. Tavan yaratmaq üçün mərtəbə planındakı kimi {{ui:Tavan}} istifadə edin, sonra onu seçin və Xassələrdə **Naxış** seçin. Bax: [Otaqlar, döşəmələr, tavanlar və damlar](topic:floors-and-roofs).
4. İşığı ondan asmaq üçün tavan planı göstərilərkən kitabxanadan elementi yerləşdirin: o, **Tavanda** yerinə düşəcək. Bax: [Kitabxanadan avadanlıq və mebel yerləşdirin](topic:place-from-library).
5. Tavan planının yanındakı slayder düyməsi mərtəbə planı kimi kəsmə və yuxarını, miqyası, kateqoriyaları, kəsmə sahəsini və altlığı təyin edir. Tavan planları görünüş şablonu qəbul etmir.

Plan kimi eyni istiqamətdə çəkilir (əks olunmuş plan, güzgü şəkli deyil). Kəsikdən aşağı olan tavan çəkilmir: həmin mərtəbənin tavan planı üçün kəsiyi aşağı salın. Tavan planları da planlar kimi öz vərəqlərinizə düşür; çertyoj dəsti onları özü əlavə etmir.

## Çağırış yaradın

Çağırış planın bir hissəsini öz miqyasında, öz görünüşü kimi böyüdür: mətbəx, pilləkən, divar küncü.

1. Ona aid olan plan, tavan planı və ya çağırışı göstərin.
2. Planın panelində {{ui:Şərh et}} › {{ui:Çağırış}} seçin (və ya brauzerdə {{ui:Yeni çağırış}}), sonra sahənin bir küncünə və əks künca basın. {{key:Esc}} dayandırır.
3. Çağırış 1:20 miqyasında yaradılır (futla və düymlə 1/2" = 1'-0"). Onun düzbucaqlısı və dəyirmi etiketi planda çəkilir.
4. {{ui:Seç}} ilə etiketə və ya brauzerdə çağırışa basın ki, onu açın: plan yalnız həmin sahəni çağırışın miqyasında göstərir. Panel {{ui:Çağırış:}} və onun adını göstərir; {{ui:Yuxarı}} onun çəkildiyi görünüşə qayıdır.
5. Yanındakı slayder düyməsi (brauzerdə və ya panelda) onu yenidən adlandırır, miqyasını dəyişir, düzbucaqlısını yenidən çəkir və ya silir.

Çağırış öz görünüşünün göstərdiyini göstərir: eyni kəsik, eyni kateqoriyalar, tavan planının tavanları. Çağırışın içindəki çağırış da eyni qayda ilə işləyir. Çağırışı vərəqə plan kimi qoyun; etiketi onun harada olduğunu göstərir (`1 / A-501`: A-501 vərəqində birinci görünüş). {{ui:Çap}} çağırışda yalnız o sahəni öz miqyasında çap edir.

Çağırışı silmək içindəki çağırışları, onların içində çəkilmiş xətləri və ştrixlamaları da silir (əvvəlcə soruşulur). Çağırışın çəkildiyi mərtəbə silinərsə, çağırış onu silənə qədər **Çatışmır** altında qalır və üzərində olduğu vərəqlər onu itmiş kimi bildirir.

## Bir görünüşdə xətt və ştrixlama çəkin

Çertyojlama yalnız bir görünüşə aid olan 2D işdir: xətlərlə qeydlər, betonun və ya torpağın ştrixlanmış sahəsi, doldurulmuş sahə. Heç vaxt 3D görünüşdə və ya başqa planda olmur.

1. Çəkmək üçün mərtəbə planını, tavan planını və ya çağırışı göstərin.
2. Planın panelindən {{ui:Şərh et}} seçin:
   - {{ui:Sətir}}: harada başladığını və bitdiyini basın. Növbəti xətt son xəttin bitdiyi yerdən başlayır; {{key:Enter}} yenidən başladır.
   - {{ui:Polixətt}}: nöqtələrinə basın; {{key:Enter}} və ya iki dəfə basma onu bitirir, ilk nöqtəyə basma onu bağlayır.
   - {{ui:Düzbucaqlı}}: əks iki künc.
   - {{ui:Ştrixlama sahəsi}}: paneldə **Naxış** (Dolu, Diaqonal, Çarpaz ştrix, Beton, İzolyasiya, Torpaq) və miqyasını seçin, sonra künclərə basın; {{key:Enter}}, iki dəfə basma və ya ilk künc üzərində basma onu bağlayır. {{ui:Otağı doldur}} işarələnəndə otaqda bir klik onun konturunu ştrixləyir.
3. Nöqtələr divarlar kimi bağlanır; {{key:Shift}} xətti kvadrat saxlayır və divarlarda olduğu kimi uzunluq yaza bilərsiniz. {{key:Backspace}} son nöqtəni geri alır.

Planda {{ui:Seç}} ilə xətt və ya ştrixlamanı seçin. Xassələr ştrixlamanın naxışını və miqyasını dəyişir və {{ui:Köçür…}} var (götürüləcək nöqtəyə basın, sonra hara getdiyini basın). {{key:Delete}} onu silir. Hər xətt, ştrixlama və dəyişiklik bir addımdır.

Xətlər və ştrixlamalar planla birlikdə çap olunur, onunla vərəqlərə düşür və çertyoj dəstindədir. Görünüş diapazonunda **Annotasiyalar** seçimini silin ki, həmin görünüşdən çıxarılsın.

## Parametrləri görünüş şablonunda saxlayın

1. Brauzerdə {{ui:Yeni şablon}} basın, və ya plan görünüş diapazonunda {{ui:Şablon kimi saxla…}} basın (plan onu sonra istifadə edir).
2. Ad verin, hündürlükləri və kateqoriyaları təyin edin və {{ui:Şablonu saxla}} basın.
3. İstənilən plan üçün görünüş diapazonunda şablonu seçin. Plan onun hündürlüklərini və kateqoriyalarını alır; şablonu dəyişmək, onu istifadə edən hər planı dəyişir. Tək-tək gizlətdiyiniz elementlər öz planında gizli qalır.
4. Dəyişmək, adını dəyişmək və ya silmək üçün brauzerdə şablona basın. Silinmə, planları öz parametrləri ilə buraxır.

## Öz vərəqinizi tərtib edin

1. {{ui:Yeni vərəq}} basın. Nömrəsini və adını yazın və kağızı seçin.
2. Plan, tavan planı, çağırış, fasad, kəsik və ya cədvəlin yanında {{ui:Əlavə et}} basın. O, vərəqin ortasına düşür.
3. Üzərinə sürükləyin. Seçili ikən **Miqyas** seçin və ya planın öz miqyasında saxlayın (plan varsa), yoxsa vərəqin üçdə birinə sığan miqyas. {{ui:Vərəqi çıxar}} onu vərəqdən çıxarır.
4. {{ui:Vərəqi saxla}} basın. **Vərəqlər** altında siyahıya düşür; onu sonra dəyişmək üçün ona basın.
5. {{ui:PDF kimi yüklə}} həmin vərəqi bir səhifə kimi saxlayır.

## Nəyi görməlisiniz

- Planlar sizin hündürlüklərinizlə kəsilir; kəsikdən yuxarıda olanlar kəsik xətti ilə, sildiklərinizi isə yoxdur.
- Kəsilmiş plan ekranda sahəsindən kənarda örtülür və kağızda sahəyə kəsilir, verdiyiniz miqyasda.
- Tavan planı tavanların şəbəkəsi və hündürlük etiketləri ilə, işıqlar tavanda.
- Çağırışlar planda düzbucaqlı və etiketlə, hər biri öz miqyasında açılır.
- Xətlər və ştrixlamalar yalnız çəkdiyiniz görünüşdə.
- Vərəqləriniz hər dəfə açdığınızda modeldən yenidən çəkilir, buna görə həmişə modellə uyğundur. Mərtəbəsi və ya kəsik xətti silinmiş görünüş bildirilir, çəkilmir.
- Buradakı hər dəyişiklik bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

:::note
Hər şey IFC faylında digər proqramların toxunmadığı xassə dəstləri kimi saxlanılır: hər mərtəbənin görünüş diapazonu və tavan planı mərtəbədə, şablonlar, çağırışlar və vərəqləriniz layihədə. Xətlər və ştrixlamalar öz mərtəbəsində IFC annotasiyalarıdır, buna görə digər proqramlar onları 2D əyrilər və ştrixlanmış sahələr kimi görür (hər naxışın öz təsviri ilə), lakin hansı görünüşə aid olduğunu yox.
:::

:::tip
Digər BIM proqramları kəsiyə görünüş diapazonu və ya kəsmə müstəvisi, şablonlara görünüş şablonları və ya görünüş parametrləri, çertyoj xəttinə təfərrüat xətləri və ştrixlama sahəsinə doldurulmuş sahə deyir. Fikirlər eynidir; görünüş parametrləri onlara keçmir.
:::
