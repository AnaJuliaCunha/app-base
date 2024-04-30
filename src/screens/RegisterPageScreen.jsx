import { View } from "react-native-web";
import { styles } from "../config/style";
import { TextInput } from "react-native-paper";


export default function RegisterPageScreen() {
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");
    const [repetirsenha, setRepetirsenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text>Página de Registro</Text>
                <TextInput
                    label={"Email"}
                    placeholder={"Digite seu email"}
                    value={email}
                    onChangeText={setEmail}>
                </TextInput>
                <TextInput
                    label={"Senha"}
                    placeholder={"Digite sua senha"}
                    value={senha}
                    onChangeText={setsenha}
                    secureTextEntry>
                </TextInput>
                <TextInput
                    label={"Repetir senha"}
                    placeholder={"Repita sua senha"}
                    value={repetirsenha}
                    onChangeText={setRepetirsenha}
                    secureTextEntry>
                </TextInput>
                <button mode="contained">Login</button>
                <button>Fazer cadastro</button>
            </View>
        </View>
    );
}