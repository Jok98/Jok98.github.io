---
layout: page
title: Linux Kernel Roadmap
navTitle: Linux Kernel
summary: Roadmap for learning Linux kernel architecture, boot, scheduling, memory, filesystems, networking, drivers, tracing, and kernel development.
area: dev
topic: linux
tags:
  - linux
  - kernel
  - operating-systems
  - systems
  - roadmap
order: 10
---

# Linux Kernel Roadmap — Fundamentals to Advanced

## 1. Prerequisites

### 1.1 C programming fundamentals
- [ ] C syntax
- [ ] Primitive types
- [ ] Integer promotion
- [ ] Signed integer behavior
- [ ] Unsigned integer behavior
- [ ] Pointers
- [ ] Pointer arithmetic
- [ ] Arrays
- [ ] Strings
- [ ] Structs
- [ ] Unions
- [ ] Bitfields
- [ ] Function pointers
- [ ] Variadic functions
- [ ] Macros
- [ ] Preprocessor
- [ ] Header files
- [ ] Translation units
- [ ] Static functions
- [ ] Inline functions
- [ ] Volatile
- [ ] Const correctness
- [ ] Undefined behavior
- [ ] Implementation-defined behavior
- [ ] Strict aliasing
- [ ] Alignment
- [ ] Endianness

### 1.2 C build and toolchain fundamentals
- [ ] GCC
- [ ] Clang
- [ ] GNU Make
- [ ] Linker
- [ ] Assembler
- [ ] Object files
- [ ] ELF format
- [ ] Symbols
- [ ] Relocation
- [ ] Static linking
- [ ] Dynamic linking
- [ ] Linker scripts
- [ ] Cross-compilation
- [ ] Compiler warnings
- [ ] Compiler optimizations
- [ ] Debug symbols
- [ ] DWARF
- [ ] objdump
- [ ] readelf
- [ ] nm
- [ ] addr2line
- [ ] gdb

### 1.3 Linux user-space fundamentals
- [ ] Linux filesystem hierarchy
- [ ] Processes
- [ ] Threads
- [ ] Signals
- [ ] File descriptors
- [ ] Pipes
- [ ] Sockets
- [ ] Terminals
- [ ] Environment variables
- [ ] Permissions
- [ ] Users
- [ ] Groups
- [ ] Capabilities
- [ ] systemd
- [ ] udev
- [ ] procfs
- [ ] sysfs
- [ ] debugfs
- [ ] tracefs
- [ ] cgroupfs

### 1.4 Operating system fundamentals
- [ ] Kernel mode
- [ ] User mode
- [ ] Privilege levels
- [ ] Interrupts
- [ ] Exceptions
- [ ] System calls
- [ ] Virtual memory
- [ ] Paging
- [ ] Page tables
- [ ] Context switching
- [ ] Scheduling
- [ ] Synchronization
- [ ] Deadlocks
- [ ] Race conditions
- [ ] Memory barriers
- [ ] Device drivers
- [ ] Filesystems
- [ ] Networking stack
- [ ] Security model

### 1.5 Computer architecture fundamentals
- [ ] CPU registers
- [ ] Instruction pointer
- [ ] Stack pointer
- [ ] Calling convention
- [ ] Cache hierarchy
- [ ] Cache lines
- [ ] TLB
- [ ] MMU
- [ ] NUMA
- [ ] DMA
- [ ] PCIe
- [ ] Interrupt controller
- [ ] Timer hardware
- [ ] Memory-mapped I/O
- [ ] Port I/O
- [ ] Atomic instructions
- [ ] CPU privilege rings
- [ ] SMP
- [ ] Hyper-threading

### 1.6 Git and collaboration fundamentals
- [ ] Git clone
- [ ] Git branch
- [ ] Git commit
- [ ] Git rebase
- [ ] Git merge
- [ ] Git format-patch
- [ ] Git send-email
- [ ] Git am
- [ ] Git bisect
- [ ] Git blame
- [ ] Git range-diff
- [ ] Git rerere
- [ ] Patch series
- [ ] Commit message format
- [ ] Signed-off-by
- [ ] Mailing list workflow

---

## 2. Kernel Development Environment

### 2.1 Source tree setup
- [ ] Clone mainline kernel
- [ ] Clone stable kernel
- [ ] Clone linux-next
- [ ] Understand kernel.org
- [ ] Understand git.kernel.org
- [ ] Understand subsystem trees
- [ ] Understand maintainer trees
- [ ] Understand stable trees
- [ ] Understand linux-next
- [ ] Track upstream
- [ ] Track local branches
- [ ] Fetch tags
- [ ] Verify tags
- [ ] Read release notes
- [ ] Read changelogs

### 2.2 Kernel source tree layout
- [ ] `arch/`
- [ ] `block/`
- [ ] `certs/`
- [ ] `crypto/`
- [ ] `Documentation/`
- [ ] `drivers/`
- [ ] `fs/`
- [ ] `include/`
- [ ] `init/`
- [ ] `io_uring/`
- [ ] `ipc/`
- [ ] `kernel/`
- [ ] `lib/`
- [ ] `mm/`
- [ ] `net/`
- [ ] `rust/`
- [ ] `samples/`
- [ ] `scripts/`
- [ ] `security/`
- [ ] `sound/`
- [ ] `tools/`
- [ ] `usr/`
- [ ] `virt/`

### 2.3 Build dependencies
- [ ] Compiler
- [ ] Binutils
- [ ] Make
- [ ] Flex
- [ ] Bison
- [ ] OpenSSL development headers
- [ ] ELF development headers
- [ ] ncurses development headers
- [ ] pahole
- [ ] dwarves
- [ ] bc
- [ ] cpio
- [ ] rsync
- [ ] LLVM toolchain
- [ ] Rust toolchain
- [ ] bindgen
- [ ] QEMU
- [ ] BusyBox

### 2.4 Kernel configuration
- [ ] Kconfig
- [ ] `.config`
- [ ] `defconfig`
- [ ] `oldconfig`
- [ ] `menuconfig`
- [ ] `nconfig`
- [ ] `xconfig`
- [ ] `localmodconfig`
- [ ] `tinyconfig`
- [ ] `allnoconfig`
- [ ] `allyesconfig`
- [ ] `allmodconfig`
- [ ] `randconfig`
- [ ] Built-in option
- [ ] Module option
- [ ] Disabled option
- [ ] Config dependencies
- [ ] Config selects
- [ ] Config defaults

### 2.5 Kernel build
- [ ] Build vmlinux
- [ ] Build bzImage
- [ ] Build modules
- [ ] Install modules
- [ ] Install kernel
- [ ] Build external module
- [ ] Parallel build
- [ ] Out-of-tree build
- [ ] Cross-build
- [ ] LLVM build
- [ ] Rust-enabled build
- [ ] W= warnings
- [ ] Sparse build
- [ ] Coccinelle checks
- [ ] Build reproducibility

### 2.6 Bootable lab environment
- [ ] QEMU VM
- [ ] KVM acceleration
- [ ] Initramfs
- [ ] BusyBox initramfs
- [ ] Root filesystem
- [ ] Kernel command line
- [ ] Serial console
- [ ] Virtio devices
- [ ] GDB stub
- [ ] Snapshot workflow
- [ ] Crash test workflow
- [ ] Automated boot test
- [ ] Nested virtualization
- [ ] Minimal distro image

### 2.7 Development workflow
- [ ] Edit source
- [ ] Build kernel
- [ ] Boot kernel
- [ ] Load module
- [ ] Inspect dmesg
- [ ] Trigger test path
- [ ] Reproduce bug
- [ ] Add instrumentation
- [ ] Run selftests
- [ ] Run kselftest
- [ ] Run LTP
- [ ] Run syzkaller
- [ ] Bisect regression
- [ ] Generate patch
- [ ] Send patch
- [ ] Respond to review

---

## 3. Kernel Architecture Overview

### 3.1 Kernel responsibilities
- [ ] Process management
- [ ] Thread management
- [ ] Memory management
- [ ] Virtual memory
- [ ] Filesystems
- [ ] Device management
- [ ] Driver model
- [ ] Networking
- [ ] Security
- [ ] IPC
- [ ] Timers
- [ ] Power management
- [ ] Hardware abstraction
- [ ] Resource accounting
- [ ] Namespace isolation
- [ ] Control groups

### 3.2 Execution contexts
- [ ] Process context
- [ ] Interrupt context
- [ ] Softirq context
- [ ] Tasklet context
- [ ] Workqueue context
- [ ] Kernel thread context
- [ ] NMI context
- [ ] Atomic context
- [ ] Sleepable context
- [ ] Preemptible context
- [ ] Non-preemptible context
- [ ] RCU read-side context

### 3.3 Kernel address space
- [ ] User virtual address space
- [ ] Kernel virtual address space
- [ ] Direct map
- [ ] vmalloc area
- [ ] module area
- [ ] fixmap
- [ ] per-cpu area
- [ ] high memory
- [ ] low memory
- [ ] KASLR
- [ ] Kernel text
- [ ] Kernel data
- [ ] BSS
- [ ] init sections

### 3.4 Kernel/user boundary
- [ ] System calls
- [ ] Copy from user
- [ ] Copy to user
- [ ] User pointer validation
- [ ] Fault handling
- [ ] Access control
- [ ] Capability checks
- [ ] VDSO
- [ ] Signals
- [ ] Procfs interface
- [ ] Sysfs interface
- [ ] Netlink interface
- [ ] ioctl interface
- [ ] Character device interface

### 3.5 Monolithic modular kernel model
- [ ] Monolithic kernel
- [ ] Loadable kernel module
- [ ] Built-in driver
- [ ] Kernel symbol export
- [ ] Module dependency
- [ ] Module parameters
- [ ] Module loading
- [ ] Module unloading
- [ ] Module tainting
- [ ] GPL-only symbols
- [ ] Kernel ABI policy
- [ ] Internal API instability

---

## 4. Boot Process

### 4.1 Firmware and bootloader
- [ ] BIOS
- [ ] UEFI
- [ ] Secure Boot
- [ ] Bootloader
- [ ] GRUB
- [ ] systemd-boot
- [ ] U-Boot
- [ ] Device Tree
- [ ] ACPI
- [ ] Kernel image loading
- [ ] Initramfs loading
- [ ] Kernel command line
- [ ] Boot protocol

