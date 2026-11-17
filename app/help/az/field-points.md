---
title: Quraşdırma üçün nöqtələr və icradan sonrakı yoxlama
summary: Qrupun modeldən quraşdıracağı yerləri — sütun mərkəzləri, divar ucları, lövbər boltları, keçidlər, seçdiyiniz istənilən elementi — nömrələyin, tam stansiya üçün yazın, sonra qrupun icradan sonrakı nöqtələrini oxuyun və nəyin kənarda olduğunu görün.
keywords: təyinat nöqtələri, quraşdırma, yerini müəyyənləşdirmək, kazıq, tam stansiya, planalma, nöqtə faylı, csv, txt, pnezd, penzd, xyz, şimal, şərq, yüksəklik, icra-sonu, yoxlama, tolerantlıq, kənarlaşma, lövbər boltları, sütun mərkəzləri, divar ucları, keçidlər, planalma koordinatları, xəritə çevrilməsi
from: acea9606
---

Sağdakı {{ui:Points}} nişanı açıq modeldən qrupun sahədə quraşdıracağı nöqtələri yaradır və qrupun sonradan ölçdüyü nöqtələri yoxlayır.

## Nöqtələri yaradın

1. IFC modelini və {{ui:Points}} nişanını açın.
2. Nə quraşdırılacağını qeyd edin: **sütun mərkəzləri** (hər sütunun mərkəz xəttinin dibi), **divar ucları** (hər divar oxunun hər iki ucu, bazasında), **lövbər boltları**, **keçidlər** (adı və ya tipi "sleeve" sözü olan elementlər) və **seçilmiş elementlər** (hər biri yerləşdirmə nöqtəsində — əvvəlcə baxışda seçin).
3. İlk nömrəni və prefiksi, koordinatları, vahidləri, sütunları və faylı seçin:
   - **Model**: faylın öz koordinatları. **Planalma şəbəkəsi**: modelin georeferans xəritə şəbəkəsi (yalnız IFC-də xəritə çevrilməsi olanda göstərilir), metrlə və ya seçdiyiniz vahiddə.
   - Sütunlar **PNEZD** (nöqtə, şimal, şərq, yüksəklik, təsvir), **PENZD** və ya **XYZ**; **CSV** (vergüllə) və ya **TXT** (tablarla).
4. {{ui:Make points}} basın: siyahıda nöqtələr göstərilir, baxışda mavi ilə işarələnir. {{ui:Download the points}} faylı yazır.

Nöqtələr sabit sıra ilə düzülür — növə görə, sonra plan boyunca sətirlərlə — buna görə eyni modeldən yenidən yaratdıqda eyni rəqəmlər çıxır. Fayl CivilCraft-ın açdığı və CadCraft-ın EXPORTPOINTS əmrinin yazdığı formatdadır: hər sətirdə bir nöqtə, üç onluq rəqəm, vergül olduqda təsvir dırnaqda.

## İcra-sonu nöqtələrini yoxlayın

Qrup ölçdüklərini geri göndərəndə, millimetrlə **tolerantlıq** seçin və nöqtələri necə cütləşdirəcəyinizi seçin — **nöqtə nömrəsi** ilə (sizin nömrələrinizi saxlayıblar) və ya **ən yaxın ölçü** ilə — və {{ui:Read as-built points…}} basın. Faylı yazdığınız vahidlərdə və koordinatlarda oxuyun.

Hər layihə nöqtəsi tolerantlıq daxilində **within**, kənarda **outside**, ölçülməyibsə **not measured** olur, və heç kim üçün soruşulmayan hər ölçü **extra** olur. Cədvəl seçdiyiniz vahiddə fərqləri verir (alətlər panelində seçilir; futlar onluq düym kimi göstərilir): icra edilən minus layihə — şərq, şimal, yüksəklik və planda məsafə. Baxış hər nöqtəni yaşıl və ya qırmızı ilə, ölçü nöqtəsinə gedən xətt ilə, ölçülməyibsə boz rənglə işarələyir. {{ui:Report (CSV)}} bütün müqayisəni yazır.

Burada heç nə modeli dəyişmir. Hələ hazır deyil: plita kənarlarından, şəbəkə kəsişmələrindən və ya sizin üçün yaradılmış açıqlardan quraşdırma, və nöqtələri birbaşa alətə göndərmək — bunun üçün faylı istifadə edin.
