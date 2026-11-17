---
title: Menüler, tuşlar ve fare
summary: Ekranda çalışma biçiminize uygun bir menü stili seçin, her komuta kendi tuşunuzu verin, komutları menüler arasında taşıyın ve tekerleğin ile her fare düğmesinin ne yapacağını ayarlayın.
keywords: menü stili, menüler, menü çubuğu, şerit, komut satırı, klavye kısayolları, kısayol tuşları, tuşlar, özelleştir, tuşu yeniden ata, fare, tekerlek, ters çevir, yakınlaştırma yönü, orta düğme, kaydır, yörüngede döndür, iki harfli tuşlar, dışa aktar, içe aktar, geçiş, tanıdık
from: a424e836
---

BimCraft'ın komutları, onlara hangi yoldan ulaşırsanız ulaşın aynıdır. **Menü stili** yalnızca komutların ekranda nerede durduğunu, orada nasıl adlandırıldığını ve hangi tuşlarla çalıştığını belirler; böylece alışkın olduğunuz çalışma biçimini koruyabilirsiniz. Birini {{ui:Ayarlar}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menüler, tuşlar ve fare}} bölümünden seçin; değişiklik hemen uygulanır ve bu tarayıcı bunu hatırlar.

## Beş stil

| Stil | Ne elde edersiniz |
|---|---|
| {{ui:CadCraft}} | BimCraft'ın kendi araç çubuğu ve tuşları ({{key:W}} duvar, {{key:D}} kapı, {{key:N}} pencere, {{key:X}} kesit, {{key:F}} sığdır). Başlangıç noktası. |
| {{ui:Ev tasarımı}} | Bir menü çubuğu (Dosya, Düzenle, Derleme, Kütüphane, 3D, CAD, Araçlar, Görünüm) ve konut ev tasarımı programlarının düzenine benzer şekilde bir sıra yapı aracı. Aynı tek tuşlar; ayrıca kütüphane için {{key:Mod+L}}, 3D görünüm için {{key:F9}}, plan için {{key:F10}} ve ikisi için {{key:F11}}. |
| {{ui:BIM şeridi}} | Büyük düğmelerden oluşan sekmeler (Mimari, Ekle, Açıklama, Değiştir, Görünüm, Çıktı) ile sağda bir Dosya menüsü ve hızlı düğmeler. İki harfli tuşlar: duvar için {{key:W}} sonra {{key:A}}, kapı {{key:D}} {{key:R}}, pencere {{key:W}} {{key:N}}, kesit {{key:S}} {{key:C}}, sığdır {{key:Z}} {{key:F}}. Orta düğme kaydırır; {{key:Shift}} ve orta düğme yörüngede döndürür. |
| {{ui:Klasik çizim}} | Küçük bir şerit ve komut satırı; komut yazanlar için: WALL, DOOR, WINDOW, ROOF, U (geri al), ZOOM, SECTION, PLOT, INSERT, HELP. Herhangi bir yere yazmaya başlayın, harfler komut satırına gider; {{key:Enter}} çalıştırır, boşken {{key:Enter}} son komutu yineler, {{key:Esc}} temizler. |
| {{ui:Görüntüleyici}} | Model çizmek yerine açmak ve denetlemek için: {{ui:Dosya}}, {{ui:Görünüm}}, {{ui:Göster}}, {{ui:Denetle}} ve {{ui:Düzenle}} menüleri ile bir dizi görüntüleme aracı (sığdır, üst, ön, yan, kesit, ölç, gizle, izole et, geçirgen, tümünü göster, yürü). Yapı araçları sonda bir {{ui:Model}} menüsünde bekler. BimCraft'ın kendi stiliyle aynı tuşlar. |

Menüler ve şeritler, bir model açılana ya da yeni bir yapı başlatılana kadar görünmez; ondan önce soldaki panel dosyaları açar ve yapıları başlatır.

