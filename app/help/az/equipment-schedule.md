---
title: Avadanlıq cədvəli qurun və CSV ixrac edin
summary: Yemək xidməti çertyojundakı element etiketlərini avadanlıq cədvəlinə çevirin, süzün, hər elementə onun vərəqində keçin və CSV kimi yükləyin.
keywords: avadanlıq, cədvəl, yemək xidməti, mətbəx, element etiketləri, kcl, atributlar, bom, materialların siyahısı, csv, cədvəl proqramı, ixrac, məlumat çıxarışı
from: e3faa1c8
---

## Nə edəcəksiniz

Mətbəx və ya yemək xidməti çertyojundan avadanlıq siyahısını oxuyun, yoxlayın, hər elementi planda tapın və cədvəl faylı kimi yükləyin.

Bu, KCL kimi mətbəx layihələndirmə kitabxanalarında olduğu kimi, avadanlıq etiketlərinin məlumatlarını blok atributları kimi daşıyan çertyojlarda işləyir: hər etiket element nömrəsini (`KCL-ITEM`), miqdarı, kateqoriyanı, istehsalçını, modeli, elektrik və santexnika məlumatlarını və qeydləri saxlayır. Digər çertyojlarda {{ui:Equipment}} nişanı yoxdur.

## Addımlar

1. Çertyoju açın, mümkünsə layihə qovluğundan ki, ona bağlı çertyojlar da yüklənsin.
2. Çertyojun üstündəki {{ui:Equipment}} nişanını klikləyin. Onun yazısı vərəqlərdəki elementlərin sayını göstərir, məsələn "Avadanlıq (88)".
3. Cədvəli oxuyun: **Element**, **Miqdar**, **Avadanlıq**, **İstehsalçı**, **Model**, **Elektrik**, **Santexnika** və **Harada**.
4. Cədvəlin üstündəki menyuda nəyi siyahıya salacağınızı seçin: **Hər vərəq**, bir vərəq, **Heç bir vərəqdə deyil** və ya **Çertyoddakı bütün etiketlənmiş elementlər**. Hər seçim öz sayını göstərir.
5. Siyahını daraltmaq üçün süzgəc qutusuna yazın ("Filtr: kateqoriya, istehsalçı, model…"), məsələn `soyuducu` və ya `208`.
6. **Harada** sütunundakı vərəq adını klikləyin.
7. Çertyoja baxın: BimCraft həmin vərəqə keçir, elementə yaxınlaşır və onun ətrafına halqa çəkir. Status sətri deyir: "Element *n*, *kateqoriya* *vərəq* üzərində halqalanıb."
8. Cədvələ qayıtmaq üçün {{ui:Equipment}} düyməsini klikləyin.
9. {{ui:Download CSV}} düyməsini klikləyin.

## Nəyi görməlisiniz

- Yükləmələr qovluğunuzda "*çertyojun adı* equipment.csv" adlı fayl (bir vərəq seçdikdə mötərizədə vərəqin adı ilə). Onu Excel, Numbers, LibreOffice və ya Google Sheets-də aça bilərsiniz.
- Status sətri: "Yükləndi *fayl adı* (*n* element)."

CSV-də bu sütunlar var: Element, Miqdar, Kateqoriya, İstehsalçı, Model, Elektrik, Santexnika, Qeydlər, Elektrik qeydləri, Santexnika qeydləri, Vərəqlər, Yerləşdirilib (neçə etiket). Fayl menyu və süzgəcdən sonra cədvəldə göstərilən sətirlərin eynisini yükləyir.

## Cədvəl necə qurulur

- O, çertyojda çəkilmiş cədvəldən deyil, **etiketlərin özündən** oxunur. Cədvəlin üstündəki qeyd neçə etiketin oxunduğunu göstərir.
- Bir sətir bir element nömrəsi və bir məlumat dəstidir. Onun miqdarı etiketlərinin **cəmidir**, çap olunmuş cədvəl kimi sayılır: bir yerdə "5", başqa yerdə "3" yazılmış rəflər 8 olur, "5 + 3" kimi göstərilir.
- **Harada** hər elementi göstərən vərəqləri siyahılayır; bu, hər vərəqdəki görünüşlərdən müəyyən olunur, yəni çapda görünənə görə. "Yalnız model" o deməkdir ki, heç bir vərəq onu göstərmir.
- **Element nömrəsi iki dəfə istifadə olunub** işarəsi iki fərqli avadanlıq parçasında eyni element nömrəsini qeyd edir. Sətir narıncı işarə ilə qeyd olunur.
- Heç bir vərəqdə göstərilməyən etiketlər **Heç bir vərəqdə deyil** altında ayrıca saxlanılır. Onlar çox vaxt əvvəlki planlardan və ya başqa işlərdən qalır və heç vaxt **Hər vərəq**-ə qarışmır.
- **Elektrik** amper, kVt, HP, volt, faza, qoşulma və fişi etiketləndiyi kimi göstərir. **Santexnika** qoşulma ölçülərini göstərir: CW soyuq su, HW isti su, DD birbaşa drenaj, ID dolayı drenaj və qaz. Digər etiket sahələri hələ göstərilmir.

## Tez-tez edilən səhvlər

- **{{ui:Equipment}} nişanı yoxdur.** Çertyojda `KCL-ITEM` etiketləri yoxdur, ya da avadanlıq məlumatsız çəkilib. Oxunacaq heç nə yoxdur.
- **Saylar çap olunmuş cədvəldən fərqlənir.** Çap olunmuş cədvəldə ehtiyat nömrələr ola və ya etiketlərdən qısa adlar istifadə oluna bilər. Yerləşdirilənlər üçün etiketlərə etibar edin; fərqləri layihəçi ilə yoxlayın.
- **CSV açanda qəribə simvollar görünür.** Fayl UTF-8-dir. Cədvəl proqramının idxal əmri ilə açın və proqram soruşduqda UTF-8 seçin.
- **Xana aposfla başlayır.** `=`, `+`, `-` və ya `@` ilə başlayan dəyərlərin əvvəlinə `'` işarəsi əlavə olunur ki, cədvəl proqramları onları düstur kimi işə salmasın.
- **{{key:F}} və {{key:P}} heç nə etmir.** Onlar çertyojda işləyir, cədvəldə yox. Əvvəlcə vərəq nişanını klikləyin.
