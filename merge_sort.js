<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sorting Visualizer</title>

    <link rel="stylesheet" href="style.css">

</head>
<body>

    <header>
        <nav>
            <div class="array-inputs">
                <p>Size of the array:</p>
                <input id="a_size" type="range" min=20 max=150 step=1 value=80>
                <p>Speed of the algorithm:</p>
                <input id="a_speed" type="range" min=1 max=5 step=1 value=4>
                <button id="a_generate">Generate New Array!</button>
            </div>

            <div class="header_right">
                <p class="nav-heading">Sorting visualizer</p>

                <div class="algos">
                    <button >Selection</button>
                    <button >Bubble</button>
                    <button >Insertion</button>
                    <button >Merge</button>
                    <button >Quick</button>
                    <button style="margin-right: 0px;">Heap</button>
                </div>
            </div>

        </nav>
    </header>

    <section>

        <div id="Info_Cont1">

            <h3>TIME COMPLEXITY</h3>

            <div class="Complexity_Containers" id="Time_Complexity_Types_Container">

                <div class="Pair_Definitions">
                    <p class="Sub_Heading">Worst case:</p>
                    <p id="Time_Worst"></p>
                </div>
                
                <div class="Pair_Definitions">
                    <p class="Sub_Heading">Average case:</p>
                    <p id="Time_Average"></p>
                </div>
                
                <div class="Pair_Definitions">
                    <p class="Sub_Heading">Best case:</p>
                    <p id="Time_Best"></p>
                </div>

            </div>

        </div>

        <div id="array_container">
            
        </div>

        <div id="Info_Cont2">

            <h3>SPACE COMPLEXITY</h3>

            <div class="Complexity_Containers" id="Space_Complexity_Types_Container">

                <div class="Pair_Definitions">
                    <p class="Sub_Heading">Worst case:</p>
                    <p id="Space_Worst"></p>
                </div>
                
            </div>

        </div>

    </section>

    <footer>

    </footer>

    <script src="main.js"></script>   <!--This should be at the end of body and should be loaded before sorts.js-->
    <script src="visualization.js"></script>  <!--This should be loaded after main.js -->

    <script src="bubble_sort.js"></script>
    <script src="selection_sort.js"></script>
    <script src="insertion_sort.js"></script>
    <script src="merge_sort.js"></script>
    <script src="quick_sort.js"></script>
    <script src="heap_sort.js"></script>
</body>

</html>