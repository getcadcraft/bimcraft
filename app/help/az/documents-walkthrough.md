---
title: "Sənədlər və baxışlar (vault)"
summary: "Real bir iş üzrə addım-addım təlimat: IFC modellərinin layihə qovluğunu nəzarət altına alın, modeli götürün, dəyişdirin, qeydlə qaytarın, nəzərdən keçirməyə göndərin, təsdiq edin və buraxın, tarixçəni və nəyin istifadə olunduğunu görün, modeli siz saxlayanda ikinci şəxsin nə gördüyünü və bulud qovluqları ilə necə işlədiyini görün."
keywords: vault, sənədlər, təlimat, dərslik, götür, qaytar, baxış, buraxılış, təsdiq, kilid, tarixçə, harada istifadə olunub, ifc, model, bulud qovluğu, layihə qovluğu, iki nəfər, paylaşılan qovluq
from: 0a753f25
---

## Nə edəcəksiniz

Siz Anasınız, həmkarınız Ben ilə Riverside Clinic üzərində işləyirsiniz. Layihənin IFC modelləri hər ikinizin çatdığı bir qovluqda yaşayır (paylaşılan disk, sinxronlaşdırılmış qovluq və ya bulud qovluğu). Sonda bir fayl ilk nüsxəsindən buraxılmış **A** baxışına keçib, yenidən **B.1** kimi dəyişdirilib, kimin nə etdiyini görmüsünüz və faylı siz saxlayanda Benin nə gördüyünü görmüsünüz.

Hər şey fayllarınızın yanında gizli `.ccvault` qovluğunda saxlanılır: server yoxdur, heç nə yüklənmir (bulud qovluğu istisnadır, son addıma baxın). Hər düymə və qayda bir yerdə üçün, tətbiqinizdə olduqda, mövzuya baxın: *Sənədlər: götürmə, baxışlar və buraxılış*.

## 1. Layihə qovluğunu qurun

1. Başlanğıc ekranda {{ui:Qovluq aç}} yanındakı {{ui:Sənədlər}} seçin, ya da **Fayl** menyusunda {{ui:Sənədlər…}}.
2. {{ui:Layihə qovluğunu seçin}} seçin və layihənin IFC modellərini saxlayan qovluğu seçin. (Layihə qovluqları Studio-da və qovluq aça bilən brauzerlərdə, məsələn Chrome və Edge-də işləyir. Digər brauzerlərdə panel bunu bildirir.)
3. **Siz:** yanında {{ui:Dəyişiklik}} seçin və adınızı yazın, `Ana` (soruşsa, həm də bu kompüterin adını). Panel indi *Siz: Ana, kompüterdə* deyir və kompüterinizin adını. Adınız etdiyiniz hər şeydə qeyd olunur.
4. {{ui:Bu qovluqda depo başlat}} seçin və layihənin adını yazın, `Riverside clinic`. Panel deyir: *Riverside clinic üçün depo başladıldı.*

## 2. Faylı nəzarət altına alın

1. **Depoda olmayan fayllar** açın və `models/House.ifc` yanında {{ui:Əlavə et}} seçin.
2. O, **Depodakı fayllar** altında **A.1** baxışında, vəziyyəti **İş davam edir** ilə görünür. A.1 onun ilk nüsxəsidir; depo hər baxışın nüsxəsini saxlayır.

## 3. Götürün, dəyişin, qaytarın

1. `models/House.ifc` yanında {{ui:Açıq}} seçin. Model BimCraft-da açılır və panel bağlanır ki, onu görəsiniz. Paneli yenidən {{ui:Sənədlər}} ilə açın.
2. Paneli yenidən açın və {{ui:Götür}} seçin. Sətir indi **Sizə götürülüb** deyir. `.ccvault/locks`-da kilid faylı yaradılıb; siz onu qaytarana qədər heç kim bu faylı götürə bilməz.
3. Modeli dəyişin: divarı köçürün, qapı əlavə edin. Saxla model sizə götürülməyənə qədər rədd edilir və səbəbini deyir; Fərqli saxla həmişə öz nüsxəniz üçün işləyir.
4. Paneli açın, {{ui:Qovluğa qaytar}} seçin və nəyin dəyişdiyini yazın (`Qapını köçürdüm`). Panel deyir: *A.2 kimi qaytarıldı.* Layihə qovluğundakı fayl indi açdığınız model olur və kilid yox olur. Dəyişiklik olmadan qaytarmaq baxışı saxlayır.

Fikriniz dəyişsə, {{ui:Götürməni ləğv et}} faylı yeni baxış olmadan geri verir.

## 4. Nəzərdən keçirin və buraxın

1. {{ui:Nəzərdən keçirməyə göndər}} seçin. Vəziyyət **Nəzərdən keçirilir** olur və fayl yalnız oxunandır.
2. Təsdiq etməzdən əvvəl {{ui:Layihə parametrləri}} seçin və kimin təsdiq edə biləcəyini siyahılayın (hər sətirdə bir ad), məsələn `Ben` və `Carla`, və təsdiq edənin müəllifdən başqa biri olmalı olduğu qaydanı işarələyin. {{ui:Parametrləri saxla}} seçin. İndi depo özü başqasını rədd edir.
3. Ben (ya da Carla) {{ui:Təsdiq et}} seçir və təsdiq edənin adını yazır. Vəziyyət **Buraxılıb** olur, baxış **A** olur, *təsdiq edən* və adla. Buraxılmış fayl yalnız oxunandır. {{ui:Geri göndər}} onu səbəblə birlikdə **İş davam edir** vəziyyətinə qaytarardı.

