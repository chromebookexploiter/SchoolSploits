/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.key == "x") {
    let code = prompt("Eval:");
    if (code.startsWith("javascript:")) {
      code = code.substring(11);
    }
    eval(code);
  }
});

document.addEventListener("keydown", function (e) {
	if (e.key == "~" && e.ctrlKey) {
		var t = window.open("", "_blank", "width=500,height=300");
		var e = t.document.createElement("iframe");
		(e.src = "//ustuff.github.io/uRun/popup.html"),
			(e.style.cssText = "width:100%; height:100%; border:none;"),
			t.document.body.appendChild(e),
			t.document.title = "uRun",
			t.addEventListener("message", function (e) {
				e.data.toString().startsWith("execute:") && (eval(e.data.toString().replace("execute:", "")), t.close());
			});
	}
});
