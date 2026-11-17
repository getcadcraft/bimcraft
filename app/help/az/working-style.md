---
title: İş üslubu, surəti çıxarılmış görünüşlər, kağızda qələmlər, Belə hesabat ver və şablonlar
summary: BimCraft-ın iş tərzinizə uyğun necə davranmasını seçin, istənilən görünüşün surətini öz surəti və ya bağlı kimi çıxarın, qələm dəyişikliklərini faylda saxlayın, ekranda göründüyü kimi və ya qələm cədvəli ilə çap edin, elementi başqa IFC sinfi kimi hesabat verin və layihələri öz şablonlarınızdan başladın.
keywords: iş üslubu, görünüşün surəti, surət, görünüşü kopyala, asılı görünüş, bağlı görünüş, öz surəti, görünüş surəti, qələm dəyişiklikləri, qələmlər, xətt qalınlığı, göründüyü kimi çap, qələm cədvəli, plot style, ctb, monoxrom, boz tonlar, belə hesabat ver, ifc sinfi, yenidən sinifləndir, əvvəlcədən təyin olunmuş tip, ümumi model, plitəni yol kimi, divarı panel kimi, damı rampa kimi, layihə şablonu, şablon, şablondan yeni, şablon kimi saxla, ofis standartı
from: 231d98b0
---

## Nə edəcəksiniz

BimCraft-ı iş tərzinizə uyğun quraşdırın, görünüşlərin surətini çıxarın, onları gözlədiyiniz kimi çap edin, elementləri nə olduqları kimi sayın və hər layihəyə ofisinizin şablonundan başlayın.

## İş üslubu seçin

1. {{ui:Parametrlər}} açın və {{ui:BimCraft}} sekmesini açın. {{ui:İş üslubu}} tapın.
2. Birini seçin:
   - {{ui:Hər görünüş öz parametrində}} (ilk seçim): surəti çıxarılmış görünüş öz annotasiyalarını kopyalayır və onlar həmin görünüşün olaraq qalır; vərəqlər ekranda göründüyü kimi çap olunur.
   - {{ui:Ümumi qeydlər və qələm cədvəlləri}}: surəti çıxarılmış görünüşlər annotasiyaları paylaşır; çap qələm cədvəli ilə aparılır.
3. Seçimin altında onun təyin etdiyi dörd şey var. Onlardan birini ayrıca dəyişdirin; onda üslub {{ui:Fərdi}} kimi oxunur.

İş üslubu bu brauzerdə saxlanılır, iş sahəsinin tərtibatı kimi. Şablon onu yeni modellərə daşıyır.

## Görünüşün surətini çıxarın

1. {{ui:Layihə brauzeri}}-ndə hər mərtəbə planının, tavan planının, çağırış nişanının, fasadın və kəsiyin {{ui:Surət çıxar}} düyməsi var (iki vərəq).
2. Surətə ad verin və necə davranacağını seçin:
   - {{ui:Öz surəti}}: onun rəsmləri, ölçüləri, kəsimi, gizlədilmiş elementləri və qələmləri kopyalanır və öz surəti olaraq qalır. Hər iki görünüşün redaktəsi digərini heç vaxt dəyişmir, ona görə buraxılmış vərəqdəki görünüş olduğu kimi qalır.
   - {{ui:Bağlıdır}}: eyni görünüşü bir annotasiya və parametrlər dəsti ilə göstərir.
3. Surət {{ui:Surəti çıxarılmış görünüşlər}} altında siyahıya düşür. Onu açmaq üçün klikləyin; planın üstündəki zolaq onun surət olduğunu göstərir, {{ui:Yuxarı}} ilə öz görünüşünə geri qayıdırsınız.
4. Onun sürgü düyməsi parametrlərini açır: ad, {{ui:Baxış diapazonu}} (öz surətin öz diapazonu var), bağlı surət üçün {{ui:Öz surətinə çevir}} və {{ui:Sil}}.

Fasadların və kəsiklərin surətləri, hansı görünüşdən gəlirsə, öz vərəqlərinizdə həmin görünüşlər kimi yerləşir. Surət çıxarmaq bir geri qaytarma addımıdır və surətlər IFC-də çağırış nişanları ilə birlikdə saxlanılır.

## Qələmlər görünüşlə saxlanılır və göründüyü kimi çap olunur

