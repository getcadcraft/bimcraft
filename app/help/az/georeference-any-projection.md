---
title: İstənilən proyeksiya ilə georeferanslaşdırma
summary: BimCraft-a modelin koordinatlarının hansı xəritə sistemində olduğunu bildirin — tam EPSG siyahısından, istənilən UTM zonasından və ya özünüzün təyin etdiyiniz proyeksiyadan — və onu Yer, xəritə qatları və nöqtə buludları üçün istifadə edin.
keywords: proyeksiya, koordinat sistemi, crs, epsg, utm, utm zonası, xüsusi proyeksiya, proj4, proj sətri, prj, wkt, georeferans, georeferanslaşdırma, xəritə çevrilməsi, ifcprojectedcrs, mənim proyeksiyalarım, enlik, uzunluq, şərq koordinatı, şimal koordinatı, lambert, gauss-kruger, dövlət müstəvi koordinatları, milli şəbəkə
from: 6894c1f2
---

Bəzi planlar qısa siyahıda olmayan xəritə sistemində çəkilir: UTM zonası, milli şəbəkə və ya kimsənin mətn təsviri kimi yazdığı proyeksiya. {{ui:Ölç}} › {{ui:Koordinat sistemi…}} modelin hansını istifadə etdiyini bildirməyə imkan verir.

## Model üçün sistemi seçin

1. Modeli açın, {{ui:Ölç}} seçin, sonra {{ui:Koordinat sistemi…}}.
2. Axtarış qutusuna yazın. Bunlardan hər biri işləyir:
   - EPSG nömrəsi: `32633` və ya `EPSG:2277`;
   - UTM zonası: `UTM 33N`, `UTM 20 S`, `NAD83 UTM 15N`, `ETRS89 UTM 32N`;
   - addan sözlər: `lambert 93`, `mga zone 56`, `texas central`;
   - proyeksiya təsviri: `+proj=tmerc +lat_0=0 +lon_0=9 +k=0.9996 +x_0=500000 +y_0=0 +ellps=WGS84 +units=m` kimi, istəyə görə önündə ad ilə (`My grid = +proj=…`);
   - `.prj` faylının mətni və ya {{ui:.prj faylı yükləyin…}} seçimi.
3. Nəticəni seçin, sonra {{ui:Bu sistemi istifadə et}}.

Seçim modeldə saxlanılır (layihədə `CadCraft_CRS` adlı xassə dəsti), beləliklə model ilə birlikdə yenidən açılır. Onu saxlamaq üçün modeli saxlayın. {{ui:Modeldən çıxarın}} faylın dediyinə qayıdır.

Təsviriniz siyahıdakı EPSG sistemi ilə eyni koordinatları verirsə, BimCraft bunu deyir və həmin kodu istifadə edir; bir neçə siyahıdakı sistem eyni riyaziyyata malikdirsə, digərlərini də adlandırır.

## Mənim proyeksiyalarım

Yapışdırdığınız təsvir və ya yüklədiyiniz `.prj` {{ui:Mənim proyeksiyalarımda saxla}} ilə saxlanıla bilər. Siyahı bu cihazdadır (bu brauzerdə) və seçicini növbəti dəfə açanda təklif olunur.

## Nə istifadə edir

- {{ui:Ölç}} › {{ui:Yer}} seçilmiş nöqtəni modelin sistemi ilə enlik və uzunluğa çevirir. Fayl xəritə sistemini EPSG kodu olmadan adlandıranda bir qeydlə dayanırdı; indi seçim saxlanılıbsa, cavab verir.
- Modelin altındakı xəritə qatları eyni sistemi istifadə edir. Başqa sistemdə nöqtə buludu və ya relyef faylı modelinkini təklif olunur (aşağıya bax).
- {{ui:Parametrlər}} › {{ui:BimCraft}} › {{ui:Yer}} › {{ui:Başqa sistem seçin…}} {{ui:Yer}}-in də nəticələrində nə bildirməsini təyin edir: istənilən siyahıdakı coğrafi sistemdə enlik və uzunluq, istənilən proyeksiyalı sistemdə şərq və şimal koordinatları, modelin öz sistemi ilə yanaşı.

## Hələ xəritədə olmayan model

Faylda xəritə çevrilməsi yoxdursa, sistemi seçmək {{ui:Bu modeli xəritəyə yerləşdirin}} açır. Onu {{ui:Ölç}} › {{ui:Xəritə başlanğıcı…}} ilə də aça bilərsiniz.

