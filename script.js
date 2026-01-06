
// Einfacher Farbwechsel für das große Produktbild
// Muss noch eigene Bildpfade eintragen 

const swatches = document.querySelectorAll(".swatch");
const variantImage = document.getElementById("variant-image");

swatches.forEach((swatch) => {
  swatch.addEventListener("click", () => {
    swatches.forEach((s) => s.classList.remove("is-active"));
    swatch.classList.add("is-active");

    const color = swatch.dataset.color;

    // Hier deine echten Bildpfade eintragen
    if (color === "rose") {
      variantImage.src = "images/product-iceblock-rose.png";
    } else if (color === "nude") {
      variantImage.src = "images/product-iceblock-nude.png";
    } else {
      variantImage.src = "images/product-iceblock-clear.png";
    }
  });
});
