using System.Text.Json;

#region Global Vars

string? capturaTeclado = "";
bool visualizouEventos = false;
var eventos = CarregaDados();

#endregion

#region Main

Console.WriteLine("****** APP HUB DOCENTE ® ******");
Menu();

while (capturaTeclado!="1" || capturaTeclado!="2")
{
    try
    {
        capturaTeclado = Console.ReadLine();

        if (capturaTeclado=="1")
        {
            visualizouEventos=true;
            Console.WriteLine("****** HUB DOCENTE - PRÓXIMOS EVENTOS ******");
            MostraEventos();
            Menu();
        }
        else if (capturaTeclado=="2")
        {
            Console.WriteLine("OBRIGADO POR UTILIZAR NOSSO SISTEMA :)");
            return;
        }
        else
        {
            Console.WriteLine("Selecione uma opção válida !");
            Menu();
        }
    }
    catch
    {
        capturaTeclado="";
        Console.WriteLine("Selecione uma opção válida !");
        Menu();
    }
}

#endregion

#region Functions

JsonElement CarregaDados()
{
    string caminhoJson = Path.Combine(AppContext.BaseDirectory, "../../..", "data", "sample_events.json");
    var jsonData = File.ReadAllText(caminhoJson);
    return JsonDocument.Parse(jsonData).RootElement.GetProperty("value");
}
void Menu()
{
    string auxMsg = (!visualizouEventos) ? "para ver os próximos eventos" : "para ver os eventos novamente";
    Console.WriteLine("-------------------------------------");
    Console.WriteLine("Selecione uma das opções à seguir :\n");
    Console.WriteLine($"Digite 1 - {auxMsg}\nDigite 2 - para sair\n");
}
string ObterData(string dataCompleta, string fusoHorario)
{
    try
    {
        string[] dataSplit = dataCompleta.Split("T");
        string data = dataSplit[0];
        string hora = dataSplit[1];
        string[] auxDataSplit = data.Split("-");
        string[] horaSplit = hora.Split(":");
        string horaApresentar = $"{horaSplit[0]}:{horaSplit[1]}h(Fuso horário: {fusoHorario})";

        return $"{auxDataSplit[2]}/{auxDataSplit[1]}/{auxDataSplit[0]} - {horaApresentar}";
    }
    catch
    {
        return "";
    }
}

void MostraEventos()
{
    foreach (var ev in eventos.EnumerateArray())
    {
        var titulo = ev.GetProperty("subject").GetString();
        var inicio = ObterData(ev.GetProperty("start").GetProperty("dateTime").GetString()!, ev.GetProperty("start").GetProperty("timeZone").GetString()!);
        var fim = ObterData(ev.GetProperty("end").GetProperty("dateTime").GetString()!, ev.GetProperty("end").GetProperty("timeZone").GetString()!);
        var local = ev.GetProperty("location").GetProperty("displayName").GetString();
        var equipe = ev.GetProperty("organizer").GetProperty("emailAddress").GetProperty("name").GetString();
        var email = ev.GetProperty("organizer").GetProperty("emailAddress").GetProperty("address").GetString();

        Console.WriteLine($"\nEVENTO: {titulo}\n\nInício: {inicio}\nAté: {fim} \nLocal: {local}\nOrganizador: {equipe}\n({email})");
    }
}

#endregion












