---
title: Modeli Collada və ya Google Earth üçün ixrac edin
summary: Açıq IFC modellərini Blender və digər 3D proqramlar üçün Collada (.dae) faylı kimi, ya da modelin xəritədə olduğu yerdə yerləşdirilmiş Google Earth paketi (.kmz) kimi yazın.
keywords: collada, dae, kmz, kml, google earth, blender, ixrac, coğrafi yerləşmə, coğrafi istinad, en dairəsi, uzunluq dairəsi, yerləşmə, 3D proqramlar
from: 81cfec09
---

Alətlər panelindəki {{ui:Collada}} (və ya menyu və lent üslublarında Fayl menyusundakı {{ui:Collada ixrac et (.dae, .kmz)…}}) açıq olanı Collada 1.4.1 kimi yazır: göstərilən hər model, birləşdirilmiş modellər isə yerləşdirdiyiniz yerdə.

## İxrac

1. {{ui:Collada}} seçin.
2. Formatı seçin:
   - {{ui:Collada faylı (.dae), Blender və digər 3D proqramlar üçün}}.
   - {{ui:Google Earth paketi (.kmz): model xəritədə olduğu yerdə yerləşdirilir}}. Yalnız modelin yerləşməsi olduqda təklif olunur.
3. Seçimləri təyin edin, sonra {{ui:İxrac}} basın. Fayl yüklənir və status zolağında neçə elementin daxil edildiyi göstərilir.

| Seçim | Nə edir |
|---|---|
| {{ui:Yerləşmə məlumatını fayla yaz}} | Faylın başlanğıcının en dairəsini, uzunluq dairəsini, hündürlüyünü və istiqamətini .dae-yə əlavə edir |
| {{ui:Hündürlük}} | {{ui:Yerdə: modelin 0 səviyyəsi relyefə oturur}}, ya da {{ui:Modelin öz dəniz səviyyəsindən hündürlüyü}} |
| {{ui:Otaqları və məkanları daxil et}} | Məkanlar da daxil edilir (standart olaraq kənarda qalır) |
| {{ui:Gizli elementləri daxil et}} | Gizlətdiyiniz elementlər də yazılır (standart olaraq yalnız gördüyünüz yazılır) |

## Faylda nə var

| Modeldə | Collada faylında |
|---|---|
| Bina, mərtəbələr | İç-içə düyünlər, mərtəbələr hündürlük sırası ilə; heç bir mərtəbədə olmayan elementlər "Yerləşdirilməyib" altında |
| Hər element | Öz şəbəkəsi olan bir düyün, modeldəki kimi adlandırılmış (adı, yoxsa sinfi və etiketi) |
| Sinif, GlobalId, əvvəldən təyin olunmuş növ | Düyünün əlavə məlumatlarında (IFC profili), dəqiq adla (ModelCraft profili) |
| Rənglər | Materiallar, şəffaflıqla |
| Vahidlər və oxlar | Metr, Z yuxarıya. Qarşıdakı modelin 0 səviyyəsi 0 hündürlükdədir |

Model yerin üzərində başlanğıcın yaxınlığında qalır, buna görə tək dəqiqlikli işləyən proqramlar onu titrəmədən göstərir. ModelCraft öz Collada fayllarını eyni yazıcı ilə yazır və bu faylları elementlərin adları ilə açır.

## Yerləşmə haradan götürülür

Qarşıdakı model yerləşməni verir, eyni qayda ilə ki, {{ui:Ölç}} nöqtənin en və uzunluq dairəsini hesablayır:

- Modelin koordinat sistemi vasitəsilə xəritə çevrilməsi (IFC4 IfcMapConversion və ya IFC2X3 xassə dəstləri). Modelə seçdiyiniz sistem faylın adını çəkdiyi sistemdən üstündür.
- Əks halda, sahənin en və uzunluq dairəsi (təxmini: sahə üzrə kifayətdir).

İstiqamət ölçülür, fərz edilmir: xəritənin fırlanmasını, həqiqi şimalı və xəritənin yaxınlaşmasını nəzərə alır. Modelə yerləşmə vermək üçün {{ui:Ölç}} bölməsində {{ui:Xəritə başlanğıcı…}} istifadə edin.

## Digər proqramlarda

- **Google Earth** .kmz faylını oxuyur: model yerləşmə yerində, şimala doğru çevrilmiş halda görünür. Sadə .dae faylında Google Earth-ün yerləşmə oxuduğu yer yoxdur; .kmz istifadə edin.
- **Blender** (4.x və əvvəlki): File, Import, Collada (.dae). Hər element öz materialı ilə ayrıca obyekt kimi daxil olur. Yerləşmə faylın əlavə məlumatlarında saxlanılır, Blender onu oxumur. Blender 5.0 daxili Collada idxalçısını buraxdı; orada bunun əvəzinə {{ui:USD}} və ya glTF ixracından istifadə edin, ya da .dae-ni Blender 4.5-də açıb .blend kimi saxlayın.

Sınaqlarımız hər faylı Collada 1.4.1 sxemi ilə yoxlayır və müstəqil Collada oxuyucusu ilə geri oxuyur. Faylları Blender və ya Google Earth-də açmamışıq.
