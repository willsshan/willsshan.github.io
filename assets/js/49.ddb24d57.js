(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{364:function(e,a,v){"use strict";v.r(a);var t=v(0),s=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"jvm调优总结-xms-xmx-xmn-xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jvm调优总结-xms-xmx-xmn-xss"}},[e._v("#")]),e._v(" JVM调优总结 -Xms -Xmx -Xmn -Xss")]),e._v(" "),a("h2",{attrs:{id:"一、各个参数的意义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、各个参数的意义"}},[e._v("#")]),e._v(" 一、各个参数的意义")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Xms")]),e._v(" 是指设定程序启动时占用内存大小。一般来讲，大点，程序会启动的快一点，但是也可能会导致机器暂时间变慢。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Xmx")]),e._v(" 是指设定程序运行期间最大可占用的内存大小。如果程序运行需要占用更多的内存，超出了这个设置值，就会抛出OutOfMemory异常。")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Xss")]),e._v(" 是指设定每个线程的堆栈大小。这个就要依据你的程序，看一个线程大约需要占用多少内存，可能会有多少线程同时运行等。")])])]),e._v(" "),a("p",[e._v("以上三个参数的设置都是默认以Byte为单位的，也可以在数字后面添加[k/K]或者[m/M]来表示KB或者MB。而且，超过机器本身的内存大小也是不可以的，否则就等着机器变慢而不是程序变慢了。")]),e._v(" "),a("ol",[a("li",[e._v("-Xms 为jvm启动时分配的内存，比如-Xms200m，表示分配200M")]),e._v(" "),a("li",[e._v("-Xmx 为jvm运行过程中分配的最大内存，比如-Xms500m，表示jvm进程最多只能够占用500M内存")]),e._v(" "),a("li",[e._v("-Xss 为jvm启动的每个线程分配的内存大小，默认JDK1.4中是256K，JDK1.5+中是1M")])]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Total Memory")]),e._v(" "),a("th",[e._v("-Xms")]),e._v(" "),a("th",[e._v("-Xmx")]),e._v(" "),a("th",[e._v("-Xss")]),e._v(" "),a("th",[e._v("Spare Memory")]),e._v(" "),a("th",[e._v("JDK")]),e._v(" "),a("th",[e._v("Thread Count")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("1024M")]),e._v(" "),a("td",[e._v("256M")]),e._v(" "),a("td",[e._v("256M")]),e._v(" "),a("td",[e._v("256K")]),e._v(" "),a("td",[e._v("768M")]),e._v(" "),a("td",[e._v("1.4")]),e._v(" "),a("td",[e._v("3072")])]),e._v(" "),a("tr",[a("td",[e._v("1024M")]),e._v(" "),a("td",[e._v("256M")]),e._v(" "),a("td",[e._v("256M")]),e._v(" "),a("td",[e._v("256K")]),e._v(" "),a("td",[e._v("768M")]),e._v(" "),a("td",[e._v("1.5")]),e._v(" "),a("td",[e._v("768")])])])]),e._v(" "),a("p",[e._v("上面的表格只是大致的估计了下在特定内存条件下可以在java中创建的最大线程数。随着-Xmx的加大，空闲的内存数就更少，那么可以创建的线程也就更少，同时在JDK1.4和1.5版本不同下，可创建的线程数也会根据每个线程的内存大小不同而不同。")]),e._v(" "),a("p",[e._v("​    其实只要我们了解了JVM的内存大小指定以及java中线程的内存模型，基本上我们就可以很好的控制如何在java中使用线程和避免内存溢出或错误的问题了。")]),e._v(" "),a("h2",{attrs:{id:"二、runtime中的maxmemory-totalmemory和freememory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、runtime中的maxmemory-totalmemory和freememory"}},[e._v("#")]),e._v(" 二、Runtime中的maxMemory，totalMemory和freeMemory")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("maxMemory()这个方法返回的是java虚拟机（这个进程）能构从操作系统那里挖到的最大的内存，以字节为单位，如果在运行java程序的时候，没有添加-Xmx参数，那么就是64兆，也就是说maxMemory()返回的大约是64"),a("em",[e._v("1024")]),e._v("1024字节，这是java虚拟机默认情况下能从操作系统那里挖到的最大的内存。如果添加了-Xmx参数，将以这个参数后面的值为准，例如java -cp you_classpath -Xmx512m your_class，那么最大内存就是512"),a("em",[e._v("1024")]),e._v("1024字节。")])]),e._v(" "),a("li",[a("p",[e._v("totalMemory()这个方法返回的是java虚拟机现在已经从操作系统那里挖过来的内存大小，也就是java虚拟机这个进程当时所占用的所有内存。如果在运行java的时候没有添加-Xms参数，那么，在java程序运行的过程的，内存总是慢慢的从操作系统那里挖的，基本上是用多少挖多少，直到挖到maxMemory()为止，所以totalMemory()是慢慢增大的。如果用了-Xms参数，程序在启动的时候就会无条件的从操作系统中挖 -Xms后面定义的内存数，然后在这些内存用的差不多的时候，再去挖。")])]),e._v(" "),a("li",[a("p",[e._v("freeMemory()是什么呢，刚才讲到如果在运行java的时候没有添加-Xms参数，那么，在java程序运行的过程的，内存总是慢慢的从操作系统那里挖的，基本上是用多少挖多少，但是java虚拟机100％的情况下是会稍微多挖一点的，这些挖过来而又没有用上的内存，实际上就是 freeMemory()，所以freeMemory()的值一般情况下都是很小的，但是如果你在运行java程序的时候使用了-Xms，这个时候因为程序在启动的时候就会无条件的从操作系统中挖-Xms后面定义的内存数，这个时候，挖过来的内存可能大部分没用上，所以这个时候freeMemory()可能会有些大。")])])]),e._v(" "),a("h2",{attrs:{id:"三、常见参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、常见参数"}},[e._v("#")]),e._v(" 三、常见参数")]),e._v(" "),a("h3",{attrs:{id:"_1-堆大小设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-堆大小设置"}},[e._v("#")]),e._v(" 1.堆大小设置")]),e._v(" "),a("p",[e._v("JVM 中最大堆大小有三方面限制：相关操作系统的数据模型（32-bt还是64-bit）限制；系统的可用虚拟内存限制；系统的可用物理内存限制。32位系统下，一般限制在1.5G~2G；64为操作系统对内存无限制。我在Windows Server 2003 系统，3.5G物理内存，JDK5.0下测试，最大可设置为1478m。")]),e._v(" "),a("p",[e._v("典型设置：")]),e._v(" "),a("ul",[a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k\n- Xmx3550m ：设置JVM最大可用内存为3550M。\n-Xms3550m ：设置JVM促使内存为3550m。此值可以设置与-Xmx相同，以避免每次垃圾回收完成后JVM重新分配内存。\n-Xmn2g ：设置年轻代大小为2G。整个堆大小=年轻代大小 + 年老代大小 + 持久代大小 。持久代一般固定大小为64m，所以增大年轻代后，将会减小年老代大小。此值对系统性能影响较大，Sun官方推荐配置为整个堆的3/8。\n-Xss128k ：设置每个线程的堆栈大小。JDK5.0以后每个线程堆栈大小为1M，以前每个线程堆栈大小为256K。更具应用的线程所需内存大小进行调整。在相同物理内存下，减小这个值能生成更多的线程。但是操作系统对一个进程内的线程数还是有限制的，不能无限生成，经验值在3000~5000左右。")]),e._v(" "),a("li",[e._v("java -Xmx3550m -Xms3550m -Xss128k -XX:NewRatio=4 -XX:SurvivorRatio=4 -XX:MaxPermSize=16m -XX:MaxTenuringThreshold=0\n-XX:NewRatio=4 :设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去持久代）。设置为4，则年轻代与年老代所占比值为1：4，年轻代占整个堆栈的1/5\n-XX:SurvivorRatio=4 ：设置年轻代中Eden区与Survivor区的大小比值。设置为4，则两个Survivor区与一个Eden区的比值为2:4，一个Survivor区占整个年轻代的1/6\n-XX:MaxPermSize=16m :设置持久代大小为16m。\n-XX:MaxTenuringThreshold=0 ：设置垃圾最大年龄。如果设置为0的话，则年轻代对象不经过Survivor区，直接进入年老代 。对于年老代比较多的应用，可以提高效率。如果将此值设置为一个较大值，则年轻代对象会在Survivor区进行多次复制，这样可以增加对象再年轻代的存活时间 ，增加在年轻代即被回收的概论。")])]),e._v(" "),a("h3",{attrs:{id:"_2-回收器选择"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-回收器选择"}},[e._v("#")]),e._v(" 2. 回收器选择")]),e._v(" "),a("p",[e._v("JVM给了三种选择：串行收集器、并行收集器、并发收集器 ，但是串行收集器只适用于小数据量的情况，所以这里的选择主要针对并行收集器和并发收集器。默认情况下，JDK5.0以前都是使用串行收集器，如果想使用其他收集器需要在启动时加入相应参数。JDK5.0以后，JVM会根据当前系统配置进行判断。")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("吞吐量优先 的并行收集器")]),e._v(" "),a("p",[e._v("如上文所述，并行收集器主要以到达一定的吞吐量为目标，适用于科学技术和后台处理等。")]),e._v(" "),a("p",[e._v("典型配置 ：")]),e._v(" "),a("ul",[a("li",[e._v("java -Xmx3800m -Xms3800m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:ParallelGCThreads=20\n-XX:+UseParallelGC ：选择垃圾收集器为并行收集器。 此配置仅对年轻代有效。即上述配置下，年轻代使用并发收集，而年老代仍旧使用串行收集。\n-XX:ParallelGCThreads=20 ：配置并行收集器的线程数，即：同时多少个线程一起进行垃圾回收。此值最好配置与处理器数目相等。")]),e._v(" "),a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:ParallelGCThreads=20 -XX:+UseParallelOldGC\n-XX:+UseParallelOldGC ：配置年老代垃圾收集方式为并行收集。JDK6.0支持对年老代并行收集。")]),e._v(" "),a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:MaxGCPauseMillis=100\n-XX:MaxGCPauseMillis=100 : 设置每次年轻代垃圾回收的最长时间，如果无法满足此时间，JVM会自动调整年轻代大小，以满足此值。")]),e._v(" "),a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseParallelGC -XX:MaxGCPauseMillis=100 -XX:+UseAdaptiveSizePolicy\n-XX:+UseAdaptiveSizePolicy ：设置此选项后，并行收集器会自动选择年轻代区大小和相应的Survivor区比例，以达到目标系统规定的最低相应时间或者收集频率等，此值建议使用并行收集器时，一直打开。")])])]),e._v(" "),a("li",[a("p",[e._v("响应时间优先 的并发收集器")]),e._v(" "),a("p",[e._v("如上文所述，并发收集器主要是保证系统的响应时间，减少垃圾收集时的停顿时间。适用于应用服务器、电信领域等。")]),e._v(" "),a("p",[e._v("典型配置 ：")]),e._v(" "),a("ul",[a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:ParallelGCThreads=20 -XX:+UseConcMarkSweepGC -XX:+UseParNewGC\n-XX:+UseConcMarkSweepGC ：设置年老代为并发收集。测试中配置这个以后，-XX:NewRatio=4的配置失效了，原因不明。所以，此时年轻代大小最好用-Xmn设置。\n-XX:+UseParNewGC :设置年轻代为并行收集。可与CMS收集同时使用。JDK5.0以上，JVM会根据系统配置自行设置，所以无需再设置此值。")]),e._v(" "),a("li",[e._v("java -Xmx3550m -Xms3550m -Xmn2g -Xss128k -XX:+UseConcMarkSweepGC -XX:CMSFullGCsBeforeCompaction=5 -XX:+UseCMSCompactAtFullCollection\n-XX:CMSFullGCsBeforeCompaction ：由于并发收集器不对内存空间进行压缩、整理，所以运行一段时间以后会产生“碎片”，使得运行效率降低。此值设置运行多少次GC以后对内存空间进行压缩、整理。\n-XX:+UseCMSCompactAtFullCollection ：打开对年老代的压缩。可能会影响性能，但是可以消除碎片")])])])]),e._v(" "),a("h3",{attrs:{id:"_3-辅助信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-辅助信息"}},[e._v("#")]),e._v(" 3. 辅助信息")]),e._v(" "),a("p",[e._v("JVM提供了大量命令行参数，打印信息，供调试使用。主要有以下一些：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("-XX:+PrintGC")]),e._v(" "),a("p",[e._v("输出形式：[GC 118250K->113543K(130112K), 0.0094143 secs]")]),e._v(" "),a("p",[e._v("​        [Full GC 121376K->10414K(130112K), 0.0650971 secs]")])]),e._v(" "),a("li",[a("p",[e._v("-XX:+PrintGCDetails")]),e._v(" "),a("p",[e._v("输出形式：[GC [DefNew: 8614K->781K(9088K), 0.0123035 secs] 118250K->113543K(130112K), 0.0124633 secs]")]),e._v(" "),a("p",[e._v("​        [GC [DefNew: 8614K->8614K(9088K), 0.0000665 secs][Tenured: 112761K->10414K(121024K), 0.0433488 secs] 121376K->10414K(130112K), 0.0436268 secs]")])]),e._v(" "),a("li",[a("p",[e._v("-XX:+PrintGCTimeStamps -XX:+PrintGC：PrintGCTimeStamps可与上面两个混合使用\n输出形式：11.851: [GC 98328K->93620K(130112K), 0.0082960 secs]")])]),e._v(" "),a("li",[a("p",[e._v("-XX:+PrintGCApplicationConcurrentTime: 打印每次垃圾回收前，程序未中断的执行时间。可与上面混合使用\n输出形式：Application time: 0.5291524 seconds")])]),e._v(" "),a("li",[a("p",[e._v("-XX:+PrintGCApplicationStoppedTime ：打印垃圾回收期间程序暂停的时间。可与上面混合使用\n输出形式：Total time for which application threads were stopped: 0.0468229 seconds")])]),e._v(" "),a("li",[a("p",[e._v("-XX:PrintHeapAtGC :打印GC前后的详细堆栈信息\n输出形式：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("34.702: [GC {Heap before gc invocations=7:\ndef new generation  total 55296K, used 52568K [0x1ebd0000, 0x227d0000, 0x227d0000)\neden space 49152K, 99% used [0x1ebd0000, 0x21bce430, 0x21bd0000)\nfrom space 6144K, 55% used [0x221d0000, 0x22527e10, 0x227d0000)\nto  space 6144K,  0% used [0x21bd0000, 0x21bd0000, 0x221d0000)\ntenured generation  total 69632K, used 2696K [0x227d0000, 0x26bd0000, 0x26bd0000)\nthe space 69632K,  3% used [0x227d0000, 0x22a720f8, 0x22a72200, 0x26bd0000)\ncompacting perm gen total 8192K, used 2898K [0x26bd0000, 0x273d0000, 0x2abd0000)\n  the space 8192K, 35% used [0x26bd0000, 0x26ea4ba8, 0x26ea4c00, 0x273d0000)\n  ro space 8192K, 66% used [0x2abd0000, 0x2b12bcc0, 0x2b12be00, 0x2b3d0000)\n  rw space 12288K, 46% used [0x2b3d0000, 0x2b972060, 0x2b972200, 0x2bfd0000)\n34.735: [DefNew: 52568K->3433K(55296K), 0.0072126 secs] 55264K->6615K(124928K)Heap after gc invocations=8:\ndef new generation  total 55296K, used 3433K [0x1ebd0000, 0x227d0000, 0x227d0000)\neden space 49152K,  0% used [0x1ebd0000, 0x1ebd0000, 0x21bd0000)\nfrom space 6144K, 55% used [0x21bd0000, 0x21f2a5e8, 0x221d0000)\nto  space 6144K,  0% used [0x221d0000, 0x221d0000, 0x227d0000)\ntenured generation  total 69632K, used 3182K [0x227d0000, 0x26bd0000, 0x26bd0000)\nthe space 69632K,  4% used [0x227d0000, 0x22aeb958, 0x22aeba00, 0x26bd0000)\ncompacting perm gen total 8192K, used 2898K [0x26bd0000, 0x273d0000, 0x2abd0000)\n  the space 8192K, 35% used [0x26bd0000, 0x26ea4ba8, 0x26ea4c00, 0x273d0000)\n  ro space 8192K, 66% used [0x2abd0000, 0x2b12bcc0, 0x2b12be00, 0x2b3d0000)\n  rw space 12288K, 46% used [0x2b3d0000, 0x2b972060, 0x2b972200, 0x2bfd0000)\n}\n, 0.0757599 secs]\n")])])])]),e._v(" "),a("li",[a("p",[e._v("-Xloggc:filename :与上面几个配合使用，把相关日志信息记录到文件以便分析。")])])]),e._v(" "),a("h3",{attrs:{id:"_4-常见配置汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-常见配置汇总"}},[e._v("#")]),e._v(" 4. 常见配置汇总")]),e._v(" "),a("ol",[a("li",[e._v("堆设置\n"),a("ul",[a("li",[e._v("-Xms :初始堆大小")]),e._v(" "),a("li",[e._v("-Xmx :最大堆大小")]),e._v(" "),a("li",[e._v("-XX:NewSize=n :设置年轻代大小")]),e._v(" "),a("li",[e._v("-XX:NewRatio=n: 设置年轻代和年老代的比值。如:为3，表示年轻代与年老代比值为1：3，年轻代占整个年轻代年老代和的1/4")]),e._v(" "),a("li",[e._v("-XX:SurvivorRatio=n :年轻代中Eden区与两个Survivor区的比值。注意Survivor区有两个。如：3，表示Eden：Survivor=3：2，一个Survivor区占整个年轻代的1/5")]),e._v(" "),a("li",[e._v("-XX:MaxPermSize=n :设置持久代大小")])])]),e._v(" "),a("li",[e._v("收集器设置\n"),a("ul",[a("li",[e._v("-XX:+UseSerialGC :设置串行收集器")]),e._v(" "),a("li",[e._v("-XX:+UseParallelGC :设置并行收集器")]),e._v(" "),a("li",[e._v("-XX:+UseParalledlOldGC :设置并行年老代收集器")]),e._v(" "),a("li",[e._v("-XX:+UseConcMarkSweepGC :设置并发收集器")])])]),e._v(" "),a("li",[e._v("垃圾回收统计信息\n"),a("ul",[a("li",[e._v("-XX:+PrintGC")]),e._v(" "),a("li",[e._v("-XX:+PrintGCDetails")]),e._v(" "),a("li",[e._v("-XX:+PrintGCTimeStamps")]),e._v(" "),a("li",[e._v("-Xloggc:filename")])])]),e._v(" "),a("li",[e._v("并行收集器设置\n"),a("ul",[a("li",[e._v("-XX:ParallelGCThreads=n :设置并行收集器收集时使用的CPU数。并行收集线程数。")]),e._v(" "),a("li",[e._v("-XX:MaxGCPauseMillis=n :设置并行收集最大暂停时间")]),e._v(" "),a("li",[e._v("-XX:GCTimeRatio=n :设置垃圾回收时间占程序运行时间的百分比。公式为1/(1+n)")])])]),e._v(" "),a("li",[e._v("并发收集器设置\n"),a("ul",[a("li",[e._v("-XX:+CMSIncrementalMode :设置为增量模式。适用于单CPU情况。")]),e._v(" "),a("li",[e._v("-XX:ParallelGCThreads=n :设置并发收集器年轻代收集方式为并行收集时，使用的CPU数。并行收集线程数。")])])])]),e._v(" "),a("h2",{attrs:{id:"四、调优总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、调优总结"}},[e._v("#")]),e._v(" 四、调优总结")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("年轻代大小选择")]),e._v(" "),a("ul",[a("li",[e._v("响应时间优先的应用 ：尽可能设大，直到接近系统的最低响应时间限制 （根据实际情况选择）。在此种情况下，年轻代收集发生的频率也是最小的。同时，减少到达年老代的对象。")]),e._v(" "),a("li",[e._v("吞吐量优先的应用 ：尽可能的设置大，可能到达Gbit的程度。因为对响应时间没有要求，垃圾收集可以并行进行，一般适合8CPU以上的应用。")])])]),e._v(" "),a("li",[a("p",[e._v("年老代大小选择")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("响应时间优先的应用 ：年老代使用并发收集器，所以其大小需要小心设置，一般要考虑并发会话率 和会话持续时间 等一些参数。如果堆设置小了，可以会造成内存碎片、高回收频率以及应用暂停而使用传统的标记清除方式；如果堆大了，则需要较长的收集时间。最优化的方案，一般需要参考以下数据获得：")]),e._v(" "),a("ul",[a("li",[e._v("并发垃圾收集信息")]),e._v(" "),a("li",[e._v("持久代并发收集次数")]),e._v(" "),a("li",[e._v("传统GC信息")]),e._v(" "),a("li",[e._v("花在年轻代和年老代回收上的时间比例")])]),e._v(" "),a("p",[e._v("减少年轻代和年老代花费的时间，一般会提高应用的效率")])]),e._v(" "),a("li",[a("p",[e._v("吞吐量优先的应用 ：一般吞吐量优先的应用都有一个很大的年轻代和一个较小的年老代。原因是，这样可以尽可能回收掉大部分短期对象，减少中期的对象，而年老代尽存放长期存活对象。")])])])]),e._v(" "),a("li",[a("p",[e._v("较小堆引起的碎片问题")]),e._v(" "),a("p",[e._v("因为年老代的并发收集器使用标记、清除算法，所以不会对堆进行压缩。当收集器回收时，他会把相邻的空间进行合并，这样可以分配给较大的对象。但是，当堆空间较小时，运行一段时间以后，就会出现“碎片”，如果并发收集器找不到足够的空间，那么并发收集器将会停止，然后使用传统的标记、清除方式进行回收。如果出现“碎片”，可能需要进行如下配置：")]),e._v(" "),a("ul",[a("li",[e._v("-XX:+UseCMSCompactAtFullCollection ：使用并发收集器时，开启对年老代的压缩。")]),e._v(" "),a("li",[e._v("-XX:CMSFullGCsBeforeCompaction=0 ：上面配置开启的情况下，这里设置多少次Full GC后，对年老代进行压缩")])])])]),e._v(" "),a("h2",{attrs:{id:"五、tomcat中的jvm连接数-和tomcat优化的使用如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、tomcat中的jvm连接数-和tomcat优化的使用如下"}},[e._v("#")]),e._v(" 五、tomcat中的jvm连接数，和tomcat优化的使用如下：")]),e._v(" "),a("p",[e._v("1、 tomcat7安装目录\\bin\\catalina.bat  (linux修改的是catalina.sh文件)")]),e._v(" "),a("p",[e._v("添加如下语句：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("JAVA_OPTS=-Djava.awt.headless=true -Dfile.encoding=UTF-8 -server -Xms1024m -Xmx1024m -Xss1m -XX:NewSize=256m -XX:MaxNewSize=512m -XX:PermSize=256M  -XX:MaxPermSize=512m \n\n-XX:+DisableExplicitGC\n")])])]),a("p",[e._v("2、查看tomcat的JVM内存")]),e._v(" "),a("p",[e._v("tomcat7中默认没有用户的，我们首先要添加用户有：")]),e._v(" "),a("p",[e._v("修改tomcat7安装目录下\\conf\\tomcat-users.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\x3c!--############################################################--\x3e\n\x3c!--添加tomcat用户管理--\x3e\n<rol rolename="manager-gui"/>\n<user username="tomcat" password="tomcat" roles="manager-gui"/>\n\x3c!--############################################################--\x3e\n')])])]),a("p",[e._v("password是可以自由定义的。")]),e._v(" "),a("p",[e._v("3、检查webapps下是否有Manager目录，一般发布时我们都把这个目录删除了，现在看来删除早了，在调试期要保留啊！")]),e._v(" "),a("p",[e._v("4、访问地址：")]),e._v(" "),a("p",[e._v("http://localhost:8080/manager/status")]),e._v(" "),a("p",[e._v("查看内存配置情况，经测试-Xms512m -Xmx512m与-Xms1024m -Xmx1024m内存使用情况不一样，使用1024的时候有一项内存使用99%。所以看来这个设置多少与实际机器有关，需要Manager进行查看后确定。")]),e._v(" "),a("p",[e._v("5、在启动Tomcat中发现，有同志发布程序时把我们在TOMCAT7中引用的外部JAR包重复发布到LIB目录下了，我们以后在发布时要检查LIB下是不是包括")]),e._v(" "),a("p",[e._v("el-api.jar jsp-api servlet-api,特别注意的是最后一个servlet-api，我发现两个项目都把它拷贝到了LIB目录下！！被我删除了。")]),e._v(" "),a("p",[e._v("6、使用TOMAT的连接池：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Executor name="tomcatThreadPool" namePrefix="catalina-exec-" maxThreads="300" minSpareThreads="50" maxIdleTime="15000"/>\n<Connector port="8080\n\n executor="tomcatThreadPool"\n\n protocol="org.apache.coyote.http11.Http11NioProtocol"\n redirectPort="8443"\n\n connectionTimeout="30000" \n\n enableLookups="false" \n\n keepAliveTimeout="15000" \n\n URIEncoding="UTF-8"\n\n maxHttpHeaderSize="32768"\n\n acceptCount="200"/>\n\n \n\n说明：\n\nmaxThreads：最大线程数 300\n\nminSpareThreads：初始化建立的线程数 50\n\nmaxThreads：一旦线程超过这个值，Tomcat就会关闭不再需要的线程\n\nmaxIdleTime：为最大空闲时间、单位为毫秒。\n')])])]),a("p",[e._v("executor为线程池的名字，对应Executor 中的name属性；Connector 标签中不再有maxThreads的设置。")]),e._v(" "),a("p",[e._v("如果tomcat不使用线程池则基本配置如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<Connector port="8080"  \n\n protocol="HTTP/1.1"  \n\n redirectPort="8443"  \n\n connectionTimeout="30000"  \n\n keepAliveTimeout="15000"  \n\n enableLookups="false"  \n\n URIEncoding="UTF-8"  \n\n maxHttpHeaderSize="32768"  \n\n maxThreads="300"  \n\n acceptCount="200"  \n\n/>  \n')])])]),a("p",[e._v("修改Tomcat的/conf目录下面的server.xml文件，针对端口为8080的连接器添加如下参数："),a("img",{attrs:{src:"https://www.iteye.com/javascripts/tinymce/plugins/emotions/img/smiley-cry.gif",alt:"哭"}})]),e._v(" "),a("ol",[a("li",[a("p",[e._v("connectionTimeout：连接失效时间，单位为毫秒、默认为60s、这里设置为30s，如果用户请求在30s内未能进入请求队列，视为本次连接失败。")])]),e._v(" "),a("li",[a("p",[e._v("keepAliveTimeout：连接的存活时间，默认和connectionTimeout一致，这里可以设为15s、这意味着15s之后本次连接关闭. 如果页面需要加载大量图片、js等静态资源，需要将参数适当调大一点、以免多次创建TCP连接。")])]),e._v(" "),a("li",[a("p",[e._v("enableLookups：是否对连接到服务器的远程机器查询其DNS主机名，一般情况下这并不必要，因此设为false即可。")])]),e._v(" "),a("li",[a("p",[e._v("URIEncoding：设置URL参数的编码格式为UTF-8编码，默认为ISO-8859-1编码。")])]),e._v(" "),a("li",[a("p",[e._v("maxHttpHeaderSize：设置HTTP请求、响应的头部内容大小，默认为8192字节(8k)，此处设置为32768字节(32k)、和Nginx的设置保持一致。")])]),e._v(" "),a("li",[a("p",[e._v("maxThreads：最大线程数、用于处理用户请求的线程数目，默认为200、此处设置为300")])]),e._v(" "),a("li",[a("p",[e._v("acceptCount：用户请求等候队列的大小，默认为100、此处设置为200")])])]),e._v(" "),a("p",[e._v("​    Linux系统默认一个进程能够创建的最大线程数为1024、因此对高并发应用需要进行Linux内核调优，至此文件server.xml修改后的内容如下所示："),a("img",{attrs:{src:"http://www.iteye.com/javascripts/tinymce/plugins/emotions/img/smiley-kiss.gif",alt:"吻"}})]),e._v(" "),a("p",[e._v("再次登录查看状态，")]),e._v(" "),a("p",[e._v("http://localhost:8080/manager/status")]),e._v(" "),a("p",[e._v("用户名、密码就是上边配置的。根据cpu、内存的大小来配置。")]),e._v(" "),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考：")]),e._v(" "),a("p",[e._v("http://blog.sina.com.cn/s/blog_3f12afd00100zpvf.html")]),e._v(" "),a("p",[e._v("​")]),e._v(" "),a("p",[e._v("tomcat7 正式环境的优化")]),e._v(" "),a("p",[e._v("​     http://energykey.iteye.com/blog/2072797")]),e._v(" "),a("p",[e._v("tomcat内存配置优化")]),e._v(" "),a("p",[e._v("​     http://blog.csdn.net/kefeng824/article/details/31742423")]),e._v(" "),a("p",[e._v("CentOS 6.5 下的tomcat优化")]),e._v(" "),a("p",[e._v("​    http://www.cnblogs.com/littlehb/archive/2013/04/02/2994785.html")]),e._v(" "),a("p",[e._v("JVM（Java虚拟机）优化大全和案例实战--(重点推荐)")]),e._v(" "),a("p",[e._v("​    http://blog.csdn.net/kthq/article/details/8618052")])])}),[],!1,null,null,null);a.default=s.exports}}]);