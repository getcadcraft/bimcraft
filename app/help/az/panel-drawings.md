---
title: Taxta və ya yüngül polad karkasda panel çertyojları
summary: Modelin divarlarını, döşəmələrini və damlarını taxta və ya yüngül polad panel kimi karkaslayın, hər stoykanı, lövhəni, başlığı, tirini və qabırğanı miqyasda görün; kəsim siyahısını CSV, sex çertyojlarını isə PDF kimi saxlayın.
keywords: panel, karkas, sex çertyoju, kəsim siyahısı, yüngül polad, polad stoyka, LGS, taxta, lağ, qabırğa, başlıq, ehtiyat, PDF
from: c09f916e
---

## Panelləri açın

{{ui:Versiya}} menyusunda {{ui:Panel çertyojları}} seçin (ya da {{cmd:PANELS}} yazın). Siyahıda modelin bütün çəkilmiş divarları, hər döşəməsi və hər damı var, hər biri işarə ilə. Divarlar qapı və pəncərələrini boşluq kimi özləri ilə gəlir. Döşəmə kənarının ətrafında düzbucaqlı kimi karkaslanır, lağlar isə qısa istiqamətə doğru gedir. Dam divarlarının konturu üzərində ucluq (gable) kimi, damın meyli ilə karkaslanır; siyahı bunu deyir, çünki kəsik dam və ya mürəkkəb dam ucluq deyil.

## Material, ölçü və addım

{{ui:Material}} seçin: **Taxta** və ya **Yüngül polad**. Polad parçalar dərinliyinə və qalınlığına görə adlandırılan C-stoykalardır (məsələn, C92-1.2), lövhələr üçün yolla birlikdə. {{ui:Element ölçüsü}} hər işarələnmiş panel üçün bir ölçü seçir, ya da hər panel növünün standart ölçüsünü götürmək üçün Standart-da saxlayın. {{ui:Addım}} stoykalar, lağlar və ya qabırğalar arasındakı məsafədir. Bunlar təyin etməyiniz üçün başlanğıc qiymətlərdir. Onlar norma yoxlaması deyil: həmin addımda stoykanın həmin divarı daşıyıb-daşımadığı və başlığın o açıqlığa tab gətirib-gətirmədiyi norma cədvəllərinin (Tikinti qaydaları əlavəsində IRC var) və mühəndisinizin işidir.

## Nəyi alırsınız

İlk işarələnmiş panel dialoqda ölçüləri ilə miqyasda çəkilir. {{ui:Kəsim siyahısı (CSV)}} hər panelin parçalarını markası, ölçüsü və uzunluğu ilə, və onlar üçün alınacaq ehtiyat uzunluqlarını saxlayır. {{ui:Sex çertyojları (PDF)}} hər panel üçün bir A3 səhifə saxlayır, hər parça işarələnmiş və öz kəsim siyahısı ilə. {{ui:Çertyoj (SVG)}} birinci paneli çertyoj kimi saxlayır. Karkas kodunun tapa bilmədiyi hər şey (divarın sonuna çox yaxın açıqlıq, lövhələrin altına sığmayan başlıq, ən uzun ehtiyatdan uzun parça) həm dialoqda, həm də **Problemlər**də siyahıya alınır.

## Nəyi etmir

Panellər istədiyiniz zaman modeldən çəkilən çertyojlardır: modelə heç nə yazılmır, buna görə həmişə ona uyğun qalırlar. Karkası modelə element kimi yazmaq üçün taxta divarlar, döşəmələr və damlar üçün {{ui:Karkas}} istifadə edin.
