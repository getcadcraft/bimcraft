---
title: Caurules un gaisa vadi pret konstrukciju
summary: Palaidiet gatavās sadursmju kopas, kurās caurules un gaisa vadi tiek salīdzināti ar sienām, plātnēm, sijām un kolonnām, atrodiet posmus, kas atrodas pārāk tuvu konstrukcijai salīdzinājumā ar to izolāciju un atstarpi, un uzskaitiet atveres, kas posmiem nepieciešamas caur sienām un plātnēm, kā CSV un BCF.
keywords: mep, sadursme, sadursmju pārbaude, koordinācija, konstrukcija, sienas, plātnes, sijas, kolonnas, attālums, mīkstā sadursme, izolācija, atstarpe, atvere, caurejas, čaula, kodols, būvdarbi, bcf, csv
from: 2d597f01
---

## Ko darīsiet

Pārliecinieties, ka inženiertīkli atbilst ēkai: kas ieiet konstrukcijā, kas atrodas pārāk tuvu tai un kur sienās un plātnēs nepieciešami caurumi. Atveriet kreisajā panelī {{ui:Sadursmju pārbaude}}; sadaļa **Caurules un gaisa vadi pret konstrukciju** atrodas zem parastās pārbaudes.

## Stingras sadursmes

Abos kopu sarakstos tagad ir arī **Caurules un gaisa vadi**, **Sienas**, **Plātnes un jumti**, **Sijas**, **Kolonnas** un **Konstrukcija** (visas četras), ar katrā esošo elementu skaitu. Noklikšķiniet uz {{ui:Caurules un gaisa vadi × konstrukcija}}, lai izvēlētos pirmo un pēdējo un palaistu pārbaudi; vai izvēlieties jebkuru pāri pats un noklikšķiniet uz {{ui:Palaist}}. Skatiet [Sadursmju pārbaude](topic:clash-check).

## Attālumi

Dažiem inženiertīkliem ap tiem vajadzīga vieta: to izolācijai un vietai darbam vai hilzai.

1. Piešķiriet caurules vai gaisa vada posmam **Izolācijas** biezumu īpašībās (zīmējumā tas nekā nerāda).
2. Sadursmju pārbaudē ierakstiet **Atstarpi ap caurulēm un gaisa vadiem** (mm).
3. Noklikšķiniet uz {{ui:Pārbaudīt attālumus}}: katra daļa, kas atrodas tuvāk sienai, plātnei, sijai vai kolonnai nekā tās izolācija plus atstarpe, tiek uzskaitīta ar esošo un vajadzīgo attālumu. Noklikšķiniet uz rindiņas, lai redzētu abus.

Daļa, kas šķērso sienu vai plātni, ir atvere, nevis attālums, un tā tiek uzskaitīta tur.

## Nepieciešamās atveres

Noklikšķiniet uz {{ui:Nepieciešamās atveres}}. Kur posma centra līnija šķērso sienu vai plātni, BimCraft uzskaita atveri, kas tam nepieciešama: apaļa, ja caurule vai gaisa vads ir apaļš, citādi taisnstūrveida, tik liela kā posma ārējais izmērs plus divkāršā izolācija plus divkāršā atstarpe, centrēta vietā, kur posms šķērso. Noklikšķiniet uz rindiņas, lai redzētu posmu un sienu vai plātni.

- {{ui:Atveres kā CSV}}: viena rindiņa katrai atverei ar posmu, tā izmēru un izolāciju, atveres izmēru, elementu, caur kuru tas iet, un tā GlobalId, līmeni, centra X, Y un Z koordinātām un to, cik tālu posms iet cauri.
- {{ui:Atveres kā BCF problēmas}}: viena problēma katrai atverei ar kameru, kas uz to vērsta, un izvēlēto posmu un elementu konstrukciju inženiera programmai.

:::note
Nekas netiek izgriezts: atveres ir saraksts cilvēkiem, kas tās izmēro. Atstarpi ierakstāt jūs; neviens kods nenosaka, cik lielai atverei jābūt. Sijas un kolonnas ir sadursmes, nevis atveres: vai caurule drīkst iet caur vienu no tām, lemj konstrukciju inženieris.
:::
