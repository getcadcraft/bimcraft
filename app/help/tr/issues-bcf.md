---
title: Sorunlar ve BCF dosyaları
summary: Modelin bir görünümünü kamera, seçilen öğeler, gizlenenler ve kesit ile birlikte sorun olarak kaydedin; diğer koordinasyon araçlarıyla paylaşılacak bir BCF dosyası olarak dışa aktarın ve onların BCF dosyalarını açarak sorunlarını görün.
keywords: bcf, bcfzip, sorun, sorunlar, konu, bakış noktası, çakışma raporu, koordinasyon, yorum, anlık görüntü, bcf aç, bcf kaydet, dışa aktar, içe aktar
from: 2a6cf201
---

## Ne yapacaksınız

Modeldeki bir soruna işaret edin ve onu gösteren görünümü saklayın; sonra diğer koordinasyon araçlarının okuyup yazdığı biçim olan bir BCF dosyası ile iletin.

## Adımlar

1. Bir IFC modeli açın ve görünümü ayarlayın: etrafında döndürün, ilgili öğeleri seçin, yolda olanları gizleyin, bir kesit düzlemi ya da kutusu ile kesin.
2. Sağdaki {{ui:Sorunlar}} sekmesine, ardından {{ui:Bu görünümden yeni sorun}} öğesine tıklayın.
3. Bir başlık yazın, isterseniz bir yorum ekleyin; bir durum seçin; adınızı ya da e-postanızı girin (oturum açıksa hesabınızın adı otomatik doldurulur; bkz. [BimCraft ayarları](topic:settings#your-name-on-issues)). {{ui:Sorun oluştur}} öğesine tıklayın.
4. Bir sorunda {{ui:Göster}} öğesine tıklayarak görünümünü geri getirin.
5. Her sorunu tek bir `.bcf` dosyası olarak indirmek için {{ui:BCF kaydet}} öğesine tıklayın.
6. Başkasının oluşturduğu sorunları görmek için {{ui:BCF aç…}} öğesine tıklayın ve onların `.bcf` ya da `.bcfzip` dosyasını seçin.

## Ne görmelisiniz

- Listede her sorun; görünümünün bir resmi, başlığı, durumu, yazarı ve tarihiyle birlikte yer alır.
- {{ui:Göster}} kamerayı, seçilen öğeleri, gizlenenleri (ya da yalnızca gösterilen şeyleri) ve kesiti geri getirir. Öğeler, açık her modelde GlobalId değerleriyle bulunur; bazıları yoksa durum satırı bunu belirtir.
- Başka bir araçtan gelen bir kesit düzlemi ya da kutusu, modelin eksenleriyle hizalandığında gösterilir; eğik ya da fazla düzlemler kesit hacmi olarak geri gelir (en fazla 6 düzlem). Bir sorun, birden çok kutudan oluşan bir hacmin ilk kutusunu tutar.

## Bilmeniz gerekenler

- Dosya BCF 2.1 biçimindedir ve görünümü modelin kendi koordinatlarında tutar; böylece diğer araçlar kamerayı aynı yere yerleştirir.
- Sorunlar, siz kaydedene kadar bu sekmede kalır. Başka bir model açmak listeyi korur; sorunları göstermeden önce sorunların ait olduğu modeli açın.
- Başka bir araçtan gelen paralel (ortogonal) kamera, bu görüntüleyicinin perspektif kamerasıyla gösterilir; modelin aynı bölümü görünümü dolduracak şekilde geri çekilir.

## Sık yapılan hatalar

- **Göster kamerayı garip bir yere taşıdı.** Sorun başka bir modelde ya da başka koordinatlarla oluşturulmuş. Önce doğru modeli açın.
- **Dosya açılmıyor.** BCF zip değil ya da bozuk; nedenini durum satırı belirtir.

## Sonraki adımlar

- [Öğeleri gizleyin, izole edin ve geçirgen yapın](topic:hide-and-isolate)
- [Bir IFC modelini kesit düzlemiyle kesin](topic:section-plane)