### 4.2 Early kernel boot
- [ ] Entry point
- [ ] Decompression
- [ ] Early assembly
- [ ] Early page tables
- [ ] CPU setup
- [ ] Architecture setup
- [ ] Early console
- [ ] Early memory allocator
- [ ] Command line parsing
- [ ] Initcall levels
- [ ] SMP boot preparation
- [ ] Security setup
- [ ] Randomness initialization

### 4.3 Kernel initialization
- [ ] `start_kernel`
- [ ] Scheduler initialization
- [ ] Memory initialization
- [ ] IRQ initialization
- [ ] Timer initialization
- [ ] RCU initialization
- [ ] VFS initialization
- [ ] Device model initialization
- [ ] Driver core initialization
- [ ] Workqueue initialization
- [ ] Kernel threads initialization
- [ ] Init process creation
- [ ] Initramfs unpacking

### 4.4 Init and user space handoff
- [ ] PID 1
- [ ] initramfs init
- [ ] init process
- [ ] systemd
- [ ] BusyBox init
- [ ] Root filesystem mount
- [ ] switch_root
- [ ] pivot_root
- [ ] Kernel panic on missing init
- [ ] Early userspace
- [ ] udev startup
- [ ] Device discovery

### 4.5 Boot debugging
- [ ] Kernel command line debugging
- [ ] `earlyprintk`
- [ ] `earlycon`
- [ ] `initcall_debug`
- [ ] `ignore_loglevel`
- [ ] Serial console
- [ ] Boot delay
- [ ] Initramfs shell
- [ ] QEMU debug
- [ ] KGDB early debugging
- [ ] Boot hang analysis
- [ ] Panic analysis

---

## 5. Processes and Scheduling

### 5.1 Process model
- [ ] Task
- [ ] Process
- [ ] Thread
- [ ] `task_struct`
- [ ] PID
- [ ] TGID
- [ ] Thread group
- [ ] Kernel thread
- [ ] User thread
- [ ] Process state
- [ ] Parent process
- [ ] Child process
- [ ] Zombie process
- [ ] Orphan process
- [ ] Process credentials

### 5.2 Process lifecycle
- [ ] fork
- [ ] vfork
- [ ] clone
- [ ] execve
- [ ] exit
- [ ] wait
- [ ] Reparenting
- [ ] Signal delivery
- [ ] Process termination
- [ ] Exit status
- [ ] Copy-on-write
- [ ] Thread creation
- [ ] PID allocation
- [ ] PID namespaces

### 5.3 Scheduler fundamentals
- [ ] Scheduling class
- [ ] Runqueue
- [ ] Context switch
- [ ] Time slice
- [ ] Preemption
- [ ] Voluntary context switch
- [ ] Involuntary context switch
- [ ] CPU affinity
- [ ] Load balancing
- [ ] NUMA balancing
- [ ] Wakeup path
- [ ] Scheduler tick
- [ ] Scheduler latency
- [ ] Scheduler statistics

### 5.4 Scheduling classes
- [ ] Stop class
- [ ] Deadline class
- [ ] Real-time class
- [ ] Fair class
- [ ] Idle class
- [ ] Completely Fair Scheduler
- [ ] EEVDF scheduling
- [ ] SCHED_NORMAL
- [ ] SCHED_BATCH
- [ ] SCHED_IDLE
- [ ] SCHED_FIFO
- [ ] SCHED_RR
- [ ] SCHED_DEADLINE

### 5.5 Scheduler internals
- [ ] `sched_entity`
- [ ] Virtual runtime
- [ ] Red-black tree runqueue
- [ ] Scheduling domains
- [ ] Scheduling groups
- [ ] CPU capacity
- [ ] Energy-aware scheduling
- [ ] Utilization clamping
- [ ] Wakeup preemption
- [ ] Migration
- [ ] CPU hotplug
- [ ] Scheduler tracepoints
- [ ] Scheduler debugging

### 5.6 Real-time scheduling
- [ ] PREEMPT_RT
- [ ] Real-time priority
- [ ] Priority inheritance
- [ ] Priority inversion
- [ ] RT throttling
- [ ] Deadline scheduling
- [ ] Latency constraints
- [ ] Determinism
- [ ] Real-time mutex
- [ ] Threaded interrupts
- [ ] RT testing
- [ ] cyclictest

### 5.7 Scheduler observability
- [ ] `top`
- [ ] `htop`
- [ ] `ps`
- [ ] `perf sched`
- [ ] ftrace scheduler events
- [ ] schedstat
- [ ] `/proc/sched_debug`
- [ ] `/proc/schedstat`
- [ ] Runqueue latency
- [ ] Wakeup latency
- [ ] Context switch analysis
- [ ] CPU starvation analysis

---

## 6. Memory Management

### 6.1 Memory management fundamentals
- [ ] Physical memory
- [ ] Virtual memory
- [ ] Page
- [ ] Page frame
- [ ] Page table
- [ ] MMU
- [ ] TLB
- [ ] Address translation
- [ ] Page fault
- [ ] Major fault
- [ ] Minor fault
- [ ] Memory zones
- [ ] NUMA nodes
- [ ] Memory model

### 6.2 Page allocator
- [ ] Buddy allocator
- [ ] Free areas
- [ ] Page orders
- [ ] Allocation flags
- [ ] GFP_KERNEL
- [ ] GFP_ATOMIC
- [ ] GFP_USER
- [ ] GFP_DMA
- [ ] GFP_NOWAIT
- [ ] High-order allocation
- [ ] Fragmentation
- [ ] Compaction
- [ ] Page migration
- [ ] Watermarks
- [ ] kswapd

### 6.3 Slab allocators
- [ ] Slab allocator
- [ ] SLAB
- [ ] SLUB
- [ ] SLOB legacy
- [ ] kmalloc
- [ ] kfree
- [ ] kmem_cache
- [ ] Object cache
- [ ] Constructor
- [ ] Per-CPU cache
- [ ] Slab debugging
- [ ] Red zoning
- [ ] Poisoning
- [ ] Use-after-free detection

### 6.4 Virtual memory areas
- [ ] `mm_struct`
- [ ] VMA
- [ ] Maple Tree VMA management
- [ ] mmap
- [ ] munmap
- [ ] brk
- [ ] Stack mapping
- [ ] Heap mapping
- [ ] File-backed mapping
- [ ] Anonymous mapping
- [ ] Shared mapping
- [ ] Private mapping
- [ ] Copy-on-write
- [ ] Page permissions
- [ ] Memory protection

### 6.5 Page cache
- [ ] Page cache
- [ ] Address space
- [ ] Folios
- [ ] File-backed pages
- [ ] Dirty pages
- [ ] Writeback
- [ ] Readahead
- [ ] Cache eviction
- [ ] LRU lists
- [ ] Multi-gen LRU
- [ ] Memory reclaim
- [ ] Direct reclaim
- [ ] Shrinkers
- [ ] Buffer heads
- [ ] Large folios

### 6.6 Swap and reclaim
- [ ] Swap space
- [ ] Swap file
- [ ] Swap partition
- [ ] Swap cache
- [ ] Swappiness
- [ ] Page reclaim
- [ ] Anonymous reclaim
- [ ] File reclaim
- [ ] Direct reclaim
- [ ] kswapd
- [ ] OOM killer
- [ ] Memory pressure
- [ ] PSI
- [ ] zswap
- [ ] zram

### 6.7 Huge pages
- [ ] HugeTLB
- [ ] Transparent Huge Pages
- [ ] PMD-sized pages
- [ ] PUD-sized pages
- [ ] Huge page allocation
- [ ] Huge page migration
- [ ] THP defrag
- [ ] THP collapse
- [ ] Huge page splitting
- [ ] Performance trade-offs
- [ ] Memory fragmentation
- [ ] NUMA interactions

### 6.8 NUMA memory management
- [ ] NUMA node
- [ ] NUMA distance
- [ ] Local memory
- [ ] Remote memory
- [ ] NUMA balancing
- [ ] Memory policy
- [ ] Interleave policy
- [ ] Bind policy
- [ ] Preferred node
- [ ] Page migration
- [ ] NUMA-aware allocation
- [ ] Scheduler NUMA balancing

### 6.9 Memory debugging
- [ ] KASAN
- [ ] KFENCE
- [ ] KMSAN
- [ ] Kmemleak
- [ ] Page poisoning
- [ ] Slub debugging
- [ ] Debug pagealloc
- [ ] VM_BUG_ON
- [ ] Fault injection
- [ ] Memory leak analysis
- [ ] Use-after-free analysis
- [ ] Out-of-bounds analysis
- [ ] Double free analysis

---

## 7. System Calls and User-Kernel Interfaces

### 7.1 System call fundamentals
- [ ] System call table
- [ ] Syscall number
- [ ] Syscall ABI
- [ ] Syscall entry
- [ ] Syscall exit
- [ ] Architecture-specific syscall path
- [ ] Argument passing
- [ ] Return value
- [ ] errno
- [ ] Restartable syscalls
- [ ] Seccomp filtering
- [ ] Audit hooks
- [ ] Tracepoints

### 7.2 Adding a system call
- [ ] API design
- [ ] ABI stability
- [ ] Architecture wiring
- [ ] Common syscall implementation
- [ ] UAPI header
- [ ] Capability checks
- [ ] User pointer validation
- [ ] Copy from user
- [ ] Copy to user
- [ ] Compat syscall
- [ ] Documentation
- [ ] Selftests
- [ ] Review requirements

### 7.3 ioctl interface
- [ ] ioctl command encoding
- [ ] `_IO`
- [ ] `_IOR`
- [ ] `_IOW`
- [ ] `_IOWR`
- [ ] User pointer handling
- [ ] Compat ioctl
- [ ] Capability checks
- [ ] Size validation
- [ ] Command namespace
- [ ] ABI stability
- [ ] ioctl security
- [ ] ioctl alternatives

### 7.4 Procfs
- [ ] `/proc`
- [ ] Process entries
- [ ] Kernel information entries
- [ ] seq_file API
- [ ] proc_create
- [ ] Read callback
- [ ] Write callback
- [ ] Permission handling
- [ ] Text interface design
- [ ] ABI documentation
- [ ] Procfs anti-patterns

### 7.5 Sysfs
- [ ] `/sys`
- [ ] kobject
- [ ] kset
- [ ] Device attributes
- [ ] Driver attributes
- [ ] Bus attributes
- [ ] Attribute groups
- [ ] Show callback
- [ ] Store callback
- [ ] One value per file rule
- [ ] Stable ABI
- [ ] Sysfs lifecycle
- [ ] Uevent integration

