---
title: Távolságok, lapterületek és helyek mérése 3D-ben
summary: Mérés egy IFC-modell két pontja között, sarkokra és élekre illesztéssel, az X, Y és Z szerinti különbség leolvasásával, és egy sík lap területének mérésével.
keywords: mérés, mérési, távolság, hossz, méretezés, terület, lapterület, fogás, sarok, él, mérőszalag, vonalzó, szabad távolság, hely, szélességi, hosszúsági, koordináták, georeferencia, térképi átalakítás, EPSG, felmérés, keleti, északi, WGS 84, dátum
from: 5f430bba
---

## Mit fog csinálni

Ellenőrizzen egy szabad távolságot, egy falhosszt vagy egy lap méretét közvetlenül a modellből, a tervezőprogram megnyitása nélkül.

## Lépések

1. Nyisson meg egy IFC-modellt.
2. Kattintson az eszköztár {{ui:Mérés}} gombjára, vagy nyomja meg az {{key:M}} billentyűt. Megnyílik egy sáv a nézet alján.
3. **Távolság:** a {{ui:Távolság}} kiválasztásával kattintson az első pontra, majd a másodikra. Sarok közelében a mutató oda ugrik, él közelében az élre; a mutató melletti kis címke megmondja, melyik. Minden kattintáspár egy mérést készít.
4. **Egy lap területe:** válassza a {{ui:Lapterület}} lehetőséget, és kattintson egy lapra. A teljes sík lap kivilágosodik, és megjelenik a területe.
5. **Egyenes vonalak:** tartsa lenyomva a {{key:Shift}} billentyűt a második pont kiválasztásakor, vagy nyomja meg a sávban az {{ui:Egyenes}} gombot, hogy megmaradjon. A vonal ekkor a tengely mentén fut, amelyhez a mutató legközelebb van (felülnézetben az alaprajz X vagy Y tengelye mentén; más nézetekben X, Y vagy Z mentén), és a mutató címkéje azt írja: „egyenes tengely mentén”. Az {{key:M}} továbbra is indítja és leállítja a Mérést.
6. A mérések eltávolításához kattintson a {{ui:Törlés}} gombra, a mérés leállításához a {{ui:Kész}} gombra (vagy az {{key:Esc}} billentyűre).

## Mit kell látnia

- A két pont közötti vonal a hosszával, a sávban pedig a hossz, és az, hogy milyen messze megy az X, Y és Z mentén (a modell tengelyeiben, Z felfelé), mind az eszköztáron választott {{ui:Mértékegységek}} szerint.
- Egy lap területe négyzetméterben, a lapon és a sávban.
- A címkék a méréseken maradnak, miközben forgat, mozgat és nagyít.
- Mérés közben a kattintások nem választanak ki elemeket. Egy metszősík vagy doboz továbbra is vágja a modellt, és azt mérheti, amit mutat, a levágott felületeket is beleértve.

## Hol van egy pont a Földön

Kattintson a mérősávban a {{ui:Hely}} gombra, majd kattintson a modell egy pontjára (a sarkokhoz és élekhez illeszkedik, ahogy a távolságoknál). A sáv megjeleníti:

- a **szélességi és hosszúsági fokot**, tizedes fokban és fok, perc, másodperc alakban, kezdetben WGS 84 szerint;
- a **térképi koordinátákat** (keleti és északi koordináták, az eszköztáron választott {{ui:Mértékegységek}} szerint írva) a modell saját térképrendszerében, például `EPSG:28356`;
- a **magasságot** és a függőleges dátumot, amelyet a fájl megnevez, valamint a fájl **saját dátumát** (például GDA94).

A {{ui:Másolás}} mindent egy sorban a vágólapra tesz. A szélességi és hosszúsági fokok rendszerét a {{ui:Beállítások}} › {{ui:BimCraft}} › {{ui:Hely}} alatt változtathatja meg: WGS 84 (mint a GPS és a webes térképek), a fájl saját dátuma, vagy más gyakori, például ETRS89 vagy NAD83.

Ehhez georeferált modell kell: olyan, amelyet térképi koordinátákkal exportáltak (vetített rendszerű térképi átalakítás EPSG-kóddal). Az a modell, amelynek csak telephelyi szélessége és hosszúsága van, közelítő helyzetet kap a telephely pontjából és valódi északából számítva, a sáv ezt jelzi. Több megnyitott modell esetén minden pont a saját modellje georeferenciáját használja.

:::note
A dátumok közötti átváltás (például GDA94-ről WGS 84-re) rácsfájlok nélkül történik, ezért néhány méter pontos; az állapotsor megmondja, mennyire pontos. A térképi koordináták maguk pontosak.
:::

## Gyakori hibák

- **„…nincs georeferencia.”** A fájlban nincs térképi átalakítás, és nincs telephelyi szélesség és hosszúság. Exportálja újra a koordinátarendszer beállításával (közös koordináták / felmérési pont a tervezőprogramban).
- **Térképi koordináták, de nincs szélesség és hosszúság.** A fájl a térképrendszerét EPSG-kód nélkül nevezi meg, vagy olyan kóddal, amely nincs a listában; az állapotsor megmondja, melyik.
- **A pont a lapra esik, nem a sarokra.** A fogás a mutató alatti elemet nézi. Közelítsen a sarokhoz, vagy nagyítson.
- **A terület kisebb a vártnál.** A nyílásokat kihagyjuk, és a görbülő lap több lap: mindegyikre kattintson.
- **Az {{key:Esc}} leállította a mérést.** Az első {{key:Esc}} eldobja a félig kész távolságot; a második leállítja.

## Tovább

- [Metszet vágása IFC-modellen metszősíkkal](topic:section-plane)
- [Elemek elrejtése, elszigetelése és átláthatóvá tétele](topic:hide-and-isolate)
