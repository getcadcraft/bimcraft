---
title: Borular və kanallar
summary: Borular və kanal xətlərini planda mərkəz xətləri ilə çəkin; dirsəklər, trinikər, reduksiyalar və keçidlər sizin üçün yaradılır, xətlər IFC faylında birləşmiş portlu sistemlərə aid olur və planlarda, cədvəllərdə və həcmlərin hesablanmasında göstərilir.
keywords: boru, borular, boru kəməri, santexnika, kanal, kanallar, hava kanalları, hvac, mep, mexaniki, dirsək, trinik, reduksiya, keçid, fitinq, fitinqlər, klapan, klapanlar, şibər klapan, kürəli klapan, şarlı klapan, yoxlama klapanı, stoyka, meyl, drenaj, sanitar, yağış, havalandırma, soyuq su, isti su, soyudulmuş su, istilik, qaz, yanğından mühafizə, təchizat havası, qayıdan hava, egzoz, sistem, sistemlər, port, portlar, birləşdirici, birləşdiricilər, element, elementlər, santexnika qurğusu, lavabo, kran, duş, yuyucu, tualet, sanitar qurğu, qurğu vahidləri, uhc, dfu, drenajların ölçüsü, drenaj ölçüsü, bina drenajı, budaq, kollektor, hava axını, cfm, sürtünmə, bərabər sürtünmə, ölçülənmə, cədvəl, həcmlərin hesablanması, nbr, nbr 5648, nbr 5688, nbr 8160, həlledici PVC, kanalizasiya, dn
from: 85140bc5
---

## Nə edəcəksiniz

Bina boru və kanallarını divarları çəkdiyiniz kimi çəkin: qurduğunuz yüksəklikdə xəttin mərkəz xəttinin künclərinə klikləyin. BimCraft fitinqləri yaradır, hər hissəni öz sisteminə qoyur və birləşdirir, beləliklə digər proqramlar xətti bir birləşmiş sistem kimi oxuyur.

## Boru çəkin

1. {{ui:Çək}} açın, {{ui:Versiya}} açın və {{ui:Boru}} seçin.
2. Paneldə **sistemi** seçin (soyuq su, isti su, sanitar drenaj, qaz…). O, adi materialı təyin edir: sudə mis, drenaj və havalandırmada PVC, istilik, soyudulmuş su, qaz və yanğından mühafizədə polad. Lazım olsa **materialı**, **sinfi** və **ölçünü** dəyişin. Ölçülər və divarlar ictimai standartlardan gəlir: polad boru ASME B36.10M, mis boru ASTM B88, PVC ASTM D1785 və PEX ASTM F876. Braziliya layihələri **PVC su borusu (NBR 5648)** istifadə edə bilər — soyuq su üçün həlledici ilə yapışdırılan PVC — və **PVC drenaj borusu (NBR 5688)**, normal və ya gücləndirilmiş seriya — drenaj və havalandırma üçün; onların ölçüləri DN ilə adlanır (DN 25, DN 100). Onlardan birini seçdikdən sonra başqa sistem seçdikdə Braziliya borularına qalınır (PVC su borusundan sonra sanitar drenaj üçün PVC drenaj borusu).
3. **At**-ı təyin edin: borunun mərkəz xəttinin səviyyədən yüksəkliyi.
4. Borunun başladığı yerə, sonra hər künc nöqtəsinə klikləyin. Son nöqtədə iki dəfə klikləyin və ya {{key:Enter}} basın. {{key:Backspace}} sonuncu künci geri alır; {{key:Esc}} xətti ləğv edir.

Boru divarlar kimi və digər xətlərə bağlanır: başqa borunun ucundan başlayın ki, ondan davam edəsiniz, və ya başqa borunun xəttinin üzərində bitirin ki, ondan budaq çıxsın. Yeni xətt bağlandığı borunun yüksəkliyini alır.

Xətt avadanlığın portundan başladılırsa və ya orada bitirilirsə, o, həmin portun ölçüsünü və sistemini alır və ona bərkidilir: bax [Portları olan MEP avadanlığı](topic:mep-equipment) və [Boru və kanalları avadanlığa birləşdirmək](topic:mep-connections).

## Layihənin santexnika standartını təyin edin

Boru panelindəki birinci siyahı modelin **santexnika standartıdır**: **ABŞ (IPC, düym)** və ya **Braziliya (ABNT, DN)**. Model içində saxlanılır, beləliklə faylı açan hər kəs xətləri eyni üsulla başlayır. **ABŞ** altında yeni xətt mis (su) və ya PVC Schedule 40 (drenaj) ilə, düymlə, Beynəlxalq Santexnika Məcəlləsinin meyli ilə başlayır. **Braziliya** altında soyuq su həlledici ilə yapışdırılan PVC DN 25 kimi, sanitar və yağış drenajları və havalandırmalar PVC kanalizasiya DN 100 kimi NBR 8160 meyli ilə, isti su isə misdə başlayır. Bu, fikstür konnektorunda və ya avadanlıq portunda başlayan xətt üçün də tətbiq olunur.

