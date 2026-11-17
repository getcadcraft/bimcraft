---
title: Əlavə ilə vizuallaşdırma mühərriki əlavə etmək
summary: Əlavənin Vizuallaşdırma dialoqunun Mühərrik siyahısına nə əlavə edə biləcəyi, proqram işlətmək üçün lazım olan icazə və Studio-nun nəyi yoxladığı və nədən soruşduğu.
keywords: əlavə, addon, mühərrik, vizuallaşdırma mühərriki, işləyici, engine.run, icazə, proqram, skript, imzalanmış, studio, api
from: 06295376
---

Əlavə (Parametrlər › Əlavələr) {{ui:Vizuallaşdırma}} dialoqunun Mühərrik siyahısına mühərrik əlavə edə bilər. Əlavə müəllifləri üçün tam mətn əlavə spesifikasiyasının 16-cı bölməsindədir; qısaca:

- Əlavə öz adı ilə başlayan id, ad, istəyə bağlı parametrlər və **ya** işə salınacaq proqram, **ya da** şəkli çəkən JavaScript funksiyası ilə mühərrik qeydiyyatdan keçirir.
- Proqram işədən mühərrik **`engine.run`** icazəsi tələb edir; bu icazə quraşdırmadan əvvəl və Parametrlərdə göstərilir. Yalnız Studio-da işləyir; brauzerdə saxlanılacaq fayl kimi görünür.
- Əlavə proqramı (yalnız sadə fayl adı, heç vaxt qabıq (shell) deyil), **imzalanmış əlavənin içində** olan skripti və yer tutucu və sadə sözlərdən ibarət arqumentləri göstərir. Studio proqramı tapır və ya onu bir dəfə göstərməyinizi xahiş edir.
- Əlavə ilk dəfə proqram işlətdikdə, **Studio öz dialoqunda sizdən soruşur**: hansı əlavə, hansı proqram və skriptin proqramın edə biləcəyi hər şeyi edə bilməsi. Yalnız etibar etdiyiniz əlavəyə icazə verin. Cavabınız həmin əlavə və proqram üçün yadda saxlanılır.
- Paket (səhnə USD kimi və parametrlər faylı, əlavə istədikdə glTF faylı ilə birlikdə) və əlavənin skripti yeni müvəqqəti qovluğa yazılır, proqram orada işləyir və şəkil əlavə mühərrikinin adı ilə qeyd olunmuş halda geri qayıdır.

:::note
Əlavələr yalnız əlavə API 1.4-dən başlayaraq vizuallaşdırma mühərrikləri əlavə edə bilər. Açıq mənbəli komanda sətri vizuallaşdırıcısı üçün işlənmiş nümunə öz depozitoriyasındadır; o, həmin vizuallaşdırıcıda hələ işlədilməyib.
:::
