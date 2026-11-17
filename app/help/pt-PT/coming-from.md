---
title: Vindo de outros programas BIM e de desenho
summary: Como os hábitos da criação de modelos BIM em computador e da visualização de DWG correspondem ao BimCraft, e as diferenças que costumam surpreender.
keywords: migração, mudança, familiar, bim de secretária, família, parâmetros, navegador de projeto, paleta de propriedades, cubo de vistas, xref, gestor de camadas, diferenças, comparar
from: 2de629af
---

Quem conhece o Revit vai achar a maior parte do BimCraft familiar nas palavras e estranha no âmbito. A diferença mais importante: **esta versão lê e inspeciona modelos e edita dados IFC. Ainda não cria modelos como o Revit.** Não é possível desenhar paredes, colocar famílias, criar vistas ou folhas, nem guardar um ficheiro de projeto. O que é possível fazer é abrir quase qualquer ficheiro de edifício em qualquer computador com um navegador, ver o que contém, verificar uma pasta de projeto inteira e corrigir os dados num modelo IFC.

## Hábitos correspondentes

| Se costuma | No BimCraft |
|---|---|
| Abrir um `.rvt` no Revit para ver o modelo | O BimCraft abre o `.rvt` como uma ficha de ficheiro: versão, informação do projeto, ligações, pré-visualização. Para o modelo 3D, exporte IFC e abra esse. [Ler um ficheiro de projeto ou de família](topic:read-rvt-file) |
| Verificar em que versão um ficheiro foi guardado antes de o abrir | A ficha diz «guardado no Revit …» no topo, sem atualizar nem tocar no ficheiro |
| O navegador de projeto | Não há navegador de vistas e folhas. Um modelo IFC tem as listas {{ui:Pisos}} e {{ui:Elementos}}; um desenho tem separadores de folha |
| A paleta de propriedades | O painel {{ui:Propriedades}} à direita, para o elemento que clicou. Conjuntos de propriedades IFC em vez de grupos de parâmetros |
| Parâmetros de ocorrência e de tipo | Conjuntos de propriedades de ocorrência, e conjuntos marcados «(tipo)». Uma alteração de tipo aplica-se a todos os elementos do tipo, como no Revit. [Alterar uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance) |
| Editar tipo | Sem caixa de diálogo: clique num valor de um conjunto «(tipo)» e escreva |
| Selecionar muitos elementos, filtros, Selecionar todas as ocorrências | Um elemento de cada vez. Ainda não implementado |
| O cubo de vistas e a roda de navegação | Um cubo de vistas no canto inferior direito, quatro botões ({{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lado}}) e órbita livre. Não há roda de navegação |
| Shift e arrastar com o botão do meio para orbitar, arrastar com o botão do meio para deslocar | Arrastar com o botão esquerdo orbita, arrastar com o botão direito (ou {{key:Shift}} e arrastar) desloca, a roda aproxima. O estilo de menu {{ui:Friso BIM}} passa a deslocar com o botão do meio, e {{key:Shift}} com o botão do meio para orbitar. [Menus, teclas e rato](topic:menus-keys-and-mouse) |
| Plantas, cortes, caixas de corte | Um plano de {{ui:Corte}} de cada vez ({{key:X}}); sem caixa de corte nem plantas 2D. [Cortar um modelo IFC com um plano de corte](topic:section-plane) |
| Ocultar na vista, isolar, visibilidade e gráficos | {{ui:Pisos}} ligados e desligados, {{ui:Espaços}} e {{ui:Arestas}}. Ainda não há ocultação por elemento |
| Compartimentos | Espaços IFC, ocultos ao início. Clique em {{ui:Espaços}} |
| Guardar, Guardar como, sincronizar com o central | {{ui:Guardar como IFC}} transfere um novo ficheiro IFC. O original nunca muda. Não há central nem trabalho partilhado |
| Anular com {{key:Mod+Z}} | Funciona nas edições IFC até guardar. [Alterar propriedades IFC e guardar uma cópia editada](topic:edit-ifc-properties) |
| Gerir ligações | Abra a pasta do projeto: cada ligação é verificada e marcada como **Nesta pasta**, **Encontrado com o mesmo nome**, **Ficheiro da biblioteca** ou **Não está nesta pasta**. [Abrir uma pasta de projeto inteira](topic:open-project-folder) |
| Auditar, ou abrir um ficheiro para ver se está danificado | O relatório da pasta verifica cada cópia e cada cópia de segurança quanto a estar cortada, em segundos. [Verificar uma pasta quanto a cópias danificadas](topic:check-folder-health) |
| Escolher o ficheiro certo numa pasta desarrumada | A caixa {{ui:Comece aqui}} sugere um, com as razões |

