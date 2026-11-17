---
title: "Pərdə sistemləri: şəbəkədə şüşəli divarlar, şaquli çərçivələrlə"
summary: Pərdə sistemini divar kimi çəkin və ya üzə yerləşdirin, sonra onun şəbəkə xətlərini və şaquli çərçivələrini təyin edin. IfcCurtainWall kimi, panelləri və şaquli çərçivələri ilə birlikdə saxlanılır.
keywords: pərdə sistemi, pərdə divar, şəbəkə, şaquli çərçivə, şüşələmə, vitrin, şüşə divar, panel, şüşə panel, üz üzrə, üz, kütlə, şəbəkə xətti, məsafə, profil, üfüqi çərçivə, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Nə edəcəksiniz

Şaquli çərçivələr arasında şüşə panellərdən ibarət şüşəli divar qurun, şəbəkə xətlərinin yerini dəyişin və hansı xətlərdə şaquli çərçivə olacağını seçin.

## Addımlar

1. **Çək** rejimini açın və **Tikinti** menyusunu açın (lent tərtibatında: Memarlıq sekmesi).
2. **Pərdə sistemi** seçin. Onun sətrində yuxarını təyin edin (üstdəki səviyyə və ya hündürlük), boyunca hər məsafədə xətt, yuxarı doğru hər məsafədə xətt (heç biri üçün boş buraxın), şaquli çərçivə olub-olmaması və şaquli çərçivə profili.
3. Divar çəkən kimi, başladığı və bitdiyi yerə klikləyin. Shift onu düz bucaq altında saxlayır.
4. Şəbəkəni dəyişmək üçün **Pərdə şəbəkəsi** seçin və sistemə klikləyin:
   - **Xətt əlavə et**: şaquli xətt klik etdiyiniz yerə düşür. Üfüqi xətt üçün əvvəlcə onun hündürlüyünü **Yerində** sahəsinə yazın.
   - **Xətti köçürün**: xəttə klikləyin, sonra xəttin gedəcəyi yerə.
   - **Xətti silin**: xəttə klikləyin.
   - **Məsafə ilə təyin et**: məsafəni **Hər** sahəsinə yazın, sonra sistemə klikləyin.
5. Şaquli çərçivələri dəyişmək üçün **Şaquli çərçivə** seçin, onun təsir edəcəyi şeyi seçin (klik etdiyiniz şaquli xətt, hündürlükdəki üfüqi xətt, kənar və ya bütün xətlər), **Şaquli çərçivə yerləşdir** və ya **Şaquli çərçivələri sil** və profil seçin, sonra sistemə klikləyin.
6. Sistemi seçin ki, bütün məlumatı **Xüsusiyyətlərdə** görəsiniz: hər şəbəkə xətti yeri ilə, şaquli çərçivə işarəsi və onu silmək düyməsi; məsafə; kənar; profil; şüşə panelinin qalınlığı.

## Üz üzrə

**Üz üzrə** 3D görünüşdə klik etdiyiniz düz üzdə pərdə sistemi yaradır. Onun sətirində eyni şəbəkə və şaquli çərçivə parametrləri var.

- 3D görünüşdə göstərilən istənilən elementin istənilən düz üzündə işləyir: kütlə, divar, döşəmə, dam müstəvisi, sütun, yerləşdirilmiş element. Üz şaquli, meylli və ya üfüqi ola bilər.
- Sistem üzün konturunu götürür. Ucluq və ya başqa qeyri-adi forma panelləri və şaquli çərçivələri ona görə kəsir.
- Əvəzində **divar** da yarada bilər: şaquli üzün dibi boyunca və üzün hündürlüyü qədər. Burada divar həmişə şaquli durur, ona görə meylli və ya üfüqi üz divar ala bilməz.
- Dam yaratmır. BimCraft-da dam səviyyənin konturundan və meyldən hesablanır, tək bir üzdən yox.
- Əyri üz bir çox kiçik düz üzdür: bir klik onlardan birini götürür.
- Üzündə açılışları olan üz: sistem üzün xarici konturunu əhatə edir.

## Necə ölçülür

- **Ümumi sahə** sistemin konturudur.
- **Şüşə sahəsi** yaradıldığı kimi panellərdir: hər panel şəbəkə şaquli çərçivəsi olan tərəfdə şaquli çərçivə enin yarısını, kənar şaquli çərçivədə isə tam enini itirir.
- Şaquli çərçivə kənardan kənara uzanır. Üfüqi çərçivə hər şaquli çərçivədə və kənarda dayanır. Kənar çərçivələr kontur daxilində yerləşir; ikisi görüşəndə daha şaquli olan keçir. Birləşmələr düz kəsilir, 45° bucaq altında yox.
- Model olduqda **Cədvəl (spesifikasiya)** bölməsində bu rəqəmlərlə **Pərdə sistemləri** siyahısı var.

## IFC faylında

Səviyyəsində IfcCurtainWall, hər panel üçün bir IfcPlate (pərdə paneli) və hər şaquli çərçivə parçası üçün bir IfcMember (şaquli çərçivə) ilə təşkil olunmuş, hər birinin öz forması, materialı və baza miqdarları ilə.

## Bilmək yaxşıdır

- İstənilən ölçü istədiyiniz kimi yaradılır. Yalnız sahəsi olmayan kontur rədd edilir, çünki yaradacaq heç nə yoxdur.
- Divar kimi çəkilmiş sistem çəkildiyi hündürlüyü saxlayır. Səviyyəni sonra köçürsəniz, hündürlüyünü Xüsusiyyətlərdə yenidən təyin edin.
- Köçürmə aləti hələ pərdə sistemini köçürmür. Onu silin və yenidən çəkin, ya da şəbəkəsini yerindəcə dəyişin.
- Geri qaytarma hər addımı geri alır: bütün sistemi, bir şəbəkə dəyişikliyini, bir şaquli çərçivə dəyişikliyini.
