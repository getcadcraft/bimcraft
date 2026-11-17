---
title: Otaqlar, döşəmələr, tavanlar və damlar
summary: Otaqlar divarlar onları bağladıqca yaranır; otağa və ya bütün binaya döşəmə və tavan verin, divarların üzərinə dördsulu və ya ştit dam qoyun. Divarlar hərəkət etdikdə hamısı onları izləyir.
keywords: otaq, otaqlar, məkan, sahə, perimetr, döşəmə, plitə, altlıq, tavan, dam, dördsulu dam, ştit dam, meyl, çıxıntı, saçaq, konek, yarğan, 6/12
from: 1fb1813c
---

## Nə edəcəksiniz

Binanın qabığını tamamlayın. Otaqlar divarlardan özü yaranır; döşəmə, tavan və dam hər biri bir klikdə qoyulur. Onlar divarlardan tapıldığı üçün divarlar hərəkət etdikdə onları izləyirlər.

## Otaqlar

Çəkilmiş divarlarla bağlanmış hər boşluq otaqdır. Son divar onu bağladığı anda görünür: nömrəsi (birinci səviyyədə 101, 102 …, növbətisində 201 …) və adı (**Otaq 1**, **Otaq 2** …) ilə, sahəsi isə planda onun ortasında göstərilir.

- {{ui:Seç}} aktiv olanda otağı seçmək üçün içinə klikləyin. **Xassələr** bölməsində **Ad** (məsələn `Mətbəx`) və **Nömrə** dəyişdirin; sahəsi və perimetri göstərilir.
- İki otaq arasındakı divarı silsəniz, onlar birləşir; otağın üzərindən divar çəksəniz, ikiyə bölünür. Ətrafdakı divarlar hərəkət edərkən otaq öz adını və nömrəsini saxlayır.
- Otaq təkbaşına silinə bilməz: o, divarların yaratdığı boşluqdur.

Sahələr divar üzlərinin içindən ölçülür. Otaqlar IFC məkanları kimi döşəmə sahəsi, perimetr, hündürlük və həcmi ilə saxlanılır, buna görə cədvəllər onları oxuyur (bax: [Miqdarların cəmi, elementlərin siyahısı və məkanların cədvəli](topic:quantity-totals)).

## Döşəmələr

1. {{ui:Döşəmə}} düyməsinə klikləyin.
2. **Bu otaq** və ya **Bütün bina** seçin, **Növ** (taxta döşəmə və ya beton plitə) və qalınlığını təyin edin.
3. Otağın içinə işarə edin (və ya binanın istənilən yerinə). Döşəmənin əhatə edəcəyi hissə sahəsi ilə birlikdə vurğulanır.
4. Klikləyin. Döşəmənin üst səthi səviyyənin döşəməsidir; qalınlığı qədər aşağı enir. Bütün binanın döşəməsi divarların xarici üzlərinə çatır.

## Tavanlar

1. {{ui:Tavan}} düyməsinə klikləyin.
2. **Bu otaq** və ya **Bütün bina** seçin və döşəmədən yuxarı **Hündürlük**ünü təyin edin.
3. İçəri işarə edin və klikləyin.
4. Tavanı aşağıdan, şəbəkəsi və üzərindəki işıqlarla görmək üçün planı onun tavan planına keçirin (bax: [Görünüşlər, görünüş diapazonları və öz vərəqləriniz](topic:views-and-sheets)).

## Dam

1. Damı daşıyan divarların olduğu səviyyədə {{ui:Dam}} düyməsinə klikləyin.
2. **Meyl**i 12 üzrə qalxma kimi (`6/12`) və ya dərəcə ilə (`30`) yazın, sonra **Çıxıntı**nı yazın.
3. **Uclar**ı seçin: **Dördsulu dam** (hər tərəf meyillidir), **Qısa tərəflərdə ştitlər** və ya **Uzun tərəflərdə ştitlər** (dörd tərəfli bina üçün) və ya **Təksulu dam**.
4. Binanın içinə işarə edin: planda saçaq və konek göstərilir. Klikləyin.

