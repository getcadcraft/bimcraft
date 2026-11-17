---
title: Kapılar ve pencereler
summary: Çizdiğiniz duvarlara kapı ve pencere yerleştirin: bir duvarı gösterin, açılma yönünü ve köşelere olan mesafeleri görün, tıklayın; duvardaki açıklık kendini keser.
keywords: kapı, kapılar, pencere, pencereler, açıklık, açılma, menteşe, menteşe yönü, çevir, sürgülü kapı, cep kapı, garaj kapısı, çift kapı, kanatlı pencere, tek asma, çift asma, sürgü, sabit pencere, pervaz, üst kiriş, katlanır, dolap kapısı, Fransız kapısı, ahır kapısı, yan camlar, giriş kapısı, tente, manzara penceresi, üst pencere
from: 4d8ac009
---

## Ne yapacaksınız

Çizdiğiniz duvarlara ([Duvar çizin](topic:draw-walls)) kapı ve pencere yerleştirin. Bir duvarı gösterin: kapı ya da pencere nereye gideceğini, hangi yöne açılacağını ve her köşeye ne kadar uzak olduğunu gösterir. Tıklayın; açıklık, planda ve 3B'de duvarın içinden kendini keser.

## Kapı yerleştirin

1. {{ui:Draw}} açıkken {{ui:Door}} düğmesine tıklayın (ya da {{key:D}} tuşuna basın).
2. Türü seçin: **Tek kanat açılır kapı**, **Çift kanat açılır kapı**, **Sürgülü kapı**, **Cep kapı**, **Garaj kapısı**, **Katlanır dolap kapısı**, **Fransız kapıları**, **Ahır kapısı (duvarın üzerinde)** ya da **Yan camlı giriş kapısı**. Olağan boyutu **W** ve **H** alanlarını doldurur; yanındaki boyut listesinden başka bir boyut seçin ya da başkalarını yazın, örneğin `2'-8"` ya da `800`. Liste, bu modelin kapı ailelerini de sunar (bkz. [Aileler ve boyutları](topic:families)).
3. Bir duvarı gösterin. Kapının simgesi işaretçiyi duvar boyunca izler ve planda, duvar yüzünün her ucundan olan mesafe görünür.
4. Kapı, işaretçinin olduğu duvar tarafına açılır. Menteşeleri diğer uca almak için {{key:H}} tuşuna basın (ya da {{ui:Flip}} düğmesine tıklayın).
5. Tıklayın. Kapı yerleştirilir ve araç bir sonraki için açık kalır. Bir duvarın ortasını gösterirseniz kapı kendini ortalar.

Tam bir mesafede yerleştirmek için, ölçtüğünüz köşeye yakın duvarı gösterin, mesafeyi yazın (örneğin `2'` ya da `600`) ve {{key:Enter}} tuşuna basın. Mesafe, duvar yüzünün yakın ucundan kapının kenarına kadar ölçülür.

## Pencere yerleştirin

1. {{ui:Window}} düğmesine tıklayın (ya da {{key:N}} tuşuna basın).
2. Türü seçin: **Sabit pencere**, **Tek asma pencere**, **Çift asma pencere**, **Kanatlı pencere**, **Sürgülü pencere**, **Tente**, **Manzara penceresi** ya da **Üst pencere**; ve **W**, **H** ile **Alt pervaz** (pencerenin alt kısmının zeminden yüksekliği).
3. Bir duvarı gösterin ve tıklayın ya da bir mesafe yazıp kapılardaki gibi {{key:Enter}} tuşuna basın. Pencere duvarın dış tarafına oturur.

## Taşıyın, çevirin, silin

- {{ui:Select}} açıkken bir kapıyı ya da pencereyi duvarı boyunca sürükleyin. Başka bir duvara sürükleyerek oraya taşıyın.
- {{key:Delete}} seçili kapıları ve pencereleri siler; duvar kapanır.
- Bir duvarı taşımak ya da silmek, içindekini de taşır ya da siler. Bir duvarın başlangıcı kendi çizgisi boyunca kaydığında, kapıları ve pencereleri yerlerini korur.
- {{ui:Undo}} ve {{ui:Redo}} her yerleştirmeyi, taşımayı ya da silmeyi geri ve ileri alır.

## Neler reddedilir

- **Duvara sığmaz.** Kapı ya da pencere duvardan geniştir ya da bir ucundan dışarı çıkardı. Daha kısa bir genişlik ya da daha uzun bir duvar deneyin.
- **Duvardan yüksektir.** Pervaz artı yükseklik, duvarın üstünün üzerindedir.

## Ne kaydedilir

Her kapı ya da pencere, boyutu, işletimi (örneğin sola tek kanat açılır), boyutunun tipi (ailesinin her boyutu için bir tip), `Pset_DoorCommon` ya da `Pset_WindowCommon` ve temel miktarlarıyla birlikte, duvarındaki bir IFC açıklığını dolduran bir IFC kapısı ya da penceresidir. Duvarın net yan yüzey alanı ve hacmi açıklığı dışarıda bırakır. Diğer BIM programları bunu bir duvardaki kapı olarak açar.

## Bilmeniz gerekenler

- Planda kapılar, açılma yönleriyle 90° açık görünür; sürgülü kapılar iki panel olarak, cep kapılar duvara kayarak, garaj kapıları tepede kesikli bir çizgi olarak; pencereler ise çerçeve ve cam çizgileriyle gösterilir.
- Genişlik, çerçevenin genel genişliğidir; kapı kanadı, genişlikten iki kasa çıkarılarak bulunur.
- Çizilmiş kapı ve pencerelerin kopyalanması henüz yapılmadı: bir tane daha yerleştirin.

## Bodrum kaçış penceresi ve kuyusu

Pencere türü listesinden **Bodrum kaçış penceresi ve kuyusu** seçin. Seviyeden 36 inç yüksekte bir pervazla, 36 × 48 inç boyutunda kanatlı bir pencere olarak başlar. Kuyu duvarın dış tarafındadır; en az 48 inç net genişlik, 36 inç çıkıntı ve alt kısmı pervazın 6 inç altında olur. Planda kesikli çizgiler, 3B'de üstü açık üç yan olarak görünür. Kuyu, pencerenin IFC gövdesinin bir parçasıdır; bu yüzden pencereyi kaydetmek, taşımak, boyutunu değiştirmek ya da silmek onu da yanında götürür. Boyut değiştirildiğinde her kasanın yanında en az 6 inç kalır.

Bunlar modelleme varsayılanlarıdır, kaçış uygunluğunun sertifikası değildir. Üreticinin gerçek net açıklığını, yerel gereksinimleri, zemini, drenajı ve gerekli merdiveni ayrıca kontrol edin. Kuyu derinliği ve yüksekliği önceden ayarlanmış ölçülerdir; arazi eğimini izlemezler.