### 7.6 Netlink
- [ ] Netlink socket
- [ ] Generic Netlink
- [ ] Netlink family
- [ ] Netlink attributes
- [ ] Multicast groups
- [ ] Kernel-to-user messages
- [ ] User-to-kernel messages
- [ ] Policy validation
- [ ] Dump operations
- [ ] Notifications
- [ ] rtnetlink
- [ ] nl80211
- [ ] libnl

### 7.7 UAPI design
- [ ] UAPI headers
- [ ] Stable ABI
- [ ] Versioning
- [ ] Extensibility
- [ ] Reserved fields
- [ ] Flags
- [ ] Size fields
- [ ] Alignment
- [ ] 32-bit compatibility
- [ ] Endianness
- [ ] Documentation
- [ ] Selftests
- [ ] Backward compatibility

---

## 8. Interrupts, Timers, and Deferred Work

### 8.1 Interrupt fundamentals
- [ ] Hardware interrupt
- [ ] Software interrupt
- [ ] Exception
- [ ] IRQ number
- [ ] Interrupt handler
- [ ] Top half
- [ ] Bottom half
- [ ] Interrupt context
- [ ] Interrupt masking
- [ ] Interrupt affinity
- [ ] Shared IRQ
- [ ] Threaded IRQ
- [ ] MSI
- [ ] MSI-X

### 8.2 IRQ handling
- [ ] request_irq
- [ ] free_irq
- [ ] IRQF_SHARED
- [ ] IRQF_ONESHOT
- [ ] IRQF_NO_THREAD
- [ ] IRQ return values
- [ ] IRQ_NONE
- [ ] IRQ_HANDLED
- [ ] IRQ_WAKE_THREAD
- [ ] Disable IRQ
- [ ] Enable IRQ
- [ ] Synchronize IRQ
- [ ] IRQ domain
- [ ] Generic IRQ layer

### 8.3 Softirqs and tasklets
- [ ] Softirq
- [ ] Tasklet
- [ ] HI softirq
- [ ] TIMER softirq
- [ ] NET_RX softirq
- [ ] NET_TX softirq
- [ ] BLOCK softirq
- [ ] RCU softirq
- [ ] ksoftirqd
- [ ] Softirq latency
- [ ] Tasklet deprecation awareness
- [ ] Bottom-half alternatives

### 8.4 Workqueues
- [ ] Workqueue
- [ ] Work item
- [ ] Delayed work
- [ ] Ordered workqueue
- [ ] Unbound workqueue
- [ ] System workqueue
- [ ] Queue work
- [ ] Cancel work
- [ ] Flush work
- [ ] Workqueue context
- [ ] Sleepable deferred work
- [ ] Workqueue concurrency
- [ ] Workqueue debugging

### 8.5 Timers
- [ ] Jiffies
- [ ] HZ
- [ ] Timer wheel
- [ ] Kernel timer
- [ ] High-resolution timer
- [ ] hrtimer
- [ ] Clocksource
- [ ] Clockevent
- [ ] Tick
- [ ] Tickless kernel
- [ ] NO_HZ
- [ ] Timer migration
- [ ] Timer slack
- [ ] Timekeeping

### 8.6 Timekeeping
- [ ] Monotonic time
- [ ] Realtime clock
- [ ] Boot time
- [ ] TSC
- [ ] Clocksource selection
- [ ] NTP adjustment
- [ ] Time namespaces
- [ ] ktime
- [ ] timespec64
- [ ] Time conversion
- [ ] Time overflow
- [ ] Year 2038 readiness

---

## 9. Concurrency and Synchronization

### 9.1 Concurrency fundamentals
- [ ] Race condition
- [ ] Critical section
- [ ] Atomicity
- [ ] Visibility
- [ ] Ordering
- [ ] Deadlock
- [ ] Livelock
- [ ] Starvation
- [ ] Lock contention
- [ ] Preemption
- [ ] Interrupt context
- [ ] SMP
- [ ] Memory model
- [ ] Lockless programming

### 9.2 Atomic operations
- [ ] atomic_t
- [ ] atomic64_t
- [ ] refcount_t
- [ ] percpu_ref
- [ ] Atomic read
- [ ] Atomic set
- [ ] Atomic increment
- [ ] Atomic decrement
- [ ] Compare-and-swap
- [ ] Test-and-set bit
- [ ] Atomic bit operations
- [ ] Reference counting
- [ ] Overflow-safe reference counting

### 9.3 Spinlocks
- [ ] spinlock_t
- [ ] spin_lock
- [ ] spin_unlock
- [ ] spin_lock_irqsave
- [ ] spin_unlock_irqrestore
- [ ] spin_lock_bh
- [ ] Raw spinlock
- [ ] IRQ-safe locking
- [ ] Bottom-half-safe locking
- [ ] Lock ordering
- [ ] Lock nesting
- [ ] Lockdep
- [ ] Spinlock in RT kernel

### 9.4 Mutexes and semaphores
- [ ] mutex
- [ ] mutex_lock
- [ ] mutex_unlock
- [ ] mutex_trylock
- [ ] Semaphore
- [ ] Completion
- [ ] Wait queue
- [ ] Sleeping lock
- [ ] Lock interruption
- [ ] Priority inheritance
- [ ] Real-time mutex
- [ ] Deadlock avoidance

### 9.5 Reader-writer synchronization
- [ ] rwlock
- [ ] rwsem
- [ ] seqlock
- [ ] seqcount
- [ ] Reader-heavy workloads
- [ ] Writer starvation
- [ ] Read-copy-update
- [ ] Per-CPU data
- [ ] Lock splitting
- [ ] Lock granularity
- [ ] Scalability trade-offs

### 9.6 RCU
- [ ] Read-Copy-Update
- [ ] RCU read-side critical section
- [ ] rcu_read_lock
- [ ] rcu_read_unlock
- [ ] synchronize_rcu
- [ ] call_rcu
- [ ] Grace period
- [ ] Quiescent state
- [ ] RCU pointer assignment
- [ ] RCU pointer dereference
- [ ] SRCU
- [ ] Tasks RCU
- [ ] RCU stall debugging

### 9.7 Memory barriers
- [ ] Compiler barrier
- [ ] CPU memory barrier
- [ ] smp_mb
- [ ] smp_rmb
- [ ] smp_wmb
- [ ] acquire semantics
- [ ] release semantics
- [ ] READ_ONCE
- [ ] WRITE_ONCE
- [ ] Data dependency barrier
- [ ] Control dependency
- [ ] Locking as memory barrier
- [ ] Architecture differences

### 9.8 Lock debugging
- [ ] lockdep
- [ ] PROVE_LOCKING
- [ ] DEBUG_SPINLOCK
- [ ] DEBUG_MUTEXES
- [ ] Lock inversion
- [ ] Lock order validation
- [ ] Atomic sleep warning
- [ ] Might sleep checks
- [ ] Deadlock diagnosis
- [ ] Lock contention tracing
- [ ] Perf lock analysis

---

## 10. Virtual File System and Filesystems

### 10.1 VFS fundamentals
- [ ] VFS
- [ ] Superblock
- [ ] Inode
- [ ] Dentry
- [ ] File object
- [ ] Mount
- [ ] Path lookup
- [ ] Namespace
- [ ] File operations
- [ ] Inode operations
- [ ] Super operations
- [ ] Dentry operations
- [ ] Address space operations
- [ ] Page cache integration

### 10.2 Path resolution
- [ ] Dcache
- [ ] Name lookup
- [ ] RCU path walk
- [ ] REF path walk
- [ ] Symlink resolution
- [ ] Mount traversal
- [ ] Chroot
- [ ] Mount namespace
- [ ] Bind mount
- [ ] Overlay mount
- [ ] Path permissions
- [ ] Lookup races

### 10.3 File operations
- [ ] open
- [ ] read
- [ ] write
- [ ] llseek
- [ ] mmap
- [ ] fsync
- [ ] flush
- [ ] release
- [ ] ioctl
- [ ] poll
- [ ] splice
- [ ] copy_file_range
- [ ] fallocate
- [ ] File locking

### 10.4 Filesystem types
- [ ] ext4
- [ ] XFS
- [ ] Btrfs
- [ ] F2FS
- [ ] tmpfs
- [ ] procfs
- [ ] sysfs
- [ ] debugfs
- [ ] tracefs
- [ ] overlayfs
- [ ] NFS
- [ ] SMB/CIFS
- [ ] FUSE
- [ ] SquashFS
- [ ] EROFS

### 10.5 Journaling and consistency
- [ ] Filesystem journal
- [ ] Metadata journaling
- [ ] Data journaling
- [ ] Ordered mode
- [ ] Writeback mode
- [ ] Barriers
- [ ] fsync semantics
- [ ] Crash consistency
- [ ] Orphan inode handling
- [ ] Log replay
- [ ] Checksums
- [ ] Copy-on-write filesystems

### 10.6 Filesystem development
- [ ] Register filesystem
- [ ] Mount implementation
- [ ] Superblock initialization
- [ ] Inode allocation
- [ ] Dentry handling
- [ ] File operations implementation
- [ ] Page cache integration
- [ ] Writeback integration
- [ ] xattr support
- [ ] ACL support
- [ ] fs_context API
- [ ] Testing with xfstests

### 10.7 Filesystem debugging
- [ ] dmesg
- [ ] ftrace VFS events
- [ ] tracepoints
- [ ] debugfs
- [ ] xfstests
- [ ] fsck
- [ ] blktrace
- [ ] perf
- [ ] lockdep
- [ ] KASAN
- [ ] Fault injection
- [ ] Crash consistency testing

---

## 11. Block Layer and Storage

### 11.1 Block layer fundamentals
- [ ] Block device
- [ ] Sector
- [ ] Logical block
- [ ] Physical block
- [ ] Request queue
- [ ] Bio
- [ ] Request
- [ ] Elevator
- [ ] I/O scheduler
- [ ] blk-mq
- [ ] Hardware queue
- [ ] Software queue
- [ ] Tag set
- [ ] Completion path

### 11.2 Block I/O path
- [ ] VFS read/write
- [ ] Page cache
- [ ] Filesystem block mapping
- [ ] Bio submission
- [ ] Request merging
- [ ] Request dispatch
- [ ] Device driver submission
- [ ] DMA
- [ ] Interrupt completion
- [ ] Bio completion
- [ ] Page unlock
- [ ] User wakeup

