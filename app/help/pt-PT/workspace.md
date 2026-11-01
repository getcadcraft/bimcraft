---
title: O ecrã do BimCraft
summary: Uma visita a todas as barras, painéis e botões, pelo nome que têm no ecrã, e como o ecrã muda consoante o tipo de ficheiro.
keywords: ecrã, disposição, painéis, barra de ferramentas, interface, ui, visita, painel de propriedades, navegador, barra da aplicação
from: 2eb01ec2
---

O ecrã do BimCraft tem uma barra no topo e três zonas por baixo: um painel à esquerda, o palco ao centro e o painel {{ui:Propriedades}} à direita. O que aparece em cada zona depende do que abriu: um modelo IFC, um ficheiro de projeto ou de família, um desenho ou uma pasta.

## A barra da aplicação

A barra fina no topo pertence ao site do CadCraft, não ao próprio BimCraft. Da esquerda para a direita:

- A marca CadCraft: leva à página inicial do CadCraft.
- O nome da aplicação e um menu de versões. Na compilação interna mostra a compilação que está a executar e permite mudar para uma versão lançada.
- {{ui:Acerca do BimCraft}}: a página da aplicação no site.
- {{ui:Definições}}: as definições do próprio BimCraft e as que todas as aplicações partilham. Consulte [Definições do BimCraft](topic:settings).
- {{ui:Ecrã inteiro}}: alterna entre os modos de ecrã. Consulte [Modos de ecrã](topic:workspace#screen-modes) mais abaixo.
- {{ui:Papel}} e {{ui:Modelo}}: os temas claro e escuro. A vista 3D e os desenhos 2D seguem o tema que escolher.

## O painel da esquerda

O painel da esquerda começa sempre por **Abrir um ficheiro ou pasta**:

- A área de largar, {{ui:Escolha um ficheiro, ou largue aqui um ficheiro ou uma pasta}}. Clique nela para escolher um ficheiro, ou largue nela um ficheiro ou uma pasta (ou em qualquer ponto da página).
- {{ui:Abrir uma pasta}}: escolha uma pasta de projeto inteira. Consulte [Abrir uma pasta de projeto inteira](topic:open-project-folder).
- {{ui:Pastas recentes}}: aparece no Chrome e no Edge depois de abrir uma pasta com o seletor de pastas ou ao largá-la. Clique em {{ui:Reabrir}} e no nome da pasta para a abrir de novo, ou no pequeno × para a esquecer.

Por baixo, aparecem secções conforme se aplicam:

| Secção | Quando aparece | O que contém |
|---|---|---|
| {{ui:Alterações}} | Um modelo IFC está aberto | As suas edições não guardadas, da mais recente para a mais antiga, com {{ui:Anular}} e {{ui:Guardar como IFC}} |
| {{ui:Ficheiro}} | Um modelo ou uma ficha de ficheiro está aberto | Dados sobre o ficheiro: tamanho, esquema ou versão, projeto, autor, número de elementos |
| {{ui:Desenho}} | Um DWG ou DXF está aberto | Formato, unidades, número de entidades e de camadas, folhas, desenhos referenciados, equipamento |
| {{ui:Pasta}} | Uma pasta está aberta | Número de ficheiros e de modelos, tamanho, problemas encontrados |
| {{ui:Voltar à pasta}} | Abriu um ficheiro a partir de uma pasta | Regressa ao relatório da pasta |
| {{ui:Camadas}} | Um desenho está aberto | Uma caixa de verificação por camada, com {{ui:Todas ligadas}} e {{ui:Todas desligadas}} |
| {{ui:Pisos}} | Um modelo IFC está aberto | Uma caixa de verificação por piso, com o piso mais alto primeiro |
| {{ui:Elementos}} | Um modelo IFC está aberto | Quantos elementos de cada tipo o modelo contém (os 30 mais comuns) |

## O palco

O meio do ecrã mostra o ficheiro aberto.

- **Vazio**: "Abra um modelo de edifício." com {{ui:Escolher um ficheiro}} e {{ui:Abrir uma pasta}}, e uma breve descrição de cada formato.
- **Modelo IFC**: a vista 3D com uma barra de ferramentas no topo, em grupos com nome como os da aplicação de desenho CadCraft, com o ícone de cada ferramenta por cima do nome: {{ui:Vista}} ({{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frente}}, {{ui:Lado}}, {{ui:Arestas}}, {{ui:Espaços}}); {{ui:Editar}} ({{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e {{ui:Mais}}, consulte [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} e {{ui:Desenhar}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipamento}}, {{ui:Atualizações}}, {{ui:Créditos}}); {{ui:Revisão}} ({{ui:Mostrar}}, {{ui:Corte}}, {{ui:Caminhar}}, {{ui:Medir}}; consulte [Cortar um modelo IFC com um plano de corte](topic:section-plane)); e {{ui:Saída}} (renderização, vista em direto, RV, exportações, pintura e vistas guardadas). Com {{ui:Desenhar}} ligado, a barra Desenhar por baixo tem o mesmo aspeto: {{ui:Vista}} (o nível e o tipo de planta), {{ui:Desenhar}}, {{ui:Editar}} e {{ui:Biblioteca}}. Um cubo de vistas fica no canto inferior direito. Consulte [Abrir um modelo IFC e olhar à volta em 3D](topic:open-ifc-model). Em {{ui:Definições}}, {{ui:Geral}} escolhe ícones, etiquetas ou ambos nestes botões, mostra ou oculta os nomes dos grupos, e com o botão direito na barra de ferramentas pode organizar as suas ferramentas e grupos. Numa janela baixa, a barra de ferramentas retira os nomes por baixo dos ícones.
- **Ficheiro de projeto ou de família**: a ficha do ficheiro, com a imagem de pré-visualização, as informações do projeto e os ficheiros ligados. Consulte [Ler um ficheiro de projeto ou de família](topic:read-rvt-file).
- **DWG ou DXF**: uma fila de separadores ({{ui:Modelo}}, depois um por folha, depois {{ui:Equipamento}} quando o desenho tem equipamento etiquetado, {{ui:3D}}, {{ui:Ajustar}} e {{ui:Vista de impressão}}), o desenho, e as coordenadas X e Y em direto num canto. Consulte [Ver um desenho DWG ou DXF](topic:view-dwg) e [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d).
- **Pasta**: o relatório da pasta, com a caixa {{ui:Comece aqui}} e tabelas de modelos, ligações, modelos IFC e desenhos. Consulte [Abrir uma pasta de projeto inteira](topic:open-project-folder).

A **linha de estado** em baixo no palco diz o que o BimCraft está a fazer ("A ler o modelo…", "A construir a geometria: 1200 de 5400 elementos") e o que correu mal, a vermelho, quando algo falha. As mensagens de sucesso desaparecem ao fim de alguns segundos.

## O painel Propriedades

O painel da direita mostra:

- Para um modelo IFC: o elemento em que clicou, com o seu nome, tipo, etiqueta, GlobalId e todos os conjuntos de propriedades. Os valores que pode alterar têm aspeto de botões. Consulte [Campos do painel Propriedades](topic:properties-panel).
- Para um desenho: como se mover, os desenhos referenciados e as imagens do desenho e se cada um foi encontrado, e uma lista do que ainda não é desenhado, sob **Ainda não desenhado**.
- Para uma ficha de ficheiro ou uma pasta: uma breve nota sobre o que abrir a seguir.

## Num ecrã pequeno

Quando a janela é mais estreita do que o ecrã de um portátil, o BimCraft empilha as zonas: o palco em cima e os painéis por baixo. Desloque a página para chegar aos painéis. Num telemóvel formam uma só coluna; num tablet, duas.

## Modos de ecrã

O botão {{ui:Ecrã inteiro}} na barra da aplicação, ou {{key:Ctrl+Shift+F}} em todas as plataformas, alterna entre três modos:

1. Normal.
2. Ecrã inteiro, com as barras ainda visíveis.
3. Ecrã inteiro com a barra da aplicação oculta. Mova o ponteiro para o limite superior, ou toque aí, para a fazer voltar.

Prima {{key:Esc}} para voltar ao normal. Os navegadores sem suporte de ecrã inteiro (como num iPhone) alternam apenas entre as barras normais e ocultas.

## Relacionado

- [Teclas e rato](topic:keyboard)
- [Ficheiros que o BimCraft abre e guarda](topic:files)
