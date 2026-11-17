---
title: Modeli VR qulaqlığında nəzərdən keçirin
summary: IFC modelinə VR qulaqlığında tam ölçüdə gəzin: hərəkət edin, dönün, ölçün, kəsin, BCF problemlərini şəkil ilə yerləşdirin, onu masa üstü model kimi görün və canlı sessiyanın digər iştirakçıları ilə görüşün.
keywords: vr, virtual reallıq, qulaqlıq, webxr, xr, immersiv, quest, oculus, vive, index, pico, binanı gəz, gəzinti, teleport, dizayn nəzərdən keçirmə, koordinasiya, nəzərdən keçirmə, ölç, kəsmə, kəs, problem, problemlər, bcf, masa üstü, miqyas modeli, iştirak, avatarlar, canlı, birlikdə
from: 8994b36d
---

{{ui:VR}} alətlər panelində sizi qulaqlıqla modelin içinə qoyur, tam ölçüdə. 3D görünüşün kamerasının olduğu yerdə, altındakı döşəmədə, eyni istiqamətə baxaraq durursunuz. Qulaqlıq 3D görünüşün göstərdiyini göstərir: gizlənmiş mərtəbələr, elementlər və modellər gizli qalır, boyanmış materiallar gəlir. Heç nə yüklənmir: brauzer bunu bu kompüterdə (və ya qulaqlığın öz brauzerində) çəkir.

## Nə lazımdır

- Brauzerin idarə edə biləcəyi qulaqlıq (WebXR): müstəqil qulaqlığın öz brauzeri, və ya qoşulmuş qulaqlıqla PC-də Chrome və ya Edge.
- Açıq IFC model, bu saytda olduğu kimi təhlükəsiz səhifədə (https).

Qulaqlıq olmadıqda {{ui:VR}} boz olur və səbəbini deyir.

## Başlamaq

1. 3D görünüşü başlamaq istədiyiniz yerdə qurun: otaqda və ya binaya kənardan baxaraq.
2. Alətlər panelində {{ui:VR}} basın.
3. Qulaqlığı taxın.

Menyu sol əlinizin arxasındadır. Sağ kontrollerlə ona baxın və düyməni seçmək üçün tetiyi çəkin. (Yalnız bir əllə menyu başladığınız yerin qarşısında üzər.)

## Hərəkət

- **Tullanma:** {{ui:Sürüşdür}} alətində döşəməyə baxın və tetiyi çəkin; orada enirsiniz. Ya da çubuğu irəli itələyin ki, nişan alın, və buraxın ki tullanın. Yalnız döşəmələrə, plitələrə və zəminə (yuxarıya baxan səthlərə) enə bilərsiniz, heç vaxt divara.
- **Dönmək:** çubuğu sola və ya sağa itələyin: hər dəfə 30° dönürsünüz.
- **Gəzmək:** oyun sahənizdə sadəcə gəzin.

## Ölçmək

{{ui:Ölç}} seçin, sonra iki nöqtədə tetiyi çəkin. Aralarındakı məsafə metrlə göstərilir. Küncə yaxın nöqtə küncə bağlanır.

## Açıq kəsin

{{ui:Kəsik}} seçin və səthə tetiyi çəkin:

- divarda (və ya döşəmə olmayan hər hansı şeydə): sizinlə həmin səth arasındakı hər şey kəsilib kənara atılır ki, içəri baxa biləsiniz. Bu, xaricdən və ya otaq boyunca ən yaxşı işləyir;
- döşəmədə, yuxarıdan: həmin döşəmənin üzərində 1,2 m kəsikli plan, buna görə divarlar aşağı hissəsini göstərir.

{{ui:Təmizlə}} kəsiyi və ölçüləri aradan qaldırır. Başlayarkən [kəsmə müstəvisi](topic:section-plane) modeli kəsirsə, qulaqlıq onunla başlayır.

## Problem yerləşdirin

{{ui:Məsələ}} seçin və problemin olduğu yerdə tetiyi çəkin. Nömrəli sancaq onu işarələyir və problem {{ui:Problemlər}} nişanına BCF mövzusu kimi düşür; gördüyünüz şəkil və dayandığınız yerdəki kamera ilə, modelin öz koordinatlarında. Onları [problemlərinizlə](topic:issues-bcf) birlikdə BCF faylı kimi saxlayın; digər koordinasiya alətləri onları eyni görünüşdə açır.

VR-dən çıxdıqdan sonra {{ui:Problemlər}} nişanında problemə şərh əlavə edin: qulaqlıqda yazmaq hələ hazır deyil.

## Masa üstü model kimi görün

{{ui:Masa üstü}} modeli önünüzdəki masaya sığacaq qədər kiçildir; onun ətrafında gəzin və ya çubuqla fırladın. {{ui:Tam ölçü}} sizi əvvəlki yerinizə qaytarır.

## Digərləri ilə, canlı

[Canlı sessiyada](topic:work-live) VR-dəki hər kəs digərlərini öz rənglərində baş və iki əl kimi görür, adları ilə, və hər birinin işarə etdiyi yerdə nöqtə. Hər kəsin etdiyi dəyişikliklər bir anda qulaqlığınıza çatır. Masa arxasındakı insanlar hələ qulaqlıqda göstərilmir.

## Çıxmaq

{{ui:VR-dən çıx}} seçin (və ya qulaqlığı çıxarıb orada bitirin). Ekrandakı 3D görünüş başınızın olduğu yerə keçir.

:::note
Qulaqlıq emulyatorunda sınaqdan keçirilib, hələ hər qulaqlıqda deyil. Böyük model qulaqlığı donuq edə bilər: lazım olmayan mərtəbələri və ya modelləri əvvəlcədən gizlədin ([gizlət və təcrid et](topic:hide-and-isolate)).
:::
