---
layout: default
title: SSH Key
---
## SSH Key

| Algorithm     | Public key         | Private key       |
|---------------|--------------------|-------------------|
| ED25519       | id_ed25519.pub     | id_ed25519        |
| ED25519\_SK   | id_ed25519_sk.pub  | id_ed25519_sk     |
| ECDSA\_SK     | id_ecdsa_sk.pub    | id_ecdsa_sk       |

### Generate SSH Key
`ED25519`
```bash
ssh-keygen -t ed25519 -C "<comment>"
```

`Specify a passphrase`
```bash
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

### Run agent
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

### test connection
```shell
ssh -T git@github.com
```