Dam divarların üstündə, onların yuxarı səviyyəsində oturur və altı divarların xarici üzünə bitişir. Ştit uclar altdakı divar qədər qalın ştit divarla doldurulur. L, T və ya U formalı binaya qanadları yarğanlarda birləşən dördsulu dam qoyulur.

## Dəyişdirin

Döşəmə, tavan və ya damı seçin (3D görünüşdə, model ağacında və ya dam üçün üst səviyyədə konturunun içinə klikləməklə) və **Xassələr** bölməsində dəyişdirin: döşəmənin növü, qalınlığı və üst səthinin səviyyədən nə qədər yuxarıda olması; tavanın hündürlüyü, qalınlığı və **Naxış** (tavan planında çəkilən şəbəkə: yoxdur, 600 × 600, 600 × 1200, 2' × 2' və ya 2' × 4'); damın meyli, çıxıntısı, uclar və qalınlığı. Hər dəyişiklik bir geri qaytarma addımıdır.

## Qatlarla döşəməyə, tavana və ya dama növ verin

Döşəmə, tavan və dam divar kimi **növ** ala bilər: adı verilmiş qatlar yığımı, hər qatın materialı və real qalınlığı ilə.

- **Yerləşdirdiyiniz zaman.** Döşəmə, Tavan, Dam və Döşəmə çək alətlərinin cərgəsində **Növ** siyahısı var. **Növ yoxdur** onu əvvəlki kimi, öz qalınlığı ilə yerləşdirir. Növ isə onu növün qatlarının birlikdə qalınlığı qədər yerləşdirir.
- **Sonra.** Döşəməni, tavanı və ya damı seçin və Xassələrdə **Növ** seçin. Element eyni element qalır: yeri, otağı və məlumatları saxlanılır və heç nə yenidən çəkilmir. Yalnız onun növü, qalınlığı və materialı dəyişir. Sketch mərhələsindəki elementin inkişaf etmiş elementə çevrilməsi budur: ümumi növünü real növlə əvəz edin.
- **Növü redaktə et…** həmin növ üçün növ redaktorunu açır: qatlar **yuxarıdan** aşağı, nüvə, hər qatın funksiyası və növün LOD etiketi. Saxlamaq həmin növün bütün elementlərini bir addımda dəyişir, bir Geri qaytarma onu geri alır. Başlanğıc növünü dəyişdikdə öz növünüz kimi nüsxə saxlanılır.
- Növə malik elementdə **Qalınlıq** növün qalınlığıdır və yazıla bilməz. Dəyişmək üçün başqa növ və ya **Növ yoxdur** seçin.

Başlanğıc növlər hər biri üçün bir **ümumi** növ (ümumi materialın bir qatı, LOD 200 etiketli) və iki qatlı növdür (LOD 300 etiketli): taxta tirli döşəmə və üzərində səviyyələndirici qatı olan beton döşəmə; taxta dam və beton düz dam; gipsokarton tavan və asılı kafel tavan. Onlar başlanğıc dəyərlərdir, sınaqdan keçmiş konstruksiyalar deyil: onlara güvənməzdən əvvəl qatları yoxlayın.

**Qatlar: sahə və həcm** cədvəli istifadədə olan hər növün hər qatını sadalayır (bax: [Cədvəllər, ölçülər və PDF](topic:plan-schedules-and-pdf)). Döşəmə, dam və tavan növləri növ paketi şəklində və ya Kitabxana elementi kimi layihələr arasında köçürülür (bax: [Növ paketləri](topic:type-packs)).

## Bilmək faydalıdır

- Divarları hərəkət etdirmək, əlavə etmək və ya silmək onların üzərindəki otaqları, döşəmələri, tavanları və damı yenidən yaradır.
- Dam istənilən konturun üzərinə oturur. Hər divara öz meylini, ştit və ya təksulu ucunu, qaldırılmış lövhəni, fasya və softiti vermək və ya tək dam müstəvisi çəkmək üçün bax: [Damlar: hər divar üçün meyl, ştitlər, təksulu damlar və dam müstəviləri](topic:roofs).
- {{key:Delete}} seçilmiş döşəməni, tavanı və ya damı silir.