Artıq çəkilmiş borular öz materialını və öz cədvəllərini saxlayır; material siyahısı açıq qalır, beləliklə ABŞ modelində qəsdən bir Braziliya xətti çəkə bilərsiniz. Seçimi olmayan fayl əvvəlki kimi davranır: yeni xətt istifadə olunan materialı izləyir.

## Kanal çəkin

1. {{ui:Kanal}} seçin. Sistemi (təchizat, qayıdış, egzoz və ya çöl havası) və formanı seçin: dəyirmi, düzbucaqlı və ya yastı oval.
2. Eni və hündürlüyü yazın (dəyirmi kanalın eni diametridir), və mərkəz xəttinin hündürlüyü üçün **At**.
3. Hava axınına görə ölçmək üçün **Hava axını** və **Sürtünmə** dərəcəsini yazın və {{ui:Ölçüsünü təyin et}} klikləyin. Kanal ASHRAE Handbook-un hava kanalı layihələndirmə fəslindəki üsul olan bərabər sürtünmə ilə ölçülür və stokda olan ölçüyə yuvarlaqlaşdırılır, beləliklə sürtünmə yazdığınız dərəcəyə bərabər və ya ondan aşağı çıxır. Dərəcə yazılmadıqda 100 ft başına 0.08 in. su (0.8 Pa/m) istifadə olunur. Düzbucaqlı kanal yazdığınız hündürlüyü saxlayır və eni alır; tərəfləri 4:1-dən çox olduqda BimCraft bunu deyir.
4. Boru kimi künclərə klikləyin.

## Santexnika qurğuları

{{ui:Versiya}} › {{ui:Ailə yerləşdir}} başlamaq üçün beş qurğu təklif edir, hər birində drenaj və soyuq su konnektoru var: **Tualet**, **Lavabo**, **Mətbəx yuyucusu**, **Duş səkisi** və **Paltaryuyan vanna**. Onların ön tərəfi yerləşdirəndə sizə baxır, arxası divara dayanır. Drenajları NBR 8160-ın ən kiçik qurğu drenajında (tualet üçün DN 100, mətbəx yuyucusu üçün DN 50, digərləri üçün DN 40); su DN 20-dir. Onların ölçülərini dəyişin və ya hər hansı ailə kimi redaktə edin: bax [Ailələr və onların ölçüləri](topic:families).

Ailə redaktorunun {{ui:Birləşdiricilər}} sekməsində ailənin hansı qurğu olduğunu {{ui:Santexnika qurğusu}} altında deyin. Onun drenajı sonra qurğu vahidləri ilə sayılır: tualet üçün 6 UHC, lavabo üçün 1, mətbəx yuyucusu və ya paltaryuyan üçün 3, duş üçün 2 (NBR 8160), və ya IPC Cədvəl 709.1-in drenaj qurğu vahidləri.

## Qurğunun konnektorundan

Konnektorları olan ailədən yerləşdirilmiş elementlər (lavabonun drenajı və kranı, hava terminalının boynu: bax [Ailəni redaktə edin](topic:family-editor)) {{ui:Boru}} və ya {{ui:Kanal}} açıq olduqda sərbəst konnektorlarını nöqtə kimi göstərir və göstərici onlara bağlanır.

- **Konnektordan başlayın**: xətt sistemini və ölçüsünü alır (panelin materialının borusu konnektorun ölçüsündə və ya ondan bir az böyük; dəyirmi kanal isə öz diametri ilə). Konnektor aşağıya və ya yuxarıya baxanda, lavabonun altındakı drenaj kimi, xətt əvvəlcə **At**-da təyin edilən yüksəkliyə düz aşağı və ya yuxarı gedir, sonra klikləriniz üzrə davam edir.
- **Konnektorda bitirin**: xətt onun üzərinə aşağı və ya yuxarı gedir və orada bitir.

Xətt IFC faylında elementə birləşdirilir, beləliklə digər proqramlar qurğunu öz sisteminin hissəsi kimi görür. Sonradan yerləşdirilən və xəttin ucunda konnektoru olan element də ona birləşdirilir. Konnektordan uzaqlaşdırılan xətt artıq ona bağlı deyil.

## Sizin üçün yaradılan fitinqlər

