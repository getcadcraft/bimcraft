---
title: Simvollar, Növlər və Aktivlər, layihə şablonları və Sürətli dəstlər
summary: Kitabxanada üç növ element var (Simvollar, Növlər, Aktivlər). Layihənizə Növ əlavə edin, paylaşılmış layihə şablonundan başlayın, Sürətli dəst əlavə edin və öz şablonlarınızı kitabxananın yükləmə səhifəsi ilə paylaşın.
keywords: kitabxana, simvollar, növlər, aktivlər, növ, divar növü, döşəmə növü, dam növü, tavan növü, layihə şablonu, şablon, sürətli dəst, dəst, paylaşma, yükləmə, versiya, dəyişiklik jurnalı, LOD, təsnifat, lisenziya, təcrübədən qeydlər
from: e13b0e67
---

## Nə edəcəksiniz

Kitabxanada nəyə ehtiyacınız olduğunu növünə görə tapın, çəkdiyiniz layihəyə Növ əlavə edin, kimsənin paylaşdığı şablondan layihə başladın və öz şablonlarınızı, növlərinizi və dəstlərinizi paylaşın.

## Kitabxananın üç növ elementi

- **Simvollar** çertyoj konvensiyalarıdır: yalnız 2D, anotasiya ölçüsündə çəkilir, intizam üzrə qruplaşdırılıb.
- **Növlər** elementin nədən hazırlandığını göstərir: onun təbəqələri real qalınlığı ilə, inkişaf səviyyəsi (LOD) və təsnifat kodu. Növ çəkilmir, layihəyə əlavə olunur.
- **Aktivlər** qapılar, pəncərələr, mebel, qurğular və avadanlıq kimi fiziki obyektlərdir: plan görünüşü və real ölçüdə 3D gövdəsi ilə.

{{ui:Kitabxana}} nişanında {{ui:Kitabxana}} seçin və **Element növü** ilə Hamısı, Simvollar, Növlər və ya Aktivlər göstərin.

## Layihənizə Növ əlavə edin

1. **Element növü** altında **Növlər** seçin və birini açın.
2. Şəklin altında onun tərkibini, LOD-u və təsnifatını yoxlayın, sonra {{ui:Bu layihəyə əlavə et}} klik edin.
3. Divar, döşəmə, dam və ya tavan növü kimi əlavə olunur və onunla çəkə bilərsiniz. Həmin adda növ artıq varsa, yeni növ surət kimi əlavə olunur və sizin köhnə növünüz dəyişmir. Bir Geri qaytar onu çıxarır.

## Layihə şablonları və Sürətli dəstlər

İnsanların nə paylaşdığını görmək üçün {{ui:Dəstlər}} seçin.

- **Layihə şablonu** mərtəbələri, şəbəkələri, növləri və parametrləri olan IFC faylıdır. {{ui:Şablon kimi saxla}} onu **Yeni bina** bölməsində **Başlanğıc** altına qoyur.
- **Sürətli dəst** kitabxana elementlərinin siyahısıdır. {{ui:Dəstin elementlərini göstər}} onları yerləşdirə biləcəyiniz kartlar kimi siyahılayır.
- Hər dəstin versiyası və dəyişiklik jurnalı var, ən yenisi birinci. 0 ilə başlayan versiya müzakirə üçündür; 1.0.0 yalnız xəttin sahibinin qəbul etdiyi üçündür.

## Öz dəstlərinizi paylaşın

- **Layihə şablonu:** {{ui:Şablon kimi saxla}} klik edin, {{ui:Kitabxanada paylaşmaq üçün fayl da yaradın}} işarələyin, tərkibini və versiyanı əlavə edin. `.json` faylı alırsınız.
- **Sürətli dəst:** {{ui:Dəstlər}} bölməsində {{ui:Bu layihədən Sürətli dəst yarat}} seçin. O, layihənin istifadə etdiyi kitabxana elementlərini siyahılayır.
- **Növ:** {{ui:Növ paketləri}} bölməsində bir növü işarələyin və {{ui:Kitabxana elementi kimi saxla…}} seçin.

Faylı kitabxananın yükləmə səhifəsində yükləyin. O, hər elementlə eyni baxışdan keçir və lisenziyanı orada seçirsiniz: hər element öz lisenziyasını göstərir. Elementlərdən onların LOD-u, IFC sinfi və təsnifat kodu (yalnız ad yox, kod) istənilir.

## Təcrübədən qeydlər

Hər kitabxana elementinin səhifəsində daxil olmuş üzvlər qeyd əlavə edə bilər: real layihədə istifadə olunub, nümunə layihədə sınaqdan keçirilib və ya problem tapılıb. Layihənin növünü bir neçə sözlə yazın və müştəri adlarını buraxın. Qeyd ictimaidir və rəy deyil: elementi dəyişdirmir.

## Bilmək faydalıdır

- Tətbiqdən heç nə göndərilmir. Fayllar kompüterinizdə hazırlanır və onları özünüz yükləyirsiniz.
- Şablondan hazırlanmış dəst saxlanılan IFC mətnini olduğu kimi daşıyır. Yükləməzdən əvvəl şəxsi bir şey olub-olmadığını yoxlayın.
- CadCraft kitabxananın Simvollar və Aktivlərini göstərir; Növlər və şablonlar BimCraft layihələri üçündür.
