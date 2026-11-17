---
title: Variantları olan kitabxana elementini yerləşdirin və dəyişdirin
summary: Bəzi kitabxana elementləri bir neçə ölçü və ya seçimdə gəlir. Yerləşdirməzdən əvvəl variantı seçin, yerləşdirilmiş elementin hansı olduğuna baxın, onu bir kliklə başqa variantla dəyişin və element yenilənəndə onu saxlayın.
keywords: variant, variantlar, ölçülər, seçimlər, konfiqurasiya, kitabxana, LibraryCraft, yerləşdir, dəyişdir, konfiqurator, ailə, növ, yeniləmə, portlar
from: c05f0af3
---

## Nə edəcəksiniz

Lazım olan ölçüdə və ya seçimdə element yerləşdirin və fikriniz dəyişəndə onu yenidən yerləşdirmədən dəyişin. Variantları olan element kitabxanada bir elementdir (bir ad, bir lisenziya, bir versiya) və gələ biləcəyi variantların cədvəli ilə: məsələn, Kiçik, Orta və Böyük ölçüdə montaj lövhəsi, ya da eyni lövhə deşiksiz.

## Variantı seçin və yerləşdirin

1. {{ui:Kitabxana}} nişanını açın və elementin kartına klik edin.
2. Adın altında {{ui:Variant}} seçimi hər variantı ölçüsü ilə siyahılayır. Elementin standart variantı əvvəl seçilir.
3. Birini seçin. Plan, ölçü və 3D gövdə sırası seçiminizi izləyir.
4. {{ui:Plana yerləşdir}} (ya da 3D görünüşdə {{ui:Modelə yerləşdir}}) klik edin və elementi hər digər kimi yerləşdirin. Bax: [Kitabxanadan avadanlıq və mebel yerləşdirin](topic:place-from-library).

Yerləşdirilmiş element elementin və variantın adı ilə adlandırılır, məsələn *Montaj lövhəsi — Böyük*, buna görə {{ui:Avadanlıq}} cədvəli və ağac onları fərqləndirir. Hər variant öz IFC növüdür: eyni variantı iki dəfə yerləşdirmək bir növü paylaşır, fərqli variant isə öz növünü alır.

## Yerləşdirilmiş elementin hansı variant olduğuna baxın

Elementi seçin. {{ui:Xassələr}} bölməsində **Kitabxana elementi** qutusunda **Variant** sətri var. IFC bunu `CadCraft_LibraryItem`-də saxlayır: `Variant` (variantın id-si), `VariantName` və `VariantValues` (seçim dəyərləri mətn kimi), buna görə digər proqramlar onu oxuya bilər.

## Başqa variantla dəyişin

1. Yerləşdirilmiş elementi seçin və **Kitabxana elementi** qutusunda {{ui:Elementi dəyişdir…}} klik edin. {{ui:Kitabxana}} nişanı açılır.
2. Yuxarıda **Digər variantları** *elementin adı* hər variantı ölçüsü ilə siyahılayır. Yerləşdirilmiş olan işarələnir və seçilə bilməz.
3. İstədiyiniz variantda {{ui:… ilə dəyişdir}} klik edin.

Element yerini, fırlanmasını, mərtəbəsini, element nömrəsini, miqdarını və qeydlərini saxlayır; onun növü, forması və məlumatı digər variantla dəyişir. {{key:Mod+Z}} birinci variantı geri qaytarır. Siyahının altındakı digər elementi əvvəlki kimi də seçə bilərsiniz. Bax: [Yerləşdirilmiş elementi dəyişdirin və kitabxanadan elementləri yeniləyin](topic:swap-and-update-library-items).

## Kopyalama, yapışdırma və yeniləmələr

- Yerləşdirilmiş variantın surəti eyni variantdır: bu modeldə və eyni brauzer tabında açılmış başqa modeldə, Kopyala və Yapışdır ilə.
- **Yeniləmələr** variantı saxlayır: elementin yeni versiyasında o hələ varsa, yerləşdirmə yeni versiyanın həmin variantı olur. Yeni versiyada yoxdursa, yerləşdirmə elementin standart variantını alır.

## Bilmək faydalıdır

- Yalnız bəzi kitabxana elementlərinin variantları var. Kartlar bunu göstərmir; açdığınız zaman {{ui:Variant}} seçimini görürsünüz.
- Element variantlara görə **portlar** (boru və kanal üçün birləşmə nöqtələri) siyahılaya bilər. Kitabxana nişanı variantın neçə portu olduğunu göstərir. Elementi Kitabxana nişanından yerləşdirdikdə onlar hələ IFC-yə **yazılmır**.
- 3D gövdəsi olmayan variant, hər 2D simvol kimi, əvəzedici qutu ilə yerləşdirilir.
- Seçimdəki ölçülər kitabxananın yazdığı kimi millimetrlərdədir.
