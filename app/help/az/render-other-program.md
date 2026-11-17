---
title: Şəkli başqa proqramla çəkmək
summary: Öz yol izləyicimiz Vizuallaşdırma şəklini çəkir; başqa proqram bunu yalnız CadCraft Studio-da vizuallaşdırma mühərriki əlavəsi vasitəsilə edə bilər. Nə ötürülür və niyə bəzi proqramlar heç vaxt təklif olunmur.
keywords: vizuallaşdırma, mühərrik, xarici proqram, əlavə mühərriki, studio, fon, növbə, usd, gltf, çəkilən, blender, gpl
from: 652b413c
---

{{ui:Vizuallaşdırma}} şəklini **öz mühərriklərimiz** çəkir: Sürətli və Yol izləyici, brauzerdə və CadCraft Studio-da. Başqa proqram şəkli yalnız **vizuallaşdırma mühərriki əlavəsi** gətirdikdə çəkə bilər: bax [Əlavə ilə vizuallaşdırma mühərriki əlavə etmək](topic:render-engine-addons). Səhnəni başqa proqrama aparıb orada işləmək üçün [Səhnəni başqa proqramda açmaq](topic:render-open-in) və ya [Səhnəni oyun mühərrikinə göndərmək](topic:render-unreal) istifadə edin.

## Əlavə mühərrikilə şəkil çəkmək

1. Əlavəni Parametrlər › Əlavələr bölməsində aktivləşdirin. Onun mühərriki {{ui:Vizuallaşdırma}} dialoqunun Mühərrik siyahısında görünür.
2. Onu seçin. Onun öz parametrləri Mühərrik siyahısının altında göstərilir.
3. {{ui:Vizuallaşdırma}} düyməsini basın. Studio-da əlavə ilk dəfə proqram işlətdikdə, Studio öz dialoqunda soruşur. Çəkilən zaman gedişat göstərilir; {{ui:Dayandır}} onu dayandırır. Şəkil onu çəkən mühərrik ilə işarələnmiş halda görünür.

JavaScript-də yazılmış mühərrik brauzerdə də işləyir. Bu kompüterdə proqram işlədən mühərrik yalnız Studio-da işləyir; brauzerdə saxlanılacaq fayl kimi görünür.

## Nə ötürülür

Mühərrik **paket** alır: model USD faylı kimi (və istədikdə glTF faylı kimi) və dəqiq material dəyərləri, günəş və səma, gücü və işıq profili ilə yanan hər lampa, kamera və ekspozisiya ilə parametrlər faylı. Hər proqram işığı, tonları və nümunələri öz üsulu ilə verir, buna görə şəkillər kamera, günəş, lampalar və ekspozisiya baxımından oxşar olur, lakin piksel-piksel eyni deyil.

## CadCraft-ın heç vaxt işə salmadığı proqramlar

CadCraft heç vaxt GNU GPL lisenziyası altında olan proqramı işə salmır və heç vaxt onu mühərrik və ya **Bununla aç** hədəfi kimi siyahıya salmır. Blender bunlardan biridir, buna görə o Mühərrik siyahısında yoxdur. {{ui:Vizuallaşdırma}}-dən saxlanılan USD və ya glTF faylı yenə də həmin faylları oxuyan istənilən proqramda olduğu kimi onda açılır.

:::note
Panorama və stereo kameralar və səma şəkli (onun əvəzinə səmanın rəngləri istifadə olunur) başqa proqrama ötürülmür. Başqa proqramda edilən heç nə modelə geri qayıtmır.
:::
