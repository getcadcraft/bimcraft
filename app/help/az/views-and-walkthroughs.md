---
title: Görünüşləri və gəzintiləri saxlayın
summary: Modelin kamera görünüşlərini ad üzrə saxlayın, onlara qayıdın, bir-birinin ardınca oynadın və saxlanmaq üçün binanın içindən gəzinti yazın.
keywords: görünüşlər, saxlanılmış görünüşlər, kamera, kameralar, baxış nöqtəsi, səhnə, səhnələr, tur, təqdimat, gəzinti, binanı gəz, uçuş, yazmaq, oynatmaq, yol, animasiya
from: 3af19a36
---

{{ui:Görünüşlər}} alətlər panelində modelin fayl içində 3D görünüşün kameralarını saxlayır, siz və ona göndərdiyiniz hər kəs birbaşa onlara qayıda bilər.

## Görünüşü saxlayın

1. 3D görünüşü qurun: fırladın, miqyaslayın, istəmədiyinizi gizlədin.
2. {{ui:Görünüşlər}} basın, ad yazın (və ya təklif olunanı saxlayın) və {{ui:Görünüşü saxla}} basın ya da {{key:Enter}} basın.

Siyahıdakı adla saxlamaq həmin görünüşü yeniləyir. Görünüşün adına basın; kamera oraya hamarlıqla keçir.

Oxlar sırasını dəyişir, qələm adı dəyişir, zibil qutusu silir. Hər dəyişiklik bir addımdır, buna görə {{key:Ctrl+Z}} onu geri qaytarır.

## Görünüşləri oynadın

{{ui:Görünüşləri göstər}} siyahının sırası ilə növbəti görünüşə keçir, hər birində bir az dayanaraq. {{key:Esc}} və ya {{ui:Dayandır}} onu bitirir.

## Gəzinti yazın

1. [Gəz](topic:walk) açın və binanın içində gəzməyə başlayın.
2. {{ui:Görünüşlər}} daxilində {{ui:Gəzintini yaz}} basın.
3. {{key:W}} {{key:A}} {{key:S}} {{key:D}} ilə gəzin və siçanla ətrafa baxın.
4. {{ui:Yazmanı dayandır}} basın. Gəzinti "Gəzinti 1" adı ilə, uzunluğu ilə birlikdə saxlanılır.

Gəzintiyə basın ki, onu gəzdiyiniz kimi oynadın. {{key:Esc}} onu dayandırır.

## Gəzintini video kimi render edin

Gəzintinin yanındakı kino ikonuna basın. Video dialoqu gəzintinin hər kadrını son seçdiyiniz vizuallaşdırma parametrləri ilə çəkir, buradan seçdiyiniz ölçüdə, kadr sürətində və keyfiyyətdə. Onu WebM və ya MP4 video kimi, ya da hər kadr üçün bir şəkil olan ZIP kimi saxlayın. Kadrlar şəkillər kimi vaxt aparır, buna görə {{ui:Sürətli}} ilə başlayın.

## Gəzintiyə şərh yazın

Gəzintinin yanındakı nitq baloncuğu ikonuna basın. Deyilən hər şey üçün bir sətir yazın və sətiri onun başladığı vaxtla başlayın (`12`, `0:12` və ya `1:02.5`); vaxtı olmayan sətir yuxarıdakı sətirdən sonra, onu demək üçün lazım olan vaxt qədər izləyir. Dili seçin, izləyəcək tərəfin dilində. {{ui:Önizləmə}} sözləri bu kompüterin öz səsi ilə oxuyur və onları altyazı kimi göstərir; gəzinti oynadılanda eyni olur. {{ui:Gəzintinin içində saxla}} şərhi gəzinti ilə birlikdə IFC-də saxlayır.

Öz qoşulmuş köməkçiniz şərhi sizin üçün yaza bilər: ondan gəzintiyə və saxlanılmış görünüşlərə baxmasını istəyin, o da adlandırdığınız dildə sətirləri bir geri qaytarma addımı olaraq qoyur.

Vizuallaşdırılmış videonun öz səsi yoxdur, çünki brauzer öz səsini yaza bilmir. Altyazıları (`.srt` və ya `.vtt`) saxlayın və videoya video pleyerinizdə və ya redaktorunuzda əlavə edin. Hansı səsləri seçə biləcəyiniz kompüterdən asılıdır: quraşdırılmamış səsi olan dil yenə altyazı alır.

## Faylda

Görünüşlər və gəzintilər IFC-də layihədə `CadCraft_Views` xassə dəsti kimi saxlanılır: digər proqramların nəzərə almadığı sadə IFC. Onlar birinci modelin koordinatlarındadır, buna görə model yenidən yükləndikdən və ya başqa model əlavə olunduqdan sonra da yerinə uyğun gəlir.

:::tip
Saxlanılmış görünüşdən şəkil vizuallaşdırmaq üçün görünüşə gedin, sonra [Vizuallaşdırma](topic:render) basın.
:::
