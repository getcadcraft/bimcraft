---
title: Brauzerlər, cihazlar və yaddaş
summary: BimCraft-da Chrome, Edge, Firefox və Safari arasında, Mac, Windows və Linux-da, siçan, trackpad və ya toxunmada nə fərqlənir və fayl nə qədər böyük ola bilər.
keywords: brauzer, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, planşet, telefon, toxunma, trackpad, yaddaş, böyük fayllar, webgl, performans
from: fd8acba1
---

BimCraft Chrome, Edge, Firefox və Safari-nin cari versiyalarında, Mac, Windows və Linux-da işləyir. 3D görünüş WebGL tələb edir, hər cari brauzerdə var. Tətbiqlərin ümumi olaraq nə tələb etdiyini üçün bax: [Brauzerlər və kompüterlər](common:browsers).

## Qovluq açmaq

| Brauzer | {{ui:Qovluq aç}} nə edir | Qovluğu sürükləmək | {{ui:Son qovluqlar}} |
|---|---|---|---|
| Chrome, Edge | Brauzerin qovluq seçicisi, sonra "Sayt faylları görə bilsin?": **Faylları gör** klikləyin | Heç bir sual olmadan açılır | Bəli, seçilmiş və ya sürüklənmiş qovluqlar üçün |
| Firefox | Sistemin qovluq seçicisi | Heç bir sual olmadan açılır | Yox |
| Safari | Sistemin qovluq seçicisi, **Yüklə** düyməsi ilə (heç nə yüklənmir) | Heç bir sual olmadan açılır | Yox |

Səhnə arxasında: Chrome və Edge File System Access seçicisindən istifadə edir və qovluğu yadda saxlaya bilər. Firefox və Safari köhnə qovluq seçicisindən istifadə edir, bu bütün faylları bir dəfəyə verir və yadda saxlanıla bilməz. Sürüklənən qovluq hər brauzerdə giriş-giriş oxunur.

:::chromium
Brave və bəzi digər Chromium brauzerləri qovluq seçicisini söndürür. BimCraft onda sistemin qovluq seçicisini istifadə edir, brauzer isə "Bu saytda *n* fayl yüklənsin?" soruşa bilər. Heç nə yüklənmir; fayllar yalnız səhifəyə gedir. Qovluğu sürükləmək bu sualın qarşısını alır.
:::

## Mac, Windows və Linux

- {{key:Mod+S}} və {{key:Mod+Z}} qısayolları Mac-da Command, Windows və Linux-da Ctrl-dir.
- {{key:Ctrl+Shift+F}} (ekran rejimləri) hər platformada Control-dur, Mac daxil.
- Fayl dialoqları və yükləmə qovluğu sizin sisteminizindir.

## Siçan, trackpad və toxunma

| Giriş | 3D görünüş | 2D çəkiliş |
|---|---|---|
| Siçan | Sol sürükləmə fırladır, sağ sürükləmə sürüşdürür, təkər miqyaslayır, klik seçir | İstənilən sürükləmə sürüşdürür, təkər miqyaslayır, iki dəfə klik sığdırır |
| Trackpad | Klik-sürüklə fırladır; {{key:Shift}} və ya {{key:Mod}} və sürüklə sürüşdürür; iki barmaqla sürüşdürmə və ya sıxma miqyaslayır | Klik-sürüklə sürüşdürür; iki barmaqla sürüşdürmə və ya sıxma miqyaslayır |
| Toxunma | Bir barmaq fırladır, iki barmaq sıxır və sürüşdürür, toxunma seçir | Bir barmaq sürüşdürür; hələ sıxma miqyası yoxdur; {{ui:Sığdır}} toxunun |

Mac trackpad-da sağ klik iki barmaqla klikdir (və ya Control-klik). Bax: [Klaviatura, siçan və trackpad-lər](common:keys).

Planşetlər və telefonlar tək faylları açıb baxa bilər, lakin ekran kiçikdir, bir çox mobil brauzerlər qovluq seçə bilmir və böyük modellər onların yaddaşına sığmaya bilər. Kompüter ən yaxşı işləyir.

## Böyük fayllar və yaddaş

BimCraft-ın oxuduğu hər şey brauzer sekməsinin yaddaşında yaşayır. Sekmənin nə qədər istifadə edə biləcəyi BimCraft-dan çox brauzerdən və kompüterinizdən asılıdır.

| Fayl | Nə qədər oxunur | Nə gözləmək |
|---|---|---|
| IFC | Bütün fayl, üstəlik ondan qurulmuş 3D həndəsə | Nə qədər olduğu kompüterinizdən və brauzerdən asılıdır; bir neçə yüz meqabayt model noutbuk üçün çox ola bilər. 1.5 milyon üçbucaqdan çox olduqda kənarlar söndürülür |
| Layihə və ailə faylları | Ölçüsündən asılı olmayaraq təxminən 40 KB-dan 100 KB-a qədər | Çox böyük mərkəzi modellər də bir anda açılır, şəbəkə diskindən də |
| DWG və DXF | Bütün fayl | Çox böyük çertyojlar "Bu çertyoj çox böyükdür; yalnız bir hissəsi göstərilir." yazır. |
| Qovluqlar | Fayl siyahısı, və hər model üçün bir neçə kilobayt | 20,000 fayla qədər |

Brauzer yaddaşı bitəndə öz xəta səhifəsini göstərir (məsələn, Chrome-da "Aw, Snap!"). Digər sekmələri bağlayın, BimCraft-ı yenidən yükləyin və yenidən cəhd edin, və ya daha çox yaddaşı olan kompüterdən istifadə edin.

## Əlaqəli

- [Onlayn və offlayn](topic:online-offline)
- [Problemlərin həlli](topic:troubleshooting)
