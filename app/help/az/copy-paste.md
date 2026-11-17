---
title: Kitabxana elementlərini kopyalayın, yapışdırın və surətini çıxarın
summary: Yerləşdirilmiş kitabxana elementini kopyalayın və klik etdiyiniz yerə, yerində (orijinalın yanına) ya da başqa modelə yapışdırın; hər hansı digər elementin xüsusiyyətlərini mətn kimi kopyalayın; geri qaytarın və təkrarlayın.
keywords: kopyala, yapışdır, surət çıxar, mübadilə buferi, yerində yapışdır, kəs, sil, hamısını seç, geri qaytar, təkrarla, redaktə menyusu, daha çox, kitabxana elementi, yerləşdirmə, təkrar, massiv
from: 6ac15931
---

## Nə edəcəksiniz

Artıq yerləşdirdiyiniz elementin əlavə nüsxələrini qoyun: ikinci iş masası, bir sıra lavabo. Bu mövzu **yerləşdirilmiş kitabxana elementləri** haqqındadır — BimCraft-ın modelə yazdığı elementlər: onlardan biri istənilən modelə, hətta başqa sekmədə olsa belə, yapışdırıla bilər. Divarlar, qapılar və bütün digər elementlər öz modelləri daxilində eyni qayda ilə kopyalanır, kəsilir, yapışdırılır və silinir: bax [Tikinti elementlərini silin, kəsin, kopyalayın və yapışdırın](topic:edit-elements).

Komandalar modelin üstündəki alətlər panelindədir: {{ui:Geri qaytar}}, {{ui:Təkrarla}}, {{ui:Kopyala}}, {{ui:Yapışdır}} və {{ui:Daha çox}}, bu menyuda {{ui:Kəs}}, {{ui:Kopyala}}, {{ui:Yapışdır}}, {{ui:Yerində yapışdır}}, {{ui:Surət çıxar}}, {{ui:Sil}}, {{ui:Hamısını seç}} və {{ui:Heç birini seçmə}} var. Hazırda işləyə bilməyən komanda boz görünür; səbəbini oxumaq üçün üzərinə gətirin, ya da klikləyin və status sətri səbəbi göstərəcək.

## Addımlar

1. Kitabxana elementi olan IFC modelini açın, ya da əvvəlcə bir element yerləşdirin. Bax: [Kitabxanadan avadanlıq və mebel yerləşdirin](topic:place-from-library).
2. 3D görünüşdə elementə klikləyin. Onun xüsusiyyətlərində **Kitabxana elementi** qutusu görünür.
3. {{ui:Kopyala}} düyməsinə klikləyin və ya {{key:Mod+C}} basın.
4. {{ui:Yapışdır}} düyməsinə klikləyin və ya {{key:Mod+V}} basın. Yerləşdirmə paneli açılır və göstəricinin ardınca şəffaf qutu gedir, orijinal kimi fırlanmış halda.
5. Onu 90° fırlatmaq üçün {{key:R}}, arxasını divara bağlamaq üçün {{key:Tab}} basın, ya da yerləşdirmə panelində X və Y yazın.
6. Surətin gedəcəyi yerə klikləyin. Hər klik yeni bir surət yerləşdirir; dayandırmaq üçün {{key:Esc}} basın.
7. Modelin redaktə edilmiş surətini yükləmək üçün {{ui:IFC kimi saxla}} düyməsinə klikləyin.

## Yerində yapışdırma

{{ui:Daha çox}}, {{ui:Yerində yapışdır}} və ya {{key:Mod+Shift+V}} klik etmədən, eyni X və Y-də və eyni cür fırlanmış halda yapışdırır:

- **Eyni modelə, eyni mərtəbədə**: tam eyni yerdə iki element işə yaramaz, ona görə surət birbaşa orijinalın yanına düşür — elementin öz eni boyunca bir element eni üstəgəl 100 mm. Sıra yaratmaq üçün yeni surətdən yenidən yerində yapışdırın.
- **Başqa mərtəbəyə və ya başqa modelə**: dəqiq eyni X, Y və fırlanma. BimCraft eyni adlı mərtəbəni istifadə edir; belə yoxdursa, ən yaxın hündürlükdəkini. Status sətri hansının seçildiyini göstərir.

## Surət çıxarma

{{ui:Daha çox}}, {{ui:Surət çıxar}} və ya {{key:Mod+D}} seçilmiş elementin surətini çıxarır və dərhal yapışdırmağa başlayır: iki addım əvəzinə bir addım.

## Başqa modelə və ya başqa sekməyə

Kopyaladığınız şey bu brauzerdə saxlanılır, ona görə başqa IFC modelini və ya başqa sekmədəki BimCraft-ı aça və orada yapışdıra bilərsiniz. Digər modelə kitabxana elementinin özü lazımdır: BimCraft onu elementin bu sekmədə yerləşdirildiyi, dəyişdirildiyi və ya yeniləndiyi zaman saxlayır. Əvvəlki sessiyada yerləşdirilmiş element yalnız öz modelində yenidən yapışdırıla bilər; başqa modeldə onu {{ui:Kitabxana}} sekmədən yerləşdirin.

## Nə görməlisiniz

- Modeldə surət seçilmiş halda, orijinalla eyni kitabxana elementi, lisenziya, avadanlıq məlumatları, miqdar və qeyd ilə və **növbəti boş element nömrəsi** ilə. Nömrəni Xüsusiyyətlərdə, `CadCraft_Placement` altında dəyişin.
- Dəyişikliklər siyahısında "Yerləşdirildi: *element* (element *n*)". {{key:Mod+Z}} onu geri götürür; {{key:Mod+Y}} onu yenidən qaytarır.

## Bilmək yaxşıdır

- Surətlər orijinalın tipini paylaşır, ona görə hamısı bir həndəsə dəstindən istifadə edir, eyni elementi iki dəfə yerləşdirdikdə olduğu kimi.
- {{ui:Geri qaytar}} və {{ui:Təkrarla}} hər dəyişikliyi əhatə edir: redaktə etdiyiniz dəyərləri, yerləşdirmələri, yapışdırmaları, əvəzləmələri və yeniləmələri. Təkrarla yerləşdirməni eyni yerə qaytarır; yeni dəyişiklik təkrarlana biləni silir.
- Çertyojun 2D görünüşündə seçiləcək heç nə yoxdur, ona görə kopyalanacaq da heç nə yoxdur. Çertyoju dəyişmək üçün, göründüyü halda, {{ui:CadCraft-da redaktə et}} istifadə edin.

## Tez-tez edilən səhvlər

- **{{ui:Yapışdır}} elementlərin başqa modeldən gəldiyini deyir.** Son kopyaladığınız tikinti elementi və ya bir neçə element idi: onlar yalnız öz modelinə yapışdırılır. Yerləşdirilmiş bir kitabxana elementi seçin və kopyalayın.
- **{{ui:Yapışdır}} surətin kitabxana elementi olmadan başqa modeldən gəldiyini deyir.** Elementi bu sekmədə bir dəfə {{ui:Kitabxana}} sekmədən yerləşdirin, sonra kopyalayın və yapışdırın.
- **{{key:Mod+C}} əvəzinə səhifənin mətnini kopyalayır.** Səhifədə mətn seçilmişdi. Əvvəlcə modelə klikləyin.

## Əlaqəli

- [Düymələr və siçan](topic:keyboard#edit)
- [BimCraft parametrləri](topic:settings)
