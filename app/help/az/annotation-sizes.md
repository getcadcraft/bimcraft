---
title: Tam ölçüdə çəkin, miqyasa görə qeyd edin
summary: Bina həmişə tam ölçüdə çəkilir. Mətn, ölçülər, etiketlər, otaq adları, şəbəkə dairələri və simvollar kağız üzərində ölçülür, çap olunduğu millimetrlərlə, və çertyojun miqyası 1:100-dən 1:50-yə dəyişəndə həmin ölçüdə qalır.
keywords: qeyd miqyası, annotativ, mətn ölçüsü, mətn hündürlüyü, kağız hündürlüyü, ölçü mətninin ölçüsü, etiket ölçüsü, otaq adının ölçüsü, şəbəkə dairəsi, simvol ölçüsü, çertyoj miqyası, 1:50, 1:100, ofis standartı, yazı, 1:1-də çək, tam ölçü, vərəq mətni
from: 94118788
---

## Nə edəcəksiniz

Çertyojlarınızın yazıları kağızda nə qədər hündür olsun, binaya görə bir dəfə təyin edin. Modeli heç vaxt miqyaslamırsınız və mətni miqyasa görə heç vaxt dəyişmirsiniz: BimCraft ölçünü kağız hündürlüyündən və çertyojun miqyasından hesablayır.

## Necə işləyir

- Model tam ölçüdədir. 10 m uzunluğunda divar hər miqyasda 10 000 mm uzunluğundadır.
- Qeydin **kağız hündürlüyü** var: çap olunmuş vərəqdə böyük hərfin hündürlüyü, millimetrlərlə.
- 1:100 miqyasda 2.5 mm mətn modeldə 250 mm hündürdür; 1:50-də 125 mm. Kağızda hər ikisində 2.5 mm-dir.
- Plan simvolları (elektrik, santexnika) kağız millimetrləri ilə çəkilir və eyni qaydaya tabedir.

## Addımlar

1. Layihə brauzerini açın. {{ui:Vərəqlər}} altında {{ui:Qeyd ölçüləri…}} düyməsini basın.
2. Təyin etmək istədiyiniz növlər üçün millimetrlə hündürlük yazın: {{ui:Qeydlər və yazılar}}, {{ui:Ölçü mətni}}, {{ui:Etiketlər və səviyyə adları}}, {{ui:Otaq adları}}, {{ui:Şəbəkə dairəsinin hərfləri}}, {{ui:Vərəqlərdə görünüş başlıqları}} və {{ui:Cədvəl mətni}}. Boş xana BimCraft-ın öz ölçüsünü saxlayır, boz rənglə göstərilir.
3. {{ui:Saxla}} düyməsini basın. Bu, geri qaytara biləcəyiniz bir addımdır.

Bundan sonra hər vərəq, çertyoj dəsti, plan PDF-i, fasadlar və kəsiklər bu ölçülərdən istifadə edir. Ölçü xətti ilə onun mətni arasındakı məsafə, şəbəkə dairəsinin ölçüsü və cədvəl sətrinin hündürlüyü mətni ilə birlikdə böyüyür.

## Öz miqyası olan plan

Planın görünüş diapazonunda miqyas verin ({{ui:Miqyas}}; bax: [Görünüşlər və vərəqlər](topic:views-and-sheets)). Onda:

- ekranda otaq adları, etiketlər, ölçü mətni və şəbəkə dairələri modelə nisbətən çap olunduğu ölçüdə çəkilir, belə ki, gördüyünüz vərəqdə nə çıxacaqsa elədir;
- plan simvolları və onların etiketləri həmin miqyasa görə ölçülür. Miqyası 1:100-dən 1:50-yə dəyişsəniz, modeldə yarı qədər böyük olurlar, kağızda isə eyni qalırlar.

Öz miqyası olmayan plan əvvəlki kimi sabit ekran mətnini saxlayır və simvolları 1:50 üçün ölçülür (1/4" = 1'-0" futla və düymlə).

## Ofisinizin ölçüləri

Default Policies əlavəsi açıq olanda ofisin hündürlüklərini Parametrlər › Ümumi › Default Policies › {{ui:Kağızda qeyd ölçüləri}} bölməsində təyin edin. Yeni bina yaradanda, Yarat düyməsini basdıqda onlar tətbiq olunur. Artıq başladığınız binada dialoqda {{ui:Ofisimin ölçülərindən istifadə et}} var. Bax: [Default Policies](topic:default-policies).

## Norma paketinin ölçüləri

Norma paketi, yerinin tələb etdiyi mətn hündürlüklərini verə bilər (Tikinti normaları əlavəsi, çertyoj qaydaları). Paketi Parametrlər › Tikinti normaları bölməsində işarələyin, sonra dialoqda {{ui:Norma paketinin ölçülərindən istifadə et}} düyməsini basın: xanalar doldurulur, siz onları yoxlayıb saxlayırsınız. Paketin punktla verdiyi ölçü şrift ölçüsüdür və böyük hərf hündürlüyünə çevrilir, ona görə yoxlayın. Siz saxlayana qədər heç nə təyin olunmur.

## Nə görməlisiniz

- 1:100 miqyaslı vərəqdə və 1:50 miqyaslı vərəqdə mətnin millimetrlə hündürlüyü eynidir, plan özü isə 1:50-də iki dəfə böyükdür.
- Ölçülər binanın özü ilə gedir: onlar onun IFC faylında saxlanılır.

## Bilməyiniz yaxşı olar

- BimCraft-ın öz ölçüləri vərəqlərinin həmişə istifadə etdiyi ölçülərdir (ölçü mətni üçün təxminən 1.5 mm böyük hərflər). Onlar çertyoj standartı deyil: ofisinizinkini təyin edin.
- Hündürlük 0.5-dən 50 mm-ə qədər olmalıdır.
- Ştamp yazıları və açar qeydləri buraya aid deyil: onlar öz ölçülərini saxlayır.
