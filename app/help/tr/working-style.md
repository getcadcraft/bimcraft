---
title: Çalışma stili, çoğaltılan görünümler, kâğıt üzerinde kalemler, Şöyle raporla ve şablonlar
summary: BimCraft'ın çalışma biçiminize göre nasıl davranacağını seçin, herhangi bir görünümü kendi kopyası olarak veya bağlı olarak çoğaltın, kalem geçersiz kılmalarını dosyada tutun ve göründüğü gibi ya da bir kalem tablosu üzerinden yazdırın, bir öğeyi başka bir IFC sınıfı olarak raporlayın ve projelere kendi şablonlarınızla başlayın.
keywords: çalışma stili, görünümü çoğalt, çoğalt, görünüm kopyası, bağımlı görünüm, bağlı görünüm, kendi kopyası, kalem geçersiz kılmaları, kalemler, çizgi kalınlıkları, göründüğü gibi yazdır, kalem tablosu, çizim stili, ctb, tek renkli, gri tonlama, şöyle raporla, ifc sınıfı, yeniden sınıflandır, öngörülen tip, genel model, döşemeyi yol olarak, duvarı panel olarak, çatıyı rampa olarak, proje şablonu, şablon, şablondan, şablon olarak kaydet, ofis standardı
from: 231d98b0
---

## Ne yapacaksınız

BimCraft'ı çalışma biçiminize göre ayarlayın, görünümleri çoğaltın, çıktıları beklediğiniz gibi alın, öğeleri gerçekte ne oldukları gibi sayın ve her projeye ofisinizin şablonuyla başlayın.

## Bir çalışma stili seçin

1. {{ui:Ayarlar}}'ı ve {{ui:BimCraft}} sekmesini açın. {{ui:Çalışma stili}}'ni bulun.
2. Birini seçin:
   - {{ui:Her görünüm kendi}} (ilk seçenek): çoğaltılan bir görünüm açıklamalarını kopyalar ve açıklamalar o görünümün kalır; sayfalar ekranda göründüğü gibi yazdırılır.
   - {{ui:Ortak açıklamalar ve kalem tabloları}}: çoğaltılan görünümler açıklamaları paylaşır; yazdırma bir kalem tablosu üzerinden yapılır.
3. Seçimin altında bunun ayarladığı dört şey vardır. Bunlardan herhangi birini tek başına değiştirin; çalışma stili o zaman {{ui:Özel}} olarak okunur.

Çalışma stili, çalışma alanı düzeni gibi bu tarayıcıda tutulur. Bir şablon bunu yeni modellere taşır.

## Bir görünümü çoğaltın

1. {{ui:Proje tarayıcısı}}'nda her kat planının, tavan planının, çağrının, görünüşün ve kesitin bir {{ui:Çoğalt}} düğmesi vardır (iki sayfa simgesi).
2. Kopyaya ad verin ve nasıl davranacağını seçin:
   - {{ui:Kendi kopyası}}: çizimi, ölçülendirmeleri, kırpması, gizli öğeleri ve kalemleri kopyalanır ve kendine ait kalır. İki görünümden birinin düzenlenmesi diğerini asla değiştirmez; yayımlanmış bir sayfadaki görünüm yayımlandığı gibi kalır.
   - {{ui:Bağlı}}: aynı görünümü tek bir açıklama ve ayar kümesiyle gösterir.
3. Kopya {{ui:Çoğaltılan görünümler}} altında listelenir. Açmak için tıklayın; planın üstündeki çubuk bunun bir kopya olduğunu söyler ve görünümüne dönmek için {{ui:Yukarı}} bulunur.
4. Kaydırıcı düğmesi ayarlarını açar: ad, {{ui:Görünüm aralığı}} (kendi kopyanın kendi aralığı vardır), bağlı bir kopya için {{ui:Kendi kopyası yap}} ve {{ui:Sil}}.

Görünüşlerin ve kesitlerin kopyaları, kaynaklandıkları görünümler gibi kendi sayfalarınıza konur. Çoğaltma tek bir geri alma adımıdır ve kopyalar IFC'de çağrıların yanında tutulur.

## Kalemler görünümle birlikte tutulur ve göründüğü gibi yazdırılır

