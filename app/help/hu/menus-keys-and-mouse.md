---
title: Menük, billentyűk és egér
summary: Válasszon olyan menüstílust, amely illeszkedik a megszokott munkamódjához, adjon bármelyik parancsnak saját billentyűt, mozgassa a parancsokat menük között, és állítsa be, mit csinál a görgő és az egyes egérgombok.
keywords: menüstílus, menük, menüsor, szalag, parancssor, billentyűparancsok, gyorsbillentyűk, billentyűk, testreszabás, billentyű-átállítás, újrakiosztás, egér, görgő, megfordítás, nagyítás iránya, középső gomb, eltolás, körbeforgatás, kétbetűs billentyűk, exportálás, importálás, váltás, megszokott
from: a424e836
---

A BimCraft parancsai ugyanúgy érhetők el, bárhogy is nyúl hozzájuk. A **menüstílus** csak azt dönti el, hol jelennek meg a képernyőn, milyen néven szerepelnek és melyik billentyűk indítják őket, így megtarthatja a megszokott munkamódját. Válassza ki a {{ui:Beállítások}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menük, billentyűk és egér}} pontban; a változás azonnal érvényes, és ez a böngésző megjegyzi.

## Az öt stílus

| Stílus | Mit kap |
|---|---|
| {{ui:CadCraft}} | A BimCraft saját eszköztára és billentyűi ({{key:W}} fal, {{key:D}} ajtó, {{key:N}} ablak, {{key:X}} metszet, {{key:F}} illesztés). A kiindulási pont. |
| {{ui:Lakástervezés}} | Menüsor (Fájl, Szerkesztés, Build, Könyvtár, 3D, CAD, Eszközök, Nézet) az épülettervező eszközök sora felett, ahogy a lakástervező programok elrendezik őket. Ugyanazok az egybetűs billentyűk, plusz {{key:Mod+L}} a könyvtárhoz, {{key:F9}} a 3D-nézethez, {{key:F10}} az alaprajzhoz és {{key:F11}} mindkettőhöz. |
| {{ui:BIM szalag}} | Nagy gombokból álló lapok (Építészet, Beszúrás, Jelölés, Módosítás, Nézet, Kimenet), fájlmenüvel és gyorsgombokkal a jobb oldalon. Kétbetűs billentyűk: {{key:W}} majd {{key:A}} fal esetén, {{key:D}} {{key:R}} ajtó, {{key:W}} {{key:N}} ablak, {{key:S}} {{key:C}} metszet, {{key:Z}} {{key:F}} illesztés. A középső gomb eltol; a {{key:Shift}} és a középső gomb körbeforgat. |
| {{ui:Klasszikus rajzolás}} | Kis szalag és parancssor azoknak, akik parancsokat gépelnek: WALL, DOOR, WINDOW, ROOF, Visszavonás (U), ZOOM, SECTION, PLOT, INSERT, HELP. Bárhol elkezdhet gépelni, a betűk a parancssorba kerülnek; a {{key:Enter}} futtatja, üresen hagyott {{key:Enter}} megismétli az utolsó parancsot, az {{key:Esc}} törli. |
| {{ui:Nézegető}} | Modellek megnyitásához és ellenőrzéséhez, nem rajzoláshoz: {{ui:Fájl}}, {{ui:Nézet}}, {{ui:Megjelenítés}}, {{ui:Vizsgálat}} és {{ui:Szerkesztés}} menük a megtekintő eszközök sora felett (illesztés, felülnézet, homlokzat, oldalnézet, metszet, mérés, elrejtés, izolálás, átlátszó nézet, összes megjelenítése, séta). Az épülettervező eszközök a végén, a {{ui:Modell}} menüben várnak. Ugyanazok a billentyűk, mint a BimCraft saját stílusában. |

A menük és szalagok egy modell megnyitása vagy új épület kezdése után jelennek meg; addig a bal oldali panel nyit fájlokat és kezd épületeket.

