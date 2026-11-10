const display = document.querySelector("#display");

function adicionar(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function apagar() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value);
    } catch (erro) {
        display.value = "Erro";
    }
}

function porcentagem() {
    try {
        display.value = eval(display.value) / 100;
    } catch (erro) {
        display.value = "Erro";
    }
}

function raizQuadrada() {
    try {
        const numero = eval(display.value);

        if (numero < 0) {
            display.value = "Erro";
            return;
        }

        display.value = Math.sqrt(numero);
    } catch (erro) {
        display.value = "Erro";
    }
}

function elevarAoQuadrado() {
    try {
        const numero = eval(display.value);

        display.value = numero ** 2;
    } catch (erro) {
        display.value = "Erro";
    }
}

document.addEventListener("keydown", function (evento) {

    const tecla = evento.key;

    // Números
    if (tecla >= "0" && tecla <= "9") {
        adicionar(tecla);
    }

    // Operações
    else if (["+", "-", "*", "/"].includes(tecla)) {
        adicionar(tecla);
    }

    // Ponto decimal
    else if (tecla === ".") {
        adicionar(".");
    }

    // Enter para calcular
    else if (tecla === "Enter") {
        calcular();
    }

    // Backspace para apagar
    else if (tecla === "Backspace") {
        apagar();
    }

    // Escape para limpar
    else if (tecla === "Escape") {
        limpar();
    }

});

if ("serviceWorker" in navigator) {

    window.addEventListener("load", function () {

        navigator.serviceWorker.register("service-worker.js")
            .then(function () {
                console.log("Aplicativo registrado com sucesso!");
            })
            .catch(function (erro) {
                console.log("Erro ao registrar o aplicativo:", erro);
            });

    });

}