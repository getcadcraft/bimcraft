---
title: BimCraft hər formatdan nə oxuyur
summary: BimCraft IFC, layihə və ailə fayllarından, DWG və DXF-dən dəqiq nəyi oxuyur və nəyə toxunmur.
keywords: formatlar, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versiyalar, uyğunluq, nə oxunur
from: 9b8dfb4f
---

## IFC

| Oxunur | Təfərrüat |
|---|---|
| Həndəsə | Forması olan hər element, faylın dediyi rənglə. Otaqlar və məkanlar şəffaf çəkilir və ilk baxışda gizlədilir |
| Mərtəbələr | Binanın mərtəbələri hündürlük sırası ilə və hər birində hansı elementlərin olduğu. Heç bir mərtəbədə olmayan elementlər "Mərtəbədə deyil" kimi qruplaşdırılır |
| Elementlərin sayı | Hər növdən neçə element (divarlar, qapılar, döşəmələr…), {{ui:Elements}} bölməsində göstərilir |
| Layihə məlumatları | Layihənin adı, uzun adı və mərhələsi; sxem; faylın başlığından ixrac edən proqram, müəllif və ixrac tarixi |
| Element məlumatları | Ad, tip, obyekt tipi, etiket, təsvir, GlobalId; elementdə və onun tipində olan hər xassə dəsti və kəmiyyət dəsti |

Dəyişdirilə bilən: ad, obyekt tipi, etiket, təsvir və tək xassə dəyərləri. Yeni IFC faylı kimi saxlanılır. IFC2X3, IFC4 və IFC4X3 sxemləri açılır, BimCraft-ın öz IFC mühərriki oxuyur; hələ çəkə bilmədiyi hər şey {{ui:File}} panelində **Hələ çəkilməyib** altında siyahılanır. Model açılanda başlanğıc nöqtəyə köçürülür, buna görə ondan uzaqda yerləşdirilmiş model yenə də ekranın ortasında görünür. `.ifczip` və `.ifcxml` açılmır.

## Layihə və ailə faylları

`.rvt` layihələri, `.rte` layihə şablonları, `.rfa` ailələr və `.rft` ailə şablonları.

| Oxunur | Təfərrüat |
|---|---|
| Fayl məlumatı | Buraxılış və quruluş, işçi paylaşımı, mərkəzi model yolu, son saxlanılan yol, istifadəçi adı, dil ayarı, sənədin GUID-i |
| Layihə məlumatı | Layihənin öz sahələri (ad, nömrə, müştəri, ünvan, status…), yeni layihə standart dəyərləri olmadan |
| Ailə məlumatı | Ailənin adı, kateqoriyası, buraxılışı, son yenilənməsi və parametrləri qrupa görə |
| Əlaqələr | Faylın göstərdiyi əlaqəli modellərin, CAD əlaqələrinin, şəkillərin və açar sözlərin cədvəllərinin siyahısı |
| Önizləmə şəkli | Faylda saxlanılmış miniatür |

Oxunmur: 3D model, elementlər, görünüşlər, vərəqlər və cədvəllər. Onlar sənədləşdirilməmiş formatda saxlanılır. BimCraft hər fayldan yalnız bir neçə on kilobayt oxuyur, buna görə fayl ölçüsü az əhəmiyyət daşıyır.

## .pln, .pla, .tpl və .bpn layihə faylları

Hələ oxunmur: BimCraft bunu açanda deyir. Model üçün IFC, çertyojlar üçün DWG ixrac edin; bax [.pln və .pla layihə fayllarının açılması](topic:pln-project-files).

## DWG və DXF

| Oxunur | Təfərrüat |
|---|---|
| Məkanlar | Model məkanı və hər vərəq (layout), sekmə sırası ilə |
| Görünüşlər (viewport) | Hər vərəqin görünüşləri, miqyası, fırlanması və dondurulmuş qatları ilə |
| Qatlar | Ad, rəng, açıq/bağlı, dondurulmuş, çap bayrağı və xətt qalınlığı |
| Obyektlər | Xətlər, polixətlər, qövslər, dairələr, ellipslər, splaynlər, ştrixləmələr və dolu cisimlər, mətn və çoxsətirli mətn, bloklar və atributlar, ölçülər, istinad xətləri və çoxlu istinad xətləri, cədvəllər, nöqtələr, şəkillər |
| Əlaqəli çertyojlar | Daxil edildikləri yerdə çəkilir, fayllar tapılanda |
| Şəkillər | Tapılanda şəkil fayllarından çəkilir (PNG, JPEG, GIF, BMP, WebP; TIFF yox) |
| Avadanlıq etiketləri | Yemək xidməti element etiketləri (`KCL-ITEM` atributları), avadanlıq cədvəli üçün |

Qalan hər şey **Hələ çəkilməyib** altında sayılır, heç vaxt təxmin olunmur. Yoxlanılmış DWG formatları AutoCAD 2000-dən 2018-ə qədərdir (R13 və R14 fayllar da qəbul olunur, amma test dəstində heç biri olmayıb; daha köhnə DWG-lər açılmır). {{ui:Drawing}} paneli format kodunu (məsələn AC1032) göstərir. Hər versiyanın DXF faylı açılır, R12 də daxil. Hər ikisi BimCraft-ın öz oxuyucuları ilə, bu nişanda oxunur. DWG və ya DXF-ə heç nə geri yazılmır.

## Qovluqda

| Növ | Genişlənmələr | Hesabatda |
|---|---|---|
| Modellər | `.rvt` `.rfa` `.rte` `.rft` | Nömrələnmiş ehtiyat nüsxələrlə qruplaşdırılır, sağlamlıq yoxlanılır, kart oxunur, əlaqələr yoxlanılır |
| IFC | `.ifc` | Siyahıya salınır; 3D-də açılır |
| CAD | `.dwg` `.dxf` `.dgn` | Onları əlaqələndirən modellərlə birlikdə siyahıya salınır; DWG və DXF 2D-də açılır, DGN açılmır |
| Artıqlar | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | **Kənara qoyulub** altında siyahılanır |
| Təmizlik qovluqları | `*_backup`, `*_log`, `Revit_temp`, gizli qovluqlar | **Kənara qoyulub** altında siyahılanır, oxunmur |

Bax [Qovluq hesabatı: rollar, statuslar və əlaqələr](topic:folder-roles).
