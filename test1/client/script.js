const req = {
    async send(endpoint, method, body = null) {
        const options = {
            method: method,
            headers: {"Content-Type": "application/json"}
        }

        if (body) options.body = JSON.stringify(body);

        let response = new Request("http://localhost:3000/" + endpoint, options);

        let resp = await fetch(response);

        let reso = await resp.json();
        return reso;
    }
}

const driver = async () => {
    let p = document.createElement("p");
    p.textContent = await req.send("test", "GET");
    document.body.appendChild(p);
}

driver();