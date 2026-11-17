---
title: Beton elementlərini yoxlayın və seysmik yükləri hesablayın
summary: Açıq modelin beton tirlərini və sütunlarını təyin edin, ACI 318-19-a görə yoxlayın, sərt döşəmələrdə ASCE 7-22-yə görə ekvivalent üfüqi qüvvələr yaradın və mərtəbə sürüşməsinə baxın. Mühəndis üçün yoxlama vasitəsi.
keywords: beton, armaturlu beton, ACI 318, ACI 318-19, armatur, tir, sütun, kəsmə, bağlar, seysmik, zəlzələ, ekvivalent üfüqi qüvvə, ELF, ASCE 7-22, sürüşmə, mərtəbə sürüşməsi, döşəmələr, sərt diafraqma, mərtəbə çəkisi, istifadə dərəcəsi, konstruktiv, mühəndis, təhlil
from: 2f342e72
---

{{ui:Analiz}} sekmәsindәki {{ui:Beton elementləri}} və {{ui:Seysmik yüklər}} blokları açıq IFC-nin armaturlu beton tirlərini və sütunlarını yoxlayır və onun çərçivəsinin döşəmələrində zəlzələnin yanal qüvvələrini yaradır. Onlar DetailCraft-ın eyni blokları ilə eynidir, {{ui:Analiz}} sekmәsinin təhlilindən sonra işə düşür və digər təhlil parametrləri ilə birlikdə IFC-də saxlanılır.

:::warning
Nəticələr **mühəndis tərəfindən yoxlanılması üçündür**: kimsə nəzərdən keçirənə qədər köməkçi vasitədir. Beton yoxlamaları birinci dərəcəli qüvvələrdən istifadə edir (çərçivədə "sürüşməsiz" adlandırdığınız sütun böyüdülmüş momenti üçün layihələndirilir), sürüşmənin böyüdülməsi, burulma layihələndirilməsi, seysmik detallaşdırma (ACI 18-ci fəsil) və bağların detallaşdırılması olmadan. Seysmik yüklər ehtiyat əmsalını, şaquli seysmik təsiri, burulma gücləndirilməsini və P-delta təsirlərini nəzərə almır. **Külək yükləri qurulmayıb**: standartın külək fəsilləri layihənin istinad səhifələrində yoxdur.
:::

## BimCraft nəyi oxuyur

Təhlil modelin tirlərini, sütunlarını və bağlarını profilləri ilə oxuyur (bax: [Konstruktiv çərçivəni təhlil edin](topic:frame-analysis)). {{ui:Beton elementləri}} bloku onların istifadə etdiyi hər kəsiyi siyahılayır. Beton olan kəsikdə {{ui:Beton kimi qurun…}} basın: BimCraft profilin sahəsindən və sərtliyindən düzbucaqlı götürür (sonra dəyişə bildiyiniz en b və hündürlük h), buna görə düzbucaqlıya yaxın olmayan kəsik (valsovka polad forması) düzəltməli olduğunuz ölçü verir, ya da olduğu kimi qalır.

Beton kimi qurulmuş kəsik və materialı beton adlanan hər element beton kimi təhlil olunur: E = 4700 √f′c, 2400 kg/m³ və standart olaraq **çatlamış kəsiklərlə** (sütunlar 0.70 Ig, tirlər 0.35 Ig; ACI 318-19 Cədvəl 6.6.3.1.1(a)). Bunu söndürmək üçün {{ui:Tam kəsiklər}} seçin. Bu parametrlər olmadan model əvvəlki kimi dəqiq təhlil olunur.

## Armatur, kombinasiyalar, yoxlama

Hər kəsik üçün örtüyü, yuxarı, aşağı və yan armaturları (ya da sütun karkasını) və bağları verin, f′c, fy, fyt, K və sürüşməli və ya sürüşməsiz təyin edin. Yük hallarına növlərini verin, {{ui:Birləşmələri yarat}} (ASCE 7 §5.3.1) basın, sonra {{ui:Betonu yoxlayın}}: hər element istifadə dərəcəsi alır və modeldə rənglənir. Tutumdan artıq elementlər və limitini keçən mərtəbə sürüşməsi {{ui:Problemlər}} bölməsində öz bəndi ilə siyahılanır; elementi seçmək üçün birinə klikləyin.

## Döşəmələr və seysmik yüklər

{{ui:Seysmik yüklər}} blokunda {{ui:Mərtəbələri tap}} iki və ya daha çox tirin birləşdiyi səviyyələri götürür; hər biri sərt diafraqmaya çevrilir. {{ui:Çəkiləri hallardan götür}} əmsal verdiyiniz hallardan hər döşəmənin seysmik çəkisini oxuyur. SDS, SD1, S1, R, Ie, Cd, TL, sistemi və risk kateqoriyasını doldurun, sonra {{ui:Seysmik halları yarat}} basın (ASCE 7-22 12.8: dövr, baza kəsmə qüvvəsi, döşəmələr üzrə paylanma, 5 % təsadüfi burulma). Mərtəbə qüvvələri və sürüşmə yoxlaması (12.12) işləmədən sonra görünür. Analiz çərçivəsini mənbə kimi seçdiyiniz zaman eyni dövr və mərtəbə sərtliyi [Subasma, külək və ya zəlzələni oynatmaq](topic:hazard-playback) bölməsindəki zəlzələni qidalandırır.

Beton döşəmələr və divarlar təhlildə lövhəyə çevrilir, {{ui:Plitə armaturu}} bloku isə onların hər metr üçün lazım olan poladı hesablayır. Hər yoxlamanın təfərrüatları DetailCraft-ın eyni adlı mövzusundadır.
