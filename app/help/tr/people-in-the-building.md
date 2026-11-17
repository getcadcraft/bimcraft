---
title: Binada insanları yürütün
summary: Odalarınızdan, kapılarınızdan ve merdivenlerinizden geçen bir tahliye veya normal bir günün girişleri; bina daraldığı yerlerde kuyruklar, her odadan bir çıkışa en uzun yürüyüş ve bulgular Sorunlar olarak. Tasarım kararları için kaba bir kalabalık modeli, bir yangın güvenliği belgesi değil.
keywords: insanlar, tahliye, kaçış, çıkış, seyahat mesafesi, kuyruk, kalabalık, akış, kapı genişliği, merdivenler, girişler, darboğaz, simülasyon, kullanıcılar, yaya, ya olursa, kapalı kapı
from: 84aa8920
---

{{ui:Binadaki insanlar}} bölümü sol panelde, açık IFC modelinin odalarından, kapılarından ve merdivenlerinden insanları geçirir. Modelde hiçbir şey değiştirilmez ve hiçbir şey yüklenmez.

:::warning
Bu bir **tasarım aracıdır, yangın güvenliği belgesi değildir**. Yangını, dumanı, paniği, hareket kabiliyeti farklılıklarını veya bir yönetmeliğin sizden neyi istediğini bilmez. Sınırlar sizindir: çıkışa en uzun yürüyüş ve mevcut süre, sizin yazdığınız sayılardır; hiçbiri varsayılmaz.
:::

## Çalıştırın

1. Kapalı odaları ve kapıları olan bir model açın. Yalnızca bir tarafında oda olan kapı bir çıkıştır; iki oda arasındaki kapı onları birleştirir; bir merdiven, uçlarındaki odaları birleştirir.
2. **Tahliye** (herkes bir çıkışa yürür), **Girişler** (herkes içeri girer ve bir odaya yürür) ya da **Değişim** (odalardakiler çıkarken aynı sayıda kişi girer) seçin ve kişi başına zemin alanını girin. Koridor, merdiven, lobi veya tuvalet gibi adlandırılmış odalar kimseyi barındırmaz.
3. {{ui:Çalıştır}} öğesine tıklayın. Son kişinin çıktığı zamanı (ve yarısının ile onda dokuzunun ne zaman çıktığını) alırsınız; her kapı ve merdivendeki kuyruğu, en uzun yürüyüşü olan odayı ve çalışmayı oynatan bir planı alırsınız.

## Ya olursa

Tabloda bir kapının {{ui:Kapalı}} kutusunu işaretleyin ve yeniden çalıştırın: insanlar başka bir yol bulur ya da çıkışı olmayan odalar hata olarak listelenir. İki kat geniş bir kapı bir odayı çok daha erken boşaltır; tablo kuyrukların nerede olduğunu gösterir.

## Nasıl çalışır

Her oda bir ızgaradır, bu yüzden insanlar duvarların içinden değil köşelerin etrafında yürür. Bir oda doldukça hız düşer (S = 1.4 (1 − 0.266 D) m/s, D kişi/m² cinsinden). Bir kapı, genişliğinin her metresi için saniyede 1.3 kişi geçirir, her iki yanından 150 mm eksik; bir merdiven 1.0 ve yürüme daha yavaştır. İnsanlar ilk gelen ilk çıkar kuyruğunda bekler. Bir çalıştırma numarası, aynı çalıştırmayı birebir tekrarlar.

Asistan da aynısını çalıştırabilir: bir tahliye ya da her odadan bir çıkışa en uzun yürüyüşü isteyin.

## Her odadaki insanlar

Herhangi bir oda için bir sayı girmek üzere {{ui:Her odadaki insanlar}} öğesini açın. Boş kutu zemin alanı rakamını kullanır (gri gösterilir); 0 odayı boşaltır. Girdikleriniz çalıştırmada kullanılır ve bu tarayıcıda tutulur.

## Kapılarda karşı akış

**Değişim** modunda, çıkan insanlar ve giren insanlar aynı kapılarda buluşur. Bir kapı, son kişinin hemen arkasında başka yönde geçen birini geçirdiğinde, hızının bir kısmını korur (burada 0.8; bir varsayım, çünkü yayımlanan değerler farklıdır) ve tablo yön değişikliklerini sayar. Yön sık değişen bir kapı, Sorunlar içinde bir not olarak listelenir.

## Merdivenler ve sahanlıklar

Bir merdivenin her sahanlığı, yürüyen birine dönmek için bir saniye kaybettirir (bir varsayım). Düz bir merdivende yoktur; L veya U biçimli bir merdivende bir tane vardır. Merdivenin hızı yine de kolunun genişliğinden gelir.

## 3B görünümde

{{ui:İnsanları 3B görünümde göster}} kutusunu işaretleyin; yürüyenler modelde, yaptıklarına göre renklendirilmiş figürler olarak belirir ve çalıştırmayı oynattığınızda hareket eder. Modele hiçbir şey eklenmez.
