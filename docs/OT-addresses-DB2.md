# OT Communication Addresses (DB2)

The following table summarises the OT addresses exchanged with the SIMATIC S7 controller. These values come from DB2 (`Outloading_DataExchange`).

| Address | Name | Type | Initial Value | Comment |
|--------:|------|------|--------------|---------|
| 0.0 | L1_BadgeNo | INT | 1 | Line1: Badge Number |
| 2.0 | L1_SourceRawMaterialCode | STRING[16] | '' | Line1: Truck Raw Material Code |
| 20.0 | L1_DEST_SEL | INT | 0 | Line1: BULK/BAG Selection (0==>BULK, 1==>BAG) |
| 22.0 | L1_DeclaredQuantity_KG | REAL | 0.000 | Line1: Truck Declared Quantity in KG |
| 26.0 | L1_DestinationSilo1 | INT | 801 | Line1: Destination Silo1 |
| 28.0 | L1_DestinationSilo2 | INT | 802 | Line1: Destination Silo2 |
| 30.0 | L2_BadgeNo | INT | 1 | Line2: Badge Number |
| 32.0 | L2_SourceRawMaterialCode | STRING[16] | '' | Line2: Truck Raw Material Code |
| 50.0 | L2_DEST_SEL | INT | 0 | Line2 BULK/BAG Selection (0==>BULK, 1==>BAG) |
| 52.0 | L2_DeclaredQuantity_KG | REAL | 0.000 | Line2: Truck Declared Quantity in KG |
| 56.0 | L2_DestinationSilo1 | INT | 803 | Line2: Destination Silo1 |
| 58.0 | L2_DestinationSilo2 | INT | 804 | Line2: Destination Silo2 |
| 60.0 | L3_BadgeNo | INT | 1 | Line3 Badge Number |
| 62.0 | L3_SourceRawMaterialCode | STRING[16] | '' | Line3 Truck Raw Material Code |
| 80.0 | L3_DEST_SEL | INT | 0 | Line3 BULK/BAG Selection (0==>BULK, 1==>BAG) |
| 82.0 | L3_DeclaredQuantity_KG | REAL | 0.000 | Line3 Truck Declared Quantity in KG |
| 86.0 | L3_DestinationSilo1 | INT | 805 | Line3 Destination Silo1 |
| 88.0 | L3_DestinationSilo2 | INT | 806 | Line3 Destination Silo2 |
| 90.0 | MatCode_S801 | STRING[16] | '' | Material Code for Silo 801 |
| 108.0 | MatName_S801 | STRING[32] | '' | Material Name for Silo 801 |
| 142.0 | MatCode_S802 | STRING[16] | '' | Material Code for Silo 802 |
| 160.0 | MatName_S802 | STRING[32] | '' | Material Name for Silo 802 |
| 194.0 | MatCode_S803 | STRING[16] | '' | Material Code for Silo 803 |
| 212.0 | MatName_S803 | STRING[32] | '' | Material Name for Silo 803 |
| 246.0 | MatCode_S804 | STRING[16] | '' | Material Code for Silo 804 |
| 264.0 | MatName_S804 | STRING[32] | '' | Material Name for Silo 804 |
| 298.0 | MatCode_S805 | STRING[16] | '' | Material Code for Silo 805 |
| 316.0 | MatName_S805 | STRING[32] | '' | Material Name for Silo 805 |
| 350.0 | MatCode_S806 | STRING[16] | '' | Material Code for Silo 806 |
| 368.0 | MatName_S806 | STRING[32] | '' | Material Name for Silo 806 |
| 402.0 | MatCode_S807 | STRING[16] | '' | Material Code for Silo 807 |
| 420.0 | MatName_S807 | STRING[32] | '' | Material Name for Silo 807 |
| 454.0 | MatCode_S808 | STRING[16] | '' | Material Code for Silo 808 |
| 472.0 | MatName_S808 | STRING[32] | '' | Material Name for Silo 808 |
| 506.0 | MatCode_S809 | STRING[16] | '' | Material Code for Silo 809 |
| 524.0 | MatName_S809 | STRING[32] | '' | Material Name for Silo 809 |
| 558.0 | MatCode_S810 | STRING[16] | '' | Material Code for Silo 810 |
| 576.0 | MatName_S810 | STRING[32] | '' | Material Name for Silo 810 |
| 610.0 | MatCode_S811 | STRING[16] | '' | Material Code for Silo 811 |
| 628.0 | MatName_S811 | STRING[32] | '' | Material Name for Silo 811 |
| 662.0 | MatCode_S812 | STRING[16] | '' | Material Code for Silo 812 |
| 680.0 | MatName_S812 | STRING[32] | '' | Material Name for Silo 812 |
| 714.0 | MatCode_S813 | STRING[16] | '' | Material Code for Silo 813 |
| 732.0 | MatName_S813 | STRING[32] | '' | Material Name for Silo 813 |
| 766.0 | MatCode_S814 | STRING[16] | '' | Material Code for Silo 814 |
| 784.0 | MatName_S814 | STRING[32] | '' | Material Name for Silo 814 |
| 818.0 | MatCode_S815 | STRING[16] | '' | Material Code for Silo 815 |
| 836.0 | MatName_S815 | STRING[32] | '' | Material Name for Silo 815 |
| 870.0 | MatCode_S816 | STRING[16] | '' | Material Code for Silo 816 |
| 888.0 | MatName_S816 | STRING[32] | '' | Material Name for Silo 816 |
| 922.0 | MatCode_S817 | STRING[16] | '' | Material Code for Silo 817 |
| 940.0 | MatName_S817 | STRING[32] | '' | Material Name for Silo 817 |
| 974.0 | MatCode_S818 | STRING[16] | '' | Material Code for Silo 818 |
| 992.0 | MatName_S818 | STRING[32] | '' | Material Name for Silo 818 |
| 1026.0 | MatCode_S819 | STRING[16] | '' | Material Code for Silo 819 |
| 1044.0 | MatName_S819 | STRING[32] | '' | Material Name for Silo 819 |
| 1078.0 | MatCode_S820 | STRING[16] | '' | Material Code for Silo 820 |
| 1096.0 | MatName_S820 | STRING[32] | '' | Material Name for Silo 820 |
| 1130.0 | MatCode_S821 | STRING[16] | '' | Material Code for Silo 821 |
| 1148.0 | MatName_S821 | STRING[32] | '' | Material Name for Silo 821 |
| 1182.0 | MatCode_S822 | STRING[16] | '' | Material Code for Silo 822 |
| 1200.0 | MatName_S822 | STRING[32] | '' | Material Name for Silo 822 |
| 1234.0 | MatCode_S823 | STRING[16] | '' | Material Code for Silo 823 |
| 1252.0 | MatName_S823 | STRING[32] | '' | Material Name for Silo 823 |
| 1286.0 | MatCode_S824 | STRING[16] | '' | Material Code for Silo 824 |
| 1304.0 | MatName_S824 | STRING[32] | '' | Material Name for Silo 824 |
| 1338.0 | MatCode_S825 | STRING[16] | '' | Material Code for Silo 825 |
| 1356.0 | MatName_S825 | STRING[32] | '' | Material Name for Silo 825 |
| 1390.0 | MatCode_S826 | STRING[16] | '' | Material Code for Silo 826 |
| 1408.0 | MatName_S826 | STRING[32] | '' | Material Name for Silo 826 |
| 1442.0 | MatCode_S827 | STRING[16] | '' | Material Code for Silo 827 |
| 1460.0 | MatName_S827 | STRING[32] | '' | Material Name for Silo 827 |
| 1494.0 | MatCode_S828 | STRING[16] | '' | Material Code for Silo 828 |
| 1512.0 | MatName_S828 | STRING[32] | '' | Material Name for Silo 828 |
| 1546.0 | MatCode_S829 | STRING[16] | '' | Material Code for Silo 829 |
| 1564.0 | MatName_S829 | STRING[32] | '' | Material Name for Silo 829 |
| 1598.0 | MatCode_S830 | STRING[16] | '' | Material Code for Silo 830 |
| 1616.0 | MatName_S830 | STRING[32] | '' | Material Name for Silo 830 |
| 1650.0 | MatCode_S831 | STRING[16] | '' | Material Code for Silo 831 |
| 1668.0 | MatName_S831 | STRING[32] | '' | Material Name for Silo 831 |
| 1702.0 | MatCode_S832 | STRING[16] | '' | Material Code for Silo 832 |
| 1720.0 | MatName_S832 | STRING[32] | '' | Material Name for Silo 832 |
| 1754.0 | MatCode_S833 | STRING[16] | '' | Material Code for Silo 833 |
| 1772.0 | MatName_S833 | STRING[32] | '' | Material Name for Silo 833 |
| 1806.0 | MatCode_S834 | STRING[16] | '' | Material Code for Silo 834 |
| 1824.0 | MatName_S834 | STRING[32] | '' | Material Name for Silo 834 |
| 1858.0 | MatCode_S835 | STRING[16] | '' | Material Code for Silo 835 |
| 1876.0 | MatName_S835 | STRING[32] | '' | Material Name for Silo 835 |
| 1910.0 | MatCode_S836 | STRING[16] | '' | Material Code for Silo 836 |
| 1928.0 | MatName_S836 | STRING[32] | '' | Material Name for Silo 836 |
| 1962.0 | MatCode_S837 | STRING[16] | '' | Material Code for Silo 837 |
| 1980.0 | MatName_S837 | STRING[32] | '' | Material Name for Silo 837 |
| 2014.0 | MatCode_S838 | STRING[16] | '' | Material Code for Silo 838 |
| 2032.0 | MatName_S838 | STRING[32] | '' | Material Name for Silo 838 |
| 2066.0 | MatCode_S839 | STRING[16] | '' | Material Code for Silo 839 |
| 2084.0 | MatName_S839 | STRING[32] | '' | Material Name for Silo 839 |
| 2118.0 | MatCode_S840 | STRING[16] | '' | Material Code for Silo 840 |
| 2136.0 | MatName_S840 | STRING[32] | '' | Material Name for Silo 840 |
| 2170.0 | MatCode_S841 | STRING[16] | '' | Material Code for Silo 841 |
| 2188.0 | MatName_S841 | STRING[32] | '' | Material Name for Silo 841 |
| 2222.0 | MatCode_S842 | STRING[16] | '' | Material Code for Silo 842 |
| 2240.0 | MatName_S842 | STRING[32] | '' | Material Name for Silo 842 |
| 2274.0 | MatCode_S843 | STRING[16] | '' | Material Code for Silo 843 |
| 2292.0 | MatName_S843 | STRING[32] | '' | Material Name for Silo 843 |
| 2326.0 | MatCode_S844 | STRING[16] | '' | Material Code for Silo 844 |
| 2344.0 | MatName_S844 | STRING[32] | '' | Material Name for Silo 844 |
| 2378.0 | MatCode_S845 | STRING[16] | '' | Material Code for Silo 845 |
| 2396.0 | MatName_S845 | STRING[32] | '' | Material Name for Silo 845 |
| 2430.0 | MatCode_S846 | STRING[16] | '' | Material Code for Silo 846 |
| 2448.0 | MatName_S846 | STRING[32] | '' | Material Name for Silo 846 |
| 2482.0 | MatCode_S847 | STRING[16] | '' | Material Code for Silo 847 |
| 2500.0 | MatName_S847 | STRING[32] | '' | Material Name for Silo 847 |
| 2534.0 | MatCode_S848 | STRING[16] | '' | Material Code for Silo 848 |
| 2552.0 | MatName_S848 | STRING[32] | '' | Material Name for Silo 848 |
| 2586.0 | HL_S801 | BOOL | FALSE | High Level for Silo 801 |
| 2586.1 | LOCK_S801 | BOOL | FALSE | Lock for Silo 801 |
| 2586.2 | HL_S802 | BOOL | FALSE | High Level for Silo 802 |
| 2586.3 | LOCK_S802 | BOOL | FALSE | Lock for Silo 802 |
| 2586.4 | HL_S803 | BOOL | FALSE | High Level for Silo 803 |
| 2586.5 | LOCK_S803 | BOOL | FALSE | Lock for Silo 803 |
| 2586.6 | HL_S804 | BOOL | FALSE | High Level for Silo 804 |
| 2586.7 | LOCK_S804 | BOOL | FALSE | Lock for Silo 804 |
| 2586.8 | HL_S805 | BOOL | FALSE | High Level for Silo 805 |
| 2586.9 | LOCK_S805 | BOOL | FALSE | Lock for Silo 805 |
| 2587.0 | HL_S806 | BOOL | FALSE | High Level for Silo 806 |
| 2587.1 | LOCK_S806 | BOOL | FALSE | Lock for Silo 806 |
| 2587.2 | HL_S807 | BOOL | FALSE | High Level for Silo 807 |
| 2587.3 | LOCK_S807 | BOOL | FALSE | Lock for Silo 807 |
| 2587.4 | HL_S808 | BOOL | FALSE | High Level for Silo 808 |
| 2587.5 | LOCK_S808 | BOOL | FALSE | Lock for Silo 808 |
| 2587.6 | HL_S809 | BOOL | FALSE | High Level for Silo 809 |
| 2587.7 | LOCK_S809 | BOOL | FALSE | Lock for Silo 809 |
| 2587.8 | HL_S810 | BOOL | FALSE | High Level for Silo 810 |
| 2587.9 | LOCK_S810 | BOOL | FALSE | Lock for Silo 810 |
| 2588.0 | HL_S811 | BOOL | FALSE | High Level for Silo 811 |
| 2588.1 | LOCK_S811 | BOOL | FALSE | Lock for Silo 811 |
| 2588.2 | HL_S812 | BOOL | FALSE | High Level for Silo 812 |
| 2588.3 | LOCK_S812 | BOOL | FALSE | Lock for Silo 812 |
| 2588.4 | HL_S813 | BOOL | FALSE | High Level for Silo 813 |
| 2588.5 | LOCK_S813 | BOOL | FALSE | Lock for Silo 813 |
| 2588.6 | HL_S814 | BOOL | FALSE | High Level for Silo 814 |
| 2588.7 | LOCK_S814 | BOOL | FALSE | Lock for Silo 814 |
| 2588.8 | HL_S815 | BOOL | FALSE | High Level for Silo 815 |
| 2588.9 | LOCK_S815 | BOOL | FALSE | Lock for Silo 815 |
| 2589.0 | HL_S816 | BOOL | FALSE | High Level for Silo 816 |
| 2589.1 | LOCK_S816 | BOOL | FALSE | Lock for Silo 816 |
| 2589.2 | HL_S817 | BOOL | FALSE | High Level for Silo 817 |
| 2589.3 | LOCK_S817 | BOOL | FALSE | Lock for Silo 817 |
| 2589.4 | HL_S818 | BOOL | FALSE | High Level for Silo 818 |
| 2589.5 | LOCK_S818 | BOOL | FALSE | Lock for Silo 818 |
| 2589.6 | HL_S819 | BOOL | FALSE | High Level for Silo 819 |
| 2589.7 | LOCK_S819 | BOOL | FALSE | Lock for Silo 819 |
| 2589.8 | HL_S820 | BOOL | FALSE | High Level for Silo 820 |
| 2589.9 | LOCK_S820 | BOOL | FALSE | Lock for Silo 820 |
| 2590.0 | HL_S821 | BOOL | FALSE | High Level for Silo 821 |
| 2590.1 | LOCK_S821 | BOOL | FALSE | Lock for Silo 821 |
| 2590.2 | HL_S822 | BOOL | FALSE | High Level for Silo 822 |
| 2590.3 | LOCK_S822 | BOOL | FALSE | Lock for Silo 822 |
| 2590.4 | HL_S823 | BOOL | FALSE | High Level for Silo 823 |
| 2590.5 | LOCK_S823 | BOOL | FALSE | Lock for Silo 823 |
| 2590.6 | HL_S824 | BOOL | FALSE | High Level for Silo 824 |
| 2590.7 | LOCK_S824 | BOOL | FALSE | Lock for Silo 824 |
| 2590.8 | HL_S825 | BOOL | FALSE | High Level for Silo 825 |
| 2590.9 | LOCK_S825 | BOOL | FALSE | Lock for Silo 825 |
| 2591.0 | HL_S826 | BOOL | FALSE | High Level for Silo 826 |
| 2591.1 | LOCK_S826 | BOOL | FALSE | Lock for Silo 826 |
| 2591.2 | HL_S827 | BOOL | FALSE | High Level for Silo 827 |
| 2591.3 | LOCK_S827 | BOOL | FALSE | Lock for Silo 827 |
| 2591.4 | HL_S828 | BOOL | FALSE | High Level for Silo 828 |
| 2591.5 | LOCK_S828 | BOOL | FALSE | Lock for Silo 828 |
| 2591.6 | HL_S829 | BOOL | FALSE | High Level for Silo 829 |
| 2591.7 | LOCK_S829 | BOOL | FALSE | Lock for Silo 829 |
| 2591.8 | HL_S830 | BOOL | FALSE | High Level for Silo 830 |
| 2591.9 | LOCK_S830 | BOOL | FALSE | Lock for Silo 830 |
| 2592.0 | HL_S831 | BOOL | FALSE | High Level for Silo 831 |
| 2592.1 | LOCK_S831 | BOOL | FALSE | Lock for Silo 831 |
| 2592.2 | HL_S832 | BOOL | FALSE | High Level for Silo 832 |
| 2592.3 | LOCK_S832 | BOOL | FALSE | Lock for Silo 832 |
| 2592.4 | HL_S833 | BOOL | FALSE | High Level for Silo 833 |
| 2592.5 | LOCK_S833 | BOOL | FALSE | Lock for Silo 833 |
| 2592.6 | HL_S834 | BOOL | FALSE | High Level for Silo 834 |
| 2592.7 | LOCK_S834 | BOOL | FALSE | Lock for Silo 834 |
| 2592.8 | HL_S835 | BOOL | FALSE | High Level for Silo 835 |
| 2592.9 | LOCK_S835 | BOOL | FALSE | Lock for Silo 835 |
| 2593.0 | HL_S836 | BOOL | FALSE | High Level for Silo 836 |
| 2593.1 | LOCK_S836 | BOOL | FALSE | Lock for Silo 836 |
| 2593.2 | HL_S837 | BOOL | FALSE | High Level for Silo 837 |
| 2593.3 | LOCK_S837 | BOOL | FALSE | Lock for Silo 837 |
| 2593.4 | HL_S838 | BOOL | FALSE | High Level for Silo 838 |
| 2593.5 | LOCK_S838 | BOOL | FALSE | Lock for Silo 838 |
| 2593.6 | HL_S839 | BOOL | FALSE | High Level for Silo 839 |
| 2593.7 | LOCK_S839 | BOOL | FALSE | Lock for Silo 839 |
| 2593.8 | HL_S840 | BOOL | FALSE | High Level for Silo 840 |
| 2593.9 | LOCK_S840 | BOOL | FALSE | Lock for Silo 840 |
| 2594.0 | HL_S841 | BOOL | FALSE | High Level for Silo 841 |
| 2594.1 | LOCK_S841 | BOOL | FALSE | Lock for Silo 841 |
| 2594.2 | HL_S842 | BOOL | FALSE | High Level for Silo 842 |
| 2594.3 | LOCK_S842 | BOOL | FALSE | Lock for Silo 842 |
| 2594.4 | HL_S843 | BOOL | FALSE | High Level for Silo 843 |
| 2594.5 | LOCK_S843 | BOOL | FALSE | Lock for Silo 843 |
| 2594.6 | HL_S844 | BOOL | FALSE | High Level for Silo 844 |
| 2594.7 | LOCK_S844 | BOOL | FALSE | Lock for Silo 844 |
| 2594.8 | HL_S845 | BOOL | FALSE | High Level for Silo 845 |
| 2594.9 | LOCK_S845 | BOOL | FALSE | Lock for Silo 845 |
| 2595.0 | HL_S846 | BOOL | FALSE | High Level for Silo 846 |
| 2595.1 | LOCK_S846 | BOOL | FALSE | Lock for Silo 846 |
| 2595.2 | HL_S847 | BOOL | FALSE | High Level for Silo 847 |
| 2595.3 | LOCK_S847 | BOOL | FALSE | Lock for Silo 847 |
| 2595.4 | HL_S848 | BOOL | FALSE | High Level for Silo 848 |
| 2595.5 | LOCK_S848 | BOOL | FALSE | Lock for Silo 848 |
| 2598.0 | L1_RFID_BadgeReading | REAL | 0.000 | The reading of the card in RFID of Line 1 |
| 2602.0 | L1_ActiveBadge | INT | 1 | Line1: Running order Badge Number |
| 2604.0 | L1_ActiveDestination | INT | 1 | Line1: Active Destination Silo Number |
| 2606.0 | L1_StatusWord | INT | 0 | status: (1->IDLE) (2->STARTING) (6->RUNNING) (8->STOPPING) |
| 2608.0 | L1_ACTIVE_DEST_SEL | INT | 0 | Line1_STATUS: (0==>Bulk, 1==>   Bag) |
| 2610.0 | L2_RFID_BadgeReading | REAL | 0.000 | The reading of the card in RFID of Line 2 |
| 2614.0 | L2_ActiveBadge | INT | 1 | Line2: Running order Badge Number |
| 2616.0 | L2_ActiveDestination | INT | 1 | Line2: Active Destination Silo Number |
| 2618.0 | L2_StatusWord | INT | 0 | status: (1->IDLE) (2->STARTING) (6->RUNNING) (8->STOPPING) |
| 2620.0 | L2_ACTIVE_DEST_SEL | INT | 0 | Line2_STATUS: (0==>Bulk, 1==>   Bag) |
| 2622.0 | L3_RFID_BadgeReading | REAL | 0.000 | The reading of the card in RFID of Line 2 |
| 2626.0 | L3_ActiveBadge | INT | 1 | Line2: Running order Badge Number |
| 2628.0 | L3_ActiveDestination | INT | 1 | Line2: Active Destination Silo Number |
| 2630.0 | L3_StatusWord | INT | 0 | status: (1->IDLE) (2->STARTING) (6->RUNNING) (8->STOPPING) |
| 2632.0 | L3_ACTIVE_DEST_SEL | INT | 0 | Line3_STATUS: (0==>Bulk, 1==>   Bag) |
| 2634.0 | Spare | INT | 0 |  |
| 2636.0 | Spare1 | INT | 0 |  |
| 2638.0 | Spare2 | INT | 0 |  |
| 2640.0 | Spare3 | INT | 0 |  |
| 2642.0 | Spare4 | INT | 0 |  |
| 2644.0 | Spare5 | INT | 0 |  |
| 2646.0 | Spare6 | INT | 0 |  |
| 2648.0 | Spare7 | INT | 0 |  |
| 2650.0 | Spare8 | INT | 0 |  |
| 2652.0 | Spare9 | INT | 0 |  |
| 2654.0 | Spare10 | INT | 0 |  |
| 2656.0 | Spare11 | INT | 0 |  |
| 2658.0 | Spare12 | INT | 0 |  |
| 2660.0 | Spare13 | INT | 0 |  |
| 2662.0 | Spare14 | INT | 0 |  |
| 2664.0 | Spare15 | INT | 0 |  |
| 2666.0 | Spare16 | INT | 0 |  |
| 2668.0 | Spare17 | INT | 0 |  |
| 2670.0 | Spare18 | INT | 0 |  |
| 2672.0 | Spare19 | INT | 0 |  |
| 2674.0 | Spare20 | INT | 0 |  |
| 2676.0 | Spare21 | INT | 0 |  |
| 2678.0 | Spare22 | INT | 0 |  |
| 2680.0 | Spare23 | INT | 0 |  |
| 2682.0 | Spare24 | INT | 0 |  |
| 2684.0 | Spare25 | INT | 0 |  |
| 2686.0 | Spare26 | INT | 0 |  |
| 2688.0 | Spare27 | INT | 0 |  |
| 2690.0 | Spare28 | INT | 0 |  |
| 2692.0 | Spare29 | INT | 0 |  |
| 2694.0 | Spare30 | INT | 0 |  |
| 2696.0 | Spare31 | INT | 0 |  |
| 2698.0 | Spare32 | INT | 0 |  |
| 2700.0 | Spare33 | INT | 0 |  |
| 2702.0 | Spare34 | INT | 0 |  |
| 2704.0 | Spare35 | INT | 0 |  |
| 2706.0 | Spare36 | INT | 0 |  |
| 2708.0 | Spare37 | INT | 0 |  |
| 2710.0 | Spare38 | INT | 0 |  |
| 2712.0 | Spare39 | INT | 0 |  |
| 2714.0 | Spare40 | INT | 0 |  |
| 2716.0 | Spare41 | INT | 0 |  |
| 2718.0 | Spare42 | INT | 0 |  |
| 2720.0 | Spare43 | INT | 0 |  |
| 2722.0 | Spare44 | INT | 0 |  |
| 2724.0 | Spare45 | INT | 0 |  |
| 2726.0 | Spare46 | INT | 0 |  |
| 2728.0 | Spare47 | INT | 0 |  |
| 2730.0 | Spare48 | INT | 0 |  |
| 2732.0 | Spare49 | INT | 0 |  |
| 2734.0 | Spare50 | INT | 0 |  |
| 2736.0 | Spare51 | INT | 0 |  |
| 2738.0 | Spare52 | INT | 0 |  |
| 2740.0 | Spare53 | INT | 0 |  |
| 2742.0 | Spare54 | INT | 0 |  |
| 2744.0 | Spare55 | INT | 0 |  |
| 2746.0 | Spare56 | INT | 0 |  |
| 2748.0 | Spare57 | INT | 0 |  |
| 2750.0 | Spare58 | INT | 0 |  |
| 2752.0 | Spare59 | INT | 0 |  |
| 2754.0 | Spare60 | INT | 0 |  |
| 2756.0 | Spare61 | INT | 0 |  |
| 2758.0 | Spare62 | INT | 0 |  |
| 2760.0 | Spare63 | INT | 0 |  |
| 2762.0 | Spare64 | INT | 0 |  |
| 2764.0 | Spare65 | INT | 0 |  |
| 2766.0 | Spare66 | INT | 0 |  |
| 2768.0 | Spare67 | INT | 0 |  |
| 2770.0 | Spare68 | INT | 0 |  |
| 2772.0 | Spare69 | INT | 0 |  |
| 2774.0 | Spare70 | INT | 0 |  |

The structure ends at address 2774.0 (End of DB2).
