---
title: Resolução de problemas
summary: Mensagens que o BimCraft mostra, o que as causa e o que fazer, para abrir ficheiros, pastas, modelos 3D, desenhos e edições.
keywords: problema, erro, não funciona, não consigo abrir, falhou, incompleto, corrompido, lento, bloqueio, em branco, em falta, mensagem, ajuda
from: 1e5a79fc
---

As mensagens aparecem na linha de estado, na parte inferior da área de trabalho, a vermelho quando algo falhou. Procurar a mensagem abaixo.

## Abrir ficheiros

**"*name* não é um ficheiro IFC, RVT, RFA, DWG ou DXF."**
O BimCraft não reconheceu o ficheiro. Verificar a extensão e se o ficheiro não está vazio. Os PDF, as imagens e os ficheiros de escritório não se abrem.

**".ifczip ainda não é suportado. Guarde ou exporte o modelo como um ficheiro .ifc simples."** (também para `.ifcxml`)
Descomprimir o `.ifczip` (é um zip comum com um `.ifc` dentro) ou exportar IFC simples.

**"… é um ficheiro de projeto que o BimCraft ainda não lê."**
Um ficheiro `.pln`, `.pla`, `.tpl` ou `.bpn`. Exportar IFC ou DWG a partir dele e abrir o resultado: ver [Abrir ficheiros de projeto .pln e .pla](topic:pln-project-files).

**"Não foi possível ler este ficheiro IFC."**
O ficheiro IFC está danificado ou não é realmente IFC. Abri-lo num editor de texto: um ficheiro IFC real começa com `ISO-10303-21;`. Exportá-lo de novo.

**"Este ficheiro está incompleto: tem … MB, mas o seu próprio índice aponta para dados com pelo menos … MB. …"**
O ficheiro de projeto ou de família foi cortado durante a cópia, o carregamento ou a sincronização. Um ficheiro de uma unidade na nuvem "só online" tem o mesmo aspeto. Um ficheiro aberto sozinho continua a abrir, com esta mensagem no topo do cartão e "A mostrar o que foi recuperado; copie o original novamente para o modelo completo.": o cartão mostra apenas as partes cujos bytes estão todos no ficheiro e lista o resto em **Não está no ficheiro**. Tornar o ficheiro disponível offline na sua unidade na nuvem, ou copiar o original novamente, e reabri-lo. Numa pasta, o BimCraft mostra, em vez disso, a cópia de segurança completa mais recente.

**"… O índice de conteúdos do ficheiro também está na parte em falta, por isso nada nele pode ser aberto."**
O ficheiro foi cortado tão cedo que nem a sua lista de conteúdos existe. Não se consegue recuperar nada desta cópia. Copiar o original novamente e reabri-lo.

**"Este ficheiro composto não tem fluxo BasicFileInfo, por isso não é um ficheiro Revit."**
O ficheiro é um ficheiro composto de outro tipo (os documentos antigos de escritório usam o mesmo contentor). Verificar se escolheu o ficheiro certo.

**"Ainda a trabalhar no anterior…"**
O BimCraft ainda está ocupado com o ficheiro ou a pasta anterior. Aguardar que a linha de estado termine e tentar de novo.

**O seletor de ficheiros deixa o meu ficheiro a cinzento.**
O seletor só oferece `.ifc`, `.rvt`, `.rfa`, `.rte`, `.rft`, `.dwg` e `.dxf`. Arrastar outros ficheiros para a página, e o BimCraft indicará se os consegue ler.

## Abrir pastas

**"Esta pasta tem mais de 20,000 ficheiros. Escolha uma pasta mais pequena, como a de um projeto."**
Escolheu uma pasta demasiado acima, como uma unidade inteira. Escolher uma pasta de projeto.

**"O navegador não deu acesso a *name*. Escolha-a novamente com Abrir uma pasta."**
Clicou em {{ui:Reopen}} numa pasta recente e a permissão do navegador foi recusada ou expirou. Escolher a pasta novamente, ou arrastá-la.

**O navegador diz que vai "carregar" os ficheiros.**
É a expressão do próprio navegador para entregar ficheiros a uma página. O BimCraft não os envia para lado nenhum. Arrastar a pasta para evitar a dúvida.

**Nada acontece num telemóvel ou tablet.**
Muitos navegadores móveis não conseguem escolher pastas. Abrir ficheiros individuais, ou usar um computador.

## O motor IFC carrega na primeira vez

**A linha de estado fica em "A iniciar o motor IFC…", ou mostra um erro como "Failed to fetch".**
Não foi possível transferir o motor IFC. Pode não ter ligação, ou uma firewall ou um bloqueador de conteúdos pode estar a impedi-lo.

:::offline
Está offline. Se o botão da barra da aplicação não disser {{ui:Offline ready}}, o motor IFC nunca foi guardado neste navegador. Restabelecer a ligação, abrir o ficheiro novamente e clicar em {{ui:Save for offline}} para que funcione offline da próxima vez. Ver [Online e offline](topic:online-offline).
:::

:::online
Recarregar a página e tentar de novo. Numa rede de trabalho, pedir à equipa de informática que permita os ficheiros `.wasm` do site.
:::

## Guardar para uso offline

