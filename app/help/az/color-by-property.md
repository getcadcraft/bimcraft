---
title: Elementləri xassəyə görə rənglə
summary: Hər elementi bir xassənin dəyərinə görə rənglə, məsələn sinfi, növü, mərtəbəsi, materialı, yanğın dözümlülüyü və ya dəyəri ilə; legendanı oxuyun, yalnız həmin elementləri göstərmək üçün dəyərə klikləyin və rəngləri digər modellərdə istifadə etmək üçün sxem kimi saxlayın.
keywords: rəng, rəng ilə, legenda, ağıllı görünüş, görünüş, xassə, növ, material, yanğın dözümlülüyü, filtr, təcrid, tema, dəyərlər, sxem, rəng sxemi, rəngləri saxla, təkrar istifadə, komanda, json, nümunə
from: f081d343
---

## Nə edəcəksiniz

Xassənin modelə necə yayıldığını bir baxışda görün: hansı divarlar xarici, hansı materiallar harada istifadə olunur, hansı elementlərin yanğın dözümlülüyü yoxdur. Hər element öz dəyərinin rəngini alır, legenda isə hər rəngin nəyi bildirdiyini və neçə elementdə olduğunu göstərir.

## Addımlar

1. IFC modelini açın.
2. Sağdakı {{ui:Rəng}} sekmәsinә klikləyin.
3. Siyahıdan xassə seçin. İlk xassələr hər elementə aiddir ({{ui:Sinif}}, {{ui:Növ}}, {{ui:Mərtəbə}}, {{ui:Material}}, {{ui:Ad}}…); qalanları modelin xassə dəstlərindən və miqdar dəstlərindən gəlir, dəstin adı altında. Hər birindən sonra olan rəqəm neçə elementdə olduğunu göstərir.
4. Legendanı oxuyun: rəng, dəyər və neçə elementdə olduğu.
5. Yalnız həmin elementləri göstərmək üçün dəyərə klikləyin. Daha çox dəyər əlavə etmək üçün {{key:Mod}} düyməsini saxlayın və klikləyin. Hamısını yenidən göstərmək üçün {{key:Shift+H}} basın.
6. Modelin öz rənglərinə qayıtmaq üçün {{ui:Söndür}} klikləyin.

## Nə görməlisiniz

- Ən çox yayılmış dəyərdən başlayaraq yeddi dəyərə qədər hər biri öz rəngini alır. Bundan çox dəyər bir boz rəngi bölüşür və **digər dəyərlər** kimi siyahıya alınır.
- Çoxlu müxtəlif dəyərləri olan ədəd altı bərabər aralığa bölünür: açıqdan (aşağı) tünd rəngə (yuxarı).
- Xassəsi olmayan elementlər solğun boz rənglə göstərilir və **Dəyər yoxdur** kimi siyahıya alınır ki, rəngli olanlar seçilsin.
- Rənglər Paper və Model ilə dəyişir və modeli redaktə etdiyiniz zaman qalır.
- Növün xassəsi həmin növün hər elementi üçün sayılır; element eyni xassə üçün öz dəyərinə malik olduqda, öz dəyəri üstün gəlir.

## Rəngləri dəyişin və sxem kimi saxlayın

- Legendada dəyərin rəng nümunəsinə klikləyərək ona başqa rəng seçin. Model dərhal yenidən rənglənir.
- {{ui:Sxemi saxla}} rəngləri xassənin adı ilə adlanan kiçik `.json` faylı kimi yükləyir, məsələn `Class colors.json`.
- Başqa modeldə və ya komanda yoldaşınızın kompüterində {{ui:Sxemi aç…}} klikləyin və həmin faylı seçin. Sxemdəki hər dəyər öz rəngini alır, beləliklə eyni yanğın dözümlülüyü və ya sistem bütün modellərdə eyni rəngdə olur.
- Sxemdə olmayan dəyər boz rənglə boyanır və "sxemdə yoxdur" kimi siyahıya alınır; bu modeldə olmayan, lakin sxemdə olan dəyərlər 0 ilə siyahıda qalır ki, bütün sxemi görə biləsiniz.
- Sxem hər iki temada öz rənglərini saxlayır. Siyahıdan xassə seçmək avtomatik rənglərdən yenidən başlayır.

## Tez-tez edilən səhvlər

- **"Bu modeldə … dəyərləri yoxdur".** Sxem bu modelin malik olmadığı xassə üçün saxlanılıb (məsələn, başqa xassə dəstinin adı). Bu cür model üçün hazırlanmış sxemi açın, ya da siyahıdan xassə seçin.

- **Xassə siyahıda yoxdur.** Modelin forması olan heç bir elementində belə xassə yoxdur. Mərtəbələrin və məkanların öz xassələri siyahıya daxil edilmir.
- **Hər şey eyni rəngdədir.** Hər elementin eyni dəyəri var, ya da heç biri yoxdur: legendadakı saylara baxın.

## Növbəti

- [Elementləri gizlədin, təcrid edin və şəffaf görün](topic:hide-and-isolate)
- [Model ağacı ilə yolunuzu tapın](topic:model-tree)
