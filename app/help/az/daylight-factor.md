---
title: Hər otaqda gündüz işığını qiymətləndirin
summary: Hər otağın orta gündüz işığı əmsalı, onun pəncərələrindən, daxili səthlərindən və hər pəncərənin gördüyü səma əsasında, modeldə ölçülmüş səma bucağı ilə. Erkən layihə qiymətləndirməsi, simulyasiya və ya norma yoxlanışı deyil.
keywords: gündüz işığı, gündüz işığı əmsalı, orta gündüz işığı əmsalı, adf, şaquli səma komponenti, vsc, günəş istiliyi, günəş, g-value, şəbəkə, bölünmüş axın, səma komponenti, daxili əks olunan komponent, təbii işıq, pəncərə, şüşələmə, səma bucağı, maneə, üst-üstə düşmə, balkon, çıxıntı, əks olunma, buraxılma, erkən layihə, analiz, otaqlar, məkanlar
from: 5f300a78
---

Sağ paneldəki {{ui:Gündüz işığı}} sekmesi hər otağın **orta gündüz işığı əmsalını** hesablayır: xaricdəki buludlu səmanın işığının orta hesabla otağa faizlə nə qədər çatdığını. Açıq IFC modelinin otaqlarını (məkanları) və pəncərələrini oxuyur. Modelə heç nə dəyişdirilmir və heç nə yüklənmir.

:::warning
Bu sekmədəki hər şey **dizayn üçün köməkçi vasitədir, uyğunluq hesablaması deyil**: dərc olunmuş üsullarla erkən dizayn qiymətləndirmələri, **simulyasiya deyil** və **tikinti normasına və ya standarta görə yoxlama deyil**. BS EN 17037, LEED, BREEAM və enerji normaları yerin iqlimi ilə gündüz işığı simulyasiyası tələb edir; bunlar üçün gündüz işığı simulyasiya proqramından istifadə edin.
:::

## Hesablayın

1. Otaqları (məkanları) və pəncərələri olan IFC modelini açın. Burada çəkilmiş modellərdə bağlı divar çevrəsinin hər birinin içində bir otaq var.
2. {{ui:Gündüz işığı}} sekmesini açın və {{ui:Hesabla}} düyməsinə klikləyin.
3. Hər otaq öz gündüz işığı əmsalını və diapazonunu göstərir: 2 %-dən az, 2–5 %, 5 % və ya daha çox. Səthlərini və hər pəncərənin sahəsini və səma bucağını görmək üçün otağa klikləyin; otaq və onun pəncərələri modeldə seçilir.

Girişi dəyişdirin, rəqəmlər dərhal izləyir; modeli dəyişdikdən sonra {{ui:Yenidən hesabla}}. {{ui:CSV}} hər otağı rəqəmləri və istifadə olunan girişlərlə birlikdə saxlayır.

## Düstur

Orta gündüz işığı əmsalı (%) = T × Ag × θ × M ÷ (A × (1 − R²)), otağın pəncərələri üzrə toplanır (Littlefair düsturu, BRE 209, BS 8206-2 və CIBSE LG10-da istifadə olunur):

- **T**, şüşənin işıq buraxma əmsalı (başlanğıc üçün 0.7: istehsalçının göstəricisindən istifadə edin).
- **Ag**, şüşələnmiş sahə: hər pəncərənin sahəsi (ümumi eni × hündürlüyü, əks halda modeldəki ölçüsü) × **şüşələnmiş pay** (başlanğıc üçün 0.75: qalanı çərçivədir).
- **θ**, pəncərənin gördüyü səma bucağı, dərəcə ilə (aşağıda).
- **M**, şüşədəki çirklənmə üçün baxım əmsalı (başlanğıc üçün 1).
- **A**, otağın bütün daxili səthləri: döşəmə, divarlar, tavan və pəncərələr, otağın öz formasından götürülür.
- **R**, onların sahəyə görə çəkilmiş orta əks olunma əmsalı: başlanğıc üçün döşəmə 0.2, divarlar 0.5, tavan 0.7; şüşə 0.1 kimi hesablanır.

## Səma bucağı necə ölçülür

Hər pəncərə üçün BimCraft modeli pəncərəyə perpendikulyar şaquli müstəvi ilə kəsir, şüşənin xarici üzündən, və üfüqdən düz yuxarıya baxır: kəsiyin pəncərənin qarşısında rastlaşdığı hər şey (qarşıdakı bina, yuxarıdakı balkon və ya çıxıntı, damın saçağı) həmin 90°-nin bir hissəsini gizlədir. θ qalanıdır. Pəncərənin özü və içində olduğu divar nəzərə alınmır. Bunu pəncərənin eni boyunca beş yerdə edir və orta götürür, belə ki ortada duran nazik dirək öz payını alır, bütün səmanı yox.

Pəncərənin mərkəzindən 8.5 m yuxarıda və 9.9 m məsafədə olan bina 40.65° gizlədir (tangensi 8.5 ÷ 9.9 olan bucaq), θ = 49.35° qalır.

## Hər pəncərənin şaquli səma komponenti

