---
title: İstənilən formalı döşəmələr, açılışlar və pandüslər
summary: Döşəməni və ya plitəni konturu ilə çəkin (balkon, konsol, meydança), onda açılışlar kəsin və onların meydançaları ilə pandus çəkin.
keywords: döşəmə, plitə, kontur, balkon, konsol, meydança, göyərtə, döşəmə açılışı, deşik, şaxta, boşluq, pandus, meyl, əlçatan pandus, əlil arabası pandusu, 1:12, IfcRamp, IfcSlab
from: f8eabb7a
---

## Nə edəcəksiniz

Divarların xaricində olan balkon kimi, divarları izləməyən döşəmələr düzəldin və səviyyələr arasında pandus çəkin.

## Konturla döşəmə çəkin

1. {{ui:Çək}} rejimini açın, səviyyəni seçin, sonra {{ui:Versiya}} › {{ui:Kontur üzrə döşəmə}} seçin.
2. Alətlərin altındakı cərgədə növü (beton plitə və ya taxta döşəmə), təyinatını (döşəmə və ya meydança), qalınlığını və üst səthinin səviyyədən yuxarıda olma yerini seçin (0 = səviyyənin döşəməsi ilə eyni hündürlükdə; mənfi dəyər onu aşağı qoyur).
3. Küncləri klikləyin. Alət divarlara, şəbəkə xətlərinə və onların kəsişmələrinə yapışır; kənarı düz bucaqda saxlamaq üçün {{key:Shift}} basıb saxlayın. Hər kənarın uzunluğu və sahə siz hərəkət etdikcə göstərilir. {{key:Backspace}} son küncü geri alır.
4. İlk küncə yenidən klikləyin, iki dəfə klikləyin və ya {{key:Enter}} basın.

## Açılış kəsin

Döşəməyə klikləyin (3D görünüşdə və ya planda konturuna), sonra {{ui:Xassələr}} bölməsində {{ui:Açılış əlavə et}} düyməsinə klikləyin və döşəmənin içində açılışın küncləri üzərinə klikləyin, yuxarıdakı kimi bitirin. Döşəmənin {{ui:Xassələr}} bölməsi onun açılışlarını hər biri {{ui:Sil}} düyməsi ilə, və onlarsız sahəsini sadalayır.

## Pandus çəkin

1. {{ui:Versiya}} › {{ui:Pandus}} seçin. Enini təyin edin və ya pandusun **yuxarı mərtəbəyə** və ya yazdığınız **qalxma** üzrə yuxarıya getməsini seçin.
2. Necə qurulacağını seçin: **meyl ilə** (başlanğıcda 1:12; pandus qalxma tələb etdiyi qədər uzundur) və ya **uzunluq ilə** (ikinci klikləməniz uzunluğu təyin edir, meyl isə ona uyğunlaşır).
3. Pandusun ayağına (aşağı kənarının ortasına) klikləyin, sonra yuxarı istiqamətə klikləyin. Önbaxış onun uzunluğunu, qollarını və meylini göstərir.

30 inch (760 mm)-dən çox qalxma qollara bölünür, aralarında 5 fut (1525 mm) meydança olur. Bunlar ümumi planlaşdırma dəyərləridir, sizin norma deyil: tikdiyiniz yerdəki qaydaları yoxlayın. 1:12-dən dik pandus onun {{ui:Xassələr}} bölməsində qeyd olunur.

## Nəyi görməlisiniz

- Hər döşəmə, açılış və pandus bir addımdır: {{key:Mod+Z}} onu geri alır.
- Planda çəkilmiş döşəmənin konturu (açılış çarpaz çəkilir) və pandusun konturu, qolları, meydançaları və meyli olan yuxarı ox.
- Çəkilmiş döşəmənin Xassələri (növ, təyinat, qalınlıq, üst, sahə, açılışlar) və pandusun (en, üst, qalxma, meyl və ya uzunluq); {{key:Delete}} hər ikisini silir.
- Yuxarı mərtəbəyə gedən pandus, həmin səviyyənin hündürlüyü dəyişdikdə onu izləyir.
- IFC faylında: çəkilmiş döşəmə açılışları kəsilmiş plitədir (IfcSlab, döşəmə və ya meydança; açılışları IfcOpeningElement kimi kəsilir); pandus meyilli qollardan (IfcRampFlight) və meydança plitələrindən ibarət IfcRamp-dır, meyli və eni ilə.

:::note
Bu üsulla çəkilmiş döşəmələr çəkdiyiniz yerdə qalır. {{ui:Döşəmə}} ilə düzəldilmiş döşəmələr divarlar hərəkət etdikdə otaqları izləyir: bax: [Otaqlar, döşəmələr, tavanlar və damlar](topic:floors-and-roofs).
:::
