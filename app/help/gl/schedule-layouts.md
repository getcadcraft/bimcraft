---
title: Dispor, gardar e exportar un cuadro
summary: Agrupe un cuadro, dea subtotais e totais, engada unha columna lida dunha propiedade, gárdeo como configuración no ficheiro, e expórteo como libro de cálculo (.xlsx), como texto para pegar nunha folla en liña, ou como CSV. A norma da oficina completa o que un cuadro non indica.
keywords: disposición de cuadro, agrupar por, subtotal, total, cabeceiras, norma da oficina, políticas predeterminadas, configuración, cuadro de portas por piso, resistencia ao lume, ferraxaría, xlsx, libro de cálculo, folla en liña, pegar, csv, exportar, folla de cálculo, elementos, seleccionar desde o cuadro, cifra
from: 95dfd801
---

## O que vai facer

Converta un cuadro simple no que emite a súa oficina: agrupado por piso, tipo ou cuarto, con subtotais e un total, coas columnas que precise, e co seu propio nome. Despois envíeo a unha folla de cálculo. Cada fila e cada cifra segue sabendo de que elementos proceden.

## Pasos

1. Active {{ui:Draw}} e abra **Cuadros** no panel esquerdo. Escolla un cuadro, por exemplo **Portas**.
2. Enriba da táboa, escolla **Agrupar por** (unha columna do cuadro, como Piso ou Tipo, ou **Sen agrupar**) e **Totais** (**Sen totais**, **Un total**, ou **Subtotais e un total**). **Como está configurado** deixa a escolla á configuración gardada ou á norma da oficina.
3. Para engadir unha columna lida dos elementos, escriba debaixo da táboa un nome de propiedade ou de etiqueta (por exemplo `FireRating`, `Pset_DoorCommon.FireRating` ou o nome dunha etiqueta como `Ironmongery`) e prema en **Engadir columna**. BimCraft lé primeiro os conxuntos de propiedades do propio elemento, e logo os do seu tipo. Cando ningún elemento ten aínda un valor, indícao; a columna énchese soa cando se fixe un valor.
4. Escriba un nome (por exemplo "Cuadro de portas por piso") e prema en **Gardar como configuración**. A configuración gárdase no ficheiro do edificio e únese á lista de Cuadros co seu nome. Segue cada cambio do modelo. **Retirar esta configuración** elimínaa. Ambas son un paso de Desfacer.

## Prema nunha cifra para seleccionar a súa orixe

Prema en calquera fila, ou en calquera cifra, para seleccionar no plano e en 3D os elementos que hai detrás:

- unha fila selecciona os elementos desa fila;
- un subtotal ou un total selecciona todo o que suma, e unha cabeceira de grupo selecciona o seu grupo;
- unha cifra cos seus propios elementos selecciona eses: os **Descontos** dun tipo de muro seleccionan as súas portas e xanelas, e a superficie de muro dun cuarto, os seus muros.

O mesmo funciona nun documento feito a partir do modelo: na vista previa, prema nunha cifra dun cuadro.

## Exportar

- **Descargar Excel** garda un libro .xlsx. As lonxitudes, superficies, volumes e recontos son números reais na unidade que mostra a columna (os pés e polgadas quedan como texto). Unha segunda folla, **Elementos**, lista para cada liña os GlobalId dos elementos que hai detrás.
- **Copiar para Google Sheets** pon o cuadro no portapapeis como texto separado por tabuladores. Nunha folla de Google, prema na celda A1 e pegue. **Abrir unha nova folla de Google** abre `sheets.new`, o enderezo propio de Google para unha folla baleira, na súa conta de Google. BimCraft non inicia sesión en Google e non envía nada alí: o pegado é cosa súa.
- **Descargar CSV** garda a táboa tal como está disposta na pantalla.

## A norma da oficina

Unha oficina pode dicir unha vez como se dispoñen os seus cuadros. Active o complemento **Políticas predeterminadas** ([Políticas predeterminadas](topic:default-policies)) e configure, en **Configuración › Global › Políticas predeterminadas › Disposición de cuadros (norma da oficina)**:

| Política | Que fai |
|---|---|
| Agrupar cuadros por | Piso, Tipo, Cuarto ou sen agrupar, para cada cuadro que teña esa columna |
| Totais nos cuadros | Sen totais, un total ao final, ou un subtotal debaixo de cada grupo e un total |
| Título do cuadro | Un patrón, por exemplo `{project}: {schedule}` |
| Cabeceiras de columna | Tal como se escriben, EN MAIÚSCULAS ou con maiúsculas iniciais |

A norma aplícase a cada cuadro, sexa quen sexa quen o configure: os cuadros simples do panel, unha configuración gardada, un cuadro que configura un asistente, as exportacións e os cuadros dun documento. Unha configuración que indica o seu propio agrupamento, totais ou título consérvaos; a norma completa o resto. O panel indica que partes estableceu a norma da oficina. As políticas viaxan no ficheiro de Políticas predeterminadas, xunto coas demais.

## Bo saber

- Unha configuración indica o seu cuadro de orixe e as súas columnas; non contén números. Os números lense do modelo cada vez.
- As listas que non son filas de elementos (os conxuntos de muros e a lenda de materiais) non teñen disposición nin exportación aquí.
- Un asistente pode facer todo isto por vostede: vexa [Deixe que un asistente de IA traballe co seu modelo](topic:assistants).
