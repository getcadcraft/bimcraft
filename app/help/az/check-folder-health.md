---
title: Qovluğu zədəli nüsxələr, əskik keçidlər və qalıqlar üçün yoxlayın
summary: Qovluq hesabatından istifadə edərək kəsilmiş model fayllarını tapın, ən son tam ehtiyat nüsxəni seçin, hansı keçidlərin əskik olduğunu görün və kilid və müvəqqəti faylları müəyyənləşdirin.
keywords: sağlamlıq yoxlaması, zədəli, korlanmış, natamam, kəsilmiş, ehtiyat nüsxə, əskik keçidlər, xref əskik, audit, qalıqlar, kilid faylları, dwl, bak, təhvil
from: 3025a539
---

## Nə edəcəksiniz

Qovluğu təhvil verməzdən və ya üzərində işə başlamazdan əvvəl yoxlayın: hər model tamdırmı, hansı ehtiyat nüsxə son sağlam nüsxədir və bütün əlaqəli fayllar yerindədirmi?

## Addımlar: zədəli nüsxələr

1. Layihə qovluğunu açın. Bax [Bütün layihə qovluğunu açın](topic:open-project-folder).
2. Qovluq adının altındakı qeydləri oxuyun. "2 fayl natamam və ya oxunmazdır. Aşağıdakı modellərə baxın." o deməkdir ki, baxmaq lazımdır.
3. **Modellər** bölməsində **Status** sütununa baxın. **Tam** qaydasındadır. Sarı "1 natamam" o deməkdir ki, bir nüsxə pisdir, lakin başqa nüsxə sağlamdır. Qırmızı **Natamam** heç bir sağlam nüsxənin tapılmadığı deməkdir.
4. Problemli modelin altında **All … copies** düyməsini açın. O, əsas faylı və hər nömrələnmiş ehtiyat nüsxəni, ən yenisindən başlayaraq, ölçüsü, tarixi və statusu ilə göstərir.
5. Siyahının üstündəki qeydi oxuyun, məsələn: "Tower.rvt natamamdır (183.2 MB, ən azı 214.0 MB olmalıdır). Kartda ən yeni tam nüsxə, Tower.0012.rvt (Mar 3, 2025) göstərilir."
6. Açmaq istədiyiniz nüsxəyə klikləyin. Yalnız tam nüsxələrə klikləmək mümkündür.

## Sağlamlıq yoxlaması nə edir

Hər modelin hər nüsxəsinin başlığı (hər biri 512 bayt) sürətlə yoxlanılır, buna görə böyük modellərlə dolu qovluq belə saniyələr içində yoxlanılır. Öz indeksi sonundan kənara işarə edən fayl kopyalanma, yükləmə və ya sinxronlaşdırma zamanı kəsilib. Buludda saxlanılan və hələ də "yalnız onlayn" olan fayl eyni görünür.

Hər modelin kartı, əsas fayl sağlam olduqda ondan, sağlam olmadıqda isə ən yeni sağlam ehtiyat nüsxədən oxunur.

## Addımlar: əskik keçidlər

1. Qovluq adının altında "*n* əlaqəli fayl bu qovluqda deyil." qeydini tapın.
2. **Əlaqəli və istinad olunan fayllar** bölməsinə keçin. Əskik keçidlər əvvəl sadalanır.
3. Hər keçid üçün **Harada** sütununu oxuyun:
   - **Bu qovluqda**: model tərəfindən saxlanmış yolda tapıldı.
   - **Eyni ad tapıldı**: qovluqda eyni adlı fayl başqa yerdədir. Düzgün olduğunu yoxlayın.
   - **Kitabxana faylı**: açar qeyd və ya yığım kodu cədvəli. Bunlar hər kompüterdə proqramla birlikdə gəlir, buna görə qovluqda olması gözlənilmir.
   - **Bu qovluqda deyil**: qovluqda heç yerdə tapılmadı.
4. Hər faylı hansı modellərin əlaqələndirdiyini görmək üçün **İstifadə edən** sütununu oxuyun.

BimCraft hər keçidi əvvəlcə nisbi yoluna görə, sonra saxlanmış yolunun sonuna görə (beləliklə `\\server\jobs\Tower\Cad\X-Refs\site.dwg` faylı `Cad` qovluğunu seçdikdə `X-Refs/site.dwg` kimi tapılır), sonra isə qovluğun istənilən yerində fayl adına görə axtarır.

## Addımlar: qalıqlar

1. Hesabatın sonunda **Kənara qoyulub** bölməsinə keçin.
2. Görünə bilən üç sətri oxuyun:
   - Xidməti qovluqlar (`*_backup`, `*_log`, `Revit_temp`): oxunmur.
   - Kilid, jurnal və ehtiyat nüsxə qalıqları: `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$` kimi fayllar. Bunlar çökmüş və ya qovluq kopyalanarkən açıq olan proqramlar tərəfindən qalır. Heç kim faylları açıq saxlamırsa, adətən silmək təhlükəsizdir.
   - Digər fayllar: BimCraft-ın oxumadığı hər şey.

## Tez-tez edilən səhvlər

- **Yaxşı ehtiyat nüsxəni saxlamadan zədəli əsas faylı silmək.** Əvvəl ən yeni tam ehtiyat nüsxəni kopyalayın, sonra zədəli faylla məşğul olun.
- **"Eyni ad tapıldı"ya kor-koranə inanmaq.** İki fərqli çertyojun adı eyni ola bilər. Şübhə olduqda hər ikisini açın.
- **Əskik kitabxana faylını problem hesab etmək.** Açar qeyd və yığım kodu cədvəlləri hər kompüterdə proqramla birlikdə yaşayır.
- **Fayl sayının brauzerlər arasında fərqlənməsi.** Firefox və Safari-də {{ui:Qovluq aç}} xidməti qovluqlar da daxil olmaqla hər faylı təhvil verir, buna görə say (və 20 000 fayl limiti) onları da əhatə edir. Qovluğu sürükləyərək daxil etdikdə onlar atlanır, Chrome və Edge-də olduğu kimi. Hesabat əks halda eynidir.
