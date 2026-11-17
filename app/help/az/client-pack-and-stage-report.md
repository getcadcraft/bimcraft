---
title: Müştəri paketi, mərhələ hesabatı və variantların müqayisəsi
summary: Modeldən müştəri paketi və ya mərhələ hesabatı hazırlayın, saxlanmış kütləvi variantları sahə və xərcə görə yan-yana müqayisə edin, mərtəbə sahələri, düzəlişləri ilə çertyojlar və buraxılış tarixçəsi ilə. Hər rəqəm onun arxasındakı elementləri saxlayır.
keywords: müştəri paketi, təqdimat, mərhələ hesabatı, hesabat, variant müqayisəsi, variantlar, variantları müqayisə et, sahə və xərc, hər variant üçün xərc, tarif yoxdur, kütlə, mərtəbə sahələri, çertyojlar siyahısı, buraxılış tarixçəsi, rəqəmlər, əlaqəli rəqəmlər
from: f6679bf5
---

## Nə edəcəksiniz

Modeli indi olduğu kimi müştəri paketinə və ya mərhələ hesabatına çevirin və saxlanmış kütləvi variantları sahə və xərcə görə yan-yana müqayisə edin.

## Addımlar

1. Sol paneldə **Müştəri paketi və mərhələ hesabatı** açın.
2. Müştəri paketi və ya Mərhələ hesabatı yanında **Sənədlərdə aç** seçin. Sənəd modeldən Sənədlər bölməsində görünür, orada mətnini dəyişə bilərsiniz.
3. Önizləmədə rəqəmə klikləyin ki, onun arxasındakı elementlər seçilsin.
4. **Paketi qur** seçin. Bir zip faylı saxlanılır: sənəd PDF kimi, 3D görünüşün şəkli və hər rəqəmi onun elementlərinin GlobalId-ləri ilə sadalayan `figures.csv`.

## Xanalar

Bunları hər sənəddə istifadə edə bilərsiniz.

| Xana | Nəyi çap edir |
|---|---|
| `{{stage}}` | Çertyoj təfərrüatlarından layihə mərhələsi. |
| `{{options}}` | Saxlanmış kütləvi variantlar yan-yana: mərtəbələr, hündürlük, oturacaq sahəsi, ümumi mərtəbə sahəsi, zərf və xərc. |
| `{{areas}}` | Otaqlardan səviyyə üzrə mərtəbə sahəsi. |
| `{{sheets}}` | Vərəqlər, hər birinin olduğu düzəliş və son buraxılış tarixi ilə. |
| `{{issues}}` | Buraxılış tarixçəsi və çertyoj dəyişiklik jurnalı. |
| `{{changes}}` | Son buraxılışdan bəri nə dəyişib, vərəq-vərəq. |

## Variantlar necə qiymətləndirilir

Xərc yalnız layihənizin qiymət cədvəlindən (Energy/Cost, 5D cost) gəlir. Sizin üçün heç nə təxmin edilmir.

- Qiymət sətri variantı yalnız onun siniflərində `IfcBuildingElementProxy` adı çəkildikdə qiymətləndirir.
- Mərtəbə sahəsi, sözləri variantın istifadəsini adlandıran sətirlə qiymətləndirilir, məsələn ofis. Belə sətir olmadıqda, sözləri ümumi mərtəbə sahəsi və ya bina kütləsi olan sətir istifadə olunur. m² ilə olan sətir ümumi mərtəbə sahəsindən istifadə edir. m³ ilə olan sətir həcmdən istifadə edir.
- Zərf (perimetr və hündürlük hasili) sözü zərf və ya fasad olan sətirlə qiymətləndirilir.
- Uyğun sətri olmayan variant **No rate** göstərir. Cəm yalnız tələb olunan bütün hissələrin tarifi olduqda göstərilir.

## Yaxşı bilmək lazımdır

- Variantları otaq proqramının kütləvi siyahısında **Variant kimi saxla** ilə saxlayın. Bax: Kütləvi variantlar.
- PDF elementləri seçə bilmir. BimCraft-dan kənarda, `figures.csv` hər rəqəmin elementlərinə bağlantını daşıyır.

## Hələ hazırlanmayıb

- Vərəqlər və çəkilmiş görünüşlər sənədin içinə yerləşdirilmir. Paket yalnız 3D görünüşün şəklini saxlayır.
