---
title: Divarların, döşəmələrin və damların karkası
summary: Modeldən dirəkləri, lövhələri, başlıqları, tirləri, sarıqları və ya fermaları yaradın və modellə saxlayın; divarlar, açılışlar, döşəmələr və ya dam dəyişəndə onlar yenidən yaranır, Taxta cədvəli isə kəsmə siyahısıdır.
keywords: TJI, I-tir, tir açıqlıq cədvəli, cədvəli yüklə, karkas, karkaslamaq, dirək, dirəklər, lövhə, üst lövhə, başlıq, king dirəyi, jack dirəyi, trimmer, kiçik dirək, alt lövhə, bloklama, künc, Kaliforniya künci, T birləşmə, tir, kənar tir, bant tir, dam tiri, hip dam tiri, yarğan dam tiri, köməkçi dam tiri, konek lövhəsi, tavan tiri, sarıq, taxta, kəsmə siyahısı, board feet, 2x4, 2x6, addım, mərkəzdən mərkəzə
from: 76d0ffb5
---

## Nə edəcəksiniz

Çəkdiyiniz şeydən binanın karkasını qurun. BimCraft divarlarda dirəkləri, lövhələri və başlıqları, döşəmələrdə tirləri, damda isə dam tirlərini (və ya fermaları) düzür, onları etiketli standart cədvəllərdən ölçür, modellə birlikdə saxlayır və onların karkas etdiyi şey dəyişdikdə yenidən yaradır. **Taxta** cədvəli kəsmə siyahısıdır.

## Karkası qurun

1. Səviyyədə {{ui:Versiya}} açın və {{ui:Karkas}} seçin.
2. **Addım** (mərkəzdən mərkəzə 16" və ya 24"; 400 və ya 600 mm), **künclər** (üç dirəkli və ya Kaliforniya), damlar üçün **Dam tirləri** və ya **Fermalar**, və divarlara orta hündürlükdə **bloklama** sırası qoyulub-qoyulmayacağını seçin. Döşəmələr üçün **Mişar taxtası** və ya **TJI (ilkin)** seçin və tir istiqamətini avtomatik, plan X və ya plan Y olaraq təyin edin.
3. **Hər divarı karkaslayın** düyməsinə klikləyin və ya yalnız onu karkaslamaq üçün bir divara, döşəməyə və ya dama (dam oturduğu səviyyədə) klikləyin.

**Karkası göstər** söndürün — hər karkas parçasını qat kimi gizlədir; **Şəffaf** karkaslanmış divarları, döşəmələri və damları gizlədir ki, yalnız karkasa baxa biləsiniz.

## Nə alırsınız

- **Divarlar**: aşağı lövhə (qapılarda kəsilmiş), iki qat üst lövhə, divarın başlanğıcından planda dirəklər, hər qapı və pəncərədə əsas (king) və köməkçi (jack) dirəklər və başlıq, başlıqların üstündə və pəncərələrin altında kiçik dirəklər, pəncərələrin altında kobud alt lövhə, divarların birləşdiyi künclər (keçən divar künc dirəklərini alır), başqa divarın T birləşdiyi yerdə iki arxa dirək, və dirəklər arasında bloklama.
- **Döşəmələr**: tirlər, defolt olaraq döşəmənin qısa tərəfi boyunca, ya da seçdiyiniz plan oxu boyunca; kənar ətrafında kənar tirlər, pilləkən boşluğunun ətrafında ikiqat kənarlayıcı tirlər və başlıqlar, boşluqdan keçən tirlər qısa kəsilir (quyruq tirləri). TJI rejimi seçilmiş addımda ölçülmüş təmiz açıqlığa çatan ən kiçik siyahıdakı seriyanı və dərinliyi seçir.
- **Dam**: kənarda hər saçağa perpendikulyar dam sarıqları, hip və yarğanların kəsdiyi yerdə köməkçi dam tirləri, dördsulu və yarğan dam tirləri, konek lövhələri, lövhələr üzərində tavan tirləri və sarıqlar — və ya hər biri bir parça olan sadə fermalar.

## Dəyişdirin

3D görünüşdə və ya model ağacında istənilən karkas parçasını seçin. **Xassələr** onun karkasını göstərir: addımı, döşəmə tirinin növünü və istiqamətini, künclərini, bloklamanı və ya dam karkasını dəyişin. Divarları, qapıları və pəncərələri hərəkət etdirmək və ya döşəməni və ya damı dəyişmək karkası özü yenidən yaradır.

Karkas yenidən yaradılanda qəsdən yerləşdirdiyiniz parçanı saxlamaq üçün onu seçin və **Karkas yenidən yaradılanda bu parçanı saxla** seçin. Saxlanılan parça olduğu yerdə qalır; ətrafdakı karkas dəyişəndə onu yoxlaya bilməyiniz üçün işarələnir.

