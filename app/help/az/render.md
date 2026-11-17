---
title: Modelin şəklini vizuallaşdırmaq
summary: 3D baxışın gün işığına bənzər şəklini çəkin: səma, saytın enliyinə görə günəş, yumşaq kölgələr, şüşə pəncərələr; WebGPU ilə qrafik kartında yol izləmə, səmalar, kamera, işıq qarışdırması, rəng düzəlişi, duman və vizuallaşdırma növbəsi.
keywords: vizuallaşdırma, hazır quraşdırma, səhnə hazır quraşdırması, interyer, eksterer, kəsik görünüşü, gecə, bir klik, vizuallaşdırma, yol izləmə, şüa izləmə, qlobal işıqlandırma, əks olunmalar, sınma, yüksək keyfiyyət, foto, fotorealist, realistik, şəkil, image, png, statik, səma, günəş, gün işığı, kölgələr, yumşaq kölgələr, ətraf okklüziya, şüşə, pəncərələr, metal, materiallar, ekspozisiya, parlaqlıq, buludlu, alatoranlıq, studiya, təqdimat, webgpu, denoise, fiziki səma, hdri, ies, sahənin dərinliyi, panorama, ağ balans, işıq qarışdırması, render elementləri, exr, 16 bit png, duman, kaustika, vizuallaşdırma növbəsi
from: beb74cc7
---

Alətlər panelindəki {{ui:Vizuallaşdırma}} 3D baxışın gün işığına bənzər şəklini çəkir: səma, saytın enliyinin günəşi harada qoyursa orada günəş, yumşaq kölgələr, bütün səmadan gələn və küncləri qaraldan işıq, və şüşəyə və ya metala bənzəyə bilən rənglər. Model və fayl dəyişdirilmir.

## Baxışı vizuallaşdırın

