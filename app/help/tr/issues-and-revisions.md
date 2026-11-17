---
title: Sorunlar, revizyonlar ve çizim değişiklik günlüğü
summary: Verdiğiniz her sayfa takımını kaydedin, sonra her sayfada ve öğede neyin değiştiğini görün; saha talimatlarını, atölye çizimlerini ve bağlı modelleri ait oldukları sorunla birlikte tutun.
keywords: sorun, verilen takım, gönderilen takım, gönderim, revizyon, revizyonlar, neyin değiştiği, sorundan beri, değişiklik günlüğü, çizim değişiklik günlüğü, çizim kaydı, iletim yazısı, saha talimatı, imalat çizimi, bağlı model, ihale, inşaat, anlık görüntü, karşılaştır
from: 4c732832
---

## Ne yapacaksınız

Bir sorun kaydedin: hangi sayfalar hangi tarihte, hangi amaçla ve her biri hangi revizyonla verildi. Daha sonra bu sorundan beri neyin değiştiğini sorun. Saha talimatlarını ve geri dönen imalat çizimlerini sorunla ilişkilendirerek tutun.

## Adımlar

1. Sol panelde **Sorunlar ve revizyonlar** bölümünü açın.
2. **Sorun kaydet** seçeneğini seçin. Revizyon önerilir (A, sonra B; P1 gibi numaralı olanlar artar). Verilme amacını, kime gönderildiğini, tarihi ve sayfaları seçin. Proje aşaması ayarlandığında amaç ona göre gelir. İzin paketinde destekleyici belgelerin bir listesi varsa, bu listeye bağlı sayfalar sizin için işaretlenir.
3. Modelin verildiği haliyle tam olarak saklanması için **Modelin verilen bir kopyasını da kaydet** seçeneğini işaretli bırakın. Kopya indirilir; adı, boyutu ve SHA-256 değeri sorunla birlikte saklanır.
4. **Bu sorunu kaydet** seçeneğini seçin. En son verildiğinden beri değişen bir sayfa yeni revizyonu alır. Değişmeyen bir sayfa mevcut revizyonunu korur. Her sayfanın künyesinde revizyonu gösterilir.
5. Neyin değiştiğini görmek için bir sorunun yanındaki **Bu tarihten beri değişiklikler** seçeneğini seçin. Her sayfada **Aynı** ya da **Değişti** yazar; üzerinde eklenen, değiştirilen ve kaldırılan öğeler gösterilir. Bir sayıya tıklayarak bu öğeleri seçin.
6. Bir saha talimatı, imalat çizimi, işaretleme takımı, bağlı model ya da not için **Kayıt ekle** seçeneğini seçin. Hangi sorunla ilgili olduğunu seçin. Seçtiğiniz dosya adı, boyutu ve SHA-256 ile kaydedilir; dosya olduğu yerde kalır.
7. **Çizim değişiklik günlüğü**, her sayfa için bir satır ve her sorun için bir sütun gösterir. **Değişiklik günlüğünü indir (CSV)** seçeneği, bunu sorunlar ve kayıtlarla birlikte kaydeder.
8. **Sorun geçmişini kaydet** bir `.issues.json` dosyası yazar. MarkupCraft, TakeoffCraft ve DetailCraft bunu **Sorun geçmişini oku** ile okur.

## Bilmeniz gerekenler

- Geçmiş IFC dosyasının içinde tutulur (projede `CadCraft_Issues` özellik kümesi). Diğer programlar bunu yok sayar.
- Bir sayfa, kendi kurulumu değiştiğinde ya da gösterdiği bir öğe değiştiğinde değişmiş sayılır: bir plan kendi seviyesini, bir görünüş ya da kesit tüm modeli, bir kapı ya da pencere listesi kendi kapı ya da pencerelerini gösterir.
- Bir öğe; bir özelliği, konumu, boyutu ya da şekli değiştiğinde değişmiş sayılır.
- Hangi özelliğin tam olarak değiştiğini görmek için verilen modelin kaydedilmiş kopyasını **Sürümleri karşılaştır** ile açın.
- Bir sorunu kaldırmak, kayıtlarını sorunsuz olarak tutar. Her adım tek bir Geri al işlemidir.
- 60,000'den fazla öğesi olan bir model, sorunla birlikte her öğenin kaydını tutmaz. Sayfalar yine de karşılaştırılır.

## Henüz yapılmadı

- Sayfalar sorunla birlikte PDF olarak kaydedilmez.
- BimCraft'ın kendi sayfalarında revizyon bulutu çizilmez. Bulutları MarkupCraft'ta sorunla ilişkilendirerek kaydedin.
