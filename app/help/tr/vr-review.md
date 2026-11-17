---
title: Modeli bir VR kulaklığıyla inceleyin
summary: IFC modelinde tam boyutta VR kulaklığıyla gezinin: etrafta hareket edin, dönün, ölçün, modeli kesip açın, resimli BCF sorunları yerleştirin, modeli masa üstü model olarak görün ve canlı bir oturumdaki diğer kişilerle buluşun.
keywords: vr, sanal gerçeklik, kulaklık, webxr, xr, sürükleyici, quest, oculus, vive, index, pico, içinde gezin, gezinti, ışınlan, tasarım incelemesi, koordinasyon, inceleme, ölçüm, kesit, kes, sorun, sorunlar, bcf, masa üstü, ölçek maketi, varlık, avatar, canlı, birlikte
from: 8994b36d
---

{{ui:VR}} araç çubuğunda, modelin içine bir VR kulaklığıyla tam boyutta girmenizi sağlar. 3B görünümün kamerasının bulunduğu yerde, onun altındaki zeminde ve aynı yöne bakarak durursunuz. Kulaklık, 3B görünümde ne gösteriliyorsa onu gösterir: gizli katlar, öğeler ve modeller gizli kalır, boyanmış malzemeler de gelir. Hiçbir şey yüklenmez: tarayıcı bunu bu bilgisayarda (ya da kulaklığın kendi tarayıcısında) çizer.

## Gereksinimler

- Tarayıcının sürebildiği bir kulaklık (WebXR): bağımsız bir kulaklığın kendi tarayıcısı ya da bir PC'ye bağlı kulaklıkla Chrome veya Edge.
- Bu sitede olduğu gibi güvenli bir sayfada (https) açık bir IFC modeli.

Kulaklık yoksa {{ui:VR}} soluk görünür ve nedenini belirtir.

## Başlatma

1. 3B görünümü başlamak istediğiniz yere ayarlayın: bir odada ya da binaya dışarıdan bakacak şekilde.
2. Araç çubuğunda {{ui:VR}} öğesine tıklayın.
3. Kulaklığı takın.

Menü sol elinizin sırtındadır. Sağ kontrolcünüzle ona işaret edin ve bir düğmeyi seçmek için tetiğe çekin. (Yalnızca tek elle çalışıyorsanız menü, başlangıç yerinizin önünde süzülür.)

## Etrafta hareket etme

- **Zıplama:** {{ui:Taşı}} modunda bir zemine işaret edin ve tetiğe çekin; oraya inersiniz. Ya da hedeflemek için çubuğu öne itin, zıplamak için bırakın. Yalnızca zeminlere, döşemelere ve arsaya (yukarı bakan yüzeylere) inebilirsiniz, asla bir duvara değil.
- **Dönme:** çubuğu sola ya da sağa itin: her seferinde 30° dönersiniz.
- **Yürüme:** oyun alanınızda, sadece yürüyün.

## Ölçüm

{{ui:Ölçüm}} seçin, sonra iki noktada tetiğe çekin. İki nokta arasındaki mesafe m cinsinden görünür. Bir köşenin yakınındaki bir nokta köşeye yapışır.

## Kesip açın

{{ui:Kesit}} seçin ve bir yüzeyde tetiğe çekin:

- bir duvarda (ya da zemin olmayan herhangi bir şeyde): sizinle o yüzey arasındaki her şey kesilip atılır, böylece içeriye görebilirsiniz. Bu en iyi dışarıdan ya da bir odanın karşısından çalışır;
- bir zeminde, yukarıdan: o zeminin 1.2 m üzerinde bir plan kesiti, böylece duvarlar alt kısmını gösterir.

{{ui:Temizle}} kesiti ve ölçümleri kaldırır. Siz başlarken bir [kesit düzlemi](topic:section-plane) model kesiyorsa, kulaklık onunla başlar.

## Sorun yerleştirin

{{ui:Sorun}} seçin ve problemin olduğu yerde tetiğe çekin. Numaralı bir iğne onu işaretler ve sorun, {{ui:Sorunlar}} sekmesine bir BCF konusu olarak girer; gördüğünüz şeyin resmi ve durduğunuz yerdeki kamera ile, modelin kendi koordinatlarında. Bunları diğer [sorunlarınızla](topic:issues-bcf) birlikte bir BCF dosyası olarak kaydedin; diğer koordinasyon araçları onları aynı görünümde açar.

Bir soruna yorum eklemek için VR'dan çıktıktan sonra {{ui:Sorunlar}} sekmesinde yazın: kulaklığın içinde yazmak henüz yapılmadı.

## Masa üstü model olarak görün

{{ui:Masa üstü}} modeli önünüzdeki bir masaya sığacak kadar küçültür; etrafında yürüyün ya da çubukla çevirin. {{ui:Tam boyut}} sizi bıraktığınız yere geri koyar.

## Diğerleriyle, canlı

[Canlı oturumda](topic:work-live), VR'daki herkes diğerlerini kendi renginde bir baş ve iki el olarak, adlarıyla ve her birinin işaret ettiği yerde bir noktayla görür. Herkesin yaptığı düzenlemeler bir an içinde kulaklığınıza ulaşır. Masa başındaki kişiler kulaklıkta henüz gösterilmez.

## Çıkın

{{ui:VR'dan çık}} seçin (ya da kulaklığı çıkarıp orada bitirin). Ekrandaki 3B görünüm, başınızın olduğu yere geçer.

:::note
Bir kulaklık öykünücüsüyle test edildi; henüz her kulaklıkta test edilmedi. Büyük bir model kulaklığı takılabilir: önce ihtiyacınız olmayan katları ya da modelleri gizleyin ([gizle ve izole et](topic:hide-and-isolate)).
:::
