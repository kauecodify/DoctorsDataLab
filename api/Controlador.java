import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controlador {

    @PostMapping(/"api/receptorData")
    public String receberDados(@RequestBody Dados dados) {
        return "Dados recebidos com sucesso";
    }
}