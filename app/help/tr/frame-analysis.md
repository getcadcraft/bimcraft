---
title: Yapısal çerçeveyi analiz edin
summary: Modelin kirişlerinin, kolonlarının ve çaprazlarının, sizin belirlediğiniz yük durumları ve kombinasyonları altındaki kuvvetleri, mesnet tepkilerini ve sehimlerini; IFC içinde saklanır. Bir analiz yardımcısıdır, bir yönetmelik kontrolü değildir.
keywords: analiz, birimler, fit ve inç, görüntüleme birimi, yapısal analiz, tasarım denetimleri, kullanım oranı, haddelenmiş, kaynaklı, AISC 360, EN 1993-1-1, çerçeve analizi, analitik model, rijitlik yöntemi, yükler, yük durumu, kombinasyon, ölü yük, hareketli yük, öz ağırlık, mesnet tepkileri, eğilme momenti, kesme kuvveti, eksenel kuvvet, sehim, sehim şekli, mesnetler, mafsallı, ankastre, serbest bırakma, rapor, pdf, csv, craftscript, frame3d, kirişler, kolonlar, elemanlar
from: b93b58c4
---

Sağdaki {{ui:Analiz}} sekmesi, açık modelin kirişlerindeki, kolonlarındaki ve çaprazlarındaki kuvvetleri, kolon ayaklarındaki tepkileri ve elemanların ne kadar büküldüğünü, verdiğiniz yükler için bulur.

:::warning
Bu bir **analiz yardımcısıdır, yönetmelik kontrolü değildir**. Analiz hiçbir tasarım yönetmeliği uygulamaz: elemanların boyutlarını belirlemez, kapasitelerini kontrol etmez ve yük katsayılarını seçmez. Bir mühendis analitik modeli, yüklerini ve mesnetlerini kontrol eder ve sayıların ne anlama geldiğine karar verir. Altındaki {{ui:Tasarım denetimleri}} bloğu, haddelenmiş çelik I profillerini AISC 360 ya da EN 1993-1-1'e göre denetler; bir mühendis gözden geçirene kadar bir yardımcıdır: bkz. [Tasarım denetimleri](topic:frame-analysis#design-checks).
:::

## Çalıştırın

1. Bir IFC modeli ve {{ui:Analiz}} sekmesini açın.
2. Görünümde bir ya da daha fazla kiriş, kolon ya da çapraz seçin, bir {{ui:Durum}}, bir {{ui:Yük}} ve bir {{ui:Yön}} seçin, değeri yazın ve {{ui:Yük ekle}} öğesine basın: bir elemana yayılan yük için kN/m, nokta yükü için kN.
3. {{ui:Analizi çalıştır}} öğesine basın.

Sonuç tablosu her elemanın en büyük eksenel kuvvetini, kesme kuvvetlerini, eğilme momentlerini, burulmayı ve sehimini listeler; görünümde elemanı seçmek için adına tıklayın. Altında tepkiler bulunur. {{ui:Modelde}}, sehim şeklini ya da her elemanın yanında tek bir iç kuvvetin diyagramını çizer. Model değiştiğinde sonuçlar eskir: yeniden çalıştırın.

Her yük ve ayar, {{ui:Değişiklikler}} listesinde tek bir değişikliktir: {{ui:Geri al}} onu geri alır ve {{ui:IFC olarak farklı kaydet}} bunları dosyada tutar (projenin `CadCraft_Analysis` özellik kümesi); böylece model burada bir sonraki açıldığında yükleri hâlâ durur.

## Analitik model nasıl oluşturulur

