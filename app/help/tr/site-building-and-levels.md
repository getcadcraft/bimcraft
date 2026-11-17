---
title: Arsa, üzerindeki bina ve katları
summary: Arsanın sınırını çizin, binayı arsaya yerleştirip döndürün, verilen yüksekliklerde seviye ekleyin ya da bina yüksekliğini bölün ve seçtiğiniz seviyede çizim yapın.
keywords: arsa, arsa planı, yapı hattı, geri çekme, irtifak hakkı, geçit hakkı, mülkiyet sınırı, parsel, arsa sınırı, sınır, bina yerleşimi, binayı döndür, binayı yerleştir, seviyeler, katlar, kat, seviye ekle, yükseklik bölme, kat yüksekliği, IfcSite, IfcBuilding, IfcBuildingStorey, mekânsal yapı
from: 48d10c1e
---

## Ne yapacaksınız

Diğer her şeyi tutan IFC modelinin parçalarını kurun: arsa, üzerindeki bina ve binanın seviyeleri.

Bir model, bir **arsa** içinde bir **bina** tutan ve bunun **seviyelerini** (katlarını) tutan bir yapı olarak düzenlenir; duvarlar, döşemeler ve diğer her şey bir seviyeye aittir. {{ui:Dosya}} › {{ui:Yeni yapı}} üçünü de kurar. Bir binası olan ama arsası olmayan başka bir programın modeli, ilk kez bir arsa çizdiğinizde bir arsa alır: bina zaten olduğu yere yerleştirilir.

## Arsayı çizin

1. {{ui:Çiz}} seçeneğini açın, sonra {{ui:Derleme}} › {{ui:Arsa}} seçin.
2. Arsanın köşelerine tıklayın (araç Duvar aracı gibi yakalar). İlk köşeye yeniden tıklayın, çift tıklayın ya da bitirmek için {{key:Enter}} tuşuna basın. {{key:Backspace}} bir köşeyi geri alır.
3. Satır arsanın alanını gösterir. Değiştirmek için yeniden çizin.

Her seviyenin planı, arsanın dış hattını bir mülkiyet sınırı olarak gösterir.

## Binayı arsaya yerleştirin

{{ui:Arsa}} açıkken arsa üzerindeki binanın **X** ve **Y** değerlerini ve derece cinsinden **Döndürme** değerini yazın ya da {{ui:Yapıyı tıklayarak yerleştir}} öğesine tıklayıp binanın başlangıç noktasının gideceği yere tıklayın. Binadaki her şey (seviyeler, duvarlar, ızgaralar, çizdiğiniz her şey) onunla birlikte taşınır; arsa ve dış hattı yerinde kalır. Planlar, her seviyeyi binaya dik olarak göstermeye devam eder.

## Yapı hatları ve irtifak hakları

Yapı hatları ve irtifak hakları (kolaylıklar, geçit hakları) arsaya kısıt olarak çizilir. **Uyarırlar, asla engellemezler**: üzerinde kalan bir duvar istediğiniz gibi çizilir ve duvarı ile hattı ya da hakkı adlandıran bir uyarı Sorunlar'da belirir. Duvarı geri çekin, uyarı kaybolur. Bir uyarı bir gerekçeyle kabul edilebilir (örneğin yetkililerin verdiği bir muafiyet).

