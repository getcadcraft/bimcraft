---
title: İki nəfərin eyni modeldə etdiyi redaktələri birləşdirin
summary: Git, Fossil və ya Mercurial ilə eyni IFC modelinin iki redaktə olunmuş nüsxəsini obyekt-obyekt birləşdirin ki, iki nəfər eyni binada çəkə və işi birləşdirə bilsin.
keywords: birləşdirmə, git, fossil, mercurial, versiya nəzarəti, konflikt, üç tərəfli, cadcraft merge, gitattributes, ifc, globalid, komanda, iki nüsxə, budaqlar
from: 50733df8
---

Bir binanın nüsxəsi üzərində iki nəfər çəkir: biri şərq qanadını, digəri qərbi. Sonra nüsxələr bir olmalıdır. Əgər onlar fərqli obyektlərə toxunublarsa, bunu proqram edə bilər, adam yox.

## Bu necə işləyir

IFC faylında hər divar, qapı, səviyyə, otaq və xüsusiyyət dəsti heç vaxt dəyişməyən GlobalId-yə malikdir. Birləşmə obyektləri fayl verdiyi nömrəyə (`#123`) görə yox, bu id ilə axtarır, çünki proqram saxladıqda nömrələr dəyişir. Öz id-si olmayan, obyektdən asılı hissələr (yerləşmələr, formalar, vahidlər) ehtiva etdiklərinə görə müqayisə olunur.

Hər iki nüsxə eyni IFC versiyasında olmalıdır (2x3, 4 və ya 4.3). Birləşmə sizin faylınızı olduğu kimi saxlayır, onun sırasını və nömrələrini, və yeni olanları əlavə edir; buna görə birləşmənin git diff-i yalnız birləşmənin dəyişdirdiklərini göstərir.

## Qurun

Git üçün hər depo üçün bir dəfə iki sətir lazımdır:

```
# .gitattributes
*.ifc merge=cadcraft

# bir dəfə, hər kompüterdə
git config merge.cadcraft.driver "node /path/to/tools/cli/merge.mjs %O %A %B"
```

Git olmadan `cadcraft merge <base> <ours> <theirs>` işlədin. Fossil və Mercurial eyni üç faylı öz birləşdirmə alət parametrində qəbul edir. Heç nə yüklənmir; hər şey öz kompüterinizdə işləyir.

## Qaydalar

- Atribut yalnız bir tərəfdə dəyişdirilibsə, götürülür. Hər iki tərəfdə eyni dəyişiklik bir dəfə götürülür.
- Eyni atributun iki fərqli dəyişdirilməsi (eyni səviyyənin iki fərqli adla adlandırılması) **konflikt**dir: sizin tərəfiniz qalır və hesabat hər ikisini siyahıya salır. Nəticəni açın və əllə düzəldin.
- Şeylərin siyahısı (səviyyənin divarları, dəstin xüsusiyyətləri) dəst kimi birləşir: hər tərəfin əlavə etdiyi saxlanılır və hər tərəfin sildiyi silinir. İki nəfər eyni səviyyəyə hərəsi divar əlavə edirsə, konflikt olmur.
- Hər iki tərəfdən əlavə olunan obyekt öz forması və xüsusiyyətləri ilə saxlanılır. Bir tərəfdə silinib, digərində toxunulmayıbsa: silinir. Bir tərəfdə silinib, digərində dəyişdirilibsə: silinir və hesabatda göstərilir.
- Faylın vaxt damğası və müəllifi, və hər obyektin sahib tarixçəsi sizin olaraq qalır.

Həndəsə tam birləşdirilir: divarın forması bir tərəfdən gəlir, heç vaxt nöqtə-nöqtə qarışmır. Sıxılmış (zip) IFC və IFCX faylları birləşdirilmir. Birləşmədən sonra nəticəni BimCraft-da açın və saxlamazdan əvvəl {{ui:Problemlər}} panelinə baxın.