- Şekli tek bir düz ekstrüzyon olan her IfcBeam, IfcColumn ve IfcMember, kesitinin ağırlık merkezi çizgisinde bir eleman olur. Kesit özellikleri profilden gelir: I, U, L ve T şekilleri, dikdörtgenler ve borular, daireler ve yuvarlak borular ya da herhangi bir kapalı kontur (bu durumda burulma sabiti bir tahmindir ve raporda belirtilir). Diğer her şey dışarıda bırakılır ve sayılır.
- Bir modelde kirişler bir kolonun yüzünde durur ve döşemenin altında oturur. Her eleman ucu, kendi çizgisi boyunca, kesitlerin boyutu kadar yakınsa (yaklaşık olarak), bağlandığı elemanın eksenine taşınır ve o eleman orada bölünür. Rapor kaç ucun taşındığını belirtir.
- **Kolon ayaklarının** altında hiçbir şey yoksa mesnettirler: sabit (başlangıç) ya da mafsallı (yerinde tutulan ve burulmaya karşı tutulan, ama dönebilen).
- **Kiriş uçları**, {{ui:Birleşimi çizilmemiş kiriş uçları}} kuralıyla rijit ya da mafsallı yapılır; **çaprazlar** (IfcMember) iki uçta mafsallıdır. Uçlarına ya da bir kolonun ayağına kendi kuralını vermek için bir elemanı seçin.
- Malzemeler adına göre: beton (E = 30 GPa), ahşap (E = 11 GPa), aksi halde çelik (E = 200 GPa).

Çerçeve, hiçbir şeyi bükmeden hareket edebiliyorsa (bir mekanizma), çalıştırma durur ve nerede ve hangi yönde olduğunu söyler.

## Durumlar, kombinasyonlar, işaretler ve rapor

