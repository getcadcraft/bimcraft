---
title: Modeli render proqramına göndərin
summary: 3D görünüşdə göstərilənləri materialları, teksturaları və lampaları ilə glTF modeli (.glb) kimi saxlayın; glTF oxuyan render və vizuallaşdırma proqramları üçün.
keywords: glb, gltf, gl transmission format, ixrac, render, vizuallaşdırma, real vaxt, archviz, materiallar, teksturalar, lampalar, işıqlar, aktiv, fərdi aktiv
from: e62d57dc
---

{{ui:Render üçün}} alət panelində 3D görünüşdə göstərilənləri bir **.glb** faylı kimi saxlayır (glTF 2.0, Khronos Group-un açıq formatı). glTF oxuyan render proqramları onu modelin materialları və lampaları ilə açır; Twinmotion glTF və GLB-ni idxal etdiyi həndəsə faylları arasında sadalayır və onların işıqlarını saxlayır (Epic-in sənədləri, "Importing geometry in Twinmotion"): {{ui:Render üçün}} düyməsini istifadə edin və .glb faylını orada idxal edin. Heç nə yüklənmir: fayl bu kompüterdə yaradılır.

## Saxlayın

1. IFC modelini açın və 3D görünüşü qurun: istəmədiyiniz mərtəbələri, elementləri və ya əlaqəli modelləri gizlədin, və görmək istədiyiniz [materialları boyayın](topic:paint-materials).
2. {{ui:Render üçün}} klikləyin (və ya `GLB` yazın).
3. Fayl "<model adı>.glb" adı ilə yüklənir. Status paneli neçə üçbucaq, material və lampa saxladığını deyir.

## Faylda nə var

- **Həndəsə** 3D görünüşün göstərdiyi hər elementin, metrlə, Y yuxarı ilə (glTF-in öz oxları). Hər mərtəbə və material üçün bir obyekt, "Level 1 — Brick, red" kimi adla, beləliklə render proqramında materialı seçib öz materialı ilə əvəz edə bilərsiniz.
- **Materiallar:** hər rəng [Vizuallaşdırma](topic:render)-da seçdiyiniz görünüşlə (matt, saten, parlaq, metal, şüşə…), və hər boyanmış kitabxana materialı öz rəngi, pürüzlülüyü və **teksturası** ilə (onun şəkli fayla daxil edilir, real ölçüsünə uyğun ölçüdə: kərpic kərpicin ölçüsündədir). Şüşə şəffafdır.
- **Lampalar:** Vizuallaşdırma › Lampalar-da yandırılmış hər işıq armaturu, nöqtə və ya spot işıq kimi parlaqlığı ilə (lümen kandelaya çevrilib), rəngi və şüa bucağı ilə.
- **Sahənin yeri:** sahənin enlik və uzunluğu istinad üçün faylda yazılır. Render proqramlarının öz günəşi var: yeri orada yazın.

## Nəyi buraxır

- Kəsim (bütün elementlər daxil olur) və şəffaf göstərilən elementlər (onlar çıxarılır).
- Hər element üçün ayrıca obyektlər (əvəzində hər mərtəbə və material üçün bir obyekt), IFC xüsusiyyətləri, bump xəritələri, saxlanılmış görünüşlər və yazılmış gəzintilər.
- Kənarlar və fon.

## Enscape və digər plaginli render proqramları

Enscape başqa dizayn proqramı daxilində işləyir və bütün layihəni açmaq üçün faylı yoxdur. İki yol var:

- Modelin **IFC**-sini (Fayl › Saxla) Enscape-in işlədiyi proqramda açın; onların əksəriyyəti IFC oxuyur. Rənglər gəlir; kitabxana materialları öz rəngləri kimi gəlir.
- **Kiçik hissəni** (mebel, qurğu) fərdi aktiv kimi gətirin: əvvəlcə onu təcrid edin, sonra {{ui:Enscape üçün (.gltf)}} klikləyin. Enscape-in fərdi aktiv kitabxanası .gltf, .obj və .fbx faylarını sadalayır, .glb faylını yox, buna görə bu düymə eyni səhnəni tək özünə bağlı bir **.gltf** faylı kimi saxlayır (ikili məlumat və şəkillər faylın içindədir; onunla birlikdə kopyalanacaq başqa heç nə yoxdur). Enscape kiçik aktivləri (təxminən 20,000 üçbucaqdan az) tövsiyə edir.

:::note
CadCraft Studio-da eyni glTF faylı (və USD faylı) {{ui:Vizuallaşdırma}} › Mühərrik › **glTF faylı** / **USD faylı** menyusundan saxlana və ya bu kompüterdəki proqramda birbaşa açıla bilər: bax [Səhnəni başqa proqramda açın](topic:render-open-in). Enscape və ya Twinmotion üçün plagin və ya canlı bağlantı qurulmayıb. FBX və Datasmith formatlarının dərc olunmuş spesifikasiyası yoxdur, buna görə BimCraft onları yazmır; açıq yol glTF-dir.
:::
