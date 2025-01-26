const pointsData = [
        {
            "id": "point1",
            "x": 280.3999938964844,
            "y": 149.5250015258789,
            "connections": ["point22","point2"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point2",
            "x": 361.3999938964844,
            "y": 90.5250015258789,
            "connections": ["point21","point3"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point3",
            "x": 435.3999938964844,
            "y": 26.525001525878906,
            "connections": ["point4"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point4",
            "x": 506.3999938964844,
            "y": 34.525000005960464,
            "connections": ["point5"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point5",
            "x": 579.3999938964844,
            "y": 27.525001525878906,
            "connections": ["point7","point6"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point6",
            "x": 633.3999938964844,
            "y": 54.525000005960464,
            "connections": ["point9","point11"],
            "country": "Scandinavia",
            "capital": true
        },
        
        {
            "id": "point7",
            "x": 578.3999938964844,
            "y": 98.52500000596046,
            "connections": ["point8"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point8",
            "x": 613.3999938964844,
            "y": 130.5250015258789,
            "connections": ["point10","point26"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point9",
            "x": 676.3999938964844,
            "y": 75.52499961853027,
            "connections": ["point19"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point10",
            "x": 692.3999938964844,
            "y": 136.5250015258789,
            "connections": ["point27","point19"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point11",
            "x": 676.3999938964844,
            "y": 9.525001525878906,
            "connections": ["point12"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point12",
            "x": 732.3999938964844,
            "y": 15.525001525878906,
            "connections": ["point13"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point13",
            "x": 797.3999938964844,
            "y": 48.525001525878906,
            "connections": ["point20","point14"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point14",
            "x": 880.3999938964844,
            "y": 15.525001525878906,
            "connections": ["point15"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point15",
            "x": 977.3999938964844,
            "y": 10.525001525878906,
            "connections": ["point16"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point16",
            "x": 1003.3999938964844,
            "y": 79.5250015258789,
            "connections": ["point32"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point17",
            "x": 927.3999938964844,
            "y": 106.5250015258789,
            "connections": ["point16","point18"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point18",
            "x": 866.3999938964844,
            "y": 73.5250015258789,
            "connections": ["point14"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point19",
            "x": 732.3999938964844,
            "y": 91.5250015258789,
            "connections": ["point28","point12"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point20",
            "x": 820.3999938964844,
            "y": 110.52499961853027,
            "connections": ["point18"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point21",
            "x": 385.3999938964844,
            "y": 188.5250015258789,
            "connections": ["point24"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point22",
            "x": 318.3999938964844,
            "y": 206.52499961853027,
            "connections": ["point21"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point23",
            "x": 328.3999938964844,
            "y": 258.5250015258789,
            "connections": ["point24"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point24",
            "x": 408.3999938964844,
            "y": 249.5250015258789,
            "connections": ["point25","point25"],
            "country": "Britain",
            "capital": true
        },
        
        {
            "id": "point25",
            "x": 472.3999938964844,
            "y": 234.52500000596046,
            "connections": ["point40"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point26",
            "x": 605.3999938964844,
            "y": 213.5250015258789,
            "connections": ["point27"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point27",
            "x": 702.3999938964844,
            "y": 209.52500000596046,
            "connections": ["point29"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point28",
            "x": 771.3999938964844,
            "y": 142.52500000596046,
            "connections": ["point20"],
            "country": "Scandinavia",
            "capital": false
        },
        
        {
            "id": "point29",
            "x": 760.3999938964844,
            "y": 222.5250015258789,
            "connections": ["point45","point36"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point30",
            "x": 853.3999938964844,
            "y": 146.5250015258789,
            "connections": ["point31","point20"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point31",
            "x": 896.3999938964844,
            "y": 170.5250015258789,
            "connections": ["point17"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point32",
            "x": 1079.3999938964844,
            "y": 154.5250015258789,
            "connections": [],
            "country": "Russia",
            "capital": true
        },
        
        {
            "id": "point33",
            "x": 968.3999938964844,
            "y": 178.52499961853027,
            "connections": ["point34","point31"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point34",
            "x": 1052.3999938964844,
            "y": 217.52499961853027,
            "connections": ["point38","point32"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point35",
            "x": 1109.3999938964844,
            "y": 239.5250015258789,
            "connections": ["point39","point32"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point36",
            "x": 861.3999938964844,
            "y": 208.5250015258789,
            "connections": ["point30","point37"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point37",
            "x": 904.3999938964844,
            "y": 238.52499961853027,
            "connections": ["point49","point31"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point38",
            "x": 1021.3999938964844,
            "y": 274.5250015258789,
            "connections": ["point63"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point39",
            "x": 1100.3999938964844,
            "y": 290.5250015258789,
            "connections": ["point64"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point40",
            "x": 523.3999938964844,
            "y": 260.5250015258789,
            "connections": ["point41"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point41",
            "x": 565.3999938964844,
            "y": 282.52500000596046,
            "connections": ["point42","point26"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point42",
            "x": 632.3999938964844,
            "y": 310.5250015258789,
            "connections": ["point45","point43"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point43",
            "x": 684.3999938964844,
            "y": 256.52500000596046,
            "connections": ["point26","point29"],
            "country": "Prussia",
            "capital": true
        },
        
        {
            "id": "point44",
            "x": 804.3999938964844,
            "y": 257.5250015258789,
            "connections": ["point46","point36"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point45",
            "x": 732.3999938964844,
            "y": 289.52500000596046,
            "connections": ["point46", "point59"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point46",
            "x": 785.3999938964844,
            "y": 305.52500000596046,
            "connections": ["point60","point47"],
            "country": "Prussia",
            "capital": false
        },
        
        {
            "id": "point47",
            "x": 837.3999938964844,
            "y": 282.5250015258789,
            "connections": ["point48","point37"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point48",
            "x": 878.3999938964844,
            "y": 302.5250015258789,
            "connections": ["point61","point49"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point49",
            "x": 957.3999938964844,
            "y": 301.5250015258789,
            "connections": ["point74","point38"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point50",
            "x": 1109,
            "y": 648,
            "connections": ["point134", "point114"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point51",
            "x": 332.3999938964844,
            "y": 322.52500000596046,
            "connections": ["point56","point52","point23"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point52",
            "x": 402.3999938964844,
            "y": 317.52500915527344,
            "connections": ["point55","point53"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point53",
            "x": 467.3999938964844,
            "y": 289.52500915527344,
            "connections": ["point54","point40"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point54",
            "x": 512.3999938964844,
            "y": 346.52500915527344,
            "connections": ["point68","point41","point57"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point55",
            "x": 454.3999938964844,
            "y": 353.52500915527344,
            "connections": ["point54","point67"],
            "country": "France",
            "capital": true
        },
        
        {
            "id": "point56",
            "x": 362.3999938964844,
            "y": 380.52500915527344,
            "connections": ["point65","point55"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point57",
            "x": 584.3999938964844,
            "y": 345.52500915527344,
            "connections": ["point69","point58","point42"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point58",
            "x": 656.3999938964844,
            "y": 352.52500915527344,
            "connections": ["point70","point59"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point59",
            "x": 707.3999938964844,
            "y": 326.52500915527344,
            "connections": ["point71","point60","point45"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point60",
            "x": 783.3999938964844,
            "y": 351.52500915527344,
            "connections": ["point72","point61"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point61",
            "x": 848.3999938964844,
            "y": 355.52500915527344,
            "connections": ["point73","point62"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point62",
            "x": 918.3999938964844,
            "y": 342.52500915527344,
            "connections": ["point76","point49"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point63",
            "x": 1049.3999938964844,
            "y": 350.52500915527344,
            "connections": ["point39"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point64",
            "x": 1122.3999938964844,
            "y": 342.52500915527344,
            "connections": ["point75"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point65",
            "x": 344.3999938964844,
            "y": 436.52500915527344,
            "connections": ["point88"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point66",
            "x": 418.3999938964844,
            "y": 413.52500915527344,
            "connections": ["point65","point67"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point67",
            "x": 468.3999938964844,
            "y": 399.52500915527344,
            "connections": ["point68"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point68",
            "x": 540.3999938964844,
            "y": 398.52500915527344,
            "connections": [],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point69",
            "x": 608.3999938964844,
            "y": 406.52500915527344,
            "connections": ["point85","point70","point68"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point70",
            "x": 673.3999938964844,
            "y": 405.52500915527344,
            "connections": ["point84","point71"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point71",
            "x": 720.3999938964844,
            "y": 402.52500915527344,
            "connections": ["point72"],
            "country": "Austria",
            "capital": true
        },
        
        {
            "id": "point72",
            "x": 787.3999938964844,
            "y": 410.52500915527344,
            "connections": ["point73"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point73",
            "x": 836.3999938964844,
            "y": 441.52500915527344,
            "connections": ["point76","point89"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point74",
            "x": 978.3999938964844,
            "y": 377.52500915527344,
            "connections": ["point78","point63"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point75",
            "x": 1103.3999938964844,
            "y": 411.52500915527344,
            "connections": ["point79"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point76",
            "x": 890.3999938964844,
            "y": 410.52500915527344,
            "connections": ["point82","point77"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point77",
            "x": 948.3999938964844,
            "y": 428.52500915527344,
            "connections": ["point81","point74"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point78",
            "x": 1021.3999938964844,
            "y": 422.52500915527344,
            "connections": ["point81","point75"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point79",
            "x": 1108.3999938964844,
            "y": 487.52500915527344,
            "connections": ["point80"],
            "country": "Russia",
            "capital": false
        },
        
        {
            "id": "point80",
            "x": 1136.3999938964844,
            "y": 558.5250091552734,
            "connections": [],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point81",
            "x": 977.3999938964844,
            "y": 498.52500915527344,
            "connections": [],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point82",
            "x": 900.3999938964844,
            "y": 462.52500915527344,
            "connections": [],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point83",
            "x": 755.3999938964844,
            "y": 475.52500915527344,
            "connections": ["point72","point89"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point84",
            "x": 675.3999938964844,
            "y": 464.52500915527344,
            "connections": ["point100"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point85",
            "x": 612.3999938964844,
            "y": 454.52500915527344,
            "connections": ["point98"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point86",
            "x": 530.3999938964844,
            "y": 454.52500915527344,
            "connections": ["point85","point97"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point87",
            "x": 486.3999938964844,
            "y": 449.52500915527344,
            "connections": ["point96","point86","point66","point68"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point88",
            "x": 408.3999938964844,
            "y": 471.52500915527344,
            "connections": ["point92","point96"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point89",
            "x": 837.3999938964844,
            "y": 499.52500915527344,
            "connections": ["point90","point82"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point90",
            "x": 888.3999938964844,
            "y": 522.5250091552734,
            "connections": ["point109","point77"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point91",
            "x": 336.3999938964844,
            "y": 496.52500915527344,
            "connections": ["point92","point65"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point92",
            "x": 412.3999938964844,
            "y": 535.5250091552734,
            "connections": ["point128"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point93",
            "x": 272.3999938964844,
            "y": 483.52500915527344,
            "connections": ["point91","point107","point94"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point94",
            "x": 201.39999389648438,
            "y": 473.5250015258789,
            "connections": ["point95"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point95",
            "x": 130.39999389648438,
            "y": 505.5249938964844,
            "connections": ["point115"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point96",
            "x": 480.3999938964844,
            "y": 504.5249938964844,
            "connections": ["point119","point97"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point97",
            "x": 555.3999938964844,
            "y": 512.5249938964844,
            "connections": ["point102"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point98",
            "x": 627.3999938964844,
            "y": 510.5249938964844,
            "connections": ["point84"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point99",
            "x": 660.3999938964844,
            "y": 554.5249938964844,
            "connections": ["point98","point101"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point100",
            "x": 724.3999938964844,
            "y": 531.5249938964844,
            "connections": ["point83"],
            "country": "Austria",
            "capital": false
        },
        
        {
            "id": "point101",
            "x": 700.3999938964844,
            "y": 597.5249938964844,
            "connections": ["point103","point110"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point102",
            "x": 604.3999938964844,
            "y": 545.5249938964844,
            "connections": ["point103","point98"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point103",
            "x": 628.3999938964844,
            "y": 593.5249938964844,
            "connections": ["point104"],
            "country": "Italy",
            "capital": true
        },
        
        {
            "id": "point104",
            "x": 703.3999938964844,
            "y": 656.5249938964844,
            "connections": [],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point105",
            "x": 785.3999938964844,
            "y": 530.5249938964844,
            "connections": ["point108","point100","point90"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point106",
            "x": 936.3999938964844,
            "y": 564.5249938964844,
            "connections": ["point81"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point107",
            "x": 266.3999938964844,
            "y": 551.5250091552734,
            "connections": ["point118"],
            "country": "Spain",
            "capital": true
        },
        
        {
            "id": "point108",
            "x": 799.3999938964844,
            "y": 591.5250091552734,
            "connections": ["point109"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point109",
            "x": 880.3999938964844,
            "y": 609.5250091552734,
            "connections": ["point106"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point110",
            "x": 756.3999938964844,
            "y": 651.5250091552734,
            "connections": ["point111"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point111",
            "x": 819.3999938964844,
            "y": 658.5250091552734,
            "connections": ["point108","point133"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point112",
            "x": 1000.3999938964844,
            "y": 602.5250091552734,
            "connections": ["point134","point106","point114"],
            "country": "Ottoman",
            "capital": true
        },
        
        {
            "id": "point113",
            "x": 347.3999938964844,
            "y": 578.5250091552734,
            "connections": ["point91","point92"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point114",
            "x": 1076.3999938964844,
            "y": 592.5249996185303,
            "connections": ["point135","point80"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point115",
            "x": 168.39999389648438,
            "y": 557.5250091552734,
            "connections": ["point117"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point116",
            "x": 114.39999389648438,
            "y": 600.5250091552734,
            "connections": ["point95"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point117",
            "x": 212.39999389648438,
            "y": 583.5250091552734,
            "connections": ["point107"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point118",
            "x": 282.3999938964844,
            "y": 596.5250091552734,
            "connections": ["point126","point113"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point119",
            "x": 533.3999938964844,
            "y": 571.5250091552734,
            "connections": ["point120"],
            "country": "France",
            "capital": false
        },
        
        {
            "id": "point120",
            "x": 548.3999938964844,
            "y": 659.5250091552734,
            "connections": ["point121","point129"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point121",
            "x": 541.3999938964844,
            "y": 742.5250091552734,
            "connections": ["point122","point131"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point122",
            "x": 639.3999938964844,
            "y": 722.5250091552734,
            "connections": ["point104"],
            "country": "Italy",
            "capital": false
        },
        
        {
            "id": "point123",
            "x": 148.39999389648438,
            "y": 651.5250091552734,
            "connections": ["point115","point116"],
            "country": "Britain",
            "capital": false
        },
        
        {
            "id": "point124",
            "x": 173.39999389648438,
            "y": 758.5250091552734,
            "connections": ["point125"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point125",
            "x": 205.39999389648438,
            "y": 677.5250091552734,
            "connections": ["point123","point117"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point126",
            "x": 291.3999938964844,
            "y": 654.5250091552734,
            "connections": ["point125","point127"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point127",
            "x": 358.3999938964844,
            "y": 666.5250091552734,
            "connections": ["point128"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point128",
            "x": 437.3999938964844,
            "y": 619.5250091552734,
            "connections": ["point129"],
            "country": "Spain",
            "capital": false
        },
        
        {
            "id": "point129",
            "x": 480.3999938964844,
            "y": 650.5250091552734,
            "connections": [],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point130",
            "x": 304.3999938964844,
            "y": 768.5250091552734,
            "connections": ["point124"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point131",
            "x": 424.3999938964844,
            "y": 768.5250091552734,
            "connections": ["point130"],
            "country": "",
            "capital": false
        },
        
        {
            "id": "point132",
            "x": 988.3999938964844,
            "y": 710.5250091552734,
            "connections": ["point134"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point133",
            "x": 924.3999938964844,
            "y": 738.5250091552734,
            "connections": ["point132"],
            "country": "Ottoman",
            "capital": false
        },
        
        {
            "id": "point134",
            "x": 1027.3999938964844,
            "y": 656.5250091552734,
            "connections": ["point135"],
            "country": "Ottoman",
            "capital": false
        }
    ]