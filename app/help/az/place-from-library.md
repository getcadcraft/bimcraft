---
title: Kitabxanadan avadanlıq və mebel yerləşdirin
summary: Kitabxanada, faylda və ya açıq çertyojda element tapın, IFC modelin mərtəbəsinə şəffaf önizləmə ilə yerləşdirin, döndərin, divara bağlayın və saxlayın.
keywords: köçürmə, döndərmə, fırlatma, sürükləmə, kitabxana, librarycraft, yerləşdirmə, daxiletmə, avadanlıq, mebel, blok, ailə, element, katalog, məzmun, kcl, csv, gltf, obj, rfa, dwg, ifc tipi
from: 3dad5d4b
---

## Nə edəcəksiniz

Kitabxana elementini IFC modelinə qoyun: lavabo, iş masası, stul. BimCraft onu tipi olan düzgün IFC elementi kimi yazır, beləliklə eyni elementin hər nüsxəsi bir həndəsə dəstini paylaşır, və onun məlumatları, element nömrəsi və lisenziyası onunla birlikdə gedir.

## Addımlar

1. IFC modeli açın.
2. Sağda {{ui:Xassələr}} yanındakı {{ui:Kitabxana}} sekməsini klikləyin, və ya modelin üstündəki alətlər panelində {{ui:Kitabxana}}.
3. Mənbə seçin:
   - **Daxili simvollar**: BimCraft ilə Apache-2.0 altında gələn ümumi santexnika plan simvolları, offlayn mövcuddur. Tikintidən əvvəl ölçülərini yoxlayın. Elektrik plan simvolları və IFC elektrik cihazları üçün **Versiya › Elektrik** istifadə edin.
   - **Kitabxana**: bu saytdakı CadCraft kitabxanası. Açıq elementlər daxil olmağı tələb etmir.
   - **Bu fayl**: açıq DWG və ya DXF çertyojunun blokları. Görünürlük vəziyyətləri olan dinamik blok hər vəziyyət üçün bir dəfə təklif olunur, "Lavabo: İki kasa" kimi adlanır, və hər biri yalnız o vəziyyətin obyektləri ilə çəkilir.
   - **Fayllar…**: kompüterinizdəki DWG, DXF, IFC, glTF/GLB, OBJ, RFA və ya CSV faylı. Bu sekmədə oxunur; heç nə yüklənmir.
   - **Digər mənbələr**: eyni mənbə formatını qəbul edən başqa kitabxana. Ünvanını bir dəfə əlavə edin; bu brauzerdə saxlanılır.
4. Kateqoriyanı axtarın və ya seçin, sonra karta klikləyin. Kartda plan önizləməsi, ad, istehsalçı və model, lisenziya və versiya göstərilir.
5. {{ui:Plana yerləşdir}} (Plan görünüşündə) və ya {{ui:Modelə yerləşdir}} (3D görünüşündə) klikləyin. {{ui:Bölünmüş}} görünüşdə, plan və 3D görünüş birlikdə göstərildikdə, düymə bölünmüş düymədir: əsas əməliyyatı {{ui:Plana yerləşdir}}-dir, sağ ucdakı ox {{ui:Modelə yerləşdir}} olan menyunu açır. Və ya kartı, və ya elementin təfərrüatındakı şəkli planın və ya 3D görünüşün üzərinə sürükləyin: elementi buraxdığınız yerdə yerləşdirilir. Qələm və ya barmaqla kartı bir az basıb saxlayın, sonra sürükləyin.
6. Yerləşdirmə panelində mərtəbəni seçin. 3D görünüşdə, onun üstündəki mərtəbələr yerləşdirərkən gizlədilir və görünüş yuxarıya dönür; planda plan artıq o mərtəbəni göstərir. Yalnız planda {{ui:Modelə yerləşdir}} seçmək 3D görünüşü yanında açır.
7. Göstəricini modelin üzərinə gətirin: şəffaf qutu elementin hara getdiyini göstərir.
8. {{key:R}} basın — 90° döndərir. {{key:Tab}} basın (və ya {{ui:Divara bağla}}) ki, onun arxası ən yaxın divara dayansın, otağa baxaraq.
9. Klikləyin ki, yerləşdirin. Və ya **X, Y (mm)**-də mövqeyi yazın, məsələn `1200, 3400`, və {{key:Enter}} basın.

Lampa və ya yuxarıdan asılan hər hansı şey üçün **Montaj**-ı **Tavanda** qoyun. Elementin üstü həmin nöqtədə tavanın altına (və ya tavan yoxdursa mərtəbənin hündürlüyünə) oturur. Planda tavan planı olduqda **Montaj** planda **Tavanda** ilə başlayır.

10. Bir sual cavablandırın: **element nömrəsi** (növbəti boş nömrə doldurulur), miqdar və qeyd. {{key:Enter}} basın.
11. Daha çox yerləşdirin, və ya dayanmaq üçün {{key:Esc}} basın.
12. Redaktə olunmuş nüsxəni yükləmək üçün {{ui:IFC kimi saxla}} klikləyin.

## Plan və ya model

Kitabxananın yerləşdirmə düyməsi sizin baxdığınız görünüşü izləyir və görünüşü dəyişdikdə dərhal dəyişir ({{ui:Plan}}, {{ui:Bölünmüş}} və {{ui:3D}} düymələri, klaviatura, faylı açmaq). Plan bir düymə göstərir, {{ui:Plana yerləşdir}}; 3D bir düymə göstərir, {{ui:Modelə yerləşdir}}; Bölünmüş bölünmüş düyməni göstərir, əsas əməliyyat {{ui:Plana yerləşdir}}-dir və menyuda {{ui:Modelə yerləşdir}} var. Hər iki yol eyni yerləşdirmə panelini istifadə edir və eyni IFC elementini yazır: göstərici birində plan görünüşündə, digərində 3D görünüşdə işləyir. Dayanmaq üçün istənilən vaxt {{key:Esc}} basın.

