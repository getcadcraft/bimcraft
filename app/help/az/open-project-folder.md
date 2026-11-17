---
title: Bütün layihə qovluğunu açın
summary: BimCraft-a layihə qovluğunu göstərin ki, bütün modelləri, onların ehtiyat nüsxələrini və əlaqələrini bir dəfəyə görün, Buradan başlayın qutusu isə hansı faylla işləmək lazım olduğunu təklif etsin.
keywords: qovluq, direktoriya, layihə qovluğu, şəbəkə diski, server, buradan başlayın, hansı fayl, ehtiyat nüsxələr, əlaqələr, xref, son qovluqlar, qovluğu sürüklə
from: 16fbdce2
---

## Nə edəcəksiniz

Bütün layihə qovluğunu, məsələn iş üçün sizə verilmiş qovluğu açın və BimCraft-ın onu təşkil etməsinə icazə verin: hansı modellər var, hansı nüsxələr ehtiyat nüsxədir, nə nəyə bağlıdır, hansı fayllar zədələnib və hansı faylı çox güman ki açmaq istəyirsiniz.

Hər model kartının ehtiyacı olan bir neçə kilobayt oxunur, buna görə şəbəkə diskindəki və ya sinxronlaşdırılmış bulud qovluğundakı qovluq da yaxşıdır.

## Addımlar

:::chromium
1. Soldakı {{ui:Qovluq aç}} düyməsini klikləyin (ya da boş ekranın ortasında).
2. Açılan pəncərədə layihə qovluğunu seçin və **Seç** düyməsini klikləyin (sisteminizdən asılı olaraq **Yüklə** və ya **Aç**).
3. Brauzer "Sayta fayllara baxmağa icazə verilsin?" soruşanda **Fayllara bax** düyməsini klikləyin. Bu yalnız vərəqə qovluğu oxumağa icazə verir; heç nə yüklənmir.
4. Status sətri sayarkən gözləyin: "Qovluq siyahıya alınır: … fayl", sonra "Revit faylları yoxlanılır: … / …".
:::

:::firefox
1. Soldakı {{ui:Qovluq aç}} düyməsini klikləyin (ya da boş ekranın ortasında).
2. Açılan pəncərədə layihə qovluğunu seçin və təsdiq edin. Firefox səhifənin qovluğun fayllarını oxuya biləcəyini təsdiq etməyinizi istəyə bilər; fayllar yenə də kompüterinizdə qalır.
3. Status sətri "Qovluq oxunur: … fayl", sonra "Revit faylları yoxlanılır: … / …" yazana qədər gözləyin.
:::

:::safari
1. Soldakı {{ui:Qovluq aç}} düyməsini klikləyin (ya da boş ekranın ortasında).
2. Açılan pəncərədə layihə qovluğunu seçin və **Yüklə** düyməsini klikləyin. Sözə baxmayaraq, heç nə Mac-dən çıxmır: fayllar yalnız vərəqə verilir.
3. Status sətri "Qovluq oxunur: … fayl", sonra "Revit faylları yoxlanılır: … / …" yazana qədər gözləyin.
:::

Qovluğu {{pick:mac=Finder|windows=File Explorer|linux=fayl menecerindən}} səhifəyə sürükləyə bilərsiniz. Sürüklənən qovluq bütün brauzerlərdə icazə soruşmadan açılır.

## Nəyi görəcəksiniz

Qovluq hesabatı ortanı doldurur:

- Qovluğun adı, modellərin, CAD çertyojlarının, IFC modellərinin və faylların sayı və ümumi ölçü.
- Hər hansı fayl natamam olarsa və ya bəzi bağlı fayllar qovluqda yoxdursa, qırmızı və ya narıncı qeydlər.
- {{ui:Buradan başlayın}} qutusu: BimCraft-ın açmağı təklif etdiyi fayl, səbəbləri ilə.
- **Modellər**: hər model üçün bir sətir, ehtiyat nüsxələri altında qruplaşdırılmış.
- **Bağlı və istinad edilmiş fayllar**, **IFC modelləri**, **CAD çertyojları** və **Kənara qoyulmuş**, qovluqda varsa.

