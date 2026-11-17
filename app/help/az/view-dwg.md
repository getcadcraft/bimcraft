---
title: DWG və ya DXF çertyojuna baxın
summary: DWG və ya DXF açın, model fəzası və vərəqlər arasında hərəkət edin, koordinatları oxuyun və hələ çəkilməmiş şeyləri görün.
keywords: dinamik bloklar, görünüş vəziyyətləri, dwg, dxf, cad, çertyoj, 2d, görünüş, baxıcı, sürüşdür, miqyas, model fəzası, kağız fəzası, tərtibat, plan, koordinatlar, dwg aç
from: 4db3122a
---

## Nə edəcəksiniz

CAD çertyojunu açın, 3D və ya 2D-də görün, onun ətrafında hərəkət edin, model fəzası ilə vərəqləri arasında keçid edin və koordinatları oxuyun. BimCraft DWG və DXF çertyojlarını göstərir; onları redaktə və ya saxlamır. Dəyişmək üçün {{ui:CadCraft-da redaktə et}} düyməsinə basın və çertyoj yeni nişanda CadCraft çertyoj proqramında açılır.

## Addımlar

1. {{ui:Fayl seçin}} düyməsinə basın və ya çertyojunu səhifəyə atın.
2. `.dwg` və ya `.dxf` faylı seçin.
3. Status sətri "Çertyoj oxunur…" deyəndə gözləyin. Böyük çertyojlar bir neçə saniyə çəkir. Sonra oxunuşun neçə vaxt apardığını, ilk şəkil çəkilərkən "vizuallaşdırılır…" və bunun neçə vaxt apardığını deyir.
4. Çertyoj 3D-də açılır — böyük çertyojları göstərmək üçün ən sürətli üsul (bax: [DWG və ya DXF çertyojuna 3D-də baxın](topic:dwg-in-3d)). Düz 2D görünüş üçün {{ui:Model}} basın. Çertyojları həmişə 2D-də açmaq üçün {{ui:Parametrlər}} › {{ui:BimCraft}} › **Çertyojlar burada açılır** dəyərini {{ui:Model (2D)}} edin. Model fəzasında heç nə olmayan çertyoj və ya 3D göstərə bilməyən brauzer 2D-də açılır.
5. Çertyojun üstündəki nişanlara baxın: əvvəl {{ui:Model}}, sonra hər vərəq üçün bir nişan, çertyojun öz sırası ilə.
6. Vərəq nişanına basın və o vərəqi görün: kağız və üzərində modelin görünüş pəncərələri vasitəsilə göstərilməsi.
7. {{ui:Model}} basaraq model fəzasına qayıdın.
8. Siçan göstəricisini çertyojun üzərinə aparın və küncdə X və Y koordinatlarını oxuyun.

## Nəyi görməlisiniz

- Çertyoj pəncərəyə sığdırılıb. Rənglər çertyojun rənglərini izləyir; ağ xətlər (rəng 7) mövzunun mürəkkəbi ilə çəkilir, açıq rənglər isə açıq mövzuda oxunaqlı olsun deyə tünd edilir.
- Solda {{ui:Çertyoj}} paneli: fayl, ölçü, format (məsələn "AutoCAD 2018 (AC1032)"), vahidlər, element və qat sayları, vərəqlərin sayı və əgər varsa, bağlı çertyojlar və avadanlıqlar.
- Solda {{ui:Qatlar}} siyahısı.
- Sağda: necə hərəkət etmək, bağlı çertyojlar və şəkillər, və **Hələ çəkilməyib**.

## Hərəkət

:::mouse
| Nə üçün | Bunu edin |
|---|---|
| Sürüşdürmək | Hər hansı siçan düyməsi ilə sürükləyin |
| Miqyas | Təkərdə fırladın; göstəricinin altındakı nöqtə yerində qalır |
| Sığdırmaq | İki dəfə basın, {{key:F}} düyməsini basın və ya {{ui:Sığdır}} basın |
:::

:::mac mouse
Trackpad-də iki barmaqla sürüşdürmə **miqyaslayır**, sürüşdürmür. Sıxma da miqyaslayır. Sürüşdürmək üçün basıb sürükləyin.
:::

