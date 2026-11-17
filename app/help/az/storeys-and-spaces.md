---
title: Mərtəbələri, məkanları və kənarları göstərin və gizlədin
summary: Binanın içinə baxmaq üçün mərtəbələri söndürün, otaqları və məkanları göstərin, kənar xətləri açıb-bağlayın.
keywords: mərtəbələr, səviyyələr, döşəmələr, gizlət, təcrid et, otaqlar, məkanlar, ifcspace, kənarlar, görünürlük, kəsik
from: b838dcc0
---

## Nə edəcəksiniz

Diqqət etdiyiniz mərtəbədən yuxarıdakı mərtəbələri söndürərək IFC modelinin içinə baxın, sonra otaqları və məkanları göstərin və təmiz görünüş üçün kənar xətləri söndürün.

## Addımlar: bir mərtəbəyə baxın

1. IFC modeli açın. Bax [IFC modelini açmaq və 3D-də gəzmək](topic:open-ifc-model).
2. Soldakı {{ui:Mərtəbələr}} siyahısını tapın. Ən yuxarı mərtəbə birincidir, kəsiyi damdan aşağı oxumaq kimi.
3. Damı və istədiyiniz mərtəbədən yuxarıdakı hər mərtəbənin işarəsini çıxarın.
4. Həmin mərtəbənin üstünə baxmaq üçün {{ui:Üst}} klikləyin.
5. Mərtəbələrin işarəsini yenidən qoyaraq onları geri qaytarın.

## Nəyi görməlisiniz

İşarəsini çıxardığınız hər mərtəbə, üzərindəki hər şeylə birlikdə, dərhal yox olur. Siyahıda yalnız görünən bir şey olan mərtəbələr göstərilir. Heç bir mərtəbəyə təyin olunmayan elementlər aşağıda **Mərtəbədə deyil** adı altında qruplaşdırılır; sahə elementləri və bəzi mebellər çox vaxt orada olur.

## Addımlar: otaqları və məkanları göstərin

1. Modelin üstündəki alətlər zolağında {{ui:Məkanlar}} klikləyin. Düymə basılı qalır.
2. Modelə baxın: otaqlar və məkanlar solğun, şəffaf həcmlər kimi görünür.
3. Məkanın xassələrini — məsələn adını, nömrəsini və sahəsini — sağda oxumaq üçün ona klikləyin.
4. Onları gizlətmək üçün {{ui:Məkanlar}} yenidən klikləyin.

Məkanlar model açılanda gizlidir, çünki əks halda divarları və döşəmələri örtərdilər.

## Addımlar: kənarlar

1. İncə kənar xətlərini söndürmək üçün {{ui:Kənarlar}} klikləyin.
2. Yenidən açmaq üçün yenidən klikləyin.

Çox böyük modellərdə (1,5 milyon üçbucaqdan çox) düymə boz olur və "Çox böyük modellər üçün kənarlar söndürülüb" ipucu göstərir. Bu yaddaşa qənaət edir.

## Tez-tez edilən səhvlər

- **Mərtəbənin işarəsini çıxarıb, amma onun hissələrini hələ də görmək.** Element ixrac edən proqramın təyin etdiyi mərtəbəyə aiddir. Hündür divar və ya pilləkən çox vaxt yalnız baza mərtəbəsinə aid olur, buna görə yuxarıdakı mərtəbə gizlədildikdə qalır, ya da aşağıdakı mərtəbə ilə birlikdə yox olur.
- **Daxilə baxmaq üçün mərtəbələri gizlətmək.** Kəsik qutusu çox vaxt daha tezdir: bax [IFC modelini kəsik müstəvisi ilə kəsmək](topic:section-plane#a-section-box). Həmçinin {{ui:Model ağacı}}-nda sətirlərin işarəsini çıxara bilərsiniz (bax [Model ağacı ilə yolunuzu tapın](topic:model-tree)).
- **Divarın arxasındakı məkana klikləmək.** Klik ən yaxın görünən səthi seçir. Yuxarıdakı mərtəbəni gizlədin, ya da {{ui:Üst}} rejiminə keçin, sonra klikləyin.
- **Mərtəbə adları qəribə görünür.** BimCraft faylda saxlanılmış mərtəbə adlarını göstərir. Əgər "Level 1" və ya nömrə yazılıbsa, deməli ixrac edən belə yazıb.
