---
title: "Sınıflandırma kodları (Uniclass, OmniClass, UniFormat)"
summary: "Her öğeye ve tipe bir sınıflandırma kodu verin, projenin hangi sistemleri kullandığını seçin, uygulamayla gelen Uniclass tablolarında arama yapın, ofisinizin kendi lisanslı tablolarını yükleyin ve kodları listelerde gösterin. Kodlar, diğer yazılımlar için IFC dosyasına yazılır."
keywords: sınıflandırma, sınıflandır, kod, uniclass, omniclass, uniformat, nbs, csi, ef, ss, pr, tablo, öğe kodu, tip kodu, varsayılan kod, IfcClassification, IfcClassificationReference, cobie, liste sütunu, csv, lisans, license
from: 222b94cd
---

## Ne yapacaksınız

Modeldeki duvarlara, döşemelere, çatılara, kapılara, pencerelere ve diğer her şeye bir sınıflandırma kodu koyun; en fazla üç sistemle yan yana: Uniclass, OmniClass ve UniFormat. Diğer disiplinler ve diğer yazılımlar isme değil koda dayanır, bu yüzden kodlar IFC dosyasına, herhangi bir BIM programının okuduğu sınıflandırma referansları olarak kaydedilir.

## Bir öğeye kod verin

1. Bir öğe (ya da birkaç öğe) seçin ve **Özellikler**'i açın. {{ui:Sınıflandırma}} bölümünü açın.
2. Kodu o sistemin kutusuna yazın ve Enter'a basın. Bir kod listesi yüklüyse, kodun bir kısmını ya da birkaç kelime ("perde duvar") yazın ve eşleşmelerden seçin: kodun başlığı sizin için doldurulur.
3. {{ui:Uygulandığı yer}} kodun nereye gideceğini söyler: **Bu öğe** ya da **Tipi (tipteki her öğe)**. Bir duvar tipindeki bir kod, o tipteki her duvar tarafından okunur; daha sonra çizeceğiniz duvarlar da dahil.
4. {{ui:Temizle}} bir kodu kaldırır.

Her kodun altındaki bölüm, nereden geldiğini söyler: bu öğeye verilmiş, tipinden ya da sınıfı için proje varsayılanı. Bir öğenin kendi kodu her zaman tipinin kodunun, tipin kodu da varsayılanın önüne geçer. Birkaç öğe seçiliyken, "değişken" yazan bir kutu, ortak bir kodu paylaşmadıkları anlamına gelir; bir kod yazmak, hepsine verir. Her değişiklik tek bir geri alma adımıdır.

Bir kod, liste yüklü olsun ya da olmasın, her zaman yazılabilir. Bu sistemin bir kodu gibi görünmüyorsa ya da yüklü listede yoksa, bir ipucu bunu söyler ve kod yazdığınız gibi tutulur.

## Projenin sistemlerini seçin

Model çubuğunda **Veri**'yi açın ve {{ui:Sınıflandırma}} (ya da Özellikler bölümündeki {{ui:Proje sınıflandırması…}}) seçeneğini seçin.

- Bu projenin kullandığı sistemleri işaretleyin. Özellikler yalnızca bunları gösterir.
- **Uniclass**: Öğeler/işlevler (EF), Sistemler (Ss) ve Ürünler (Pr) tabloları uygulamayla gelir. Bunlar NBS'in telifidir, Creative Commons Attribution-NoDerivatives 4.0 altında lisanslıdır ve değiştirilmeden aktarılır. İletişim kutusu her tablonun sürümünü ve okunduğu günü gösterir. Bunlar en yeni tablolar değildir: yayıncı yeni tabloları her çeyrekte kendi sitesinde yayımlar.
- **OmniClass** ve **UniFormat**: uygulamayla birlikte bir kod listesi gelmez, çünkü yayıncıları tabloların lisans olmadan aktarılmasına izin vermez. Herhangi bir kod yazın ya da ofisinizin kendi lisanslı tablosunu yükleyin.
- {{ui:Bir tablo yükle (CSV)…}}, ofisinizin kendi tablosunu bir kod sütunu ve bir başlık sütunu olan bir CSV dosyasından okur (Code, Number ya da Identifier ve Title, Name ya da Description adlı bir başlık satırı kendiliğinden bulunur; yoksa ilk iki sütun kullanılır). Tablo bu tarayıcıda kalır ve asla proje dosyasına konmaz. Dosyada yalnızca atadığınız kodlar kaydedilir. Daha yeni bir Uniclass tablosunu da aynı şekilde yükleyebilirsiniz.
- {{ui:Öğelere sınıfına göre varsayılan kod verin}}, kendi kodu olmayan her duvara, döşemeye, çatıya, kapıya, pencereye, merdivene, rampaya, kolona, kirişe ve mobilyaya, Öğeler/işlevler tablosundan bir başlangıç Uniclass kodu verir. Bundan sonra çizdiğiniz öğeler de bunu alır.
- {{ui:Kodları listelerde sütun olarak göster}}, Kapılar, Pencereler, Tipe göre duvarlar ve Odalar listelerine ve bunların CSV'lerine sistem başına bir sütun ekler. Birkaç öğeden oluşan bir satır, kodları farklıysa "değişken" gösterir.

## Bilmeniz iyi olacak noktalar

- Varsayılan kodlar CadCraft'ın kendi başlangıç seçimidir, yayıncının değil; bir uygulayıcı tarafından denetlenmemiştir. Projenizin standardına göre denetleyin.
- Dosyada bir varsayılan, "CadCraft default" ilişki adıyla işaretlenmiş gerçek bir sınıflandırmadır ve öğe ya da tipi kendi kodunu aldığı anda kalkar.
- İçe aktarılan bir dosyada zaten bulunan kodlar okunur ve gösterilir; diğer programın sistemin adını nasıl yazdığı fark etmez. Başka herhangi bir sisteme ait kodlar (bir ofisin kendi kodları) listelenir ve olduğu gibi bırakılır.
- Kodlar, dosya yeniden açıldığında, burada ya da başka bir programda, geri okunur. Ayrıca IFC5 alfa (IFCX) dışa aktarımı, o laboratuvar seçeneği açıkken, bunları taşır; yalnızca bir çatıya verilmiş kod hariç.
- Henüz yapılmadı: bir tabloda seviye seviye gezinmek için bir ağaç, seviyelerde ve odalarda proje varsayılanı olarak kodlar ve bir kodu, dosyada adı geçen sürüme göre denetleme.
