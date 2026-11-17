---
title: Modeldən sənədlər
summary: Spesifikasiya və ya təsviri bir dəfə şablon kimi yazın, kəmiyyətlər, xüsusiyyətlər və etiketlər üçün sahələrlə, və açıq IFC-dən PDF və ya Word sənədi kimi doldurun.
keywords: sənəd, sənədlər, spesifikasiya, spek, təsvir, şablon, markdown, hesabat, word, docx, pdf, kəmiyyətlər, cədvəl, peşə, qapı cədvəli, bitirmə işləri, documentcad
from: 2b0c9156
---

## Nə edəcəksiniz

Şablon Markdown-da, ikiqat mötərizədə sahələri olan mətndir. BimCraft sahələri açıq modeldən doldurur (saylar, növə görə kəmiyyətlər, xüsusiyyətlər, sizin [etiketləriniz](topic:tags-and-schedules)) və nəticəni PDF, Word sənədi (.docx) və ya Markdown kimi saxlayır.

## Addımlar

1. IFC modelini açın.
2. Sol paneldə, {{ui:Miqdarlar}} altında {{ui:Modeldən sənədlər}} açın.
3. Şablon seçin: {{ui:Qapılar və armaturlar}} və ya {{ui:Divarlar, üzlüklər və örtüklər}}, ya da öz şablonunuz üçün {{ui:Şablon yükləyin (.md)…}}.
4. Şablon modelin hələ təyin etmədiyi etiketləri oxuyursa, {{ui:Bu şablonun etiketlərini əlavə et}} düyməsinə klikləyin, sonra {{ui:Etiketlər}} altında elementləri etiketləyin.
5. Mətni istədiyiniz kimi dəyişin və {{ui:Sənədə bax}} düyməsinə klikləyin.
6. {{ui:PDF}} düyməsinə klikləyin (əvvəlcə A4 və ya Letter seçin) ya da {{ui:Word (.docx)}}.

## Nə görməlisiniz

- Düymələrin altında doldurulmuş sənəd, cədvəlləri ilə.
- Sahə oxuna bilmədikdə xəbərdarlıqlar siyahısı (təyin olunmamış etiket, modelin olmadığı xüsusiyyət, heç vaxt bağlanmayan blok); belə sahə `[?…]` kimi çap olunur.
- Hər səhifənin altında sənədin başlığı və "Səhifə 1 / 3" olan PDF səhifələri; uzun cədvəllər başlıq sətri ilə növbəti səhifəyə keçir.

## Sahələr

| Sahə | Verir |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | layihənin adı və təsviri, faylın adı, bu gün |
| `{{count IfcDoor}}` | neçə qapı |
| `{{sum IfcWall NetSideArea}}` | cəm, vahidi ilə |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | riyaziyyat (`+ - * /` və mötərizələr) kvadrat mötərizədəki ifadələr üzərində: `[sum …]`, `[count …]` və `{{#each}}` daxilində `[qty Width]`. `round n` onluq hissələri təyin edir, `unit` vahid əlavə edir. Oxuna bilməyən və ya sıfırla bölmə `[?…]` çap edir və xəbərdarlıq verir |
| `{{qty IfcWall NetSideArea by Type}}` | cədvəl: hər növ üçün bir sətir, onun sayı və cəmi, və ümumi cəm sətiri |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | cədvəl, hər element üçün bir sətir |
| `{{tag Finish}}` | dövrədə elementin dəyəri; başqa yerdə istifadə olunan bütün dəyərlər (Palıd, Boya) |
| `{{tags}}` | etiket təriflərinin cədvəli |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | mətn hər element üçün bir dəfə; heç biri yoxdursa `{{else}}`-dən sonrakı hissə |
| `{{#group IfcWall by Type}} … {{/group}}` | mətn hər növ üçün bir dəfə, `{{value}}`, `{{count}}`, `{{sum Length}}` və içərisində sadə `{{#each}}` ilə |

`{{#each}}` daxilində: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Tag), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (elementin öz ölçüsü, vahidi ilə).

Sinif bir neçə ola bilər (`IfcDoor|IfcWindow`) və ya hər element (`*`). İstənilənini `where` ilə daraldın: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Yoxlamalar `=`, `!=`, `~` (ehtiva edir), `>`, `<`, `>=`, `<=`, `has` və `hasnot`-dur; bir neçəsini `and` ilə birləşdirin; boşluqlu dəyəri "dırnaq" içində yazın. `sort Name` dövrəni sıralayır.

## Sənəddə cədvəllər və spesifikasiya

`{{schedule doors}}` model cədvəlini ofis tərtibatınızda cədvəl kimi çap edir: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers`, ya da Cədvəllərdə saxladığınız quraşdırmanın adı. `{{specification}}` layihənin spesifikasiyasını çap edir. **Iş çertyojunun cədvəlləri** və **Spesifikasiya** şablonları bunlardan istifadə edir. Önizləmədə belə cədvəlin rəqəminə klikləsəniz, ondan gələn elementlər seçilir. Bax: [Cədvəli tərtib edin, saxlayın və ixrac edin](topic:schedule-layouts) və [Spesifikasiyanı modeldən yazın](topic:specification).

## Bilmək yaxşıdır

- Sahə daxili xüsusiyyəti (Name, Type, Storey, Class, Material, Mark), etiketi (`tag:Fire rating`, ya da onun adı), xüsusiyyəti (`Pset_WallCommon.FireRating`) və ya yalnız xüsusiyyətin adını (`NetSideArea`, `Width`) göstərir: çılpaq ad hər elementin öz dəstini oxuyur, əvvəlcə kəmiyyət dəstləri, belə ki qapıda `Width` qapının eni olur, divarın qalınlığı yox. `where` daxilində çılpaq ad seçilmiş elementlərin çoxunun sahib olduğu dəsti oxuyur.
- Kəmiyyətlər faylın kəmiyyət dəstlərinin dediyidir (BimCraft onları çəkdiyi şeylər üçün yazır); vahidlər faylın vahid parametrlərindən gəlir.
- Sahə sözləri (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) hər dildə ingiliscə qalır. Nümunə şablonlar ingiliscədir.
- Modeldən olan mətn heç vaxt formatlaşdırmaya çevrilmir: içində `*` və ya `|` olan ad olduğu kimi çap olunur.
- Dəyişdirdiyiniz şablonu {{ui:Bu brauzerdə saxla}} (yalnız bu brauzerdə olur) ya da {{ui:Şablonu yüklə}} ilə saxlayın.
- PDF mətni standart PDF şriftlərindən istifadə edir: Qərbi Avropa mətnindən kənar simvol "?" kimi çap olunur və status sətri neçə olduğunu göstərir.
- Peşəyə görə şablonlar Kitabxanada yaşayır (növü Sənəd şablonu). Modeldən sənədlərdə, Kitabxanadan… seçin, birini seçin və onun mətni və oxuduğu etiketlər gəlir; istədiyiniz kimi redaktə edin. Öz şablonunuzu Kitabxanaya dərc etmək hər digər elementin yüklənməsi ilə eynidir. Hələ qurulmayıb: saydan və cəmdən kənar hesablamalar.
