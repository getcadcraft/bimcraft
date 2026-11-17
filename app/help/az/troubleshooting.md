---
title: Problemlərin həlli
summary: BimCraft-ın göstərdiyi mesajlar, onların səbəbləri və nə etmək lazım olduğu: fayllar, qovluqlar, 3D modellər, çertyojlar və redaktələr üçün.
keywords: problem, xəta, işləmir, aça bilmir, alınmadı, natamam, zədələnmiş, yavaş, çökmə, boş, çatışmayan, mesaj, kömək
from: 1e5a79fc
---

Mesajlar səhnənin altındakı status sətrində görünür, nəsə alınmayanda qırmızı rəngdə. Aşağıda mesajı tapın.

## Faylların açılması

**"*name* IFC, RVT, RFA, DWG və ya DXF faylı deyil."**
BimCraft faylı tanımadı. Genişlənməni və faylın boş olmadığını yoxlayın. PDF-lər, şəkillər və ofis faylları açılmır.

**".ifczip hələ dəstəklənmir. Modeli adi .ifc faylı kimi saxlayın və ya ixrac edin."** (`.ifcxml` üçün də)
`.ifczip`-i açın (o, içində `.ifc` olan adi zipdir) və ya adi IFC ixrac edin.

**"… BimCraft-ın hələ oxumadığı layihə faylıdır."**
Bu `.pln`, `.pla`, `.tpl` və ya `.bpn` faylıdır. Ondan IFC və ya DWG ixrac edin və onu açın: bax [.pln və .pla layihə fayllarının açılması](topic:pln-project-files).

**"Bu IFC faylı oxuna bilmədi."**
IFC faylı zədələnib və ya əslində IFC deyil. Onu mətn redaktorunda açın: həqiqi IFC faylı `ISO-10303-21;` ilə başlayır. Yenidən ixrac edin.

**"Bu fayl natamamdır: o, … MB-dır, lakin öz indeksi ən azı … MB-dakı məlumata işarə edir. …"**
Layihə və ya ailə faylı kopyalanarkən, yüklənərkən və ya sinxronlaşdırılarkən kəsilib. "Yalnız onlayn" olan bulud-disk faylı da eyni görünür. Tək başına açılan fayl hələ də açılır, kartın yuxarısında bu mesajla və "Bərpa olunanlar göstərilir; tam model üçün orijinalı yenidən kopyalayın." yazısı ilə: kart yalnız hər baytı faylda olan hissələri göstərir və qalanları **Faylda yoxdur** altında sadalanır. Bulud diskində faylı oflayn əlçatan edin və ya orijinalı yenidən kopyalayıb yenidən açın. Qovluqda BimCraft ən yeni tam ehtiyat nüsxəni göstərir.

**"… Faylın öz məzmun siyahısı da çatışmayan hissədədir, buna görə içindəki heç nə açıla bilmir."**
Fayl o qədər erkən kəsilib ki, məzmun siyahısı belə yoxdur. Bu nüsxədən heç nə bərpa oluna bilməz. Orijinalı yenidən kopyalayın və yenidən açın.

**"Bu mürəkkəb fayl BasicFileInfo axını daşımır, buna görə Revit faylı deyil."**
Fayl başqa növ mürəkkəb fayldır (köhnə ofis sənədləri eyni konteynerdən istifadə edir). Düzgün faylı seçdiyinizi yoxlayın.

**"Son fayl üzərində hələ işləyirəm…"**
BimCraft hələ əvvəlki fayl və ya qovluqla məşğuldur. Status sətri bitənə qədər gözləyin, sonra yenidən cəhd edin.

**Fayl seçici faylımı boz rəngə salır.**
Seçici yalnız `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` və `.dxf` təklif edir. Əvəzində digər faylları səhifənin üzərinə sürüşdürün; BimCraft oxuya biləcəyini sizə deyəcək.

## Qovluqların açılması

**"Bu qovluqda 20,000-dən çox fayl var. Daha kiçik qovluq seçin, məsələn bir layihə."**
Çox yuxarıda, məsələn bütün disk, qovluq seçmisiniz. Bir layihə qovluğu seçin.

