Connect to internet
```shell
loadkeys it
iwctl
[iwd]# device list
[iwd]# station wlan0 scan
[iwd]# station wlan0 get-networks
[iwd]# station wlan0 connect "SSID"
[iwd]# exit
ping -c3 archlinux.org
```
Find the usb with the sh
```shell
lsblk -o NAME,SIZE,TYPE,MOUNTPOINTS
```

Mount the usb
```shell
mount /dev/sdb1 /mnt
cd /mnt
ls -l | grep arch_install.sh
```

Run the sh
```shell
cd /mnt
chmod +x arch_install.sh
./arch_install.sh
```