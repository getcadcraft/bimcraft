---
title: Təsnifat kodları (Uniclass, OmniClass, UniFormat)
summary: Hər elementə və tipə təsnifat kodu verin, layihənin hansı sistemlərdən istifadə etdiyini seçin, tətbiqlə gələn Uniclass cədvəllərində axtarın, ofisinizin öz lisenziyalı cədvəllərini yükləyin və kodları cədvəllərdə göstərin. Kodlar digər proqramlar üçün IFC faylına yazılır.
keywords: təsnifat, təsnifatlaşdırma, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, cədvəl, element kodu, tip kodu, defolt kod, IfcClassification, IfcClassificationReference, cobie, cədvəl sütunu, csv, lisenziya
from: 222b94cd
---

## Nə edəcəksiniz

Modeldəki divarlara, döşəmələrə, damlara, qapılara, pəncərələrə və hər digər elementə təsnifat kodu verin, üç sistemdə — Uniclass, OmniClass və UniFormat — yanaşı. Digər ixtisaslar və proqram təminatı kodu addan çox kodun özünə görə istifadə edir, buna görə kodlar IFC faylında istənilən BIM proqramının oxuduğu təsnifat istinadları kimi saxlanılır.

## Elementə kod verin

1. Bir (və ya bir neçə) element seçin və **Xassələr**i açın. {{ui:Təsnifat}} bölməsini açın.
2. Sistemin qutusuna kodu yazın və Enter basın. Kod siyahısı yüklənibsə, kodun bir hissəsini və ya bir neçə sözü ("pərdə divarı") yazın və uyğunluqlardan seçin: kodun başlığı sizin üçün doldurulur.
3. {{ui:Tətbiq olunur}} kodun hara getdiyini göstərir: **Bu element**, ya da **Onun tipi (tipin hər elementi)**. Divar tipində olan kod həmin tipdəki hər divar tərəfindən oxunur, o cümlədən sonra çəkdiyiniz divarlar.
4. {{ui:Təmizlə}} kodu götürür.

Hər kodun altında bölmə onun haradan gəldiyini göstərir: bu elementə təyin olunub, tipindən gəlir və ya sinfinə görə layihə defoltudur. Elementin öz kodu həmişə tipinkindən, tipinki isə defoltdan üstündür. Bir neçə element seçildikdə "dəyişir" yazan qutu onların eyni kodu paylaşmadığını bildirir; birinə kod yazsanız, hamısına verilir. Hər dəyişiklik bir geri qaytarma addımıdır.

Kod həmişə yazıla bilər, siyahı yüklənibmi ya yox. Əgər kod həmin sistemin koduna oxşamırsa və ya yüklənmiş siyahıda yoxdursa, məsləhət bunu bildirir və kod yazdığınız kimi saxlanılır.

## Layihənin sistemlərini seçin

**Məlumat** bölməsini açın və {{ui:Təsnifat}} seçin (ya da Xassələr bölməsində {{ui:Layihə təsnifatı…}}).

- Layihənin istifadə etdiyi sistemləri qeyd edin. Xassələr yalnız onları göstərir.
- **Uniclass**: Elementlər/funksiyalar (EF), Sistemlər (Ss) və Məhsullar (Pr) cədvəlləri tətbiqlə birlikdə gəlir. Onlar © NBS-dir, Creative Commons Attribution-NoDerivatives 4.0 altında lisenziyalıdır və dəyişdirilmədən ötürülür. Dialoq hər cədvəlin buraxılışını və oxunduğu günü göstərir. Onlar ən yeni cədvəllər deyil: nəşriyyat hər rüb yenilərini öz saytında buraxır.
- **OmniClass** və **UniFormat**: tətbiqlə heç bir kod siyahısı gəlmir, çünki nəşriyyatları cədvəlləri lisenziyasız ötürməyə icazə vermir. İstənilən kodu yazın və ya ofisinizin öz lisenziyalı cədvəlini yükləyin.
- {{ui:Cədvəl yüklə (CSV)…}} ofisinizin öz cədvəlini kod sütunu və başlıq sütunu olan CSV faylından oxuyur (başlıq sırası Code, Number və ya Identifier, və Title, Name və ya Description adlanırsa, avtomatik tapılır; onsuz ilk iki sütun istifadə olunur). Cədvəl bu brauzerdə qalır və heç vaxt layihə faylına qoyulmur. Faylda yalnız təyin etdiyiniz kodlar saxlanılır. Daha yeni Uniclass cədvəlini də eyni yolla yükləyə bilərsiniz.
- {{ui:Elementlərə sinfinə görə defolt kod verin}} hər divara, döşəməyə, dama, qapıya, pəncərəyə, pilləkənə, rampaya, sütuna, tirə və mebel parçasına, öz kodu yoxdursa, Elementlər/funksiyalar cədvəlindən Uniclass başlanğıc kodu verir. Bundan sonra çəkdiyiniz elementlər də onu alır.
- {{ui:Kodları cədvəllərdə sütun kimi göstər}} Qapılar, Pəncərələr, Tipə görə divarlar və Otaqlar cədvəllərinə və onların CSV-sinə hər sistem üçün bir sütun əlavə edir. Bir neçə elementin olduğu sətirdə kodlar fərqli olduqda "dəyişir" göstərilir.

## Yaxşı bilmək lazımdır

- Defolt kodlar CadCraft-ın öz başlanğıc seçimidir, nəşriyyatın deyil, və peşəkar mütəxəssis tərəfindən yoxlanılmayıb. Onları layihənizin standartı ilə yoxlayın.
- Faylda defolt "CadCraft default" əlaqə adı ilə işarələnmiş real təsnifatdır və element və ya tipi öz kodunu aldığı anda çıxır.
- Artıq idxal olunmuş faylda olan kodlar oxunur və göstərilir, digər proqramın sistemin adını necə yazmasından asılı olmayaraq. Hər hansı başqa sistemin kodları (ofisin öz kodları) siyahıya salınır və toxunulmur.
- Kodlar faylı yenidən açanda, burada və ya başqa proqramda oxunur. Onlar, o laboratoriya seçimi açıq olduqda, IFC5 alfa (IFCX) ixracına da daşınır, yalnız damda təyin olunmuş kod istisna olmaqla.
- Hələ hazırlanmayıb: cədvəli səviyyə-səviyyə gəzmək üçün ağac, səviyyə və otaqlarda layihə defoltu kimi kodlar və faylda adı çəkilən buraxılışa qarşı kodu yoxlamaq.
