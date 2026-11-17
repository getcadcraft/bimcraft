---
title: Layihə faylından IFC vasitəsilə BimCraft-a
summary: BimCraft-da ən yaxşı açılan IFC ixrac parametrləri (versiya, xassə dəstləri, baza kəmiyyətləri, otaqlar, bağlı modellər, koordinatlar), nəticəni necə açmaq və ixracın nəyi saxladığı.
keywords: ixrac, ifc ixracı, rvt-dən ifc-yə, çevirmə, 3D, həndəsə, ifc2x3, ifc4, koordinasiya görünüşü, istinad görünüşü, dizayn ötürmə görünüşü, xassə dəstləri, baza kəmiyyətləri, otaqlar, məkanlar, bağlı fayllar, ümumi koordinatlar, planalma nöqtəsi, layihənin baza nöqtəsi, parametrlər
from: 3efd5fc9
---

## Nə edəcəksiniz

Layihə faylını BimCraft-da fırlada, yoxlaya, ölçə və redaktə edə biləcəyiniz IFC fayla çevirin. BimCraft hələ `.rvt` faylının içindəki 3D modeli oxumur, ona görə ixrac onu yaradan proqramda (Revit) edilir; BimCraft nəticəni açır.

## Addımlar

1. Layihəni onu yaradan proqramda açın. BimCraft kartı onun saxlandığı versiyanı göstərir.
2. İxrac etmək istədiyinizi göstərən 3D görünüş açın.
3. **Fayl > İxrac > IFC** seçin.
4. İxrac dialoqunda aşağıdakı parametrlərlə quraşdırma (və ya **Quraşdırmanı dəyişdir…**) seçin.
5. Qovluq və fayl adı seçin və ixrac edin.
6. BimCraft-da {{ui:Fayl seçin}} klikləyin və yeni `.ifc` faylını seçin. Ayrıca fayl kimi ixrac olunmuş bağlı modellər {{ui:Model əlavə et}} ilə eyni səhnəyə açılır.

## BimCraft-da ən yaxşı açılan parametrlər

| İxracedicidə parametr | Seçin | Niyə |
|---|---|---|
| IFC versiyası | Baxmaq, yoxlamaq və həcmləri çıxarmaq üçün **IFC4 Reference View**; başqaları IFC2X3 tələb etdikdə **IFC2X3 Coordination View 2.0** | Hər ikisi tam açılır. **IFC4 Design Transfer View** də açılır, daha dəqiq formalarla, lakin fayl daha böyük və yavaşdır. |
| Fayl növü | **IFC** (sadə) | BimCraft `.ifczip` və ya `.ifcxml` açmır. |
| Mərhələ / görünən elementlər | Lazım olan mərhələ, və 3D görünüşü bunun üçün quraşdırdıqda **Yalnız görünüşdə görünən elementləri ixrac et** | Qəsdən gizlətdiklərinizi buraxır. |
| Xassə dəstləri | **Revit xassə dəstlərini ixrac et** və **IFC ümumi xassə dəstlərini ixrac et** | Onlar BimCraft-ın {{ui:Xassələr}} panelində göstərdiyi xassə dəstlərinə çevrilir və {{ui:Axtar}}, {{ui:Rəng}} və {{ui:Model yoxlamaları}} bunlardan istifadə edir. |
| Baza kəmiyyətləri | **Baza kəmiyyətlərini ixrac et** | {{ui:Miqdarların cəmi}} və cədvəllər onları (uzunluqlar, sahələr, həcmlər) təxmin etmək əvəzinə istifadə edir. |
| Otaqlar və sahələr | **3D görünüşlərdə otaqları ixrac et** (və ya Otaqlar / Məkanlar seçimi) | Otaqlar məkan kimi gəlir: onları görmək üçün {{ui:Məkanlar}} klikləyin. |
| Bağlı fayllar | **Bağlı faylları ayrı IFC kimi ixrac et** | Hər əlaqə öz faylına çevrilir; onları {{ui:Model əlavə et}} ilə birlikdə açın və düzülürlər. |
| Koordinat bazası | **Ümumi koordinatlar** (və ya planalma nöqtəsi) | Fayl xəritədəki yerini daşıyır (IfcMapConversion), beləliklə Ölçmə › Yerləşmə, yerdəki xəritə təbəqələri və xəritə koordinatları ilə yerləşdirilmiş nöqtə buludları işləyir. Layihənin baza nöqtəsi modeli başlanğıca yaxın saxlayır, lakin xəritədəki yerini saxlamır. |
| Divarları və sütunları mərtəbəyə görə böl | Mərtəbə üzrə kəmiyyət çıxarırsınızsa, aktiv edin | Hər mərtəbənin hissəsi öz elementidir. |

## Nə görəcəksiniz

Model 3D-də, mərtəbələr layihənin səviyyələrindən götürülür, layihə məlumatı isə {{ui:Fayl}} panelindədir. **İxrac mənbəyi** ixracedicini göstərir.

## İxracın saxladığı və saxlamadığı

- **Saxlanılır**: həndəsə, mərtəbələr, element növləri, adlar, tiplər, əksər parametrlər (xassə dəstləri kimi), istənildikdə baza kəmiyyətləri, otaqlar məkan kimi və ümumi koordinatlarla xəritə yeri.
- **Saxlanılmır**: görünüşlər, vərəqlər, qeydlər, redaktə oluna bilən ailələr kimi ailələr, iş dəstləri və dizayn seçimləri. IFC faylı layihənin deyil, modelin elementlərinin bir anlıq görüntüsüdür. Vərəqlər üçün DWG ixrac edin və 2D görünüşdə açın.

## Ümumi səhvlər

- **BimCraft-da parametrlər yoxdur.** Yuxarıdakı xassə dəsti seçimlərini aktiv edin və yenidən ixrac edin.
- **Otaqlar yoxdur.** Otaq seçimini aktiv edin, sonra {{ui:Məkanlar}} klikləyin.
- **`.ifczip` kimi saxlamaq.** Sadə IFC seçin, ya da `.ifczip`-i açın.
- **Xəritə yeri yoxdur.** Ümumi koordinatlarla ixrac edin; layihənin planalma nöqtəsinin təyin olunduğunu yoxlayın.
- **Redaktələrin geri axmasını gözləmək.** BimCraft-da saxladığınız redaktələr layihə faylına yox, yeni IFC fayla yazılır.
