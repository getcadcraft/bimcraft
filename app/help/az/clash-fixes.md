---
title: Toqquşmaları hər ixtisasın düzəlişləri ilə həll edin
summary: Toqquşma nəticələrindən Düzəlişləri təklif et siyahısı hər toqquşma üçün hər ixtisasın nə edə biləcəyini göstərir — tirin altından yan keçən kanal, kənara çəkilən boru, köçürülən sütun, tirdə açıqlıq. Hər biri modelin surətində öz güzəştləri ilə sınanılır, siz qəbul və ya rədd edirsiniz. Qəbul edilmiş düzəlişlər bir geri qaytarma addımı kimi daxil edilir.
keywords: toqquşma, toqquşma düzəlişi, toqquşmaları həll edin, koordinasiya, düzəliş təklif et, marşrutu dəyişmək, yan keçid, sürüşdürmə, kanal, boru, kabel lotoku, tir, sütun, açıqlıq, qılaf, güzəşt, ixtisas, struktur, mexaniki, santexnika, elektrik, arxitektura, köməkçi
from: f7bafdd9
---

## Nə edəcəksiniz

Toqquşmaların siyahısını qərarlara çevirin. Hər ixtisas (struktur, mexaniki, santexnika, elektrik, arxitektura) yalnız öz elementləri üçün düzəlişlər təklif edir, hər təklif modelin surətində yoxlanılır və siz seçirsiniz.

## Addımlar

1. Əvvəl toqquşma yoxlamasını işlədin. Bax [Toqquşmaları yoxlayın](topic:clash-check) və [Boruları və kanalları strukturla yoxlayın](topic:mep-against-structure).
2. Nəticələrin altında {{ui:Düzəliş təklif et}} düyməsinə klikləyin. **Təklif olunan düzəlişlər** paneli modelin yanında açılır.
3. Hər toqquşma üçün hər ixtisasın təkliflərini görürsünüz, ən yaxşısı əvvəl. Hər sətir nə etdiyini və güzəştlərini göstərir: toqquşmanı həll edib-etmədiyini, neçə yeni toqquşma yaratdığını, hansı qaydaları pozduğunu, nə qədər xətt əlavə etdiyini və ya nə qədər yerini dəyişdiyini, neçə birləşdirici detal olduğunu və xərc balını.
4. Elementləri 3D-də görmək üçün {{ui:Göstər}} düyməsinə klikləyin. İstədiyiniz düzəlişdə {{ui:Qəbul et}} düyməsinə klikləyin (hər toqquşma üçün bir), ya da {{ui:Rədd et}}.
5. Panelin altındakı sətir bütün qəbul etdiyiniz düzəlişlərin birlikdə nə etdiyini göstərir: neçə toqquşma həll olunub, neçəsi qalıb və yenisi yaranıb-yaranmadığı.
6. {{ui:Qəbul edilmiş düzəlişləri tətbiq et (bir geri qaytarma addımı)}} düyməsinə klikləyin. Toqquşma yoxlaması yenidən işləyir. {{ui:Geri qaytar}} hamısını bir dəfəyə geri qaytarır.

## Hər ixtisas nə edə bilər

- **Mexaniki** (kanallar, istilik və soyutma boruları): görülən ayaqda üstündən və ya altından yan keçmək, bütöv xətti qaldırmaq və ya endirmək, kənara köçürmək, düzbucaqlı kanalı eyni sahə ilə daha yastı etmək.
- **Santexnika** (su, drenaj, qaz, yanğın): eyni hərəkətlər, yalnız cazibə ilə işləyən drenaja heç vaxt yan keçid verilmir; o, yalnız bütöv halda, meylini saxlayaraq köçürülə bilər.
- **Elektrik** (kabel lotokları və kabel kanalları): eyni hərəkətlər; lotokun üstündə kabel döşəmək üçün 150 mm boşluq saxlanmalıdır.
- **Struktur**: sütunu köçürmək (300 mm-ə qədər), və ya keçən xətt üçün tirin divarında və ya plitədə açıqlıq. Hər struktur düzəlişi struktur mühəndisi tərəfindən təsdiqlənməli olduğu qeyd olunur.
- **Arxitektura**: keçən xətt üçün divarda qılaf, və ya yük daşımadığı məlum olan divarı köçürmək.

## Nə görməlisiniz

- Qaydanı pozan düzəlişlər işarələnir: başqa bir şeyə 25 mm boşluqdan yaxın, 2 100 mm baş məsafəsi xəttindən aşağı, tirin hündürlüyünün 40%-dən böyük və ya ucuna çox yaxın tir divarı açıqlığı, açıqlığı dəyişəcək tir.
- BimCraft edə bildiyi düzəlişləri modelə tətbiq edir: Boru və Kanal alətləri ilə çəkdiyiniz xətlər və çəkdiyiniz sütunlar. Digərləri **Yalnız məsləhət** deyir: onları qəbul etmək Problemlər bölməsinə yalnız bir problem əlavə edir.

## Yaxşı bilmək lazımdır

- Düzəlişlər proqramda quraşdırılmış qaydalardan gəlir; onlar üçün süni intellekt istifadə olunmur.
- Süni intellekt köməkçisi qoşsanız (bax [Süni intellekt köməkçisinin modelinizlə işləməsinə icazə verin](topic:assistants)), o toqquşmaları oxuya bilər və açıq paneldə bir ixtisas üçün öz təkliflərini əlavə edə bilər. Onlar eyni qayda ilə yoxlanılır, köməkçinin adı ilə işarələnir və siz qəbul edib tətbiq edənə qədər heç nə dəyişmir.
- Surət hər elementin və xəttin hər ayağının ətrafında qutularla yoxlanılır, buna görə maili xətt toqquşma yoxlamasının göstərməyəcəyi toqquşmanı göstərə bilər. Tətbiq etdikdən sonra toqquşma yoxlamasını yenidən işlədin: son söz odur.
- Limitlər (xəttin nə qədər yerini dəyişə bilməsi, yan keçidin nə qədər yüksələ bilməsi, boşluq) panelində yazılmış standart dəyərlərdir.

## Növbəti

- [Problemlər və BCF faylları](topic:issues-bcf)
- [Boru və kanal xətləri çəkin](topic:pipes-and-ducts)
