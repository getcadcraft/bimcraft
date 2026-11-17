---
title: "Perde sistemleri: ızgara üzerinde camlı duvarlar, dikmelerle"
summary: Perde sistemini bir duvar gibi çizin ya da bir yüzeye yerleştirin, sonra ızgara çizgilerini ve dikmelerini ayarlayın. IfcCurtainWall olarak, cam tabakaları ve dikmeleriyle birlikte kaydedilir.
keywords: perde sistemi, perde duvar, perde ızgarası, dikme, camlama, vitrin, cam duvar, panel, cam tabaka, yüzeye göre, yüzey, bina kütlesi, ızgara çizgisi, aralık, profil, yatay dikme, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Ne yapacaksınız

Dikmeler arasında camlı bir duvar oluşturun, ızgara çizgilerinin yerini değiştirin ve hangi çizgilerin dikme taşıyacağını seçin.

## Adımlar

1. {{ui:Draw}} seçeneğini açın ve **Yapı** menüsünü açın (şerit düzeninde: Mimari sekmesi).
2. **Perde Sistemi**ni seçin. Satırında üst kotu (üstteki kat ya da bir yükseklik), boyunca her bu kadar bir çizgiyi, yukarı doğru her bu kadar bir çizgiyi (yok için boş bırakın), dikme alıp almayacağını ve dikme profilini belirleyin.
3. Bir duvarı çizer gibi başlangıç ve bitiş noktalarına tıklayın. Shift, sistemi dik açılı tutar.
4. Izgarayı değiştirmek için **Perde Izgarası**nı seçin ve sisteme tıklayın:
   - **Çizgi ekleyin**: dik bir çizgi, tıkladığınız yere gelir. Yatay bir çizgi için önce **At** alanına yüksekliğini yazın.
   - **Çizgiyi taşıyın**: çizgiye, sonra gideceği yere tıklayın.
   - **Çizgiyi kaldırın**: çizgiye tıklayın.
   - **Aralığa göre ayarlayın**: **Her** alanına aralığı yazın, sonra sisteme tıklayın.
5. Dikmeleri değiştirmek için **Dikme**yi seçin, neyi etkileyeceğini belirleyin (tıkladığınız dik çizgi, bir yükseklikteki yatay çizgi, kenar ya da her çizgi), **Dikme yerleştir** ya da **Dikmeleri kaldır** seçeneğini ve bir profil seçin, sonra sisteme tıklayın.
6. Bir sistem seçerek tamamını **Özellikler** içinde görün: her ızgara çizgisini yeriyle, dikme işaretiyle ve kaldırma düğmesiyle; ayrıca aralığı, kenarı, profili ve cam tabaka kalınlığını.

## Yüzeye göre

**Yüzeye göre**, 3B görünümde tıkladığınız düz bir yüzeyde bir perde sistemi oluşturur. Satırında aynı ızgara ve dikme ayarları bulunur.

- 3B görünümün gösterdiği herhangi bir öğenin düz yüzeyinde çalışır: kütle, duvar, döşeme, çatı düzlemi, kolon, yerleştirilmiş bir öğe. Yüzey dik, eğimli ya da yatay olabilir.
- Sistem yüzeyin dış hattını alır. Alınlık ya da başka alışılmadık bir şekil, cam tabakaları ve dikmeleri ona göre keser.
- Bunun yerine bir **duvar** da oluşturabilir: dik bir yüzeyin tabanı boyunca ve yüzey yüksekliğinde. Buradaki duvar her zaman dik durur; bu yüzden eğimli ya da yatay bir yüzey duvar alamaz.
- Çatı oluşturmaz. BimCraft'ta çatı, tek bir yüzeyden değil, bir katın dış hattı ve eğimden hesaplanır.
- Eğri bir yüzey çok sayıda küçük düz yüzeydir: bir tıklama bunlardan birini alır.
- İçinde açıklıklar olan bir yüzeyde sistem, yüzeyin dış hattını kaplar.

## Nasıl ölçülür

- **Brüt alan** sistemin dış hattıdır.
- **Cam alanı**, yapıldığı haliyle cam tabakalardır: ızgara dikmesi olan bir kenarda her tabaka bir dikme genişliğinin yarısını, kenar dikmesinde ise tam genişliğini kaybeder.
- Dik dikme, kenardan kenara uzanır. Yatay dikme her dik dikmede ve kenarda durur. Kenar dikmeleri dış hattın içinde yer alır; iki dikme birleştiğinde daha dik olan uzanır. Birleşimler düz kesilir, eğimli değil.
- **Listeler** içinde, model bir tane içerdiğinde bu sayıları gösteren bir **Perde sistemleri** listesi bulunur.

## IFC dosyasında

Katında bir IfcCurtainWall; her cam tabaka için bir IfcPlate (perde paneli) ve her dikme parçası için bir IfcMember (dikme) içerir; her biri kendi şekli, malzemesi ve temel miktarlarıyla birlikte.

## Bilmeniz gerekenler

- İstediğiniz her boyut yapılır. Yalnızca alanı olmayan bir dış hat reddedilir, çünkü yapılacak bir şey yoktur.
- Duvar gibi çizilen bir sistem, çizildiği yüksekliği korur. Bir katı sonradan taşırsanız, yüksekliğini Özellikler içinde yeniden ayarlayın.
- Taşı aracı henüz bir perde sistemini taşımaz. Silip yeniden çizin ya da ızgarasını yerinde değiştirin.
- Geri al her adımı tek tek geri alır: tüm sistemi, bir ızgara değişikliğini, bir dikme değişikliğini.
