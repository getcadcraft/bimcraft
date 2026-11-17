---
title: Posun, kopírování, zarovnání a rozmístění stavebních prvků
summary: Posouvejte stěny, podlahy, sloupy a umístěné položky od základního bodu a druhého bodu nebo zadané vzdálenosti, kopírujte je za pochodu a zarovnávejte je nebo je rozmisťujte rovnoměrně, v půdorysu nebo výběrem ve 3D.
keywords: posun, kopírovat, zarovnat, rozmístit, rozteč, odsazení, základní bod, posunutí, stěny, sloupy, podlahy, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Co uděláte

Posunete stěnu, sloup, podlahu nebo umístěnou položku knihovny na nové místo, vytvoříte jejich kopie nebo zarovnáte více prvků, bez překreslování.

## Názvy a klávesy

Příkazy se jmenují {{ui:Posunout}}, {{ui:Zarovnat}} a {{ui:Rozmístit}} a v příkazovém řádku můžete napsat `MOVE`, `ALIGN` a `DISTRIBUTE`, jako v kreslicí aplikaci CadCraft. Jeden rozdíl: v BimCraft je {{key:M}} Měřit, takže Posun má vlastní klávesu {{key:Shift+M}}. Nástroje jsou v nabídce {{ui:Sestavení}}.

## Posun

1. Vyberte, co posunout, v půdorysu nebo v 3D pohledu. Stěny, podlahy, sloupy a umístěné položky knihovny lze vybrat všechny jedním výběrem.
2. Stiskněte {{key:Shift+M}} nebo zvolte {{ui:Posunout}}.
3. Klikněte na základní bod, pak na druhý bod. Nebo po základním bodu zadejte vzdálenost a stiskněte {{key:Enter}}: pohyb půjde tím směrem, kam ukazuje kurzor od základního bodu. Můžete také napsat `dx,dy` (nebo `@dx,dy`), případně `délka<úhel`.
4. Stiskněte {{key:C}}, čímž zapnete {{ui:Kopírovat}}: každý posun pak vytvoří kopii a zůstane připraven pro další. Stiskněte {{key:Esc}} pro ukončení.

Oba body lze klikat i v 3D pohledu: když je Posun zapnutý, kurzor se setká s výškou podlahy úrovně, takže klik tam je bodem půdorysu. Podržte {{key:Shift}} při kliknutí, chcete-li místo toho vybrat jiný prvek. Použijte půdorys, {{ui:Shora}}, {{ui:Zepředu}} nebo {{ui:Z boku}} podle libosti: body vždy leží na dané úrovni.

Stěna si s sebou vezme své dveře a okna. Nakreslená podlaha si odnese své otvory. Místnosti, podlahy a stropy, které sledují stěny, se aktualizují. Stěny, které se připojovaly k posunuté stěně, zůstanou na místě.

Každý posun je jedna změna: jedno {{key:Mod+Z}} ji vrátí zpět a přenese se ke všem v relaci Live TeamWork. Umístěnou položku knihovny takto kopírovat nelze; použijte {{ui:Úpravy}} › {{ui:Kopírovat}} a {{ui:Vložit}}.

## Zarovnání

Vyberte dva nebo více prvků, zvolte {{ui:Zarovnat}}, pak stranu (vlevo, střed, vpravo, nahoru, uprostřed nebo dole) a k čemu zarovnat: k celé vybrané sadě, k prvnímu vybranému, k poslednímu vybranému, nebo k bodu, na který kliknete. Stiskněte {{ui:Zarovnat}} na liště.

## Rozmístění

Vyberte tři nebo více prvků, zvolte {{ui:Rozmístit}}, pak směr (napříč, nebo dolů) a rozestup: stejné mezery mezi nimi, nebo stejné středy. Dva krajní zůstanou na místě.

Stěny, které Zarovnat nebo Rozmístit posune, si zachovají spoje jako u Posunu: stěna připojená k posunuté stěně sklouzne svým koncem po své vlastní přímce, aby zůstala připojena; příčky do ní narážející přijdou s ní; a dvě spojené stěny, které se obě posouvají, si zachovají roh tam, kde se jejich nové čáry setkávají. Místnosti zůstanou uzavřené. Je to jeden krok v **Změnách**.
