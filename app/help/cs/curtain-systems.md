---
title: "Prosklené systémy: prosklené stěny na mřížce s poutky"
summary: Nakreslete prosklený systém jako stěnu nebo ho položte na plochu, pak nastavte jeho osy mřížky a poutka. Uloží se jako IfcCurtainWall s tabulemi a poutky.
keywords: prosklený systém, fasádní stěna, mřížka prosklení, poutko, prosklení, obchodní fasáda, skleněná stěna, panel, tabule, podle plochy, plocha, hmota, osa mřížky, rozteč, profil, příčník, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Co provedete

Vytvořte prosklenou stěnu z tabulí mezi poutky, změňte, kde leží osy mřížky, a vyberte, které osy nesou poutko.

## Postup

1. Zapněte {{ui:Kreslení}} a otevřete nabídku **Stavba** (v rozvržení s pásem karet: karta Architektura).
2. Vyberte **Prosklený systém**. V jeho řádku nastavte horní hranu (podlaží nad, nebo výšku), osu každých tolik podél něj, osu každých tolik nahoru (pro žádnou nechte prázdné), zda dostane poutka, a profil poutka.
3. Klikněte, kde začíná a kde končí, jako při kreslení stěny. {{key:Shift}} ho udrží pravoúhlý.
4. Pro změnu mřížky vyberte **Mřížka prosklení** a klikněte na systém:
   - **Přidat osu**: svislá osa vznikne tam, kam kliknete. Pro vodorovnou osu nejprve zadejte její výšku do pole **Ve výšce**.
   - **Přesunout osu**: klikněte na osu, pak na místo, kam má jít.
   - **Odebrat osu**: klikněte na osu.
   - **Nastavit podle rozteče**: zadejte rozteč do pole **Každých**, pak klikněte na systém.
5. Pro změnu poutek vyberte **Poutko**, zvolte, na co působí (svislou osu, na kterou kliknete, vodorovnou osu ve výšce, okraj, nebo všechny osy), zvolte **Umístit poutka** nebo **Odebrat poutka** a profil, pak klikněte na systém.
6. Vyberte systém, aby se celý zobrazil ve **Vlastnostech**: každou osu mřížky s jejím místem, zaškrtávací políčko pro její poutko a tlačítko pro odebrání; rozteč; okraj; profil; tloušťku tabule.

## Podle plochy

**Podle plochy** vytvoří prosklený systém na ploché ploše, kterou kliknete ve 3D zobrazení. Jeho řádek má stejná nastavení mřížky a poutek.

- Funguje na libovolné ploché ploše libovolného prvku, který 3D zobrazení ukazuje: hmota, stěna, podlaha, rovina střechy, sloup, umístěná položka. Plocha může být svislá, šikmá nebo vodorovná.
- Systém převezme obrys plochy. Štít nebo jiný neobvyklý tvar ořeže tabule a poutka na tento tvar.
- Může místo toho vytvořit **stěnu**, podél paty svislé plochy a tak vysokou jako plocha. Stěna zde vždy stojí svisle, takže šikmou nebo vodorovnou plochu nelze převzít.
- Nevytváří střechu. Střecha v BimCraftu se odvozuje z obrysu podlaží a sklonu, ne z jediné plochy.
- Zakřivená plocha je mnoho malých ploch: jedno kliknutí vezme jednu z nich.
- Plocha s otvory: systém pokrývá vnější obrys plochy.

## Jak se měří

- **Hrubá plocha** je obrys systému.
- **Plocha skla** jsou tabule tak, jak jsou vytvořeny: každá tabule ztrácí u poutka v mřížce polovinu jeho šířky na jedné straně a u okrajového poutka celou šířku.
- Svislé poutko vede od okraje k okraji. Vodorovné poutko se zastaví u každého svislého poutka a u okraje. Okrajová poutka leží uvnitř obrysu; kde se setkají dvě, prochází to více svislé. Spoje jsou řezány kolmo, ne na pokos.
- **Výkazy** mají seznam **Prosklené systémy** s těmito čísly, jakmile ho model obsahuje.

## V souboru IFC

IfcCurtainWall na svém podlaží, složený z jednoho IfcPlate (panel prosklení) na tabuli a jednoho IfcMember (poutko) na každý kus poutka, každý s vlastním tvarem, materiálem a základními množstvími.

## Dobré vědět

- Jakákoli velikost se vytvoří podle zadání. Odmítnut je jen obrys bez plochy, protože není co vytvořit.
- Systém nakreslený jako stěna si zachová výšku, se kterou byl nakreslen. Pokud podlaží posunete později, nastavte jeho výšku znovu ve Vlastnostech.
- Nástroj Přesunout zatím neumí přesunout prosklený systém. Smažte ho a nakreslete znovu, nebo změňte jeho mřížku na místě.
- {{ui:Zpět}} vrátí každý krok: celý systém, jednu změnu mřížky, jednu změnu poutek.
