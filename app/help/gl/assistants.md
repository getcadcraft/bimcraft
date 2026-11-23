---
title: Permitir que un asistente de IA traballe co seu modelo
summary: Active os asistentes en Configuración para que un asistente do seu ordenador poida atopar elementos, ler as súas propiedades, illalos na vista e debuxar muros, portas, xanelas, pisos, niveis e reixas, a través de CadCraft Studio. Desactivados ata que os active.
keywords: ia, asistente, mcp, script, automatización, studio, atopar elementos, illar, propiedades, permisos, desconectar, actividade, debuxar muros, engadir portas, engadir xanelas, niveis, reixas, pisos, desfacer, gardar, liña de comandos, cli, sen xanela, usar con asistentes de IA
from: 66d72742
---

## O que aprenderá

Como permitir que un asistente de IA (calquera asistente que fale MCP) mire o modelo IFC que ten aberto e debuxe nel, o que pode e non pode facer, e como detelo.

## O que pode facer un asistente en BimCraft

| Pide que | Que pasa | Precisa |
|---|---|---|
| Atopar elementos | Obtén unha lista de elementos por clase, piso, nome ou valor de propiedade, como o fai **Atopar** | Ler |
| Ler propiedades | Obtén os atributos dun elemento, o tipo, os conxuntos de propiedades e as cantidades, tal como os mostra **Propiedades** | Ler |
| Describir o modelo, listar os muros | Obtén os niveis, muros, portas, xanelas, cuartos, pisos, reixas e piares, e os extremos, o tipo e a altura de cada muro | Ler |
| Illar, ver a través, ocultar ou mostrar | A vista 3D cambia como se usase o menú {{ui:Mostrar}} | Cambiar a vista e debuxar |
| Debuxar muros, portas, xanelas, pisos, niveis ou liñas de reixa | O modelo cambia como se usasen as ferramentas de {{ui:Debuxar}}: os muros únense, e os cuartos, pisos e cubertas seguen o cambio | Cambiar a vista e debuxar |
| Cambiar un nome ou un valor de propiedade | Un nome, descrición, tipo de obxecto ou etiqueta dun elemento, ou un valor de propiedade dun elemento. Un valor que comparte con outros elementos cópiase primeiro para el; un valor do seu tipo cambia só cando o asistente o indica, porque todos os elementos dese tipo o seguen | Cambiar a vista e debuxar |
| Mover, eliminar e cambiar muros, portas e xanelas | Os elementos móvense ou elimínanse cos que aloxan; os muros debuxados coas ferramentas de {{ui:Debuxar}} cambian polos seus extremos ou tipo, as portas e xanelas polo seu lugar, tamaño ou tipo, e os cuartos e as unións seguen o cambio | Cambiar a vista e debuxar |
| Configurar, dispor e ler un cuadro | «Un cuadro de portas por piso, con clasificación de incendio e ferraxaría»: o asistente nomea o cuadro, as súas columnas (unha propiedade ou etiqueta convértese nunha columna) e a súa agrupación; BimCraft énchea desde o modelo e dispóna, tomando do estándar da oficina o que o asistente non indicou. A configuración únese á súa lista de Cuadros. Cada liña que devolve nomea os seus elementos, para que os poida seleccionar | Ler para consultar; Cambiar a vista e debuxar para gardar a configuración |
| Exportar un cuadro | CSV, Excel ou texto separado por tabulacións para pegar en Google Sheets (non se envía nada a Google) | Exportar |
| Ler e definir os acabados dos cuartos | Os tipos de acabado, o chan, a parede e o teito de cada cuarto, e as zonas; as superficies, os números de azulexos e os volumes de substrato saen logo dos cuadros de acabados | Ler; Cambiar a vista e debuxar para definir |
| Seleccionar elementos, desfacer os seus propios pasos | Os elementos escóllense na vista; quítase o seu último paso | Cambiar a vista e debuxar |
| Gardar | Un novo ficheiro IFC con todos os cambios, como o fai {{ui:Gardar como IFC}} (o orixinal non se cambia nunca) | Gardar |
| Exportar USD | Os modelos abertos como OpenUSD (.usda, .usdc ou .usdz), como o escribe {{ui:USD}} na barra de ferramentas | Exportar |
| Renderizar unha imaxe, executar a cola de renderizado | Unha imaxe da vista 3D, como a fai o diálogo {{ui:Render}} coa súa configuración de Render, salvo que pida outras; ou imaxes de alta calidade engadidas á cola do diálogo e renderizadas unha tras outra (a cola precisa WebGPU). Nada do modelo cambia ([Renderizar unha imaxe](topic:render)) | Exportar |

