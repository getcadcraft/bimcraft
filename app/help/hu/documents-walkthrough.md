---
title: Dokumentumok és revíziók (a tár)
summary: Lépésről lépésre egy valódi munka végigvezetése: egy IFC-modellekből álló projektmappa ellenőrzés alá vétele, egy modell kivétele, módosítása, visszaadása megjegyzéssel, felülvizsgálatra küldése, jóváhagyása és kiadása, az előzmények és a használat megtekintése, és az, hogy mit lát egy második személy, amíg a fájl zárolva van, valamint a felhőmappák működése.
keywords: tár, dokumentumok, végigvezetés, bemutató, kivétel, visszaadás, revízió, kiadás, jóváhagyás, zárolás, előzmények, használat helye, ifc, modell, felhőmappa, projektmappa, két személy, megosztott mappa
from: 0a753f25
---

## Mit fog csinálni

Ön Ana, a Riverside Clinic projekten dolgozik egy kollégával, Ben-nel. A projekt IFC-modelljei egy mappában vannak, amelyet mindketten elérnek (megosztott meghajtó, szinkronizált mappa vagy felhőmappa). A végére egy fájl az első példányától eljut a kiadott **A** revízióig, újra módosul mint **B.1**, látja, ki mit csinált, és azt is látja, mit lát Ben, amikor a fájlt Ana tartja.

Minden a fájljai mellett lévő, rejtett `.ccvault` mappában tárolódik: nincs szerver, semmi nem töltődik fel (a felhőmappa kivétel, lásd az utolsó lépést). Minden gombot és szabályt egy helyen talál a *Dokumentumok: kivétel, revíziók és kiadás* témakörben, ha az alkalmazásában megvan.

## 1. Állítsa be a projektmappát

1. Válassza a {{ui:Dokumentumok}} lehetőséget a kezdőképernyőn a {{ui:Mappa megnyitása}} mellett, vagy a **Fájl** menü {{ui:Dokumentumok…}} pontját.
2. Válassza a {{ui:Válassza ki a projektmappát}} gombot, és válassza ki azt a mappát, amely a projekt IFC-modelljeit tartalmazza. (A projektmappák a Studióban és azokban a böngészőkben működnek, amelyek mappát tudnak megnyitni, például a Chrome-ban és az Edge-ben. Más böngészőkben a panel ezt megmondja.)
3. Válassza a {{ui:Változtatás}} gombot a **Név:** mellett, és írja be a nevét: `Ana` (ha kérdezi, a számítógép nevét is). A panel most ezt mutatja: *Név: Ana*, és a számítógépe. Minden, amit tesz, Ana nevét viseli.
4. Válassza a {{ui:Tár indítása ebben a mappában}} gombot, és írja be a projekt nevét: `Riverside clinic`. A panel ezt írja: *A tár elindult: Riverside clinic.*

## 2. Vegyen egy fájlt ellenőrzés alá

1. Nyissa meg az **A tárban nem szereplő fájlok** részt, és válassza a {{ui:Hozzáadás}} gombot a `models/House.ifc` mellett.
2. A fájl megjelenik az **A tárban lévő fájlok** alatt, A.1 revízióval, **Munka folyamatban** állapotban. Az A.1 az első példánya; a tár minden revíziót megtart.

## 3. Kivétel, módosítás, visszaadás

1. Válassza a {{ui:Megnyitás}} gombot a `models/House.ifc` mellett. A modell megnyílik a BimCraftban, és a panel bezárul, hogy lássa. Nyissa meg újra a panelt a {{ui:Dokumentumok}} gombbal.
2. Nyissa meg újra a panelt, és válassza a {{ui:Kivétel}} gombot. A sor most **Kivéve: Anának** állapotot mutat. Zárolófájl készült a `.ccvault/locks` mappában; senki más nem vehet ki ebből a fájlból, amíg nem adja vissza.
3. Módosítsa a modellt: mozgasson egy falat, adjon hozzá egy ajtót. A mentést a tár elutasítja, amíg a modell nincs Anának kivéve, és megmondja, miért; a Mentés másként mindig működik egy saját másolathoz.
4. Nyissa meg a panelt, válassza a {{ui:Visszaadás}} gombot, és írja be, mi változott (`Moved the door`). A panel ezt írja: *Visszaadva A.2-ként.* A projektmappában lévő fájl most az a modell, amelyet megnyitott, és a zár megszűnt. Módosítás nélküli visszaadás megtartja a revíziót.

Ha meggondolja magát, a {{ui:Kivétel visszavonása}} gombbal a fájl új revízió nélkül visszakerül.

## 4. Felülvizsgálat és kiadás

