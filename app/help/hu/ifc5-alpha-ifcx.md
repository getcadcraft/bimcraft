---
title: IFC5 alfa (IFCX-fájlok) megnyitása és exportálása
summary: Laboratóriumi beállítás az IFC5 alfa fájlformátumhoz (.ifcx): fájl megnyitása a rétegeivel, annak megtekintése, amit az olvasás nem tudott ellenőrizni, és a megnyitott modellek exportálása. A formátum még változik, ezért előbb olvassa el.
keywords: ifc5, ifcx, alfa, buildingsmart, json, rétegek, séma, laboratórium, mennyiségek, qto, exportálás, importálás
from: cffe1669
---

Az IFC5 alfa (a fájl kiterjesztése {{ui:.ifcx}}) a buildingSMART által tervezett fájlformátum. Nem végleges: a fájlok és a mi olvasatunk megváltozhat. Ezért ez laboratóriumi beállítás, és az olvasással kell kezdeni.

## Bekapcsolás

1. Válassza a {{ui:Beállítások}} lehetőséget, majd a BimCraft lapon az {{ui:IFC5 alpha (IFCX)}} szakaszt.
2. Jelölje be a {{ui:IFC5 alpha (IFCX) – a formátum még változik; előbb olvassa el}} jelölőnégyzetet.

Alapból ki van kapcsolva. Amíg ki van kapcsolva, a .ifcx fájl elutasításra kerül egy mondattal, amely ide mutat. A {{ui:IFC5 alpha (.ifcx) megnyitása…}} és az {{ui:IFC5 alfa}} exportálógomb akkor jelenik meg, ha be van kapcsolva.

## Megnyitás

- Válasszon egy .ifcx fájlt a {{ui:Fájl vagy mappa megnyitása}} lehetőséggel (ez lecseréli a megnyitott modellt, a szerkesztésekre vonatkozó szokásos kérdés után), vagy
- válassza a {{ui:IFC5 alpha (.ifcx) megnyitása…}} lehetőséget, és jelöljön ki több fájlt egyszerre: a fájlt, a rétegeit és az általa importált sémafájlokat. Ha már van megnyitott modell, a fájl **mellé kerül**; a modelllistában lévő x eltávolítja, ez a visszavonás.

Egy IFCX-fájl csomópontokat sorol fel (elérési út, gyermekei, amit örököl, attribútumai). Több fájl is leírhatja ugyanazt a csomópontot: egy későbbi fájl (réteg) felülírja egy korábbi attribútumait, a null gyermek pedig eltávolít egy gyermeket. A BimCraft ezeket összeállítja, majd az eredményt kis IFC4-modellként rajzolja ki: projekt, telek, épület, szintek és elemek nevekkel, osztályokkal, tulajdonságokkal, mennyiségekkel, színekkel és hálókkal.

A hálózatról semmi sem töltődik le. Egy fájl által importált sémafájlokat (például `ifc@v5a.ifcx`) csak akkor használja a rendszer, ha a fájllal együtt kiválasztotta őket; ellenkező esetben a jelentés ezt kiírja, és az attribútumokat típusellenőrzés nélkül olvassa be.

### A jelentés

A megnyitás után a jelentés felsorolja, mit talált az olvasás: a sémájával nem egyező adatokat, a meg nem adott sémafájlokat, és az itt IFC-jelentéssel nem bíró attribútumokat. A leképezés nélküli attribútumok **megmaradnak** a modellben, nem vesznek el, és exportáláskor visszaíródnak.

## Mi mivé lesz

| Az IFCX-fájlban | A BimCraftban |
|---|---|
| Csomópont IFC-osztállyal (projekt, telek, épület, szint, fal …) | A megfelelő IFC4-elem; az olvasás által nem ismert osztály épületelem-proxyvá válik |
| A csomópont neve a szülője alatt | Az elem neve |
| Mennyiségi típusú attribútumok (Length, Area, Volume, Mass …) | Egy IFC4 mennyiségkészlet, `Qto_IFCX` néven (az IFC4 mennyiségek IFC4 `Qto_*` készletek maradnak) |
| Egyéb tulajdonságattribútumok | Egy `Pset_IFCX` nevű tulajdonságkészlet |
| Háló- és transzformációs attribútumok | Az elem háromszögei és elhelyezése; a láthatatlan hálók nem rajzolódnak ki |
| Szín, átlátszóság, anyag, besorolás | Az elem felületi stílusa, anyaga és besorolása |

A mértékegységeket métereknek vesszük, a Z tengely felfelé mutat: az alfa szerint a mértékegységek leírása később készül el.

## Exportálás

Válassza az {{ui:IFC5 alfa}} gombot az eszköztáron, olvassa el a megjegyzést, majd az {{ui:A .ifcx exportálása}} gombot. A fájl a saját fejlécünket tartalmazza (szerző: CadCraft, verzió: ifcx_alpha), és magában is kimondja, hogy alfa formátum. Minden modell a saját fájlkoordinátáiban íródik, méterben, a nevekkel, osztályokkal, tulajdonságkészletekkel, mennyiségekkel (a típusukkal együtt attribútumként), színekkel és háromszögekkel. A rétegek és az öröklődés kilapítva kerül kiírásra. Ellenőrizze a fájlt abban a programban, amelybe küldi.

## Korlátok

- A görbe geometria (görbék, felületek) nem olvasódik: csak háromszöghálók.
- A falba ágyazott ajtók és ablakok a szinten kerülnek elhelyezésre; az a fal, amelyből származnak, nincs összekapcsolva.
- Az IFC4 `Qto_*` készletnevek saját attribútumcsoportként maradnak meg (`cadcraft::qto::…`); a szabványos alfa séma csak néhány mennyiségnevet tartalmaz.
- A formátum változhat, így a mai fájl holnap nem biztos, hogy beolvasható.
