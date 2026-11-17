---
title: Divarların çəkilməsi
summary: Səviyyənin planında divarları künclərinə klikləyərək və ya uzunluqları yazaraq çəkin; künclər özü-özünə birləşir və divarlar IFC kimi saxlanılır.
keywords: əyri, qövs, yerləşmə xətti, düzləşdirmə, divar, divarlar, çək, plan, mərtəbə planı, otaq, künc, birləşdir, divar tipi, 2x6, 2x4, cmu, beton, hündürlük, səviyyə, səviyyələr, mərtəbə, yazılmış uzunluq, ortoqonal, tutma
from: 8269cd4b
---

## Nə edəcəksiniz

Binanın divarlarını hər səviyyənin planında çəkin. Divarın başladığı yeri, sonra isə hər künci klikləyin; BimCraft künclərı sizin üçün birləşdirir, hər divara onun qatlarını (üzlük, altlıq, dirəklər, quru suvaq …) verir və yuxarıdakı səviyyəyə qədər uzadır. 3D görünüş siz çəkdikcə divarları göstərir.

## Planı açın

1. Yeni bina başlayın ([Yeni bina başlayın](topic:start-a-new-building)) və ya IFC modelini açın.
2. Alət panelində {{ui:Draw}} klikləyin. Yeni bina artıq onunla açılır.
3. Səviyyənin planı solda, 3D görünüş isə sağda göstərilir. Planın yuxarısındakı siyahıdan və ya **Səviyyələr** panelində onun yanındakı dairəvi düymə ilə səviyyəni seçin.
4. {{ui:Plan}}, {{ui:Split}} və {{ui:3D}} alət panelindəki {{ui:View}} sırasında olan alətlərdir (PLAN, SPLIT əmrləri və düymələr əvvəlki kimi işləyir). Yalnız plan üçün {{ui:Plan}}, hər ikisi üçün {{ui:Split}}, planı bağlamaq üçün {{ui:3D}} istifadə edin. Pəncərə dar olduqda (və ya interfeys ölçüsü böyük olduqda) {{ui:Split}} planı 3D görünüşün yanında yox, yuxarısında göstərir.

Plan, mərtəbə planı kimi, səviyyəni öz döşəməsindən 4'-0" (1200 mm) yuxarıda kəsir. Miqyası dəyişmək üçün təkəri fırladın; planı sürüşdürmək üçün orta və ya sağ düymə ilə sürükləyin (və ya {{key:Space}} basıb sürükləyin). {{ui:Select}} aktiv olduqda sadə sürükləmə də planı sürüşdürür. Göstərici planın üzərində olarkən {{key:F}} basın, plan ekrana sığdırılır.

## Otaq çəkin

1. {{ui:Wall}} klikləyin (və ya {{key:W}} basın).
2. Birinci siyahıda divar tipini seçin, məsələn **Xarici 2×6** və ya **Daxili 2×4**.
3. Hündürlüyünü seçin: **Yuxarıdakı səviyyəyə qədər** (həmin səviyyə yerini dəyişsə, divar da izləyir), bir neçə səviyyədən keçən divar üçün daha yuxarıdakı **göstərilən səviyyəyə qədər** (pilləkən holu, ikiqat hündürlüklü otaq, hündür fronton üçün), və ya **Sabit hündürlük** seçib onu yazın. Belə divar çəkdiyiniz səviyyəyə aiddir; keçdiyi səviyyələrin planlarında o açıq rəngdə göstərilir, orada otaqlar ona bağlanır və həmin planlardan divara qapı və pəncərə klikləyə bilərsiniz (qapı həmin səviyyənin döşəməsində durur). Divarın özünü köçürmək və ya formasını dəyişmək üçün onun başladığı səviyyəyə keçin.
4. Birinci divarın başladığı yeri klikləyin.
5. Hər künci klikləyin. Hər klik bir divar yaradır; növbəti divar əvvəlkinin bitdiyi yerdən başlayır. Uzunluq və bucaq göstəricinin yanında görünür.
6. Otağı bağlamaq üçün birinci nöqtəni yenidən klikləyin. Status sətri otaqda neçə divar olduğunu göstərir; mərkəz xətti rejimində hər divar öz xarici qatını otağın xaricində alır.
7. Bağlamadan dayanmaq üçün {{key:Esc}} basın (və ya sağ klikləyin, ya da ikiqat klikləyin).

