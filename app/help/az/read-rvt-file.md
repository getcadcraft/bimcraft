---
title: Layihə və ya ailə faylını oxuyun
summary: .rvt, .rfa, .rte və ya .rft faylını açın və onun buraxılışını, birgə iş rejimini, layihə məlumatını, ailə parametrlərini, əlaqələrini və önizləmə şəklini onu yaradan proqram olmadan oxuyun.
keywords: rvt, rfa, rte, rft, layihə faylı, ailə, buraxılış, versiya, hansı versiya, quruluş, birgə iş, mərkəzi model, layihə məlumatı, önizləmə, miniatür, əlaqələr
from: df3600e1
---

## Nə edəcəksiniz

Revit-də açmadan layihə və ya ailə faylında nə olduğunu öyrənin: onu hansı buraxılış saxlayıb, birgə iş rejimindədirmi, layihə məlumatı və nəyə bağlıdır. Fayl başqasından gələndə və hansı buraxılışda açmaq lazım olduğunu bilmək lazım olanda faydalıdır.

## Addımlar

1. {{ui:Fayl seçin}} düyməsini basın.
2. `.rvt`, `.rfa`, `.rte` və ya `.rft` faylını seçin.
3. Bir az gözləyin. Status sətri "Fayl oxunur…" deyir, sonra isə "Açıldı: *fayl adı*".
4. Kartın yuxarısına baxın: faylda saxlanmış önizləmə şəkli, faylın növü və saxlandığı buraxılış, və layihənin adı.
5. Kartın bölmələrini oxumaq üçün aşağı sürüşdürün.

## Nə görməlisiniz

Ortadakı kart, fayl onları saxladıqda bu bölmələrlə:

| Bölmə | Nəyi deyir |
|---|---|
| File | Fayl adı, ölçüsü, növü (layihə, layihə şablonu, ailə və ya ailə şablonu), saxlandığı buraxılış və quruluş, birgə iş, mərkəzi modelin yolu, son dəfə harada saxlandığı, kim saxladığı, dil və sənəd GUID-i |
| Project information | Layihənin öz sahələri, məsələn ad, nömrə, müştəri, ünvan və status. Yeni layihənin standart dəyərlərində qalan sahələr çıxarılır. |
| Family, Family: … | Ailə üçün: adı, kateqoriyası, buraxılışı, son yenilənməsi və parametrləri, qrup-qrup |
| Linked and referenced files | Fayl göstərdiyi hər əlaqəli model, CAD əlaqəsi, şəkil və açar cədvəli, saxlanmış yolu ilə |

Solda {{ui:Fayl}} paneli əsas faktları təkrarlayır və **Oxunub** əlavə edir: BimCraft faylın əslində nə qədərini oxudu, adətən bir neçə meqabayt faylın təxminən 40 KB-ı. Sağda {{ui:Xassələr}} paneli deyir ki, element xassələri üçün 3D model lazımdır.

## Niyə 3D yoxdur

3D model və layihə faylının içindəki elementlər sənədləşdirilməmiş formatda saxlanılır. BimCraft yalnız sənədləşdirilmiş və ya aydın oxunan hissələri oxuyur: fayl məlumatı, layihə məlumatı, ailə məlumatları, əlaqə siyahısı və önizləmə şəkli. Qalanını təxmin etmir. Modeli 3D-də görmək və element xassələrini oxumaq üçün faylı yaradan proqramdan IFC ixrac edin. Bax [Layihə faylını IFC vasitəsilə 3D-yə gətirin](topic:rvt-to-ifc).

## Ümumi səhvlər

- **3D gözləmək.** Yuxarıya baxın.
- **Əlaqələr yalnız saxlanmış yolu göstərir.** Tək açılmış fayl əlaqələrinin mövcud olub-olmadığını yoxlaya bilməz. Əvəzində faylın yaşadığı qovluğu açın; BimCraft hər əlaqəni tapılmış və ya tapılmamış kimi qeyd edir: [Bütün layihə qovluğunu açın](topic:open-project-folder).
- **"Bu fayl natamamdır…"** Fayl köçürülərkən, yüklənərkən və ya sinxronizasiya edilərkən kəsilib. "Yalnız onlayn" olan bulud diskindəki fayl da belə olur. BimCraft yenə də onu açır və yalnız bərpa olunanı göstərir: kartın yuxarısında narıncı bildiriş, bütün baytları faylda olan hissələri sadalayan **Bu fayldan bərpa olunub** bölməsi və qalanı üçün **Faylda yoxdur**. Əskik hissə üçün heç nə doldurulmur, ona görə kəsilmədən sonra saxlanmış olduqda buraxılış, önizləmə şəkli və ya layihə məlumatı çatışmaya bilər. Faylın məzmun siyahısı da kəsilibsə, heç nə açıla bilməz. Orijinalı yenidən kopyalayın və tam fayl üçün yenidən açın.
- **"Bu faylda önizləmə şəkli yoxdur".** Bəzi fayllar onsuz saxlanılır. Bu normaldır.
- **Səhvən ehtiyat nüsxəni açmaq.** `Tower.0004.rvt` kimi adlanan fayllar nömrəli ehtiyat nüsxələrdir. Qovluğu açsanız, BimCraft onları modelləri ilə qruplaşdırır.
