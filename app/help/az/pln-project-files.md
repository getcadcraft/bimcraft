---
title: .pln və .pla layihə fayllarını açın
summary: BimCraft hazırda .pln, .pla, .tpl və .bpn fayllarında nə edir və modelin və çertyojların burada açılması üçün onlardan IFC və DWG necə ixrac etmək olar.
keywords: pln, pla, tpl, bpn, layihə faylı, arxiv, şablon, ehtiyat nüsxə, IFC ixracı, DWG ixracı, translyator, zonalar, vərəqlər
from: 41fb921d
---

## Nə edəcəksiniz

`.pln` (layihə), `.pla` (kitabxanası ilə arxiv), `.tpl` (şablon) və ya `.bpn` (ehtiyat nüsxə) kimi saxlanmış layihəni BimCraft-a gətirin. Bunlar Archicad-ın öz fayllarıdır.

## Hazırda nə açılır

- **Layihə faylların özləri hələ açılmır.** Onların formatı dərc edilməyib və BimCraft onları hələ oxumur. Birini açdıqda BimCraft bunu bildirir və bu səhifəyə yönləndirir.
- **BimCraft faylın ilk baytlarını yoxlayır.** 17-ci versiyadan başlayan Archicad layihələri eyni qısa imza ilə başlayır, ona görə BimCraft faylın Archicad layihəsi olduğunu dəqiq deyə bilir. Archicad adı olan, lakin belə başlamayan fayl ehtimal ki, adı dəyişdirilib, zədələnib və ya köhnə versiyadandır. İmza layihəni, arxivi və şablonu bir-birindən ayırmır.
- **IFC ixracı tam açılır**: model 3D-də, mərtəbələr, zonalar məkan kimi, element məlumatları, xassə dəstləri və təsnifatlar, bütün BimCraft alətləri ilə.
- **DWG ixracı 2D görünüşündə açılır**, qatları və vərəqləri ilə, və {{ui:3D}}-də. Redaktə etmək üçün {{ui:CadCraft-da redaktə et}} düyməsindən istifadə edin.

Və ya bütün layihəni, görünüşləri, vərəqləri və xassə qruplarını ilə bir zip kimi gətirin: bax [Layihə paketini açın](topic:open-project-bundle).

## IFC ixracı (model)

1. Layihəni Archicad-da açın.
2. **File > Save As** seçin və fayl növü kimi **IFC** seçin.
3. IFC translyatorunu seçin (Archicad-ın IFC ixrac parametrləri dəstinin adı). BimCraft üçün **IFC4 Reference View** və ya **IFC2X3 Coordination View 2.0** uyğundur. IFC4X3 də açılır.
4. Nəyin ixrac ediləcəyini seçin: bütün layihəni və ya yalnız baxdığınız mərtəbələrdə görünən elementləri.
5. Saxlayın, sonra BimCraft-da {{ui:Fayl seçin}} düyməsini basın və `.ifc` faylını seçin.

İxrac etməzdən əvvəl translyatorun parametrlərində bunları yoxlayın:

- **Zonalar**: onları ixrac edin ki, otaqlar məkan kimi gəlsin. Onları görmək üçün BimCraft-da {{ui:Məkanlar}} düyməsini basın.
- **Xassələr və təsnifatlar**: onları ixrac edin ki, {{ui:Xassələr}} panelində görünsünlər və {{ui:Axtar}}, {{ui:Rəng}} və {{ui:Miqdarların cəmi}} funksiyalarında istifadə oluna bilsinlər.
- **Sadə `.ifc`**, `.ifczip` və ya `.ifcxml` deyil. BimCraft yalnız sadə `.ifc` açır.

## DWG ixracı (çertyojlar)

1. İstədiyiniz planı, kəsiyi və ya vərəqi açın.
2. **File > Save As** seçin və fayl növü kimi **DWG** seçin.
3. DXF-DWG translyatorunu seçin və saxlayın.
4. Vərəqlərin tam dəsti üçün vərəqləri Layout Book-dan saxlayın və ya DWG kimi nəşr edin.
5. `.dwg` faylını BimCraft-da açın. İxracla əlaqələndirilən çertyojlar eyni qovluqda olduqda onunla birlikdə açılır; bax [Əlaqəli çertyojlar və şəkillər](topic:dwg-linked-files).

## Problemlərin həlli

- **"… Archicad layihəsidir: onun ilk baytları bunu deyir."** Yuxarıdakı kimi IFC və ya DWG ixrac edin və həmin faylı açın.
- **"… Archicad faylı kimi adlanır, lakin belə başlamır."** Faylın haradan gəldiyini yoxlayın: o, başqa növ fayl ola bilər, yeni adla (onu əsl uzantısı ilə açmağa çalışın), tamamlanmamış köçürmə nüsxəsi ola bilər və ya 17-dən əvvəlki versiyanın layihəsi ola bilər. Mümkünsə Archicad-da açın, sonra IFC və ya DWG ixrac edin.
- **Model otaqsız açılır.** Zonalar ixrac edilməyib. IFC translyatorunda onları aktivləşdirin və yenidən ixrac edin.
- **Kəsiklər kəsilmir.** BimCraft bunu {{ui:Fayl}} panelində **Hələ çəkilməyib** altında bildirir. Yenidən ixrac edin; qalırsa, modeli onu yaradan proqramda açın və kəsikləri orada yoxlayın.
- **DWG-dəki mətn fərqli görünür.** İxrac BimCraft-da olmayan şriftləri saxlaya bilər; BimCraft mətni sadə sans-serif şriftlə çəkir.

Həmçinin bax [Layihə faylını IFC vasitəsilə 3D-yə gətirin](topic:rvt-to-ifc) və [BimCraft hər formatdan nə oxuyur](topic:file-formats).