1. {{ui:Çiz}}'i açın ve {{ui:Kalemler}}'i seçin.
2. {{ui:Hedef}} artık her kategoriyi listeler: duvarlar, kapılar ve pencereler, döşemeler, çatılar, kolonlar, merdivenler, mobilya ve diğerleri ile taslak ve ölçülendirmeler.
3. {{ui:Uygula}}, kalemi gösterilen görünümle birlikte IFC'de tutar: bir plan, bir tavan planı, bir çağrı veya çoğaltılan bir görünüm. 0.9'dan önce yapılan kalemler tarayıcıda tutuluyordu; {{ui:Bunları dosyada tut}} onları taşır.
4. Sayfalar ve PDF, her kalemi ekranda gösterildiği gibi çizer.

Bunun yerine bir kalem tablosu üzerinden yazdırmak için, Kalemler satırındaki {{ui:Yazdır}} öğesini {{ui:Kalem tablosu üzerinden}} olarak ayarlayın, sonra bir tablo seçin (renkli, tek renkli, gri tonlama) veya {{ui:Kalem tablosunu düzenle…}}'yi seçin: her renk, yazdırıldığı rengi, kalınlığı ve tarama yoğunluğunu alır. Tablo CadCraft'ın çıktı stili dosyasıdır; bu yüzden {{ui:İçe aktar…}} CadCraft uygulamasında yapılmış bir tabloyu alır ve {{ui:Dışa aktar}} bir tabloyu geri verir. Model kendi seçimini tutar; hiçbiri yoksa çalışma stili belirler.

## Bir öğeyi başka bir sınıf olarak raporlayın

Bir döşemenin yol olarak çizildiği, bir duvarın panel olarak kullanıldığı, bir çatının rampa biçiminde olduğu durumlarda: onu çizdiğiniz aracı tutun ve gerçekte ne olduğu olarak raporlayın.

1. Öğeyi seçin ve {{ui:Özellikler}}'i açın. {{ui:Şöyle raporla}}'yı açın.
2. Arama kutusuna yazarak şekle uyan bir sınıf bulun, onu ve öngörülen tipini seçin. Kendi tipiniz için USERDEFINED seçin ve bir ad verin.
3. {{ui:Uygula}} (bir geri alma adımı). {{ui:Temizle}} öğeyi yeniden çizildiği gibi raporlar.

Öğeyi hâlâ çizdiğiniz araçla düzenlersiniz. Kaydedilen IFC onu raporlanan sınıf olarak yazar; böylece diğer programlar, {{ui:Miktarlar}} metrajı, Bul, Renge göre, model denetimleri ve {{ui:Sorunlar}} onu o sınıf olarak sayar. Listeler, panel olarak raporlanan bir duvarı duvar listesinin dışında bırakır ve {{ui:Raporlanan sınıfa göre öğeler}} her birini listeler. Bu, IFC4 ve IFC2X3 dosyalarında çalışır; liste yalnızca dosyanın IFC sürümündeki sınıfları sunar. Kapılar, pencereler, merdivenler, odalar ve katlar kendi sınıflarını korur.

## Bir projeyi şablon olarak kaydedin ve ondan başlayın

1. Bir proje açıkken {{ui:Kaydet}}'in yanındaki {{ui:Şablon olarak kaydet}}'e tıklayın.
2. Ona ad verin. Şablonu bir IFC dosyası olarak paylaşmak için {{ui:Şablon dosyasını ayrıca indir}}'i, varsayılanınız yapmak için {{ui:Yeni modelleri bununla başlat}}'ı işaretleyin.
3. Bir şablon katları, görünüm şablonlarını ve görünüm ayarlarını, çoğaltılan görünümleri ve çağrıları, taslağı, kalemleri ve kalem tablosunu, etiketleri, aileleri ve tipleri, sayfaları, sayfa boyutlarını, künyeleri ve çalışma stilini tutar. Duvarlar, döşemeler, kapılar ve diğer tüm model öğeleri dışarıda bırakılır.
4. {{ui:Yeni yapı}}'ya tıklayın ve {{ui:Şuradan başlat}} altında onu seçin ya da size gönderilmiş bir şablon için {{ui:Bir şablon dosyası…}}'nı seçin. Yeni proje kendi adını ve kendi proje kimliğini alır; diğer her şey şablonda olduğu gibidir.

:::note
Şablonlar bu tarayıcıda tutulur. CadCraft Studio ile paylaşılan ekip şablonları henüz yapılmadı: bunun yerine şablon dosyasını gönderin.
:::
