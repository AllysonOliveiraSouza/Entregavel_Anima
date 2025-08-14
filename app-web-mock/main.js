const btnVerOutrosDados = document.getElementById("btn-ver-outros-dados");
const list = document.getElementById("list");
const btnCancelar = document.getElementById("btn-cancelar");
const spanInserirToken = document.getElementById("span-inserir-token");
const txtAcessToken = document.getElementById("txt-access-token");

LoadJson();

btnVerOutrosDados.addEventListener("click", async()=>{

    if(btnVerOutrosDados.innerHTML === "Consultar eventos do Hub docente") {
        await LoadJson();
        btnVerOutrosDados.innerHTML = "Consultar eventos do Microsoft Graph API";
    }
    else if(btnVerOutrosDados.innerHTML === "Confirmar"){
        await LoadMsGraphAPI(txtAcessToken.value);
        btnVerOutrosDados.innerHTML = "Consultar eventos do Hub docente";
        EscondeControles();
        btnVerOutrosDados.classList.remove("bg-sucess");
    }else{
        btnVerOutrosDados.classList.add("bg-sucess");
        btnVerOutrosDados.innerHTML = "Confirmar";
        ExibeControles();
    }
});

btnCancelar.addEventListener("click", async() =>{
    await LoadJson();
    EscondeControles();
    btnVerOutrosDados.classList.remove("bg-sucess");
    btnVerOutrosDados.innerHTML = "Consultar eventos do Microsoft Graph API";   
});


async function LoadMsGraphAPI(token) {

    try {

    const resp = await fetch("https://graph.microsoft.com/v1.0/me/events?$top=10&$orderby=start/dateTime",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'Prefer': 'outlook.timezone="E. South America Standard Time"'
        }
    });

    const json = await resp.json();
    list.innerHTML = "";
    
    if(json?.value.length === 0){
        list.innerHTML = `<span class="fw-bold "style="font-size: 20px">Não há eventos atualmente !</span>`;
    }
    else{
        CriaCards(json);
        AddEventListenerCards();
    }
        
    } catch (error) {    
        list.innerHTML = `<span class="fw-bold color-red" style="font-size: 20px">Erro ao carregar dados, verifique o acess token, ou entre em contato com o administrador do sistema</span>`;    
    }
}

async function LoadJson() {
    const resp = await fetch("./data/sample_events.json");
    const json = await resp.json();
    list.innerHTML = "";
    CriaCards(json);
    AddEventListenerCards();
    EscondeControles();
}

function CriaCards(json){

json.value.forEach((ev) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <div class="title flex-align-center color-purple fw-bold"><img src="./img/event.svg" alt="calendário evento" class="mr-5px icon-calendar">${ev.subject}</div>
    <div class="meta">
    <div><strong>Início:</strong> ${GetDate(ev.start.dateTime,ev.start.timeZone)}</div>
    <div><strong>Fim:</strong> ${GetDate(ev.end.dateTime,ev.end.timeZone)}</div>

    <div><strong>Local:</strong> ${ev.location.displayName}</div>
    <div><strong>Organizador:</strong> ${ev.organizer.emailAddress.name} (${ev.organizer.emailAddress.address})</div>
    </div>
`;
    list.appendChild(div);
});

}

function GetDate(fullDate,timezone){
  try {
    const dateSplit = fullDate.split("T");
    const date = dateSplit[0];
    const hour = dateSplit[1];
    
    const auxDateSplit = date.split("-");
    const hourSplit = hour.split(":");
    
    const viewHour = `${hourSplit[0]}:${hourSplit[1]}h (Fuso horário: ${timezone})`;
    
    return `${auxDateSplit[2]}/${auxDateSplit[1]}/${auxDateSplit[0]} - ${viewHour}`;
  } 
  catch {
    return "";
  }
}

function AddEventListenerCards(){

    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        const divCard = card.children[0];

        card.addEventListener("mouseover", () => {
            divCard.classList.remove("color-purple");
            divCard.classList.add("color-white");
        });

        card.addEventListener("mouseout", () => {
            divCard.classList.remove("color-white");
            divCard.classList.add("color-purple");
        });
    });
}

function EscondeControles(){
    btnCancelar.classList.add("d-none");
    spanInserirToken.classList.add("d-none");
    txtAcessToken.classList.add("d-none");
}

function ExibeControles(){
    btnCancelar.classList.remove("d-none");
    spanInserirToken.classList.remove("d-none");
    txtAcessToken.classList.remove("d-none");
}


