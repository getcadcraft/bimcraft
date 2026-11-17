---
title: Modeli USD kimi ixrac edin
summary: Açıq IFC modellərini render, səhnə yığımı və digər 3D proqramlar üçün USD kimi yazın; hər elementin IFC sinfi, GlobalId və xassələri ilə birlikdə.
keywords: usd, usda, usdc, usdz, openusd, ixrac, ifc, globalid, xassələr, mərtəbələr, sahələr, səhnə yığımı, arxvizuallaşdırma, vizuallaşdırma
from: 2be5f7b8
---

{{ui:USD}} alətlər panelində açıq olan hər şeyi (bütün modelləri, yerləşdirdiyiniz federativ modelləri daxil olmaqla) bir USD faylı kimi yazır.

## İxrac

1. Alətlər panelində {{ui:USD}} seçin.
2. {{ui:Mətn (.usda)}}, {{ui:İkili (.usdc)}} və ya {{ui:Paket (.usdz)}} seçin.
3. Fayl yüklənir. Status paneli neçə elementin daxil edildiyini göstərir.

## Faylda nə var

| IFC modelində | USD faylında |
|---|---|
| Sahə, bina, mərtəbələr | İç-içə qruplar, mərtəbələr hündürlük sırası ilə |
| Hər element | Öz mərtəbəsi və sahəsi altında bir prim (Arxitektura, Konstruksiya, MEP, Mebel, Tikinti sahəsi, Məkanlar, Digər), həndəsəsi mesh kimi |
| Sinif, GlobalId, ad, tip, etiket | `ifc:class`, `ifc:globalId`, `ifc:name` və s. adlı atributlar |
| Xassə və kəmiyyət dəstləri | Hər xassə üçün bir atribut; uzunluqlar, sahələr və həcmlər metrlə, kvadrat metrlə və kub metrlə |
| Rənglər | Materiallar (şəffaflıqla) |
| Məkanlar | Saxlanılır; render proqramları onları ötürsün deyə bələdçi kimi işarələnir |

Həndəsə IFC faylının öz koordinatlarında yerləşir. Quruluş CadCraft-ın binalar üçün yazılı USD konvensiyalarına uyğundur.
