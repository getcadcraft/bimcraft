---
title: Yeni bina başlatmaq
summary: Səviyyələri ilə boş bina modeli yaradın, divarlarını çəkin, kitabxanadan elementlər yerləşdirin və IFC kimi saxlayın.
keywords: yeni, yeni bina, boş, təmiz, sıfırdan başlamaq, şablon, səviyyələr, mərtəbələr, döşəmələr, yarat, model
from: 546b8ae8
---

## Nə edəcəksiniz

Modeli açmaq əvəzinə heç nədən başlayın. BimCraft layihə, sahə, bina və onun səviyyələri ilə boş IFC modeli yaradır. Səviyyələrə kitabxanadan avadanlıq və mebel yerləşdirə və modeli IFC faylı kimi saxlaya bilərsiniz.

:::note
Divarları indi çəkmək olar: bax [Divarları çəkin](topic:draw-walls). Qapılar, pəncərələr, döşəmələr və damlar növbəti hazırlanır.
:::

## Addımlar

1. **Fayl və ya qovluq aç** altında və ya başlanğıc səhifəsində {{ui:Yeni bina}} klikləyin.
2. **Bina adını** yazın.
3. Neçə **Səviyyə** olduğunu seçin (1-dən 200-ə qədər).
4. **Səviyyə hündürlüyünü** döşəmədən döşəməyə qədər yazın: məsələn `10'-0"`, `10'6"` və ya `3000 mm`. Sadə rəqəm ABŞ-da futdur, başqa yerlərdə millimetrdir.
5. {{ui:Yarat}} klikləyin. Səviyyələr 0-dan başlayaraq yığılır, hər biri əvvəlkindən bir səviyyə hündürlüyü yuxarıda olur və Səviyyə 1, Səviyyə 2 və s. adlanır. Onlar model ağacında görünür və Səviyyə 1-in planı {{ui:Çək}} aktiv olaraq 3D görünüşün yanında açılır.
6. Divarları çəkin: bax [Divarları çəkin](topic:draw-walls). Səviyyələrin adını dəyişin və ya hündürlüklərini **Səviyyələr** panelində dəyişin.
7. Elementlər yerləşdirin: bax [Kitabxanadan avadanlıq və mebel yerləşdirin](topic:place-from-library). Yerləşdirmə paneli hər səviyyəni siyahılayır.
8. {{ui:IFC kimi saxla}} klikləyin. Fayl binanın adı ilə adlanır, məsələn `Smith's house.ifc`.

## Bilmək faydalıdır

- Model millimetrlərlə, IFC4 kimi saxlanılır. Digər BIM proqramları onu aça bilir.
- Sol paneldəki **Mərtəbələr** yalnız üzərində nəsə olan səviyyələri siyahılayır; model ağacı hamısını göstərir.
- Saxlamayana qədər yeni bina saxlanılmamış iş sayılır. BimCraft başqa fayl açmazdan və ya çıxmazdan əvvəl soruşur və sekmə bağlansa ehtimalına qarşı bu brauzerdə bir nüsxə saxlayır.