| Harada | BimCraft nə yaradır |
|---|---|
| Xətt dönür | Dirsək. Polad boru ASME B16.9-un uzun radiusunda (ölçünün 1.5 ×), digər boru bir xarici diametrdə, dəyirmi kanal 1.5 diametrdə, düzbucaqlı kanal bir eni ilə (yuxarı və ya aşağı dönüşdə bir hündürlüklə) |
| Xətt başqa xəttin xəttinə bitir | Trinik; digər xətt orada bölünür |
| İki xətt ucdan uca fərqli ölçülərdə birləşir | Reduksiya (borular) və ya keçid (kanallar) |
| Eyni ölçülü iki xətt ucdan uca bucaq altında birləşir | Dirsək |

Xətti dəyişdikdə, köçürdükdə və ya sildikdə, həmin səviyyədəki hər fitinq yenidən yaradılır. Əgər ayağın ucundakı fitinqlər üçün çox qısadırsa, BimCraft bunu deyir və heç nəyi dəyişmir: künci daha uzağa köçürün.

:::note
Fitinqlər və klapanlar ümumidir: boru və ya kanal ölçüsündən çəkilib, istehsalçı kataloqundan deyil. Rozetkalı, presslə və yivlə bağlanan fitinqlərin, klapan gövdələrinin və avadanlığın istehsalçıların öz ölçüləri var; sifariş verməzdən əvvəl təchizatçınızla yoxlayın.
:::

## Stoykalar

Çəkərkən **At**-a yeni hündürlük yazın və {{key:Enter}} basın: xətt son künc yerində düz yuxarı və ya aşağı gedir, hər ucda dirsək ilə. Stoyka yuxarıdakı səviyyəyə qalxa bilər. Hər səviyyə xəttin baxış diapazonuna düşən hissələrini göstərir, stoykada **UP** və ya **DN** ilə.

## Drenajlar və onların meyli

Sanitar və yağış drenajları, Beynəlxalq Santexnika Məcəlləsinin ölçülərinə görə icazə verdiyi ən kiçik meylə başlayır: 2-1/2 düymə qədər hər fut üçün 1/4 düym, 3-dən 6 düymə qədər hər fut üçün 1/8 düym, 8 düymdən hər fut üçün 1/16 düym. Braziliya PVC drenaj borusu NBR 8160-ın meyli ilə başlayır: DN 75-ə qədər 2 %, DN 100-dən 1 %. Başqa meyl yazmaq üçün panelə və ya Xassələrə yazın: `1/4"/ft`, `2 %` və ya `1:50`. Xətt ilk nöqtəsindən aşağı enir, ona görə drenajları axdıqları istiqamətdə çəkin. Plan enməni və oxu göstərir. Drenaj kodun minimumundan düz olduqda Xassələr xəbərdarlıq edir.

## Drenajların ölçüsünü qurğu vahidləri ilə təyin edin

Sanitar drenajı seçin: Xassələrdəki **Qurğu vahidləri** neçə vahid daşıdığını və onlara lazım olan ən kiçik ölçünü deyir. Drenaj konnektoru xəttdə olan hər santexnika qurğusu sayılır, və ona axan hər drenaj da sayılır: drenajları axdıqları istiqamətdə çəkin, hər biri axdığı drenajda bitsin.

- Braziliya PVC drenaj borusundakı drenajlar **UHC** sayılır və NBR 8160-a uyğundur; digərləri **DFU** sayılır və Beynəlxalq Santexnika Məcəlləsinə uyğundur.
- **Drenaj**: **Budaq** qurğu budaqları üçün məcəllənin cədvəlindən ölçülür; **Bina drenajı** meyli ilə öz cədvəlindən ölçülür, buna görə **Meyl** vacibdir.
- Drenaj heç vaxt xidmət etdiyi qurğu drenajlarından (tualetə DN 100, yəni 3 düym lazımdır) və ya ona axan drenajdan kiçik olmur. NBR 8160 altında bina drenajı ən azı DN 100-dür.

{{ui:Drenajların ölçüsünü təyin et}} modelin qurğu vahidlərinə görə çox kiçik olan hər sanitar drenajını lazım olan ölçüyə gətirir, geri alına bilən bir addım kimi. Lazım olduğundan böyük çəkilmiş drenaj olduğu kimi qalır. Drenaj öz borusunun ən böyük ölçüsünün öz meylində daşıya bilməyəcəyi qədər daşıdıqda BimCraft bunu deyir: daha dik meyl və ya başqa boru verin.

:::note
Cədvəllər üfüqi drenajlara aiddir. Stoykalar, havalandırmalar və yağış drenajları burada ölçülmür: onları və bütün layihəni layihəyə tətbiq olunan məcəllə ilə yoxlayın.
:::

