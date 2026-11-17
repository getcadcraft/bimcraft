---
title: 3D-də məsafələri, səth sahələrini və yerləri ölçün
summary: IFC modelinin iki nöqtəsi arasında künc və kənarlara tutulmaqla ölçün, X, Y və Z üzrə fərqi oxuyun və düz səthin sahəsini ölçün.
keywords: ölç, ölçmə, məsafə, uzunluq, ölçü, sahə, səth sahəsi, tutma, künc, kənar, lent, xətkeş, təmizlik, yer, enlik, boylam, lat long, koordinatlar, georeference, xəritə çevrilməsi, EPSG, planalma, eastings, northings, WGS 84, datum
from: 5f430bba
---

## Nə edəcəksiniz

Təmizliyi, divar uzunluğunu və ya səthin ölçüsünü birbaşa modeldən yoxlayın, müəlliflik proqramını açmadan.

## Addımlar

1. IFC modelini açın.
2. Alətlər panelində {{ui:Ölç}} klikləyin və ya {{key:M}} basın. Görünüşün altında bir zolaq açılır.
3. **Məsafə:** {{ui:Məsafə}} seçilmiş halda birinci, sonra ikinci nöqtəyə klik edin. Künc yaxınlığında göstərici ona tutulur, kənar yaxınlığında kənara; göstəricinin yanındakı kiçik yazı nəyə tutulduğunu bildirir. Hər klik cütü bir ölçmə yaradır.
4. **Səth sahəsi:** {{ui:Səth sahəsi}} seçin və səthə klik edin. Bütün düz səth işıqlanır və sahəsi göstərilir.
5. **Düz xətlər:** ikinci nöqtəni seçərkən {{key:Shift}} saxlayın, ya da zolaqdakı {{ui:Düz}} düyməsinə basın ki, xətt belə qalsın. Xətt göstəricinin ən yaxın olduğu bir ox boyunca gedir (planın üst görünüşündə plan X və ya Y boyunca; digər görünüşlərdə X, Y və ya Z boyunca) və göstərici yazısı "ox boyunca düz" deyir. {{key:M}} hələ də Ölçməni başladır və dayandırır.
6. Ölçmələri silmək üçün {{ui:Təmizlə}}, ölçməni dayandırmaq üçün {{ui:Hazırdır}} (və ya {{key:Esc}}) klikləyin.

## Nəyi görməlisiniz

- İki nöqtə arasında xətt və onun üzərində uzunluq; zolaqda uzunluq və X, Y, Z boyunca nə qədər getdiyi (modelin oxlarında, Z yuxarı), hamısı alətlər panelində seçdiyiniz {{ui:Vahidlər}} ilə.
- Səthin sahəsi kvadrat metrlə, səthdə və zolaqda.
- Fırladarkən, sürüşdürərkən və yaxınlaşdırarkən yazılar ölçmələrdə qalır.
- Ölçərkən klikləmə elementləri seçmir. Kəsik müstəvisi və ya qutusu modeli yenə kəsir və siz onun göstərdiyini, kəsik üzləri də daxil olmaqla, ölçə bilərsiniz.

## Yerin yer üzündəki yeri

Ölçmə zolağında {{ui:Yer}} klikləyin, sonra modeldə bir nöqtəyə klik edin (məsafələrdə olduğu kimi künc və kənarlara tutulur). Zolaq göstərir:

- **enlik və boylam**, onluq dərəcədə və dərəcə, dəqiqə, saniyə ilə, əvvəlcə WGS 84-də;
- **xəritə koordinatları** (şərq və şimal, alətlər panelində seçilmiş {{ui:Vahidlər}} ilə yazılmış) modelin öz xəritə sistemində, məsələn `EPSG:28356`;
- **hündürlük** və faylın göstərdiyi şaquli datum, və faylın **öz datumu** (məsələn GDA94).

{{ui:Kopyala}} hamısını bir sətirdə buferə qoyur. Enlik və boylamın sistemini {{ui:Parametrlər}} › {{ui:BimCraft}} › {{ui:Yer}} altında dəyişin: WGS 84 (GPS və veb xəritələr kimi), faylın öz datumu və ya ETRS89 və ya NAD83 kimi digər ümumi bir.

Bu, coğrafi istinadlı model tələb edir: xəritə koordinatları ilə ixrac olunmuş model (EPSG kodu olan proyeksiya sisteminə xəritə çevrilməsi). Yalnız sayt enlik və boylamı olan model təxmini yer alır; bu, sayt nöqtəsindən və onun həqiqi şimalından hesablanır və zolaq bunu deyir. Bir neçə model açıq olanda hər nöqtə öz modelinin coğrafi istinadını istifadə edir.

:::note
Datumlar arasında keçid (məsələn GDA94-dən WGS 84-ə) şəbəkə faylları olmadan edilir, buna görə bir neçə metr dəqiqdir; status sətri nə qədər dəqiq olduğunu deyir. Xəritə koordinatlarının özü dəqiqdir.
:::

## Tez-tez rast gəlinən səhvlər

- **"…coğrafi istinadı yoxdur".** Faylda xəritə çevrilməsi və sayt enlik-boylamı yoxdur. Onu koordinat sistemi təyin olunmuş halda yenidən ixrac edin (müəlliflik alətində ümumi koordinatlar / planalma nöqtəsi).
- **Xəritə koordinatları var, enlik və boylam yoxdur.** Fayl xəritə sistemini EPSG kodu olmadan və ya siyahıda olmayan kodla adlandırır; status sətri hansının olduğunu deyir.
- **Nöqtə künca yox, üzə düşür.** Tutma göstəricinin altındakı elementə baxır. Künca yaxınlaşın və ya yaxınlaşdırın.
- **Sahə gözləniləndən kiçikdir.** Açıqlıqlar çıxarılır; əyilən səth bir neçə səthdir: hər birinə klik edin.
- **{{key:Esc}} ölçməni dayandırdı.** İlk {{key:Esc}} yarımçıq məsafəni silir, ikincisi dayandırır.

## Növbəti

- [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)
- [Elementləri gizlədin, təcrid edin və şəffaf görün](topic:hide-and-isolate)