### 11.3 I/O schedulers
- [ ] none
- [ ] mq-deadline
- [ ] BFQ
- [ ] Kyber
- [ ] Request merging
- [ ] Read prioritization
- [ ] Writeback behavior
- [ ] Latency control
- [ ] Throughput control
- [ ] HDD vs SSD behavior
- [ ] NVMe behavior
- [ ] Scheduler selection

### 11.4 Storage drivers
- [ ] SCSI
- [ ] SATA
- [ ] NVMe
- [ ] USB storage
- [ ] MMC
- [ ] UFS
- [ ] Virtio block
- [ ] Loop device
- [ ] Device mapper
- [ ] MD RAID
- [ ] NBD
- [ ] iSCSI
- [ ] Fibre Channel

### 11.5 Device mapper
- [ ] dm core
- [ ] dm-linear
- [ ] dm-crypt
- [ ] dm-thin
- [ ] dm-cache
- [ ] dm-multipath
- [ ] dm-verity
- [ ] dm-integrity
- [ ] LVM
- [ ] Mapping table
- [ ] Target implementation
- [ ] Bio remapping

### 11.6 Writeback and dirty pages
- [ ] Dirty page
- [ ] Writeback
- [ ] Flusher threads
- [ ] Balance dirty pages
- [ ] Dirty ratio
- [ ] Dirty background ratio
- [ ] Writeback throttling
- [ ] cgroup writeback
- [ ] fsync
- [ ] Sync
- [ ] Laptop mode
- [ ] Writeback debugging

### 11.7 Storage debugging
- [ ] iostat
- [ ] blktrace
- [ ] bpftrace
- [ ] perf
- [ ] ftrace block events
- [ ] `/sys/block`
- [ ] `/proc/diskstats`
- [ ] nvme-cli
- [ ] smartctl
- [ ] dmsetup
- [ ] lsblk
- [ ] fio
- [ ] Latency histogram

---

## 12. Device Model and Driver Core

### 12.1 Driver model fundamentals
- [ ] Device
- [ ] Driver
- [ ] Bus
- [ ] Class
- [ ] Subsystem
- [ ] kobject
- [ ] kset
- [ ] Device hierarchy
- [ ] Driver binding
- [ ] Probe
- [ ] Remove
- [ ] Uevent
- [ ] Sysfs representation
- [ ] Module alias
- [ ] Hotplug

### 12.2 Device lifecycle
- [ ] Device registration
- [ ] Driver registration
- [ ] Match
- [ ] Probe
- [ ] Runtime PM
- [ ] Suspend
- [ ] Resume
- [ ] Remove
- [ ] Shutdown
- [ ] Reference counting
- [ ] Device-managed resources
- [ ] devm helpers
- [ ] Deferred probe

### 12.3 Bus types
- [ ] Platform bus
- [ ] PCI bus
- [ ] USB bus
- [ ] I2C bus
- [ ] SPI bus
- [ ] AMBA bus
- [ ] Virtio bus
- [ ] MDIO bus
- [ ] ACPI bus
- [ ] Device Tree platform devices
- [ ] Auxiliary bus
- [ ] MFD devices

### 12.4 Firmware description
- [ ] Device Tree
- [ ] Device Tree binding
- [ ] YAML binding schema
- [ ] Compatible string
- [ ] Reg property
- [ ] Interrupts property
- [ ] Clocks property
- [ ] Resets property
- [ ] GPIOs property
- [ ] Pin control property
- [ ] ACPI tables
- [ ] ACPI _HID
- [ ] ACPI _CID
- [ ] Software nodes

### 12.5 Device resources
- [ ] I/O memory resource
- [ ] I/O port resource
- [ ] IRQ resource
- [ ] DMA resource
- [ ] Clock resource
- [ ] Regulator resource
- [ ] GPIO resource
- [ ] Reset resource
- [ ] PHY resource
- [ ] Pin control resource
- [ ] Firmware resource
- [ ] Device links

### 12.6 Udev integration
- [ ] Uevent
- [ ] MODALIAS
- [ ] Device node creation
- [ ] udev rules
- [ ] Module autoloading
- [ ] Sysfs attributes
- [ ] Persistent naming
- [ ] Hotplug events
- [ ] Coldplug events
- [ ] Device permissions

---

## 13. Character Drivers

### 13.1 Character device fundamentals
- [ ] Character device
- [ ] Major number
- [ ] Minor number
- [ ] dev_t
- [ ] cdev
- [ ] Device node
- [ ] File operations
- [ ] Open
- [ ] Release
- [ ] Read
- [ ] Write
- [ ] ioctl
- [ ] poll
- [ ] mmap

### 13.2 Character device registration
- [ ] alloc_chrdev_region
- [ ] register_chrdev_region
- [ ] cdev_init
- [ ] cdev_add
- [ ] cdev_del
- [ ] class_create
- [ ] device_create
- [ ] device_destroy
- [ ] udev node creation
- [ ] Error cleanup path
- [ ] Module unload cleanup

### 13.3 User data handling
- [ ] copy_to_user
- [ ] copy_from_user
- [ ] get_user
- [ ] put_user
- [ ] access_ok
- [ ] User pointer validation
- [ ] Short read
- [ ] Short write
- [ ] Blocking read
- [ ] Non-blocking read
- [ ] Partial transfer
- [ ] EFAULT handling

### 13.4 Blocking and polling
- [ ] Wait queues
- [ ] wait_event
- [ ] wake_up
- [ ] Blocking open
- [ ] Blocking read
- [ ] Non-blocking mode
- [ ] O_NONBLOCK
- [ ] poll
- [ ] select
- [ ] epoll
- [ ] FASYNC
- [ ] Signal-driven I/O

### 13.5 mmap in drivers
- [ ] mmap file operation
- [ ] vm_area_struct
- [ ] remap_pfn_range
- [ ] vm_insert_page
- [ ] DMA buffer mapping
- [ ] Shared memory
- [ ] Page fault handler
- [ ] VMA operations
- [ ] Cache coherency
- [ ] Security checks

### 13.6 Character driver testing
- [ ] insmod
- [ ] rmmod
- [ ] modprobe
- [ ] lsmod
- [ ] dmesg
- [ ] Device node testing
- [ ] echo/cat testing
- [ ] strace
- [ ] ioctl test tool
- [ ] poll test tool
- [ ] Concurrency tests
- [ ] Fuzzing ioctl

---

## 14. Hardware Drivers

### 14.1 Platform drivers
- [ ] Platform device
- [ ] Platform driver
- [ ] of_match_table
- [ ] acpi_match_table
- [ ] Probe function
- [ ] Remove function
- [ ] Resource retrieval
- [ ] MMIO mapping
- [ ] IRQ retrieval
- [ ] Device-managed allocation
- [ ] Device Tree bindings
- [ ] Runtime PM

### 14.2 PCI drivers
- [ ] PCI device
- [ ] PCI driver
- [ ] Vendor ID
- [ ] Device ID
- [ ] PCI config space
- [ ] BAR
- [ ] MMIO
- [ ] DMA
- [ ] MSI
- [ ] MSI-X
- [ ] pci_enable_device
- [ ] pci_request_regions
- [ ] pci_iomap
- [ ] pci_set_drvdata
- [ ] pci_driver structure
- [ ] SR-IOV

### 14.3 USB drivers
- [ ] USB device
- [ ] USB interface
- [ ] Endpoint
- [ ] Control transfer
- [ ] Bulk transfer
- [ ] Interrupt transfer
- [ ] Isochronous transfer
- [ ] URB
- [ ] USB descriptor
- [ ] USB class driver
- [ ] usb_driver structure
- [ ] Probe
- [ ] Disconnect
- [ ] Runtime PM
- [ ] Autosuspend

### 14.4 I2C drivers
- [ ] I2C adapter
- [ ] I2C client
- [ ] I2C driver
- [ ] Device address
- [ ] SMBus helpers
- [ ] Register map
- [ ] regmap API
- [ ] Device Tree binding
- [ ] ACPI binding
- [ ] Probe
- [ ] Remove
- [ ] I2C mux
- [ ] I2C transfer debugging

### 14.5 SPI drivers
- [ ] SPI controller
- [ ] SPI device
- [ ] SPI driver
- [ ] Chip select
- [ ] SPI mode
- [ ] SPI speed
- [ ] Full-duplex transfer
- [ ] spi_message
- [ ] spi_transfer
- [ ] regmap SPI
- [ ] Device Tree binding
- [ ] Probe
- [ ] Remove

### 14.6 GPIO and pinctrl
- [ ] GPIO descriptor API
- [ ] gpiod_get
- [ ] gpiod_set_value
- [ ] gpiod_get_value
- [ ] GPIO direction
- [ ] GPIO interrupt
- [ ] GPIO consumer
- [ ] GPIO provider
- [ ] Pinctrl
- [ ] Pin muxing
- [ ] Pin configuration
- [ ] Device Tree GPIO specifier

### 14.7 Clock, reset, and regulator frameworks
- [ ] Common Clock Framework
- [ ] Clock provider
- [ ] Clock consumer
- [ ] clk_get
- [ ] clk_prepare_enable
- [ ] clk_disable_unprepare
- [ ] Reset controller
- [ ] Reset consumer
- [ ] Regulator framework
- [ ] Voltage regulator
- [ ] Enable regulator
- [ ] Disable regulator
- [ ] Power sequencing

### 14.8 DMA
- [ ] DMA API
- [ ] DMA mask
- [ ] Coherent DMA
- [ ] Streaming DMA
- [ ] dma_alloc_coherent
- [ ] dma_map_single
- [ ] dma_unmap_single
- [ ] Scatter-gather DMA
- [ ] DMA direction
- [ ] Cache coherency
- [ ] IOMMU
- [ ] DMA engine
- [ ] DMA descriptor
- [ ] DMA completion

---

## 15. Network Stack and Network Drivers

### 15.1 Networking fundamentals
- [ ] Network namespace
- [ ] Netdevice
- [ ] sk_buff
- [ ] Socket
- [ ] Protocol family
- [ ] TCP/IP stack
- [ ] Ethernet
- [ ] ARP
- [ ] IPv4
- [ ] IPv6
- [ ] TCP
- [ ] UDP
- [ ] ICMP
- [ ] Routing
- [ ] Neighbor table

### 15.2 Packet receive path
- [ ] NIC interrupt
- [ ] NAPI poll
- [ ] DMA completion
- [ ] skb allocation
- [ ] GRO
- [ ] RX queue
- [ ] XDP hook
- [ ] TC ingress
- [ ] Netfilter prerouting
- [ ] Routing decision
- [ ] Local delivery
- [ ] Socket receive queue
- [ ] User-space read

