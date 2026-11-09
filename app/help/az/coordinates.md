---
title: BimCraft-da koordinatlar
summary: İşlədiyiniz yer: planda və 3D görünüşdə göstəricinin mövqeyi, olduğunuz səviyyə, layihənin başlanğıc nöqtəsi və sahənin planalma nöqtəsi.
keywords: koordinatlar, haradayam, mövqe, göstərici, oxunuş, x y z, səviyyə, mərtəbə, layihənin başlanğıc nöqtəsi, başlanğıc nöqtəsi, baza nöqtəsi, planalma nöqtəsi, sahə, xəritə koordinatları, şərq, şimal, coğrafi istinad, vahidlər, yer
from: 84df5245
---

## Nə edəcəksiniz

Modeldə harada olduğunuzu bir baxışda biləcəksiniz: hansı səviyyədə çəkdiyinizi, göstəricinin layihənin başlanğıc nöqtəsindən nə qədər uzaqda olduğunu və sahənin planalma nöqtəsinin harada olduğunu.

## Rəqəmlər harada görünür

- **3D görünüşün üzərində** (sağ aşağıda, görünüş kubunun yanında): göstəricini modelin üzərinə aparın. Qutuda nöqtənin olduğu səviyyə və həmin səviyyənin döşəməsindən nə qədər yüksəkdə olduğu, sonra isə **X, Y və Z** göstərilir. Boş fəzanın üzərində ən aşağı səviyyənin döşəməsindəki nöqtə oxunur.
- **Planda** (sağ aşağıda, {{ui:Çək}} aktiv olduqda): planın göstərdiyi səviyyə və onun döşəməsinin hündürlüyü, göstərici planın üzərində olduqca isə **X və Y**.
- Fayl xəritə çevrilməsi ilə (xəritə koordinatları ilə ixrac olunubsa) hər iki qutuya xəritə şəbəkəsindəki **şərq və şimal koordinatları** əlavə olunur. Bunlar seçdiyiniz {{ui:Vahidlər}} ilədir (vahid həmişə rəqəmlərin yanında yazılır; futlar və düymlər onluq futlar kimi göstərilir). DWG və ya DXF çertyoju öz vahidlərini saxlayır: onun göstərici oxunuşu həmin vahidləri adlandırır və heç vaxt çevrilmir.

Hər X, Y və Z **layihənin başlanğıc nöqtəsindən** ölçülür, alət panelində seçdiyiniz {{ui:Vahidlər}} ilədir (futlar və düymlər, düymlər, onluq futlar, millimetrlər, santimetrlər və ya metrlər). Müsbət Y modelin şimalına doğru istiqamətlənir; bu, hər zaman həqiqi şimal olmaya bilər. Xəritənin şərq və şimal koordinatları eyni seçimi izləyir (futlar və düymlər onluq futlar kimi göstərilir). Xəritə sisteminin öz vahidi seçdiyinizdən fərqlidirsə, o, rəqəmlərdən sonra mötərizədə adlandırılır, məsələn *(ABŞ sürvey futu)*. Beləliklə, geodezist sistemin özünün hansı vahiddə yazıldığını görə bilir.

## İki işarə

- **Layihənin başlanğıc nöqtəsi** (xaçlı qırmızı dairə): model daxilindəki bütün koordinatların ölçüldüyü 0, 0, 0 nöqtəsi.
- **Planalma nöqtəsi** (üçbucaqlı mavi dairə): sahənin istinad nöqtəsi; onun enlik, uzunluq, hündürlük və ya xəritə koordinatları məhz bu nöqtə üçün verilir. 3D görünüşdə onun harada olduğunu oxumaq üçün göstəricinin ucunu ona yönəldin.

Sahə layihənin başlanğıc nöqtəsi üzərində yerləşəndə, məsələn burada çəkilmiş yeni bina kimi, bir işarə hər ikisini göstərir. Hər iki qutuda xaç düyməsinə klikləməklə işarələri gizlədə və ya göstərə bilərsiniz; BimCraft seçiminizi bu brauzerdə yadda saxlayır.

## Nəyi görməlisiniz

- Göstərici hərəkət etdikcə rəqəmlər dəyişir, planın qutusu isə səviyyə siyahısında seçdiyiniz səviyyənin adını göstərir.
- Modeli fırlatarkən, sürüşdürərkən və miqyaslayarkən işarələr yerində qalır.

:::tip
Nöqtənin enliyini və uzunluğunu öyrənmək üçün {{ui:Ölç}} › {{ui:Yer}} seçin: bax [3D-də məsafələri, üz sahələrini və yerləri ölçün](topic:measure).
:::

:::touch
Toxunma ekranında 3D qutu siçan və ya qələm istifadə etməyincə heç nə göstərmir: barmaq əvəzinə görünüşü hərəkət etdirir.
:::