## Klapanlar

1. {{ui:Klapan}} seçin və növü: şibər, kürə, şarlı və ya yoxlama.
2. Yerləşəcəyi boruya klikləyin. Boru onun ətrafında kəsilir və klapan hər iki tərəfə birləşdirilir.

Xətlin Xassələri onun klapanlarını sadalayır, hər biri {{ui:Sil}} ilə.

Daha çox klapan növü, süzgəc, kanallarda dempferlər, öz boru spesifikasiyalarınız və istehsalçı ailələri: bax [Boru spesifikasiyaları, klapanlar, dempferlər və istehsalçı ailələri](topic:pipe-specs).

## Xətti dəyişin

Planda və ya 3D görünüşdə xəttin istənilən hissəsini seçin. Xassələrdə:

- **Sistem**, **Material**, **Sinif** və **Ölçü** (borular), və ya **Forma**, **Eni**, **Hündürlük** (kanallar).
- **Səviyyədən yüksəklik** bütün xətti yuxarı və ya aşağı köçürür.
- **İzolyasiya**: onun qalınlığı, boşluq yoxlaması və açılışlar siyahısı üçün saxlanılır (bunun üçün heç nə çəkilmir): bax [Boru və kanalları strukturla yoxlayın](topic:mep-against-structure).
- Polad boru: **Spullara kəs**: bax [Polad boru spulları və spul vərəqləri](topic:pipe-spools).
- **Meyl** (borular).
- {{ui:Ölçüsünü təyin et}} ilə **Axın**: su üçün suyu 8 ft/s (2.4 m/s) saxlayan ən kiçik ölçü, isti su üçün 5 ft/s (1.5 m/s); Braziliya PVC su borusu üçün (NBR 5626) 3 m/s. Kanallar üçün çəkildiyi kimi kanalın sürəti və sürtünmə dərəcəsi. Sanitar drenajlar bunun əvəzinə qurğu vahidləri ilə ölçülür: aşağıda **Drenajların ölçüsünü qurğu vahidləri ilə təyin edin** bölməsinə baxın.

Hər dəyişiklik {{ui:Geri qaytar}}-ın bir addımıdır. {{key:Delete}} bütün xətti silir.

## Planlar

- 150 mm-dən (təxminən 6 düym) kiçik borular mərkəz xəttində bir xətt kimi çəkilir, böyük borular və bütün kanallar enində iki xətt kimi.
- Hər sistemin öz rəngi var; plan PDF-i onları qara rəngdə çap edir.
- Hər xətt öz ölçüsü və sistemi ilə etiketlənir (məsələn `2" CW` və ya `16×10 SA`).
- Planın baxış diapazonu hansı xətləri göstərəcəyini təyin edir, və {{ui:Bu planda göstərilir}} **Borular** və ya **Kanallar**-ı çıxara bilər: bax [Görünüşlər, baxış diapazonları və öz vərəqləriniz](topic:views-and-sheets).

## Cədvəllər və həcmlərin hesablanması

{{ui:Cədvəllər}} paneli **Borular** (sistem, material və ölçü üzrə, uzunluqları ilə), **Kanallar** (sistem, forma və ölçü üzrə, uzunluqları və xarici səth sahəsi ilə) və **Fitinqlər və klapanlar** (növ və ölçü üzrə, sayılmış) əlavə edir. Sətirə klikləyin ki, nəyi sadalamasını seçəsiniz; {{ui:CSV yüklə}} onu yükləyir.

{{ui:Həcmlərin hesablanması}} xətləri TakeoffCraft-a aparır: plandakı xətlər kimi çəkilmiş boru və kanal ölçüyə görə (meylli drenajlar öz meyli boyunca ölçülür), fitinqlər və klapanlar yerində sayılır: bax [Modelin miqdarlarını TakeoffCraft-a göndərin](topic:takeoff). Stoykalar həmin vərəqdən kənarda qalır, çünki plan onları ölçə bilmir; Borular cədvəlində onların uzunluğu var.

## IFC faylında

Hər xətt hissələrini saxlayan bir yığımdır: boru və kanal seqmentləri, fitinqlər və klapanlar, hər birinin öz tipi, materialı, sisteminin rəngi və portları ilə. Toxunan portlar birləşdirilir və hər hissə öz paylama sisteminə aiddir (IFC2X3 faylları eyni şeyi axın seqmentləri, fitinqlər və sistemdə idarəedicilər kimi alır). IFC sistemlərini oxuyan digər proqramlar hər sistem üçün bir birləşmiş xətt görür. Xəttin öz tərifi onunla birlikdə saxlanılır, beləliklə dəyişdikdə BimCraft onu eyni üsulla yenidən yaradır.
