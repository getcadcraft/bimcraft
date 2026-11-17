---
title: Problemlər, revizyalar və çertyoj dəyişiklik jurnalı
summary: Verdiyiniz hər vərəq dəstini qeyd edin, hər vərəqdə və elementdə sonradan nəyin dəyişdiyinə baxın, və tikinti təlimatlarını, emal çertyojlarını və əlaqəli modelləri aid olduqları buraxılışla saxlayın.
keywords: buraxılış, buraxılmış dəst, təqdim olunmuş dəst, təqdimat, revizya, nə dəyişdi, buraxılışdan bəri, dəyişiklik jurnalı, çertyoj reyestri, göndərmə siyahısı, tikinti təlimatı, emal çertyoju, əlaqəli model, tender, tikinti, surət, müqayisə
from: 4c732832
---

## Nə edəcəksiniz

Buraxılış qeyd edin: hansı vərəqlər, hansı tarixdə, hansı məqsədlə getdi, hər biri öz revizyası ilə. Sonra buraxılışdan bəri nəyin dəyişdiyini soruşun. Tikinti təlimatlarını və geri qaytarılmış emal çertyojlarını buraxılışa uyğun saxlayın.

## Addımlar

1. Sol paneldə **Buraxılışlar və revizyalar** açın.
2. **Buraxılış qeyd et** seçin. Revizya təklif olunur (A, sonra B; P1 kimi nömrəli olanlar sayılır). Hansı məqsədlə buraxıldığını, kimə getdiyini, tarixi və vərəqləri seçin. Layihə mərhələniz təyin olunubsa, məqsəd ona uyğun gəlir. İcazə paketində dəstəkləyici sənədlərin siyahısı varsa, həmin siyahıya bağlı vərəqlər sizin üçün işarələnir.
3. **Modelin buraxılmış surətini də saxla** seçimini işarəli saxlayın ki, model göndərildiyi kimi qalsın. Surət yüklənir; onun adı, ölçüsü və SHA-256 buraxılışla birlikdə saxlanılır.
4. **Bu buraxılışı qeyd et** seçin. Son buraxılışdan bəri dəyişmiş vərəq yeni revizyanı alır. Dəyişməyən vərəq öz revizyasını saxlayır. Hər vərəqin başlıq blokunda onun revizyası göstərilir.
5. Nəyin dəyişdiyini görmək üçün buraxılışın yanında **Buraxılışdan bəri dəyişikliklər** seçin. Hər vərəq **Eyni** və ya **Dəyişib** kimi oxunur, üzərindəki əlavə edilmiş, dəyişdirilmiş və silinmiş elementlərlə birlikdə. Sayın üzərinə klik edərək həmin elementləri seçin.
6. Tikinti təlimatı, emal çertyoju, işarə dəsti, əlaqəli model və ya qeyd üçün **Qeyd əlavə et** seçin. Hansı buraxılışa aid olduğunu seçin. Seçdiyiniz fayl adı, ölçüsü və SHA-256 ilə qeyd olunur; fayl öz yerində qalır.
7. **Çertyoj dəyişiklik jurnalı** hər vərəq üçün bir sətir, hər buraxılış üçün bir sütun göstərir. **Dəyişiklik jurnalını yüklə (CSV)** onu buraxılışlar və qeydlərlə birlikdə saxlayır.
8. **Buraxılış tarixçəsini saxla** `.issues.json` faylı yazır. MarkupCraft, TakeoffCraft və DetailCraft onu **Buraxılış tarixçəsini oxu** ilə oxuyur.

## Bilmək faydalıdır

- Tarixçə IFC faylının içində saxlanılır (layihədəki `CadCraft_Issues` xassə dəsti). Digər proqramlar onu nəzərə almır.
- Vərəq öz quruluşu dəyişdikdə və ya onun göstərdiyi element dəyişdikdə dəyişmiş sayılır: plan öz səviyyəsini, fasad və ya kəsik bütün modeli, qapı və ya pəncərə cədvəli isə öz qapılarını və ya pəncərələrini göstərir.
- Element xassəsi, yeri, ölçüsü və ya forması dəyişdikdə dəyişmiş sayılır.
- Hansı xassənin dəyişdiyini dəqiq görmək üçün buraxılmış modelin saxlanılmış surətini **Versiyaları müqayisə et** ilə açın.
- Buraxılışı silmək qeydləri saxlayır, amma buraxılışsız. Hər addım bir Geri qaytar ilə geri alınır.
- 60.000-dən çox elementi olan modeldə buraxılışla hər elementin qeydi saxlanılmır. Vərəqlər yenə müqayisə olunur.

## Hələ hazır deyil

- Vərəqlər buraxılışla birlikdə PDF kimi saxlanılmır.
- Revizya buludu BimCraft-ın öz vərəqlərində çəkilmir. Buludları MarkupCraft-da buraxılışa qarşı qeyd edin.
