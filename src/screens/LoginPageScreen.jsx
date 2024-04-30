import { View } from "react-native-web";
import { styles } from "../config/style";
import { TextInput } from "react-native-paper";


export default function LoginPageScreen() {
    const [email, setEmail] = useState("");
    const [senha, setsenha] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.container_inner}>
                <Text>Página de Login</Text>
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
                <button mode="contained">Login</button>
                <Button
                    onPress={() => navigation.navigate("RegisterScreen")}
                >Fazer Cadastro</Button>
            </View>
        </View>
    );
}