---
title: Menús, teclas e rato
summary: Escolla un estilo de menú que coincida coa forma en que xa traballa, asigne a calquera comando a súa propia tecla, mova comandos entre menús e defina o que fan a roda e cada botón do rato.
keywords: estilo de menú, menús, barra de menús, cinta, liña de comandos, atallos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, rato, roda, invertir, dirección do zoom, botón central, desprazar, orbitar, teclas de dúas letras, exportar, importar, cambio, familiar
from: a424e836
---

Os comandos de BimCraft son os mesmos independentemente de como os alcance. Un **estilo de menú** só decide onde se sitúan na pantalla, como se chaman alí e que teclas os executan, para que poida conservar os hábitos que xa ten. Escolla un en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menús, teclas e rato}}; o cambio é inmediato e este navegador o recorda.

## Os cinco estilos

| Estilo | Que obtén |
|---|---|
| {{ui:CadCraft}} | A barra de ferramentas e as teclas propias de BimCraft ({{key:W}} muro, {{key:D}} porta, {{key:N}} xanela, {{key:X}} sección, {{key:F}} axustar). O punto de partida. |
| {{ui:Deseño de vivenda}} | Unha barra de menús (Ficheiro, Editar, Compilación, Biblioteca, 3D, CAD, Ferramentas, Vista) sobre unha fila de ferramentas de construción, tal como as dispoñen os programas de deseño de vivendas. As mesmas teclas simples, máis {{key:Mod+L}} para a biblioteca, {{key:F9}} para a vista 3D, {{key:F10}} para a planta e {{key:F11}} para ambas. |
| {{ui:Cinta BIM}} | Lapelas de botóns grandes (Arquitectura, Inserir, Anotar, Modificar, Vista, Saída) cun menú Ficheiro e botóns rápidos á dereita. Teclas de dúas letras: {{key:W}} e despois {{key:A}} para un muro, {{key:D}} {{key:R}} porta, {{key:W}} {{key:N}} xanela, {{key:S}} {{key:C}} sección, {{key:Z}} {{key:F}} axustar. O botón central despraza; {{key:Shift}} e o botón central orbitan. |
| {{ui:Debuxo clásico 2D}} | Unha cinta pequena e unha liña de comandos, para quen escribe os comandos: WALL, DOOR, WINDOW, ROOF, U (desfacer), ZOOM, SECTION, PLOT, INSERT, HELP. Comece a escribir en calquera lugar e as letras van á liña de comandos; {{key:Enter}} executa, {{key:Enter}} sen nada repite o último comando, {{key:Esc}} o borra. |
| {{ui:Visor}} | Para abrir e comprobar modelos en lugar de debuxalos: os menús {{ui:Ficheiro}}, {{ui:Vista}}, {{ui:Mostrar}}, {{ui:Comprobar}} e {{ui:Editar}} sobre unha fila de ferramentas de visualización (axustar, superior, frontal, lateral, sección, medir, ocultar, illar, transparencia, mostrar todo, percorrido). As ferramentas de construción agárdanse nun menú {{ui:Modelo}} ao final. As mesmas teclas que o estilo propio de BimCraft. |

Os menús e as cintas aparecen cando se abre un modelo ou se inicia un edificio novo; antes, o panel da esquerda abre ficheiros e inicia edificios.

:::tip
Unha tecla que pertence á disposición propia de BimCraft pero non ao estilo escollido non fai nada, e a barra de estado indica onde foi parar o seu comando («En Cinta BIM, Sección é SC»). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as flechas conservan sempre o seu significado, e unha ferramenta en funcionamento conserva as súas teclas: {{key:R}} e {{key:Tab}} mentres coloca, {{key:W}} {{key:A}} {{key:S}} {{key:D}} mentres percorre, {{key:H}} coas ferramentas de porta e xanela, números mentres escribe unha lonxitude.
:::

## Personalícello

1. Escolla o estilo máis próximo ao que quere e prema en {{ui:Personalizar…}}.
2. En {{ui:Teclas e menús}}, busque un comando (a caixa de busca axuda). Prema {{ui:Engadir unha chave}} e prema a tecla, ou dúas teclas seguidas para unha tecla de dúas letras. Prema unha tecla para quitala.
3. Con unha barra de menús ou unha cinta, {{ui:Onde está}} move o comando a outro menú ou panel, ou a {{ui:Só teclas}}.
4. En {{ui:Rato}}, defina a roda, os botóns que desprazan a planta e o que fai cada botón nas vistas 3D.
5. Dálle un nome e prema {{ui:Gardar}}.

Gardar un estilo integrado crea unha copia propia («{{ui:Meu deseño de vivenda}}»); o integrado nunca cambia. Unha tecla asignada a dous comandos, ou que se executaría antes de poder escribir unha tecla de dúas letras, móstrase en vermello e hai que corrixila antes de gardar.

## Rato

- **Roda do rato**: {{ui:Desprazar cara arriba aumenta o zoom}} (o inicio) ou {{ui:Desprazar cara arriba reduce o zoom}}, e a velocidade. Un pellizco no trackpad sempre fai zoom segundo se movan os dedos.
- **Desprazar a planta e os debuxos con**: calquera dos botóns esquerdo, central e dereito. {{key:Space}} e arrastrar tamén desprazan; o arrastre co botón esquerdo só despraza onde un clic non escollería nin debuxaría.
- **Arrastrar nas vistas 3D**: {{ui:Propio de cada vista}} conserva os botóns de BimCraft (o esquerdo orbita, o dereito despraza). Ou asigne a cada botón orbitar, desprazar, zoom ou nada; {{key:Shift}} co botón intercambia orbitar e desprazar. Un clic sen arrastre aínda escolle.

## Leve o estilo consigo

{{ui:Exportar}} garda o estilo en uso nun ficheiro pequeno `.ccinput.json`; {{ui:Importar…}} engade un, desde outro ordenador ou dun compañeiro. Un ficheiro importado só pode apuntar aos comandos propios de BimCraft: o demais (un comando que esta versión non ten, unha tecla que aquí non funciona) déixase fóra e cóntase na barra de estado. {{ui:Eliminar este estilo}} elimina un dos seus.

:::note
Estes axustes quedan neste navegador. {{ui:Usar este estilo en todas as aplicacións}} baixo as tarxetas de estilo fai que cada aplicación se abra co estilo correspondente (a súa propia barra de ferramentas, unha barra de menús, unha cinta ou {{ui:Debuxo clásico 2D}}; {{ui:Visor}} é só de BimCraft e non ten correspondencia noutros sitios), cos cambios que fixo en cada aplicación; unha aplicación sen estilo correspondente conserva o seu. Escoller outro estilo nunha aplicación cambia só esa aplicación.
:::

Relacionado: [Teclado e rato](topic:keyboard) · [Configuración de BimCraft](topic:settings) · [Vir doutros programas BIM e de debuxo](topic:coming-from)