**"Brauzer *name* üçün giriş vermədi. Onu Qovluq aç ilə yenidən seçin."**
Son qovluqlarda {{ui:Yenidən aç}} basmısınız və brauzerin icazəsi rədd edilib və ya müddəti bitib. Qovluğu yenidən seçin və ya sürüşdürün.

**Brauzer deyir ki, fayllar "yüklənəcək".**
Bu, brauzerin faylları səhifəyə ötürmək üçün öz ifadəsidir. BimCraft onları heç yerə göndərmir. Bu sualdan yayınmaq üçün qovluğu sürüşdürün.

**Telefon və ya planşetdə heç nə baş vermir.**
Bir çox mobil brauzer qovluq seçə bilmir. Tək faylları açın və ya kompüterdən istifadə edin.

## IFC mühərriki ilk dəfə yüklənir

**Status sətri "IFC mühərriki işə salınır…" üzərində qalır və ya "Failed to fetch" kimi xəta göstərir.**
IFC mühərrikini yükləmək olmadı. Oflaynsınız, ya da divar və ya məzmun bloklayıcı onu dayandırır.

:::offline
Oflaynsınız. Tətbiq panelindəki düymə {{ui:Oflayn hazırdır}} demirsə, IFC mühərriki bu brauzerdə heç vaxt saxlanılmayıb. Yenidən qoşulun, faylı yenidən açın, sonra {{ui:Oflayn üçün saxla}} basın ki, növbəti dəfə oflayn işləsin. Bax [Onlayn və oflayn](topic:online-offline).
:::

:::online
Səhifəni yenidən yükləyin və yenidən cəhd edin. İş şəbəkəsində IT komandanızdan saytın `.wasm` fayllarına icazə istəyin.
:::

## Oflayn istifadə üçün saxlamaq

**Düymə {{ui:Saxlamaq alınmadı}} deyir.**
Bəzi fayllar yüklənməyib, adətən bağlantı kəsildiyinə görə. Bağlantınızı yoxlayın və düyməyə yenidən basın. Yeni nüsxə tam olana qədər əvvəlki oflayn nüsxə saxlanılır.

**Düymə {{ui:Oflayn mövcud deyil}} deyir.**
Bu pəncərə oflayn nüsxə saxlaya bilmir, məsələn şəxsi pəncərə və ya idarə olunan iş kompüteri. Bax [Oflayn işləmək](common:offline).

**Düymə bir müddət "*n* / *m* saxlanılır" üzərində qalır.**
BimCraft-ın nüsxəsi təxminən 11 MB-dır, əsasən IFC mühərriki. {{ui:Oflayn hazırdır}} deyənə qədər səhifəni açıq saxlayın.

**BimCraft oflayn açılıb, lakin köhnə görünür.**
Saxlanılmış nüsxəniz əvvəlki ziyarətdən qalıb. Onlayn olanda {{ui:Oflayn hazırdır}} basın və {{ui:Yenidən saxla (ən yeni versiyanı al)}} seçin.

## 3D görünüş

**Model gözlədiyiniz yerdə deyil və ya çox kiçikdir.**
{{key:F}} basın və ya {{ui:Sığdır}} vurun. Sığdır modelin hər şeyini, o cümlədən işarəsini çıxardığınız mərtəbələri və binadan uzaqdakı səhv elementləri əhatə edir, buna görə bina kiçik görünə bilər. Oradan yaxınlaşdırın.

**Vurmaq heç nə seçmir.**
Vurarkən siçanı sakit tutun: kiçik sürükləmə fırladır. İşarəsi çıxarılmış mərtəbələrdəki elementlər seçilə bilməz. {{ui:Məkanlar}} açıq olanda, şəffaf məkanlar içərisindəkilərdən əvvəl seçilir.

**{{ui:Kənarlar}} düyməsi boz rəngdədir: "Kənarlar çox böyük modellər üçün söndürülüb".**
Model 1.5 milyondan çox üçbucaqdan ibarətdir. Yaddaşı qorumaq üçün kənarlar söndürülüb.

**Sekmə yavaşlayır, ağ olur və ya brauzerin çökmə səhifəsini göstərir.**
Model brauzerin sekmə üçün verdiyi yaddaş üçün çox böyükdür. Digər sekmələri bağlayın və yenidən yükləyin. Daha kiçik IFC ixrac edin: bir bina, bir fənn və ya az mərtəbə. Bax [Brauzerlər, cihazlar və yaddaş](topic:platforms).

