---
title: Şartnameyi modelden yazın
summary: Kullanımdaki her duvar, kapı, pencere, döşeme ve kaplama tipi için bir şartname bölümü; gerçekleri modelden okunmuş ve kendi yazdığınız metinle birlikte, PDF veya Word belgesi olarak hazırlanmış.
keywords: şartname, spec, uygulama çizimleri, aşama 5, uygulama belgeleri, bölüm, duvar tipi, kapı tipi, pencere tipi, kaplama, sınıflandırma, uniclass, omniclass, masterformat, belge, pdf, word, docx, listeler
from: a6acc6d4
---

## Ne yapacaksınız

Şartnameyi modeli izleyecek şekilde alın: binada gerçekten bulunan her tip için bir bölüm; her birinde yapı katmanları ve miktarlar modelden okunur, metni ise siz yazarsınız.

## Adımlar

1. {{ui:Çiz}} seçeneğini açın, sol paneldeki **Listeler**'i açın ve **Şartname**'ye tıklayın.
2. İletişim kutusunda, kullanımdaki her duvar tipi, kapı tipi, pencere tipi, döşeme ve oda kaplaması için bir bölüm listelenir. Her başlığın altında modelden okunan **gerçekler** yer alır: kalınlık, katmanlar tek tek, geliştirme seviyesi, boyutlar, adet ve miktar. Öğeleri bir sınıflandırma koduna sahip olan bir bölümün başlığında bu kod görünür.
3. Bir bölümün altındaki kutuya şartname metninizi yazın. **Öğelerini seç** bölümün neyle ilgili olduğunu gösterir.
4. **Kaydet**'e tıklayın. Bu, {{ui:Geri al}} içinde tek bir adımdır ve metin bina dosyasında tutulur.
5. **Modelden belgeler**'i açın, **Şartname** şablonunu seçin ve **Önizle**'ye tıklayın, ardından PDF, Word veya Markdown olarak kaydedin. Bkz. [Modelden belgeler](topic:documents-from-the-model).

## Uygulama çizimi listeleri bir belge olarak

**Uygulama çizimi listeleri** şablonu, kapı, pencere ve kaplama listelerini modelden doğrudan, kendi ofis düzeninizde yazdırır. Kendi şablonunuza `{{schedule doors}}`, `{{schedule windows}}`, `{{schedule roomfinishes}}`, `{{schedule finishtotals}}` veya kayıtlı bir ayarın adını yazın; örneğin `{{schedule Door schedule by floor}}`. `{{specification}}` ise şartnameyi yazdırır.

## Bilmeniz gerekenler

- Gerçekler modelin gerçekleridir. Model değiştiğinde onlar da değişir; sizin metniniz değişmez.
- BimCraft, herhangi bir standardın maddesini ya da bir üreticinin metnini yazmaz. Metni olmayan bir bölüm "Henüz şartname metni yazılmadı." yazısını basar.
- Modelde artık bulunmayan bir tip için yazılan metin saklanır ve "Modelde artık bulunmayan tipler için metin" başlığı altında listelenir.
- Genel bir tipi belirli bir yapı için değiştirmek üzere bkz. [Duvar araçları](topic:wall-tools) (Tipi değiştir).
