---
title: Mərtəbələrdən keçən şaxtalar və açılışlar
summary: Şaxta iki mərtəbə arasında bütün döşəmələri, tavanları və damları kəsən bir konturdur. Şaquli açılış onlardan birini kəsir. Divar açılışı divarı kəsir.
keywords: şaxta, lift şaxtası, pilləkən açılışı, pillə hündürlüyü, şaquli açılış, mərtəbə açılışı, tavan açılışı, dam açılışı, işıqlıq açılışı, mərtəbədə deşik, divar açılışı, IfcOpeningElement, çıxılma, xalis sahə
from: 8e9e1641
---

## Nə edəcəksiniz

Bir eskizlə binadan lift şaxtası kəsin, bir mərtəbədə deşik açın və sahələrdən nə çıxarıldığını oxuyun.

## Alətlər harada

- Lent düzümləri: {{ui:Memarlıq}} › **Açılış** › {{ui:Şaxta}}, {{ui:Şaquli açılış}} və {{ui:Divar açılışı}}.
- Klassik düzüm: Çək paneli › {{ui:Otaqlar}} menyusu (Şaxta, Şaquli açılış) və › {{ui:Divarlar}} menyusu (Divar açılışı).

## Şaxta

1. Şaxtanın başladığı mərtəbənin plan görünüşünü açın. {{ui:Şaxta}} seçin.
2. Sətirdə {{ui:Baza mərtəbəsi}} və {{ui:Üst mərtəbə}} seçin, həmçinin şaxta onlardan yuxarı və ya aşağı başlayırsa və ya bitirsə, ofsetləri yazın.
3. Konturun künclərinə klikləyin. Birinci künci yenidən klikləyin, ikiqat klikləyin və ya tamamlamaq üçün Enter basın.
4. İki hündürlük arasındakı hər döşəmə, tavan və dam kəsilir. Status sətri neçə olduğunu göstərir.

Şaxta bir şeydir. Onun keçdiyi istənilən mərtəbədə konturunu seçin: Xüsusiyyətlərdə adı, mərtəbələri və ofsetləri, nəyi kəsdiyi və çıxarılan sahə var. Onu dəyişdirin və hər açılış onun ardınca gedir. Onu silin və hər açılış gedir. Hər biri bir geri alma addımıdır.

O, kəsməyə davam edir: mərtəbələri arasında sonradan yaradılan döşəmə soruşulmadan kəsilir, sildiyiniz döşəmə isə kəsilməkdən azad olunur.

Şaxtanın üstündə durduğu döşəmə kəsilmir (onun üstü baza olur). Onu da kəsmək üçün bazaya mənfi ofset verin. Damdan keçmək üçün üst hissəyə müsbət ofset verin.

## Şaquli açılış

1. {{ui:Şaquli açılış}} seçin. Sətirdə nəyi kəsəcəyinizi seçin: döşəməni, tavanı və ya damı.
2. Konturun künclərinə klikləyin və yuxarıdakı kimi tamamlayın.
3. Bu mərtəbədə konturun altındakı döşəmə, tavan və ya dam kəsilir. O, bu tək elementə aiddir: döşəməni silsəniz, açılış da onunla birlikdə gedir.

## Divar açılışı

{{ui:Divar açılışı}} [Divarın formalaşdırılması](topic:wall-shape) alətidir: planda divara klikləyin, ya da 3D-də onun üzündə iki künc.

## Miqdarlar

Döşəmələr üçün ölçmə qaydasına görə elementin xalis sahəsi onun ümumi sahəsi çıxılmış hissəsidir. Şaxta və ya şaquli açılış kəsdiyi hər döşəmə və tavanda çıxılmadır; döşəmə və bitirmə işləri cədvəlləri və IFC miqdarları eyni rəqəmləri göstərir. Damda çıxılma dam səthinin sahəsidir: plan sahəsi meylin kosinusuna bölünür.

Kənardan çıxan kontur yalnız elementin üzərində olan hissəni çıxır.

## Heç nə kəsilmirsə

Yolunda heç nə olmayan şaxta yenə yaradılır və bunu bildirir: sonradan orada tikilən şeyi kəsəcək. Şaquli açılışın altında bir şey olmalıdır; heç nə yoxdursa status sətri bunu deyir və heç nə yaradılmır.

## IFC-də

Hər kəsik IfcOpeningElement-dir və kəsdiyi elementə IfcRelVoidsElement ilə bağlıdır, buna görə hər IFC proqramı deşiyi göstərir. Dam üz-üz kəsilir. Şaxtanın özü onun açılışlarından ibarət IfcGroup-dur.

## Hələ hazır deyil

- Əyri konturlar.
- Şaxtanın divarları: onları Divar aləti ilə çəkin.
- Konturu künclərini sürükləməklə redaktə etmək (Xüsusiyyətlərdə dəyişin və ya silib yenidən eskiz çəkin).
- Çəkilmiş döşəmənin öz Xüsusiyyətləri yalnız öz açılışlarını çıxılmış sahəni göstərir; cədvəllər və IFC miqdarları isə şaxtanınkını da daxil edir.

Həmçinin bax: [Otaqlar və otaq ayırıcıları](topic:rooms-and-separators).
