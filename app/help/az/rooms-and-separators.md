---
title: Otaqlar və otaq ayırıcıları
summary: Otağı seçin, adını və nömrəsini verin, sahəsini, perimetrini və həcmini oxuyun. İki otaq arasında divar olmadıqda, onların birləşdiyi yerdə otaq ayırıcısı çəkin.
keywords: otaq, otaqlar, otaq ayırıcısı, bölmə xətti, məkan, IfcSpace, ad, nömrə, sahə, perimetr, həcm, açıq plan, otağı bölmək, mətbəx və qonaq otağı, qapalı deyil
from: d4c1d66b
---

## Nə edəcəksiniz

Divarların əmələ gətirdiyi otaqlara ad verin və açıq otağı divar olmadan iki hissəyə bölün.

## Alətlərin yerləşməsi

- Lent tərtibatları: {{ui:Memarlıq}} › **Otaq və sahə** › {{ui:Otaq}} və {{ui:Otaq ayırıcısı}}.
- Klassik tərtibat: Çək paneli › {{ui:Otaqlar}} menyusu.
- İstənilən menyu üslubu: əmrlər {{ui:Otaq}} və {{ui:Otaq ayırıcısı}} adlanır; əmr palitrası onları tapır.

## Addımlar

1. Divarları çəkin. Divarların hər qapalı döngəsi artıq otaqdır: BimCraft onu yaradır, nömrələyir və siz çəkdikcə ona sahəsini verir.
2. {{ui:Otaq}} seçin. Planın üzərinə keçin: göstəricinin altındakı otaq sahəsi, perimetri və həcmi ilə işıqlanır.
3. Otaqlara tez ad vermək üçün əvvəlcə sətirdə {{ui:Ad}} və {{ui:Nömrə}} yazın, sonra otağa klikləyin. Nömrə növbəti otaq üçün bir artır (101, 102; A-09, A-10).
4. Və ya sadəcə otağa klikləyin: o seçilir və Xassələrdə adı, nömrəsi, sahəsi, perimetri, həcmi və etiketi olur.
5. Açıq otağı bölmək üçün {{ui:Otaq ayırıcısı}} seçin və iki nöqtəyə klikləyin: divardan divara, ya da divardan başqa ayırıcıya. Zəncir üçün klikləməyə davam edin; Enter, Esc və ya ikiqat klik onu bitirir.

## Ayırıcı nə edir

- O, sərhədi qalınlığı olmayan divar kimi məhdudlaşdırır. İki otağın sahələri birlikdə dəqiq olaraq əvvəlki otağın sahəsinə bərabərdir.
- Köhnə otağın ortasını tutan otaq öz adını və nömrəsini saxlayır. Digəri yenidir.
- Açıqda dayanan, bir ucu heç nəyə toxunmayan ayırıcı heç nəyi bölmür. Onu uzadın, o zaman bölər.
- Divarın içindəki ayırıcı hissə nəzərə alınmır, buna görə divarın mərkəz xətlərinə bağlana bilərsiniz.
- Ayırıcını seçin və Delete basın: iki otaq yenidən bir olur. Geri qaytar onu qaytarır.

## Klikləndiyiniz yerdə otaq yoxdursa

Status sətri bunu deyir: orada divarlar bağlanmır. Boşluğu bağlayın, ya da onun üzərindən ayırıcı çəkin. Heç nə rədd edilmir; sadəcə hələ bağlı otaq yoxdur.

## IFC-də

Otaq IfcSpace-dir, nömrəsi (Name), adı (LongName) və Qto_SpaceBaseQuantities ilə: NetFloorArea, NetPerimeter, Height, NetVolume. Həcm sahənin yuxarı səviyyəyə qədər olan hündürlüyünə vurulmuşdur.

Otaq ayırıcısı IfcVirtualElement-dir, yəni IFC-nin qurulmamış sərhəd üçün istifadə etdiyi varlıq. Onun xətti var, gövdəsi yoxdur; ona görə digər proqram heç bir divar oxumur və onun üçün heç nə saymır.

## Hələ hazırlanmayıb

- Əyri ayırıcılar.
- Əyilmiş tavanı izləyən otaq: həcm həmişə sahə ilə səviyyə hündürlüyünün hasilidir.
- Sərhəd əlaqələri (IfcRelSpaceBoundary) yazılmır, nə divarlar, nə də ayırıcılar üçün.

Həmçinin bax [Otaq və sahə etiketləri](topic:room-and-area-tags), [Sahələr və sahə sərhədləri](topic:areas-and-area-boundaries).
