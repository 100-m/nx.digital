# Démarches à suivre pour créer un relevé de portfeuil

## Étape 1 - Creation d'un template:
  - Nav Menu > Client Edition > Templates > Create Template (Le nom ne doit pas contenir d'espace) > View

## Étape 2 - Customisation du relevé de portefeuil
  - Ajout d'une page:
    > Etre dans Layout (Bar de navigation à droite)
    > Cliquer sur le bouton '+' en bas de la page à droite

  - Ajout de block:
    > Developper Mode > Changer 'block' par 'brick' (Si on skip cette étape, on ne pourra pas ajouter de blocs)
    > Etre dans Layout (Bar de navigation à droite)
    > Cliquer sur le bouton '+' d'un block

  - Changer le contenu d'un block
    > Etre dans Content (Bar de navigation à droite)
    > Data source > Choisir le contenu du block

  - Pour enlever le titre d'un block
    > Etre dans Content (Bar de navigation à droite)
    > Uncheck 'Show title'

  - Modifier la taille d'un block:
    > Etre dans Layout (Bar de navigation à droite)
    > Size > (Ex: 220 X 40) > Cliquer sur 'Entrer' (Le block 'style' doit changer)

  - Changer le positionnement d'un block:
    > Etre dans Layout (Bar de navigation à droite)
    > Visualisation > (Ex: Bar Chart - Vertical)

  - Changer le display d'un block:
    > Etre dans Content (Bar de navigation à droite)
    > Drag and drop le block (La ligne noir nous dira ou est ce le block sera positionné)

  - Delete un block:
    > Etre dans Layout (Bar de navigation à droite)
    > Selectionner le block et cliquer sur le bouton '-'

  - Afficher un footer:
    > Etre dans Content (Bar de navigation à droite)
    > Content > Choisir block.footer

  - Ajout de block d'allocation:
    > Content > Selectionner le block > Dans 'Data source', choisir allocation.xxx


# Limitation:

- Block 'Détails' doit toujours être en dernier
- Pour le moment le block 'Détail' est statique
- Je ne peux pas ajouter des blocks sur une page à l'exterieur d'un '.row', si jamais tous mes blocks sont à l'interieur d'un '.row'
- Si jamais on veut ajouter un footer, on le fait une fois qu'on a créé toutes no pages
