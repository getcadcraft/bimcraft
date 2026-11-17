---
title: Boru gərginlik və ya izometrik proqrama göndərin və geri oxuyun (PCF)
summary: Modelin boru xətlərini PCF boru komponent faylı kimi yazın, və ya boru gərginlik və ya izometrik proqramdan PCF faylı oxuyun və onun borusunu xətlər kimi çəkin.
keywords: pcf, boru komponent faylı, boru gərginliyi, izometrik, izometriklər, ixrac, idxal, boru, zavod, polad boru, işi köçürmək, başqa proqram
from: 24f91355
---

## Nə edəcəksiniz

PCF boru gərginlik və izometrik proqramların oxuyub yazdığı düz mətn faylıdır. Hər boru kəmərinin komponentlərini onların son nöqtələri və diametrləri ilə sadalayır.

## İxrac

1. Boru alətini seçin. Seçimlər sırası **PCF ixrac et**-i göstərir.
2. Ona klikləyin. Modeldəki hər boru xətti yazılır: düz boru, dirsəklər (90 dərəcə dönüş, əks halda əyri), budaq nöqtəsi olan trinikər, reduksiyalar və klapanlar.
3. Fayl millimetrlərlə işləyir. Diametrlər millimetrlə nominal diametrlərdir. Dirsəyin mərkəz nöqtəsi onun künci, iki ayağının birləşdiyi yerdir.

PCF polad butt-qaynaqlı boru üçün yazılır. Başqa materialdan olan xətt də yazılır, polad komponent açarları ilə, və Problemlər panelində qeyd olunur.

## İdxal

1. Boru alətini seçin və **PCF idxal et…** klikləyin, sonra faylı seçin.
2. Düz borudan dirsəklərə, əyrilərə, klapanlara və flanslara qədər cari səviyyədə bir xətt olur. Ölçü dəyişikliyi yeni xətt başladır. Trinikin budağı trinikin mərkəzindən başlayan öz xəttinə çevrilir.
3. Model öz fitinqlərini özü qurur. Reduksiyalar və trinikər kopyalanmır: fərqli ölçülü xətlər və ya budaq birləşdikdə görünürlər.

:::note
Fayldakı hündürlüklər cari səviyyədən yüksəklik kimi oxunur. Yüklər, bağlamalar və gərginlik analizinin özü PCF faylında yoxdur və gəlmir.
:::

## Gələnləri yoxlayın

- Hər boru kəmərinin ümumi boru uzunluğu mənbə ilə uyğun olmalıdır.
- Problemlər paneli hər birini bir dəfə sadalayır: mərkəz nöqtəsi hər iki ucdan eyni məsafədə olmayan dirsək, uzunluğu olmayan boru və standart olmayan diametr.

## Artıq IFC faylında olan boru

IFC faylı açıq olduqda **PCF ixrac et** öz boru seqmentlərini, fitinqlərini və klapanlarını da yazır, çəkdiyiniz xətlərin yanında. Seqment ucunu portlarından və ya gövdəsinin uclarından alır. Portsuz fitinq buraxılır və Problemlər paneli bunu deyir. Model çəkilmiş xətt olmadan olduqda yalnız IFC-dən ixrac edə bilərsiniz.

İdxal zamanı faylda olan dayaqlar, olletlər, flanslar, contalar və qapaqlar çəkilmir. Problemlər paneli hər birindən neçəsinin buraxıldığını sadalayır, beləliklə heç nə səssizcə yox olmur.
