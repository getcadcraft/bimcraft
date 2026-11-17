---
title: "Bibliotēkas vienumu kopēšana, ielīmēšana un dublēšana"
summary: "Kopējiet novietotu bibliotēkas vienumu un ielīmējiet to tur, kur noklikšķināt, vietā blakus oriģinālam vai citā modelī; kopējiet jebkura cita elementa īpašības kā tekstu; atsaukt un atkārtot."
keywords: "kopēt, ielīmēt, dublēt, starpliktuve, ielīmēt vietā, izgriezt, dzēst, atlasīt visu, atsaukt, atkārtot, rediģēšanas izvēlne, vairāk, bibliotēkas vienums, novietojums, atkārtot, masīvs"
from: 6ac15931
---

## Ko jūs darīsiet

Ievietojiet vēl kopijas vienumam, ko jau novietojāt: otru darba galdu, izlietņu rindu. Šī tēma attiecas uz **novietotiem bibliotēkas vienumiem**, elementiem, ko BimCraft ierakstīja modelī: vienu no tiem var ielīmēt jebkurā modelī, pat citā cilnē. Sienas, durvis un visus pārējos elementus kopē, izgriež, ielīmē un dzēš tāpat savā modelī: skatiet [Dzēst, izgriezt, kopēt un ielīmēt ēkas elementus](topic:edit-elements).

Komandas ir rīkjoslā virs modeļa: {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}} un {{ui:More}}, izvēlne ar {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} un {{ui:Select none}}. Komanda, ko pašlaik nevar izpildīt, ir pelēka; norādiet uz tās, lai izlasītu, kāpēc, vai noklikšķiniet uz tās, un statusa rindā būs paskaidrots iemesls.

## Soļi

1. Atveriet IFC modeli ar bibliotēkas vienumu vai vispirms novietojiet vienu. Skatiet [Novietot aprīkojumu un mēbeles no bibliotēkas](topic:place-from-library).
2. Noklikšķiniet uz vienuma 3D skatā. Tā īpašībās parādās lodziņš **Bibliotēkas vienums**.
3. Noklikšķiniet uz {{ui:Copy}} vai nospiediet {{key:Mod+C}}.
4. Noklikšķiniet uz {{ui:Paste}} vai nospiediet {{key:Mod+V}}. Novietošanas josla atveras, un caurspīdīga kaste seko rādītājam, pagriezta kā oriģināls.
5. Nospiediet {{key:R}}, lai pagrieztu to par 90°, {{key:Tab}}, lai piespiestu tā aizmuguri pie sienas, vai ierakstiet X un Y novietošanas joslā.
6. Noklikšķiniet, kur jāatrodas kopijai. Katrs klikšķis novieto vēl vienu kopiju; nospiediet {{key:Esc}}, lai apturētu.
7. Noklikšķiniet uz {{ui:Save as IFC}}, lai lejupielādētu rediģēto modeļa kopiju.

## Ielīmēt vietā

{{ui:More}}, {{ui:Paste in place}} vai {{key:Mod+Shift+V}} ielīmē bez klikšķināšanas, tajā pašā X un Y koordinātā un pagriezti tāpat:

- **Tajā pašā modelī, tajā pašā stāvā**: divi vienumi tieši vienā vietā nebūtu noderīgi, tāpēc kopija tiek novietota tieši blakus oriģinālam: viena vienuma platums plus 100 mm pa paša vienuma platumu. Ielīmējiet vietā atkārtoti no jaunās kopijas, lai izveidotu rindu.
- **Uz citu stāvu vai citā modelī**: tieši tā pati X, Y un pagrieziens. BimCraft izmanto stāvu ar tādu pašu nosaukumu; ja tāda nav, tiek izmantots tas, kas atrodas tuvākajā augstumā. Statusa rindā ir norādīts, kurš.

## Dublēt

{{ui:More}}, {{ui:Duplicate}} vai {{key:Mod+D}} kopē izvēlēto vienumu un uzreiz sāk to ielīmēt: viens solis, nevis divi.

## Citā modelī vai citā cilnē

Tas, ko kopējat, tiek saglabāts šajā pārlūkprogrammā, tāpēc varat atvērt citu IFC modeli vai BimCraft citā cilnē un ielīmēt tur. Otram modelim vajadzīgs pats bibliotēkas vienums: BimCraft to tam ir, ja vienums tika novietots, aizstāts vai atjaunināts šajā cilnē. Vienumu, kas novietots iepriekšējā sesijā, var ielīmēt atkārtoti tikai savā modelī; citā modelī novietojiet to no cilnes {{ui:Library}}.

## Ko jūs redzēsiet

- Kopija modelī, atlasīta, ar tādu pašu bibliotēkas vienumu, licenci, aprīkojuma datiem, daudzumu un piezīmi kā oriģinālam, un **nākamo brīvo vienuma numuru**. Numuru mainiet Īpašībās, zem `CadCraft_Placement`.
- "Novietots: *vienums* (vienums *n*)" izmaiņu sarakstā. {{key:Mod+Z}} to atsauc; {{key:Mod+Y}} to atkal ieliek.

## Lietderīgi zināt

- Kopijām ir oriģināla tips, tāpēc visas izmanto vienu ģeometrijas kopu, tāpat kā novietojot to pašu vienumu divreiz.
- {{ui:Undo}} un {{ui:Redo}} aptver katru izmaiņu: rediģētās vērtības, novietojumus, ielīmēšanu, aizstāšanu un atjaunināšanu. Atkārtot ieliek novietojumu tajā pašā vietā; jauna izmaiņa notīra to, ko varēja atkārtot.
- Rasējuma 2D skatā nav nekā, ko atlasīt, tāpēc nav nekā, ko kopēt. Lai mainītu rasējumu, izmantojiet {{ui:Edit in CadCraft}}, kad tā ir redzama.

## Biežākās kļūdas

- **{{ui:Paste}} saka, ka elementi nāk no cita modeļa.** Pēdējais, ko kopējāt, bija ēkas elements vai vairāki elementi: tie tiek ielīmēti tikai savā modelī. Atlasiet vienu novietotu bibliotēkas vienumu un kopējiet to.
- **{{ui:Paste}} saka, ka kopija nāk no cita modeļa bez sava bibliotēkas vienuma.** Vienreiz novietojiet vienumu no cilnes {{ui:Library}} šajā cilnē, pēc tam kopējiet un ielīmējiet to.
- **{{key:Mod+C}} kopē lapas tekstu.** Lapā bija atlasīts teksts. Vispirms noklikšķiniet uz modeļa.

## Saistītie

- [Taustiņi un pele](topic:keyboard#edit)
- [BimCraft iestatījumi](topic:settings)