1. Válassza a {{ui:Küldés felülvizsgálatra}} gombot. Az állapot **Felülvizsgálatra vár** lesz, és a fájl csak olvasható.
2. A jóváhagyás előtt válassza a {{ui:Projektbeállítások}} gombot, és sorolja fel, kik hagyhatják jóvá (soronként egy név), például `Ben` és `Carla`, és jelölje be azt a szabályt, hogy a jóváhagyónak a szerzőtől eltérő személynek kell lennie. Válassza a {{ui:Beállítások mentése}} gombot. Ettől kezdve maga a tár is elutasítja a többi személyt.
3. Ben (vagy Carla) válassza a {{ui:Jóváhagyás}} gombot, és írja be a jóváhagyó nevét. Az állapot **Kiadva** lesz, a revízió pedig **A**, a *jóváhagyta* sorral és a névvel. A kiadott fájl csak olvasható. A {{ui:Visszaküldés}} gomb munka folyamatban állapotba küldte volna vissza, indokkal.

A jóváhagyó neve a panelbe írt név; annak nyilvántartása, ki írta alá, nem személyazonosság-igazolás.

## 5. Új revízió

1. A kiadott fájlon válassza az {{ui:Új revízió}} gombot. Ezzel a következő betűt foglalja le.
2. Módosítsa, majd válassza a {{ui:Visszaadás}} gombot. A revízió **B.1**, munka folyamatban. Ugyanígy adja ki, és **B** lesz. A {{ui:Kivétel visszavonása}} az első visszaadás előtt az **A**-n hagyja.

A revíziók betűi A, B … Z, AA, AB sorrendben követik egymást. Ha a szabványa kihagy betűket, a *ASME Y14.35 sorrend használata* projektbeállítás a következő revíziókhoz kihagyja az I, O, Q, S, X és Z betűket.

## 6. Nézze meg, mi történt

Válassza a fájl nevét a részleteinek megnyitásához:

- **{{ui:Előzmények}}**: minden esemény, a legújabbal kezdve, azzal, ki, melyik számítógépről és mikor: *A.2 visszaadva*, Anától, *Kiadva*, Bentől, és így tovább.
- **{{ui:Revíziók}}**: a revíziótábla: minden megtartott revízió a dátumával, azzal, aki visszaadta, a megjegyzéssel és azzal, aki jóváhagyta. A tár minden példányt a `.ccvault/revs` mappában tart meg.
- **{{ui:Használja}}**: a dokumentumok, amelyekre egy IFC-modell hivatkozik.
- **{{ui:Használja}}** (a második sor): a tárban lévő minden modell, amely erre a fájlra hivatkozik.

## Modellek, amelyek más dokumentumokra mutatnak

Egy IFC-modell, amely más dokumentumokra mutat a mappában (rajzokra, kimutatásokra), ezeket a **Használja** alatt mutatja, és mindegyik dokumentum a modellt mutatja a saját **Használja** részében. Ha visszaad egy dokumentumot, láthatja, mely modellek hivatkoznak rá.

## 7. Mit lát Ben, amíg Ana tartja a fájlt

Vegye ki újra a fájlt, és kérje meg Bent, hogy nyissa meg ugyanazt a projektmappát a saját számítógépén, és nyissa meg a panelt. A fájl sorában ezt látja: **Kivéve: Ana**, az ő számítógépén, ettől az időponttól, és nincs {{ui:Kivétel}} gomb. Ha mégis próbálkozik, a tár elutasítja: a zár egy olyan fájl, amelyet a rendszer nem készít el kétszer, így két ember nem tarthatja egyszerre a fájlt, még ugyanabban a pillanatban sem, ha a mappa a lemezen van a Studióban. (Böngészőben a mappa csak legjobb erőfeszítést enged, és a panel ezt a **Mappa** alatt megmondja.)

Ha Ana nincs a gépnél, és Bennek szüksége van a fájlra, a {{ui:Kivétel feloldása}} gomb felszabadítja. Indokot kell írnia; az a naplóba kerül azzal együtt, kié volt a kivétel. Ha a projekt adminisztrátorokat sorol fel, csak ők tehetik meg. A lejárati határnál (alapértelmezetten 14 nap) régebbi kivétel *hosszú ideje* jelölést kap. A feloldás után Ana későn érkező visszaadását a tár elutasítja, így nem írhatják felül egymás munkáját.

## 8. Felhőmappák

A felhőmappa a projektmappa, amelyet a csapat felhőtárhelyén tárol, így a csapatnak nincs szüksége megosztott meghajtóra. A Studióban, a CadCraft-fiókjával bejelentkezve, a panelen a {{ui:Válassza ki a projektmappát}} mellett megjelenik a {{ui:Felhőmappa megnyitása}} gomb. Válassza ki, majd válassza a mappát, amely munkaterület / mappa formában látszik. A munkaterület tulajdonosa hozza létre a mappát először, és a csapat felhőtárhelyének érvényesnek kell lennie. Minden fent leírt működik ugyanúgy; a kiszolgáló készíti a zárat, amely személyek között is szigorú. Ha nincs bejelentkezve, a panel bejelentkezést kér. Egy közönséges böngészőlapon a felhőgomb nem érhető el; használja a Studiót.

## Próbálja ki

Végezze el a fenti nyolc lépést egy valódi fájl másolatával. A két személyes lépésekhez másik személy kell, vagy két ablak két névvel. Ha valódi megosztott mappával próbálja ki, a Közösségi tesztelési oldal felsorol egy ellenőrzést, amely pontosan ezt kérdezi, és fogad eredményeket.