Kartı sürükləmənin öz klavişi yoxdur: bölünmüş düymə, və ya sadə düymə klaviaturada eyni işi görür.

## Yerləşdirilmiş elementi köçürün və ya döndərin

{{ui:Çək}} rejimində planda elementi seçin. Onun yerləşdirmə nöqtəsində kvadrat tutacaq və yanında dairəvi tutacaq görünür.

- Elementi və ya kvadrat tutacağı sürükləyərək köçürün. Divar alətinə oxşar şəkildə bağlanır (divar ucları və üzləri); {{key:Shift}} onu əvvəlki yerinə görə kvadrat saxlayır.
- Dairəvi tutacağı 15° addımlarla döndərmək üçün sürükləyin. 1° addımlar üçün {{key:Shift}} basıb saxlayın.
- {{key:R}} basın — 90° döndərir.
- **Xassələr**də (3D görünüşdə də) **X**, **Y** və **Fırlanma (°)** yazın, və ya **90° döndər** klikləyin.

Hər köçürmə bir geri-alma addımıdır və Live TeamWork-də gedir. Element öz element nömrəsini, kitabxana məlumatını və səviyyədən yüksəkliyini saxlayır. Hələ hazır deyil: 3D görünüşdə sürükləmək.

## Nəyi görməlisiniz

- Modeldə element, seçilmiş, sağda xassələri ilə: lisenziyası və mənbəsi olan **Kitabxana elementi** qutusu və `CadCraft_Placement`, `CadCraft_LibraryItem`, `CadCraft_Equipment` dəstləri və, etiketli çertyojlardan olan elementlər üçün, `CadCraft_SourceAttributes`.
- Dəyişikliklər siyahısında "Yerləşdirildi: *element* (element *n*)". {{key:Mod+Z}} onu geri alır.
- Status xətti: "*Element* element nömrəsi *n* ilə yerləşdirildi."

## Yaxşı bilmək

- Bəzi elementlər bir neçə ölçüdə və ya variantda gəlir: kartda **Variant** seçimi olur və seçdiyiniz yerləşdirilir. Bax: [Variantları olan kitabxana elementini yerləşdirin və dəyişdirin](topic:library-variants).
- 3D gövdəsi olmayan element (2D simvol) əvəzedici qutu ilə yerləşdirilir; soruşulanda hündürlüyünü verirsiniz.
- Daha çoxu: yerləşdirilmiş elementi seçin və {{ui:Kopyala}} və {{ui:Yapışdır}} istifadə edin, və ya {{key:Mod+D}}. Bax: [Kitabxana elementlərini kopyalayın, yapışdırın və təkrarlayın](topic:copy-paste).
- Hər yerləşdirməni divar bağlamasında başlatmaq üçün [BimCraft parametrləri](topic:settings) bölməsində **Divar bağlamasını açıq başlat** seçimini açın.
- Uzunluqlar modelin öz vahidlərinə çevrilir, nə olursa olsun.
- **Entourage** (ağaclar, kollar, insanlar, avtomobillər) da kitabxanadadır: "ağac", "insan" və ya "avtomobil" axtarın. Bunlar CadCraft (CC0) tərəfindən çəkilib və yerləşdirildikdə rənglərini saxlayır (gövdə qəhvəyi, yarpaqlar yaşıl, avtomobilin pəncərələri şəffaf), BimCraft-da və digər BIM proqramlarında. Onlar [render olunmuş şəkillərdə](topic:render) göstərilir.
- IFC2X3 faylında gövdə faceted solid kimi, IFC4-də üçbucaqlı üz dəsti kimi yazılır. Hər ikisi digər IFC alətlərində açılır.
- DWG və ya DXF çertyoj burada saxlanıla bilməz, buna görə elementlər yalnız IFC modellərinə yerləşdirilir. Çertyojda blokların nəyə çevriləcəyini görmək üçün **Bu fayl**-dan istifadə edin.

## Elementlər sizin dilinizdə

Element öz adını, təsvirini və tipini başqa dillərdə də daşıya bilər. BimCraft-ın quraşdırıldığı dildə (Parametrlər › Ümumi › Dil) varsa, elementin səhifəsi onları göstərir, altında istehsalçının verdiyi ad, və **Yerləşdir** modelə öz dilinizdəki adı yazır, beləliklə {{ui:Avadanlıq}} cədvəli onu belə sadalayır. Element eyni elementdir: yenilənmələri yoxlamaq və dəyişdirmək elementin özünə görə edilir, heç vaxt adına görə yox. Tərcüməsi olmayan elementlər öz sözlərini saxlayır.

## Tez-tez səhvlər

- **Yerləşdirmə düyməsi yoxdur.** IFC modeli açıq deyil. Əvvəl birini açın.
- **Şəffaf element göstəricini izləmir.** Göstərici modelin sahəsindən kənardır, və ya mərtəbə müstəvisi görünmür. {{ui:Üst}} klikləyin.
- **{{ui:Divara bağla}} divar olmadığını deyir.** Mərtəbənin IFC-də divarı yoxdur (bəzi ixraclar divarları başqa mərtəbəyə qoyur). Həmin mərtəbəni seçin və ya X və Y yazın.
- **Faylın elementləri səhv ölçüdədir.** Faylda vahidlər yoxdur və ya səhv vahidləri göstərir. {{ui:Fayllar…}}-da vahidləri seçin və yenidən oxuyun.

:::tip
Eyni elementi iki dəfə yerləşdirmək eyni IFC tipini paylaşır, beləliklə qırx stulu olan model stulu bir dəfə saxlayır.
:::
