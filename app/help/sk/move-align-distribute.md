---
title: Presunúť, kopírovať, zarovnať a rozmiestniť prvky budovy
summary: Presuňte steny, podlahy, stĺpy a umiestnené položky o základný bod a druhý bod alebo o zadanú vzdialenosť, kopírujte ich za pochodu a zarovnajte ich alebo rozmiestnite rovnomerne, v pôdoryse alebo z výberu v 3D.
keywords: presunúť, kopírovať, zarovnať, rozmiestniť, rozostup, odsadenie, základný bod, posunutie, steny, stĺpy, podlahy, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Čo urobíte

Posuňte stenu, stĺp, podlahu alebo umiestnenú položku knižnice na nové miesto, vytvorte ich kópie alebo zarovnajte viacero prvkov bez prekreslenia.

## Názvy a klávesy

Príkazy sa volajú {{ui:Presunúť}}, {{ui:Zarovnať}} a {{ui:Rozmiestniť}} a v príkazovom riadku môžete napísať `MOVE`, `ALIGN` a `DISTRIBUTE`, ako v kresliacej aplikácii CadCraft. Jeden rozdiel: v BimCraft je {{key:M}} Merať, takže Presunúť má vlastnú klávesu, {{key:Shift+M}}. Nástroje sú v ponuke {{ui:Zostava}}.

## Presunúť

1. Vyberte, čo chcete presunúť, v pôdoryse alebo v 3D pohľade. Steny, podlahy, stĺpy a umiestnené položky knižnice môžu byť všetky v jednom výbere.
2. Stlačte {{key:Shift+M}} alebo vyberte {{ui:Presunúť}}.
3. Kliknite na základný bod a potom na druhý bod. Alebo za základným bodom zadajte vzdialenosť a stlačte {{key:Enter}}: prvok sa posunie smerom, kam ukazuje kurzor od základného bodu. Môžete tiež napísať `dx,dy` (alebo `@dx,dy`), alebo `dĺžka<uhol`.
4. Stlačte {{key:C}}, čím zapnete {{ui:Kopírovať}}: každé presunutie potom vytvorí kópie a zostane pripravené na ďalšie. Stlačením {{key:Esc}} to zastavíte.
Oba body sa dajú klikať aj v 3D pohľade: keď je zapnutý Presunúť, kurzor sa stretne s výškou podlahy úrovne, takže kliknutie tam je bod pôdorysu. Pridržte {{key:Shift}} pri kliknutí, ak chcete namiesto toho vybrať iný prvok. Použite pôdorys, {{ui:Zhora}}, {{ui:Spredu}} alebo {{ui:Bok}} podľa potreby: body vždy ležia na tej úrovni.

Stena si so sebou vezme svoje dvere a okná. Nakreslená podlaha si vezme svoje otvory. Miestnosti, podlahy a stropy, ktoré nasledujú steny, sa aktualizujú. Steny, ktoré sa spájali s presunutou stenou, zostávajú na mieste.

Každé presunutie je jedna zmena: jedným {{key:Mod+Z}} sa vráti späť a prenesie sa všetkým v relácii Live TeamWork. Umiestnenú položku knižnice takto nemožno kopírovať; použite {{ui:Upraviť}} › {{ui:Kopírovať}} a {{ui:Prilepiť}}.

## Zarovnať

Vyberte dva alebo viac prvkov, vyberte {{ui:Zarovnať}}, potom stranu (vľavo, na stred, vpravo, hore, do stredu, dole) a čo zarovnať: celý výber, prvý vybraný, posledný vybraný alebo bod, ktorý kliknete. Stlačte {{ui:Zarovnať}} na paneli.

## Rozmiestniť

Vyberte tri alebo viac prvkov, vyberte {{ui:Rozmiestniť}}, potom smer (naprieč alebo nadol) a rozostup: rovnaké medzery medzi nimi alebo rovnaké stredy. Dva na koncoch zostávajú na mieste.

Steny, ktoré posúva Zarovnať alebo Rozmiestniť, zachovávajú svoje spoje ako pri Presunúť: stena spojená s presunutou stenou kĺže koncom po svojej vlastnej priamke, aby zostala spojená, priečky, ktoré do nej narážajú, idú s ňou, a dve spojené steny, ktoré sa obe presúvajú, zachovajú roh tam, kde sa stretnú ich nové čiary. Miestnosti zostávajú uzavreté. Je to jeden krok v **Zmeny**.
