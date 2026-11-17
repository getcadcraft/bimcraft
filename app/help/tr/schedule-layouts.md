---
title: Bir listeyi düzenleyin, kaydedin ve dışa aktarın
summary: Bir listeyi gruplayın, ara toplamlar ve toplamlar verin, bir özellikten okunan bir sütun ekleyin, dosyada bir kurulum olarak kaydedin ve bir çalışma kitabı (.xlsx), çevrimiçi bir e-tabloya yapıştırmak için metin ya da CSV olarak dışa aktarın. Ofis standardı, bir listenin belirtmediği şeyleri doldurur.
keywords: liste düzeni, şuna göre grupla, ara toplam, toplam, başlıklar, ofis standardı, varsayılan ilkeler, kurulum, kapı listesi kata göre, yangın dayanımı, kapı donanımı, xlsx, çalışma kitabı, çevrimiçi e-tablo, yapıştır, csv, dışa aktar, e-tablo, öğeler, listeden seç, rakam
from: 95dfd801
---

## Neler yapacaksınız

Düz bir listeyi ofisinizin yayımladığı listeye çevirin: seviye, tip ya da odaya göre gruplanmış, ara toplamlar ve bir toplamla, ihtiyacınız olan sütunlarla, kendi adı altında. Sonra bir e-tabloya gönderin. Her satır ve her rakam hâlâ geldiği öğeleri bilir.

## Adımlar

1. {{ui:Çiz}}'i açın ve sol paneldeki **Listeler**'i açın. Bir liste seçin, örneğin **Kapılar**.
2. Tablonun üstünde **Şuna göre grupla** (Seviye ya da Tip gibi listenin bir sütunu, ya da **Gruplama yok**) ve **Toplamlar** (**Toplam yok**, **Tek toplam** ya da **Ara toplamlar ve bir toplam**) seçin. **Ayarlandığı gibi** seçimi, kaydedilmiş kuruluma ya da ofis standardına bırakır.
3. Öğelerden okunan bir sütun eklemek için tablonun altına bir özellik ya da etiket adı yazın (örneğin `FireRating`, `Pset_DoorCommon.FireRating` ya da `Ironmongery` gibi bir etiketin adı) ve **Sütun ekle**'ye tıklayın. BimCraft önce öğenin kendi özellik kümelerini, sonra tipinin özellik kümelerini okur. Hiçbir öğenin henüz bir değeri yoksa bunu söyler; değer ayarlandığında sütun kendiliğinden dolar.
4. Bir ad yazın (örneğin "Kata göre kapı listesi") ve **Kurulum olarak kaydet**'e tıklayın. Kurulum bina dosyasında tutulur ve Listeler listesine adıyla katılır. Modelin her değişikliğini izler. **Bu kurulumu kaldır** onu tekrar çıkarır. İkisi de Geri al'da tek adımdır.

## Hangi kaynaktan geldiğini seçmek için bir rakama tıklayın

Herhangi bir satıra ya da tek bir rakama tıklayın; arkasındaki öğeler planda ve 3B'de seçilir:

- bir satır, o satırın öğelerini seçer;
- bir ara toplam ya da toplam, topladığı her şeyi seçer; bir grup başlığı kendi grubunu seçer;
- kendi öğeleri olan bir rakam onları seçer: bir duvar tipinin **Düşülenler**'i kapılarını ve pencerelerini, bir odanın duvar alanı ise duvarlarını seçer.

Modelden yapılmış bir belgede de aynısı çalışır: önizlemede, bir listenin bir rakamına tıklayın.

## Dışa aktarma

- **Excel'i indir** bir .xlsx çalışma kitabı kaydeder. Uzunluklar, alanlar, hacimler ve sayılar, sütunun gösterdiği birimde gerçek sayılardır (fit ve inç metin olarak kalır). **Öğeler** adlı ikinci bir sayfa, her satır için arkasındaki öğelerin GlobalId'lerini listeler.
- **Google Sheets için kopyala** listeyi sekmeyle ayrılmış metin olarak panonuza koyar. Bir Google Sheet'te A1 hücresine tıklayın ve yapıştırın. **Yeni bir Google Sheet aç** `sheets.new` adresini açar; bu, Google'ın boş bir e-tablo için kendi adresidir ve kendi Google hesabınızda açılır. BimCraft Google'da oturum açmaz ve oraya hiçbir şey göndermez: yapıştırma sizindir.
- **CSV'yi indir** tabloyu ekranda gösterildiği gibi kaydeder.

## Ofis standardı

Bir ofis, listelerinin nasıl düzenleneceğini bir kez söyleyebilir. **Varsayılan İlkeler** eklentisini açın ([Varsayılan İlkeler](topic:default-policies)) ve **Ayarlar › Genel › Varsayılan İlkeler › Liste düzeni (ofis standardı)** altında ayarlayın:

| İlke | Ne yapar |
|---|---|
| Listeleri şuna göre grupla | Seviye, Tip, Oda ya da gruplama yok; böyle bir sütunu olan her liste için |
| Listelerdeki toplamlar | Toplam yok, sonda bir toplam ya da her grubun altında bir ara toplam ve bir toplam |
| Liste başlığı | Bir desen, örneğin `{project}: {schedule}` |
| Sütun başlıkları | Yazıldığı gibi, BÜYÜK HARFLE ya da Baş Harfleri Büyük |

Standart, kim kurarsa kursun her listeye uygulanır: paneldeki düz listeler, kaydedilmiş bir kurulum, bir asistanın kurduğu bir liste, dışa aktarımlar ve bir belgedeki listeler. Kendi gruplamasını, toplamlarını ya da başlığını belirten bir kurulum bunları korur; standart gerisini doldurur. Panel, ofis standardının hangi parçaları ayarladığını söyler. İlkeler, Varsayılan İlkeler dosyasıyla diğerleri gibi taşınır.

## İyi bilmeniz gerekenler

- Bir kurulum kaynak listesini ve sütunlarını adlandırır; hiçbir sayı tutmaz. Sayılar her seferinde modelden okunur.
- Öğe satırları olmayan listeler (duvar düzenleri ve malzeme lejantı) burada düzenlemeye ve dışa aktarmaya sahip değildir.
- Bir asistan bunların hepsini sizin için yapabilir: bkz. [Bir yapay zekâ asistanının modelinizle çalışmasına izin verin](topic:assistants).