### 15.3 Packet transmit path
- [ ] Socket send
- [ ] Protocol output
- [ ] Routing lookup
- [ ] Neighbor lookup
- [ ] Netfilter output
- [ ] TC egress
- [ ] qdisc enqueue
- [ ] Driver start_xmit
- [ ] DMA mapping
- [ ] TX completion
- [ ] Byte Queue Limits
- [ ] TCP segmentation offload
- [ ] Checksum offload

### 15.4 Network device drivers
- [ ] net_device
- [ ] net_device_ops
- [ ] ethtool_ops
- [ ] NAPI
- [ ] RX ring
- [ ] TX ring
- [ ] Interrupt moderation
- [ ] Multi-queue NIC
- [ ] RSS
- [ ] RPS
- [ ] XPS
- [ ] GRO
- [ ] GSO
- [ ] TSO
- [ ] Checksum offload
- [ ] VLAN offload

### 15.5 Netfilter and nftables
- [ ] Netfilter hooks
- [ ] PREROUTING
- [ ] INPUT
- [ ] FORWARD
- [ ] OUTPUT
- [ ] POSTROUTING
- [ ] Conntrack
- [ ] NAT
- [ ] nftables
- [ ] iptables legacy
- [ ] Packet filtering
- [ ] Firewall debugging
- [ ] Hook priority

### 15.6 Traffic control
- [ ] qdisc
- [ ] Classful qdisc
- [ ] Classless qdisc
- [ ] pfifo_fast
- [ ] fq_codel
- [ ] cake
- [ ] HTB
- [ ] clsact
- [ ] TC filter
- [ ] TC action
- [ ] eBPF TC programs
- [ ] Rate limiting
- [ ] Shaping
- [ ] Policing

### 15.7 XDP and high-performance networking
- [ ] XDP
- [ ] XDP_PASS
- [ ] XDP_DROP
- [ ] XDP_TX
- [ ] XDP_REDIRECT
- [ ] Native XDP
- [ ] Generic XDP
- [ ] Offloaded XDP
- [ ] AF_XDP
- [ ] Zero-copy
- [ ] XSK map
- [ ] Page pool
- [ ] BPF helpers
- [ ] High packet rate processing

### 15.8 Network debugging
- [ ] iproute2
- [ ] ss
- [ ] tcpdump
- [ ] ethtool
- [ ] nft
- [ ] bpftool
- [ ] drop monitor
- [ ] perf
- [ ] ftrace
- [ ] tracepoints
- [ ] packetdrill
- [ ] netconsole
- [ ] tc flower
- [ ] skb tracing

---

## 16. eBPF

### 16.1 eBPF fundamentals
- [ ] BPF virtual machine
- [ ] eBPF bytecode
- [ ] BPF verifier
- [ ] BPF JIT
- [ ] BPF program
- [ ] BPF map
- [ ] BPF helper
- [ ] BPF attachment point
- [ ] BPF type format
- [ ] CO-RE
- [ ] libbpf
- [ ] bpftool
- [ ] BPF skeleton
- [ ] BPF security model

### 16.2 BPF program types
- [ ] Socket filter
- [ ] Kprobe
- [ ] Kretprobe
- [ ] Tracepoint
- [ ] Raw tracepoint
- [ ] Uprobe
- [ ] Uretprobe
- [ ] Perf event
- [ ] XDP
- [ ] TC classifier
- [ ] Cgroup BPF
- [ ] LSM BPF
- [ ] Sockops
- [ ] Struct ops
- [ ] Iterator programs

### 16.3 BPF maps
- [ ] Hash map
- [ ] Array map
- [ ] Per-CPU hash map
- [ ] Per-CPU array map
- [ ] LRU hash map
- [ ] Ring buffer
- [ ] Perf event array
- [ ] Stack trace map
- [ ] Program array
- [ ] Tail calls
- [ ] Sockmap
- [ ] Devmap
- [ ] XSK map
- [ ] Map pinning
- [ ] Map-in-map

### 16.4 BPF verifier
- [ ] Control flow validation
- [ ] Bounded loops
- [ ] Pointer tracking
- [ ] Type tracking
- [ ] Bounds checking
- [ ] Helper call validation
- [ ] Stack limit
- [ ] Instruction limit
- [ ] State pruning
- [ ] Verifier logs
- [ ] Common verifier errors
- [ ] Verifier-friendly code

### 16.5 BPF tracing
- [ ] kprobes
- [ ] tracepoints
- [ ] uprobes
- [ ] USDT probes
- [ ] fentry
- [ ] fexit
- [ ] BPF ring buffer
- [ ] Stack traces
- [ ] Latency histograms
- [ ] Function latency tracing
- [ ] System call tracing
- [ ] Scheduler tracing
- [ ] Block I/O tracing
- [ ] Network tracing

### 16.6 BPF development tools
- [ ] clang BPF target
- [ ] libbpf
- [ ] bpftool
- [ ] bpftrace
- [ ] BCC
- [ ] pahole
- [ ] vmlinux.h
- [ ] CO-RE relocation
- [ ] BPF skeleton
- [ ] BPF selftests
- [ ] BPF debugging
- [ ] BPF performance analysis

---

## 17. Namespaces, Cgroups, and Containers

### 17.1 Namespaces
- [ ] PID namespace
- [ ] Mount namespace
- [ ] Network namespace
- [ ] UTS namespace
- [ ] IPC namespace
- [ ] User namespace
- [ ] Cgroup namespace
- [ ] Time namespace
- [ ] Namespace creation
- [ ] Namespace joining
- [ ] Namespace lifetime
- [ ] Namespace file descriptors
- [ ] setns
- [ ] unshare
- [ ] clone flags

### 17.2 Cgroups
- [ ] Cgroup v1
- [ ] Cgroup v2
- [ ] Unified hierarchy
- [ ] Controllers
- [ ] CPU controller
- [ ] Memory controller
- [ ] I/O controller
- [ ] PIDs controller
- [ ] Cpuset controller
- [ ] Freezer
- [ ] Pressure Stall Information
- [ ] Resource accounting
- [ ] Resource limiting
- [ ] Delegation
- [ ] systemd integration

### 17.3 Container primitives
- [ ] chroot
- [ ] pivot_root
- [ ] Mount propagation
- [ ] Overlayfs
- [ ] Capabilities
- [ ] Seccomp
- [ ] AppArmor
- [ ] SELinux
- [ ] User namespaces
- [ ] Rootless containers
- [ ] Cgroup limits
- [ ] Network namespaces
- [ ] Veth pairs
- [ ] Bridge networking

### 17.4 Container runtimes
- [ ] OCI runtime spec
- [ ] OCI image spec
- [ ] runc
- [ ] crun
- [ ] containerd
- [ ] CRI-O
- [ ] Docker Engine
- [ ] Runtime class
- [ ] gVisor
- [ ] Kata Containers
- [ ] Firecracker
- [ ] Seccomp profiles
- [ ] AppArmor profiles

### 17.5 Kubernetes kernel interfaces
- [ ] CNI
- [ ] CSI
- [ ] CRI
- [ ] cgroups
- [ ] namespaces
- [ ] iptables
- [ ] nftables
- [ ] eBPF CNI
- [ ] overlayfs
- [ ] seccomp
- [ ] AppArmor
- [ ] SELinux
- [ ] kubelet interactions
- [ ] container runtime interactions

---

## 18. Security and Hardening

### 18.1 Kernel security model
- [ ] Discretionary access control
- [ ] Mandatory access control
- [ ] Capabilities
- [ ] Credentials
- [ ] User namespaces
- [ ] Securebits
- [ ] Keyrings
- [ ] LSM framework
- [ ] Audit subsystem
- [ ] Seccomp
- [ ] Attack surface
- [ ] Privilege escalation
- [ ] Defense in depth

### 18.2 Linux Security Modules
- [ ] LSM hooks
- [ ] SELinux
- [ ] AppArmor
- [ ] Smack
- [ ] TOMOYO
- [ ] Landlock
- [ ] BPF LSM
- [ ] Yama
- [ ] Lockdown
- [ ] Integrity subsystem
- [ ] IMA
- [ ] EVM
- [ ] LSM stacking

### 18.3 Capabilities
- [ ] Capability model
- [ ] Permitted set
- [ ] Effective set
- [ ] Inheritable set
- [ ] Ambient set
- [ ] Bounding set
- [ ] CAP_SYS_ADMIN
- [ ] CAP_NET_ADMIN
- [ ] CAP_SYS_MODULE
- [ ] CAP_BPF
- [ ] CAP_PERFMON
- [ ] Capability checks
- [ ] Capability minimization

### 18.4 Seccomp
- [ ] Seccomp strict mode
- [ ] Seccomp-BPF
- [ ] Syscall filtering
- [ ] Allowlist
- [ ] Denylist
- [ ] Return actions
- [ ] SECCOMP_RET_KILL
- [ ] SECCOMP_RET_ERRNO
- [ ] SECCOMP_RET_TRACE
- [ ] SECCOMP_RET_USER_NOTIF
- [ ] Container seccomp profiles
- [ ] Seccomp debugging

### 18.5 Kernel hardening features
- [ ] KASLR
- [ ] SMEP
- [ ] SMAP
- [ ] KPTI
- [ ] Stack canaries
- [ ] Stack protector
- [ ] FORTIFY_SOURCE
- [ ] Hardened usercopy
- [ ] Init-on-alloc
- [ ] Init-on-free
- [ ] SLAB freelist randomization
- [ ] SLAB freelist hardening
- [ ] CFI
- [ ] Shadow call stack
- [ ] Read-only kernel text
- [ ] W^X policy

### 18.6 Integrity and trust
- [ ] Secure Boot
- [ ] Kernel module signing
- [ ] IMA
- [ ] EVM
- [ ] dm-verity
- [ ] fs-verity
- [ ] Keyrings
- [ ] Trusted keys
- [ ] Encrypted keys
- [ ] Lockdown mode
- [ ] TPM
- [ ] Measured boot
- [ ] Remote attestation

### 18.7 Vulnerability classes
- [ ] Use-after-free
- [ ] Double free
- [ ] Out-of-bounds read
- [ ] Out-of-bounds write
- [ ] Integer overflow
- [ ] Race condition
- [ ] TOCTOU
- [ ] Uninitialized memory
- [ ] Information leak
- [ ] Null pointer dereference
- [ ] Reference count overflow
- [ ] Speculative execution attacks
- [ ] Side channels
- [ ] Logic bugs

