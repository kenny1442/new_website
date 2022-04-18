<script>
dt = new Array("red", "blue", "green", "purple", "tan", "#0000A0", "#A00000", "#00A000", "#00A0A0", "#A000A0", "#A0A000");
j = 0;
function cl() {
	var a = document.getElementsByTagName('a');
	for(i=0; i<a.length; i++) a[i].style.color=dt[j];
    j++;
	if (j>dt.length) j=0;
	setTimeout("cl()",500);}
cl();
</script>