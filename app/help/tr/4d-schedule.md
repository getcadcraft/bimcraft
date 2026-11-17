---
title: Modelde bir inşaat takvimini oynatın
summary: Bir görev listesini CSV olarak açın, her görevi bir özelliğe göre öğelere bağlayın ve tarihler arasında ilerleyerek neyin yapıldığını, neyin sürdüğünü ve neyin henüz başlamadığını görün.
keywords: 4b, 4d, takvim, inşaat sırası, zaman çizelgesi, aşamalandırma, program, gantt, görevler, tarihler, simülasyon, ilerleme, yapıldı, csv, aşama, faz, iş paketi, wbs, grup
from: 1b985a64
---

## Ne yapacaksınız

Binanın yükselişini izleyin: takvimdeki her görev, inşa ettiği öğelerle bağlantılı olarak gün gün gösterilir.

## Adımlar

1. Bir IFC modeli açın ve sol panelde {{ui:4B takvimi}} öğesini açın.
2. Hafta başına bir kat için bir görev listesi almak üzere {{ui:Şablon indir}} öğesine tıklayın ve bunu bir elektronik tabloda değiştirin. Ya da kendiniz yazın.
3. {{ui:İş listesi aç…}} öğesine tıklayın ve CSV dosyasını seçin.
4. Tarih kaydırıcısını sürükleyin ya da {{ui:Oynat}} öğesine tıklayın.

## Görev listesi

Başlık satırı ve **Task**, **Start**, **Finish**, **Field** ve **Value** sütunlarından oluşan bir CSV. Virgül ya da noktalı virgül, ikisi de kullanılabilir.

| Task | Start | Finish | Field | Value |
|---|---|---|---|---|
| Kat 1 | 2026-11-02 | 2026-11-13 | Storey | Level 1 |
| Çatı | 2026-11-16 | 2026-11-20 | Class | IfcRoof |
| Çatı | 2026-11-16 | 2026-11-20 | Pset_WallCommon.IsExternal | Yes |

- Tarihleri YYYY-MM-DD biçiminde yazın.
- Bir satır, görevi, **Field** değeri tam olarak **Value** ile eşleşen her öğeye bağlar. Alan; Storey, Class, Name, Type, Material, Tag ya da GlobalId gibi bir özellik olabilir ya da küme ve adıyla yazılmış herhangi bir özellik olabilir: `Pset_WallCommon.FireRating`.
- Bir görevi aynı tarihlerle birden çok satırda tekrarlayın; böylece ona daha fazla öğe bağlanır.

## Aşamalar ve iş paketleri

Görevleri aşamalar ve iş paketleri altında toplamak için bir **Stage** sütunu, bir **Package** sütunu ya da ikisini birden ekleyin. **Phase** ve **WBS** da sütun adı olarak kullanılabilir.

| Task | Start | Finish | Field | Value | Stage | Package |
|---|---|---|---|---|---|---|
| Kat 1 döşemesi | 2026-11-02 | 2026-11-04 | Class | IfcSlab | Taşıyıcı sistem | Karkas |
| Kat 1 duvarları | 2026-11-05 | 2026-11-13 | Storey | Level 1 | Taşıyıcı sistem | Karkas |
| Kapılar | 2026-11-30 | 2026-12-04 | Class | IfcDoor | İç donanım | Doğrama |

- Bir görev tek bir aşamaya ve tek bir pakete aittir. Aynı görevin sonraki bir satırı başka bir tane belirtirse, o satır satır numarasıyla listelenir ve dışarıda bırakılır.
- İki aşamada aynı paket adı varsa bunlar iki ayrı pakettir.

Listede gruplar varsa tarihin üstünde bir {{ui:Göster}} listesi görünür. Bir aşama ya da paket seçin; bu, tek bir bütün gibi oynatılır:

- kaydırıcı ve {{ui:Oynat}} grubun ilk başlangıcından son bitişine kadar çalışır,
- yalnızca grubun görevleri listelenir ve boyanır; grup dışındaki her şey geçirgen olur,
- listenin altındaki satır, o tarihte görevlerinden kaçının tamamlandığını, sürdüğünü ve bekleyen olduğunu gösterir,
- {{ui:Öğelerini seç}} grubun her öğesini seçer; böylece {{ui:Göster}}, {{ui:Kesit}} ya da bir liste için kullanılabilir.

Tüm takvimi yeniden görmek için **Tüm görevler** seçin.

## Ne görmelisiniz

- **Yapıldı**: tüm görevleri bitmiş öğeler, kendi renkleriyle.
- **Sürüyor**: o gün devam eden bir görevi olan öğeler, okra renginde. Bir görev, başlangıç tarihinden bitiş tarihine kadar sürer.
- **Henüz başlamadı**: geçirgen.
- Hiçbir göreve bağlı olmayan öğeler olduğu gibi kalır. Liste, her görevin kaç öğe bulduğunu gösterir. Okunamayan ya da hiçbir şey bulamayan satırlar satır numaralarıyla listelenir.

## Bağlantılar, Gantt şeması ve MS Project

- Bir Microsoft Project XML dosyasını (`.xml`) ya da `Predecessors` sütunu olan bir CSV dosyasını açın. Bağlantılar bitişten başlangıca, başlangıçtan başlangıca, bitişten bitişe ya da başlangıçtan bitişe olabilir; her biri gün cinsinden öne alma ya da gecikme ile birlikte gelir.
- Görev listesinin altındaki Gantt şeması her görevi bir çubukla, bağlantılar için oklarla çizer. Kritik yoldaki görevler kırmızıdır. Bir bağlantı döngüsü ya da var olmayan bir öncül panelde listelenir.
- {{ui:MS Project XML olarak kaydet}} ve {{ui:Bağlantılarla CSV kaydet}} takvimi bağlantılarıyla birlikte geri yazar.

## Sonraki adımlar

- [Öğeleri sınıfa, ada ya da özelliğe göre bulun](topic:find)
- [Öğeleri bir özelliğe göre renklendirin](topic:color-by-property)
