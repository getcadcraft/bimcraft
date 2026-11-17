---
title: Izlənmiş çertyojdan divarlar
summary: DWG və ya DXF planını mərtəbədə divarlara, qapılara və pəncərələrə çevirin və planın altında çertyojun istinad kimi qalmasını saxlayın.
keywords: dwg, dxf, izləmə, izlənmiş, plan idxalı, çevirmək, cad-dan bim-ə, 2D-dən 3D-yə, xətlərdən divarlar, qatlar, bloklar, bloklardan qapılar, altlıq, istinad çertyoju, fon, xref, çertyoj proqramı
from: 3bf213f1
---

## Nə edəcəksiniz

Çertyoj proqramında siz (və ya başqası) çəkdiyiniz planı modelin başlanğıcı kimi istifadə edin: onun divar xətləri divarlara, qapı və pəncərə blokları qapılara və pəncərələrə çevrilir.

## Addımlar

1. {{ui:Çək}} seçimini aktiv edin və planın mərtəbə siyahısında çertyojun göstərdiyi mərtəbəni seçin.
2. {{ui:Versiya}} › {{ui:Çertyojdan…}} seçin, sonra {{ui:Çertyoj seçin…}} və DWG və ya DXF faylını seçin.
3. Dialoqda:
   - **Çertyoj vahidləri** çertyojdan gəlir; səhvdirsə başqasını seçin (fut ilə çəkilmiş plan düymlə oxunarsa on iki dəfə kiçik olar).
   - **Divarlarla birlikdə qatlar**: divar xətlərinin olduğu qatları işarələyin. Adında "wall" yazılan qatlar sizin üçün avtomatik işarələnir.
   - **Xətlər bunlardır**: **hər divarın hər iki üzü** (planların adətən çəkildiyi üsul: hər 600 mm-ə qədər məsafədə olan paralel xətt cütü bir divar olur, boşluq qədər qalın), **divarların mərkəz xətləri**, və ya sol və ya sağdakı divarla **bir üz**. Mərkəz xətləri və ya bir üz ilə divar tipi qalınlığı təyin edir.
   - **Divar tipi** və **Divarın hündürlüyü**, {{ui:Divar}} aləti kimi.
   - **Bloklar**: qapı və ya pəncərə olan hər blok üçün qapı və ya pəncərə tipi seçin, və ya onu kənarda buraxın. Adında "door" və ya "window" yazılan bloklar sizin üçün seçilir. Hər biri oturduğu divara qoyulur, divar boyunca blokun eni qədər; qapı fırlanma qövsünün çəkildiyi tərəfə açılır.
   - **Harada yerləşir**: çertyojun öz koordinatlarında, və ya aşağı-sol küncü planın başlanğıc nöqtəsində.
   - **Bu mərtəbənin planı altında çertyojun saxlanması**: nazik xətlər kimi, yaratdıqlarınızın altında çertyoju görmək üçün işarəli buraxın.
4. Seçimlərin altındakı xətt neçə divar, qapı və pəncərə yaradacağını göstərir. **Yarat** klikləyin.

## Nə görməlisiniz

- Mərtəbədə divarlar, qapılar və pəncərələr, birləşdikləri yerdə birləşmiş, və onların bağladığı otaqlarla; hamısı bir addımdır, buna görə {{key:Mod+Z}} onu geri alır.
- Çertyoj yaratdığınız planın altında nazik xətlər kimi görünür. {{ui:Versiya}} › {{ui:Çertyojdan…}} mərtəbədə saxlanmış çertyojları hər biri {{ui:Sil}} ilə siyahılayır; birini silmək divarları yerində saxlayır.
- IFC faylında saxlanmış çertyoj mərtəbədə annotasiyadır (xətləri ilə), buna görə digər BIM proqramları da onu göstərir.

:::note
PDF və ya skan da işləyir: bax [Plan dəstindən divarlar](topic:walls-from-plans). Qövslər kənarda qalır (BimCraft düz divarlar çəkir), blokların içindəki xətlər də belədir. "Hər iki üz" rejimində cütü olmayan xətlər dialoqda sayılır və kənarda qalır: həmin divarları {{ui:Divar}} aləti ilə çəkin, və ya {{ui:Dəyişdir}} › {{ui:Kəsin / uzadın}} ilə təmizləyin (bax [Divarları kəsin, uzadın və birləşdirin](topic:trim-extend-walls)).
:::

:::tip
Çertyoj proqramında skan üzərindən izlənib? Skanı burada da açın və divarları onunla yoxlayın: bax [Skandan model](topic:model-from-a-scan).
:::
