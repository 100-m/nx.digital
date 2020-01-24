# Protocole de transfert

Le transfert de données s'effectue sur un SFTP hébergé par NeoXam. C'est un FTP sécurisé qui nécessite une clé SSH pour se connecter.

C'est à partir des données transmises sur le SFTP que nous mettons l'application Impress à jour. Ceci se fait automatiquement à heure prédéfinie, mais peut aussi se faire de manière instantanée dès qu'un fichier est modifié sur le SFTP.

## Création d’une Clef d’Encryption

Afin de pouvoir vous connecter au SFTP, il faut nous donner votre clé publique. Demandez à votre service d'en créer une si vous n'en avez pas. Vous trouverez également ici un tutoriel pour en créer une vous-même: [https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/)

## Connexion
Une fois que la clé publique nous a été transmise, vous pourrez vous connecter au serveur depuis un utilitaire bash avec la commande suivante:

```
sftp -i ~/.ssh/{CLE_PRIVEE} {NOM_DE_PROJET}@surface.100m.io:raw
```

où CLE_PRIVEE est votre fichier de clé privée, et NOM_DE_PROJET le nom que nous avons donné au projet (communiqué par email).

Vous pouvez également vous connecter en utilisant un utilitaire de gestion SFTP type FileZilla.

Une fois connecté en SFTP, vous n'avez les droits d'écriture que sur le dossier raw ou app.
