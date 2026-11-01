---
title: A tela do BimCraft
summary: Um passeio por todas as barras, painéis e botões, pelo nome na tela, e como a tela muda para cada tipo de arquivo.
keywords: tela, layout, painéis, barra de ferramentas, interface, ui, passeio, painel de propriedades, navegador, barra do aplicativo
from: 2eb01ec2
---

A tela do BimCraft tem uma barra no topo e três áreas embaixo dela: um painel à esquerda, o palco no meio e o painel {{ui:Propriedades}} à direita. O que aparece em cada área depende do que você abriu: um modelo IFC, um arquivo de projeto ou de família, um desenho ou uma pasta.

## A barra do aplicativo

A barra fina no topo pertence ao site do CadCraft, não ao BimCraft em si. Da esquerda para a direita:

- A marca do CadCraft: leva à página inicial do CadCraft.
- O nome do aplicativo e um menu de versão. Na build da equipe, ele mostra qual build você está usando e permite trocar para uma versão lançada.
- {{ui:Sobre o BimCraft}}: a página do aplicativo no site.
- {{ui:Configurações}}: as configurações do próprio BimCraft e as que todos os aplicativos compartilham. Veja [Configurações do BimCraft](topic:settings).
- {{ui:Tela cheia}}: alterna os modos de tela. Veja [Modos de tela](topic:workspace#screen-modes) abaixo.
- {{ui:Papel}} e {{ui:Modelo}}: os temas claro e escuro. A vista 3D e os desenhos 2D seguem o tema que você escolher.

## O painel esquerdo

O painel esquerdo sempre começa com **Abrir um arquivo ou pasta**:

- A área de soltar, {{ui:Escolha um arquivo ou solte um arquivo ou pasta aqui}}. Clique nela para escolher um arquivo, ou solte um arquivo ou pasta nela (ou em qualquer lugar da página).
- {{ui:Abrir uma pasta}}: escolha uma pasta de projeto inteira. Veja [Abrir uma pasta de projeto inteira](topic:open-project-folder).
- {{ui:Pastas recentes}}: aparece no Chrome e no Edge depois que você abre uma pasta com o seletor de pastas ou soltando-a. Clique em {{ui:Reabrir}} e no nome da pasta para abri-la de novo, ou no pequeno × para esquecê-la.

Embaixo dele, as seções aparecem conforme se aplicam:

| Seção | Quando aparece | O que há nela |
|---|---|---|
| {{ui:Alterações}} | Um modelo IFC está aberto | Suas edições não salvas, as mais recentes primeiro, com {{ui:Desfazer}} e {{ui:Salvar como IFC}} |
| {{ui:Arquivo}} | Um modelo ou uma ficha de arquivo está aberto | Dados do arquivo: tamanho, esquema ou versão, projeto, autor, número de elementos |
| {{ui:Desenho}} | Um DWG ou DXF está aberto | Formato, unidades, contagem de entidades e camadas, folhas, desenhos vinculados, equipamentos |
| {{ui:Pasta}} | Uma pasta está aberta | Contagem de arquivos e modelos, tamanho, problemas encontrados |
| {{ui:Voltar à pasta}} | Você abriu um arquivo de uma pasta | Volta ao relatório da pasta |
| {{ui:Camadas}} | Um desenho está aberto | Uma caixa de seleção por camada, com {{ui:Todas ligadas}} e {{ui:Todas desligadas}} |
| {{ui:Pavimentos}} | Um modelo IFC está aberto | Uma caixa de seleção por pavimento, o pavimento mais alto primeiro |
| {{ui:Elementos}} | Um modelo IFC está aberto | Quantos elementos de cada tipo o modelo tem (os 30 mais comuns) |

## O palco

O meio da tela mostra o arquivo aberto.

- **Vazio**: "Abra um modelo de edificação." com {{ui:Escolher um arquivo}} e {{ui:Abrir uma pasta}}, e uma breve descrição de cada formato.
- **Modelo IFC**: a vista 3D com uma barra de ferramentas no topo, em grupos nomeados como os do aplicativo de desenho CadCraft, com o ícone de cada ferramenta acima do nome: {{ui:Vista}} ({{ui:Ajustar}}, {{ui:Superior}}, {{ui:Frontal}}, {{ui:Lateral}}, {{ui:Arestas}}, {{ui:Espaços}}); {{ui:Editar}} ({{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}} e {{ui:Mais}}, veja [Copiar, colar e duplicar itens da biblioteca](topic:copy-paste)); {{ui:Modelo}} ({{ui:Unidades}} e {{ui:Desenhar}}); {{ui:Biblioteca}} ({{ui:Biblioteca}}, {{ui:Equipamentos}}, {{ui:Atualizações}}, {{ui:Créditos}}); {{ui:Revisão}} ({{ui:Exibir}}, {{ui:Corte}}, {{ui:Caminhar}}, {{ui:Medir}}; veja [Cortar um modelo IFC com um plano de corte](topic:section-plane)); e {{ui:Saída}} (renderização, vista em tempo real, RV, exportações, pintura e vistas salvas). Com {{ui:Desenhar}} ligado, a barra Desenhar embaixo dela tem o mesmo visual: {{ui:Vista}} (o nível e o tipo de planta), {{ui:Desenhar}}, {{ui:Editar}} e {{ui:Biblioteca}}. Um cubo de vista fica no canto inferior direito. Veja [Abrir um modelo IFC e olhar ao redor em 3D](topic:open-ifc-model). Em {{ui:Configurações}}, {{ui:Geral}} escolhe ícones, rótulos ou ambos nesses botões, mostra ou oculta os nomes dos grupos, e clicar com o botão direito na barra de ferramentas permite organizar as ferramentas e os grupos. Em uma janela baixa, a barra de ferramentas tira os nomes de baixo dos ícones.
- **Arquivo de projeto ou de família**: a ficha do arquivo, com a imagem de visualização, as informações do projeto e os arquivos vinculados. Veja [Ler um arquivo de projeto ou de família](topic:read-rvt-file).
- **DWG ou DXF**: uma fileira de guias ({{ui:Modelo}}, depois uma por folha, depois {{ui:Equipamentos}} quando o desenho tem equipamentos com tag, {{ui:3D}}, {{ui:Ajustar}} e {{ui:Vista de impressão}}), o desenho, e as coordenadas X e Y ao vivo em um canto. Veja [Ver um desenho DWG ou DXF](topic:view-dwg) e [Ver um desenho DWG ou DXF em 3D](topic:dwg-in-3d).
- **Pasta**: o relatório da pasta, com a caixa {{ui:Comece aqui}} e tabelas de modelos, vínculos, modelos IFC e desenhos. Veja [Abrir uma pasta de projeto inteira](topic:open-project-folder).

A **linha de status** na parte de baixo do palco diz o que o BimCraft está fazendo ("Lendo o modelo…", "Construindo a geometria: 1200 de 5400 elementos") e o que deu errado, em vermelho, quando algo falha. As mensagens de sucesso desaparecem depois de alguns segundos.

## O painel Propriedades

O painel direito mostra:

- Para um modelo IFC: o elemento em que você clicou, com nome, tipo, tag, GlobalId e todos os conjuntos de propriedades. Os valores que você pode alterar parecem botões. Veja [Campos do painel Propriedades](topic:properties-panel).
- Para um desenho: como se mover, os desenhos e imagens vinculados do desenho e se cada um foi encontrado, e uma lista do que **Ainda não foi desenhado**.
- Para uma ficha de arquivo ou pasta: uma breve nota sobre o que abrir a seguir.

## Em uma tela pequena

Quando a janela é mais estreita que a tela de um notebook, o BimCraft empilha suas áreas: o palco em cima, depois os painéis embaixo. Role a página para chegar aos painéis. Em um celular eles formam uma coluna; em um tablet, duas.

## Modos de tela

O botão {{ui:Tela cheia}} na barra do aplicativo, ou {{key:Ctrl+Shift+F}} em todas as plataformas, alterna três modos:

1. Normal.
2. Tela cheia, com as barras ainda visíveis.
3. Tela cheia com a barra do aplicativo oculta. Mova o ponteiro até a borda superior, ou toque ali, para trazê-la de volta.

Pressione {{key:Esc}} para voltar ao normal. Navegadores sem suporte a tela cheia (como em um iPhone) alternam somente entre as barras normais e ocultas.

## Veja também

- [Teclas e mouse](topic:keyboard)
- [Arquivos que o BimCraft abre e salva](topic:files)