### 18.8 Security testing
- [ ] KASAN
- [ ] KMSAN
- [ ] UBSAN
- [ ] KFENCE
- [ ] syzkaller
- [ ] Trinity
- [ ] Fault injection
- [ ] LKDTM
- [ ] LSM selftests
- [ ] Seccomp selftests
- [ ] Fuzzing syscalls
- [ ] Fuzzing drivers
- [ ] Static analysis
- [ ] CodeQL
- [ ] Smatch
- [ ] Sparse

---

## 19. Tracing, Profiling, and Debugging

### 19.1 Kernel logging
- [ ] printk
- [ ] pr_info
- [ ] pr_debug
- [ ] dev_info
- [ ] dev_dbg
- [ ] Dynamic debug
- [ ] dmesg
- [ ] loglevel
- [ ] ratelimited logging
- [ ] Once logging
- [ ] Trace printing
- [ ] Panic logging
- [ ] Netconsole
- [ ] pstore

### 19.2 ftrace
- [ ] Function tracer
- [ ] Function graph tracer
- [ ] Event tracing
- [ ] Tracepoints
- [ ] Tracefs
- [ ] set_ftrace_filter
- [ ] set_graph_function
- [ ] trace_marker
- [ ] Hist triggers
- [ ] Synthetic events
- [ ] Latency tracers
- [ ] IRQ-off tracer
- [ ] Preempt-off tracer
- [ ] Wakeup tracer

### 19.3 perf
- [ ] perf stat
- [ ] perf record
- [ ] perf report
- [ ] perf top
- [ ] perf trace
- [ ] perf sched
- [ ] perf lock
- [ ] Hardware counters
- [ ] Software counters
- [ ] Call graphs
- [ ] Flame graphs
- [ ] Sampling
- [ ] PMU events
- [ ] Kernel symbols

### 19.4 BPF tracing tools
- [ ] bpftrace
- [ ] BCC tools
- [ ] execsnoop
- [ ] opensnoop
- [ ] biolatency
- [ ] tcplife
- [ ] runqlat
- [ ] offcputime
- [ ] profile
- [ ] funclatency
- [ ] kprobe tracing
- [ ] tracepoint tracing
- [ ] Uprobe tracing

### 19.5 Crash debugging
- [ ] Kernel oops
- [ ] Kernel panic
- [ ] Call trace
- [ ] Stack dump
- [ ] Register dump
- [ ] Oops decoding
- [ ] addr2line
- [ ] objdump
- [ ] gdb vmlinux
- [ ] kdump
- [ ] crash utility
- [ ] vmcore
- [ ] pstore
- [ ] ramoops

### 19.6 KGDB and live debugging
- [ ] KGDB
- [ ] KDB
- [ ] Serial debugging
- [ ] QEMU gdbstub
- [ ] Breakpoints
- [ ] Watchpoints
- [ ] Symbol loading
- [ ] Remote debugging
- [ ] Early boot debugging
- [ ] Module debugging
- [ ] Race debugging caveats

### 19.7 Static and dynamic analysis
- [ ] Sparse
- [ ] Smatch
- [ ] Coccinelle
- [ ] clang analyzer
- [ ] GCC warnings
- [ ] W=1
- [ ] W=2
- [ ] KASAN
- [ ] KCSAN
- [ ] KMSAN
- [ ] UBSAN
- [ ] KFENCE
- [ ] kmemleak
- [ ] lockdep

---

## 20. Testing

### 20.1 Kernel selftests
- [ ] kselftest
- [ ] Build selftests
- [ ] Run selftests
- [ ] Subsystem selftests
- [ ] TAP output
- [ ] Test dependencies
- [ ] Test isolation
- [ ] Test failures
- [ ] Test in VM
- [ ] Test in CI
- [ ] Add new selftest
- [ ] Maintain selftests

### 20.2 KUnit
- [ ] KUnit framework
- [ ] Unit tests
- [ ] Test suite
- [ ] Test case
- [ ] Assertions
- [ ] Mocking
- [ ] UML backend
- [ ] QEMU backend
- [ ] kunit.py
- [ ] KUnit config
- [ ] Test coverage
- [ ] Subsystem unit testing

### 20.3 LTP and external tests
- [ ] Linux Test Project
- [ ] POSIX tests
- [ ] Syscall tests
- [ ] Filesystem tests
- [ ] Memory tests
- [ ] Scheduler tests
- [ ] Container tests
- [ ] Stress tests
- [ ] Regression tests
- [ ] CI integration

### 20.4 Filesystem testing
- [ ] xfstests
- [ ] fstests
- [ ] Generic tests
- [ ] Filesystem-specific tests
- [ ] Scratch device
- [ ] Test device
- [ ] fsstress
- [ ] fsx
- [ ] Crash consistency testing
- [ ] Power-failure simulation

### 20.5 Fuzzing
- [ ] syzkaller
- [ ] syzbot
- [ ] Syscall fuzzing
- [ ] Driver fuzzing
- [ ] Filesystem fuzzing
- [ ] Network fuzzing
- [ ] USB fuzzing
- [ ] Coverage-guided fuzzing
- [ ] Reproducer minimization
- [ ] Crash triage
- [ ] Fix verification
- [ ] Regression prevention

### 20.6 Performance testing
- [ ] perf benchmarks
- [ ] hackbench
- [ ] stress-ng
- [ ] fio
- [ ] netperf
- [ ] iperf
- [ ] cyclictest
- [ ] lmbench
- [ ] UnixBench
- [ ] Kernel compile benchmark
- [ ] Boot time benchmark
- [ ] Memory allocation benchmark
- [ ] Scheduler latency benchmark

### 20.7 Continuous integration
- [ ] KernelCI
- [ ] Build bots
- [ ] 0-day test robot
- [ ] syzbot
- [ ] Patchwork CI
- [ ] GitHub Actions for local trees
- [ ] GitLab CI for local trees
- [ ] QEMU smoke tests
- [ ] Cross-arch builds
- [ ] Static analysis CI
- [ ] Regression tracking
- [ ] Test result reporting

---

## 21. Architecture-Specific Development

### 21.1 x86
- [ ] x86 boot protocol
- [ ] Real mode legacy
- [ ] Long mode
- [ ] Page tables
- [ ] IDT
- [ ] GDT
- [ ] TSS
- [ ] APIC
- [ ] IOAPIC
- [ ] MSR
- [ ] CPUID
- [ ] TSC
- [ ] KVM interactions
- [ ] Spectre/Meltdown mitigations

### 21.2 ARM and ARM64
- [ ] ARM exception levels
- [ ] Device Tree
- [ ] PSCI
- [ ] GIC
- [ ] MMU setup
- [ ] Cache maintenance
- [ ] DMA coherency
- [ ] SMC calls
- [ ] ACPI on ARM64
- [ ] Kernel image format
- [ ] KASLR
- [ ] Pointer authentication
- [ ] Memory tagging

### 21.3 RISC-V
- [ ] RISC-V privilege levels
- [ ] SBI
- [ ] Device Tree
- [ ] Page tables
- [ ] Interrupt controllers
- [ ] Timer
- [ ] SMP boot
- [ ] Vector extension
- [ ] RISC-V KVM
- [ ] RISC-V platform drivers
- [ ] RISC-V memory model

### 21.4 Other architectures
- [ ] PowerPC
- [ ] s390
- [ ] MIPS
- [ ] LoongArch
- [ ] SPARC
- [ ] Alpha legacy
- [ ] PA-RISC legacy
- [ ] Architecture maintainership
- [ ] Architecture-specific Kconfig
- [ ] Architecture-specific boot
- [ ] Architecture-specific syscalls

### 21.5 Cross-architecture concerns
- [ ] Endianness
- [ ] Alignment
- [ ] Atomic operations
- [ ] Memory barriers
- [ ] Page size
- [ ] Cache coherence
- [ ] DMA constraints
- [ ] Syscall ABI
- [ ] Compat layer
- [ ] Toolchain support
- [ ] Cross-compilation
- [ ] Cross-arch testing

---

## 22. Virtualization

### 22.1 Virtualization fundamentals
- [ ] Hypervisor
- [ ] Type 1 hypervisor
- [ ] Type 2 hypervisor
- [ ] Guest kernel
- [ ] Host kernel
- [ ] Virtual CPU
- [ ] Virtual memory
- [ ] Device emulation
- [ ] Paravirtualization
- [ ] Hardware virtualization
- [ ] VM exits
- [ ] Hypercalls

### 22.2 KVM
- [ ] KVM module
- [ ] `/dev/kvm`
- [ ] VM creation
- [ ] vCPU creation
- [ ] Memory slots
- [ ] KVM ioctl API
- [ ] VM exits
- [ ] x86 VMX
- [ ] AMD SVM
- [ ] ARM virtualization
- [ ] Nested virtualization
- [ ] KVM tracepoints
- [ ] KVM selftests

### 22.3 Virtio
- [ ] Virtio device
- [ ] Virtqueue
- [ ] Descriptor ring
- [ ] Virtio PCI
- [ ] Virtio MMIO
- [ ] virtio-net
- [ ] virtio-blk
- [ ] virtio-scsi
- [ ] virtio-fs
- [ ] virtio-balloon
- [ ] vhost
- [ ] vhost-net
- [ ] vDPA

### 22.4 Containers vs virtual machines
- [ ] Kernel sharing
- [ ] Hardware virtualization
- [ ] Namespace isolation
- [ ] Cgroup isolation
- [ ] Security boundary
- [ ] Startup time
- [ ] Resource overhead
- [ ] Device access
- [ ] Workload isolation
- [ ] Kata Containers
- [ ] gVisor
- [ ] Firecracker

### 22.5 Virtualization debugging
- [ ] QEMU monitor
- [ ] QEMU trace events
- [ ] KVM tracepoints
- [ ] perf kvm
- [ ] ftrace
- [ ] Guest kernel debugging
- [ ] Host kernel debugging
- [ ] VM exit analysis
- [ ] Virtio queue analysis
- [ ] Nested virtualization debugging

---

## 23. Power Management

### 23.1 Power management fundamentals
- [ ] System sleep
- [ ] Suspend to RAM
- [ ] Suspend to disk
- [ ] Runtime power management
- [ ] Device power states
- [ ] CPU idle states
- [ ] CPU frequency scaling
- [ ] Energy model
- [ ] Wakeup source
- [ ] Wake locks
- [ ] Power domains
- [ ] Clock gating
- [ ] Regulator control