1. 3D baxışı şəklin necə olmasını istədiyiniz kimi qurun: fırladın və miqyası dəyişin, istəmədiyiniz mərtəbələri və elementləri gizlədin və şəkildə kəsik görünməlidirsə [kəsik](topic:section-plane) təyin edin.
2. Alətlər panelindəki {{ui:Vizuallaşdırma}} düyməsini basın.
3. Basılmış {{ui:Səhnə}} istədiyiniz deyilsə, {{ui:Səhnə}} seçin (bax [Səhnə hazır quraşdırmaları](topic:render#scene-presets-a-good-picture-in-one-click)), {{ui:Ölçü}} seçin, sonra dialoqda {{ui:Vizuallaşdırma}} düyməsini basın.

   Şəkil çəkildikcə dolur və hər keçiddə hamarlaşır. {{ui:Dayandır}} (və ya {{key:Esc}}) onu vaxtından əvvəl dayandırır və o ana qədər olan şəkli saxlayır.

4. PNG kimi endirmək üçün {{ui:Saxla}} düyməsini basın, və ya başqa format üçün {{ui:Fərqli saxla}} (bax [Şəkli saxlamaq](topic:render#save-the-picture)). Ad modelin faylının adı ilə verilir.

:::tip
Kameranı yoxlamaq üçün {{ui:Baxışın ölçüsü}} ölçüsündə {{ui:Qaralama}} ilə başlayın, sonra son şəkil üçün böyük ölçüdə {{ui:Yaxşı}} və ya {{ui:Ən yaxşı}} vizuallaşdırın.
:::

## Səhnə hazır quraşdırmaları: bir kliklə yaxşı şəkil

Dialoqun yuxarısında dörd {{ui:Səhnə}} düyməsi var. Hər biri səmanı, parlaqlığı, zəminini, kənar xətləri, keyfiyyəti və günəşi bir klikdə təyin edir, buna görə ilk şəkildən əvvəl öyrənmək üçün heç nə yoxdur. Birini basın, sonra {{ui:Vizuallaşdırma}}.

| Səhnə | Nəyi təyin edir | Nə üçün istifadə olunur |
|---|---|---|
| {{ui:Xarici}} | Açıq səma, modelin öz günəşi, zəmin aktiv | Binanın xaricdən görünüşü |
| {{ui:Daxili}} | Buludlu səma (bərabər işıq, sərt günəş ləkəsi yoxdur), yarım pillə daha parlaq | Otağın içərisindən baxış |
| {{ui:Kəsik görünüşü}} | Ağ studiya, zəmin yoxdur, sürətli vizuallaşdırmada kənar xətlər | Kəsik ilə kəsilmiş model |
| {{ui:Gecə}} | Günəş batıb (saytın yarımkürəsi üçün qış ortası, gecə yarısı), bir pillə daha parlaq | Modeli işıqlandıran lampalar. Lampa yoxdursa şəkil qaranlıq olur |

- {{ui:Bu görünüş üçün seçin}} sizin üçün seçir: kəsik aktivdirsə {{ui:Kəsik görünüşü}}, kamera modelin içindədirsə {{ui:Daxili}}, əks halda {{ui:Xarici}}. Dialoqu ilk dəfə açdıqda o, özü belə başlayır.
- Hər parametr aşağıda qalır və dəyişdirilə bilər. Birini dəyişdirən kimi səhnənin təyin etdiyi düymə artıq basılmış qalmır və düymələrin altındakı sətir parametrlərin sizin öz parametrləriniz olduğunu göstərir. Dəyərləri geri qaytarmaq üçün səhnəni yenidən basın.
- Səhnə mühərrikə, {{ui:Forma}}ya, ölçüyə, materiallara, kameraya və ya lampalara toxunmur.

:::note
Səhnələr ModelCraft və BimCraft-da eyni dəyərləri verir. Hazır şəklin necə göründüyü modelinizdən və qrafik kartınızdan asılıdır.
:::

## Şəkildə nə göstərilir

3D baxışda bərk göstərilənlər şəkildə olur: gizli və şəffaf elementlər, gizli mərtəbələr və gizli modellər çıxarılır, otaqlar yalnız {{ui:Məkanlar}} aktiv olduqda göstərilir. Kəsik müstəvisi və ya kəsik qutusu şəkli baxışda olduğu kimi kəsir. Elementlər öz rənglərində göstərilir: xassəyə görə rənglənmə ({{ui:Rəng}} sekmesi) istifadə olunmur.

## Parametrlər

| Parametr | Nə edir |
|---|---|
| {{ui:Ölçü}} | Baxışın ölçüsü, baxışın ölçüsünün iki qatı, Full HD, 4K və ya kvadrat |
| {{ui:Forma}} | {{ui:Sürətli}}, ya da aşağıda {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} və onun {{ui:Vaxt limiti}} |
| {{ui:Keyfiyyət}} | Orta hesabla neçə keçid (yüksək keyfiyyətdə isə nümunə) götürülür: {{ui:Qaralama}} 16, {{ui:Yaxşı}} 64, {{ui:Ən yaxşı}} 256. Daha çox keçid kölgələri və kənarları daha hamar edir, lakin daha uzun çəkir |
| {{ui:Səma}} | {{ui:Açıq səma}}, {{ui:Buludlu}}, {{ui:Alatoranlıq}} və ya {{ui:Ağ studiya}} (sadə ağ fon) |
| {{ui:Günəş}} | İyunun 21-i, saat 15:00, faylın saytı üçün verdiyi enlikdə (IfcSite), modelin əsl şimalına çevrilmiş. Başqa vaxt üçün {{ui:Bu şəkil üçün başqa tarix və vaxt seçin}} qutusunu işarələyin |
| {{ui:Parlaqlıq}} | Addımlarla daha açıq və ya tünd (pillə) |
| {{ui:Modelin altındakı zəmin}} | Modelin ən aşağı nöqtəsində zəmin; kölgələri qəbul edir və üfüqdə yox olur |
| {{ui:Kənarları çək}} | Elementlərin kənarlarını şəklin üzərində incə çəkir |

Seçilmiş vaxtda günəş üfüqdən aşağıdadırsa gecədir: səma qaralır və modelin lampaları onu işıqlandırır.

## Lampalar

Modeldəki hər işıq qurğusu şəkildə lampadır: IFC faylındakı qurğular (IfcLightFixture, və ya işıq qurğusu kimi tipləşdirilmiş element), kitabxanadan yerləşdirdiyiniz qurğular da daxil olmaqla. Hər biri qurğunun bir az altından aşağı işıq saçır. Fayl qurğunun gücünü (vatt) verdikdə parlaqlığı ondan çıxarılır; əks halda 800 lümen, isti ağ rəng olur.

Dialoq {{ui:Lampalar}} altında lampaları siyahı şəklində göstərir: birini söndürmək üçün işarəni silin və ya onun parlaqlığını lümenlə yazın. Bu dəyişikliklər IFC-də saxlanılır (qurğunun `CadCraft_Light` xassə dəsti, burada Xüsusiyyətlər bölməsində də dəyişdirə bilərsiniz), və {{key:Ctrl+Z}} onları geri qaytarır.

Fayl saytın harada olduğunu demirsə, günəş 40° şimal enliyində yerləşdirilir və dialoq bunu deyir. Vaxt saytın saat vaxtıdır, uzunluğuna görə hesablanır, buna görə saatların fərqli qurulduğu yerdə bir saat səhv ola bilər.

Bu parametrlər növbəti şəkil üçün bu brauzerdə saxlanılır. Onlar IFC faylında saxlanılmır.

## Şüşə və digər materiallar

{{ui:Materiallar}} altında ekranda hər rəngin görünüşü var: {{ui:Matt}}, {{ui:Atlas}}, {{ui:Parlaq}}, {{ui:Metal}}, {{ui:Cilalı metal}}, {{ui:Şüşə}} və ya {{ui:Buzlu şüşə}}. IFC faylının şəffaf etdiyi rənglər (məsələn, pəncərə şüşələməsi) {{ui:Şüşə}} kimi başlayır.

:::note
{{ui:Sürətli}} formasında şüşə və metal modelin qalan hissəsini deyil, səmanı əks etdirir və işıq şüşədən əyilmir. Aşağıdakı {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} forması bunların hər ikisini edir.
:::

## Yüksək keyfiyyət

Kameranın gördüyü kimi işığı izləyən şəkil üçün {{ui:Forma}} › {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} seçin:

- işıq səthlər arasında əks olunur, buna görə pəncərədən və ya lampadan işıqlanan otaq hər tərəfdən işıqlanır və rənglər qonşularına keçir;
- şüşə həqiqi şüşədir: işıq onun içindən əyilir və model onda əks olunur;
- metal və cilalı səthlər modelin qalan hissəsini əks etdirir;
- işıq panelləri panel kimi işıqlandırır, yumşaq kölgələrlə.

Bu, {{ui:Sürətli}}-dən xeyli yavaşdır: hər keçiddə hər pikselin işığı yenidən izlənir. Şəkil dənəli başlayır və nümunələr toplandıqca təmizlənir, buna görə kiçikdən başlayın ({{ui:Baxışın ölçüsü}}, {{ui:Qaralama}}) və {{ui:Vaxt limiti}} seçin: vaxt bitəndə o ana qədərki şəkil saxlanılır. {{ui:Dayandır}} də onu saxlayır. İlk keçid brauzer yol izləyicisini hazırlayarkən gözləyir.

Brauzerdə WebGPU olduqda yol izləyici CadCraft-ın öz yol izləyicisidir və qrafik kartında işləyir; şəklin altındakı sətir bunu deyir. {{ui:Dayandır}} və ya vaxt limitindən sonra {{ui:Davam et}} eyni şəkillə bütün nümunələri alana qədər davam edir; parametri dəyişmək və ya yenidən {{ui:Vizuallaşdırma}} basmaq təzədən başlayır. WebGPU olmadan şəkil əvəzinə WebGL ilə yol izlənir (sətir bunu deyir) və {{ui:Davam et}} təklif olunmur.

:::linux
Linux-da Firefox və əksər Chrome quraşdırmalarında hələ WebGPU yoxdur, buna görə yüksək keyfiyyət orada WebGL istifadə edir.
:::

Bu formada kənarlar çəkilmir, teksturalar öz rəngini və pürüzlülüyünü göstərir, lakin qabarıqlığını göstərmir, və şəkil başlamazdan əvvəl modelə kəsik edilir.

{{ui:Denoise (nümunələrdən sonra qalan dənəciyi təmizləyir)}} standart olaraq aktivdir: şəkil bitdikdə və ya dayandırıldıqda qalan dənəcikləri bu iş üçün hazırlanmış neyron şəbəkəsi təmizləyir (Intel Open Image Denoise-un dərc olunmuş şəbəkəsi, öz kompüterinizdə işləyir: qrafik kartında, əks halda prosessorda). {{ui:Göstər}} › {{ui:Denoise-dən əvvəl şəkil}} onu vizuallaşdırıldığı kimi göstərir.

## Qrafik kartında səmalar və işıq profilləri

WebGPU ilə yüksək keyfiyyətdə daha iki səma var:

- {{ui:Fiziki səma}} gün işığını günəşin hündürlüyünə görə hesablayır: başın üstündə dərin mavi, üfüqdə solğun zolaq və günəş alçaldıqca daha isti və zəif olur. {{ui:Dumanlılıq}} çox aydın gündən (2) dumanlı günə (10) qədər dəyişir.
- {{ui:Səma şəkli (HDRI)}} modeli real yerin panorama şəkli ilə işıqlandırır. {{ui:Şəkil seçin…}} ekvirektanqulyar `.hdr` və ya `.exr` faylını qəbul edir; {{ui:Döndər}} onu modelin ətrafında döndərir və {{ui:Şəklin parlaqlığı}} onu daha parlaq və ya tünd edir. Şəkil öz günəşini daşıyır, buna görə modelin günəşi əlavə edilmir. Yalnız səhifə açıq olduqda saxlanılır: yenidən açdıqdan sonra onu yenidən seçin.

{{ui:Lampalar}} siyahısındakı hər lampa istehsalçının işıq profilini ala bilər: {{ui:IES profili…}} IES (LM-63) faylını oxuyur və lampa işığını o qurğunun işıq saçdığı kimi saçır (dar aşağı işıq, divar yuyucu). Həmin adlı hər lampa ondan istifadə edir və lampa öz parlaqlığını saxlayır. İstifadəni dayandırmaq üçün profilin adına basın.

Şəffaf şüşəli pəncərələr səmanın işığının otağa daxil olmasına kömək edir.

{{ui:Sürətli}} forması və WebGL yol izləyicisi {{ui:Fiziki səma}} və {{ui:Səma şəkli (HDRI)}} açıq səma kimi göstərir və işıq profillərini nəzərə almır.

## Kamera

{{ui:Kamera}} şəkli fotoşəkil kimi quraşdırır:

- {{ui:Açıqlıq}}: {{ui:Parlaqlıq sürgüsü}} saxlayın, və ya {{ui:Kamera parametrləri}} seçin və kameradakı kimi {{ui:Diafraqma (f-stop)}}, {{ui:Çəkilmə sürəti}} və {{ui:ISO}} təyin edin; onların yanındakı EV adi ekspozisiya dəyəridir. Günəşli gün üçün f/16, 1/100 s və ISO 100 uyğun gəlir; daha qaranlıq səhnə daha geniş diafraqma, daha yavaş çəkilmə və ya daha yüksək ISO tələb edir. Bu, hər formada işləyir.
- {{ui:Sahənin dərinliyi}} {{ui:Fokus məsafəsi (m)}} ilə müqayisədə daha yaxın və ya uzaq olanı, həmin f-stop obyektivinin edəcəyi kimi bulandırır (baxışın ortasındakı şeyə fokuslanmaq üçün boş buraxın); {{ui:Diafraqma forması}} fokusdan kənar parlaqlıqlara dairəvi və ya lövhəli forma verir.
- {{ui:İki nöqtəli perspektiv (şaquli xətlər şaquli qalır)}} kameranı səviyyələndirir və şəkli, memarlıq tilt-shift obyektivinin etdiyi kimi, sürüşdürür, buna görə binaya yuxarı və ya aşağı baxanda divarlar əyilmir.
- {{ui:Ağ balans}} hansı işıq rənginin ağ kimi göstərilməsini təyin edir: isti lampa işığı üçün aşağı (məsələn, 3000 K), kölgə və buludlu günlər üçün yüksək.
- {{ui:Proyeksiya}}: {{ui:360° panorama}} panorama baxıcılar üçün kameranın ətrafındakı hər şəkilin 2:1 şəklini yaradır; {{ui:360° stereo panorama}} qulaqlıqlar üçün sol-göz və sağ-göz panoramalarını üst-üstə qoyur; {{ui:Kub xəritəsi (6 üz)}} 3 × 2 şəbəkədə altı kvadrat baxış yaradır. En {{ui:Ölçü}} parametrindən götürülür.

Proyeksiya, sahənin dərinliyi, iki nöqtəli perspektiv və ağ balans qrafik kartında yol izləyici (WebGPU) tələb edir, buna görə onlar yalnız {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} formasında göstərilir.

## Şəkli tamamlayın

{{ui:Şəkil}} yüksək keyfiyyətli şəkli fotoşəkil kimi rəng düzəlişi ilə tənzimləyir, və hər idarəetmə bitmiş şəkli dərhal dəyişdirir, yenidən vizuallaşdırmadan:

- {{ui:Görünüş (baxış çevrilməsi)}}: {{ui:ACES filmic}} (şəkil əvvəlki kimi), {{ui:AgX}} (daha yumşaq, çox parlaq işıqda rəngi saxlayır), {{ui:Filmic}} (yumşaq film əyrisi) və ya {{ui:Standart}} (sadə, çox parlaq işıq ağa qədər kəsilir).
- {{ui:Kontrast}} və {{ui:İşıqlı hissələrin sıxılması}} (çox parlaq hissələrdə detalı geri qaytarır).
- {{ui:Bloom}} (parlaq işığın ətrafında yumşaq parıltı), öz {{ui:Parıltı zolaqları}} ilə {{ui:Parıltı}} (ən parlaq nöqtələrdən ulduz şüaları) və {{ui:Vinyetləmə}} (tünd küncləri).
- {{ui:Rəng cədvəli (.cube)…}} `.cube` faylından rəng düzəlişi tətbiq edir, öz {{ui:Rəng cədvəlinin gücü}} ilə; səma şəkli kimi yalnız səhifə açıq olduqda saxlanılır.

## Şəkli saxlamaq

{{ui:Fərqli saxla}} {{ui:Saxla}} yanında faylı seçir: paylaşım üçün {{ui:PNG}}, {{ui:JPEG}} və ya {{ui:WebP}} (JPEG və WebP yalnız brauzerin yaza bildiyi yerdə), və qrafik kartında yüksək keyfiyyətli vizuallaşdırmadan sonra həmçinin:

- {{ui:PNG, 16 bit}}: çap və ya sonrakı redaktə üçün kölgələr arasında daha incə addımlarla rəng düzəlişi olmuş şəkil.
- {{ui:EXR, hər qat (32-bit float)}}: vizuallaşdırıldığı kimi şəkil (xətti işıq, düzəliş yoxdur), hər vizuallaşdırma elementi və işıq qrupu öz qatı ilə, kompozit proqramları üçün.
- {{ui:Render faylı (.ccrender, sonra yenidən işləmək üçün)}}: dialoqun şəkli yenidən qarışdırmaq və düzəltmək üçün lazım olan hər şey. {{ui:Render faylı açın…}} onu öz qarışığı və düzəlişi ilə, vizuallaşdırma etmədən geri gətirir.

## Vizuallaşdırmadan sonra işıqları qarışdırın

{{ui:İşıq qarışdırması (render-dən sonra hər işığın rəngini və parlaqlığını dəyişin)}} seçimini {{ui:Vizuallaşdırma}} basmazdan əvvəl aktiv edin. Şəkil bitdikdə (və ya dayandırıldıqda) {{ui:Şəkli qarışdır}} onun işıqlarını qruplar şəklində siyahıya salır: səma, günəş və lampalar adına görə (eyni adlı hər lampa bir qrupdur). Qrupu söndürün, ona rəng verin və ya daha parlaq və ya tünd edin; şəkil dərhal dəyişir, yenidən vizuallaşdırmadan. {{ui:Qarışığı saxla}} qarışığı sonra seçmək üçün ad altında saxlayır; {{ui:Render olunduğu kimi}} şəkli çəkildiyi kimi geri qaytarır. {{ui:Saxla}} qarışdırılmış şəkli saxlayır.

{{ui:Render elementləri (albedo, normallar, dərinlik, diffuse, specular, transmission, emission, ID-lər)}} şəklin hissələrini də saxlayır. {{ui:Göstər}} görünüşü onlardan birinə keçirir: səth rəngləri (albedo), normallar, dərinlik, diffuz, spekulyar və ötürülən işıq (hər biri birbaşa və dolayı), nə parlayır və səma, və maska hazırlamaq üçün hər obyektə və ya materiala görə rəng.

Hər ikisi qrafik kartında əlavə qatları saxlayır. Böyük ölçülərdə qrafik kartında yer çatmaya bilər; dialoq bunu deyir və kiçik ölçü işləyir.

## Duman, tüstü, küy və kaustika

Bunlar {{ui:Duman, tüstü və küy}} bölməsindədir və qrafik kartında {{ui:Yüksək keyfiyyət (yol izləmə ilə)}} formasında işləyir; digər mühərriklər onları çıxarır.

- {{ui:Duman və dumanlılıq}} havanı müəyyən hündürlüyə qədər günəş, səma və lampaların işıqlandırdığı dumanla doldurur. {{ui:Nə qədər uzağı görünür, metrlə}} onun nə qədər qalın olduğunu təyin edir (təxminən 100 m yüngül dumanlılıq, 20 m qalın duman), {{ui:Dumanın yerdən hündürlüyü, metrlə}} onun bitdiyi yerdir və {{ui:İşıq şüaları}} dumanın işığa doğru nə qədər parladığını təyin edir. Günəş işığı dumanın yuxarısından çıxır, buna görə günəş pəncərədən və ya binalar arasından keçəndə onu işıq şüaları kimi görürsünüz.
- {{ui:Tüstü və ya bulud}} duman kimi işıqlanan bir tüstü və ya bulud həcmi əlavə edir. {{ui:Növ}} {{ui:Bulud}}, {{ui:Tüstü sütunu}} və ya {{ui:Həcm faylından (.ccvol)}} ola bilər; ikincisi CadCraft-ın öz şəbəkə formatıdır. {{ui:Detal}} və {{ui:Variasiya}} yaradılmış buludu və ya sütunu dəyişir, {{ui:Ən uzun tərəfinin ölçüsü, metrlə (0 = modelin ölçüsü)}}, {{ui:X üzrə köçür (m)}}, {{ui:Y üzrə köçür (m)}}, {{ui:Z üzrə köçür (m)}} və {{ui:Döndər}} onu yerləşdirir (modelin ortasından başlayır), {{ui:Qalınlıq}} onu sıxlaşdırır, {{ui:İrəli parıltı}} onu işığa doğru daha parlaq edir və {{ui:Rəng}} onu rənglədir. Həcm faylı səma şəkli kimi yalnız səhifə açıq olduqda saxlanılır.
- {{ui:Şəkil təmiz olan yerlərdə erkən dayandır (adaptiv seçmə)}} artıq oturmuş piksellərə daha nümunə vermir. {{ui:Qəbul ediləcək səs-küy}} piksel dayananda nə qədər dənəcik qaldığıdır. Şəklin altındakı sətir bir pikselin orta hesabla neçə nümunə aldığını göstərir.
- {{ui:Kaustika (şüşədən əyilən və ya güzgülərdən əks olunan işıq)}} lampalardan və günəşdən işığı izləyir, buna görə şüşə top altındakı parlaq ləkə və ya güzgünün divardakı işığı dənəli deyil, təmiz çıxır. Duman, tüstü, işıq qarışdırması və ya render elementləri aktiv olduqda o, söndürülür və şəkillər üçün nəzərdə tutulub, 360° şəkillər üçün deyil.

## Render növbəsi

Dialoqdakı {{ui:Render növbəsi}}: {{ui:Bu şəkli növbəyə əlavə et}} şəklin parametrlərini və baxışını saxlayır, {{ui:Növbəni başlat}} gözləyən şəkilləri bu kompüterdə bir-birinin ardınca vizuallaşdırır. Səhifəni bağlamaq növbəni saxlayır; davam etmək üçün eyni modeli açın. {{ui:Saxla}} bitmiş birini endirir; {{ui:Sil}} və {{ui:Bitənləri təmizlə}} siyahını təmizləyir. Növbə yüksək keyfiyyətdə vizuallaşdırır, buna görə WebGPU lazımdır.

## Nə qədər çəkir

Şəkil öz kompüterinizdə, qrafik kartı ilə yaradılır; heç nə yüklənmir. Vaxt keçidlərə və piksellərə görə artır: {{ui:Ən yaxşı}} {{ui:Qaralama}}-dan 16 dəfə çox keçidə malikdir, və 4K şəkil Full HD-dən təxminən dörd dəfə çox piksel. Böyük modellər hər keçiddə daha uzun çəkir.
