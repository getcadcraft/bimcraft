---
title: Nöqtə buludunu modelin yanında göstərin
summary: Lazer skanını (LAS, LAZ, E57, PLY, PCD, PTX, PTS və ya XYZ) tək başına və ya IFC modeli ilə 3D görünüşündə açın, rəngləndirin, içindən nazik kəsik kəsin, nöqtələrinə qədər ölçün və as-built xətlərini izləmək üçün çertyoj proqramına ötürün.
keywords: nöqtə buludu, lazer skanı, skan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, as-built, as built, planalma, qeydiyyat, kəsik, plan kəsiyi, tutma, ölçmə, izləmə, skandan BIM-ə
from: d0a3e740
---

## Nə edəcəksiniz

Binanın lazer skanına onun modelinin yanında baxın: tikilmiş olanın layihəyə uyğun olduğunu yoxlayın, skanlanmış nöqtələr arasında ölçün və divarları, qapıları və sütunları oxumaq üçün nazik kəsik kəsin.

## Addımlar

1. Buludu açın: `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` və ya `.xyz` faylını {{ui:Açıq}} ilə açın və ya səhifəyə sürükləyib buraxın (hər birinin nə gətirdiyini və skanerin öz proqramından nə ixrac etmək lazım olduğunu nöqtə buludu formatları mövzusunda görün). Model açıq olduqda bulud 3D görünüşündə modelə qoşulur; buludu açmaq heç vaxt modeli və onun saxlanmamış dəyişikliklərini bağlamır. Model olmadan bulud təkbaşına açılır.
2. Alətlər çubuğunun altında bulud paneli görünür. Neçə nöqtənin göstərildiyini və faylda neçə nöqtə olduğunu bildirir.
3. {{ui:Rənglə}} seçin: faylın öz rəngləri (skaner onları saxladıqda), {{ui:Hündürlük}}, {{ui:İntensivlik}}, {{ui:Sinif}} (LiDAR sinifləri, məsələn yer, bitki örtüyü və bina) və ya {{ui:Bir rəng}}. {{ui:Ölçü}} nöqtələri böyüdür və ya kiçildir.
4. {{ui:Kəsik}} altında {{ui:Plan}} düyməsini basın: ən aşağı nöqtədən 1,2 m yuxarıda nazik zolağı, yuxarıdan baxılmış halda saxlamaq üçün. Divarlar, qapı açılışları və sütunlar mərtəbə planı kimi oxunur. {{ui:Ön}} və {{ui:Yan}} fasadlar və kəsiklər üçün şaquli zolaqlar kəsir. Zolağı {{ui:Hündürlükdə}} ilə hərəkət etdirin və {{ui:Qalınlıq}} (metrlə) dəyişin. {{ui:Söndür}} bütün buludu yenidən göstərir.
5. Alətlər çubuğunda {{ui:Ölç}} düyməsini basın. Göstərici bulud nöqtələrinə yapışır (etiket "nöqtə buludu" deyir), belə ki, kəsikdə divardan divara ölçə və ya model elementindən skanadək ölçə bilərsiniz. Əlçatan model küncü və ya kənarı yenə də üstün gəlir.
6. {{ui:Ölç}} › {{ui:Yer}} ilə bulud nöqtəsi, buludun öz koordinat sistemi adlandırılmış olduqda, onun enlik və uzunluq koordinatlarını verir.
7. {{ui:Gizlət}} buludu bir müddət gizlədir; {{ui:Sil}} onu çıxarır. {{ui:Göstər}} › {{ui:Nöqtə buludu}} paneli gizlədir və ya göstərir.

## Bulud haraya gedir

{{ui:Yerləşdir}} paneldə buludun modellə necə düzləndiyi göstərilir:

- **Model koordinatları**: buludun rəqəmləri modelin öz rəqəmləridir (layihənin koordinatlarına qeydiyyatdan keçmiş skan).
- **Xəritə koordinatları**: model xəritə çevrilməsinə malikdir (IfcMapConversion) və bulud eyni proyeksiya sistemindədir: bulud onun vasitəsilə yerləşdirilir. İkisi fərqli sistem adlandırırsa, status sətri bunu deyir.
- **Modelin mərkəzinə görə**: heç biri buludu modelin yaxınlığına qoymadıqda, onun mərkəzi modelin mərkəzinə, ən aşağı nöqtəsi isə modelin döşəməsinə düşür. Bunu əvəz etmək üçün başqa seçim edin.

Faylda vahidlər göstərilmədikdə BimCraft metri qəbul edir və panelda {{ui:Vahidlər}} təklif edir.

## As-built xətlərini izləyin

Buludu yeni sekmədə çertyoj proqramına ötürmək üçün {{ui:CadCraft-da izlə}} düyməsini basın. Orada bulud çertyojun altında açılır, burada plan kəsiyi və obyekt tutma divarları skanın üzərində çəkməyə imkan verir. Bax CadCraft mövzusu nöqtə buludları haqqında.

## Neçə nöqtə

Skan yüz milyonlarla nöqtə saxlaya bilər. BimCraft hər nöqtəni bir dəfə oxuyur və çəkmək üçün bərabər pay saxlayır: paneldə {{ui:Göstər}} neçə nöqtə olacağını təyin edir (1, 2, 5 və ya 10 milyon). Daha çox nöqtə daha çox yaddaş və daha sürətli qrafik kart tələb edir. LiDAR sinifinə görə saylar faylın bütün nöqtələri üzrə verilir.

:::note
Fayllar bu kompüterdə oxunur; heç nə yüklənmir. LAS 1.0–1.4 və LAZ oxunur (LAZ fayllar 1 GB-a qədər, oxunarkən yaddaşda saxlanılır); E57 hazırda 6 milyon nöqtəyə və 512 MB-a qədər (daha böyük skanlar: LAS və ya LAZ ixrac edin); PLY, PCD və PTX tam oxunur; mətn buludları `x y z`-dir, olduqda rəng (`r g b`) və intensivlik sütunları ilə.
:::

## Bir neçə skan

Müxtəlif mövqelərdən alınmış skanlar bir çərçivəyə qeydiyyata alına, ICP ilə dəqiqləşdirilə və bir LAS və ya E57 kimi ixrac edilə bilər: bax [Bir neçə skanı bir yerə qeydiyyata alın](topic:register-scans).