{{ui:Hesabla}} həm də hər pəncərə üçün onun bütün səmadan nə gördüyünü ölçür: eyni şaquli kəsik, pəncərənin önündə hər istiqamətə çevrilir (hər 2°, bir tərəfdən o biri tərəfə), belə ki bir tərəfdəki bina, qanad və ya dərin pəncərə yan hissəsi öz payını alır. Bundan BimCraft **şaquli səma komponentini (VSC)** hesablayır: buludlu səmanın işığının şüşəyə nə qədərinin çatdığı, açıq, düz dam alacağının payı kimi. Qarşısında heç nə olmayan pəncərə **39.6 %** alır — şaquli pəncərənin ala biləcəyi ən çox; pəncərədən 25° yuxarı qalxan uzun bina təxminən **27 %** qoyur — Böyük Britaniya təlimatının (BRE 209) baş qaydası kimi istifadə etdiyi rəqəm. Otağın təfərrüatında hər pəncərə öz VSC-sini və **maneə bucağını** (qarşısında nə qədər yüksəyə düz qalxdığını) göstərir.

Səma CIE standart buludlu səmasıdır, düz yuxarıda üfüqdəkindən üç dəfə parlaqdır, və kəsik dəqiqdir: heç nə nümunə götürülmür.

## Tarixə görə pəncərələrdən keçən günəş

{{ui:Tarixə görə pəncərələrdən keçən günəş}} açın və tarix seçin. BimCraft həmin gün boyu günəşi hər on beş dəqiqədən bir izləyir və hər pəncərə üçün günəşin şüşədən keçirdiyi istiliyi toplayır:

- **birbaşa günəş**, pəncərənin qarşısındadırsa və modeldə heç nə onu gizlətmirsə (eyni dəqiq kəsik, günəşə tərəf çevrilmiş: günortada yay günəşini kölgələyən balkon, qış alçaq günəşini içəri buraxır);
- şüşəyə düşən **səma işığı**, pəncərənin görə bilmədiyi hissə çıxılmaqla;
- **yerdən əks olunan işıq** (əks olunma əmsalı: başlanğıc üçün 0.2);
- hamısı şüşənin **g-value** əmsalı ilə (günəş enerjisinin keçirdiyi pay: başlanğıc üçün 0.6; istehsalçının göstəricisindən istifadə edin) və onun şüşələnmiş payı ilə.

Hər otaq günün cəmini kVt·saatla və zirvəsini vattla vaxtı ilə göstərir; otağın təfərrüatı günü diaqram kimi çəkir. Səma Hottel modelinə görə açıqdır (Duffie & Beckman, *Solar Engineering of Thermal Processes*), yer və fəsil üçün yay və ya qış göstəriciləri və obyektin hündürlüyü ilə; günəşin yeri NOAA-nındır. Obyektin en və boylam dairəsi IFC-nin obyektindən, şimal isə modelin həqiqi şimalından götürülür; model obyekt daşımırsa, en və boylamı yazın. Vaxt yazdığınız saat qurşağında standart vaxtdır (yay vaxtı yoxdur), əks halda boylamın göstərdiyi qurşaq üzrə.

Nəyi nəzərə almır: buludlar (gün açıqdır), alçaq bucaqlarda şüşənin daha az buraxması, çərçivələrin şüşəni kölgələməsi, jalüzlər və divarların və damın udduqları. Eyni sekmədəki soyutma qiymətləndirməsi zirvəni istifadə edir.

## Şəbəkədə gündüz işığı əmsalı

{{ui:Şəbəkədə gündüz işığı əmsalı}} açın və {{ui:Şəbəkəni hesabla}} düyməsinə klikləyin: BimCraft hər otağın döşəməsinin üstünə iş səthi hündürlüyündə (başlanğıc üçün 0.85 m) şəbəkə çəkir, divarlardan yarım metr içəridə, və hər nöqtədə gündüz işığı əmsalını **BRE bölünmüş axın üsulu** ilə hesablayır:

- **səma komponenti**: buludlu səmanın nöqtədən pəncərənin açılışından görünməsi, çərçivələr çıxılmaqla;
- **xaricdən əks olunan komponent**: nöqtənin pəncərədən xaricdəki binaları görməsi, onların arxasındakı səmanın onda birinin parlaqlığında (onlar çox açıq və ya tünddürsə, maneənin parlaqlığını dəyişin);
- **daxildən əks olunan komponent**: otağın səthlərindən və əks olunma əmsallarından, pəncərələrin sahəsindən və onların xaricində olan payından işığın otaqda əks olunması (BRE düsturu, şəffaf şüşənin əvəzinə şüşənin buraxma əmsalı ilə).

Hər otaq öz ortasını, ən aşağı nöqtəsini və onun nə qədərinin 2 % və ya daha çoxunu aldığını göstərir; otağın təfərrüatı planını çəkir, hər nöqtə gündüz işığı əmsalına görə rənglənir və pəncərələr qırmızı ilə göstərilir. İstənilən kompüterdə sürətli olması üçün otağa ən çox **400 nöqtə** düşür: böyük otaqda məsafə ona uyğun böyüyür (öz məsafənizi seçmək üçün məsafə yazın).

## Nəyi nəzərə almır

- Dam pəncərələri (düz və ya meylli şüşə) siyahıya salınır, lakin hesablanmır: buradakı düsturlar divardakı pəncərələr üçündür.
- Arxasında otağı olmayan pəncərələr (məsələn, məkanı olmayan dəhliz) ayrıca siyahıya salınır.
- Pəncərə yan hissələri (açılış xarici üzdə götürülür), parıltı, günəş saatları və iqlimə əsaslanan gündüz işığı. BS EN 17037, LEED və ya BREEAM üçün gündüz işığı simulyasiya proqramı istifadə edin.
- Diapazonlar köhnə Britaniya təlimatından (BS 8206-2) götürülüb, yalnız bələdçi kimi göstərilir, heç vaxt keçdi/keçmədi kimi yox.
