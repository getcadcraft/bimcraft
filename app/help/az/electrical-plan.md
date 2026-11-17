---
title: Elektrik planı
summary: Planda rozetkaları, açarları, işıqları, sensorları, birləşdirici qutuları və panelləri CadCraft-ın Elektrik əlavəsi ilə eyni simvollarla yerləşdirin, açarları yandırdıqları işıqlarla əlaqələndirin və qurğuları və dövrələri cədvəllərdə siyahılayın.
keywords: elektrik, elektrik planı, rozetka, qəbuledici, ikiqat, açar, üç yollu, dimmer, işıq, tavan işığı, daxili işıq, aşağı işıq, hərəkət sensoru, birləşdirici qutu, panel, paylayıcı lövhə, dövrə, yük, vatt, amper, açar xətti, qurğu cədvəli, panel cədvəli
from: f7de1947
---

## Nə edəcəksiniz

Modeldə evin elektrik planını çəkin: divarlarda rozetkaları, açarları və panelləri, tavanda işıqları və sensorları. Hər qurğu IFC faylında öz etiketi, dövrəsi və yükü olan real elektrik elementidir, açarlar isə yandırdıqları işıqları yadda saxlayır.

## Qurğuları yerləşdirin

1. Mərtəbədə {{ui:Build}} açın və {{ui:Electrical}} seçin.
2. Qurğunu seçin: rozetkalar (güc, data, telefon, audio-video), açarlar və sensorlar (termostat və taymer də daxil olmaqla), işıqlar, detektorlar və siqnallar, birləşdirici qutu, panel və ya alt-panel.
3. Dövrəni bilirsinizsə **Dövrə** yazın (istənilən ad: 1, 2, A-3). **Quraşdırma hündürlüyü** xanasını boş buraxın — bu qurğu üçün adi hündürlük götürülür.
4. Plana klikləyin. Rozetkalar, açarlar və panellər ən yaxın divarın üzünə, otağa baxan tərəfə qoyulur; işıqlar, sensorlar və birləşdirici qutular isə klik etdiyiniz yerdə tavana qoyulur.

Qurğular yerləşdirilərkən dərhal etiketlənir: rozetkalar üçün **R**, açarlar üçün **S**, işıqlar üçün **L**, hərəkət sensorları üçün **M**, birləşdirici qutular üçün **J**, panellər üçün **P**. Divarda olan qurğular divarı köçürdükdə onunla birlikdə hərəkət edir.

Şəkillə axtarmağa üstünlük verirsiniz? {{ui:Build}} menyusundan **Simvol palitrası**nı açın, qurğunu adı ilə tapın, tez-tez istifadə etdiklərinizi ulduzlayın və bir klikklə yerləşdirin: bax [Simvol palitrası](topic:symbol-palette).

## Açarları işıqlarla əlaqələndirin

1. Açarı (və ya hərəkət sensorunu) seçin və **Xassələr**də **İşıqları əlaqələndir** düyməsini klikləyin.
2. Açarın yandıracağı hər işığa klikləyin. Əlaqəli işığa yenidən klikləsəniz, əlaqə ləğv olunur.
3. {{key:Enter}} basın və ya **Hazırdır** düyməsini klikləyin.

Plan açardan hər işığa qədər qırıq əyri xətt çəkir. İşığın **Xassələri** onu hansı açarların yandırdığını göstərir.

## Qurğunun durduğu otaq

Hər qurğu durduğu otağı bilir. Divardakı qurğu üzünə baxdığı otaqdadır; tavan qurğusu isə altında olduğu otaqdadır. **Xassələr** **Otaq** göstərir, **Elektrik qurğuları** cədvəlində isə **Otaq** sütunu var (nömrə və ad, məsələn 101 Mətbəx).

Bu məlumat avtomatik yenilənir: otağı adını və ya nömrəsini dəyişsəniz, qurğunu və ya divarı köçürsəniz, otaq eyni addımda izləyir. Binanın xarici üzündə olan və ya otaq olmayan məkanda duran qurğu otaqda olmadığını bildirir.

Otaq həmçinin faylda qurğunun `CadCraft_Location` xassə dəstinə (Room, RoomNumber, RoomName) yazılır. Beləliklə, Axtarış, xassəyə görə rəngləmə və etiket cədvəli bunu istifadə edə bilər, eləcə də başqa proqram. Plan simvolları və simvola bağlı elementlər eyni dəsti alır; bax [Simvol palitrası](topic:symbol-palette).

## Qurğuları köməkçiyə yerləşdirdirin

Köməkçi qoşulduqda (Parametrlər › Köməkçilər, redaktə icazəsi ilə) qurğuları sözlə istəyə bilərsiniz: "yaşayış otağının divarları boyunca hər 2 m-də ikiqat rozetka qoyun, yerdən 300 mm yuxarıda, 3 nömrəli dövrədə" və ya "qapının yanında tavan işığı və onun açarını əlavə edin". Köməkçi beş alətdən istifadə edir: `devices_add`, `device_change`, `lights_set`, `devices_delete` və `devices_list`. Onlar Elektrik aləti ilə yaradılan eyni qurğuları yaradır, eyni divarlarda, eyni etiket, dövrə, yük və hündürlüklərlə, və hər çağırış bir geri qaytarma addımıdır.

Elektrik aləti olmayan növ qurğuya verilmir: naməlum növ rədd edilir və köməkçiyə siyahı göndərilir. Rozetka və ya açar divar üzündən 600 mm məsafədə olmalıdır, kliklə eyni; əks halda çağırış rədd edilir və heç nə yerləşdirilmir. Standart hündürlüklər millimetrlədir: rozetka üçün 300, açar üçün 1100; tavan qurğusu tavandan asılır.

## Dəyişdirin və siyahılayın

Qurğunun etiketini, dövrəsini, yükünü (vatt) və quraşdırma hündürlüyünü dəyişmək üçün onu seçin. Bir neçəsini seçsəniz, hamısını bir dəfəyə eyni dövrəyə qoyursunuz. Birini silmək üçün {{key:Delete}} basın; silinən işıq onu yandıran açarlardan çıxarılır.

{{ui:Schedules}} bölməsində hər qurğu üçün səviyyəsi, dövrəsi, yükü, hündürlüyü və hər açarın yandırdığı işıqlarla **Elektrik qurğuları** seçin, ya da hər dövrənin qurğularını, ümumi yükünü və cərəyanını göstərən **Dövrələr** seçin. Hər ikisi çertyoj dəstinin cədvəl vərəqində də var; bax [Fasadlar, kəsiklər və vərəqlər](topic:sheets).

:::note
Quraşdırma hündürlükləri və yüklər planlaşdırma üçün standart qiymətlərdir (rozetka 16" yuxarıda və 200 W, açar 48" hündürlükdə, tavan işığı 60 W), layihə deyil. Dövrələri elektrik mütəxəssisi və ya mühəndis ölçür və normaları yoxlayır.
:::

:::tip
Simvollar CadCraft-ın Elektrik əlavəsinin quraşdırma planlarında çəkdiyi simvollardır, buna görə hər iki proqramdan gələn plan eyni cür oxunur.
:::
