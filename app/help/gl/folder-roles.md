---
title: Informe da carpeta: funcións, estados e ligazóns
summary: Cada etiqueta do informe da carpeta, o que significa e como se escolle a suxestión Comezar aquí.
keywords: informe da carpeta, funcións, estado, completo, incompleto, ilexible, ligado, fondo, inicial, central, familia, só copias de seguridade, comezar aquí, estado da ligazón
from: b35bdd10
---

## Estado das copias

Cada copia dun modelo, tanto o ficheiro principal como as copias de seguridade numeradas, recibe unha comprobación da cabeceira.

| Etiqueta | Significado |
|---|---|
| **Completo** | A cabeceira e o índice do ficheiro caben dentro del |
| **Incompleto** | O ficheiro é máis curto do que indica o seu propio índice: foi cortado mentres se copiaba, se subía ou se sincronizaba, ou é un ficheiro da nube que aínda está «só en liña» |
| **Ilexible** | O ficheiro non é un composto válido, ou non se puido ler |

Na columna **Estado**, un modelo amosa **Completo**, un «*n* incompletas» en ámbar cando polo menos unha copia está mal pero outra é correcta, ou **Incompleto** en vermello cando ningunha copia é correcta.

## Copias de seguridade

Os ficheiros chamados `Nome.0001.rvt`, `Nome.0002.rvt` e así sucesivamente son copias de seguridade numeradas de `Nome.rvt`. Agrúpanse baixo o seu modelo, da máis nova á máis antiga, en **Todas as copias …**. A ficha lese do ficheiro principal cando está completo; se non, da copia de seguridade completa máis recente («máis recente completa»).

## Funcións

Amósanse en cursiva baixo o nome dun modelo.

| Función | Significado |
|---|---|
| Ligado por *outro modelo*: fondo | Outro modelo da carpeta o liga, así que probablemente é o fondo doutra persoa, como o modelo dun consultor |
| Ficheiro inicial ou sen título | Un nome como Blank, Template, Default, Untitled ou Project1: un punto de partida, ou un ficheiro que nunca se nomeou como é debido |
| Modelo central | Un modelo central de traballo compartido. O traballo faise nunha copia local, non aquí |
| Familia (unha peza) | Un ficheiro `.rfa` ou `.rft`: un compoñente, non o proxecto |
| Só copias de seguridade | O ficheiro principal desapareceu e só quedan copias de seguridade numeradas |

## Como se escolle Comezar aquí

BimCraft aplica o razoamento que aplicaría un usuario experto:

1. Os candidatos son os ficheiros de proxecto lexibles (`.rvt`, `.rte`) que non están ligados por outro modelo e non son iniciais.
2. Os modelos centrais e os que só teñen copias de seguridade contan só cando non hai nada mellor.
3. Entre os candidatos gaña o que se gardou máis recentemente.

O cadro enumera as súas razóns e avisa cando un ficheiro que parece a opción obvia está danado, cando outros modelos son de fondo e cando a escolla é un modelo central. É unha estimación; confírmeo con quen traballou por último no proxecto.

## Estado da ligazón

| Etiqueta | Significado |
|---|---|
| **Nesta carpeta** | Atopado na ruta relativa gardada, ou ao final da ruta completa gardada dentro da carpeta |
| **Atopouse un nome igual** | Non está na súa ruta, pero hai un ficheiro co mesmo nome na carpeta. Comprobe que é o correcto |
| **Ficheiro de biblioteca** | Unha táboa de notas clave ou de códigos de montaxe. Estas veñen co programa en cada computador |
| **Non está nesta carpeta** | Non se atopou en ningún lugar da carpeta |

A columna **Ligazóns atopadas** en **Modelos** amosa cantas ligazóns dun modelo se atoparon, de entre as que se esperan na carpeta (os ficheiros de biblioteca non se contan).

## Postos á marxe

| Liña | Significado |
|---|---|
| Cartafoles de mantemento de Revit (non se len) | Cartafoles `*_backup`, `*_log` e `Revit_temp`, ademais dos cartafoles ocultos e `__MACOSX` |
| Restos de bloqueo, rexistro e copia de seguridade | Ficheiros `.dwl`, `.dwl2`, `.bak`, `.err`, `.log`, `.tmp`, `.sv$`, `.ac$`, `.lck` e `.slog` |
| Outros ficheiros | Todo o demais (os primeiros 40 aparecen co seu nome) |
