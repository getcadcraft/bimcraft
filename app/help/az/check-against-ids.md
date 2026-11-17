---
title: Modeli müştərinin IDS-inə görə yoxlayın
summary: Sizə verilmiş .ids faylını yükləyin və IFC-ni təhvil verməzdən əvvəl ona cavab verməyən hər elementi Xəbərdarlıqlarda görün.
keywords: ids, information delivery specification, buildingsmart, tələblər, təhvil, yoxlama, validasiya, keyfiyyət nəzarəti, eir, bep, xassə, təsnifat, material, satınalma
from: 7b960222
---

## Nə edəcəksiniz

IDS (Information Delivery Specification, buildingSMART standartı) IFC-nin nələri ehtiva etməli olduğunu göstərən siyahıdır: hansı siniflər, hansı dəyərlərlə hansı xassələr, təsnifatlar, materiallar, elementlərin harada yerləşməli olduğu. Müştərilər və dövlət satınalmaları işlə birlikdə belə bir fayl göndərir. BimCraft açıq IFC modelini onunla yoxlayır və tələblərə cavab verməyən hər elementi siyahıya salır.

## Addımlar

1. IFC modelini açın.
2. Sol paneldə, {{ui:Model yoxlamaları}} altında {{ui:IDS ilə yoxlayın}} bölməsini açın və ya menyu üslubunuzun menyusundan {{ui:IDS-ə görə yoxla…}} seçin.
3. {{ui:.ids faylı yükləyin…}} düyməsinə klikləyin və faylı seçin. Heç bir şey göndərilmir.
4. Nəticəni oxuyun: hər spesifikasiya {{ui:Keçdi}} və ya {{ui:Uğursuz}} ilə və neçə elementə tətbiq olunduğu göstərilir.
5. {{ui:Problemlər}} deyil, **Xəbərdarlıqlar** panelini açın ({{key:Ctrl+Shift+M}}) və uğursuzluğa klikləyin ki, element seçilsin və ona yaxınlaşılsın.

## Nə görməlisiniz

- Elementin hər çatışmayan tələbi üçün bir xəbərdarlıq: spesifikasiyanın adı, IDS-in nə tələb etdiyi və elementdə nə olduğu ilə.
- Modeldə heç nə ilə uyğun gəlməyən tələb olunan spesifikasiya ayrıca bir xəbərdarlıqdır.
- Xəbərdarlıqlardakı yoxlama hesabatı IDS-lə başlayır: onun adı, başlığı, versiyası, müəllifi və hər spesifikasiyanın tətbiq olunan, keçən və uğursuz sayları.

## Yaxşı bilmək lazımdır

- IFC yalnız IDS-ə istinadı saxlayır (adı, başlığı, versiyası və hash-i), IDS-in özünü yox: müştərinin IDS-i məxfi ola bilər, IFC isə başqa adamlara göndərilir. IDS bu brauzerdə model yanında qalır, buna görə saxlanmış IFC-ni burada yenidən açanda o yenidən yoxlanılır. IDS-i yükləmək və ya unutmaq geri qaytarıla bilən bir addımdır.
- Başqa kompüterdə və ya başqa brauzerdə açıldıqda Xəbərdarlıqlar IDS-in tapılmadığını bildirən qeyd göstərir: yenidən yoxlamaq üçün onu yenidən yükləyin.
- IDS-i IFC ilə birlikdə göndərmək üçün, yükləməzdən əvvəl Parametrlərdə, BimCraft bölməsində {{ui:IDS-i IFC-nin içində saxla}} seçimini aktiv edin.
- Hər redaktə, geri qaytarma və təkrarlama bir az sonra yenidən yoxlanılır.
- Dəyərlər IDS qaydası ilə müqayisə olunur: mətn tam olaraq (böyük və kiçik hərf fərqlidir), ədədlər SI vahidlərində kiçik tolerantlıqla (uzunluqlar metrlə, buna görə millimetrlə olan model əvvəl çevrilir).
- Başqa IFC versiyası üçün yazılmış spesifikasiya (məsələn, model IFC4 olduqda IFC2X3) yenə də yoxlanılır; nəticə bunu bildirir.
- Əgər IDS faylında IDS auditinin qeyd edəcəyi nöqsanlar varsa, dialoq onları sadalayır; onların içində olan spesifikasiyalar uğursuz sayılır.
- İstənilən problem kimi, uğursuzluğu səbəbi ilə qəbul edə bilərsiniz. Elementin dəyərləri eyni qaldığı müddətcə qəbul edilmiş qalır.

- IDS-dəki şablonlar bütöv dəyər kimi oxunur. Əvvəldə `^` və sonda `$` simvolları da, əksər IDS fayllarının nəzərdə tutduğu kimi, "bütöv dəyər" kimi qəbul edilir.

## Növbəti

- [Modeli ümumi problemlərə görə yoxlayın](topic:model-checks)
- [Divarı və ya qapını dəyişin](topic:change-a-wall-or-door)
