---
title: Növün bütün elementləri üçün növ xassəsini dəyişin
summary: Növ xassələrini nümunə xassələrindən fərqləndirin, növdəki dəyəri dəyişin ki, hər element izləsin və bir elementin öz redaktəsinin öz qaldığını yoxlayın.
keywords: növ, nümunə, növ xassələri, ailə növü, paylaşılan, surət yazma, bütün elementlər, kütləvi redaktə, istehsalçı, model
from: bffd8789
---

## Nə edəcəksiniz

Qapı növündə istehsalçını təyin edin ki, həmin növün hər qapısı onu göstərsin, sonra bir qapıya başqalarına toxunmadan öz yanğın müqavimətini verin. Bu, BimCraft-da növ və nümunə xassələrinin fərqini göstərir.

## Növ yoxsa nümunə?

- **Nümunə** xassəsi bir elementə məxsusdur: onun etiketi, nişanı, otağı, öz yanğın müqaviməti.
- **Növ** xassəsi bir çox elementin paylaşdığı növə məxsusdur: istehsalçı, model, qapı növünün eni.

{{ui:Xassələr}} panelində növdən gələn dəstlərin adından sonra " (type)" yazılır və "Növ xassəsi: bu yerdə dəyişiklik bu növün hər elementinə tətbiq olunur." sətri var. Qalan hər dəst elementin özünə aiddir. Birinci blokdakı **Növ** növün adını göstərir.

## Addımlar: növü dəyişin

1. IFC modelini açın və qapıya klik edin.
2. {{ui:Xassələr}} panelinin birinci blokunda **Növ**ünü qeyd edin, məsələn "Single-Flush 900 x 2100".
3. Adı "(type)" ilə bitən dəsti tapın.
4. Dəyişmək istədiyiniz dəyərə klik edin, məsələn **Manufacturer**.
5. Yeni dəyəri yazın və {{key:Enter}} basın.
6. {{ui:Dəyişikliklər}} siyahısına baxın: qeyd "(type)" ilə bitir.
7. Eyni növün başqa qapısına klik edin.
8. Eyni dəyəri yoxlayın: o da yeni dəyəri göstərir.

## Addımlar: yalnız bir elementi dəyişin

1. Bir qapıya klik edin.
2. Adında "(type)" olmayan dəst açın, məsələn `Pset_DoorCommon`.
3. Dəyərə, məsələn **FireRating**-ə klik edin, yeni dəyər yazın və {{key:Enter}} basın.
4. Yanındakı eyni növdən olan qapıya klik edin.
5. Eyni dəyəri yoxlayın: o, hələ də köhnə dəyəri göstərir.

Ixrac edən iki qapı arasında həmin xassə dəstini paylaşsa belə, BimCraft birinci qapıya dəyişiklik etməzdən əvvəl ona öz surətini verdi. Bax [Redaktəniz niyə yalnız bir elementi dəyişir](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Saxlayın

1. {{ui:IFC kimi saxla}} basın və ya {{key:Mod+S}} basın.
2. Saxlanılmış nüsxəni BimCraft-da və ya istənilən IFC baxıcısında açın, hər iki dəyişikliyi yoxlayın.

## Tez-tez edilən səhvlər

- **Hər modelin növləri yoxdur.** Bəzi ixracatçılar növ obyektlərini yazmır, ya da hər şeyi nümunəyə yazır. Onda "(type)" dəstləri olmur və hər element ayrıca dəyişdirilməlidir.
- **Eyni dəyər həm növ dəstində, həm də nümunə dəstində var.** Bəzi ixracatçılar parametri hər iki yerə yazır. Digər proqramlar hansından oxuyacağını bilmir; razılaşdırmaq üçün hər ikisini dəyişin.
- **Bu növün "bütün qapılarını" seçib birlikdə redaktə etməyi gözləmək.** Bu quruluşda çoxlu seçim yoxdur. Növ xassəsi çox elementi bir anda dəyişməyin yoludur.