**O botão diz {{ui:Could not save}}.**
Alguns ficheiros não foram transferidos, normalmente porque a ligação caiu. Verificar a ligação e clicar de novo no botão. Qualquer cópia offline anterior é mantida até que uma nova esteja completa.

**O botão diz {{ui:Offline not available}}.**
Esta janela não consegue manter uma cópia offline, por exemplo uma janela privada ou um computador de trabalho gerido. Ver [Trabalhar offline](common:offline).

**O botão fica em "A guardar *n* de *m*" durante algum tempo.**
A cópia do BimCraft tem cerca de 11 MB, a maior parte é o motor IFC. Manter o separador aberto até dizer {{ui:Offline ready}}.

**O BimCraft abriu offline, mas parece desatualizado.**
A sua cópia guardada é de uma visita anterior. Quando estiver online, clicar em {{ui:Offline ready}} e escolher {{ui:Save again (get the newest version)}}.

## Vista 3D

**O modelo não está onde esperava, ou está minúsculo.**
Premir {{key:F}} ou clicar em {{ui:Fit}}. Ajustar enquadra sempre tudo no modelo, incluindo os pisos que desmarcou e os elementos perdidos longe do edifício, por isso o edifício pode parecer pequeno. Aproximar a partir daí.

**Clicar não seleciona nada.**
Manter o rato parado ao clicar: um pequeno arrastamento orbita. Os elementos de pisos desmarcados não podem ser selecionados. Com {{ui:Spaces}} ativo, os espaços transparentes são selecionados antes do que está dentro deles.

**O botão {{ui:Edges}} fica a cinzento: "As arestas estão desligadas em modelos muito grandes"**
O modelo tem mais de 1.5 milhões de triângulos. As arestas ficam desligadas para poupar memória.

**O separador fica lento, branco, ou mostra a página de falha do navegador.**
O modelo é grande demais para a memória que o navegador dá ao separador. Fechar os outros separadores e recarregar. Exportar um IFC mais pequeno: um edifício, uma disciplina ou menos pisos. Ver [Navegadores, dispositivos e memória](topic:platforms).

**A vista 3D fica em branco.**
O WebGL pode estar desligado ou bloqueado. Nas definições do navegador, ativar a aceleração por hardware (ou aceleração gráfica) e reiniciar o navegador.

## Editar IFC

**"Escreva um número."** O valor é numérico. Escrever um número simples, sem unidades, como `2.4`.

**"Use um número inteiro."** O valor é uma contagem ou um inteiro. Remover as casas decimais.

**"Só as propriedades de valor único podem ser editadas."** Listas, enumerações e quantidades são só de leitura.

**{{key:Mod+S}} abre a janela "Guardar página" do navegador.**
Não há alterações por guardar, por isso o BimCraft deixou a tecla para o navegador. Fechar a janela.

**{{key:Mod+Z}} não faz nada.**
Só funciona enquanto houver alterações por guardar e não estiver a escrever num campo. Depois de guardar, não há nada para anular.

**A lista {{ui:Changes}} ainda mostra edições depois de as ter descartado e de ter aberto um desenho ou uma pasta.**
Quando responde "Descartá-las?" com OK e depois abre algo que não seja um modelo IFC, as edições antigas ficam em memória e {{ui:Save as IFC}} ainda as guardaria. Para recomeçar de facto, abrir o IFC original novamente, ou recarregar a página.

**A minha edição alterou mais elementos do que selecionei.**
Alterou uma propriedade num conjunto marcado "(tipo)". As propriedades de tipo aplicam-se a todos os elementos do tipo. Clicar em {{ui:Undo}}. Ver [Alterar uma propriedade de tipo para todos os elementos de um tipo](topic:type-vs-instance).

## Desenhos

**"*name* não pôde ser lido. Pode estar danificado, ou guardado num formato que o leitor ainda não trata (…)."**
Guardar o desenho a partir do programa que o criou como DWG mais antigo (2018 ou anterior) ou como DXF, e tentar de novo.

**"Este desenho não tem nada para mostrar."** ou **"*name* é um desenho vazio: não tem linhas, texto nem blocos."**
O desenho está vazio, ou só tem coisas que o BimCraft ainda não desenha (ver **Ainda não desenhado** à direita).

**"Este desenho é muito grande; só parte dele é mostrada."**
O BimCraft parou de desenhar para continuar a responder. Desligar as camadas de que não precisa, ou abrir as folhas de que precisa a partir de um desenho mais pequeno.

**Partes de uma folha estão em falta.**
Podem faltar desenhos referenciados: procurar em **Desenhos referenciados** à direita. Ver [Encontrar desenhos e imagens referenciados](topic:dwg-linked-files). As camadas também podem estar desligadas: clicar em {{ui:All on}}.

**Uma imagem aparece como um quadro vazio.**
O ficheiro não foi encontrado, ou é um TIFF ("TIFF não pode ser mostrado num navegador"). Adicionar uma cópia PNG ou JPEG com {{ui:Add pictures…}}.

**A deslocação no trackpad aplica zoom em vez de mover o desenho.**
É assim que os desenhos funcionam no BimCraft. Clicar e arrastar para deslocar a vista.

## Ainda sem solução

Ler [O que ainda não está implementado](topic:not-built-yet): o que procura pode não existir nesta versão.