Analiz **Ölü** (öz ağırlık), **Hareketli** ve **Ölü + hareketli** ile başlar; tasarım yönetmeliğinizin istediği katsayılarla durum ve kombinasyon ekleyin. N > 0 çekmedir; My > 0, elemanın yerel −z tarafını çekmeye maruz bırakır (yerçekimi altında sarkan bir kiriş My > 0'a sahiptir). {{ui:Rapor (PDF)}} ve {{ui:Rapor (CSV)}}; varsayımları, kesitleri, durumları, toplamlarıyla birlikte tepkileri, eleman kuvvetlerini, yerdeğiştirmeleri ve bir zarfı içerir. {{ui:CraftScript olarak dışa aktar}}, çerçeveyi PartCraft'ın Betik çalışma alanı için yazar; orada kütüphane işlevi `frame3d` onu okunabilir kodla çözer.

Yöntem doğrudan rijitlik yöntemidir; *İkinci mertebe (P-Delta)* işaretlemediğiniz sürece doğrusal ve birinci mertebedir ve ders kitabı örnekleriyle kontrol edilmiştir.

**İkinci mertebe (P-Delta).** Çalıştır'ın yanındaki *İkinci mertebe (P-Delta)* seçeneğini işaretleyin: her kombinasyon, elemanların eksenel kuvvetleri sehim yapmış çerçeve üzerinde etkiyecek şekilde yeniden çözülür (her eleman 4 parçaya bölünür, böylece uçları arasındaki eleman eğilmesi de sayılır), eksenel kuvvetler oturana kadar. Sonuç satırı geçiş sayısını ve yanal yer değiştirmenin ne kadar arttığını verir; momentler, sehimler, tasarım denetimleri ve rapor bu sonuçları kullanır. Çerçevenin elastik kritik yükünün üzerinde çalıştırma durur ve bunu söyler. Elastiktir, küçük dönmelidir, yalnızca eğilmeyi içerir; rijitlik azaltması ya da nosyonel yük yoktur (tek başına AISC doğrudan analiz yöntemi değildir); döşemeler, duvarlar ve rijit döşemeler birinci mertebede kalır.

**Döşemelerde zemin basıncı.** Beton döşemeler için (analiz, malzemesi beton olduğunda bir döşemeyi plak olarak okur), Yükler bloğunda {{ui:Her döşemeye basınç}} vardır: kN/m² girin, yukarıdaki durumu seçin ve {{ui:Döşemelere ekle}} öğesine basın. Basınç, bulunan her döşemeye aşağı yönde yayılır ve bir Kaldır bağlantısıyla listelenir. Tüm döşemeler için tek bir basınçtır, döşeme başına değil; ve bir yönetmelik yükü değildir: mühendisinizin verdiği değeri yazın.

**Doğal frekanslar (sonlu elemanlar).** Sonuçların altındaki {{ui:Sonlu elemanlar: doğal frekanslar}} bloğu, aynı modelin en düşük modlarını sonlu eleman motoruyla bulur: uç serbestlikli kirişler, düzlem dört düğümlü kabuklar olarak döşemeler ve duvarlar, rijit döşemeler, mesnetler. Mod sayısını (3, 6, 10 ya da 20) ve döşeme elemanını (kalın ya da ince döşemeler için dört düğümlü kabuk ya da ince döşeme elemanı) seçin ve {{ui:Frekansları bul}} öğesine basın. Tablo her modun Hz cinsinden frekansını, saniye cinsinden periyodunu ve X, Y ve Z doğrultularındaki etkin modal kütlesini, hareket edebilen kütlenin bir payı olarak verir; {{ui:Modelde göster}}, herhangi bir modu sehim şekli gibi çizer. Kütle, malzeme yoğunluğu çarpı hacimdir: yükler kütle eklemez ve yoğunluğu olmayan bir malzemenin kütlesi yoktur. Rapor (PDF, CSV) tabloyu içerir. Bu yalnızca elastik ve küçük yer değiştirmeli bir analizdir; burada bir yönetmelikten deprem ya da rüzgâr yükü üretilmez. Yönetmelik kontrolü değildir; sonuçları mühendisiniz gözden geçirir.

**Tepki spektrumu, zaman tanım alanı ve itme analizi.** Frekansların altında, aynı sonlu eleman modelini kullanan üç blok daha bulunur. Hepsi için kütle, malzeme yoğunluğu artı işaretlediğiniz durumların aşağı yönlü yükleridir; her biri yazdığınız bir katsayıyla çarpılır (örneğin Ölü 1 ile ve Hareketli, kütle olarak saydığınız pay ile).

{{ui:Tepki spektrumu}}, her modu sizin verdiğiniz bir spektrumdan okur (periyot ve ivme tablosu ya da SDS, SD1 ve TL'den ASCE 7 şekli; {{ui:Deprem bloğu değerlerini kullan}} düğmesi bu değerleri Deprem bloğundan kopyalar) ve modları CQC, SRSS, yüzde on kuralı ya da mutlak toplamla birleştirir, sonra X, Y ve Z doğrultularını bir araya getirir (%100 + %30 ya da SRSS). Taban kesme kuvvetini, kat ötelenmelerini, eleman uç kuvvetlerini ve kullanılan modların kütlenin %90'ından azını taşıdığında uyaran bir mod tablosu verir. Sonuçları bir katsayıyla ya da yazdığınız bir taban kesme kuvvetine kadar ölçekleyebilirsiniz; blok bu taban kesme kuvvetini kendisi asla hesaplamaz. Sonuçların işareti yoktur.

{{ui:Zaman tanım alanı}}, bir yer ivmesini modal süperpozisyonla (kaydın noktalar arası düz çizgileri için tam) ya da doğrudan integrasyonla (Rayleigh sönümlemeli Newmark ortalama ivme) çalıştırır. Girdi, uydurma bir sinüs ya da darbe (her zaman sentetik olarak etiketlenir), yapıştırdığınız bir kayıt ya da açtığınız bir metin dosyasıdır (zaman ve ivme; adım ile her satırda bir ivme ya da DT= başlıklı PEER tarzı bir dosya; g ya da m/s² cinsinden). Çatı yer değiştirmesini ve taban kesme kuvvetini zamana karşı, her katın sürüklenmesini ve eleman uç kuvvetlerinin zarfını verir. Çok uzun kayıtlı modeller kaydı yalnızca oturum için tutar.

{{ui:İtme analizi}}, çatıyı küçük adımlarla yanlamasına iter (birinci moda benzer desen ya da düzgün), I şekli olan elemanların uçlarında plastik mafsallarla. Bir mafsal plastik momentte akar; bu moment eksenel kuvvet arttıkça düşer (çizilen şekilden hesaplanır, köşe kaynakları ihmal edilir); pekleşme isteğe bağlıdır, P-delta isteğe bağlıdır ve önce bir yerçekimi kombinasyonu uygulanabilir. Kapasite eğrisini (taban kesme kuvveti ile çatı yer değiştirmesine karşı), ilk mafsalı ve her mafsalın durumunu ve plastik dönmesini verir. {{ui:Doğrusal olmayan zaman tanım alanını çalıştır}}, küçük modellerde aynı mafsalları Zaman tanım alanı bloğunun kaydı altında çalıştırır. Mafsallar yalnızca eleman uçlarında oluşur (bir açıklığın içinde oluşması gereken yere bir düğüm koyun); iki ucu da serbest bırakılmış bir eleman hiç mafsal almaz; çaprazların akması ve burkulması modellenmez; döşemeler ve duvarlar elastik kalır; kabul kriterleri verilmez. Yönetmelik kontrolü değildir; sonuçları mühendisiniz gözden geçirir. Ayarlar modelle birlikte kaydedilir ve rapor tabloları içerir.

Henüz yapılmadı: burkulma, tepki spektrumu için eksik kütle düzeltmesi, kayıt ölçekleme, mafsallar için kabul kriterleri (dinamik tepki yukarıdadır), her döşemeye tek basınç dışındaki alan yükleri, eleman ofsetleri, yalnızca çekmeye çalışan çaprazlar, çerçevedeki duvarlar ve döşemeler, kaynaklı şekillerin ve haddelenmiş I profilleri dışındaki kesitlerin yönetmelik kontrolleri. Bkz. [Henüz yapılmadı](topic:not-built-yet).

## Birimler

Uzunluklar, araç çubuğunda ({{ui:Birimler}}) seçtiğiniz birimi izler; BimCraft'ın geri kalanı gibi: yazıp gördüğünüz yük konumları ({{ui:Kaynak}}, {{ui:Hedef}}, {{ui:Şurada}}), düğüm yüklerinin ve tepkilerin noktaları, {{ui:Deprem}} bölümündeki kat yükseklikleri ve sehim ile sürüklenme sütunları (ft ve in birimleri bu küçük uzunlukları ondalık in olarak gösterir). Birimi istediğiniz zaman değiştirin; sekme yeniden çizilir. Kuvvetler kN ve kN·m olarak kalır; rapor (PDF, CSV) ve CraftScript dosyası ise birimi yazılı olarak milimetre cinsinde kalır. {{ui:Beton}} bloğundaki kesit boyutları, donatı çapları ve paspaylar adlandırıldıkları gibi milimetre olarak kalır.

## Tasarım denetimleri

{{ui:Tasarım denetimleri}} bloğu (DetailCraft'ınkiyle aynı), bir {{ui:Tasarım yönetmeliği}} seçer: ASCE 7 + AISC 360 ya da EN 1990 + EN 1993-1-1, ve bir {{ui:Çelik sınıfı}}. Her yük durumuna türünü verin (ölü, hareketli, rüzgâr …) ve {{ui:Birleşimleri oluştur}}, durumlarınızın yönetmeliğin yük kombinasyonlarını yazar; analiz bunları diğer kombinasyonlar gibi çalıştırır.

{{ui:Elemanları denetle}} sonra her **haddelenmiş çelik I profilini** DetailCraft'ın denetimleriyle kontrol eder (çekme, burkulmalı basınç, yanal-burulmalı burkulmalı eğilme, kesme, eksenel kuvvetle eğilme, sehim; maddeler raporda yer alır) ve kapasitesinin ne kadarını kullandığını modelde renkli olarak gösterir. Bir **mühendis gözden geçirene kadar yardımcıdır**.

**Hangi elemanlar denetlenir.** Bir IFC profili, bir çelik I profilinin haddelenmiş mi kaynaklı mı olduğunu söylemez; bu yüzden BimCraft, profil adı (yoksa elemanın tip adı) AISC W ya da S tablolarından ya da EN 10365 IPE, HEA ya da HEB tablolarından bir boyutsa (`W12x26`, `IPE 300`, `HEA200`, `HE 200 A`) **ve** dosyadaki yükseklik, genişlik, gövde ve başlık bu boyuta %1 içinde uyuyorsa, onu yalnızca haddelenmiş sayar. Diğer her I profili (bir levha kiriş, başka bir adla bir boyut, düzenlenmiş bir boyut) kaynaklı kabul edilir ve **denetlenmedi** olarak döner; boru, köşebent, U profil ve diğer kesitler, narin parçalar ve burulma da öyledir. Bu elemanları bir mühendisle denetleyin.