- **Geri çekmelerden yapı hattı.** {{ui:Derleme}} › {{ui:Yapı hattı}}, sonra {{ui:Geri çekmeler}}: hattın arsanın her sınırından ne kadar içeride durduğunu yazın. Araç açıkken sınırlar planda numaralanır. Hat bu mesafelerden hesaplanır ve sınır sayısı aynı kalırsa arsa dış hattını yeniden çizdiğinizde onu izler. Mesafeler size aittir, tapu senedinizden ya da imar planınızdan okunur; BimCraft hiçbirini kendiliğinden doldurmaz.
- **Çizilmiş bir yapı hattı.** {{ui:Yapı hattı}} açıkken noktalarına tıklayın ve çift tıklayarak ya da {{key:Enter}} ile bitirin. Kapalı bir hat için ilk noktada bitirin: içindeki alan inşa edilebilecek yerdir ve dışında kalan herhangi bir kısmı olan bir duvar için uyarılır. Açık bir hat yalnızca onu kesen bir duvar için uyarır.
- **Bir irtifak hakkı.** {{ui:Derleme}} › {{ui:Irtifak hakkı}}: türünü seçin, adını, kayıtlı referansını ve genişliğini yazın, sonra orta çizgisine tıklayıp bitirin (bir şerit) ya da ilk noktasında kapatın (bir alan). Üzerinde herhangi bir kısmı kalan bir duvar her seviyede uyarılır.
- Bir hat üzerinde tam olarak duran bir yüz değiyor demektir, kesişmiyor (tolerans 1 mm).
- Her seçeneğin geçerli kütlesi, duvarlarla aynı şekilde denetlenir: bir hattın üzerindeki, bir sınırın dışındaki ya da bir irtifak hakkındaki bir kütle uyarılır. Bkz. [Yan yana tutulan kütle seçenekleri](topic:massing-options).
- Birini seçmek için {{ui:Seç}} kullanın; adını, referansını, türünü veya genişliğini değiştirin, taşıyın ya da silin.

Bunlar her seviyenin planında, sayfalarda ve plan PDF'sinde çizilir: yapı hatları kesikli, irtifak hakları noktalı, her biri etiketiyle birlikte. IFC dosyasında her biri arsada bir ek açıklamadır (IfcAnnotation, tür BuildingLine ya da Servitude) ve çizgisi diğer programların okuyabildiği düz bir eğri olarak yer alır. Denetim, her duvarın plandaki gerçek dış hattını birleşimleriyle birlikte kullanır; eğri bir duvar kendi orta çizgisi etrafındaki kendi kalınlığıyla denetlenir.

## Katlar ekleyin

{{ui:Katlar}} panelinde {{ui:Üste bir kat ekle}} bir tane ekler; {{ui:Altına bir seviye ekle}} en alttakinin altına bir tane ekler (bodrum, negatif kotta). {{ui:Katlar ekle…}} birkaçını birden ekler:

- **Bu yüksekliklerde**: en alçak seviyenin üzerindeki yükseklikleri virgülle ayırarak yazın (örneğin `12', 24', 36'`). Zaten bir seviyesi olan yükseklikler atlanır.
- **Binanın yüksekliğini bölün**: binanın yüksekliğini ve seviye sayısını yazın. Mevcut seviyeleriniz en alttan başlayarak yeni yüksekliklerine taşınır, eksik olanlar eklenir ve onların üstündekiler olduğu yerde kalır.

Üst seviyeye uzanan duvarlar onu izler; kolonlar ve rampalar da öyle.

{{ui:Bu seviyeyi kopyala…}} (aynı panelde) baktığınız seviyede çizilenleri başka bir seviyeye ya da üstte yeni bir seviyeye kopyalar; böylece bir kat planı binada tek adımda yukarı çıkabilir. Bkz. [Duvar çizin](topic:draw-walls).

## Bir seviyede çizin

Her çizim aracı, plan'ın seviye listesinde (ya da {{ui:Katlar}} panelinde seçilen) seviyede çalışır: çizdiğiniz şey o seviyeye aittir.

## Ne görmelisiniz

- Bu değişikliklerin her biri tek bir adımdır: {{key:Mod+Z}} onu geri alır.
- IFC dosyasında: arsa (IfcSite) dış hattı ve alanıyla, üzerine yerleştirilmiş bina (IfcBuilding) ve binadaki seviyeler (IfcBuildingStorey).

Bkz. [BimCraft'ta koordinatlar](topic:coordinates) proje başlangıç noktası ve ölçüm noktası için.
