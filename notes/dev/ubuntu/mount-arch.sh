mount -o subvol=@ /dev/nvme0n1p2 /mnt && \
mount /dev/nvme0n1p1 /mnt/boot && \
UUID=$(blkid -s UUID -o value /dev/nvme0n1p2) && \
sed -i "s|root=UUID=.* rw|root=UUID=${UUID} rw|" /mnt/boot/loader/entries/arch.conf && \
umount -R /mnt && \
echo "UUID aggiornato a ${UUID}, riavvio..." && \