Solda {{ui:Qovluq}} paneli bunu ümumiləşdirir; hər nüsxə sağlam olduqda **Problemlər** "Yoxdur" yazır.

## Buradan başlayın qutusundan istifadə edin

Qutu bir faylın adını çəkir və səbəbini deyir, məsələn:

- "Bu qovluqda ən təzə saxlanılmış iş (3 mart 2025)."
- "*Consultant.rvt* digər modellərə bağlanıb, buna görə o, redaktə ediləcək fayl yox, fonda gedən fayldır."
- "*Tower.rvt* açıq seçim kimi görünür, amma zədələnib; son sağlam nüsxəsi … tarixlidir."
- "Bu mərkəzi modeldir: Revit-də onu "Create New Local" ilə açın və lokal nüsxədə işləyin."

1. Səbəbləri oxuyun.
2. Həmin faylın kartını oxumaq üçün {{ui:Kartını açın}} düyməsini, ya da **Modellər** siyahısında onun sətrini tapmaq üçün {{ui:Siyahıda göstərin}} düyməsini klikləyin.
3. Ona güvənməzdən əvvəl layihədə son işləyən şəxslə yoxlayın. Qutu da bunu deyir: bu yalnız adlardan, tarixlərdən və əlaqələrdən çıxarılmış ehtimaldır.

## Hesabatdan faylları açın

1. Modelin adını klikləyin və onun kartı açılsın. Kart hər əlaqəni qovluqla yoxlayır.
2. Qayıtmaq üçün kartın yuxarısındakı {{ui:Geri}} və qovluq adını klikləyin (ya da soldakı {{ui:Qovluğa qayıt}}).
3. **IFC modelləri** altında istənilən IFC faylını klikləyib 3D-də açın.
4. **CAD çertyojları** altında istənilən DWG və ya DXF-i klikləyib 2D-də açın. Onun bağlı çertyojları və şəkilləri qovluqda avtomatik tapılır.

## Qovluğu sonra yenidən açın

:::chromium
{{ui:Qovluq aç}} ilə və ya sürüklənərək açdığınız qovluqlar soldakı {{ui:Son qovluqlar}} altında siyahıda görünür. Qovluq adında {{ui:Yenidən aç}} düyməsini klikləyin; seçmədən yenidən açılır. Brauzer yenidən başladıqdan sonra Chrome və ya Edge bir dəfə yenə soruşur; soruşmaması üçün "Hər ziyarətdə icazə ver" seçin. Siyahı yalnız bu brauzerdə saxlanılır, heç yerə göndərilmir. Qovluğu unutmaq üçün × klikləyin.
:::

:::firefox safari
Bu brauzer ziyarətlər arasında qovluqları yadda saxlaya bilmir. Qovluğu {{ui:Qovluq aç}} ilə yenidən seçin və ya sürükləyib səhifəyə salın.
:::

## Ümumi səhvlər

- **Çox böyük qovluq seçmək.** 20.000-dən çox fayl: "Bu qovluqda 20.000-dən çox fayl var. Daha kiçik qovluq seçin, məsələn, bir layihə." Bütün diski yox, layihə qovluğunu seçin.
- **Bir neçə layihənin valideyn qovluğunu seçmək.** **Buradan başlayın** qutusu onda layihələr arasında seçim edir. Bir layihə seçin.
- **Revit-in öz qovluqları nəzərə alınmır kimi görünür.** `*_backup`, `*_log` və `Revit_temp` qovluqları təmizlik qovluqlarıdır və **Kənara qoyulmuş** altında siyahıya alınır, oxunmur.
- **Kartdan modelin 3D-də açılmasını gözləmək.** Layihə faylı yalnız karta malikdir. Onun IFC ixracını açın.
- **Telefonlar və planşetlər.** Bir çox mobil brauzer ümumiyyətlə qovluq seçə bilmir. Kompüter istifadə edin.

Bax: [Zədələnmiş nüsxələr, itmiş əlaqələr və qalıqlar üçün qovluğu yoxlayın](topic:check-folder-health) və [Qovluq hesabatı: rollar, statuslar və əlaqələr](topic:folder-roles).
