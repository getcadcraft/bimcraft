---
title: Vindo de outros programas BIM e de desenho
summary: Como os hábitos de programas BIM de desktop e de visualização de DWG se correspondem no BimCraft, e as diferenças que costumam atrapalhar.
keywords: migração, migrar, familiar, bim de desktop, família, parâmetros, navegador de projeto, paleta de propriedades, cubo de vista, xref, gerenciador de camadas, diferenças, comparar
from: 2de629af
---

Se você conhece o Revit, a maior parte do BimCraft vai parecer familiar nas palavras e estranha no alcance. A diferença mais importante: **esta versão lê e inspeciona modelos e edita dados IFC. Ela ainda não cria modelos como o Revit.** Você não pode desenhar paredes, posicionar famílias, criar vistas ou folhas, nem salvar um arquivo de projeto. O que você pode fazer é abrir quase qualquer arquivo de edificação em qualquer computador com um navegador, ver o que há nele, verificar uma pasta inteira de projeto e corrigir os dados de um modelo IFC.

## Hábitos correspondentes

| Se você costuma | No BimCraft |
|---|---|
| Abrir um `.rvt` no Revit para ver o modelo | O BimCraft abre o `.rvt` como um cartão de arquivo: versão, informações do projeto, vínculos, visualização. Para o modelo 3D, exporte IFC e abra esse. [Leia um arquivo de projeto ou de família](topic:read-rvt-file) |
| Verificar em qual versão um arquivo foi salvo antes de abri-lo | O cartão mostra "salvo no Revit …" no topo, sem atualizar nem alterar o arquivo |
| O Navegador de Projeto | Não há navegador de vistas e folhas. Um modelo IFC tem as listas {{ui:Pavimentos}} e {{ui:Elementos}}; um desenho tem guias de folhas |
| A paleta de Propriedades | O painel {{ui:Propriedades}} à direita, para o elemento que você clicou. Conjuntos de propriedades IFC em vez de grupos de parâmetros |
| Parâmetros de instância e de tipo | Conjuntos de propriedades de instância, e conjuntos marcados "(tipo)". Uma mudança de tipo vale para todo elemento do tipo, como no Revit. [Mude uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance) |
| Editar Tipo | Sem caixa de diálogo: clique em um valor de um conjunto "(tipo)" e digite |
| Selecionar muitos elementos, filtros, Selecionar todas as instâncias | Um elemento por vez. Ainda não implementado |
| O cubo de vista e a roda de navegação | Um cubo de vista no canto inferior direito, quatro botões ({{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}) e órbita livre. Sem roda de navegação |
| Shift e arrastar com o botão do meio para orbitar, arrastar com o botão do meio para pan | Arrastar com o botão esquerdo orbita; arrastar com o botão direito (ou {{key:Shift}} e arrastar) faz pan; a roda dá zoom. O estilo de menu {{ui:Faixa BIM}} troca para pan com o botão do meio e orbitar com {{key:Shift}} e o botão do meio. [Menus, teclas e mouse](topic:menus-keys-and-mouse) |
| Plantas baixas, cortes, caixas de corte | Um plano de {{ui:Corte}} por vez ({{key:X}}); sem caixa de corte nem plantas 2D. [Corte um modelo IFC com um plano de corte](topic:section-plane) |
| Ocultar na vista, isolar, visibilidade e gráficos | {{ui:Pavimentos}} ligados e desligados, {{ui:Espaços}} e {{ui:Arestas}}. Ainda não há ocultação por elemento |
| Ambientes | Espaços IFC, ocultos no início. Clique em {{ui:Espaços}} |
| Salvar, Salvar como, sincronizar com a central | {{ui:Salvar como IFC}} baixa um novo arquivo IFC. O original nunca muda. Sem central, sem compartilhamento de trabalho |
| Desfazer com {{key:Mod+Z}} | Funciona nas edições IFC até você salvar. [Altere propriedades IFC e salve uma cópia editada](topic:edit-ifc-properties) |
| Gerenciar Vínculos | Abra a pasta do projeto: cada vínculo é verificado e marcado **Nesta pasta**, **Mesmo nome encontrado**, **Arquivo da biblioteca** ou **Não está nesta pasta**. [Abra uma pasta de projeto inteira](topic:open-project-folder) |
| Auditar, ou abrir um arquivo para ver se está corrompido | O relatório da pasta verifica, em segundos, se cada cópia e cada backup não está truncado. [Verifique uma pasta quanto a cópias danificadas](topic:check-folder-health) |
| Escolher o arquivo certo entre uma pasta bagunçada | A caixa {{ui:Comece aqui}} sugere um, com os motivos |

Se você abre modelos sobretudo para conferi-los, como em um programa de verificação ou visualização de IFC, escolha o estilo de menu {{ui:Visualizador}}: as ferramentas de visualização e verificação vêm primeiro, e as ferramentas de construção ficam em um só menu. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse).