### 23.2 CPU power management
- [ ] cpuidle
- [ ] CPU idle governor
- [ ] C-states
- [ ] cpufreq
- [ ] CPU frequency governor
- [ ] schedutil
- [ ] performance governor
- [ ] powersave governor
- [ ] Energy-aware scheduling
- [ ] Thermal pressure
- [ ] Frequency invariance
- [ ] Capacity awareness

### 23.3 Device runtime PM
- [ ] pm_runtime_enable
- [ ] pm_runtime_get
- [ ] pm_runtime_put
- [ ] Autosuspend
- [ ] Runtime suspend callback
- [ ] Runtime resume callback
- [ ] Usage counter
- [ ] Active state
- [ ] Suspended state
- [ ] Parent-child dependencies
- [ ] Device links

### 23.4 System suspend and resume
- [ ] Freeze processes
- [ ] Suspend devices
- [ ] Late suspend
- [ ] Noirq suspend
- [ ] Platform suspend
- [ ] Wakeup event
- [ ] Resume devices
- [ ] Early resume
- [ ] Thaw processes
- [ ] Suspend blockers
- [ ] Resume ordering
- [ ] Suspend debugging

### 23.5 Thermal management
- [ ] Thermal zone
- [ ] Cooling device
- [ ] Thermal governor
- [ ] Trip point
- [ ] Passive cooling
- [ ] Active cooling
- [ ] CPU thermal throttling
- [ ] GPU thermal throttling
- [ ] Device thermal constraints
- [ ] Thermal pressure in scheduler
- [ ] Thermal debugging

---

## 24. Rust for Linux

### 24.1 Rust kernel fundamentals
- [ ] Rust for Linux project
- [ ] Rust support in kernel tree
- [ ] Rust toolchain requirements
- [ ] Kbuild Rust integration
- [ ] Rust module
- [ ] Rust abstractions
- [ ] Safe Rust
- [ ] Unsafe Rust
- [ ] Ownership
- [ ] Borrowing
- [ ] Lifetimes
- [ ] Error handling
- [ ] No_std environment
- [ ] Kernel allocator interactions

### 24.2 Rust kernel APIs
- [ ] Kernel crate
- [ ] Module macro
- [ ] Device abstractions
- [ ] Driver abstractions
- [ ] Error types
- [ ] C string abstractions
- [ ] Pinning
- [ ] Reference counting
- [ ] Locking abstractions
- [ ] Workqueue abstractions
- [ ] File abstractions
- [ ] Firmware abstractions

### 24.3 Rust driver development
- [ ] Rust sample module
- [ ] Rust platform driver
- [ ] Rust character driver
- [ ] Rust PHY driver
- [ ] Rust DRM abstractions
- [ ] Rust block abstractions
- [ ] Rust network abstractions
- [ ] FFI with C
- [ ] Safety invariants
- [ ] Review expectations
- [ ] Testing Rust code

### 24.4 Rust limitations and integration
- [ ] API coverage limitations
- [ ] Unsafe boundary
- [ ] C interoperability
- [ ] Kernel coding style for Rust
- [ ] Toolchain versioning
- [ ] Build configuration
- [ ] Documentation expectations
- [ ] Incremental adoption
- [ ] Subsystem maintainer acceptance

---

## 25. Kernel Contribution Workflow

### 25.1 Documentation and process
- [ ] Read `Documentation/process/`
- [ ] Coding style
- [ ] Submitting patches
- [ ] Maintainer handbook
- [ ] Development process
- [ ] Stable kernel rules
- [ ] Security bugs process
- [ ] Regression rules
- [ ] Code of conduct
- [ ] Licensing rules
- [ ] DCO
- [ ] SPDX identifiers

### 25.2 Finding maintainers
- [ ] MAINTAINERS file
- [ ] `scripts/get_maintainer.pl`
- [ ] Subsystem mailing list
- [ ] Maintainer tree
- [ ] Patchwork project
- [ ] Lore archive
- [ ] Recent commit history
- [ ] Reviewers
- [ ] CC list
- [ ] Maintainer expectations

### 25.3 Patch preparation
- [ ] One logical change per patch
- [ ] Patch series
- [ ] Cover letter
- [ ] Commit subject
- [ ] Commit body
- [ ] Fixes tag
- [ ] Reported-by tag
- [ ] Tested-by tag
- [ ] Reviewed-by tag
- [ ] Acked-by tag
- [ ] Signed-off-by tag
- [ ] Link tag
- [ ] Changelog between versions
- [ ] Diffstat

### 25.4 Patch submission
- [ ] Plain text email
- [ ] `git format-patch`
- [ ] `git send-email`
- [ ] Mailing list etiquette
- [ ] Avoid HTML email
- [ ] Threaded patch series
- [ ] Versioned patch series
- [ ] Responding to review
- [ ] Applying feedback
- [ ] Resending patches
- [ ] Patchwork tracking
- [ ] Lore tracking

### 25.5 Review and merge process
- [ ] Maintainer review
- [ ] Peer review
- [ ] CI feedback
- [ ] Build bot feedback
- [ ] Static analysis feedback
- [ ] Requested changes
- [ ] Acked-by
- [ ] Reviewed-by
- [ ] Maintainer tree merge
- [ ] Linux-next integration
- [ ] Mainline merge window
- [ ] Stable backport
- [ ] Regression follow-up

### 25.6 Stable and backport workflow
- [ ] Stable rules
- [ ] Fixes-only policy
- [ ] `Cc: stable`
- [ ] Upstream-first rule
- [ ] Backport patch
- [ ] Conflict resolution
- [ ] Stable review queue
- [ ] Regression handling
- [ ] Longterm kernel backport
- [ ] Distribution kernel backport
- [ ] CVE fix backport

---

## 26. Kernel Subsystems

### 26.1 Core kernel
- [ ] Scheduler
- [ ] Timekeeping
- [ ] Workqueues
- [ ] RCU
- [ ] Locking
- [ ] Signals
- [ ] Fork/exec
- [ ] Namespaces
- [ ] Cgroups
- [ ] Kthreads
- [ ] Syscalls
- [ ] Audit
- [ ] printk

### 26.2 Memory management
- [ ] Page allocator
- [ ] Slab allocator
- [ ] Virtual memory
- [ ] Page cache
- [ ] Reclaim
- [ ] Swap
- [ ] Huge pages
- [ ] NUMA
- [ ] Memory cgroups
- [ ] OOM killer
- [ ] DAMON
- [ ] Memory hotplug

### 26.3 Filesystems
- [ ] VFS
- [ ] ext4
- [ ] XFS
- [ ] Btrfs
- [ ] F2FS
- [ ] tmpfs
- [ ] procfs
- [ ] sysfs
- [ ] overlayfs
- [ ] NFS
- [ ] SMB
- [ ] FUSE
- [ ] fscrypt
- [ ] fsverity

### 26.4 Storage
- [ ] Block layer
- [ ] blk-mq
- [ ] Device mapper
- [ ] MD RAID
- [ ] SCSI
- [ ] NVMe
- [ ] ATA
- [ ] MMC
- [ ] UFS
- [ ] Loop
- [ ] NBD
- [ ] Writeback
- [ ] I/O schedulers

### 26.5 Networking
- [ ] Core networking
- [ ] IPv4
- [ ] IPv6
- [ ] TCP
- [ ] UDP
- [ ] SCTP
- [ ] MPTCP
- [ ] Netfilter
- [ ] nftables
- [ ] Traffic control
- [ ] XDP
- [ ] Wireless
- [ ] Bluetooth
- [ ] Ethernet drivers

### 26.6 Security
- [ ] LSM
- [ ] SELinux
- [ ] AppArmor
- [ ] Landlock
- [ ] Seccomp
- [ ] Audit
- [ ] Capabilities
- [ ] Keyrings
- [ ] IMA
- [ ] EVM
- [ ] Lockdown
- [ ] Integrity
- [ ] Kernel hardening

### 26.7 Drivers
- [ ] Driver core
- [ ] PCI
- [ ] USB
- [ ] I2C
- [ ] SPI
- [ ] GPIO
- [ ] Pinctrl
- [ ] Clocks
- [ ] Regulators
- [ ] DRM
- [ ] ALSA
- [ ] V4L2
- [ ] Input
- [ ] HID
- [ ] Thermal
- [ ] Power supply

### 26.8 Virtualization and containers
- [ ] KVM
- [ ] Virtio
- [ ] vhost
- [ ] vfio
- [ ] namespaces
- [ ] cgroups
- [ ] seccomp
- [ ] overlayfs
- [ ] io_uring
- [ ] eBPF
- [ ] pidfd
- [ ] user namespaces

---

## 27. Release and Version Awareness

### 27.1 Release types
- [ ] Mainline release
- [ ] Stable release
- [ ] Longterm release
- [ ] Release candidate
- [ ] Linux-next snapshot
- [ ] Subsystem tree
- [ ] Maintainer tree
- [ ] Distribution kernel
- [ ] Vendor kernel
- [ ] Android common kernel
- [ ] Real-time kernel
- [ ] Enterprise kernel

### 27.2 Current active lines
- [ ] Linux 7.1 stable line
- [ ] Linux 7.0 EOL awareness
- [ ] Linux 6.18 longterm line
- [ ] Linux 6.12 longterm line
- [ ] Linux 6.6 longterm line
- [ ] Linux 6.1 longterm line
- [ ] Linux 5.15 longterm line
- [ ] Linux 5.10 longterm line
- [ ] Linux-next tracking
- [ ] Distribution-specific kernel tracking

### 27.3 Release cadence
- [ ] Merge window
- [ ] Release candidate cycle
- [ ] Mainline release
- [ ] Stable backport cycle
- [ ] Longterm maintenance
- [ ] End of life
- [ ] Regression tracking
- [ ] Security fixes
- [ ] Maintainer pull requests
- [ ] Linus tree merge
- [ ] Linux-next integration
- [ ] Subsystem freeze periods

### 27.4 Major historical milestones
- [ ] Linux 0.x early development
- [ ] Linux 1.x early stable kernels
- [ ] Linux 2.0 SMP support era
- [ ] Linux 2.4 scalability and USB era
- [ ] Linux 2.6 development model era
- [ ] Linux 3.x versioning simplification
- [ ] Linux 4.x modern subsystem expansion
- [ ] Linux 5.x io_uring and BPF expansion era
- [ ] Linux 6.x Rust, folios, MGLRU, EEVDF, PREEMPT_RT mainline era
- [ ] Linux 7.x current mainline era

