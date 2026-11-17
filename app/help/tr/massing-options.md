---
title: Kütle seçenekleri yan yana tutulur
summary: Aynı modelde birkaç kütle seçeneği tutun, birini geçerli seçenek yapın, sitenin bina hatları ve irtifaklarına karşı denetleyin, ModelCraft'tan kütle alın ve seçilen seçeneği duvarlara ve döşemelere geliştirin.
keywords: kütle, seçenek, seçenekler, seçenek kümesi, şema, konsept, konsept tasarım, aşama 2, alternatifler, seçenekleri karşılaştır, geçerli seçenek, bina kütlesi, it çek, modelcraft, civilcraft, brüt kat alanı, izdüşüm, hacim, kütleyi geliştir, irtifak, bina hattı, geri çekilme
from: 69a01459
---

## Ne yapacaksınız

Bir konseptin kütle seçeneklerini ayrı dosyalar yerine tek bir modelde tutun: birkaç bina kütlesi yan yana, birisi **geçerli seçenek**, diğerleri karşılaştırma için tutulur.

Bir kütle seçeneği bir bina kütlesidir: belirli bir yüksekliğe çıkarılmış bir ana hat, belirli sayıda katla. Henüz duvar değildir. İstediğiniz kadar tutabilirsiniz; **seçenek kümeleri** halinde gruplanabilirler (bir kümenin seçenekleri birbirlerine alternatiftir).

## Bir seçenek tutun

1. {{ui:Oda programından kütleye}} bölümünü açın, oda programını ve ana hattı yazın ve {{ui:Seçenekleri bul}} seçin.
2. Listelenenlerden birini seçin.
3. {{ui:Modeldeki kütle seçenekleri}} altında, isterseniz {{ui:Seçenek kümesi}} için bir ad yazın ve {{ui:Seçili seçeneği tut}} seçin.

Seçenek, modelde bir bina kütlesi olarak ve listede katları, izdüşümü, brüt kat alanı ve hacmiyle görünür. Hiçbir şey inşa edilmez. Bir başkasını da aynı şekilde tutun.

Bir kümenin ilk seçeneği, o kümenin geçerli seçeneğidir. Her adım bir geri alma adımıdır.

## Geçerli seçenek

Her kümenin bir seçeneği geçerlidir. Bunun iki anlamı vardır:

- **Katları binanın kat alanları sayılır.** Geçerli seçeneğin her kat için, o katın brüt alanını taşıyan bir mekânı vardır; böylece kat alanlarını okuyan her şey yalnızca yürürlükteki seçeneği görür.
- **Site ile denetlenir.** Arsa sınırının dışında kalırsa, bir bina hattının üzerinde ya da bir irtifakın üzerinde kalırsa, adını anan bir uyarı {{ui:Sorunlar}} içinde görünür. Yalnızca bir uyarıdır: hiçbir şey reddedilmez. Geçerli olmayan seçenekler denetlenmez.

Başka bir seçeneğin geçerli olması için onda {{ui:Geçerli yap}} seçin.

{{ui:Geçerli olmayan seçenekleri gizle}} diğerlerini 3B görünümde gizler. Bu yalnızca bu tarayıcı içindir ve dosyaya kaydedilmez.

## ModelCraft'tan kütle

ModelCraft'ta {{ui:Dışa aktar}} › {{ui:Kütleyi BimCraft'a…}} her grubu veya bileşeni bir seçenek olarak gönderir. BimCraft dosyayı, seçenekler listelenmiş olarak açar.

Zaten açık bir modele getirmek için {{ui:Bir dosyadan kütle seçenekleri ekle}} seçin ve `.ifc` dosyasını seçin. Kütleler, bir kümenin seçenekleri olarak, tek bir geri alma adımında ve modellendikleri yerde gelir. CivilCraft'tan bir bina kütleleri dosyası da aynı şekilde çalışır.

"(şekil sadeleştirildi)" işaretli bir seçenek, ModelCraft'ta düz ve dik bir blok değildi (geri çekilir, eğilir ya da kapalı değildir). Buradaki kütlesi, tabanının ana hattının yüksekliğine çıkarılmış hâlidir; kat alanları ve hacmi ise katının kendisinden ölçülenlerdir.

## Seçilen seçeneği geliştirin

Bir seçenekte {{ui:Geliştir}} seçin. Seçenek; katlara (kat sayısına göre eklenmiş seviyeler), her katta ana hattı çevreleyen duvarlara ve her katta bir döşeme plağına dönüşür; tek bir geri alma adımında. Seçenek listeden çıkar; diğer seçenekler olduğu gibi kalır. Henüz bir çatı yoktur.

{{ui:Yeniden adlandır}} bir seçeneğin adını değiştirir, {{ui:Kaldır}} onu modelden çıkarır. Geçerli seçeneği kaldırmak, kümenin diğer ilk seçeneğini geçerli yapar.

## Ne görmelisiniz

- Tutulan her seçenek 3B görünümde bir blok, listede bir satır olarak.
- Her kümenin bir seçeneğinin yanında "(geçerli)".
- Geçerli seçenek arsa sınırını, bir bina hattını ya da bir irtifakı geçtiğinde {{ui:Sorunlar}} içinde bir uyarı.

## Bilmeniz iyi olanlar

- IFC dosyasında bir seçenek, `CadCraft_SiteMass` özellik kümesine sahip bir bina elemanı vekilidir (seçenek kümesi, seçenek adı ve geçerli olup olmadığı o kümededir). Geçerli seçeneğin katları `MassingFloor` türünde mekânlardır. Diğer programlar vekili genel bir öğe olarak okur.
- Bir seçeneği tutmak asla seviye eklemez; geliştirmek ekler.
- Bir asistan tutulan seçenekleri listeleyebilir, birini tutabilir, geçerli yapabilir, adını değiştirebilir, geliştirebilir ya da kaldırabilir.
