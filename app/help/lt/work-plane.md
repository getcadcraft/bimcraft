---
title: Darbo plokštuma: nustatyti, rodyti, žiūrėti tiesiai į ją
summary: Darbo plokštuma – tai plokštuma, kurią naudoja modelio linijos, modelio tekstas ir Darbo plokštumos žiūryklė. Nustatykite ją lygiui, paviršiui, pavadintai atskaitos plokštumai ar linijai; rodykite ją vaizduose; atidarykite žiūryklę, kad piešti ant vertikaliai stovinčios plokštumos.
keywords: darbo plokštuma, nustatyti darbo plokštumą, rodyti darbo plokštumą, atskaitos plokštuma, darbo plokštumos žiūryklė, pavadinta plokštuma, paviršius, lygis, vertikali plokštuma, piešti ant sienos, fasado brėžinys, lygiavimas, prisegimas, atskaitos plokštuma
from: 8aceee1d
---

## Ką darysite

Pasirinkite plokštumą, ant kurios piešiate, sužinokite, kur ji yra, ir piešiate ant vertikaliai stovinčios plokštumos.

## Žingsniai

1. Įjunkite **Braižymas** ir atidarykite meniu **Statyba** (juostinio maketo atveju: skirtukas Architektūra, Darbo plokštuma).
2. Pasirinkite **Nustatyti darbo plokštumą**. Tada atlikite vieną iš šių veiksmų:
   - pasirinkite lygį lauke **Nustatyti į**;
   - pasirinkite pavadintą atskaitos plokštumą šalia esančiame sąraše;
   - spustelėkite liniją plane: sieną, tinklelio liniją, atskaitos plokštumą, modelio liniją ar uždangos sistemą. Darbo plokštuma tampa vertikalia plokštuma per tą liniją;
   - spustelėkite plokščią paviršių 3D vaizde. Darbo plokštuma guli ant to paviršiaus.
3. Pasirinkite **Rodyti darbo plokštumą**, kad ją pamatytumėte: 3D vaizde – nuspalvintas lapas su metrų tinkleliu, plane – punktyrinis kontūras ar linija, o aukščio ir pjūvio skydelyje – punktyrinis kontūras. Pasirinkite dar kartą, kad paslėptumėte.
4. Pasirinkite **Darbo plokštumos žiūryklė**, kad žiūrėtumėte tiesiai į plokštumą. Juodos linijos – modelis, kurį plokštuma pjauna. Jos įrankiais nubrėžkite modelio liniją, modelio tekstą ar atskaitos plokštumą ant plokštumos. **Žiūrėti į ją 3D** pasuka 3D vaizdą į plokštumą.

## Atskaitos plokštumos

Atskaitos plokštuma – tai pavadinta plokštuma, kurią braižote kaip liniją.

1. Pasirinkite **Atskaitos plokštuma**. Jei norite, įrašykite pavadinimą jos eilutėje (kitu atveju jai suteikiamas automatinis) ir aukštį.
2. Spustelėkite, kur ji prasideda ir kur baigiasi. Plane tai sukuria vertikalią plokštumą. Darbo plokštumos žiūryklėje ji sukuria plokštumą, kuri stovi statmenai darbo plokštumai.
3. Ji rodoma kaip punktyrinė žalia linija su pavadinimu plane, punktyrinis kontūras 3D vaizde bei aukščio ir pjūvio skydelyje.
4. Pasirinkite ją, kad pervadintumėte, pakeistumėte ilgį, aukštį ir pagrindą, arba spustelėkite **Naudoti kaip darbo plokštumą**.

Dviejų atskaitos plokštumų negali būti to paties pavadinimo, nes pagal pavadinimą jas pasirenkate.

## Verta žinoti

- Modelis be nustatytos darbo plokštumos veikia savo žemiausiame lygyje.
- Darbo plokštuma įrašoma į failą. Jos rodymas ar slėpimas įsimenamas šioje naršyklėje, o ne faile.
- Jei darbo plokštuma seka atskaitos plokštumą ir jūs tą plokštumą perkeliate, darbo plokštuma juda kartu.
- Vertikalioje darbo plokštumoje Modelio linijos ir Modelio teksto įrankiai atveria žiūryklę, nes plane negalima nurodyti aukščio.
- Braižymo įrankiai prisega prie atskaitos plokštumų galų, nubrėžtų plane, taip pat kaip prie kitų linijų galų žiūryklėje.

## IFC faile

- Darbo plokštuma yra savybių rinkinys (CadCraft_WorkPlane) projekte.
- Atskaitos plokštuma yra IfcAnnotation su objekto tipu ReferencePlane ir jos pavadinimu. Jos forma – uždarytas plokštumos kontūras, todėl kita programa parodo, kur ji yra. Jos rinkinys CadCraft_ReferencePlane saugo pradžią, kryptį, normalę ir apimtį. IFC neturi atskaitos plokštumos klasės; anotacija nelaikoma pastato elementu ir nežymi patalpų ribų.
