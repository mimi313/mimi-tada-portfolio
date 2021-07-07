
const clickButton = document.querySelector(".toggle-btn");

// clickButton.addEventListener("click", () => {
// 	document.querySelector("nav").classList.toggle("show-nav");
// })

$(document).ready(function () {
	//Modal
	var modals = document.querySelectorAll("#myModal");
	var modalBtns = document.querySelectorAll("#modalBtn");
	var closeBtns = document.querySelectorAll(".close");


	for (var i = 0; i < modalBtns.length; i++) {
		$(modalBtns[i]).on("click", function () {
			$(modals).css("display", "block");//Fix: shows only the third modal
			console.log("btn clicked")
		});
		// btn[i].onclick = function(e) {
		//    e.preventDefault();
		//    modal = document.querySelector(e.target.getAttribute("href"));
		//    modal.style.display = "block";
		// }
	}


	$(closeBtns).click(function () {
		$(modals).css("display", "none");
	});

	//Resume bottun
	var resume = $("#resume");
	$(resume).on("mouseover", function () {
		$(resume).html("See Resume!");
		$(resume).addClass("hover");
	});
	$(resume).on("mouseleave", function () {
		$(resume).html("Want to know me more?");
		$(resume).removeClass("hover");
	});
});