:::touch
Bir barmaqla sürükləyərək sürüşdürün. Çertyojlar üçün sıxmaqla miqyaslama hələ yoxdur: bütün vərəqi görmək üçün {{ui:Sığdır}} basın və yaxınlaşdırmaq üçün siçan və ya trackpad istifadə edin.
:::

## Dinamik bloklar

Dinamik blok çertyojun göstərdiyi kimi çəkilir: hər yerləşdirilmiş blok çertyojun saxlandığı görünüş vəziyyətində ("Plan" və ya "Front", "Single bowl" və ya "Double bowl") göstərilir. Sağda **Dinamik bloklar** model fəzasında yerləşdirilmiş hər birini siyahıya salır: neçəsi yerləşdirilib, göstərdikləri vəziyyətlər və blokun sahib olduğu hər vəziyyət. {{ui:3D}} rejimində yerləşdirilmiş bloka basın və Xassələrdə **Dinamik blok**, **Göstərilən vəziyyət** və **Digər vəziyyətlər**-i görün. BimCraft vəziyyətləri dəyişmir.

## Hələ çəkilməyib

Bu versiyada bəzi obyekt növləri çəkilmir. Onlar sağda **Hələ çəkilməyib** altında sayılır ("Çertyojun bu hissələri hələlik ötürülür, təxmin edilmir."), beləliklə nəyinsə çatışmadığını bilirsiniz. Xətlər, polixətlər, qövslər, çevrələr, ellipslər, splaynlər, ştrixlamalar və dolu sahələr, mətn və çoxsətirli mətn, atributlu bloklar, ölçülər, liderlər və çoxlu liderlər, cədvəllər, şəkillər və görünüş pəncərələri çəkilir. 3D üzlər, polyface mesh-lər və polygon mesh-lər yuxarıdan görünən kənarları kimi çəkilir; onları səthlər kimi görmək üçün {{ui:3D}} rejiminə keçin.

Binar DXF açılmır: BimCraft bunu deyir. Onu yaradan proqramdan ASCII DXF və ya DWG kimi yenidən saxlayın.

## Tez-tez edilən səhvlər

- **Çertyoj boş görünür.** Bəzi qatlar çertyojun özündə söndürülmüş və ya donmuş ola bilər; onlar {{ui:Qatlar}} siyahısında seçilməmiş başlayır. {{ui:Hamısını aç}} basın. Status "*name* boş çertyojdur: içində xətt, mətn və ya blok yoxdur." deyirsə, içində heç nə yoxdur.
- **Vərəq boş çərçivə göstərir.** Vərəq bağlı çertyojlardan asılı ola bilər. Bax: [Bağlı çertyojları və şəkilləri tapın](topic:dwg-linked-files).
- **Mətn bir az fərqli görünür.** BimCraft mətni çertyojun öz şriftləri ilə yox, dar sans-serif şriftlə çəkir; buna görə mətn onu yaradan proqramdakından bir az enli və ya dar ola bilər.
- **"*name* oxuna bilmədi. Zədələnmiş ola bilər və ya oxucunun hələ idarə etmədiyi formatda saxlanılmış ola bilər."** Sonundakı mötərizə faylın format kodunu adlandırır. Onu yaradan proqramdan köhnə DWG və ya DXF kimi saxlayın və yenidən cəhd edin.
- **Ölçmək, çəkmək və ya redaktə etməyi gözləmək.** BimCraft çertyojlara yalnız baxır. Eyni faylı CadCraft çertyoj proqramında redaktə etmək üçün {{ui:CadCraft-da redaktə et}} basın; o, faylı redaktə edir və nüsxəsini DWG və ya DXF kimi saxlayır. Orijinal faylınız dəyişmir və bağlı çertyojlar BimCraft-da qalır. Düymə yalnız CadCraft sizə açıq olduğu yerdə görünür.

## Növbəti

- [DWG və ya DXF çertyojuna 3D-də baxın](topic:dwg-in-3d)
- [Qatlar və vərəqlərlə işləyin](topic:dwg-layers-sheets)
- [Çap görünüşündə çertyojun yoxlanılması](topic:print-view)
