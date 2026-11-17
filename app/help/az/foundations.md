---
title: Divarların altındakı bünövrələr
summary: Bir klikdə binaya zəmində plitə, plitəli bünövrə divarları, sürünən məkan və ya zirzəmi verin; altlıqlar divarlardan və mərtəbə sayından ölçülür, bünövrə divarlar hərəkət etdikdə yenidən yaranır.
keywords: bünövrə, altlıq, zəmində plitə, qalınlaşmış kənar, monolit plitə, bünövrə divarı, sürünən məkan, zirzəmi, zirzəmi divarı, şaxta, beton, altlıq eni
from: c0e20172
---

## Nə edəcəksiniz

Binaya divarlarına uyğun bünövrə verin. BimCraft divarların xarici tərəfini izləyir, altlıqları divar növündən və üzərində neçə mərtəbənin durmasından ölçür və divarlar dəyişdikdə bünövrəni yenidən yaradır.

## Bünövrə qoyun

1. Divarları bu bünövrənin üzərində duran səviyyədə (adətən birinci) {{ui:Versiya}} açın və {{ui:Bünövrə}} seçin.
2. Növü seçin:
   - **Zəmində plitə**: 4" beton plitə, üst səthi döşəmədir, divarların altında qalınlaşmış kənarla.
   - **Bünövrə divarları və plitə**: altlıqlar üzərində döşəməyə qədər bünövrə divarları, içərisində plitə ilə.
   - **Sürünən məkan**: altlıqlar üzərində, döşəmə karkasının altında dayanan bünövrə divarları, plitəsiz.
   - **Zirzəmi**: altlıqlar üzərində tam hündürlüklü bünövrə divarları, zirzəmi plitəsi ilə, döşəmə karkasının altında.
3. Binanın içinə işarə edin: altlıqlar ölçüsü ilə birlikdə qırıq xətlə göstərilir. Klikləyin.

Artıq bünövrəsi olan binaya klikləmək onu seçir, beləliklə ikincisini əlavə etmək əvəzinə onu dəyişə bilərsiniz.

## Dəyişdirin

Bünövrəni seçin ({{ui:Bünövrə}} ilə binanın içinə klikləməklə və ya 3D görünüşdə və ya model ağacında onun hissələrindən birinə klikləməklə) və **Xassələr** bölməsində dəyişdirin: növü, altlığın eni və dərinliyi, altlığın alt səthinin nə qədər aşağıda olması, divar qalınlığı, divarların döşəmədən nə qədər aşağıda dayandığı, zirzəmi hündürlüyü və plitənin qalınlığı. Hər dəyişiklik bir geri qaytarma addımıdır.

**avtomatik** işarəli ölçülər divarlardan gəlir: bir, iki və ya üç mərtəbə üçün plitə və ya bünövrə divarlarında altlıqlar 12", 15" və ya 23" enində, sürünən məkan və ya zirzəmi üzərində 18", 22" və ya 27", kərpic və ya beton divarların altında isə 4" daha enli. Öz ölçünüzü təyin etmək üçün ölçü yazın; avtomatikə qayıtmaq üçün `0` yazın.

:::warning
Avtomatik ölçülər tipik yüngül karkaslı evlər üçün işarələnmiş standart dəyərlərdir, mühəndislik hesabı deyil. Altlıqları, dərinlikləri və divarları torpaq, donma dərinliyi və yüklər üçün dizayner və ya mühəndis yoxlayır.
:::

## Nə saxlanılır

Bünövrə IFC element yığımı ("Foundation") kimi saxlanılır: növünün tələb etdiyi altlıqdan (və ya plitənin qalınlaşmış kənarından), bünövrə divarından və plitədən ibarətdir, hamısı betondur, hər birinin miqdarları ilə — uzunluq, en, hündürlük, sahə və həcm — həcmlərin hesablanması üçün hazırdır.

## Bilmək faydalıdır

- Divarları hərəkət etdirin, əlavə edin və ya silin — onların altındakı bünövrə yenidən yaranır; üst səviyyədə divar çəkin, aşağıdakı altlıqlar əlavə mərtəbə üçün genişlənir.
- Seçilmiş bünövrəni bütün hissələri ilə birlikdə {{key:Delete}} silir.
- Model daxilində sahənin torpağı ilə (bax: [Sahənin torpağı, bina meydançası və asfaltlama](topic:terrain)) zəmin divarları və sürünən məkan altlıqları onunla birlikdə 8" addımlarla aşağı enir.
- Daxili divarların altındakı altlıqlar hələ düzəldilmir.
