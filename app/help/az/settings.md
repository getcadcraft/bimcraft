---
title: BimCraft parametrləri
summary: Otaqların və məkanların görünüb-görünməməsini, kənarların çəkilib-çəkilməməsini və modelin hansı görünüşdə açılacağını seçin; divara bağlama açıq halda yerləşdirməyə başlayın.
keywords: parametrlər, üstünlüklər, seçimlər, məkanlar, otaqlar, ifcspace, kənarlar, xətlər, performans, böyük model, açılış görünüşü, kamera, üst görünüş, divara bağla, bağlama
from: 4416e64f
---

{{ui:Parametrlər}} dialoqunu tətbiq panelindəki dişli işarəsi və ya {{key:Mod+,}} ilə açın. Birinci sekmə, {{ui:BimCraft}}, yalnız bu tətbiqə aid parametrləri saxlayır; {{ui:Ümumi}} isə bütün CadCraft tətbiqlərinin ortaq parametrlərini (mövzu, alətlər paneli, panellər) saxlayır. BimCraft-ın parametrləri yalnız bu tətbiqdə mövcuddur: onları burada dəyişirsiniz və bu brauzer onları yadda saxlayır. Dialoqun aşağısındakı {{ui:BimCraft parametrlərini sıfırla}} onları, ortaq parametrlərlə birlikdə, başlanğıc vəziyyətinə qaytarır.

## Menyular, düymələr və siçan

Menyu üslubu (BimCraft-ın öz alətlər paneli, ev dizaynı menyu paneli, BIM lenti və ya çertyoj əmr sətri), öz düymə və menyularınız, çarx və siçan düymələrinin nə etdiyi. Bax: [Menyular, düymələr və siçan](topic:menus-keys-and-mouse).

## Model açılanda

- **Otaqları və məkanları göstər** (başlanğıcda söndürülüb): otaqlar və məkanlar arxasındakı divarları gizlədə bilən şəffaf qutulardır, ona görə başlanğıcda gizlədilir. Modelin üstündəki {{ui:Məkanlar}} düyməsi hələ də açıq model üçün onları açıb-bağlayır.
- **Kənarlar**: {{ui:Kənarlar açıq}} (başlanğıc) layihələndirmə görünüşü verən kənar xətlərini çəkir. {{ui:Yalnız kiçik modellər}} onları yalnız 300,000 üçbucaqdan az olan modellər üçün çəkir, bu da böyük modellərin fırlanmasını daha sürətli saxlayır. {{ui:Kənarlar bağlı}} hər modeli onlarsız açır. {{ui:Kənarlar}} düyməsi hələ də açıq model üçün onları dəyişir. 1.5 milyon üçbucaqdan yuxarı modellərdə kənarlar həmişə bağlı olur.

## Çertyojlar belə açılır

DWG və ya DXF çertyojunun ilk necə göstərilməsi: {{ui:3D (ən sürətli)}} (başlanğıc) hətta böyük çertyoju tez çəkir, ya da {{ui:Model (2D)}} düz model fəzası görünüşünü açır. Çertyojun üstündəki sekmələr istənilən vaxt {{ui:Model}}, vərəqlər və {{ui:3D}} arasında keçid edir. Model fəzasında heç nə olmayan çertyoj və ya 3D göstərə bilməyən brauzer həmişə 2D-də açılır.

## Açılış görünüşü

Modelin açıldığı kamera: {{ui:Sığdır}} (başlanğıc, bütün model küncdən), {{ui:Üst}}, {{ui:Ön}} və ya {{ui:Yan}}. Modelin üstündəki düymələr görünüşü istənilən vaxt dəyişir.

