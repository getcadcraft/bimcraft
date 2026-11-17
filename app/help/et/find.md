---
title: Elementide otsimine klassi, nime või omaduse järgi
summary: Leia kõik elemendid, mis vastavad ühele või mitmele reeglile — nende klass, nimi, tüüp, korrus, materjal või mis tahes omaduse väärtus — vali need kõik ja salvesta reeglid nimetatud otsinguhulgana.
keywords: otsi, otsing, filter, päring, reegel, otsinguhulk, valikuhulk, salvestatud otsing, omadus, väärtus, klass, materjal, vali kõik
from: 3d293bc2
---

## Mida teete

Vali ühe sammuga kõik ühte liiki elemendid või need, millel on üks kindel väärtus: kõik uksed, kõik seinad 2. korrusel, kõik elemendid, mille tulepüsivus on EI60, või kõik seinad, mis maksavad rohkem kui kindel summa.

## Sammud

1. Ava IFC-mudel.
2. Ava vasakpoolses paneelis {{ui:Otsi}}.
3. Esimeses reeglis vali omadus (kõigepealt elemendi enda omadused, nagu {{ui:Klass}} ja {{ui:Korrus}}, seejärel mudeli omadusekogumid), võrdlusviis ja väärtus. Väärtuse väli pakub mudelis olevaid väärtusi.
4. Piirangute lisamiseks klõpsa {{ui:Lisa reegel}}. Vali {{ui:Kõik reeglid}}, kui vajad kõiki, või {{ui:Mis tahes reegel}}, kui piisab ühest.
5. Klõpsa {{ui:Otsi}} või vajuta väärtuse väljal {{key:Enter}}. Vasted valitakse.
6. Reeglite säilitamiseks klõpsa {{ui:Salvesta otsinguhulgana}}, sisesta nimi ja klõpsa uuesti. Hiljem leiad otsinguga, klõpsates hulga nimel.

## Mida peaksid nägema

- Vasted on valitud 3D-vaates ja mudelipuus ning {{ui:Omadused}} näitab, mitu neist on klassi järgi. Vajuta {{key:I}}, et näidata ainult neid, ja {{key:H}}, et need peita.
- Sõnad sobitatakse ilma suur- ja väiketähti eristamata. Arvud võrreldakse arvudena: „on suurem kui 1000” tähendab väärtust, mitte teksti.
- {{ui:on väärtus}} ja {{ui:pole väärtust}} ei vaja väärtust; need leiavad, kus väärtus on täidetud või puudub.
- Salvestatud hulgad jäävad sellesse brauserisse kõigi mudelite jaoks, mida avad.

## Levinud vead

- **Midagi ei leita.** Reegel vajab väärtust, mida saab sobitada: vaata väärtuse väljal pakutavaid valikuid.
- **Omadus puudub loendist.** Selles mudelis ei ole ühelgi kujuga elemendil seda omadust.

## Edasi

- [Värvi elemendid omaduse järgi](topic:color-by-property)
- [Peida, isoleeri ja tee elemendid läbipaistvaks](topic:hide-and-isolate)
