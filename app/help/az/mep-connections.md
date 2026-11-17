---
title: Boruları və kanalları avadanlığa birləşdirin
summary: Boru və ya kanalı portda başladın və ya bitirin ki, o portun ölçüsünü və sistemini alsın və ona bağlı qalsın, sonra birləşmələri yoxlayın — açıq portlar, ölçü və sistem uyğunsuzluqları, mənbəsi olmayan xətlər.
keywords: mep, birləşdirmək, birləşmə, birləşmələr, port, portlar, açıq port, ölçü uyğunsuzluğu, sistem uyğunsuzluğu, mənbə, birləşmələri yoxla, sabit, izləmək, avadanlığı köçürmək, ifcrelconnectsports, koordinasiya
from: 29144fb0
---

## Nə edəcəksiniz

Xətləri avadanlığa birləşdirin ki, model bir bağlı sistem olsun: nasosun çıxışını ondan çıxan boruya, diffuzerin boğazını onun budaq kanalına. Sonra BimCraft birləşməmiş olanları siyahıya salsın.

## Porttan çəkin

1. {{ui:Boru}} və ya {{ui:Hava kanalı}} seçin.
2. Göstəricini avadanlığın portunun üzərinə aparın (kiçik dairələr; açıq port xəbərdarlıq rəngi ilə çəkilir). Göstərici ona yapışır və **portda** deyir.
3. Klikləyin: xətt portun hündürlüyündən başlayır və **portun ölçüsünü və sistemini alır** (boru həm də sistemin adi materialını alır). Status sətri nəyi aldığını deyir.
4. Adi qayda ilə davam edin. Xəttin sonunu başqa portda bitirmək o ucu da bağlayır.

Portda olan xəttin ucu ona **sabitlənir**: avadanlığı (Xüsusiyyətlərdə) köçürün və ya çevirin — xəttin ucu onunla gedir; xətti redaktə etsəniz bu uc portda qalır. Xəttin digər künclər öz yerində qalır, buna görə böyük köçürmədən sonra ilk hissə portdan bucaq altında çıxa bilər: növbəti künci də köçürün.

## Birləşmələri yoxlayın

{{ui:Versiya}} menyusunu açın və {{ui:Birləşmələri yoxla}} klikləyin. Panelin altındakı siyahı göstərir:

| Sətir | Nə deməkdir |
|---|---|
| Port birləşdirilməyib | Avadanlığın heç nə çəkilməmiş bir birləşməsi var |
| Ucunda heç nə yoxdur | Xətt havada bitir |
| Birləşmiş portların ölçüləri fərqlidir | Bir ölçülü xətt başqa ölçülü port və ya xəttə reduktorsuz birləşir (borunun nominal ölçüsü, kanalın forması və tərəfləri) |
| Birləşmiş portların sistemləri fərqlidir | Məsələn, təchizat diffuzerində qayıdış kanalı |
| Boru kanala birləşib | İki fərqli növ birləşmə toqquşur |
| Onu təchiz edən şəbəkədə avadanlıq yoxdur | Xətt birləşdiyi heç nə, nə qədər uzaq olsa da, çıxışa malik deyil. Drenaj, yağış suyu və havalandırma bu yoxlamada soruşulmur: onların suyu qurğulardan gəlir |
| Modeldə artıq olmayan avadanlığın portuna sabitlənib | Avadanlıq silinib; ucu yenidən çəkin və ya xətti silin |

Xətalar birinci gəlir. Siyahıdakı sətrə klikləyin ki, onun adını verdiyi şeyi seçsin. {{ui:Bağla}} siyahını gizlədir. Yoxlama modeli çəkildiyi kimi oxuyur: birləşmələri və ölçüləri yoxlayır, heç vaxt axınları, təzyiqləri və ya balanslaşdırmanı yox.
