function colorchanger(){

    var select = document.getElementById("menu").value;

    if (select == "0")

		{
			document.getElementById("motorcolor").style.backgroundColor = "blue";

		}

	else if (select == "1")

		{

			document.getElementById("motorcolor").style.backgroundColor = "lightblue";

		}

    else if (select == "2")

		{

			document.getElementById("motorcolor").style.backgroundColor = "black";

		}

    else if (select == "3")

		{

			document.getElementById("motorcolor").style.backgroundColor = "yellow";

		}

    else if (select == "4")

		{

			document.getElementById("motorcolor").style.backgroundColor = "gray";

		}

    else if(select == "5")

		{

			document.getElementById("motorcolor").style.backgroundColor = "green";

		}

   

}







function rst(){

    document.getElementById("motorcolor").style.backgroundColor = "white";

}






