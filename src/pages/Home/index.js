
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list =[
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "10/09/2022",
    type: 0 // despesas
  },

  {
    id: 2,
    label: "PIX Cliente",
    value: "3.500,90",
    date: "17/09/2022",
    type: 1 // receitas / entradas
  },

  {
    id: 3,
    label: "Salario",
    value: "7.500,00",
    date: "07/09/2022",
    type: 1 // receitas / entradas
  },

]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name="Danilo Joelma" />
      <Balance saldo="9.297.90" gastos="-527,0"/>

      <Actions/>

      <Text style={styles.title}>Ultimas  Movimentações</Text>

      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item} />}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
   
  },

  title:{
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list:{
    marginStart: 14,
    marginEnd: 14,
  }
});