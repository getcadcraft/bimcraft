---
title: İcazə paketi və orqanın dəstəkləyici sənədləri
summary: Tənzimləmə yoxlamasını, ehtimal olunan rəy şərhlərini, modeli və orqanın dəstəkləyici sənədlər siyahısını bir zip-də toplayın; hər sənəd onu təmin edən vərəq və ya cədvələ bağlanır.
keywords: təsdiq prosesi, təqdimat formatı, tələb olunan çertyojlar, vərəq ölçüsü, fayl formatı, nüsxə, qaydalar paketi, icazə, icazə paketi, tikinti planının təqdimatı, plan təsdiqi, dövlət təqdimatı, dəstəkləyici sənədlər, yoxlama siyahısı, orqan, bələdiyyə, şəhər şurası, icazə ərizəsi, rəy şərhləri, Milli Tikinti Qaydaları, çatışmayan sənədlər
from: 47dd77ee
---

## Nə edəcəksiniz

Dövlət təqdimatı üçün bir zip hazırlayın (orqanın siyahısı qaydalar paketindən gələndə onda təsdiq addımları və təqdimat formatı da olur): örtük, rəyçinin ehtimal etdiyi şərhlər (yoxlamalardan yazılmış, təxmin edilməmiş), Tikinti qaydaları əlavəsi aktiv olduqda tənzimləmə hesabatı, model və təsdiq edən orqanın tələb etdiyi dəstəkləyici sənədlərin siyahısı.

Bu, modeldən hazırlanmış bələdçidir. Qeydiyyatdan keçmiş peşəkar və orqan nəyin tələb olunduğunu və nəyin qəbul edildiyini müəyyən edir.

## Addımlar

1. Model açıq ikən sol paneldə {{ui:İcazə paketi}} açın.
2. Layihənin adını, ünvanını və müraciətçini yazın və vərəqlərinizi və formalarınızı hər sətirdə bir olmaqla sadalayın.
3. {{ui:Dəstəkləyici sənədlər}} altında {{ui:Orqanın siyahısı}} seçin. Siyahılar qaydalar paketlərindən gəlir: Tikinti qaydaları əlavəsini əlavə edin və Parametrlər › Tikinti qaydaları bölməsində öz yeriniz üçün paketi işarələyin (paket qaydaları, təsdiq prosesini, təqdimat formatını, çertyoj konvensiyalarını və standart qeydləri saxlaya bilər). Ümumi siyahı bunsuz da işləyir.
4. Siyahını oxuyun. Hər sənəd {{ui:Bağlıdır}} (vərəq və səbəbi ilə), {{ui:Sizin tərəfinizdən təqdim olunub}}, {{ui:Tətbiq olunmur}} və ya {{ui:İtib}} olur.
5. Özünüz təmin etdiyiniz kağız üçün (forma, torpaq sənədi, ödəniş qəbzi) {{ui:Mənim tərəfimdən təqdim olunub}} seçin. "Tətbiq olunarsa" işarəsi olan, lakin burada tətbiq olunmayan element üçün {{ui:Burada tətbiq olunmur}} seçin. Sənədi özünüz vərəqə bağlamaq üçün vərəqi seçin.
6. Siyahının altında {{ui:Təsdiq prosesi}} və {{ui:Təqdimat formatı}} açın və addımları və nə təqdim ediləcəyini (vərəq ölçüləri, fayl formatları, nüsxələr) oxuyun. Ödəniş və ya müddət yalnız paketin mənbəsi bunu bildirəndə, səhifə və oxunduğu tarix ilə göstərilir.
7. {{ui:İcazə paketini qurun (zip)}} klikləyin. Addımlar və format örtükdə də olur.

## Sənəd necə bağlanır

Sənəd düzgün növ görünüşü saxlayan vərəyə (plan, fasad, kəsik), düzgün cədvəli saxlayan vərəyə (qapı cədvəli üçün qapı cədvəli olan vərəq) və ya adı bunu deyən vərəyə (adı "Situasiya planı" olan vərəq) bağlanır. Model sətirləri saxlayır, amma heç bir vərəq cədvəli saxlamırsa, ya da sahə çəkilib, amma heç bir vərəq situasiya planı kimi adlanmayıbsa, element çatışmır və səbəbini deyir.

## Yaxşı bilmək

- **Hər orqanın siyahısını yerli praktik yoxlamayıb.** Hər biri ona istinad edilən dərc olunmuş mənbədən, göstərilən tarixdə oxunub və öz sözlərimizlə yazılıb. Tələblər dəyişir: orqanın öz cari siyahısını yoxlayın.
- Dəstin hələ nəyi çatışmadığı və ya paketin istədiyi ölçü, istiqamət və ya miqyasda olmayan vərəq Problemlər siyahısında qeyd kimi göstərilir. Qeydlər məsləhətdir: onlar heç vaxt paketi dayandırmır.
- Çatışmayan sənədlər paketi heç vaxt dayandırmır. Onlar örtükdə və `04-supporting-documents.csv` faylında siyahıya alınır.
- Siyahılar qaydalar paketlərinin içində kod deyil, məlumatdır: Cənubi Afrika (Milli Tikinti Qaydaları, qayda A2), Keyptaun (Kitabxanadan əlavə edilmiş Cənubi Afrika regionu ilə), İngiltərə (milli məlumat tələbləri), Oreqon ştatının Portlandı, UYDURMA tədris paketi və heç bir orqanın olmadığı ümumi siyahı. Hər kəs öz yeri üçün paket yaza bilər.
- Seçimləriniz modeldə saxlanılır, buna görə onu yenidən açanda orada olur və hər biri geri qaytarıla bilən bir addımdır.

Bax də: [Vərəqlər](topic:sheets) və [Sahə, onun üzərindəki bina və səviyyələri](topic:site-building-and-levels).
