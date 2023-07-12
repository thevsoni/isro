
const input = document.querySelector(".filter .input input")
const options = document.querySelector(".filter .options")
const centersContainer = document.querySelector(".centers")
options.addEventListener("click", async (e) => {
    const res = await fetch("https://isro.vercel.app/api/centres")
    let centers = await res.json()
    centers = centers.centres;
    let basedOn = e.target.textContent === 'CITY' ? 'Place' : (e.target.textContent === 'STATE' ? 'State' : 'name')
    const filterCenters = centers.filter((e) => {
        if (e[basedOn].toLowerCase() === input.value.toLowerCase()) {
            return true;
        }
        else {
            if (input.value === '') {
                return true
            }
            return false;
        }
    })
    centersContainer.innerHTML = ''
    render(filterCenters)


})
function render(centers) {
    // console.log(centers)

    centers?.map((e) => {
        const centerChild = document.createElement("table");
        centerChild.className = 'center';
        centerChild.innerHTML = `
            <tr>
                <th class='childOfTr'>CENTER</th>
                <th class='childOfTr'>CITY</th>
                <th class='childOfTr'>STATE</th>
            </tr>
            <tr>
                <td class='childOfTr'>${e.name}</td>
                <td class='childOfTr'>${e.Place}</td>
                <td class='childOfTr'>${e.State}</td>
            </tr>
        `
        // centerChild.textContent = e;
        centersContainer.appendChild(centerChild);
        // console.log(centerChild)
    })
}
