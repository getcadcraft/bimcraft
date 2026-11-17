---
title: EnergyPlus ilə istilik və soyutmanı yoxlayın
summary: Modeli EnergyPlus faylı kimi yazın və ya brauzerdə EnergyPlus 26.2.0 versiyasını işlədin, onun layihə yüklərini sürətli istilik və soyutma köməkçisi ilə müqayisə edin. Erkən layihə mərhələsi üçün ikinci fikirdir, uyğunluq hesablaması deyil.
keywords: energyplus, enerji simulyasiyası, layihə günü, istilik yükü, soyutma yükü, hava məlumatı faylı, epw, idf, istilik kütləsi, illik enerji, simulyasiya
from: b82a5bf2
---

## Nə edəcəksiniz

**EnergyPlus ilə yoxla** paneli açıq modeli EnergyPlus giriş faylı (IDF) kimi yazır: hər otaq üçün bir zona, U-dəyərləri ilə divarlar, döşəmələr, damlar və pəncərələr, havanın dəyişmələri və ideal istilik və soyutma. Bu faylı həmişə **saxlaya** və öz EnergyPlus-ınızda işlədə bilərsiniz.

EnergyPlus mühərrikini də quraşdırsanız, panel dərhal simulyasiya apara bilər və EnergyPlus-ın layihə istilik və soyutmasını sürətli köməkçinin göstəriciləri ilə yanaşı, otaq-otaq siyahıya salır.

Bu layihə köməkçisidir. Enerji normaları, sertifikatlaşdırma və icazələr təsdiqlənmiş alət və onun tələb etdiyi iqlim məlumatları tələb edir, nəticə isə ona görə cavabdeh olan şəxs tərəfindən yoxlanılmalıdır.

## Mühərriki quraşdırın

BimCraft EnergyPlus-u özü ilə gətirmir. O, böyük WebAssembly quruluşudur (təxminən 6 MB sıxılmış, üstəlik 4,6 MB məlumat faylı), buna görə onu öz serverinizdə yerləşdirirsiniz və panelə ünvanını yazırsınız. Səhifə simulyasiya düyməsinə basdıqda yükləyir, heç vaxt işə salınanda yox. Ünvan https, bu saytdakı yol və ya localhost olmalıdır.

## Layihə günləri və ya bir il

- **Layihə günlərini simulyasiya edin** hava məlumat faylı tələb etmir. O, günəşsiz soyuq qış günü və Gündüz işığı bölməsindəki istilik və soyutma girişlərindəki temperaturlarda isti, açıq yay günü işlədir və hər otağın yükünü vatt ilə göstərir.
- **Bir ilin simulyasiyası** seçdiyiniz EPW formatında hava məlumat faylı tələb edir. O, eyni girişlərdən adamları, işıqları və avadanlığı əlavə edir (həmişə açıq, çünki cədvəl uydurulmur) və hər otağın istilik və soyutma enerjisini kWh ilə göstərir. Hava məlumat faylları öz lisenziyasına malikdir, buna görə yalnız istifadə etmək icazəniz olanı seçin.

## İstilik kütləsi

**Məlum qatları olan divarlara istilik kütləsi verin** qutusunu işarələyin: materialların qatları məlum olan divarlar, damlar və döşəmələr qat-qat yazılır, sıxlıq və xüsusi istilik material adına görə tipik dəyərlər cədvəlindən götürülür. Qatlar əvvəl xaricdən, faylın sadaladığı sıra ilə götürülür. Qatları olmayan elementlər öz U-dəyərində, kütləsiz qalır.

## Müqayisəni oxumaq

İki üsul bir qədər fərqli suallara cavab verir. Sürətli köməkçi hər elementi saxlayır; EnergyPlus faylı hər otağın U-dəyərlərini səth növünə görə orta hesablayır. Otağın layihə istiliyində 15 %-dən çox fərq ⚠ panelində hər iki rəqəmlə birlikdə qeyd kimi göstərilir. Soyutma layihəyə görə daha çox fərqlənir: sürətli köməkçi bir tarixdə günəşdən pik hesablayır, EnergyPlus isə öz layihə gününə görə ölçülür.
