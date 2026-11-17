---
title: Bina elementlərini silin, kəsin, kopyalayın və yapışdırın
summary: IFC modelində divarları, qapıları, mebeli və ya digər elementləri seçin; onları silin, kəsin, ya da kopyalayıb kliklədiyiniz yerə, yerində və ya başqa mərtəbəyə yapışdırın.
keywords: sil, sil, təmizlə, kəs, kopyala, yapışdır, ikiqat et, köçür, hamısını seç, hamısını götür, bina elementi, divar, qapı, pəncərə, pilləkən, açılış, geri qaytar
from: d9eec37f
---

## Nə edəcəksiniz

IFC modelində dəyişiklik edin: istəmədiyiniz elementləri çıxarın, divarı və ya mebel dəstini başqa yerə kopyalayın, ya da elementləri kəsib yapışdırmaqla yerini dəyişin. Hər dəyişiklik geri qaytarıla bilən bir addımdır və saxlamaq yeni fayl yazır, ona görə orijinal faylınız olduğu kimi qalır.

## Addımlar

1. IFC modelini açın. Bax: [IFC modelini açın və 3D-də ətrafa baxın](topic:open-ifc-model).
2. Dəyişdirmək istədiyiniz elementi seçin: elementə klikləyin, daha çox seçmək üçün {{key:Mod}} və ya {{key:Shift}} düyməsini basıb saxlayaraq klikləyin, ya da göstərilən bütün elementləri seçmək üçün {{key:Mod+A}} basın ({{ui:Daha çox}}, {{ui:Hamısını seç}}).
3. Sonra:
   - **Silmək:** {{key:Delete}} basın və ya {{ui:Daha çox}}, {{ui:Sil}}.
   - **Kopyalamaq:** {{key:Mod+C}} basın və ya {{ui:Kopyala}} klikləyin.
   - **Kəsmək:** {{key:Mod+X}} basın və ya {{ui:Daha çox}}, {{ui:Kəs}}. Elementlər yerindən çıxır və onları yapışdıra bilərsiniz.
4. Yapışdırmaq üçün {{key:Mod+V}} basın və ya {{ui:Yapışdır}} klikləyin. Kopyaladığınız elementin ölçüsündə şəffaf qutu göstərici ilə birlikdə hərəkət edir və yerləşdirmə panelində seçilmiş mərtəbədə qalır. {{key:R}} basaraq onu 90° çevirin, sonra yerinə klikləyin. Hər klik yeni nüsxə yerləşdirir; dayandırmaq üçün {{key:Esc}} basın.
5. Ya da {{key:Mod+Shift+V}} basın ({{ui:Daha çox}}, {{ui:Yerində yapışdır}}): kəsmədən sonra elementlər dəqiq əvvəlki yerinə qayıdır; kopyalamadan sonra nüsxə orijinalların hemen yanında yerləşir.
6. Redaktə olunmuş modeli yükləmək üçün {{ui:IFC kimi saxla}} klikləyin.

## Elementə nə daxil olur

- **Hissələr:** pilləkən öz marşlarını, pərdə divarı öz panellərini özünə daxil edir; hissələrdən ibarət olan hər şey onların hamısını daxil edir.
- **Açılışlar:** divarın içində kəsilmiş açılışlar divarla birlikdə gedir. Qapı və ya pəncərəni silmək onun doldurduğu açılışı da götürür, beləliklə divar tikinti proqramlarında olduğu kimi bağlanır. BimCraft-da çəkilmiş divarı silmək onun qapı və pəncərələrini də silir və qalan divarları yenidən birləşdirir. Başqa yerdə hazırlanmış faylın divarını silmək onun qapı və pəncərələrini olduğu yerdə qoyur.
- **Məlumat:** nüsxə orijinalla eyni tipə, materiallara, xüsusiyyət dəstlərinə və kəmiyyətlərə malikdir, lakin yeni GlobalId alır. Sonradan nüsxədə dəyər dəyişsəniz, orijinal toxunulmaz qalır.
- **Kitabxana elementləri** öz kitabxana məlumatlarını saxlayır; nüsxə növbəti boş element nömrəsini alır, kəsilib geri yapışdırılan element isə öz nömrəsini saxlayır.

## Nəticədə nə görməlisiniz

- {{ui:Dəyişikliklər}} siyahısında "Silindi: …" və ya "Yapışdırıldı: …". {{key:Mod+Z}} son dəyişikliyi geri qaytarır; {{key:Mod+Y}} onu yenidən bərpa edir.
- Silmədən sonra status sətri neçə hissə və açılışın da getdiyini göstərir.
- Yapışdırılmış elementlər seçilmiş olur, ona görə cərgə yaratmaq üçün yenidən yerində yapışdıra və ya onları silə bilərsiniz.

## Bilmək yaxşıdır

- Nüsxələr orijinalla eyni həndəsədən istifadə edir (IFC elementlərin onu paylaşmasına imkan verir), ona görə fayl çox az böyüyür.
- Bina elementləri onların kopyalandığı modelə, eyni sekmədə yapışdırılır. Yerləşdirilmiş kitabxana elementlərini başqa modeldə istifadə etmək üçün kitabxana elementlərini bir-bir kopyalayın: bax [Kitabxana elementlərini kopyalayın, yapışdırın və ikiqat edin](topic:copy-paste).
- Mərtəbələr, məkanlar, binalar və sahə silinə və ya kopyalana bilməz. Əvəzində onların içindəki elementləri seçin. BimCraft-da çəkilmiş otaq ətrafındakı divarlardan yaranır: iki otağı birləşdirmək üçün divarı silin.
- BimCraft-ın öz divar, qapı və pəncərə alətləri ilə çəkilmiş divarlar, qapılar və pəncərələr hələlik kopyalana, kəsilə və ya ikiqat edilə bilməz; status sətri bunu bildirir. Onları yenidən çəkin. Silmək işləyir.
- Kopyalayarkən kopyaladığınız elementlərin adları və xüsusiyyətləri mətn şəklində buferinizə də düşür, elektron cədvələ və ya e-poçta yapışdırmaq üçün.

## Tez-tez rast gəlinən səhvlər

- **{{ui:Sil}} boz rənglidir.** Heç nə seçilməyib, ya da yalnız mərtəbələr və ya məkanlar seçilib. Səbəbini öyrənmək üçün üzərinə gəlin.
- **Yapışdırmada deyilir ki, elementlər başqa modeldəndir.** Kopyaladıqdan sonra başqa model açmısınız. İlk modeli yenidən açın və elementləri orada kopyalayın.
- **Yapışdırılmış nüsxə başqa mərtəbədədir.** Yerləşdirmə panelinin {{ui:Mərtəbə}} seçimi onun haraya düşəcəyini müəyyən edir; klik etməzdən əvvəl mərtəbəni seçin.

## Əlaqəli

- [Elementləri gizlədin, təcrid edin və şəffaf göstərin](topic:hide-and-isolate)
- [Klavişlər və siçan](topic:keyboard#edit)