Təsdiq edənin adı panelə yazılan addır; kimin təsdiq etdiyinin qeydidir, şəxsiyyətin sübutu deyil.

## 5. Yeni baxış

1. Buraxılmış faylda {{ui:Yeni baxış}} seçin. Onu növbəti hərf üçün götürürsünüz.
2. Dəyişin, sonra {{ui:Qovluğa qaytar}}. Baxış **B.1**, **İş davam edir** olur. Eyni üsulla buraxın və **B** olur. İlk qaytarmadan əvvəl {{ui:Götürməni ləğv et}} onu **A**-da saxlayır.

Baxış hərfləri A, B … Z, AA, AB ardıcıllığı ilə gedir. Standartınız bəzi hərfləri buraxırsa, layihə parametri *ASME Y14.35 ardıcıllığını istifadə et* növbəti baxışlar üçün I, O, Q, S, X və Z-ni ötür.

## 6. Nə baş verdiyini görün

Faylın təfərrüatlarını açmaq üçün onun adını seçin:

- **{{ui:Tarixçə}}**: hər hadisə, ən yenisi əvvəl, kim, hansı kompüter və nə vaxt ilə: Ana tərəfindən *A.2 kimi qaytarıldı*, Ben tərəfindən *Buraxıldı*, və s.
- **{{ui:Baxışlar}}**: baxış cədvəli: saxlanılan hər baxış, tarixi, onu kimin qaytardığı, qeydi və kimin təsdiq etdiyi ilə. Depo hər birinin nüsxəsini `.ccvault/revs`-də saxlayır.
- **{{ui:İstifadə edir}}**: IFC modelinin istinad etdiyi sənədlər.
- **{{ui:İstifadə edən}}**: depodakı bu fayla istinad edən hər modeli siyahılayır.

## Digər sənədlərə istinad edən modellər

Qovluqdakı digər sənədlərə (çertyojlar, cədvəllər) istinad edən IFC modeli onları **İstifadə edir** altında göstərir, və bu sənədlərin hər biri modeli **İstifadə edən** altında göstərir. Sənədi depoya qaytardıqda hansı modellərin ona istinad etdiyini görə bilərsiniz.

## 7. Faylı siz saxlayanda Ben nə görür

İndi faylı yenidən götürün və Bendən həmin layihə qovluğunu öz kompüterində açmasını və paneli açmasını xahiş edin. Faylın sətirində o görür **Ana tərəfindən, sizin kompüterinizdə, vaxtdan bəri götürülüb** və {{ui:Götür}} düyməsi yoxdur. Yenə də cəhd etsə, depo rədd edir: kilid sistemin iki dəfə yaratmayacağı bir fayldır, belə ki iki nəfər faylı eyni anda, hətta Studio-da qovluq diskdə olduqda belə, saxlaya bilməz. (Brauzerdə qovluq yalnız ən yaxşı səyi buraxır və panel bunu **Qovluq** altında bildirir.)

Ana yoxdursa və Benə fayl lazımdırsa, {{ui:Götürməni poz}} onu azad edir. O, səbəb yazmalıdır; bu, kimin götürmə olduğu ilə birlikdə jurnala düşür. Layihədə admin siyahısı olduqda yalnız onlar edə bilər. Köhnəlmə həddindən (defolt 14 gün) köhnə götürmə *uzun müddət* kimi qeyd olunur. Pozulduqdan sonra Anın gecikmiş qaytarması rədd olunur, belə ki ikiniz bir-birinizin üzərinə yaza bilməzsiniz.

## 8. Bulud qovluqları

Bulud qovluğu komandanızın bulud yaddaşında saxlanılan layihə qovluğudur, belə ki komandanın paylaşılan diska ehtiyacı yoxdur. CadCraft hesabınıza daxil olmuş Studio-da panel {{ui:Layihə qovluğunu seçin}} yanında {{ui:Bulud qovluğunu aç}} göstərir. Onu seçin və qovluğu seçin, iş sahəsi / qovluq kimi siyahılanır. İş sahəsinin sahibi əvvəlcə qovluğu yaradır və komandanın bulud yaddaşı qüvvədə olmalıdır. Yuxarıdakıların hamısı eyni işləyir; server kilidi yaradır, bu adamlar arasında ciddidir. Daxil olmamısınızsa panel daxil olmağı deyir. Adi brauzer sekmesində bulud düyməsi təklif olunmur; Studio-dan istifadə edin.

## Sınayın

Yuxarıdakı səkkiz addımı real faylın surəti ilə edin. İki nəfərlik addımlar üçün başqa bir adam lazımdır, ya da iki adla iki pəncərə. Real paylaşılan qovluqla sınasanız, Community sınaq səhifəsi məhz bunu soruşan yoxlamanı siyahılayır və nəticələri qəbul edir.
