---
title: Xassələr panelinin sahələri
summary: Xassələr panelində və Fayl, Çertyoj və Qovluq panellərində hər sahənin nəyi bildirdiyi və hansılarını dəyişə biləcəyiniz.
keywords: xassələr, sahələr, atributlar, globalid, guid, kopyala, dəyəri kopyala, hamısını kopyala, csv, mübadilə buferi, seriya nömrəsi, etiket, obyekt növü, sətir, express id, xassə dəsti, pset, miqdarlar, sxem, fayl paneli
from: fe55b435
---

## IFC elementi

{{ui:Xassələr}} panelinin yuxarısında elementin növü "Ifc" prefiksi olmadan göstərilir (məsələn "Door", "WallStandardCase", "FurnishingElement") və onun adı, ya da "Adsız" yazısı.

| Sahə | Mənası | Dəyişdirilə bilər |
|---|---|---|
| Name | Elementin adı, çox vaxt ixrac edən tərəfindən yazılan ailə və növ adı | Bəli |
| Type | Elementin növünün adı, varsa | Xeyr |
| Object type | Bəzi ixrac edənlərin doldurduğu sərbəst mətnli növ təsviri | Bəli |
| Tag | Elementin etiketi və ya markası; bir çox ixrac edən buraya element ID-sini yazır | Bəli |
| Description | Sərbəst mətn | Bəli |
| GlobalId | Elementin daimi 22 simvollu IFC identifikatoru; eyni elementin hər ixracında eynidir | Xeyr |
| Line | Elementin bu IFC faylındakı sətir nömrəsi (`#1234`). Ixraclar arasında dəyişir | Xeyr |

Aşağıda **xassə dəstləri** adına görə sıralanır:

- Hər dəst adına klik etdikdə açılır və bağlanır. İlk üçü açıqdır.
- "(type)" işarəsi olan dəst elementin növünə aiddir: "Növ xassəsi: bu dəyişiklik həmin növün hər elementinə tətbiq olunur."
- Miqdar dəstləri (uzunluqlar, sahələr, həcmlər, saylar, çəkilər) yalnız oxunur.
- Siyahılar və sadalanmış dəyərlər göstərilir, yalnız oxunur.
- Bəli/Xeyr dəyərləri **Bəli** və ya **Xeyr** kimi göstərilir.
- Ədədlər göstərmək üçün dörd onluq işarəyə yuvarlaqlaşdırılır. Uzunluqlar (uzunluq xassəsi və ya miqdarın uzunluğu) alət çubuğunda seçilmiş {{ui:Vahidlər}} ilə, yanlarında vahid işarəsi ilə göstərilir və siz həmin vahiddə və ya başqa vahid işarəsi ilə (2.4 m, 8'-0") yeni dəyər yaza bilərsiniz: BimCraft faylın öz ədədini geri yazır. Digər ədədlər fayl necə saxlayırsa, elə göstərilir.
- Boş dəyər *boş* kimi göstərilir. Dəyişdirilmiş dəyər qalın və yanında mavi zolaqla göstərilir.

## Dəyəri kopyalayın

{{ui:Xassələr}}-də hər dəyərin yanında kiçik kopyalama düyməsi var: onu basanda dəyər göstərildiyi kimi mübadilə buferinə köçürülür, məsələn GlobalId, seriya nömrəsi və ya istənilən xassə dəsti dəyəri. Kopyalama heç vaxt redaktəni başlatmır.

Yuxarıda {{ui:Hamısını kopyala}} elementin bütün dəyərlərini dəst-dəst mətn kimi kopyalayır, {{ui:CSV kimi kopyala}} isə onları qrup, xassə və dəyər sətirləri şəklində köçürür ki, cədvələ yapışdırasınız; boş dəyərlər saxlanılır, beləliklə hər sahənin sətri olur. Bu, açıq olan başqa modelin elementi üçün də eyni işləyir; bir neçə model açıq olduqda CSV faylının adını göstərən Model sütunu ilə başlayır.

## Fayl paneli (IFC)

| Sahə | Mənası |
|---|---|
| File, Size | Açdığınız fayl |
| Schema | IFC versiyası, məsələn IFC2X3 və ya IFC4 |
| Project | Layihənin adı və uzun adı |
| Phase | Layihə mərhələsi, ixrac edən yazıbsa |
| Exported from | Fayl başlığından ixrac edən proqram |
| Author | Fayl başlığındakı müəllif |
| Exported | Fayl başlığındakı tarix və vaxt |
| Elements | Şəkli olan neçə element çəkildi |
| Triangles | Şəkilləri neçə üçbucaq təşkil edir; modelin nə qədər ağır olduğunun ölçüsü |

## Fayl paneli (layihə və ailə faylları)

| Sahə | Mənası |
|---|---|
| Kind | Layihə, Layihə şablonu, Ailə və ya Ailə şablonu |
| Saved in | Faylı son dəfə saxlayan buraxılış |
| Build | Həmin buraxılışın dəqiq quruluşu |
| Read | BimCraft faylın nə qədərini oxudu, ümumi ölçüsünə nisbətən |

## Çertyoj paneli (DWG və DXF)

| Sahə | Mənası |
|---|---|
| Format | Çertyojun saxlandığı buraxılış, format kodu ilə, məsələn AC1032 |
| Units | Çertyojun daxiletmə vahidləri, təyin olunduqda |
| Entities | Neçə obyekt oxundu |
| Layers | Neçə qat |
| Sheets | Neçə vərəq (layout), və ya Yoxdur |
| Linked drawings | Əlaqəli çertyojlarından neçəsi tapılıb yükləndi |
| Equipment | Vərəqlərdə neçə etiketli avadanlıq var |

## Qovluq paneli

| Sahə | Mənası |
|---|---|
| Folder, Files, Size | Açdığınız qovluq, onda neçə fayl var və ümumi ölçüsü |
| Models | Layihə və ailə faylları, hər birinin ehtiyat nüsxələri bir dəfə sayılır |
| CAD drawings, IFC models | Hər birindən neçə |
| Problems | Neçə model nüsxəsi natamam və ya oxunmazdır, ya da Yoxdur |
