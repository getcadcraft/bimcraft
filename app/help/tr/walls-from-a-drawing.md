---
title: İzlenmiş bir çizimden duvarlar
summary: Bir DWG ya da DXF planını bir kattaki duvarlara, kapılara ve pencerelere dönüştürün ve çizimi referans olarak planın altında tutun.
keywords: dwg, dxf, iz, izlenmiş, planı içe aktar, dönüştür, cad'den bim'e, 2B'den 3B'ye, çizgilerden duvarlar, katmanlar, bloklar, bloklardan kapılar, altlık, referans çizimi, arka plan, xref, çizim uygulaması
from: 3bf213f1
---

## Ne yapacaksınız

Çizim uygulamasında siz (ya da bir başkası) çizdiğiniz bir planı modelin başlangıcı olarak kullanın: duvar çizgileri duvar olur, kapı ve pencere blokları kapı ve pencere olur.

## Adımlar

1. {{ui:Çiz}} seçeneğini açın ve planın başlığındaki kat listesinde çizimin göründüğü katı seçin.
2. {{ui:Derleme}} › {{ui:Bir çizimden…}} seçin, sonra {{ui:Bir çizim seçin…}} ve bir DWG ya da DXF seçin.
3. İletişim kutusunda:
   - **Çizim birimleri** çizimden gelir; yanlışsa başkalarını seçin (feet olarak çizilmiş bir plan inç olarak okunursa on iki kat çok küçük olur).
   - **Duvarlarla birlikte katmanlar**: duvar çizgilerinin olduğu katmanları işaretleyin. Adında "duvar" geçen katmanlar sizin için işaretlenir.
   - **Çizgiler**: **her duvarın iki yüzü** (planların genellikle çizildiği yol: 600 mm'ye kadar aralıklı her paralel çizgi çifti, aralık kadar kalın bir duvar olur), **duvarların merkez çizgileri** ya da solunda ya da sağında duvarı olan **bir yüz**. Merkez çizgileri ya da bir yüzle, duvar tipi kalınlığı belirler.
   - **Duvar tipi** ve **Duvar yüksekliği**, {{ui:Duvar}} aracındaki gibi.
   - **Bloklar**: kapı ya da pencere olan her blok için bir kapı ya da pencere tipi seçin ya da dışarıda bırakın. Adında "kapı" ya da "pencere" geçen bloklar sizin için seçilir. Her biri üzerinde durduğu duvara, duvar boyunca bloğun genişliği kadar yerleştirilir; bir kapı, salınımının çizildiği tarafa açılır.
   - **Nereye gider**: çizimin kendi koordinatlarında ya da sol alt köşesi planın başlangıç noktasında.
   - **Bu katın planının altında çizimi tut**: yaptıklarınızın altında çizimi ince çizgiler olarak görmek için işaretli bırakın.
4. Seçimlerin altındaki satır kaç duvar, kapı ve pencere yapacağını söyler. {{ui:Oluştur}} öğesine tıklayın.

## Ne görmelisiniz

- Katta duvarlar, kapılar ve pencereler; birleştikleri yerde birleşik ve kapattıkları odalarla. Hepsi tek bir adımdır, bu yüzden {{key:Mod+Z}} hepsini geri alır.
- Çizim, plan altında ince çizgiler olarak görünür. {{ui:Derleme}} › {{ui:Bir çizimden…}} katta tutulan çizimleri her birinin yanında {{ui:Kaldır}} ile listeler; birini kaldırmak duvarları bırakır.
- IFC dosyasında tutulan çizim, katta bir açıklamadır (çizgileriyle), bu yüzden diğer BIM programları da onu gösterir.

:::note
PDF ya da tarama da çalışır: bkz. [Bir plan setinden duvarlar](topic:walls-from-plans). Yaylar dışarıda bırakılır (BimCraft düz duvarlar çizer), blokların içindeki çizgiler de öyle. **Her duvarın iki yüzü** modunda eşi olmayan çizgiler iletişim kutusunda sayılır ve dışarıda bırakılır: o duvarları {{ui:Duvar}} aracıyla çizin ya da {{ui:Düzenle}} › {{ui:Kırp / uzat}} ile düzeltin (bkz. [Duvarları kırpma, uzatma ve birleştirme](topic:trim-extend-walls)).
:::

:::tip
Çizim uygulamasında bir tarama üzerinden mi izlediniz? Taramayı burada da açın ve duvarları onunla karşılaştırın: bkz. [Bir taramadan model](topic:model-from-a-scan).
:::
