---
title: Elementi seçmək və onun xassələrini oxumaq
summary: 3D modelində istənilən elementə klik edin, onu vurğulayın və adını, tipini, etiketini, GlobalId-ni, xassə dəstlərini və kəmiyyətlərini oxuyun.
keywords: xassələr, seçmək, klik, element, parametrlər, xassə dəstləri, pset, kəmiyyətlər, globalid, guid, tip, yoxlamaq
from: 43b80aa8
---

## Nə edəcəksiniz

IFC modelində elementləri seçin və fayl onlar haqqında nə deyirsə hamısını oxuyun: atributları, xassə dəstlərini, tip xassələrini və kəmiyyətləri.

## Addımlar

1. IFC modelini açın.
2. Elementə klik edin, məsələn qapıya. Sürükləmədən klik edin: bir neçə pikseldən çox sürükləmə seçmək əvəzinə orbit (fırlanma) edir.
3. Elementə baxın: o, mavi rənglə vurğulanır.
4. Sağdakı {{ui:Xassələr}} panelinə baxın. Yuxarıda elementin növü (məsələn "Door" və ya "WallStandardCase") və adı görünür.
5. Birinci bloku oxuyun: **Ad**, **Tip**, **Obyekt tipi**, **Etiket**, **Təsvir**, **GlobalId** və **Sətir**.
6. Xassə dəstlərinə aşağı sürüşdürün. İlk üçü açıqdır; digər dəsti açmaq üçün onun adına klik edin.
7. Başqa elementə keçmək üçün ona klik edin.
8. Seçimi silmək üçün {{key:Esc}} basın və ya boş fona klik edin.

## Nə görməlisiniz

- Vurğulanmış element və sağda onun məlumatları.
- Xassə dəstləri əlifba sırası ilə. Elementin **tipindən** gələn dəstlərin adından sonra " (tip)" yazılır və qeyd: "Tip xassəsi: burada dəyişiklik bu tipin hər elementinə tətbiq olunur."
- Kəmiyyət dəstləri (uzunluq, sahə və həcm kimi) digər dəstlərlə birlikdə sadalanır. Kəmiyyətlər yalnız oxunandır.
- Dəyişdirilə bilən dəyərlər düymə kimi görünür. [IFC xassələrini dəyişmək və redaktə olunmuş nüsxəni saxlamaq](topic:edit-ifc-properties) necə edildiyini göstərir.

[Xassələr paneli sahələri](topic:properties-panel) hər sahəni izah edir.

## Gizlənmiş elementlərə çatmaq

1. Binanın içindəki bir şeyə çatmaq üçün {{ui:Mərtəbələr}} siyahısında onun üstündəki mərtəbələri işarəsini götürün.
2. Otaq həcminin arxasındakı divara çatmaq üçün {{ui:Məkanlar}} söndürün.
3. Elementə klik edin.

## Ümumi səhvlər

- **Klik edərkən bir az sürükləmək.** BimCraft bunu orbit hesab edir və seçmir. Siçanı sakit tutun.
- **Rəqəmlərin yanında vahid gözləmək.** Dəyərlər faylda saxlandığı kimi, dörd onluq rəqəmə yuvarlaqlaşdırılmış, vahid simvolu olmadan göstərilir. Metrik ixracda uzunluqlar adətən millimetr və ya metrdir; ixrac edənin parametrlərinə baxın.
- **Parametri tanış adı ilə axtarmaq.** İxrac edənlər parametrləri yenidən adlandırır və `Pset_WallCommon` kimi IFC xassə dəstlərinə qruplaşdırır. Hər dəsti nəzərdən keçirin; fərdi parametrlər çox vaxt ixrac edən proqramın və ya şirkətinizin adını daşıyan dəstdə olur.
- **Axtarış qutusu gözləmək.** Seçmək üçün elementə klik edin; {{key:Mod}}+klik və ya {{key:Shift}}+klik daha çox seçir, {{key:Mod+A}} göstərilən hər elementi seçir. Soldakı {{ui:Elementlər}} siyahısı elementləri yalnız növ üzrə sayır; klik olunmur.
- **Fayl kartında seçmək.** Fayl kartının seçiləcək elementləri yoxdur: "Element xassələri 3D modeli tələb edir. Onları görmək üçün bu faylın IFC ixracını açın."
