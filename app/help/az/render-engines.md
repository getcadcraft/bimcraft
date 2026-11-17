---
title: Şəkli hansı proqramın çəkdiyini seçin
summary: Vizuallaşdırma dialoqunda Mühərrik seçimi: bizim öz iki mühərrikimiz, CadCraft Studio-dakı digər proqramlar və veb bunun əvəzinə nə edir.
keywords: vizuallaşdırma, mühərrik, vizuallaşdırıcı, vizuallaşdırma mühərriki, plagin, plugin, studio, xarici proqram, çəkilir, növbə, əlavə mühərriki
from: 44a1ef5e
---

{{ui:Vizuallaşdırma}} dialoqunda **Mühərrik** seçimi Forma seçimindən yuxarıdadır. Öz iki mühərrikimiz həmişə mövcuddur və hər yerdə işləyir; əlavələr daha çoxunu əlavə edə bilər, CadCraft Studio-da isə siyahıda səhnəni öz üzərinə götürən proqramlar da olur.

| Mühərrik | Nə edir | Harada |
|---|---|---|
| Daxili: {{ui:Sürətli}} | Sürətli statik şəkil: gün işığı, yumşaq kölgələr, şüşə və metal görünüşləri, bir neçə saniyədə | Brauzer və Studio |
| Daxili: Yol izləyici | Səthlər arasında işığın əks olunması, qrafik kartınızda və ya prosessorunuzda, vizuallaşdırma növbəsi və şəbəkənizdəki digər kompüterlər | Brauzer və Studio |
| Əlavə mühərriki | Şəkli çəkir və geri qaytarır: bax [Şəkli başqa proqramla çəkmək](topic:render-other-program) | Brauzer (JavaScript-də yazılmış mühərrik) və ya Studio (proqram işlədən mühərrik) |
| Səhnəni öz üzərinə götürən proqram | Studio səhnəni öz qovluğuna yerləşdirir və onu eyni vəziyyətdə saxlayır | Studio |
| Bununla aç … | Səhnəni saxlayır və proqramda açır; heç nə geri qayıtmır: bax [Səhnəni başqa proqramda açmaq](topic:render-open-in) | Veb faylı saxlayır |

## Seçimin işləmə qaydası

- Sürətli və ya Yol izləyicini seçmək onunla birlikdə Formanı dəyişir, və əksinə. Başqa mühərrikdən heç istifadə etməyənlər üçün dialoqun qalan hissəsi dəyişmir.
- Mövcud olmayan mühərrik səbəbi ilə birlikdə siyahıda qalır ("tapılmadı", "daha yeni versiya tələb edir"); onu seçmək olmaz. Brauzerdə yalnız Studio-da işləyən mühərrik "fayl saxlayır" kimi göstərilir: bu halda {{ui:Vizuallaşdırma}} səhnəni və onun parametrlərini həmin proqrama aparacağınız fayla saxlayır.
- Seçim faylın vizuallaşdırma parametrləri ilə birlikdə saxlanılır; son seçdiyiniz mühərrik öz seçimi olmayan fayllar üçün başlanğıc mühərrikdir.
- Başqa proqramın şəkli dialoqda və vizuallaşdırma növbəsində onu hansı proqramın çəkdiyini və versiyasını göstərir. [Vizuallaşdırma](topic:render) səhifəsindəki vədlər yalnız **öz** mühərriklərimizə aiddir: başqa proqram işığı, tonları və nümunələri öz üsulu ilə verir, buna görə eyni səhnənin iki şəkli kamera, günəş, lampalar və ekspozisiya baxımından oxşar olur, lakin piksel-piksel eyni olmur.

## Hər mühərrikə nə verilir

Səhnə başqa proqrama **paket** kimi göndərilir: model USD faylı kimi ([USD kimi saxla](topic:usd) əmrinin yazdığı eyni fayl) və USD idxalçısına etibar edilməyən şeyləri saxlayan parametrlər faylı: dəqiq material dəyərləri, gücü və işıq profilləri ilə yanan lampalar, günəş, səma, ekspozisiya və dialoqun çəkdiyi kimi kamera. Heç bir yerə yüklənmir.

## Vizuallaşdırma növbəsi

Başqa proqram üçün şəkil öz şəkillərimiz kimi [vizuallaşdırma növbəsində](topic:render#the-render-queue) gözləyə bilər; onun tapşırığı hansı mühərrik üçün olduğunu yaddaşında saxlayır.