Cada cambio que fai un asistente é un paso en **Cambios**, co nome «Asistente: …» (por exemplo, «Asistente: engadir 4 muros»), así que {{key:Mod+Z}} desfai toda a súa acción, e pode ver de quen era o paso. Na ventá non pode abrir ficheiros: vostede abre o modelo, e el traballa co que está aberto.

## Activalo

Os asistentes chegan a BimCraft a través de CadCraft Studio no seu ordenador; o navegador simple non ten forma de entrar.

1. Abra {{ui:Configuración}} e escolla a lapela **BimCraft**.
2. En **Asistentes**, marque **Permitir que os asistentes de IA e os scripts usen BimCraft**.
3. **Ler** xa está marcado para vostede. Marque tamén **Cambiar a vista e debuxar** se o asistente pode illar e ocultar elementos e debuxar, e **Gardar** se pode gardar o modelo como novo ficheiro.
4. Conecte o asistente en Studio (Studio mostra o enderezo e a configuración que hai que pegar nel).

## Mentres un asistente está conectado

Unha nota na parte superior do panel dereito indica que asistente está conectado e o que pode facer. Prema {{ui:Desconectar}} para terminar a súa sesión de inmediato; terá que volver conectarse para seguir.

**Actividade**, baixo **Asistentes** en Configuración, lista cada chamada que fixo o asistente, a máis recente primeiro, con indicación de se funcionou.

:::tip
Pregunte con palabras simples, por exemplo «illar os muros exteriores do Nivel 1», «que portas non teñen clasificación de incendio?» ou «debuxar un cuarto de 6 por 4 metros no Nivel 1 cunha porta no muro sur». O asistente atopa os elementos e mostrábeos na súa vista, ou debúxaos.
:::

## Sen ventá: scripts e liña de comandos

As mesmas ferramentas de debuxo funcionan con ficheiros IFC nos cartafoles que vostede nomee, sen ventá aberta: o servidor MCP de CadCraft e a liña de comandos poden iniciar un novo edificio ou abrir un ficheiro IFC, describilo, engadir muros, portas, xanelas, pisos, niveis e reixas, desfacer e gardalo como novo ficheiro `.ifc`. Catro ferramentas máis axudan aos scripts: `ifc_batch` executa ata 200 pasos de edición como un só (todo ou nada: un desfacer leva todo o lote atrás, e un paso rexeitado desfai o resto e nomea o paso); `ifc_describe` lista os niveis e cada muro cos seus portas e xanelas; `ifc_render_png` escribe unha imaxe de comprobación con sombreado plano do modelo (sen materiais, texturas nin sombras) sen ventá; `usd_export` escribe `.usda`, `.usdc` ou `.usdz`. Na liña de comandos, `cadcraft bim script.json --from model.ifc -o out.ifc` executa un script de pasos, e `--usd`, `--png` e `--plan` escriben un ficheiro USD, unha imaxe ou un plano na mesma execución. Vostede decide que cartafoles pode usar e se pode cambiar ou gardar algo.

## Desactivalo

Desmarque **Permitir que os asistentes de IA e os scripts usen BimCraft**. Todos os asistentes se desconectan de inmediato, e a configuración consérvase para a próxima vez.

## Ver tamén

- [Receitas para asistentes de IA](common:assistants-recipes): exemplos traballados, cada un cos grupos de ferramentas que chama.
- [Atopar elementos por clase, nome ou propiedade](topic:find)
- [Ocultar, illar e ver a través dos elementos](topic:hide-and-isolate)
- [Configuración de BimCraft](topic:settings)
