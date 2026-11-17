---
title: Deixar que un asistente de IA traballe co seu modelo
summary: Active os asistentes en Configuración para que un asistente do seu ordenador poida atopar elementos, ler as súas propiedades, illalos na vista e debuxar muros, portas, xanelas, pisos, niveis e cuadrículas, a través de CadCraft Studio. Desactivados ata que os active.
keywords: ia, asistente, mcp, script, automatización, studio, atopar elementos, illar, propiedades, permisos, desconectar, actividade, debuxar muros, engadir portas, engadir xanelas, niveis, cuadrículas, pisos, desfacer, gardar, liña de comandos, cli, sen xanela, usar con asistentes de IA
from: c5ee595b
---

## O que vai aprender

Como deixar que un asistente de IA (calquera asistente que fale MCP) mire o modelo IFC que ten aberto e debuxe nel, o que pode e non pode facer, e como detelo.

## O que pode facer un asistente en BimCraft

| Solicita | Que pasa | Necesita |
|---|---|---|
| Atopar elementos | Obtén unha lista de elementos por clase, piso, nome ou valor de propiedade, como o fai **Atopar** | Ler |
| Ler propiedades | Obtén os atributos dun elemento, o seu tipo, os conxuntos de propiedades e as cantidades, tal como os mostra **Propiedades** | Ler |
| Describir o modelo, listar muros | Obtén os niveis, muros, portas, xanelas, cuartos, pisos, cuadrículas e columnas, e os extremos, tipo e altura de cada muro | Ler |
| Illar, ver a través, ocultar ou mostrar | A vista 3D cambia como se usase o menú {{ui:Mostrar}} | Cambiar a vista e debuxar |
| Debuxar muros, portas, xanelas, pisos, niveis ou liñas de cuadrícula | O modelo cambia como se usasen as ferramentas de {{ui:Debuxar}}: os muros únense, e os cuartos, pisos e cubertas seguen | Cambiar a vista e debuxar |
| Cambiar un nome ou un valor de propiedade | O Nome, a Descrición, o Tipo de obxecto ou a Etiqueta dun elemento, ou o valor dunha propiedade. Un valor que comparte con outros elementos cópiase para el primeiro; un valor do seu tipo cambia só cando o asistente o indica, porque cada elemento dese tipo o segue | Cambiar a vista e debuxar |
| Mover, eliminar, cambiar muros, portas e xanelas | Os elementos móvense ou elimínanse co que os aloxa; os muros debuxados coas ferramentas de {{ui:Debuxar}} cambian polos seus extremos ou tipo, as portas e xanelas polo seu lugar, tamaño ou tipo, e os cuartos e unións seguen | Cambiar a vista e debuxar |
| Configurar, dispor e ler un cadro | «Un cadro de portas por piso, con resistencia ao lume e ferraxería»: o asistente nomea o cadro, as súas columnas (unha propiedade ou etiqueta vira unha columna) e a súa agrupación; BimCraft énchea a partir do modelo e dispóno, tomando do estándar da oficina o que o asistente non indicou. A configuración únese á súa lista de {{ui:Cuadros}}. Cada liña que recibe nomea os seus elementos, así que pode seleccionalos | Ler para ler; Cambiar a vista e debuxar para gardar unha configuración |
| Exportar un cadro | CSV, Excel ou texto separado por tabulacións para pegar en Google Sheets (non se envía nada a Google) | Exportar |
| Ler e fixar os acabados dos cuartos | Os tipos de acabado, o acabado do chan, da parede e do teito de cada cuarto, as zonas; as superficies, os recontos de azulexos e os volumes de substrato saen despois dos cadros de acabados | Ler; Cambiar a vista e debuxar para fixalos |
| Seleccionar elementos, desfacer os seus propios pasos | Os elementos escóllense na vista; o seu último paso retírase | Cambiar a vista e debuxar |
| Gardar | Un novo ficheiro IFC con todos os cambios, como o fai {{ui:Gardar como IFC}} (o orixinal non se cambia nunca) | Gardar |
| Exportar USD | Os modelos abertos como OpenUSD (.usda, .usdc ou .usdz), como o escribe {{ui:USD}} na barra de ferramentas | Exportar |
| Renderizar unha imaxe, executar a cola de render | Unha imaxe da vista 3D, como a fai o diálogo {{ui:Render}} coas súas configuracións de render, salvo que pida outras; ou imaxes de alta calidade engadidas á cola do diálogo e renderizadas unha tras outra (a cola necesita WebGPU). Non cambia nada no modelo ([Renderizar unha imaxe](topic:render)) | Exportar |

Cada cambio que fai un asistente é un paso en **Cambios**, co nome «Asistente: …» (por exemplo, «Asistente: engadir 4 muros»), así que {{key:Mod+Z}} retira toda a súa acción, e vostede ve de quen é o paso. Na xanela non pode abrir ficheiros: vostede abre o modelo; traballa co que está aberto.

## Activalo

Os asistentes chegan a BimCraft a través de CadCraft Studio no seu ordenador; o navegador simple non ten acceso.

1. Abra {{ui:Configuración}} e escolla a lapela **BimCraft**.
2. Baixo **Asistentes**, marque **Permitir que os asistentes de IA e os scripts usen BimCraft**.
3. **Ler** xa está marcado para vostede. Marque tamén **Cambiar a vista e debuxar** se o asistente pode illar e ocultar elementos e debuxar, e **Gardar** se pode gardar o modelo como un ficheiro novo.
4. Conecte o asistente en Studio (Studio mostra o enderezo e os axustes que hai que pegar nel).

## Mentres hai un asistente conectado

Unha nota arriba do panel dereito indica que asistente está conectado e o que pode facer. Prema en {{ui:Desconectar}} para terminar a súa sesión de inmediato; terá que volver conectarse para seguir.

**Actividade**, baixo **Asistentes** en Configuración, lista cada chamada que fixo o asistente, a máis recente primeiro, e se funcionou.

:::tip
Pregunte con palabras simples, por exemplo «illar os muros exteriores do nivel 1», «que portas non teñen resistencia ao lume?» ou «debuxar un cuarto de 6 por 4 metros no nivel 1 cunha porta no muro sur». O asistente atopa os elementos e mostrábeos na súa vista, ou debúxaos.
:::

## Sen xanela: scripts e liña de comandos

As mesmas ferramentas de debuxo funcionan con ficheiros IFC en cartafoles que vostede nomee, sen ningunha xanela aberta: o servidor MCP e a liña de comandos de CadCraft poden iniciar un edificio novo ou abrir un ficheiro IFC, describilo, engadir muros, portas, xanelas, pisos, niveis e cuadrículas, desfacer e gardalo como un ficheiro `.ifc` novo. Vostede decide que cartafoles pode usar e se pode cambiar ou gardar algo.

## Desactivalo

Desmarque **Permitir que os asistentes de IA e os scripts usen BimCraft**. Todos os asistentes desconectanse de inmediato, e o axuste consérvase para a próxima vez.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos resoltos, cada un coas ferramentas que chama.
- [Atopar elementos por clase, nome ou propiedade](topic:find)
- [Ocultar, illar e ver a través de elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
