---
title: Binada sel, rüzgâr veya deprem oynatın
summary: Odalara yükselen su, her kata etki eden rüzgâr basıncı ya da katları sallayan bir deprem; bir plan ya da görünüş üzerinde zaman kaydırıcısıyla oynatılır. Varsayımları listelenmiş basit modeller; bir yönetmelik kontrolü ya da yapısal tasarım değildir.
keywords: tehlike, sel, rüzgâr, deprem, sismik, ötelenme, yan salınım, taban kesme kuvveti, su seviyesi, iklim, senaryo, deniz seviyesi yükselmesi, oynatma, kat, periyot
from: ff0d34d1
---

Sol paneldeki {{ui:Tehlike oynatma}} bölümü, açık IFC modeli üzerinde bir tehlikeyi oynatır. Modelde hiçbir şey değişmez.

:::warning
Bunlar **bu yerleşimin bir tehlikeye nasıl tepki vereceğini görmek için basit modellerdir**; bir sel çalışması, bir rüzgâr yönetmeliği kontrolü ya da yapısal tasarım değildir. Her sonuç varsayımlarını listeler.
:::

## Sel

Su seviyesinin en düşük kattan ne kadar yükseleceğini ve yükselme, bekleme ve alçalma sürelerini ayarlayın. Su, eşiğini geçtiği bir açıklıktan bir odaya girer; suyun altındaki açıklıklarla ıslak odalara bağlanan odalar aynı seviyede durur (yarı statik). Tablo her odanın ilk ne zaman ıslandığını ve ne kadar derin olduğunu verir; plan bunu oynatır. Bir odanın alabileceği en fazla suyu yazın; bunun üzerindeki odalar uyarı olur. **İklim gelecekleri:** kendi senaryo dosyanızı (yıl, deniz seviyesi yükselmesi ve sel katsayısı içeren JSON ya da CSV) yükleyin ve bir yıl seçin. Ya da İklim gelecekleri eklentisini açıp bir senaryo ve bir yıl seçin: sel iki kez, bugün ve gelecek yan yana çalışır (bkz. "Climate futures: 2050 and 2080 flood, heat and wildfire"). Orman yangını maruziyeti ve Isı: gelecek hava durumu dosyası türleri aynı listede bulunur.

## Rüzgâr

Basınç ½ρV² formülünü izler; hız yükseklikle artar. Bir kata etki eden kuvvet, bu basıncın bir rüzgâr darbe katsayısı, iki basınç katsayısı, genişlik ve kat yüksekliği ile çarpımıdır. Kesme kuvvetini, devrilme momentini ve yan salınımı elde edersiniz.

## Deprem

Bir kesme yapısı: kat başına bir kütle (taban alanı × kilogram/m², bunu siz ayarlarsınız), ilk periyoda uyacak şekilde her katta aynı rijitlik (boş bırakırsanız kat başına onda bir saniye alınır ve bunu belirtir), sönümleme ve seçtiğiniz tepe ivmesinde oluşturulmuş bir yer hareketi (bir darbe ya da filtrelenmiş gürültü). Sonuç her katın ötelenmesi, kat ivmeleri ve taban kesme kuvvetidir; görünüş yan salınımı, gerçeğinden büyük çizilmiş olarak oynatır. İzin verdiğiniz bir ötelenme oranı yazın; bunun üzerindeki katlar uyarı olur. Model elastiktir: hiçbir şey akmaz ya da çatlamaz.

## Analiz çerçevesinden kat rijitliği

Bir deprem ya da rüzgâr salınımı için, periyodu yazmak yerine rijitlik kaynağı olarak **Analiz çerçevesi**'ni seçin. Her kat sırayla yatay olarak itilir, çerçeve (kirişler, kolonlar, çaprazlar, döşemeler) çözülür ve tüm elemanlar birlikte çalışırken katların rijitliği çalıştırmayı yönlendirir. Ağırlık, elemanların kendi ağırlığı ile her katın planındaki kutuya girdiğiniz metrekare başına kat yüküdür. Gerçek ilk periyot gösterilir. Model elastiktir: hiçbir şey akmaz ve burulma modellenmez. Rüzgâr için kat kuvvetleri yine yukarıdaki varsayılan değerlerdir (bir güç yasası profili, sizin darbe katsayınız ve sabit basınç katsayıları, bir rüzgâr yönetmeliği değil); yalnızca salınımı çerçeve sağlar; bu kuvvetlere karşı çerçevenin tam rijitlik matrisini çözerek. Model, Analiz sekmesinin okuyabildiği bir çerçeveye sahip bir IFC gerektirir.

## Birimler

Su derinlikleri, kat kat salınım ve ötelenme, mesafeler ve alanlar, seçtiğiniz {{ui:Birimler}} içinde gösterilir. Kuvvetler (kN), süreler ve ivmeler kendi birimlerini korur; metre olarak etiketlenmiş bir kutuya yazdığınız değer metre olarak kalır. Tahliye, gün ışığı, ısıtma ve soğutma ile donatım sonuçları için de aynısı geçerlidir: uzunluklar, alanlar ve hacimler seçiminizi izler; basınç, debi, sıcaklık, enerji ve güç asla dönüştürülmez.
