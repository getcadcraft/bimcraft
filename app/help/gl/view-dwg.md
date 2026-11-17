---
title: Ver un debuxo DWG ou DXF
summary: Abre un DWG ou DXF, móvete polo espazo do modelo e as follas, le as coordenadas e ve o que aínda non está debuxado.
keywords: bloques dinámicos, estados de visibilidade, dwg, dxf, cad, debuxo, 2d, ver, visor, desprazar, zoom, espazo do modelo, espazo papel, disposición, coordenadas, abrir dwg
from: 4db3122a
---

## Que farás

Abrir un debuxo CAD, velo en 3D ou 2D, moverte por el, cambiar entre o espazo do modelo e as súas follas, e ler as coordenadas. BimCraft mostra debuxos DWG e DXF; non os edita nin os garda. Para cambiar un, fai clic en {{ui:Editar en CadCraft}} e o debuxo ábrese na aplicación de debuxo CadCraft nunha nova lapela.

## Pasos

1. Fai clic en {{ui:Escoller un ficheiro}}, ou arrastra o debuxo á páxina.
2. Escolle un ficheiro `.dwg` ou `.dxf`.
3. Agarda mentres a liña de estado di "Lendo o debuxo…". Os debuxos grandes tardan uns segundos. Despois di canto tardou a lectura, "renderizando…" mentres se debuxa a primeira imaxe, e canto tardou iso.
4. O debuxo ábrese en 3D, a forma máis rápida de mostrar un debuxo grande (consulta [Ver un debuxo DWG ou DXF en 3D](topic:dwg-in-3d)). Fai clic en {{ui:Modelo}} para a vista 2D plana. Para abrir sempre os debuxos en 2D, configura {{ui:Configuración}} › {{ui:BimCraft}} › **Os debuxos ábrense en** como {{ui:Modelo (2D)}}. Un debuxo sen nada no espazo do modelo, ou un navegador que non pode mostrar 3D, ábrese en 2D.
5. Mira as lapelas sobre o debuxo: primeiro {{ui:Modelo}}, e despois unha lapela por folla, na orde propia do debuxo.
6. Fai clic nunha lapela de folla para ver esa folla: o papel, co modelo mostrado a través das súas vistas.
7. Fai clic en {{ui:Modelo}} para volver ao espazo do modelo.
8. Move o punteiro sobre o debuxo e le as coordenadas X e Y na esquina.

## Que deberías ver

- O debuxo, axustado á xanela. As cores seguen o debuxo; as liñas brancas (cor 7) debúxanse coa tinta do tema, e as cores pálidas escurécense no tema claro para que sigan sendo lexibles.
- O panel {{ui:Debuxo}} á esquerda: ficheiro, tamaño, formato (por exemplo "AutoCAD 2018 (AC1032)"), unidades, número de entidades e capas, o número de follas, e debuxos ligados e equipos cando os hai.
- A lista {{ui:Capas}} á esquerda.
- À dereita: como desprazarse, debuxos e imaxes ligados, e **Aínda sen debuxar**.

## Desprazarse

:::mouse
| Para | Fai isto |
|---|---|
| Desprazar | Arrastra con calquera botón do rato |
| Zoom | Move a roda; o punto baixo o punteiro queda no seu sitio |
| Axustar | Fai dobre clic, preme {{key:F}}, ou fai clic en {{ui:Axustar}} |
:::

:::mac mouse
Nun trackpad, desprazar con dous dedos fai **zoom**, non desprazamento. O pellizco tamén fai zoom. Para desprazarte, fai clic e arrastra.
:::

:::touch
Arrastra cun dedo para desprazarte. O zoom por pellizco aínda non está feito para os debuxos: toca {{ui:Axustar}} para ver a folla completa, e usa un rato ou trackpad para ampliar.
:::

## Bloques dinámicos

Un bloque dinámico debúxase como o mostra o debuxo: cada bloque colocado no estado de visibilidade co que se gardou o debuxo ("Planta" ou "Alzado", "Cuba simple" ou "Cuba dobre"). À dereita, **Bloques dinámicos** lista cada un colocado no espazo do modelo: cantos están colocados, os estados que mostran e cada estado que ten o bloque. En {{ui:3D}}, fai clic nun bloque colocado para ver **Bloque dinámico**, **Estado mostrado** e **Outros estados** en Propiedades. BimCraft non cambia os estados.

## Aínda sen debuxar

Algúns tipos de obxectos non se debuxan nesta versión. Contanse baixo **Aínda sen debuxar** á dereita ("Estas partes do debuxo sáltanse por agora, non se adiviñan."), para que saibas que falta algo. Debúxanse liñas, polilíneas, arcos, círculos, elipses, splines, tramas e recheos sólidos, texto e texto de varias liñas, bloques con atributos, cotas, líderes e multilíderes, táboas, imaxes e vistas. As caras 3D, as mallas poliface e as mallas de polígonos debúxanse como as súas arestas vistas desde arriba; cambia a {{ui:3D}} para velas como superficies.

Un DXF binario non se abre: BimCraft di iso. Gárdao de novo como DXF ASCII, ou como DWG, desde o programa que o creou.

## Erros comúns

- **O debuxo parece baleiro.** Algunhas capas poden estar apagadas ou conxeladas no propio debuxo; empezan sen marcar en {{ui:Capas}}. Fai clic en {{ui:Todas activas}}. Se o estado di "*nome* é un debuxo baleiro: non contén liñas, texto nin bloques.", non hai nada nel.
- **Unha folla mostra un marco baleiro.** A folla pode depender de debuxos ligados. Consulta [Atopar debuxos e imaxes ligadas](topic:dwg-linked-files).
- **O texto parece un pouco distinto.** BimCraft debuxa o texto cunha fonte sans-serif estreita, non coas fontes propias do debuxo, así que o texto pode ser un pouco máis ancho ou máis estreito có do programa que o creou.
- **"*nome* non se puido ler. Pode estar danado, ou gardado nun formato que o lector aínda non trata."** O paréntese ao final nomea o código de formato do ficheiro. Gárdao desde o programa que o creou como DWG máis antigo ou como DXF, e proba de novo.
- **Esperar medir, debuxar ou editar.** BimCraft só ve debuxos. Fai clic en {{ui:Editar en CadCraft}} para abrir o mesmo ficheiro na aplicación de debuxo CadCraft, que o edita e garda unha copia como DWG ou DXF. O ficheiro orixinal non cambia, e os debuxos ligados quedan en BimCraft. O botón só aparece onde CadCraft está aberto para ti.

## Seguinte

- [Ver un debuxo DWG ou DXF en 3D](topic:dwg-in-3d)
- [Traballar con capas e follas](topic:dwg-layers-sheets)
- [Revisar un debuxo en vista de impresión](topic:print-view)