## Ao visualizar arquivos DWG

Se você abre DWGs no AutoCAD ou em um visualizador de DWG:

| Se você costuma | No BimCraft |
|---|---|
| Guias de modelo e de layout na parte inferior | Guias acima do desenho: {{ui:Modelo}} e uma por folha |
| ZOOM Extensão, clicar duas vezes na roda | Clique duas vezes, {{key:F}} ou {{ui:Ajustar}} |
| Pan com o botão do meio | Arraste com qualquer botão |
| O gerenciador de camadas | A lista {{ui:Camadas}}: marque para mostrar, desmarque para ocultar, {{ui:Todas ligadas}} e {{ui:Todas desligadas}} |
| O gerenciador de xrefs | **Desenhos vinculados** à direita, com **Mostrado** ou **Não encontrado**, e {{ui:Adicionar desenhos vinculados…}} |
| Visualização de impressão | {{ui:Vista de impressão}} ou {{key:P}}: preto sobre branco, com espessuras de linha. Não imprime |
| Extração de dados de atributos de bloco | A guia {{ui:Equipamentos}} para desenhos de cozinhas comerciais com etiquetas, com {{ui:Baixar CSV}} |
| Medir, desenhar, editar, salvar como | Não no BimCraft. O aplicativo de desenho CadCraft desenha e edita |

## Diferenças que atrapalham

- **Ele roda no navegador, e o navegador cuida dos seus arquivos com cuidado.** O BimCraft só lê arquivos e pastas que você lhe entrega, escolhendo-os ou arrastando-os. Não consegue abrir um arquivo sozinho e não consegue salvar por cima de um. Cada salvamento é um download.
- **Nada é enviado.** A palavra "upload" em algumas caixas de pasta dos navegadores é o texto do próprio navegador. Os arquivos ficam no seu computador.
- **IFC é o formato de modelo.** Um arquivo de projeto abre como cartão porque o conteúdo 3D dele não é documentado. Trate o IFC como a forma de os modelos entrarem no BimCraft.
- **As edições são copiar-ao-escrever.** Mudar o valor de um elemento nunca muda os vizinhos, mesmo quando o exportador compartilhou esse valor entre eles. Propriedades de tipo são a exceção deliberada.
- **Sem projeto, sem vistas.** O BimCraft mostra um arquivo por vez e não guarda nada dele depois que você fecha a aba, exceto os nomes das pastas recentes no Chrome e no Edge.
- **Teclas do Mac.** Onde os atalhos do Revit no Windows usam Ctrl, os atalhos do BimCraft usam {{key:Mod}}: Command no Mac.
- **Seus hábitos de mouse.** A órbita é com o botão esquerdo, e não com Shift e o botão do meio, a menos que você escolha o estilo de menu {{ui:Faixa BIM}} ou configure os botões você mesmo em [Menus, teclas e mouse](topic:menus-keys-and-mouse).

Veja [O que ainda não foi implementado](topic:not-built-yet) para o que usar hoje no lugar.
