document.addEventListener('DOMContentLoaded', function() {
    const inps = document.getElementById('inputs');
    const resultss = document.getElementById('res');
    const addNumber = document.getElementById('addNum');
    const changeBack = document.getElementById('changeBackground');

    //calcular suma 
    function suma() {
        const inputs = document.querySelectorAll('.numbers');
        let sum = 0;
        inputs.forEach(input => {
            const value = parseInt(input.value) || 0;
            sum += value;
        });

        resultss.textContent = sum;
    }
    //recalcular la suma cuando se cambia un input
    inps.addEventListener('input', suma);

    //nuevo numero
    addNumber.addEventListener('click', function() {
        const newNum = document.createElement('input');
        newNum.type = 'num';
        newNum.className = 'numbers';
        newNum.placeholder = `Número ${inps.children.length + 1}`;
        inps.appendChild(newNum);
        
        //event listener para recalcular suma al ingresar nuevo campo de numero
        newNum.addEventListener('input', suma); 
    });

    // cambiar color de fondo
    changeBack.addEventListener('click', function() {
        const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        document.body.style.backgroundColor = colorAleatorio;
    });
});
