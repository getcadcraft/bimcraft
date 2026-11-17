---
title: İdxalda vahidlər: fayl öz vahidlərini bildirir, yoxsa əvvəlcə sizdən soruşulur
summary: Gətirdiyiniz fayl öz vahidlərini bildirdikdə, BimCraft onlardan istifadə edir və bunu deyir. Bildirmədikdə, BimCraft heç nə yerləşdirməzdən əvvəl soruşur və cavabınızı həmin fayl üçün yadda saxlayır.
keywords: vahidlər, idxal, aç, OBJ, STL, DWG, DXF, IFC, nöqtə buludu, kitabxana elementi, millimetr, metr, düym, fut, miqyas, səhv ölçü, çox böyük, çox kiçik, 1000 dəfə, soruş, yadda saxlanılıb
from: f044e9bc
---

## Nə edəcəksiniz

Faylı gətirin və onun düzgün ölçüdə gəldiyinə əmin olun.

## Addımlar

1. Faylı əvvəlki kimi açın və ya əlavə edin: {{ui:Açıq}}, Kitabxananın {{ui:Fayllar}}, {{ui:Nöqtə buludları}}, ya da Qur › Çertyojdan.
2. Fayl öz vahidlərini bildirirsə, heç nə soruşulmur. Status sətri faylın hansı vahidləri bildirdiyini göstərir.
3. Bildirmirsə, dialoq **Faylın vahidləri** xanasını soruşur. Faylda bir vahidin nə olduğunu seçin və {{ui:Bu vahidlərdən istifadə et}} düyməsinə basın. Cavab verənə qədər heç nə yerləşdirilmir.
4. {{ui:Ləğv et}} (və ya {{key:Esc}}) heç nə gətirmir.

## Hansı fayllar vahidlərini bildirir

- **IFC**: uzunluq vahidini bildirir və "Açıldı" statusunda hansının olduğunu göstərir. Heç bir vahid bildirməyən IFC açılmazdan əvvəl soruşulur; cavabınız modelə yazılır və saxladığınız zaman fayl onu bir dəfə bildirir.
- **DWG və DXF**: çertyojun daxiletmə vahidləri. Onları olmayan çertyojlardan soruşulur (Kitabxana faylları, Qur › Çertyojdan, konturlardan relyef).
- **Relyef üçün nöqtə siyahıları**: vahid bildirmir. Sizdən soruşulur.
- **Nöqtə buludları**: koordinat sistemi olan LAS və LAZ, E57, PTX və PLY öz vahidlərini bildirir. Digərləri haqqında soruşulur.
- **OBJ və STL**: heç vaxt vahid bildirmir. Sizdən soruşulur.
- **glTF və GLB**: formatın öz qaydasına görə metr.
- **Şəkillər**: öz ölçüsü yoxdur. Şəkil görünüşə sığdırılır və ölçünü iki nöqtə ilə miqyaslandırmaqla təyin edirsiniz. Verdiyiniz ölçü həmin fayl üçün yadda saxlanılır: yenidən yerləşdirildikdə həmin ölçüdə gəlir və status sətri bunu deyir.
- **Nöqtə buludları əlavəsi**: vahidi bildirməyən faylı olan bulud qurduqda soruşur və buludun rəqəmlərini onun daşıdığı vahiddə etiketləyir.

## Bilmək yaxşıdır

- Cavab həmin fayl üçün (adı, ölçüsü və tarixi) bu kompüterdə bütün CadCraft proqramlarında yadda saxlanılır. Eyni fayl növbəti dəfə gətirildikdə soruşulmur və status sətri yadda saxlanılmış vahidlərin istifadə edildiyini göstərir.
- Yenidən soruşmaq üçün: komandalar palitrası ({{key:Mod+K}}) › **İdxal edilmiş faylların vahidləri üçün yenidən soruş**.
- İdxalda artıq olan vahidlər siyahısı (Kitabxananın Vahidləri, buludun panelindəki Vahidlər, Qur › Çertyojdan bölməsindəki Çertyojun vahidləri) yenə də sonradan vahidləri dəyişdirir. Relyef alətinin Vahidlər siyahısı indi yalnız sualın başladığı yerdir.
