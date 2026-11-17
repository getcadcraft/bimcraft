---
title: Skaneri modellə və 4D cədvəli ilə müqayisə edin
summary: Modelin hər elementini açıq nöqtə buludu ilə müqayisə edin (qurulub, qismən, çatışmır, çatılmayıb), qurulma faizini görün, modeli buna görə rəngləyin və 4D cədvəl yüklənəndə 4D günündə nə geridə, nə qabaqda olduğunu siyahılayın.
keywords: skan, nöqtə buludu, irəliləyiş, tamamlanma faizi, qurulub, çatışmır, cədvəldən geridə, cədvəldən qabaqda, 4D, sahə irəliləyişi, kənarlaşma, tikilmiş kimi, lazer skan, dron, müqayisə
from: 6fdc9003
---

IFC açın, yanında nöqtə buludunu açın (bax: [Nöqtə buludları](topic:point-clouds)) və onu modelin üzərinə yerləşdirin. Bulud açıq olduqda sağ paneldə {{ui:Skaneri modellə müqayisə et}} bölməsi görünür.

## Nə edir

{{ui:Müqayisə et}} basın. Modelin hər elementi səthinə görə qiymətləndirilir, çünki skaner məhz onu görür. Qutusunun altı üzü təxminən 20 cm-lik hüceyrələrə bölünür; hüceyrə o zaman sayılır ki, skan nöqtəsi üzdən sizin {{ui:Tolerantlıq}} (başlanğıcda 50 mm) daxilində olsun. Ən yaxşı böyük üz sayılır, beləliklə bir tərəfdən skan edilmiş divar digər tərəfinə görə cəzalandırılmır.

- **Qurulub**: səthin ən azı 40 %-i görünür.
- **Qismən**: 10 %-dən 40 %-ə qədər.
- **Çatışmır**: bundan az, lakin skan elementə çatır (ondan 1.5 m-də nöqtələr var).
- **Çatılmayıb**: skan oraya heç vaxt getməyib, buna görə haqqında heç nə deyilmir.

Qurulmuş və qismən qurulmuş elementlər üçün o, həmçinin skan nöqtələrinin modelin səthindən orta sapmasını verir və elementin yerində olub-olmadığını bildirir (tolerantlıq daxilində), yaxın (üç dəfə daxilində) və ya kənarda (daha uzaqda). Yalnız tolerantlığın beş mislinə qədər sapmaları görür: elementi yerindən bundan da uzaq qurulmuş element çatışmır kimi oxunur.

Xülasə skanın çatdığı elementlər arasında qurulmuş faizini say və həcminə görə verir. Qismən qurulmuş elementlər ayrıca sayılır və qurulmuşlara əlavə edilmir.

## 4D cədvəli ilə müqayisə

4D cədvəli yüklənəndə (bax: [4D cədvəl](topic:4d-schedule)) nəticə həm də 4D sürüşkənində təyin etdiyiniz günü istifadə edir: həmin günə qədər başa çatmalı olan, lakin skanın qurulmuş kimi göstərmədiyi elementlər **cədvəldən geridədir**; hələ vaxtı çatmamış, lakin qurulmuş elementlər **qabaqdadır**. Cədvəldən geridə olan elementlər {{ui:Problemlər}} bölməsində siyahılanır və cədvəl onlara görə süzülə bilər. Cədvəl olmadıqda geridə və ya qabaqda haqqında heç nə deyilmir.

## Cədvəl və model

Elementi seçmək üçün sətirə klikləyin. {{ui:Modeli rənglə}} elementləri yaşıl (qurulub), narıncı (qismən), qırmızı (çatışmır) və ya boz (çatılmayıb) ilə boyayır; {{ui:Öz rənglər}} onları geri qaytarır. {{ui:CSV saxla}} cədvəli yazır. Uyğun elementləri sahədə təsdiqlənmiş kimi qeyd et qurulmuş və tolerantlıq daxilində görünən hər elementi sahədə təsdiqlənmiş kimi (LOD 500, üsul: skan) bir addımda qeyd edir; bunu geri qaytara bilərsiniz. Bax: [Elementləri yoxlanılmış və ya sahədə təsdiqlənmiş kimi qeyd edin](topic:verification).

:::warning
Bu, hər elementin qutusunu tolerantlıq daxilində skan nöqtələri ilə müqayisə edir. Bu **ölçmə, miqdar hesablaması və ya ödəniş üçün əsas deyil**. Skan edilmiş elementin arxasında gizlənmiş element (astarın arxasındakı divar, döşəmə örtüyünün altındakı plitə) onunla eyni səthi bölüşür və qurulmuş kimi oxuna bilər; əyri və ya meylli element öz gövdəsindən böyük qutuya malikdir və qismən və ya çatışmır kimi oxuna bilər. Ona əsasən hərəkət etməzdən əvvəl siyahıya baxın. İcazə şərhləri və tikinti qeydləri bunun tərkibində deyil: onlar saxladığınız sütunlarda qalır.
:::

Köməkçi eyni müqayisəni {{ui:Skaneri modellə müqayisə et}} aləti ilə işə sala bilər; o, modeldə heç nəyi dəyişmir.