Se abre sobretudo modelos para os verificar, como num programa de verificação ou visualização de IFC, escolha o estilo de menu {{ui:Visualizador}}: as ferramentas de visualização e verificação vêm primeiro, e as ferramentas de construção ficam à espera num único menu. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse).

## Ao vir da visualização de ficheiros DWG

Se abre DWG no AutoCAD ou num visualizador de DWG:

| Se costuma | No BimCraft |
|---|---|
| Separadores de modelo e de layout em baixo | Separadores acima do desenho: {{ui:Modelo}} e um por folha |
| ZOOM Extensões, duplo clique na roda | Duplo clique, {{key:F}} ou {{ui:Ajustar}} |
| Deslocar com o botão do meio | Arrastar com qualquer botão |
| O gestor de camadas | A lista {{ui:Camadas}}: marque para mostrar, desmarque para ocultar, {{ui:Todas ligadas}} e {{ui:Todas desligadas}} |
| O gestor de referências externas (xref) | **Desenhos ligados** à direita, com **Mostrado** ou **Não encontrado**, e {{ui:Adicionar desenhos referenciados…}} |
| Pré-visualização de impressão | {{ui:Vista de impressão}} ou {{key:P}}: preto sobre branco com espessuras de linha. Não imprime |
| Extração de dados de atributos de blocos | O separador {{ui:Equipamento}} para desenhos de restauração com etiquetas, com {{ui:Transferir CSV}} |
| Medir, desenhar, editar, guardar como | Não existe no BimCraft. A aplicação de desenho CadCraft desenha e edita |

## Diferenças que costumam surpreender

- **Funciona no navegador, e o navegador é cuidadoso com os seus ficheiros.** O BimCraft só consegue ler ficheiros e pastas que lhe entregue, escolhendo-os ou arrastando-os. Não consegue abrir um ficheiro por si, nem gravar por cima de um. Cada gravação é uma transferência.
- **Nada é carregado para a Internet.** A palavra «carregar» em algumas caixas de pastas dos navegadores é a terminologia do próprio navegador. Os ficheiros ficam no seu computador.
- **IFC é o formato dos modelos.** Um ficheiro de projeto abre como ficha porque o seu conteúdo 3D não é documentado. Trate o IFC como a forma de os modelos entrarem no BimCraft.
- **As edições são feitas em cópia.** Alterar o valor de um elemento nunca altera os vizinhos, mesmo quando o exportador partilhou esse valor entre eles. As propriedades de tipo são a exceção intencional.
- **Sem projeto, sem vistas.** O BimCraft mostra um ficheiro de cada vez e não guarda nada sobre ele depois de fechar o separador, exceto os nomes das pastas recentes no Chrome e no Edge.
- **Teclas do Mac.** Onde os atalhos do Revit no Windows usam Ctrl, os atalhos do BimCraft usam {{key:Mod}}: Command num Mac.
- **Os hábitos do rato.** A órbita é feita com o botão esquerdo, e não com Shift e o botão do meio, a menos que escolha o estilo de menu {{ui:Friso BIM}} ou configure os botões em [Menus, teclas e rato](topic:menus-keys-and-mouse).

Ver [O que ainda não está implementado](topic:not-built-yet) para saber o que usar em alternativa hoje.
