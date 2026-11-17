---
title: Status zolağında əmr sətri
summary: Əmr sətri olan layoutda istənilən yerdə yazın, hərflər aşağıdakı sətirə düşür. Uyğun gələnləri siyahılayır, tarixçəni saxlayır və heç vaxt çertyojun üstünü örtmür.
keywords: əmr sətri, istənilən yerdə yazın, yazılmış əmr, status zolağı, status paneli, tarixçə, ox düymələri, enter, space, WALL, DOOR, Duncan layout, Rhino layout, qısayol, düymələr, əmr axtarışı
from: d583b52d
---

## Nə edəcəksiniz

Alətləri adlarını yazaraq işə salın, əvvəlcə qutuya klikləmədən.

## Addımlar

1. Əmr sətri olan layoutu seçin: {{ui:Parametrlər}} açın, {{ui:Qlobal}} seçin, sonra {{ui:Tərtibat}} və **Duncan** (ya da **Rhino**) seçin. Sətir pəncərənin aşağısında status zolağında yerləşir.
2. Göstərici harada olursa olsun və heç bir qutu istifadə olunmadıqda `wall` yazın. Hərflər əmr sətrində görünür və üstündə uyğun gələn əmrlərin siyahısı göstərilir.
3. {{key:Enter}} basın. Divar aləti başlayır.
4. Əmr sətrinə klikləyin (ya da yenidən düymə basın). Sətir boş olduqda siyahıda əvvəl yazdığınız əmrlər göstərilir. {{key:Up}} və {{key:Down}} onların arasında gəzir; {{key:Enter}} göstərilən əmri işə salır.

## Nə yaza bilərsiniz

- İstifadə olunan menyu üslubunun əmr sözü, həmin üslubda olduğu yerdə (Drafting üslubunda `WALL`, `WA`, `DOOR`).
- Əmrin açarı, söz kimi: `W`, sonra {{key:Enter}} və ya {{key:Space}} Divardır, `D` Qapıdır.
- Əmrin adı, boşluqları ilə və ya boşluqsuz: `split wall`, `wallrectangle`.
- Sözün və ya adın əvvəli, yalnız bir əmr həmin cür başlayanda.
- Başqa hər şey yazdıqlarınızla əmr axtarışını açır.

## Bilmək yaxşıdır

- {{key:Esc}} sətri boşaldır və düymələri çertyoja qaytarır.
- Bu layoutlarda tək hərf artıq tək başına alət işə salmır: {{key:Enter}} və ya {{key:Space}} gözləyir. {{key:Ctrl}} ilə düymələr, funksiya düymələri, {{key:Delete}} və {{key:Esc}} əvvəlki kimi işləyir. Digər layoutlarda heç nə dəyişmir.
- Çəkmə aləti işləyəndə rəqəmlər alətdə qalır (yazılmış uzunluq).
- Qutuda, dialoqda və ya Parametrlərdə yazmaq orada qalır.
- Tarixçə bu kompüterdə saxlanılır: hər tətbiq üçün 50 əmr.