## Çəkmə istinadını seçin

Birinci klikdən əvvəl **Mərkəz xətti**, **Daxili üz** və ya **Xarici üz** seçin. Bir üz seçildikdə kliklərləriniz və yazdığınız uzunluqlar həmin üzü təsvir edir; BimCraft divarın mərkəz xəttini ümumi qalınlığın yarısı qədər sürüşdürür və ardıcıl künclərı birləşdirir. Çəkdiyiniz istiqamətə nisbətən **Solda xarici** və ya **Sağda xarici** seçin. Saat əqrəbinin əksinə çəkilmiş bağlı kontur üçün xarici tərəf sağdadır; saat əqrəbi istiqamətində isə solda. **Daxili üz** ilə divarın gövdəsi xəttinizin xarici tərəfinə gedir; **Xarici üz** ilə isə digər tərəfə. Üz ilə çəkmə konturu bağladıqda seçdiyiniz xarici tərəfi saxlayır. Mərkəz xəttində otağı bağlamayan divarlar seçdiyiniz xarici tərəfi alır; otağı bağlamaq isə hər divarın xarici tərəfini, necə çəkdiyinizdən asılı olmayaraq, otağın xaricinə özü təyin edir.

Divar tipini, istinadı və ya xarici tərəfi dəyişmək cari zənciri bitirir. Geri dönən künc yaxınlığında uzun bucaqlı birləşmələr düz uclar buraxmaqla kəsilir.

Çəkərkən boş məkanda olan son nöqtə divar son nöqtəsi və ya əvvəlki künclə üfüqi və ya şaquli düzləşə bilər. Qırıq xətt həmin nöqtəni tutulmuş göstəriciyə birləşdirir. {{key:Shift}} çəkmə istiqamətini düz saxlayır; bu halda düzləşmə həmin istiqamət boyunca dayanır. Yaxındakı son nöqtələr, orta nöqtələr və divar kəsişmələri uzaq düzləşmədən üstündür.

## Yerləşmə xətti

**İstinad** **Xarici üz** və ya **Daxili üz** olduqda, divar həmin üzü yerləşmə xətti kimi saxlayır. Sonradan divar qalınlaşsa və ya xarici tərəfi çevrilsə, həmin üz yerində qalır və divar onun ətrafında böyüyür və ya çevrilir. Onunla künc təşkil edən düz divar izləyir, belə ki künc yenə bağlanır. Yerləşmə xəttini sonradan **Xassələr** bölməsində dəyişə bilərsiniz: bax [Divarı, qapını və ya pəncərəni dəyişin](topic:change-a-wall-or-door).

## Əyri divar çəkin

1. {{ui:Wall}} klikləyin, sonra seçim sırasındakı **Forma** siyahısında **Əyri** seçin.
2. Divarın başladığı, sonra bitdiyi yeri klikləyin.
3. Qövs üzərində bir nöqtəni klikləyin. Və ya qövsün hündürlüyünü yazıb {{key:Enter}} basın.
4. Zəncir divarın sonundan davam edir. Onu bitirmək üçün {{key:Esc}} basın.

Əyri divar uclarında digər divarlara birləşir (künc və T birləşmələri işləyir), otaqlar yaradır və qövs boyunca qapı və pəncərələri saxlayır. Onlar düz vahidlər olaraq qalır, orta nöqtəsində divara perpendikulyar və məsafələri qövs boyunca ölçülür. Divar ən çox dairənin dörddə üç hissəsi qədər dönə bilər. O, uclarına və qövsün orta nöqtəsinə tutulur.

Əyri divarlar üçün hələ hazır olmayanlar: {{ui:Trim / extend}} və {{ui:Corner}}, karkas, avtomatik plan ölçüləri və qövs boyunca tutma. Bax [Hələ nə hazır deyil](topic:not-built-yet).

## Klikləmək əvəzinə uzunluq yazın

İlk klikdən sonra yazın və {{key:Enter}} basın:

| Yazın | Çəkir |
|---|---|
| `12'6"` və ya `3810` | göstəricinin göstərdiyi istiqamətdə həmin uzunluqda divar |
| `12'6"<90` | həmin uzunluqda, həmin bucaqla (dərəcə, sağdan saat əqrəbinin əksinə) |
| `@3000,0` | sonuncudan bu qədər uzaq nöqtəyə, eninə və yuxarıya |
| `1200,3400` | planda həmin nöqtəyə |