:::tip
Seçtiğiniz stilde değil, yalnızca BimCraft'ın kendi düzeninde bulunan bir tuş hiçbir şey yapmaz; durum satırı komutun nereye gittiğini söyler (ör. "BIM şeridinde: Kesit = SC"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} ve oklar her zaman kendi anlamını korur. Çalışan bir araç kendi tuşlarını da korur: yerleştirirken {{key:R}} ve {{key:Tab}}, yürürken {{key:W}} {{key:A}} {{key:S}} {{key:D}}, kapı ve pencere araçlarında {{key:H}}, bir uzunluk yazarken sayılar.
:::

## Kendi stilinizi oluşturun

1. Ne istediğinize en yakın stili seçin, sonra {{ui:Özelleştir…}} tıklayın.
2. {{ui:Tuşlar ve menüler}} bölümünde bir komut bulun (arama kutusu yardımcı olur). {{ui:Tuş ekle}} tıklayın ve tuşa basın ya da iki harfli bir tuş için arka arkaya iki tuşa basın. Bir tuşu kaldırmak için tuşa tıklayın.
3. Bir menü çubuğu ya da şerit varsa, {{ui:Yeri}} komutu başka bir menüye ya da panele taşır ya da {{ui:Yalnızca tuşlarla}} bırakır.
4. {{ui:Fare}} bölümünde tekerleği, planı kaydıran düğmeleri ve 3D görünümlerde her düğmenin ne yapacağını ayarlayın.
5. Bir ad verin ve {{ui:Kaydet}} tıklayın.

Yerleşik bir stili kaydetmek kendi kopyanızı oluşturur ("Benim Ev tasarımım"); yerleşik olan asla değişmez. İki komuta verilen ya da iki harfli bir tuşun yazılmasından önce çalışacak bir tuş kırmızı görünür ve kaydetmeden önce düzeltilmelidir.

## Fare

- **Fare tekerleği**: {{ui:Yukarı kaydırmak yakınlaştırır}} (başlangıç) ya da {{ui:Yukarı kaydırmak uzaklaştırır}}, ve ne kadar hızlı. Dokunmatik yüzeyde iki parmakla kıstırma her zaman parmaklarınızın hareket ettiği yöne yakınlaştırır.
- **Planı ve çizimleri kaydırmak için**: sol, orta ya da sağ düğmelerden herhangi biri. {{key:Space}} ile sürükleme de kaydırır; sol sürükleme yalnızca tıklamanın bir şey seçmediği ya da çizmediği yerde kaydırır.
- **3D görünümlerde sürükleme**: {{ui:Her görünümün kendi ayarı}} BimCraft'ın düğmelerini korur (sol yörüngede döndürür, sağ kaydırır). Ya da her düğmeyi yörüngede döndürme, kaydırma, yakınlaştırma ya da hiçbiri olarak ayarlayın; {{key:Shift}} ile düğme yörüngede döndürme ve kaydırmayı değiştirir. Sürüklemeden yapılan bir tıklama yine seçer.

## Yanınızda götürün

{{ui:Dışa aktar}} kullanılan stili küçük bir `.ccinput.json` dosyası olarak kaydeder; {{ui:İçe aktar…}} başka bir bilgisayardan ya da bir meslektaşınızdan birini ekler. İçe aktarılan dosya yalnızca BimCraft'ın kendi komutlarına işaret edebilir: başka her şey (bu sürümde bulunmayan bir komut, burada çalışmayan bir tuş) atlanır ve durum satırında sayılır. {{ui:Bu stili sil}} kendi stillerinizden birini kaldırır.

:::note
Bu ayarlar bu tarayıcıda kalır. Stil kartlarının altındaki {{ui:Bu stili her uygulamada kullan}} her uygulamanın eşleşen stille açılmasını sağlar (kendi araç çubuğu, bir menü çubuğu, bir şerit ya da Klasik çizim); {{ui:Görüntüleyici}} yalnızca BimCraft'a özgüdür ve diğer uygulamalarda karşılığı yoktur. Her uygulama yaptığınız değişikliklerle açılır; eşleşen stili olmayan bir uygulama kendi stilini korur. Bir uygulamada başka bir stil seçmek yalnızca o uygulamayı değiştirir.
:::

İlgili: [Klavye ve fare](topic:keyboard) · [BimCraft ayarları](topic:settings) · [Diğer BIM ve çizim programlarından geçiş](topic:coming-from)
