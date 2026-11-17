---
title: Səhnəni başqa proqramda açmaq
summary: Səhnəni USD və ya glTF faylı kimi onu oxuyan istənilən proqram üçün saxlayın, və ya Studio-dan bu kompüterdəki proqramda açın.
keywords: bununla aç, usd, gltf, glb, ixrac, vizuallaşdırma proqramı, arxviz, studio, usdview, göndər, təhvil, paket, unreal qovluğu
from: 0a6559ee
---

Səhnəni başqa proqrama aparmaq üçün {{ui:Vizuallaşdırma}} dialoqunun Mühərrik siyahısında **Bununla aç** elementini seçin. Modelə heç nə geri qayıtmır.

## İstənilən proqram üçün fayl

- **USD faylı** səhnəni `.usdc` kimi saxlayır (model şəkillər daşıyanda `.usdz`): materiallar, lampalar və kameralarla birlikdə [USD kimi saxla](topic:usd) ilə eyni fayl. Təkrar istifadəni (instansiya) və dəqiq material dəyərlərini saxlayır. Əksər vizuallaşdırıcılar, oyun mühərrikləri və baxıcılar USD oxuyur.

- **glTF faylı (.glb)** materiallar, teksturalar və lampalarla daha yüngül glTF 2.0 faylını saxlayır; nəyi daşıdığını və nəyi qoyub getdiyini [Modeli vizuallaşdırma proqramına göndərmək](topic:model-for-rendering) bölməsində görün.

- **Unreal layihə qovluğu (.zip)** istənilən kompüterdəki layihə üçün [Səhnəni oyun mühərrikinə göndərmək](topic:render-unreal) bölməsinin yazdığı qovluğu saxlayır.

Üçü də brauzerdə və Studio-da işləyir.

## Studio-da: proqramda açın

Studio bu kompüterdə səhnəni aça bilən proqramları siyahılayır: axtarış yolunuzda varsa usdview, və həmin fayl növü üçün kompüterin öz proqramı. Birini seçin, hər ikisini oxuyursa USD və ya glTF seçin və {{ui:Vizuallaşdırma}} düyməsini basın. Studio paketi Sənədlər qovluğunda yeni qovluğa yazır (`CadCraft hand-off`; heç nə üzərinə yazılmır, hər göndərmə öz qovluğunu alır) və proqramı orada işə salır, sonra faylların harada olduğunu deyir.

| Proqram | Ən yaxşı oxuduğu |
|---|---|
| usdview | USD |
| Kompüterin öz proqramı | Kompüterdə həmin fayl növü üçün nə varsa |

Studio yalnız bu sabit siyahıdakı proqramları işə salır; səhifənin adla istədiyi heç nəni işə salmır və heç vaxt GNU GPL lisenziyası altında olan proqramı işə salmır (bax [Şəkli başqa proqramla çəkmək](topic:render-other-program#programs-cadcraft-never-runs)). USD və ya glTF oxuyan istənilən proqram yuxarıdakı **İstənilən proqram üçün fayl** bölməsindəki faylı açır.

:::note
Twinmotion, Enscape və digər vizuallaşdırma proqramları siyahıda yoxdur: CadCraft onlarla yoxlanmayıb və onlar haqqında heç bir iddia etmir. Buradan gələn glTF və ya USD faylı onlara giriş yoludur; bax [plagin vizuallaşdırıcıları](topic:model-for-rendering#enscape-and-other-plug-in-renderers) haqqında qeydlər.
:::
