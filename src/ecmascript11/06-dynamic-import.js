const button = document.getElementById('btn');

//Una función es anónima cuando no lleva un nombre
button.addEventListener("click", async function () {
    const module = await import('./module.js');
    console.log(module);
    module.hello();
})