1. Modelin başlanğıcını sistemdə şərq və şimal koordinatları kimi verin, ya da enlik və uzunluq yazıb {{ui:Şərq və şimal koordinatlarına çevir}} seçin.
2. Şimal şəbəkəsinə fırlanmanı (dərəcə, saat əqrəbinin əksinə; 0 modelin Y oxunun şimal şəbəkəsinə baxdığı deməkdir) və başlanğıcın hündürlüyünü verin.
3. Miqyas modelin və xəritənin vahid fərqi ilə başlayır (metr şəbəkəsində millimetr modeli üçün 0.001). Yalnız birləşdirilmiş yer-şəbəkə əmsalı üçün dəyişin.
4. {{ui:Xəritəyə yerləşdir}} seçin. Bir geri qaytarma addımı IfcProjectedCRS və IfcMapConversion (IFC4) yazır. Model özü hərəkət etmir.

IFC2X3 faylında bu varlıqların heç biri yoxdur. BimCraft eyni rəqəmləri həmin standartın icazə verdiyi üsulla yazır: layihədə buildingSMART xassə dəstləri `ePSet_MapConversion` və `ePSet_ProjectedCRS`, sahənin enlik və uzunluğu və həqiqi şimal. Dialoq bunu deyir. Onu saxlamaq üçün modeli saxlayın.

## Artıq xəritədə olan model

Fayl artıq özünü xəritəyə yerləşdirirsə və başqa sistem seçsəniz, BimCraft soruşur:

- {{ui:Yalnız Yer nəticəsini dəyişdir}} faylın öz georeferansını saxlayır və {{ui:Yer}}, xəritə qatları və nöqtə buludları üçün seçiminizi istifadə edir (modelin rəqəmləri bu halda yeni sistemdə oxunur).
- {{ui:Modeli bu sistemə köçür}} georeferansı yenidən yazır: başlanğıc proyeksiyadan keçir (şərq, şimal, hündürlük, fırlanma və miqyas) və IfcProjectedCRS (ad, datum, proyeksiya, zona, vahid) yenidən yazılır, beləliklə saxlanılmış IFC yeni sistemi göstərir. Yerin üzərindəki yer eyni qalır: başlanğıc öz enlik və uzunluğunu saxlayır. Modeldəki elementlər heç vaxt dəyişmir; yalnız georeferans dəyişir.

Dialoq seçməzdən əvvəl köhnə və yeni başlanğıcı göstərir. Oraya və geri köçürmək başlanğıcı bir millimetr dəqiqliyinə qaytarır.

## Başqa sistemdə nöqtə buludları və relyef

Bulud və ya ölçmə faylı öz sistemini (LAS, LAZ, E57, GeoTIFF) və ya heç birini daşıyır. Modelinkindən fərqləndikdə BimCraft {{ui:Modelin sisteminə yenidən proyeksiya et}} təklif edir. Nöqtələr paketlərlə köçürülür (çox olduqda fonda, beləliklə səhifə işlək qalır), kompüterinizdəki fayla toxunulmur və status sətri nəyin edildiyini deyir. Öz sisteminə qayıtmaq üçün faylı yenidən açın. Artıq açıq olan bulud üçün buludun panelindəki {{ui:Modelə yenidən proyeksiya et…}} eyni işi görür.

Fayl heç bir sistemi adlandırmırsa, BimCraft {{ui:Bu fayl hansı sistemdədir?}} soruşur: onu {{ui:Sistemi seçin…}} ilə seçin və cavab bu cihazda həmin fayl üçün yadda qalır. {{ui:Faylın öz sistemini saxla}} nöqtələri olduğu kimi saxlayır.

## Nə vaxt təxminidir

Problemlər dialoqda və Problemlər panelində sadalanır, heç vaxt səssiz deyil:

- Sistemin üçün nəzərdə tutulduğu ərazidən kənar yer: rəqəmlər işləyir, lakin təhrif artır.
- Şəbəkə faylı tələb edən datum sürüşmələri (NADCON, NTv2 və oxşarları) mövcud deyil. Başqa datumdakı sistemlər EPSG reyestrinin siyahıya aldığı şəbəkəsiz sürüşmə ilə köçürülür və nəticə bildirilmiş dəqiqliyə yaxındır; mesajda bu metrlərlə verilir.
- Proyeksiya edilə bilməyən nöqtə buraxılır və sayılır; ölçü həddini aşan fayl həddi bildirilməklə rədd olunur.

:::tip
Xəritə koordinatları xəritə çevrilməsi tələb edir. Onu olmayan fayl {{ui:Xəritə başlanğıcı…}} ilə xəritəyə yerləşdirilir.
:::

:::note
Şəbəkə faylı olmadan datumlar arasında keçid bir neçə metrə qədər dəqiqdir; Yer nəticəsi kataloq bildikdə nə qədər olduğunu deyir.
:::
