---
title: Model xətləri və model mətni: modeldə, iş müstəvisində çəkilir
summary: Model xətti modelin içində yaşayan və onu görən hər görünüşdə göstərilən xətt, polixətt və ya qövsdür. Model mətni real dərinliyi olan 3D yazıdır. Hər ikisi iş müstəvisində çəkilir.
keywords: model xətti, model mətni, 3D mətn, yazı, lövhə, lövhələr, 3D-də xətt, qövs, polixətt, iş müstəvisi, çıxarılmış mətn, şrift, dərinlik, təfsilat xətti, çertyoj xətti, izahat, IfcAnnotation
from: fc9cccb5
---

## Nə edəcəksiniz

Yalnız bir görünüşə deyil, modelin hissəsi olan xətlər və yazılar çəkin.

## Addımlar

1. İş müstəvisini əvvəlcə təyin edin (bax **İş müstəvisi**). Səviyyə müstəvisi planda çəkilir; şaquli müstəvi İş müstəvisi Baxışçısında.
2. Xətt üçün **Versiya** menyusunda {{ui:Model xətti}} seçin və **Xətt**, **Polixətt** və ya **Qövs (üç nöqtə)** seçin:
   - xətt iki klikdir;
   - polixətt hər nöqtə üçün bir klikdir, sonra {{key:Enter}} və ya ikiqat klik. İlk nöqtəyə klik onu bağlayır;
   - qövs üç klikdir: başlanğıc, keçdiyi nöqtə və son.
3. Mətn üçün {{ui:Model mətni}} seçin. Sözləri yazın, böyük hərflərin hündürlüyünü və dərinliyi təyin edin, sonra mətnin başladığı yerə klikləyin (əsas xəttin sol ucu).
4. Xətti və ya mətni seçin, onu **Xassələr** panelində görün. Mətnin sözləri, hündürlüyü və dərinliyi orada dəyişdirilə bilər. Sil onu silir.

## Harada göstərilir

- Model xətti öz səviyyəsinin planında, 3D görünüşdə, fasad və kəsik panelində və xətt iş müstəvisinin üzərində olduqda İş müstəvisi Baxışçısında göstərilir. Çertyoj xətti (Qeyd et, Xətt) yalnız bir görünüşə aiddir.
- Model mətni bərk həndəsədir: model göstərildiyi hər yerdə — planda, 3D-də, fasad və kəsiklərdə, həmçinin vərəqlərdə görünür.
- Model xətləri çap vərəqlərində hələ göstərilmir. Model mətni göstərilir.

## Şrift

Model mətni vərəqlər və PDF-lərlə eyni şrifti istifadə edir: Liberation Sans, SIL Open Font License altında. Şriftdə olmayan hərf sual işarəsi kimi çəkilir və hansı hərf olduğu barədə xəbər verilir. Bir şrift və bir qalınlıq var. Hərflər şriftin öz enlərinə görə, kerninqsiz aralanır.

## IFC faylında

- Model xətti ModelLine obyekt növü ilə IfcAnnotation-dır. Forması 3D əyridir: polixətt, və ya qövs üçün kəsilmiş dairə.
- Model mətni ModelText obyekt növü ilə IfcBuildingElementProxy-dir. Forması hər hərf parçası üçün bir çıxarılmış bərk cisimdir, O və B kimi hərflərin deşikləri ilə birlikdə. Kəmiyyətləri səthin sahəsi və həcmdir (səth sahəsi dərinliklə vurulur).

## Bilmək yaxşıdır

- İstənilən ölçü istədiyiniz kimi yaradılır. Yalnız uzunluğu olmayan xətt, üç nöqtəsi bir düz xətt üzərində olan qövs və ya hərfi olmayan mətn rədd edilir, çünki yaradılacaq heç nə yoxdur.
- Hər xətt, mətn və ya onların hər dəyişikliyi Geri qaytar üçün bir addımdır.
