---
title: Skan əsasında model
summary: Lazer skanından divarlara qısa təlimat: yeni binanın yanında nöqtə buludunu açın, onu səviyyə ilə düzləşdirin və divarlarını planda izləyin.
keywords: skan, lazer skanı, nöqtə buludu, tikildiyi kimi, mövcud bina, planalma, izləmə, skandan BIM-ə, skan əsasında model, kəsik, düzləşdir, düzbucaqlı, LAS, LAZ, E57, PLY
from: ce3b9b37
---

## Nə edəcəksiniz

Mövcud binanı onun lazer skanından çəkin: skanın göstərdiyi yerdə divarlar, düz səviyyədə, bir-birinə nəzərən düzbucaqlı.

## Addımlar

1. **Çəkiləcək bina.** {{ui:Fayl}} › {{ui:Yeni bina}}, binanın olduğu qədər səviyyə ilə (səviyyələri sonra da əlavə etmək olar, bax: [Sahə, onun üzərindəki bina və onun səviyyələri](topic:site-building-and-levels)). {{ui:Çək}} aktiv olur.
2. **Skan.** {{ui:Göstər}} › {{ui:Nöqtə buludu}} seçin və faylı seçin (LAS, LAZ, E57, PLY, PCD, PTX və ya XYZ: bax [Modelin yanında nöqtə buludunu göstərmək](topic:point-clouds)). Bulud 3D görünüşdə göstərilir, plan isə onun **kəsiyini** göstərir: səviyyədən 1200 mm (4 fut) yuxarıdakı skan nöqtələri, nöqtə kimi. Divarların, qapıların və pəncərələrin ən yaxşı oxunduğu hündürlük budur.
3. **Səviyyə ilə düzləşdirin.** Model panelindəki {{ui:Skan}} menyusunu açın və {{ui:Onun döşəməsini bu mərtəbəyə uyğunlaşdır}} üzərinə klikləyin: bulud yuxarı və ya aşağı hərəkət edir, nəticədə skan etdiyi döşəmə göstərilən səviyyənin üzərinə oturur. İndi kəsiyin divarları kəsdiyini yoxlayın.
4. **Binaya nəzərən düzbucaqlı edin.** {{ui:Skan}} › {{ui:Binaya nəzərən düzbucaqlı et}} buludu elə fırladır ki, kəsikdəki divarlar planın oxları boyunca uzansın; beləliklə {{key:Shift}} basılı saxlanılmaqla çəkdiyiniz divarlar skanla düzgün üst-üstə düşür. Fırlanma tapılan divarların orta nöqtəsi ətrafında baş verir, ona görə kəsikdə düşən ağac və ya qonşu divar skanı yayındırmır. Əvvəlcə döşəməni düzləşdirin: beləcə kəsik divarları kəsir.
5. **Divarları izləyin.** {{ui:Divar}} seçin və nöqtələr boyunca klikləyin: alət skan nöqtələrinə də, çəkdiyiniz divarlara da tutulur (tutulma işarəsi kiçik romb şəklindədir). Divar öz mərkəz xəttində çəkilir, ona görə divarın verdiyi nöqtələrin iki sırasının ortasına klikləyin; qalınlığı divar növünü əvvəlcə seçməklə yazın. Sonra kəsikdəki boşluqların göründüyü yerlərə qapı və pəncərə əlavə edin.
6. **Növbəti səviyyə.** Plan səviyyə siyahısından yuxarıdakı səviyyəni seçin: kəsik səviyyənin kəsmə hündürlüyünü izləyir. Döşəməni həmin səviyyəyə yenidən uyğunlaşdırın, yalnız skanın döşəmələri səviyyələrinizin olduğu yerdə deyilsə.

## Nəyi görməlisiniz

- Səviyyəni dəyişdikcə kəsik dəyişir, və qalın kəsik ({{ui:Skan}} › {{ui:Kəsik qalınlığı}}) skanın nazik olduğu yerdə daha çox nöqtə göstərir.
- {{ui:Skan}} › {{ui:Uyğunlaşdırmanı geri qaytar}} buludu açıldığı zamanki yerinə qaytarır. Düzləşdirmə buludu yalnız görünüşdə hərəkət etdirir: IFC faylında saxlanmır, və çəkdiyiniz divarlar yerində qalır. Düzləşdirmə {{ui:Yerləşdir}} və ya {{ui:Vahidlər}} dəyişdikdə, ya da başqa model açdıqda buludla birlikdə sıfırlanır.
- {{ui:Skan}} › {{ui:Kəsiyi planda göstər}} nöqtələri gizlədir və ya göstərir.

:::tip
Böyük skanlar: plan kəsikdən 60,000-ə qədər nöqtə çəkir, 3D görünüş isə bütün buludun bir neçə milyon nöqtəsini; hər ikisi skan boyunca bərabər seçilir, ona görə böyük fayl da tez qalır. İzləməni çertyoj tətbiqində etmək üçün bulud panelindəki {{ui:CadCraft-da izlə}} düyməsindən istifadə edin.
:::
