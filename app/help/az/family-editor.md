---
title: Ailəni redaktə edin
summary: Ailənin parametrlərini, düsturlarını və cisimlərini dəyişdirin, parçaları Bəli / Xeyr parametri ilə göstərin, cisimləri kəsib birləşdirin, boru və kanallar üçün birləşdiricilər verin və nəticəni saxlanacaq IFC-dən çəkilmiş şəkildə görün.
keywords: ailə redaktoru, ailəni redaktə et, parametr, parametrlər, düstur, düsturlar, görünürlük, bəli xeyr, cisim, cisimlər, qutu, ekstruziya, ekstrude, fırlatma, sürüşdürmə, profil, qövs, bul, bul əməlləri, kəsmək, birləşdirmək, fərq, birləşmə, tutacaq, tutacaqlar, iş müstəvisi, eskiz, yeni ailə, birləşdirici, birləşdiricilər, port, portlar, boru birləşdiricisi, kanal birləşdiricisi, drenaj, su təchizatı
from: 1ab31c10
---

## Redaktoru açın

Ailəni açın (layihə brauzerinin **Ailələr** qrupu və ya {{ui:Build}} › {{ui:Families…}}) və {{ui:Edit the family}} klikləyin. Heç nədən başlamaq üçün {{ui:New family}} klikləyin: ona ad verin, nə olduğunu deyin (qapı, pəncərə, mebel, qurğu və ya başqa bir şey) və qapı və ya pəncərə üçündürsə, plan simvolu və tutacağı hansı başlanğıc ailədən gəlsin. Redaktor bir neçə parametrli və bir cisimli ailə ilə açılır.

Başlanğıc ailəni redaktə etsəniz, dəyişikliklər yalnız bu modeldə qalır. Digər modellər başlanğıc ailəni olduğu kimi saxlayır.

Modeldə heç nə {{ui:Save the family}} klikləyənə qədər dəyişmir. Redaktorun öz geri qaytarma və təkrarlama düymələri var (adın yanındakı ox düymələri, ya da {{key:Mod+Z}} və {{key:Mod+Y}}); saxlamaq modelin geri qaytarılmasında bir addımdır.

## Parametrlər

{{ui:Parameters}} nişanı ailənin parametrlərini göstərir: ad, növ və standart dəyər. Növlər: **Uzunluq** (millimetr), **Bucaq** (dərəcə), **Ədəd**, **Tam ədəd**, **Bəli / Xeyr**, **Qələm** (1–16) və söz saxlayan üç növ, ədəd deyil: **Mətn**, **Material** (layihənin materiallarından biri) və **Doldurma** (plan doldurması). Sözlər düsturlarda istifadə olunmur; onlar cismi rənglədir (onun **Materialı**), simvol parçasını doldurur və ya simvolun mətnində `{Name}` kimi çap olunur. **Hər element üçün** qutusu parametri ölçüyə yox, hər yerləşdirilən elementin özünün təyin etdiyi şeyə çevirir.

- **Düstur** parametri başqalarını izləyir, məsələn `Width / 30` və ya `if(Width > 1200, 2, 1)`. Düsturlarda uzunluqlar millimetrdir, ya da vahid yazın: `3'`, `6in`, `50cm`.
- Parametri yenidən adlandırmaq onu bütün düsturlarda və istifadə edən sahələrdə yenidən adlandırır. İstifadə olunan parametri silmək olmaz.
- Cismin **Materialı** layihə materialının rəngini alır (ya da Material parametrinin rəngini), **Göstərilir** isə onu qaba təfərrüatlarda gizlədir, **Təkrarla** isə surətlər yaradır: say (ədəd və ya tam ədəd parametri, 1–200) və onlar arasında x, y və z-də addım. Təkrarlanan cisim taxta, çubuq və ya deşiklər sırasıdır; kəsikdə istifadə olunanda surətlər birlikdə kəsilir.
- Qapı və ya pəncərə ailəsi divardan iki ad da alır: `WallThickness` və `Face` (1 və ya −1, qapının açıldığı tərəf).

## Cisimlər

{{ui:Solids}} nişanı cisimləri sadalayır. Qutu, ekstruziya, fırlatma və ya sürükləmə əlavə edin:

| Cisim | Nəyi təyin edirsiniz |
|---|---|
| Qutu | iki küncü: x0-dan x1-ə, y0-dan y1-ə, z0-dan z1-ə |
| Ekstruziya | iş müstəvisində (plan, ön və ya yan) profil, müstəvinin yeri və dərinlik |
| Fırlatma | profil, müstəvidə ox və 360°-ə qədər bucaq |
| Sürükləmə | nöqtələr yolu və radius (çubuq və ya relsə) |

