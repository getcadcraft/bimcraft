---
title: Závesné systémy: presklené steny na mriežke so štulpami
summary: Nakreslite závesný systém ako stenu alebo ho položte na plochu, potom nastavte jeho mriežkové čiary a štulpy. Uloží sa ako IfcCurtainWall s tabuľami a štulpami.
keywords: závesný systém, závesná stena, mriežka závesu, štulp, presklenie, predajná fasáda, sklenená stena, panel, tabuľa, podľa plochy, plocha, hmota, mriežková čiara, rozostup, profil, priečka, IfcCurtainWall, IfcPlate, IfcMember
from: 99d6219c
---

## Čo budete robiť

Vytvoríte presklenú stenu z tabúľ medzi štulpami, zmeníte, kde sú jej mriežkové čiary, a vyberiete, ktoré čiary budú niesť štulp.

## Postup

1. Zapnite {{ui:Kresliť}} a otvorte ponuku **Stavba** (v rozložení pásu: karta Architektúra).
2. Vyberte **Závesný systém**. V jeho riadku nastavte hornú hranu (podlažie nad ním alebo výšku), čiaru po určitej vzdialenosti pozdĺž neho, čiaru po určitej vzdialenosti nahor (ak nechcete žiadnu, nechajte prázdne), či dostane štulpy, a profil štulpu.
3. Kliknite tam, kde začína a kde končí, ako pri kreslení steny. {{key:Shift}} zachová pravý uhol.
4. Ak chcete zmeniť mriežku, vyberte **Mriežka závesu** a kliknite na systém:
   - **Pridať čiaru**: zvislá čiara ide tam, kam kliknete. Pri vodorovnej čiare najprv zadajte jej výšku do poľa **Vo výške**.
   - **Presunúť čiaru**: kliknite na čiaru, potom na miesto, kam má ísť.
   - **Odstrániť čiaru**: kliknite na čiaru.
   - **Nastaviť podľa rozostupu**: zadajte rozostup do poľa **Každých**, potom kliknite na systém.
5. Ak chcete zmeniť štulpy, vyberte **Štulp**, zvoľte, na čo pôsobí (zvislú čiaru, na ktorú kliknete, vodorovnú čiaru vo výške, okraj alebo každú čiaru), vyberte **Umiestniť štulpy** alebo **Odstrániť štulpy** a profil, potom kliknite na systém.
6. Vyberte systém, aby ste vo **Vlastnostiach** videli všetko: každú mriežkovú čiaru s jej miestom, označenie štulpu a tlačidlo na jej odstránenie; rozostup; okraj; profil; hrúbku tabule.

## Podľa plochy

**Podľa plochy** vytvorí závesný systém na rovnej ploche, ktorú kliknete v 3D zobrazení. Jeho riadok má rovnaké nastavenia mriežky a štulpov.

- Funguje na každej rovnej ploche akéhokoľvek prvku, ktorý 3D zobrazenie ukazuje: hmota, stena, podlaha, rovina strechy, stĺp, umiestnená položka. Plocha môže byť zvislá, šikmá alebo vodorovná.
- Systém prevezme obrys plochy. Štít alebo iný nepravidelný tvar orezá tabule a štulpy podľa seba.
- Namiesto systému môže vytvoriť **stenu**, pozdĺž päty zvislej plochy a do jej výšky. Stena sa tu vždy postaví zvislo, takže šikmá alebo vodorovná plocha ju nemôže prijať.
- Nevytvára strechu. Strecha v BimCraft sa vypočíta z obrysu podlažia a sklonu, nie z jedinej plochy.
- Zakrivená plocha je veľa malých rovných plôch: jedno kliknutie zoberie jednu z nich.
- Plocha s otvormi: systém pokryje vonkajší obrys plochy.

## Ako sa meria

- **Hrubá plocha** je obrys systému.
- **Plocha skla** sú tabule tak, ako sú vyrobené: každá tabuľa stratí pol šírky štulpu na strane s mriežkovým štulpom a celú šírku pri okrajovom štulpe.
- Zvislý štulp prechádza od okraja k okraju. Vodorovný štulp sa zastaví pri každom zvislom štulpe a pri okraji. Okrajové štulpy ležia vnútri obrysu; kde sa stretnú dva, prebieha ten zvislejší. Spoje sú rezané kolmo, nie skosené.
- **Tabuľky** majú zoznam **Závesné systémy** s týmito číslami, keď ho model obsahuje.

## V súbore IFC

IfcCurtainWall na jeho podlaží, zložený z jedného IfcPlate (panel závesu) na každú tabuľu a jedného IfcMember (štulp) na každý kus štulpu, každý so svojím tvarom, materiálom a základnými množstvami.

## Dobré vedieť

- Akákoľvek veľkosť sa vytvorí podľa zadania. Odmietnutý je iba obrys bez plochy, pretože nie je čo vytvoriť.
- Systém nakreslený ako stena si zachová výšku, s ktorou bol nakreslený. Ak neskôr posuniete podlažie, nastavte jeho výšku znova vo Vlastnostiach.
- Nástroj Presunúť zatiaľ závesný systém nepresúva. Odstráňte ho a nakreslite znova, alebo zmeňte jeho mriežku na mieste.
- {{ui:Späť}} vráti každý krok späť: celý systém, jednu zmenu mriežky, jednu zmenu štulpov.