:::tip
Az a billentyű, amely a BimCraft saját elrendezéséhez tartozik, de nem a kiválasztott stílushoz, nem tesz semmit, és az állapotsor megmondja, hová került a parancsa („A BIM szalagon a Metszet SC”). A {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} és a nyilak mindig megtartják jelentésüket, a futó eszköz pedig megtartja saját billentyűit: {{key:R}} és {{key:Tab}} elhelyezés közben, {{key:W}} {{key:A}} {{key:S}} {{key:D}} sétálás közben, {{key:H}} az ajtó- és ablakeszközzel, számok a hossz gépelésekor.
:::

## Alakítsa a magáévá

1. Válassza ki a legközelebbi stílust, majd kattintson a {{ui:Testreszabás…}} gombra.
2. A {{ui:Billentyűk és menük}} lapon keressen rá egy parancsra (a keresőmező segít). Kattintson a {{ui:Billentyű hozzáadása}} gombra, és nyomja le a billentyűt, vagy két billentyűt egymás után a kétbetűs billentyűhöz. Egy billentyűre kattintva távolítsa el.
3. Menüsorral vagy szalaggal a {{ui:Hol van}} beállítás a parancsot másik menübe vagy panelbe, vagy a {{ui:Csak billentyűk}} lehetőségre helyezi át.
4. A {{ui:Egér}} lapon állítsa be a görgőt, azokat a gombokat, amelyek az alaprajzot tolják, és hogy mit csinál minden gomb a 3D-nézetekben.
5. Adjon nevet, és kattintson a {{ui:Mentés}} gombra.

A beépített stílus mentése saját másolatot készít („Saját Lakástervezés”); a beépített sohasem változik. Ha egy billentyűt két parancshoz rendeltek, vagy olyan billentyűhöz, amely egy kétbetűs billentyű begépelése előtt futna le, az pirossal jelenik meg, és mentés előtt javítani kell.

## Egér

- **Görgő**: {{ui:A felfelé görgetés nagyít}} (a kiindulási állapot) vagy {{ui:A felfelé görgetés kicsinyít}}, és hogy milyen gyorsan. Az érintőpad csippentése mindig az ujjak mozgásának irányában nagyít.
- **Az alaprajz és a rajzok eltolása**: bármelyik bal, középső vagy jobb gombbal. A {{key:Space}} és a húzás szintén eltol; a bal gombos húzás csak ott tol, ahol a kattintás nem választana ki vagy nem rajzolna.
- **Húzás a 3D-nézetekben**: {{ui:Nézetenként külön}} megtartja a BimCraft gombjait (a bal gomb körbeforgat, a jobb eltol). Vagy állítsa be minden gombot körbeforgatásra, eltolásra, nagyításra vagy semmire; a {{key:Shift}} a gombbal felcseréli a körbeforgatást és az eltolást. A húzás nélküli kattintás továbbra is kiválaszt.

## Vigye magával

Az {{ui:Exportálás}} a használt stílust egy kis `.ccinput.json` fájlba menti; az {{ui:Importálás…}} egy ilyen fájlt ad hozzá, másik számítógépről vagy egy kollégától. Az importált fájl csak a BimCraft saját parancsaira mutathat: minden más benne (egy olyan parancs, amelyet ez a verzió nem ismer, vagy egy billentyű, amely itt nem működik) kimarad, és ennek a száma az állapotsorban jelenik meg. Az {{ui:Ennek a stílusnak a törlése}} egy saját stílust távolít el.

:::note
Ezek a beállítások ebben a böngészőben maradnak. A stíluskártyák alatti {{ui:Ennek a stílusnak a használata minden alkalmazásban}} beállítás miatt minden alkalmazás a hozzá illő stílusban nyílik meg (a saját eszköztárával, menüsorral, szalaggal vagy klasszikus rajzolás stílussal; a {{ui:Nézegető}} kizárólag a BimCraft-é, másutt nincs párja), a módosításokkal együtt, amelyeket az egyes alkalmazásokban végzett; az alkalmazás, amelyhez nincs illő stílus, megtartja a sajátját. Egy másik stílus kiválasztása egy alkalmazásban csak azt az alkalmazást módosítja.
:::

Kapcsolódó: [Billentyűzet és egér](topic:keyboard) · [A BimCraft beállításai](topic:settings) · [Átállás más BIM- és rajzolóprogramokról](topic:coming-from)
