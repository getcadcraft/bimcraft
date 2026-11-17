---
title: İş müstəvisi: təyin edin, göstərin, düz ona baxın
summary: İş müstəvisi model xətləri, model mətni və İş Müstəvisi Baxıcısı tərəfindən istifadə olunan müstəvidir. Onu səviyyəyə, üzə, adlandırılmış istinad müstəvisinə və ya xəttə təyin edin; görünüşlərdə göstərin; şaquli müstəvidə çəkmək üçün baxıcını açın.
keywords: iş müstəvisi, iş müstəvisini təyin et, iş müstəvisini göstər, istinad müstəvisi, iş müstəvisi baxıcısı, adlandırılmış müstəvi, üz, səviyyə, şaquli müstəvi, divarda çək, fasad çertyoju, tutma, hizalama, istinad müstəvisi
from: 8aceee1d
---

## Nə edəcəksiniz

Üzərində çəkdiyiniz müstəvini seçin, onun harada olduğunu görün və şaquli duran müstəvidə çəkin.

## Addımlar

1. **Çək** rejimini aktiv edin və **Tikinti** menyusunu açın (lentli düzümdə: Memarlıq sekməsi, İş müstəvisi).
2. **İş müstəvisini təyin et** seçin. Sonra bunlardan birini edin:
   - **Təyin et** siyahısında bir səviyyə seçin;
   - yanındakı siyahıda adlandırılmış istinad müstəvisi seçin;
   - planda xəttə klikləyin: divar, şəbəkə xətti, istinad müstəvisi, model xətti və ya pərdə sistemi. İş müstəvisi həmin xətdən keçən şaquli müstəvi olur;
   - 3D görünüşdə düz üzə klikləyin. İş müstəvisi həmin üzün üstündə yerləşir.
3. Onu görmək üçün **İş müstəvisini göstər** seçin: 3D görünüşdə metr şəbəkəsi olan rəngli təbəqə, planda ştrixli kontur və ya xətt, fasad və kəsik panelində isə ştrixli kontur. Yenidən seçsəniz gizlədilir.
4. Müstəvinin düz qarşısında durmaq üçün **İş Müstəvisi Baxıcısı** seçin. Qara xətlər müstəvinin kəsdiyi modeldir. Onun alətlərindən istifadə edərək müstəvidə model xətti, model mətni və ya istinad müstəvisi çəkin. **3D-də bax** 3D görünüşü müstəvinin üzünə çevirir.

## İstinad müstəviləri

İstinad müstəvisi xətt kimi çəkdiyiniz adlandırılmış müstəvidir.

1. **İstinad müstəvisi** seçin. İstəyirsinizsə sətirdə ad yazın (əks halda sizin üçün ad verilir) və hündürlük daxil edin.
2. Başladığı və bitdiyi yerə klikləyin. Planda bu, şaquli müstəvi yaradır. İş Müstəvisi Baxıcısında isə iş müstəvisinə perpendikulyar duran müstəvi yaradır.
3. Planda adı ilə birlikdə ştrixli yaşıl xətt kimi, 3D görünüşdə və fasad və kəsik panelində isə ştrixli kontur kimi görünür.
4. Adını, uzunluğunu, hündürlüyünü və altını dəyişmək üçün onu seçin, və ya **İş müstəvisi kimi istifadə et** düyməsinə basın.

Eyni adlı iki istinad müstəvisi ola bilməz, çünki ad onlardan birini seçmə üsuludur.

## Faydalı məlumat

- İş müstəvisi təyin olunmayan model ən aşağı səviyyəsində işləyir.
- İş müstəvisi faylda saxlanılır. Onu göstərmək və ya gizlətmək isə bu brauzerdə yadda saxlanılır, faylda yox.
- İş müstəvisi istinad müstəvisini izləyirsə və siz həmin müstəvini hərəkət etdirsəniz, iş müstəvisi onunla birlikdə hərəkət edir.
- Şaquli iş müstəvisində Model xətti və Model mətni alətləri baxıcını açır, çünki plan hündürlüyə işarə edə bilmir.
- Çəkmə alətləri planda çəkilmiş istinad müstəvilərinin uclarını, baxıcıda digər xətlərin uclarını tutduğu kimi tutur.

## IFC faylında

- İş müstəvisi layihədə xassə dəstidir (CadCraft_WorkPlane).
- İstinad müstəvisi obyekt tipi ReferencePlane və öz adı ilə IfcAnnotation-dur. Onun forması müstəvinin qapalı konturudur, ona görə digər proqram onun harada olduğunu göstərir. Onun CadCraft_ReferencePlane dəsti başlanğıc nöqtəni, istiqaməti, normalı və ölçünü saxlayır. IFC-də istinad müstəvisi üçün sinif yoxdur; annotasiya bina elementi sayılmır və otaqları məhdudlaşdırmır.