**Sahədə fırlanmış bina**: bir çox modeller binanın fayl oxlarına bucaq altında gəlir (planalma və ya paylaşılan koordinatlarda). {{ui:Binaya nəzərən düzbucaqlı}} (başlanğıc) belə binanı düzbucaqlı göstərir: {{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}, görünüş kubunun üzləri və hər yeni kəsik onun divarlarını izləyir, görünüş kubunun kompası isə hələ də modelin şimalını göstərir. {{ui:Sahədə olduğu kimi}} faylın oxlarını saxlayır. Divarları oxlar boyunca uzanan bina hər iki halda eyni görünür.

## Kitabxana elementlərinin yerləşdirilməsi

**Divara bağlama açıq ilə başlayın** (başlanğıcda söndürülüb): kitabxana elementinin yerləşdirilməsi və ya yapışdırılması başlayanda, onun arxası ən yaxın divara, otağa baxaraq bağlanır. Yerləşdirmə panelindəki {{key:Tab}} və ya {{ui:Divara bağla}} onu hazırkı üçün söndürür. Divarı olmayan mərtəbə onsuz başlayır.

## Kəsik qutusu

{{ui:Seçilmişin ətrafında ehtiyat}} seçilmiş elementlərin hər tərəfində {{ui:Seçilmişin ətrafında kəsik qutusu}} nə qədər boşluq qoyduğunu göstərir, millimetrlə: başlanğıcda 300, 5000-ə qədər. Bax: [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane).

## Yer

{{ui:Enlik və uzunluq bu sistemdə}} seçir: {{ui:Ölç}} › {{ui:Yer}} enlik və uzunluqları hansı sistemdə verir: WGS 84 (EPSG:4326, başlanğıc, GPS və veb xəritələrin istifadə etdiyi kimi), {{ui:Faylın öz datumu}}, ya da ETRS89, NAD83, GDA94, GDA2020, NZGD2000, JGD2011 və CGCS2000-dən biri. Faylın öz xəritə sistemi və datumu həmişə göstərilir. Bax: [3D-də məsafələri, üz sahələrini və yerləri ölçün](topic:measure).

## Künc göstəricisi

3D görünüşlərin aşağı-sağ küncündə nə dayanır (IFC modeli və 3D-yə keçirilmiş çertyoj): {{ui:Görünüş kubu}} (başlanğıc), {{ui:Ox işarəsi}} (kiçik X, Y və Z) və ya {{ui:Yoxdur}}. Dəyişiklik dərhal baş verir. 2D çertyoj görünüşü heç vaxt bunu göstərmir.

Görünüş kubunda həmin tərəfdən baxmaq üçün üzə, kənara və ya künca klikləyin, orbitə çıxmaq üçün kubu sürükləyin, dönmək üçün halqanı sürükləyin və başlanğıc görünüş üçün evə klikləyin.

## Məsələlərdə adınız

Daxil olduqda məsələlərdə hesabınızın adı olur və BimCraft heç nə soruşmur: bu hissə {{ui:Hesabınızdan (<name>)}} göstərir. {{ui:Başqa ad istifadə et}} fərqli ad üçün qutu açır; bu ad {{ui:Hesab adımı istifadə et}} seçənəyi seçənə qədər üstünlük təşkil edir. Daxil olmadıqda məsələ forması əvvəlki kimi ad soruşur. Bax: [Məsələlər və BCF fayllar](topic:issues-bcf).

## Köməkçilər

**AI köməkçilərin və skriptlərin BimCraft istifadə etməsinə icazə verin** (başlanğıcda söndürülüb) kompüterinizdəki köməkçinin CadCraft Studio vasitəsilə açıq modelə çatmasına imkan verir: **Oxu** elementləri tapır və onların xüsusiyyətlərini oxuyur, **Görünüşü dəyişin** onları təcrid edir, gizlədir və göstərir. **Fəaliyyət** onun çağırışlarını siyahılayır. Bax: [AI köməkçisinə modelinizlə işləməyə icazə verin](topic:assistants).

:::note
Digər parametrlər model açılanda və ya yerləşdirmə başlayanda tətbiq olunur. Artıq açıq model düymələrdən istifadə edənə və ya onu yenidən açana qədər öz görünüşünü saxlayır.
:::

## Əlaqəli

- [Kitabxana elementlərini kopyalayın, yapışdırın və təkrarlayın](topic:copy-paste)
- [Kitabxanadan avadanlıq və mebel yerləşdirin](topic:place-from-library)
- [BimCraft ekranı](topic:workspace)
- [AI köməkçisinə modelinizlə işləməyə icazə verin](topic:assistants)
