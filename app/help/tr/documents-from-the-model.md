---
title: Modelden belgeler
summary: Bir şartnameyi ya da açıklamayı, miktarlar, özellikler ve etiketler için alanlarla birlikte bir kez şablon olarak yazın; açık IFC'den bir PDF ya da Word belgesi olarak doldurun.
keywords: belge, belgeler, şartname, spesifikasyon, açıklama, şablon, markdown, rapor, word, docx, pdf, miktarlar, liste, iş kolu, kapı listesi, yüzey kaplamaları, documentcad
from: 2b0c9156
---

## Ne yapacaksınız

Şablon, çift süslü parantez içinde alanları olan Markdown biçiminde bir metindir. BimCraft alanları açık modelden doldurur (sayılar, türe göre miktarlar, özellikler, [etiketleriniz](topic:tags-and-schedules)) ve sonucu bir PDF, bir Word belgesi (.docx) ya da Markdown olarak kaydeder.

## Adımlar

1. Bir IFC modeli açın.
2. Sol panelde, {{ui:Quantities}} altında {{ui:Documents from the model}} seçeneğini açın.
3. Bir şablon seçin: {{ui:Doors and hardware}} ya da {{ui:Walls, linings and finishes}}, ya da kendi şablonunuz için {{ui:Load a template (.md)…}}.
4. Şablon, modelin henüz tanımlamadığı etiketleri okuyorsa {{ui:Add this template’s tags}} düğmesine tıklayın, sonra öğeleri {{ui:Tags}} altında etiketleyin.
5. Metni istediğiniz gibi değiştirin ve {{ui:Show the document}} düğmesine tıklayın.
6. {{ui:PDF}} (önce A4 ya da Letter seçin) ya da {{ui:Word (.docx)}} düğmesine tıklayın.

## Ne görmelisiniz

- Düğmelerin altında, tablolarıyla birlikte doldurulmuş belge.
- Bir alan okunamadığında uyarılar listesi (tanımlı olmayan bir etiket, modelde olmayan bir özellik, hiç kapanmayan bir blok); böyle bir alan `[?…]` olarak yazdırılır.
- PDF sayfalarında belgenin başlığı ve her sayfanın altında "Sayfa 1 / 3"; uzun tablolar, başlık satırıyla birlikte sonraki sayfalara geçer.

## Alanlar

| Alan | Verir |
|---|---|
| `{{project}}`, `{{project description}}`, `{{file}}`, `{{date}}` | projenin adı ve açıklaması, dosyanın adı, bugünün tarihi |
| `{{count IfcDoor}}` | kaç kapı olduğu |
| `{{sum IfcWall NetSideArea}}` | bir toplam, birimiyle |
| `{{calc [sum IfcWall NetSideArea] * 1.1 round 1 unit m²}}` | köşeli parantez içindeki terimler üzerinde aritmetik (`+ - * /` ve parantezler): `[sum …]`, `[count …]` ve bir each içinde `[qty Width]`. `round n` ondalık basamakları, `unit` bir birim ekler. Okunamayan bir şey ya da sıfıra bölme `[?…]` yazdırır ve uyarır |
| `{{qty IfcWall NetSideArea by Type}}` | bir tablo: tür başına bir satır, sayısı ve toplamıyla, ve bir toplam satırı |
| `{{table IfcDoor cols Mark, Type, Width, tag:Fire rating}}` | bir tablo, öğe başına bir satır |
| `{{tag Finish}}` | bir döngü içinde öğenin değeri; başka yerlerde ise kullanılan her değer (Oak, Paint) |
| `{{tags}}` | etiket tanımları bir tablo olarak |
| `{{#each IfcDoor}} … {{else}} … {{/each}}` | metin öğe başına bir kez; hiç öğe yoksa `{{else}}` sonrasındaki kısım |
| `{{#group IfcWall by Type}} … {{/group}}` | metin tür başına bir kez, `{{value}}`, `{{count}}`, `{{sum Length}}` ve içinde düz bir `{{#each}}` ile |

