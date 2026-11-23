---
title: Hava kanallarını, drenajları, su və soyuducu borularını avtomatik marşrutlaşdırın
summary: Toqquşma yoxlamasında BimCraft ventilyasiya kanalları, cazibə ilə drenaj, soyuq və isti su və bölünmüş və ya çoxbölünmüş soyuducu boruları üçün açıq modelin ətrafından yol tapır və xətləri fitinqləri ilə birlikdə bir geri qaytarma addımında çəkir. Layihə yardımçısıdır: ölçülər, meyllər və yoxlamalar proqramdakı cədvəllərdən və sizin yazdığınız rəqəmlərdən gəlir; burada heç nə dizaynın normaya uyğun olduğunu bildirmir.
keywords: avtomarşrut, hava kanalı marşrutu, boru marşrutu, drenaj, sanitar, cazibə, stoyka, vent, sifon, su, isti su, qaytarma döngəsi, dövriyyə, soyuducu, bölünmüş, çoxbölünmüş, VRF, ekvivalent uzunluq, budaq dəsti, wye
from: 5841d513
---

## Nə edəcəksiniz

BimCraft-a modeldə artıq yerləşən birləşdiricilər arasında xətlərin şəbəkəsini hazırlamağa icazə verin, divarların və tirlərin ətrafında, sonra da bunu görünən rəqəmlərlə yoxlayın.

## Addımlar

1. Modeli və toqquşma yoxlamasını açın. **Hava kanallarını avtomatik marşrutlaşdır** altında hava işləyicisini və onun terminallarını seçin, və ya **Digər sistemləri avtomatik marşrutlaşdır** altında sistem seçin.
2. **Sanitar drenaj cazibə ilə.** Çıxış mövqeyini və varsa stoyka mövqelərini yazın. Fiksturları olan hər mərtəbəni almaq üçün **Hər mərtəbəni bir dəfəyə marşrutlaşdır** qutusunu qeyd edin: hər mərtəbənin drenajı öz səviyyəsində stoykaya qoşulur, stoyka ən yüksək musluqdan yuxarıdan aşağıya qədər gedir. {{ui:Route}} düyməsinə basın.
3. **Sifondan havalandırmaya.** Panel hər sifondan onun havalandırmasına olan məsafəni siyahılayır. Kodunuzun icazə verdiyi ən çox məsafəni **Sifondan havalandırmaya ən çox məsafə** sahəsinə yazın; bundan çox olan hər fiksturu yerinə yetirilməmiş kimi, neçə millimetr artıq olduğunu göstərərək siyahılayır. Fiksturların öz havalandırma çıxıntısı olmadıqda **Havalandırmanı stoyka ilə keçir** qutusunu qeyd edin: məsafə bu halda stoykaya qədər ölçülür. BimCraft bunun üçün norma cədvəli təqdim etmir: rəqəmi siz yazırsınız.
4. **Soyuq və isti su.** Mənbəni seçin, mənbədəki təzyiqi və fiksturda lazım olan təzyiqi yazın. **İsti su** qutusunu qeyd edin, istiləşdiricinin isti birləşməsini seçin və xətti istiləşdiricinin **isti-qayıdış** birləşməsində və ya seçdiyiniz başqa birləşmədə bitirmək üçün **Qaytarma döngəsi** qutusunu qeyd edin (həmin birləşmə sizin birləşdirməniz üçün 150 mm qısa, açıq qalır).
5. **Bölünmüş, çoxbölünmüş və VRF.** Xarici qurğunu seçin, daxili qurğuları qeyd edin və hər birinin tutumunu yazın. Limitləri istehsalçının məlumatlarından yazın. Əyilmənin və budaq dəstinin **ekvivalent uzunluğunu** (istehsalçının dəyərləri) yazın, uzun və ümumi uzunluqlar isə ekvivalent uzunluqlarla yoxlanılır.
6. {{ui:Route}} düyməsinə basın. Panel neçə xətt çəkdiyini və nəyi və niyə edə bilmədiyini göstərir. {{ui:Undo}} hər şeyi bir addımda geri qaytarır.

## Nə görməlisiniz

Dirsəklər, tiylər və reduksiyalarla borular; ölçüsü üçün ən kiçik meyldən az olmayan drenajlar; fiksturlarda havalandırma çıxıntıları; hər künc döndükcə eyni tərəfə dönən maye və qaz cütü kimi soyuducu xətləri, budağın ağacdan ayrıldığı yerdə budaq dəsti işarələnmiş.

## Bilmək yaxşıdır

- Bir drenaj başqa drenajla birləşdikdə model tiy çəkir. Plan bu yerləri 45 dərəcəlik wye birləşmələri kimi adlandırır ki, fitinqi dəyişə biləsiniz.
- Su fiksturun öz isti birləşməsi olan ailədə onu istifadə edir, olmadıqda soyuq birləşmənin yanında 100 mm məsafədə birləşmədən istifadə edir.
- Soyuducu xətləri hər qurğunun iki portu arasından başlayır. Qurğunun iki portu dirsək üçün çox yaxın olduqda cüt aralarında mərkəzdə qalır.
- Su şəbəkəsi hesablamalarda göstərilən tələb əyrisi və sürtünmə rəqəmlərindən istifadə edir; təzyiqlərə güvənməzdən əvvəl onları öz kodunuzun rəqəmləri ilə əvəz edin.
- Böyük evlər yarım dəqiqə və ya daha çox vaxt apara bilər, əsasən isti şəbəkə səbəbindən.
- Bu layihə yardımçısıdır. Ölçüləri, meyilləri, havalandırmaları və təzyiqləri tətbiq olunan norma ilə müəyyən edilmiş ixtisaslı şəxs yoxlamalıdır.

## Növbəti

[Toqquşmaları yoxlayın](topic:clash-check) · [Boruları və hava kanallarını konstruksiyaya qarşı yoxlayın](topic:mep-against-structure) · [Borularla avadanlıq arasında birləşmələr](topic:mep-connections)
