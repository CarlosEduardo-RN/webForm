

    /*renderList() {
        if (this.dadosUser == '') {
            return <ActivityIndicator size="large" color="#008B8B" />
        }
        else {
            return (
                <View style={{ width: '100%', height: '100%', justifyContent: "space-between", marginTop: 30, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Text style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}>{item.nome}</Text>}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>NOME</Text>} />
                    </View>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Text style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}>{item.email}</Text>}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>E-MAIL</Text>} />
                    </View>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Text style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}>{item.cnpj}</Text>}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>CNPJ</Text>} />
                    </View>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Text style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}>{item.tipo}</Text>}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>TIPO</Text>} />
                    </View>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Text style={{ height: 50, borderColor: 'black', borderBottomWidth: 1 }}>{item.cidade}</Text>}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>CIDADE/UF</Text>} />
                    </View>
                    <View style={{ width: '16%', padding: 5, flexWrap: 'wrap' }}>
                        <FlatList data={this.dadosUser}
                            renderItem={({ item }) => <Image source={{ uri: item.foto }} resizeMode='contain' style={{ height: 50, width: 50, borderRadius: 50 }} />}
                            keyExtractor={item => item.uid}
                            ListHeaderComponent={() => <Text style={{ fontSize: 20, color: '#008B8B', marginBottom: 10 }}>FOTO</Text>} />
                    </View>
                </View>
            )
        }
    }*/