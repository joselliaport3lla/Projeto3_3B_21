function verifyEuler() {
    const vertices = parseInt(document.getElementById("vertices").value);
    const edges = parseInt(document.getElementById("edges").value);
    const faces = parseInt(document.getElementById("faces").value);
    
    if (isNaN(vertices) || isNaN(edges) || isNaN(faces)) {
        document.getElementById("result").innerText = "Por favor, insira valores válidos para V, A e F.";
        return;
    }

    const eulerResult = vertices - edges + faces;
    
    if (eulerResult === 2) {
        document.getElementById("result").innerText = "O poliedro é euleriano! (V - A + F = 2)";
    } else {
        document.getElementById("result").innerText = `O poliedro NÃO é euleriano. (V - A + F = ${eulerResult})`;
    }
}
