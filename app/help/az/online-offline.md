---
title: Onlayn və oflayn
summary: BimCraft saytdan nəyi yükləyir, Oflayn üçün saxla IFC modellərini və DWG çertyojlarını bağlantısız necə açır və açdığınız heç nəyin niyə heç vaxt yüklənmədiyi.
keywords: oflayn, onlayn, internet, bağlantı, şəbəkə yoxdur, təyyarə rejimi, sahə ziyarəti, oflayn üçün saxla, oflayn hazırdır, yükləmə, məxfilik, wasm, webassembly, IFC mühərriki, dwg, bulud
from: 39e5c7eb
---

BimCraft faylları brauzer vərəqində oxuyur. Açmaq, yoxlamaq, redaktə etmək və saxlamaq faylları heç yerə göndərmir, onlayn və ya oflayn. [Oflayn işləmək](common:offline) bütün tətbiqlərdə oflayn nüsxənin necə işlədiyini izah edir; bu səhifə BimCraft-a xas olanları əhatə edir.

## BimCraft saytdan nəyi yükləyir

| Hissə | Oflayn nüsxə olmadan nə zaman yüklənir | Ölçü |
|---|---|---|
| Tətbiqin özü, 3D baxış vasitəsi və IFC mühərrikinin kodu ilə | BimCraft açılanda | Bir neçə meqabayt |
| IFC mühərrikinin WebAssembly hissəsi | Brauzer vərəqində açdığınız ilk IFC faylı: "IFC mühərriki başlayır…" | Təxminən 1.6 MB |

DWG və DXF çertyojları, layihə və ailə faylları və qovluqların əlavə heç nəyə ehtiyacı yoxdur: onların oxuyucuları tətbiqin bir hissəsidir.

## BimCraft-ı oflayn istifadə üçün saxlayın

1. BimCraft-ı onlayn olarkən açın.
2. Yuxarıdakı tətbiq çubuğunda {{ui:Oflayn üçün saxla}} düyməsinə klikləyin.
3. Düymənin saydığına baxın, məsələn "212-dən 40 saxlanılır". BimCraft-ın nüsxəsi təxminən 11 MB-dır, çünki IFC mühərrikini özündə saxlayır.
4. {{ui:Oflayn hazırdır}} yazısını gözləyin.

{{ui:Oflayn hazırdır}} yazdıqdan sonra IFC modelləri, DWG və DXF çertyojları, layihə faylları, qovluqlar və bu kömək bağlantısız açılır. Oxuyucuları "isitmək" üçün əvvəlcə IFC və ya DWG açmağa ehtiyac yoxdur.

Nüsxəni yeniləmək və ya silmək üçün {{ui:Oflayn hazırdır}} düyməsinə klikləyin və {{ui:Yenidən saxla (ən yeni versiyanı al)}} və ya {{ui:Oflayn nüsxəni sil}} seçin.

## Düymə nə deyir

| Düymə | Mənası |
|---|---|
| {{ui:Oflayn üçün saxla}} | Bu brauzerdə hələ oflayn nüsxə yoxdur. Birini saxlamaq üçün klikləyin |
| "*m*-dən *n* saxlanılır" | Saxlanılır; bitənə qədər brauzer vərəqini açıq saxlayın |
| {{ui:Oflayn hazırdır}} | Saxlanıldı. Nə vaxt olduğunu görmək üçün üzərinə gəlin; menyu üçün klikləyin |
| {{ui:Saxlamaq alınmadı}} | Bəzi fayllar yüklənmədi. Bağlantınızı yoxlayın və yenidən cəhd etmək üçün klikləyin. Varsa, son yaxşı nüsxə saxlanılır |
| {{ui:Oflayn mövcud deyil}} | Bu pəncərə oflayn nüsxə saxlaya bilmir (şəxsi pəncərə və ya idarə olunan kompüter). Bax: [Oflayn işləmək](common:offline) |

:::offline
Siz oflayn rejimdəsiniz.

- Düymə {{ui:Oflayn hazırdır}} yazırsa, hər növ fayl adi kimi açılır.
- Yoxdursa, bu vərəqdə artıq yüklənmiş şeylər işləyir: bu vərəqdə heç vaxt yüklənməmiş oxuyucu başlaya bilmir və həmin növ faylı açmaq status xəttində brauzerdən xəta göstərir. Yenidən onlayn olana qədər vərəqi yenidən yükləməyin.
:::

## Heç nə tələb etməyən işlər

BimCraft brauzer vərəqində açıq olduqda bunlar, hətta saxlanmış nüsxə olmadan da, oflayn işləyir:

- Layihə və ailə fayllarını oxumaq və qovluqları yoxlamaq.
- Elementləri seçmək, xassələri oxumaq və artıq açılmış modeldə IFC dəyərlərini redaktə etmək.
- {{ui:IFC kimi saxla}} və {{ui:CSV yüklə}}: ikisi də vərəqdə edilən yükləmələrdir.

## Hələ mövcud olmayanlar

- **Bulud saxlanması.** Fayllar yalnız kompüterinizə saxlanılır.

Bax: [Fayllarınız hara gedir](common:your-files).