`{{#each}}` içinde: `{{name}}`, `{{type}}`, `{{storey}}`, `{{class}}`, `{{material}}`, `{{mark}}` (IFC Etiketi), `{{guid}}`, `{{n}}` (1, 2, 3 …), `{{prop Pset_DoorCommon.FireRating}}`, `{{qty Width}}` (öğenin kendi değeri, birimiyle).

Bir sınıf birkaç tane olabilir (`IfcDoor|IfcWindow`) ya da her öğe (`*`). Bunlardan herhangi birini `where` ile daraltın: `{{#each IfcDoor where Fire rating >= 60}}`, `{{count IfcWall where Wall finish hasnot}}`. Testler `=`, `!=`, `~` (içerir), `>`, `<`, `>=`, `<=`, `has` ve `hasnot`'tur; birkaçını `and` ile birleştirin; boşluk içeren bir değeri "tırnak" içine koyun. `sort Name` bir döngüyü sıralar.

## Listeler ve belgede şartname

`{{schedule doors}}` bir model listesini, sizin ofis düzeninizde bir tablo olarak yazdırır: `doors`, `windows`, `walls`, `rooms`, `floors`, `roomfinishes`, `wallfinishes`, `zonefinishes`, `finishtotals`, `layers` ya da Listeler'de kaydettiğiniz bir düzenin adı. `{{specification}}` projenin şartnamesini yazdırır. **Çalışma çizimi listeleri** ve **Şartname** şablonları bunları kullanır. Önizlemede, bu tür bir listenin bir rakamına tıklayarak onu oluşturan öğeleri seçin. Bkz. [Bir listeyi düzenleyin, kaydedin ve dışa aktarın](topic:schedule-layouts) ve [Şartnameyi modelden yazın](topic:specification).

## Bilmeniz gerekenler

- Bir alan, bir yerleşik (Name, Type, Storey, Class, Material, Mark), bir etiket (`tag:Fire rating` ya da adı), bir özellik (`Pset_WallCommon.FireRating`) ya da yalnızca bir özelliğin adını (`NetSideArea`, `Width`) adlandırır. Çıplak bir ad, her öğenin kendi kümesini okur ve önce miktar kümelerine bakar; bu yüzden bir kapıdaki `Width` kapının genişliğidir, bir duvarın kalınlığı değil. `where` içinde çıplak bir ad, seçilen öğelerin çoğunun sahip olduğu kümeyi okur.
- Miktarlar, dosyanın miktar kümelerinin söylediğidir (BimCraft çizdiği şeyler için bunları yazar); birimler dosyanın birim ayarlarından gelir.
- Alan sözcükleri (`count`, `sum`, `qty`, `by`, `cols`, `where`, `each`, `group` …) her dilde İngilizce kalır. Örnek şablonlar İngilizcedir.
- Modelden gelen metin asla biçimlendirmeye dönüşmez: içinde `*` ya da `|` olan bir ad olduğu gibi yazdırılır.
- Değiştirdiğiniz bir şablonu {{ui:Keep in this browser}} (yalnızca bu tarayıcıda bulunur) ya da {{ui:Download the template}} ile saklayın.
- PDF metni standart PDF yazı tiplerini kullanır: Batı Avrupa metni dışındaki bir karakter "?" olarak yazdırılır ve durum satırı kaç tane olduğunu söyler.
- İş koluna göre şablonlar Kütüphane'de bulunur (tür: Belge şablonu). Modelden belgeler bölümünde Kütüphane'den… seçeneğini seçin, birini seçin; metni ve okuduğu etiketler gelir; istediğiniz gibi düzenleyin. Kendi şablonunuzu Kütüphane'ye yayımlamak, herhangi başka bir öğeyi yüklemekle aynı işlemdir. Henüz yapılmadı: sayılar ve toplamların ötesindeki hesaplar.