**3D görünüş boş qalır.**
WebGL söndürülmüş və ya bloklanmış ola bilər. Brauzerin parametrlərində aparat sürətləndirməsini (və ya qrafika sürətləndirməsini) açın və brauzeri yenidən başladın.

## IFC redaktəsi

**"Rəqəm yazın."** Dəyər ədədidir. Ölçü vahidi olmadan sadə ədəd yazın, məsələn `2.4`.

**"Tam ədəd yazın."** Dəyər say və ya tam ədəddir. Onluq hissəni silin.

**"Yalnız tək dəyərli xassələr redaktə oluna bilər."** Siyahılar, sadalamalar və kəmiyyətlər yalnız oxunur.

**{{key:Mod+S}} brauzerin "Səhifəni saxla" pəncərəsini açır.**
Saxlanılmamış dəyişiklik yoxdur, buna görə BimCraft düyməni brauzerə buraxdı. Pəncərəni bağlayın.

**{{key:Mod+Z}} heç nə etmir.**
Yalnız saxlanılmamış dəyişiklik olduqda və sahəyə yazmadığınız zaman işləyir. Saxladıqdan sonra geri qaytarılacaq heç nə qalmır.

**{{ui:Dəyişikliklər}} siyahısı, onları ləğv etdikdən və çertyoj və ya qovluq açdıqdan sonra da redaktələri göstərir.**
"Onları atılsın?" sualına OK ilə cavab verib IFC modelindən başqa bir şey açdıqda, köhnə redaktələr yaddaşda qalır və {{ui:IFC kimi saxla}} onları yenə saxlayar. Həqiqətən təmiz başlamaq üçün orijinal IFC-ni yenidən açın və ya səhifəni yenidən yükləyin.

**Redaktəniz seçdiyiniz elementlərdən daha çox elementi dəyişdi.**
"(type)" işarəli dəstdə xassəni dəyişdiniz. Növ xassələri həmin növün hər elementinə tətbiq olunur. {{ui:Geri qaytar}} basın. Bax [Bir növün hər elementi üçün növ xassəsinin dəyişdirilməsi](topic:type-vs-instance).

## Çertyojlar

**"*name* oxuna bilmədi. Zədələnmiş ola bilər və ya oxuyucunun hələ idarə etmədiyi formatda saxlanılıb (…)."**
Çertyoju onu yaradan proqramdan köhnə DWG (2018 və ya daha əvvəl) və ya DXF kimi saxlayın və yenidən cəhd edin.

**"Bu çertyojda göstəriləcək heç nə yoxdur."** və ya **"*name* boş çertyojdur: heç bir xətt, mətn və ya blok yoxdur."**
Çertyoj boşdur, ya da BimCraft-ın hələ çəkmədiyi şeylər var (sağdakı **Hələ çəkilməyib** bölməsinə baxın).

**"Bu çertyoj çox böyükdür; yalnız bir hissəsi göstərilir."**
BimCraft cavabdehliyi saxlamaq üçün çəkməni dayandırdı. Lazımsız qatları söndürün və ya lazım olan vərəqləri daha kiçik çertyojdan açın.

**Vərəqin bəzi hissələri yoxdur.**
Bağlı çertyojlar çatışmır ola bilər: sağda **Bağlı çertyojlar** altına baxın. Bax [Bağlı çertyojları və şəkilləri tapın](topic:dwg-linked-files). Qatlar da söndürülmüş ola bilər: {{ui:Hamısını aç}} basın.

**Şəkil boş çərçivə kimi görünür.**
Faylı tapılmayıb, ya da TIFF-dir ("TIFF brauzerdə göstərilə bilməz"). {{ui:Şəkilləri əlavə et…}} ilə PNG və ya JPEG nüsxəsi əlavə edin.

**Trackpad-də sürüşdürmə çertyoju hərəkət etdirmək əvəzinə yaxınlaşdırır.**
Çertyojlar BimCraft-da belə işləyir. Sürüşdürmək üçün basıb sürükləyin.

## Hələ də problem var

Bax [Hələ nə qurulmayıb](topic:not-built-yet): axtardığınız şey bu quruluşda olmaya bilər.
