---
title: Bir neçə IFC modelini birlikdə görün
summary: Səhnəyə daha çox IFC faylı əlavə edin, məsələn memarlıq, konstruksiya və xidmətlər, onları eyni koordinatlarda görün, birini köçürün, birini gizlədin və hansını redaktə edəcəyinizi seçin.
keywords: federasiya, federativ model, bir neçə model, çoxsaylı fayllar, birləşdir, üst-üstə, koordinasiya, intizam, konstruksiya, mep, xidmətlər, ofset, modeli köçür, aktiv model, model əlavə et
from: df0efbbf
---

## Nə edəcəksiniz

Müxtəlif intizamlardan olan modelləri bir yerdə görün: memarın modeli içində konstruksiya və xidmət modelləri ilə birlikdə. Hər biri öz faylında qalır; BimCraft onları yalnız birlikdə göstərir.

## Addımlar

1. Birinci IFC modelini adi qayda ilə açın.
2. Solda {{ui:Modellər}} bölməsində {{ui:Model əlavə et…}} klikləyin və bir və ya bir neçə IFC faylı seçin. Hər biri siyahıda və 3D görünüşdə görünür.
3. Modeli gizlətmək üçün onun işarəsini çıxarın; yenidən göstərmək üçün işarə qoyun.
4. Model yanlış yerdə gəlirsə (fərqli planalma nöqtəsi), altındakı {{ui:Sürüşdür}} klikləyin, X, Y və Z boyunca metrlə neçə məsafə sürüşdürüləcəyini yazın və {{ui:Tətbiq et}} klikləyin.
5. Nöqtəli model redaktə olunandır. Başqa modelin nöqtəsinə klikləyin ki, onu redaktə edəsiniz.
6. Modeli səhnədən çıxarmaq üçün onun yanındakı × klikləyin.

## Komandanın modellərini açın

Açıq model buludda komanda layihəsində olan fayl olduqda, siyahının altında {{ui:Komandanın modellərini aç}} görünür. O, layihənin digər IFC modellərini bu modelin yanında açır, hər biri layihənin təyin etdiyi ofsetlə köçürülmüş olaraq. Sizdən gizlədilmiş modellər kənarda qalır və sayılır; layihədə fırladılmış model fırlanmadan açılır və o da sayılır; IFC olmayan fayllar (məsələn DWG) ötürülür və status sətrində adları göstərilir. Artıq açıq olan model heç vaxt iki dəfə açılmır. Düymə komanda layihəsində olmayan fayl üçün gizlidir.

## Nəyi görməlisiniz

- Hər model birinci modelin koordinatlarında, faylın yerləşdirdiyi kimi. Eyni layihədən ixrac olunmuş modellər heç nə köçürülmədən düz düzülür.
- Redaktə etmədiyiniz modelin elementini seçdikdə onun xüsusiyyətləri yalnız oxuma rejimində göstərilir, keçmək üçün {{ui:Bu modeli redaktə et}} var.
- {{ui:Model ağacı}}, {{ui:Mərtəbələr}}, {{ui:Rəng}}, {{ui:Dəyişikliklər}} siyahısı, kitabxana elementlərinin yerləşdirilməsi və {{ui:IFC kimi saxla}} redaktə etdiyiniz model üzərində işləyir. Gizlətmə, təcrid, şəffaflıq və {{ui:Hamısını seç}} bütün modellər üzrə işləyir.
- {{ui:IFC kimi saxla}} redaktə etdiyiniz modeli yükləyir, yalnız dəyişikliklərlə birlikdə.

## Tez-tez edilən səhvlər

- **Model uzaqdadır və ya yoxdur.** Onun faylı başqa koordinatlardan istifadə edir. Onu tapmaq üçün {{ui:Sığdır}} istifadə edin, sonra {{ui:Sürüşdür}} ilə yerinə yerləşdirin.
- **Seçilmiş elementdə Sil və ya Kopyala boz görünür.** O, başqa modelə aiddir: əvvəlcə ona keçin.
- **Fayl seçin ilə fayl açmaq hər şeyi dəyişdi.** Bu, yeni səhnə başladır. Mövcud fayllara əlavə etmək üçün {{ui:Model əlavə et…}} istifadə edin.

## Növbəti

- [Elementləri gizlədin, təcrid edin və şəffaf edin](topic:hide-and-isolate)
- [Elementləri xüsusiyyətə görə rənglə](topic:color-by-property)
