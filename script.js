<script>
	const images = [
      "img/obj1.png",
      "img/obj2.png",
      "img/obj3.png",
	  "img/obj4.png",
    ];

    const imageElement = document.getElementById("image");

    function changeImage(index) {
      imageElement.src = images[index];
	  console.log(images[index]);
    }

    // 設定初始影像
    changeImage(0);
</script>