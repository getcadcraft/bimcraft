---
title: Përfundimet e dhomave dhe tabelat e përfundimeve
summary: Thuaj çfarë mbulon dyshemenë, muret dhe tavanin e çdo dhome, shto zona si një mbrojtëse pllakash, dhe merr tabela përfundimesh sipas dhomës, murit dhe zonës, me sipërfaqe, numra pllakash duke përfshirë prerjet dhe vëllimet e nënshtresës.
keywords: përfundim, përfundime, tabelë përfundimesh, përfundim dhome, përfundim dyshemeje, përfundim muri, përfundim tavani, bordurë, pllakë, pllaka, pllaka të prera, numërim pllakash, humbje, nënshtresë, llaç, pllakë mbështetëse, suva, zonë, mbrojtëse pllakash, panel muri, zonë e lagur, brendësi, sasi
from: 8c30498c
---

## Çfarë do të bësh

Thuaj një herë te BimCraft çfarë përfundimi ka çdo dhomë. Tabelat e përfundimeve më pas japin sipërfaqet, pllakat për t'u porositur dhe vëllimet e nënshtresës, dhe ndryshojnë me modelin.

## Hapat

1. Ndiz {{ui:Vizato}}, hap **Tabelat** në panelin e majtë dhe kliko **Përfundimet e dhomave**.
2. Te **Llojet e përfundimit**, kliko **Shto një lloj përfundimi**. Jepi një emër, një lloj (Pllakë, Fletë, Shtresë ose Dërrasë) dhe një trashësi. Për një pllakë, jep gjatësinë dhe gjerësinë e pllakës, fugën dhe një përqindje humbjeje. Nëse diçka shkon nën përfundim (një llaç, një pllakë mbështetëse, një shtresë suvaje), emërtoje te **Nënshtresa** dhe jep trashësinë e saj.
3. Te **Dhomat**, zgjidh përfundimin e dyshemesë, murit dhe tavanit të çdo dhome. Shkruaj emrin e bordurës dhe lartësinë e saj, nëse dhoma ka një.
4. Te **Zonat**, kliko **Shto një zonë** për një pjesë të dhomës që merr një përfundim tjetër:
   - një zonë **muri** është një brez midis dy lartësive mbi dyshemenë (një mbrojtëse pllakash nga 0 deri 1200, një panel muri). Është në çdo mur të dhomës, ose zgjidh muret e asaj dhome në model dhe kliko butonin **Aktiv** për ta mbajtur vetëm për ata;
   - një zonë **dyshemeje** ose **tavani** është një sipërfaqe që shkruan. Zbritet nga përfundimi i vetë dhomës.
5. Kliko **Ruaj**. Është një hap në Zhbëj. Gjatësitë shkruhen në njësitë e projektit.

## Tabelat

Katër hyrje bashkohen në listën e Tabelave:

- **Përfundimet sipas dhomës**: çdo dhomë me përfundimin e dyshemesë, murit dhe tavanit, sipërfaqet e tyre, dhe bordurën me gjatësinë e saj.
- **Përfundimet sipas murit**: çdo pjesë muri në anën e dhomës dhe brezi i saj i mbuluar nga një përfundim, me gjatësinë, sipërfaqen bruto, zbritjet, sipërfaqen neto dhe, për pllakat, pllakat e plota, pllakat e prera dhe pllakat për t'u porositur.
- **Përfundimet sipas zonës**: çdo zonë me përfundimin e saj, sipërfaqen neto, pllakat dhe vëllimin e nënshtresës.
- **Sasitë e përfundimeve**: një rresht për përfundim: sipërfaqja neto, pllakat e plota dhe të prera, pllakat për t'u porositur, nënshtresa dhe vëllimi i saj, dhe vëllimi i vetë përfundimit.

Grupoji, totalizoji, ruaji dhe eksportoji si çdo tabelë: shih [Përgatit, ruaj dhe eksporto një tabelë](topic:schedule-layouts). Kliko një shifër për të zgjedhur nga çfarë erdhi: zbritjet e një muri zgjedhin dyert dhe dritaret e tij.

## Si maten përfundimet

- **Muret**: çdo pjesë muri në anën e dhomës, gjatësia e saj përgjatë dhomës shumëzuar me lartësinë që mbulon përfundimi, minus pjesën e çdo dyre dhe dritareje brenda asaj lartësie. Një mur më i ulët se dhoma përfundon në majën e vet. Metoda e matjes së projektit vendos cilat hapje janë shumë të vogla për t'u zbritur ([Tabelat](topic:plan-schedules-and-pdf)).
- **Dyshemetë dhe tavanet**: dhoma brenda faqeve të mureve, minus ishujt brenda saj.
- **Bordura**: gjatësia e murit të dhomës minus gjerësinë e dyerve të saj.
- **Pllakat**: të shtruara si rrjet nga një cep i sipërfaqes, me një fugë mes pllakave. Një pllakë krejt mbi sipërfaqe është një pllakë e plotë; një pllakë pjesërisht mbi të (në një skaj, rreth një hapjeje) është një pllakë e prerë. Pllakat për t'u porositur janë të plotat plus të prerat, plus humbjen në përqindje, të rrumbullakosura lart. Çdo pllakë e prerë numërohet si pllakë e re: copat e mbetura nuk ripërdoren.
- **Vëllimi i nënshtresës**: sipërfaqja neto shumëzuar me trashësinë e nënshtresës.
- Një numërim i shënuar **≈** llogaritet nga sipërfaqja në vend që të shtruhet pllakë për pllakë: një sipërfaqe me një zonë të shtypur të hequr prej saj, ose një shumë e madhe.

## Të mirëdijtur

- Përfundimet mbahen në skedarin e ndërtesës (grupi i vetive `CadCraft_Finishes` në projekt). Çdo dhomë që ka përfundim merr edhe grupin standard IFC të vetive `Pset_SpaceCoveringRequirements`, që programet e tjera të lexojnë emrat.
- Shtrimi i pllakave fillon nga një cep. Një shtrim i qendërzuar në dhomë, një model (spiguë, lidhje tullash) dhe ripërdorimi i copave nuk llogariten.
- Një mur i lakuar, dhe një kufi dhome që nuk është mur (një ndarës dhome), listohet si **Kufi tjetër** me gjatësinë e vet dhe pa hapje.
- Hyrja **Përfundimet** që ekzistonte më parë liston shtresat e përfundimit të tipeve të mureve; **Shtresat: sipërfaqja dhe vëllimi** liston çdo shtresë të çdo tipi me shtresa. Përfundimet e dhomave këtu janë ato që aplikohen në dhomë mbi ato shtresa.
- Një asistent mund të vendosë përfundime për ty me `finishes_set`: shih [Lëre një asistent AI të punojë me modelin tënd](topic:assistants).
