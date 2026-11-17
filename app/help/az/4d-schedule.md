---
title: Tikinti cədvəlini modeldə oynadın
summary: Tapşırıq siyahısını CSV kimi açın, hər tapşırığı xassəyə görə elementlərlə əlaqələndirin və tarixlər üzrə hərəkət edərək nəyin tikildiyini, nəyin davam etdiyini və nəyin hələ başlanmadığını görün.
keywords: 4d, cədvəl, tikinti ardıcıllığı, zaman xətti, mərhələlərə bölmə, proqram, gantt, tapşırıqlar, tarixlər, simulyasiya, irəliləyiş, tikilib, csv, mərhələ, faza, iş paketi, wbs, qrup
from: 1b985a64
---

## Nə edəcəksiniz

Binanın necə qalxdığını izləyin: cədvəldəki hər tapşırıq onun tikdiyi elementlərlə əlaqələndirilir və gün-gün göstərilir.

## Addımlar

1. IFC modelini açın və sol paneldə {{ui:4D cədvəli}} bölməsini açın.
2. Hər mərtəbə üçün bir həftəlik tapşırıq siyahısı üçün {{ui:Şablon yükləyin}} düyməsini basın və onu cədvəl proqramında dəyişdirin. Ya da öz siyahınızı yazın.
3. {{ui:Tapşırıq siyahısını açın…}} düyməsini basın və CSV faylını seçin.
4. Tarix sürgüsünü sürükləyin və ya {{ui:Oynat}} düyməsini basın.

## Tapşırıq siyahısı

Başlıq sətri və **Task**, **Start**, **Finish**, **Field** və **Value** sütunları olan CSV. Vergül və ya nöqtəli vergül ikisi də işləyir.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Level 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Roof | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Roof | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Tarixləri YYYY-MM-DD formatında yazın.
- Sətir tapşırığı, **Field** sahəsi məhz həmin **Value** dəyərinə malik olan hər elementlə əlaqələndirir. Sahə Storey, Class, Name, Type, Material, Tag və ya GlobalId kimi xassədir, ya da çoxluğu və adı ilə yazılmış istənilən xassədir: `Pset_WallCommon.FireRating`.
- Eyni tapşırığı eyni tarixlərlə bir neçə sətirdə təkrarlayın ki, ona daha çox element əlaqələndirilsin.

## Mərhələlər və iş paketləri

Tapşırıqları mərhələlər və iş paketlərinə toplamaq üçün **Stage** sütunu, **Package** sütunu və ya hər ikisini əlavə edin. Phase və WBS da sütun adı kimi işləyir.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Level 1 slab | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Structure | Frame |
| Level 1 walls | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Structure | Frame |
| Doors | 2026-11-30 | 2026-12-04 | Class | IfcDoor | Fit-out | Joinery |

- Tapşırıq bir mərhələyə və bir pakete aiddir. Eyni tapşırığın sonrakı sətri başqasını göstərirsə, həmin sətir sətir nömrəsi ilə siyahıya salınır və kənarda qalır.
- İki mərhələdə eyni paket adı iki ayrı paketdir.

Siyahıda qruplar olduqda tarixin üstündə {{ui:Göstər}} siyahısı görünür. Mərhələ və ya paket seçin, o, bir bütöv kimi oynayır:

- sürgü və {{ui:Oynat}} qrupun ilk başlanğıcından son bitməsinə qədər işləyir,
- yalnız qrupun tapşırıqları siyahıya salınır və rənglənir, qrupdan kənardakı hər şey şəffaf olur,
- siyahının altındakı sətir həmin tarixdə tapşırıqlarından neçəsinin bitdiyini, davam etdiyini və gələcək olduğunu göstərir,
- {{ui:Onun elementlərini seçin}} qrupun hər elementini seçir, {{ui:Göstər}}, {{ui:Kəsik}} və ya cədvəl üçün.

Bütün cədvəli yenidən görmək üçün **Bütün tapşırıqlar** seçin.

## Nə görməlisiniz

- **Tikilib**: bütün tapşırıqları bitmiş elementlər, öz rənglərində.
- **Davam edir**: həmin gün işi gedən tapşırığı olan elementlər, xardal rəngdə. Tapşırıq başlanğıc tarixindən bitmə tarixinə qədər davam edir.
- **Hələ başlanmayıb**: şəffaf.
- Heç bir tapşırığa aid olmayan elementlər olduğu kimi qalır. Siyahıda hər tapşırığın neçə element tapdığı göstərilir. Oxuna bilməyən və ya heç nə tapmayan sətirlər sətir nömrələri ilə siyahıya salınır.

## Keçidlər, Gantt diaqramı və MS Project

- Microsoft Project XML faylını (`.xml`) və ya `Predecessors` sütunu olan CSV-ni açın. Keçidlər bitmə–başlanma, başlanma–başlanma, bitmə–bitmə və ya başlanma–bitmə ola bilər, hər biri günlərlə qabaqlama və ya gecikmə ilə.
- Tapşırıq siyahısının altında Gantt diaqramı hər tapşırığı keçidlər üçün oxlarla bir zolaq kimi çəkir. Kritik yoldakı tapşırıqlar qırmızıdır. Keçid döngəsi və ya mövcud olmayan sələf paneldə siyahıya salınır.
- {{ui:MS Project XML kimi saxla}} və {{ui:Keçidlərlə CSV saxla}} cədvəli keçidləri ilə birlikdə geri yazır.

## Növbəti

- [Sinif, ad və ya xassə üzrə elementləri tapın](topic:find)
- [Elementləri xassəyə görə rənglərlə göstərin](topic:color-by-property)