Divar aləti aktiv olarkən rəqəm yazsanız, birbaşa {{ui:Length}} qutusuna düşür. Fut və düym ölçüsündə sadə rəqəm düym sayılır; millimetrdə isə millimetrdir. Vahidi həmişə yaza bilərsiniz: `3.5 m`, `10 ft`, `6 1/2"`.

## Tutmalar

- Göstərici yaxın olduqda divar uçları, onların üz künclərı və divar orta nöqtələri tutulur (kvadrat, üçbucaq işarəsi).
- Göstərici divarın mərkəz xəttinə və ya hər iki üzündən birinə tutulur (xaç).
- Sonuncu nöqtədən istiqamət yaxın olduqda hər 15° -də saxlanılır; {{key:Shift}} basıb 0°, 90°, 180° və ya 270°-də saxlayın.
- Sərbəst istiqamətlərdə uzunluq 1/2" (və ya 10 mm) dəqiqliyinə yuvarlaqlaşdırılır.

## Dəyişin, geri qaytarın, silin

- Hər divar **Dəyişikliklər** siyahısında bir addımdır: {{ui:Undo}} və {{ui:Redo}} divarları geri alır və yenidən qaytarır.
- {{ui:Select}} aktiv olduqda planda divara klikləyib onu seçin; 3D görünüş və **Xassələr** onu izləyir. {{key:Delete}} seçilmiş divarları silir, birləşdiyi divarlar isə yenidən təmizlənir.

## Səviyyələr

**Səviyyələr** paneli hər səviyyəni onun kotası və hündürlüyü ilə siyahıda göstərir.

- Yeni ad, kota və ya hündürlük yazıb {{key:Enter}} basın. Səviyyənin hündürlüyünü (və ya kotasını) dəyişdikdə yuxarıdakı səviyyələr eyni miqdarda sürüşür və səviyyəyə qədər uzanan divarlar izləyir.
- {{ui:Add a level on top}} ən yuxarı səviyyənin üstünə, onunla eyni hündürlükdə səviyyə əlavə edir.
- {{ui:Add a level below}} ən aşağı səviyyənin altına (zirzəmi), onunla eyni hündürlükdə səviyyə əlavə edir: ən aşağı səviyyə 0-da olduqda onun kotası mənfi olur və digər heç bir səviyyə yerini dəyişmir. {{ui:Undo}} onu yenidən silir.
- {{ui:Copy this level…}} baxdığınız səviyyədə olanları başqa səviyyədə və ya yuxarıda yeni səviyyədə yenidən çəkir: onun divarları qapı və pəncərələri ilə, döşəmə və tavanları ilə birlikdə (damlar istisna olmaqla). Yuxarı səviyyəyə qədər uzanan divarlar yeni səviyyənin üstündəki səviyyəyə qədər uzanır; otaqlar özü görünür. Bir {{ui:Undo}} hamısını geri alır. Digər səviyyədə artıq divarlar varsa, nüsxə onlara əlavə olunur.
- Alət panelindəki {{ui:Units}} bütün çəkmə alətlərinin göstərdiyi və oxuduğu vahidləri (fut və düym, düym, onluq fut, millimetr, santimetr və ya metr) seçir.

## Yadda saxlayın

{{ui:Save as IFC}} klikləyin. Hər divar IFC divarıdır: mərkəz xətti, birləşmiş forması, tipi və qatları, `Pset_WallCommon` və baza kəmiyyətləri (uzunluq, hündürlük, sahələr və həcmlər) ilə birlikdə saxlanılır, belə ki digər BIM proqramları onu açır və cədvələ sala bilir.

## Bilmək faydalıdır

- Divarlar mərkəz xəttində çəkilir. Qalınlıq divar tipindən gəlir.
- Planda burada çəkilmiş divarlar doldurulmuş, qalan hər şey (kitabxana elementləri, digər proqramların modelləri) isə eyni müstəvi ilə kəsilmiş, kəsikdən aşağıda olanlar isə nazik xətlərlə göstərilir.
- Başqa proqramların yaratdığı divarlar planda göstərilir, lakin bu alətlərlə hələ dəyişdirilə bilmir.
