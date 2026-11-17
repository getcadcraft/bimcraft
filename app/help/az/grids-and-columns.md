---
title: Şəbəkələr və sütunlar
summary: Şəbəkə xətlərini nömrəli və hərfli dairələrlə qurun, məsafəyə görə və ya tək-tək, onlar boyunca divarlar və sütunlar çəkin və planlarda, fasadlarda və kəsiklərdə görün.
keywords: şəbəkə, şəbəkələr, şəbəkə xətti, sütun şəbəkəsi, ox, oxlar, dairə, konstruktiv şəbəkə, 1 2 3, A B C, sütun, sütunlar, dayaq, tutma, IfcGrid, IfcColumn
from: bf99a8f7
---

## Nə edəcəksiniz

Binanı şəbəkə üzrə qurun, sonra onun xətləri boyunca divarlar çəkin və sütunlar yerləşdirin.

## Bütün şəbəkəni yerləşdirmək

1. {{ui:Çək}} düyməsini işə salın, sonra {{ui:Versiya}} › {{ui:Şəbəkə}} seçin.
2. {{ui:Şəbəkə yerləşdir…}} düyməsini basın. Neçə **nömrəli xətt** (1, 2, 3…) və **hərfli xətt** (A, B, C…) istədiyinizi və aralarındakı məsafəni yazın. Məsafəni tək dəyər kimi yazın və ya qeyri-bərabər göz üçün vergüllə ayrılmış bir neçəsini (məsələn `20', 24', 20'`). {{ui:Son xətlərdən kənara}} hər xəttin digər növün kənar xətlərindən nə qədər kənara uzandığını göstərir, {{ui:Fırlanma (dərəcə)}} isə bütün şəbəkəni fırladır.
3. {{ui:Yerləşdir}} düyməsini basın, sonra ilk kəsişmənin (1 / A) yerinə basın. Önizləmə siçanı izləyəcək.

Nömrəli xətlər planda yuxarı qalxır və boyunca bərabər yayılır; hərfli xətlər planı kəsərək uzanır və yuxarı doğru yayılır. Hərflər çertyojlardakı kimi I və O-nu ötürür, buna görə onlar heç vaxt 1 və 0 kimi oxunmur.

## Xətləri tək-tək çəkmək

{{ui:Şəbəkə}} aktiv olduqda xəttin başladığı və bitdiyi yerə klik edin. O, boyunca uzandığı xətlər növünün növbəti etiketini alır (3-dən sonra 4 gəlir; B-dən sonra C). Dayandırmaq üçün {{key:Esc}} basın.

## Şəbəkə xəttini dəyişmək

{{ui:Şəbəkə}} aktiv olduqda xətti seçmək üçün ona klik edin. Yeni {{ui:Etiket}} yazın və {{key:Enter}} basın, və ya {{ui:Bu xətti sil}} düyməsini basın (və ya {{key:Delete}} basın). {{ui:Dairələr}} dairələri xəttin hər iki ucuna, yaxud başlanğıcına və ya sonuna qoyur, və ya heç yerə qoymur. Hər dəyişiklik bir addımdır: {{key:Mod+Z}} onu geri qaytarır.

## Şəbəkə boyunca çəkmək

{{ui:Divar}} aləti, {{ui:Sütun}} aləti və digər çəkmə alətləri şəbəkə xətlərinə və onların kəsişdiyi yerlərə tutulur (tutma işarəsi kiçik çarpazlı dairədir).

**Sütunlar:** {{ui:Versiya}} › {{ui:Sütun}} seçin, formanı (düzbucaqlı və ya dairəvi), ölçünü və sütunun **yuxarı mərtəbəyə qədər** getməsini, yaxud sabit hündürlüyə qədər olmasını seçin, sonra klik edin. {{ui:Hər şəbəkə kəsişməsində}} hələ sütunu olmayan hər kəsişməyə sütun qoyur. Sütunu seçib formasını, ölçüsünü və ya hündürlüyünü {{ui:Xassələr}} bölməsində dəyişin; {{key:Delete}} onu silir. Yuxarı mərtəbəyə qədər gedən sütunlar həmin mərtəbənin hündürlüyü dəyişdikdə onu izləyir.

## Nə görməlisiniz

- Hər mərtəbənin planında şəbəkə, hər xəttin ucunda dairə və onun etiketi.
- Çertyoj dəstində şəbəkə xətləri: planlarda, və xəttin ucdan göründüyü yerdə fasad və kəsiklərdə, dairəsi binanın üstündə. Bax [Fasadlar, kəsiklər və vərəqlər](topic:sheets).
- IFC faylında: bina üçün bir şəbəkə (IfcGrid, nömrəli xətləri bir siyahıda, hərfli xətləri digərində) və sütunlar ölçüsü, hündürlüyü və kəmiyyətləri ilə IfcColumn kimi. Digər BIM proqramları hər ikisini göstərir.

:::note
Başqa proqramdan gələn faylda olan şəbəkə göstərilir və alətlər ona tutulur, lakin onun xətləri burada dəyişdirilə bilməz.
:::