1. {{ui:Çək}} rejimini aktiv edin və {{ui:Qələmlər}} seçin.
2. {{ui:Üçün}} indi hər kateqoriyanı siyahılayır: divarlar, qapılar və pəncərələr, döşəmələr, damlar, sütunlar, pilləkənlər, mebel və qalanları, həmçinin çertyoj və ölçülər.
3. {{ui:Tətbiq et}} qələmi göstərilən görünüşlə birlikdə IFC-də saxlayır: plan, tavan planı, çağırış nişanı və ya surəti çıxarılmış görünüş. 0.9-dan əvvəl yaradılmış qələmlər brauzerdə saxlanılırdı; {{ui:Bunları faylda saxla}} onları fayla köçürür.
4. Vərəqlər və PDF hər qələmi ekranda göründüyü kimi çəkir.

Bunun əvəzinə qələm cədvəli ilə çap etmək üçün, Qələmlər sətirində {{ui:Çap}} seçimini {{ui:Qələm cədvəli ilə}} təyin edin, sonra cədvəl seçin (rəng, monoxrom, boz tonlar) və ya {{ui:Qələm cədvəlini redaktə et…}}: hər rəng çap olunacağı rəngi, qalınlığı və ştrixləməni alır. Cədvəl CadCraft-ın plot style faylıdır, ona görə {{ui:İdxal et…}} CadCraft tətbiqində hazırlanmış cədvəli qəbul edir və {{ui:İxrac}} onu geri verir. Model öz seçimini saxlayır; seçim yoxdursa, iş üslubu qərar verir.

## Elementi başqa sinif kimi hesabat verin

Planla çəkilmiş plitə yol kimi, divar panel kimi istifadə olunan, rampa formalı dam: çəkdiyiniz alətini saxlayın və onu nə olduğu kimi hesabat verin.

1. Elementi seçin və {{ui:Xassələr}} açın. {{ui:Belə hesabat ver}} açın.
2. Formaya uyğun sinfi tapmaq üçün axtarış qutusuna yazın, onu və onun əvvəlcədən təyin olunmuş tipini seçin. Öz tipiniz üçün USERDEFINED seçin və ona ad verin.
3. {{ui:Tətbiq et}} (bir geri qaytarma addımı). {{ui:Təmizlə}} onu yenidən çəkildiyi kimi hesabat verir.

Onu hələ də çəkildiyi alətlə redaktə edirsiniz. Saxlanmış IFC onu hesabat verilən sinif kimi yazır, ona görə digər proqramlar, {{ui:Miqdarlar}} hesablaması, Tap, Rəngə görə, model yoxlamaları və {{ui:Problemlər}} onu həmin sinif kimi sayır. Cədvəllər panel kimi hesabat verilən divarı divar cədvəlindən çıxarır və {{ui:Elementlər hesabat sinfinə görə}} hər birini siyahılayır. IFC4 və IFC2X3 fayllarında işləyir; siyahıda yalnız faylın IFC versiyasına aid siniflər təklif olunur. Qapılar, pəncərələr, pilləkənlər, otaqlar və səviyyələr öz sinfini saxlayır.

## Layihəni şablon kimi saxlayın və ondan başlayın

1. Açıq layihədə {{ui:Saxla}} yanındakı {{ui:Şablon kimi saxla}} düyməsinə klikləyin.
2. Ad verin. Onu IFC faylı kimi paylaşmaq üçün Şablon faylını da endir işarələyin, və onu standart etmək üçün {{ui:Yeni modelləri ondan başla}} işarələyin.
3. Şablon səviyyələri, görünüş şablonlarını və görünüş parametrlərini, surəti çıxarılmış görünüşləri və çağırış nişanlarını, rəsmləri, qələmləri və qələm cədvəlini, teqləri, ailələri və tipləri, vərəqləri, vərəq ölçülərini, başlıq bloklarını və iş üslubunu saxlayır. Divarlar, döşəmələr, qapılar və bütün digər model elementləri kənarda qalır.
4. {{ui:Yeni bina}} klikləyin və {{ui:Başlanğıc}} altında onu seçin, və ya sizə göndərilmiş fayl üçün {{ui:Şablon faylı…}} seçin. Yeni layihə öz adını və öz layihə kimliyini alır; qalan hər şey şablonda olduğu kimidir.

:::note
Şablonlar bu brauzerdə saxlanılır. CadCraft Studio ilə paylaşılan komanda şablonları hələ hazır deyil: onun əvəzinə şablon faylını göndərin.
:::
