---
title: Bir neçə skanı bir yerə qeydiyyata alın
summary: Müxtəlif mövqelərdən alınmış skanları seçilmiş nöqtə cütləri və ya yazılmış hədəflərlə bir çərçivəyə yerləşdirin, ICP ilə dəqiqləşdirin, qeydiyyatı layihə kimi saxlayın və qeydiyyata alınmış buludu LAS və ya E57 kimi ixrac edin.
keywords: qeydiyyat, skanlar, nöqtə buludu, icp, iterativ ən yaxın nöqtə, hədəflər, nöqtə cütləri, bərk çevrilmə, düzləşdirmə, birləşdirmə, e57, las, skandan BIM-ə
from: e8e270db
---

## Nə edəcəksiniz

Eyni yerin bir neçə skanı (hər biri öz skaner mövqeyindən) öz koordinatlarında başlayır. Onları qeydiyyata alın: hər skana bir yerləşdirmə verin ki, hamısı bir çərçivədə olsun, sonra bunu layihə kimi saxlayın və qeydiyyata alınmış buludu bir LAS və ya E57 faylı kimi yazın.

## Skanları yerləşdirin

1. Dialoqu açın ({{ui:Skanları qeydiyyata al…}} başlanğıc panelində və ya model açıq olduqda {{ui:Göstər}} › {{ui:Skanları qeydiyyata al…}}). {{ui:Skan əlavə et…}} LAS, LAZ, E57, PLY, PCD, PTX, PTS və ya XYZ fayllarını qəbul edir, və ya onları dialoqa sürükləyib buraxın. Fərqli vahidli skanlar qeyd ilə rədd edilir: əvvəl birini çevirin.
2. {{ui:Köçürüləcək skan}} və {{ui:Hansı skana görə yerləşdirilsin}} seçin. Şəkil indiki çərçivədə hər skanı, hər birinə bir rəng verərək göstərir: {{ui:Plan}}, {{ui:Ön}} və ya {{ui:Yan}}; görünüşü sürüşdürmək üçün sürükləyin, yaxınlaşmaq üçün təkərdən istifadə edin.
3. **Nöqtə cütləri ilə.** {{ui:Cüt seçin}} düyməsini basın, sonra köçürüləcək skanda bir nöqtəyə, sonra başqa skanda eyni yerə (künc, hədəf, sütunun dibi). Bunu ən azı üç dəfə, bir xətt üzərində olmayan və bir-birindən uzaq nöqtələrlə edin. {{ui:Cütlərlə yerləşdir}} düyməsini basın: skan ən kiçik kvadratlar üsulu ilə yerləşdirilir və **Qalıq** hər cütün nə qədər səhv etdiyini göstərir. Böyük rəqəmli cüt pis seçimdir: onu xaçla silin və yenidən yerləşdirin.
4. **Hədəflərlə.** Nöqtənin həqiqi koordinatları məlumdursa (ölçülmüş hədəflər), {{ui:Seçin, sonra hədəfi yazın}} düyməsini basın, skanda nöqtəyə klik edin və sətirdə hədəfin X, Y və Z qiymətlərini yazın. Cütlər və yazılmış hədəflər sərbəst qarışdırıla bilər.

## ICP ilə dəqiqləşdirin

Cütlər təxmini yerləşdirmə verir. {{ui:Dəqiqləşdir}} skanı elə hərəkət etdirir ki, onun səthləri digər skanın səthləri üzərinə düşsün: əvvəlcə **nöqtədən nöqtəyə**, sonra **nöqtədən müstəviyə**. Cədvəl hər addımı, onun xətasını və neçə nöqtənin uyğunlaşdığını sadalayır; üstündəki sətir xətanın necə azaldığını çəkir. {{ui:Dayandır}} işləyən addımdan sonra işi bitirir və çatdığı nəticəni saxlayır. {{ui:Geri qaytar}} bütün işi (və ya son yerləşdirməni) geri alır; {{ui:Sıfırla}} skanı onun fayl koordinatlarına qaytarır.

Noutbukda rahat işləmək üçün ICP nöqtələrin azaldılmış payı üzərində işləyir ({{ui:İstifadə olunan nöqtələr}}, 5,000 ilə 60,000 arası) və {{ui:Ən böyük uyğunluq məsafəsi}}-dən uzaq uyğunluqları nəzərə almır (standart olaraq skanın ölçüsünün 5%-i, yerləşdikcə kiçilir). Əvvəlcə təxmini yerləşdirmə lazımdır: az üst-üstə düşən skanlar uyğunlaşdırıla bilmədiklərini bildirir. Yalnız düz və ya yalnız düz xətt olan səthlər öz boyu üzrə mövqeyi düzəldə bilməz; bu halda cütlər əlavə edin.

## Saxlayın və ixrac edin

- {{ui:Layihəni saxla}} kiçik `.ccscans.json` faylı yazır: hər skanın adı, ölçüsü və ilk 64 KB-ının barmaq izi, öz çevrilməsi ilə. Nöqtə saxlamır. {{ui:Layihəni aç…}} skan fayllarını bu istinadlara görə tapır (fayllar əvvəlcədən əlavə edilməlidir) və hər çevrilməni yerinə qaytarır.
- {{ui:LAS ixrac et}} və {{ui:E57 ixrac et}} qeydiyyata alınmış yerdə hər skanı olan bir fayl yazır. Nöqtələr orijinallarda heç vaxt yenidən yazılmır; çevrilmə çıxış zamanı tətbiq olunur. {{ui:Fayllardan bütün nöqtələri oxu}} aktiv olduqda hər fayl hər nöqtə üçün yenidən oxunur (hər skan üçün 20 milyona qədər); deaktiv olduqda yalnız görüntüləyicidə göstərilən nöqtələr yazılır.
- {{ui:Qeydiyyatdan keçmiş buludu göstər}} (BimCraft) LAS-ı yazır və onu modelin yanında 3D görünüşündə, istənilən bulud kimi açır.

:::note
Heç nə yüklənmir. Qeydiyyat faylların öz vahidlərində işləyir və millimetri saxlayır: LAS ona uyğun miqyasla yazılır (0,1 mm-ə qədər), E57 isə ikiqat dəqiqlikli ədədlərlə. Koordinat sistemi LAS-a yalnız hər skan eyni EPSG kodunu göstərdikdə köçürülür. E57 yazıcısı bizimkidir; onun faylları bu oxuyucu və libE57Format ilə geri oxunmaqla yoxlanılır.
:::