Hər ədəd yazılmış ədəd və ya parametrlərin ifadəsi ola bilər. Hər cismin rəngi və **Göstərilmə şərti** var: onu həmişə göstərmək üçün boş buraxın, ya da yalnız o zaman göstərmək üçün Bəli / Xeyr parametrinin adını (ya da `Shelves >= 3` kimi müqayisəni) yazın. Bu görünürlük parametridir.

### Profil çəkin

Ekstruziyanın və ya fırlatmanın profili önizləmənin altında iş müstəvisində çəkilir:

- Seçilmiş nöqtədən sonra əlavə nöqtə üçün kağıza klikləyin.
- Nöqtəni köçürmək üçün sürükləyin. Nöqtələr şəbəkəyə bağlanır; onları sərbəst yerləşdirmək üçün {{key:Shift}} basıb saxlayın.
- Seqmentdə kiçik kvadrata klikləyib orada nöqtə əlavə edin. {{key:Shift}}+klik həmin seqmenti qövsə çevirir (başqa tərəf üçün yenidən klikləyin, sonra düz).
- Nöqtəni silmək üçün ikiqat klikləyin.

Boş nöqtələr parametrlərlə təyin olunur: onları cədvəldə dəyişin, sürükləməklə yox.

## Bul əməlləri

{{ui:Booleans}} nişanı ikinci cismi birincidən kəsir və ya onları birləşdirir. Bul nəticəsi yenidən kəsilə və ya birləşdirilə bilər. Bul-da istifadə olunan cisim yalnız onun bir hissəsi kimi çəkilir.

İkinci cisim Bəli / Xeyr parametri ilə gizlədildikdə birinci olduğu kimi qalır; birinci gizlədildikdə nəticə gizlənir.

## Plan simvolu

{{ui:Plan symbol}} nişanı bu ailə üçün planda göstərilənləri təyin edir — cisimlərin kəsiyi əvəzinə: xətlər, düzbucaqlılar, dairələr, qövslər, çoxbucaqlılar və mətn, ailənin öz oxlarında. Hər hissənin **qələmi** (1–16, ifadə və ya Qələm parametri), **doldurması** (yox, dolu, diaqonal, çarpaz, beton, izolyasiya, torpaq və ya Doldurma parametri), **göstərilmə** ifadəsi, əsasından millimetrlə yuxarıda **kəsmə aralığı** (plan kəsiyi onun içində olanda tam qalınlıqda, altında nazik, üstündə kəsikli çəkilir: kəsikdən yuxarıdakı dolab kəsikli göstərilir), təfərrüat səviyyəsi və təkrar var. Mətn parametrləri `{Name}` kimi adlandıra bilər. **The plan shows: The cut of the solids** seçimi plana cisimləri kəsməyə davam etdirir, simvol isə ailədə qalır. Digər proqramlar simvolu ailənin oturacağı kimi oxuyur (xətlər və formalar; mətn BimCraft-da qalır).

## Daxilindəki ailələr

{{ui:Families inside}} nişanı bu ailənin içinə başqa ailə qoyur: masada ayaq, qapıda tutacaq. Ailəni seçin, sonra yerini (x, y, z), neçə dərəcə döndərildiyini (yalnız rüb dönüşləri: 0, 90, 180, 270), nə vaxt göstərildiyini və aldığı dəyərləri (hər sətirdə bir, `Height = Height - 40` kimi) yazın. Daxili ailəni saxlamaq bu ailəni yenidən çəkir; başqası tərəfindən saxlanılan ailə silinə bilməz; ailə özünü, hətta başqası vasitəsilə də saxlaya bilməz və yuvalanma dörd səviyyədə dayanır.

## İsti nöqtələr

İsti nöqtə parametri dəyişmək üçün sürüklədiyiniz nöqtə və ya kənardır. {{ui:Hotspots}} nişanında birini əlavə edin, sürüklədiyi oxu və dəyişdirdiyi ədəd parametrini seçin, mövqeyini isə cisimlərdəki eyni ifadələrlə yazın. Önizləmədə tutacaqların altında **İsti nöqtələr** seçin ki, onları sürükləyə biləsiniz. Planda yerləşdirilmiş elementdə (onu {{ui:Select}} ilə seçin) x və y isti nöqtələr tutacaq kimi görünür: birini sürükləyin və element onları həmin nöqtəyə qoyan ölçünü alır, aralarındakı düsturlar vasitəsilə; bir Geri qaytar onu əvvəlinə qaytarır. İsti nöqtə idarə olunan parametri, Bəli / Xeyr və ya sözü dəyişə bilməz.

