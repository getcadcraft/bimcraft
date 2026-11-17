---
title: Binada daşqını, küləyi və ya zəlzələni oxutmaq
summary: Otaqlarda qalxan su, hər mərtəbəyə külək təzyiqi və ya mərtəbələri silkələyən zəlzələ — plan və ya fasadda zaman sürgüsü ilə oxudulur. Sadə modellər, siyahıda göstərilən fərziyyələrlə; normativ yoxlama və ya struktur layihə deyil.
keywords: təhlükə, daşqın, külək, zəlzələ, seysmik, sürüşmə, yanal tərəddüd, təməl kəsici qüvvə, su səviyyəsi, iqlim, ssenari, dəniz səviyyəsi, oxutma, mərtəbə, dövr
from: ff0d34d1
---

{{ui:Təhlükə oxutması}} bölməsi sol paneldə açıq IFC modelində təhlükəni oxudur. Modeldə heç nə dəyişmir.

:::warning
Bunlar **bu planın təhlükəyə necə reaksiya verdiyini görmək üçün sadə modellərdir**, daşqın tədqiqatı, külək normasının yoxlanışı və ya struktur layihə deyil. Hər nəticə öz fərziyyələrini sadalayır.
:::

## Daşqın

Ən yüksək su səviyyəsini ən aşağı mərtəbədən yuxarı, və qalxma, saxlanma və enmə dəqiqələrini təyin edin. Su otağa, suyun astanasını keçdiyi açılış vasitəsilə daxil olur; su səviyyəsindən aşağıdakı açılışlarla islak otaqlara bağlı olan otaqlar eyni səviyyədə durur (kvazi-statik). Cədvəl hər otağın ilk dəfə nə vaxt islandığını və nə qədər dərin olduğunu verir; plan onu oxudur. Otağın qəbul edə biləcəyi ən çox suyu yazın — ondan artıq olan otaqlar xəbərdarlıq olur. **İqlim gələcəkləri:** öz ssenari faylınızı yükləyin (il, dəniz səviyyəsinin qalxması və daşqın əmsalı olan JSON və ya CSV) və il seçin. Və ya İqlim gələcəkləri əlavəsini açın və ssenari ilə il seçin: daşqın iki dəfə işləyir, indiki və gələcək yan-yanadır (bax "İqlim gələcəkləri: 2050 və 2080 daşqını, istilik və meşə yanğını"). **Meşə yanğını riski** və **Gələcək hava faylı: istilik** növləri eyni siyahıdadır.

## Külək

Təzyiq ½ρV² düsturunu izləyir, sürət hündürlüklə artır; mərtəbəyə təsir edən qüvvə həmin təzyiqin külək əmsalı, iki təzyiq əmsalı, en və mərtəbə hündürlüyü ilə hasilidir. Kəsici qüvvə, aşıran moment və yanal tərəddüd alırsınız.

## Zəlzələ

Kəsici bina: hər mərtəbə üçün kütlə (oturacaq sahəsi × kvadrat metrə kiloqram, siz təyin edirsiniz), hər mərtəbədə eyni bərklik, birinci dövrə uyğunlaşdırılmış (boş qoysanız, mərtəbə başına onda bir saniyə və bunu deyir), sönümləmə və verdiyiniz maksimum sürətlənmədə yaradılmış yer hərəkəti (impuls və ya süzülmüş səs-küy). Nəticə hər mərtəbənin sürüşməsi, mərtəbə sürətlənmələri və təməl kəsici qüvvəsidir; fasad yanal tərəddüdü göstərir, real olduğundan böyük çəkilir. İcazə verdiyiniz sürüşmə nisbətini yazın — ondan çox olan mərtəbələr xəbərdarlıq olur. Elastikdir: heç nə təslim olmur və çatlamır.

## Analiz çərçivəsindən mərtəbə bərkliyi

Zəlzələ və ya külək tərəddüdü üçün dövr yazmaq əvəzinə bərklik mənbəyi kimi **Analiz çərçivəsi** seçin. Hər mərtəbə növbə ilə yana itələnir, çərçivə (tirlər, sütunlar, bağlamalar, döşəmələr) həll olunur və mərtəbələrin bütün işləyən halda bərkliyi icranı idarə edir. Kütlə üzvlərin öz çəkisi və hər mərtəbənin plan qutusunda təyin etdiyiniz kvadrat metr başına döşəmə yüküdür. Real birinci dövr göstərilir. Elastikdir: heç nə təslim olmur və burulma modelləşdirilmir. Külək üçün mərtəbə qüvvələri yuxarıdakı fərziyyələrdir (güc-qanunu profili, sizin külək əmsalınız və sabit təzyiq əmsalları, külək norması deyil); yalnız yanal tərəddüd bu qüvvələrə qarşı çərçivənin tam bərklik matrisasını həll etməklə çərçivədən gəlir. Model Analiz nişanının oxuya biləcəyi çərçivəli IFC tələb edir.

## Vahidlər

Su dərinlikləri, mərtəbə-mərtəbə tərəddüd və sürüşmə, məsafələr və sahələr seçdiyiniz {{ui:Vahidlər}} ilə göstərilir. Qüvvələr (kN), vaxtlar və sürətlənmələr öz vahidlərini saxlayır, və "metrlərlə" yazılmış qutuya yazdığınız dəyər metrdə qalır. Eyni qayda evakuasiya, gündüz işığı, istilik və soyutma və mebelləşdirmə nəticələri üçün də keçərlidir: uzunluqlar, sahələr və həcmlər seçiminizi izləyir; təzyiq, axın, temperatur, enerji və güc heç vaxt çevrilmir.