### 27.5 Version-specific learning targets
- [ ] Study features from current stable kernel
- [ ] Study active LTS kernels used by distributions
- [ ] Study removed APIs before upgrading
- [ ] Study deprecated APIs before contributing
- [ ] Study subsystem-specific release notes
- [ ] Study KernelNewbies changelogs
- [ ] Study LWN merge-window coverage
- [ ] Study docs.kernel.org updates
- [ ] Study stable backport policy
- [ ] Study regression policy

---

## 28. Learning Path

### 28.1 Phase 1 — Foundations
- [ ] C programming
- [ ] Linux user-space basics
- [ ] Operating system concepts
- [ ] Computer architecture basics
- [ ] Git workflow
- [ ] Kernel source tree navigation
- [ ] Kernel build
- [ ] QEMU boot
- [ ] Basic printk debugging
- [ ] Basic module development

### 28.2 Phase 2 — Kernel basics
- [ ] Kernel architecture
- [ ] Boot process
- [ ] Process model
- [ ] System calls
- [ ] Interrupts
- [ ] Timers
- [ ] Workqueues
- [ ] Basic locking
- [ ] Memory allocation
- [ ] Kernel logging
- [ ] Procfs
- [ ] Sysfs

### 28.3 Phase 3 — Drivers
- [ ] Character drivers
- [ ] Platform drivers
- [ ] Device model
- [ ] Device Tree
- [ ] PCI drivers
- [ ] USB drivers
- [ ] I2C drivers
- [ ] SPI drivers
- [ ] GPIO
- [ ] DMA
- [ ] Runtime PM
- [ ] Driver debugging

### 28.4 Phase 4 — Core subsystems
- [ ] Scheduler
- [ ] Memory management
- [ ] VFS
- [ ] Filesystems
- [ ] Block layer
- [ ] Networking stack
- [ ] Security model
- [ ] Namespaces
- [ ] Cgroups
- [ ] eBPF
- [ ] Tracing
- [ ] Testing

### 28.5 Phase 5 — Advanced kernel development
- [ ] RCU
- [ ] Lockless programming
- [ ] Memory barriers
- [ ] NUMA
- [ ] Page reclaim
- [ ] Filesystem internals
- [ ] Network driver internals
- [ ] XDP
- [ ] io_uring
- [ ] KVM
- [ ] PREEMPT_RT
- [ ] Rust for Linux

### 28.6 Phase 6 — Production operations
- [ ] Kernel configuration
- [ ] Kernel upgrade planning
- [ ] Distribution kernels
- [ ] Longterm kernels
- [ ] Security hardening
- [ ] Performance tracing
- [ ] Crash dump analysis
- [ ] Regression bisection
- [ ] Stable backports
- [ ] Kernel CI
- [ ] Fleet rollout
- [ ] Incident response

### 28.7 Phase 7 — Upstream contribution
- [ ] Read subsystem documentation
- [ ] Find beginner-friendly bugs
- [ ] Fix warnings
- [ ] Add selftests
- [ ] Improve documentation
- [ ] Send first patch
- [ ] Respond to review
- [ ] Revise patch series
- [ ] Track patchwork
- [ ] Follow subsystem tree
- [ ] Get reviewed-by tags
- [ ] Land upstream patch

---

## 29. Practical Projects

### 29.1 Project 1 — Kernel Build Lab
- [ ] Clone kernel source
- [ ] Configure kernel
- [ ] Build kernel
- [ ] Build modules
- [ ] Create initramfs
- [ ] Boot with QEMU
- [ ] Enable serial console
- [ ] Capture dmesg
- [ ] Modify kernel version string
- [ ] Rebuild and reboot
- [ ] Automate build script

### 29.2 Project 2 — Hello Kernel Module
- [ ] Create module source
- [ ] Create Kbuild file
- [ ] Build external module
- [ ] Load module
- [ ] Unload module
- [ ] Add module parameter
- [ ] Add printk logs
- [ ] Inspect module info
- [ ] Handle init failure
- [ ] Handle cleanup path

### 29.3 Project 3 — Character Device Driver
- [ ] Allocate device number
- [ ] Register cdev
- [ ] Create device class
- [ ] Create device node
- [ ] Implement open
- [ ] Implement release
- [ ] Implement read
- [ ] Implement write
- [ ] Implement ioctl
- [ ] Add wait queue
- [ ] Add poll support
- [ ] Add concurrency protection
- [ ] Write user-space test tool

### 29.4 Project 4 — Procfs and Sysfs Interfaces
- [ ] Create procfs entry
- [ ] Use seq_file
- [ ] Implement read path
- [ ] Implement write path
- [ ] Create kobject
- [ ] Create sysfs attribute
- [ ] Add show callback
- [ ] Add store callback
- [ ] Validate input
- [ ] Document ABI
- [ ] Test with shell tools

### 29.5 Project 5 — Platform Driver
- [ ] Write Device Tree binding
- [ ] Add YAML schema
- [ ] Implement platform driver
- [ ] Match compatible string
- [ ] Map MMIO region
- [ ] Request IRQ
- [ ] Use devm helpers
- [ ] Add runtime PM
- [ ] Expose sysfs attribute
- [ ] Test probe/remove
- [ ] Test deferred probe

### 29.6 Project 6 — Interrupt and Workqueue Lab
- [ ] Register interrupt handler
- [ ] Implement top half
- [ ] Implement threaded IRQ
- [ ] Queue work item
- [ ] Use delayed work
- [ ] Use wait queue
- [ ] Add timer
- [ ] Add hrtimer
- [ ] Trace execution contexts
- [ ] Test race conditions
- [ ] Add locking

### 29.7 Project 7 — Memory Debugging Lab
- [ ] Add kmalloc allocation
- [ ] Add kfree path
- [ ] Trigger memory leak
- [ ] Detect with kmemleak
- [ ] Trigger use-after-free
- [ ] Detect with KASAN
- [ ] Trigger out-of-bounds access
- [ ] Detect with KASAN
- [ ] Add refcounting
- [ ] Fix cleanup paths
- [ ] Test fault injection

### 29.8 Project 8 — eBPF Tracing Tool
- [ ] Create BPF program
- [ ] Attach to tracepoint
- [ ] Attach to kprobe
- [ ] Use BPF map
- [ ] Use ring buffer
- [ ] Build with libbpf
- [ ] Generate skeleton
- [ ] Collect syscall latency
- [ ] Collect block I/O latency
- [ ] Collect scheduler latency
- [ ] Print histogram
- [ ] Package tool

### 29.9 Project 9 — Filesystem Mini-Lab
- [ ] Register pseudo filesystem
- [ ] Implement mount
- [ ] Create superblock
- [ ] Create root inode
- [ ] Implement lookup
- [ ] Implement read
- [ ] Implement write
- [ ] Implement directory iteration
- [ ] Add file operations
- [ ] Test with mount
- [ ] Run basic fs tests

### 29.10 Project 10 — Network Driver Simulator
- [ ] Register net_device
- [ ] Implement net_device_ops
- [ ] Implement open
- [ ] Implement stop
- [ ] Implement start_xmit
- [ ] Allocate skb
- [ ] Receive fake packets
- [ ] Add NAPI
- [ ] Add ethtool ops
- [ ] Add statistics
- [ ] Test with iproute2
- [ ] Trace packet path

### 29.11 Project 11 — Kernel Contribution Patch
- [ ] Pick subsystem
- [ ] Read subsystem docs
- [ ] Find small issue
- [ ] Build affected config
- [ ] Run relevant tests
- [ ] Create patch
- [ ] Run checkpatch
- [ ] Run get_maintainer
- [ ] Send patch
- [ ] Respond to review
- [ ] Send v2
- [ ] Track merge

### 29.12 Project 12 — Kernel Performance Investigation
- [ ] Define performance issue
- [ ] Capture baseline
- [ ] Use perf stat
- [ ] Use perf record
- [ ] Use ftrace
- [ ] Use bpftrace
- [ ] Identify hot path
- [ ] Inspect source
- [ ] Create hypothesis
- [ ] Test change
- [ ] Compare benchmark
- [ ] Document findings

---

## 30. Competency Checklist

### 30.1 Junior kernel competency
- [ ] Build a custom kernel
- [ ] Boot a custom kernel in QEMU
- [ ] Navigate the kernel source tree
- [ ] Configure kernel options
- [ ] Write a simple kernel module
- [ ] Use printk correctly
- [ ] Read dmesg
- [ ] Understand process context
- [ ] Understand interrupt context
- [ ] Use kmalloc and kfree
- [ ] Use basic locks
- [ ] Understand procfs and sysfs basics
- [ ] Use checkpatch
- [ ] Read kernel documentation

### 30.2 Mid-level kernel competency
- [ ] Write a character driver
- [ ] Write a platform driver
- [ ] Use Device Tree bindings
- [ ] Handle IRQs
- [ ] Use workqueues
- [ ] Use wait queues
- [ ] Use timers
- [ ] Use DMA APIs
- [ ] Debug memory bugs
- [ ] Debug locking bugs
- [ ] Run kselftests
- [ ] Analyze oops traces
- [ ] Use ftrace
- [ ] Use perf
- [ ] Send simple upstream patches

### 30.3 Senior kernel competency
- [ ] Understand scheduler internals
- [ ] Understand memory management internals
- [ ] Understand VFS internals
- [ ] Understand block layer internals
- [ ] Understand network stack internals
- [ ] Use RCU correctly
- [ ] Use memory barriers correctly
- [ ] Design stable UAPI
- [ ] Review driver code
- [ ] Fix race conditions
- [ ] Fix performance regressions
- [ ] Bisect kernel regressions
- [ ] Maintain patch series
- [ ] Backport stable fixes
- [ ] Participate in subsystem reviews

### 30.4 Advanced kernel competency
- [ ] Design kernel subsystem changes
- [ ] Contribute to core kernel code
- [ ] Debug production kernel crashes
- [ ] Analyze vmcores
- [ ] Build eBPF observability tools
- [ ] Write complex drivers
- [ ] Work on memory reclaim
- [ ] Work on scheduler behavior
- [ ] Work on filesystem internals
- [ ] Work on networking fast paths
- [ ] Work on KVM or virtualization
- [ ] Work on PREEMPT_RT
- [ ] Work on Rust kernel abstractions
- [ ] Maintain subsystem code
- [ ] Lead upstream review discussions