## TJI döşəmələri yüklədiyiniz cədvəldən

BimCraft tir istehsalçısının açıqlıq cədvəllərini daşımır (onlar istehsalçınındır və hər buraxılışla dəyişir). Döşəmənin karkasını seçin, **Döşəmə tirləri**ni **TJI (ilkin)** olaraq təyin edin və **Xassələr** bölməsində **Cədvəli yüklə…** seçin: istehsalçının hazırkı açıqlıq cədvəllərindən düzəltdiyiniz `cadcraft-tji-table` formatında, JSON və ya CSV fayl. O, istehsalçını, məhsulu və buraxılışı, rəqəmlərin haradan gəldiyini adlandırır və hər yük halı (daşıyıcı yük, daimi yük, əyilmə həddi, dayaq uzunluğu) üçün hər seriya və dərinliyin hər addımda ən böyük təmiz açıqlığını sadalayır.

- BimCraft döşəmənin **təmiz açıqlığını** götürür, ən dayaz dərinliyi seçir, onun daxilində seriyanı seçir ki, siyahıdakı açıqlıq seçdiyiniz addım və yük halı üçün ona çatsın və döşəməni onunla karkaslayır. Açıqlıq və ya addım cədvəldən kənardadırsa, bunu deyir və heç nəyi dəyişmir.
- Yüklər, əyilmə həddi, dayaq uzunluğu, cədvəl və "İlkin planlaşdırma göstərişi; son seçim istehsalçının cədvəllərini və layihə yüklərini tələb edir" cümləsi **Taxta** cədvəlində çap olunur, karkasla birlikdə modelə yazılır və **Problemlər** panelində qeyd kimi sadalanır. Nümunə kimi işarələnmiş cədvəl bunu xəbərdarlıqda deyir.
- **Tikinti normaları** əlavəsi açıq olduqda, onun döşəmə tiri qaydası yüklənmiş cədvəli də oxuyur; cədvəl olmadan TJI tirləri həmin yoxlamadan əvvəlki kimi kənarda qalır.
- Cədvəl onu təmizləyənə və ya başqasını yükləyənə qədər bu brauzerdə qalır. Fayl: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: inches, feet, psf; ya da `metric`: mm, metres, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) və `rows` (`series`, `depth`, `spans`: hər hal id-si üçün addım və ən böyük təmiz açıqlıq, məsələn `"16": "15-6"`). CSV-də eyni məlumat `# key = value` sətirləri, sonra `series,depth,case,spacing,span` ilə verilir.
- Cədvəl yüklənmədikdə TJI planı rədd edilir və heç nə dəyişmir: **TJI cədvəli yükləyin: istehsalçının cədvəlləri onlarındır və daxili deyil.** Köhnə daxili TJI cədvəli ilə (bu dəyişiklikdən əvvəl) karkaslanmış model hər tirini saxlayır; Xassələr və Problemlər cədvəlin lazım olduğunu deyir və siz bir cədvəl yüklədikdə döşəmə yenidən karkaslana bilər. Bərk mişarlanmış tirlər əvvəlki kimi işləyir.

Bu, planlaşdırma üzrə göstərişdir. Son tir seçimi istehsalçının cədvəllərini, layihənin yüklərini və mühəndisi tələb edir.

## Kəsmə siyahısı

Cədvəllər panelində **Taxta** seçin: hər karkas parçası ölçüyə və alacağınız stok uzunluğuna görə qruplaşdırılır (8'-dən tam 2' uzunluqlar; mm ilə ölçüdə 2400-dən 600 mm addımlarla), parçaların sayı və board feet ilə birlikdə. **CSV** onu yükləyir.

:::warning
Başlıq, tir, dam tiri və tavan tiri ölçüləri tipik bir və ya iki mərtəbəli ev üçün etiketli standart cədvəllərdən gəlir, mühəndislik hesabı deyil. **Xassələr** açıqlığın və ya açılışın cədvəldən kənarda olduğunu deyir. Dizayner və ya mühəndis açıqlıqları, yükləri və birləşmələri yoxlayır.

TJI planları yalnız yüklədiyiniz cədvəldən istifadə edir; bunu istehsalçının hazırkı açıqlıq cədvəllərindən düzəldirsiniz; BimCraft heç birini daxil etmir. Təklif dayaq, nöqtəvi yükləri, konsolları, deşikləri, pilləkən başlıqlarını və ya birləşmələri yoxlamır, modelin I forması isə sxemlidir.
:::

## Nə saxlanılır

Karkaslanmış hər divar, döşəmə və ya dam IFC element yığımıdır ("Framing") IFC elementlərindən (dirəklər, lövhələr, dam tirləri, sarıqlar, bloklama, fermalar) və tirlərdən (başlıqlar, döşəmə tirləri, kənarlar, konek lövhələri), hər birinin ölçüsü, uzunluğu və board feet ilə.
