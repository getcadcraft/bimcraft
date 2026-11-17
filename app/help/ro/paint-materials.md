---
title: Aplicarea materialelor pe pereți, planșee și acoperișuri
summary: Dați elementelor un material precum cărămidă, placare, șindrilă, lemn sau țiglă, pe întregul element sau pe o singură față, salvat în IFC și afișat în imaginile randate.
keywords: vopsire, material, materiale, finisaj, finisaje, textură, cărămidă, placare, șindrilă, acoperiș, lemn, piatră, țiglă, beton, tencuială, iarbă, pietriș, sticlă, metal, față de perete, interior, exterior, finisaj de planșeu, cameră, stil de suprafață
from: fbfed676
---

{{ui:Vopsire}} din bara de instrumente deschide biblioteca de materiale peste vizualizarea 3D: cărămidă și bloc, placare, acoperiș, lemn, piatră, țiglă, beton, tencuială, teren, sticlă și metal.

## Vopsirea elementelor

1. Faceți clic pe {{ui:Vopsire}}.
2. Faceți clic pe un material.
3. Faceți clic pe elemente în vizualizarea 3D. Fiecare clic vopsește elementul pe care se face clic.

Pentru a vopsi mai multe odată, selectați-le mai întâi (clic, {{key:Ctrl}}+clic sau o [căutare](topic:find)), apoi faceți clic pe material: fiecare element selectat primește materialul dintr-o singură etapă.

Elementul arată imediat culoarea materialului în vizualizarea 3D. Textura sa apare într-o [imagine randată](topic:render). {{key:Esc}} sau {{ui:Închidere}} încheie vopsirea.

## Vopsirea unei singure fețe

Alegeți {{ui:Doar fața pe care se face clic}}, apoi faceți clic pe fața dorită: exteriorul unui perete în placare și interiorul său într-un alt finisaj, partea de sus a unui planșeu în lemn, cu partea de jos lăsată așa cum este. Restul elementului își păstrează materialul.

O față este determinată după direcțiile proprii ale elementului, deci rămâne aceeași față când mutați sau rotiți elementul.

Pentru a vopsi planșeele cameră cu cameră, dați fiecărei camere propriul planșeu ({{ui:Desenare}} › {{ui:Planșeu}} › **Această cameră**, vedeți [Camere, planșee, tavane și acoperișuri](topic:floors-and-roofs)), apoi vopsiți partea de sus a fiecărui planșeu.

## Scoaterea unui material

Faceți clic pe eșantionul cu dungi ({{ui:Fără material}}), apoi faceți clic pe element. Toate materialele de pe el, inclusiv cele de pe fețe, sunt scoase.

## În fișier

Vopsirea modifică IFC-ul (câte o etapă fiecare, {{key:Ctrl+Z}} o anulează) și rămâne IFC obișnuit:

- fiecare element vopsit primește setul de proprietăți `CadCraft_Render`, care numește materialul său, și câte o proprietate pentru fiecare față vopsită;
- corpul său primește un stil de suprafață cu culoarea materialului, astfel încât alte programe BIM să arate culoarea. În IFC4, stilul numește și textura.

Când BimCraft remodelează un perete vopsit (de pildă, mutați capătul său), peretele își păstrează materialul și culoarea, în BimCraft, în imagini și în alte programe.

:::note
Texturile sunt desenate chiar de BimCraft: funcționează offline și pot fi folosite liber pentru orice (CC0). Texturile proprii din imagini sunt încă nerealizate.
:::

## Texturi în vizualizarea 3D

Un perete vopsit cu cărămidă arată cărămizile sale, un planșeu din lemn scândurile sale, la dimensiunea lor reală, imediat ce vopseaua este aplicată. Debifați **Afișare texturi în vizualizarea 3D** din paleta {{ui:Vopsire}} pentru a vedea în schimb culori plane (un model foarte mare le dezactivează singur și spune asta). Colorarea după proprietate arată întotdeauna propriile sale culori. Texturile sunt desenate de program, deci nimic nu este descărcat, iar imaginile randate și fișierul glTF le includ oricum.