3D görünüşdə eyni isti nöqtələr seçilmiş elementdə tutacaq kimi göstərilir; yuxarı-aşağı olanlar (z oxu) da orada görünür, plan isə onları çəkə bilmir. Elementi seçin, tutacağı oxu boyunca sürükləyin və buraxın: element onu həmin nöqtəyə qoyan ölçünü alır, bu bir geri qaytarma addımı kimi. Kəsmə qutusu açıq olanda tutacaqlar gizlədilir, çünki eyni tutacaqları istifadə edir.

## Birləşdiricilər

Mərtəbədə yerləşdirilən ailələrin (mebel, qurğu və digərləri) {{ui:Connectors}} nişanı var: boru və ya kanalın elementə birləşdiyi nöqtələr, məsələn hövzənin kranında və drenajında. {{ui:Add a connector}} klikləyin və təyin edin:

- **Növ**: boru və ya kanal, və onun **Sistemi** (soyuq su, sanitar drenaj, təchizat havası…).
- **x**, **y** və **z**: yeri, ailənin öz oxlarında. Cismin ədədləri kimi, hər biri ədəd və ya parametrlərin düsturu ola bilər, buna görə birləşdirici ölçü ilə birlikdə hərəkət edir.
- **Çıxış istiqaməti**: boru və ya kanalın ailədən hansı oxla çıxdığı (hövzənin altındakı drenaj **Aşağı** istiqamətindədir).
- **Ölçü (mm)**: borunun nominal ölçüsü (DN) və ya dairəvi kanalın diametri.
- **Axın**: **Daxil** — qidalanan birləşdirici üçün (kran), **Çıxış** — drenaj edən üçün.

Önizləmədə hər birləşdirici çıxış istiqamətini göstərən oxlu halqa kimi çəkilir. Qapı və pəncərələrin birləşdiriciləri yoxdur.

Santexnika qurğusu üçün **Santexnika qurğusu** altında hansı olduğunu seçin (ayaqyolu, lavabo, mətbəx lavabosu, duş, camaşırxana). Başlanğıc qurğular bunu artıq təyin edir.

Ailədən yerləşdirilən hər element birləşdiricilərini IFC faylında port kimi alır və elementin ölçüsü dəyişəndə və ya ailə saxlananda yenidən yaradılır. IFC sistemlərini oxuyan proqramlar hər borunun və kanalın harada olduğunu görür.

## Önizləmə və onun tutacaqları

Önizləmə ailənin IFC kimi yazılmış və modelə saxlayan eyni kodla çəkilmiş və geri göstərilmiş halıdır. Onun altında **Göstərilən ölçü** önizləmədə istifadə olunan parametr dəyərlərini təyin edir.

**Tutacaqlar** önizləmədə nöqtələrdir: **The size** En, Dərinlik və Hündürlük üçün tutacaq göstərir; **The solid picked** seçdiyiniz cismin hər üzündə bir tutacaq göstərir. Tutacağı sürükləyin:

- parametrlə təyin olunan üzdə göstərilən ölçü dəyişir (ailənin düsturları saxlanılır);
- yazılmış ədədlə təyin olunan üzdə ədəd dəyişir.

## Saxlamaq

{{ui:Save the family}} ailəni yoxlayır, sonra onun hər ölçüsünü yenidən çəkir və hər elementini yenidən yaradır — geri qaytarıla bilən bir addım kimi. Dəyişiklik ilə ölçü çəkilə bilmirsə (məsələn cismin o ölçüdə eni olmazdı), heç nə saxlanmır və redaktor hansı ölçü olduğunu deyir.

Əgər redaktor açıq olarkən kimsə eyni ailəni saxlayıbsa (Live TeamWork sessiyasında və ya başqa pəncərədə), {{ui:Save the family}} imtina edir və bunu deyir, onların dəyişikliyini sizinkilə əvəz etmir. Redaktoru bağlayın, ailəni yenidən açıb onların dəyişikliyini görün və öz dəyişikliyinizi yenidən edin.

:::note
Həndəsə IFC-nin öz cisimlərində saxlanılır: ekstruziyalar, fırlatmalar, sürüşdürülmüş disklər və Bul nəticələri. Heç nə üçbucaqlar siyahısına çevrilmir, buna görə fayllar kiçik qalır və digər proqramlar formaları forma kimi oxuya bilir. Qövslü profillər IFC4-də qövslərlə saxlanılır; IFC2X3-də profildə qövs seqmenti yoxdur, orada qövslər qısa düz parçalar kimi saxlanılır.
:::

Bax da [Ailələr və onların ölçüləri](topic:families).
