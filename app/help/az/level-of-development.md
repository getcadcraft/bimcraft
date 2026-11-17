---
title: İnkişaf səviyyəsi (LOD) və mərhələ yoxlamaları
summary: Elementlərə inkişaf səviyyəsi verin, onun haradan gəldiyinə baxın, modeli mərhələnin tələb etdiyi LOD ilə yoxlayın və çatışmayan etiketləri və adsız otaqları düzəldin. Hər yoxlama məsləhət verir; heç nə bloklanmır.
keywords: lod, inkişaf səviyyəsi, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, mərhələ, mərhələ cədvəli, model yoxlamaları, çatışmayan etiketlər, adsız otaqlar, erkən ümumi, ifc sinfi, təsnifat
from: 2091c79b
---

## Nə edəcəksiniz

Hər elementin nə dərəcədə inkişaf etdiyini bildirin, sonra bütün modeli layihə mərhələsinin tələb etdiyi ilə yoxlayın.

## Addımlar

1. Bir elementi (və ya bir neçəsini) seçin və {{ui:Properties}} (Xassələr) bölməsini açın. {{ui:Level of development}} (İnkişaf səviyyəsi) sahəsini tapın.
2. Siyahıdan səviyyə seçin. Hər səviyyə nəyi bildirdiyinə görə adlanır və özündən aşağı səviyyələri də əhatə edir. Bir geri qaytarma addımı bütün seçimi əhatə edir.
3. Səviyyənin haradan gəldiyini oxuyun: bu element, onun tipi və ya sahədə yoxlanılmış işarə.
4. Modeli yoxlamaq üçün soldakı {{ui:Model checks}} (Model yoxlamaları) bölməsini, sonra LOD mərhələləri bölməsini açın. Mərhələni və cədvəli seçin (başlanğıc cədvəl və ya {{ui:Load}} (Yük) ilə yüklədiyiniz öz CSV və ya JSON faylınız).
5. Modeli yoxlayın düyməsinə klikləyin. Yekunlar və cədvəlin hər sırası üçün xətt göstərir ki, nə öz səviyyəsinə çatıb, nə də çatmayıb; tapıntılar Problemlər siyahısında da görünür.
6. {{ui:Missing tags and unnamed rooms}} (Çatışmayan etiketlər və adsız otaqlar) altında {{ui:Find them}} (Tapın) düyməsinə klikləyin, istəsəniz təklifləri redaktə edin və {{ui:Apply}} (Tətbiq et) düyməsinə klikləyin.

## Nəyi görməlisiniz

- Elementdə seçdiyiniz səviyyəni, yanında isə onun IFC sinfini və təsnifat kodlarını.
- Mərhələ üçün yekunları və sətirləri. Cədvəl heç vaxt səviyyənin mənasını dəyişmir: miqyas sabitdir, cədvəl yalnız hansı mərhələnin hansı səviyyəni tələb etdiyini göstərir.
- "Erkən ümumi saxlamaq": erkən mərhələdə elementləri ümumi saxlamaq üçün məsləhət. Bu yalnız məsləhətdir.

## Bilmək faydalıdır

- Burada heç nə bloklanmır. Mərhələnin tələb etdiyi səviyyədən aşağı model rədd edilmir, siyahıya salınır.
- Səviyyənin üç hissəsi (həndəsə, məlumat, sənədləşmə) hər biri ayrıca təyin oluna bilər; işarə göstərir: çatıb, aşağıdır və ya göstərilməyib.
