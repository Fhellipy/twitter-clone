
> Caso encontre o erro `ENOSPC: System limit for number of file watchers reached` execute o seguinte comando em seu terminal (linux, apenas):

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```
> [Viva o Linux](https://www.vivaolinux.com.br/dica/Error-ENOSPC-System-limit-for-number-of-file-watchers-reached-Resolvido)
> [StackOverflow](https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached)
