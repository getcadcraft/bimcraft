---
title: Elementi PartCraft-a göndərin və geri götürün
summary: Dayaq, kronşteyn, məhəccər və ya avadanlıq parçası seçin, onu binanın ətrafı ilə birlikdə PartCraft-da hissə kimi işləyin və yeni formanı modelə qaytarın.
keywords: partcraft, hissə, göndər, bağlantı, element, dayaq, kronşteyn, hasar, məhəccər, avadanlıq, layihə, tam dövrə, qəbul et, dəyişdirilmiş, hissə bağlantıları
from: 4ce2f449
---

## Nə edəcəksiniz

Binanın bir elementini hissə kimi layihələndirin: onu PartCraft-a göndərin, orada dəyişdirin (kəsin, əlavə edin, deşin, ölçüsünü dəyişin) və yeni formanı modelə geri qaytarın.

## Addımlar

1. Modeldə bir element seçin: ümumi element, avadanlıq, sütun, tir, məhəccər və ya mebel.
2. {{ui:Detal bağlantıları}} alətlər panelində seçin, sonra {{ui:PartCraft-a göndər}}. PartCraft elementi hissə kimi yeni sekmədə açır. 3 m məsafədəki elementlər yanında boz rənglə çəkilir ki, onu yerində layihələndirəsiniz. Orada onları dəyişmək olmaz.
3. Hissəni PartCraft-da dəyişin. PartCraft-da {{ui:Fayl}} › {{ui:İxrac}} › {{ui:BimCraft-a geri saxla}} seçin. İstədiyiniz qədər geri saxlaya bilərsiniz.
4. BimCraft-da {{ui:Detal bağlantıları}} düyməsi sayı göstərir, kart isə elementi {{ui:PartCraft-da dəyişdirilib}} kimi siyahıya salır və ölçü və həcm dəyişikliyini sözlərlə göstərir.
5. Ona baxmaq üçün {{ui:Göstər}}, elementə yeni forma vermək üçün {{ui:Qəbul et}}, ya da onu olduğu kimi saxlamaq üçün {{ui:Mənimkini saxla}} seçin.

## Nəticədə nə görməlisiniz

- Qəbul etmək bir geri qaytarma addımıdır. Element öz yerini, GlobalId-ni, tipini, materialını və xüsusiyyətlərini saxlayır. Yalnız onun gövdəsi əvəz olunur.
- Element {{ui:CadCraft_PartLink}} xüsusiyyət dəstini alır: bağlantı, onun statusu və revizya ilə.
- {{ui:Yenidən göndər}} eyni elementi eyni bağlantı ilə PartCraft-da yenidən açır.

## Bilmək yaxşıdır

- Divarlar, döşəmələr, damlar, qapılar, pəncərələr, pilləkənlər, pandus və məkanlar konturdan binanın alətləri ilə çəkilir və hər dəyişiklikdən sonra yenidən qurulur. Başqa proqramdan gələn gövdə bunların üzərinə yazılardı, ona görə bunlar səbəbi göstərilməklə rədd edilir.
- Forma PartCraft-ın xüsusiyyətləri kimi deyil, mesh (IFC tesselyasiyası) kimi qayıdır. Hissənin tarixçəsi PartCraft-da qalır.
- Element modeldə göndərildikdən sonra dəyişibsə, kart qəbul etməzdən əvvəl bunu bildirir: qəbul etmək həmin dəyişiklikləri əvəz edir.
- Heç nə yüklənmir. İki proqram eyni saytın səhifələridir və elementi bu brauzerdə bir-birinə ötürürlər. Hər ikisi eyni brauzerdə açıq olmalıdır.
- Element PartCraft-da tam bərk cisim olmalıdır. Formasında böyük açıq boşluqlar olan element orada açıq kənarların sayı ilə birlikdə rədd edilir.
- Qəbul etmək üçün elementi saxlayan modeli aktiv edin.
