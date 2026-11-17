---
title: Yeni bina başlayın
summary: Səviyyələri olan boş bina modeli yaradın, divarlarını çəkin, kitabxanadan elementlər yerləşdirin və onu IFC kimi saxlayın.
keywords: yeni, yeni bina, boş, təmiz, sıfırdan başlamaq, şablon, səviyyələr, mərtəbələr, döşəmələr, yaratmaq, model
from: 68786865
---

## Nə edəcəksiniz

Bir binanı açmaq əvəzinə heç nədən başlayın. BimCraft layihəsi, sahəsi, binası və səviyyələri olan boş IFC modeli yaradır. Səviyyələrdə kitabxanadan avadanlıq və mebel yerləşdirə və onu IFC faylı kimi saxlaya bilərsiniz.

:::note
Divarları indi çəkmək olar: bax [Divar çəkmək](topic:draw-walls). Qapılar, pəncərələr, döşəmələr və damlar növbəti hazırlanır.
:::

## Addımlar

1. **Fayl və ya qovluq açın** altında və ya başlanğıc səhifəsində {{ui:Yeni bina}} klikləyin.
2. **Bina adı** yazın.
3. Neçə **Səviyyə** olacağını seçin (1-dən 200-ə qədər).
4. **Səviyyə hündürlüyünü** yazın, döşəmədən döşəməyə: məsələn `10'-0"`, `10'6"` və ya `3000 mm`. Sadə rəqəm ABŞ-da futdur, başqa yerlərdə millimetrdir.
5. Hər sahə artıq doldurulub, ona görə hamısını olduğu kimi saxlaya bilərsiniz. Onların altındakı qutu nə ilə başladığını göstərir: vahidlər, Divar aləti əvvəl çəkdiyi **Divar növü** (istəsəniz siyahıdan başqasını seçin) və ilk vərəq.
6. {{ui:Yarat}} klikləyin. Səviyyələr 0-dan başlayaraq yığılır, hər biri əvvəlkindən bir səviyyə hündürlüyü yuxarıda, adları Səviyyə 1, Səviyyə 2 və s. Onlar model ağacında görünür, Səviyyə 1-in planı 3D görünüşün yanında açılır və {{ui:Çək}} aktiv olur.
7. Divarları çəkin: {{ui:Divar}} klikləyin və iki nöqtə. Bax [Divar çəkmək](topic:draw-walls). Səviyyələri **Səviyyələr** panelində yenidən adlandırın və ya hündürlüklərini dəyişin.
8. Elementləri yerləşdirin: bax [Kitabxanadan avadanlıq və mebel yerləşdirmək](topic:place-from-library). Yerləşdirmə zolağı hər səviyyəni sadalayır.
9. {{ui:IFC kimi saxla}} klikləyin. Fayl binanın adını alır, məsələn `Smith's house.ifc`.

## Bilmək yaxşıdır

- Model millimetrlərlə, IFC4 kimi saxlanılır. Digər BIM proqramları onu açır.
- Yeni binada bir vərəq var, **A-101**, ən aşağı səviyyənin planını saxlayır: metrik vahidlərlə işləyəndə 1:100-də A3, əks halda 1/8" = 1'-0"-də Tabloid. İlk divara qədər boşdur və çəkdikcə planı göstərir. Kağızını, miqyasını, başlığını dəyişmək, görünüşlər əlavə etmək və ya silmək üçün layihə brauzerində **Vərəqlər** altında açın. Şablondan başladılmış bina şablonun vərəqlərini gətirir.
- Hər yeni binanın nə ilə başladığını dəyişmək üçün (metrik layihələr üçün divar növü, səviyyələr, ilk vərəq, Yarat-dan sonra aktiv alət) bax [Standart siyasətlər](topic:default-policies).
- İlk divardan əvvəl heç nə quraşdırılmalı deyil. Divar növü, səviyyə hündürlükləri, vahidlər və vərəq sonradan dəyişdirilə bilər.
- Sol paneldəki **Mərtəbələr** yalnız üzərində nəsə olan səviyyələri sadalayır; model ağacı hamısını sadalayır.
- Saxlamadan əvvəl yeni bina saxlanılmamış iş sayılır. BimCraft başqa fayl açmazdan və ya çıxmazdan əvvəl soruşur və brauzer səhifəsi bağlansa, bu brauzerdə bir nüsxə saxlayır.
