---
title: Qovluq hesabatı: rollar, statuslar və keçidlər
summary: Qovluq hesabatındakı hər etiket, onun mənası və Burdan başla təklifinin necə seçildiyi.
keywords: qovluq hesabatı, rollar, status, tam, natamam, oxunmaz, keçid, fon, başlanğıc, mərkəzi, ailə, yalnız ehtiyat nüsxələr, burdan başla, keçid statusu
from: b35bdd10
---

## Nüsxənin statusu

Modelin hər nüsxəsi — əsas fayl və nömrələnmiş ehtiyat nüsxələr daxil olmaqla — başlıq yoxlamasından keçir.

| Etiket | Mənası |
|---|---|
| **Tam** | Faylın başlığı və indeksi fayla sığır |
| **Natamam** | Fayl öz indeksinin dediyindən qısadır: kopyalanarkən, yüklənərkən və ya sinxronlaşdırılarkən kəsilib, ya da hələ də "yalnız onlayn" olan bulud faylıdır |
| **Oxunmaz** | Fayl etibarlı mürəkkəb fayl deyil və ya oxuna bilmədi |

**Status** sütununda model **Tam** göstərir; ən azı bir nüsxə pisdir, digəri sağlamdırsa, sarı "*n* natamam"; heç bir nüsxə sağlam deyilsə, qırmızı **Natamam**.

## Ehtiyat nüsxələr

`Name.0001.rvt`, `Name.0002.rvt` və s. adlı fayllar `Name.rvt`-nin nömrələnmiş ehtiyat nüsxələridir. Onlar öz modelinin altında, ən yenisi birinci olmaqla, **Bütün … nüsxə** bölməsində qruplaşdırılır. Kart əsas fayldan oxunur, əgər o tamdırsa; əks halda ən yeni tam ehtiyat nüsxədən ("ən yeni tam").

## Rollar

Modelin adı altında *kursivlə* göstərilir.

| Rol | Mənası |
|---|---|
| *Başqa model* tərəfindən bağlanıb: fon | Qovluqdakı başqa model bunu bağlayır, ona görə çox güman ki, bu, kimsənin fonudur, məsələn məsləhətçinin modeli |
| Başlanğıc və ya adsız fayl | Blank, Template, Default, Untitled və ya Project1 kimi ad: başlanğıc nöqtəsi və ya heç vaxt düzgün adlandırılmamış fayl |
| Mərkəzi model | Birgə işlənən mərkəzi model. İş yerli nüsxədə aparılır, burada yox |
| Ailə (detal) | `.rfa` və ya `.rft` faylı: komponent, layihə yox |
| Yalnız ehtiyat nüsxələr | Əsas fayl yoxdur və yalnız nömrələnmiş ehtiyat nüsxələr qalıb |

## Burdan başla necə seçilir

BimCraft təcrübəli istifadəçinin edəcəyi mühakiməni tətbiq edir:

1. Namizədlər başqa model tərəfindən bağlanmamış və başlanğıc olmayan oxuna bilən layihə faylları (`.rvt`, `.rte`) olur.
2. Mərkəzi və yalnız ehtiyat nüsxəli modellər yalnız daha yaxşısı olmayanda sayılır.
3. Namizədlər arasında ən son saxlanılan qalib gəlir.

Qutuda səbəbləri sadalanır və aşkar seçim kimi görünən fayl zədələnəndə, başqa modellər fon olanda və seçim mərkəzi model olanda xəbərdarlıq edir. Bu ən yaxşı təxmindir; layihə üzərində sonuncu işləmiş şəxslə yoxlayın.

## Keçid statusu

| Etiket | Mənası |
|---|---|
| **Bu qovluqda** | Saxlanmış nisbi yolda, ya da qovluq daxilində saxlanmış tam yolun sonunda tapıldı |
| **Eyni ad tapıldı** | Öz yolunda deyil, lakin qovluqda eyni adlı fayl var. Onun doğru olduğunu yoxlayın |
| **Kitabxana faylı** | Açar qeydlər və ya yığım kodu cədvəli. Bunlar hər kompüterdə proqramla birlikdə gəlir |
| **Bu qovluqda yoxdur** | Qovluqda heç yerdə tapılmadı |

**Modellər** bölməsindəki **Tapılmış keçidlər** sütunu modelin keçidlərindən qovluqda gözlənilənlər arasında neçəsinin tapıldığını göstərir (kitabxana faylları sayılmır).

## Kənara qoyulanlar

| Sətir | Mənası |
|---|---|
| Revit təmizlik qovluqları (oxunmur) | `*_backup`, `*_log` və `Revit_temp` qovluqları, həmçinin gizli qovluqlar və `__MACOSX` |
| Kilid, jurnal və ehtiyat qalıqları | `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` və `.slog` faylları |
| Digər fayllar | Qalan hər şey (ilk 40-ı adlandırılır) |
