---
title: Həcm variantları yan-yana saxlanılır
summary: Eyni modeldə bir neçə həcm variantı saxlayın, birini cari variant edin, onu saytın tikinti xətləri və servitutları ilə yoxlayın, ModelCraft-dan həcm gətirin və seçilmiş variantı divar və döşəmələrə çevirin.
keywords: həcm, kütlə, variant, variantlar, variantlar dəsti, sxem, konsept, konsept dizayn, mərhələ 2, alternativlər, variantları müqayisə et, cari variant, bina kütləsi, itələ çək, modelcraft, civilcraft, ümumi döşəmə sahəsi, oturacaq, həcm, kütləni inkişaf etdir, servitut, tikinti xətti, geri çəkilmə
from: 69a01459
---

## Nə edəcəksiniz

Konseptin həcm variantlarını ayrı-ayrı fayllarda deyil, bir modeldə saxlayın: bir neçə bina kütləsi yan-yana, onlardan biri **cari variant**, digərləri müqayisə üçün saxlanılır.

Həcm variantı bina kütləsidir: hündürlüyə qaldırılmış kontur, müəyyən sayda mərtəbə ilə. Hələ divar deyil. İstədiyiniz qədər saxlaya bilərsiniz; onlar **variantlar dəstləri** şəklində qruplaşdırıla bilər (bir dəstin variantları bir-birinin alternativləridir).

## Variant saxlayın

1. {{ui:Otaq proqramından həcmə}} açın, otaq proqramını və konturu yazın və {{ui:Variantları axtar}} seçin.
2. Siyahıdakı variantlardan birini seçin.
3. {{ui:Modeldə həcm variantları}} altında istəsəniz {{ui:Variantlar dəsti}} üçün ad yazın və {{ui:Seçilmiş variantı saxla}} seçin.

Variant modeldə bina kütləsi kimi və siyahıda, mərtəbələri, oturacağı, ümumi döşəmə sahəsi və həcmi ilə görünür. Heç nə tikilmir. Başqasını da eyni üsulla saxlayın.

Dəstin ilk variantı onun cari variantıdır. Hər addım bir geri qaytarma addımıdır.

## Cari variant

Hər dəstdə bir variant cari olur. Bu iki şey deməkdir:

- **Onun mərtəbələri binanın döşəmə sahələri sayılır.** Cari variantın hər mərtəbə üçün həmin mərtəbənin ümumi sahəsini daşıyan bir sahəsi var, buna görə döşəmə sahəsini oxuyan hər şey yalnız qüvvədə olan variantı görür.
- **Sayta qarşı yoxlanılır.** Əgər sayt sərhədindən kənarda, tikinti xətti üzərində və ya servitut üzərində dursa, {{ui:Problemlər}} bölməsində onu adlandıran xəbərdarlıq görünür. Bu yalnız xəbərdarlıqdır: heç nə rədd edilmir. Cari olmayan variantlar yoxlanılmır.

Başqa variantda {{ui:Cari et}} seçin ki, cari dəyişsin.

{{ui:Cari olmayan variantları gizlət}} digərlərini 3D görünüşdə gizlədir. Bu yalnız bu brauzer üçündür və faylda saxlanılmır.

## ModelCraft-dan həcm

ModelCraft-da {{ui:İxrac}} › {{ui:Kütlələr BimCraft-a…}} hər qrupu və ya komponenti bir variant kimi göndərir. BimCraft faylı variantları siyahılanmış halda açır.

Onları artıq açıq modelə gətirmək üçün {{ui:Fayldan həcm variantları əlavə et}} seçin və `.ifc` faylını seçin. Onun kütlələri bir dəstin variantları kimi, bir geri qaytarma addımında gəlir və modelləşdirildikləri yerdə durur. CivilCraft-dan olan bina kütlələri faylı eyni qayda ilə işləyir.

"(forma sadələşdirilib)" işarəsi olan variant ModelCraft-da sadə dik blok deyildi (geri çəkilir, meyillidir və ya bağlı deyil). Burada onun kütləsi bazasının konturu hündürlüyünə qaldırılmış halıdır; onun döşəmə sahələri və həcmi birbaşa bərk cisimdən ölçülür.

## Seçilmiş variantı inkişaf etdirin

Variantda {{ui:Çevir}} seçin. O, səviyyələrə çevrilir (mərtəbə sayına qədər əlavə olunur), hər mərtəbədə konturu ətrafında divarlara və hər birinin altında döşəmə plitəsinə, bir geri qaytarma addımında. Variant siyahıdan çıxır; digər variantlar olduğu kimi qalır. Hələ dam yoxdur.

{{ui:Adı dəyiş}} variantın adını dəyişir, {{ui:Sil}} onu modeldən çıxarır. Cari variantı silmək dəstin birinci digər variantını cari edir.

## Nəyi görməlisiniz

- Saxlanılan hər variant 3D görünüşdə blok kimi və siyahıda sətir kimi.
- Hər dəstin bir variantının yanında "(cari)".
- Cari variant sayt sərhədini, tikinti xəttini və ya servitutu keçəndə {{ui:Problemlər}} bölməsində xəbərdarlıq.

## Bilmək yaxşıdır

- IFC faylında variant `CadCraft_SiteMass` xüsusiyyət dəstinə malik bina elementi proxy-sidir (onun variant dəsti, variant adı və cari olub-olmaması həmin dəstdədir). Cari variantın mərtəbələri `MassingFloor` tipli sahələrdir. Digər proqramlar proxy-ni ümumi element kimi oxuyur.
- Variant saxlamaq heç vaxt səviyyə əlavə etmir; inkişaf etdirmək isə edir.
- Köməkçi saxlanılan variantları siyahılaya, birini saxlaya, cari edə, adını dəyişə, inkişaf etdirə və ya silə bilər.
